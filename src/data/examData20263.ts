import { ExamConfig, Question } from "./examTypes";

export const examConfig: ExamConfig = {
    title: "CUET PG 2026 - Mock Test Series III",
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
        text: "Consider the following Push-Down Automaton (PDA). Which language does a PDA with the following transitions accept, starting from state $q_0$, with stack bottom symbol $Z_0$?\n\n$\\delta(q_0, a, Z_0) = (q_0, AZ_0)$\n$\\delta(q_0, a, A) = (q_0, AA)$\n$\\delta(q_0, b, A) = (q_1, \\varepsilon)$\n$\\delta(q_1, b, A) = (q_1, \\varepsilon)$\n$\\delta(q_1, \\varepsilon, Z_0) = (q_2, Z_0)$ [accepting state $q_2$]",
        options: [
            "$\\{a^n b^n : n \\geq 1\\}$",
            "$\\{a^n b^{2n} : n \\geq 1\\}$",
            "$\\{a^n b^m : n \\leq m\\}$",
            "$\\{a^n b^n c^n : n \\geq 1\\}$"
        ],
        correctAnswer: 1,
    },
    {
        id: 2,
        text: "Which of the following statements about Regular Expressions are TRUE?\n\nA. The language described by $a^*b^*$ includes the empty string $\\varepsilon$.\nB. $(a+b)^*$ represents all strings over $\\{a, b\\}$.\nC. $a^+ = aa^*$ represents one or more $a$'s.\nD. Regular expressions can describe the language $\\{a^n b^n\\}$.\n\nChoose the correct answer:",
        options: [
            "A, B and C only",
            "A and B only",
            "A, B, C and D",
            "B, C and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 3,
        text: "In the Chomsky hierarchy, a Type-2 grammar corresponds to:",
        options: [
            "Regular grammar",
            "Context-free grammar",
            "Context-sensitive grammar",
            "Unrestricted grammar"
        ],
        correctAnswer: 2,
    },
    {
        id: 4,
        text: "Rice's Theorem applies to which class of problems?",
        options: [
            "Decidable problems about DFA",
            "Non-trivial semantic properties of Turing Machine languages",
            "All problems in NP",
            "Regular language properties"
        ],
        correctAnswer: 2,
    },
    {
        id: 5,
        text: "A partial order relation on a set $A$ is defined as a relation that is:",
        options: [
            "Reflexive, symmetric, and transitive",
            "Reflexive, antisymmetric, and transitive",
            "Symmetric and transitive only",
            "Reflexive and symmetric only"
        ],
        correctAnswer: 2,
    },
    {
        id: 6,
        text: "The total number of functions from a set $A$ with $m$ elements to a set $B$ with $n$ elements is:",
        options: [
            "$m^n$",
            "$n^m$",
            "$m \\times n$",
            "$m! / (m-n)!$"
        ],
        correctAnswer: 2,
    },
    {
        id: 7,
        text: "In a Boolean Algebra with 8 elements, the number of atoms is:",
        options: [
            "2",
            "3",
            "4",
            "8"
        ],
        correctAnswer: 2,
    },
    {
        id: 8,
        text: "Match LIST-I (Graph Type) with LIST-II (Property):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Euler Graph | I. Has a Hamiltonian cycle |\n| B. Hamiltonian Graph | II. Every vertex has even degree |\n| C. Bipartite Graph | III. Can be 2-colored; no odd-length cycles |\n| D. Planar Graph | IV. Can be drawn without edge crossings |\n\nChoose the correct answer:",
        options: [
            "A – II, B – I, C – III, D – IV",
            "A – I, B – II, C – IV, D – III",
            "A – III, B – I, C – II, D – IV",
            "A – II, B – IV, C – III, D – I"
        ],
        correctAnswer: 1,
    },
    {
        id: 9,
        text: "A 4-bit Ring Counter is initialized to the state 1000. What will be the sequence of states after 3 clock pulses?",
        options: [
            "0100, 0010, 0001",
            "1100, 1110, 1111",
            "0001, 0010, 0100",
            "0100, 0011, 0001"
        ],
        correctAnswer: 1,
    },
    {
        id: 10,
        text: "A BCD (Binary-Coded Decimal) to 7-segment decoder accepts a 4-bit BCD input and produces outputs to drive how many segments?",
        options: [
            "4",
            "5",
            "7",
            "8"
        ],
        correctAnswer: 3,
    },
    {
        id: 11,
        text: "In a K-Map for 4 variables, the number of cells is:",
        options: [
            "4",
            "8",
            "16",
            "32"
        ],
        correctAnswer: 3,
    },
    {
        id: 12,
        text: "Which of the following combinational circuits selects one of many data inputs and forwards the selected input to a single output line?",
        options: [
            "Demultiplexer",
            "Decoder",
            "Multiplexer",
            "Encoder"
        ],
        correctAnswer: 3,
    },
    {
        id: 13,
        text: "The fan-out of a logic gate specifies:",
        options: [
            "The number of inputs the gate can accept",
            "The maximum number of similar gates that can be driven by the output of one gate",
            "The propagation delay of the gate",
            "The power consumption of the gate"
        ],
        correctAnswer: 2,
    },
    {
        id: 14,
        text: "Which of the following statements about interrupt-driven I/O versus programmed I/O are TRUE?\n\nA. In programmed I/O, the CPU continuously polls the I/O device status (busy-wait).\nB. Interrupt-driven I/O frees the CPU to perform other tasks while waiting for I/O completion.\nC. DMA is a further improvement over interrupt-driven I/O for large data transfers.\nD. Programmed I/O is more efficient than DMA for bulk data transfer.\n\nChoose the correct answer:",
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
        text: "In a set-associative cache with 4 ways and 64 sets, the total number of cache lines is:",
        options: [
            "64",
            "256",
            "128",
            "512"
        ],
        correctAnswer: 2,
    },
    {
        id: 16,
        text: "Match LIST-I (Bus Arbitration Scheme) with LIST-II (Property):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Daisy Chain | I. Each device has a unique priority level |\n| B. Independent Request | II. Central arbiter with independent request/grant lines for each device |\n| C. Polling | III. Devices are connected in series; priority decreases along the chain |\n| D. Distributed | IV. No central arbiter; devices negotiate among themselves |\n\nChoose the correct answer:",
        options: [
            "A – III, B – II, C – I, D – IV",
            "A – I, B – II, C – III, D – IV",
            "A – III, B – I, C – II, D – IV",
            "A – II, B – III, C – I, D – IV"
        ],
        correctAnswer: 1,
    },
    {
        id: 17,
        text: "Calculate the effective CPI for a processor where: 50% of instructions are arithmetic (CPI=1), 20% are load/store (CPI=3), 20% are branch (CPI=2), and 10% are multiply (CPI=4).",
        options: [
            "1.8",
            "1.9",
            "2.0",
            "2.1"
        ],
        correctAnswer: 2,
    },
    {
        id: 18,
        text: "What is the result stored in the Accumulator after executing the following 8085 instructions?\n```\nMVI A, 4FH\nMVI B, 3AH\nADD B\n```",
        options: [
            "89H",
            "15H",
            "4FH",
            "3AH"
        ],
        correctAnswer: 1,
    },
    {
        id: 19,
        text: "In the 8085, the PUSH instruction pushes a register pair onto the stack. When PUSH B is executed, which registers are stored and in what order?",
        options: [
            "B first (at SP-1), then C (at SP-2)",
            "C first (at SP-1), then B (at SP-2)",
            "Only B is stored",
            "Only C is stored"
        ],
        correctAnswer: 1,
    },
    {
        id: 20,
        text: "What does the 8085 instruction LHLD 2050H do?",
        options: [
            "Loads H from memory address 2050H and L from 2051H",
            "Loads L from memory address 2050H and H from 2051H",
            "Stores HL pair at address 2050H",
            "Loads the accumulator from 2050H"
        ],
        correctAnswer: 2,
    },
    {
        id: 21,
        text: "In 8085 assembly, the instruction DAD B performs:",
        options: [
            "Decimal adjust accumulator",
            "Double addition: adds BC pair to HL pair and stores result in HL",
            "Subtracts BC from HL",
            "Multiplies B with accumulator"
        ],
        correctAnswer: 2,
    },
    {
        id: 22,
        text: "Match LIST-I (8085 Interrupt) with LIST-II (Property):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. TRAP | I. Maskable, edge-triggered |\n| B. RST 7.5 | II. Non-maskable, highest priority |\n| C. RST 6.5 | III. Maskable, level-triggered |\n| D. INTR | IV. Maskable, general purpose (vectored by external hardware) |\n\nChoose the correct answer:",
        options: [
            "A – II, B – I, C – III, D – IV",
            "A – I, B – II, C – III, D – IV",
            "A – II, B – III, C – I, D – IV",
            "A – IV, B – I, C – III, D – II"
        ],
        correctAnswer: 1,
    },
    {
        id: 23,
        text: "Consider the following C code. Identify the error:\n```c\n#include <stdio.h>\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    int i;\n    for(i = 0; i <= 5; i++) {\n        printf(\"%d \", arr[i]);\n    }\n    return 0;\n}\n```",
        options: [
            "No error; it prints 1 2 3 4 5",
            "The loop runs 6 times; accessing arr[5] is an out-of-bounds access (undefined behavior)",
            "Syntax error in the for loop",
            "The array initialization is incorrect"
        ],
        correctAnswer: 2,
    },
    {
        id: 24,
        text: "In a B-Tree of order $m$, each node can have at most $m$ children. The minimum number of children for an internal node (non-root) is:",
        options: [
            "$m$",
            "$\\lceil m/2 \\rceil$",
            "$m - 1$",
            "$2$"
        ],
        correctAnswer: 2,
    },
    {
        id: 25,
        text: "Which data structure is best suited for implementing priority queues?",
        options: [
            "Array",
            "Linked list",
            "Heap",
            "Stack"
        ],
        correctAnswer: 3,
    },
    {
        id: 26,
        text: "What is the worst-case time complexity of searching in a balanced Binary Search Tree (e.g., AVL tree)?",
        options: [
            "$O(n)$",
            "$O(\\log n)$",
            "$O(n \\log n)$",
            "$O(1)$"
        ],
        correctAnswer: 2,
    },
    {
        id: 27,
        text: "Consider the following C code:\n```c\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\nint main() {\n    int x = 5, y = 10;\n    swap(&x, &y);\n    printf(\"%d %d\", x, y);\n}\n```\nThe output is:",
        options: [
            "5 10",
            "10 5",
            "10 10",
            "5 5"
        ],
        correctAnswer: 2,
    },
    {
        id: 28,
        text: "In a graph with 6 vertices, the maximum number of edges in a simple undirected graph (no self-loops, no multiple edges) is:",
        options: [
            "6",
            "12",
            "15",
            "30"
        ],
        correctAnswer: 3,
    },
    {
        id: 29,
        text: "In Kruskal's algorithm for finding a Minimum Spanning Tree, which data structure is most efficiently used to detect cycles?",
        options: [
            "Stack",
            "Queue",
            "Union-Find (Disjoint Set Union) data structure",
            "Hash Table"
        ],
        correctAnswer: 3,
    },
    {
        id: 30,
        text: "Which of the following problems is NP-Complete?\n\nA. Travelling Salesman Problem (decision version)\nB. 3-SAT\nC. Graph Coloring (with $k \\geq 3$ colors)\nD. Sorting an array\n\nChoose the correct answer:",
        options: [
            "A, B and C only",
            "A and B only",
            "A, B, C and D",
            "B and C only"
        ],
        correctAnswer: 1,
    },
    {
        id: 31,
        text: "The Floyd-Warshall algorithm finds:",
        options: [
            "Single-source shortest path",
            "All-pairs shortest path",
            "Minimum spanning tree",
            "Maximum flow"
        ],
        correctAnswer: 2,
    },
    {
        id: 32,
        text: "The space complexity of DFS on a graph with $V$ vertices and $E$ edges (using adjacency list) is:",
        options: [
            "$O(V)$",
            "$O(E)$",
            "$O(V + E)$",
            "$O(V^2)$"
        ],
        correctAnswer: 1,
    },
    {
        id: 33,
        text: "In Unix/Linux file systems, an inode stores which of the following?\n\nA. File name\nB. File permissions and ownership\nC. File size and timestamps\nD. Pointers to data blocks on disk\n\nChoose the correct answer:",
        options: [
            "B, C and D only",
            "A, B and C only",
            "A, B, C and D",
            "B and C only"
        ],
        correctAnswer: 1,
    },
    {
        id: 34,
        text: "Match LIST-I (Disk Scheduling Algorithm) with LIST-II (Key Property):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. FCFS | I. Services requests in the direction of head movement, then reverses |\n| B. SSTF | II. Services requests in order they arrive |\n| C. SCAN | III. Services the closest request first; may cause starvation |\n| D. C-SCAN | IV. Like SCAN but only services in one direction, then jumps to start |\n\nChoose the correct answer:",
        options: [
            "A – II, B – III, C – I, D – IV",
            "A – III, B – II, C – I, D – IV",
            "A – II, B – I, C – III, D – IV",
            "A – I, B – III, C – IV, D – II"
        ],
        correctAnswer: 1,
    },
    {
        id: 35,
        text: "In a paging system with page size 4 KB and logical address space of 32 bits, the number of entries in the page table is:",
        options: [
            "$2^{20}$ (approximately 1 million entries)",
            "$2^{10}$",
            "$2^{12}$",
            "$2^{8}$"
        ],
        correctAnswer: 1,
    },
    {
        id: 36,
        text: "Thrashing in an operating system occurs when:",
        options: [
            "The CPU utilization is very high",
            "Processes spend more time paging (swapping pages in/out) than executing",
            "Too many processes are waiting for I/O",
            "The file system runs out of disk space"
        ],
        correctAnswer: 2,
    },
    {
        id: 37,
        text: "Which of the following synchronization problems demonstrates the producer-consumer scenario?\n\nA. Bounded Buffer problem\nB. Dining Philosophers problem\nC. Readers-Writers problem\nD. Barbershop problem\n\nChoose the correct answer:",
        options: [
            "A only",
            "A and D only",
            "A, B and C only",
            "All of the above involve synchronization"
        ],
        correctAnswer: 1,
    },
    {
        id: 38,
        text: "The CSMA/CD protocol is used in which type of network?",
        options: [
            "Token Ring (IEEE 802.5)",
            "Wireless LAN (IEEE 802.11)",
            "Wired Ethernet (IEEE 802.3)",
            "Bluetooth"
        ],
        correctAnswer: 3,
    },
    {
        id: 39,
        text: "In the Stop-and-Wait protocol, the maximum utilization of the channel depends on:",
        options: [
            "Only the bandwidth",
            "The ratio of transmission time to the sum of transmission time and round-trip propagation time",
            "Only the propagation delay",
            "The number of frames in the buffer"
        ],
        correctAnswer: 2,
    },
    {
        id: 40,
        text: "Match LIST-I (TCP/IP Layer) with LIST-II (Protocol):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Application Layer | I. IP, ICMP |\n| B. Transport Layer | II. HTTP, FTP, DNS |\n| C. Internet Layer | III. TCP, UDP |\n| D. Network Access Layer | IV. Ethernet, Wi-Fi |\n\nChoose the correct answer:",
        options: [
            "A – II, B – III, C – I, D – IV",
            "A – I, B – III, C – II, D – IV",
            "A – II, B – I, C – III, D – IV",
            "A – III, B – II, C – I, D – IV"
        ],
        correctAnswer: 1,
    },
    {
        id: 41,
        text: "In CIDR notation, 192.168.1.0/24 means:",
        options: [
            "The first 24 bits are the host portion",
            "The first 24 bits are the network portion, leaving 8 bits for hosts",
            "There are 24 hosts in the network",
            "The subnet mask is 255.255.0.0"
        ],
        correctAnswer: 2,
    },
    {
        id: 42,
        text: "HTTP uses which transport layer protocol by default?",
        options: [
            "UDP",
            "TCP",
            "SCTP",
            "ICMP"
        ],
        correctAnswer: 2,
    },
    {
        id: 43,
        text: "Which of the following is an admissible heuristic for the 8-puzzle problem?",
        options: [
            "Number of misplaced tiles",
            "Number of tiles in the correct position",
            "Total number of moves made so far",
            "Random value between 0 and 100"
        ],
        correctAnswer: 1,
    },
    {
        id: 44,
        text: "In a Bayesian Network, the joint probability distribution is computed as:",
        options: [
            "Product of all marginal probabilities",
            "Product of conditional probabilities of each node given its parents",
            "Sum of all node probabilities",
            "Maximum of all conditional probabilities"
        ],
        correctAnswer: 2,
    },
    {
        id: 45,
        text: "Which of the following is TRUE about the Minimax algorithm with alpha-beta pruning?\n\nA. It produces the same result as Minimax without pruning.\nB. It can prune branches that cannot affect the final decision.\nC. It works only for games with perfect information.\nD. Best case time complexity is $O(b^{d/2})$ with optimal ordering.\n\nChoose the correct answer:",
        options: [
            "A, B, C and D",
            "A and B only",
            "A, B and D only",
            "B and C only"
        ],
        correctAnswer: 1,
    },
    {
        id: 46,
        text: "In propositional logic, modus ponens states that from $P$ and $P \\to Q$, we can infer:",
        options: [
            "$P$",
            "$Q$",
            "$\\neg P$",
            "$P \\wedge Q$"
        ],
        correctAnswer: 2,
    },
    {
        id: 47,
        text: "Unification in First-Order Logic is the process of:",
        options: [
            "Combining two different logical systems",
            "Finding a substitution that makes two expressions identical",
            "Converting FOL to propositional logic",
            "Removing quantifiers from expressions"
        ],
        correctAnswer: 2,
    },
    {
        id: 48,
        text: "In the Hill Cipher with key matrix $K$ and plaintext vector $P$ (mod 26), which condition must $K$ satisfy for decryption to be possible?",
        options: [
            "$K$ must be a symmetric matrix",
            "$\\gcd(\\det(K), 26) = 1$",
            "$K$ must be an identity matrix",
            "$K$ must have all positive entries"
        ],
        correctAnswer: 2,
    },
    {
        id: 49,
        text: "In RSA encryption, if we choose $p = 5$ and $q = 7$, then $n$ and $\\phi(n)$ are:",
        options: [
            "$n = 35$, $\\phi(n) = 24$",
            "$n = 12$, $\\phi(n) = 35$",
            "$n = 35$, $\\phi(n) = 12$",
            "$n = 35$, $\\phi(n) = 34$"
        ],
        correctAnswer: 1,
    },
    {
        id: 50,
        text: "Which of the following correctly describes the operation modes of a block cipher?\n\nA. ECB (Electronic Codebook) encrypts each block independently.\nB. CBC (Cipher Block Chaining) XORs each plaintext block with the previous ciphertext block before encryption.\nC. CTR (Counter) mode turns a block cipher into a stream cipher.\nD. In ECB mode, identical plaintext blocks produce identical ciphertext blocks.\n\nChoose the correct answer:",
        options: [
            "A, B, C and D",
            "A and B only",
            "A, B and D only",
            "B, C and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 51,
        text: "Match LIST-I (Cipher Type) with LIST-II (Example):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Substitution Cipher | I. Rail Fence Cipher |\n| B. Transposition Cipher | II. Caesar Cipher |\n| C. Block Cipher | III. AES |\n| D. Stream Cipher | IV. RC4 |\n\nChoose the correct answer:",
        options: [
            "A – II, B – I, C – III, D – IV",
            "A – I, B – II, C – IV, D – III",
            "A – III, B – I, C – II, D – IV",
            "A – II, B – IV, C – III, D – I"
        ],
        correctAnswer: 1,
    },
    {
        id: 52,
        text: "A man-in-the-middle attack can be prevented by:",
        options: [
            "Using a longer password",
            "Using digital certificates to authenticate communicating parties",
            "Increasing encryption key size only",
            "Using a hub instead of a switch"
        ],
        correctAnswer: 2,
    },
    {
        id: 53,
        text: "Which of the following data visualization techniques is most appropriate for showing the distribution of a single continuous variable?",
        options: [
            "Bar chart",
            "Histogram",
            "Pie chart",
            "Scatter plot"
        ],
        correctAnswer: 2,
    },
    {
        id: 54,
        text: "In a scatter plot, a positive linear correlation between two variables is indicated by:",
        options: [
            "Points randomly scattered with no pattern",
            "Points forming an upward-sloping trend from left to right",
            "Points forming a U-shape",
            "Points forming a downward-slope from left to right"
        ],
        correctAnswer: 2,
    },
    {
        id: 55,
        text: "In a Convolutional Neural Network (CNN), the purpose of the pooling layer is to:",
        options: [
            "Increase the spatial dimensions of the feature map",
            "Reduce the spatial dimensions of the feature map while retaining important features",
            "Add more trainable parameters to the model",
            "Apply the activation function"
        ],
        correctAnswer: 2,
    },
    {
        id: 56,
        text: "Match LIST-I (Data Science Concept) with LIST-II (Description):\n\n| LIST-I | LIST-II |\n|---|---|\n| A. Feature Engineering | I. Selecting the most relevant features for the model |\n| B. Feature Selection | II. Creating new features from existing data to improve model performance |\n| C. Data Augmentation | III. Increasing training data by applying transformations (rotation, flip, etc.) |\n| D. One-Hot Encoding | IV. Converting categorical variables into binary columns |\n\nChoose the correct answer:",
        options: [
            "A – II, B – I, C – III, D – IV",
            "A – I, B – II, C – IV, D – III",
            "A – II, B – IV, C – III, D – I",
            "A – III, B – I, C – II, D – IV"
        ],
        correctAnswer: 1,
    },
    {
        id: 57,
        text: "Gradient Boosting works by:",
        options: [
            "Training multiple models in parallel and averaging their predictions",
            "Building models sequentially, where each new model corrects the errors of the previous ones",
            "Training a single model with a very large number of features",
            "Using only decision stumps (depth-1 trees)"
        ],
        correctAnswer: 2,
    },
    {
        id: 58,
        text: "Which of the following is TRUE about the K-Means clustering algorithm?\n\nA. It requires the number of clusters $k$ to be specified in advance.\nB. It assigns each data point to the nearest centroid.\nC. It is guaranteed to find the global optimum.\nD. It iteratively updates centroids until convergence.\n\nChoose the correct answer:",
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
        text: "In the context of NLP, word embeddings (like Word2Vec) represent words as:",
        options: [
            "One-hot encoded binary vectors",
            "Dense, continuous-valued vectors in a lower-dimensional space",
            "Sparse bag-of-words vectors",
            "Binary tree structures"
        ],
        correctAnswer: 2,
    },
    {
        id: 60,
        text: "The Elbow Method in K-Means clustering is used to determine:",
        options: [
            "The optimal learning rate",
            "The optimal number of clusters $k$",
            "The number of iterations needed",
            "The initial centroid positions"
        ],
        correctAnswer: 2,
    },
    {
        id: 61,
        text: "A computer system uses demand paging. If the probability of a page fault is $p$ and the page fault service time is $t_{pf}$, and memory access time is $t_m$, the effective memory access time is approximately:",
        options: [
            "$t_m + p \\times t_{pf}$",
            "$(1 - p) \\times t_m + p \\times t_{pf}$",
            "$p \\times t_m + (1-p) \\times t_{pf}$",
            "$t_m \\times t_{pf} / p$"
        ],
        correctAnswer: 2,
    },
    {
        id: 62,
        text: "In the 8085, what is the address range for RST 5.5 vector?",
        options: [
            "002CH",
            "0034H",
            "003CH",
            "0024H"
        ],
        correctAnswer: 1,
    },
    {
        id: 63,
        text: "A B+ Tree is preferred over a B-Tree for database indexing because:",
        options: [
            "B+ Trees have faster insertion times",
            "All data records are stored at the leaf level and leaves are linked, enabling efficient range queries",
            "B+ Trees require less memory",
            "B+ Trees do not need balancing"
        ],
        correctAnswer: 2,
    },
    {
        id: 64,
        text: "In the context of Information Theory, entropy $H(X)$ of a random variable $X$ with $n$ equally likely outcomes is:",
        options: [
            "$\\log_2(n)$ bits",
            "$n \\times \\log_2(n)$ bits",
            "$1/n$ bits",
            "$n^2$ bits"
        ],
        correctAnswer: 1,
    },
    {
        id: 65,
        text: "The Hamming distance between two binary strings 1010101 and 1001110 is:",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        correctAnswer: 3,
    },
    {
        id: 66,
        text: "Which of the following strategies can prevent deadlock in the Dining Philosophers problem?\n\n(A). Each philosopher picks up the left fork first, then the right fork.\n(B). Allow at most $n-1$ philosophers to sit at the table simultaneously.\n(C). Each philosopher tries to pick up both forks; if unsuccessful, puts both down and waits randomly.\n(D). Assign a total ordering to forks and require philosophers to pick up the lower-numbered fork first.\n\nChoose the correct answer:",
        options: [
            "(A) and (B) only",
            "(B) and (C) only",
            "(B), (C) and (D) only",
            "(A), (B), (C) and (D)"
        ],
        correctAnswer: 3,
    },
    {
        id: 67,
        text: "The time complexity of building a heap from an unsorted array of $n$ elements using the bottom-up approach is:",
        options: [
            "$O(n \\log n)$",
            "$O(n)$",
            "$O(n^2)$",
            "$O(\\log n)$"
        ],
        correctAnswer: 2,
    },
    {
        id: 68,
        text: "Which of the following is TRUE about HTTPS?",
        options: [
            "It is the same as HTTP with no added security",
            "It uses SSL/TLS to provide encrypted communication between client and server",
            "It operates on port 80 by default",
            "It does not use certificates"
        ],
        correctAnswer: 2,
    },
    {
        id: 69,
        text: "In a Red-Black Tree, which of the following properties must hold?\n\nA. Every node is either red or black.\nB. The root is always black.\nC. No two consecutive red nodes on any path from root to leaf.\nD. Every path from root to null leaf has the same number of black nodes.\n\nChoose the correct answer:",
        options: [
            "A, B, C and D",
            "A and B only",
            "A, B and C only",
            "B, C and D only"
        ],
        correctAnswer: 1,
    },
    {
        id: 70,
        text: "The Naive Bayes classifier assumes:",
        options: [
            "All features are correlated",
            "Features are conditionally independent given the class label",
            "The training set must be very large",
            "Only numerical features can be used"
        ],
        correctAnswer: 2,
    },
    {
        id: 71,
        text: "In transfer learning, a pre-trained model is used as:",
        options: [
            "A completely new model trained from scratch",
            "A starting point, where learned features are transferred to a new related task",
            "A replacement for the testing dataset",
            "An alternative to data preprocessing"
        ],
        correctAnswer: 2,
    },
    {
        id: 72,
        text: "The Big-O notation $O(1)$ represents:",
        options: [
            "Linear time complexity",
            "Constant time complexity",
            "Logarithmic time complexity",
            "Quadratic time complexity"
        ],
        correctAnswer: 2,
    },
    {
        id: 73,
        text: "Which protocol is used for secure remote login?",
        options: [
            "Telnet",
            "SSH (Secure Shell)",
            "FTP",
            "HTTP"
        ],
        correctAnswer: 2,
    },
    {
        id: 74,
        text: "L1 regularization (Lasso) in machine learning tends to produce:",
        options: [
            "Models with all features having equal weights",
            "Sparse models where some feature weights become exactly zero",
            "Models with very large weights",
            "Models identical to L2 regularization"
        ],
        correctAnswer: 2,
    },
    {
        id: 75,
        text: "In the context of operating systems, a zombie process is:",
        options: [
            "A process that has been killed by the administrator",
            "A process that has completed execution but still has an entry in the process table (its parent hasn't read its exit status)",
            "A process waiting for I/O",
            "A process in the ready queue"
        ],
        correctAnswer: 2,
    },
];
