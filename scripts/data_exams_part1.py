# Part 1: Exams 1 to 5 (20 questions each)

EXAMS_PART1 = {
    'exam-dsa-midsem': [
        {
            "id": "dsa-mid-01",
            "questionText": "What is the worst-case time complexity of inserting a node into a Red-Black Tree with n elements?",
            "options": ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
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
            "options": ["Stack", "Queue", "Priority Queue", "Circular Array"],
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
            "options": ["O(log n)", "O(n)", "O(n log n)", "O(n^2)"],
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
            "options": ["O(1)", "O(log n)", "O(n)", "Cannot be deleted"],
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
            "options": ["Quick Sort", "Heap Sort", "Merge Sort", "Insertion Sort"],
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
            "options": ["Overlapping Subproblems", "Optimal Substructure", "Memoization Property", "Greedy Choice Property"],
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
            "options": ["2^h", "2^(h+1) - 1", "2^h - 1", "2^(h-1) + 1"],
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
            "options": ["Linear Probing", "Quadratic Probing", "Separate Chaining", "Double Hashing"],
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
            "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
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
            "options": ["O(V^2)", "O(E log V)", "O(V log E)", "O(E + V)"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Hard",
            "explanation": "Sorting all edges takes O(E log E) = O(E log V). DSU operations with path compression take nearly linear time O(E * α(V)), yielding total complexity O(E log V)."
        },
        {
            "id": "dsa-mid-11",
            "questionText": "Which data structure is ideal for checking balanced parentheses in an expression string?",
            "options": ["Queue", "Stack", "Binary Search Tree", "Max Heap"],
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
            "options": ["O(n log n)", "O(n)", "O(n^2)", "O(log n)"],
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
            "options": ["2i", "2i + 1", "floor(i / 2)", "i - 1"],
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
            "options": ["Preorder Traversal", "Inorder Traversal", "Postorder Traversal", "Level Order Traversal"],
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
            "options": ["T(n) = 2T(n/2) + O(n)", "T(n) = T(n-1) + O(n)", "T(n) = 2T(n/2) + O(1)", "T(n) = T(n/2) + O(1)"],
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
            "options": ["O(1)", "O(V)", "O(V + E)", "O(V * E)"],
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
            "options": ["Single Sorted Array", "Two Heaps (Max-Heap and Min-Heap)", "Single AVL Tree", "Circular Queue"],
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
            "options": ["Height(Left) - Height(Right)", "Height(Left) + Height(Right)", "Number of Left Children - Right Children", "Depth(Node) - Height(Node)"],
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
            "options": ["0", "n", "n(n-1)/2", "n log n"],
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
            "options": ["1 + LCS(m-1, n-1)", "max(LCS(m-1, n), LCS(m, n-1))", "LCS(m-1, n-1)", "1 + max(LCS(m-1, n), LCS(m, n-1))"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "When the terminal characters match, that character contributes 1 to the LCS length, reducing problem to LCS(X[0..m-2], Y[0..n-2])."
        }
    ],

    'exam-quant-drill-1': [
        {
            "id": "quant-d1-01",
            "questionText": "If the price of petrol increases by 25%, by what percentage must a motorist reduce his consumption so that expenditure on petrol remains unchanged?",
            "options": ["16.67%", "20%", "25%", "33.33%"],
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
            "options": ["5%", "8%", "10%", "15%"],
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
            "options": ["35 years", "39 years", "40 years", "42 years"],
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
            "options": ["1 : 2", "2 : 3", "3 : 5", "4 : 9"],
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
            "options": ["16 years", "20 years", "24 years", "32 years"],
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
            "options": ["Rs. 2,000", "Rs. 2,100", "Rs. 2,210", "Rs. 2,500"],
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
            "options": ["90", "120", "140", "160"],
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
            "options": ["35%", "40%", "45%", "50%"],
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
            "options": ["10%", "12%", "14%", "16.67%"],
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
            "options": ["31.6%", "32.4%", "33.5%", "35%"],
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
            "options": ["0", "1", "7", "49"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Hard",
            "explanation": "Note 7^3 = 343. 343 ≡ 1 (mod 342). 7^84 = (7^3)^28 ≡ 1^28 ≡ 1 (mod 342)."
        },
        {
            "id": "quant-d1-12",
            "questionText": "The average of 5 consecutive odd numbers is 61. What is the difference between the highest and lowest numbers?",
            "options": ["4", "8", "10", "12"],
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
            "options": ["Rs. 200", "Rs. 250", "Rs. 300", "Rs. 350"],
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
            "options": ["14", "16", "17", "18"],
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
            "options": ["66,000", "72,000", "72,600", "75,000"],
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
            "options": ["9%", "10%", "11.11%", "12.5%"],
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
            "options": ["20 years", "25 years", "30 years", "35 years"],
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
            "options": ["36.4 liters", "38.4 liters", "40 liters", "42.2 liters"],
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
            "options": ["0", "4", "6", "8"],
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
            "options": ["14", "16", "18", "20"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Easy",
            "explanation": "(x + 1/x)^2 = x^2 + 1/x^2 + 2 => 4^2 = x^2 + 1/x^2 + 2 => x^2 + 1/x^2 = 14."
        }
    ],

    'exam-logical-syllogism': [
        {
            "id": "log-syl-01",
            "questionText": "Statements: All pens are books. All books are pencils.\nConclusions:\nI. All pens are pencils.\nII. Some pencils are pens.",
            "options": ["Only conclusion I follows", "Only conclusion II follows", "Neither I nor II follows", "Both conclusions I and II follow"],
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
            "options": ["Only I follows", "Only II follows", "Either I or II follows", "Neither I nor II follows"],
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
            "options": ["P", "Q", "R", "W"],
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
            "options": ["Only I follows", "Only II follows", "Both follow", "Neither follows"],
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
            "options": ["6", "7", "8", "9"],
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
            "options": ["P + S * Q", "P - S * Q", "P * S + Q", "Q + S * P"],
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
            "options": ["E24G", "E32G", "F32G", "E32H"],
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
            "options": ["Only I follows", "Only II follows", "Either I or II follows", "Neither follows"],
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
            "options": ["A", "B", "C", "D"],
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
            "options": ["HSBQFT", "HSAPET", "FSZQDR", "HTCRFT"],
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
            "options": ["Only I follows", "Only II follows", "Both I and II follow", "Neither follows"],
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
            "options": ["NORTH-EAST", "SOUTH-EAST", "NORTH-WEST", "SOUTH-WEST"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Logical",
            "difficulty": "Medium",
            "explanation": "South-East (135° clockwise from N) turns to North (0°), a rotation of 135° anti-clockwise. West (270° from N) rotated 135° anti-clockwise becomes 135° from North = South-East."
        },
        {
            "id": "log-syl-14",
            "questionText": "Complete the sequence: 7, 26, 63, 124, 215, ?",
            "options": ["342", "343", "344", "345"],
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
            "options": ["Sister", "Sister-in-law", "Aunt", "Mother-in-law"],
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
            "options": ["A", "B", "F", "E"],
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
            "options": ["Only I follows", "Only II follows", "Both I and II follow", "Neither follows"],
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
            "options": ["64", "125", "343", "729"],
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
            "options": ["Mother", "Aunt", "Sister", "Grandmother"],
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
            "options": ["14", "15", "16", "17"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "Opposite to 3 is 4. Adjacent faces are 1, 6, 2, 5. Sum = 1 + 6 + 2 + 5 = 14."
        }
    ],

    'exam-verbal-vocab-grammar': [
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
            "options": ["Careless", "Painstaking", "Thorough", "Scrupulous"],
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
            "options": ["expand", "extend", "prolong", "stretch"],
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
            "options": ["A", "B", "C", "D"],
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
            "options": ["To waste fuel recklessly", "To work late into the night", "To engage in dangerous experiments", "To cause deliberate destruction"],
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
            "options": ["Accomodation", "Accommodation", "Acommodation", "Accomadation"],
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
            "options": ["Transient", "Permanent", "Eternal", "Perpetual"],
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
            "options": ["at", "in", "with", "on"],
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
            "options": ["Practical", "Sensible", "Idealistic", "Realistic"],
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
            "options": ["Polyglot", "Linguist", "Lexicographer", "Orator"],
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
            "options": ["A", "B", "C", "D"],
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
            "options": ["wind", "ocean", "fire", "air"],
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
            "options": ["Omnipresent", "Scarce", "Rare", "Isolated"],
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
            "options": ["wavering", "resolute", "reluctant", "indifferent"],
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
            "options": ["The existing state of affairs", "A legal summons", "A false identity", "A great masterpiece"],
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

    'exam-python-oops-eval': [
        {
            "id": "py-oop-01",
            "questionText": "In Python, which built-in function returns a shallow copy of a dictionary?",
            "options": ["dict.copy()", "dict.clone()", "copy.deepcopy()", "dict.duplicate()"],
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
            "options": ["1", "2", "3", "0"],
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
            "options": ["Depth-First Search", "C3 Linearization", "Breadth-First Search", "Dijkstra MRO"],
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
            "options": ["__init__", "__new__", "__call__", "__invoke__"],
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
            "options": ["return", "yield", "produce", "generate"],
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
            "options": ["<class 'type'>", "<class 'object'>", "<class 'class'>", "<class 'meta'>"],
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
            "options": ["[0, 2, 4]", "[2, 4]", "[1, 3]", "[0, 1, 2, 3, 4]"],
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
            "options": ["tuple", "frozenset", "list", "string"],
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
            "options": ["True", "False", "TypeError", "None"],
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
            "options": ["abc", "interface", "abstract", "base"],
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
            "options": ["3", "4", "Error", "Undefined"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "Variables `a` and `b` reference the same underlying mutable list in memory. Appending to `b` alters `a`, so `len(a)` is 4."
        }
    ]
}

