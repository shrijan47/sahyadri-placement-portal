#!/usr/bin/env python3
import json
import os
import sys

# Define 20 exam codes and their metadata:
# 1. exam-dsa-midsem (Core Technical, neg: 0.25)
# 2. exam-quant-drill-1 (Quantitative, neg: 0.25)
# 3. exam-logical-syllogism (Logical, neg: 0.25)
# 4. exam-verbal-vocab-grammar (Verbal, neg: 0)
# 5. exam-python-oops-eval (Core Technical, neg: 0.25)
# 6. exam-dbms-sql-query (Core Technical, neg: 0.25)
# 7. exam-os-process-threads (Core Technical, neg: 0.25)
# 8. exam-cn-tcp-ip (Core Technical, neg: 0.25)
# 9. exam-quant-tsd-work (Quantitative, neg: 0.25)
# 10. exam-logical-blood-directions (Logical, neg: 0)
# 11. exam-verbal-para-jumbles (Verbal, neg: 0.25)
# 12. exam-web-fullstack-mcq (Core Technical, neg: 0.25)
# 13. exam-tcs-nqt-mock (Quantitative, neg: 0.25)
# 14. exam-infosys-springboard-mock (Logical, neg: 0)
# 15. exam-wipro-elite-mock (Core Technical, neg: 0.25)
# 16. exam-accenture-cognitive (Logical, neg: 0)
# 17. exam-scem-dsa-oct (Core Technical, neg: 0.25)
# 18. exam-scem-c30-oct (Logical, neg: 0.25)
# 19. exam-scem-wed-oct (Quantitative, neg: 0.25)
# 20. exam-scem-cod-oct (Core Technical, neg: 0.25)

print("Writing python question generator...")
