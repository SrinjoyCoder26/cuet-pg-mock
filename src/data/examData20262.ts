import { ExamConfig, Question } from "./examTypes";

export const examConfig: ExamConfig = {
    title: "CUET PG 2026 - Mock Test Series II",
    subject: "Data Science, AI & Cyber Security (MTQP04)",
    totalQuestions: 75,
    totalMarks: 300,
    correctMarks: 4,
    wrongMarks: -1,
    durationMinutes: 90,
    date: "Practice Test",
};

export const questions: Question[] = [
    {
        id: 1,
        text: "Consider the following statements about a Group $(G, *)$:\n\nA. Every group must have an identity element.\nB. In a group, every element must have an inverse.\nC. A group operation must be commutative.\nD. A group operation must be associative.\n\nChoose the correct answer from the options given below:",
        options: [
            "A, B and D only",
            "A, B and C only",
            "A, B, C and D",
            "A and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 2,
        text: "Which of the following are TRUE about Abelian groups?\n\nA. Every cyclic group is Abelian.\nB. The group operation is commutative.\nC. The order of every element divides the order of the group.\nD. Every Abelian group is cyclic.\n\nChoose the correct answer:",
        options: [
            "A, B and C only",
            "A and B only",
            "A, B, C and D",
            "B and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 3,
        text: "Match LIST-I (Algebraic Structure) with LIST-II (Key Property):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Semi-group | I. Closure and associativity and identity |\n| B. Monoid | II. Identity and inverse for every element |\n| C. Group | III. Closure and associativity |\n| D. Ring | IV. Two operations: addition (abelian group) and multiplication (monoid) |\n\nChoose the correct answer:",
        options: [
            "A – III, B – I, C – II, D – IV",
            "A – I, B – III, C – II, D – IV",
            "A – III, B – II, C – I, D – IV",
            "A – IV, B – I, C – II, D – III"
        ],
        correctAnswer: 1,
    },
    {
        id: 4,
        text: "The minimum number of edges in a connected graph with $n$ vertices is:",
        options: [
            "$n$",
            "$n - 1$",
            "$n + 1$",
            "$n(n-1)/2$"
        ],
        correctAnswer: 2,
    },
    {
        id: 5,
        text: "For a lattice, which of the following properties must hold for every pair of elements?\n\nA. Existence of a greatest lower bound (meet/infimum)\nB. Existence of a least upper bound (join/supremum)\nC. Commutativity of meet and join\nD. Existence of a complement for every element\n\nChoose the correct answer:",
        options: [
            "A, B and C only",
            "A and B only",
            "A, B, C and D",
            "C and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 6,
        text: "Which of the following statements about Turing Machines are TRUE?\n\nA. A Turing Machine can simulate any algorithmic computation.\nB. Every problem solvable by a computer can be solved by a Turing Machine.\nC. A Turing Machine has infinite memory in the form of an infinite tape.\nD. A Turing Machine always halts on every input.\n\nChoose the correct answer from the options given below:",
        options: [
            "A, B and C only",
            "A and C only",
            "A, B, C and D",
            "B, C and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 7,
        text: "A Deterministic Finite Automaton (DFA) and a Non-deterministic Finite Automaton (NFA) are equivalent in terms of:",
        options: [
            "The languages they can recognize",
            "The number of states required",
            "The speed of computation",
            "The structure of their transition functions"
        ],
        correctAnswer: 1,
    },
    {
        id: 8,
        text: "Which of the following languages is/are Context-Free?\n\nA. $\\{a^n b^n : n \\geq 0\\}$\nB. $\\{a^n b^n c^n : n \\geq 0\\}$\nC. $\\{ww^R : w \\in \\{a,b\\}^*\\}$ (palindromes)\nD. $\\{a^n : n$ is prime$\\}$\n\nChoose the correct answer:",
        options: [
            "A and C only",
            "A, B and C only",
            "A only",
            "A, C and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 9,
        text: "The pumping lemma for context-free languages states that for any CFL $L$, there exists a pumping length $p$ such that any string $s \\in L$ with $|s| \\geq p$ can be divided into $s = uvxyz$ with which conditions?",
        options: [
            "$|vy| > 0$, $|vxy| \\leq p$, and $uv^i xy^i z \\in L$ for all $i \\geq 0$",
            "$|vy| > 0$, $|vxy| > p$, and $uv^i xy^i z \\in L$ for all $i \\geq 0$",
            "$|uv| \\leq p$ and $uv^i w \\in L$ for all $i \\geq 0$",
            "$|xy| > 0$ and $ux^i y^i z \\in L$ for all $i \\geq 1$"
        ],
        correctAnswer: 1,
    },
    {
        id: 10,
        text: "Which of the following is TRUE about recursive and recursively enumerable languages?",
        options: [
            "Every recursive language is also recursively enumerable",
            "Every recursively enumerable language is recursive",
            "Recursive and recursively enumerable languages are the same class",
            "Recursively enumerable languages are a proper subset of recursive languages"
        ],
        correctAnswer: 1,
    },
    {
        id: 11,
        text: "Minimize the Boolean function $F(A,B,C) = \\Sigma m(0,1,4,5)$ using a Karnaugh map. The minimized expression is:",
        options: [
            "$B'$",
            "$A'$",
            "$C'$",
            "$AB + A'B'$"
        ],
        correctAnswer: 1,
    },
    {
        id: 12,
        text: "A multiplexer (MUX) with 8 inputs requires how many select lines?",
        options: [
            "2",
            "3",
            "4",
            "8"
        ],
        correctAnswer: 2,
    },
    {
        id: 13,
        text: "In a 4-bit binary adder, what is the sum of $0111_2$ and $0110_2$?",
        options: [
            "$1101_2$ (13 in decimal)",
            "$1100_2$ (12 in decimal)",
            "$1010_2$ (10 in decimal)",
            "$1111_2$ (15 in decimal)"
        ],
        correctAnswer: 1,
    },
    {
        id: 14,
        text: "Match LIST-I (Logic Circuit) with LIST-II (Function):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Half Adder | I. Adds three 1-bit numbers (two inputs + carry) |\n| B. Full Adder | II. Adds two 1-bit numbers |\n| C. Decoder | III. Converts $n$ input lines to $2^n$ output lines |\n| D. Encoder | IV. Converts $2^n$ input lines to $n$ output lines |\n\nChoose the correct answer:",
        options: [
            "A – II, B – I, C – III, D – IV",
            "A – I, B – II, C – IV, D – III",
            "A – II, B – III, C – I, D – IV",
            "A – IV, B – I, C – III, D – II"
        ],
        correctAnswer: 1,
    },
    {
        id: 15,
        text: "The 2's complement representation of $-5$ in 8-bit binary is:",
        options: [
            "11111011",
            "11111010",
            "10000101",
            "10000100"
        ],
        correctAnswer: 1,
    },
    {
        id: 16,
        text: "Arrange the following memory types in order of access speed from fastest to slowest:\n\nA. Cache Memory (L1)\nB. Hard Disk Drive\nC. Main Memory (RAM)\nD. CPU Registers\n\nChoose the correct order:",
        options: [
            "D, A, C, B",
            "A, D, C, B",
            "D, C, A, B",
            "A, C, D, B"
        ],
        correctAnswer: 1,
    },
    {
        id: 17,
        text: "In a 4-stage pipeline, each stage takes 2 ns. The throughput (instructions per second) under ideal conditions is approximately:",
        options: [
            "500 MIPS (million instructions per second)",
            "250 MIPS",
            "125 MIPS",
            "1000 MIPS"
        ],
        correctAnswer: 1,
    },
    {
        id: 18,
        text: "Which of the following are TRUE about RISC architecture?\n\nA. Fixed-length instruction format.\nB. Large number of addressing modes.\nC. Emphasis on hardware-based instruction execution.\nD. Pipelining is easier due to uniform instruction format.\n\nChoose the correct answer:",
        options: [
            "A, C and D only",
            "A and B only",
            "A, B, C and D",
            "B, C and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 19,
        text: "A CPU with a 20-bit address bus can address a maximum memory space of:",
        options: [
            "512 KB",
            "1 MB",
            "2 MB",
            "64 KB"
        ],
        correctAnswer: 2,
    },
    {
        id: 20,
        text: "In the 8085 microprocessor, which of the following flags is/are affected by arithmetic operations?\n\nA. Sign flag (S)\nB. Zero flag (Z)\nC. Auxiliary Carry flag (AC)\nD. Trap flag\n\nChoose the correct answer:",
        options: [
            "A, B and C only",
            "A and B only",
            "A, B, C and D",
            "B and C only"
        ],
        correctAnswer: 1,
    },
    {
        id: 21,
        text: "Match LIST-I (8085 Instruction) with LIST-II (Operation):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. MVI A, 45H | I. Copies content of register B to accumulator |\n| B. MOV A, B | II. Loads accumulator with immediate data 45H |\n| C. LDA 2050H | III. Loads accumulator from memory location 2050H |\n| D. ADD B | IV. Adds content of B to accumulator |\n\nChoose the correct answer:",
        options: [
            "A – II, B – I, C – III, D – IV",
            "A – I, B – II, C – IV, D – III",
            "A – III, B – I, C – II, D – IV",
            "A – II, B – IV, C – III, D – I"
        ],
        correctAnswer: 1,
    },
    {
        id: 22,
        text: "The 8085 microprocessor has a data bus width of:",
        options: [
            "4 bits",
            "8 bits",
            "16 bits",
            "32 bits"
        ],
        correctAnswer: 2,
    },
    {
        id: 23,
        text: "In the 8085, the instruction CMA performs:",
        options: [
            "Complement the carry flag",
            "Complement the accumulator (1's complement)",
            "Clear the accumulator to zero",
            "Compare accumulator with memory"
        ],
        correctAnswer: 2,
    },
    {
        id: 24,
        text: "Consider the following C program:\n```c\n#include <stdio.h>\nint main() {\n    int a[] = {10, 20, 30, 40, 50};\n    int *p = a;\n    printf(\"%d\", *(p + 3));\n    return 0;\n}\n```\nWhat is the output?",
        options: [
            "30",
            "40",
            "50",
            "20"
        ],
        correctAnswer: 2,
    },
    {
        id: 25,
        text: "The time complexity of inserting an element at the beginning of an array of size $n$ is:",
        options: [
            "$O(1)$",
            "$O(\\log n)$",
            "$O(n)$",
            "$O(n^2)$"
        ],
        correctAnswer: 3,
    },
    {
        id: 26,
        text: "Which of the following traversals of a Binary Search Tree produces elements in sorted order?",
        options: [
            "Pre-order",
            "In-order",
            "Post-order",
            "Level-order"
        ],
        correctAnswer: 2,
    },
    {
        id: 27,
        text: "In a circular queue implemented using an array of size $n$, the condition for \"queue full\" (with one slot wasted for distinction) is:",
        options: [
            "$(rear + 1) \\% n == front$",
            "$rear == front$",
            "$rear == n - 1$",
            "$(front + 1) \\% n == rear$"
        ],
        correctAnswer: 1,
    },
    {
        id: 28,
        text: "Consider the following postfix expression: $5\\ 3\\ 2\\ *\\ +\\ 8\\ -$. The result after evaluation is:",
        options: [
            "3",
            "-3",
            "5",
            "1"
        ],
        correctAnswer: 1,
    },
    {
        id: 29,
        text: "What is the output of the following C code?\n```c\n#include <stdio.h>\nint main() {\n    int x = 10;\n    printf(\"%d %d\", x++, ++x);\n    return 0;\n}\n```",
        options: [
            "10 12",
            "11 12",
            "10 11",
            "Undefined behavior"
        ],
        correctAnswer: 4,
    },
    {
        id: 30,
        text: "Match LIST-I (Algorithm Design Paradigm) with LIST-II (Example Algorithm):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Greedy | I. Floyd-Warshall All-Pairs Shortest Path |\n| B. Dynamic Programming | II. Merge Sort |\n| C. Divide and Conquer | III. Prim's Minimum Spanning Tree |\n| D. Backtracking | IV. N-Queens Problem |\n\nChoose the correct answer:",
        options: [
            "A – III, B – I, C – II, D – IV",
            "A – I, B – III, C – IV, D – II",
            "A – III, B – II, C – I, D – IV",
            "A – IV, B – I, C – II, D – III"
        ],
        correctAnswer: 1,
    },
    {
        id: 31,
        text: "The time complexity of the BFS (Breadth-First Search) algorithm for a graph with $V$ vertices and $E$ edges using an adjacency list is:",
        options: [
            "$O(V)$",
            "$O(V + E)$",
            "$O(V \\cdot E)$",
            "$O(V^2)$"
        ],
        correctAnswer: 2,
    },
    {
        id: 32,
        text: "In the context of amortized analysis, the total cost of $n$ operations on a dynamic array (with doubling strategy) is:",
        options: [
            "$O(n \\log n)$",
            "$O(n^2)$",
            "$O(n)$",
            "$O(2^n)$"
        ],
        correctAnswer: 3,
    },
    {
        id: 33,
        text: "Which sorting algorithm is most efficient for sorting a nearly sorted (almost sorted) array?",
        options: [
            "Quick Sort",
            "Merge Sort",
            "Insertion Sort",
            "Selection Sort"
        ],
        correctAnswer: 3,
    },
    {
        id: 34,
        text: "Topological sorting is applicable to:",
        options: [
            "Undirected cyclic graphs",
            "Directed Acyclic Graphs (DAGs)",
            "All directed graphs",
            "Complete graphs"
        ],
        correctAnswer: 2,
    },
    {
        id: 35,
        text: "Which of the following is/are functions of the operating system's memory manager?\n\nA. Keeping track of which parts of memory are in use and which are free.\nB. Allocating memory to processes when needed.\nC. Compiling user programs into machine code.\nD. Deallocating memory when a process terminates.\n\nChoose the correct answer:",
        options: [
            "A, B and D only",
            "A and B only",
            "A, B, C and D",
            "B, C and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 36,
        text: "Consider three processes P1, P2, P3 with arrival times 0, 2, 4 and burst times 5, 3, 1 respectively. Using Round Robin scheduling with time quantum 2, the average waiting time is:",
        options: [
            "3 ms",
            "4 ms",
            "2.67 ms",
            "5 ms"
        ],
        correctAnswer: 1,
    },
    {
        id: 37,
        text: "Which of the following is NOT a valid process state transition?",
        options: [
            "Ready → Running",
            "Running → Blocked (Waiting)",
            "Blocked → Running (directly)",
            "Running → Ready"
        ],
        correctAnswer: 3,
    },
    {
        id: 38,
        text: "A semaphore is initialized to 1. This type of semaphore is commonly called:",
        options: [
            "Counting semaphore",
            "Binary semaphore (mutex)",
            "Recursive semaphore",
            "Named semaphore"
        ],
        correctAnswer: 2,
    },
    {
        id: 39,
        text: "In a system with 5 processes and 3 resource types, the minimum number of resources that must be available to prevent deadlock (using Banker's algorithm approach) depends on:",
        options: [
            "Only the total number of resources in the system",
            "The maximum demand of each process and the current allocation",
            "Only the number of processes",
            "The CPU scheduling algorithm in use"
        ],
        correctAnswer: 2,
    },
    {
        id: 40,
        text: "Which of the following correctly describes the three-way handshake in TCP connection establishment? Arrange in correct order:\n\nA. Server sends SYN-ACK to the client.\nB. Client sends SYN to the server.\nC. Client sends ACK to the server.\n\nChoose the correct sequence:",
        options: [
            "B, A, C",
            "A, B, C",
            "C, B, A",
            "B, C, A"
        ],
        correctAnswer: 1,
    },
    {
        id: 41,
        text: "Match LIST-I (Network Protocol) with LIST-II (Purpose):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. ARP | I. Resolves IP address to MAC address |\n| B. DHCP | II. Dynamically assigns IP addresses |\n| C. ICMP | III. Used for error reporting and diagnostics (ping) |\n| D. NAT | IV. Translates private IP to public IP |\n\nChoose the correct answer:",
        options: [
            "A – I, B – II, C – III, D – IV",
            "A – II, B – I, C – IV, D – III",
            "A – I, B – III, C – II, D – IV",
            "A – IV, B – II, C – III, D – I"
        ],
        correctAnswer: 1,
    },
    {
        id: 42,
        text: "A network has a bandwidth of 10 Mbps and a round-trip time of 20 ms. For efficient utilization using a sliding window protocol, the minimum window size (in bits) should be:",
        options: [
            "200,000 bits",
            "100,000 bits",
            "10,000 bits",
            "50,000 bits"
        ],
        correctAnswer: 1,
    },
    {
        id: 43,
        text: "Which OSI layer is responsible for establishing, managing, and terminating sessions between applications?",
        options: [
            "Transport Layer",
            "Session Layer",
            "Presentation Layer",
            "Application Layer"
        ],
        correctAnswer: 2,
    },
    {
        id: 44,
        text: "In IPv6, the address length is:",
        options: [
            "32 bits",
            "64 bits",
            "128 bits",
            "256 bits"
        ],
        correctAnswer: 3,
    },
    {
        id: 45,
        text: "Arrange the following steps in the correct order for the A* search algorithm:\n\nA. Expand the node with the lowest $f(n) = g(n) + h(n)$ value.\nB. Initialize the open list with the start node.\nC. Add successor nodes to the open list with updated $f$ values.\nD. Check if the current node is the goal; if so, return the path.\n\nChoose the correct sequence:",
        options: [
            "B, A, D, C",
            "A, B, C, D",
            "B, D, A, C",
            "A, D, B, C"
        ],
        correctAnswer: 1,
    },
    {
        id: 46,
        text: "In a decision tree, which measure is used to determine the best split at each node?",
        options: [
            "Mean Squared Error only",
            "Information Gain (based on Entropy) or Gini Impurity",
            "Euclidean distance",
            "Correlation coefficient"
        ],
        correctAnswer: 2,
    },
    {
        id: 47,
        text: "Which of the following is TRUE about Depth-Limited Search?",
        options: [
            "It is complete for all problems.",
            "It limits the depth of DFS to a specified maximum depth $l$ to prevent infinite loops.",
            "It always finds the optimal solution.",
            "It requires more memory than BFS."
        ],
        correctAnswer: 2,
    },
    {
        id: 48,
        text: "Match LIST-I (AI Concept) with LIST-II (Description):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Expert System | I. Learns from labeled data to make predictions |\n| B. Supervised Learning | II. A system that mimics human expert decision-making |\n| C. Reinforcement Learning | III. Learns through trial and error with rewards |\n| D. Genetic Algorithm | IV. Optimization technique inspired by natural selection |\n\nChoose the correct answer:",
        options: [
            "A – II, B – I, C – III, D – IV",
            "A – I, B – II, C – IV, D – III",
            "A – II, B – III, C – I, D – IV",
            "A – IV, B – I, C – III, D – II"
        ],
        correctAnswer: 1,
    },
    {
        id: 49,
        text: "A heuristic function $h(n)$ is said to be admissible if:",
        options: [
            "It always overestimates the cost to reach the goal.",
            "It never overestimates the cost to reach the goal from node $n$.",
            "It is always equal to the actual cost.",
            "It returns zero for all nodes."
        ],
        correctAnswer: 2,
    },
    {
        id: 50,
        text: "Which of the following correctly describes the Diffie-Hellman Key Exchange?",
        options: [
            "A symmetric encryption algorithm for bulk data transfer.",
            "A protocol that allows two parties to establish a shared secret key over an insecure channel without prior shared secrets.",
            "A hash function used for message integrity.",
            "A digital signature algorithm for authentication."
        ],
        correctAnswer: 2,
    },
    {
        id: 51,
        text: "In a Playfair Cipher, pairs of letters are encrypted using a 5×5 key matrix. How are letters I and J handled?",
        options: [
            "I and J are on separate rows always.",
            "I and J are treated as the same letter (combined into one cell).",
            "J is removed from the plaintext entirely.",
            "I is replaced by L."
        ],
        correctAnswer: 2,
    },
    {
        id: 52,
        text: "Which of the following attacks is targeted at exploiting the mathematical properties of the hash function to find two different inputs that produce the same hash output?",
        options: [
            "Brute force attack",
            "Birthday attack (collision attack)",
            "Man-in-the-middle attack",
            "Dictionary attack"
        ],
        correctAnswer: 2,
    },
    {
        id: 53,
        text: "Match LIST-I (Security Attack) with LIST-II (Description):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Phishing | I. Overwhelming a server with traffic to make it unavailable |\n| B. DDoS | II. Tricking users into revealing sensitive information via fake communications |\n| C. SQL Injection | III. Inserting malicious SQL queries through user input fields |\n| D. Cross-Site Scripting (XSS) | IV. Injecting malicious scripts into web pages viewed by other users |\n\nChoose the correct answer:",
        options: [
            "A – II, B – I, C – III, D – IV",
            "A – I, B – II, C – IV, D – III",
            "A – II, B – III, C – I, D – IV",
            "A – IV, B – I, C – III, D – II"
        ],
        correctAnswer: 1,
    },
    {
        id: 54,
        text: "SHA-256 produces a hash output of:",
        options: [
            "128 bits",
            "160 bits",
            "256 bits",
            "512 bits"
        ],
        correctAnswer: 3,
    },
    {
        id: 55,
        text: "Which of the following are supervised learning algorithms?\n\nA. Support Vector Machine (SVM)\nB. K-Means Clustering\nC. Random Forest\nD. DBSCAN\n\nChoose the correct answer:",
        options: [
            "A and C only",
            "A, B and C only",
            "B and D only",
            "A, C and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 56,
        text: "In Linear Regression, the line of best fit is determined by minimizing:",
        options: [
            "The sum of absolute errors",
            "The sum of squared residuals (least squares)",
            "The maximum error among all data points",
            "The variance of the dependent variable"
        ],
        correctAnswer: 2,
    },
    {
        id: 57,
        text: "Which of the following correctly describes the Bias-Variance tradeoff?\n\nA. High bias models tend to underfit the data.\nB. High variance models tend to overfit the data.\nC. Increasing model complexity typically decreases bias and increases variance.\nD. An ideal model has both zero bias and zero variance.\n\nChoose the correct answer:",
        options: [
            "A, B and C only",
            "A and B only",
            "A, B, C and D",
            "B, C and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 58,
        text: "Match LIST-I (Evaluation Metric) with LIST-II (Formula/Definition):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Precision | I. $TP / (TP + FN)$ |\n| B. Recall (Sensitivity) | II. $TP / (TP + FP)$ |\n| C. F1-Score | III. $(TN + TP) / (Total)$ |\n| D. Accuracy | IV. $2 \\times (Precision \\times Recall) / (Precision + Recall)$ |\n\nChoose the correct answer:",
        options: [
            "A – II, B – I, C – IV, D – III",
            "A – I, B – II, C – III, D – IV",
            "A – II, B – IV, C – I, D – III",
            "A – III, B – I, C – IV, D – II"
        ],
        correctAnswer: 1,
    },
    {
        id: 59,
        text: "In a Random Forest classifier, which technique is used to reduce overfitting?",
        options: [
            "Using a single decision tree with unlimited depth",
            "Bagging (bootstrap aggregating) with multiple decision trees, each trained on random subsets",
            "Using only a single feature for all trees",
            "Training all trees on the exact same data"
        ],
        correctAnswer: 2,
    },
    {
        id: 60,
        text: "The purpose of the activation function in a neural network is to:",
        options: [
            "Initialize the weights of the network",
            "Introduce non-linearity to enable the network to learn complex patterns",
            "Reduce the number of layers in the network",
            "Store the input data"
        ],
        correctAnswer: 2,
    },
    {
        id: 61,
        text: "In the context of big data, the 3 V's refer to:",
        options: [
            "Volume, Velocity, Variety",
            "Volume, Validity, Value",
            "Velocity, Variety, Verification",
            "Volume, Value, Velocity"
        ],
        correctAnswer: 1,
    },
    {
        id: 62,
        text: "Principal Component Analysis (PCA) is used for:",
        options: [
            "Classification of data into categories",
            "Dimensionality reduction while preserving maximum variance",
            "Clustering similar data points",
            "Predicting continuous target variables"
        ],
        correctAnswer: 2,
    },
    {
        id: 63,
        text: "What is the result of applying a hash function $h(k) = k \\mod 7$ to the key $k = 25$?",
        options: [
            "3",
            "4",
            "5",
            "6"
        ],
        correctAnswer: 2,
    },
    {
        id: 64,
        text: "In a min-heap, the parent of node at index $i$ (0-indexed) is located at index:",
        options: [
            "$(i - 1) / 2$ (integer division)",
            "$i / 2$",
            "$2i + 1$",
            "$i - 1$"
        ],
        correctAnswer: 1,
    },
    {
        id: 65,
        text: "Which of the following tree traversal methods uses a queue as its auxiliary data structure?",
        options: [
            "Pre-order",
            "In-order",
            "Level-order (BFS)",
            "Post-order"
        ],
        correctAnswer: 3,
    },
    {
        id: 66,
        text: "A complete binary tree with $n$ nodes has a height of:",
        options: [
            "$\\lfloor \\log_2 n \\rfloor$",
            "$n - 1$",
            "$n / 2$",
            "$\\log_{10} n$"
        ],
        correctAnswer: 1,
    },
    {
        id: 67,
        text: "In a direct-mapped cache with 64 cache lines and a block size of 16 bytes, if the main memory address is 24 bits, the number of tag bits is:",
        options: [
            "10",
            "14",
            "12",
            "8"
        ],
        correctAnswer: 2,
    },
    {
        id: 68,
        text: "What is the purpose of the TRAP interrupt in the 8085 microprocessor?",
        options: [
            "It is a maskable interrupt with the highest priority",
            "It is a non-maskable, edge and level triggered interrupt with the highest priority",
            "It is a software interrupt only",
            "It is used for serial data communication"
        ],
        correctAnswer: 2,
    },
    {
        id: 69,
        text: "A context switch involves saving and restoring the state of a process. Which of the following is saved during a context switch?\n\nA. Program Counter\nB. CPU Registers\nC. Memory management information\nD. Process priority\n\nChoose the correct answer:",
        options: [
            "A, B, C and D",
            "A and B only",
            "A, B and C only",
            "B, C and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 70,
        text: "The Bellman-Ford algorithm differs from Dijkstra's in that it:",
        options: [
            "Only works on unweighted graphs",
            "Can handle graphs with negative edge weights",
            "Is always faster",
            "Only works on DAGs"
        ],
        correctAnswer: 2,
    },
    {
        id: 71,
        text: "In SSL/TLS, which protocol is used during the handshake to establish a secure connection?",
        options: [
            "HTTP",
            "FTP",
            "Asymmetric key exchange followed by symmetric encryption",
            "Only symmetric encryption"
        ],
        correctAnswer: 3,
    },
    {
        id: 72,
        text: "An ARP (Address Resolution Protocol) is used to:",
        options: [
            "Resolve domain names to IP addresses",
            "Resolve IP addresses to MAC addresses",
            "Route packets between networks",
            "Encrypt data packets"
        ],
        correctAnswer: 2,
    },
    {
        id: 73,
        text: "In the confusion matrix, a False Positive is when:",
        options: [
            "The model correctly predicts the positive class",
            "The model incorrectly predicts the positive class (actual is negative)",
            "The model correctly predicts the negative class",
            "The model incorrectly predicts the negative class (actual is positive)"
        ],
        correctAnswer: 2,
    },
    {
        id: 74,
        text: "Which technique is used to prevent overfitting in a decision tree?",
        options: [
            "Increasing tree depth without limit",
            "Pruning (removing branches that add little predictive power)",
            "Using a single feature only",
            "Removing all leaf nodes"
        ],
        correctAnswer: 2,
    },
    {
        id: 75,
        text: "In the RSA algorithm, the security relies on the difficulty of:",
        options: [
            "Computing discrete logarithms",
            "Factoring the product of two large prime numbers",
            "Finding hash collisions",
            "Solving linear equations"
        ],
        correctAnswer: 2,
    },
];
