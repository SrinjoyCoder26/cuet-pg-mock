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
    title: "CUET PG 2026 - Mock Test 2",
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
        text: "In a Boolean Algebra, the complement of $(A + B)$ is:",
        options: [
            "$A' + B'$",
            "$A' \\cdot B'$",
            "$A + B'$",
            "$A' + B$",
        ],
        correctAnswer: 2,
    },
    {
        id: 2,
        text: "If a relation $R$ on set $A$ is both symmetric and transitive, but not reflexive, then:",
        options: [
            "$R$ is an equivalence relation",
            "$R$ cannot be antisymmetric",
            "$R$ may or may not be an equivalence relation",
            "$R$ must be a partial order",
        ],
        correctAnswer: 3,
    },
    {
        id: 3,
        text: "The composition of two functions $f: A \\to B$ and $g: B \\to C$ is denoted as:",
        options: [
            "$f \\circ g$",
            "$g \\circ f$",
            "$f + g$",
            "$g - f$",
        ],
        correctAnswer: 2,
    },
    {
        id: 4,
        text: "A partial order relation must satisfy:\n\nA. Reflexivity\nB. Antisymmetry\nC. Transitivity\nD. Symmetry\n\nChoose the correct answer from the options given below:",
        options: [
            "A, B and C only",
            "A, B and D only",
            "B, C and D only",
            "A, B, C and D",
        ],
        correctAnswer: 1,
    },
    {
        id: 5,
        text: "Which of the following languages is NOT regular?",
        options: [
            "$\\{a^n b^n \\mid n \\ge 0\\}$",
            "$\\{a^n \\mid n \\ge 0\\}$",
            "$\\{(ab)^n \\mid n \\ge 0\\}$",
            "$\\{a^n b^m \\mid n, m \\ge 0\\}$",
        ],
        correctAnswer: 1,
    },
    {
        id: 6,
        text: "An NFA with $n$ states can be converted to a DFA with at most:",
        options: [
            "$n$ states",
            "$n^2$ states",
            "$2^n$ states",
            "$n!$ states",
        ],
        correctAnswer: 3,
    },
    {
        id: 7,
        text: "Griebach Normal Form (GNF) requires all productions to be of the form:",
        options: [
            "$A \\to BC$",
            "$A \\to a$",
            "$A \\to aB_1B_2...B_n$",
            "$A \\to AB$",
        ],
        correctAnswer: 3,
    },
    {
        id: 8,
        text: "According to Chomsky hierarchy, which grammar is most restrictive?",
        options: [
            "Type 0 (Unrestricted grammar)",
            "Type 1 (Context-sensitive grammar)",
            "Type 2 (Context-free grammar)",
            "Type 3 (Regular grammar)",
        ],
        correctAnswer: 4,
    },
    {
        id: 9,
        text: "A Turing machine is more powerful than a Push-down Automaton because:",
        options: [
            "It has multiple stacks",
            "It can move the tape head in both directions",
            "It has more states",
            "It processes input faster",
        ],
        correctAnswer: 2,
    },
    {
        id: 10,
        text: "What is the hexadecimal representation of the binary number 10111010?",
        options: [
            "AB",
            "BA",
            "BC",
            "CB",
        ],
        correctAnswer: 2,
    },
    {
        id: 11,
        text: "The 1's complement of the binary number 10110101 is:",
        options: [
            "01001010",
            "10110110",
            "01001011",
            "11001010",
        ],
        correctAnswer: 1,
    },
    {
        id: 12,
        text: "A half-adder has how many inputs and outputs?",
        options: [
            "2 inputs, 1 output",
            "2 inputs, 2 outputs",
            "3 inputs, 2 outputs",
            "3 inputs, 3 outputs",
        ],
        correctAnswer: 2,
    },
    {
        id: 13,
        text: "A decoder with n input lines can have a maximum of:",
        options: [
            "n output lines",
            "2n output lines",
            "2^n output lines",
            "n^2 output lines",
        ],
        correctAnswer: 3,
    },
    {
        id: 14,
        text: "The characteristic equation of a JK flip-flop is:",
        options: [
            "$Q(t+1) = JQ' + K'Q$",
            "$Q(t+1) = J + K$",
            "$Q(t+1) = J'Q + KQ'$",
            "$Q(t+1) = JK$",
        ],
        correctAnswer: 1,
    },
    {
        id: 15,
        text: "In an 8-bit Analog-to-Digital Converter (ADC), the number of quantization levels is:",
        options: [
            "8",
            "16",
            "128",
            "256",
        ],
        correctAnswer: 4,
    },
    {
        id: 16,
        text: "Which addressing mode is fastest in terms of execution?",
        options: [
            "Immediate addressing mode",
            "Direct addressing mode",
            "Indirect addressing mode",
            "Indexed addressing mode",
        ],
        correctAnswer: 1,
    },
    {
        id: 17,
        text: "In a two-level cache hierarchy, if L1 cache has a hit rate of 95% and L2 cache has a hit rate of 85%, what is the overall miss rate?",
        options: [
            "0.75%",
            "7.5%",
            "15%",
            "20%",
        ],
        correctAnswer: 1,
    },
    {
        id: 18,
        text: "The control unit of a CPU can be implemented using:\n\nA. Hardwired control\nB. Microprogrammed control\nC. Both hardwired and microprogrammed control\nD. Neither method\n\nChoose the correct answer from the options given below:",
        options: [
            "A and B only",
            "C only",
            "A or B only",
            "D only",
        ],
        correctAnswer: 2,
    },
    {
        id: 19,
        text: "Interrupt-driven I/O is more efficient than programmed I/O because:",
        options: [
            "CPU does not need to wait for I/O operation to complete",
            "It uses less memory",
            "It is faster than DMA",
            "It requires no hardware support",
        ],
        correctAnswer: 1,
    },
    {
        id: 20,
        text: "Von Neumann architecture is characterized by:",
        options: [
            "Separate memory for instructions and data",
            "Shared memory for instructions and data",
            "No memory hierarchy",
            "Multiple processors",
        ],
        correctAnswer: 2,
    },
    {
        id: 21,
        text: "The 8085 microprocessor instruction LDA 2050H requires how many machine cycles?",
        options: [
            "2",
            "3",
            "4",
            "5",
        ],
        correctAnswer: 3,
    },
    {
        id: 22,
        text: "Which of the following 8085 instructions affects all flags?",
        options: [
            "MOV A, B",
            "ADD B",
            "MVI A, 05H",
            "LXI H, 2050H",
        ],
        correctAnswer: 2,
    },
    {
        id: 23,
        text: "The 8237 DMA controller can handle how many DMA channels?",
        options: [
            "2",
            "4",
            "8",
            "16",
        ],
        correctAnswer: 2,
    },
    {
        id: 24,
        text: "In 8085, the HOLD signal is used for:",
        options: [
            "Interrupt handling",
            "DMA operation",
            "Resetting the processor",
            "Clock synchronization",
        ],
        correctAnswer: 2,
    },
    {
        id: 25,
        text: "Memory-mapped I/O in 8085 means:",
        options: [
            "I/O devices are accessed using IN/OUT instructions",
            "I/O devices share the same address space as memory",
            "I/O devices have separate address space",
            "I/O devices cannot be accessed",
        ],
        correctAnswer: 2,
    },
    {
        id: 26,
        text: "What is the output of the following C code?\n\nint arr[] = {1, 2, 3, 4, 5};\nprintf(\"%d\", *(arr + 3));",
        options: [
            "1",
            "3",
            "4",
            "5",
        ],
        correctAnswer: 3,
    },
    {
        id: 27,
        text: "In C, which function is used to dynamically allocate memory?",
        options: [
            "alloc()",
            "malloc()",
            "new()",
            "calloc()",
        ],
        correctAnswer: 2,
    },
    {
        id: 28,
        text: "The maximum size of a stack is determined by:",
        options: [
            "Available memory",
            "Number of elements",
            "Type of elements",
            "Processor speed",
        ],
        correctAnswer: 1,
    },
    {
        id: 29,
        text: "In a circular queue with capacity n, the number of elements that can be stored is:",
        options: [
            "n",
            "n - 1",
            "n + 1",
            "2n",
        ],
        correctAnswer: 2,
    },
    {
        id: 30,
        text: "A doubly linked list has the advantage over a singly linked list in:",
        options: [
            "Uses less memory",
            "Faster insertion at the beginning",
            "Can traverse in both directions",
            "Simpler implementation",
        ],
        correctAnswer: 3,
    },
    {
        id: 31,
        text: "The height of a complete binary tree with $n$ nodes is:",
        options: [
            "$\\log_2(n)$",
            "$\\lfloor\\log_2(n)\\rfloor$",
            "$\\lceil\\log_2(n+1)\\rceil - 1$",
            "$n - 1$",
        ],
        correctAnswer: 3,
    },
    {
        id: 32,
        text: "The preorder traversal of a binary search tree gives elements in:",
        options: [
            "Sorted order",
            "Reverse sorted order",
            "Neither sorted nor reverse sorted order",
            "Random order",
        ],
        correctAnswer: 3,
    },
    {
        id: 33,
        text: "In a max heap, the largest element is always at:",
        options: [
            "Any position",
            "The leftmost leaf",
            "The root",
            "The rightmost leaf",
        ],
        correctAnswer: 3,
    },
    {
        id: 34,
        text: "Time complexity of inserting an element in a heap is:",
        options: [
            "$O(1)$",
            "$O(\\log n)$",
            "$O(n)$",
            "$O(n \\log n)$",
        ],
        correctAnswer: 2,
    },
    {
        id: 35,
        text: "The time complexity of Bubble Sort in the best case is:",
        options: [
            "$O(n)$",
            "$O(n \\log n)$",
            "$O(n^2)$",
            "$O(\\log n)$",
        ],
        correctAnswer: 1,
    },
    {
        id: 36,
        text: "Which sorting algorithm is NOT stable?",
        options: [
            "Merge Sort",
            "Quick Sort",
            "Insertion Sort",
            "Bubble Sort",
        ],
        correctAnswer: 2,
    },
    {
        id: 37,
        text: "Heap Sort has a time complexity of:",
        options: [
            "$O(n)$",
            "$O(n \\log n)$",
            "$O(n^2)$",
            "$O(\\log n)$",
        ],
        correctAnswer: 2,
    },
    {
        id: 38,
        text: "The greedy approach works optimally for:",
        options: [
            "0/1 Knapsack problem",
            "Fractional Knapsack problem",
            "Travelling Salesman Problem",
            "Matrix Chain Multiplication",
        ],
        correctAnswer: 2,
    },
    {
        id: 39,
        text: "The Longest Common Subsequence (LCS) problem can be solved efficiently using:",
        options: [
            "Greedy algorithm",
            "Dynamic programming",
            "Backtracking only",
            "Linear search",
        ],
        correctAnswer: 2,
    },
    {
        id: 40,
        text: "Prim's algorithm for finding minimum spanning tree uses:",
        options: [
            "Depth-first search",
            "Breadth-first search",
            "Greedy approach",
            "Dynamic programming",
        ],
        correctAnswer: 3,
    },
    {
        id: 41,
        text: "The time complexity of Depth-First Search (DFS) for a graph with $V$ vertices and $E$ edges is:",
        options: [
            "$O(V)$",
            "$O(E)$",
            "$O(V + E)$",
            "$O(V \\times E)$",
        ],
        correctAnswer: 3,
    },
    {
        id: 42,
        text: "Topological sorting is possible only for:",
        options: [
            "Any graph",
            "Directed Acyclic Graph (DAG)",
            "Complete graphs",
            "Undirected graphs",
        ],
        correctAnswer: 2,
    },
    {
        id: 43,
        text: "The master theorem is used to solve:",
        options: [
            "Linear recurrences",
            "Divide and conquer recurrences",
            "Polynomial equations",
            "Graph problems",
        ],
        correctAnswer: 2,
    },
    {
        id: 44,
        text: "A context switch in an operating system involves:\n\nA. Saving the state of the current process\nB. Loading the state of the next process\nC. Updating the program counter\nD. Allocating new memory\n\nChoose the correct answer from the options given below:",
        options: [
            "A, B and C only",
            "A, B and D only",
            "B, C and D only",
            "A, B, C and D",
        ],
        correctAnswer: 1,
    },
    {
        id: 45,
        text: "The exec() system call in UNIX:",
        options: [
            "Creates a new process",
            "Replaces the current process image with a new program",
            "Terminates a process",
            "Waits for a child process to complete",
        ],
        correctAnswer: 2,
    },
    {
        id: 46,
        text: "In Round Robin scheduling, if the time quantum is too large, it behaves like:",
        options: [
            "FCFS (First Come First Serve)",
            "SJF (Shortest Job First)",
            "Priority Scheduling",
            "Multilevel Queue",
        ],
        correctAnswer: 1,
    },
    {
        id: 47,
        text: "The Shortest Job First (SJF) scheduling algorithm is optimal in terms of:",
        options: [
            "Throughput",
            "Average waiting time",
            "CPU utilization",
            "Response time",
        ],
        correctAnswer: 2,
    },
    {
        id: 48,
        text: "A semaphore is a:",
        options: [
            "Hardware device",
            "Synchronization primitive",
            "Type of processor",
            "Memory management technique",
        ],
        correctAnswer: 2,
    },
    {
        id: 49,
        text: "The dining philosophers problem is an example of:",
        options: [
            "CPU scheduling",
            "Deadlock and synchronization issues",
            "Memory management",
            "File system design",
        ],
        correctAnswer: 2,
    },
    {
        id: 50,
        text: "In the context of deadlock, a resource allocation graph with no cycles implies:",
        options: [
            "Deadlock must exist",
            "Deadlock may exist",
            "No deadlock exists",
            "Insufficient information",
        ],
        correctAnswer: 3,
    },
    {
        id: 51,
        text: "Thrashing in virtual memory systems occurs when:",
        options: [
            "Too much time is spent in paging",
            "CPU is underutilized",
            "Memory is insufficient",
            "All processes are I/O bound",
        ],
        correctAnswer: 1,
    },
    {
        id: 52,
        text: "The working set model for page replacement is based on:",
        options: [
            "Principle of locality",
            "Random access",
            "Sequential access",
            "FIFO principle",
        ],
        correctAnswer: 1,
    },
    {
        id: 53,
        text: "In a paging system with page size of 4KB and logical address space of 32 bits, how many entries are in the page table?",
        options: [
            "$2^{12}$",
            "$2^{20}$",
            "$2^{32}$",
            "4096",
        ],
        correctAnswer: 2,
    },
    {
        id: 54,
        text: "The main difference between TCP and UDP is:",
        options: [
            "TCP is faster than UDP",
            "TCP is connection-oriented, UDP is connectionless",
            "UDP is more reliable than TCP",
            "TCP works at network layer, UDP at transport layer",
        ],
        correctAnswer: 2,
    },
    {
        id: 55,
        text: "The maximum size of a TCP segment is determined by:",
        options: [
            "Window size",
            "MTU (Maximum Transmission Unit)",
            "Buffer size",
            "Bandwidth",
        ],
        correctAnswer: 2,
    },
    {
        id: 56,
        text: "In IPv4, the address 192.168.1.1 belongs to which class?",
        options: [
            "Class A",
            "Class B",
            "Class C",
            "Class D",
        ],
        correctAnswer: 3,
    },
    {
        id: 57,
        text: "ARP (Address Resolution Protocol) is used to:",
        options: [
            "Map IP address to MAC address",
            "Map MAC address to IP address",
            "Route packets",
            "Encrypt data",
        ],
        correctAnswer: 1,
    },
    {
        id: 58,
        text: "The sliding window protocol is used for:",
        options: [
            "Routing",
            "Flow control",
            "Error detection only",
            "Addressing",
        ],
        correctAnswer: 2,
    },
    {
        id: 59,
        text: "HTTP operates on which port by default?",
        options: [
            "21",
            "23",
            "80",
            "443",
        ],
        correctAnswer: 3,
    },
    {
        id: 60,
        text: "A bridge operates at which layer of the OSI model?",
        options: [
            "Physical layer",
            "Data link layer",
            "Network layer",
            "Transport layer",
        ],
        correctAnswer: 2,
    },
    {
        id: 61,
        text: "CIDR (Classless Inter-Domain Routing) was introduced to:",
        options: [
            "Increase network speed",
            "Reduce IP address wastage",
            "Improve security",
            "Enable IPv6",
        ],
        correctAnswer: 2,
    },
    {
        id: 62,
        text: "Uninformed search strategies include:\n\nA. Breadth-First Search\nB. A* Search\nC. Depth-First Search\nD. Greedy Best-First Search\n\nChoose the correct answer from the options given below:",
        options: [
            "A and C only",
            "B and D only",
            "A, B and C only",
            "A, B, C and D",
        ],
        correctAnswer: 1,
    },
    {
        id: 63,
        text: "The heuristic function $h(n)$ in A* search should be:",
        options: [
            "Admissible",
            "Inadmissible",
            "Always overestimate",
            "Random",
        ],
        correctAnswer: 1,
    },
    {
        id: 64,
        text: "Depth-First Search is:",
        options: [
            "Complete and optimal",
            "Complete but not optimal",
            "Not complete but optimal",
            "Neither complete nor optimal",
        ],
        correctAnswer: 4,
    },
    {
        id: 65,
        text: "In propositional logic, a tautology is:",
        options: [
            "Always true",
            "Always false",
            "Sometimes true",
            "Undefined",
        ],
        correctAnswer: 1,
    },
    {
        id: 66,
        text: "Modus Ponens is an inference rule that states:",
        options: [
            "If P then Q, P is true, therefore Q is true",
            "If P then Q, Q is true, therefore P is true",
            "If P then Q, P is false, therefore Q is false",
            "If P then Q, Q is false, therefore P is false",
        ],
        correctAnswer: 1,
    },
    {
        id: 67,
        text: "Resolution in first-order logic requires clauses to be in:",
        options: [
            "Disjunctive Normal Form (DNF)",
            "Conjunctive Normal Form (CNF)",
            "Horn clause form",
            "Any form",
        ],
        correctAnswer: 2,
    },
    {
        id: 68,
        text: "Unification in first-order logic is the process of:",
        options: [
            "Finding substitutions to make expressions identical",
            "Proving theorems",
            "Creating knowledge bases",
            "Parsing sentences",
        ],
        correctAnswer: 1,
    },
    {
        id: 69,
        text: "Public key cryptography uses:",
        options: [
            "Same key for encryption and decryption",
            "Different keys for encryption and decryption",
            "No keys",
            "Three keys",
        ],
        correctAnswer: 2,
    },
    {
        id: 70,
        text: "RSA algorithm is based on:",
        options: [
            "Discrete logarithm problem",
            "Factorization of large prime numbers",
            "XOR operations",
            "Substitution cipher",
        ],
        correctAnswer: 2,
    },
    {
        id: 71,
        text: "A Man-in-the-Middle attack compromises:",
        options: [
            "Availability only",
            "Integrity and confidentiality",
            "Physical security only",
            "None of the above",
        ],
        correctAnswer: 2,
    },
    {
        id: 72,
        text: "In classification problems, the goal is to:",
        options: [
            "Predict continuous values",
            "Predict discrete class labels",
            "Find patterns in unlabeled data",
            "Maximize rewards",
        ],
        correctAnswer: 2,
    },
    {
        id: 73,
        text: "In regression problems, the output is:",
        options: [
            "A categorical variable",
            "A continuous variable",
            "A binary variable",
            "A discrete variable",
        ],
        correctAnswer: 2,
    },
    {
        id: 74,
        text: "The purpose of cross-validation is to:",
        options: [
            "Increase training data",
            "Assess model performance and prevent overfitting",
            "Speed up training",
            "Reduce features",
        ],
        correctAnswer: 2,
    },
    {
        id: 75,
        text: "Which of the following is an example of structured data?\n\nA. Relational database tables\nB. Images\nC. Videos\nD. Text documents\n\nChoose the correct answer from the options given below:",
        options: [
            "A only",
            "A and B only",
            "C and D only",
            "A, B, C and D",
        ],
        correctAnswer: 1,
    },
];
