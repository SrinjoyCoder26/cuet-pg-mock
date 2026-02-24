import { ExamConfig, Question } from "./examTypes";

export const examConfig: ExamConfig = {
    title: "CUET PG 2026 - Mock Test Series I",
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
        text: "Let $f: A \\to B$ and $g: B \\to C$ be two functions. Which of the following statements is/are TRUE?\n\nA. If $f$ and $g$ are both injective, then $g \\circ f$ is injective.\nB. If $g \\circ f$ is surjective, then $g$ must be surjective.\nC. If $g \\circ f$ is injective, then $f$ must be injective.\nD. If $f$ and $g$ are both bijective, then $(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}$.\n\nChoose the correct answer from the options given below:",
        options: [
            "A and C only",
            "A, B and C only",
            "A, B, C and D",
            "B and D only"
        ],
        correctAnswer: 3,
    },
    {
        id: 2,
        text: "In a Boolean Algebra, which of the following laws states that $x + (y \\cdot z) = (x + y) \\cdot (x + z)$?",
        options: [
            "Absorption Law",
            "De Morgan's Law",
            "Distributive Law",
            "Complement Law"
        ],
        correctAnswer: 3,
    },
    {
        id: 3,
        text: "Consider a relation $R$ on set $A = \\{1, 2, 3, 4\\}$ defined as $R = \\{(1,1), (2,2), (3,3), (4,4), (1,2), (2,1), (2,3), (3,2)\\}$. Which of the following correctly describes $R$?",
        options: [
            "Equivalence relation",
            "Partial order relation",
            "Reflexive and symmetric but not transitive",
            "Reflexive and transitive but not symmetric"
        ],
        correctAnswer: 3,
    },
    {
        id: 4,
        text: "Match LIST-I with LIST-II\n\n| LIST-I (Algebraic Property) | LIST-II (Example/Statement) |\n|---|---|\n| A. Idempotent law | I. $a \\cdot (b + c) = a \\cdot b + a \\cdot c$ |\n| B. Involution law | II. $a + a = a$ |\n| C. Distributive law | III. $(a')' = a$ |\n| D. Complement law | IV. $a + a' = 1$ |\n\nChoose the correct answer from the options given below:",
        options: [
            "A – II, B – III, C – I, D – IV",
            "A – I, B – II, C – III, D – IV",
            "A – II, B – I, C – III, D – IV",
            "A – III, B – IV, C – I, D – II"
        ],
        correctAnswer: 1,
    },
    {
        id: 5,
        text: "The number of equivalence relations on a set with 4 elements (Bell number $B_4$) is:",
        options: [
            "14",
            "15",
            "16",
            "12"
        ],
        correctAnswer: 2,
    },
    {
        id: 6,
        text: "Which of the following statements about Context-Free Grammars (CFG) and Pushdown Automata (PDA) is/are TRUE?\n\nA. Every regular language is also a context-free language.\nB. The intersection of two context-free languages is always context-free.\nC. The complement of a context-free language is always context-free.\nD. Every context-free language can be accepted by some non-deterministic PDA.\n\nChoose the correct answer from the options given below:",
        options: [
            "A and D only",
            "A, B and D only",
            "B and C only",
            "A, B, C and D"
        ],
        correctAnswer: 1,
    },
    {
        id: 7,
        text: "A grammar in Chomsky Normal Form (CNF) has productions of which of the following forms?\n\nA. $A \\to BC$ (where $A$, $B$, $C$ are non-terminals)\nB. $A \\to a$ (where $a$ is a terminal)\nC. $A \\to \\varepsilon$ (only for the start symbol if $\\varepsilon$ is in the language)\nD. $A \\to aB$ (where $a$ is a terminal and $B$ is a non-terminal)\n\nChoose the correct answer from the options given below:",
        options: [
            "A and B only",
            "A, B and C only",
            "A, B, C and D",
            "B and D only"
        ],
        correctAnswer: 2,
    },
    {
        id: 8,
        text: "Which of the following languages over $\\Sigma = \\{a, b\\}$ is NOT regular?",
        options: [
            "$\\{a^n b^n : n \\geq 1\\}$",
            "$\\{w : w$ contains an even number of $a$'s$\\}$",
            "$\\{w : w$ starts with '$a$' and ends with '$b$'$\\}$",
            "$\\{a^n : n$ is a prime number less than $100\\}$"
        ],
        correctAnswer: 1,
    },
    {
        id: 9,
        text: "Arrange the following steps in the correct order for converting an NFA to a DFA using the subset construction method:\n\nA. Identify the start state of the DFA as the ε-closure of the NFA start state.\nB. For each new DFA state, compute transitions on each input symbol.\nC. Mark DFA states containing NFA final states as accepting states.\nD. Compute the ε-closure of each resulting state set.\n\nChoose the correct sequence:",
        options: [
            "A, B, D, C",
            "B, A, D, C",
            "A, D, B, C",
            "D, A, B, C"
        ],
        correctAnswer: 1,
    },
    {
        id: 10,
        text: "The language $L = \\{a^n b^n c^n : n \\geq 1\\}$ is:",
        options: [
            "Regular",
            "Context-Free but not Regular",
            "Context-Sensitive but not Context-Free",
            "Recursively Enumerable but not Context-Sensitive"
        ],
        correctAnswer: 3,
    },
    {
        id: 11,
        text: "What will be the minimized expression for $F(A,B,C,D) = \\Sigma m(0,1,2,3,8,9,10,11)$?",
        options: [
            "$B'$ (i.e., $A'B' + AB'$ simplifies to $B'$)",
            "$A'B$",
            "$AB' + A'B$",
            "$A + B'$"
        ],
        correctAnswer: 1,
    },
    {
        id: 12,
        text: "A 3-bit synchronous binary up-counter uses JK flip-flops. After the state $Q_2 Q_1 Q_0 = 110$, what is the next state?",
        options: [
            "000",
            "111",
            "101",
            "011"
        ],
        correctAnswer: 2,
    },
    {
        id: 13,
        text: "In IEEE 754 single-precision floating-point representation, the number of bits allocated to the mantissa (significand), exponent, and sign respectively are:",
        options: [
            "23, 8, 1",
            "24, 7, 1",
            "22, 9, 1",
            "23, 7, 2"
        ],
        correctAnswer: 1,
    },
    {
        id: 14,
        text: "Which of the following statements about flip-flops are TRUE?\n\nA. A D flip-flop captures the value of the D input at the clock edge.\nB. A JK flip-flop eliminates the invalid state present in the SR flip-flop.\nC. A T flip-flop toggles its output when T = 1 and the clock edge arrives.\nD. All flip-flops are level-triggered devices.\n\nChoose the correct answer:",
        options: [
            "A, B and C only",
            "A and B only",
            "A, B, C and D",
            "B, C and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 15,
        text: "Implement the function $F(A,B,C) = \\Sigma m(1,3,5,7)$ using a minimum number of gates. The most simplified form is:",
        options: [
            "$A'B' + AB$",
            "$C$",
            "$A \\oplus B$",
            "$A + B + C$"
        ],
        correctAnswer: 2,
    },
    {
        id: 16,
        text: "Consider a cache memory with the following parameters: cache access time = 10 ns, main memory access time = 100 ns, and hit ratio = 0.9. What is the average memory access time?",
        options: [
            "19 ns",
            "55 ns",
            "10 ns",
            "90 ns"
        ],
        correctAnswer: 1,
    },
    {
        id: 17,
        text: "Which of the following statements about Instruction Pipelining are TRUE?\n\nA. Pipelining increases the latency of individual instructions.\nB. Pipelining increases the overall throughput of instruction execution.\nC. Data hazards occur when an instruction depends on the result of a previous instruction still in the pipeline.\nD. Control hazards arise due to branch instructions.\n\nChoose the correct answer from the options given below:",
        options: [
            "B and C only",
            "A, B and C only",
            "A, B, C and D",
            "B, C and D only"
        ],
        correctAnswer: 3,
    },
    {
        id: 18,
        text: "Match LIST-I (Memory Type) with LIST-II (Characteristic):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. SRAM | I. Uses capacitors; needs periodic refresh |\n| B. DRAM | II. Non-volatile; electrically erasable |\n| C. ROM | III. Uses flip-flops; faster but more expensive |\n| D. Flash Memory | IV. Permanently programmed at manufacture |\n\nChoose the correct answer:",
        options: [
            "A – III, B – I, C – IV, D – II",
            "A – I, B – III, C – II, D – IV",
            "A – III, B – II, C – I, D – IV",
            "A – II, B – I, C – IV, D – III"
        ],
        correctAnswer: 1,
    },
    {
        id: 19,
        text: "In a computer with a 32-bit address bus and byte-addressable memory, the maximum addressable memory is:",
        options: [
            "2 GB",
            "4 GB",
            "1 GB",
            "8 GB"
        ],
        correctAnswer: 2,
    },
    {
        id: 20,
        text: "In the 8085 microprocessor, the RST 5.5, RST 6.5, and RST 7.5 are:",
        options: [
            "Software interrupts triggered by instructions",
            "Maskable hardware interrupts",
            "Non-maskable hardware interrupts",
            "Timer interrupts"
        ],
        correctAnswer: 2,
    },
    {
        id: 21,
        text: "Which register in the 8085 microprocessor is used to store the address of the next instruction to be fetched?",
        options: [
            "Stack Pointer (SP)",
            "Program Counter (PC)",
            "Accumulator (A)",
            "Instruction Register (IR)"
        ],
        correctAnswer: 2,
    },
    {
        id: 22,
        text: "Arrange the following 8085 instruction execution steps in the correct sequential order:\n\nA. Decode the instruction fetched from memory.\nB. Fetch the opcode from the memory location pointed by PC.\nC. Execute the operation.\nD. Increment the Program Counter.\n\nChoose the correct sequence:",
        options: [
            "A, B, C, D",
            "B, D, A, C",
            "B, A, D, C",
            "D, B, A, C"
        ],
        correctAnswer: 2,
    },
    {
        id: 23,
        text: "What is the function of the ALE (Address Latch Enable) signal in the 8085 microprocessor?",
        options: [
            "It enables the data bus during memory write operations.",
            "It is used to demultiplex the lower 8-bit address from the multiplexed address/data bus AD₀–AD₇.",
            "It signals an interrupt acknowledgement to peripheral devices.",
            "It controls the direction of data flow on the data bus."
        ],
        correctAnswer: 2,
    },
    {
        id: 24,
        text: "Consider the following C code:\n```c\nint f(int n) {\n    if (n <= 1) return 1;\n    return f(n-1) + f(n-2);\n}\n```\nWhat is the time complexity of this function?",
        options: [
            "$O(n)$",
            "$O(n^2)$",
            "$O(2^n)$",
            "$O(n \\log n)$"
        ],
        correctAnswer: 3,
    },
    {
        id: 25,
        text: "Which of the following statements about Linked Lists are TRUE?\n\nA. Insertion at the beginning of a singly linked list takes $O(1)$ time.\nB. Binary search can be performed efficiently on a sorted singly linked list.\nC. A doubly linked list allows traversal in both directions.\nD. Deleting a node from a singly linked list given only a pointer to that node (not the previous) takes $O(n)$ time in general.\n\nChoose the correct answer from the options given below:",
        options: [
            "A and C only",
            "A, C and D only",
            "B, C and D only",
            "A, B, C and D"
        ],
        correctAnswer: 2,
    },
    {
        id: 26,
        text: "Match LIST-I with LIST-II:\n\n| LIST-I (Data Structure Operation) | LIST-II (Time Complexity – Average Case) |\n|---|---|\n| A. Search in a balanced BST | I. $O(1)$ |\n| B. Insertion in a Hash Table | II. $O(\\log n)$ |\n| C. Sorting using Merge Sort | III. $O(n)$ |\n| D. Search in an unsorted array | IV. $O(n \\log n)$ |\n\nChoose the correct answer:",
        options: [
            "A – II, B – I, C – IV, D – III",
            "A – I, B – II, C – III, D – IV",
            "A – II, B – III, C – I, D – IV",
            "A – III, B – I, C – II, D – IV"
        ],
        correctAnswer: 1,
    },
    {
        id: 27,
        text: "In a max-heap of $n$ elements, the minimum element can be found in:",
        options: [
            "$O(1)$ time",
            "$O(\\log n)$ time",
            "$O(n)$ time",
            "$O(n \\log n)$ time"
        ],
        correctAnswer: 3,
    },
    {
        id: 28,
        text: "What is the output of the following C code?\n```c\n#include <stdio.h>\nint main() {\n    int x = 5;\n    printf(\"%d\", x++);\n    return 0;\n}\n```",
        options: [
            "4",
            "5",
            "6",
            "Compiler error"
        ],
        correctAnswer: 2,
    },
    {
        id: 29,
        text: "In a stack, the operation to remove an element is called:",
        options: [
            "Push",
            "Pop",
            "Dequeue",
            "Delete"
        ],
        correctAnswer: 2,
    },
    {
        id: 30,
        text: "Which of the following problems is solved using Dynamic Programming?\n\nA. Matrix Chain Multiplication\nB. 0/1 Knapsack Problem\nC. Kruskal's Minimum Spanning Tree\nD. Longest Common Subsequence\n\nChoose the correct answer:",
        options: [
            "A and D only",
            "A, B and D only",
            "B and C only",
            "A, B, C and D"
        ],
        correctAnswer: 2,
    },
    {
        id: 31,
        text: "Consider the following recurrence relation: $T(n) = 2T(n/2) + n$. Using the Master Theorem, the time complexity is:",
        options: [
            "$O(n)$",
            "$O(n \\log n)$",
            "$O(n^2)$",
            "$O(\\log n)$"
        ],
        correctAnswer: 2,
    },
    {
        id: 32,
        text: "Arrange the following sorting algorithms in order of their worst-case time complexity from best (lowest) to worst (highest):\n\nA. Merge Sort → $O(n \\log n)$\nB. Bubble Sort → $O(n^2)$\nC. Heap Sort → $O(n \\log n)$\nD. Quick Sort → $O(n^2)$\n\nThe correct ordering from best to worst worst-case complexity:",
        options: [
            "A, C, B, D",
            "A, C, D, B",
            "A, C then D, B (ties within groups)",
            "B, D, A, C"
        ],
        correctAnswer: 3,
    },
    {
        id: 33,
        text: "In Dijkstra's shortest path algorithm, which data structure gives the most efficient implementation?",
        options: [
            "Simple array",
            "Binary Min-Heap (Priority Queue)",
            "Stack",
            "Adjacency Matrix only"
        ],
        correctAnswer: 2,
    },
    {
        id: 34,
        text: "The worst-case time complexity of Quick Sort is:",
        options: [
            "$O(n \\log n)$",
            "$O(n^2)$",
            "$O(\\log n)$",
            "$O(n)$"
        ],
        correctAnswer: 2,
    },
    {
        id: 35,
        text: "Dynamic programming is used for solving problems with:",
        options: [
            "Greedy choice property",
            "Overlapping subproblems and optimal substructure",
            "No optimal substructure",
            "Independent subproblems only"
        ],
        correctAnswer: 2,
    },
    {
        id: 36,
        text: "Consider four processes P1, P2, P3, P4 arriving at time 0 with burst times 6, 2, 8, 3 ms respectively. Using Shortest Job First (SJF) non-preemptive scheduling, what is the average turnaround time?",
        options: [
            "11.25 ms",
            "13.25 ms",
            "9.25 ms",
            "14.75 ms"
        ],
        correctAnswer: 1,
    },
    {
        id: 37,
        text: "Which of the following conditions are necessary for a deadlock to occur (Coffman's conditions)?\n\nA. Mutual Exclusion\nB. Hold and Wait\nC. Preemption\nD. Circular Wait\n\nChoose the correct answer:",
        options: [
            "A, B and D only",
            "A, B, C and D",
            "B, C and D only",
            "A and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 38,
        text: "Match LIST-I (Page Replacement Algorithm) with LIST-II (Key Characteristic):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. FIFO | I. Replaces the page that will not be used for the longest time in the future |\n| B. LRU | II. Replaces the page that has been in memory the longest |\n| C. Optimal | III. Replaces the page least recently used |\n| D. Clock (Second Chance) | IV. Gives pages a second chance before replacing them |\n\nChoose the correct answer:",
        options: [
            "A – II, B – III, C – I, D – IV",
            "A – I, B – III, C – II, D – IV",
            "A – II, B – I, C – III, D – IV",
            "A – III, B – II, C – I, D – IV"
        ],
        correctAnswer: 1,
    },
    {
        id: 39,
        text: "Consider a system with 3 processes and 4 resources. The Allocation and Available matrices are:\n\n| | R1 | R2 | R3 | R4 |\n|---|---|---|---|---|\n| P1 Alloc | 0 | 1 | 0 | 0 |\n| P2 Alloc | 2 | 0 | 0 | 1 |\n| P3 Alloc | 3 | 0 | 2 | 1 |\n| Available | 1 | 1 | 0 | 0 |\n\nUsing Banker's algorithm, which process can complete first with the available resources?",
        options: [
            "P1",
            "P2",
            "P3",
            "None can complete"
        ],
        correctAnswer: 1,
    },
    {
        id: 40,
        text: "The Banker's algorithm is used for:",
        options: [
            "Process scheduling",
            "Deadlock avoidance",
            "Memory allocation",
            "Page replacement"
        ],
        correctAnswer: 2,
    },
    {
        id: 41,
        text: "Virtual memory allows:",
        options: [
            "Execution of processes larger than physical memory",
            "Faster CPU execution",
            "Better cache performance",
            "Reduced disk usage"
        ],
        correctAnswer: 1,
    },
    {
        id: 42,
        text: "The LRU (Least Recently Used) page replacement algorithm replaces:",
        options: [
            "The page that arrived first",
            "The page that has not been used for the longest time",
            "A random page",
            "The page that will not be used for the longest time in future"
        ],
        correctAnswer: 2,
    },
    {
        id: 43,
        text: "Match LIST-I (Protocol/Standard) with LIST-II (Layer in OSI Model):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. HTTP | I. Network Layer |\n| B. IP | II. Transport Layer |\n| C. TCP | III. Application Layer |\n| D. Ethernet | IV. Data Link Layer |\n\nChoose the correct answer:",
        options: [
            "A – III, B – I, C – II, D – IV",
            "A – I, B – III, C – II, D – IV",
            "A – III, B – II, C – I, D – IV",
            "A – II, B – I, C – III, D – IV"
        ],
        correctAnswer: 1,
    },
    {
        id: 44,
        text: "A host has IP address 192.168.10.50 with subnet mask 255.255.255.192. What is the network address and the number of usable hosts per subnet?",
        options: [
            "Network: 192.168.10.0, Usable hosts: 62",
            "Network: 192.168.10.0, Usable hosts: 30",
            "Network: 192.168.10.32, Usable hosts: 62",
            "Network: 192.168.10.0, Usable hosts: 64"
        ],
        correctAnswer: 1,
    },
    {
        id: 45,
        text: "Which of the following correctly describes the differences between TCP and UDP?\n\nA. TCP provides reliable, connection-oriented delivery; UDP does not.\nB. UDP has lower overhead than TCP.\nC. TCP uses a three-way handshake to establish connections.\nD. UDP guarantees in-order delivery of packets.\n\nChoose the correct answer from the options given below:",
        options: [
            "A, B and C only",
            "A and C only",
            "B and D only",
            "A, B, C and D"
        ],
        correctAnswer: 1,
    },
    {
        id: 46,
        text: "In a sliding window protocol with a window size of 4 and a sequence number space of 3 bits (0–7), what is the maximum number of outstanding unacknowledged frames allowed in Go-Back-N ARQ?",
        options: [
            "8",
            "7",
            "4",
            "3"
        ],
        correctAnswer: 2,
    },
    {
        id: 47,
        text: "TCP is a:",
        options: [
            "Connection-oriented protocol",
            "Connectionless protocol",
            "Physical layer protocol",
            "Application layer protocol"
        ],
        correctAnswer: 1,
    },
    {
        id: 48,
        text: "The default subnet mask for a Class B network is:",
        options: [
            "255.0.0.0",
            "255.255.0.0",
            "255.255.255.0",
            "255.255.255.255"
        ],
        correctAnswer: 2,
    },
    {
        id: 49,
        text: "A router operates at which layer of the OSI model?",
        options: [
            "Physical layer",
            "Data link layer",
            "Network layer",
            "Transport layer"
        ],
        correctAnswer: 3,
    },
    {
        id: 50,
        text: "Match LIST-I (Search Algorithm) with LIST-II (Property):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Breadth-First Search | I. Uses heuristic function; not guaranteed optimal |\n| B. Depth-First Search | II. Complete and optimal for uniform step costs |\n| C. Uniform Cost Search | III. Complete but not optimal; low memory use risk |\n| D. Greedy Best-First Search | IV. Complete for finite graphs; optimal for unit costs |\n\nChoose the correct answer:",
        options: [
            "A – IV, B – III, C – II, D – I",
            "A – II, B – IV, C – I, D – III",
            "A – IV, B – I, C – III, D – II",
            "A – III, B – IV, C – II, D – I"
        ],
        correctAnswer: 1,
    },
    {
        id: 51,
        text: "Which of the following are characteristics of a rational agent in Artificial Intelligence?\n\nA. It always selects the action that maximizes its performance measure.\nB. It requires complete knowledge of the environment to act.\nC. Its rationality depends on the performance measure, prior knowledge, available actions, and percept sequence.\nD. A rational agent is the same as an omniscient agent.\n\nChoose the correct answer:",
        options: [
            "A and C only",
            "A, B and C only",
            "C only",
            "A, B, C and D"
        ],
        correctAnswer: 1,
    },
    {
        id: 52,
        text: "In First Order Logic, which of the following correctly represents the statement: \"There exists a person who loves every other person\"?",
        options: [
            "$\\forall x \\; \\exists y \\; Loves(x, y)$",
            "$\\exists x \\; \\forall y \\; Loves(x, y)$",
            "$\\forall x \\; \\forall y \\; Loves(x, y)$",
            "$\\exists x \\; \\exists y \\; Loves(x, y)$"
        ],
        correctAnswer: 2,
    },
    {
        id: 53,
        text: "The A* search algorithm uses:",
        options: [
            "$f(n) = g(n)$ only",
            "$f(n) = h(n)$ only",
            "$f(n) = g(n) + h(n)$",
            "$f(n) = g(n) - h(n)$"
        ],
        correctAnswer: 3,
    },
    {
        id: 54,
        text: "Knowledge representation in AI can be done using:\n\nA. Semantic networks\nB. Frames\nC. Production rules\nD. Predicate logic\n\nChoose the correct answer from the options given below:",
        options: [
            "A, B and C only",
            "B, C and D only",
            "A, C and D only",
            "A, B, C and D"
        ],
        correctAnswer: 4,
    },
    {
        id: 55,
        text: "In the Hill Cipher, encryption is performed by:",
        options: [
            "Substituting each letter by a letter a fixed number of positions down the alphabet.",
            "Multiplying the plaintext vector by a key matrix modulo 26.",
            "Arranging plaintext in a grid and reading columns in a specified order.",
            "Replacing pairs of letters using a 5×5 key matrix."
        ],
        correctAnswer: 2,
    },
    {
        id: 56,
        text: "Which of the following statements about Public Key Cryptography are TRUE?\n\nA. The public key is used for encryption and the private key for decryption (in confidentiality mode).\nB. RSA is an example of a public key cryptosystem.\nC. Public key systems are generally faster than symmetric key systems.\nD. Digital signatures use the sender's private key for signing.\n\nChoose the correct answer:",
        options: [
            "A, B and D only",
            "A and B only",
            "B, C and D only",
            "A, B, C and D"
        ],
        correctAnswer: 1,
    },
    {
        id: 57,
        text: "In a Caesar cipher, if the plaintext letter 'M' (position 12) is encrypted with a key of 5, the ciphertext letter is:",
        options: [
            "R",
            "S",
            "Q",
            "T"
        ],
        correctAnswer: 1,
    },
    {
        id: 58,
        text: "In symmetric key cryptography, the same key is used for:",
        options: [
            "Encryption only",
            "Decryption only",
            "Both encryption and decryption",
            "Key generation only"
        ],
        correctAnswer: 3,
    },
    {
        id: 59,
        text: "Which of the following is NOT a component of the CIA triad in network security?",
        options: [
            "Confidentiality",
            "Integrity",
            "Availability",
            "Authentication"
        ],
        correctAnswer: 4,
    },
    {
        id: 60,
        text: "A digital signature provides:\n\nA. Authentication\nB. Non-repudiation\nC. Confidentiality\nD. Integrity\n\nChoose the correct answer from the options given below:",
        options: [
            "A, B and D only",
            "A, B and C only",
            "B, C and D only",
            "A, B, C and D"
        ],
        correctAnswer: 1,
    },
    {
        id: 61,
        text: "Match LIST-I (ML Algorithm) with LIST-II (Category):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. K-Means | I. Supervised – Regression |\n| B. Linear Regression | II. Supervised – Classification |\n| C. Decision Tree | III. Unsupervised – Clustering |\n| D. Principal Component Analysis (PCA) | IV. Unsupervised – Dimensionality Reduction |\n\nChoose the correct answer:",
        options: [
            "A – III, B – I, C – II, D – IV",
            "A – I, B – III, C – IV, D – II",
            "A – II, B – I, C – III, D – IV",
            "A – III, B – II, C – I, D – IV"
        ],
        correctAnswer: 1,
    },
    {
        id: 62,
        text: "Which of the following are examples of unstructured data?\n\nA. Relational database tables\nB. Video files\nC. Social media posts (free text)\nD. CSV spreadsheets with fixed columns\n\nChoose the correct answer:",
        options: [
            "B and C only",
            "A and D only",
            "A, B and C only",
            "B, C and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 63,
        text: "In the context of data preprocessing, normalization using Min-Max scaling transforms a value $x$ to:",
        options: [
            "$(x - \\mu) / \\sigma$",
            "$(x - x_{min}) / (x_{max} - x_{min})$",
            "$x / mean(x)$",
            "$\\log(x + 1)$"
        ],
        correctAnswer: 2,
    },
    {
        id: 64,
        text: "Which of the following correctly describes overfitting in a machine learning model?",
        options: [
            "The model performs well on training data but poorly on unseen test data.",
            "The model performs poorly on both training and test data.",
            "The model generalizes well to new data.",
            "The model has too few parameters to capture the underlying pattern."
        ],
        correctAnswer: 1,
    },
    {
        id: 65,
        text: "In k-Nearest Neighbor (k-NN) classification, increasing the value of $k$ generally:\n\nA. Reduces the effect of noise in the training data.\nB. Increases the bias of the model.\nC. Decreases the variance of the model.\nD. Always improves classification accuracy.\n\nChoose the correct answer from the options given below:",
        options: [
            "A, B and C only",
            "A and C only",
            "B, C and D only",
            "A, B, C and D"
        ],
        correctAnswer: 1,
    },
    {
        id: 66,
        text: "Supervised learning requires:",
        options: [
            "Unlabeled data",
            "Labeled training data",
            "No training data",
            "Only test data"
        ],
        correctAnswer: 2,
    },
    {
        id: 67,
        text: "Which of the following is an example of unsupervised learning?",
        options: [
            "Classification",
            "Regression",
            "Clustering",
            "Supervised classification"
        ],
        correctAnswer: 3,
    },
    {
        id: 68,
        text: "The Knapsack problem can be efficiently solved using:",
        options: [
            "Greedy approach only",
            "Dynamic programming",
            "Brute force only",
            "Linear search"
        ],
        correctAnswer: 2,
    },
    {
        id: 69,
        text: "Dijkstra's algorithm is used to find:",
        options: [
            "Minimum spanning tree",
            "Shortest path from a single source",
            "Maximum flow",
            "Strongly connected components"
        ],
        correctAnswer: 2,
    },
    {
        id: 70,
        text: "Which CPU scheduling algorithm may cause starvation?",
        options: [
            "First Come First Serve (FCFS)",
            "Round Robin",
            "Priority Scheduling",
            "Shortest Job First (SJF)"
        ],
        correctAnswer: 3,
    },
    {
        id: 71,
        text: "In paging, the page table is used to:",
        options: [
            "Store program instructions",
            "Map logical addresses to physical addresses",
            "Manage file systems",
            "Schedule processes"
        ],
        correctAnswer: 2,
    },
    {
        id: 72,
        text: "Which protocol is used for sending emails?",
        options: [
            "HTTP",
            "FTP",
            "SMTP",
            "POP3"
        ],
        correctAnswer: 3,
    },
    {
        id: 73,
        text: "The primary function of DNS (Domain Name System) is to:",
        options: [
            "Encrypt data transmission",
            "Translate domain names to IP addresses",
            "Route packets across networks",
            "Manage email servers"
        ],
        correctAnswer: 2,
    },
    {
        id: 74,
        text: "In Ethernet, CSMA/CD stands for:",
        options: [
            "Carrier Sense Multiple Access with Collision Detection",
            "Code Sense Multiple Access with Collision Detection",
            "Carrier Sense Multiple Access with Collision Delay",
            "Code Sense Media Access with Collision Detection"
        ],
        correctAnswer: 1,
    },
    {
        id: 75,
        text: "A firewall operates at which layer(s) of the OSI model?",
        options: [
            "Physical layer only",
            "Network layer only",
            "Multiple layers (typically network and transport)",
            "Application layer only"
        ],
        correctAnswer: 3,
    },
];