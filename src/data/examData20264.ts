import { ExamConfig, Question } from "./examTypes";

export const examConfig: ExamConfig = {
    title: "CUET PG 2026 - Mock Test Series IV",
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
        text: "Let $G$ be a group of order $12$. By Lagrange's theorem, which of the following CANNOT be the order of a subgroup of $G$?",
        options: [
            "2",
            "3",
            "5",
            "6"
        ],
        correctAnswer: 3,
    },
    {
        id: 2,
        text: "Consider the following lattice diagram where $a \\leq b$ is drawn as $a$ below $b$:\n```\n    1\n   / \\\n  a   b\n   \\ /\n    0\n```\nThis lattice is:",
        options: [
            "A Boolean Algebra",
            "A distributive lattice but not a Boolean Algebra",
            "A complemented lattice that is also distributive (hence a Boolean Algebra)",
            "Neither distributive nor complemented"
        ],
        correctAnswer: 3,
    },
    {
        id: 3,
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
        id: 4,
        text: "If $f: \\mathbb{Z} \\to \\mathbb{Z}$ is defined by $f(x) = 2x + 3$, which of the following statements are TRUE?\n\nA. $f$ is injective (one-to-one).\nB. $f$ is surjective (onto).\nC. $f$ has an inverse function.\nD. $f^{-1}(13) = 5$\n\nChoose the correct answer:",
        options: [
            "A and D only",
            "A, B, C and D",
            "A only",
            "B and C only"
        ],
        correctAnswer: 1,
    },
    {
        id: 5,
        text: "In a Ring $(R, +, \\cdot)$, which of the following must hold?\n\nA. $(R, +)$ is an abelian group.\nB. Multiplication is associative.\nC. Multiplication distributes over addition.\nD. Multiplication is commutative.\n\nChoose the correct answer:",
        options: [
            "A, B and C only",
            "A, B, C and D",
            "A and C only",
            "B, C and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 6,
        text: "Which of the following is decidable?",
        options: [
            "Given a Turing Machine $M$, does $M$ halt on all inputs?",
            "Given a Turing Machine $M$ and input $w$, does $M$ halt on $w$? (Halting Problem)",
            "Given a DFA $D$ and input $w$, does $D$ accept $w$?",
            "Given two Turing Machines $M_1$ and $M_2$, do they accept the same language?"
        ],
        correctAnswer: 3,
    },
    {
        id: 7,
        text: "Consider the following CFG:\n$S \\to aB \\mid bA$\n$A \\to aS \\mid a$\n$B \\to bS \\mid b$\n\nThis grammar generates the language of all strings over $\\{a,b\\}$ with:",
        options: [
            "Equal number of a's and b's",
            "More a's than b's",
            "At least one a",
            "Even length"
        ],
        correctAnswer: 1,
    },
    {
        id: 8,
        text: "The Rice's Theorem states that:",
        options: [
            "Every non-trivial semantic property of the language of a Turing Machine is undecidable.",
            "Every Turing Machine can be simulated by a PDA.",
            "All context-free languages are decidable.",
            "Regular languages are closed under complementation."
        ],
        correctAnswer: 1,
    },
    {
        id: 9,
        text: "Arrange the following language classes in order from most restrictive (smallest) to least restrictive (largest):\n\nA. Regular Languages\nB. Context-Free Languages\nC. Recursively Enumerable Languages\nD. Context-Sensitive Languages\n\nChoose the correct order:",
        options: [
            "A, B, D, C",
            "A, D, B, C",
            "D, A, B, C",
            "B, A, D, C"
        ],
        correctAnswer: 1,
    },
    {
        id: 10,
        text: "For a DFA with $n$ states, the minimum number of states in the equivalent minimal DFA can be found using:",
        options: [
            "Subset construction algorithm",
            "Table-filling (Myhill-Nerode) algorithm for state minimization",
            "CYK algorithm",
            "Pumping lemma"
        ],
        correctAnswer: 2,
    },
    {
        id: 11,
        text: "A 4-bit Johnson Counter is initialized to 0000. The state after 5 clock cycles is:",
        options: [
            "11111",
            "11110",
            "11100",
            "10000"
        ],
        correctAnswer: 2,
    },
    {
        id: 12,
        text: "Match LIST-I (Logic Gate) with LIST-II (Boolean Expression):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. NAND | I. $(A \\oplus B)' = A \\odot B$ |\n| B. NOR | II. $(A \\cdot B)'$ |\n| C. XOR | III. $(A + B)'$ |\n| D. XNOR | IV. $A \\oplus B$ |\n\nChoose the correct answer:",
        options: [
            "A – II, B – III, C – IV, D – I",
            "A – III, B – II, C – IV, D – I",
            "A – II, B – IV, C – III, D – I",
            "A – I, B – III, C – IV, D – II"
        ],
        correctAnswer: 1,
    },
    {
        id: 13,
        text: "A priority encoder with 8 input lines produces an output of how many bits (plus a valid bit)?",
        options: [
            "2 bits + valid",
            "3 bits + valid",
            "4 bits + valid",
            "8 bits + valid"
        ],
        correctAnswer: 2,
    },
    {
        id: 14,
        text: "In the K-Map for $F(A,B,C,D)$ with don't care conditions $d$ at minterms $\\{2, 5, 10\\}$, the don't care conditions are used to:",
        options: [
            "Increase the total number of minterms in the function",
            "Simplify the function by optionally including them in prime implicant groups",
            "Remove essential prime implicants",
            "Create additional output functions"
        ],
        correctAnswer: 2,
    },
    {
        id: 15,
        text: "The propagation delay of a 4-bit Ripple Carry Adder with each full adder having a carry propagation delay of 10 ns is:",
        options: [
            "10 ns",
            "20 ns",
            "40 ns",
            "80 ns"
        ],
        correctAnswer: 3,
    },
    {
        id: 16,
        text: "A processor uses a 5-stage pipeline: IF, ID, EX, MEM, WB. A load-use hazard occurs between two consecutive instructions. With no forwarding, how many stall cycles need to be inserted?",
        options: [
            "0",
            "1",
            "2",
            "3"
        ],
        correctAnswer: 3,
    },
    {
        id: 17,
        text: "Calculate the effective CPI for a processor where 40% of instructions are arithmetic (CPI=1), 30% are load/store (CPI=3), 20% are branch (CPI=2), and 10% are multiply (CPI=5).",
        options: [
            "2.2",
            "2.3",
            "1.8",
            "2.0"
        ],
        correctAnswer: 1,
    },
    {
        id: 18,
        text: "Match LIST-I (Bus Type) with LIST-II (Characteristic):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Address Bus | I. Carries data between CPU and memory/I/O |\n| B. Data Bus | II. Carries control signals (read, write, interrupt, etc.) |\n| C. Control Bus | III. Carries the memory address of data or instructions |\n| D. System Bus | IV. Collectively refers to address, data, and control buses |\n\nChoose the correct answer:",
        options: [
            "A – III, B – I, C – II, D – IV",
            "A – I, B – III, C – IV, D – II",
            "A – IV, B – I, C – II, D – III",
            "A – III, B – II, C – I, D – IV"
        ],
        correctAnswer: 1,
    },
    {
        id: 19,
        text: "In a direct-mapped cache with 128 cache lines and block size of 64 bytes, how many tag bits are needed if the main memory address is 32 bits?",
        options: [
            "17",
            "19",
            "12",
            "14"
        ],
        correctAnswer: 2,
    },
    {
        id: 20,
        text: "Which of the following statements about Booth's Algorithm for multiplication are TRUE?\n\nA. It handles both positive and negative numbers in 2's complement.\nB. It reduces the number of addition/subtraction operations by grouping consecutive 1's.\nC. It only works for unsigned integers.\nD. The recoded multiplier uses bit-pairs to determine operations.\n\nChoose the correct answer:",
        options: [
            "A, B and D only",
            "A and B only",
            "A, B, C and D",
            "C and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 21,
        text: "What is the purpose of the SIM (Set Interrupt Mask) instruction in the 8085?",
        options: [
            "To enable/disable maskable interrupts (RST 5.5, 6.5, 7.5) and to send serial output data",
            "To read the interrupt mask status and serial input data",
            "To set the stack pointer value",
            "To simulate an interrupt for debugging purposes"
        ],
        correctAnswer: 1,
    },
    {
        id: 22,
        text: "In 8085 assembly, to store a word (16-bit value in HL pair) at memory addresses 2050H and 2051H, which instruction is used?",
        options: [
            "MOV M, A",
            "SHLD 2050H",
            "STA 2050H",
            "STAX D"
        ],
        correctAnswer: 2,
    },
    {
        id: 23,
        text: "The 8085 instruction DAA (Decimal Adjust Accumulator) adjusts the accumulator value after:",
        options: [
            "Binary subtraction to get BCD result",
            "BCD addition to correct the binary result to proper BCD",
            "Hexadecimal to decimal conversion",
            "Division by 10"
        ],
        correctAnswer: 2,
    },
    {
        id: 24,
        text: "Match LIST-I (8085 Addressing Mode) with LIST-II (Example Instruction):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Immediate | I. MOV A, B |\n| B. Register | II. MVI A, 45H |\n| C. Direct | III. LDA 2050H |\n| D. Register Indirect | IV. MOV A, M |\n\nChoose the correct answer:",
        options: [
            "A – II, B – I, C – III, D – IV",
            "A – I, B – II, C – IV, D – III",
            "A – III, B – I, C – II, D – IV",
            "A – II, B – IV, C – III, D – I"
        ],
        correctAnswer: 1,
    },
    {
        id: 25,
        text: "Consider the following C code:\n```c\n#include <stdio.h>\nint main() {\n    char str[] = \"Hello\";\n    char *p = str;\n    printf(\"%c \", *p++);\n    printf(\"%c \", *p);\n    printf(\"%c\", *++p);\n    return 0;\n}\n```\nWhat is the output?",
        options: [
            "H e l",
            "H H e",
            "e l l",
            "H e e"
        ],
        correctAnswer: 1,
    },
    {
        id: 26,
        text: "In an AVL tree, after inserting a sequence of elements, a rotation is needed when the balance factor of any node becomes:",
        options: [
            "0",
            "±1",
            "±2 or greater",
            "Always; every insertion requires a rotation"
        ],
        correctAnswer: 3,
    },
    {
        id: 27,
        text: "What is the output of the following C program?\n```c\n#include <stdio.h>\nint main() {\n    int x = 10;\n    int y = (x++, x + 5);\n    printf(\"%d %d\", x, y);\n    return 0;\n}\n```",
        options: [
            "10 15",
            "11 16",
            "11 15",
            "10 16"
        ],
        correctAnswer: 2,
    },
    {
        id: 28,
        text: "Which of the following correctly describes a Hash Table with open addressing using linear probing?\n\nA. If a collision occurs, the next available slot is checked sequentially.\nB. Primary clustering is a problem where long runs of occupied slots build up.\nC. The load factor should ideally remain below 1 for efficiency.\nD. Deletion in linear probing uses lazy deletion (marking as deleted).\n\nChoose the correct answer:",
        options: [
            "A, B, C and D",
            "A and B only",
            "A, C and D only",
            "B, C and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 29,
        text: "A graph with $V$ vertices and $E$ edges. The adjacency matrix representation uses space of:",
        options: [
            "$O(V + E)$",
            "$O(V^2)$",
            "$O(V \\cdot E)$",
            "$O(E^2)$"
        ],
        correctAnswer: 2,
    },
    {
        id: 30,
        text: "The Bellman-Ford algorithm differs from Dijkstra's algorithm in that:",
        options: [
            "Bellman-Ford only works for directed acyclic graphs",
            "Bellman-Ford can handle graphs with negative edge weights and detect negative weight cycles",
            "Bellman-Ford is always faster than Dijkstra's algorithm",
            "Bellman-Ford uses a priority queue for efficiency"
        ],
        correctAnswer: 2,
    },
    {
        id: 31,
        text: "Consider the Activity Selection Problem. Arrange the following greedy algorithm steps in correct order:\n\nA. Sort activities by their finish times.\nB. Select the first activity.\nC. For each remaining activity, select it if its start time is ≥ finish time of the last selected activity.\nD. Output the set of selected activities.\n\nChoose the correct sequence:",
        options: [
            "A, B, C, D",
            "B, A, C, D",
            "A, C, B, D",
            "B, C, A, D"
        ],
        correctAnswer: 1,
    },
    {
        id: 32,
        text: "Which of the following problems can be solved using a Greedy algorithm optimally?\n\nA. Fractional Knapsack\nB. Huffman Coding\nC. 0/1 Knapsack\nD. Activity Selection\n\nChoose the correct answer:",
        options: [
            "A, B and D only",
            "A and B only",
            "A, B, C and D",
            "C and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 33,
        text: "The Master Theorem applies to recurrences of the form $T(n) = aT(n/b) + f(n)$. For $T(n) = 4T(n/2) + n$, the time complexity is:",
        options: [
            "$O(n^2)$",
            "$O(n \\log n)$",
            "$O(n)$",
            "$O(n^2 \\log n)$"
        ],
        correctAnswer: 1,
    },
    {
        id: 34,
        text: "Match LIST-I (Problem) with LIST-II (Algorithmic Approach):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Longest Common Subsequence | I. Greedy |\n| B. Huffman Encoding | II. Dynamic Programming |\n| C. Finding Strongly Connected Components | III. Graph – DFS based |\n| D. Maximum Bipartite Matching | IV. Network Flow / Augmenting Path |\n\nChoose the correct answer:",
        options: [
            "A – II, B – I, C – III, D – IV",
            "A – I, B – II, C – IV, D – III",
            "A – III, B – I, C – II, D – IV",
            "A – II, B – IV, C – III, D – I"
        ],
        correctAnswer: 1,
    },
    {
        id: 35,
        text: "Consider a reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1 with 3 frames. Using FIFO page replacement, the number of page faults is:",
        options: [
            "12",
            "15",
            "9",
            "10"
        ],
        correctAnswer: 2,
    },
    {
        id: 36,
        text: "Which of the following statements about threads are TRUE?\n\nA. Threads within the same process share the same address space.\nB. Creating a thread is typically faster than creating a new process.\nC. Each thread has its own stack.\nD. Threads in different processes share memory by default.\n\nChoose the correct answer:",
        options: [
            "A, B and C only",
            "A and B only",
            "A, B, C and D",
            "B, C and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 37,
        text: "In the Producer-Consumer problem using semaphores, the semaphore 'empty' is initialized to:",
        options: [
            "0",
            "1",
            "Buffer size $n$",
            "Number of producers"
        ],
        correctAnswer: 3,
    },
    {
        id: 38,
        text: "Consider a system with 3 resource types (A=10, B=5, C=7 total instances). The Banker's algorithm determines whether a state is safe by checking if all processes can be completed in some order. This is an example of:",
        options: [
            "Deadlock Prevention",
            "Deadlock Avoidance",
            "Deadlock Detection",
            "Deadlock Recovery"
        ],
        correctAnswer: 2,
    },
    {
        id: 39,
        text: "Match LIST-I (Process State) with LIST-II (Description):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. New | I. Currently being executed by the CPU |\n| B. Ready | II. Just created; being initialized |\n| C. Running | III. Waiting in queue for CPU assignment |\n| D. Blocked/Waiting | IV. Waiting for an event (I/O completion, signal, etc.) |\n\nChoose the correct answer:",
        options: [
            "A – II, B – III, C – I, D – IV",
            "A – III, B – I, C – II, D – IV",
            "A – II, B – I, C – III, D – IV",
            "A – I, B – III, C – IV, D – II"
        ],
        correctAnswer: 1,
    },
    {
        id: 40,
        text: "In a CRC (Cyclic Redundancy Check) scheme, if the generator polynomial is $G(x) = x^3 + x + 1$ and the data is $101001$, the transmitted codeword includes the CRC bits appended. How many CRC bits are added?",
        options: [
            "2",
            "3",
            "4",
            "6"
        ],
        correctAnswer: 2,
    },
    {
        id: 41,
        text: "Match LIST-I (Network Device) with LIST-II (OSI Layer of Operation):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Hub | I. Network Layer |\n| B. Switch | II. Physical Layer |\n| C. Router | III. Application Layer |\n| D. Gateway | IV. Data Link Layer |\n\nChoose the correct answer:",
        options: [
            "A – II, B – IV, C – I, D – III",
            "A – IV, B – II, C – I, D – III",
            "A – II, B – I, C – IV, D – III",
            "A – III, B – IV, C – I, D – II"
        ],
        correctAnswer: 1,
    },
    {
        id: 42,
        text: "Which of the following are features of the OSPF routing protocol?\n\nA. It is a link-state routing protocol.\nB. It uses Dijkstra's SPF algorithm to compute shortest paths.\nC. It supports hierarchical area routing.\nD. It is a distance vector protocol similar to RIP.\n\nChoose the correct answer:",
        options: [
            "A, B and C only",
            "A and B only",
            "A, B, C and D",
            "B, C and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 43,
        text: "In a Token Ring network (IEEE 802.5), which of the following is TRUE?",
        options: [
            "Any station can transmit at any time.",
            "A station can transmit only when it possesses the token.",
            "Collisions are common and handled using CSMA/CD.",
            "The network topology is a bus."
        ],
        correctAnswer: 2,
    },
    {
        id: 44,
        text: "A network has a bandwidth of 100 Mbps and a propagation delay of 10 ms. For a frame of size 1000 bytes, the bandwidth-delay product is:",
        options: [
            "1,000,000 bits (1 Mbit)",
            "100,000 bits (100 Kbits)",
            "10,000,000 bits (10 Mbits)",
            "8,000,000 bits (8 Mbits)"
        ],
        correctAnswer: 1,
    },
    {
        id: 45,
        text: "In the Minimax algorithm for a two-player zero-sum game, the MAX player aims to:",
        options: [
            "Minimize the value of the evaluation function",
            "Maximize the value of the evaluation function",
            "Minimize the number of moves",
            "Reach any terminal state as quickly as possible"
        ],
        correctAnswer: 2,
    },
    {
        id: 46,
        text: "Alpha-Beta Pruning reduces the time complexity of Minimax from $O(b^d)$ to $O(b^{d/2})$ in the best case, where $b$ is the branching factor and $d$ is the depth. Which of the following strategies helps achieve this best case?",
        options: [
            "Random ordering of moves",
            "Ordering moves from worst to best",
            "Ordering moves from best to worst (optimal move ordering)",
            "Processing only terminal nodes"
        ],
        correctAnswer: 3,
    },
    {
        id: 47,
        text: "Which of the following is NOT a correct inference rule in propositional logic?\n\nA. Modus Ponens: From $P$ and $P \\to Q$, infer $Q$.\nB. Modus Tollens: From $\\neg Q$ and $P \\to Q$, infer $\\neg P$.\nC. Affirming the Consequent: From $Q$ and $P \\to Q$, infer $P$.\nD. Resolution: From $(P \\lor Q)$ and $(\\neg P \\lor R)$, infer $(Q \\lor R)$.\n\nChoose the correct answer:",
        options: [
            "C only",
            "C and D",
            "A and C",
            "None of the above"
        ],
        correctAnswer: 1,
    },
    {
        id: 48,
        text: "Match LIST-I (AI Agent Type) with LIST-II (Description):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Simple Reflex Agent | I. Maintains an internal model of the world |\n| B. Model-Based Agent | II. Acts based on current percept only |\n| C. Goal-Based Agent | III. Chooses actions that maximize expected utility |\n| D. Utility-Based Agent | IV. Uses goal information to determine the best course of action |\n\nChoose the correct answer:",
        options: [
            "A – II, B – I, C – IV, D – III",
            "A – I, B – II, C – III, D – IV",
            "A – II, B – IV, C – I, D – III",
            "A – III, B – I, C – IV, D – II"
        ],
        correctAnswer: 1,
    },
    {
        id: 49,
        text: "In constraint satisfaction problems (CSPs), arc consistency requires that:",
        options: [
            "Every assignment satisfies all constraints.",
            "For every value in the domain of one variable, there exists a consistent value in the domain of every connected variable.",
            "All variables have the same domain size.",
            "The constraint graph is a tree."
        ],
        correctAnswer: 2,
    },
    {
        id: 50,
        text: "Compare DES and AES by matching LIST-I with LIST-II:\n\n| LIST-I | LIST-II |\n|---|---|\n| A. DES Key Length | I. 128, 192, or 256 bits |\n| B. AES Key Length | II. 56 bits (64 with parity) |\n| C. DES Block Size | III. 128 bits |\n| D. AES Block Size | IV. 64 bits |\n\nChoose the correct answer:",
        options: [
            "A – II, B – I, C – IV, D – III",
            "A – I, B – II, C – III, D – IV",
            "A – IV, B – I, C – II, D – III",
            "A – II, B – III, C – IV, D – I"
        ],
        correctAnswer: 1,
    },
    {
        id: 51,
        text: "In RSA, if $p = 7$, $q = 11$, then $n = 77$ and $\\phi(n) = 60$. If public key $e = 13$, the private key $d$ (such that $e \\cdot d \\equiv 1 \\pmod{\\phi(n)}$) is:",
        options: [
            "37",
            "7",
            "47",
            "17"
        ],
        correctAnswer: 1,
    },
    {
        id: 52,
        text: "Which of the following correctly describes the Vigenère cipher?",
        options: [
            "A monoalphabetic substitution cipher that uses a single key letter.",
            "A polyalphabetic substitution cipher that uses a keyword to determine shift amounts for each letter.",
            "A transposition cipher that rearranges the order of plaintext letters.",
            "A block cipher that operates on fixed-size blocks of plaintext."
        ],
        correctAnswer: 2,
    },
    {
        id: 53,
        text: "An Intrusion Detection System (IDS) that compares network traffic against known attack signatures is called:",
        options: [
            "Anomaly-based IDS",
            "Signature-based (Misuse Detection) IDS",
            "Honeypot",
            "Stateful firewall"
        ],
        correctAnswer: 2,
    },
    {
        id: 54,
        text: "In a digital certificate (X.509), which of the following information is included?\n\nA. Subject's public key\nB. Certificate Authority's digital signature\nC. Validity period\nD. Subject's private key\n\nChoose the correct answer:",
        options: [
            "A, B and C only",
            "A and B only",
            "A, B, C and D",
            "B, C and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 55,
        text: "In the Gradient Descent optimization algorithm, the learning rate controls:",
        options: [
            "The number of features considered at each step",
            "The size of each step taken toward the minimum of the loss function",
            "The number of training epochs",
            "The regularization strength"
        ],
        correctAnswer: 2,
    },
    {
        id: 56,
        text: "Which of the following are activation functions commonly used in neural networks?\n\nA. ReLU (Rectified Linear Unit)\nB. Sigmoid\nC. Softmax\nD. K-Means\n\nChoose the correct answer:",
        options: [
            "A, B and C only",
            "A and B only",
            "A, B, C and D",
            "B, C and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 57,
        text: "Match LIST-I (ML Technique) with LIST-II (Use Case):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Logistic Regression | I. Predicting a continuous value (e.g., house price) |\n| B. Linear Regression | II. Binary classification (e.g., spam detection) |\n| C. K-Means | III. Customer segmentation (grouping similar customers) |\n| D. Convolutional Neural Network | IV. Image classification |\n\nChoose the correct answer:",
        options: [
            "A – II, B – I, C – III, D – IV",
            "A – I, B – II, C – IV, D – III",
            "A – III, B – I, C – II, D – IV",
            "A – II, B – IV, C – III, D – I"
        ],
        correctAnswer: 1,
    },
    {
        id: 58,
        text: "Which of the following is a correct statement about Regularization in machine learning?\n\nA. L1 regularization (Lasso) can produce sparse models by driving some coefficients to exactly zero.\nB. L2 regularization (Ridge) penalizes the square of the magnitude of coefficients.\nC. Regularization increases model complexity.\nD. Dropout is a form of regularization used in neural networks.\n\nChoose the correct answer:",
        options: [
            "A, B and D only",
            "A and B only",
            "A, B, C and D",
            "B, C and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 59,
        text: "In a ROC (Receiver Operating Characteristic) curve, the x-axis represents:",
        options: [
            "True Positive Rate (Recall)",
            "False Positive Rate ($1 - Specificity$)",
            "Precision",
            "F1-Score"
        ],
        correctAnswer: 2,
    },
    {
        id: 60,
        text: "Which of the following preprocessing steps helps address the issue of missing data?\n\nA. Imputation with mean/median/mode.\nB. Removing rows with missing values (listwise deletion).\nC. Using k-NN imputation to fill missing values based on similar records.\nD. Normalizing the existing data.\n\nChoose the correct answer:",
        options: [
            "A, B and C only",
            "A and B only",
            "A, B, C and D",
            "B and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 61,
        text: "The vanishing gradient problem in deep neural networks is mitigated by using:",
        options: [
            "Sigmoid activation function",
            "ReLU activation function and its variants",
            "Increasing the number of layers",
            "Decreasing the learning rate"
        ],
        correctAnswer: 2,
    },
    {
        id: 62,
        text: "In the context of Natural Language Processing (NLP), TF-IDF stands for:",
        options: [
            "Term Frequency – Inverse Document Frequency",
            "Total Feature – Independent Data Filtering",
            "Text Format – Inverse Data Feature",
            "Term Format – Integrated Data Frequency"
        ],
        correctAnswer: 1,
    },
    {
        id: 63,
        text: "Which of the following correctly describes Cross-Validation?\n\nA. The dataset is split into k folds.\nB. The model is trained on k-1 folds and validated on the remaining fold.\nC. This process is repeated k times, with each fold used once for validation.\nD. The final performance is the average across all k iterations.\n\nChoose the correct answer:",
        options: [
            "A, B, C and D",
            "A and B only",
            "A, B and C only",
            "B, C and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 64,
        text: "A computer system uses 3-level page table. If the virtual address is 48 bits, page size is 4 KB ($2^{12}$ bytes), and each page table entry is 8 bytes, how many bits are used for each level of the page table?",
        options: [
            "12 bits per level (3 levels × 12 = 36 bits for page number)",
            "9 bits per level (3 levels × 9 = 27 bits; not enough)",
            "10 bits per level (3 levels × 10 = 30 bits; not correct either)",
            "12 bits per level (correct: 48 - 12 = 36 bits / 3 = 12 bits per level)"
        ],
        correctAnswer: 4,
    },
    {
        id: 65,
        text: "A system uses first-fit memory allocation with the following free holes (in order): 100KB, 500KB, 200KB, 300KB, 600KB. If processes of sizes 212KB, 417KB, 112KB, 426KB arrive in sequence, how many processes can be placed?",
        options: [
            "2",
            "3",
            "4",
            "1"
        ],
        correctAnswer: 2,
    },
    {
        id: 66,
        text: "In a network, the maximum data rate of a noiseless channel with bandwidth B and M signal levels is given by Nyquist's theorem as:",
        options: [
            "$B \\log_2 M$",
            "$2B \\log_2 M$",
            "$B \\cdot M$",
            "$2B / \\log_2 M$"
        ],
        correctAnswer: 2,
    },
    {
        id: 67,
        text: "How many edges does a complete graph $K_n$ have?",
        options: [
            "$n$",
            "$n(n-1)$",
            "$n(n-1)/2$",
            "$2n$"
        ],
        correctAnswer: 3,
    },
    {
        id: 68,
        text: "A hash table with 10 slots uses the hash function $h(k) = k \\mod 10$. If keys 25, 35, 45, 55, 65 are inserted using linear probing, the position of key 65 after insertion is:",
        options: [
            "5",
            "6",
            "7",
            "9"
        ],
        correctAnswer: 4,
    },
    {
        id: 69,
        text: "For a binary tree with 20 nodes, the minimum possible height is:",
        options: [
            "4",
            "5",
            "3",
            "6"
        ],
        correctAnswer: 1,
    },
    {
        id: 70,
        text: "In a relational database, the normal form that eliminates transitive dependencies is:",
        options: [
            "First Normal Form (1NF)",
            "Second Normal Form (2NF)",
            "Third Normal Form (3NF)",
            "Boyce-Codd Normal Form (BCNF)"
        ],
        correctAnswer: 3,
    },
    {
        id: 71,
        text: "In TCP/IP, the Silly Window Syndrome is avoided by:",
        options: [
            "Nagle's algorithm (sender side) and Clark's solution (receiver side)",
            "Increasing the window size to maximum at all times",
            "Using UDP instead of TCP",
            "Reducing the MSS (Maximum Segment Size)"
        ],
        correctAnswer: 1,
    },
    {
        id: 72,
        text: "What is the time complexity of computing the $n$-th Fibonacci number using matrix exponentiation?",
        options: [
            "$O(n)$",
            "$O(n^2)$",
            "$O(\\log n)$",
            "$O(2^n)$"
        ],
        correctAnswer: 3,
    },
    {
        id: 73,
        text: "In an AES-128 encryption, the number of rounds performed is:",
        options: [
            "8",
            "10",
            "12",
            "16"
        ],
        correctAnswer: 2,
    },
    {
        id: 74,
        text: "The Support Vector Machine (SVM) classifier finds the hyperplane that:",
        options: [
            "Minimizes the total distance of all points from the hyperplane",
            "Maximizes the margin between the two closest data points from different classes",
            "Passes through the centroid of each class",
            "Minimizes the number of features used"
        ],
        correctAnswer: 2,
    },
    {
        id: 75,
        text: "In Bayesian classification, the posterior probability $P(C|X)$ is proportional to:",
        options: [
            "$P(X|C) \\cdot P(C)$ (likelihood × prior)",
            "$P(C|X) \\cdot P(X)$",
            "$P(X) / P(C)$",
            "$P(C) / P(X|C)$"
        ],
        correctAnswer: 1,
    },
];
