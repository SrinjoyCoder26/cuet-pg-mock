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
    title: "CUET PG 2026 - Mock Test 5",
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
        text: "If $R$ is an equivalence relation on set $A = \\{1,2,3,4\\}$, then $R$ partitions $A$ into:",
        options: [
            "Overlapping subsets",
            "Disjoint equivalence classes",
            "Ordered pairs only",
            "Single elements only",
        ],
        correctAnswer: 2,
    },
    {
        id: 2,
        text: "The identity element in the group of integers under multiplication is:",
        options: [
            "0",
            "1",
            "-1",
            "Does not exist",
        ],
        correctAnswer: 2,
    },
    {
        id: 3,
        text: "In Boolean Algebra, $A + A \\cdot B$ simplifies to:",
        options: [
            "$A$",
            "$B$",
            "$A + B$",
            "$A \\cdot B$",
        ],
        correctAnswer: 1,
    },
    {
        id: 4,
        text: "The minimum number of states in a DFA that accepts strings over $\\{0,1\\}$ containing substring '101' is:",
        options: [
            "3",
            "4",
            "5",
            "6",
        ],
        correctAnswer: 2,
    },
    {
        id: 5,
        text: "Which of the following operations preserve regularity of languages?\n\nA. Union\nB. Intersection\nC. Complementation\nD. Reversal\n\nChoose the correct answer from the options given below:",
        options: [
            "A and B only",
            "A, B and C only",
            "A, B and D only",
            "A, B, C and D",
        ],
        correctAnswer: 4,
    },
    {
        id: 6,
        text: "A context-free grammar is said to be ambiguous if:",
        options: [
            "It has multiple start symbols",
            "A string has more than one parse tree",
            "It has no derivation",
            "All productions are recursive",
        ],
        correctAnswer: 2,
    },
    {
        id: 7,
        text: "The language $L = \\{a^i b^j c^k \\mid i < j < k\\}$ is:",
        options: [
            "Regular",
            "Context-free",
            "Context-sensitive",
            "Not recursively enumerable",
        ],
        correctAnswer: 3,
    },
    {
        id: 8,
        text: "Linear Bounded Automaton accepts:",
        options: [
            "Regular languages",
            "Context-free languages",
            "Context-sensitive languages",
            "Unrestricted languages",
        ],
        correctAnswer: 3,
    },
    {
        id: 9,
        text: "Rice's theorem states that:",
        options: [
            "All properties of Turing machines are decidable",
            "All non-trivial semantic properties of Turing machines are undecidable",
            "All syntactic properties are undecidable",
            "Halting problem is decidable",
        ],
        correctAnswer: 2,
    },
    {
        id: 10,
        text: "In floating point representation, underflow occurs when:",
        options: [
            "Result is too large to represent",
            "Result is too small to represent",
            "Exponent exceeds maximum",
            "Mantissa is zero",
        ],
        correctAnswer: 2,
    },
    {
        id: 11,
        text: "The XOR gate can be realized using only:",
        options: [
            "AND gates",
            "OR gates",
            "NAND gates",
            "NOT gates",
        ],
        correctAnswer: 3,
    },
    {
        id: 12,
        text: "A priority encoder with 8 inputs requires how many output lines?",
        options: [
            "2",
            "3",
            "4",
            "8",
        ],
        correctAnswer: 2,
    },
    {
        id: 13,
        text: "Karnaugh map is used for:",
        options: [
            "Boolean expression minimization",
            "Circuit simulation",
            "Timing analysis",
            "Power calculation",
        ],
        correctAnswer: 1,
    },
    {
        id: 14,
        text: "A 4-bit Johnson counter has how many distinct states?",
        options: [
            "4",
            "8",
            "16",
            "32",
        ],
        correctAnswer: 2,
    },
    {
        id: 15,
        text: "The setup time of a flip-flop is:",
        options: [
            "Time after clock edge when input must remain stable",
            "Time before clock edge when input must be stable",
            "Time for output to change",
            "Clock period",
        ],
        correctAnswer: 2,
    },
    {
        id: 16,
        text: "Auto-increment addressing mode is useful for:",
        options: [
            "Array access",
            "Recursive calls",
            "Branch instructions",
            "Interrupt handling",
        ],
        correctAnswer: 1,
    },
    {
        id: 17,
        text: "The miss penalty in cache memory is:",
        options: [
            "Time to access cache",
            "Time to fetch from main memory plus time to deliver to processor",
            "Time to write to cache",
            "Cache size",
        ],
        correctAnswer: 2,
    },
    {
        id: 18,
        text: "Write-through cache policy:",
        options: [
            "Writes only to cache",
            "Writes to both cache and memory simultaneously",
            "Writes to memory only",
            "Never writes to memory",
        ],
        correctAnswer: 2,
    },
    {
        id: 19,
        text: "Superscalar processors can:",
        options: [
            "Execute one instruction per cycle",
            "Execute multiple instructions per cycle",
            "Execute instructions sequentially only",
            "Have no pipelines",
        ],
        correctAnswer: 2,
    },
    {
        id: 20,
        text: "CISC architecture is characterized by:",
        options: [
            "Simple instructions",
            "Complex instructions with variable lengths",
            "Load-store architecture",
            "Few addressing modes",
        ],
        correctAnswer: 2,
    },
    {
        id: 21,
        text: "In 8085, the XTHL instruction:",
        options: [
            "Exchanges HL with top of stack",
            "Loads HL from stack",
            "Stores HL to stack",
            "Adds HL to stack pointer",
        ],
        correctAnswer: 1,
    },
    {
        id: 22,
        text: "The RST instructions in 8085 are:",
        options: [
            "1-byte instructions",
            "2-byte instructions",
            "3-byte instructions",
            "Variable length",
        ],
        correctAnswer: 1,
    },
    {
        id: 23,
        text: "In 8085, which interrupt has the highest priority?",
        options: [
            "RST 7.5",
            "RST 6.5",
            "RST 5.5",
            "TRAP",
        ],
        correctAnswer: 4,
    },
    {
        id: 24,
        text: "The 8253 timer has how many counters?",
        options: [
            "1",
            "2",
            "3",
            "4",
        ],
        correctAnswer: 3,
    },
    {
        id: 25,
        text: "What does the term 'register' mean in C?",
        options: [
            "Variable stored in CPU register",
            "Storage class specifier suggesting register storage",
            "Global variable",
            "Static variable",
        ],
        correctAnswer: 2,
    },
    {
        id: 26,
        text: "In C, calloc() differs from malloc() in that it:",
        options: [
            "Allocates larger memory",
            "Initializes allocated memory to zero",
            "Is faster",
            "Cannot be freed",
        ],
        correctAnswer: 2,
    },
    {
        id: 27,
        text: "A double-ended queue (deque) can be used to implement:",
        options: [
            "Stack only",
            "Queue only",
            "Both stack and queue",
            "Priority queue only",
        ],
        correctAnswer: 3,
    },
    {
        id: 28,
        text: "The space complexity of recursion is determined by:",
        options: [
            "Number of recursive calls",
            "Maximum depth of recursion",
            "Size of input",
            "Number of parameters",
        ],
        correctAnswer: 2,
    },
    {
        id: 29,
        text: "A skip list provides:",
        options: [
            "$O(n)$ search time",
            "$O(\\log n)$ average search time",
            "$O(1)$ search time",
            "$O(n^2)$ search time",
        ],
        correctAnswer: 2,
    },
    {
        id: 30,
        text: "The level-order traversal of a binary tree uses:",
        options: [
            "Stack",
            "Queue",
            "Array",
            "Recursion only",
        ],
        correctAnswer: 2,
    },
    {
        id: 31,
        text: "Red-Black tree ensures that the longest path is at most:",
        options: [
            "Equal to shortest path",
            "Twice the shortest path",
            "Three times the shortest path",
            "Four times the shortest path",
        ],
        correctAnswer: 2,
    },
    {
        id: 32,
        text: "A B+ tree differs from B tree in that:",
        options: [
            "Data is stored only in leaf nodes",
            "Has more children",
            "Is unbalanced",
            "Cannot be searched",
        ],
        correctAnswer: 1,
    },
    {
        id: 33,
        text: "Trie data structure is efficient for:",
        options: [
            "Numeric computations",
            "String operations like prefix matching",
            "Sorting integers",
            "Matrix operations",
        ],
        correctAnswer: 2,
    },
    {
        id: 34,
        text: "Counting Sort has a time complexity of:",
        options: [
            "$O(n \\log n)$",
            "$O(n + k)$ where $k$ is range of input",
            "$O(n^2)$",
            "$O(\\log n)$",
        ],
        correctAnswer: 2,
    },
    {
        id: 35,
        text: "Bucket Sort works well when:",
        options: [
            "Input is uniformly distributed",
            "Input is sorted",
            "Input has duplicates",
            "Input is very large",
        ],
        correctAnswer: 1,
    },
    {
        id: 36,
        text: "The best case time complexity of Quick Sort is:",
        options: [
            "$O(n)$",
            "$O(n \\log n)$",
            "$O(n^2)$",
            "$O(\\log n)$",
        ],
        correctAnswer: 2,
    },
    {
        id: 37,
        text: "External sorting is used when:",
        options: [
            "Data fits in main memory",
            "Data is too large to fit in main memory",
            "Data is already sorted",
            "Data is very small",
        ],
        correctAnswer: 2,
    },
    {
        id: 38,
        text: "The edit distance problem is solved using:",
        options: [
            "Greedy algorithm",
            "Dynamic programming",
            "Divide and conquer",
            "Backtracking",
        ],
        correctAnswer: 2,
    },
    {
        id: 39,
        text: "The travelling salesman problem is:",
        options: [
            "Solvable in polynomial time",
            "NP-complete",
            "Has no solution",
            "Always has greedy solution",
        ],
        correctAnswer: 2,
    },
    {
        id: 40,
        text: "Branch and bound is used for:",
        options: [
            "Sorting",
            "Optimization problems",
            "Graph traversal",
            "String matching",
        ],
        correctAnswer: 2,
    },
    {
        id: 41,
        text: "Articulation points in a graph are vertices whose removal:",
        options: [
            "Increases number of components",
            "Decreases number of edges",
            "Makes graph complete",
            "Sorts the vertices",
        ],
        correctAnswer: 1,
    },
    {
        id: 42,
        text: "The Ford-Fulkerson algorithm finds:",
        options: [
            "Shortest path",
            "Minimum spanning tree",
            "Maximum flow in a network",
            "Topological order",
        ],
        correctAnswer: 3,
    },
    {
        id: 43,
        text: "An orphan process is:",
        options: [
            "A process whose parent has terminated",
            "A process with no children",
            "A terminated process",
            "A process in waiting state",
        ],
        correctAnswer: 1,
    },
    {
        id: 44,
        text: "The ready queue in an operating system contains processes that are:",
        options: [
            "Waiting for I/O",
            "Ready to execute",
            "Terminated",
            "In execution",
        ],
        correctAnswer: 2,
    },
    {
        id: 45,
        text: "Multilevel feedback queue scheduling allows:",
        options: [
            "Processes to move between queues",
            "Only one queue",
            "No priority changes",
            "FCFS only",
        ],
        correctAnswer: 1,
    },
    {
        id: 46,
        text: "Mutex is used for:",
        options: [
            "Process synchronization providing mutual exclusion",
            "Process creation",
            "Memory allocation",
            "File operations",
        ],
        correctAnswer: 1,
    },
    {
        id: 47,
        text: "Spinlock is a:",
        options: [
            "Lock where waiting process keeps checking for availability",
            "Lock that never releases",
            "Lock for disk operations",
            "Lock for network operations",
        ],
        correctAnswer: 1,
    },
    {
        id: 48,
        text: "Peterson's solution for critical section requires:",
        options: [
            "Hardware support",
            "Only software mechanisms",
            "Special instructions",
            "Operating system intervention",
        ],
        correctAnswer: 2,
    },
    {
        id: 49,
        text: "Test-and-Set instruction is:",
        options: [
            "Software solution",
            "Hardware atomic instruction",
            "User-level instruction",
            "Divisible operation",
        ],
        correctAnswer: 2,
    },
    {
        id: 50,
        text: "Deadlock prevention involves:",
        options: [
            "Detecting deadlock and recovering",
            "Ensuring at least one deadlock condition cannot hold",
            "Ignoring deadlock",
            "Allowing deadlock to occur",
        ],
        correctAnswer: 2,
    },
    {
        id: 51,
        text: "Resource allocation graph can be used for deadlock:",
        options: [
            "Prevention only",
            "Avoidance only",
            "Detection only",
            "Both avoidance and detection",
        ],
        correctAnswer: 4,
    },
    {
        id: 52,
        text: "Page table entry typically contains:\n\nA. Page frame number\nB. Valid/invalid bit\nC. Protection bits\nD. Modified bit\n\nChoose the correct answer from the options given below:",
        options: [
            "A and B only",
            "A, B and C only",
            "A, B and D only",
            "A, B, C and D",
        ],
        correctAnswer: 4,
    },
    {
        id: 53,
        text: "Inverted page table:",
        options: [
            "Has one entry per page of physical memory",
            "Has one entry per page of logical address space",
            "Is used for segmentation",
            "Is faster than regular page table",
        ],
        correctAnswer: 1,
    },
    {
        id: 54,
        text: "The Clock page replacement algorithm is an approximation of:",
        options: [
            "FIFO",
            "LRU",
            "Optimal",
            "Random",
        ],
        correctAnswer: 2,
    },
    {
        id: 55,
        text: "TCP provides:\n\nA. Reliable delivery\nB. Connection-oriented service\nC. Flow control\nD. Congestion control\n\nChoose the correct answer from the options given below:",
        options: [
            "A and B only",
            "A, B and C only",
            "A, B and D only",
            "A, B, C and D",
        ],
        correctAnswer: 4,
    },
    {
        id: 56,
        text: "The TIME_WAIT state in TCP is used for:",
        options: [
            "Initial connection setup",
            "Ensuring all segments are received before closing",
            "Data transfer",
            "Error recovery",
        ],
        correctAnswer: 2,
    },
    {
        id: 57,
        text: "Silly window syndrome in TCP occurs when:",
        options: [
            "Small amounts of data are sent",
            "Connection is fast",
            "No congestion exists",
            "Bandwidth is high",
        ],
        correctAnswer: 1,
    },
    {
        id: 58,
        text: "Subnetting divides a network into:",
        options: [
            "Larger networks",
            "Smaller subnetworks",
            "Separate protocols",
            "Different layers",
        ],
        correctAnswer: 2,
    },
    {
        id: 59,
        text: "VLSM (Variable Length Subnet Masking) allows:",
        options: [
            "Same size subnets only",
            "Different size subnets in same network",
            "No subnetting",
            "Class-based addressing only",
        ],
        correctAnswer: 2,
    },
    {
        id: 60,
        text: "The CRC (Cyclic Redundancy Check) is used for:",
        options: [
            "Encryption",
            "Error detection",
            "Flow control",
            "Addressing",
        ],
        correctAnswer: 2,
    },
    {
        id: 61,
        text: "Hamming distance between two strings is:",
        options: [
            "Number of positions where symbols differ",
            "Length difference",
            "Sum of characters",
            "Product of lengths",
        ],
        correctAnswer: 1,
    },
    {
        id: 62,
        text: "Constraint satisfaction problems involve:\n\nA. Variables\nB. Domains\nC. Constraints\nD. Heuristics only\n\nChoose the correct answer from the options given below:",
        options: [
            "A, B and C only",
            "A, B and D only",
            "B, C and D only",
            "A, B, C and D",
        ],
        correctAnswer: 1,
    },
    {
        id: 63,
        text: "Arc consistency in CSP means:",
        options: [
            "All constraints are satisfied",
            "For each value in domain, there exists compatible value in related variable",
            "No constraints exist",
            "Problem is solved",
        ],
        correctAnswer: 2,
    },
    {
        id: 64,
        text: "Genetic algorithms are inspired by:",
        options: [
            "Physics",
            "Chemistry",
            "Biological evolution",
            "Mathematics",
        ],
        correctAnswer: 3,
    },
    {
        id: 65,
        text: "Bayesian networks represent:",
        options: [
            "Deterministic relationships",
            "Probabilistic relationships using directed acyclic graphs",
            "Neural networks",
            "Decision trees",
        ],
        correctAnswer: 2,
    },
    {
        id: 66,
        text: "Modus Tollens states that:",
        options: [
            "If $P \\to Q$ and $P$, then $Q$",
            "If $P \\to Q$ and $\\neg Q$, then $\\neg P$",
            "If $P \\to Q$ and $Q$, then $P$",
            "If $P \\to Q$, then $Q \\to P$",
        ],
        correctAnswer: 2,
    },
    {
        id: 67,
        text: "The block cipher mode ECB (Electronic Codebook) has the disadvantage of:",
        options: [
            "Being too fast",
            "Identical plaintext blocks produce identical ciphertext blocks",
            "Requiring too much memory",
            "Being unbreakable",
        ],
        correctAnswer: 2,
    },
    {
        id: 68,
        text: "CBC (Cipher Block Chaining) mode uses:",
        options: [
            "No initialization vector",
            "XOR of previous ciphertext with current plaintext",
            "Only substitution",
            "Direct encryption",
        ],
        correctAnswer: 2,
    },
    {
        id: 69,
        text: "A hash function should be:",
        options: [
            "Reversible",
            "Collision-resistant",
            "Slow",
            "Requires a key",
        ],
        correctAnswer: 2,
    },
    {
        id: 70,
        text: "SHA stands for:",
        options: [
            "Simple Hash Algorithm",
            "Secure Hash Algorithm",
            "Standard Hash Algorithm",
            "Strong Hash Algorithm",
        ],
        correctAnswer: 2,
    },
    {
        id: 71,
        text: "Bias in machine learning models can result from:\n\nA. Unrepresentative training data\nB. Feature selection\nC. Model architecture\nD. All of the above\n\nChoose the correct answer from the options given below:",
        options: [
            "A only",
            "A and B only",
            "A, B and C only",
            "D",
        ],
        correctAnswer: 4,
    },
    {
        id: 72,
        text: "The F1 score is the:",
        options: [
            "Arithmetic mean of precision and recall",
            "Harmonic mean of precision and recall",
            "Geometric mean of precision and recall",
            "Maximum of precision and recall",
        ],
        correctAnswer: 2,
    },
    {
        id: 73,
        text: "Principal Component Analysis (PCA) is used for:",
        options: [
            "Classification",
            "Dimensionality reduction",
            "Clustering",
            "Regression",
        ],
        correctAnswer: 2,
    },
    {
        id: 74,
        text: "Decision trees are prone to:",
        options: [
            "Underfitting only",
            "Overfitting",
            "Neither overfitting nor underfitting",
            "Always perform optimally",
        ],
        correctAnswer: 2,
    },
    {
        id: 75,
        text: "Random Forest is an example of:",
        options: [
            "Single model",
            "Ensemble learning method",
            "Linear model",
            "Rule-based system",
        ],
        correctAnswer: 2,
    },
];
