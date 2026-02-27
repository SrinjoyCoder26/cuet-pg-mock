import { ExamConfig, Question } from "./examTypes";

export const examConfig: ExamConfig = {
    title: "CUET PG 2026 - Mock Test Series VI",
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
        text: "Consider the following statements about RAID levels:\n\n(A). RAID 0 uses striping with no redundancy.\n(B). RAID 1 uses mirroring and requires double the storage.\n(C). RAID 5 uses distributed parity and can tolerate loss of any two disks.\n(D). RAID 6 uses two independent parity blocks and can tolerate loss of any two disks.\n\nChoose the correct answer:",
        options: [
            "(A), (B) and (D) only",
            "(A), (C) and (D) only",
            "(B), (C) and (D) only",
            "(A), (B), (C) and (D)"
        ],
        correctAnswer: 1,
    },
    {
        id: 2,
        text: "In burst-mode DMA, once the DMA controller seizes the bus, it holds the bus until __________.",
        options: [
            "One word is transferred",
            "The CPU requests it back",
            "The entire block transfer is complete",
            "An interrupt is received"
        ],
        correctAnswer: 3,
    },
    {
        id: 3,
        text: "A direct-mapped cache has 128 lines. Main memory has 4096 blocks of 64 bytes each. How many bits are used for the cache line index?",
        options: [
            "5",
            "6",
            "7",
            "8"
        ],
        correctAnswer: 3,
    },
    {
        id: 4,
        text: "Match LIST-I with LIST-II:\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Deadlock Prevention | I. Banker's algorithm; requires advance knowledge of maximum resource needs |\n| B. Deadlock Avoidance | II. Preempting resources or killing processes after deadlock is found |\n| C. Deadlock Detection | III. Periodically run an algorithm to check for circular wait |\n| D. Deadlock Recovery | IV. Eliminate one of the four necessary conditions for deadlock |\n\nChoose the correct answer:",
        options: [
            "A – IV, B – I, C – III, D – II",
            "A – I, B – IV, C – II, D – III",
            "A – III, B – II, C – I, D – IV",
            "A – IV, B – III, C – I, D – II"
        ],
        correctAnswer: 1,
    },
    {
        id: 5,
        text: "Which of the following is shared among threads of the same process?",
        options: [
            "Stack",
            "Program counter",
            "Register set",
            "Heap memory"
        ],
        correctAnswer: 4,
    },
    {
        id: 6,
        text: "Match LIST-I with LIST-II:\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Compaction | I. Moving processes in/out of main memory to free space |\n| B. Fragmentation | II. Shuffling memory contents to place all free memory together |\n| C. Swapping | III. Excessive paging causing more time spent paging than executing |\n| D. Thrashing | IV. Wasted memory space that cannot be allocated due to its size or location |\n\nChoose the correct answer:",
        options: [
            "A – II, B – IV, C – I, D – III",
            "A – I, B – II, C – III, D – IV",
            "A – IV, B – III, C – II, D – I",
            "A – III, B – I, C – IV, D – II"
        ],
        correctAnswer: 1,
    },
    {
        id: 7,
        text: "Which of the following operations is NOT closed under the class of regular languages?",
        options: [
            "Union",
            "Intersection",
            "Kleene star",
            "Infinite union"
        ],
        correctAnswer: 4,
    },
    {
        id: 8,
        text: "Which of the following is true about Context-Free Languages (CFLs)?\n\n(A). CFLs are closed under union.\n(B). CFLs are closed under intersection.\n(C). CFLs are closed under complementation.\n(D). CFLs are closed under concatenation.\n\nChoose the correct answer:",
        options: [
            "(A) and (D) only",
            "(A), (B) and (D) only",
            "(B) and (C) only",
            "(A), (B), (C) and (D)"
        ],
        correctAnswer: 1,
    },
    {
        id: 9,
        text: "A language $L$ is said to be recursively enumerable if:",
        options: [
            "There is a Turing machine that accepts every string in L and rejects every string not in L",
            "There is a Turing machine that accepts every string in L but may loop on strings not in L",
            "L can be recognized by a pushdown automaton",
            "L can be recognized by a finite automaton with two stacks"
        ],
        correctAnswer: 2,
    },
    {
        id: 10,
        text: "Which of the following languages is regular?",
        options: [
            "$\\{a^n b^n \\mid n \\geq 0\\}$",
            "$\\{a^n \\mid n$ is a prime$\\}$",
            "$\\{w \\in \\{a,b\\}^* \\mid w$ contains equal number of $a$'s and $b$'s$\\}$",
            "$\\{a^n \\mid n$ is divisible by $3\\}$"
        ],
        correctAnswer: 4,
    },
    {
        id: 11,
        text: "A Pushdown Automaton (PDA) accepts a language by empty stack. Which of the following is equivalent?\n\n(A). Acceptance by final state\n(B). The language accepted is always context-free\n(C). Every CFL can be accepted by a deterministic PDA\n(D). PDAs are equivalent in power to Turing machines\n\nChoose the correct answer:",
        options: [
            "(A) and (B) only",
            "(B) and (D) only",
            "(A), (B) and (C) only",
            "(B) and (C) only"
        ],
        correctAnswer: 1,
    },
    {
        id: 12,
        text: "A host has IP address 172.16.45.130 with subnet mask 255.255.255.192. What is the broadcast address of its subnet?",
        options: [
            "172.16.45.191",
            "172.16.45.255",
            "172.16.45.127",
            "172.16.45.193"
        ],
        correctAnswer: 1,
    },
    {
        id: 13,
        text: "Match LIST-I with LIST-II:\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Minimax algorithm | I. Extension of minimax handling probabilistic events |\n| B. Alpha-Beta pruning | II. Simulation-based search using random playouts |\n| C. Monte Carlo Tree Search | III. Optimization of minimax that eliminates branches which cannot affect outcome |\n| D. Expectimax | IV. Optimal strategy for two-player zero-sum games with perfect information |\n\nChoose the correct answer:",
        options: [
            "A – IV, B – III, C – II, D – I",
            "A – III, B – IV, C – I, D – II",
            "A – I, B – II, C – IV, D – III",
            "A – IV, B – II, C – III, D – I"
        ],
        correctAnswer: 1,
    },
    {
        id: 14,
        text: "In a semantic network, which of the following represents the relationship between a class and its superclass?",
        options: [
            "has-part",
            "is-a",
            "instance-of",
            "associated-with"
        ],
        correctAnswer: 2,
    },
    {
        id: 15,
        text: "The minimal SOP expression for the function $F(A,B,C,D) = \\Sigma m(0,1,3,7,8,9,11,15)$ is:",
        options: [
            "$A'C' + CD + A'B$",
            "$BD + A'C' + ACD'$",
            "$A'D + CD + AB'$",
            "$B'C' + CD$"
        ],
        correctAnswer: 4,
    },
    {
        id: 16,
        text: "Which of the following correctly converts 'All students who study hard pass the exam' into First Order Logic?",
        options: [
            "$\\exists x\\ (Student(x) \\wedge StudiesHard(x) \\to Passes(x))$",
            "$\\forall x\\ (Student(x) \\wedge StudiesHard(x) \\to Passes(x))$",
            "$\\forall x\\ (Student(x) \\to StudiesHard(x) \\wedge Passes(x))$",
            "$\\exists x\\ (Student(x) \\to StudiesHard(x) \\wedge Passes(x))$"
        ],
        correctAnswer: 2,
    },
    {
        id: 17,
        text: "Match LIST-I with LIST-II:\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Modus Ponens | I. Data-driven inference; starts from known facts to derive conclusions |\n| B. Modus Tollens | II. From $(P \\to Q)$ and $\\neg Q$, infer $\\neg P$ |\n| C. Resolution | III. From $P$ and $(P \\to Q)$, infer $Q$ |\n| D. Forward Chaining | IV. General inference rule used in automated theorem proving; derives the empty clause for contradiction |\n\nChoose the correct answer:",
        options: [
            "A – III, B – II, C – IV, D – I",
            "A – II, B – III, C – I, D – IV",
            "A – I, B – IV, C – II, D – III",
            "A – IV, B – I, C – III, D – II"
        ],
        correctAnswer: 1,
    },
    {
        id: 18,
        text: "Consider: $F: \\exists x\\ \\forall y\\ R(x,y)$. Which of the following are implied by $F$?\n\n(A). $\\forall y\\ \\exists x\\ R(x,y)$\n(B). $\\exists x\\ \\exists y\\ R(x,y)$\n(C). $\\forall x\\ \\exists y\\ R(x,y)$\n(D). $\\neg \\forall x\\ \\forall y\\ \\neg R(x,y)$\n\nChoose the correct answer:",
        options: [
            "(A), (B) and (D) only",
            "(B) and (D) only",
            "(A) and (C) only",
            "(A), (B), (C) and (D)"
        ],
        correctAnswer: 1,
    },
    {
        id: 19,
        text: "Match LIST-I with LIST-II:\n\n| LIST-I | LIST-II |\n|---|---|\n| A. $\\int x e^x dx$ | I. $x/2 - \\sin(2x)/4 + C$ |\n| B. $\\int \\ln(x) dx$ | II. $\\arctan(x) + C$ |\n| C. $\\int 1/(1+x^2) dx$ | III. $x \\ln(x) - x + C$ |\n| D. $\\int \\sin^2(x) dx$ | IV. $e^x(x - 1) + C$ |\n\nChoose the correct answer:",
        options: [
            "A – IV, B – III, C – II, D – I",
            "A – III, B – IV, C – I, D – II",
            "A – I, B – II, C – III, D – IV",
            "A – IV, B – II, C – III, D – I"
        ],
        correctAnswer: 1,
    },
    {
        id: 20,
        text: "The rank of the matrix $A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 3 & 6 & 9 \\end{bmatrix}$ is:",
        options: [
            "3",
            "2",
            "1",
            "0"
        ],
        correctAnswer: 3,
    },
    {
        id: 21,
        text: "Using the trapezoidal rule with $n=4$ to evaluate $\\int_0^1 x^2\\, dx$, the approximate value is:",
        options: [
            "0.3438",
            "0.3750",
            "0.2500",
            "0.3333"
        ],
        correctAnswer: 1,
    },
    {
        id: 22,
        text: "If $\\lambda$ is an eigenvalue of matrix $A$, then which of the following is an eigenvalue of $(A^2 - 3A + 2I)$?",
        options: [
            "$\\lambda^2 - 3\\lambda + 2$",
            "$2\\lambda - 3$",
            "$\\lambda^2 + 2$",
            "$3\\lambda - 2$"
        ],
        correctAnswer: 1,
    },
    {
        id: 23,
        text: "The function $f(x) = |x - 2|$ is:",
        options: [
            "Differentiable everywhere",
            "Continuous but not differentiable at $x = 2$",
            "Neither continuous nor differentiable at $x = 2$",
            "Differentiable but not continuous at $x = 2$"
        ],
        correctAnswer: 2,
    },
    {
        id: 24,
        text: "The sum of the infinite geometric series $1 + 1/3 + 1/9 + 1/27 + \\ldots$ is:",
        options: [
            "$3/2$",
            "$2$",
            "$4/3$",
            "$5/3$"
        ],
        correctAnswer: 1,
    },
    {
        id: 25,
        text: "Using De Morgan's theorem, the complement of $(A + B)(C + D)$ is:",
        options: [
            "$A'B'C'D'$",
            "$(A'B') + (C'D')$",
            "$A'B' + C'D'$",
            "$(A+B)(C+D)$"
        ],
        correctAnswer: 3,
    },
    {
        id: 26,
        text: "A 4-bit ring counter is initialized to 1000. After 6 clock pulses, the state will be:",
        options: [
            "0100",
            "0010",
            "1000",
            "0001"
        ],
        correctAnswer: 2,
    },
    {
        id: 27,
        text: "CRC uses __________ as the error-detection mechanism.",
        options: [
            "Polynomial division over GF(2)",
            "Checksum addition",
            "Hamming distance",
            "Parity bit grouping"
        ],
        correctAnswer: 1,
    },
    {
        id: 28,
        text: "A JK flip-flop with $J=1$ and $K=1$ is in state $Q=0$. After one clock pulse, the state $Q$ will be:",
        options: [
            "0",
            "1",
            "Unchanged",
            "Undefined"
        ],
        correctAnswer: 2,
    },
    {
        id: 29,
        text: "The 8-bit 2's complement representation of $-45$ is:",
        options: [
            "11010011",
            "11010010",
            "10101011",
            "10110011"
        ],
        correctAnswer: 1,
    },
    {
        id: 30,
        text: "Which of the following statements about data normalization are correct?\n\n(A). Min-max normalization scales data to $[0,1]$ range.\n(B). Z-score normalization results in data with mean 0 and standard deviation 1.\n(C). Normalization is always required before applying any machine learning algorithm.\n(D). Normalization is sensitive to outliers in the case of min-max scaling.\n\nChoose the correct answer:",
        options: [
            "(A), (B) and (D) only",
            "(A) and (B) only",
            "(B), (C) and (D) only",
            "(A), (B), (C) and (D)"
        ],
        correctAnswer: 1,
    },
    {
        id: 31,
        text: "Which of the following are true about Support Vector Machines (SVM)?\n\n(A). SVM finds a hyperplane that maximizes the margin between classes.\n(B). The kernel trick allows SVM to operate in high-dimensional feature spaces.\n(C). SVM is only applicable to linearly separable data.\n(D). Support vectors are the data points closest to the decision boundary.\n\nChoose the correct answer:",
        options: [
            "(A), (B) and (D) only",
            "(A) and (D) only",
            "(B) and (C) only",
            "(A), (B), (C) and (D)"
        ],
        correctAnswer: 1,
    },
    {
        id: 32,
        text: "In Ridge Regression (L2 regularization), the cost function minimized is:",
        options: [
            "$\\sum(y_i - \\hat{y}_i)^2 + \\lambda \\sum|\\beta_j|$",
            "$\\sum(y_i - \\hat{y}_i)^2 + \\lambda \\sum \\beta_j^2$",
            "$\\sum|y_i - \\hat{y}_i| + \\lambda \\sum \\beta_j^2$",
            "$\\sum(y_i - \\hat{y}_i)^2 \\times \\lambda \\sum \\beta_j^2$"
        ],
        correctAnswer: 2,
    },
    {
        id: 33,
        text: "In backpropagation, the vanishing gradient problem occurs primarily with which activation function?",
        options: [
            "ReLU",
            "Leaky ReLU",
            "Sigmoid",
            "Tanh"
        ],
        correctAnswer: 3,
    },
    {
        id: 34,
        text: "Which of the following statements about k-means clustering are true?\n\n(A). k-means requires specifying the number of clusters in advance.\n(B). k-means is sensitive to the initial placement of centroids.\n(C). k-means always converges to the global optimum.\n(D). k-means uses Euclidean distance by default.\n\nChoose the correct answer:",
        options: [
            "(A), (B) and (D) only",
            "(A) and (D) only",
            "(B), (C) and (D) only",
            "(A), (B), (C) and (D)"
        ],
        correctAnswer: 1,
    },
    {
        id: 35,
        text: "For a binary classifier with $TP=80$, $FP=20$, $FN=40$, $TN=60$, the F1-score is:",
        options: [
            "0.727",
            "0.667",
            "0.800",
            "0.750"
        ],
        correctAnswer: 1,
    },
    {
        id: 36,
        text: "Principal Component Analysis (PCA) finds directions of maximum __________ in the data.",
        options: [
            "Mean",
            "Variance",
            "Correlation",
            "Entropy"
        ],
        correctAnswer: 2,
    },
    {
        id: 37,
        text: "Consider a system with 3 page frames and reference string: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5. Using FIFO page replacement, the number of page faults is:",
        options: [
            "9",
            "8",
            "10",
            "7"
        ],
        correctAnswer: 1,
    },
    {
        id: 38,
        text: "Match LIST-I with LIST-II:\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Shortest Job First (SJF) | I. CPU is assigned to process with highest priority; may cause starvation |\n| B. Round Robin | II. Optimal average waiting time for non-preemptive scheduling; requires knowing burst times |\n| C. Multilevel Queue | III. Processes divided into separate queues; each queue has its own scheduling algorithm |\n| D. Priority Scheduling | IV. Time quantum given to each process in cyclic order; no starvation |\n\nChoose the correct answer:",
        options: [
            "A – II, B – IV, C – III, D – I",
            "A – I, B – II, C – IV, D – III",
            "A – IV, B – III, C – II, D – I",
            "A – II, B – I, C – III, D – IV"
        ],
        correctAnswer: 1,
    },
    {
        id: 39,
        text: "Consider a page table with 2-level paging. Virtual address is 32-bit, page size is 4 KB, each page table entry is 4 bytes. How many bits are used for each level of the page table index?",
        options: [
            "8 bits each",
            "10 bits each",
            "12 bits each",
            "16 bits each"
        ],
        correctAnswer: 2,
    },
    {
        id: 40,
        text: "In the classic Producer-Consumer problem using semaphores, which semaphore ensures mutual exclusion on the shared buffer?",
        options: [
            "empty",
            "full",
            "mutex",
            "count"
        ],
        correctAnswer: 3,
    },
    {
        id: 41,
        text: "Consider the following statements about instruction pipelining:\n\n(A). A structural hazard occurs when two instructions need the same hardware resource simultaneously.\n(B). Data hazards can be mitigated by operand forwarding.\n(C). Control hazards always require flushing the pipeline.\n(D). Increasing pipeline stages always increases throughput.\n\nChoose the correct answer:",
        options: [
            "(A) and (B) only",
            "(A), (B) and (D) only",
            "(B), (C) and (D) only",
            "(A), (B), (C) and (D)"
        ],
        correctAnswer: 1,
    },
    {
        id: 42,
        text: "In which addressing mode is the effective address computed by adding a displacement to the base register?",
        options: [
            "Immediate",
            "Register indirect",
            "Base-displacement (Based)",
            "Indexed"
        ],
        correctAnswer: 3,
    },
    {
        id: 43,
        text: "In the 8085 microprocessor, the instruction 'MOV M, A' means:",
        options: [
            "Move the contents of memory addressed by HL to register A",
            "Move the contents of register A to memory addressed by HL",
            "Move immediate data to memory",
            "Move register A to register M"
        ],
        correctAnswer: 2,
    },
    {
        id: 44,
        text: "Match the 8085 interrupt with its vector address:\n\n| Interrupt | Vector Address |\n|---|---|\n| A. RST 5.5 | ? |\n| B. RST 6.5 | ? |\n| C. RST 7.5 | ? |\n| D. TRAP | ? |\n\nChoose the correct vector address sequence (A, B, C, D):",
        options: [
            "002CH, 0034H, 003CH, 0024H",
            "0024H, 002CH, 0034H, 003CH",
            "003CH, 002CH, 0034H, 0024H",
            "002CH, 003CH, 0034H, 0024H"
        ],
        correctAnswer: 1,
    },
    {
        id: 45,
        text: "Which 8085 instruction is used to load the stack pointer with the HL register pair content?",
        options: [
            "SPHL",
            "LHLD",
            "XTHL",
            "XCHG"
        ],
        correctAnswer: 1,
    },
    {
        id: 46,
        text: "After executing 'XRA A' instruction in 8085, which of the following flags are set?\n\n(A). Zero flag (Z)\n(B). Carry flag (CY)\n(C). Sign flag (S)\n(D). Parity flag (P)\n\nChoose the correct answer:",
        options: [
            "(A) and (D) only",
            "(A), (B) and (D) only",
            "(A) only",
            "(A), (C) and (D) only"
        ],
        correctAnswer: 1,
    },
    {
        id: 47,
        text: "The 8255 Programmable Peripheral Interface has __________ programmable I/O ports.",
        options: [
            "2",
            "3",
            "4",
            "8"
        ],
        correctAnswer: 2,
    },
    {
        id: 48,
        text: "In the 8086 microprocessor, the physical address is formed by:",
        options: [
            "Adding the segment register value to the offset",
            "Shifting the segment register left by 4 bits and adding the offset",
            "Shifting the offset left by 4 bits and adding the segment register",
            "XORing the segment register with the offset"
        ],
        correctAnswer: 2,
    },
    {
        id: 49,
        text: "AES operates on blocks of __________ bits and supports key sizes of __________.",
        options: [
            "64 bits; 56, 112, or 168 bits",
            "128 bits; 128, 192, or 256 bits",
            "64 bits; 128 or 256 bits",
            "256 bits; 128 or 256 bits"
        ],
        correctAnswer: 2,
    },
    {
        id: 50,
        text: "Which of the following properties must a cryptographic hash function satisfy?\n\n(A). Pre-image resistance (one-way property)\n(B). Second pre-image resistance\n(C). Collision resistance\n(D). Reversibility with a secret key\n\nChoose the correct answer:",
        options: [
            "(A), (B) and (C) only",
            "(A) and (C) only",
            "(B) and (D) only",
            "(A), (B), (C) and (D)"
        ],
        correctAnswer: 1,
    },
    {
        id: 51,
        text: "In RSA encryption with public key $(e=3, n=33)$, encrypting the message $m=5$ gives ciphertext:",
        options: [
            "12",
            "125",
            "26",
            "2"
        ],
        correctAnswer: 3,
    },
    {
        id: 52,
        text: "In Diffie-Hellman key exchange, if $p=23$, $g=5$, Alice's private key $a=6$, Bob's private key $b=15$, Alice's public key $A = 5^6 \\mod 23$ is:",
        options: [
            "8",
            "7",
            "11",
            "12"
        ],
        correctAnswer: 1,
    },
    {
        id: 53,
        text: "A Man-in-the-Middle (MITM) attack is best mitigated by:",
        options: [
            "Firewalls",
            "Digital certificates and mutual authentication",
            "Intrusion Detection Systems",
            "Strong passwords"
        ],
        correctAnswer: 2,
    },
    {
        id: 54,
        text: "Which of the following is a stream cipher?",
        options: [
            "AES",
            "DES",
            "RC4",
            "Blowfish"
        ],
        correctAnswer: 3,
    },
    {
        id: 55,
        text: "In RSA, if $p=5$, $q=11$, then $\\phi(n) = \\phi(55)$ is:",
        options: [
            "54",
            "40",
            "50",
            "44"
        ],
        correctAnswer: 2,
    },
    {
        id: 56,
        text: "Match LIST-I with LIST-II:\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Longest Common Subsequence | I. Greedy algorithm; optimal substructure |\n| B. Matrix Chain Multiplication | II. NP-hard; dynamic programming gives $O(n^2 \\cdot 2^n)$ solution |\n| C. Travelling Salesman Problem | III. $O(mn)$ DP solution |\n| D. Activity Selection | IV. $O(n^3)$ DP solution; finds optimal parenthesization |\n\nChoose the correct answer:",
        options: [
            "A – III, B – IV, C – II, D – I",
            "A – IV, B – III, C – I, D – II",
            "A – I, B – II, C – IV, D – III",
            "A – III, B – II, C – IV, D – I"
        ],
        correctAnswer: 1,
    },
    {
        id: 57,
        text: "Which collision resolution technique uses a secondary hash function to determine the probe sequence?",
        options: [
            "Linear probing",
            "Quadratic probing",
            "Double hashing",
            "Chaining"
        ],
        correctAnswer: 3,
    },
    {
        id: 58,
        text: "The height of a complete binary tree with $n$ nodes is:",
        options: [
            "$O(n)$",
            "$O(n \\log n)$",
            "$O(\\log n)$",
            "$O(\\sqrt{n})$"
        ],
        correctAnswer: 3,
    },
    {
        id: 59,
        text: "Solving $T(n) = 4T(n/2) + n$ using the Master Theorem gives:",
        options: [
            "$O(n \\log n)$",
            "$O(n^2)$",
            "$O(n^2 \\log n)$",
            "$O(n^{\\log_2 4})$"
        ],
        correctAnswer: 2,
    },
    {
        id: 60,
        text: "Which of the following are true?\n\n(A). Dijkstra's algorithm fails on graphs with negative edge weights.\n(B). Topological sort can be applied to any directed graph.\n(C). Prim's algorithm starts with an arbitrary vertex and grows the MST.\n(D). DFS on a directed graph can be used to detect cycles.\n\nChoose the correct answer:",
        options: [
            "(A), (C) and (D) only",
            "(A) and (C) only",
            "(B) and (D) only",
            "(A), (B), (C) and (D)"
        ],
        correctAnswer: 1,
    },
    {
        id: 61,
        text: "The recurrence relation for Merge Sort is $T(n) = 2T(n/2) + n$. By Master Theorem, this solves to:",
        options: [
            "$O(n)$",
            "$O(n \\log n)$",
            "$O(n^2)$",
            "$O(\\log n)$"
        ],
        correctAnswer: 2,
    },
    {
        id: 62,
        text: "Which of the following problems is known to be in P (polynomial time solvable)?",
        options: [
            "Graph 3-colouring",
            "Subset sum",
            "Shortest path in an unweighted graph",
            "Hamiltonian cycle"
        ],
        correctAnswer: 3,
    },
    {
        id: 63,
        text: "Consider a max-heap: 90, 75, 85, 60, 70, 65, 80. After deleting the root and restoring the heap property, the new root is:",
        options: [
            "80",
            "85",
            "75",
            "65"
        ],
        correctAnswer: 2,
    },
    {
        id: 64,
        text: "Match LIST-I with LIST-II:\n\n| LIST-I | LIST-II |\n|---|---|\n| A. AVL Tree | I. Used for prefix-based string searching |\n| B. B-Tree | II. Self-balancing BST used in databases; allows multiple keys per node |\n| C. Red-Black Tree | III. Self-balancing BST; balance factor at each node is –1, 0, or 1 |\n| D. Trie | IV. Self-balancing BST used in C++ STL map; $O(\\log n)$ operations |\n\nChoose the correct answer:",
        options: [
            "A – III, B – II, C – IV, D – I",
            "A – II, B – III, C – I, D – IV",
            "A – I, B – IV, C – II, D – III",
            "A – IV, B – I, C – III, D – II"
        ],
        correctAnswer: 1,
    },
    {
        id: 65,
        text: "Which of the following correctly orders the given functions from lowest to highest order of growth?\n\n(A). $\\log(n!)$\n(B). $n \\log n$\n(C). $2^{\\log n}$\n(D). $n^2$\n\nChoose the correct order:",
        options: [
            "(C) < (B) < (A) < (D)",
            "(C) < (A) < (B) < (D)",
            "(B) < (C) < (A) < (D)",
            "(A) < (C) < (B) < (D)"
        ],
        correctAnswer: 2,
    },
    {
        id: 66,
        text: "Match LIST-I with LIST-II:\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Insertion Sort | I. $O(n^2)$; always makes $n-1$ passes; not stable |\n| B. Radix Sort | II. $O(n \\log n)$; unstable; worst case $O(n^2)$ |\n| C. Quick Sort (average) | III. $O(nk)$ where $k$ = number of digits; stable |\n| D. Selection Sort | IV. $O(n^2)$; efficient for nearly sorted arrays; stable |\n\nChoose the correct answer:",
        options: [
            "A – IV, B – III, C – II, D – I",
            "A – II, B – IV, C – I, D – III",
            "A – I, B – III, C – IV, D – II",
            "A – III, B – I, C – II, D – IV"
        ],
        correctAnswer: 1,
    },
    {
        id: 67,
        text: "Which of the following correctly distinguishes TCP from UDP?\n\n(A). TCP provides reliable, ordered delivery; UDP does not.\n(B). UDP has lower overhead than TCP.\n(C). TCP uses a three-way handshake for connection establishment.\n(D). UDP is used by DNS and DHCP because they require guaranteed delivery.\n\nChoose the correct answer:",
        options: [
            "(A), (B) and (C) only",
            "(A) and (B) only",
            "(B), (C) and (D) only",
            "(A), (B), (C) and (D)"
        ],
        correctAnswer: 1,
    },
    {
        id: 68,
        text: "Distance Vector routing uses __________ algorithm, while Link State routing uses __________ algorithm.",
        options: [
            "Bellman-Ford; Dijkstra's",
            "Dijkstra's; Bellman-Ford",
            "Prim's; Kruskal's",
            "Kruskal's; Prim's"
        ],
        correctAnswer: 1,
    },
    {
        id: 69,
        text: "In Go-Back-N ARQ with window size 7 and sequence number bits = 3, the maximum number of frames that can be sent before an acknowledgement is required is:",
        options: [
            "7",
            "8",
            "3",
            "4"
        ],
        correctAnswer: 1,
    },
    {
        id: 70,
        text: "Match LIST-I with LIST-II:\n\n| LIST-I | LIST-II |\n|---|---|\n| A. ARP | I. Used by hosts to report multicast group membership to routers |\n| B. ICMP | II. Resolves IP address to MAC address |\n| C. RARP | III. Used for error reporting and diagnostics (e.g., ping) |\n| D. IGMP | IV. Resolves MAC address to IP address (used by diskless workstations) |\n\nChoose the correct answer:",
        options: [
            "A – II, B – III, C – IV, D – I",
            "A – III, B – II, C – I, D – IV",
            "A – I, B – IV, C – III, D – II",
            "A – II, B – I, C – IV, D – III"
        ],
        correctAnswer: 1,
    },
    {
        id: 71,
        text: "In HDLC, the flag sequence is 01111110. If the data contains five consecutive 1s, bit stuffing inserts a __________ after the fifth 1.",
        options: [
            "1",
            "0",
            "FLAG byte",
            "ESC byte"
        ],
        correctAnswer: 2,
    },
    {
        id: 72,
        text: "Which OSI layer is responsible for end-to-end error recovery and flow control between source and destination processes?",
        options: [
            "Network layer",
            "Data Link layer",
            "Transport layer",
            "Session layer"
        ],
        correctAnswer: 3,
    },
    {
        id: 73,
        text: "A CPU has a 24-bit instruction format: 6-bit opcode, 9-bit source register field, 9-bit destination register field. The maximum number of registers and operations possible are:",
        options: [
            "512 registers, 64 operations",
            "64 registers, 512 operations",
            "512 registers, 512 operations",
            "64 registers, 64 operations"
        ],
        correctAnswer: 1,
    },
    {
        id: 74,
        text: "The expression $((A + B) \\times C - (D / E))\\;\\hat{}\\;F$ in postfix notation is:",
        options: [
            "$AB+C*DE/-F\\hat{}$",
            "$AB+C*DE/F\\hat{}-$",
            "$A\\ B + C * D\\ E / - F\\ \\hat{}$",
            "$AB+C-DE/*F\\hat{}$"
        ],
        correctAnswer: 1,
    },
    {
        id: 75,
        text: "In a directed graph $G = (V, E)$ with $|V|$ vertices, BFS from source $s$ visits vertices in layers. If the diameter of the graph is $d$, the number of BFS layers (excluding source) is at most:",
        options: [
            "$d$",
            "$d + 1$",
            "$2d$",
            "$V - 1$"
        ],
        correctAnswer: 1,
    },
];
