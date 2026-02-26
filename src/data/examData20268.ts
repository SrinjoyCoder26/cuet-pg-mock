import { ExamConfig, Question } from "./examTypes";

export const examConfig: ExamConfig = {
    title: "CUET PG 2026 - Mock Test Series VIII",
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
        text: "What is the value of `d` after the following C code snippet is executed?\n```c\nint a = 10, b = 20, c = 30;\ndouble d = a / b * c;\n```",
        options: [
            "15.0",
            "0.0",
            "15",
            "0.5"
        ],
        correctAnswer: 2,
    },
    {
        id: 2,
        text: "A Red-Black Tree with $n$ internal nodes has a height $h$ which is at most:",
        options: [
            "$2 \\times \\log_2(n + 1)$",
            "$\\log_2(n)$",
            "$n - 1$",
            "$2 \\times n$"
        ],
        correctAnswer: 1,
    },
    {
        id: 3,
        text: "The postfix expression `5 3 * 6 2 / + 3 5 * +` evaluates to:",
        options: [
            "33",
            "42",
            "21",
            "51"
        ],
        correctAnswer: 1,
    },
    {
        id: 4,
        text: "The recurrence relation $T(n) = 3T(n/4) + n \\log n$ is solved by which of the following Master Theorem cases?",
        options: [
            "Case 1: $T(n) = \\Theta(n \\log n)$",
            "Case 2: $T(n) = \\Theta(n \\log^2 n)$",
            "Case 3: $T(n) = \\Theta(n \\log n)$",
            "The Master Theorem does not apply."
        ],
        correctAnswer: 3,
    },
    {
        id: 5,
        text: "Which of the following data structures provides the most efficient time complexity for finding and removing the minimum element?",
        options: [
            "Unsorted Array",
            "Sorted Array",
            "Binary Search Tree",
            "Min-Heap"
        ],
        correctAnswer: 4,
    },
    {
        id: 6,
        text: "Given two sorted lists of size $m$ and $n$. The number of comparisons needed in the worst case by the merge algorithm of Merge Sort is:",
        options: [
            "$m \\times n$",
            "$\\max(m, n)$",
            "$\\min(m, n)$",
            "$m + n - 1$"
        ],
        correctAnswer: 4,
    },
    {
        id: 7,
        text: "What is the maximum number of nodes in a binary tree of height $k$ (where the root is at height 0)?",
        options: [
            "$2^k - 1$",
            "$2^{k+1} - 1$",
            "$2^k$",
            "$2^k + 1$"
        ],
        correctAnswer: 2,
    },
    {
        id: 8,
        text: "Which of the following algorithmic paradigms is most suitable for solving the Tower of Hanoi problem?",
        options: [
            "Greedy",
            "Dynamic Programming",
            "Recursion (Divide and Conquer)",
            "Backtracking"
        ],
        correctAnswer: 3,
    },
    {
        id: 9,
        text: "The asymptotic complexity $\\Theta(g(n))$ notation represents:",
        options: [
            "Only the asymptotic upper bound.",
            "Only the asymptotic lower bound.",
            "An asymptotic tight bound.",
            "A non-tight upper bound."
        ],
        correctAnswer: 3,
    },
    {
        id: 10,
        text: "In C, if `p` is a pointer to an integer, what does the expression `*p++` do?",
        options: [
            "Increments the value pointed to by `p`.",
            "Increments the pointer `p` itself, and then dereferences the original address.",
            "Dereferences `p`, and then increments the pointer `p` itself.",
            "Dereferences `p`, and then increments the value at that address."
        ],
        correctAnswer: 3,
    },
    {
        id: 11,
        text: "**Match List-I (Problem) with List-II (Optimal Paradigm):**\n\n| List-I | List-II |\n|---|---|\n| A. 0/1 Knapsack | I. Greedy |\n| B. Fractional Knapsack | II. Backtracking |\n| C. N-Queens Problem | III. Divide and Conquer |\n| D. Strassen's Matrix Multiplication | IV. Dynamic Programming |",
        options: [
            "A-IV, B-I, C-II, D-III",
            "A-I, B-IV, C-II, D-III",
            "A-IV, B-I, C-III, D-II",
            "A-I, B-IV, C-III, D-II"
        ],
        correctAnswer: 1,
    },
    {
        id: 12,
        text: "The `static` storage class in C, when used with a local variable, ensures that the variable:",
        options: [
            "Is stored in a register for faster access.",
            "Can be accessed from other files.",
            "Retains its value between function calls.",
            "Is allocated on the heap instead of the stack."
        ],
        correctAnswer: 3,
    },
    {
        id: 13,
        text: "A circular queue is implemented in an array of size $N$. The condition for the queue being full is:",
        options: [
            "`rear == N - 1`",
            "`front == (rear + 1) % N`",
            "`rear == front`",
            "`front == -1`"
        ],
        correctAnswer: 2,
    },
    {
        id: 14,
        text: "The worst-case time complexity of randomized quicksort is:",
        options: [
            "$O(n \\log n)$",
            "$O(n)$",
            "$O(n^2)$",
            "$O(\\log n)$"
        ],
        correctAnswer: 3,
    },
    {
        id: 15,
        text: "What is the minimum number of stacks required to implement a queue?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        correctAnswer: 2,
    },
    {
        id: 16,
        text: "In a simple undirected graph with $V$ vertices, what is the maximum number of edges?",
        options: [
            "$V(V - 1) / 2$",
            "$V - 1$",
            "$V^2$",
            "$V(V + 1) / 2$"
        ],
        correctAnswer: 1,
    },
    {
        id: 17,
        text: "A function $f(n)$ is defined by $f(1) = 1$ and $f(n) = f(n-1) + 1/n$ for $n > 1$. The value of $f(n)$ is approximately:",
        options: [
            "$\\log(n)$",
            "$n$",
            "$n^2$",
            "$\\log(\\log(n))$"
        ],
        correctAnswer: 1,
    },
    {
        id: 18,
        text: "What does `sizeof(void)` return in a standard C compiler?",
        options: [
            "0",
            "1",
            "It results in a compile-time error.",
            "4"
        ],
        correctAnswer: 3,
    },
    {
        id: 19,
        text: "Which of the following is **NOT** a property of a valid B-Tree of order $m$?",
        options: [
            "All leaf nodes are at the same level.",
            "Every node except the root must have at least $\\lceil m/2 \\rceil$ children.",
            "The root has at least two children unless it is a leaf.",
            "All internal nodes must be at least half-full with keys."
        ],
        correctAnswer: 2,
    },
    {
        id: 20,
        text: "The primary advantage of a Doubly Linked List over a Singly Linked List is:",
        options: [
            "It requires less memory per node.",
            "It allows for traversal in both directions.",
            "Insertion at the beginning is faster.",
            "It can be implemented without pointers."
        ],
        correctAnswer: 2,
    },
    {
        id: 21,
        text: "A CPU has a clock rate of 2.5 GHz. If a program takes 10 billion clock cycles to execute, what is the execution time?",
        options: [
            "4 seconds",
            "0.4 seconds",
            "2.5 seconds",
            "40 seconds"
        ],
        correctAnswer: 1,
    },
    {
        id: 22,
        text: "What is the simplified Boolean expression for $F(x, y, z) = xy + x'z + yz$?",
        options: [
            "$xy + x'z$",
            "$xy + z$",
            "$x'z + y$",
            "$x + y + z$"
        ],
        correctAnswer: 1,
    },
    {
        id: 23,
        text: "A 4-way set associative cache has 128 sets. The block size is 64 bytes. What is the total size of the cache?",
        options: [
            "32 KB",
            "64 KB",
            "128 KB",
            "8 KB"
        ],
        correctAnswer: 1,
    },
    {
        id: 24,
        text: "A memory address in a system is 32 bits long. The system uses a 2-way set-associative cache of size 64 KB with a block size of 32 bytes. How many bits are used for the tag field?",
        options: [
            "16",
            "17",
            "18",
            "11"
        ],
        correctAnswer: 2,
    },
    {
        id: 25,
        text: "The race-around condition in a JK flip-flop occurs when:",
        options: [
            "$J=0, K=0$ and the clock pulse is too short.",
            "$J=1, K=1$ and the clock pulse is too long.",
            "$J=1, K=0$ and the clock is low.",
            "$J=0, K=1$ and the clock is high."
        ],
        correctAnswer: 2,
    },
    {
        id: 26,
        text: "An instruction `MOV A, [R0]` uses which addressing mode?",
        options: [
            "Register",
            "Direct",
            "Register Indirect",
            "Immediate"
        ],
        correctAnswer: 3,
    },
    {
        id: 27,
        text: "A machine has a byte-addressable memory of $2^{32}$ bytes. Its processor has 32 registers of 32 bits each. An instruction is of length 4 bytes and has a 2-address format. If one operand is a register and the other is a memory location, how many bits are left for the opcode?",
        options: [
            "-5 bits (impossible)",
            "3 bits",
            "4 bits",
            "7 bits"
        ],
        correctAnswer: 1,
    },
    {
        id: 28,
        text: "The process of polling in I/O management involves:",
        options: [
            "The CPU repeatedly checking the status of an I/O device.",
            "The I/O device sending a signal to the CPU when it is ready.",
            "The I/O device transferring data directly to memory.",
            "The CPU executing a special interrupt service routine."
        ],
        correctAnswer: 1,
    },
    {
        id: 29,
        text: "The decimal number $-15$ is to be stored in an 8-bit two's complement representation. What is the binary value?",
        options: [
            "11110001",
            "10001111",
            "11110000",
            "00001111"
        ],
        correctAnswer: 1,
    },
    {
        id: 30,
        text: "A `write-back` cache policy is generally more efficient than `write-through` because:",
        options: [
            "It reduces the traffic to main memory.",
            "It ensures data in cache and memory is always consistent.",
            "It is simpler to implement.",
            "It does not require a dirty bit."
        ],
        correctAnswer: 1,
    },
    {
        id: 31,
        text: "To implement a multiplexer that selects one of 32 data inputs, how many select lines are required?",
        options: [
            "4",
            "5",
            "6",
            "32"
        ],
        correctAnswer: 2,
    },
    {
        id: 32,
        text: "A processor has a CPI (Cycles Per Instruction) of 1.5 and a clock rate of 2 GHz. What is its MIPS (Million Instructions Per Second) rating?",
        options: [
            "1333",
            "3000",
            "1500",
            "2000"
        ],
        correctAnswer: 1,
    },
    {
        id: 33,
        text: "Which of the following interrupts is both non-maskable and has the highest priority in an 8085 microprocessor?",
        options: [
            "INTR",
            "RST 7.5",
            "RST 6.5",
            "TRAP"
        ],
        correctAnswer: 4,
    },
    {
        id: 34,
        text: "In RISC architecture, instructions are typically:",
        options: [
            "Complex and variable in length.",
            "Simple, of fixed length, and executed in a single clock cycle.",
            "Focused on memory-to-memory operations.",
            "Implemented using a microprogrammed control unit."
        ],
        correctAnswer: 2,
    },
    {
        id: 35,
        text: "The purpose of a carry-lookahead adder is to:",
        options: [
            "Reduce the propagation delay of the carry bit.",
            "Use fewer logic gates than a ripple-carry adder.",
            "Correct errors in addition.",
            "Perform subtraction using addition."
        ],
        correctAnswer: 1,
    },
    {
        id: 36,
        text: "Which of the following is **NOT** one of the four necessary conditions for a deadlock to occur?",
        options: [
            "Mutual Exclusion",
            "Hold and Wait",
            "Preemption",
            "Circular Wait"
        ],
        correctAnswer: 3,
    },
    {
        id: 37,
        text: "A system uses a Translation Lookaside Buffer (TLB) to speed up paging. If a TLB hit occurs, the memory access:",
        options: [
            "Requires one memory access (for the data).",
            "Requires two memory accesses (one for page table, one for data).",
            "Requires zero memory accesses as the data is in the TLB.",
            "Results in a page fault."
        ],
        correctAnswer: 1,
    },
    {
        id: 38,
        text: "Consider the following processes with their arrival times and burst times. What is the average waiting time using the Shortest Remaining Time First (SRTF) algorithm?\n\n| Process | Arrival Time | Burst Time |\n|---|---|---|\n| P1 | 0 | 8 |\n| P2 | 1 | 4 |\n| P3 | 2 | 9 |\n| P4 | 3 | 5 |",
        options: [
            "6.0",
            "7.75",
            "9.5",
            "5.25"
        ],
        correctAnswer: 1,
    },
    {
        id: 39,
        text: "The transport layer protocol UDP is:",
        options: [
            "Connection-oriented and reliable.",
            "Connectionless and reliable.",
            "Connection-oriented and unreliable.",
            "Connectionless and unreliable."
        ],
        correctAnswer: 4,
    },
    {
        id: 40,
        text: "Which of the following is **NOT** a solution to the critical section problem?",
        options: [
            "Peterson's Solution",
            "Test-and-Set Lock",
            "Semaphore",
            "Banker's Algorithm"
        ],
        correctAnswer: 4,
    },
    {
        id: 41,
        text: "Thrashing in an operating system is a state where:",
        options: [
            "The CPU is constantly busy executing processes.",
            "The system spends excessive time paging data to and from the disk.",
            "A deadlock has occurred, and no process can proceed.",
            "Too many processes are in the ready queue."
        ],
        correctAnswer: 2,
    },
    {
        id: 42,
        text: "In the OSI model, which layer is responsible for logical addressing (e.g., IP addresses)?",
        options: [
            "Data Link Layer",
            "Network Layer",
            "Transport Layer",
            "Physical Layer"
        ],
        correctAnswer: 2,
    },
    {
        id: 43,
        text: "Which of the following statements about kernel-level threads is **TRUE**?",
        options: [
            "They are managed by a user-level library without kernel involvement.",
            "If one thread in a process blocks, the entire process blocks.",
            "The kernel is aware of them and schedules them independently.",
            "They are faster to create and manage than user-level threads."
        ],
        correctAnswer: 3,
    },
    {
        id: 44,
        text: "Which subnet mask would you use to create 30 subnets in a Class C network?",
        options: [
            "255.255.255.192",
            "255.255.255.224",
            "255.255.255.240",
            "255.255.255.248"
        ],
        correctAnswer: 4,
    },
    {
        id: 45,
        text: "The \"sticky bit\" on a directory in a UNIX-like system ensures that:",
        options: [
            "Only the owner of the directory can create files in it.",
            "Files in the directory can only be deleted by their owner, the directory owner, or root.",
            "The directory cannot be deleted.",
            "All files created in the directory inherit its group ID."
        ],
        correctAnswer: 2,
    },
    {
        id: 46,
        text: "What is the purpose of Network Address Translation (NAT)?",
        options: [
            "To resolve domain names to IP addresses.",
            "To map multiple private IP addresses to a single public IP address.",
            "To encrypt data packets.",
            "To determine the MAC address for a given IP address."
        ],
        correctAnswer: 2,
    },
    {
        id: 47,
        text: "A test-and-set instruction is an atomic operation used for:",
        options: [
            "Implementing mutual exclusion.",
            "Paging.",
            "CPU scheduling.",
            "Memory allocation."
        ],
        correctAnswer: 1,
    },
    {
        id: 48,
        text: "Which protocol is stateless?",
        options: [
            "TCP",
            "FTP",
            "HTTP",
            "Telnet"
        ],
        correctAnswer: 3,
    },
    {
        id: 49,
        text: "An operating system uses a fixed partitioning scheme with partitions of size 100K, 500K, 200K, 300K, and 600K. If processes of size 212K, 417K, 112K, and 426K arrive, which partition remains free using the Best-Fit algorithm?",
        options: [
            "The 600K partition.",
            "The 100K partition.",
            "The 500K partition.",
            "The 300K partition."
        ],
        correctAnswer: 1,
    },
    {
        id: 50,
        text: "A \"zero-day\" vulnerability is one that:",
        options: [
            "Takes zero days to fix.",
            "Is discovered and exploited by attackers before the vendor is aware or has a patch.",
            "Only affects systems on the first day of their deployment.",
            "Can be exploited with zero programming skill."
        ],
        correctAnswer: 2,
    },
    {
        id: 51,
        text: "The language $L = \\{w \\mid w$ is a string of 'a's and 'b's with an equal number of 'a's and 'b's$\\}$ is:",
        options: [
            "Regular",
            "Context-Free",
            "Context-Sensitive but not Context-Free",
            "Not recursively enumerable"
        ],
        correctAnswer: 2,
    },
    {
        id: 52,
        text: "According to the Pumping Lemma for regular languages, a sufficiently long string $s$ in a regular language $L$ can be pumped. This means:",
        options: [
            "The string $s$ can be divided into $uvw$ such that $uv^iw$ is in $L$ for all $i \\geq 0$.",
            "The string $s$ can be divided into $xyz$ such that $xy^iz$ is in $L$ for all $i \\geq 0$.",
            "The string $s$ can be divided into $uvwxy$ such that $uv^iwx^iy$ is in $L$ for all $i \\geq 0$.",
            "The language $L$ must be infinite."
        ],
        correctAnswer: 2,
    },
    {
        id: 53,
        text: "An AI agent that uses a model of the world and considers how its actions will affect the world's state is a:",
        options: [
            "Simple Reflex Agent",
            "Model-based Reflex Agent",
            "Goal-based Agent",
            "Utility-based Agent"
        ],
        correctAnswer: 2,
    },
    {
        id: 54,
        text: "The regular expression for the set of all binary strings where any 1 is immediately followed by a 0 is:",
        options: [
            "$(10)^*$",
            "$(0^*(10))^*$",
            "$(0 + 10)^*$",
            "$0^* (10\\ 0^*)^*$"
        ],
        correctAnswer: 4,
    },
    {
        id: 55,
        text: "The Church-Turing thesis states that:",
        options: [
            "Any problem that can be solved by a computer can be solved by a Turing Machine.",
            "Turing Machines can solve all mathematical problems.",
            "The Halting Problem is undecidable.",
            "Any function computable by an algorithm can be computed by a Turing Machine."
        ],
        correctAnswer: 4,
    },
    {
        id: 56,
        text: "In First-Order Logic, $\\neg\\exists x\\ P(x)$ is equivalent to:",
        options: [
            "$\\exists x\\ \\neg P(x)$",
            "$\\forall x\\ \\neg P(x)$",
            "$\\forall x\\ P(x)$",
            "$\\neg\\forall x\\ P(x)$"
        ],
        correctAnswer: 2,
    },
    {
        id: 57,
        text: "The set of all Turing Machines that halt on a blank tape is:",
        options: [
            "Regular",
            "Context-Free",
            "Recursively Enumerable (Turing Recognizable)",
            "Recursive (Decidable)"
        ],
        correctAnswer: 3,
    },
    {
        id: 58,
        text: "Which search algorithm is also known as \"uninformed search\"?",
        options: [
            "A* Search",
            "Greedy Best-First Search",
            "Breadth-First Search",
            "Iterative Deepening A*"
        ],
        correctAnswer: 3,
    },
    {
        id: 59,
        text: "The set of context-free languages is **NOT** closed under:",
        options: [
            "Union",
            "Intersection",
            "Concatenation",
            "Kleene Star"
        ],
        correctAnswer: 2,
    },
    {
        id: 60,
        text: "The primary purpose of the alpha-beta pruning algorithm is to:",
        options: [
            "Find the optimal solution in any search problem.",
            "Reduce the number of nodes evaluated in a minimax search tree.",
            "Convert a search problem into a logic problem.",
            "Handle games with an element of chance."
        ],
        correctAnswer: 2,
    },
    {
        id: 61,
        text: "Which of the following is a key assumption made by the Naive Bayes classifier?",
        options: [
            "The features are continuous.",
            "The features are conditionally independent given the class.",
            "The features are highly correlated.",
            "The dataset follows a normal distribution."
        ],
        correctAnswer: 2,
    },
    {
        id: 62,
        text: "A model with high bias and low variance is:",
        options: [
            "Overfitting the data.",
            "Underfitting the data.",
            "A well-generalized model.",
            "A model with too many features."
        ],
        correctAnswer: 2,
    },
    {
        id: 63,
        text: "Which evaluation metric is most appropriate for a classification task where the cost of a False Negative is much higher than the cost of a False Positive?",
        options: [
            "Accuracy",
            "Precision",
            "Recall (Sensitivity)",
            "Specificity"
        ],
        correctAnswer: 3,
    },
    {
        id: 64,
        text: "The process of using Principal Component Analysis (PCA) on a dataset is an example of:",
        options: [
            "Supervised learning",
            "Reinforcement learning",
            "Feature selection",
            "Dimensionality reduction (unsupervised)"
        ],
        correctAnswer: 4,
    },
    {
        id: 65,
        text: "A student scores 85 on a test where the class mean is 70 and the standard deviation is 5. What is their Z-score?",
        options: [
            "+3.0",
            "+2.0",
            "-3.0",
            "+15.0"
        ],
        correctAnswer: 1,
    },
    {
        id: 66,
        text: "What is the \"curse of dimensionality\" in machine learning?",
        options: [
            "The exponential increase in data required to maintain density as the number of features increases.",
            "The problem of having too many rows in a dataset.",
            "The issue of models becoming too simple as features increase.",
            "The problem of features being highly correlated."
        ],
        correctAnswer: 1,
    },
    {
        id: 67,
        text: "A digital signature provides which of the following security services?",
        options: [
            "Confidentiality and Integrity only.",
            "Authentication, Non-repudiation, and Integrity.",
            "Confidentiality and Availability only.",
            "Authentication and Confidentiality only."
        ],
        correctAnswer: 2,
    },
    {
        id: 68,
        text: "What is the role of the activation function in a neural network?",
        options: [
            "To normalize the input data.",
            "To determine the learning rate.",
            "To introduce non-linearity into the model.",
            "To initialize the weights."
        ],
        correctAnswer: 3,
    },
    {
        id: 69,
        text: "In an ROC curve, the Y-axis represents:",
        options: [
            "True Positive Rate (Recall/Sensitivity)",
            "False Positive Rate",
            "Precision",
            "Accuracy"
        ],
        correctAnswer: 1,
    },
    {
        id: 70,
        text: "Which of the following is a distance metric commonly used for clustering categorical data?",
        options: [
            "Euclidean Distance",
            "Manhattan Distance",
            "Minkowski Distance",
            "Hamming Distance"
        ],
        correctAnswer: 4,
    },
    {
        id: 71,
        text: "A p-value of 0.03 in a statistical test with a significance level (alpha) of 0.05 means that:",
        options: [
            "We fail to reject the null hypothesis.",
            "We reject the null hypothesis.",
            "The null hypothesis is true.",
            "The alternative hypothesis is false."
        ],
        correctAnswer: 2,
    },
    {
        id: 72,
        text: "A SQL injection attack primarily targets the:",
        options: [
            "Confidentiality of data.",
            "Availability of a system.",
            "Integrity and confidentiality of a database.",
            "Network layer of a system."
        ],
        correctAnswer: 3,
    },
    {
        id: 73,
        text: "The purpose of cross-validation is to:",
        options: [
            "Train a model faster.",
            "Assess how the results of a model will generalize to an independent dataset.",
            "Increase the training accuracy of a model.",
            "Select the features for a model."
        ],
        correctAnswer: 2,
    },
    {
        id: 74,
        text: "An ensemble learning method where multiple models are trained sequentially, with each model learning from the errors of the previous one, is called:",
        options: [
            "Bagging (e.g., Random Forest)",
            "Boosting (e.g., Gradient Boosting)",
            "Stacking",
            "Voting"
        ],
        correctAnswer: 2,
    },
    {
        id: 75,
        text: "In the context of database transactions, the \"A\" in ACID stands for:",
        options: [
            "Availability",
            "Atomicity",
            "Accuracy",
            "Authentication"
        ],
        correctAnswer: 2,
    },
];
