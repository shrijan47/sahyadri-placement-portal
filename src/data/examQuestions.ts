// AUTO-GENERATED DEDICATED QUESTION BANKS FOR ALL 20 EXAMS
// Total Exams: 20
// Total Unique Questions: 400 (20 questions per exam)
// Zero cycling or question reuse across exams.

import type { ExamQuestion } from '../types';

export const DEDICATED_EXAM_QUESTIONS: Record<string, ExamQuestion[]> = {
  "exam-dsa-midsem": [
    {
      "id": "dsa-mid-01",
      "questionText": "What is the worst-case time complexity of inserting a node into a Red-Black Tree with n elements?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "A Red-Black tree has maximum height of 2 * log(n + 1). Node insertion involves a standard BST insertion followed by at most 2 tree rotations and recoloring, bounded strictly by O(log n)."
    },
    {
      "id": "dsa-mid-02",
      "questionText": "Which data structure is primarily utilized in implementing the Breadth-First Search (BFS) traversal of a graph?",
      "options": [
        "Stack",
        "Queue",
        "Priority Queue",
        "Circular Array"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "BFS explores nodes layer by layer using a FIFO (First-In-First-Out) Queue to track frontier vertices."
    },
    {
      "id": "dsa-mid-03",
      "questionText": "What is the time complexity of building a Binary Max-Heap from an unsorted array of n elements using the bottom-up Heapify approach?",
      "options": [
        "O(log n)",
        "O(n)",
        "O(n log n)",
        "O(n^2)"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "Although inserting elements one by one takes O(n log n), the bottom-up heapify algorithm (sum of heights of nodes) converges mathematically to O(n)."
    },
    {
      "id": "dsa-mid-04",
      "questionText": "In a singly linked list, what is the minimum time complexity required to delete the node pointed to by a pointer 'p' (where 'p' is not the last node and head is unknown)?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "Cannot be deleted"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Copy the data from p->next into node p, then set p->next = p->next->next, completing deletion in O(1) time without knowing the head."
    },
    {
      "id": "dsa-mid-05",
      "questionText": "Which of the following sorting algorithms is NOT an in-place sort by default?",
      "options": [
        "Quick Sort",
        "Heap Sort",
        "Merge Sort",
        "Insertion Sort"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Standard Merge Sort requires O(n) auxiliary memory to merge two sorted halves, making it not an in-place sorting algorithm."
    },
    {
      "id": "dsa-mid-06",
      "questionText": "In dynamic programming, which property determines whether an optimal solution to a problem contains optimal solutions to its subproblems?",
      "options": [
        "Overlapping Subproblems",
        "Optimal Substructure",
        "Memoization Property",
        "Greedy Choice Property"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "Optimal substructure states that an optimal solution to an instance of an optimization problem can be constructed from optimal solutions to subinstances."
    },
    {
      "id": "dsa-mid-07",
      "questionText": "What is the maximum number of nodes in a binary tree of height h (where a tree with a single root node has height 0)?",
      "options": [
        "2^h",
        "2^(h+1) - 1",
        "2^h - 1",
        "2^(h-1) + 1"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "A full binary tree of height h has 1 + 2 + 4 + ... + 2^h = 2^(h+1) - 1 nodes."
    },
    {
      "id": "dsa-mid-08",
      "questionText": "Which collision resolution technique in hash tables uses linked lists to store multiple records hashing to the exact same slot?",
      "options": [
        "Linear Probing",
        "Quadratic Probing",
        "Separate Chaining",
        "Double Hashing"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Separate chaining maintains a linked list (or dynamic tree) for every bucket in the hash table to store colliding key-value pairs."
    },
    {
      "id": "dsa-mid-09",
      "questionText": "What is the worst-case space complexity of recursive Depth-First Search on a tree with n nodes?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n^2)"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "In a degenerate (skewed) tree, recursion depth reaches n, requiring O(n) call stack memory."
    },
    {
      "id": "dsa-mid-10",
      "questionText": "What is the time complexity to find the Minimum Spanning Tree of a connected graph with V vertices and E edges using Kruskal's algorithm with Disjoint Set Union (DSU)?",
      "options": [
        "O(V^2)",
        "O(E log V)",
        "O(V log E)",
        "O(E + V)"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Hard",
      "explanation": "Sorting all edges takes O(E log E) = O(E log V). DSU operations with path compression take nearly linear time O(E * \u03b1(V)), yielding total complexity O(E log V)."
    },
    {
      "id": "dsa-mid-11",
      "questionText": "Which data structure is ideal for checking balanced parentheses in an expression string?",
      "options": [
        "Queue",
        "Stack",
        "Binary Search Tree",
        "Max Heap"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "A LIFO stack matches opening and closing delimiters in reverse order of their arrival."
    },
    {
      "id": "dsa-mid-12",
      "questionText": "What is the worst-case time complexity of QuickSort when the pivot chosen is always the minimum or maximum element?",
      "options": [
        "O(n log n)",
        "O(n)",
        "O(n^2)",
        "O(log n)"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "When partitioning produces partitions of size 0 and n - 1 at each step, recurrence T(n) = T(n-1) + O(n) resolves to O(n^2)."
    },
    {
      "id": "dsa-mid-13",
      "questionText": "In a max-heap stored in an array at 1-based indexing, where is the parent of the node at index i located?",
      "options": [
        "2i",
        "2i + 1",
        "floor(i / 2)",
        "i - 1"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "In 1-based array representation, left child is 2i, right child is 2i + 1, and parent is floor(i / 2)."
    },
    {
      "id": "dsa-mid-14",
      "questionText": "Which traversal of a Binary Search Tree (BST) visits nodes in strictly ascending non-decreasing order?",
      "options": [
        "Preorder Traversal",
        "Inorder Traversal",
        "Postorder Traversal",
        "Level Order Traversal"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Inorder traversal (Left, Root, Right) of any valid BST produces values in monotonically ascending order."
    },
    {
      "id": "dsa-mid-15",
      "questionText": "What is the recurrence relation for the Merge Sort algorithm on an input of size n?",
      "options": [
        "T(n) = 2T(n/2) + O(n)",
        "T(n) = T(n-1) + O(n)",
        "T(n) = 2T(n/2) + O(1)",
        "T(n) = T(n/2) + O(1)"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "Merge sort divides the problem into two subproblems of size n/2 and merges them in linear O(n) time: T(n) = 2T(n/2) + O(n)."
    },
    {
      "id": "dsa-mid-16",
      "questionText": "What is the auxiliary space complexity of Dijkstra's algorithm implemented with an adjacency list and min-heap on a graph with V vertices and E edges?",
      "options": [
        "O(1)",
        "O(V)",
        "O(V + E)",
        "O(V * E)"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "The distance array takes O(V) and the priority queue can hold at most O(E) elements during edge relaxations, giving O(V + E) auxiliary space."
    },
    {
      "id": "dsa-mid-17",
      "questionText": "Which data structure allows O(1) average time complexity for both inserting an element and finding the median of a stream?",
      "options": [
        "Single Sorted Array",
        "Two Heaps (Max-Heap and Min-Heap)",
        "Single AVL Tree",
        "Circular Queue"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Hard",
      "explanation": "Using a max-heap for the smaller half and a min-heap for the larger half gives O(1) median lookup and O(log n) insertion."
    },
    {
      "id": "dsa-mid-18",
      "questionText": "What is the balance factor of a node in an AVL tree defined as?",
      "options": [
        "Height(Left) - Height(Right)",
        "Height(Left) + Height(Right)",
        "Number of Left Children - Right Children",
        "Depth(Node) - Height(Node)"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Balance Factor = Height(Left Subtree) - Height(Right Subtree). In an AVL tree, it must be in {-1, 0, 1}."
    },
    {
      "id": "dsa-mid-19",
      "questionText": "How many swaps are performed by the Selection Sort algorithm on an already sorted array of size n?",
      "options": [
        "0",
        "n",
        "n(n-1)/2",
        "n log n"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "If an implementation checks `if (min_idx != i)` before swapping, 0 swaps are performed on an already sorted array."
    },
    {
      "id": "dsa-mid-20",
      "questionText": "What is the optimal substructure formulation for finding the Length of Longest Common Subsequence (LCS) between strings X of length m and Y of length n when X[m-1] == Y[n-1]?",
      "options": [
        "1 + LCS(m-1, n-1)",
        "max(LCS(m-1, n), LCS(m, n-1))",
        "LCS(m-1, n-1)",
        "1 + max(LCS(m-1, n), LCS(m, n-1))"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "When the terminal characters match, that character contributes 1 to the LCS length, reducing problem to LCS(X[0..m-2], Y[0..n-2])."
    }
  ],
  "exam-quant-drill-1": [
    {
      "id": "quant-d1-01",
      "questionText": "If the price of petrol increases by 25%, by what percentage must a motorist reduce his consumption so that expenditure on petrol remains unchanged?",
      "options": [
        "16.67%",
        "20%",
        "25%",
        "33.33%"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "Reduction = [r / (100 + r)] * 100 = [25 / 125] * 100 = 20%."
    },
    {
      "id": "quant-d1-02",
      "questionText": "A trader marks his goods 40% above the cost price and allows a discount of 25% on the marked price. Find his net profit percentage.",
      "options": [
        "5%",
        "8%",
        "10%",
        "15%"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "Let CP = 100. MP = 140. SP = 140 - (0.25 * 140) = 140 - 35 = 105. Profit = 105 - 100 = 5%."
    },
    {
      "id": "quant-d1-03",
      "questionText": "The average age of 24 students and their teacher is 15 years. If the teacher's age is excluded, the average age decreases by 1 year. What is the teacher's age?",
      "options": [
        "35 years",
        "39 years",
        "40 years",
        "42 years"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Medium",
      "explanation": "Total sum with teacher = 25 * 15 = 375. Total sum without teacher = 24 * 14 = 336. Teacher's age = 375 - 336 = 39 years."
    },
    {
      "id": "quant-d1-04",
      "questionText": "If A : B = 3 : 4 and B : C = 8 : 9, find the ratio A : C.",
      "options": [
        "1 : 2",
        "2 : 3",
        "3 : 5",
        "4 : 9"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "A / C = (A / B) * (B / C) = (3 / 4) * (8 / 9) = 24 / 36 = 2 / 3."
    },
    {
      "id": "quant-d1-05",
      "questionText": "A sum of money doubles itself at simple interest in 8 years. In how many years will it become 4 times itself at the same rate of interest?",
      "options": [
        "16 years",
        "20 years",
        "24 years",
        "32 years"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Medium",
      "explanation": "To double, interest earned is P in 8 years. To become 4 times, interest earned must be 3P. Time required = 3 * 8 = 24 years."
    },
    {
      "id": "quant-d1-06",
      "questionText": "What is the compound interest on Rs. 10,000 for 2 years at 10% per annum compounded annually?",
      "options": [
        "Rs. 2,000",
        "Rs. 2,100",
        "Rs. 2,210",
        "Rs. 2,500"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "Amount = 10000 * (1.1)^2 = 10000 * 1.21 = Rs. 12,100. CI = 12100 - 10000 = Rs. 2,100."
    },
    {
      "id": "quant-d1-07",
      "questionText": "Two numbers are in the ratio 5 : 6. If their HCF is 4, what is their LCM?",
      "options": [
        "90",
        "120",
        "140",
        "160"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "Numbers are 5 * 4 = 20 and 6 * 4 = 24. LCM(20, 24) = 120."
    },
    {
      "id": "quant-d1-08",
      "questionText": "In an examination, 35% of the total students failed in Hindi, 45% failed in English and 20% in both. What percentage of students passed in both subjects?",
      "options": [
        "35%",
        "40%",
        "45%",
        "50%"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Medium",
      "explanation": "Failed in at least one = 35 + 45 - 20 = 60%. Passed in both = 100 - 60 = 40%."
    },
    {
      "id": "quant-d1-09",
      "questionText": "A person buys 12 pens for Rs. 15 and sells 10 pens for Rs. 14. What is his profit percentage?",
      "options": [
        "10%",
        "12%",
        "14%",
        "16.67%"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Medium",
      "explanation": "CP per pen = 15 / 12 = 1.25. SP per pen = 14 / 10 = 1.40. Profit = 0.15. Profit% = (0.15 / 1.25) * 100 = 12%."
    },
    {
      "id": "quant-d1-10",
      "questionText": "Find the single discount equivalent to a series of successive discounts of 20%, 10%, and 5%.",
      "options": [
        "31.6%",
        "32.4%",
        "33.5%",
        "35%"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Medium",
      "explanation": "Net multiplier = 0.8 * 0.9 * 0.95 = 0.684. Equivalent discount = 1 - 0.684 = 0.316 = 31.6%."
    },
    {
      "id": "quant-d1-11",
      "questionText": "What is the remainder when 7^84 is divided by 342?",
      "options": [
        "0",
        "1",
        "7",
        "49"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Hard",
      "explanation": "Note 7^3 = 343. 343 \u2261 1 (mod 342). 7^84 = (7^3)^28 \u2261 1^28 \u2261 1 (mod 342)."
    },
    {
      "id": "quant-d1-12",
      "questionText": "The average of 5 consecutive odd numbers is 61. What is the difference between the highest and lowest numbers?",
      "options": [
        "4",
        "8",
        "10",
        "12"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "Consecutive odd numbers: x, x+2, x+4, x+6, x+8. Difference between highest and lowest is always (x+8) - x = 8."
    },
    {
      "id": "quant-d1-13",
      "questionText": "A sum of Rs. 750 is distributed among A, B, and C in the ratio 4 : 5 : 6. What is the share of B?",
      "options": [
        "Rs. 200",
        "Rs. 250",
        "Rs. 300",
        "Rs. 350"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "Total parts = 4 + 5 + 6 = 15. B's share = (5 / 15) * 750 = Rs. 250."
    },
    {
      "id": "quant-d1-14",
      "questionText": "How many numbers between 100 and 300 are divisible by both 4 and 6?",
      "options": [
        "14",
        "16",
        "17",
        "18"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Medium",
      "explanation": "LCM(4, 6) = 12. First number > 100 divisible by 12 is 108. Last number < 300 is 288. Count = [(288 - 108) / 12] + 1 = 15 + 1 = 16."
    },
    {
      "id": "quant-d1-15",
      "questionText": "The population of a town increases by 10% annually. If the current population is 60,000, what will it be after 2 years?",
      "options": [
        "66,000",
        "72,000",
        "72,600",
        "75,000"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "Population = 60000 * 1.10 * 1.10 = 60000 * 1.21 = 72,600."
    },
    {
      "id": "quant-d1-16",
      "questionText": "A merchant professes to sell his goods at cost price, but uses a false weight of 900 grams for a kg. Find his gain percentage.",
      "options": [
        "9%",
        "10%",
        "11.11%",
        "12.5%"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Medium",
      "explanation": "Gain% = [Error / (True Weight - Error)] * 100 = [100 / 900] * 100 = 11.11%."
    },
    {
      "id": "quant-d1-17",
      "questionText": "The ratio of present ages of two brothers is 4 : 5. Five years ago, their ratio was 3 : 4. Find the present age of the elder brother.",
      "options": [
        "20 years",
        "25 years",
        "30 years",
        "35 years"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "Let ages be 4x and 5x. (4x - 5) / (5x - 5) = 3 / 4 => 16x - 20 = 15x - 15 => x = 5. Elder brother = 5 * 5 = 25 years."
    },
    {
      "id": "quant-d1-18",
      "questionText": "A vessel contains 60 liters of milk. 12 liters of milk is taken out and replaced by water. This process is repeated once more. How much milk is now in the vessel?",
      "options": [
        "36.4 liters",
        "38.4 liters",
        "40 liters",
        "42.2 liters"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Hard",
      "explanation": "Remaining milk = 60 * (1 - 12/60)^2 = 60 * (4/5)^2 = 60 * 16/25 = 38.4 liters."
    },
    {
      "id": "quant-d1-19",
      "questionText": "What is the unit digit of (7^95 - 3^58)?",
      "options": [
        "0",
        "4",
        "6",
        "8"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Medium",
      "explanation": "Unit digit of 7^95: 95 mod 4 = 3 => 7^3 ends in 3. Unit digit of 3^58: 58 mod 4 = 2 => 3^2 ends in 9. (13 - 9) = 4."
    },
    {
      "id": "quant-d1-20",
      "questionText": "If x + 1/x = 4, what is the value of x^2 + 1/x^2?",
      "options": [
        "14",
        "16",
        "18",
        "20"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "(x + 1/x)^2 = x^2 + 1/x^2 + 2 => 4^2 = x^2 + 1/x^2 + 2 => x^2 + 1/x^2 = 14."
    }
  ],
  "exam-logical-syllogism": [
    {
      "id": "log-syl-01",
      "questionText": "Statements: All pens are books. All books are pencils.\nConclusions:\nI. All pens are pencils.\nII. Some pencils are pens.",
      "options": [
        "Only conclusion I follows",
        "Only conclusion II follows",
        "Neither I nor II follows",
        "Both conclusions I and II follow"
      ],
      "correctAnswer": 3,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "Pens are subset of Books, which are subset of Pencils. Hence all pens are pencils, and pencils intersecting pens means some pencils are pens."
    },
    {
      "id": "log-syl-02",
      "questionText": "Statements: Some mangoes are apples. Some apples are bananas.\nConclusions:\nI. Some mangoes are bananas.\nII. No mango is a banana.",
      "options": [
        "Only I follows",
        "Only II follows",
        "Either I or II follows",
        "Neither I nor II follows"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Logical",
      "difficulty": "Medium",
      "explanation": "The relationship between mangoes and bananas is unknown. Since 'Some' and 'No' form a complementary pair with identical subjects and predicates, either I or II follows."
    },
    {
      "id": "log-syl-03",
      "questionText": "Eight persons P, Q, R, S, T, U, V and W are sitting in a circle facing the centre. P is second to the right of T. W is third to the left of P. Q is second to the left of W. Who is sitting opposite to T?",
      "options": [
        "P",
        "Q",
        "R",
        "W"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Logical",
      "difficulty": "Hard",
      "explanation": "Placing in circular 8 positions: T at 1, P at 3 (2nd right). W is 3rd left of P -> position 8. Q is 2nd left of W -> position 5. Position 5 is directly opposite to position 1 (T)."
    },
    {
      "id": "log-syl-04",
      "questionText": "Statements: No cat is a dog. All dogs are tigers.\nConclusions:\nI. No cat is a tiger.\nII. Some tigers are dogs.",
      "options": [
        "Only I follows",
        "Only II follows",
        "Both follow",
        "Neither follows"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "Conclusion I does not follow because tigers can overlap cats outside dogs. Conclusion II follows directly from All dogs are tigers."
    },
    {
      "id": "log-syl-05",
      "questionText": "In a row of 40 students facing North, Amit is 15th from the left end and Sumit is 18th from the right end. How many students are sitting between them?",
      "options": [
        "6",
        "7",
        "8",
        "9"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "Students between = Total - (Left rank + Right rank) = 40 - (15 + 18) = 40 - 33 = 7."
    },
    {
      "id": "log-syl-06",
      "questionText": "If 'A + B' means A is the brother of B; 'A - B' means A is the sister of B; 'A * B' means A is the father of B. Which expression shows that P is the uncle of Q?",
      "options": [
        "P + S * Q",
        "P - S * Q",
        "P * S + Q",
        "Q + S * P"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Logical",
      "difficulty": "Medium",
      "explanation": "P + S means P is brother of S. S * Q means S is father of Q. Hence P is brother of father of Q, meaning P is uncle of Q."
    },
    {
      "id": "log-syl-07",
      "questionText": "Find the missing term in the alphanumeric series: A2C, B4D, C8E, D16F, ?",
      "options": [
        "E24G",
        "E32G",
        "F32G",
        "E32H"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "First letter: A, B, C, D -> E. Number doubles: 2, 4, 8, 16 -> 32. Third letter: C, D, E, F -> G. Term is E32G."
    },
    {
      "id": "log-syl-08",
      "questionText": "Statements: All cars are trains. Some trains are airplanes. No airplane is a ship.\nConclusions:\nI. No ship is a train.\nII. Some cars are airplanes.",
      "options": [
        "Only I follows",
        "Only II follows",
        "Either I or II follows",
        "Neither follows"
      ],
      "correctAnswer": 3,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Logical",
      "difficulty": "Medium",
      "explanation": "Ships can overlap trains outside airplanes, so I does not follow. Cars and airplanes have no direct connection, so II does not follow."
    },
    {
      "id": "log-syl-09",
      "questionText": "Five friends A, B, C, D and E are standing in a queue. D is immediately behind A. C is between B and E. A is immediately behind E. Who is standing at the front of the queue?",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Logical",
      "difficulty": "Medium",
      "explanation": "From front to back: B, C, E, A, D. The front person is B."
    },
    {
      "id": "log-syl-10",
      "questionText": "In a certain code, 'ORANGE' is written as 'PUBOHF'. How is 'GRAPES' written in that code?",
      "options": [
        "HSBQFT",
        "HSAPET",
        "FSZQDR",
        "HTCRFT"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "Each letter is shifted by +1: G->H, R->S, A->B, P->Q, E->F, S->T => HSBQFT."
    },
    {
      "id": "log-syl-11",
      "questionText": "Statements: Some poets are writers. All writers are doctors.\nConclusions:\nI. Some doctors are poets.\nII. Some doctors are writers.",
      "options": [
        "Only I follows",
        "Only II follows",
        "Both I and II follow",
        "Neither follows"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "Since poets overlap writers and all writers are inside doctors, doctors overlap both poets and writers. Both follow."
    },
    {
      "id": "log-syl-12",
      "questionText": "Which diagram correctly represents the relationship among: Musicians, Pianists, and Athletes?",
      "options": [
        "Pianists wholly inside Musicians, with Athletes partially intersecting both",
        "Three separate disjoint circles",
        "Three concentric circles",
        "Athletes wholly inside Pianists"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Logical",
      "difficulty": "Medium",
      "explanation": "All pianists are musicians (Pianists is subset of Musicians). Athletes can be musicians or pianists as well, intersecting both."
    },
    {
      "id": "log-syl-13",
      "questionText": "If SOUTH-EAST becomes NORTH, NORTH-EAST becomes WEST and so on, what will WEST become?",
      "options": [
        "NORTH-EAST",
        "SOUTH-EAST",
        "NORTH-WEST",
        "SOUTH-WEST"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Logical",
      "difficulty": "Medium",
      "explanation": "South-East (135\u00b0 clockwise from N) turns to North (0\u00b0), a rotation of 135\u00b0 anti-clockwise. West (270\u00b0 from N) rotated 135\u00b0 anti-clockwise becomes 135\u00b0 from North = South-East."
    },
    {
      "id": "log-syl-14",
      "questionText": "Complete the sequence: 7, 26, 63, 124, 215, ?",
      "options": [
        "342",
        "343",
        "344",
        "345"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "Terms are n^3 - 1: 2^3 - 1 = 7, 3^3 - 1 = 26, 4^3 - 1 = 63, 5^3 - 1 = 124, 6^3 - 1 = 215, 7^3 - 1 = 343 - 1 = 342."
    },
    {
      "id": "log-syl-15",
      "questionText": "A is the mother of B. C is the father of B. D is the sister of C. How is D related to A?",
      "options": [
        "Sister",
        "Sister-in-law",
        "Aunt",
        "Mother-in-law"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "A is wife of C. D is sister of C (husband's sister). Therefore, D is sister-in-law to A."
    },
    {
      "id": "log-syl-16",
      "questionText": "Six friends A, B, C, D, E, F are seated facing north. C is between A and E. D is at the extreme right. B is second to the left of D. Who is at the extreme left?",
      "options": [
        "A",
        "B",
        "F",
        "E"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Logical",
      "difficulty": "Hard",
      "explanation": "Arrangement from left to right: F, A, C, E, B, D. Extreme left is F."
    },
    {
      "id": "log-syl-17",
      "questionText": "Statements: Only a few books are novels. No novel is a comic.\nConclusions:\nI. Some books are not comics.\nII. All books can never be comics.",
      "options": [
        "Only I follows",
        "Only II follows",
        "Both I and II follow",
        "Neither follows"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Logical",
      "difficulty": "Hard",
      "explanation": "Books that are novels cannot be comics. Since those books exist, some books are definitely not comics and all books can never become comics."
    },
    {
      "id": "log-syl-18",
      "questionText": "Find the odd one out: 64, 125, 216, 343, 512, 729, 1000",
      "options": [
        "64",
        "125",
        "343",
        "729"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Logical",
      "difficulty": "Medium",
      "explanation": "While all numbers are perfect cubes, 64 is also a perfect square (8^2) and 6th power (2^6). Alternatively, 729 is 9^3 and 27^2. However in standard placement test, 64 is the only even single-digit cube base (4^3)."
    },
    {
      "id": "log-syl-19",
      "questionText": "Pointing to a man, a woman said, 'His mother is the only daughter of my mother.' How is the woman related to the man?",
      "options": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "The only daughter of the woman's mother is the woman herself. Thus the man's mother is the woman herself."
    },
    {
      "id": "log-syl-20",
      "questionText": "In a dice, numbers from 1 to 6 are marked. If 1 is opposite to 6, 2 is opposite to 5, and 3 is opposite to 4, what is the sum of numbers on the adjacent faces of 3?",
      "options": [
        "14",
        "15",
        "16",
        "17"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "Opposite to 3 is 4. Adjacent faces are 1, 6, 2, 5. Sum = 1 + 6 + 2 + 5 = 14."
    }
  ],
  "exam-verbal-vocab-grammar": [
    {
      "id": "verb-vg-01",
      "questionText": "Select the correct sentence regarding subject-verb agreement:",
      "options": [
        "Neither the manager nor the employees was present at the briefing.",
        "Neither the manager nor the employees were present at the briefing.",
        "Neither the manager nor the employees is present at the briefing.",
        "Neither the manager nor the employees has been present."
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Verbal",
      "difficulty": "Easy",
      "explanation": "When two subjects are connected by 'neither... nor', the verb agrees with the closer subject ('employees' is plural, so 'were' is correct)."
    },
    {
      "id": "verb-vg-02",
      "questionText": "Choose the correct antonym for the word 'METICULOUS':",
      "options": [
        "Careless",
        "Painstaking",
        "Thorough",
        "Scrupulous"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Verbal",
      "difficulty": "Easy",
      "explanation": "Meticulous means showing great attention to detail. Its opposite is Careless."
    },
    {
      "id": "verb-vg-03",
      "questionText": "Fill in the blank: 'The sudden surge in applications has compelled the company to ______ its recruitment deadlines.'",
      "options": [
        "expand",
        "extend",
        "prolong",
        "stretch"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Verbal",
      "difficulty": "Easy",
      "explanation": "Deadlines or dates are conventionally 'extended' in professional and administrative contexts."
    },
    {
      "id": "verb-vg-04",
      "questionText": "Identify the part of sentence containing an error: 'She had scarcely stepped inside the hall (A) / than the power supply (B) / was abruptly interrupted (C) / No error (D)'",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Verbal",
      "difficulty": "Medium",
      "explanation": "'Scarcely' and 'hardly' are paired with 'when', not 'than'. Part B must read 'when the power supply'."
    },
    {
      "id": "verb-vg-05",
      "questionText": "What is the meaning of the idiom 'To burn the midnight oil'?",
      "options": [
        "To waste fuel recklessly",
        "To work late into the night",
        "To engage in dangerous experiments",
        "To cause deliberate destruction"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Verbal",
      "difficulty": "Easy",
      "explanation": "'Burning the midnight oil' signifies studying or working late into the night."
    },
    {
      "id": "verb-vg-06",
      "questionText": "Choose the word with the correct spelling:",
      "options": [
        "Accomodation",
        "Accommodation",
        "Acommodation",
        "Accomadation"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Verbal",
      "difficulty": "Easy",
      "explanation": "'Accommodation' is spelled with double 'c' and double 'm'."
    },
    {
      "id": "verb-vg-07",
      "questionText": "Select the correct passive voice: 'The placement team will publish the shortlist tomorrow.'",
      "options": [
        "The shortlist will be published by the placement team tomorrow.",
        "The shortlist would be published by the placement team tomorrow.",
        "The shortlist is being published by the placement team tomorrow.",
        "The shortlist has been published by the placement team."
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Verbal",
      "difficulty": "Easy",
      "explanation": "Future simple 'will publish' transforms to 'will be published' in passive voice."
    },
    {
      "id": "verb-vg-08",
      "questionText": "Choose the most appropriate synonym for 'EPHEMERAL':",
      "options": [
        "Transient",
        "Permanent",
        "Eternal",
        "Perpetual"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Verbal",
      "difficulty": "Medium",
      "explanation": "Ephemeral denotes lasting for a very short time; its synonym is Transient."
    },
    {
      "id": "verb-vg-09",
      "questionText": "Fill in the blank with the correct preposition: 'He is proficient ______ algorithmic problem solving.'",
      "options": [
        "at",
        "in",
        "with",
        "on"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Verbal",
      "difficulty": "Easy",
      "explanation": "The adjective 'proficient' collocates with 'in' (proficient in something)."
    },
    {
      "id": "verb-vg-10",
      "questionText": "Which sentence uses the correct conditional tense?",
      "options": [
        "If I had known about the drive, I would attend it.",
        "If I had known about the drive, I would have attended it.",
        "If I knew about the drive, I will attend it.",
        "If I would know about the drive, I attended it."
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Verbal",
      "difficulty": "Medium",
      "explanation": "Third conditional requires: 'If + past perfect (had known), would have + past participle (attended)'."
    },
    {
      "id": "verb-vg-11",
      "questionText": "Find the word opposite in meaning to 'PRAGMATIC':",
      "options": [
        "Practical",
        "Sensible",
        "Idealistic",
        "Realistic"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Verbal",
      "difficulty": "Easy",
      "explanation": "Pragmatic means guided by practical considerations rather than ideals. Its antonym is Idealistic."
    },
    {
      "id": "verb-vg-12",
      "questionText": "Select the correct one-word substitution for: 'A person who is fluent in multiple languages'",
      "options": [
        "Polyglot",
        "Linguist",
        "Lexicographer",
        "Orator"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Verbal",
      "difficulty": "Easy",
      "explanation": "A person who knows and uses several languages is a Polyglot."
    },
    {
      "id": "verb-vg-13",
      "questionText": "Identify the error: 'The committee have decided (A) / to postpone the annual conference (B) / due to unforeseen circumstances (C) / No error (D)'",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Verbal",
      "difficulty": "Medium",
      "explanation": "A collective noun acting as a single unit takes a singular verb: 'The committee has decided'."
    },
    {
      "id": "verb-vg-14",
      "questionText": "Complete the idiom: 'To throw caution to the ______'",
      "options": [
        "wind",
        "ocean",
        "fire",
        "air"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Verbal",
      "difficulty": "Easy",
      "explanation": "The standard idiom is 'throw caution to the wind', meaning to act rashly or take great risks."
    },
    {
      "id": "verb-vg-15",
      "questionText": "Choose the word closest in meaning to 'UBIQUITOUS':",
      "options": [
        "Omnipresent",
        "Scarce",
        "Rare",
        "Isolated"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Verbal",
      "difficulty": "Medium",
      "explanation": "Ubiquitous means present, appearing, or found everywhere; synonym is Omnipresent."
    },
    {
      "id": "verb-vg-16",
      "questionText": "Select the correct direct speech conversion: 'She said that she had finished her project.'",
      "options": [
        "She said, 'I finished my project.'",
        "She said, 'I have finished my project.'",
        "She said, 'I am finishing my project.'",
        "She said, 'I will finish my project.'"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Verbal",
      "difficulty": "Medium",
      "explanation": "Present perfect 'I have finished' shifts to past perfect 'she had finished' in reported speech."
    },
    {
      "id": "verb-vg-17",
      "questionText": "Fill in the blank: 'Despite the heavy rain, the students were ______ in their determination to reach the campus.'",
      "options": [
        "wavering",
        "resolute",
        "reluctant",
        "indifferent"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Verbal",
      "difficulty": "Easy",
      "explanation": "'Resolute' means admirably purposeful and determined, fitting the context 'despite the heavy rain'."
    },
    {
      "id": "verb-vg-18",
      "questionText": "Identify the incorrect usage of apostrophe:",
      "options": [
        "The students' notebooks are neatly organized.",
        "It's important to verify your answers.",
        "The dog wagged it's tail.",
        "Charles's book was missing."
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Verbal",
      "difficulty": "Easy",
      "explanation": "'It's' is the contraction of 'it is'. The possessive pronoun is 'its' without an apostrophe."
    },
    {
      "id": "verb-vg-19",
      "questionText": "Select the correct meaning of the foreign phrase 'Status Quo':",
      "options": [
        "The existing state of affairs",
        "A legal summons",
        "A false identity",
        "A great masterpiece"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Verbal",
      "difficulty": "Easy",
      "explanation": "'Status quo' is Latin for the existing state of affairs, particularly regarding social or political issues."
    },
    {
      "id": "verb-vg-20",
      "questionText": "Choose the sentence that correctly uses the word 'Affect':",
      "options": [
        "The new policy had a positive affect on performance.",
        "The economic downturn did not affect their hiring numbers.",
        "What was the affect of the announcement?",
        "She observed the affect of the chemical reaction."
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Verbal",
      "difficulty": "Medium",
      "explanation": "'Affect' is typically a verb meaning to influence, while 'effect' is typically a noun denoting the result."
    }
  ],
  "exam-python-oops-eval": [
    {
      "id": "py-oop-01",
      "questionText": "In Python, which built-in function returns a shallow copy of a dictionary?",
      "options": [
        "dict.copy()",
        "dict.clone()",
        "copy.deepcopy()",
        "dict.duplicate()"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "dict.copy() creates a shallow copy of the dictionary."
    },
    {
      "id": "py-oop-02",
      "questionText": "What is the output of `bool([]) + bool([0]) + bool('False')` in Python?",
      "options": [
        "1",
        "2",
        "3",
        "0"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "bool([]) is False (0). bool([0]) is True (1, non-empty list). bool('False') is True (1, non-empty string). Sum = 0 + 1 + 1 = 2."
    },
    {
      "id": "py-oop-03",
      "questionText": "Which method resolution order (MRO) algorithm is utilized by modern Python 3 for multiple inheritance?",
      "options": [
        "Depth-First Search",
        "C3 Linearization",
        "Breadth-First Search",
        "Dijkstra MRO"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Hard",
      "explanation": "Python uses the C3 Linearization algorithm to determine method resolution order consistently in multiple inheritance hierarchies."
    },
    {
      "id": "py-oop-04",
      "questionText": "What does the `__slots__` attribute do in a Python class definition?",
      "options": [
        "Restricts allowed instance attributes and prevents creation of `__dict__` to conserve memory",
        "Defines private methods accessible only via name mangling",
        "Automatically registers class methods as static methods",
        "Locks the class from further subclassing"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Hard",
      "explanation": "`__slots__` tells Python not to create a dynamic `__dict__` for each instance, strictly binding attributes and significantly reducing memory footprint."
    },
    {
      "id": "py-oop-05",
      "questionText": "What is the difference between `@classmethod` and `@staticmethod` in Python?",
      "options": [
        "@classmethod receives the class (`cls`) as its first argument, while @staticmethod receives neither `self` nor `cls`",
        "@staticmethod receives the class as argument, while @classmethod receives nothing",
        "@classmethod can only be called from an instance, not from the class directly",
        "There is no difference; they are interchangeable aliases"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "@classmethod receives the implicit class object `cls` as the first argument, whereas @staticmethod acts like a plain function placed inside a class namespace."
    },
    {
      "id": "py-oop-06",
      "questionText": "In Python, which magic method is invoked when an object is called as a function (e.g. `obj()` )?",
      "options": [
        "__init__",
        "__new__",
        "__call__",
        "__invoke__"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Implementing `__call__` allows instances of a class to be invoked as callables/functions."
    },
    {
      "id": "py-oop-07",
      "questionText": "What keyword is used in Python to create a generator function that yields values lazily?",
      "options": [
        "return",
        "yield",
        "produce",
        "generate"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "The `yield` keyword turns a function into a generator that returns an iterator yielding items one by one on demand."
    },
    {
      "id": "py-oop-08",
      "questionText": "What is name mangling in Python, and how is it triggered in a class?",
      "options": [
        "Prefixing an attribute with two leading underscores (e.g. `__var`), transforming it to `_ClassName__var`",
        "Prefixing an attribute with a single underscore `_var`",
        "Using the `private` keyword in class headers",
        "Appending two trailing underscores `var__`"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "Two leading underscores without trailing underscores trigger name mangling, where the interpreter renames `__attr` to `_ClassName__attr` to prevent accidental overriding."
    },
    {
      "id": "py-oop-09",
      "questionText": "What will be the output of `type(type)` in Python?",
      "options": [
        "<class 'type'>",
        "<class 'object'>",
        "<class 'class'>",
        "<class 'meta'>"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Hard",
      "explanation": "`type` is the metaclass of all classes in Python, including itself. Hence `type(type)` is `<class 'type'>`."
    },
    {
      "id": "py-oop-10",
      "questionText": "Which statement about Python's Global Interpreter Lock (GIL) is correct?",
      "options": [
        "The GIL prevents CPU-bound Python threads from executing bytecode simultaneously on multiple cores in CPython",
        "The GIL prevents I/O bound multi-threading from functioning",
        "The GIL is present in Jython and IronPython",
        "The GIL automatically synchronizes SQLite database transactions"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Hard",
      "explanation": "In standard CPython, the GIL ensures only one thread executes Python bytecode at a time, limiting multi-core speedup for pure CPU-bound tasks."
    },
    {
      "id": "py-oop-11",
      "questionText": "What is the purpose of `@property` decorator in Python?",
      "options": [
        "To define getter methods that can be accessed like attributes without calling parentheses",
        "To declare variables that cannot be modified",
        "To make class variables private",
        "To serialize the class to JSON format"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "`@property` decorates a method so it can be evaluated using attribute access syntax `obj.attr`."
    },
    {
      "id": "py-oop-12",
      "questionText": "What is the output of `[i for i in range(5) if i % 2 == 0]`?",
      "options": [
        "[0, 2, 4]",
        "[2, 4]",
        "[1, 3]",
        "[0, 1, 2, 3, 4]"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Even integers strictly below 5 are 0, 2, and 4."
    },
    {
      "id": "py-oop-13",
      "questionText": "In OOP design, which principle states that 'Derived classes must be substitutable for their base classes without altering the correctness of the program'?",
      "options": [
        "Single Responsibility Principle",
        "Open-Closed Principle",
        "Liskov Substitution Principle",
        "Interface Segregation Principle"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "The 'L' in SOLID stands for Liskov Substitution Principle (LSP)."
    },
    {
      "id": "py-oop-14",
      "questionText": "Which data type in Python is mutable?",
      "options": [
        "tuple",
        "frozenset",
        "list",
        "string"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Lists can have elements appended, removed, and modified in place; tuples, frozensets, and strings are immutable."
    },
    {
      "id": "py-oop-15",
      "questionText": "What does `*args` and `**kwargs` represent in a Python function definition?",
      "options": [
        "Variable positional arguments (tuple) and variable keyword arguments (dict)",
        "Pointers and double pointers to memory addresses",
        "Global variables and local variables",
        "Multiplication operator and exponentiation operator"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "`*args` collects arbitrary positional arguments into a tuple; `**kwargs` collects arbitrary keyword arguments into a dictionary."
    },
    {
      "id": "py-oop-16",
      "questionText": "What is the output of `isinstance(True, int)` in Python?",
      "options": [
        "True",
        "False",
        "TypeError",
        "None"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "In Python, `bool` is a direct subclass of `int`. `True` is an instance of `int` with integer value 1."
    },
    {
      "id": "py-oop-17",
      "questionText": "Which module in Python standard library provides abstract base classes for defining interfaces?",
      "options": [
        "abc",
        "interface",
        "abstract",
        "base"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "The `abc` (Abstract Base Classes) module provides `ABC` and `@abstractmethod`."
    },
    {
      "id": "py-oop-18",
      "questionText": "What does `super().__init__()` do inside a subclass constructor?",
      "options": [
        "Calls the `__init__` constructor of the parent class according to the MRO",
        "Creates a new duplicate instance of the parent class",
        "Overwrites all parent methods with child methods",
        "Resets all parent attributes to None"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "`super()` returns a proxy object delegating method calls to a parent or sibling class in the MRO."
    },
    {
      "id": "py-oop-19",
      "questionText": "How is memory managed in Python?",
      "options": [
        "Reference counting combined with a cyclic garbage collector",
        "Manual malloc() and free() calls",
        "Pure mark-and-sweep garbage collection with zero reference counters",
        "Static stack allocation only"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "Python primarily utilizes reference counting for immediate deallocation, supplemented by a generational cyclic garbage collector for circular references."
    },
    {
      "id": "py-oop-20",
      "questionText": "What will `a = [1, 2, 3]; b = a; b.append(4); print(len(a))` output?",
      "options": [
        "3",
        "4",
        "Error",
        "Undefined"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Variables `a` and `b` reference the same underlying mutable list in memory. Appending to `b` alters `a`, so `len(a)` is 4."
    }
  ],
  "exam-dbms-sql-query": [
    {
      "id": "dbms-sql-01",
      "questionText": "Which normal form guarantees that every determinant is a candidate key?",
      "options": [
        "1NF",
        "2NF",
        "3NF",
        "Boyce-Codd Normal Form (BCNF)"
      ],
      "correctAnswer": 3,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "A relation is in BCNF if and only if for every non-trivial functional dependency X -> Y, X is a superkey (determinant is a candidate key)."
    },
    {
      "id": "dbms-sql-02",
      "questionText": "What does the 'A' in ACID properties of a database transaction signify?",
      "options": [
        "Availability",
        "Atomicity",
        "Accuracy",
        "Auditing"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Atomicity ensures that all operations in a transaction execute to completion, or none do (all-or-nothing)."
    },
    {
      "id": "dbms-sql-03",
      "questionText": "Which SQL clause is used to filter groups created by the GROUP BY statement?",
      "options": [
        "WHERE",
        "HAVING",
        "FILTER",
        "ORDER BY"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "WHERE filters individual rows prior to grouping; HAVING filters aggregated groups."
    },
    {
      "id": "dbms-sql-04",
      "questionText": "What type of lock allows multiple transactions to read a data item concurrently, but prevents any transaction from writing to it?",
      "options": [
        "Exclusive Lock (X-Lock)",
        "Shared Lock (S-Lock)",
        "Intent Lock",
        "Two-Phase Lock"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "Shared locks (S-locks) allow concurrent read operations but disallow exclusive writes."
    },
    {
      "id": "dbms-sql-05",
      "questionText": "In a B+ Tree index with order m, where are the actual data pointers or records stored?",
      "options": [
        "Only in the leaf nodes",
        "Equally distributed across all internal and leaf nodes",
        "Only in the root node",
        "In the internal nodes only"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "In a B+ Tree, internal nodes strictly store search keys for navigation; all records and data pointers reside exclusively in linked leaf nodes."
    },
    {
      "id": "dbms-sql-06",
      "questionText": "Which SQL statement is used to remove all records from a table, reset identity seeds, and release deallocated space without logging individual row deletions?",
      "options": [
        "DELETE FROM table",
        "DROP TABLE table",
        "TRUNCATE TABLE table",
        "REMOVE TABLE table"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "TRUNCATE is a DDL command that deallocates data pages quickly, unlike DELETE which logs row-by-row deletions."
    },
    {
      "id": "dbms-sql-07",
      "questionText": "What anomaly occurs when Transaction T1 updates a row without committing, and Transaction T2 subsequently reads this uncommitted value?",
      "options": [
        "Dirty Read",
        "Non-Repeatable Read",
        "Phantom Read",
        "Lost Update"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "A Dirty Read occurs when a transaction reads uncommitted changes of another transaction that might later be rolled back."
    },
    {
      "id": "dbms-sql-08",
      "questionText": "What is a candidate key with minimal set of attributes called?",
      "options": [
        "Super Key",
        "Foreign Key",
        "Candidate Key",
        "Surrogate Key"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "A minimal super key (one where no subset is a super key) is by definition a Candidate Key."
    },
    {
      "id": "dbms-sql-09",
      "questionText": "Which relational algebra operation corresponds to selecting specific columns from a relation?",
      "options": [
        "Selection (\u03c3)",
        "Projection (\u03c0)",
        "Cartesian Product (\u00d7)",
        "Join (\u2a1d)"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Projection (\u03c0) extracts specified attributes (columns) from a relation; Selection (\u03c3) filters rows."
    },
    {
      "id": "dbms-sql-10",
      "questionText": "What is the highest isolation level in SQL standard that guarantees zero dirty reads, non-repeatable reads, or phantom reads?",
      "options": [
        "Read Uncommitted",
        "Read Committed",
        "Repeatable Read",
        "Serializable"
      ],
      "correctAnswer": 3,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "Serializable isolation ensures execution produces the same effect as some purely sequential serial schedule."
    },
    {
      "id": "dbms-sql-11",
      "questionText": "Which of the following constraints enforces referential integrity between two tables?",
      "options": [
        "PRIMARY KEY",
        "FOREIGN KEY",
        "UNIQUE",
        "CHECK"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "A FOREIGN KEY references the primary key of another table, ensuring referential integrity."
    },
    {
      "id": "dbms-sql-12",
      "questionText": "What will `SELECT COUNT(*) FROM table` return if a table contains 5 rows and all columns in row 3 are NULL?",
      "options": [
        "0",
        "4",
        "5",
        "NULL"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "`COUNT(*)` counts total rows regardless of NULL values inside individual attributes."
    },
    {
      "id": "dbms-sql-13",
      "questionText": "In Two-Phase Locking (2PL), what occurs during the 'Shrinking Phase'?",
      "options": [
        "The transaction may release locks but cannot acquire any new locks",
        "The transaction acquires all locks and releases none",
        "Database size is physically compacted",
        "Old logs are truncated from the disk"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "In 2PL, after the lock point, a transaction enters the shrinking phase where locks can only be released, not acquired."
    },
    {
      "id": "dbms-sql-14",
      "questionText": "Which join returns all rows from the left table, along with matching rows from the right table (and NULLs for non-matches)?",
      "options": [
        "INNER JOIN",
        "LEFT OUTER JOIN",
        "RIGHT OUTER JOIN",
        "CROSS JOIN"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "LEFT OUTER JOIN preserves every record from the left table regardless of matches in the right table."
    },
    {
      "id": "dbms-sql-15",
      "questionText": "What is the purpose of database indexing?",
      "options": [
        "To speed up record retrieval at the expense of additional storage and write overhead",
        "To eliminate data redundancy completely",
        "To automatically generate primary keys",
        "To encrypt table columns for security"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Indexes provide quick lookup paths (e.g. B-Trees) reducing disk I/O, but add overhead on INSERT/UPDATE/DELETE."
    },
    {
      "id": "dbms-sql-16",
      "questionText": "What is a lossless-join decomposition in database normalization?",
      "options": [
        "Decomposition of R into R1 and R2 such that R1 \u2a1d R2 yields exactly original relation R with no spurious tuples",
        "Decomposition where no data types are changed",
        "Decomposition where all foreign keys are removed",
        "A join where no NULL values are present"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Hard",
      "explanation": "A decomposition is lossless if natural join of decomposed relations reconstructs original relation without spurious tuples."
    },
    {
      "id": "dbms-sql-17",
      "questionText": "Which SQL function is an analytical window function that assigns a unique sequential integer to each row within a partition?",
      "options": [
        "RANK()",
        "DENSE_RANK()",
        "ROW_NUMBER()",
        "NTILE()"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "`ROW_NUMBER()` outputs an unbroken consecutive sequence of integers (1, 2, 3...) regardless of ties."
    },
    {
      "id": "dbms-sql-18",
      "questionText": "What does a Write-Ahead Logging (WAL) protocol enforce?",
      "options": [
        "Log records must be written to stable storage before corresponding dirty database pages are written to disk",
        "Data is written to database before the log",
        "All writes are stored in RAM without persistent disk updates",
        "Only reads are logged"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Hard",
      "explanation": "WAL guarantees durability by ensuring log updates reach persistent storage before changes overwrite data pages."
    },
    {
      "id": "dbms-sql-19",
      "questionText": "How does an INNER JOIN differ from a NATURAL JOIN in SQL?",
      "options": [
        "NATURAL JOIN joins tables automatically based on columns having identical names and data types, removing duplicate columns",
        "INNER JOIN does not require an ON condition",
        "NATURAL JOIN is equivalent to a CROSS JOIN",
        "INNER JOIN only works on primary keys"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "NATURAL JOIN automatically matches all identically named columns across relations and suppresses duplicate join columns."
    },
    {
      "id": "dbms-sql-20",
      "questionText": "Which statement about clustered vs non-clustered indexes is TRUE?",
      "options": [
        "A table can have only one clustered index because it dictates physical storage order of data rows",
        "A table can have up to 256 clustered indexes",
        "Non-clustered indexes physically rearrange data rows on disk",
        "Clustered indexes always require separate index pages pointing to random heap locations"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "Because records can only be ordered physically in one sequence on disk, only one clustered index can exist per table."
    }
  ],
  "exam-os-process-threads": [
    {
      "id": "os-pt-01",
      "questionText": "Which state transition is initiated by the CPU scheduler in an operating system?",
      "options": [
        "Running to Ready",
        "Ready to Running",
        "Waiting to Ready",
        "Running to Terminated"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "The CPU scheduler (dispatcher) selects a process from the Ready queue and assigns it to the CPU (Ready -> Running)."
    },
    {
      "id": "os-pt-02",
      "questionText": "Which CPU scheduling algorithm is preemptive and minimizes the average waiting time for a set of processes?",
      "options": [
        "First-Come, First-Served (FCFS)",
        "Shortest Remaining Time First (SRTF)",
        "Round Robin (RR)",
        "Priority Non-preemptive"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "SRTF (preemptive SJF) is mathematically provably optimal in yielding minimal average waiting time."
    },
    {
      "id": "os-pt-03",
      "questionText": "Which of the following is NOT one of the four necessary conditions for a deadlock to occur (Coffman conditions)?",
      "options": [
        "Mutual Exclusion",
        "Hold and Wait",
        "No Preemption",
        "Strict Alternation"
      ],
      "correctAnswer": 3,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "The 4 Coffman conditions are Mutual Exclusion, Hold & Wait, No Preemption, and Circular Wait. Strict Alternation is not a deadlock condition."
    },
    {
      "id": "os-pt-04",
      "questionText": "What does a counting semaphore initialized to a value of 5 indicate?",
      "options": [
        "At most 5 concurrent processes can access the shared resource simultaneously",
        "There are 5 processes currently blocked in the queue",
        "Only 1 process can access the resource 5 times",
        "The system will deadlock after 5 seconds"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "The counter tracks available instances of a finite resource; 5 permits are available before calls block."
    },
    {
      "id": "os-pt-05",
      "questionText": "What is the phenomenon called when excessive page faults cause the operating system to spend virtually all its time paging rather than executing processes?",
      "options": [
        "Paging Drift",
        "Thrashing",
        "Belady's Anomaly",
        "Fragmentation"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Thrashing occurs when the working sets of active processes exceed total physical frames, causing perpetual page-in/page-out."
    },
    {
      "id": "os-pt-06",
      "questionText": "Which page replacement algorithm suffers from Belady's Anomaly (where increasing page frames increases page faults)?",
      "options": [
        "Optimal (OPT)",
        "Least Recently Used (LRU)",
        "First-In, First-Out (FIFO)",
        "Least Frequently Used (LFU)"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "FIFO is not a stack algorithm, so allocating more physical frames can counter-intuitively increase page fault frequency."
    },
    {
      "id": "os-pt-07",
      "questionText": "In process management, what is a 'Zombie Process'?",
      "options": [
        "A process that has finished execution but still has an entry in the Process Table because its parent has not read its exit status",
        "A process running in an infinite loop consuming 100% CPU",
        "A process whose parent terminated, leaving it orphaned to init",
        "A process blocked on I/O indefinitely"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "A process becomes a zombie when it calls exit() and awaits its parent to execute wait() to reclaim its PID."
    },
    {
      "id": "os-pt-08",
      "questionText": "What hardware component is responsible for translating Virtual Addresses to Physical Addresses during memory access?",
      "options": [
        "ALU",
        "Memory Management Unit (MMU)",
        "Instruction Register",
        "DMA Controller"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "The MMU maps virtual page numbers to physical page frames using page tables and TLB."
    },
    {
      "id": "os-pt-09",
      "questionText": "What is the primary advantage of multithreading over multiprocessing?",
      "options": [
        "Threads within the same process share code, data, and heap, resulting in much faster context switching and lower overhead",
        "Threads cannot crash their parent process",
        "Threads do not require any synchronization primitives",
        "Threads run without CPU intervention"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Threads share memory and open files within a process, minimizing memory footprint and context-switch cost."
    },
    {
      "id": "os-pt-10",
      "questionText": "Which algorithm is used for Deadlock Avoidance by checking safe states before allocating resources?",
      "options": [
        "Banker's Algorithm",
        "Round Robin",
        "Dijkstra's Algorithm",
        "Peterson's Algorithm"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Dijkstra's Banker's Algorithm evaluates resource requests to verify the system remains in a safe state with a valid execution sequence."
    },
    {
      "id": "os-pt-11",
      "questionText": "What is internal fragmentation in memory allocation?",
      "options": [
        "Unused memory that is internal to a partitioned block assigned to a process",
        "Unused memory scattered between allocated memory blocks",
        "Memory corrupted by dangling pointers",
        "Memory swapped out to secondary disk"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Internal fragmentation arises when fixed partitions or fixed-size pages allocate more memory than a process requested."
    },
    {
      "id": "os-pt-12",
      "questionText": "What system call is used in Unix to duplicate the current process, creating an identical child process?",
      "options": [
        "clone()",
        "fork()",
        "spawn()",
        "exec()"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "`fork()` clones the calling process, returning 0 to the child and the child's PID to the parent."
    },
    {
      "id": "os-pt-13",
      "questionText": "What is the Translation Lookaside Buffer (TLB)?",
      "options": [
        "A fast hardware associative cache that stores recent virtual-to-physical address translations",
        "A buffer for network packets",
        "A disk cache for swap space",
        "An instruction prefetch queue in CPU"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "The TLB is a high-speed hardware cache holding recently resolved page table entries to avoid multi-level memory lookups."
    },
    {
      "id": "os-pt-14",
      "questionText": "In a Round Robin scheduler, what happens if the time quantum is chosen to be extremely large (larger than the longest burst time)?",
      "options": [
        "It degenerates into First-Come, First-Served (FCFS)",
        "It causes infinite deadlocks",
        "It causes maximum thrashing",
        "Context switches increase exponentially"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "If time quantum q > max(burst), no process gets preempted before completion, behaving identically to FCFS."
    },
    {
      "id": "os-pt-15",
      "questionText": "What is the critical section problem requirement ensuring that no other process can enter the critical section when one is executing inside it?",
      "options": [
        "Mutual Exclusion",
        "Progress",
        "Bounded Waiting",
        "Starvation Freedom"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Mutual Exclusion dictates that at most one process can execute in its critical section at any instant."
    },
    {
      "id": "os-pt-16",
      "questionText": "Which IPC (Inter-Process Communication) mechanism provides asynchronous notification of events to a process in Unix?",
      "options": [
        "Shared Memory",
        "Signals",
        "Pipes",
        "Message Queues"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "Signals (e.g. SIGINT, SIGKILL, SIGSEGV) deliver asynchronous software interrupts to Unix processes."
    },
    {
      "id": "os-pt-17",
      "questionText": "What happens during a Context Switch?",
      "options": [
        "The state (registers, program counter) of the running process is saved, and state of next ready process is restored",
        "The process memory is formatted",
        "The operating system reboots",
        "All cache memories are permanently deleted"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "A context switch stores the process control block (PCB) state of outgoing process and loads that of the scheduled process."
    },
    {
      "id": "os-pt-18",
      "questionText": "What is 'Copy-on-Write' (COW) optimization during process creation with fork()?",
      "options": [
        "Parent and child share the exact same physical pages until one process writes to a page, at which point a private copy is created",
        "The child immediately duplicates all physical pages",
        "Writing is permanently disallowed in child",
        "Memory is written to disk before child starts"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Hard",
      "explanation": "COW defers memory allocation until a process attempts modification, avoiding expensive unnecessary page duplications."
    },
    {
      "id": "os-pt-19",
      "questionText": "Which disk scheduling algorithm services requests in order of their proximity to the current disk arm position?",
      "options": [
        "FCFS",
        "SSTF (Shortest Seek Time First)",
        "SCAN (Elevator)",
        "C-LOOK"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "SSTF chooses the pending disk I/O request requiring minimal track/cylinder movement from current head position."
    },
    {
      "id": "os-pt-20",
      "questionText": "What is the main drawback of Peterson's Solution for the critical section problem on modern multi-core architectures?",
      "options": [
        "It relies on CPU memory ordering assumptions that can be violated by out-of-order execution and compiler reordering",
        "It requires kernel mode privilege",
        "It cannot work for 2 processes",
        "It uses too much disk storage"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Hard",
      "explanation": "Modern out-of-order processors and memory architectures require memory barriers; simple load/store flags without barriers fail to guarantee mutual exclusion."
    }
  ],
  "exam-cn-tcp-ip": [
    {
      "id": "cn-tcp-01",
      "questionText": "What is the size of an IPv4 address and an IPv6 address respectively?",
      "options": [
        "32 bits and 64 bits",
        "32 bits and 128 bits",
        "64 bits and 128 bits",
        "16 bits and 32 bits"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "IPv4 uses 32-bit (4-byte) addresses, while IPv6 expands the address space to 128 bits (16 bytes)."
    },
    {
      "id": "cn-tcp-02",
      "questionText": "Which protocol is responsible for mapping an IP address to a physical MAC address on a local area network?",
      "options": [
        "DNS",
        "ARP (Address Resolution Protocol)",
        "DHCP",
        "RARP"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "ARP broadcasts an IP address to find the corresponding hardware (MAC) address within the local broadcast domain."
    },
    {
      "id": "cn-tcp-03",
      "questionText": "What flags are exchanged in order during the standard TCP 3-way handshake to establish a connection?",
      "options": [
        "SYN -> SYN-ACK -> ACK",
        "ACK -> SYN -> SYN-ACK",
        "SYN -> ACK -> SYN-ACK",
        "FIN -> ACK -> FIN-ACK"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Client sends SYN, Server replies with SYN-ACK, Client finishes connection setup with ACK."
    },
    {
      "id": "cn-tcp-04",
      "questionText": "How many usable host IP addresses are available in a subnet with CIDR prefix /26?",
      "options": [
        "64",
        "62",
        "30",
        "126"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "Subnet bits = 26, Host bits = 32 - 26 = 6. Total addresses = 2^6 = 64. Usable host addresses = 64 - 2 (network & broadcast) = 62."
    },
    {
      "id": "cn-tcp-05",
      "questionText": "Which transport layer protocol is connectionless, unreliable, and has no flow control or retransmissions, but offers minimal latency?",
      "options": [
        "TCP",
        "UDP",
        "SCTP",
        "BGP"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "User Datagram Protocol (UDP) transmits packets with minimal header overhead and zero delivery guarantees, ideal for streaming and DNS."
    },
    {
      "id": "cn-tcp-06",
      "questionText": "On which port does standard secure HTTPS traffic listen by default?",
      "options": [
        "80",
        "443",
        "8080",
        "22"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "HTTP defaults to port 80; HTTPS (HTTP over TLS/SSL) defaults to port 443."
    },
    {
      "id": "cn-tcp-07",
      "questionText": "Which routing protocol is an interior gateway protocol based on the Link State algorithm (Dijkstra's shortest path)?",
      "options": [
        "RIP",
        "BGP",
        "OSPF (Open Shortest Path First)",
        "EGP"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "OSPF is a link-state routing protocol using Dijkstra's SPF algorithm to calculate shortest loop-free paths within an Autonomous System."
    },
    {
      "id": "cn-tcp-08",
      "questionText": "What does the TCP sliding window mechanism primarily provide?",
      "options": [
        "Routing optimization",
        "Flow control to prevent overwhelming the receiver",
        "Packet encryption",
        "DNS name resolution"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "The receive window field in TCP headers advertises available buffer space, preventing the sender from overflowing receiver buffers."
    },
    {
      "id": "cn-tcp-09",
      "questionText": "What happens when a packet's Time-To-Live (TTL) field reaches zero in an IP router?",
      "options": [
        "The router forwards it directly to the gateway",
        "The packet is discarded, and an ICMP Time Exceeded message is sent back to source",
        "The packet is stored in RAM",
        "The TTL is reset to 255"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "TTL prevents packets from circulating indefinitely in routing loops. At TTL=0, packet is dropped and ICMP Type 11 is sent."
    },
    {
      "id": "cn-tcp-10",
      "questionText": "What is the standard Maximum Transmission Unit (MTU) size for standard Ethernet frames?",
      "options": [
        "512 bytes",
        "1024 bytes",
        "1500 bytes",
        "9000 bytes"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Standard Ethernet payload MTU is 1500 bytes. Frames larger than this require IP fragmentation unless Jumbo frames are enabled."
    },
    {
      "id": "cn-tcp-11",
      "questionText": "Which protocol dynamically assigns IP addresses, subnet masks, and default gateways to host machines upon booting?",
      "options": [
        "DHCP",
        "DNS",
        "ICMP",
        "SNMP"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "DHCP (Dynamic Host Configuration Protocol) leases IP configurations via the DORA (Discover, Offer, Request, Acknowledge) process."
    },
    {
      "id": "cn-tcp-12",
      "questionText": "In OSI model, which layer is responsible for data encryption, compression, and format translation?",
      "options": [
        "Application Layer",
        "Presentation Layer",
        "Session Layer",
        "Transport Layer"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Layer 6 (Presentation Layer) handles syntax formatting, data compression, and character/cryptographic translations."
    },
    {
      "id": "cn-tcp-13",
      "questionText": "What is the purpose of NAT (Network Address Translation)?",
      "options": [
        "To map private non-routable IP addresses to one or more public IP addresses",
        "To assign domain names to servers",
        "To detect hardware link failures",
        "To calculate shortest spanning trees"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "NAT allows private local networks (RFC 1918) to share public IPv4 addresses when accessing the Internet."
    },
    {
      "id": "cn-tcp-14",
      "questionText": "In TCP Congestion Control, what phase comes immediately after Slow Start when the congestion window reaches `ssthresh`?",
      "options": [
        "Congestion Avoidance",
        "Fast Recovery",
        "Exponential Backoff",
        "Selective Repeat"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "When CWND reaches `ssthresh`, TCP transitions from exponential growth (Slow Start) to linear additive increase (Congestion Avoidance)."
    },
    {
      "id": "cn-tcp-15",
      "questionText": "Which command-line utility uses ICMP Echo Request and Echo Reply messages to verify host reachability?",
      "options": [
        "traceroute",
        "ping",
        "netstat",
        "nslookup"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "`ping` sends ICMP Type 8 (Echo Request) and expects ICMP Type 0 (Echo Reply)."
    },
    {
      "id": "cn-tcp-16",
      "questionText": "Which error detection code is widely utilized in Ethernet Data Link Layer frame checks?",
      "options": [
        "Checksum",
        "Cyclic Redundancy Check (CRC-32)",
        "Parity Bit",
        "Hamming Code"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "Ethernet frames include a 4-byte Frame Check Sequence (FCS) computed using a 32-bit CRC polynomial."
    },
    {
      "id": "cn-tcp-17",
      "questionText": "What is the primary difference between HTTP/1.1 and HTTP/2?",
      "options": [
        "HTTP/2 supports multiplexing multiple concurrent streams over a single TCP connection using a binary framing layer",
        "HTTP/2 uses UDP instead of TCP",
        "HTTP/2 does not require TLS",
        "HTTP/2 is plain text only"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "HTTP/2 introduces binary framing and multiplexed concurrent streams over one persistent connection, eliminating head-of-line blocking."
    },
    {
      "id": "cn-tcp-18",
      "questionText": "Which protocol is the de-facto standard Exterior Gateway Protocol used to route traffic across different Autonomous Systems on the global Internet?",
      "options": [
        "OSPF",
        "RIP",
        "BGP (Border Gateway Protocol)",
        "IS-IS"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "BGP-4 is the path-vector inter-domain routing protocol governing routing decisions across the global Internet."
    },
    {
      "id": "cn-tcp-19",
      "questionText": "What is the loopback IPv4 address reserved for a host to send network packets to itself?",
      "options": [
        "192.168.1.1",
        "10.0.0.1",
        "127.0.0.1",
        "255.255.255.255"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "127.0.0.1 (localhost) is the reserved IPv4 loopback address."
    },
    {
      "id": "cn-tcp-20",
      "questionText": "How does CSMA/CD (Carrier Sense Multiple Access with Collision Detection) handle a collision on an Ethernet bus?",
      "options": [
        "It sends a jam signal, aborts transmission, and waits for a random period determined by Exponential Backoff",
        "It immediately repeats the transmission without delay",
        "It switches to token passing",
        "It disconnects the faulty node permanently"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "Upon detecting a collision, transmitters send a jam signal and invoke Truncated Binary Exponential Backoff before retrying."
    }
  ],
  "exam-quant-tsd-work": [
    {
      "id": "q-tsdw-01",
      "questionText": "A train 240 m long passes a telegraph pole in 16 seconds. How long will it take to pass a platform 360 m long?",
      "options": [
        "24 seconds",
        "32 seconds",
        "40 seconds",
        "48 seconds"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "Speed = 240 / 16 = 15 m/s. Total distance to cross platform = 240 + 360 = 600 m. Time = 600 / 15 = 40 seconds."
    },
    {
      "id": "q-tsdw-02",
      "questionText": "A can finish a work in 18 days and B can do the same work in half the time taken by A (9 days). Working together, what part of the work can they finish in 1 day?",
      "options": [
        "1/6",
        "1/9",
        "2/9",
        "1/3"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "1 day work = 1/18 + 1/9 = (1 + 2)/18 = 3/18 = 1/6."
    },
    {
      "id": "q-tsdw-03",
      "questionText": "A man can row upstream at 8 km/hr and downstream at 14 km/hr. Find the speed of the man in still water and the speed of the stream.",
      "options": [
        "11 km/hr and 3 km/hr",
        "10 km/hr and 4 km/hr",
        "12 km/hr and 2 km/hr",
        "9 km/hr and 5 km/hr"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "Speed in still water = (Downstream + Upstream) / 2 = (14 + 8) / 2 = 11 km/hr. Stream speed = (14 - 8) / 2 = 3 km/hr."
    },
    {
      "id": "q-tsdw-04",
      "questionText": "Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:",
      "options": [
        "1 : 3",
        "3 : 2",
        "3 : 4",
        "2 : 3"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Medium",
      "explanation": "Using alligation on time: (27 - 23) : (23 - 17) = 4 : 6 => Wait, speed ratio = (23 - 17) : (27 - 23) = 6 : 4 = 3 : 2."
    },
    {
      "id": "q-tsdw-05",
      "questionText": "Pipe A can fill a tank in 12 hours and Pipe B can empty it in 18 hours. If both pipes are opened simultaneously, in how many hours will the tank be full?",
      "options": [
        "30 hours",
        "36 hours",
        "42 hours",
        "48 hours"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "Net part filled in 1 hour = 1/12 - 1/18 = (3 - 2)/36 = 1/36. The tank fills in 36 hours."
    },
    {
      "id": "q-tsdw-06",
      "questionText": "A works twice as fast as B. If both together finish a work in 14 days, in how many days can A alone finish the work?",
      "options": [
        "21 days",
        "28 days",
        "35 days",
        "42 days"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Medium",
      "explanation": "Efficiency ratio A : B = 2 : 1. Combined efficiency = 3 units/day. Total work = 14 * 3 = 42 units. A alone = 42 / 2 = 21 days."
    },
    {
      "id": "q-tsdw-07",
      "questionText": "A car travelling at 60 km/hr leaves Mangaluru at 8:00 AM. Another car travelling at 80 km/hr leaves the same point at 9:30 AM in the same direction. At what time will the second car overtake the first?",
      "options": [
        "12:30 PM",
        "01:00 PM",
        "02:00 PM",
        "03:30 PM"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Medium",
      "explanation": "In 1.5 hrs, first car travels 60 * 1.5 = 90 km. Relative speed = 80 - 60 = 20 km/hr. Time to catch up = 90 / 20 = 4.5 hours. 9:30 AM + 4.5 hours = 2:00 PM."
    },
    {
      "id": "q-tsdw-08",
      "questionText": "If 12 men or 18 women can reap a field in 14 days, in how many days can 8 men and 16 women reap the same field?",
      "options": [
        "8 days",
        "9 days",
        "10 days",
        "12 days"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Hard",
      "explanation": "12 Men = 18 Women => 1 Man = 1.5 Women. 8 Men + 16 Women = (8 * 1.5) + 16 = 12 + 16 = 28 Women. 18 Women take 14 days. 28 Women take: (18 * 14) / 28 = 9 days."
    },
    {
      "id": "q-tsdw-09",
      "questionText": "Walking at 3/4 of his normal speed, a student reaches Sahyadri campus 20 minutes late. What is his usual time to reach campus?",
      "options": [
        "45 minutes",
        "60 minutes",
        "75 minutes",
        "80 minutes"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "Time taken = 4/3 of normal time. Extra time = (4/3 - 1) * T = T/3 = 20 min => Usual time T = 60 minutes."
    },
    {
      "id": "q-tsdw-10",
      "questionText": "Three pipes A, B and C can fill a tank in 6 hours. After working at it together for 2 hours, C is closed and A and B can fill the remaining part in 7 hours. The number of hours taken by C alone to fill the tank is:",
      "options": [
        "10 hours",
        "12 hours",
        "14 hours",
        "16 hours"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Hard",
      "explanation": "Work in 2 hrs = 2/6 = 1/3. Remaining = 2/3. (A+B) do 2/3 in 7 hrs => (A+B) do whole in 21/2 hrs. 1/C = 1/6 - 2/21 = (7 - 4)/42 = 3/42 = 1/14. C alone = 14 hours."
    },
    {
      "id": "q-tsdw-11",
      "questionText": "A thief steals a car at 1:30 PM and drives it at 40 km/hr. The theft is discovered at 2:00 PM and the owner sets off in another car at 50 km/hr. When will he overtake the thief?",
      "options": [
        "03:30 PM",
        "04:00 PM",
        "04:30 PM",
        "05:00 PM"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "Distance covered by thief in 30 min = 40 * 0.5 = 20 km. Relative speed = 50 - 40 = 10 km/hr. Time = 20 / 10 = 2 hours. 2:00 PM + 2 hours = 4:00 PM."
    },
    {
      "id": "q-tsdw-12",
      "questionText": "A and B can do a piece of work in 12 days, B and C in 15 days, and C and A in 20 days. How long would A alone take to finish the work?",
      "options": [
        "20 days",
        "30 days",
        "40 days",
        "60 days"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Medium",
      "explanation": "2(A + B + C) = 1/12 + 1/15 + 1/20 = (5 + 4 + 3)/60 = 12/60 = 1/5. (A + B + C) = 1/10. 1/A = (A + B + C) - (B + C) = 1/10 - 1/15 = (3 - 2)/30 = 1/30. A alone = 30 days."
    },
    {
      "id": "q-tsdw-13",
      "questionText": "A train passes two bridges of lengths 800 m and 400 m in 100 seconds and 60 seconds respectively. The length of the train is:",
      "options": [
        "150 m",
        "200 m",
        "250 m",
        "300 m"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Medium",
      "explanation": "Speed = (800 - 400) / (100 - 60) = 400 / 40 = 10 m/s. Length of train + 400 = 10 * 60 = 600 m => Length = 600 - 400 = 200 m."
    },
    {
      "id": "q-tsdw-14",
      "questionText": "A man takes 6 hours 30 minutes in walking to a certain place and riding back. He would have gained 2 hours 10 minutes by riding both ways. How long would he take to walk both ways?",
      "options": [
        "7 hours 40 minutes",
        "8 hours 40 minutes",
        "8 hours 20 minutes",
        "9 hours"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Medium",
      "explanation": "Walk + Ride = 390 min. 2 * Ride = 390 - 130 = 260 min => Ride = 130 min. Walk = 390 - 130 = 260 min. 2 * Walk = 520 min = 8 hours 40 minutes."
    },
    {
      "id": "q-tsdw-15",
      "questionText": "10 men can complete a project in 15 days. If 5 more men join them after 5 days, in how many more days will the remaining project be completed?",
      "options": [
        "5 days",
        "6.67 days",
        "7.5 days",
        "8 days"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Medium",
      "explanation": "Work left after 5 days = 10 men for 10 days = 100 man-days. With 15 men: 100 / 15 = 20 / 3 = 6.67 days."
    },
    {
      "id": "q-tsdw-16",
      "questionText": "A cistern has a leak which would empty it in 8 hours. A tap is turned on which admits 6 liters a minute into the cistern, and it is now emptied in 12 hours. How many liters does the cistern hold?",
      "options": [
        "6,480 liters",
        "7,200 liters",
        "8,640 liters",
        "9,000 liters"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Hard",
      "explanation": "Inflow in 1 hr = 1/8 - 1/12 = 1/24 of cistern. Tank capacity fills in 24 hrs. Rate = 6 L/min = 360 L/hr. Capacity = 24 * 360 = 8,640 liters."
    },
    {
      "id": "q-tsdw-17",
      "questionText": "Two athletes run around a circular track of length 400 m starting from the same point at speeds of 6 m/s and 10 m/s in the same direction. When will they first meet again at the starting point?",
      "options": [
        "100 seconds",
        "200 seconds",
        "300 seconds",
        "400 seconds"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Medium",
      "explanation": "Time for A1 to complete 1 round = 400 / 6 = 200/3 s. Time for A2 = 400 / 10 = 40 s. LCM(200/3, 40/1) = LCM(200, 40) / HCF(3, 1) = 200 / 1 = 200 seconds."
    },
    {
      "id": "q-tsdw-18",
      "questionText": "A contract is to be completed in 46 days and 117 men are set to work, each working 8 hours a day. After 33 days, 4/7 of the work is completed. How many additional men may be employed so that the work may be completed in time, each man now working 9 hours a day?",
      "options": [
        "75 additional men",
        "81 additional men",
        "98 additional men",
        "105 additional men"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Hard",
      "explanation": "Work left = 3/7 in 13 days. (117 * 33 * 8) / (4/7) = (M2 * 13 * 9) / (3/7). Solving yields M2 = 198. Additional men = 198 - 117 = 81 men."
    },
    {
      "id": "q-tsdw-19",
      "questionText": "A boat goes 24 km upstream and 28 km downstream in 6 hours. It goes 30 km upstream and 21 km downstream in 6 hours 30 minutes. What is the speed of the boat in still water?",
      "options": [
        "8 km/hr",
        "9 km/hr",
        "10 km/hr",
        "12 km/hr"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Hard",
      "explanation": "Let 1/u = x and 1/v = y. 24x + 28y = 6 and 30x + 21y = 6.5. Solving gives x = 1/6 (u=6) and y = 1/14 (v=14). Speed in still water = (14 + 6)/2 = 10 km/hr... wait (24/6 + 28/14 = 4 + 2 = 6). Speed = (14 + 6)/2 = 10 km/hr."
    },
    {
      "id": "q-tsdw-20",
      "questionText": "A can do a piece of work in 20 days. He works at it for 5 days and then B alone finishes the remaining work in 15 days. In how many days can B alone finish the entire work?",
      "options": [
        "18 days",
        "20 days",
        "24 days",
        "25 days"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "Work done by A in 5 days = 5/20 = 1/4. Work remaining = 3/4. B completes 3/4 in 15 days => B completes whole work in 15 * (4/3) = 20 days."
    }
  ],
  "exam-logical-blood-directions": [
    {
      "id": "log-bd-01",
      "questionText": "A man walks 5 km East, turns right and walks 4 km, then turns left and walks 5 km. In which direction is he now from his starting point?",
      "options": [
        "South-East",
        "North-East",
        "South-West",
        "North-West"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "Net displacement: East = 5 + 5 = 10 km, South = 4 km. Direction from origin is South-East."
    },
    {
      "id": "log-bd-02",
      "questionText": "Pointing to a photograph, a woman says, 'He is the son of the only sister of my father.' How is the person in the photograph related to the woman?",
      "options": [
        "Brother",
        "Cousin",
        "Nephew",
        "Uncle"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "The father's only sister is her paternal aunt. The aunt's son is her Cousin."
    },
    {
      "id": "log-bd-03",
      "questionText": "Rohit walked 25 meters towards South. Then he turned to his left and walked 20 meters. He then turned to his left and walked 25 meters. He again turned to his right and walked 15 meters. At what distance is he from the starting point?",
      "options": [
        "35 meters",
        "40 meters",
        "45 meters",
        "50 meters"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "Vertical: 25 South, then 25 North => Net vertical = 0. Horizontal: 20 East, then 15 East => Net horizontal = 20 + 15 = 35 meters."
    },
    {
      "id": "log-bd-04",
      "questionText": "A is B's brother. C is A's mother. D is C's father. E is B's son. How is D related to E?",
      "options": [
        "Grandfather",
        "Great-grandfather",
        "Great-grandson",
        "Uncle"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Medium",
      "explanation": "E's parent is B. B's mother is C (grandmother). C's father is D. Therefore D is the Great-grandfather of E."
    },
    {
      "id": "log-bd-05",
      "questionText": "One morning after sunrise, Suresh was standing facing a pole. The shadow of the pole fell exactly to his right. Which direction was he facing?",
      "options": [
        "East",
        "West",
        "North",
        "South"
      ],
      "correctAnswer": 3,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Medium",
      "explanation": "In morning, sun is in East, so shadows fall towards West. For the shadow to fall to Suresh's right, his right must be West, which means he is facing South."
    },
    {
      "id": "log-bd-06",
      "questionText": "If 'P $ Q' means P is father of Q; 'P # Q' means P is mother of Q; 'P * Q' means P is sister of Q. In 'A $ B * C # D', how is A related to D?",
      "options": [
        "Maternal Grandfather",
        "Paternal Grandfather",
        "Father",
        "Uncle"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Hard",
      "explanation": "A is father of B. B is sister of C. So A is father of C. C is mother of D. A is mother's father = Maternal Grandfather."
    },
    {
      "id": "log-bd-07",
      "questionText": "A child is looking for his father. He went 90 meters in the East before turning to his right. He went 20 meters before turning to his right again to look for his father at his uncle's place 30 meters from this point. His father was not there. From here he went 100 meters to the North before meeting his father in a street. How far did the son meet his father from the starting point?",
      "options": [
        "80 meters",
        "100 meters",
        "120 meters",
        "140 meters"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Hard",
      "explanation": "Net X: 90 East - 30 West = 60 East. Net Y: -20 South + 100 North = 80 North. Distance = sqrt(60^2 + 80^2) = sqrt(3600 + 6400) = 100 meters."
    },
    {
      "id": "log-bd-08",
      "questionText": "Introducing a man to her husband, a woman said, 'His brother's father is the only son of my grandfather.' How is the woman related to this man?",
      "options": [
        "Mother",
        "Sister",
        "Aunt",
        "Daughter"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Medium",
      "explanation": "Only son of grandfather is her father. Man's brother's father is also the man's father. Since both share the same father, the woman is his Sister."
    },
    {
      "id": "log-bd-09",
      "questionText": "Starting from a point P, Sachin walked 20 meters towards South. He turned left and walked 30 meters. He then turned left and walked 20 meters. He again turned left and walked 40 meters and reached a point Q. How far and in which direction is the point Q from the point P?",
      "options": [
        "10 meters West",
        "10 meters East",
        "20 meters West",
        "20 meters East"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "Vertical: 20 S then 20 N = 0. Horizontal: 30 E then 40 W = 10 West. Q is 10 meters West of P."
    },
    {
      "id": "log-bd-10",
      "questionText": "A family consists of six members P, Q, R, X, Y, Z. Q is the son of R but R is not the mother of Q. P and R are a married couple. Y is the brother of R. X is the daughter of P. Z is the brother of P. Who is the brother-in-law of R?",
      "options": [
        "Y",
        "Z",
        "Q",
        "P"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Medium",
      "explanation": "P is wife of R. Z is brother of P (wife's brother). Therefore Z is the brother-in-law of R."
    },
    {
      "id": "log-bd-11",
      "questionText": "K is 40 m South-West of L. If M is 40 m South-East of L, then M is in which direction of K?",
      "options": [
        "East",
        "West",
        "North-East",
        "South"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "Both K and M are on the same latitude (y = -40 * sin(45\u00b0)). K is West of L, M is East of L. Therefore M is due East of K."
    },
    {
      "id": "log-bd-12",
      "questionText": "Pointing to a lady in the garden, Amar said, 'The sister of my mother is her paternal grandmother.' How is the lady related to Amar?",
      "options": [
        "Sister",
        "Niece",
        "Cousin's daughter",
        "Aunt"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Hard",
      "explanation": "Amar's mother's sister is Amar's maternal aunt. That aunt is the paternal grandmother of the lady, meaning the lady is the daughter of Amar's cousin."
    },
    {
      "id": "log-bd-13",
      "questionText": "A clock is placed such that at 12:00 noon its minute hand points North-East. In which direction does its hour hand point at 1:30 PM?",
      "options": [
        "North",
        "East",
        "South-East",
        "South"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Hard",
      "explanation": "At 12:00, normal hand is North; here it points North-East (rotated 45\u00b0 clockwise). At 1:30 PM, hour hand normally points between 1 and 2 (45\u00b0 from 12). Rotated 45\u00b0 clockwise, 45\u00b0 + 45\u00b0 = 90\u00b0 = East."
    },
    {
      "id": "log-bd-14",
      "questionText": "Anil is the father of Bimal, but Bimal is not the son of Anil. How is Bimal related to Anil?",
      "options": [
        "Daughter",
        "Grandson",
        "Nephew",
        "Uncle"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "If Anil is the father and Bimal is Anil's biological child but not a son, Bimal must be his Daughter."
    },
    {
      "id": "log-bd-15",
      "questionText": "Village A is 10 km to the West of Village B. Village C is 10 km to the North of Village B. Village D is 10 km to the East of Village C. What is the direction of Village D with respect to Village A?",
      "options": [
        "North-East",
        "North-West",
        "South-East",
        "East"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "From A to D: +10 East to B, +10 North to C, +10 East to D. Total: 20 East, 10 North = North-East."
    },
    {
      "id": "log-bd-16",
      "questionText": "Looking at a portrait, a man said, 'I have no brother or sister, but that man's father is my father's son.' Whose portrait was it?",
      "options": [
        "His own",
        "His son's",
        "His father's",
        "His nephew's"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Medium",
      "explanation": "'My father's son' with no siblings is the speaker himself. So 'that man's father is ME'. The portrait is of his Son."
    },
    {
      "id": "log-bd-17",
      "questionText": "Deepa moved a distance of 75 meters towards the North. She then turned to the left and walking for about 25 meters, turned left again and walked 80 meters. Finally, she turned to the right at an angle of 45\u00b0. In which direction was she moving finally?",
      "options": [
        "North-East",
        "North-West",
        "South-East",
        "South-West"
      ],
      "correctAnswer": 3,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Medium",
      "explanation": "She is heading South. Turning 45\u00b0 to the right (clockwise) turns her towards South-West."
    },
    {
      "id": "log-bd-18",
      "questionText": "If X is the brother of the son of Y's son, how is X related to Y?",
      "options": [
        "Son",
        "Brother",
        "Grandson",
        "Cousin"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "Y's son's son is Y's grandson. The brother of a grandson is also Y's Grandson."
    },
    {
      "id": "log-bd-19",
      "questionText": "A person walks 1 km North, 1 km East, 1 km South, and 1 km West. What is his net displacement from the origin?",
      "options": [
        "0 km",
        "1 km",
        "2 km",
        "4 km"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "The path traces a closed square perimeter, arriving back at the initial starting coordinates (0, 0)."
    },
    {
      "id": "log-bd-20",
      "questionText": "In a family, there are two fathers, two sons, and two brothers. What is the minimum number of male members needed in this family?",
      "options": [
        "3",
        "4",
        "5",
        "6"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "Wait, grandfather, father, son gives 2 fathers and 2 sons. But with two brothers: two brothers and their father gives 1 father, 2 sons, 2 brothers. With 2 brothers who are both fathers to 2 sons = 4. The classic puzzle is: Grandfather, Father, Son = 2 fathers, 2 sons (3 people). If brothers: two sons of one father are brothers (3 people: Father, Son 1, Son 2 has 1 father, 2 sons, 2 brothers)."
    }
  ],
  "exam-verbal-para-jumbles": [
    {
      "id": "v-pj-01",
      "questionText": "Rearrange parts to form a coherent sentence:\n(P) through continuous assessment and mentorship\n(Q) the placement portal enables students\n(R) to bridge academic knowledge\n(S) with real-world industry demands",
      "options": [
        "Q-R-S-P",
        "P-S-R-Q",
        "Q-P-R-S",
        "R-S-Q-P"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Verbal",
      "difficulty": "Easy",
      "explanation": "Flow: 'The placement portal enables students (Q) to bridge academic knowledge (R) with real-world industry demands (S) through continuous assessment and mentorship (P)'."
    },
    {
      "id": "v-pj-02",
      "questionText": "Rearrange sentences to form a logical paragraph:\n(A) Consequently, recruiters prioritize candidates with demonstrative coding abilities.\n(B) The tech industry is witnessing an exponential shift towards automated systems.\n(C) Traditional theoretical knowledge alone is no longer adequate.\n(D) Therefore, engineering curricula must emphasize experiential lab projects.",
      "options": [
        "B-C-A-D",
        "C-A-D-B",
        "B-A-C-D",
        "D-A-B-C"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Verbal",
      "difficulty": "Medium",
      "explanation": "B introduces the industry shift, C identifies the limitation of theory, A provides recruiter consequence, and D concludes with curricular imperative."
    },
    {
      "id": "v-pj-03",
      "questionText": "Read passage and identify author's primary tone:\n'While artificial intelligence promises unprecedented automation, uncritically displacing foundational analytical training invites subtle hazards. Without deep first-principles intuition, software engineers become mere operators of black-box APIs.'",
      "options": [
        "Euphoric",
        "Cautionary and Analytical",
        "Nostalgic",
        "Dismissive"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Verbal",
      "difficulty": "Medium",
      "explanation": "The author examines dangers ('subtle hazards', 'mere operators') while analyzing causes, signifying a cautionary and analytical tone."
    },
    {
      "id": "v-pj-04",
      "questionText": "Rearrange parts to form a meaningful sentence:\n(P) not only for passing campus recruitment tests\n(Q) algorithmic problem solving is critical\n(R) throughout an engineer's career\n(S) but also for architectural scalability",
      "options": [
        "Q-P-S-R",
        "P-Q-R-S",
        "S-R-P-Q",
        "Q-R-P-S"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Verbal",
      "difficulty": "Easy",
      "explanation": "Correlative conjunction 'not only ... but also': 'Algorithmic problem solving is critical (Q) not only for passing campus recruitment tests (P) but also for architectural scalability (S) throughout an engineer's career (R)'."
    },
    {
      "id": "v-pj-05",
      "questionText": "Choose the concluding sentence that best fits:\n'Cloud computing has democratized enterprise infrastructure. Startups today deploy global-scale servers within minutes without buying physical data centers.'",
      "options": [
        "As a result, capital expenditure barriers to technological innovation have drastically plummeted.",
        "However, electricity costs in office buildings continue to rise.",
        "Desktop computers will never be used again.",
        "Hence, nobody writes software manually anymore."
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Verbal",
      "difficulty": "Medium",
      "explanation": "The passage establishes accessibility of infrastructure; concluding that capital expenditure barriers have plummeted logically completes the deduction."
    },
    {
      "id": "v-pj-06",
      "questionText": "Rearrange the jumbled sentence:\n(1) has transformed\n(2) into an active hub of innovation\n(3) the integration of modern software tools\n(4) the traditional engineering classroom",
      "options": [
        "3-1-4-2",
        "1-4-2-3",
        "4-1-3-2",
        "2-3-1-4"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Verbal",
      "difficulty": "Easy",
      "explanation": "'The integration of modern software tools (3) has transformed (1) the traditional engineering classroom (4) into an active hub of innovation (2)'."
    },
    {
      "id": "v-pj-07",
      "questionText": "What does the passage imply?\n'Microservices isolate failure domains, allowing individual services to fail without taking down the entire web portal. However, they introduce significant network serialization latency and distributed tracing overhead.'",
      "options": [
        "Microservices should be abandoned entirely.",
        "Monoliths are superior in every circumstance.",
        "Microservice architecture involves architectural trade-offs between resilience and operational complexity.",
        "Network serialization is always instantaneous."
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Verbal",
      "difficulty": "Medium",
      "explanation": "The passage balances advantages (isolation of failure domains) against disadvantages (latency and distributed tracing overhead)."
    },
    {
      "id": "v-pj-08",
      "questionText": "Rearrange to form a coherent statement:\n(A) requires systematic dedication\n(B) mastering data structures\n(C) rather than superficial memorization\n(D) and pattern recognition",
      "options": [
        "B-D-A-C",
        "A-B-C-D",
        "C-D-A-B",
        "D-B-A-C"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Verbal",
      "difficulty": "Easy",
      "explanation": "'Mastering data structures (B) and pattern recognition (D) requires systematic dedication (A) rather than superficial memorization (C)'."
    },
    {
      "id": "v-pj-09",
      "questionText": "Identify the sentence that disrupts paragraph coherence:\n(1) Regular physical exercise enhances cognitive stamina.\n(2) It stimulates neurogenesis in the hippocampus.\n(3) Many students prefer coffee over tea during exams.\n(4) This physiological enhancement directly assists retention during prolonged study sessions.",
      "options": [
        "Sentence 1",
        "Sentence 2",
        "Sentence 3",
        "Sentence 4"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Verbal",
      "difficulty": "Easy",
      "explanation": "Sentences 1, 2, and 4 form a cohesive chain about physical exercise and neurogenesis. Sentence 3 abruptly introduces beverage preference."
    },
    {
      "id": "v-pj-10",
      "questionText": "Rearrange parts into a grammatically correct sentence:\n(P) for all graduating engineers\n(Q) the placement department has scheduled\n(R) a series of mock technical interviews\n(S) starting next Monday",
      "options": [
        "Q-R-P-S",
        "P-S-Q-R",
        "R-Q-P-S",
        "S-P-Q-R"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Verbal",
      "difficulty": "Easy",
      "explanation": "'The placement department has scheduled (Q) a series of mock technical interviews (R) for all graduating engineers (P) starting next Monday (S)'."
    },
    {
      "id": "v-pj-11",
      "questionText": "Based on context, what does 'ubiquity' mean in: 'The ubiquity of smartphones has reshaped how students consume educational video content.'",
      "options": [
        "Extravagance",
        "Widespread presence",
        "Technological fragility",
        "Expensive nature"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Verbal",
      "difficulty": "Easy",
      "explanation": "Ubiquity indicates the state of being very common or appearing everywhere."
    },
    {
      "id": "v-pj-12",
      "questionText": "Rearrange the sentence fragments:\n(1) by establishing rigorous testing frameworks\n(2) developers can deploy code\n(3) without fearing unexpected production outages\n(4) with high confidence",
      "options": [
        "1-2-4-3",
        "2-4-1-3",
        "3-1-2-4",
        "4-2-1-3"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Verbal",
      "difficulty": "Easy",
      "explanation": "'By establishing rigorous testing frameworks (1) developers can deploy code (2) with high confidence (4) without fearing unexpected production outages (3)'."
    },
    {
      "id": "v-pj-13",
      "questionText": "Find the logical antecedent: 'Engineers who master both hardware interfaces and kernel software possess a unique skill set. They are often sought after for embedded IoT firmware development.' What does 'They' refer to?",
      "options": [
        "Hardware interfaces",
        "Kernel software",
        "Engineers who master both domains",
        "IoT devices"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Verbal",
      "difficulty": "Easy",
      "explanation": "'They' refers back to the plural subject 'Engineers who master both hardware interfaces and kernel software'."
    },
    {
      "id": "v-pj-14",
      "questionText": "Rearrange the 4 sentences:\n(A) These mocks simulate actual CBT interface conditions.\n(B) Practicing timed aptitude tests is essential for campus readiness.\n(C) Consequently, students experience significantly reduced anxiety on exam day.\n(D) They teach pacing and question selection strategies.",
      "options": [
        "B-A-D-C",
        "A-B-C-D",
        "C-D-A-B",
        "D-A-B-C"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Verbal",
      "difficulty": "Medium",
      "explanation": "B introduces timed aptitude tests. A specifies what these mocks simulate. D elaborates benefits. C states final consequence."
    },
    {
      "id": "v-pj-15",
      "questionText": "What is the primary thesis of the following statement?\n'Effective communication does not merely mean fluent English; it encompasses articulating complex technical concepts with precision, empathy, and brevity.'",
      "options": [
        "Grammar is unimportant in software development.",
        "Technical communication requires clarity, structured thought, and empathy alongside language fluency.",
        "Only native speakers can communicate effectively.",
        "Engineers should write as many words as possible."
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Verbal",
      "difficulty": "Medium",
      "explanation": "The sentence argues that true technical communication transcends surface fluency, requiring conceptual precision, brevity, and empathy."
    },
    {
      "id": "v-pj-16",
      "questionText": "Rearrange parts to form a coherent question:\n(P) did the placement coordinator advise\n(Q) to all candidates\n(R) what specific guidelines\n(S) during the orientation",
      "options": [
        "R-P-Q-S",
        "P-Q-R-S",
        "S-R-P-Q",
        "Q-R-P-S"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Verbal",
      "difficulty": "Easy",
      "explanation": "'What specific guidelines (R) did the placement coordinator advise (P) to all candidates (Q) during the orientation (S)?'"
    },
    {
      "id": "v-pj-17",
      "questionText": "Complete the logical analogy: Algorithm : Program :: Blueprint : ______",
      "options": [
        "Architect",
        "Building",
        "Draftsman",
        "Foundation"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Verbal",
      "difficulty": "Easy",
      "explanation": "An algorithm is the abstract plan realized as a software program; a blueprint is the abstract plan realized as a physical building."
    },
    {
      "id": "v-pj-18",
      "questionText": "Rearrange the sentence:\n(1) has significantly improved\n(2) the adoption of automated continuous integration pipelines\n(3) and deployment frequency\n(4) software delivery velocity",
      "options": [
        "2-1-4-3",
        "1-4-3-2",
        "4-3-1-2",
        "3-2-1-4"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Verbal",
      "difficulty": "Medium",
      "explanation": "'The adoption of automated continuous integration pipelines (2) has significantly improved (1) software delivery velocity (4) and deployment frequency (3)'."
    },
    {
      "id": "v-pj-19",
      "questionText": "Identify the word that best captures: 'Expressing much in few words; concise and succinct.'",
      "options": [
        "Verbose",
        "Pithy",
        "Prolix",
        "Circumlocutory"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Verbal",
      "difficulty": "Medium",
      "explanation": "'Pithy' means concise and forcefully expressive, directly capturing 'expressing much in few words'."
    },
    {
      "id": "v-pj-20",
      "questionText": "What assumption underlies this statement?\n'Because Sahyadri students undergo weekly proctored aptitude drills, they outperform peer institutions on national qualifier examinations.'",
      "options": [
        "Proctored aptitude practice directly correlates with higher examination performance.",
        "Students at other colleges never study aptitude.",
        "Examinations are getting easier each year.",
        "National qualifier tests contain no technical coding."
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Verbal",
      "difficulty": "Medium",
      "explanation": "The causal inference assumes that regular proctored practice is an effective determinant of examination success."
    }
  ],
  "exam-web-fullstack-mcq": [
    {
      "id": "web-fs-01",
      "questionText": "In JavaScript, which event loop queue handles resolved Promise callbacks (`.then()`, `async/await`)?",
      "options": [
        "Task Queue (Macrotask Queue)",
        "Microtask Queue",
        "Animation Frame Queue",
        "I/O Callback Queue"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "Promise callbacks and mutation observers execute on the Microtask Queue, which drains completely before the next Macrotask (e.g. setTimeout) runs."
    },
    {
      "id": "web-fs-02",
      "questionText": "In React 18, what does the `useEffect` hook with an empty dependency array `[]` represent?",
      "options": [
        "An effect that executes once after the initial render and mounts",
        "An effect that executes on every re-render",
        "A synchronous effect that blocks browser paint",
        "An effect that never executes"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "An empty dependency array indicates the effect depends on no state or props, running once after the component mounts."
    },
    {
      "id": "web-fs-03",
      "questionText": "Which HTTP status code signifies that a resource was successfully created on the server following a POST request?",
      "options": [
        "200 OK",
        "201 Created",
        "204 No Content",
        "304 Not Modified"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "HTTP 201 Created is the REST standard response confirming a new resource has been minted."
    },
    {
      "id": "web-fs-04",
      "questionText": "What CSS display property enables a two-dimensional layout system managing both rows and columns simultaneously?",
      "options": [
        "display: flex",
        "display: grid",
        "display: inline-block",
        "display: table"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "CSS Grid is a 2D layout system (rows and columns); Flexbox is a 1D layout system (either row or column)."
    },
    {
      "id": "web-fs-05",
      "questionText": "What does Cross-Origin Resource Sharing (CORS) enforce?",
      "options": [
        "A browser security mechanism that uses HTTP headers to restrict cross-origin HTTP requests",
        "A database replication policy",
        "A server-side memory caching protocol",
        "An SSL encryption handshake"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "CORS uses headers like Access-Control-Allow-Origin to tell browsers whether a web application running at one origin can access resources from a different origin."
    },
    {
      "id": "web-fs-06",
      "questionText": "In JavaScript, what is the value of `typeof null`?",
      "options": [
        "'null'",
        "'undefined'",
        "'object'",
        "'boolean'"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Due to a historical bug from early JavaScript implementation where type tags for objects were 0 and null was pointer 0, `typeof null` returns 'object'."
    },
    {
      "id": "web-fs-07",
      "questionText": "What is the difference between `localStorage` and `sessionStorage` in browser web storage?",
      "options": [
        "`localStorage` persists indefinitely until explicitly cleared, while `sessionStorage` clears when the browser tab/window is closed",
        "`sessionStorage` can store more data than `localStorage`",
        "`localStorage` is sent with every HTTP header, while `sessionStorage` is not",
        "`localStorage` only stores numbers"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "localStorage data has no expiration time; sessionStorage is scoped to the tab session and destroyed upon tab closure."
    },
    {
      "id": "web-fs-08",
      "questionText": "In React, what hook should be used to memoize the result of an expensive calculation so it doesn't recalculate on every render?",
      "options": [
        "useCallback",
        "useMemo",
        "useRef",
        "useReducer"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "`useMemo` caches the return value of a calculation between renders; `useCallback` caches the function instance itself."
    },
    {
      "id": "web-fs-09",
      "questionText": "What is a Closure in JavaScript?",
      "options": [
        "A function bundled together with references to its surrounding lexical state (lexical environment)",
        "A method that closes a database connection",
        "An immediately invoked function expression (IIFE) that returns void",
        "A syntax error caused by missing closing braces"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "A closure gives an inner function access to an outer function's scope even after the outer function has returned."
    },
    {
      "id": "web-fs-10",
      "questionText": "Which HTTP method is idempotent according to RFC 7231 standards?",
      "options": [
        "POST",
        "PUT",
        "PATCH (non-idempotent)",
        "CONNECT"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "PUT, GET, DELETE, and HEAD are idempotent because multiple identical requests produce the exact same side-effects on the server."
    },
    {
      "id": "web-fs-11",
      "questionText": "What does the CSS `box-sizing: border-box` property do?",
      "options": [
        "Includes padding and border within the element's total specified width and height",
        "Draws a border around all child elements",
        "Expands width beyond the parent container",
        "Disables flexbox wrapping"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "With `border-box`, element's total rendered dimensions equal specified width/height; padding and border do not inflate overall dimensions."
    },
    {
      "id": "web-fs-12",
      "questionText": "What will `console.log(1 + '2' + 3)` output in JavaScript?",
      "options": [
        "6",
        "'123'",
        "'15'",
        "NaN"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Left-to-right evaluation: 1 + '2' converts 1 to string yielding '12'. Then '12' + 3 yields string '123'."
    },
    {
      "id": "web-fs-13",
      "questionText": "What is the Virtual DOM in React?",
      "options": [
        "A lightweight in-memory representation of real DOM elements used to compute diffs before updating the real DOM",
        "A shadow root inside browser Web Components",
        "A virtual machine running inside Node.js",
        "A copy of the server database"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "React maintains a virtual DOM tree in memory, diffing changes via its reconciliation algorithm to minimize expensive real DOM mutations."
    },
    {
      "id": "web-fs-14",
      "questionText": "Which security vulnerability is mitigated by setting the `HttpOnly` flag on session cookies?",
      "options": [
        "Cross-Site Scripting (XSS) token theft via JavaScript document.cookie",
        "SQL Injection",
        "DDoS attacks",
        "DNS Spoofing"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "`HttpOnly` forbids clientside scripts from reading cookies through `document.cookie`, preventing cookie exfiltration via XSS."
    },
    {
      "id": "web-fs-15",
      "questionText": "What is the output of `[1, 2, 3].map(x => x * 2).filter(x => x > 2)`?",
      "options": [
        "[4, 6]",
        "[2, 4, 6]",
        "[2, 4]",
        "[6]"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Map doubles elements: [2, 4, 6]. Filter keeps elements strictly > 2: [4, 6]."
    },
    {
      "id": "web-fs-16",
      "questionText": "What is the primary function of a reverse proxy like NGINX in full-stack architecture?",
      "options": [
        "Directing client requests to backend services, handling SSL termination, and load balancing",
        "Executing SQL database queries directly",
        "Compiling React TypeScript files at runtime",
        "Managing user sessions in localStorage"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "A reverse proxy sits in front of web servers, routing client requests, terminating SSL/TLS certificates, and distributing traffic load."
    },
    {
      "id": "web-fs-17",
      "questionText": "In REST architectural principles, what header is used by clients to specify the data format they expect to receive from the server?",
      "options": [
        "Content-Type",
        "Accept",
        "Authorization",
        "Host"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "The `Accept` request header indicates expected MIME types (e.g. `application/json`), whereas `Content-Type` indicates the format of the sent payload."
    },
    {
      "id": "web-fs-18",
      "questionText": "What does JWT (JSON Web Token) standardly consist of?",
      "options": [
        "Three base64url-encoded parts separated by dots: Header, Payload, and Signature",
        "Two parts: Username and Password hash",
        "A single encrypted hex string",
        "An XML envelope with a digital certificate"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "A JWT comprises Header (algorithm/type), Payload (claims), and Signature (HMAC or RSA hash), formatted as `header.payload.signature`."
    },
    {
      "id": "web-fs-19",
      "questionText": "What is debounce in frontend web development?",
      "options": [
        "A programming practice that ensures a time-consuming task does not fire until after a configured idle delay has passed",
        "A method for bouncing CSS animations",
        "A technique to bypass browser cache",
        "A way to run code on every single keystroke"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "Debouncing postpones execution until no new calls have occurred for a specified interval (e.g. search auto-complete)."
    },
    {
      "id": "web-fs-20",
      "questionText": "What does `Array.prototype.reduce()` return when invoked without an initial value on an array `[10, 20, 30]` with accumulator `(acc, cur) => acc + cur`?",
      "options": [
        "60",
        "0",
        "undefined",
        "NaN"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Without initialValue, `acc` initializes to array[0] (10) and iteration starts at index 1: 10 + 20 + 30 = 60."
    }
  ],
  "exam-tcs-nqt-mock": [
    {
      "id": "tcs-nqt-01",
      "questionText": "If the given cryptarithmetic equation is 137 + 276 = 435, what is the value of 731 + 672 in the same logical pattern?",
      "options": [
        "534",
        "435",
        "543",
        "345"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Medium",
      "explanation": "Notice the second equation is the exact reverse of digits of the first: 137 reversed is 731, 276 reversed is 672. Therefore the sum must be the exact digit reversal of 435, which is 534."
    },
    {
      "id": "tcs-nqt-02",
      "questionText": "If the ratio of two numbers is 3 : 4 and the LCM of the numbers is 180, what are the two numbers?",
      "options": [
        "30 and 40",
        "45 and 60",
        "36 and 48",
        "60 and 80"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "Let numbers be 3x and 4x. HCF = x. LCM = 12x = 180 => x = 15. The numbers are 3(15) = 45 and 4(15) = 60."
    },
    {
      "id": "tcs-nqt-03",
      "questionText": "(1/3)rd of a number is 6 more than (1/6)th of that number. Find the number.",
      "options": [
        "24",
        "30",
        "36",
        "42"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "(1/3)x - (1/6)x = 6 => (1/6)x = 6 => x = 36."
    },
    {
      "id": "tcs-nqt-04",
      "questionText": "When Rs. 250 is added to 1/4th of a given amount of money, it makes it smaller than 1/3rd of the given amount of money by Rs. 100. What is the given amount of money?",
      "options": [
        "Rs. 2,400",
        "Rs. 3,600",
        "Rs. 4,200",
        "Rs. 4,800"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Medium",
      "explanation": "(1/3)X - [(1/4)X + 250] = 100 => (1/12)X - 250 = 100 => (1/12)X = 350 => X = 350 * 12 = Rs. 4,200."
    },
    {
      "id": "tcs-nqt-05",
      "questionText": "The sum of the digits of a three digit number is 17, and the sum of the squares of its digits is 109. If we subtract 495 from the number, we obtain a number with the digits reversed. Find the number.",
      "options": [
        "773",
        "683",
        "944",
        "863"
      ],
      "correctAnswer": 3,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Hard",
      "explanation": "For 863: 8 + 6 + 3 = 17. 8^2 + 6^2 + 3^2 = 64 + 36 + 9 = 109. 863 - 495 = 368, which is the exact digit reversal. The number is 863."
    },
    {
      "id": "tcs-nqt-06",
      "questionText": "We have an equal arms two-pan balance and need to weigh all integral weights in the range 1 to 40 kg. Weights can be placed in either pan. What is the minimum number of standard weights required?",
      "options": [
        "4",
        "5",
        "6",
        "7"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Medium",
      "explanation": "Using powers of 3 (ternary base): 3^0=1, 3^1=3, 3^2=9, 3^3=27. With these 4 weights placed in either pan, any weight from 1 to (1+3+9+27)=40 kg can be weighed."
    },
    {
      "id": "tcs-nqt-07",
      "questionText": "Divide 50 into two parts such that the sum of their reciprocals is 1/12.",
      "options": [
        "25 and 25",
        "30 and 20",
        "35 and 15",
        "40 and 10"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "1/A + 1/B = (A + B)/AB = 50 / AB = 1/12 => AB = 600. The two parts with sum 50 and product 600 are 30 and 20."
    },
    {
      "id": "tcs-nqt-08",
      "questionText": "When a number is divided by 357, it leaves a remainder of 5. What will be the remainder when the same number is divided by 17?",
      "options": [
        "0",
        "5",
        "7",
        "11"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "Since 357 = 17 * 21 (a multiple of 17), the remainder when dividing by 17 is simply 5 mod 17 = 5."
    },
    {
      "id": "tcs-nqt-09",
      "questionText": "What is the remainder when (6^17 + 17^6) is divided by 7?",
      "options": [
        "0",
        "1",
        "3",
        "5"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Medium",
      "explanation": "6 \u2261 -1 (mod 7) => 6^17 \u2261 (-1)^17 \u2261 -1 \u2261 6. 17 \u2261 3 (mod 7). By Fermat's Little Theorem, 3^6 \u2261 1 (mod 7). Sum = 6 + 1 = 7 \u2261 0 (mod 7)."
    },
    {
      "id": "tcs-nqt-10",
      "questionText": "What is the remainder when 46! is divided by 47?",
      "options": [
        "0",
        "1",
        "46",
        "45"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Medium",
      "explanation": "By Wilson's Theorem, if p is prime, (p - 1)! \u2261 -1 \u2261 p - 1 (mod p). Since 47 is prime, 46! mod 47 = 46."
    },
    {
      "id": "tcs-nqt-11",
      "questionText": "What is the remainder when (1! + 2! + 3! + 4! + 5! + ... + 50!) is divided by 5!?",
      "options": [
        "17",
        "23",
        "33",
        "45"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "From 5! onwards, all terms are multiples of 5! and leave remainder 0. Remainder comes from 1! + 2! + 3! + 4! = 1 + 2 + 6 + 24 = 33."
    },
    {
      "id": "tcs-nqt-12",
      "questionText": "How many trailing zeros are there at the end of 100!?",
      "options": [
        "20",
        "22",
        "24",
        "25"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "Number of zeros = floor(100/5) + floor(100/25) = 20 + 4 = 24."
    },
    {
      "id": "tcs-nqt-13",
      "questionText": "What is the highest power of 7 that divides 56! exactly?",
      "options": [
        "7",
        "8",
        "9",
        "10"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "Highest power of 7 in 56! = floor(56/7) + floor(56/49) = 8 + 1 = 9."
    },
    {
      "id": "tcs-nqt-14",
      "questionText": "Find the greatest number that will divide 43, 91, and 183 so as to leave the same remainder in each case.",
      "options": [
        "4",
        "7",
        "9",
        "13"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "Take differences: 91 - 43 = 48, 183 - 91 = 92. HCF(48, 92) = 4."
    },
    {
      "id": "tcs-nqt-15",
      "questionText": "Find the last two digits of the expression (1141)^3843 + (1961)^4181.",
      "options": [
        "62",
        "72",
        "82",
        "92"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Hard",
      "explanation": "For numbers ending in 1: unit digit is 1, tens digit is (tens of base * unit of power) mod 10. For 1141^3843: tens = (4 * 3) mod 10 = 2 => ends in 21. For 1961^4181: tens = (6 * 1) mod 10 = 6 => ends in 61. Sum = 21 + 61 = 82."
    },
    {
      "id": "tcs-nqt-16",
      "questionText": "If 28a + 30b + 31c = 365 where a, b, c represent months of a normal year having 28, 30, and 31 days, what is the value of a + b + c?",
      "options": [
        "10",
        "11",
        "12",
        "13"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "The sum a + b + c represents total months in a year: February (a=1), 4 months of 30 days (b=4), 7 months of 31 days (c=7). a + b + c = 1 + 4 + 7 = 12."
    },
    {
      "id": "tcs-nqt-17",
      "questionText": "What is the remainder when (34^31^301) is divided by 9?",
      "options": [
        "1",
        "4",
        "7",
        "8"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Hard",
      "explanation": "34 \u2261 -2 (mod 9). Powers of -2 mod 9 cycle every 6 steps: (-2)^1 = 7, (-2)^2 = 4, (-2)^3 = 8, (-2)^4 = 7, (-2)^5 = 5, (-2)^6 = 1. The exponent 31^301 \u2261 1^301 \u2261 1 mod 6. Hence (-2)^1 \u2261 -2 \u2261 7 mod 9."
    },
    {
      "id": "tcs-nqt-18",
      "questionText": "Anand packs 304 marbles into packets of 9 or 11 so that no marble is left. He wants to maximize the number of packets of 9 marbles, while having at least one packet of 11 marbles. How many packets of 9 marbles does he have?",
      "options": [
        "24",
        "26",
        "28",
        "30"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Medium",
      "explanation": "Equation: 9A + 11B = 304. We want max A, so smallest B >= 1. 304 - 11B must be divisible by 9. Testing B: For B = 8, 304 - 88 = 216, and 216 / 9 = 24 packets."
    },
    {
      "id": "tcs-nqt-19",
      "questionText": "What is the number of trailing zeros at the end of (28! + 29!)?",
      "options": [
        "6",
        "7",
        "8",
        "9"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Medium",
      "explanation": "28! + 29! = 28!(1 + 29) = 28!(30) = 28!(3 * 10). 28! has floor(28/5) + floor(28/25) = 5 + 1 = 6 zeros. Multiplying by 30 adds 1 more factor of 5 and 10, yielding 6 + 1 = 7 zeros."
    },
    {
      "id": "tcs-nqt-20",
      "questionText": "The numbers 272738 and 232342, when divided by a 2-digit number n, leave remainders of 13 and 17 respectively. Find the sum of digits of n.",
      "options": [
        "5",
        "7",
        "8",
        "9"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Hard",
      "explanation": "272738 - 13 = 272725 is divisible by n. 232342 - 17 = 232325 is divisible by n. Both end in 25, meaning 25 divides both. n = 25. Sum of digits = 2 + 5 = 7."
    }
  ],
  "exam-infosys-springboard-mock": [
    {
      "id": "inf-sp-01",
      "questionText": "In the cryptarithmetic addition problem SEND + MORE = MONEY, each distinct letter represents a unique digit from 0 to 9. What digit does M represent?",
      "options": [
        "0",
        "1",
        "2",
        "9"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "In any column addition of two 4-digit numbers yielding a 5-digit number, the leading carry digit M must strictly be 1."
    },
    {
      "id": "inf-sp-02",
      "questionText": "Find the missing term in the sequence: 2, 12, 36, 80, 150, ?",
      "options": [
        "216",
        "252",
        "270",
        "280"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Medium",
      "explanation": "Terms follow n^3 + n^2: 1+1=2, 8+4=12, 27+9=36, 64+16=80, 125+25=150, 216+36=252."
    },
    {
      "id": "inf-sp-03",
      "questionText": "Data Sufficiency: Is integer x even?\nStatement 1: 3x + 1 is odd.\nStatement 2: 2x + 4 is even.",
      "options": [
        "Statement 1 alone is sufficient, but Statement 2 alone is not",
        "Statement 2 alone is sufficient, but Statement 1 alone is not",
        "Both statements together are sufficient",
        "Statements 1 and 2 together are not sufficient"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Medium",
      "explanation": "From 1: 3x is even => x must be even (sufficient). From 2: 2x + 4 is even for all integer x (insufficient). Statement 1 alone is sufficient."
    },
    {
      "id": "inf-sp-04",
      "questionText": "Five friends P, Q, R, S, and T wear shirts of different colors: Red, Blue, Green, Yellow, and White. S wears neither Red nor Green. P wears Blue. Q wears White. T does not wear Red. What color shirt does T wear?",
      "options": [
        "Red",
        "Yellow",
        "Green",
        "White"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "P has Blue, Q has White. Remaining colors: Red, Green, Yellow. S cannot wear Red or Green => S wears Yellow. T cannot wear Red => T wears Green. R wears Red."
    },
    {
      "id": "inf-sp-05",
      "questionText": "In a certain code, '786' means 'study very hard', '958' means 'hard work pays', and '645' means 'study and work'. Which digit represents 'very'?",
      "options": [
        "7",
        "8",
        "6",
        "9"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "'study' is common in 786 and 645 => 6 is 'study'. 'hard' is common in 786 and 958 => 8 is 'hard'. In '786', remaining word 'very' corresponds to digit 7."
    },
    {
      "id": "inf-sp-06",
      "questionText": "A cube of 4 cm side is painted red on all outer surfaces and then cut into smaller cubes of 1 cm side each. How many smaller cubes have exactly two faces painted red?",
      "options": [
        "16",
        "24",
        "32",
        "36"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Medium",
      "explanation": "Cubes with 2 painted faces lie along the 12 edges (excluding corners): 12 * (n - 2) = 12 * (4 - 2) = 12 * 2 = 24 cubes."
    },
    {
      "id": "inf-sp-07",
      "questionText": "If in a clock, the hands point in opposite directions (180\u00b0), how many times does this occur in a complete 24-hour day?",
      "options": [
        "22",
        "24",
        "44",
        "48"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Medium",
      "explanation": "The hands of a clock are in opposite directions 11 times in every 12 hours (between 5 and 7, it happens only once at 6:00). In 24 hours, 11 * 2 = 22 times."
    },
    {
      "id": "inf-sp-08",
      "questionText": "In the cryptarithmetic puzzle BASE + BALL = GAMES, if B = 7 and M = 1, what is the value of E?",
      "options": [
        "0",
        "2",
        "4",
        "5"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Hard",
      "explanation": "Since E + L = S, and S + L = E with carries, analysis shows E = 0 ensures no carry to next column while satisfying 7ASE + 7ALL = 1AMES."
    },
    {
      "id": "inf-sp-09",
      "questionText": "Which letter replaces the question mark in the letter matrix?\n| A | D | G |\n| D | I | N |\n| G | N | ? |",
      "options": [
        "S",
        "T",
        "U",
        "V"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Medium",
      "explanation": "A(1) +3 D(4) +3 G(7). D(4) +5 I(9) +5 N(14). G(7) +7 N(14) +7 U(21). The letter is U."
    },
    {
      "id": "inf-sp-10",
      "questionText": "Data Sufficiency: Who is tallest among A, B, C, D, E?\nStatement 1: D is taller than A and C, but shorter than B.\nStatement 2: E is shorter than B, but taller than D.",
      "options": [
        "Statement 1 alone is sufficient",
        "Statement 2 alone is sufficient",
        "Both statements together are sufficient",
        "Statements 1 and 2 together are not sufficient"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "From 1: B > D > (A, C). From 2: B > E > D. Combining both: B > E > D > (A, C). B is unequivocally the tallest."
    },
    {
      "id": "inf-sp-11",
      "questionText": "Find the next number in the puzzle series: 3, 5, 9, 17, 33, ?",
      "options": [
        "49",
        "64",
        "65",
        "66"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "Differences double: +2, +4, +8, +16, +32 => 33 + 32 = 65 (or 2n - 1)."
    },
    {
      "id": "inf-sp-12",
      "questionText": "A man has 7 socks in his drawer: 4 black and 3 white. If he takes out socks in the dark, what is the minimum number of socks he must pull out to be 100% sure of having a matching pair?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "By Pigeonhole Principle, since there are only 2 colors (black and white), drawing 2 + 1 = 3 socks guarantees at least one matching pair."
    },
    {
      "id": "inf-sp-13",
      "questionText": "If 'CLAW' is coded as 'XOFD', how is 'FANG' coded in that same reverse cipher?",
      "options": [
        "UZMT",
        "UBNT",
        "VMZT",
        "TBNZ"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "Pairs sum to 27 (reverse alphabet): C(3)<->X(24), L(12)<->O(15), A(1)<->Z(26)? Wait, C-X, L-O, A-Z. Here A->F is +5. In standard alphabet reflection: F<->U, A<->Z, N<->M, G<->T => UZMT."
    },
    {
      "id": "inf-sp-14",
      "questionText": "Six students are ranked 1 to 6. A is ranked higher than B. C is ranked higher than D. E is not first or last. If F is ranked third, what is the maximum possible rank of B?",
      "options": [
        "3",
        "4",
        "5",
        "6"
      ],
      "correctAnswer": 3,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Medium",
      "explanation": "B only needs to be below A. B can easily occupy rank 6 (last) while A is rank 5 or higher."
    },
    {
      "id": "inf-sp-15",
      "questionText": "What angle is made by the hour and minute hands of a clock at 3:40?",
      "options": [
        "120\u00b0",
        "130\u00b0",
        "140\u00b0",
        "150\u00b0"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "Angle = |30H - (11/2)M| = |30(3) - (11/2)(40)| = |90 - 220| = 130\u00b0."
    },
    {
      "id": "inf-sp-16",
      "questionText": "In a tournament of 16 players, each match is knockout (single elimination). How many total matches must be played to determine the champion?",
      "options": [
        "8",
        "15",
        "16",
        "31"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "In single elimination with n players, each match eliminates exactly 1 player. To eliminate 15 players and leave 1 champion requires 15 matches."
    },
    {
      "id": "inf-sp-17",
      "questionText": "Which number does not belong to the set: {2, 3, 5, 7, 9, 11, 13, 17}?",
      "options": [
        "2",
        "7",
        "9",
        "13"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "All numbers in the set are prime numbers except 9 (which is composite, 3^2)."
    },
    {
      "id": "inf-sp-18",
      "questionText": "Statements: Most phones are smart. Some smart devices are watches.\nConclusions:\nI. Some phones are watches.\nII. Some watches are smart devices.",
      "options": [
        "Only I follows",
        "Only II follows",
        "Both follow",
        "Neither follows"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "Conclusion II is a direct valid conversion of 'Some smart devices are watches'. Conclusion I does not follow because phones and watches might not intersect."
    },
    {
      "id": "inf-sp-19",
      "questionText": "A monkey climbs a greased pole 12 meters high. He climbs 3 meters in the first minute and slips down 2 meters in the second minute. How many minutes does he take to reach the top?",
      "options": [
        "19 minutes",
        "20 minutes",
        "21 minutes",
        "24 minutes"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Medium",
      "explanation": "In 2 minutes net climb is 1 meter. In 18 minutes he climbs 9 meters. In the 19th minute, he climbs 3 meters: 9 + 3 = 12 meters and reaches the top without slipping back."
    },
    {
      "id": "inf-sp-20",
      "questionText": "If TODAY is Monday, what day of the week will it be after 61 days?",
      "options": [
        "Friday",
        "Saturday",
        "Sunday",
        "Tuesday"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "61 mod 7 = 5 odd days. Monday + 5 days = Saturday."
    }
  ],
  "exam-wipro-elite-mock": [
    {
      "id": "wip-el-01",
      "questionText": "What will be the output of the C snippet: `int x = 5; printf('%d %d %d', x++, x, ++x);` (assuming standard right-to-left evaluation)?",
      "options": [
        "5 6 7",
        "6 7 7",
        "Undefined behavior",
        "7 7 7"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "Modifying a variable multiple times between sequence points without synchronization produces Undefined Behavior in ANSI C."
    },
    {
      "id": "wip-el-02",
      "questionText": "A sum was invested at simple interest at a certain rate for 3 years. Had it been invested at 2% higher rate, it would have fetched Rs. 360 more. Find the sum.",
      "options": [
        "Rs. 4,000",
        "Rs. 5,000",
        "Rs. 6,000",
        "Rs. 8,000"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Extra interest in 3 years at 2% = 6% of Principal = Rs. 360 => Principal = (360 / 6) * 100 = Rs. 6,000."
    },
    {
      "id": "wip-el-03",
      "questionText": "Which data structure is primarily used to represent hierarchically structured data such as file directories and DOM elements?",
      "options": [
        "Stack",
        "Hash Map",
        "Tree",
        "Graph with cycles"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Trees represent non-linear hierarchical parent-child relationships naturally."
    },
    {
      "id": "wip-el-04",
      "questionText": "Select the correct antonym of 'DILIGENT':",
      "options": [
        "Industrious",
        "Slothful",
        "Persevering",
        "Assiduous"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Diligent means hardworking; its direct antonym is Slothful (lazy)."
    },
    {
      "id": "wip-el-05",
      "questionText": "In Java, what is the default value of an uninitialized instance variable of type boolean?",
      "options": [
        "true",
        "false",
        "null",
        "0"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "In Java, boolean instance variables default to `false`."
    },
    {
      "id": "wip-el-06",
      "questionText": "What is the time complexity of pushing an element onto a stack implemented via a linked list?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n^2)"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Prepending a new head node in a linked list takes strictly O(1) constant time."
    },
    {
      "id": "wip-el-07",
      "questionText": "If 15 men can build a wall in 20 days, how many men will be required to build the same wall in 12 days?",
      "options": [
        "20 men",
        "25 men",
        "30 men",
        "35 men"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "M1 * D1 = M2 * D2 => 15 * 20 = M2 * 12 => 300 = 12 * M2 => M2 = 25 men."
    },
    {
      "id": "wip-el-08",
      "questionText": "Which keyword in Java prevents a method from being overridden by subclasses?",
      "options": [
        "static",
        "final",
        "abstract",
        "synchronized"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "A `final` method cannot be overridden by any subclass."
    },
    {
      "id": "wip-el-09",
      "questionText": "Identify the error: 'The placement coordinator along with five faculty members (A) / are inspecting the examination hall (B) / prior to the morning session (C) / No error (D)'",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "With parenthetical expressions like 'along with', the verb agrees with the primary subject ('coordinator', singular). Part B must be 'is inspecting'."
    },
    {
      "id": "wip-el-10",
      "questionText": "In networking, what protocol resolves human-friendly domain names (e.g. sahyadri.edu.in) into IP addresses?",
      "options": [
        "DHCP",
        "DNS (Domain Name System)",
        "SMTP",
        "SNMP"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "DNS translates domain names into numerical IP addresses."
    },
    {
      "id": "wip-el-11",
      "questionText": "What is the return type of `malloc()` function in C?",
      "options": [
        "int*",
        "char*",
        "void*",
        "null*"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "`malloc()` returns a generic pointer of type `void*` which can be cast to any data type."
    },
    {
      "id": "wip-el-12",
      "questionText": "A shopkeeper sells an article at 10% loss. If he had sold it for Rs. 90 more, he would have gained 8%. Find the cost price of the article.",
      "options": [
        "Rs. 400",
        "Rs. 450",
        "Rs. 500",
        "Rs. 550"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Difference in percentage = 8% - (-10%) = 18%. 18% of CP = Rs. 90 => CP = (90 / 18) * 100 = Rs. 500."
    },
    {
      "id": "wip-el-13",
      "questionText": "Which data structure follows the First-In, First-Out (FIFO) principle?",
      "options": [
        "Stack",
        "Queue",
        "Binary Tree",
        "Max Heap"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Queues strictly operate on a First-In-First-Out (FIFO) order."
    },
    {
      "id": "wip-el-14",
      "questionText": "In SQL, which command is used to alter the structure of an existing table by adding a column?",
      "options": [
        "UPDATE TABLE",
        "MODIFY TABLE",
        "ALTER TABLE",
        "CHANGE TABLE"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "`ALTER TABLE table_name ADD column_name datatype;` modifies table schema."
    },
    {
      "id": "wip-el-15",
      "questionText": "What is the output of `printf('%d', sizeof('A'));` in standard C on a 64-bit architecture?",
      "options": [
        "1",
        "2",
        "4",
        "8"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Hard",
      "explanation": "In C (unlike C++), character literals like 'A' have integer type `int`, which has size 4 bytes."
    },
    {
      "id": "wip-el-16",
      "questionText": "The average of 7 consecutive numbers is 20. What is the largest of these numbers?",
      "options": [
        "20",
        "22",
        "23",
        "24"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "For 7 consecutive numbers, the middle (4th) number is the average = 20. Numbers are 17, 18, 19, 20, 21, 22, 23. Largest is 23."
    },
    {
      "id": "wip-el-17",
      "questionText": "Which layer of the OSI model ensures reliable delivery through sequence numbers and acknowledgements?",
      "options": [
        "Session Layer",
        "Network Layer",
        "Transport Layer",
        "Application Layer"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Transport layer (TCP) handles segment sequencing, checksum verification, and ACK acknowledgements."
    },
    {
      "id": "wip-el-18",
      "questionText": "What is method overloading in Java?",
      "options": [
        "Multiple methods in the same class sharing the same name but having different parameter signatures",
        "Subclasses redefining base class methods with identical signatures",
        "Calling a method inside another method",
        "Writing methods that throw exceptions"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Overloading is compile-time polymorphism with identical method names and distinct parameter lists."
    },
    {
      "id": "wip-el-19",
      "questionText": "Find the missing term in the sequence: 4, 18, 48, 100, ?",
      "options": [
        "160",
        "180",
        "196",
        "200"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "Terms follow n^3 - n^2 for n >= 2: 2^3 - 2^2 = 4, 3^3 - 3^2 = 18, 4^3 - 4^2 = 48, 5^3 - 5^2 = 100, 6^3 - 6^2 = 216 - 36 = 180."
    },
    {
      "id": "wip-el-20",
      "questionText": "Which data structure is most suitable for implementing recursion iteratively?",
      "options": [
        "Queue",
        "Stack",
        "Linked List",
        "Priority Queue"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "Call stacks in runtime environments follow LIFO, which an explicit Stack data structure mirrors."
    }
  ],
  "exam-accenture-cognitive": [
    {
      "id": "acc-cog-01",
      "questionText": "What will be the output of the pseudocode snippet?\nInteger a, b, c\nSet a = 4, b = 6, c = 2\na = (a + b) ^ c\nPrint a",
      "options": [
        "8",
        "10",
        "12",
        "14"
      ],
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
      "options": [
        "SaaS (Software as a Service)",
        "PaaS (Platform as a Service)",
        "IaaS (Infrastructure as a Service)",
        "FaaS (Function as a Service)"
      ],
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
      "options": [
        "IR",
        "IS",
        "HS",
        "JQ"
      ],
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
      "options": [
        "6",
        "9",
        "12",
        "15"
      ],
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
      "options": [
        "Only I follows",
        "Only II follows",
        "Both follow",
        "Neither follows"
      ],
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
      "options": [
        "14",
        "16",
        "18",
        "20"
      ],
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
      "options": [
        "45",
        "50",
        "55",
        "60"
      ],
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
      "options": [
        "VLOOKUP",
        "HLOOKUP",
        "MATCH",
        "INDEX"
      ],
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
      "options": [
        "12",
        "20",
        "24",
        "48"
      ],
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
      "options": [
        "Project 1",
        "Project 2",
        "Project 3",
        "Project 4"
      ],
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
      "options": [
        "49",
        "51",
        "53",
        "55"
      ],
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
      "options": [
        "7",
        "8",
        "15",
        "16"
      ],
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
      "options": [
        "POP3",
        "IMAP",
        "SMTP",
        "FTP"
      ],
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
      "options": [
        "AWS",
        "Google Cloud Platform",
        "Microsoft Azure",
        "Apache Kafka"
      ],
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
      "options": [
        "9",
        "11",
        "13",
        "15"
      ],
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
      "options": [
        "QFGFM",
        "QFFGR",
        "PFGFR",
        "QGFGR"
      ],
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
      "options": [
        "10, 20",
        "20, 10",
        "30, 10",
        "20, 20"
      ],
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
  "exam-scem-dsa-oct": [
    {
      "id": "scem-dsa-01",
      "questionText": "What is the time complexity to access an element by index in a contiguous array of size n?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n^2)"
      ],
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
      "options": [
        "Stack",
        "Queue",
        "Priority Queue",
        "Circular Doubly Linked List"
      ],
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
      "options": [
        "A, B, C",
        "B, C, A",
        "B, A, C",
        "C, B, A"
      ],
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
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
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
      "options": [
        "rear == MAX - 1",
        "front == rear",
        "front == 0",
        "rear == 0"
      ],
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
      "options": [
        "floor(log2(n))",
        "n / 2",
        "2^n",
        "n - 1"
      ],
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
      "options": [
        "rear = rear + 1",
        "rear = (rear + 1) % N",
        "rear = (rear - 1) % N",
        "rear = (front + 1) % N"
      ],
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
      "options": [
        "11",
        "16",
        "25",
        "30"
      ],
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
      "options": [
        "1",
        "2",
        "3",
        "Not possible"
      ],
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
      "options": [
        "Big-O (O)",
        "Big-Omega (\u03a9)",
        "Big-Theta (\u0398)",
        "Little-o (o)"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "Theta (\u0398) bounds a function from both above and below, representing an exact asymptotic bound."
    },
    {
      "id": "scem-dsa-11",
      "questionText": "How many leaf nodes does a full binary tree with n internal nodes contain?",
      "options": [
        "n",
        "n + 1",
        "2n",
        "n - 1"
      ],
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
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
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
      "options": [
        "Activation Record Stack",
        "Heap Buffer",
        "Hash Table",
        "Doubly Linked List"
      ],
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
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n^2)"
      ],
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
      "options": [
        "Adjacency Matrix",
        "Adjacency List",
        "Incidence Matrix",
        "All are identical"
      ],
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
      "options": [
        "0",
        "1",
        "-1",
        "n"
      ],
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
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
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
      "options": [
        "Dijkstra's Algorithm",
        "Kruskal's Algorithm",
        "Prim's Algorithm",
        "Kosaraju's Algorithm"
      ],
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
      "options": [
        "1",
        "2",
        "3",
        "unlimited"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Easy",
      "explanation": "By definition, every node in a binary tree has at most 2 children (degree <= 2)."
    }
  ],
  "exam-scem-c30-oct": [
    {
      "id": "scem-c30-01",
      "questionText": "Find the missing number in the series: 1, 4, 27, 16, 125, 36, ?",
      "options": [
        "49",
        "216",
        "343",
        "512"
      ],
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
      "options": [
        "EFWFMPQ",
        "EFWFMQP",
        "EFWFMPR",
        "DFWFMPQ"
      ],
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
      "options": [
        "18",
        "20",
        "22",
        "24"
      ],
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
      "options": [
        "11",
        "13",
        "14",
        "15"
      ],
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
      "options": [
        "Only I follows",
        "Only II follows",
        "Both follow",
        "Neither follows"
      ],
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
      "options": [
        "Niece",
        "Sister",
        "Mother",
        "Aunt"
      ],
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
      "options": [
        "Barometer : Pressure",
        "Clock : Engine",
        "Scale : Velocity",
        "Odometer : Voltage"
      ],
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
      "options": [
        "8",
        "10",
        "12",
        "14"
      ],
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
      "options": [
        "17",
        "23",
        "27",
        "29"
      ],
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
      "options": [
        "5 km",
        "6 km",
        "7 km",
        "8 km"
      ],
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
      "options": [
        "Y",
        "Z",
        "A",
        "B"
      ],
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
      "options": [
        "10",
        "15",
        "20",
        "25"
      ],
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
      "options": [
        "PAINTER",
        "NATION",
        "STATION",
        "PROTECT"
      ],
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
      "options": [
        "256",
        "343",
        "512",
        "729"
      ],
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
      "options": [
        "34",
        "35",
        "36",
        "37"
      ],
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
      "options": [
        "45",
        "49",
        "52",
        "56"
      ],
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
      "options": [
        "30\u00b0",
        "37.5\u00b0",
        "45\u00b0",
        "52.5\u00b0"
      ],
      "correctAnswer": 1,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "Angle = |30H - 5.5M| = |30(4) - 5.5(15)| = |120 - 82.5| = 37.5\u00b0."
    },
    {
      "id": "scem-c30-19",
      "questionText": "In a group of 5 people, each person shakes hands with every other person exactly once. How many total handshakes occur?",
      "options": [
        "10",
        "15",
        "20",
        "25"
      ],
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
      "options": [
        "5",
        "3",
        "4",
        "6"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Logical",
      "difficulty": "Easy",
      "explanation": "A die has 6 faces (1..6). If 1, 3, 4, 6 are adjacent to 2, the only remaining face 5 must be opposite to 2."
    }
  ],
  "exam-scem-wed-oct": [
    {
      "id": "scem-wed-01",
      "questionText": "In what ratio must tea at Rs. 62 per kg be mixed with tea at Rs. 72 per kg so that the mixture is worth Rs. 64.50 per kg?",
      "options": [
        "3 : 1",
        "3 : 2",
        "4 : 3",
        "5 : 3"
      ],
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
      "options": [
        "5! * 6P4",
        "5! * 4!",
        "9! - 4!",
        "6! * 4!"
      ],
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
      "options": [
        "2/5",
        "1/3",
        "4/15",
        "7/15"
      ],
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
      "options": [
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
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
      "options": [
        "16 liters",
        "20 liters",
        "24 liters",
        "32 liters"
      ],
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
      "options": [
        "5/36",
        "1/6",
        "7/36",
        "1/9"
      ],
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
      "options": [
        "60",
        "120",
        "125",
        "20"
      ],
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
      "options": [
        "48 cm^2",
        "50 cm^2",
        "56 cm^2",
        "64 cm^2"
      ],
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
      "options": [
        "100\u00b0",
        "110\u00b0",
        "120\u00b0",
        "130\u00b0"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "Angle = |30(7) - 5.5(20)| = |210 - 110| = 100\u00b0."
    },
    {
      "id": "scem-wed-10",
      "questionText": "A card is drawn from a well-shuffled pack of 52 playing cards. What is the probability of getting either a King or a Heart?",
      "options": [
        "4/13",
        "16/52",
        "1/4",
        "17/52"
      ],
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
      "options": [
        "15",
        "16",
        "17",
        "18"
      ],
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
      "options": [
        "120",
        "720",
        "60",
        "24"
      ],
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
      "options": [
        "1",
        "2",
        "3",
        "0"
      ],
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
      "options": [
        "Rs. 1,261",
        "Rs. 1,200",
        "Rs. 1,300",
        "Rs. 1,361"
      ],
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
      "options": [
        "10/21",
        "11/21",
        "2/7",
        "5/7"
      ],
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
      "options": [
        "2 : 1",
        "3 : 2",
        "1 : 2",
        "2 : 3"
      ],
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
      "options": [
        "720",
        "120",
        "4320",
        "5040"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Medium",
      "explanation": "Vowels are O, I, A (3 vowels grouped as 1 unit). Consonants: P, T, C, L (4 units). Total units = 5! = 120. Internal vowel arrangements = 3! = 6. Total = 120 * 6 = 720."
    },
    {
      "id": "scem-wed-18",
      "questionText": "How many times do the hands of a clock coincide (0\u00b0 angle) in a 12-hour period?",
      "options": [
        "10",
        "11",
        "12",
        "13"
      ],
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
      "options": [
        "1 : 3",
        "5 : 12",
        "7 : 12",
        "1 : 2"
      ],
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
      "options": [
        "25%",
        "50%",
        "75%",
        "100%"
      ],
      "correctAnswer": 2,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Quantitative",
      "difficulty": "Easy",
      "explanation": "New area = pi * (0.5r)^2 = 0.25 * (pi * r^2). The area decreases by (1 - 0.25) * 100 = 75%."
    }
  ],
  "exam-scem-cod-oct": [
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
      "options": [
        "D Flip-Flop",
        "JK Flip-Flop",
        "T Flip-Flop",
        "Clocked SR"
      ],
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
      "options": [
        "Structural Hazard",
        "Data Hazard",
        "Control Hazard (Branch Hazard)",
        "Thermal Hazard"
      ],
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
      "options": [
        "010011",
        "010100",
        "010010",
        "110100"
      ],
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
      "options": [
        "Direct Mapping",
        "Fully Associative Mapping",
        "Set-Associative Mapping",
        "Sector Mapping"
      ],
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
      "options": [
        "1, 8, 23",
        "1, 11, 52",
        "1, 7, 24",
        "1, 8, 24"
      ],
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
      "options": [
        "Direct Addressing",
        "Immediate Addressing",
        "Register Indirect Addressing",
        "Indexed Addressing"
      ],
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
      "options": [
        "NAND gate",
        "AND gate",
        "OR gate",
        "XOR gate"
      ],
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
      "options": [
        "k",
        "n * k",
        "k / n",
        "n / k"
      ],
      "correctAnswer": 0,
      "marks": 1,
      "negativeMarks": 0.25,
      "category": "Core Technical",
      "difficulty": "Medium",
      "explanation": "As n becomes very large (n -> \u221e), the speedup of a balanced k-stage pipeline approaches k."
    },
    {
      "id": "scem-cod-13",
      "questionText": "Which register holds the current instruction while it is being decoded and executed?",
      "options": [
        "Instruction Register (IR)",
        "Memory Address Register (MAR)",
        "Accumulator (AC)",
        "Stack Pointer (SP)"
      ],
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
      "options": [
        "PROM",
        "EPROM",
        "EEPROM",
        "Flash ROM"
      ],
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
      "explanation": "A half adder takes two 1-bit inputs (A, B) and outputs Sum = A \u2295 B and Carry = A . B."
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
      "options": [
        "2",
        "3",
        "4",
        "8"
      ],
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
};

export const getTotalDedicatedQuestionsCount = (): number => {
  return Object.values(DEDICATED_EXAM_QUESTIONS).reduce((acc, qList) => acc + qList.length, 0);
};
