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
    title: "CUET PG 2026 - Mock Test 1",
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
        text: "Let $R$ be a relation on set $A = \\{1, 2, 3, 4\\}$ defined as $R = \\{(1,1), (2,2), (3,3), (4,4), (1,2), (2,1)\\}$. Which properties does $R$ satisfy?\n\nA. Reflexive\nB. Symmetric\nC. Transitive\nD. Antisymmetric",
        options: [
            "$A$, $B$ and $C$ only",
            "$A$ and $B$ only",
            "$A$, $B$ and $D$ only",
            "$B$ and $C$ only",
        ],
        correctAnswer: 2,
    },
    {
        id: 2,
        text: "In a Boolean Algebra, which of the following laws is correctly stated?",
        options: [
            "$A + A' = 0$",
            "$A \\cdot A' = 1$",
            "$A + 1 = A$",
            "$A \\cdot 0 = 0$",
        ],
        correctAnswer: 4,
    },
    {
        id: 3,
        text: "A function $f: A \\to B$ is said to be bijective if:",
        options: [
            "$f$ is one-to-one but not onto",
            "$f$ is onto but not one-to-one",
            "$f$ is both one-to-one and onto",
            "$f$ is neither one-to-one nor onto",
        ],
        correctAnswer: 3,
    },
    {
        id: 4,
        text: "Which of the following regular expressions denotes the language of strings over $\\{a,b\\}$ that contain at least one $'a'$?",
        options: [
            "$b^*ab^*$",
            "$(a+b)^*a(a+b)^*$",
            "$a(a+b)^*$",
            "$b^*a^*$",
        ],
        correctAnswer: 2,
    },
    {
        id: 5,
        text: "A context-free grammar is in Chomsky Normal Form (CNF) if all productions are of the form:",
        options: [
            "$A \\to BC$ or $A \\to a$",
            "$A \\to aB$ or $A \\to a$",
            "$A \\to Ba$ or $A \\to BC$",
            "$A \\to ABC$ or $A \\to a$",
        ],
        correctAnswer: 1,
    },
    {
        id: 6,
        text: "Which of the following is true about Push-down Automata (PDA)?\n\nA. PDA can recognize context-free languages\nB. PDA has finite memory\nC. PDA uses a stack for memory\nD. PDA can recognize all recursive languages\n\nChoose the correct answer from the options given below:",
        options: [
            "A and C only",
            "A, B and C only",
            "A, C and D only",
            "A, B, C and D",
        ],
        correctAnswer: 1,
    },
    {
        id: 7,
        text: "The difference between Moore and Mealy machines is:",
        options: [
            "Moore machine output depends on present state only, Mealy depends on present state and input",
            "Moore machine has fewer states than Mealy machine",
            "Mealy machine output depends on present state only",
            "There is no difference between them",
        ],
        correctAnswer: 1,
    },
    {
        id: 8,
        text: "What is the binary representation of the decimal number -13 in 2's complement form using 8 bits?",
        options: [
            "11110011",
            "10001101",
            "11110010",
            "10001100",
        ],
        correctAnswer: 1,
    },
    {
        id: 9,
        text: "The minimum number of NAND gates required to implement the Boolean function $F = AB + CD$ is:",
        options: [
            "3",
            "4",
            "5",
            "6",
        ],
        correctAnswer: 2,
    },
    {
        id: 10,
        text: "A 4-to-1 multiplexer requires how many select lines?",
        options: [
            "1",
            "2",
            "3",
            "4",
        ],
        correctAnswer: 2,
    },
    {
        id: 11,
        text: "In a sequential circuit, what is the primary difference between a latch and a flip-flop?",
        options: [
            "Latches are level-triggered, flip-flops are edge-triggered",
            "Flip-flops are level-triggered, latches are edge-triggered",
            "Both are level-triggered",
            "Both are edge-triggered",
        ],
        correctAnswer: 1,
    },
    {
        id: 12,
        text: "Which addressing mode is used when the effective address of the operand is calculated by adding the contents of a base register to an offset?",
        options: [
            "Immediate addressing",
            "Direct addressing",
            "Indexed addressing",
            "Register indirect addressing",
        ],
        correctAnswer: 3,
    },
    {
        id: 13,
        text: "In a pipelined processor with 5 stages, if each stage takes 10 ns, what is the theoretical speedup compared to a non-pipelined processor for executing 100 instructions?",
        options: [
            "Approximately 4.8",
            "Exactly 5.0",
            "Approximately 3.8",
            "Exactly 10.0",
        ],
        correctAnswer: 1,
    },
    {
        id: 14,
        text: "Cache memory operates on the principle of:",
        options: [
            "Temporal locality only",
            "Spatial locality only",
            "Both temporal and spatial locality",
            "Neither temporal nor spatial locality",
        ],
        correctAnswer: 3,
    },
    {
        id: 15,
        text: "In Direct Memory Access (DMA), which of the following is true?",
        options: [
            "CPU is involved in every data transfer",
            "Data is transferred directly between memory and I/O device without CPU intervention",
            "DMA is slower than programmed I/O",
            "DMA cannot handle burst mode transfers",
        ],
        correctAnswer: 2,
    },
    {
        id: 16,
        text: "The 8085 microprocessor has how many address lines?",
        options: [
            "8",
            "16",
            "20",
            "32",
        ],
        correctAnswer: 2,
    },
    {
        id: 17,
        text: "Which flag is set when the result of an arithmetic operation is zero in 8085?",
        options: [
            "Carry flag",
            "Zero flag",
            "Sign flag",
            "Parity flag",
        ],
        correctAnswer: 2,
    },
    {
        id: 18,
        text: "The instruction MVI A, 45H in 8085 microprocessor:",
        options: [
            "Moves the contents of memory location 45H to accumulator",
            "Moves the immediate data 45H to accumulator",
            "Moves the contents of accumulator to memory location 45H",
            "Moves the contents of register A to address 45H",
        ],
        correctAnswer: 2,
    },
    {
        id: 19,
        text: "In 8085 microprocessor, RST 5.5 interrupt has a vector address of:",
        options: [
            "0024H",
            "002CH",
            "0034H",
            "003CH",
        ],
        correctAnswer: 2,
    },
    {
        id: 20,
        text: "Which of the following is the correct syntax for declaring a pointer to an integer in C?",
        options: [
            "int *ptr;",
            "int ptr*;",
            "pointer int ptr;",
            "*int ptr;",
        ],
        correctAnswer: 1,
    },
    {
        id: 21,
        text: "What is the output of the following C code?\n\nint x = 5;\nprintf(\"%d\", x++);",
        options: [
            "4",
            "5",
            "6",
            "Compiler error",
        ],
        correctAnswer: 2,
    },
    {
        id: 22,
        text: "In a stack, the operation to remove an element is called:",
        options: [
            "Push",
            "Pop",
            "Dequeue",
            "Delete",
        ],
        correctAnswer: 2,
    },
    {
        id: 23,
        text: "A queue follows which principle?",
        options: [
            "LIFO (Last In First Out)",
            "FIFO (First In First Out)",
            "Random access",
            "Priority based",
        ],
        correctAnswer: 2,
    },
    {
        id: 24,
        text: "In a circular linked list, the last node points to:",
        options: [
            "NULL",
            "First node",
            "Previous node",
            "Itself",
        ],
        correctAnswer: 2,
    },
    {
        id: 25,
        text: "The maximum number of nodes in a binary tree of height h is:",
        options: [
            "2^h - 1",
            "2^(h+1) - 1",
            "2^h",
            "2^(h-1)",
        ],
        correctAnswer: 2,
    },
    {
        id: 26,
        text: "In a binary search tree, the inorder traversal gives elements in:",
        options: [
            "Random order",
            "Sorted order",
            "Reverse sorted order",
            "Level order",
        ],
        correctAnswer: 2,
    },
    {
        id: 27,
        text: "What is the time complexity of searching an element in a balanced binary search tree with n elements?",
        options: [
            "O(n)",
            "O(log n)",
            "O(n log n)",
            "O(1)",
        ],
        correctAnswer: 2,
    },
    {
        id: 28,
        text: "The worst-case time complexity of Quick Sort is:",
        options: [
            "O(n log n)",
            "O(n^2)",
            "O(log n)",
            "O(n)",
        ],
        correctAnswer: 2,
    },
    {
        id: 29,
        text: "Which sorting algorithm has the best average-case time complexity?",
        options: [
            "Bubble Sort",
            "Selection Sort",
            "Merge Sort",
            "Insertion Sort",
        ],
        correctAnswer: 3,
    },
    {
        id: 30,
        text: "The time complexity of binary search algorithm is:",
        options: [
            "O(n)",
            "O(log n)",
            "O(n log n)",
            "O(n^2)",
        ],
        correctAnswer: 2,
    },
    {
        id: 31,
        text: "Dynamic programming is used for solving problems with:",
        options: [
            "Greedy choice property",
            "Overlapping subproblems and optimal substructure",
            "No optimal substructure",
            "Independent subproblems only",
        ],
        correctAnswer: 2,
    },
    {
        id: 32,
        text: "The Knapsack problem can be efficiently solved using:",
        options: [
            "Greedy approach only",
            "Dynamic programming",
            "Brute force only",
            "Linear search",
        ],
        correctAnswer: 2,
    },
    {
        id: 33,
        text: "Dijkstra's algorithm is used to find:",
        options: [
            "Minimum spanning tree",
            "Shortest path from a single source",
            "Maximum flow",
            "Strongly connected components",
        ],
        correctAnswer: 2,
    },
    {
        id: 34,
        text: "Kruskal's algorithm uses which data structure for efficient implementation?",
        options: [
            "Queue",
            "Stack",
            "Union-Find (Disjoint Set)",
            "Binary Tree",
        ],
        correctAnswer: 3,
    },
    {
        id: 35,
        text: "The primary function of an operating system is:\n\nA. Resource management\nB. Process management\nC. Memory management\nD. Application development\n\nChoose the correct answer from the options given below:",
        options: [
            "A, B and C only",
            "A, B and D only",
            "B, C and D only",
            "A, B, C and D",
        ],
        correctAnswer: 1,
    },
    {
        id: 36,
        text: "A process can be in which of the following states?\n\nA. New\nB. Ready\nC. Running\nD. Terminated\n\nChoose the correct answer from the options given below:",
        options: [
            "A, B and C only",
            "B, C and D only",
            "A, C and D only",
            "A, B, C and D",
        ],
        correctAnswer: 4,
    },
    {
        id: 37,
        text: "The purpose of the fork() system call is to:",
        options: [
            "Terminate a process",
            "Create a new process",
            "Execute a new program",
            "Wait for a process to complete",
        ],
        correctAnswer: 2,
    },
    {
        id: 38,
        text: "In the context of process scheduling, what does the term 'turnaround time' mean?",
        options: [
            "Time process spends in ready queue",
            "Time from process submission to completion",
            "Time process spends executing",
            "Time process spends waiting for I/O",
        ],
        correctAnswer: 2,
    },
    {
        id: 39,
        text: "Which CPU scheduling algorithm may cause starvation?",
        options: [
            "First Come First Serve (FCFS)",
            "Round Robin",
            "Priority Scheduling",
            "Shortest Job First (SJF)",
        ],
        correctAnswer: 3,
    },
    {
        id: 40,
        text: "The Banker's algorithm is used for:",
        options: [
            "Process scheduling",
            "Deadlock avoidance",
            "Memory allocation",
            "Page replacement",
        ],
        correctAnswer: 2,
    },
    {
        id: 41,
        text: "Which of the following conditions must hold for a deadlock to occur?\n\nA. Mutual exclusion\nB. Hold and wait\nC. No preemption\nD. Circular wait\n\nChoose the correct answer from the options given below:",
        options: [
            "A, B and C only",
            "B, C and D only",
            "A, C and D only",
            "A, B, C and D",
        ],
        correctAnswer: 4,
    },
    {
        id: 42,
        text: "In paging, the page table is used to:",
        options: [
            "Store program instructions",
            "Map logical addresses to physical addresses",
            "Manage file systems",
            "Schedule processes",
        ],
        correctAnswer: 2,
    },
    {
        id: 43,
        text: "The LRU (Least Recently Used) page replacement algorithm replaces:",
        options: [
            "The page that arrived first",
            "The page that has not been used for the longest time",
            "A random page",
            "The page that will not be used for the longest time in future",
        ],
        correctAnswer: 2,
    },
    {
        id: 44,
        text: "Virtual memory allows:",
        options: [
            "Execution of processes larger than physical memory",
            "Faster CPU execution",
            "Better cache performance",
            "Reduced disk usage",
        ],
        correctAnswer: 1,
    },
    {
        id: 45,
        text: "In the OSI model, which layer is responsible for end-to-end communication and error recovery?",
        options: [
            "Network layer",
            "Transport layer",
            "Session layer",
            "Data link layer",
        ],
        correctAnswer: 2,
    },
    {
        id: 46,
        text: "Match LIST-I with LIST-II (OSI Layers with their functions)\n\nA. Physical Layer → I. Provides addressing and routing\nB. Network Layer → II. Manages physical connection\nC. Transport Layer → III. Provides end-to-end communication\nD. Application Layer → IV. Provides network services to applications\n\nChoose the correct answer from the options given below:",
        options: [
            "A - I, B - II, C - III, D - IV",
            "A - II, B - I, C - III, D - IV",
            "A - II, B - III, C - I, D - IV",
            "A - IV, B - I, C - III, D - II",
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
            "Application layer protocol",
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
            "255.255.255.255",
        ],
        correctAnswer: 2,
    },
    {
        id: 49,
        text: "Which protocol is used for sending emails?",
        options: [
            "HTTP",
            "FTP",
            "SMTP",
            "POP3",
        ],
        correctAnswer: 3,
    },
    {
        id: 50,
        text: "The primary function of DNS (Domain Name System) is to:",
        options: [
            "Encrypt data transmission",
            "Translate domain names to IP addresses",
            "Route packets across networks",
            "Manage email servers",
        ],
        correctAnswer: 2,
    },
    {
        id: 51,
        text: "In Ethernet, CSMA/CD stands for:",
        options: [
            "Carrier Sense Multiple Access with Collision Detection",
            "Code Sense Multiple Access with Collision Detection",
            "Carrier Sense Multiple Access with Collision Delay",
            "Code Sense Media Access with Collision Detection",
        ],
        correctAnswer: 1,
    },
    {
        id: 52,
        text: "A router operates at which layer of the OSI model?",
        options: [
            "Physical layer",
            "Data link layer",
            "Network layer",
            "Transport layer",
        ],
        correctAnswer: 3,
    },
    {
        id: 53,
        text: "Congestion control in TCP is achieved using:\n\nA. Slow start\nB. Congestion avoidance\nC. Fast retransmit\nD. Fast recovery\n\nChoose the correct answer from the options given below:",
        options: [
            "A and B only",
            "A, B and C only",
            "B, C and D only",
            "A, B, C and D",
        ],
        correctAnswer: 4,
    },
    {
        id: 54,
        text: "An intelligent agent in AI consists of:\n\nA. Sensors\nB. Actuators\nC. Agent function\nD. Environment\n\nChoose the correct answer from the options given below:",
        options: [
            "A, B and C only",
            "A, C and D only",
            "B, C and D only",
            "A, B, C and D",
        ],
        correctAnswer: 1,
    },
    {
        id: 55,
        text: "Breadth-First Search (BFS) is:\n\nA. Complete\nB. Optimal for unit step costs\nC. Time complexity O(b^d)\nD. Space complexity O(b^d)\n\nChoose the correct answer from the options given below:",
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
        text: "The A* search algorithm uses:",
        options: [
            "f(n) = g(n) only",
            "f(n) = h(n) only",
            "f(n) = g(n) + h(n)",
            "f(n) = g(n) - h(n)",
        ],
        correctAnswer: 3,
    },
    {
        id: 57,
        text: "In propositional logic, De Morgan's law states that $\\neg(P \\land Q)$ is equivalent to:",
        options: [
            "$\\neg P \\land \\neg Q$",
            "$\\neg P \\lor \\neg Q$",
            "$P \\lor Q$",
            "$P \\land Q$",
        ],
        correctAnswer: 2,
    },
    {
        id: 58,
        text: "First Order Logic includes:",
        options: [
            "Propositions only",
            "Predicates and quantifiers",
            "Truth tables only",
            "Boolean operators only",
        ],
        correctAnswer: 2,
    },
    {
        id: 59,
        text: "The universal quantifier in First Order Logic is denoted by:",
        options: [
            "$\\exists$",
            "$\\forall$",
            "$\\land$",
            "$\\lor$",
        ],
        correctAnswer: 2,
    },
    {
        id: 60,
        text: "Knowledge representation in AI can be done using:\n\nA. Semantic networks\nB. Frames\nC. Production rules\nD. Predicate logic\n\nChoose the correct answer from the options given below:",
        options: [
            "A, B and C only",
            "B, C and D only",
            "A, C and D only",
            "A, B, C and D",
        ],
        correctAnswer: 4,
    },
    {
        id: 61,
        text: "In symmetric key cryptography, the same key is used for:",
        options: [
            "Encryption only",
            "Decryption only",
            "Both encryption and decryption",
            "Key generation only",
        ],
        correctAnswer: 3,
    },
    {
        id: 62,
        text: "The Caesar Cipher uses which type of technique?",
        options: [
            "Substitution",
            "Transposition",
            "Block cipher",
            "Stream cipher",
        ],
        correctAnswer: 1,
    },
    {
        id: 63,
        text: "In the Playfair cipher, the plaintext is divided into:",
        options: [
            "Single letters",
            "Digraphs (pairs of letters)",
            "Trigraphs (groups of three letters)",
            "Words",
        ],
        correctAnswer: 2,
    },
    {
        id: 64,
        text: "The Hill cipher is based on:",
        options: [
            "Modular arithmetic",
            "XOR operations",
            "Linear algebra and modular arithmetic",
            "Prime factorization",
        ],
        correctAnswer: 3,
    },
    {
        id: 65,
        text: "Which of the following is NOT a component of the CIA triad in network security?",
        options: [
            "Confidentiality",
            "Integrity",
            "Availability",
            "Authentication",
        ],
        correctAnswer: 4,
    },
    {
        id: 66,
        text: "A digital signature provides:\n\nA. Authentication\nB. Non-repudiation\nC. Confidentiality\nD. Integrity\n\nChoose the correct answer from the options given below:",
        options: [
            "A, B and D only",
            "A, B and C only",
            "B, C and D only",
            "A, B, C and D",
        ],
        correctAnswer: 1,
    },
    {
        id: 67,
        text: "A firewall operates at which layer(s) of the OSI model?",
        options: [
            "Physical layer only",
            "Network layer only",
            "Multiple layers (typically network and transport)",
            "Application layer only",
        ],
        correctAnswer: 3,
    },
    {
        id: 68,
        text: "Supervised learning requires:",
        options: [
            "Unlabeled data",
            "Labeled training data",
            "No training data",
            "Only test data",
        ],
        correctAnswer: 2,
    },
    {
        id: 69,
        text: "Which of the following is an example of unsupervised learning?",
        options: [
            "Classification",
            "Regression",
            "Clustering",
            "Supervised classification",
        ],
        correctAnswer: 3,
    },
    {
        id: 70,
        text: "In machine learning, overfitting occurs when:",
        options: [
            "Model performs well on training data but poorly on test data",
            "Model performs poorly on both training and test data",
            "Model performs well on test data but poorly on training data",
            "Model has too few parameters",
        ],
        correctAnswer: 1,
    },
    {
        id: 71,
        text: "K-means clustering algorithm requires:",
        options: [
            "The number of clusters to be specified beforehand",
            "Labeled data",
            "A decision tree",
            "Supervised learning",
        ],
        correctAnswer: 1,
    },
    {
        id: 72,
        text: "In a confusion matrix for binary classification, True Positive (TP) represents:",
        options: [
            "Correctly predicted negative instances",
            "Correctly predicted positive instances",
            "Incorrectly predicted positive instances",
            "Incorrectly predicted negative instances",
        ],
        correctAnswer: 2,
    },
    {
        id: 73,
        text: "The purpose of data normalization is to:",
        options: [
            "Increase data size",
            "Scale features to a similar range",
            "Remove all outliers",
            "Create more features",
        ],
        correctAnswer: 2,
    },
    {
        id: 74,
        text: "Which of the following is a measure of model performance in regression?\n\nA. Mean Squared Error (MSE)\nB. R-squared\nC. Mean Absolute Error (MAE)\nD. Accuracy\n\nChoose the correct answer from the options given below:",
        options: [
            "A, B and C only",
            "A, B and D only",
            "B, C and D only",
            "A, B, C and D",
        ],
        correctAnswer: 1,
    },
    {
        id: 75,
        text: "Reinforcement learning involves:",
        options: [
            "Learning from labeled examples",
            "Learning from rewards and penalties through interaction with environment",
            "Finding patterns in unlabeled data",
            "Supervised classification tasks",
        ],
        correctAnswer: 2,
    },
];