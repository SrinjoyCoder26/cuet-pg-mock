import { ExamConfig, Question } from "./examTypes";

export const examConfig: ExamConfig = {
    title: "CUET PG 2026 - Mock Test Series IX",
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
        text: "What is the output of the following C code?\n```c\nchar arr[] = \"GATECS\";\nchar *p = arr;\n*p++;\np += 2;\nprintf(\"%c\", *p);\n```",
        options: [
            "T",
            "E",
            "C",
            "A"
        ],
        correctAnswer: 2,
    },
    {
        id: 2,
        text: "A 2-3 Tree is a type of B-Tree. If a 2-3 Tree has a height of 2 (root at height 0), what is the maximum number of keys it can store?",
        options: [
            "15",
            "26",
            "30",
            "40"
        ],
        correctAnswer: 2,
    },
    {
        id: 3,
        text: "If the sequence of operations `push(1), push(2), pop, push(1), push(2), pop, pop, pop, push(2), pop` is performed on a stack, what is the sequence of popped out values?",
        options: [
            "2, 2, 1, 1, 2",
            "2, 2, 1, 2, 2",
            "2, 1, 2, 2, 1",
            "2, 1, 2, 2, 2"
        ],
        correctAnswer: 1,
    },
    {
        id: 4,
        text: "The recurrence relation for the number of comparisons in the worst case of finding both the maximum and minimum element in an array of $n$ elements using a divide and conquer approach is $T(n) = 2T(n/2) + 2$. What is its solution?",
        options: [
            "$T(n) = 2n - 2$",
            "$T(n) = n - 1$",
            "$T(n) = 3n/2 - 2$",
            "$T(n) = n \\log n - 2$"
        ],
        correctAnswer: 3,
    },
    {
        id: 5,
        text: "You need to store a collection of items and frequently find the item with the highest priority (largest value). Which data structure is most efficient for this task?",
        options: [
            "Sorted Array",
            "Max-Heap",
            "Hash Table",
            "Queue"
        ],
        correctAnswer: 2,
    },
    {
        id: 6,
        text: "What is the primary advantage of using Radix Sort over Comparison-based sorts like Quicksort?",
        options: [
            "Radix Sort is in-place.",
            "Radix Sort can be faster with a time complexity of $O(nk)$ if the keys are short.",
            "Radix Sort is stable, whereas Quicksort is not.",
            "Radix Sort has a better worst-case complexity than Quicksort."
        ],
        correctAnswer: 2,
    },
    {
        id: 7,
        text: "A binary tree has $n$ leaf nodes. The number of nodes of degree 2 in this binary tree is:",
        options: [
            "$n - 1$",
            "$n$",
            "$n + 1$",
            "Cannot be determined."
        ],
        correctAnswer: 1,
    },
    {
        id: 8,
        text: "The Floyd-Warshall algorithm for all-pairs shortest paths is an example of which algorithmic paradigm?",
        options: [
            "Greedy",
            "Dynamic Programming",
            "Divide and Conquer",
            "Backtracking"
        ],
        correctAnswer: 2,
    },
    {
        id: 9,
        text: "Which of the following is **TRUE** about the relationship between $O(g(n))$ and $o(g(n))$ (little-o) notations?",
        options: [
            "If $f(n) = o(g(n))$, then $f(n) = O(g(n))$.",
            "If $f(n) = O(g(n))$, then $f(n) = o(g(n))$.",
            "The notations are equivalent.",
            "$o(g(n))$ represents a tight bound, while $O(g(n))$ is not."
        ],
        correctAnswer: 1,
    },
    {
        id: 10,
        text: "In C, what does a function declaration like `int (*foo)(int, char*);` represent?",
        options: [
            "A function `foo` that returns a pointer to an integer.",
            "A pointer `foo` to a function that takes an `int` and `char*` and returns an `int`.",
            "An array of functions.",
            "An invalid declaration."
        ],
        correctAnswer: 2,
    },
    {
        id: 11,
        text: "**Match List-I (Graph Problem) with List-II (Best Algorithm):**\n\n| List-I | List-II |\n|---|---|\n| A. Single-source shortest path on unweighted graph | I. Bellman-Ford |\n| B. Single-source shortest path on weighted DAG | II. Breadth-First Search |\n| C. Single-source shortest path with negative edges | III. Dijkstra's Algorithm |\n| D. Single-source shortest path with non-negative edges | IV. Topological Sort based DP |",
        options: [
            "A-II, B-IV, C-I, D-III",
            "A-II, B-I, C-IV, D-III",
            "A-IV, B-II, C-I, D-III",
            "A-IV, B-I, C-II, D-III"
        ],
        correctAnswer: 1,
    },
    {
        id: 12,
        text: "The `register` storage class specifier in C is a hint to the compiler to:",
        options: [
            "Store the variable in CPU registers for faster access.",
            "Make the variable globally accessible.",
            "Preserve the variable's value across function calls.",
            "Allocate the variable on the heap."
        ],
        correctAnswer: 1,
    },
    {
        id: 13,
        text: "A deque (double-ended queue) is implemented using a circular array. What is the worst-case time complexity of adding an element to the front?",
        options: [
            "$O(1)$",
            "$O(\\log n)$",
            "$O(n)$",
            "$O(n \\log n)$"
        ],
        correctAnswer: 1,
    },
    {
        id: 14,
        text: "You have an array of $n$ elements that is \"almost sorted,\" meaning only a few elements are out of place. Which sorting algorithm would be most efficient?",
        options: [
            "Quicksort",
            "Heap Sort",
            "Insertion Sort",
            "Selection Sort"
        ],
        correctAnswer: 3,
    },
    {
        id: 15,
        text: "To implement a priority queue with efficient `insert` and `extract-min` operations, which underlying data structure is typically used?",
        options: [
            "Stack",
            "Sorted Array",
            "Binary Heap",
            "Hash Table"
        ],
        correctAnswer: 3,
    },
    {
        id: 16,
        text: "What is the defining characteristic of a \"greedy\" algorithm?",
        options: [
            "It explores all possible solutions to find the global optimum.",
            "It makes a locally optimal choice at each step with the hope of finding a global optimum.",
            "It divides the problem into smaller subproblems.",
            "It builds a solution by exploring a state space tree."
        ],
        correctAnswer: 2,
    },
    {
        id: 17,
        text: "In C++, dynamic memory allocation is performed using the `new` operator. Forgetting to use the corresponding `delete` operator leads to:",
        options: [
            "A compile-time error.",
            "A stack overflow.",
            "A memory leak.",
            "A segmentation fault."
        ],
        correctAnswer: 3,
    },
    {
        id: 18,
        text: "In a threaded binary tree, a null right pointer of a node is replaced by a pointer to its:",
        options: [
            "In-order successor.",
            "In-order predecessor.",
            "Pre-order successor.",
            "Parent node."
        ],
        correctAnswer: 1,
    },
    {
        id: 19,
        text: "A Skip List is a probabilistic data structure that provides $O(\\log n)$ average time complexity for:",
        options: [
            "Search only.",
            "Search and Insertion only.",
            "Search, Insertion, and Deletion.",
            "Finding the minimum element only."
        ],
        correctAnswer: 3,
    },
    {
        id: 20,
        text: "The problem of finding the longest path in a general weighted graph is:",
        options: [
            "Solvable in polynomial time using a modification of Dijkstra's algorithm.",
            "NP-Hard.",
            "Solvable in polynomial time only if there are no negative weights.",
            "Equivalent to the shortest path problem."
        ],
        correctAnswer: 2,
    },
    {
        id: 21,
        text: "A 4-stage pipeline has stage delays of 10ns, 8ns, 12ns, and 10ns. If the pipeline is clocked at a rate determined by the slowest stage, what is the percentage speedup over a non-pipelined execution for 100 instructions?",
        options: [
            "~3.4",
            "~4.0",
            "~3.24",
            "~2.7"
        ],
        correctAnswer: 3,
    },
    {
        id: 22,
        text: "A 2-to-4 decoder with inputs A, B and outputs D0, D1, D2, D3 is connected to an OR gate. The inputs to the OR gate are D1, D2, and D3. What is the final output expression F?",
        options: [
            "$A + B$",
            "$A'B + AB' + AB$",
            "$A'B'$",
            "$(A'B')'$"
        ],
        correctAnswer: 1,
    },
    {
        id: 23,
        text: "A cache memory system uses a Least Recently Used (LRU) replacement policy. For a 3-frame cache, how many page hits occur for the reference string: A, B, C, D, A, B, E, A, B, C, D, E?",
        options: [
            "2",
            "4",
            "5",
            "6"
        ],
        correctAnswer: 1,
    },
    {
        id: 24,
        text: "A system has a 48-bit virtual address, a page size of 16 KB, and 4 bytes per page table entry. If a two-level page table is used where the outer page table fits into a single frame, how should the virtual address be split into outer page table index, inner page table index, and offset?",
        options: [
            "14 bits, 20 bits, 14 bits",
            "22 bits, 12 bits, 14 bits",
            "20 bits, 14 bits, 14 bits",
            "24 bits, 10 bits, 14 bits"
        ],
        correctAnswer: 2,
    },
    {
        id: 25,
        text: "The primary characteristic of an edge-triggered flip-flop is that:",
        options: [
            "It changes its state only on the rising or falling edge of the clock pulse.",
            "It is sensitive to the level (high or low) of the clock pulse.",
            "It does not have a clock input.",
            "It can toggle its state continuously."
        ],
        correctAnswer: 1,
    },
    {
        id: 26,
        text: "An instruction `LOAD R1, 100(R2)` fetches the operand from `Memory[100 + Content(R2)]`. This is an example of which addressing mode?",
        options: [
            "Indirect",
            "Based Indexed",
            "Relative",
            "Direct"
        ],
        correctAnswer: 2,
    },
    {
        id: 27,
        text: "In a microprogrammed control unit, the address of the next micro-instruction to be executed is determined by:",
        options: [
            "The Program Counter (PC).",
            "The Instruction Register (IR).",
            "A micro-program sequencer or the current micro-instruction itself.",
            "The Arithmetic Logic Unit (ALU)."
        ],
        correctAnswer: 3,
    },
    {
        id: 28,
        text: "The \"Daisy Chaining\" method for handling interrupts:",
        options: [
            "Is a parallel method of granting interrupt access.",
            "Establishes a priority system where devices closer to the CPU have higher priority.",
            "Involves the CPU polling each device.",
            "Is used for DMA transfers."
        ],
        correctAnswer: 2,
    },
    {
        id: 29,
        text: "Using Booth's algorithm, how many addition/subtraction operations are required to multiply $+14$ (`01110`) by $-5$ (`1011`)? *(Assume 5-bit representation for the multiplicand and 4-bit for the multiplier)*",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        correctAnswer: 3,
    },
    {
        id: 30,
        text: "In a system with virtual memory, the address generated by the CPU is the:",
        options: [
            "Physical address",
            "Logical address",
            "MAC address",
            "Port address"
        ],
        correctAnswer: 2,
    },
    {
        id: 31,
        text: "An Arithmetic Logic Unit (ALU) is a:",
        options: [
            "Sequential circuit that performs arithmetic and logical operations.",
            "Combinational circuit that performs arithmetic and logical operations.",
            "Memory unit for storing intermediate results.",
            "Control unit for sequencing instructions."
        ],
        correctAnswer: 2,
    },
    {
        id: 32,
        text: "The \"locality of reference\" principle is fundamental to the operation of:",
        options: [
            "The ALU.",
            "The control unit.",
            "Cache memory.",
            "Interrupt handling."
        ],
        correctAnswer: 3,
    },
    {
        id: 33,
        text: "In the 8085, if the `HL` register pair contains `2050H`, what is the content of `HL` after the instruction `DAD H` is executed?",
        options: [
            "2050H",
            "40A0H",
            "0000H",
            "FFFFH"
        ],
        correctAnswer: 2,
    },
    {
        id: 34,
        text: "A key difference between SRAM and DRAM is that:",
        options: [
            "SRAM is used for main memory, while DRAM is used for cache.",
            "SRAM needs to be periodically refreshed, while DRAM does not.",
            "DRAM needs to be periodically refreshed, while SRAM does not.",
            "SRAM is cheaper and denser than DRAM."
        ],
        correctAnswer: 3,
    },
    {
        id: 35,
        text: "How does the number of AND and OR gates scale when designing an n-bit carry-lookahead generator?",
        options: [
            "The number of gates grows linearly.",
            "The number of gates grows quadratically.",
            "The number of gates is constant.",
            "The logic uses only XOR gates."
        ],
        correctAnswer: 2,
    },
    {
        id: 36,
        text: "Which of the following scheduling algorithms is most susceptible to the \"convoy effect\"?",
        options: [
            "Shortest Job First (SJF)",
            "Round Robin",
            "First-Come, First-Served (FCFS)",
            "Multilevel Queue Scheduling"
        ],
        correctAnswer: 3,
    },
    {
        id: 37,
        text: "A system's file allocation is managed using an inode structure. What is contained within the inode?",
        options: [
            "The file's name and its actual data content.",
            "Pointers to the data blocks and the file's metadata (permissions, size, etc.).",
            "The file's path in the directory tree.",
            "The physical address of the first block only."
        ],
        correctAnswer: 2,
    },
    {
        id: 38,
        text: "Two processes, P1 and P2, need to access a shared resource protected by a binary semaphore $S$ (initialized to 1). If P1 runs `wait(S)` and then gets preempted, what happens when P2 tries to run `wait(S)`?",
        options: [
            "P2 will also enter the critical section.",
            "P2 will be blocked until P1 runs `signal(S)`.",
            "It will cause a deadlock.",
            "The value of S becomes -1."
        ],
        correctAnswer: 2,
    },
    {
        id: 39,
        text: "In the context of computer networks, what is \"ICMP\"?",
        options: [
            "A transport layer protocol for reliable data transfer.",
            "A routing protocol used by routers.",
            "A protocol used for error reporting and network diagnostics.",
            "A protocol for assigning IP addresses."
        ],
        correctAnswer: 3,
    },
    {
        id: 40,
        text: "If a system is in a state that is not safe, it means:",
        options: [
            "A deadlock has already occurred.",
            "A deadlock will definitely occur.",
            "A deadlock might occur if processes request resources in a certain sequence.",
            "The system has no available resources."
        ],
        correctAnswer: 3,
    },
    {
        id: 41,
        text: "Which page replacement algorithm suffers from Belady's Anomaly?",
        options: [
            "LRU (Least Recently Used)",
            "Optimal (OPT)",
            "FIFO (First-In, First-Out)",
            "LFU (Least Frequently Used)"
        ],
        correctAnswer: 3,
    },
    {
        id: 42,
        text: "The process of a router forwarding a packet from one network to another is a function of which OSI layer?",
        options: [
            "Layer 2 (Data Link)",
            "Layer 3 (Network)",
            "Layer 4 (Transport)",
            "Layer 7 (Application)"
        ],
        correctAnswer: 2,
    },
    {
        id: 43,
        text: "Which of the following is an example of Inter-Process Communication (IPC)?",
        options: [
            "A function calling another function within the same process.",
            "A process writing to a file that is later read by another process.",
            "Using shared memory or message queues.",
            "A context switch."
        ],
        correctAnswer: 3,
    },
    {
        id: 44,
        text: "An IPv4 address is 32 bits. How long is an IPv6 address?",
        options: [
            "48 bits",
            "64 bits",
            "128 bits",
            "256 bits"
        ],
        correctAnswer: 3,
    },
    {
        id: 45,
        text: "The `nice` command in UNIX is used to:",
        options: [
            "Make a process run faster.",
            "Influence the CPU scheduling priority of a process.",
            "Terminate a process gracefully.",
            "Display the process owner."
        ],
        correctAnswer: 2,
    },
    {
        id: 46,
        text: "In TCP, congestion control is primarily achieved through:",
        options: [
            "A fixed-size window.",
            "Adjusting the size of a \"congestion window\" based on network feedback like packet loss.",
            "Using checksums.",
            "Using sequence numbers."
        ],
        correctAnswer: 2,
    },
    {
        id: 47,
        text: "A \"race condition\" occurs when:",
        options: [
            "Two processes are deadlocked.",
            "A process is starved of resources.",
            "The outcome of a computation depends on the unpredictable timing of multiple threads or processes accessing a shared resource.",
            "The system is thrashing."
        ],
        correctAnswer: 3,
    },
    {
        id: 48,
        text: "A client sends a request to a server, and the server processes it and sends a response. This architectural style is known as:",
        options: [
            "Peer-to-Peer",
            "Client-Server",
            "Layered",
            "Repository"
        ],
        correctAnswer: 2,
    },
    {
        id: 49,
        text: "Which file allocation method suffers the most from external fragmentation?",
        options: [
            "Contiguous Allocation",
            "Linked Allocation",
            "Indexed Allocation",
            "FAT32"
        ],
        correctAnswer: 1,
    },
    {
        id: 50,
        text: "An attack that uses a large number of compromised computers to launch a coordinated attack on a single target is called a:",
        options: [
            "Worm",
            "Trojan Horse",
            "Distributed Denial-of-Service (DDoS) attack",
            "Man-in-the-Middle attack"
        ],
        correctAnswer: 3,
    },
    {
        id: 51,
        text: "The language $L = \\{a^n b^m c^k \\mid n=m \\text{ or } m=k\\}$ is:",
        options: [
            "Regular",
            "Context-Free",
            "Not Context-Free",
            "Recursive but not Context-Free"
        ],
        correctAnswer: 2,
    },
    {
        id: 52,
        text: "The number of states in a minimal DFA accepting the language of all binary strings with the substring \"001\" is:",
        options: [
            "3",
            "4",
            "5",
            "2"
        ],
        correctAnswer: 2,
    },
    {
        id: 53,
        text: "An AI agent that selects an action to maximize a performance measure based on the current percept, without considering the history or future consequences, is a:",
        options: [
            "Simple Reflex Agent",
            "Model-based Reflex Agent",
            "Goal-based Agent",
            "Utility-based Agent"
        ],
        correctAnswer: 1,
    },
    {
        id: 54,
        text: "Which of the following languages is **NOT** regular?",
        options: [
            "The set of all binary strings with an odd number of 1s.",
            "The set of all binary strings of the form $0^n 1^n$ for $n \\geq 1$.",
            "The set of all binary strings ending in \"01\".",
            "The set of all binary strings with at most three 0s."
        ],
        correctAnswer: 2,
    },
    {
        id: 55,
        text: "The Post Correspondence Problem (PCP) is an example of a problem that is:",
        options: [
            "Decidable",
            "Undecidable",
            "NP-Complete",
            "Regular"
        ],
        correctAnswer: 2,
    },
    {
        id: 56,
        text: "Which of the following is a tautology?",
        options: [
            "$p \\wedge \\neg p$",
            "$p \\to \\neg p$",
            "$p \\vee \\neg p$",
            "$p \\leftrightarrow \\neg p$"
        ],
        correctAnswer: 3,
    },
    {
        id: 57,
        text: "A grammar with the production rule $AB \\to ab$ is:",
        options: [
            "Type 0 (Unrestricted)",
            "Type 1 (Context-Sensitive)",
            "Type 2 (Context-Free)",
            "Type 3 (Regular)"
        ],
        correctAnswer: 2,
    },
    {
        id: 58,
        text: "What is the main drawback of Breadth-First Search (BFS) compared to Depth-First Search (DFS)?",
        options: [
            "It is not guaranteed to find a solution.",
            "Its space complexity is generally higher.",
            "It cannot find the shortest path.",
            "It is slower."
        ],
        correctAnswer: 2,
    },
    {
        id: 59,
        text: "The class of recursively enumerable languages is closed under:",
        options: [
            "Union and Intersection.",
            "Union and Complementation.",
            "Intersection and Complementation.",
            "Union, but not Intersection or Complementation."
        ],
        correctAnswer: 1,
    },
    {
        id: 60,
        text: "An \"admissible\" heuristic in A* search is one that:",
        options: [
            "Always returns 0.",
            "Never overestimates the cost to reach the goal.",
            "Always perfectly estimates the cost to reach the goal.",
            "Is computationally very cheap to calculate."
        ],
        correctAnswer: 2,
    },
    {
        id: 61,
        text: "What is the primary purpose of adding a \"regularization term\" to the loss function of a machine learning model?",
        options: [
            "To increase the model's accuracy on the training set.",
            "To speed up the training process.",
            "To penalize model complexity and reduce overfitting.",
            "To ensure the model's predictions are interpretable."
        ],
        correctAnswer: 3,
    },
    {
        id: 62,
        text: "A model that has low bias but high variance:",
        options: [
            "Is likely too simple and underfitting the data.",
            "Is likely too complex and overfitting the data.",
            "Is a well-generalized model.",
            "Has poor performance on both training and test sets."
        ],
        correctAnswer: 2,
    },
    {
        id: 63,
        text: "An e-commerce company wants to identify groups of customers with similar purchasing behaviors. Which machine learning task is most appropriate?",
        options: [
            "Regression",
            "Classification",
            "Clustering",
            "Reinforcement Learning"
        ],
        correctAnswer: 3,
    },
    {
        id: 64,
        text: "Which of the following is a key difference between Bagging and Boosting ensemble methods?",
        options: [
            "Bagging trains models sequentially, while Boosting trains them in parallel.",
            "Bagging aims to reduce bias, while Boosting aims to reduce variance.",
            "Boosting trains models sequentially, with each model focusing on the errors of the previous one.",
            "Bagging can only be used with decision trees."
        ],
        correctAnswer: 3,
    },
    {
        id: 65,
        text: "The correlation coefficient between two variables is $-0.9$. This indicates:",
        options: [
            "A strong positive linear relationship.",
            "A weak negative linear relationship.",
            "A strong negative linear relationship.",
            "No linear relationship."
        ],
        correctAnswer: 3,
    },
    {
        id: 66,
        text: "What happens to the width of a confidence interval as the sample size increases (all else being equal)?",
        options: [
            "It increases.",
            "It decreases.",
            "It stays the same.",
            "It depends on the sample mean."
        ],
        correctAnswer: 2,
    },
    {
        id: 67,
        text: "Asymmetric key cryptography (public-key cryptography) is often used to:",
        options: [
            "Encrypt large volumes of data quickly.",
            "Securely exchange a secret key for symmetric encryption.",
            "Create a hash of a message.",
            "Detect if a message has been altered."
        ],
        correctAnswer: 2,
    },
    {
        id: 68,
        text: "In a neural network, what is the purpose of the \"backpropagation\" algorithm?",
        options: [
            "To make a forward pass and generate a prediction.",
            "To initialize the weights of the network.",
            "To calculate the gradients of the loss function with respect to the weights.",
            "To select the number of hidden layers."
        ],
        correctAnswer: 3,
    },
    {
        id: 69,
        text: "In a binary classification problem, if the cost of a false negative is extremely high (e.g., a medical diagnosis), which is the most important metric to optimize?",
        options: [
            "Precision",
            "Accuracy",
            "Recall (Sensitivity)",
            "Specificity"
        ],
        correctAnswer: 3,
    },
    {
        id: 70,
        text: "The \"elbow method\" is a heuristic used to determine the optimal number of clusters in which algorithm?",
        options: [
            "DBSCAN",
            "K-Means",
            "Hierarchical Clustering",
            "Gaussian Mixture Models"
        ],
        correctAnswer: 2,
    },
    {
        id: 71,
        text: "If two events, A and B, are independent, then $P(A \\cap B)$ is equal to:",
        options: [
            "$P(A) + P(B)$",
            "$P(A|B)$",
            "$P(A) \\times P(B)$",
            "$P(A) + P(B) - P(A \\cap B)$"
        ],
        correctAnswer: 3,
    },
    {
        id: 72,
        text: "A \"Cross-Site Scripting\" (XSS) attack involves:",
        options: [
            "Injecting malicious scripts into a trusted website, which are then executed in the victim's browser.",
            "Manipulating a database through a web application's input fields.",
            "Intercepting and altering communication between a client and a server.",
            "Flooding a website with traffic to make it unavailable."
        ],
        correctAnswer: 1,
    },
    {
        id: 73,
        text: "What does it mean to \"standardize\" a feature in data preprocessing?",
        options: [
            "To scale it to a range between 0 and 1.",
            "To transform it so it has a mean of 0 and a standard deviation of 1.",
            "To convert it from a categorical to a numerical format.",
            "To remove outliers."
        ],
        correctAnswer: 2,
    },
    {
        id: 74,
        text: "A Random Forest is an ensemble method that primarily aims to reduce:",
        options: [
            "Bias",
            "Variance",
            "Both bias and variance equally.",
            "The number of features."
        ],
        correctAnswer: 2,
    },
    {
        id: 75,
        text: "In the context of database indexing, what is a \"clustered index\"?",
        options: [
            "An index where the leaf level stores pointers to the data rows.",
            "An index that determines the physical order of data in a table.",
            "An index that is created on multiple columns.",
            "A secondary index used for faster lookups."
        ],
        correctAnswer: 2,
    },
];
