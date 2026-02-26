import { ExamConfig, Question } from "./examTypes";

export const examConfig: ExamConfig = {
    title: "CUET PG 2026 - Mock Test Series X",
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
        text: "Consider the set A = {1, 2, 3, 4} and the relation R = {(1,1), (2,2), (3,3), (4,4), (1,2), (2,1), (3,4), (4,3)}. Which of the following properties does R satisfy?\n\n(A). Reflexive\n(B). Symmetric\n(C). Transitive\n(D). Antisymmetric\n\nChoose the correct answer from the options given below:",
        options: [
            "(A), (B) and (C) only",
            "(A) and (B) only",
            "(A), (B) and (D) only",
            "(B), (C) and (D) only"
        ],
        correctAnswer: 1,
    },
    {
        id: 2,
        text: "In a group (G, *), if for every element a in G, there exists an element b such that a * b = e (identity), but b * a may not equal e, what property does the group lack?",
        options: [
            "Commutativity",
            "Associativity",
            "Inverse existence",
            "Closure"
        ],
        correctAnswer: 3,
    },
    {
        id: 3,
        text: "Simplify the Boolean expression using algebraic manipulation: $A'B'C + A'BC' + AB'C' + ABC$.",
        options: [
            "$A' + B' + C'$",
            "$A + B + C$",
            "$A'B' + BC' + AC$",
            "$A' + BC$"
        ],
        correctAnswer: 3,
    },
    {
        id: 4,
        text: "Match List I with List II\n\n| List I (Concepts in Set Theory) | List II (Properties/Definitions) |\n|---|---|\n| A. Equivalence Relation | I. Reflexive, Antisymmetric, Transitive |\n| B. Partial Order | II. Set with join and meet operations |\n| C. Function Composition | III. Reflexive, Symmetric, Transitive |\n| D. Lattice | IV. $(f \\circ g)(x) = f(g(x))$ |\n\nChoose the correct answer from the options given below:",
        options: [
            "A-III, B-I, C-IV, D-II",
            "A-I, B-III, C-II, D-IV",
            "A-III, B-II, C-I, D-IV",
            "A-IV, B-I, C-III, D-II"
        ],
        correctAnswer: 1,
    },
    {
        id: 5,
        text: "Given a poset with elements {p, q, r, s} where p < q, p < r, q < s, r < s, what is the greatest lower bound of {q, r}?",
        options: [
            "p",
            "q",
            "r",
            "s"
        ],
        correctAnswer: 1,
    },
    {
        id: 6,
        text: "Which of the following regular expressions represents the language of strings over {0,1} that start with 0 and end with 1?",
        options: [
            "$0(0+1)^*1$",
            "$(0+1)^*01$",
            "$0^*1^*$",
            "$01(0+1)^*$"
        ],
        correctAnswer: 1,
    },
    {
        id: 7,
        text: "A context-free grammar in Chomsky Normal Form must have productions of the form:\n\n(A). $A \\to BC$ where B and C are non-terminals\n(B). $A \\to a$ where a is a terminal\n(C). $S \\to \\varepsilon$ where S is start symbol\n(D). $A \\to B$ where B is non-terminal\n\nChoose the correct answer from the options given below:",
        options: [
            "(A) and (B) only",
            "(A), (B) and (C) only",
            "(B) and (D) only",
            "(A), (C) and (D) only"
        ],
        correctAnswer: 1,
    },
    {
        id: 8,
        text: "In a pushdown automaton, the stack is used to handle:",
        options: [
            "Regular languages only",
            "Context-sensitive languages",
            "Context-free languages",
            "Recursive enumerable languages"
        ],
        correctAnswer: 3,
    },
    {
        id: 9,
        text: "Which of the following is true for a Turing machine?\n\n(A). It can simulate any computational model\n(B). It always halts on every input\n(C). It recognizes regular languages only\n(D). It has finite tape length\n\nChoose the correct answer from the options given below:",
        options: [
            "(A) only",
            "(A) and (B) only",
            "(B) and (C) only",
            "(A) and (D) only"
        ],
        correctAnswer: 1,
    },
    {
        id: 10,
        text: "Convert the NFA with transitions $\\delta(q_0,0)= \\{q_0,q_1\\}$, $\\delta(q_0,1)= \\{q_1\\}$, $\\delta(q_1,0)= \\{q_2\\}$, $\\delta(q_1,1)= \\{q_2\\}$, $\\delta(q_2,\\varepsilon)= \\{q_2\\}$ to an equivalent DFA. How many states does the DFA have?",
        options: [
            "2",
            "3",
            "4",
            "6"
        ],
        correctAnswer: 4,
    },
    {
        id: 11,
        text: "The binary representation of the decimal number 45 in 8-bit two's complement is:",
        options: [
            "00101101",
            "11010011",
            "00101100",
            "11010100"
        ],
        correctAnswer: 1,
    },
    {
        id: 12,
        text: "Minimize the logic function $F = \\Sigma m(0,2,3,5,7)$ using Karnaugh map.",
        options: [
            "$A'C' + BC + AC$",
            "$A'B + A'C + B'C'$",
            "$AB' + A'C' + BC'$",
            "$A'B' + AC + B'C$"
        ],
        correctAnswer: 1,
    },
    {
        id: 13,
        text: "In a sequential circuit, the number of flip-flops required for a counter that counts from 0 to 15 is:",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        correctAnswer: 3,
    },
    {
        id: 14,
        text: "Match List I with List II\n\n| List I (Digital Components) | List II (Functions) |\n|---|---|\n| A. Multiplexer | I. Converts analog to digital |\n| B. Decoder | II. Selects one input from many |\n| C. Flip-Flop | III. Stores one bit of data |\n| D. ADC | IV. Converts binary code to select output line |\n\nChoose the correct answer from the options given below:",
        options: [
            "A-II, B-IV, C-III, D-I",
            "A-IV, B-II, C-I, D-III",
            "A-II, B-III, C-IV, D-I",
            "A-III, B-I, C-II, D-IV"
        ],
        correctAnswer: 1,
    },
    {
        id: 15,
        text: "The output of a full adder with inputs A=1, B=1, Cin=1 is:",
        options: [
            "Sum=1, Cout=1",
            "Sum=0, Cout=1",
            "Sum=1, Cout=0",
            "Sum=0, Cout=0"
        ],
        correctAnswer: 1,
    },
    {
        id: 16,
        text: "In pipelined architecture, if there are 5 stages and 10 instructions, the speedup compared to non-pipelined is approximately (assuming no hazards):",
        options: [
            "5",
            "2",
            "10",
            "4"
        ],
        correctAnswer: 4,
    },
    {
        id: 17,
        text: "The average memory access time with cache hit ratio 0.9, cache access time 10 ns, main memory access time 100 ns is:",
        options: [
            "19 ns",
            "91 ns",
            "55 ns",
            "28 ns"
        ],
        correctAnswer: 1,
    },
    {
        id: 18,
        text: "Which addressing mode uses the formula Effective Address = Base + Index × Scale + Displacement?",
        options: [
            "Immediate",
            "Register",
            "Base-indexed with displacement",
            "Indirect"
        ],
        correctAnswer: 3,
    },
    {
        id: 19,
        text: "In DMA, the mode where the device transfers one data word and then releases the bus is:",
        options: [
            "Burst mode",
            "Cycle stealing mode",
            "Block mode",
            "Transparent mode"
        ],
        correctAnswer: 2,
    },
    {
        id: 20,
        text: "Match List I with List II\n\n| List I (COA Concepts) | List II (Descriptions) |\n|---|---|\n| A. ALU | I. Fast volatile memory for frequent data |\n| B. Control Unit | II. Performs arithmetic operations |\n| C. Cache Memory | III. Non-volatile mass storage |\n| D. Secondary Storage | IV. Decodes instructions |\n\nChoose the correct answer from the options given below:",
        options: [
            "A-II, B-IV, C-I, D-III",
            "A-IV, B-II, C-III, D-I",
            "A-II, B-I, C-IV, D-III",
            "A-III, B-IV, C-II, D-I"
        ],
        correctAnswer: 1,
    },
    {
        id: 21,
        text: "In 8085 microprocessor, the instruction `LDA 2000H` uses which addressing mode?",
        options: [
            "Immediate",
            "Direct",
            "Register indirect",
            "Implied"
        ],
        correctAnswer: 2,
    },
    {
        id: 22,
        text: "The 8085 interrupt that is non-maskable and has highest priority is:",
        options: [
            "RST 5.5",
            "RST 7.5",
            "INTR",
            "TRAP"
        ],
        correctAnswer: 4,
    },
    {
        id: 23,
        text: "In 8085, the number of T-states required for the instruction CALL is:",
        options: [
            "9",
            "12",
            "18",
            "7"
        ],
        correctAnswer: 3,
    },
    {
        id: 24,
        text: "The 8085 instruction to enable interrupts is:",
        options: [
            "EI",
            "DI",
            "SIM",
            "RIM"
        ],
        correctAnswer: 1,
    },
    {
        id: 25,
        text: "In 8085, interfacing a keyboard typically uses:",
        options: [
            "Programmable Peripheral Interface (8255)",
            "Programmable Interval Timer (8253)",
            "USART (8251)",
            "DMA Controller (8237)"
        ],
        correctAnswer: 1,
    },
    {
        id: 26,
        text: "In C, the output of `printf(\"%d\", sizeof(int *))` on a 64-bit system is typically:",
        options: [
            "4",
            "8",
            "2",
            "16"
        ],
        correctAnswer: 2,
    },
    {
        id: 27,
        text: "The time complexity of inserting an element into a binary search tree of $n$ nodes in the worst case is:",
        options: [
            "$O(1)$",
            "$O(\\log n)$",
            "$O(n)$",
            "$O(n \\log n)$"
        ],
        correctAnswer: 3,
    },
    {
        id: 28,
        text: "In a linked list, reversing the list requires changing:",
        options: [
            "Data values",
            "Next pointers",
            "Previous pointers",
            "Node sizes"
        ],
        correctAnswer: 2,
    },
    {
        id: 29,
        text: "A priority queue implemented as a max-heap has insertion time complexity:",
        options: [
            "$O(1)$",
            "$O(\\log n)$",
            "$O(n)$",
            "$O(n^2)$"
        ],
        correctAnswer: 2,
    },
    {
        id: 30,
        text: "In C, recursion is typically used for:\n\n(A). Factorial computation\n(B). Linear search\n(C). Tree traversal\n(D). Array sorting\n\nChoose the correct answer from the options given below:",
        options: [
            "(A) and (B) only",
            "(A) and (C) only",
            "(B) and (D) only",
            "(C) and (D) only"
        ],
        correctAnswer: 2,
    },
    {
        id: 31,
        text: "The worst-case time complexity of quicksort is:",
        options: [
            "$O(n \\log n)$",
            "$O(n)$",
            "$O(n^2)$",
            "$O(\\log n)$"
        ],
        correctAnswer: 3,
    },
    {
        id: 32,
        text: "In dynamic programming, the approach for Fibonacci sequence uses:",
        options: [
            "Top-down with memoization",
            "Greedy choice",
            "Divide and conquer without overlap",
            "Bottom-up tabulation"
        ],
        correctAnswer: 4,
    },
    {
        id: 33,
        text: "Kruskal's algorithm for minimum spanning tree uses:",
        options: [
            "Dynamic programming",
            "Greedy method",
            "Divide and conquer",
            "Backtracking"
        ],
        correctAnswer: 2,
    },
    {
        id: 34,
        text: "The asymptotic notation for a function $f(n) = 3n^2 + 2n + 1$ is:",
        options: [
            "$\\Theta(n)$",
            "$\\Theta(n^2)$",
            "$\\Theta(n \\log n)$",
            "$\\Theta(1)$"
        ],
        correctAnswer: 2,
    },
    {
        id: 35,
        text: "Hashing with chaining resolves collisions by:",
        options: [
            "Linear probing",
            "Linked lists at each slot",
            "Quadratic probing",
            "Double hashing"
        ],
        correctAnswer: 2,
    },
    {
        id: 36,
        text: "In operating systems, deadlock prevention can use:\n\n(A). Banker's algorithm\n(B). Resource allocation graph\n(C). Semaphores\n(D). Monitors\n\nChoose the correct answer from the options given below:",
        options: [
            "(A) and (B) only",
            "(A), (B) and (C) only",
            "(B) and (D) only",
            "(C) and (D) only"
        ],
        correctAnswer: 1,
    },
    {
        id: 37,
        text: "The scheduling algorithm that favors CPU-bound processes is:",
        options: [
            "Round Robin",
            "FCFS",
            "SJF",
            "Priority"
        ],
        correctAnswer: 2,
    },
    {
        id: 38,
        text: "Virtual memory uses:",
        options: [
            "Paging only",
            "Segmentation only",
            "Demand paging",
            "Contiguous allocation"
        ],
        correctAnswer: 3,
    },
    {
        id: 39,
        text: "In UNIX, the command to change file permissions is:",
        options: [
            "cd",
            "ls",
            "chmod",
            "pwd"
        ],
        correctAnswer: 3,
    },
    {
        id: 40,
        text: "Threads share:\n\n(A). Code section\n(B). Data section\n(C). Files\n(D). Registers\n\nChoose the correct answer from the options given below:",
        options: [
            "(A), (B) and (C) only",
            "(A) and (D) only",
            "(B) and (D) only",
            "(C) and (D) only"
        ],
        correctAnswer: 1,
    },
    {
        id: 41,
        text: "In TCP/IP model, the layer responsible for routing is:",
        options: [
            "Application",
            "Transport",
            "Network",
            "Data Link"
        ],
        correctAnswer: 3,
    },
    {
        id: 42,
        text: "The protocol used for email transfer is:",
        options: [
            "HTTP",
            "SMTP",
            "FTP",
            "DNS"
        ],
        correctAnswer: 2,
    },
    {
        id: 43,
        text: "In sliding window protocol, if window size is 7, the maximum sequence number is:",
        options: [
            "7",
            "8",
            "14",
            "15"
        ],
        correctAnswer: 4,
    },
    {
        id: 44,
        text: "A device that connects two different networks is:",
        options: [
            "Hub",
            "Switch",
            "Bridge",
            "Router"
        ],
        correctAnswer: 4,
    },
    {
        id: 45,
        text: "Congestion control in networks uses:\n\n(A). Open loop methods\n(B). Closed loop methods\n(C). Token bucket\n(D). Leaky bucket\n\nChoose the correct answer from the options given below:",
        options: [
            "(A) and (B) only",
            "(A), (C) and (D) only",
            "(B), (C) and (D) only",
            "(A), (B), (C) and (D)"
        ],
        correctAnswer: 4,
    },
    {
        id: 46,
        text: "In AI, A* search uses:",
        options: [
            "Heuristic only",
            "Cost only",
            "Heuristic + path cost",
            "Breadth-first"
        ],
        correctAnswer: 3,
    },
    {
        id: 47,
        text: "First-order logic includes:\n\n(A). Predicates\n(B). Quantifiers\n(C). Propositions only\n(D). Connectives\n\nChoose the correct answer from the options given below:",
        options: [
            "(A) and (B) only",
            "(A), (B) and (D) only",
            "(C) and (D) only",
            "(A), (C) and (D) only"
        ],
        correctAnswer: 2,
    },
    {
        id: 48,
        text: "Intelligent agents in AI are characterized by:",
        options: [
            "Reactivity only",
            "Proactiveness and autonomy",
            "Rationality only",
            "Mobility only"
        ],
        correctAnswer: 2,
    },
    {
        id: 49,
        text: "Knowledge representation in AI uses:\n\n(A). Frames\n(B). Semantic nets\n(C). Rules\n(D). Arrays\n\nChoose the correct answer from the options given below:",
        options: [
            "(A), (B) and (C) only",
            "(A) and (D) only",
            "(B) and (D) only",
            "(C) and (D) only"
        ],
        correctAnswer: 1,
    },
    {
        id: 50,
        text: "Uninformed search strategies include:",
        options: [
            "Hill climbing",
            "Best-first",
            "Depth-first",
            "A*"
        ],
        correctAnswer: 3,
    },
    {
        id: 51,
        text: "In cryptography, Caesar cipher is a type of:",
        options: [
            "Transposition cipher",
            "Substitution cipher",
            "Product cipher",
            "Stream cipher"
        ],
        correctAnswer: 2,
    },
    {
        id: 52,
        text: "Public key cryptography uses:",
        options: [
            "Same key for encryption and decryption",
            "Different keys for encryption and decryption",
            "Block ciphers only",
            "Symmetric algorithms"
        ],
        correctAnswer: 2,
    },
    {
        id: 53,
        text: "Hill cipher is based on:",
        options: [
            "Modular arithmetic",
            "Linear algebra",
            "Bit shifting",
            "XOR operations"
        ],
        correctAnswer: 2,
    },
    {
        id: 54,
        text: "Network security concepts include:\n\n(A). Confidentiality\n(B). Integrity\n(C). Availability\n(D). Non-repudiation\n\nChoose the correct answer from the options given below:",
        options: [
            "(A) and (B) only",
            "(A), (B) and (C) only",
            "(B), (C) and (D) only",
            "(A), (B), (C) and (D)"
        ],
        correctAnswer: 4,
    },
    {
        id: 55,
        text: "Playfair cipher uses a:",
        options: [
            "5×5 matrix",
            "6×6 matrix",
            "Keyword for substitution",
            "Transposition grid"
        ],
        correctAnswer: 1,
    },
    {
        id: 56,
        text: "In data science, unsupervised learning includes:",
        options: [
            "Regression",
            "Classification",
            "Clustering",
            "Reinforcement"
        ],
        correctAnswer: 3,
    },
    {
        id: 57,
        text: "Data preprocessing steps include:\n\n(A). Normalization\n(B). Smoothing\n(C). Visualization\n(D). Classification\n\nChoose the correct answer from the options given below:",
        options: [
            "(A) and (B) only",
            "(A), (B) and (C) only",
            "(B) and (D) only",
            "(C) and (D) only"
        ],
        correctAnswer: 1,
    },
    {
        id: 58,
        text: "Structured data is typically stored in:",
        options: [
            "Text files",
            "Databases",
            "Images",
            "Videos"
        ],
        correctAnswer: 2,
    },
    {
        id: 59,
        text: "In machine learning, reinforcement learning uses:",
        options: [
            "Labeled data",
            "Rewards and penalties",
            "Clustering",
            "Dimensionality reduction"
        ],
        correctAnswer: 2,
    },
    {
        id: 60,
        text: "Data visualization tools include:\n\n(A). Histograms\n(B). Scatter plots\n(C). Pie charts\n(D). Decision trees\n\nChoose the correct answer from the options given below:",
        options: [
            "(A), (B) and (C) only",
            "(A) and (D) only",
            "(B) and (D) only",
            "(C) and (D) only"
        ],
        correctAnswer: 1,
    },
    {
        id: 61,
        text: "In set theory, the power set of {a, b} has cardinality:",
        options: [
            "2",
            "3",
            "4",
            "8"
        ],
        correctAnswer: 3,
    },
    {
        id: 62,
        text: "A Mealy machine outputs based on:",
        options: [
            "Current state only",
            "Input only",
            "Current state and input",
            "Previous output"
        ],
        correctAnswer: 3,
    },
    {
        id: 63,
        text: "The number of bits in an IPv4 address is:",
        options: [
            "32",
            "64",
            "128",
            "256"
        ],
        correctAnswer: 1,
    },
    {
        id: 64,
        text: "In AI, logical agents use:",
        options: [
            "Propositional logic only",
            "First-order logic",
            "Fuzzy logic",
            "Probabilistic reasoning"
        ],
        correctAnswer: 2,
    },
    {
        id: 65,
        text: "The symmetric cipher model includes:\n\n(A). Plaintext\n(B). Ciphertext\n(C). Key\n(D). Algorithm\n\nChoose the correct answer from the options given below:",
        options: [
            "(A) and (B) only",
            "(A), (B) and (C) only",
            "(A), (B), (C) and (D)",
            "(B) and (D) only"
        ],
        correctAnswer: 3,
    },
    {
        id: 66,
        text: "In data science, regression is a:",
        options: [
            "Supervised learning task",
            "Unsupervised learning task",
            "Reinforcement learning task",
            "Semi-supervised task"
        ],
        correctAnswer: 1,
    },
    {
        id: 67,
        text: "The space complexity of DFS graph traversal is:",
        options: [
            "$O(V)$",
            "$O(E)$",
            "$O(V+E)$",
            "$O(V^2)$"
        ],
        correctAnswer: 1,
    },
    {
        id: 68,
        text: "In OS, I/O scheduling algorithms include:\n\n(A). FCFS\n(B). SSTF\n(C). SCAN\n(D). LRU\n\nChoose the correct answer from the options given below:",
        options: [
            "(A), (B) and (C) only",
            "(A) and (D) only",
            "(B) and (D) only",
            "(C) and (D) only"
        ],
        correctAnswer: 1,
    },
    {
        id: 69,
        text: "Ethernet uses:",
        options: [
            "CSMA/CD",
            "CSMA/CA",
            "Token ring",
            "FDDI"
        ],
        correctAnswer: 1,
    },
    {
        id: 70,
        text: "In C, parameter passing by reference uses:",
        options: [
            "Values",
            "Pointers",
            "Arrays",
            "Structures"
        ],
        correctAnswer: 2,
    },
    {
        id: 71,
        text: "The language accepted by PDA but not by FA is:",
        options: [
            "$\\{a^n \\mid n \\geq 0\\}$",
            "$\\{a^n b^n \\mid n \\geq 0\\}$",
            "$\\{ww^R \\mid w \\in \\{a,b\\}^*\\}$",
            "$\\{a^* b^*\\}$"
        ],
        correctAnswer: 2,
    },
    {
        id: 72,
        text: "In digital logic, a JK flip-flop with J=1, K=1 toggles on:",
        options: [
            "Rising edge",
            "Falling edge",
            "Level trigger",
            "No change"
        ],
        correctAnswer: 1,
    },
    {
        id: 73,
        text: "RAID level with block-level striping and dedicated parity disk is:",
        options: [
            "RAID 0",
            "RAID 1",
            "RAID 3",
            "RAID 5"
        ],
        correctAnswer: 3,
    },
    {
        id: 74,
        text: "In networks, ICMP is used for:",
        options: [
            "Error reporting",
            "File transfer",
            "Email",
            "Web browsing"
        ],
        correctAnswer: 1,
    },
    {
        id: 75,
        text: "In data science, k-means is for:",
        options: [
            "Classification",
            "Regression",
            "Clustering",
            "Dimensionality reduction"
        ],
        correctAnswer: 3,
    },
];
