#!/usr/bin/env python3
import json
import os
import sys

# Add scripts directory to path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from data_exams_part1 import EXAMS_PART1
from data_exams_part2 import EXAMS_PART2
from data_exams_part3 import EXAMS_PART3
from data_exams_part4 import EXAMS_PART4

all_exams = {}
all_exams.update(EXAMS_PART1)
all_exams.update(EXAMS_PART2)
all_exams.update(EXAMS_PART3)
all_exams.update(EXAMS_PART4)

print(f"Total exams collected: {len(all_exams)}")
total_questions = 0

for exam_id, q_list in all_exams.items():
    if len(q_list) != 20:
        print(f"ERROR: {exam_id} has {len(q_list)} questions instead of 20!")
        sys.exit(1)
    total_questions += len(q_list)
    for q in q_list:
        assert len(q["options"]) == 4, f"Options length != 4 in {q['id']}"
        assert q["correctAnswer"] in [0, 1, 2, 3], f"Invalid correctAnswer in {q['id']}"
        assert len(q["questionText"].strip()) > 5, f"Short questionText in {q['id']}"
        assert len(q["explanation"].strip()) > 5, f"Short explanation in {q['id']}"

print(f"All {len(all_exams)} exams validated! Total questions: {total_questions}")

# Write to src/data/examQuestions.ts
output_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'src', 'data', 'examQuestions.ts')

ts_content = f"""// AUTO-GENERATED DEDICATED QUESTION BANKS FOR ALL 20 EXAMS
// Total Exams: {len(all_exams)}
// Total Unique Questions: {total_questions} (20 questions per exam)
// Zero cycling or question reuse across exams.

import type {{ ExamQuestion }} from '../types';

export const DEDICATED_EXAM_QUESTIONS: Record<string, ExamQuestion[]> = {json.dumps(all_exams, indent=2)};

export const getTotalDedicatedQuestionsCount = (): number => {{
  return Object.values(DEDICATED_EXAM_QUESTIONS).reduce((acc, qList) => acc + qList.length, 0);
}};
"""

with open(output_path, 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"Successfully wrote {output_path} with {total_questions} questions across {len(all_exams)} exams!")

