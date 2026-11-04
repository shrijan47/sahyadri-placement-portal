import base64
import zlib
import re
import sys
import os

def parse_pdf(path):
    with open(path, 'rb') as f:
        data = f.read()
    text = []
    idx = 0
    while True:
        s_idx = data.find(b'stream', idx)
        if s_idx == -1:
            break
        nl = data.find(b'\n', s_idx)
        e_idx = data.find(b'endstream', nl)
        stream_bytes = data[nl+1:e_idx].strip()
        idx = e_idx + 9
        if not stream_bytes.startswith(b'<~'):
            stream_bytes = b'<~' + stream_bytes
        if not stream_bytes.endswith(b'~>'):
            stream_bytes = stream_bytes + b'~>'
        try:
            decomp = zlib.decompress(base64.a85decode(stream_bytes, adobe=True))
            # match (string) Tj or [ ... ] TJ
            tokens = re.findall(rb'\(((?:[^()\\]|\\.)*)\)\s*Tj', decomp)
            for tok in tokens:
                s = tok.replace(b'\\(', b'(').replace(b'\\)', b')').replace(b'\\\\', b'\\')
                text.append(s.decode('latin1', errors='ignore'))
        except Exception:
            pass
    return text

if __name__ == '__main__':
    path = sys.argv[1] if len(sys.argv) > 1 else 'public/company-papers/TCS_Test_1.pdf'
    lines = parse_pdf(path)
    print(f"=== {path}: {len(lines)} lines ===")
    for l in lines[:50]:
        print(l)

