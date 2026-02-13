export interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number; // 1-based index
}

export interface ExamConfig {
    title: string;
    subject: string;
    totalQuestions: number;
    totalMarks: number;
    correctMarks: number;
    wrongMarks: number;
    durationMinutes: number;
    date: string;
}

export const examConfig: ExamConfig = {
    title: "CUET PG 2026 - Mock Test 7",
    subject: "Data Science, AI, Cyber Security & Computer Science",
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
        text: "A function $f: A \\to B$ is said to be injective (one-to-one) if:",
        options: [
            "Every element in $B$ has a pre-image in $A$",
            "Different elements in A map to different elements in B",
            "$f(A) = B$",
            "$f$ is invertible",
        ],
        correctAnswer: 2,
    },
    {
        id: 2,
        text: "In a poset (partially ordered set), which property must hold?\n\nA. Reflexivity\nB. Antisymmetry\nC. Transitivity\nD. Totality\n\nChoose the correct answer from the options given below:",
        options: [
            "A, B and C only",
            "A, B and D only",
            "B, C and D only",
            "A, B, C and D",
        ],
        correctAnswer: 1,
    },
    {
        id: 3,
        text: "The Boolean expression $A'B' + AB$ can be simplified to:",
        options: [
            "$A \\oplus B$",
            "$A \\odot B$ (XNOR)",
            "$A + B$",
            "$A \\cdot B$",
        ],
        correctAnswer: 2,
    },
    {
        id: 4,
        text: "Kleene star ($*$) operation on a language $L$ represents:",
        options: [
            "$L$ repeated exactly once",
            "$L$ concatenated zero or more times",
            "$L$ concatenated exactly twice",
            "Complement of $L$",
        ],
        correctAnswer: 2,
    },
    {
        id: 5,
        text: "The language $\\{ww \\mid w \\in \\{a,b\\}^*\\}$ is:",
        options: [
            "Regular",
            "Context-free but not regular",
            "Context-sensitive",
            "Not context-free",
        ],
        correctAnswer: 4,
    },
    {
        id: 6,
        text: "Pumping lemma is used to prove that a language is:",
        options: [
            "Regular",
            "Not regular",
            "Context-free",
            "Decidable",
        ],
        correctAnswer: 2,
    },
    {
        id: 7,
        text: "Left recursion in a grammar can cause problems in:",
        options: [
            "Bottom-up parsing",
            "Top-down parsing",
            "Both types of parsing",
            "Neither type of parsing",
        ],
        correctAnswer: 2,
    },
    {
        id: 8,
        text: "A Turing machine that halts on all inputs recognizes a:",
        options: [
            "Recursively enumerable language",
            "Recursive language",
            "Context-free language",
            "Regular language",
        ],
        correctAnswer: 2,
    },
    {
        id: 9,
        text: "The complement of a recursively enumerable language is:",
        options: [
            "Always recursively enumerable",
            "Not necessarily recursively enumerable",
            "Always recursive",
            "Always regular",
        ],
        correctAnswer: 2,
    },
    {
        id: 10,
        text: "In BCD (Binary Coded Decimal), each decimal digit is represented using:",
        options: [
            "3 bits",
            "4 bits",
            "8 bits",
            "16 bits",
        ],
        correctAnswer: 2,
    },
    {
        id: 11,
        text: "The number of input combinations for which a full adder produces a carry output is:",
        options: [
            "2",
            "3",
            "4",
            "5",
        ],
        correctAnswer: 3,
    },
    {
        id: 12,
        text: "Priority encoder outputs:",
        options: [
            "Position of highest priority active input",
            "Sum of all inputs",
            "All active inputs",
            "Lowest priority input",
        ],
        correctAnswer: 1,
    },
    {
        id: 13,
        text: "Quine-McCluskey method is used for:",
        options: [
            "Circuit design",
            "Boolean function minimization",
            "Timing analysis",
            "Power optimization",
        ],
        correctAnswer: 2,
    },
    {
        id: 14,
        text: "A T flip-flop can be converted to a D flip-flop by:",
        options: [
            "Connecting T to D",
            "Using appropriate logic gates",
            "Cannot be converted",
            "Using only NOT gate",
        ],
        correctAnswer: 2,
    },
    {
        id: 15,
        text: "Schmitt trigger is used for:",
        options: [
            "Amplification",
            "Converting noisy signals to clean digital signals",
            "Oscillation",
            "Memory",
        ],
        correctAnswer: 2,
    },
    {
        id: 16,
        text: "The effective address in base register addressing mode is:",
        options: [
            "Contents of base register",
            "Contents of base register + offset",
            "Offset only",
            "Program counter + offset",
        ],
        correctAnswer: 2,
    },
    {
        id: 17,
        text: "Cache replacement policy determines:",
        options: [
            "Which block to fetch",
            "Which block to replace when cache is full",
            "Cache size",
            "Access time",
        ],
        correctAnswer: 2,
    },
    {
        id: 18,
        text: "LRU (Least Recently Used) cache replacement requires:",
        options: [
            "No tracking",
            "Tracking access history",
            "Random selection",
            "FIFO queue only",
        ],
        correctAnswer: 2,
    },
    {
        id: 19,
        text: "Data hazard in pipeline occurs when:",
        options: [
            "Hardware resources are insufficient",
            "An instruction depends on result of previous instruction",
            "Branch is taken",
            "Cache miss occurs",
        ],
        correctAnswer: 2,
    },
    {
        id: 20,
        text: "Branch prediction is used to:",
        options: [
            "Increase cache size",
            "Reduce pipeline stalls due to branches",
            "Increase clock speed",
            "Reduce power consumption",
        ],
        correctAnswer: 2,
    },
    {
        id: 21,
        text: "Microinstructions in microprogrammed control are stored in:",
        options: [
            "Main memory",
            "Control memory",
            "Cache",
            "Registers",
        ],
        correctAnswer: 2,
    },
    {
        id: 22,
        text: "In 8085, the instruction RLC performs:",
        options: [
            "Rotate left through carry",
            "Rotate left circular",
            "Rotate right circular",
            "Logical left shift",
        ],
        correctAnswer: 2,
    },
    {
        id: 23,
        text: "The instruction SPHL in 8085:",
        options: [
            "Stores HL to stack pointer",
            "Loads HL from stack pointer",
            "Moves SP to HL",
            "Moves HL to SP",
        ],
        correctAnswer: 4,
    },
    {
        id: 24,
        text: "In 8085, INTR interrupt is:",
        options: [
            "Non-maskable",
            "Maskable",
            "Has no vector",
            "Software interrupt",
        ],
        correctAnswer: 2,
    },
    {
        id: 25,
        text: "Handshaking in I/O is used for:",
        options: [
            "Synchronizing data transfer between devices",
            "Error detection",
            "Increasing speed",
            "Reducing cost",
        ],
        correctAnswer: 1,
    },
    {
        id: 26,
        text: "The 8259 Programmable Interrupt Controller can handle:",
        options: [
            "4 interrupts",
            "8 interrupts",
            "16 interrupts",
            "32 interrupts",
        ],
        correctAnswer: 2,
    },
    {
        id: 27,
        text: "In C, the union data type:",
        options: [
            "Stores all members simultaneously",
            "Stores one member at a time sharing same memory",
            "Cannot have different data types",
            "Is same as structure",
        ],
        correctAnswer: 2,
    },
    {
        id: 28,
        text: "Dangling pointer refers to:",
        options: [
            "Pointer pointing to valid memory",
            "Pointer pointing to freed/deallocated memory",
            "NULL pointer",
            "Pointer to pointer",
        ],
        correctAnswer: 2,
    },
    {
        id: 29,
        text: "Memory leak occurs when:",
        options: [
            "Memory is freed properly",
            "Allocated memory is not freed and pointer is lost",
            "Stack overflow happens",
            "Recursion is used",
        ],
        correctAnswer: 2,
    },
    {
        id: 30,
        text: "The time complexity of inserting at the beginning of a singly linked list is:",
        options: [
            "$O(1)$",
            "$O(\\log n)$",
            "$O(n)$",
            "$O(n \\log n)$",
        ],
        correctAnswer: 1,
    },
    {
        id: 31,
        text: "A queue implemented using two stacks has enqueue operation time complexity of:",
        options: [
            "$O(1)$ always",
            "$O(n)$ worst case",
            "$O(\\log n)$",
            "$O(n^2)$",
        ],
        correctAnswer: 2,
    },
    {
        id: 32,
        text: "XOR linked list is a:",
        options: [
            "Singly linked list",
            "Doubly linked list using single pointer per node",
            "Circular linked list",
            "Tree structure",
        ],
        correctAnswer: 2,
    },
    {
        id: 33,
        text: "Expression tree evaluation is done using:",
        options: [
            "Inorder traversal",
            "Preorder traversal",
            "Postorder traversal",
            "Level order traversal",
        ],
        correctAnswer: 3,
    },
    {
        id: 34,
        text: "The diameter of a binary tree is:",
        options: [
            "Height of tree",
            "Longest path between any two nodes",
            "Number of nodes",
            "Number of edges",
        ],
        correctAnswer: 2,
    },
    {
        id: 35,
        text: "A binary heap can be efficiently stored in:",
        options: [
            "Linked list",
            "Array",
            "Tree structure only",
            "Hash table",
        ],
        correctAnswer: 2,
    },
    {
        id: 36,
        text: "Double hashing uses:",
        options: [
            "One hash function",
            "Two hash functions",
            "Three hash functions",
            "No hash function",
        ],
        correctAnswer: 2,
    },
    {
        id: 37,
        text: "Load factor in a hash table is:",
        options: [
            "Number of buckets",
            "Ratio of number of entries to number of buckets",
            "Number of collisions",
            "Hash function output",
        ],
        correctAnswer: 2,
    },
    {
        id: 38,
        text: "Cuckoo hashing uses:",
        options: [
            "One hash table",
            "Two hash tables and two hash functions",
            "Three hash tables",
            "Linked lists",
        ],
        correctAnswer: 2,
    },
    {
        id: 39,
        text: "Stability in sorting means:",
        options: [
            "Algorithm is fast",
            "Relative order of equal elements is preserved",
            "Uses minimum memory",
            "Works on all inputs",
        ],
        correctAnswer: 2,
    },
    {
        id: 40,
        text: "Cocktail sort is a variant of:",
        options: [
            "Quick Sort",
            "Bubble Sort",
            "Merge Sort",
            "Heap Sort",
        ],
        correctAnswer: 2,
    },
    {
        id: 41,
        text: "The space complexity of Merge Sort is:",
        options: [
            "$O(1)$",
            "$O(\\log n)$",
            "$O(n)$",
            "$O(n^2)$",
        ],
        correctAnswer: 3,
    },
    {
        id: 42,
        text: "Ternary search requires the array to be:",
        options: [
            "Unsorted",
            "Sorted",
            "Partially sorted",
            "In reverse order",
        ],
        correctAnswer: 2,
    },
    {
        id: 43,
        text: "Jump search has time complexity of:",
        options: [
            "$O(n)$",
            "$O(\\sqrt{n})$",
            "$O(\\log n)$",
            "$O(n \\log n)$",
        ],
        correctAnswer: 2,
    },
    {
        id: 44,
        text: "Kadane's algorithm solves:",
        options: [
            "Sorting problem",
            "Maximum subarray sum problem",
            "Shortest path problem",
            "Graph coloring",
        ],
        correctAnswer: 2,
    },
    {
        id: 45,
        text: "The Rod Cutting problem is solved using:",
        options: [
            "Greedy algorithm",
            "Dynamic programming",
            "Backtracking",
            "Linear search",
        ],
        correctAnswer: 2,
    },
    {
        id: 46,
        text: "Optimal page replacement algorithm (Belady's optimal) is:",
        options: [
            "Practical to implement",
            "Theoretical/Not practical",
            "Used in all systems",
            "Worse than FIFO",
        ],
        correctAnswer: 2,
    },
    {
        id: 47,
        text: "Egg dropping problem uses:",
        options: [
            "Greedy approach",
            "Dynamic programming",
            "Linear search",
            "Binary search only",
        ],
        correctAnswer: 2,
    },
    {
        id: 48,
        text: "Word break problem can be solved using:",
        options: [
            "Greedy algorithm",
            "Dynamic programming",
            "Sorting",
            "Hashing only",
        ],
        correctAnswer: 2,
    },
    {
        id: 49,
        text: "Minimum vertex cover problem is:",
        options: [
            "Polynomial time solvable",
            "NP-complete",
            "Has no solution",
            "Linear time solvable",
        ],
        correctAnswer: 2,
    },
    {
        id: 50,
        text: "Graph isomorphism problem is:",
        options: [
            "Known to be in P",
            "Known to be NP-complete",
            "Neither proven P nor NP-complete",
            "Unsolvable",
        ],
        correctAnswer: 3,
    },
    {
        id: 51,
        text: "Bipartite graph can be checked using:",
        options: [
            "DFS or BFS with coloring",
            "Dijkstra's algorithm",
            "Prim's algorithm",
            "Sorting",
        ],
        correctAnswer: 1,
    },
    {
        id: 52,
        text: "Context switching overhead depends on:\n\nA. Number of registers\nB. Memory architecture\nC. Operating system support\nD. Application type\n\nChoose the correct answer from the options given below:",
        options: [
            "A, B and C only",
            "A, B and D only",
            "B, C and D only",
            "A, B, C and D",
        ],
        correctAnswer: 1,
    },
    {
        id: 53,
        text: "Process Control Block (PCB) contains:\n\nA. Process state\nB. Program counter\nC. CPU registers\nD. Memory management information\n\nChoose the correct answer from the options given below:",
        options: [
            "A, B and C only",
            "A, B and D only",
            "B, C and D only",
            "A, B, C and D",
        ],
        correctAnswer: 4,
    },
    {
        id: 54,
        text: "Preemptive priority scheduling can cause:",
        options: [
            "High throughput",
            "Starvation of low-priority processes",
            "No waiting time",
            "Equal distribution",
        ],
        correctAnswer: 2,
    },
    {
        id: 55,
        text: "Fair-share scheduling considers:",
        options: [
            "Individual processes only",
            "Groups of processes/users",
            "I/O operations only",
            "Memory usage only",
        ],
        correctAnswer: 2,
    },
    {
        id: 56,
        text: "Counting semaphore can have:",
        options: [
            "Only values 0 and 1",
            "Any non-negative integer value",
            "Only negative values",
            "Only positive values",
        ],
        correctAnswer: 2,
    },
    {
        id: 57,
        text: "Condition variables are used with:",
        options: [
            "Semaphores only",
            "Monitors and mutexes",
            "Deadlock detection",
            "Memory allocation",
        ],
        correctAnswer: 2,
    },
    {
        id: 58,
        text: "Deadlock recovery involves:",
        options: [
            "Preventing deadlock",
            "Process termination or resource preemption",
            "Avoiding deadlock",
            "Ignoring deadlock",
        ],
        correctAnswer: 2,
    },
    {
        id: 59,
        text: "Multi-level page tables reduce:",
        options: [
            "Access time",
            "Memory required for page table",
            "TLB size",
            "Number of page faults",
        ],
        correctAnswer: 2,
    },
    {
        id: 60,
        text: "Page fault frequency algorithm adjusts:",
        options: [
            "CPU speed",
            "Number of frames allocated to process",
            "Disk speed",
            "Cache size",
        ],
        correctAnswer: 2,
    },
    {
        id: 61,
        text: "Copy-on-write is used in:",
        options: [
            "Process creation (fork)",
            "File deletion",
            "Network transmission",
            "Cache management",
        ],
        correctAnswer: 1,
    },
    {
        id: 62,
        text: "Nagle's algorithm in TCP is used for:",
        options: [
            "Reducing small packet transmission",
            "Increasing bandwidth",
            "Error correction",
            "Routing",
        ],
        correctAnswer: 1,
    },
    {
        id: 63,
        text: "TCP uses:\n\nA. Sequence numbers\nB. Acknowledgments\nC. Checksums\nD. Time stamps\n\nChoose the correct answer from the options given below:",
        options: [
            "A, B and C only",
            "A, B and D only",
            "B, C and D only",
            "A, B, C and D",
        ],
        correctAnswer: 4,
    },
    {
        id: 64,
        text: "Fast retransmit in TCP is triggered by:",
        options: [
            "Timeout",
            "Receiving three duplicate ACKs",
            "Window full",
            "Connection close",
        ],
        correctAnswer: 2,
    },
    {
        id: 65,
        text: "ICMP is used by:",
        options: [
            "FTP",
            "Ping and traceroute",
            "HTTP",
            "SMTP",
        ],
        correctAnswer: 2,
    },
    {
        id: 66,
        text: "Multicast IP addresses belong to:",
        options: [
            "Class A",
            "Class B",
            "Class C",
            "Class D",
        ],
        correctAnswer: 4,
    },
    {
        id: 67,
        text: "Quality of Service (QoS) in networks involves:\n\nA. Bandwidth management\nB. Delay control\nC. Packet loss minimization\nD. Security\n\nChoose the correct answer from the options given below:",
        options: [
            "A, B and C only",
            "A, B and D only",
            "B, C and D only",
            "A, B, C and D",
        ],
        correctAnswer: 1,
    },
    {
        id: 68,
        text: "Informed search strategies use:",
        options: [
            "No additional information",
            "Heuristic information",
            "Random selection",
            "Breadth-first approach only",
        ],
        correctAnswer: 2,
    },
    {
        id: 69,
        text: "Admissible heuristic:",
        options: [
            "Overestimates cost",
            "Never overestimates cost to goal",
            "Always returns zero",
            "Ignores goal",
        ],
        correctAnswer: 2,
    },
    {
        id: 70,
        text: "Alpha-beta pruning is effective when:",
        options: [
            "Moves are examined in random order",
            "Best moves are examined first",
            "Tree is very shallow",
            "No heuristic is available",
        ],
        correctAnswer: 2,
    },
    {
        id: 71,
        text: "Q-learning is a:",
        options: [
            "Supervised learning algorithm",
            "Reinforcement learning algorithm",
            "Clustering algorithm",
            "Classification algorithm",
        ],
        correctAnswer: 2,
    },
    {
        id: 72,
        text: "In symmetric key cryptography, the key must be:",
        options: [
            "Public",
            "Kept secret between sender and receiver",
            "Derived from plaintext",
            "Random for each message",
        ],
        correctAnswer: 2,
    },
    {
        id: 73,
        text: "Confusion and diffusion are principles of:",
        options: [
            "Public key cryptography",
            "Symmetric key cryptography",
            "Hash functions only",
            "Digital signatures",
        ],
        correctAnswer: 2,
    },
    {
        id: 74,
        text: "Training data in machine learning should be:",
        options: [
            "Same as test data",
            "Representative of the problem domain",
            "Very small",
            "Unlabeled always",
        ],
        correctAnswer: 2,
    },
    {
        id: 75,
        text: "ROC (Receiver Operating Characteristic) curve is used to:",
        options: [
            "Visualize classifier performance",
            "Sort data",
            "Cluster data",
            "Reduce dimensions",
        ],
        correctAnswer: 1,
    },
];
