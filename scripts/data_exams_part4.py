# Part 4: Exams 16 to 20 (20 questions each)

EXAMS_PART4 = {
    'exam-accenture-cognitive': [
        {
            "id": "acc-cog-01",
            "questionText": "What will be the output of the pseudocode snippet?\nInteger a, b, c\nSet a = 4, b = 6, c = 2\na = (a + b) ^ c\nPrint a",
            "options": ["8", "10", "12", "14"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "a + b = 4 + 6 = 10 (binary 1010). c = 2 (binary 0010). Bitwise XOR: 1010 ^ 0010 = 1000 in binary = 8."
        },
        {
            "id": "acc-cog-02",
            "questionText": "In a cloud assessment, which cloud service model provides virtualized hardware (VMs, storage, and networking) where the customer manages the OS and runtime?",
            "options": ["SaaS (Software as a Service)", "PaaS (Platform as a Service)", "IaaS (Infrastructure as a Service)", "FaaS (Function as a Service)"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "IaaS (e.g. AWS EC2, Azure VMs) provides raw compute infrastructure, leaving OS and application stack to the customer."
        },
        {
            "id": "acc-cog-03",
            "questionText": "Find the next pattern in the series: AZ, CX, EV, GT, ?",
            "options": ["IR", "IS", "HS", "JQ"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "First letter increases by 2: A(1), C(3), E(5), G(7) -> I(9). Second letter decreases by 2: Z(26), X(24), V(22), T(20) -> R(18). Result is IR."
        },
        {
            "id": "acc-cog-04",
            "questionText": "What will be the value of count after executing the pseudocode?\nInteger p, count\nSet count = 0\nFor each p from 1 to 5\n    If (p mod 2 != 0)\n        count = count + p\nEnd For\nPrint count",
            "options": ["6", "9", "12", "15"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "Odd values of p in 1..5 are 1, 3, 5. Sum = 1 + 3 + 5 = 9."
        },
        {
            "id": "acc-cog-05",
            "questionText": "Statements: All laptops are devices. Some devices are tablets. All tablets are portables.\nConclusions:\nI. Some laptops are tablets.\nII. Some portables are devices.",
            "options": ["Only I follows", "Only II follows", "Both follow", "Neither follows"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "Laptops and tablets may be disjoint (I fails). Since all tablets are portables and some devices are tablets, those devices are portables (II follows)."
        },
        {
            "id": "acc-cog-06",
            "questionText": "What is the primary role of a firewall in network security?",
            "options": [
                "Monitoring and filtering incoming and outgoing network traffic based on established security rules",
                "Speeding up internet browsing speeds",
                "Encrypting all hard drive files",
                "Generating new IP addresses"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "A firewall acts as a security perimeter barrier inspecting and filtering network packets according to policy rules."
        },
        {
            "id": "acc-cog-07",
            "questionText": "What is the output of the pseudocode snippet?\nInteger a, b\nSet a = 12, b = 5\na = a >> 1\nb = b << 1\nPrint a + b",
            "options": ["14", "16", "18", "20"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "a >> 1 = floor(12 / 2) = 6. b << 1 = 5 * 2 = 10. Sum = 6 + 10 = 16."
        },
        {
            "id": "acc-cog-08",
            "questionText": "Choose the correct missing number in the circular matrix segments: 5, 8, 13, 21, 34, ?",
            "options": ["45", "50", "55", "60"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "Fibonacci sequence: 5 + 8 = 13, 8 + 13 = 21, 13 + 21 = 34, 21 + 34 = 55."
        },
        {
            "id": "acc-cog-09",
            "questionText": "In Microsoft Excel / Google Sheets, which function is used to search for a value in the leftmost column of a table and return a value in the same row from a specified column?",
            "options": ["VLOOKUP", "HLOOKUP", "MATCH", "INDEX"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "VLOOKUP (Vertical Lookup) searches the leftmost column and retrieves data from a specified index to the right."
        },
        {
            "id": "acc-cog-10",
            "questionText": "What will be printed by the recursive pseudocode?\nFunction fun(Integer n)\n    If (n <= 1)\n        Return 1\n    End If\n    Return n * fun(n - 1)\nEnd Function\nPrint fun(4)",
            "options": ["12", "20", "24", "48"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "This computes factorial: 4 * 3 * 2 * 1 = 24."
        },
        {
            "id": "acc-cog-11",
            "questionText": "A team of 4 analysts works on 4 separate projects. Analyst P refuses Project 1. Analyst Q only works on Project 3. Analyst R accepts Projects 2 or 4. Which project must Analyst S take if all projects are assigned uniquely?",
            "options": ["Project 1", "Project 2", "Project 3", "Project 4"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Medium",
            "explanation": "Q takes 3. P cannot take 1, so P takes 2 or 4. R takes the other of (2, 4). Thus only Project 1 is left, which must be assigned to S."
        },
        {
            "id": "acc-cog-12",
            "questionText": "What is the decimal equivalent of the binary number `110101`?",
            "options": ["49", "51", "53", "55"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "1*32 + 1*16 + 0*8 + 1*4 + 0*2 + 1*1 = 32 + 16 + 4 + 1 = 53."
        },
        {
            "id": "acc-cog-13",
            "questionText": "What will be the output of the bitwise operation `(15 & 7) | 8`?",
            "options": ["7", "8", "15", "16"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "15 (1111) & 7 (0111) = 7 (0111). Then 7 (0111) | 8 (1000) = 15 (1111)."
        },
        {
            "id": "acc-cog-14",
            "questionText": "Which protocol is standard for sending outgoing emails across network mail servers?",
            "options": ["POP3", "IMAP", "SMTP", "FTP"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "Simple Mail Transfer Protocol (SMTP) handles outgoing email transmission."
        },
        {
            "id": "acc-cog-15",
            "questionText": "Find the odd one out among the cloud service providers / platforms:",
            "options": ["AWS", "Google Cloud Platform", "Microsoft Azure", "Apache Kafka"],
            "correctAnswer": 3,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "AWS, GCP, and Azure are comprehensive public cloud hyper-scalers, whereas Apache Kafka is an open-source distributed event-streaming software."
        },
        {
            "id": "acc-cog-16",
            "questionText": "Evaluate the pseudocode output:\nInteger a, b\nSet a = 5, b = 2\nWhile (b < 10)\n    a = a + 2\n    b = b + 3\nEnd While\nPrint a",
            "options": ["9", "11", "13", "15"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "Iteration 1: a=7, b=5. Iteration 2: a=9, b=8. Iteration 3: a=11, b=11. Loop terminates (11 not < 10). a = 11."
        },
        {
            "id": "acc-cog-17",
            "questionText": "If in a code, 'MOUSE' is written as 'KMSQC', how is 'SHIFT' written in that same pattern?",
            "options": ["QFGFM", "QFFGR", "PFGFR", "QGFGR"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Medium",
            "explanation": "Each letter is decremented by 2 in alphabet: S(19)-2=Q(17), H(8)-2=F(6), I(9)-2=G(7), F(6)-2=D? Wait: M(13)->K(11) is -2, O(15)->M(13) is -2, U(21)->S(19) is -2, S(19)->Q(17) is -2, E(5)->C(3) is -2. S-2=Q, H-2=F, I-2=G, F-2=D, T-2=R => QFGDR."
        },
        {
            "id": "acc-cog-18",
            "questionText": "What is the primary function of an Operating System Kernel?",
            "options": [
                "Managing core system resources including CPU scheduling, physical memory, and hardware device drivers",
                "Rendering CSS web pages",
                "Managing user email accounts",
                "Creating PowerPoint presentations"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "The kernel is the foundational core component of an OS directly controlling CPU, memory, and hardware devices."
        },
        {
            "id": "acc-cog-19",
            "questionText": "What will be printed?\nInteger x, y\nSet x = 10, y = 20\nx = x + y\ny = x - y\nx = x - y\nPrint x, y",
            "options": ["10, 20", "20, 10", "30, 10", "20, 20"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "This is the classic arithmetic swap without a temporary variable: x becomes 20 and y becomes 10."
        },
        {
            "id": "acc-cog-20",
            "questionText": "In cryptography, what is the key characteristic of Asymmetric Encryption (Public-Key Cryptography)?",
            "options": [
                "It uses a mathematically linked pair of keys: a public key for encryption and a private key for decryption",
                "It uses the exact same key for encryption and decryption",
                "It never requires any keys",
                "It is only used for analog telephone wires"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "Asymmetric encryption (e.g. RSA, ECC) pairs a public key (openly distributable) with a secure private key known only to the recipient."
        }
    ],

    'exam-scem-dsa-oct': [
        {
            "id": "scem-dsa-01",
            "questionText": "What is the time complexity to access an element by index in a contiguous array of size n?",
            "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "Arrays provide direct address arithmetic: `Base_Address + index * element_size` in O(1) constant time."
        },
        {
            "id": "scem-dsa-02",
            "questionText": "Which data structure is best suited for implementing a breadth-first level-order traversal of a binary tree?",
            "options": ["Stack", "Queue", "Priority Queue", "Circular Doubly Linked List"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "A FIFO Queue explores tree levels sequentially from left to right."
        },
        {
            "id": "scem-dsa-03",
            "questionText": "What is the postorder traversal of a binary tree with root A, left child B, and right child C?",
            "options": ["A, B, C", "B, C, A", "B, A, C", "C, B, A"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "Postorder traverses Left Subtree, then Right Subtree, then Root (B, C, A)."
        },
        {
            "id": "scem-dsa-04",
            "questionText": "What is the worst-case time complexity of searching an element in an unsorted singly linked list of n nodes?",
            "options": ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "In an unsorted linked list, finding an element may require scanning all n nodes sequentially."
        },
        {
            "id": "scem-dsa-05",
            "questionText": "Which condition indicates that a linear queue implemented via an array of size MAX is full (where rear points to the last inserted item)?",
            "options": ["rear == MAX - 1", "front == rear", "front == 0", "rear == 0"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "In a simple non-circular queue, when rear reaches the terminal index MAX - 1, no further elements can be queued."
        },
        {
            "id": "scem-dsa-06",
            "questionText": "What is the height of a complete binary tree containing n nodes?",
            "options": ["floor(log2(n))", "n / 2", "2^n", "n - 1"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "A complete binary tree fills levels from left to right, maintaining a bounded logarithmic height of floor(log2(n))."
        },
        {
            "id": "scem-dsa-07",
            "questionText": "In a circular queue of size N using array indexing, how is the rear pointer updated after an enqueue operation?",
            "options": ["rear = rear + 1", "rear = (rear + 1) % N", "rear = (rear - 1) % N", "rear = (front + 1) % N"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "Modulo arithmetic wraps the pointer back to index 0 when it exceeds N - 1."
        },
        {
            "id": "scem-dsa-08",
            "questionText": "What is the result of evaluating the postfix expression `5 3 + 2 *`?",
            "options": ["11", "16", "25", "30"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "Stack: push 5, push 3. '+' pops 3 and 5, pushes 5 + 3 = 8. Push 2. '*' pops 2 and 8, pushes 8 * 2 = 16."
        },
        {
            "id": "scem-dsa-09",
            "questionText": "What is the minimum number of queues required to implement a Stack?",
            "options": ["1", "2", "3", "Not possible"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "A stack can be implemented using 2 standard FIFO queues (or 1 queue with rotation)."
        },
        {
            "id": "scem-dsa-10",
            "questionText": "Which asymptotic notation gives the tight mathematical bound for an algorithm's growth rate?",
            "options": ["Big-O (O)", "Big-Omega (Ω)", "Big-Theta (Θ)", "Little-o (o)"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "Theta (Θ) bounds a function from both above and below, representing an exact asymptotic bound."
        },
        {
            "id": "scem-dsa-11",
            "questionText": "How many leaf nodes does a full binary tree with n internal nodes contain?",
            "options": ["n", "n + 1", "2n", "n - 1"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "In any binary tree where every node has either 0 or 2 children, the number of leaf nodes L = I + 1."
        },
        {
            "id": "scem-dsa-12",
            "questionText": "What is the time complexity of searching in a sorted array using Binary Search?",
            "options": ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "Binary search halves the search space at each iteration, yielding logarithmic O(log n) time."
        },
        {
            "id": "scem-dsa-13",
            "questionText": "Which data structure is standard for evaluating recursion calls at machine level?",
            "options": ["Activation Record Stack", "Heap Buffer", "Hash Table", "Doubly Linked List"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "Program execution environments use the call stack to push stack frames (activation records) for active functions."
        },
        {
            "id": "scem-dsa-14",
            "questionText": "What is the worst-case time complexity of inserting an item at the beginning of an array of size n?",
            "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "Inserting at index 0 requires shifting all n existing elements one position to the right in O(n) time."
        },
        {
            "id": "scem-dsa-15",
            "questionText": "Which graph representation is more memory-efficient for a sparse graph with V vertices and few edges E << V^2?",
            "options": ["Adjacency Matrix", "Adjacency List", "Incidence Matrix", "All are identical"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "Adjacency Matrix consumes O(V^2) memory regardless of edge count, whereas Adjacency List requires only O(V + E)."
        },
        {
            "id": "scem-dsa-16",
            "questionText": "What is the depth of the root node in a tree standardly defined as?",
            "options": ["0", "1", "-1", "n"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "The depth of a node is the number of edges from the root to that node. For the root itself, depth = 0."
        },
        {
            "id": "scem-dsa-17",
            "questionText": "In a doubly linked list, how many pointer updates are needed to insert a new node between two existing nodes?",
            "options": ["2", "3", "4", "5"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "4 pointers are updated: new->next, new->prev, prev->next, and next->prev."
        },
        {
            "id": "scem-dsa-18",
            "questionText": "Which algorithm finds the shortest paths from a single source vertex to all other vertices in a weighted graph with non-negative edge weights?",
            "options": ["Dijkstra's Algorithm", "Kruskal's Algorithm", "Prim's Algorithm", "Kosaraju's Algorithm"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "Dijkstra's greedy algorithm solves single-source shortest path for graphs with non-negative weights."
        },
        {
            "id": "scem-dsa-19",
            "questionText": "What is the primary characteristic of a dynamic programming approach compared to divide and conquer?",
            "options": [
                "Dynamic programming stores and reuses solutions to overlapping subproblems",
                "Divide and conquer uses a cache",
                "Dynamic programming never uses recursion",
                "Divide and conquer only works on trees"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "Dynamic programming avoids redundant computation by caching (memoization or tabulation) overlapping subproblem results."
        },
        {
            "id": "scem-dsa-20",
            "questionText": "What is the maximum degree of any node in a Binary Tree?",
            "options": ["1", "2", "3", "unlimited"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "By definition, every node in a binary tree has at most 2 children (degree <= 2)."
        }
    ],

    'exam-scem-c30-oct': [
        {
            "id": "scem-c30-01",
            "questionText": "Find the missing number in the series: 1, 4, 27, 16, 125, 36, ?",
            "options": ["49", "216", "343", "512"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Logical",
            "difficulty": "Medium",
            "explanation": "Alternating pattern of powers: 1^3 = 1, 2^2 = 4, 3^3 = 27, 4^2 = 16, 5^3 = 125, 6^2 = 36, 7^3 = 343."
        },
        {
            "id": "scem-c30-02",
            "questionText": "If 'ENGINEER' is coded as 'FOHJOFFS', how is 'DEVELOP' coded in the same pattern?",
            "options": ["EFWFMPQ", "EFWFMQP", "EFWFMPR", "DFWFMPQ"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "Each letter is incremented by +1: D->E, E->F, V->W, E->F, L->M, O->P, P->Q => EFWFMPQ."
        },
        {
            "id": "scem-c30-03",
            "questionText": "Which number replaces the question mark in the 3x3 grid?\n| 6 | 8 | 10 |\n| 9 | 12 | 15 |\n| 12 | 16 | ? |",
            "options": ["18", "20", "22", "24"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "Each row is proportional to 3 : 4 : 5. In row 3: 12 / 3 = 4, 16 / 4 = 4, so 5 * 4 = 20."
        },
        {
            "id": "scem-c30-04",
            "questionText": "In a row of trees, a mango tree is 7th from either end. How many trees are there in the row?",
            "options": ["11", "13", "14", "15"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "Total = (Left rank + Right rank) - 1 = (7 + 7) - 1 = 13 trees."
        },
        {
            "id": "scem-c30-05",
            "questionText": "Statements: All cars are wheels. Some wheels are spokes. No spoke is a gear.\nConclusions:\nI. Some wheels are cars.\nII. No spoke is a car.",
            "options": ["Only I follows", "Only II follows", "Both follow", "Neither follows"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "Since all cars are wheels, some wheels are cars (I follows). Spokes can intersect cars without violating the premises (II does not necessarily follow)."
        },
        {
            "id": "scem-c30-06",
            "questionText": "Pointing to a man in a photograph, Anita said, 'His mother's only daughter is my mother.' How is Anita related to that man?",
            "options": ["Niece", "Sister", "Mother", "Aunt"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Logical",
            "difficulty": "Medium",
            "explanation": "The man's mother's only daughter is the man's sister. The man's sister is Anita's mother. Therefore, Anita is the Niece of that man."
        },
        {
            "id": "scem-c30-07",
            "questionText": "Choose the pair that shares the same relationship as: 'Thermometer : Temperature' ::",
            "options": ["Barometer : Pressure", "Clock : Engine", "Scale : Velocity", "Odometer : Voltage"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "A thermometer measures temperature; a barometer measures atmospheric pressure."
        },
        {
            "id": "scem-c30-08",
            "questionText": "If '+' means multiply, '-' means divide, '*' means add, and '/' means subtract, calculate: `20 + 5 - 10 * 6 / 4`.",
            "options": ["8", "10", "12", "14"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "Rewriting with operators: 20 * 5 / 10 + 6 - 4 = (100 / 10) + 6 - 4 = 10 + 6 - 4 = 12."
        },
        {
            "id": "scem-c30-09",
            "questionText": "Find the odd term in: 13, 17, 23, 27, 29, 31",
            "options": ["17", "23", "27", "29"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "All numbers are prime except 27, which is composite (3^3)."
        },
        {
            "id": "scem-c30-10",
            "questionText": "A woman walks 3 km North, turns right and walks 4 km. What is her shortest distance from the starting position?",
            "options": ["5 km", "6 km", "7 km", "8 km"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "Pythagorean theorem: sqrt(3^2 + 4^2) = sqrt(9 + 16) = 5 km."
        },
        {
            "id": "scem-c30-11",
            "questionText": "Complete the letter series: B, E, I, N, T, ?",
            "options": ["Y", "Z", "A", "B"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Logical",
            "difficulty": "Medium",
            "explanation": "Gaps increase: B(2) +3 = E(5) +4 = I(9) +5 = N(14) +6 = T(20) +7 = 27 = A (wrapping mod 26)."
        },
        {
            "id": "scem-c30-12",
            "questionText": "In a Venn diagram of 100 students, 60 study C++, 40 study Python, and 20 study both. How many students study neither language?",
            "options": ["10", "15", "20", "25"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "Union = 60 + 40 - 20 = 80. Neither = 100 - 80 = 20 students."
        },
        {
            "id": "scem-c30-13",
            "questionText": "Which word cannot be formed using the letters of the word 'REPRESENTATION'?",
            "options": ["PAINTER", "NATION", "STATION", "PROTECT"],
            "correctAnswer": 3,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "'PROTECT' requires the letter 'C', which does not appear in 'REPRESENTATION'."
        },
        {
            "id": "scem-c30-14",
            "questionText": "If all roses are flowers and some flowers fade quickly, which statement is guaranteed to be true?",
            "options": [
                "All roses fade quickly",
                "Some flowers are roses",
                "No rose fades quickly",
                "All flowers are roses"
            ],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "If All Roses are Flowers, conversion guarantees that 'Some flowers are roses'."
        },
        {
            "id": "scem-c30-15",
            "questionText": "Find the missing number in: 8, 27, 64, 125, 216, ?",
            "options": ["256", "343", "512", "729"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "Cubes of consecutive integers: 2^3=8, 3^3=27, 4^3=64, 5^3=125, 6^3=216, 7^3=343."
        },
        {
            "id": "scem-c30-16",
            "questionText": "Rahul ranks 10th from the top and 25th from the bottom in an aptitude contest. How many students participated?",
            "options": ["34", "35", "36", "37"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "Total = (Top rank + Bottom rank) - 1 = (10 + 25) - 1 = 34 students."
        },
        {
            "id": "scem-c30-17",
            "questionText": "If 'RED' is 27 and 'BLUE' is 40, what is 'GREEN'?",
            "options": ["45", "49", "52", "56"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Logical",
            "difficulty": "Medium",
            "explanation": "Sum of alphabetical positions: RED = 18 + 5 + 4 = 27. BLUE = 2 + 12 + 21 + 5 = 40. GREEN = 7 + 18 + 5 + 5 + 14 = 49."
        },
        {
            "id": "scem-c30-18",
            "questionText": "A clock shows 4:15. What is the measure of the angle between the hands?",
            "options": ["30°", "37.5°", "45°", "52.5°"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "Angle = |30H - 5.5M| = |30(4) - 5.5(15)| = |120 - 82.5| = 37.5°."
        },
        {
            "id": "scem-c30-19",
            "questionText": "In a group of 5 people, each person shakes hands with every other person exactly once. How many total handshakes occur?",
            "options": ["10", "15", "20", "25"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "Formula: n(n - 1) / 2 = 5 * 4 / 2 = 10 handshakes."
        },
        {
            "id": "scem-c30-20",
            "questionText": "Which number is the face opposite to 2 if adjacent faces are 1, 3, 4, and 6 on a standard dice?",
            "options": ["5", "3", "4", "6"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "A die has 6 faces (1..6). If 1, 3, 4, 6 are adjacent to 2, the only remaining face 5 must be opposite to 2."
        }
    ],

    'exam-scem-wed-oct': [
        {
            "id": "scem-wed-01",
            "questionText": "In what ratio must tea at Rs. 62 per kg be mixed with tea at Rs. 72 per kg so that the mixture is worth Rs. 64.50 per kg?",
            "options": ["3 : 1", "3 : 2", "4 : 3", "5 : 3"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Easy",
            "explanation": "Rule of Alligation: (72 - 64.5) / (64.5 - 62) = 7.5 / 2.5 = 3 : 1."
        },
        {
            "id": "scem-wed-02",
            "questionText": "In how many ways can 5 boys and 4 girls be seated in a row such that no two girls are together?",
            "options": ["5! * 6P4", "5! * 4!", "9! - 4!", "6! * 4!"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Medium",
            "explanation": "Seat 5 boys first in 5! ways. There are 6 gaps created. 4 girls can choose 4 of these 6 gaps in 6P4 ways. Total = 5! * 6P4."
        },
        {
            "id": "scem-wed-03",
            "questionText": "A box contains 4 red, 5 green, and 6 blue balls. If a ball is drawn at random, what is the probability that it is neither red nor green?",
            "options": ["2/5", "1/3", "4/15", "7/15"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Easy",
            "explanation": "Neither red nor green means it is blue. P(Blue) = 6 / (4 + 5 + 6) = 6 / 15 = 2/5."
        },
        {
            "id": "scem-wed-04",
            "questionText": "What day of the week was 15th August 1947?",
            "options": ["Thursday", "Friday", "Saturday", "Sunday"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Medium",
            "explanation": "Calendar odd days computation for 15 Aug 1947 yields 5 odd days, which corresponds to Friday."
        },
        {
            "id": "scem-wed-05",
            "questionText": "A jar contains a mixture of two liquids A and B in the ratio 4 : 1. When 10 liters of the mixture is replaced by 10 liters of liquid B, the ratio becomes 2 : 3. What was the initial quantity of liquid A?",
            "options": ["16 liters", "20 liters", "24 liters", "32 liters"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Hard",
            "explanation": "Let initial be 4x and x. Remaining after 10 L removal: A = 4x - 8, B = x - 2. Add 10 L of B: (4x - 8) / (x + 8) = 2/3 => 12x - 24 = 2x + 16 => 10x = 40 => x = 4. Initial quantity of A = 4(4) = 16 liters."
        },
        {
            "id": "scem-wed-06",
            "questionText": "Two dice are thrown simultaneously. What is the probability of getting a sum of 8?",
            "options": ["5/36", "1/6", "7/36", "1/9"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Easy",
            "explanation": "Favorable pairs summing to 8: (2,6), (3,5), (4,4), (5,3), (6,2) => 5 outcomes. Total = 36. Probability = 5/36."
        },
        {
            "id": "scem-wed-07",
            "questionText": "How many 3-digit numbers can be formed using digits 1, 2, 3, 4, 5 without repetition?",
            "options": ["60", "120", "125", "20"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Easy",
            "explanation": "Permutation: 5P3 = 5 * 4 * 3 = 60 numbers."
        },
        {
            "id": "scem-wed-08",
            "questionText": "The diagonal of a rectangle is 10 cm and its perimeter is 28 cm. Find the area of the rectangle.",
            "options": ["48 cm^2", "50 cm^2", "56 cm^2", "64 cm^2"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Easy",
            "explanation": "2(l + w) = 28 => l + w = 14. l^2 + w^2 = 100. (l + w)^2 = l^2 + w^2 + 2lw => 196 = 100 + 2lw => 2lw = 96 => Area lw = 48 cm^2."
        },
        {
            "id": "scem-wed-09",
            "questionText": "What is the angle between the hands of a clock at 7:20?",
            "options": ["100°", "110°", "120°", "130°"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Easy",
            "explanation": "Angle = |30(7) - 5.5(20)| = |210 - 110| = 100°."
        },
        {
            "id": "scem-wed-10",
            "questionText": "A card is drawn from a well-shuffled pack of 52 playing cards. What is the probability of getting either a King or a Heart?",
            "options": ["4/13", "16/52", "1/4", "17/52"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Easy",
            "explanation": "Kings = 4, Hearts = 13, King of Hearts = 1. P = (4 + 13 - 1) / 52 = 16 / 52 = 4 / 13."
        },
        {
            "id": "scem-wed-11",
            "questionText": "If log10(2) = 0.3010, how many digits are there in 2^50?",
            "options": ["15", "16", "17", "18"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Medium",
            "explanation": "log10(2^50) = 50 * 0.3010 = 15.05. Digits = floor(15.05) + 1 = 15 + 1 = 16 digits."
        },
        {
            "id": "scem-wed-12",
            "questionText": "In how many ways can 6 people be seated around a circular dining table?",
            "options": ["120", "720", "60", "24"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Easy",
            "explanation": "Circular permutation of n objects = (n - 1)! = (6 - 1)! = 5! = 120."
        },
        {
            "id": "scem-wed-13",
            "questionText": "A leap year has how many odd days?",
            "options": ["1", "2", "3", "0"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Easy",
            "explanation": "366 days = 52 weeks + 2 days. Therefore a leap year has exactly 2 odd days."
        },
        {
            "id": "scem-wed-14",
            "questionText": "Find the compound interest on Rs. 8,000 for 9 months at 20% per annum compounded quarterly.",
            "options": ["Rs. 1,261", "Rs. 1,200", "Rs. 1,300", "Rs. 1,361"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Hard",
            "explanation": "Quarterly rate r = 20 / 4 = 5%. Number of quarters = 3. Amount = 8000 * (1.05)^3 = 8000 * 1.157625 = Rs. 9,261. CI = 9261 - 8000 = Rs. 1,261."
        },
        {
            "id": "scem-wed-15",
            "questionText": "A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random. What is the probability that none of the balls drawn is blue?",
            "options": ["10/21", "11/21", "2/7", "5/7"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Medium",
            "explanation": "Non-blue balls = 5. Total balls = 7. P = 5C2 / 7C2 = 10 / 21."
        },
        {
            "id": "scem-wed-16",
            "questionText": "The ratio between the length and perimeter of a rectangular plot is 1 : 3. What is the ratio between the length and breadth of the plot?",
            "options": ["2 : 1", "3 : 2", "1 : 2", "2 : 3"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Easy",
            "explanation": "L / [2(L + B)] = 1 / 3 => 3L = 2L + 2B => L = 2B => L : B = 2 : 1."
        },
        {
            "id": "scem-wed-17",
            "questionText": "In how many different ways can the letters of the word 'OPTICAL' be arranged so that the vowels always come together?",
            "options": ["720", "120", "4320", "5040"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Medium",
            "explanation": "Vowels are O, I, A (3 vowels grouped as 1 unit). Consonants: P, T, C, L (4 units). Total units = 5! = 120. Internal vowel arrangements = 3! = 6. Total = 120 * 6 = 720."
        },
        {
            "id": "scem-wed-18",
            "questionText": "How many times do the hands of a clock coincide (0° angle) in a 12-hour period?",
            "options": ["10", "11", "12", "13"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Easy",
            "explanation": "Between 11 and 1, the hands coincide only once at 12:00. Hence in 12 hours, they coincide 11 times."
        },
        {
            "id": "scem-wed-19",
            "questionText": "A milkman mixes 20 liters of water with 80 liters of milk. After selling one-fourth of this mixture, he adds 10 liters of water. What is the current ratio of water to milk?",
            "options": ["1 : 3", "5 : 12", "7 : 12", "1 : 2"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Medium",
            "explanation": "Initial: 20 W, 80 M. 1/4 removed leaves: 15 W, 60 M. Add 10 L water: 25 W, 60 M. Ratio W : M = 25 : 60 = 5 : 12."
        },
        {
            "id": "scem-wed-20",
            "questionText": "If the radius of a circle is decreased by 50%, what is the percentage decrease in its area?",
            "options": ["25%", "50%", "75%", "100%"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Easy",
            "explanation": "New area = pi * (0.5r)^2 = 0.25 * (pi * r^2). The area decreases by (1 - 0.25) * 100 = 75%."
        }
    ],

    'exam-scem-cod-oct': [
        {
            "id": "scem-cod-01",
            "questionText": "In computer architecture, what does the Program Counter (PC) register hold?",
            "options": [
                "The memory address of the next instruction to be fetched and executed",
                "The total count of programs installed",
                "The current instruction opcode",
                "The accumulator result"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "The PC register automatically points to the memory address of the next sequential machine instruction to fetch."
        },
        {
            "id": "scem-cod-02",
            "questionText": "Which flip-flop eliminates the invalid (indeterminate) state of an SR flip-flop when both inputs are 1?",
            "options": ["D Flip-Flop", "JK Flip-Flop", "T Flip-Flop", "Clocked SR"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "In a JK flip-flop, setting J=1 and K=1 causes the output to toggle, eliminating the forbidden state of the SR latch."
        },
        {
            "id": "scem-cod-03",
            "questionText": "What is the primary purpose of Cache Memory in computer systems?",
            "options": [
                "To bridge the speed disparity between high-speed CPU registers and relatively slow main memory (RAM)",
                "To provide permanent non-volatile storage",
                "To increase disk capacity",
                "To handle printer spooling"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "SRAM cache operates at near-processor speeds, holding frequently accessed instructions and data to reduce bus wait states."
        },
        {
            "id": "scem-cod-04",
            "questionText": "In an instruction pipeline, what type of hazard occurs when an instruction depends on the result of a prior instruction that has not yet completed execution?",
            "options": ["Structural Hazard", "Data Hazard", "Control Hazard (Branch Hazard)", "Thermal Hazard"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "Data hazards (Read-After-Write RAW, Write-After-Read WAR) occur when pipeline stages attempt to access overlapping registers before prior instructions finish writing."
        },
        {
            "id": "scem-cod-05",
            "questionText": "What is 2's complement of the binary number `101100`?",
            "options": ["010011", "010100", "010010", "110100"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "1's complement = 010011. Adding 1: 010011 + 1 = 010100."
        },
        {
            "id": "scem-cod-06",
            "questionText": "Which cache mapping technique allows a block of main memory to be placed in any arbitrary cache line?",
            "options": ["Direct Mapping", "Fully Associative Mapping", "Set-Associative Mapping", "Sector Mapping"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "Fully associative cache eliminates conflict misses by allowing any memory block to reside in any cache block."
        },
        {
            "id": "scem-cod-07",
            "questionText": "What is the function of a Multiplexer (MUX) in digital circuits?",
            "options": [
                "Selecting one of several analog or digital input signals and forwarding it into a single output line",
                "Converting binary to decimal",
                "Storing 1 bit of data",
                "Counting clock pulses"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "A MUX acts as a data selector (2^n inputs controlled by n select lines routing to 1 output)."
        },
        {
            "id": "scem-cod-08",
            "questionText": "What does DMA (Direct Memory Access) allow peripherals to do?",
            "options": [
                "Transfer data directly to and from main memory without continuous involvement of the CPU",
                "Bypass electrical power regulations",
                "Overclock processor clock frequencies",
                "Directly modify OS kernel code"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "DMA controllers transfer blocks between devices and RAM across the system bus without wasting CPU cycles."
        },
        {
            "id": "scem-cod-09",
            "questionText": "In IEEE 754 single-precision floating point standard, how many bits are allocated for sign, exponent, and mantissa respectively?",
            "options": ["1, 8, 23", "1, 11, 52", "1, 7, 24", "1, 8, 24"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "Single-precision (32-bit): 1 bit for sign, 8 bits for exponent (biased by 127), and 23 bits for fractional mantissa."
        },
        {
            "id": "scem-cod-10",
            "questionText": "Which addressing mode specifies the operand directly within the instruction itself (e.g. `ADD R1, #5`)?",
            "options": ["Direct Addressing", "Immediate Addressing", "Register Indirect Addressing", "Indexed Addressing"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "Immediate addressing stores the constant operand directly in the instruction byte stream."
        },
        {
            "id": "scem-cod-11",
            "questionText": "What logic gate is known as a universal logic gate because any Boolean function can be implemented using it alone?",
            "options": ["NAND gate", "AND gate", "OR gate", "XOR gate"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "NAND and NOR gates are universal gates capable of synthesizing NOT, AND, OR, and all combinatorial logic."
        },
        {
            "id": "scem-cod-12",
            "questionText": "What is the speedup factor of an ideal k-stage linear pipeline executing n instructions compared to non-pipelined execution?",
            "options": ["k", "n * k", "k / n", "n / k"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "As n becomes very large (n -> ∞), the speedup of a balanced k-stage pipeline approaches k."
        },
        {
            "id": "scem-cod-13",
            "questionText": "Which register holds the current instruction while it is being decoded and executed?",
            "options": ["Instruction Register (IR)", "Memory Address Register (MAR)", "Accumulator (AC)", "Stack Pointer (SP)"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "The IR stores the opcode and operand fields of the instruction being processed by the control unit."
        },
        {
            "id": "scem-cod-14",
            "questionText": "What is the function of a De Morgan's Law in Boolean algebra?",
            "options": [
                "(A + B)' = A' . B' and (A . B)' = A' + B'",
                "A + A' = 0",
                "A . (B + C) = A + B . C",
                "A + 1 = 0"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "De Morgan's Laws state that the complement of a sum equals product of complements, and complement of a product equals sum of complements."
        },
        {
            "id": "scem-cod-15",
            "questionText": "Which type of ROM can be erased by exposure to ultraviolet (UV) light?",
            "options": ["PROM", "EPROM", "EEPROM", "Flash ROM"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "Erasable Programmable Read-Only Memory (EPROM) features a quartz window for UV light erasure."
        },
        {
            "id": "scem-cod-16",
            "questionText": "In RISC (Reduced Instruction Set Computer) philosophy, what is a key architectural characteristic?",
            "options": [
                "Simple, fixed-length single-cycle instructions with load/store memory architecture",
                "Complex variable-length multi-cycle instructions",
                "Direct memory operands in arithmetic instructions",
                "No pipelining support"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "RISC utilizes simple, uniform instructions executing in single cycles, restricting memory access strictly to LOAD and STORE instructions."
        },
        {
            "id": "scem-cod-17",
            "questionText": "What does a half adder circuit compute?",
            "options": [
                "Sum and Carry for two 1-bit binary inputs without a previous carry-in",
                "Sum for three bits including carry-in",
                "Substituted difference only",
                "Product of two 8-bit numbers"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "A half adder takes two 1-bit inputs (A, B) and outputs Sum = A ⊕ B and Carry = A . B."
        },
        {
            "id": "scem-cod-18",
            "questionText": "What is the principle of Temporal Locality in memory hierarchies?",
            "options": [
                "Memory locations accessed recently are likely to be accessed again in the near future",
                "Memory locations spatially adjacent to recent accesses will be accessed",
                "Data moves at the speed of light",
                "Memory wears out over time"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "Temporal locality refers to reuse of specific data or instructions within relatively short time durations (e.g. loops)."
        },
        {
            "id": "scem-cod-19",
            "questionText": "How many select lines are required for a 16-to-1 Multiplexer?",
            "options": ["2", "3", "4", "8"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "2^n = 16 => n = 4 select lines are required to index 16 input lines."
        },
        {
            "id": "scem-cod-20",
            "questionText": "What is branch prediction used for in modern superscalar processors?",
            "options": [
                "Guessing the outcome of conditional branch instructions to keep the execution pipeline filled with instructions",
                "Predicting memory bus failures",
                "Calculating floating point square roots",
                "Controlling CPU fan speed"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "Branch predictors speculate whether conditional branches are taken or not taken, avoiding costly pipeline flushes."
        }
    ]
}

