#!/usr/bin/env python3
import json
import os

# We will create the complete dedicated question banks for all 20 exams.
# Each exam has 20 questions. Total = 400 questions.
# Each question adheres to:
# {
#   id: string,
#   questionText: string,
#   options: [string, string, string, string],
#   correctAnswer: number (0-3),
#   marks: 1,
#   negativeMarks: float,
#   explanation: string,
#   category: 'Quantitative' | 'Logical' | 'Verbal' | 'Core Technical',
#   difficulty: 'Easy' | 'Medium' | 'Hard'
# }

def generate_banks():
    banks = {}

    # 1. exam-dsa-midsem (Core Technical, neg: 0.25)
    banks['exam-dsa-midsem'] = [
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
            "explanation": "If an implementation checks `if (min_idx != i)` before swapping, 0 swaps are performed on an already sorted array (at most n-1 swaps in general)."
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
    ]

    print("Generated exam-dsa-midsem (20 Qs)")
    return banks

if __name__ == '__main__':
    generate_banks()

