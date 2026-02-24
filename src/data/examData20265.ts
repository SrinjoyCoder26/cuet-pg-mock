import { ExamConfig, Question } from "./examTypes";

export const examConfig: ExamConfig = {
    title: "CUET PG 2026 - Mock Test Series V",
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
        text: "Consider the following statements regarding virtual memory and choose the correct one.\n\n(A). In demand paging, a page is loaded into memory only when it is needed.\n(B). Thrashing occurs when the CPU spends more time paging than executing.\n(C). The page replacement algorithm that suffers from Belady's anomaly is LRU.\n(D). Translation Lookaside Buffer (TLB) is used to speed up virtual to physical address translation.\n\nChoose the correct answer:",
        options: [
            "(A), (B) and (D) only",
            "(B), (C) and (D) only",
            "(A), (C) and (D) only",
            "(A), (B) and (C) only"
        ],
        correctAnswer: 1,
    },
    {
        id: 2,
        text: "In an interrupt-driven I/O, after the I/O device completes the operation, the CPU is informed via __________.",
        options: [
            "Polling signal",
            "Interrupt Request (IRQ)",
            "DMA transfer",
            "Busy-wait signal"
        ],
        correctAnswer: 2,
    },
    {
        id: 3,
        text: "In a two-level memory hierarchy, the cache access time is 8 nsec and main memory access time is 120 nsec. The hit ratio is 0.95. What is the average access time?",
        options: [
            "12.4 nsec",
            "14.4 nsec",
            "9.8 nsec",
            "16.4 nsec"
        ],
        correctAnswer: 2,
    },
    {
        id: 4,
        text: "Match LIST-I with LIST-II:\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Process State | I. Contains process ID, program counter, CPU registers |\n| B. PCB | II. Transfers CPU control to process selected by scheduler |\n| C. Context Switch | III. Running, Ready, Waiting, New, Terminated |\n| D. Dispatcher | IV. Saving and restoring state when switching processes |\n\nChoose the correct answer:",
        options: [
            "A – III, B – I, C – IV, D – II",
            "A – I, B – III, C – II, D – IV",
            "A – III, B – IV, C – I, D – II",
            "A – II, B – I, C – IV, D – III"
        ],
        correctAnswer: 1,
    },
    {
        id: 5,
        text: "Deallocation of stack frame of a function call occurs __________.",
        options: [
            "At the time of function invocation",
            "After the function returns to the caller",
            "When the program starts",
            "At the time of variable declaration"
        ],
        correctAnswer: 2,
    },
    {
        id: 6,
        text: "Match LIST-I with LIST-II:\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Unsegmented unpaged | I. Physical address is same as logical address |\n| B. Unsegmented paged | II. Logical memory is a collection of fixed-size pages |\n| C. Segmented unpaged | III. Logical memory is divided into variable-length segments |\n| D. Segmented paged | IV. Memory is divided into segments each further divided into pages |\n\nChoose the correct answer:",
        options: [
            "A – I, B – II, C – III, D – IV",
            "A – II, B – I, C – IV, D – III",
            "A – III, B – IV, C – I, D – II",
            "A – IV, B – III, C – II, D – I"
        ],
        correctAnswer: 1,
    },
    {
        id: 7,
        text: "If language $L$ is recursive, then which of the following is necessarily true?",
        options: [
            "Its complement is recursively enumerable but not recursive",
            "Its complement is also recursive",
            "L is context-free",
            "L cannot be accepted by any Turing machine"
        ],
        correctAnswer: 2,
    },
    {
        id: 8,
        text: "Let $P$ be a regular language and $Q$ be any language such that $Q \\subseteq P$. Which of the following is always regular?",
        options: [
            "$Q$",
            "$P \\cap Q$",
            "$P - Q$",
            "$P \\cup Q$"
        ],
        correctAnswer: 4,
    },
    {
        id: 9,
        text: "If $L$ and its complement are both context-free languages, then $L$ is:",
        options: [
            "Regular",
            "Context-sensitive",
            "Recursive",
            "Recursively enumerable"
        ],
        correctAnswer: 3,
    },
    {
        id: 10,
        text: "Finite languages satisfy the pumping lemma for regular languages by choosing the pumping length $n$ equal to __________ (where $p$ = length of longest string in $L$).",
        options: [
            "$p$",
            "$p + 1$",
            "$p - 1$",
            "$p^2$"
        ],
        correctAnswer: 2,
    },
    {
        id: 11,
        text: "Which of the following languages is NOT context-free?\n\n(A). $L = \\{a^n b^n c^n \\mid n \\geq 1\\}$\n(B). $L = \\{a^n b^n \\mid n \\geq 0\\}$\n(C). $L = \\{ww \\mid w \\in \\{a,b\\}^*\\}$\n(D). $L = \\{a^n b^{2n} \\mid n \\geq 1\\}$\n\nChoose the correct answer:",
        options: [
            "(A) and (C) only",
            "(B) and (D) only",
            "(A) only",
            "(B) and (C) only"
        ],
        correctAnswer: 1,
    },
    {
        id: 12,
        text: "In a class C network, the IP address is 192.168.10.50 with mask 255.255.255.224. What is the network address?",
        options: [
            "192.168.10.32",
            "192.168.10.0",
            "192.168.10.48",
            "192.168.10.64"
        ],
        correctAnswer: 1,
    },
    {
        id: 13,
        text: "Match LIST-I with LIST-II:\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Greedy best-first search | I. Uses $f(n) = g(n) + h(n)$; complete and optimal if $h$ is admissible |\n| B. Uniform Cost Search | II. Expands node with lowest path cost from start |\n| C. A* search | III. Iterative deepening version of A*; space efficient |\n| D. IDA* | IV. Expands node with lowest $h(n)$; incomplete, not optimal |\n\nChoose the correct answer:",
        options: [
            "A – IV, B – II, C – I, D – III",
            "A – I, B – II, C – III, D – IV",
            "A – II, B – IV, C – I, D – III",
            "A – IV, B – III, C – II, D – I"
        ],
        correctAnswer: 1,
    },
    {
        id: 14,
        text: "Asimov's zeroth law of robotics states:",
        options: [
            "A robot must protect its own existence",
            "A robot may not injure a human being",
            "A robot must obey orders given by humans",
            "A robot may not harm humanity or allow humanity to come to harm"
        ],
        correctAnswer: 4,
    },
    {
        id: 15,
        text: "In Boolean algebra, factoring refers to:",
        options: [
            "Addition of redundant literals",
            "Removal of redundant variables",
            "Extraction of a common factor from a logic expression",
            "Conversion of SOP to POS form"
        ],
        correctAnswer: 3,
    },
    {
        id: 16,
        text: "A perception check in communication is:",
        options: [
            "A bias that causes selective listening",
            "Stating your interpretation and asking if it is correct",
            "A method to reward attentive listeners",
            "Any factor that impedes correct interpretation"
        ],
        correctAnswer: 2,
    },
    {
        id: 17,
        text: "Match LIST-I with LIST-II:\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Resolution | I. Prevents backtracking past the point it appears |\n| B. Unification | II. Process of finding substitutions that make two literals identical |\n| C. Backtracking | III. Inference rule that combines two clauses to produce a resolvent |\n| D. Cut (!) | IV. Searching alternative paths when current path fails |\n\nChoose the correct answer:",
        options: [
            "A – III, B – II, C – IV, D – I",
            "A – II, B – III, C – I, D – IV",
            "A – IV, B – I, C – II, D – III",
            "A – III, B – IV, C – II, D – I"
        ],
        correctAnswer: 1,
    },
    {
        id: 18,
        text: "Consider the FOL sentence: $\\forall x(\\exists y\\ Loves(x,y))$. Which of the following is implied by this?\n\n(A). $\\exists y(\\forall x\\ Loves(x,y))$\n(B). $\\exists x(\\exists y\\ Loves(x,y))$\n(C). $\\forall x(\\neg \\forall y\\ \\neg Loves(x,y))$\n(D). $\\neg \\exists x(\\forall y\\ \\neg Loves(x,y))$\n\nChoose the correct answer:",
        options: [
            "(A) and (B) only",
            "(B), (C) and (D) only",
            "(A), (B) and (C) only",
            "(A) and (D) only"
        ],
        correctAnswer: 2,
    },
    {
        id: 19,
        text: "Match LIST-I with LIST-II:\n\n| LIST-I | LIST-II |\n|---|---|\n| A. $\\lim_{n \\to \\infty} (1 + 1/n)^n$ | I. $e$ |\n| B. $\\lim_{x \\to 0} (\\sin x)/x$ | II. $1$ |\n| C. $\\lim_{x \\to \\infty} (1 + 1/x)^{2x}$ | III. $e^2$ |\n| D. $\\lim_{n \\to \\infty} (1 - 1/n)^n$ | IV. $e^{-1}$ |\n\nChoose the correct answer:",
        options: [
            "A – I, B – II, C – III, D – IV",
            "A – II, B – I, C – IV, D – III",
            "A – III, B – II, C – I, D – IV",
            "A – I, B – III, C – II, D – IV"
        ],
        correctAnswer: 1,
    },
    {
        id: 20,
        text: "Let $A$ be a 2×2 matrix with $a_{11} = 2$, $a_{12} = 1$, $a_{21} = 1$, $a_{22} = 2$. The eigenvalues of $A^{10}$ are:",
        options: [
            "$1024$ and $1$",
            "$3^{10}$ and $1$",
            "$512$ and $2$",
            "$1024$ and $0$"
        ],
        correctAnswer: 2,
    },
    {
        id: 21,
        text: "Equation $\\sin(x) - x/2 = 0$ is solved using Newton-Raphson method with $x_0 = \\pi/2$. Then $x_1$ is approximately:",
        options: [
            "1.1731",
            "0.9046",
            "1.4142",
            "1.0000"
        ],
        correctAnswer: 1,
    },
    {
        id: 22,
        text: "The system: $x_1 + x_2 = 1$, $2x_1 + 2x_2 = k$ has no solution when:",
        options: [
            "$k = 2$",
            "$k \\neq 2$",
            "$k = 0$",
            "$k = 1$"
        ],
        correctAnswer: 2,
    },
    {
        id: 23,
        text: "For $x \\in [0,1]$, if $f(x) = e^{\\sin x}$ and $g(x) = e^{\\cos x}$, then:",
        options: [
            "$f$ is monotonically increasing and $g$ is monotonically decreasing",
            "Both $f$ and $g$ are monotonically increasing",
            "Both $f$ and $g$ are monotonically decreasing",
            "$f$ is monotonically decreasing and $g$ is monotonically increasing"
        ],
        correctAnswer: 1,
    },
    {
        id: 24,
        text: "The system: $x_1 + x_2 + x_3 = 3$, $x_1 + 2x_2 + 3x_3 = 5$, $x_1 + 3x_2 + \\beta x_3 = 7$ has no unique solution when $\\beta$ equals:",
        options: [
            "4",
            "5",
            "6",
            "7"
        ],
        correctAnswer: 2,
    },
    {
        id: 25,
        text: "Solve the Boolean equations: $x + y = 1$, $xy = 0$, $x + z = 1$, $yz = 0$. The solution $(x, y, z)$ is:",
        options: [
            "$(1, 0, 0)$",
            "$(0, 1, 1)$",
            "$(1, 0, 1)$",
            "Both $(1,0,0)$ and $(0,1,1)$"
        ],
        correctAnswer: 4,
    },
    {
        id: 26,
        text: "An FPGA logic block whose functionality is fixed and cannot be reprogrammed is called a:",
        options: [
            "Soft core",
            "Firm core",
            "Hard core",
            "Look-up Table (LUT)"
        ],
        correctAnswer: 3,
    },
    {
        id: 27,
        text: "A system transmits blocks of 8 packets, each packet having 10 data bits, 1 start bit, 1 stop bit. Overhead includes a 6-bit sync code at block start and 2 parity bits at block end. What is the transmission efficiency?",
        options: [
            "74.1%",
            "80.0%",
            "76.3%",
            "72.5%"
        ],
        correctAnswer: 1,
    },
    {
        id: 28,
        text: "Two pulses are applied to a 2-input NAND gate. Pulse A goes HIGH at $t=0$ and LOW at $t=2$ ms. Pulse B goes HIGH at $t=1$ ms and LOW at $t=4$ ms. The output goes LOW at __________ and back HIGH at __________.",
        options: [
            "$t=1$ ms and $t=2$ ms",
            "$t=0$ and $t=4$ ms",
            "$t=1$ ms and $t=4$ ms",
            "$t=0$ and $t=2$ ms"
        ],
        correctAnswer: 1,
    },
    {
        id: 29,
        text: "Add the following hexadecimal numbers: $9F_{16} + 7B_{16}$",
        options: [
            "$11A_{16}$",
            "$19A_{16}$",
            "$1AF_{16}$",
            "$10A_{16}$"
        ],
        correctAnswer: 1,
    },
    {
        id: 30,
        text: "Which of the following statement(s) about Bagging in machine learning is/are correct?\n\n(A). Bagging trains multiple models on different bootstrap samples of the training data.\n(B). Predictions are combined by voting (classification) or averaging (regression).\n(C). Bagging always uses decision trees as base learners.\n\nChoose the correct answer:",
        options: [
            "(A) and (B) only",
            "(B) and (C) only",
            "(A) and (C) only",
            "(A), (B) and (C)"
        ],
        correctAnswer: 1,
    },
    {
        id: 31,
        text: "Which of the following are true about the bias-variance tradeoff?\n\n(A). Increasing model complexity generally reduces bias.\n(B). A high-variance model is likely overfitting the training data.\n(C). Regularization helps to reduce variance at the cost of increasing bias.\n(D). Ensemble methods like bagging primarily reduce bias.\n\nChoose the correct answer:",
        options: [
            "(A), (B) and (C) only",
            "(B) and (D) only",
            "(A) and (B) only",
            "(A), (C) and (D) only"
        ],
        correctAnswer: 1,
    },
    {
        id: 32,
        text: "Best fitting a curve $y = f(x)$ to data points $(x_1,y_1), \\ldots, (x_n,y_n)$ using least squares requires minimization of:",
        options: [
            "$\\sum[y_i - f(x_i)]$",
            "$\\sum|y_i - f(x_i)|$",
            "$\\sum[y_i - f(x_i)]^2$",
            "$\\max|y_i - f(x_i)|$"
        ],
        correctAnswer: 3,
    },
    {
        id: 33,
        text: "Which activation function can output negative values and is zero-centered?",
        options: [
            "ReLU",
            "Sigmoid",
            "Tanh (Hyperbolic Tangent)",
            "Softmax"
        ],
        correctAnswer: 3,
    },
    {
        id: 34,
        text: "Which of the following is/are true about outliers in data science?\n\n(A). Decision trees are generally more robust to outliers than linear regression.\n(B). Z-score and IQR are common methods to detect outliers.\n(C). Outliers should always be removed from the dataset.\n(D). The nature of the problem determines how outliers are treated.\n\nChoose the correct answer:",
        options: [
            "(A), (B) and (D) only",
            "(B) and (C) only",
            "(A) and (C) only",
            "(C) and (D) only"
        ],
        correctAnswer: 1,
    },
    {
        id: 35,
        text: "In a Self-Organizing Map (SOM), the node that is closest to the input vector is called:",
        options: [
            "Kohonen node",
            "Best Matching Unit (BMU)",
            "Winner node",
            "Both BMU and Winner node"
        ],
        correctAnswer: 4,
    },
    {
        id: 36,
        text: "A neuron has 3 inputs with weights 2, 3, 4 and inputs 5, 1, 2 respectively. The bias is 1. Using a linear activation function with constant of proportionality = 1, the output is:",
        options: [
            "24",
            "21",
            "20",
            "18"
        ],
        correctAnswer: 1,
    },
    {
        id: 37,
        text: "Consider the following statements:\n\n(A). Segmentation supports the user's view of memory by dividing it into logical units.\n(B). In paging, physical memory is divided into fixed-size frames.\n(C). In paging, logical memory is divided into fixed-size pages of the same size as frames.\n\nChoose the correct answer:",
        options: [
            "(A) and (B) only",
            "(A), (B) and (C)",
            "(B) and (C) only",
            "(A) only"
        ],
        correctAnswer: 2,
    },
    {
        id: 38,
        text: "Match LIST-I with LIST-II:\n\n| LIST-I | LIST-II |\n|---|---|\n| A. CPU scheduling | I. Selects process from ready queue to allocate CPU |\n| B. Long-term scheduling | II. Controls degree of multiprogramming by swapping |\n| C. Medium-term scheduling | III. Selects processes from job pool to load into memory |\n| D. Short-term scheduling | IV. Determines order of process execution |\n\nChoose the correct answer:",
        options: [
            "A – IV, B – III, C – II, D – I",
            "A – I, B – II, C – III, D – IV",
            "A – III, B – I, C – IV, D – II",
            "A – IV, B – II, C – III, D – I"
        ],
        correctAnswer: 1,
    },
    {
        id: 39,
        text: "Consider a logical address space of 16 pages of 2048 words each, mapped onto physical memory of 64 frames. How many bits are in the logical and physical addresses respectively?",
        options: [
            "15 and 17",
            "15 and 18",
            "14 and 17",
            "16 and 18"
        ],
        correctAnswer: 1,
    },
    {
        id: 40,
        text: "Given processes P1(burst=6, priority=2), P2(burst=2, priority=1), P3(burst=3, priority=3), P4(burst=1, priority=2), P5(burst=4, priority=3), all arriving at $t=0$. Using non-preemptive priority scheduling (lower number = higher priority), the average waiting time is:",
        options: [
            "4.0 ms",
            "4.4 ms",
            "5.2 ms",
            "3.8 ms"
        ],
        correctAnswer: 2,
    },
    {
        id: 41,
        text: "Consider the following statements:\n\n(A). Long-term scheduler controls the degree of multiprogramming.\n(B). Short-term scheduler selects among ready processes and allocates the CPU.\n(C). Medium-term scheduler performs swapping to manage memory.\n\nChoose the correct answer:",
        options: [
            "(B) and (C) only",
            "(A) and (B) only",
            "(B) only",
            "(A), (B) and (C)"
        ],
        correctAnswer: 4,
    },
    {
        id: 42,
        text: "A magnetic disk has: 8 platters, 2 surfaces per platter, 256 tracks per surface, 512 sectors per track, 1024 bytes per sector. Calculate the capacity of the disk.",
        options: [
            "2 GB",
            "1 GB",
            "512 MB",
            "4 GB"
        ],
        correctAnswer: 1,
    },
    {
        id: 43,
        text: "In cycle-stealing mode of DMA, the data transfer occurs:",
        options: [
            "DMA takes complete control of the bus for a block transfer",
            "One word is transferred per bus cycle, interleaved with CPU cycles",
            "CPU is halted until the entire block transfer completes",
            "Transfer occurs only during interrupt service routines"
        ],
        correctAnswer: 2,
    },
    {
        id: 44,
        text: "The correct sequence of fields in an assembly language instruction statement is:",
        options: [
            "Label, Mnemonic, Operand, Comment",
            "Mnemonic, Label, Operand, Comment",
            "Label, Operand, Mnemonic, Comment",
            "Operand, Mnemonic, Label, Comment"
        ],
        correctAnswer: 1,
    },
    {
        id: 45,
        text: "Which instruction in the 8085 microprocessor performs $DE = DE + DE$?",
        options: [
            "DAD D",
            "DAD H",
            "DAD B",
            "DAD SP"
        ],
        correctAnswer: 1,
    },
    {
        id: 46,
        text: "The contents of register A = 45H and register B = 72H. After executing 'SUB B', the contents of A, carry flag (CY) and sign flag (S) are:",
        options: [
            "A = D3H; CY = 1; S = 1",
            "A = 27H; CY = 0; S = 0",
            "A = D3H; CY = 0; S = 1",
            "A = 27H; CY = 1; S = 0"
        ],
        correctAnswer: 1,
    },
    {
        id: 47,
        text: "Which of the following is a non-maskable interrupt in the 8085 microprocessor?",
        options: [
            "INTR",
            "RST 7.5",
            "RST 6.5",
            "TRAP"
        ],
        correctAnswer: 4,
    },
    {
        id: 48,
        text: "The number of wait states needed to interface a slow memory (access time 450 ns) to an 8086 running at 5 MHz ($T$-state = 200 ns, bus cycle = 4 $T$-states) is:",
        options: [
            "1",
            "2",
            "3",
            "0"
        ],
        correctAnswer: 2,
    },
    {
        id: 49,
        text: "__________ is NOT a property required for a secure digital signature scheme.",
        options: [
            "It must be verifiable by anyone",
            "It must be unforgeable",
            "It must be easily memorable by humans",
            "It must be bound to the signer's identity"
        ],
        correctAnswer: 3,
    },
    {
        id: 50,
        text: "The Vigenère cipher is an example of:",
        options: [
            "Monoalphabetic substitution cipher",
            "Polyalphabetic substitution cipher",
            "Transposition cipher",
            "Product cipher"
        ],
        correctAnswer: 2,
    },
    {
        id: 51,
        text: "In DES, the S-box operation takes a __________ input and produces a __________ output.",
        options: [
            "48-bit; 32-bit",
            "6-bit; 4-bit",
            "32-bit; 48-bit",
            "4-bit; 6-bit"
        ],
        correctAnswer: 2,
    },
    {
        id: 52,
        text: "The Playfair cipher encrypts how many letters at a time?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        correctAnswer: 2,
    },
    {
        id: 53,
        text: "A stateful inspection firewall operates at which layer of the OSI model?",
        options: [
            "Network layer only",
            "Transport layer only",
            "Network and Transport layers",
            "Application layer only"
        ],
        correctAnswer: 3,
    },
    {
        id: 54,
        text: "The security of the RSA cryptosystem is based on the computational difficulty of:",
        options: [
            "Discrete logarithm problem",
            "Integer factorization problem",
            "Diffie-Hellman problem",
            "Elliptic curve problem"
        ],
        correctAnswer: 2,
    },
    {
        id: 55,
        text: "Euler's theorem states: if $\\gcd(a,n) = 1$, then $a^{\\phi(n)} \\equiv 1 \\pmod{n}$. Fermat's little theorem is a special case when $n$ is prime. For $n = 7$ and $a = 3$, the value of $3^6 \\mod 7$ is:",
        options: [
            "6",
            "3",
            "1",
            "0"
        ],
        correctAnswer: 3,
    },
    {
        id: 56,
        text: "Match LIST-I with LIST-II:\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Dijkstra's single-source shortest path | I. Greedy; cannot handle negative edge weights |\n| B. Bellman-Ford algorithm | II. Dynamic programming; handles negative weights |\n| C. Topological Sort | III. Greedy; uses Union-Find to avoid cycles |\n| D. Minimum Spanning Tree (Kruskal) | IV. Applicable to Directed Acyclic Graphs (DAGs) |\n\nChoose the correct answer:",
        options: [
            "A – I, B – II, C – IV, D – III",
            "A – II, B – I, C – III, D – IV",
            "A – I, B – IV, C – II, D – III",
            "A – III, B – II, C – IV, D – I"
        ],
        correctAnswer: 1,
    },
    {
        id: 57,
        text: "Using hash function $h(key) = key \\mod 11$ with linear probing, keys 22, 33, 44, 55, 66, 11, 77 are inserted into a table of size 11. What is the location of key 77?",
        options: [
            "0",
            "1",
            "2",
            "3"
        ],
        correctAnswer: 2,
    },
    {
        id: 58,
        text: "The best-case time complexity of searching for an element in a singly linked list of $n$ nodes is:",
        options: [
            "$O(n)$",
            "$O(\\log n)$",
            "$O(1)$",
            "$O(n \\log n)$"
        ],
        correctAnswer: 3,
    },
    {
        id: 59,
        text: "A list of $n$ strings, each of maximum length $m$, is sorted using merge sort. The worst-case time complexity is:",
        options: [
            "$O(mn \\log n)$",
            "$O(mn^2)$",
            "$O(n \\log n)$",
            "$O(m^2 n)$"
        ],
        correctAnswer: 1,
    },
    {
        id: 60,
        text: "Which of the following statements is/are NOT true?\n\n(A). Given preorder and inorder traversals, a unique binary tree can always be reconstructed.\n(B). BFS can be used to find shortest paths in unweighted graphs.\n(C). AVL tree is always a complete binary tree.\n(D). In-order traversal of a BST yields keys in sorted order.\n\nChoose the correct answer:",
        options: [
            "(C) only",
            "(A) and (C) only",
            "(B) and (D) only",
            "(A) and (D) only"
        ],
        correctAnswer: 1,
    },
    {
        id: 61,
        text: "In quicksort, if the pivot always divides the array into two parts of sizes 1 and $n-1$, and $T(n)$ is the number of comparisons required, then:",
        options: [
            "$T(n) \\leq T(n-1) + n$",
            "$T(n) \\leq 2T(n/2) + n$",
            "$T(n) \\leq T(n/3) + T(2n/3) + n$",
            "$T(n) \\leq T(n/4) + T(3n/4) + n$"
        ],
        correctAnswer: 1,
    },
    {
        id: 62,
        text: "Let A be the Vertex Cover problem (find a vertex cover of size $\\leq k$) and B be the Independent Set problem. Which of the following is true?",
        options: [
            "A is NP-complete but B is not",
            "B is NP-complete but A is not",
            "Both A and B are NP-complete",
            "Neither A nor B is NP-complete"
        ],
        correctAnswer: 3,
    },
    {
        id: 63,
        text: "Consider:\nS1: Prim's algorithm always produces the same MST as Kruskal's algorithm.\nS2: Both Prim's and Kruskal's algorithms are greedy algorithms.\n\nChoose the correct option:",
        options: [
            "S1 is true but S2 is false",
            "Both S1 and S2 are true",
            "S2 is true but S1 is false",
            "Both S1 and S2 are false"
        ],
        correctAnswer: 3,
    },
    {
        id: 64,
        text: "Match LIST-I with LIST-II:\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Stack | I. FIFO — used in BFS |\n| B. Queue | II. LIFO — used in DFS and function calls |\n| C. Priority Queue | III. Elements inserted/deleted from both ends |\n| D. Deque (Double-ended queue) | IV. Element with highest priority is served first; used in Dijkstra's algorithm |\n\nChoose the correct answer:",
        options: [
            "A – II, B – I, C – IV, D – III",
            "A – I, B – II, C – III, D – IV",
            "A – III, B – IV, C – I, D – II",
            "A – II, B – III, C – I, D – IV"
        ],
        correctAnswer: 1,
    },
    {
        id: 65,
        text: "Rank the following functions by order of asymptotic growth (slowest to fastest):\n\n(A). $n!$\n(B). $2^n$\n(C). $n^3$\n(D). $n \\log n$\n(E). $n^{1/2}$\n\nChoose the correct order:",
        options: [
            "(E), (D), (C), (B), (A)",
            "(D), (E), (C), (B), (A)",
            "(E), (D), (B), (C), (A)",
            "(D), (C), (E), (B), (A)"
        ],
        correctAnswer: 1,
    },
    {
        id: 66,
        text: "Match LIST-I with LIST-II:\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Binary Search | I. $O(\\log n)$ |\n| B. Heap Sort | II. $O(n \\log n)$ |\n| C. 0/1 Knapsack (DP) | III. $O(nW)$ where $W$ = capacity |\n| D. Matrix Multiplication (Strassen) | IV. $O(n^{2.807})$ |\n\nChoose the correct answer:",
        options: [
            "A – I, B – II, C – III, D – IV",
            "A – II, B – I, C – IV, D – III",
            "A – I, B – III, C – II, D – IV",
            "A – IV, B – III, C – I, D – II"
        ],
        correctAnswer: 1,
    },
    {
        id: 67,
        text: "Eight signals, each requiring 3000 Hz, are multiplexed using FDM. The guard bands are 500 Hz wide. What is the minimum bandwidth required for the multiplexed channel?",
        options: [
            "27500 Hz",
            "28000 Hz",
            "24000 Hz",
            "31500 Hz"
        ],
        correctAnswer: 2,
    },
    {
        id: 68,
        text: "In an HTTP response message, the first line is called the __________.",
        options: [
            "Header Line",
            "Status Line",
            "Request Line",
            "Entity Line"
        ],
        correctAnswer: 2,
    },
    {
        id: 69,
        text: "DHCP uses __________ protocol because it needs to broadcast messages before a client has an IP address.",
        options: [
            "TCP",
            "UDP",
            "ICMP",
            "ARP"
        ],
        correctAnswer: 2,
    },
    {
        id: 70,
        text: "Which of the following statements are correct?\n\n(A). SMTP is used to send mail from client to server.\n(B). IMAP allows users to organize mail on the server.\n(C). POP3 downloads all mail to the client and deletes from server by default.\n\nChoose the correct answer:",
        options: [
            "(A) and (B) only",
            "(B) and (C) only",
            "(A) and (C) only",
            "(A), (B) and (C)"
        ],
        correctAnswer: 4,
    },
    {
        id: 71,
        text: "Using bit stuffing, the data pattern 01111110 (which matches the flag byte 01111110) is transmitted. What is the stuffed output?",
        options: [
            "011111010",
            "011111100",
            "0111110110",
            "0111110010"
        ],
        correctAnswer: 2,
    },
    {
        id: 72,
        text: "Arrange the following OSI layers in correct order from bottom to top:\n\n(A). Network\n(B). Physical\n(C). Application\n(D). Data Link\n(E). Transport\n\nChoose the correct answer:",
        options: [
            "(B), (D), (A), (E), (C)",
            "(B), (A), (D), (E), (C)",
            "(D), (B), (A), (C), (E)",
            "(B), (D), (E), (A), (C)"
        ],
        correctAnswer: 1,
    },
    {
        id: 73,
        text: "The correct sequence of events during a typical instruction fetch cycle is:\n\n(A). PC → MAR\n(B). MAR → Memory; Memory → MDR\n(C). MDR → IR\n(D). PC = PC + 1\n\nChoose the correct answer:",
        options: [
            "(A), (B), (C), (D)",
            "(A), (D), (B), (C)",
            "(A), (B), (D), (C)",
            "(D), (A), (B), (C)"
        ],
        correctAnswer: 3,
    },
    {
        id: 74,
        text: "Which of the following sequences CANNOT be obtained as output from a stack with input sequence 1, 2, 3, 4, 5 (in order)?",
        options: [
            "3, 2, 1, 4, 5",
            "5, 4, 3, 2, 1",
            "4, 5, 3, 2, 1",
            "1, 5, 4, 3, 2"
        ],
        correctAnswer: 4,
    },
    {
        id: 75,
        text: "Let $G$ be a directed graph with vertices 1 to 50. There is an edge from vertex $i$ to vertex $j$ if $j = i+1$ or $j = 2i$. The minimum number of edges in a path from vertex 1 to vertex 50 is:",
        options: [
            "6",
            "7",
            "8",
            "9"
        ],
        correctAnswer: 1,
    },
];
