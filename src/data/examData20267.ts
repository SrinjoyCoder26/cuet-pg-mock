import { ExamConfig, Question } from "./examTypes";

export const examConfig: ExamConfig = {
    title: "CUET PG 2026 - Mock Test Series VII",
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
        text: "What is the output of the following C code, assuming the compiler's `printf` evaluation order is right-to-left?\n```c\nint x = 10;\nprintf(\"%d %d %d\", x, ++x, x++);\n```",
        options: [
            "12 12 10",
            "10 11 11",
            "12 11 10",
            "11 12 11"
        ],
        correctAnswer: 1,
    },
    {
        id: 2,
        text: "A hash table of size 10 uses the hash function $h(key) = key \\mod 10$. If quadratic probing ($h(key) + i^2$) is used to resolve collisions, what is the final state after inserting the keys: 89, 18, 49, 58, 69?",
        options: [
            "_, 58, _, _, 49, _, _, _, 18, 89",
            "49, 58, 69, _, _, _, _, _, 18, 89",
            "_, 69, 58, _, 49, _, _, _, 18, 89",
            "49, _, _, 58, _, _, _, _, 18, 89"
        ],
        correctAnswer: 2,
    },
    {
        id: 3,
        text: "Which of the following statements about AVL trees is **INCORRECT**?\n\n(A). The height of an AVL tree with n nodes is guaranteed to be $O(\\log n)$.\n(B). An insertion may require a maximum of two rotations (one single, one double) to rebalance the tree.\n(C). The balance factor of every node must be \\{-1, 0, 1\\}.\n(D). A deletion operation may require up to $O(\\log n)$ rotations to rebalance the tree.",
        options: [
            "A",
            "B",
            "C",
            "D"
        ],
        correctAnswer: 2,
    },
    {
        id: 4,
        text: "The recurrence relation $T(n) = T(n-1) + n/\\log(n)$ describes a complexity class that is:",
        options: [
            "$O(n)$",
            "$O(n \\log n)$",
            "$\\Theta(n^2 / \\log n)$",
            "$\\Theta(n^2)$"
        ],
        correctAnswer: 3,
    },
    {
        id: 5,
        text: "You are given a min-heap. Which of the following tasks can be performed in $O(1)$ time?",
        options: [
            "Find the maximum element.",
            "Find the minimum element.",
            "Delete the minimum element.",
            "Insert a new element."
        ],
        correctAnswer: 2,
    },
    {
        id: 6,
        text: "A programmer needs to build a text editor's \"undo\" functionality. Which data structure is the most natural fit to maintain the history of actions?",
        options: [
            "Queue",
            "Stack",
            "Binary Search Tree",
            "Priority Queue"
        ],
        correctAnswer: 2,
    },
    {
        id: 7,
        text: "For a dense graph with $V$ vertices, which representation is more space-efficient and why?",
        options: [
            "Adjacency List, because it only stores existing edges.",
            "Adjacency Matrix, because the $O(V^2)$ space is filled, making lookups efficient.",
            "Adjacency Matrix, because it is more space-efficient than an Adjacency List which has pointer overhead.",
            "Adjacency List, because $O(V+E)$ is always less than $O(V^2)$."
        ],
        correctAnswer: 2,
    },
    {
        id: 8,
        text: "The solution to the recurrence $T(n) = 2T(\\sqrt{n}) + 1$ is:",
        options: [
            "$O(\\log n)$",
            "$O(\\log \\log n)$",
            "$O(\\sqrt{n})$",
            "$O(n)$"
        ],
        correctAnswer: 1,
    },
    {
        id: 9,
        text: "Which of the following is an application of a greedy algorithm?",
        options: [
            "Finding the optimal solution to the 0/1 Knapsack problem.",
            "Finding the shortest path in a graph with negative weight cycles.",
            "Generating Huffman codes for data compression.",
            "Finding the Longest Common Subsequence of two strings."
        ],
        correctAnswer: 3,
    },
    {
        id: 10,
        text: "In a B+ Tree of order $m$, where do the data pointers reside?",
        options: [
            "In all nodes (internal and leaf).",
            "Only in the internal nodes.",
            "Only in the leaf nodes.",
            "Only in the root node."
        ],
        correctAnswer: 3,
    },
    {
        id: 11,
        text: "**Match List-I (Algorithm) with List-II (Paradigm):**\n\n| List-I | List-II |\n|---|---|\n| A. Floyd-Warshall | I. Greedy |\n| B. Prim's Algorithm | II. Divide and Conquer |\n| C. Merge Sort | III. Dynamic Programming |\n| D. Activity Selection | IV. Greedy |\n\n*Note: Paradigm 'Greedy' appears twice.*",
        options: [
            "A-III, B-I, C-II, D-IV",
            "A-II, B-I, C-III, D-IV",
            "A-III, B-IV, C-II, D-I",
            "A-I, B-II, C-IV, D-III"
        ],
        correctAnswer: 1,
    },
    {
        id: 12,
        text: "In C, what is the key difference between `malloc` and `calloc`?",
        options: [
            "`malloc` allocates memory from the stack, while `calloc` allocates from the heap.",
            "`calloc` initializes the allocated memory to zero, while `malloc` does not.",
            "`malloc` can allocate memory for arrays, while `calloc` can only allocate for single variables.",
            "`calloc` is faster than `malloc`."
        ],
        correctAnswer: 2,
    },
    {
        id: 13,
        text: "What is the worst-case number of comparisons required to search for an element in a sorted array of $n$ elements using binary search?",
        options: [
            "$O(n)$",
            "$O(\\log n)$",
            "$O(1)$",
            "$O(n^2)$"
        ],
        correctAnswer: 2,
    },
    {
        id: 14,
        text: "Which of the following sorting algorithms is **NOT** an in-place sorting algorithm?",
        options: [
            "Bubble Sort",
            "Quicksort",
            "Heap Sort",
            "Merge Sort"
        ],
        correctAnswer: 4,
    },
    {
        id: 15,
        text: "The post-order traversal of a binary tree is `DEBFGCA` and its in-order traversal is `DBEAFCG`. What is its pre-order traversal?",
        options: [
            "ABDECFG",
            "ABDCEFG",
            "ABEDCFG",
            "ABCDEFG"
        ],
        correctAnswer: 1,
    },
    {
        id: 16,
        text: "What is the purpose of the `volatile` keyword in C?",
        options: [
            "It indicates that the variable can only be modified by the current function.",
            "It prevents the compiler from optimizing away reads and writes to the variable.",
            "It marks the variable for storage in read-only memory.",
            "It makes the variable's memory allocation permanent."
        ],
        correctAnswer: 2,
    },
    {
        id: 17,
        text: "A stable sorting algorithm is one that:",
        options: [
            "Has a consistent $O(n \\log n)$ performance.",
            "Preserves the relative order of equal-keyed elements in the input.",
            "Does not use recursion.",
            "Requires $O(1)$ auxiliary space."
        ],
        correctAnswer: 2,
    },
    {
        id: 18,
        text: "What is the time complexity of building a heap (heapify) from an array of $n$ elements?",
        options: [
            "$O(n \\log n)$",
            "$O(n)$",
            "$O(\\log n)$",
            "$O(n^2)$"
        ],
        correctAnswer: 2,
    },
    {
        id: 19,
        text: "In the context of dynamic programming, \"overlapping subproblems\" means:",
        options: [
            "Subproblems that are solved independently.",
            "Subproblems whose solutions depend on each other.",
            "The same subproblems are solved repeatedly during recursion.",
            "The problem cannot be broken down into smaller parts."
        ],
        correctAnswer: 3,
    },
    {
        id: 20,
        text: "A pointer in C that has been deallocated but is still being used is called a:",
        options: [
            "Null Pointer",
            "Void Pointer",
            "Wild Pointer",
            "Dangling Pointer"
        ],
        correctAnswer: 4,
    },
    {
        id: 21,
        text: "A 5-stage instruction pipeline has stage delays of 150ps, 120ps, 160ps, 140ps, and 130ps. What is the clock cycle time of the pipelined processor, assuming a 10ps latch delay between stages?",
        options: [
            "150 ps",
            "160 ps",
            "170 ps",
            "710 ps"
        ],
        correctAnswer: 3,
    },
    {
        id: 22,
        text: "In the IEEE 754 single-precision format, what does an exponent field of all `0`s and a mantissa field of all `0`s represent?",
        options: [
            "The number +1.0",
            "Positive infinity",
            "A denormalized number",
            "The number zero"
        ],
        correctAnswer: 4,
    },
    {
        id: 23,
        text: "A computer system has a 16-bit address bus. What is the maximum size of its addressable main memory?",
        options: [
            "16 KB",
            "64 KB",
            "1 MB",
            "16 MB"
        ],
        correctAnswer: 2,
    },
    {
        id: 24,
        text: "A computer has a direct-mapped cache of 1024 lines and a block size of 16 bytes. To which cache line number does the memory address `0xABCD` map?",
        options: [
            "Line 43",
            "Line 205",
            "Line 2859",
            "Line 188"
        ],
        correctAnswer: 4,
    },
    {
        id: 25,
        text: "To build a T flip-flop from a JK flip-flop, the inputs J and K must be:",
        options: [
            "Connected to $T$ and $T'$ respectively.",
            "Both connected to $T$.",
            "Set to $J=1, K=T$.",
            "Set to $J=T, K=1$."
        ],
        correctAnswer: 2,
    },
    {
        id: 26,
        text: "Which addressing mode is characterized by the instruction itself containing the operand value?",
        options: [
            "Immediate",
            "Direct",
            "Register",
            "Indirect"
        ],
        correctAnswer: 1,
    },
    {
        id: 27,
        text: "A CPU has an instruction format with 4 bits for the opcode and 12 bits for an address. How many distinct operations can the CPU perform, and what is the maximum addressable memory space?",
        options: [
            "16 operations, 4096 locations",
            "4 operations, 12 locations",
            "16 operations, 12 locations",
            "4 operations, 4096 locations"
        ],
        correctAnswer: 1,
    },
    {
        id: 28,
        text: "The primary purpose of Direct Memory Access (DMA) is to:",
        options: [
            "Allow the CPU to access memory more quickly.",
            "Enable an I/O device to transfer data directly to/from memory, bypassing the CPU.",
            "Provide a secure way to access memory.",
            "Increase the size of the addressable memory."
        ],
        correctAnswer: 2,
    },
    {
        id: 29,
        text: "A full adder can be constructed using two:",
        options: [
            "Half adders and an AND gate.",
            "Half adders and an OR gate.",
            "Half adders and a NOT gate.",
            "Full adders."
        ],
        correctAnswer: 2,
    },
    {
        id: 30,
        text: "A write-through cache policy specifies that:",
        options: [
            "Writes are only made to the cache.",
            "Writes are made to both the cache and main memory simultaneously.",
            "Writes are buffered and written to main memory later.",
            "Writes bypass the cache and go directly to main memory."
        ],
        correctAnswer: 2,
    },
    {
        id: 31,
        text: "How many 3-to-8 decoders with an enable input are needed to construct a 5-to-32 decoder?",
        options: [
            "4",
            "5",
            "8",
            "32"
        ],
        correctAnswer: 2,
    },
    {
        id: 32,
        text: "A data hazard in a pipeline where an instruction requires the result of a previous, not-yet-completed instruction is known as:",
        options: [
            "Structural Hazard",
            "Control Hazard",
            "Read-After-Write (RAW) Hazard",
            "Write-After-Read (WAR) Hazard"
        ],
        correctAnswer: 3,
    },
    {
        id: 33,
        text: "In the 8085 microprocessor, which of the following has the highest priority?",
        options: [
            "RST 7.5",
            "RST 6.5",
            "INTR",
            "TRAP"
        ],
        correctAnswer: 4,
    },
    {
        id: 34,
        text: "A system has a cache access time of 20 ns and a main memory access time of 150 ns. If the hit rate is 90%, what is the Average Memory Access Time (AMAT)?",
        options: [
            "35 ns",
            "20 ns",
            "137 ns",
            "15 ns"
        ],
        correctAnswer: 1,
    },
    {
        id: 35,
        text: "The control unit of a CPU can be implemented as either hardwired or microprogrammed. Which statement is generally **TRUE**?",
        options: [
            "Hardwired control is slower but more flexible than microprogrammed control.",
            "Microprogrammed control is faster but less flexible than hardwired control.",
            "Hardwired control is faster but less flexible than microprogrammed control.",
            "Microprogrammed control is used for RISC architectures, while hardwired is used for CISC."
        ],
        correctAnswer: 3,
    },
    {
        id: 36,
        text: "Which of the following is a condition that a solution to the critical section problem must satisfy?",
        options: [
            "Deadlock",
            "Starvation",
            "Bounded Waiting",
            "Race Condition"
        ],
        correctAnswer: 3,
    },
    {
        id: 37,
        text: "A system uses a page size of 2KB. For a process with a logical address $(5, 512)$, what is the physical address if the 5th page is mapped to frame 12?",
        options: [
            "10752",
            "25088",
            "24576",
            "1024"
        ],
        correctAnswer: 2,
    },
    {
        id: 38,
        text: "Which scheduling algorithm provides the minimum average waiting time but is difficult to implement in practice?",
        options: [
            "First-Come, First-Served (FCFS)",
            "Shortest Job First (SJF)",
            "Round Robin",
            "Priority Scheduling"
        ],
        correctAnswer: 2,
    },
    {
        id: 39,
        text: "What is the primary function of the Domain Name System (DNS)?",
        options: [
            "To resolve IP addresses to MAC addresses.",
            "To translate hostnames and domain names into IP addresses.",
            "To assign IP addresses to hosts dynamically.",
            "To route packets between different networks."
        ],
        correctAnswer: 2,
    },
    {
        id: 40,
        text: "Consider a system with 3 resource types (A, B, C) with instances (8, 5, 9) respectively. Given the following snapshot, is the system in a safe state?\n\n| Process | Allocation (ABC) | Max (ABC) |\n|---|---|---|\n| P0 | 2 1 2 | 5 2 3 |\n| P1 | 3 1 1 | 4 3 2 |\n| P2 | 1 1 3 | 3 2 5 |",
        options: [
            "Yes, with safe sequence <P0, P1, P2>.",
            "Yes, with safe sequence <P1, P0, P2>.",
            "No, the system is in an unsafe state.",
            "Yes, with safe sequence <P2, P1, P0>."
        ],
        correctAnswer: 2,
    },
    {
        id: 41,
        text: "Belady's Anomaly states that:",
        options: [
            "Increasing the number of processes can decrease CPU utilization.",
            "Increasing the number of page frames can sometimes increase the number of page faults.",
            "The shortest job does not always have the shortest response time.",
            "A deadlock can occur even if all four necessary conditions are not met."
        ],
        correctAnswer: 2,
    },
    {
        id: 42,
        text: "In the OSI model, encryption and data compression are functions of which layer?",
        options: [
            "Application Layer",
            "Presentation Layer",
            "Session Layer",
            "Transport Layer"
        ],
        correctAnswer: 2,
    },
    {
        id: 43,
        text: "What is the main difference between a process and a thread?",
        options: [
            "Processes are managed by the OS, while threads are managed by the user.",
            "Threads within the same process share the same address space, while processes do not.",
            "Processes are faster to create than threads.",
            "A process can have only one thread."
        ],
        correctAnswer: 2,
    },
    {
        id: 44,
        text: "Which of the following IP addresses belongs to Class B?",
        options: [
            "10.1.2.3",
            "172.16.1.2",
            "192.168.1.1",
            "224.0.0.1"
        ],
        correctAnswer: 2,
    },
    {
        id: 45,
        text: "Internal fragmentation occurs in which of the following memory allocation schemes?",
        options: [
            "Segmentation",
            "Paging",
            "Dynamic Partitioning",
            "Linked Lists"
        ],
        correctAnswer: 2,
    },
    {
        id: 46,
        text: "What is the purpose of the TTL (Time to Live) field in an IP header?",
        options: [
            "To indicate the total time the packet has been alive.",
            "To limit the lifespan of a packet to prevent it from circulating indefinitely.",
            "To prioritize the packet during routing.",
            "To specify the type of transport layer protocol."
        ],
        correctAnswer: 2,
    },
    {
        id: 47,
        text: "A counting semaphore is initialized to 10. After 6 $P$ (wait) operations and 4 $V$ (signal) operations, what is the final value of the semaphore?",
        options: [
            "8",
            "10",
            "12",
            "6"
        ],
        correctAnswer: 1,
    },
    {
        id: 48,
        text: "Which protocol provides reliable, connection-oriented data delivery?",
        options: [
            "UDP",
            "IP",
            "TCP",
            "HTTP"
        ],
        correctAnswer: 3,
    },
    {
        id: 49,
        text: "A system using segmentation has the following segment table. What is the physical address for the logical address (2, 400)?\n\n| Segment | Base | Limit |\n|---|---|---|\n| 0 | 219 | 600 |\n| 1 | 2300 | 14 |\n| 2 | 90 | 100 |",
        options: [
            "490",
            "Invalid address (trap)",
            "90",
            "2700"
        ],
        correctAnswer: 2,
    },
    {
        id: 50,
        text: "A \"Botnet\" is a:",
        options: [
            "Type of computer virus.",
            "Hardware device for network security.",
            "Network of infected computers controlled by an attacker.",
            "Firewall configuration rule."
        ],
        correctAnswer: 3,
    },
    {
        id: 51,
        text: "The language $L = \\{a^n b^{n+1} \\mid n \\geq 0\\}$ is:",
        options: [
            "Regular",
            "Context-Free but not regular",
            "Context-Sensitive but not context-free",
            "Not a recursively enumerable language"
        ],
        correctAnswer: 2,
    },
    {
        id: 52,
        text: "The relationship between the power of a Deterministic Finite Automaton (DFA) and a Non-deterministic Finite Automaton (NFA) is:",
        options: [
            "NFA > DFA",
            "DFA > NFA",
            "NFA = DFA",
            "Cannot be determined"
        ],
        correctAnswer: 3,
    },
    {
        id: 53,
        text: "Which of the following statements about A* search is **TRUE**?",
        options: [
            "A* is an example of a uniform-cost search.",
            "If the heuristic $h(n)$ is consistent, A* is guaranteed to find an optimal solution.",
            "A* will always expand fewer nodes than any other optimal algorithm.",
            "A* minimizes $g(n)$, the cost from the start node to the current node $n$."
        ],
        correctAnswer: 2,
    },
    {
        id: 54,
        text: "The regular expression for the language of all strings over \\{0, 1\\} that do not contain the substring \"11\" is:",
        options: [
            "$(0+10)^* (1+\\varepsilon)$",
            "$(0^*1)^*$",
            "$0^*(10^*)^*$",
            "$(10)^* (01)^*$"
        ],
        correctAnswer: 1,
    },
    {
        id: 55,
        text: "The Halting Problem is undecidable, which means:",
        options: [
            "There is no algorithm that can solve it for all possible inputs.",
            "It is a problem that has not yet been solved.",
            "It can only be solved by a non-deterministic Turing machine.",
            "The problem has an infinite number of solutions."
        ],
        correctAnswer: 1,
    },
    {
        id: 56,
        text: "Which of the following is **NOT** a property of a well-formed formula (WFF) in propositional logic?",
        options: [
            "Any propositional variable (P, Q, R) is a WFF.",
            "If A is a WFF, then ¬A is a WFF.",
            "If A and B are WFFs, then $(A \\wedge B)$ is a WFF.",
            "If A is a WFF, then $\\forall A$ is a WFF."
        ],
        correctAnswer: 4,
    },
    {
        id: 57,
        text: "The Myhill-Nerode theorem is used to:",
        options: [
            "Prove that a language is context-free.",
            "Convert a DFA to a regular expression.",
            "Determine the minimum number of states in a DFA for a regular language.",
            "Prove that a problem is NP-complete."
        ],
        correctAnswer: 3,
    },
    {
        id: 58,
        text: "In AI, a search algorithm is considered \"complete\" if it:",
        options: [
            "Always finds the optimal solution.",
            "Is guaranteed to find a solution if one exists.",
            "Has the lowest possible time complexity.",
            "Has the lowest possible space complexity."
        ],
        correctAnswer: 2,
    },
    {
        id: 59,
        text: "The set of regular languages is closed under which of the following operations?",
        options: [
            "Union, Intersection, and Complementation.",
            "Union and Intersection, but not Complementation.",
            "Union and Complementation, but not Intersection.",
            "Only Union."
        ],
        correctAnswer: 1,
    },
    {
        id: 60,
        text: "A pushdown automaton (PDA) is more powerful than a finite automaton (FA) because of its:",
        options: [
            "Ability to read input characters.",
            "Set of states.",
            "Memory (stack).",
            "Transition function."
        ],
        correctAnswer: 3,
    },
    {
        id: 61,
        text: "A classification model predicts a patient has a rare disease. The prediction is incorrect. This is an example of a:",
        options: [
            "True Positive",
            "True Negative",
            "False Positive (Type I Error)",
            "False Negative (Type II Error)"
        ],
        correctAnswer: 3,
    },
    {
        id: 62,
        text: "Increasing the value of $K$ in a K-Nearest Neighbors (KNN) algorithm will likely:",
        options: [
            "Increase the model's variance and decrease its bias.",
            "Decrease the model's variance and increase its bias.",
            "Increase both bias and variance.",
            "Decrease both bias and variance."
        ],
        correctAnswer: 2,
    },
    {
        id: 63,
        text: "Which of the following is **NOT** a required assumption for a valid linear regression model?",
        options: [
            "The independent variables must be normally distributed.",
            "There is a linear relationship between the independent and dependent variables.",
            "The errors (residuals) are independent.",
            "The errors have constant variance (homoscedasticity)."
        ],
        correctAnswer: 1,
    },
    {
        id: 64,
        text: "A data scientist trains a decision tree model which achieves 100% accuracy on the training data but only 65% on the test data. This is a clear case of:",
        options: [
            "Underfitting",
            "High Bias",
            "Overfitting",
            "A well-generalized model"
        ],
        correctAnswer: 3,
    },
    {
        id: 65,
        text: "A bag contains 5 red and 3 blue balls. If two balls are drawn at random without replacement, what is the probability that they are of different colors?",
        options: [
            "15/28",
            "15/56",
            "15/32",
            "8/28"
        ],
        correctAnswer: 1,
    },
    {
        id: 66,
        text: "In a dataset, if the mean is significantly greater than the median, the distribution is most likely:",
        options: [
            "Symmetric",
            "Skewed to the right (positively skewed)",
            "Skewed to the left (negatively skewed)",
            "Bimodal"
        ],
        correctAnswer: 2,
    },
    {
        id: 67,
        text: "The Diffie-Hellman algorithm is used for:",
        options: [
            "Symmetric encryption.",
            "Asymmetric encryption.",
            "Hashing.",
            "Key exchange."
        ],
        correctAnswer: 4,
    },
    {
        id: 68,
        text: "What is the primary purpose of L1 regularization (Lasso Regression)?",
        options: [
            "To ensure the model is linear.",
            "To handle non-linear relationships.",
            "To perform feature selection by shrinking some coefficients to exactly zero.",
            "To increase the model's training accuracy."
        ],
        correctAnswer: 3,
    },
    {
        id: 69,
        text: "In a binary classification test, an AUC (Area Under the ROC Curve) of 0.5 indicates that the model is:",
        options: [
            "A perfect classifier.",
            "No better than random guessing.",
            "A poor classifier, worse than random guessing.",
            "A highly biased model."
        ],
        correctAnswer: 2,
    },
    {
        id: 70,
        text: "Which of the following statements about the bias-variance tradeoff is **INCORRECT**?",
        options: [
            "A very complex model is likely to have low bias and high variance.",
            "A very simple model is likely to have high bias and low variance.",
            "As model complexity increases, bias tends to decrease.",
            "As model complexity increases, variance tends to decrease."
        ],
        correctAnswer: 4,
    },
    {
        id: 71,
        text: "Given a confusion matrix for a binary classifier: TP=100, FP=20, FN=30, TN=850. What is the Precision of the model?",
        options: [
            "100 / 130",
            "100 / 120",
            "850 / 870",
            "100 / 1000"
        ],
        correctAnswer: 2,
    },
    {
        id: 72,
        text: "An attacker secretly intercepts and alters communications between two parties. This is known as:",
        options: [
            "Phishing",
            "Denial of Service (DoS)",
            "Man-in-the-Middle (MitM) attack",
            "SQL Injection"
        ],
        correctAnswer: 3,
    },
    {
        id: 73,
        text: "The process of scaling numerical features to be between 0 and 1 is called:",
        options: [
            "Standardization",
            "Normalization (Min-Max Scaling)",
            "Encoding",
            "Discretization"
        ],
        correctAnswer: 2,
    },
    {
        id: 74,
        text: "A company wants to predict the exact \"revenue in dollars\" a customer will generate next year. This is a:",
        options: [
            "Classification problem",
            "Regression problem",
            "Clustering problem",
            "Reinforcement learning problem"
        ],
        correctAnswer: 2,
    },
    {
        id: 75,
        text: "In database design, 3NF (Third Normal Form) is primarily concerned with eliminating:",
        options: [
            "Repeating groups.",
            "Partial dependencies.",
            "Transitive dependencies.",
            "All functional dependencies."
        ],
        correctAnswer: 3,
    },
];
