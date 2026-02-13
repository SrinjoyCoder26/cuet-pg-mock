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
    title: "CUET PG 2026 - Mock Test 6",
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
        text: "The inverse of an element $a$ in a group $(G, *)$ is an element $b$ such that:",
        options: [
            "$a * b = b * a = \\text{identity}$",
            "$a * b = a$",
            "$b * a = b$",
            "$a * b = b$",
        ],
        correctAnswer: 1,
    },
    {
        id: 2,
        text: "A binary relation $R$ on set $A$ is irreflexive if:",
        options: [
            "$(a, a) \\in R$ for all $a \\in A$",
            "$(a, a) \\notin R$ for all $a \\in A$",
            "$(a, b) \\in R$ implies $(b, a) \\in R$",
            "$(a, b) \\in R$ implies $(b, a) \\notin R$",
        ],
        correctAnswer: 2,
    },
    {
        id: 3,
        text: "De Morgan's law states that $\\neg(A \\land B)$ is equivalent to:",
        options: [
            "$\\neg A \\land \\neg B$",
            "$\\neg A \\lor \\neg B$",
            "$A \\lor B$",
            "$A \\land B$",
        ],
        correctAnswer: 2,
    },
    {
        id: 4,
        text: "The complement of a regular language is:",
        options: [
            "Always regular",
            "Never regular",
            "Sometimes regular",
            "Context-free",
        ],
        correctAnswer: 1,
    },
    {
        id: 5,
        text: "Minimization of DFA involves:",
        options: [
            "Increasing number of states",
            "Removing unreachable and indistinguishable states",
            "Adding more transitions",
            "Converting to NFA",
        ],
        correctAnswer: 2,
    },
    {
        id: 6,
        text: "The language accepted by an NFA with $\\epsilon$-transitions can also be accepted by:",
        options: [
            "NFA without $\\epsilon$-transitions",
            "DFA",
            "Regular expression",
            "All of the above",
        ],
        correctAnswer: 4,
    },
    {
        id: 7,
        text: "A derivation tree (parse tree) in CFG represents:",
        options: [
            "Syntactic structure of a string",
            "Semantic meaning",
            "Execution order",
            "Optimization",
        ],
        correctAnswer: 1,
    },
    {
        id: 8,
        text: "Which problem is decidable?",
        options: [
            "Halting problem for Turing machines",
            "Emptiness problem for regular languages",
            "Equivalence of two context-free grammars",
            "Post Correspondence Problem",
        ],
        correctAnswer: 2,
    },
    {
        id: 9,
        text: "Church-Turing thesis states that:",
        options: [
            "All problems are computable",
            "Turing machine can compute anything computable by any algorithm",
            "Some problems have no algorithm",
            "All languages are recursive",
        ],
        correctAnswer: 2,
    },
    {
        id: 10,
        text: "IEEE 754 standard is used for:",
        options: [
            "Integer representation",
            "Floating point representation",
            "Character encoding",
            "Memory addressing",
        ],
        correctAnswer: 2,
    },
    {
        id: 11,
        text: "A universal gate is one that can implement:",
        options: [
            "Only AND and OR",
            "Any Boolean function",
            "Only NOT gate",
            "Linear functions only",
        ],
        correctAnswer: 2,
    },
    {
        id: 12,
        text: "The propagation delay in digital circuits is:",
        options: [
            "Time for signal to travel through circuit",
            "Setup time",
            "Hold time",
            "Clock period",
        ],
        correctAnswer: 1,
    },
    {
        id: 13,
        text: "Race condition in sequential circuits occurs when:",
        options: [
            "Output depends on relative timing of inputs",
            "Circuit is too slow",
            "Power supply is unstable",
            "Temperature is high",
        ],
        correctAnswer: 1,
    },
    {
        id: 14,
        text: "An asynchronous counter:",
        options: [
            "All flip-flops are clocked simultaneously",
            "Flip-flops are clocked sequentially",
            "Has no clock",
            "Cannot count",
        ],
        correctAnswer: 2,
    },
    {
        id: 15,
        text: "Glitches in combinational circuits are:",
        options: [
            "Permanent errors",
            "Temporary unwanted transitions",
            "Design features",
            "Manufacturing defects",
        ],
        correctAnswer: 2,
    },
    {
        id: 16,
        text: "Direct Memory Access (DMA) allows:",
        options: [
            "CPU to access memory faster",
            "I/O devices to transfer data to/from memory without CPU intervention",
            "Faster cache access",
            "Better virtual memory",
        ],
        correctAnswer: 2,
    },
    {
        id: 17,
        text: "Locality of reference includes:\n\nA. Temporal locality\nB. Spatial locality\nC. Random locality\nD. Sequential locality\n\nChoose the correct answer from the options given below:",
        options: [
            "A and B only",
            "A, B and D only",
            "B, C and D only",
            "A, B, C and D",
        ],
        correctAnswer: 1,
    },
    {
        id: 18,
        text: "In direct mapped cache, each memory block maps to:",
        options: [
            "Any cache line",
            "Exactly one cache line",
            "Multiple cache lines",
            "No cache line",
        ],
        correctAnswer: 2,
    },
    {
        id: 19,
        text: "The cache coherence problem occurs in:",
        options: [
            "Single processor systems",
            "Multi-processor systems with separate caches",
            "Systems without cache",
            "Virtual memory systems",
        ],
        correctAnswer: 2,
    },
    {
        id: 20,
        text: "Instruction fetch, decode, execute, memory access, and write-back are stages of:",
        options: [
            "Cache operation",
            "Instruction pipeline",
            "Virtual memory",
            "Interrupt handling",
        ],
        correctAnswer: 2,
    },
    {
        id: 21,
        text: "Vector processing is efficient for:",
        options: [
            "Scalar operations",
            "Operations on arrays of data",
            "Branch instructions",
            "Random access",
        ],
        correctAnswer: 2,
    },
    {
        id: 22,
        text: "In 8085, the CMA instruction:",
        options: [
            "Complements accumulator",
            "Compares accumulator with memory",
            "Clears accumulator",
            "Adds to accumulator",
        ],
        correctAnswer: 1,
    },
    {
        id: 23,
        text: "The instruction DCX H in 8085:",
        options: [
            "Decrements H register",
            "Decrements HL pair",
            "Decrements memory",
            "Exchanges HL",
        ],
        correctAnswer: 2,
    },
    {
        id: 24,
        text: "In 8085, the SIM instruction is used to:",
        options: [
            "Read interrupt mask",
            "Set interrupt mask",
            "Simulate instruction",
            "Synchronize",
        ],
        correctAnswer: 2,
    },
    {
        id: 25,
        text: "Serial communication is controlled by:",
        options: [
            "8255 PPI",
            "8251 USART",
            "8253 Timer",
            "8237 DMA",
        ],
        correctAnswer: 2,
    },
    {
        id: 26,
        text: "The volatile keyword in C indicates:",
        options: [
            "Variable can change unexpectedly",
            "Variable is constant",
            "Variable is global",
            "Variable is local",
        ],
        correctAnswer: 1,
    },
    {
        id: 27,
        text: "In C, what is the value of $\\text{sizeof(char)}$?",
        options: [
            "Implementation dependent",
            "Always 1 byte",
            "2 bytes",
            "4 bytes",
        ],
        correctAnswer: 2,
    },
    {
        id: 28,
        text: "A structure in C is stored in memory as:",
        options: [
            "Contiguous block",
            "Scattered locations",
            "Stack only",
            "Heap only",
        ],
        correctAnswer: 1,
    },
    {
        id: 29,
        text: "Pass by reference in C is achieved using:",
        options: [
            "Arrays",
            "Pointers",
            "Structures",
            "Union",
        ],
        correctAnswer: 2,
    },
    {
        id: 30,
        text: "Two stacks can be implemented in a single array efficiently by:",
        options: [
            "Using first half for one stack, second half for other",
            "Growing them from opposite ends",
            "Using odd indices for one, even for other",
            "Cannot be done efficiently",
        ],
        correctAnswer: 2,
    },
    {
        id: 31,
        text: "Infix to postfix conversion uses:",
        options: [
            "Queue",
            "Stack",
            "Tree",
            "Graph",
        ],
        correctAnswer: 2,
    },
    {
        id: 32,
        text: "Circular linked list is advantageous for:",
        options: [
            "Traversing list multiple times",
            "Single traversal only",
            "Random access",
            "Sorting",
        ],
        correctAnswer: 1,
    },
    {
        id: 33,
        text: "A complete binary tree of height $h$ has at least:",
        options: [
            "$h$ nodes",
            "$2^h$ nodes",
            "$2^h - 1$ nodes",
            "$2^{h-1}$ nodes",
        ],
        correctAnswer: 2,
    },
    {
        id: 34,
        text: "Morris traversal for binary tree uses:",
        options: [
            "Stack",
            "Queue",
            "Threading (no extra space)",
            "Recursion",
        ],
        correctAnswer: 3,
    },
    {
        id: 35,
        text: "Splay tree performs splaying operation to:",
        options: [
            "Balance the tree",
            "Move accessed node to root",
            "Delete nodes",
            "Search faster",
        ],
        correctAnswer: 2,
    },
    {
        id: 36,
        text: "Open addressing in hashing handles collision by:",
        options: [
            "Chaining",
            "Finding another slot in the table",
            "Using multiple hash functions simultaneously",
            "Rejecting the insertion",
        ],
        correctAnswer: 2,
    },
    {
        id: 37,
        text: "Fibonacci heap is used for efficient implementation of:",
        options: [
            "Sorting",
            "Dijkstra's algorithm",
            "Binary search",
            "Linear search",
        ],
        correctAnswer: 2,
    },
    {
        id: 38,
        text: "Pancake sorting is based on:",
        options: [
            "Comparisons only",
            "Flipping operation",
            "Merging",
            "Partitioning",
        ],
        correctAnswer: 2,
    },
    {
        id: 39,
        text: "Tim Sort is a hybrid of:",
        options: [
            "Quick Sort and Heap Sort",
            "Merge Sort and Insertion Sort",
            "Bubble Sort and Selection Sort",
            "Radix Sort and Counting Sort",
        ],
        correctAnswer: 2,
    },
    {
        id: 40,
        text: "The lower bound for comparison-based sorting is:",
        options: [
            "$O(n)$",
            "$O(n \\log n)$",
            "$O(n^2)$",
            "$O(\\log n)$",
        ],
        correctAnswer: 2,
    },
    {
        id: 41,
        text: "Memoization is used in:",
        options: [
            "Greedy algorithms",
            "Dynamic programming",
            "Divide and conquer",
            "Backtracking",
        ],
        correctAnswer: 2,
    },
    {
        id: 42,
        text: "The subset sum problem is:",
        options: [
            "Polynomial time solvable",
            "NP-complete",
            "Unsolvable",
            "Linear time solvable",
        ],
        correctAnswer: 2,
    },
    {
        id: 43,
        text: "Optimal binary search tree problem uses:",
        options: [
            "Greedy approach",
            "Dynamic programming",
            "Linear search",
            "Backtracking",
        ],
        correctAnswer: 2,
    },
    {
        id: 44,
        text: "Job sequencing with deadlines uses:",
        options: [
            "Dynamic programming",
            "Greedy algorithm",
            "Backtracking",
            "Branch and bound",
        ],
        correctAnswer: 2,
    },
    {
        id: 45,
        text: "Rabin-Karp algorithm is used for:",
        options: [
            "Sorting",
            "String matching",
            "Graph traversal",
            "Tree balancing",
        ],
        correctAnswer: 2,
    },
    {
        id: 46,
        text: "KMP algorithm preprocesses:",
        options: [
            "Text",
            "Pattern",
            "Both text and pattern",
            "Neither",
        ],
        correctAnswer: 2,
    },
    {
        id: 47,
        text: "Maximum bipartite matching can be solved using:",
        options: [
            "DFS",
            "Network flow algorithms",
            "Sorting",
            "Hashing",
        ],
        correctAnswer: 2,
    },
    {
        id: 48,
        text: "Euler path exists in a graph if:",
        options: [
            "All vertices have even degree",
            "Exactly two vertices have odd degree",
            "Graph is complete",
            "Graph is a tree",
        ],
        correctAnswer: 2,
    },
    {
        id: 49,
        text: "System calls provide interface between:",
        options: [
            "User programs and operating system",
            "CPU and memory",
            "Hardware components",
            "Network devices",
        ],
        correctAnswer: 1,
    },
    {
        id: 50,
        text: "User mode and kernel mode are:",
        options: [
            "Different operating systems",
            "CPU execution modes",
            "Memory types",
            "I/O methods",
        ],
        correctAnswer: 2,
    },
    {
        id: 51,
        text: "The waiting time in scheduling is:",
        options: [
            "Time process spends executing",
            "Time process spends in ready queue",
            "Time from submission to completion",
            "Time for I/O operations",
        ],
        correctAnswer: 2,
    },
    {
        id: 52,
        text: "Lottery scheduling assigns:",
        options: [
            "Fixed priorities",
            "Lottery tickets to processes",
            "Equal time to all",
            "No scheduling",
        ],
        correctAnswer: 2,
    },
    {
        id: 53,
        text: "Real-time scheduling requires:",
        options: [
            "Meeting deadlines",
            "Maximum throughput",
            "Minimum waiting time",
            "Random execution",
        ],
        correctAnswer: 1,
    },
    {
        id: 54,
        text: "Readers-writers problem with reader preference can cause:",
        options: [
            "Writer starvation",
            "Reader starvation",
            "Deadlock",
            "No issues",
        ],
        correctAnswer: 1,
    },
    {
        id: 55,
        text: "The ostrich algorithm for deadlock:",
        options: [
            "Prevents deadlock",
            "Detects deadlock",
            "Ignores deadlock",
            "Avoids deadlock",
        ],
        correctAnswer: 3,
    },
    {
        id: 56,
        text: "Swapping in operating systems refers to:",
        options: [
            "Moving processes between main memory and disk",
            "Switching between processes",
            "Exchanging data",
            "Sorting processes",
        ],
        correctAnswer: 1,
    },
    {
        id: 57,
        text: "Segmentation with paging combines:",
        options: [
            "Only paging",
            "Only segmentation",
            "Benefits of both segmentation and paging",
            "Neither",
        ],
        correctAnswer: 3,
    },
    {
        id: 58,
        text: "Working set model is used for:",
        options: [
            "CPU scheduling",
            "Memory management and thrashing prevention",
            "Disk scheduling",
            "Network management",
        ],
        correctAnswer: 2,
    },
    {
        id: 59,
        text: "Port numbers in TCP/UDP are:",
        options: [
            "8-bit",
            "16-bit",
            "32-bit",
            "64-bit",
        ],
        correctAnswer: 2,
    },
    {
        id: 60,
        text: "Piggybacking in data link layer refers to:",
        options: [
            "Sending data with acknowledgment",
            "Retransmission",
            "Error detection",
            "Flow control",
        ],
        correctAnswer: 1,
    },
    {
        id: 61,
        text: "Bit stuffing is used for:",
        options: [
            "Error correction",
            "Framing in data link layer",
            "Encryption",
            "Compression",
        ],
        correctAnswer: 2,
    },
    {
        id: 62,
        text: "Fragmentation in IP occurs when:",
        options: [
            "Packet is too large for network MTU",
            "Network is congested",
            "Routing fails",
            "Destination is unreachable",
        ],
        correctAnswer: 1,
    },
    {
        id: 63,
        text: "IPv6 address size is:",
        options: [
            "32 bits",
            "64 bits",
            "128 bits",
            "256 bits",
        ],
        correctAnswer: 3,
    },
    {
        id: 64,
        text: "Guided media for data transmission includes:\n\nA. Twisted pair\nB. Coaxial cable\nC. Fiber optic\nD. Radio waves\n\nChoose the correct answer from the options given below:",
        options: [
            "A, B and C only",
            "A, B and D only",
            "B, C and D only",
            "A, B, C and D",
        ],
        correctAnswer: 1,
    },
    {
        id: 65,
        text: "CSMA/CA (Collision Avoidance) is used in:",
        options: [
            "Ethernet",
            "Wireless networks",
            "Token ring",
            "FDDI",
        ],
        correctAnswer: 2,
    },
    {
        id: 66,
        text: "Greedy best-first search uses:",
        options: [
            "Only path cost $g(n)$",
            "Only heuristic $h(n)$",
            "Both $g(n)$ and $h(n)$",
            "Neither",
        ],
        correctAnswer: 2,
    },
    {
        id: 67,
        text: "Monte Carlo tree search is used in:",
        options: [
            "Linear programming",
            "Game playing and decision making",
            "Sorting",
            "Pattern matching",
        ],
        correctAnswer: 2,
    },
    {
        id: 68,
        text: "Machine learning where agent learns from rewards and penalties is:",
        options: [
            "Supervised learning",
            "Unsupervised learning",
            "Reinforcement learning",
            "Transfer learning",
        ],
        correctAnswer: 3,
    },
    {
        id: 69,
        text: "Markov Decision Process includes:\n\nA. States\nB. Actions\nC. Transition probabilities\nD. Rewards\n\nChoose the correct answer from the options given below:",
        options: [
            "A, B and C only",
            "A, B and D only",
            "B, C and D only",
            "A, B, C and D",
        ],
        correctAnswer: 4,
    },
    {
        id: 70,
        text: "DES (Data Encryption Standard) uses a key size of:",
        options: [
            "56 bits",
            "64 bits",
            "128 bits",
            "256 bits",
        ],
        correctAnswer: 1,
    },
    {
        id: 71,
        text: "AES (Advanced Encryption Standard) supports key sizes of:\n\nA. 128 bits\nB. 192 bits\nC. 256 bits\nD. 512 bits\n\nChoose the correct answer from the options given below:",
        options: [
            "A only",
            "A and B only",
            "A, B and C only",
            "A, B, C and D",
        ],
        correctAnswer: 3,
    },
    {
        id: 72,
        text: "Steganography is the practice of:",
        options: [
            "Encrypting messages",
            "Hiding messages within other messages",
            "Hashing passwords",
            "Digital signatures",
        ],
        correctAnswer: 2,
    },
    {
        id: 73,
        text: "Decision boundary in classification separates:",
        options: [
            "Training and test data",
            "Different classes",
            "Features",
            "Outliers",
        ],
        correctAnswer: 2,
    },
    {
        id: 74,
        text: "Cross-entropy loss is commonly used for:",
        options: [
            "Regression",
            "Classification",
            "Clustering",
            "Dimensionality reduction",
        ],
        correctAnswer: 2,
    },
    {
        id: 75,
        text: "Gradient descent is an:",
        options: [
            "Optimization algorithm",
            "Classification algorithm",
            "Clustering algorithm",
            "Sorting algorithm",
        ],
        correctAnswer: 1,
    },
];
