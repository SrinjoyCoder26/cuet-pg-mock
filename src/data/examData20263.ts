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
    title: "CUET PG 2026 - Mock Test 3",
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
        text: "Let $A = \\{1, 2, 3\\}$ and $B = \\{4, 5\\}$. The number of functions from $A$ to $B$ is:",
        options: [
            "6",
            "8",
            "9",
            "12",
        ],
        correctAnswer: 2,
    },
    {
        id: 2,
        text: "In a group $(G, *)$, the identity element $e$ satisfies:",
        options: [
            "$e * a = a$ for all $a$ in $G$",
            "$a * e = a * a$ for all $a$ in $G$",
            "$e * a = a$ and $a * e = a$ for all $a$ in $G$",
            "$e * e = a$ for some $a$ in $G$",
        ],
        correctAnswer: 3,
    },
    {
        id: 3,
        text: "Which of the following is true for an equivalence relation?\n\nA. It partitions the set into disjoint equivalence classes\nB. It must be reflexive, symmetric, and transitive\nC. Each element belongs to exactly one equivalence class\nD. It must be antisymmetric\n\nChoose the correct answer from the options given below:",
        options: [
            "A, B and C only",
            "A, B and D only",
            "B, C and D only",
            "A, B, C and D",
        ],
        correctAnswer: 1,
    },
    {
        id: 4,
        text: "The dual of the Boolean expression $A + B \\cdot C$ is:",
        options: [
            "$A \\cdot B + C$",
            "$A \\cdot (B + C)$",
            "$(A + B) \\cdot C$",
            "$A + B + C$",
        ],
        correctAnswer: 2,
    },
    {
        id: 5,
        text: "Which of the following statements about regular languages is FALSE?",
        options: [
            "Regular languages are closed under union",
            "Regular languages are closed under intersection",
            "Regular languages are closed under complement",
            "All context-free languages are regular",
        ],
        correctAnswer: 4,
    },
    {
        id: 6,
        text: "The pumping lemma for regular languages is used to:",
        options: [
            "Prove a language is regular",
            "Prove a language is not regular",
            "Design finite automata",
            "Minimize DFA states",
        ],
        correctAnswer: 2,
    },
    {
        id: 7,
        text: "A context-free language can be recognized by:",
        options: [
            "Finite Automaton",
            "Push-down Automaton",
            "Linear Bounded Automaton",
            "Turing Machine",
        ],
        correctAnswer: 2,
    },
    {
        id: 8,
        text: "Which of the following problems is undecidable?",
        options: [
            "Whether a DFA accepts a given string",
            "Whether a CFG is ambiguous",
            "Whether two regular languages are equal",
            "Membership problem for regular languages",
        ],
        correctAnswer: 2,
    },
    {
        id: 9,
        text: "The language accepted by a Turing machine that always halts is called:",
        options: [
            "Recursively enumerable language",
            "Recursive language",
            "Context-free language",
            "Regular language",
        ],
        correctAnswer: 2,
    },
    {
        id: 10,
        text: "What is the octal representation of the hexadecimal number 1F?",
        options: [
            "37",
            "31",
            "27",
            "17",
        ],
        correctAnswer: 1,
    },
    {
        id: 11,
        text: "How many input combinations are possible for a 3-input logic gate?",
        options: [
            "3",
            "6",
            "8",
            "9",
        ],
        correctAnswer: 3,
    },
    {
        id: 12,
        text: "A full-adder circuit has:",
        options: [
            "2 inputs and 1 output",
            "3 inputs and 2 outputs",
            "2 inputs and 2 outputs",
            "3 inputs and 3 outputs",
        ],
        correctAnswer: 2,
    },
    {
        id: 13,
        text: "The simplified form of the Boolean expression $AB + AB'$ is:",
        options: [
            "$A$",
            "$B$",
            "$AB$",
            "$A + B$",
        ],
        correctAnswer: 1,
    },
    {
        id: 14,
        text: "In a synchronous counter, all flip-flops are triggered by:",
        options: [
            "Different clock pulses",
            "The same clock pulse simultaneously",
            "Cascaded outputs",
            "External reset signal",
        ],
        correctAnswer: 2,
    },
    {
        id: 15,
        text: "A 3-to-8 line decoder has how many enable inputs typically?",
        options: [
            "0",
            "1",
            "2",
            "3",
        ],
        correctAnswer: 2,
    },
    {
        id: 16,
        text: "Which of the following is NOT an addressing mode?",
        options: [
            "Immediate addressing",
            "Register addressing",
            "Sequential addressing",
            "Indexed addressing",
        ],
        correctAnswer: 3,
    },
    {
        id: 17,
        text: "In a computer system with cache memory, the effective access time depends on:\n\nA. Cache hit ratio\nB. Cache access time\nC. Main memory access time\nD. Disk access time\n\nChoose the correct answer from the options given below:",
        options: [
            "A, B and C only",
            "A, B and D only",
            "B, C and D only",
            "A, B, C and D",
        ],
        correctAnswer: 1,
    },
    {
        id: 18,
        text: "The speedup achieved by a pipelined processor is limited by:",
        options: [
            "Number of stages only",
            "Clock frequency only",
            "Pipeline hazards and dependencies",
            "Cache size",
        ],
        correctAnswer: 3,
    },
    {
        id: 19,
        text: "In a RISC (Reduced Instruction Set Computer) architecture:",
        options: [
            "Instructions are of variable length",
            "Most instructions complete in one clock cycle",
            "Complex addressing modes are used",
            "Few registers are available",
        ],
        correctAnswer: 2,
    },
    {
        id: 20,
        text: "The bus arbitration technique used when multiple devices request bus access simultaneously is:",
        options: [
            "Daisy chaining",
            "Priority arbitration",
            "Polling",
            "All of the above",
        ],
        correctAnswer: 4,
    },
    {
        id: 21,
        text: "In the 8085 microprocessor, which flag indicates that the result has even parity?",
        options: [
            "Sign flag",
            "Zero flag",
            "Parity flag",
            "Auxiliary carry flag",
        ],
        correctAnswer: 3,
    },
    {
        id: 22,
        text: "The instruction STA 3000H in 8085 performs:",
        options: [
            "Store accumulator content to memory location 3000H",
            "Load accumulator from memory location 3000H",
            "Add memory content to accumulator",
            "Subtract memory content from accumulator",
        ],
        correctAnswer: 1,
    },
    {
        id: 23,
        text: "How many hardware interrupts are available in 8085?",
        options: [
            "3",
            "4",
            "5",
            "8",
        ],
        correctAnswer: 3,
    },
    {
        id: 24,
        text: "The TRAP interrupt in 8085 is:",
        options: [
            "Maskable and edge-triggered",
            "Non-maskable and edge-triggered",
            "Maskable and level-triggered",
            "Non-maskable and level-triggered",
        ],
        correctAnswer: 2,
    },
    {
        id: 25,
        text: "The ALE (Address Latch Enable) signal in 8085 is used to:",
        options: [
            "Latch the address from AD0-AD7",
            "Enable interrupts",
            "Reset the processor",
            "Control I/O operations",
        ],
        correctAnswer: 1,
    },
    {
        id: 26,
        text: "What is the size of 'int' data type in C (on a 32-bit system)?",
        options: [
            "2 bytes",
            "4 bytes",
            "8 bytes",
            "Depends on compiler",
        ],
        correctAnswer: 2,
    },
    {
        id: 27,
        text: "In C, the operator '&&' has higher precedence than:",
        options: [
            "$||$",
            "$*$",
            "$==$",
            "$+$",
        ],
        correctAnswer: 1,
    },
    {
        id: 28,
        text: "A recursive function must have:",
        options: [
            "A base case",
            "Multiple parameters",
            "Return type void",
            "Global variables",
        ],
        correctAnswer: 1,
    },
    {
        id: 29,
        text: "The time complexity of accessing an element in an array by index is:",
        options: [
            "$O(1)$",
            "$O(\\log n)$",
            "$O(n)$",
            "$O(n^2)$",
        ],
        correctAnswer: 1,
    },
    {
        id: 30,
        text: "In a linked list implementation of a queue, which operation is most efficient at both ends?",
        options: [
            "Insertion only",
            "Deletion only",
            "Both insertion and deletion",
            "Neither insertion nor deletion",
        ],
        correctAnswer: 3,
    },
    {
        id: 31,
        text: "The infix expression $(A + B) * C - D$ can be converted to postfix as:",
        options: [
            "$AB+C*D-$",
            "$ABC+*D-$",
            "$AB+*CD-$",
            "$ABCD+*-$",
        ],
        correctAnswer: 1,
    },
    {
        id: 32,
        text: "A binary tree with n nodes has exactly how many NULL pointers?",
        options: [
            "n",
            "n - 1",
            "n + 1",
            "2n",
        ],
        correctAnswer: 3,
    },
    {
        id: 33,
        text: "The worst-case time complexity of searching in a binary search tree is:",
        options: [
            "$O(1)$",
            "$O(\\log n)$",
            "$O(n)$",
            "$O(n \\log n)$",
        ],
        correctAnswer: 3,
    },
    {
        id: 34,
        text: "An AVL tree is:",
        options: [
            "A binary tree",
            "A balanced binary search tree",
            "An unbalanced tree",
            "A complete binary tree",
        ],
        correctAnswer: 2,
    },
    {
        id: 35,
        text: "The time complexity of the best case for Insertion Sort is:",
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
        text: "Merge Sort is based on which algorithmic paradigm?",
        options: [
            "Greedy",
            "Dynamic Programming",
            "Divide and Conquer",
            "Backtracking",
        ],
        correctAnswer: 3,
    },
    {
        id: 37,
        text: "Which sorting algorithm has the best space complexity?",
        options: [
            "Merge Sort",
            "Quick Sort",
            "Heap Sort",
            "Counting Sort",
        ],
        correctAnswer: 3,
    },
    {
        id: 38,
        text: "The time complexity of linear search is:",
        options: [
            "$O(1)$",
            "$O(\\log n)$",
            "$O(n)$",
            "$O(n^2)$",
        ],
        correctAnswer: 3,
    },
    {
        id: 39,
        text: "Floyd-Warshall algorithm is used to find:",
        options: [
            "Single source shortest path",
            "All pairs shortest paths",
            "Minimum spanning tree",
            "Maximum flow",
        ],
        correctAnswer: 2,
    },
    {
        id: 40,
        text: "The activity selection problem can be optimally solved using:",
        options: [
            "Dynamic programming",
            "Greedy algorithm",
            "Backtracking",
            "Branch and bound",
        ],
        correctAnswer: 2,
    },
    {
        id: 41,
        text: "Bellman-Ford algorithm can handle:",
        options: [
            "Only positive edge weights",
            "Negative edge weights",
            "Only directed graphs",
            "Only undirected graphs",
        ],
        correctAnswer: 2,
    },
    {
        id: 42,
        text: "The space complexity of Breadth-First Search is:",
        options: [
            "$O(V)$",
            "$O(E)$",
            "$O(V + E)$",
            "$O(V \\times E)$",
        ],
        correctAnswer: 1,
    },
    {
        id: 43,
        text: "The recurrence relation $T(n) = 2T(n/2) + n$ has a solution of:",
        options: [
            "$O(n)$",
            "$O(n \\log n)$",
            "$O(n^2)$",
            "$O(\\log n)$",
        ],
        correctAnswer: 2,
    },
    {
        id: 44,
        text: "Which of the following is NOT a state of a process?",
        options: [
            "New",
            "Ready",
            "Waiting",
            "Sleeping",
        ],
        correctAnswer: 4,
    },
    {
        id: 45,
        text: "A zombie process is:",
        options: [
            "A process that has completed execution but still has an entry in process table",
            "A process waiting for I/O",
            "A process in ready queue",
            "A terminated process with no parent",
        ],
        correctAnswer: 1,
    },
    {
        id: 46,
        text: "In preemptive scheduling:",
        options: [
            "Process cannot be interrupted once it starts execution",
            "Process can be interrupted and moved to ready state",
            "Only I/O bound processes are scheduled",
            "No context switching occurs",
        ],
        correctAnswer: 2,
    },
    {
        id: 47,
        text: "Which scheduling algorithm gives minimum average waiting time?",
        options: [
            "FCFS",
            "SJF",
            "Round Robin",
            "Priority Scheduling",
        ],
        correctAnswer: 2,
    },
    {
        id: 48,
        text: "A critical section is a:",
        options: [
            "Code segment that can be executed by multiple processes simultaneously",
            "Code segment that accesses shared resources",
            "Code segment that never terminates",
            "Code segment with no loops",
        ],
        correctAnswer: 2,
    },
    {
        id: 49,
        text: "The wait() operation on a semaphore S:",
        options: [
            "Increments S",
            "Decrements S",
            "Sets S to 0",
            "Sets S to 1",
        ],
        correctAnswer: 2,
    },
    {
        id: 50,
        text: "Which of the following conditions is NOT necessary for deadlock?\n\nA. Mutual exclusion\nB. Preemption\nC. Hold and wait\nD. Circular wait\n\nChoose the correct answer from the options given below:",
        options: [
            "A only",
            "B only",
            "C only",
            "D only",
        ],
        correctAnswer: 2,
    },
    {
        id: 51,
        text: "In demand paging, a page fault occurs when:",
        options: [
            "A page is modified",
            "A page is accessed that is not in memory",
            "Memory is full",
            "CPU is idle",
        ],
        correctAnswer: 2,
    },
    {
        id: 52,
        text: "The optimal page replacement algorithm:",
        options: [
            "Is practical to implement",
            "Replaces the page that will not be used for the longest time",
            "Replaces the oldest page",
            "Replaces a random page",
        ],
        correctAnswer: 2,
    },
    {
        id: 53,
        text: "Internal fragmentation occurs in:",
        options: [
            "Fixed partitioning",
            "Dynamic partitioning",
            "Segmentation",
            "Virtual memory",
        ],
        correctAnswer: 1,
    },
    {
        id: 54,
        text: "The purpose of the checksum field in TCP/UDP is to:",
        options: [
            "Provide flow control",
            "Detect errors in transmitted data",
            "Provide congestion control",
            "Establish connection",
        ],
        correctAnswer: 2,
    },
    {
        id: 55,
        text: "In the TCP three-way handshake, the second message sent is:",
        options: [
            "SYN",
            "SYN + ACK",
            "ACK",
            "FIN",
        ],
        correctAnswer: 2,
    },
    {
        id: 56,
        text: "The subnet mask 255.255.255.192 represents how many hosts per subnet?",
        options: [
            "32",
            "62",
            "64",
            "128",
        ],
        correctAnswer: 2,
    },
    {
        id: 57,
        text: "ICMP (Internet Control Message Protocol) is used for:",
        options: [
            "File transfer",
            "Email delivery",
            "Error reporting and diagnostics",
            "Web browsing",
        ],
        correctAnswer: 3,
    },
    {
        id: 58,
        text: "The Stop-and-Wait protocol has an efficiency of:",
        options: [
            "100%",
            "Greater than 50%",
            "Depends on propagation delay and transmission time",
            "Always 50%",
        ],
        correctAnswer: 3,
    },
    {
        id: 59,
        text: "FTP uses which transport layer protocol?",
        options: [
            "UDP only",
            "TCP only",
            "Both TCP and UDP",
            "SCTP",
        ],
        correctAnswer: 2,
    },
    {
        id: 60,
        text: "A switch operates primarily at which OSI layer?",
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
        text: "Distance vector routing protocols use:",
        options: [
            "Dijkstra's algorithm",
            "Bellman-Ford algorithm",
            "Prim's algorithm",
            "Kruskal's algorithm",
        ],
        correctAnswer: 2,
    },
    {
        id: 62,
        text: "Which search algorithm is guaranteed to find the optimal solution if it exists?",
        options: [
            "Depth-First Search",
            "Breadth-First Search with unit costs",
            "Hill Climbing",
            "Greedy Best-First Search",
        ],
        correctAnswer: 2,
    },
    {
        id: 63,
        text: "In iterative deepening search, the depth limit is:",
        options: [
            "Fixed",
            "Gradually increased",
            "Gradually decreased",
            "Random",
        ],
        correctAnswer: 2,
    },
    {
        id: 64,
        text: "A heuristic function that never overestimates the cost to reach the goal is called:",
        options: [
            "Inadmissible",
            "Admissible",
            "Consistent",
            "Inconsistent",
        ],
        correctAnswer: 2,
    },
    {
        id: 65,
        text: "In propositional logic, $P \\to Q$ is equivalent to:",
        options: [
            "$\\neg P \\lor Q$",
            "$P \\land Q$",
            "$P \\lor \\neg Q$",
            "$\\neg P \\land \\neg Q$",
        ],
        correctAnswer: 1,
    },
    {
        id: 66,
        text: "The existential quantifier $\\exists x P(x)$ means:",
        options: [
            "$P(x)$ is true for all $x$",
            "$P(x)$ is true for at least one $x$",
            "$P(x)$ is false for all $x$",
            "$P(x)$ is false for at least one $x$",
        ],
        correctAnswer: 2,
    },
    {
        id: 67,
        text: "A knowledge base in AI consists of:",
        options: [
            "Facts only",
            "Rules only",
            "Both facts and rules",
            "Neither facts nor rules",
        ],
        correctAnswer: 3,
    },
    {
        id: 68,
        text: "Forward chaining in expert systems is:",
        options: [
            "Goal-driven reasoning",
            "Data-driven reasoning",
            "Backward reasoning",
            "Random reasoning",
        ],
        correctAnswer: 2,
    },
    {
        id: 69,
        text: "The main advantage of public key cryptography over symmetric key cryptography is:",
        options: [
            "Faster encryption",
            "No need for secure key exchange",
            "Simpler implementation",
            "Less computational overhead",
        ],
        correctAnswer: 2,
    },
    {
        id: 70,
        text: "A replay attack involves:",
        options: [
            "Retransmitting valid data to gain unauthorized access",
            "Modifying data during transmission",
            "Denying service to legitimate users",
            "Breaking encryption keys",
        ],
        correctAnswer: 1,
    },
    {
        id: 71,
        text: "Digital certificates are issued by:",
        options: [
            "Users themselves",
            "Certificate Authority (CA)",
            "Internet Service Providers",
            "Operating system vendors",
        ],
        correctAnswer: 2,
    },
    {
        id: 72,
        text: "In supervised learning, the training dataset consists of:",
        options: [
            "Input features only",
            "Output labels only",
            "Both input features and output labels",
            "Neither input nor output",
        ],
        correctAnswer: 3,
    },
    {
        id: 73,
        text: "The k-Nearest Neighbors (k-NN) algorithm is:\n\nA. A lazy learning algorithm\nB. An instance-based learning algorithm\nC. Can be used for both classification and regression\nD. Requires training phase to build a model\n\nChoose the correct answer from the options given below:",
        options: [
            "A, B and C only",
            "A, B and D only",
            "B, C and D only",
            "A, B, C and D",
        ],
        correctAnswer: 1,
    },
    {
        id: 74,
        text: "Feature scaling is important for algorithms that:",
        options: [
            "Use distance metrics",
            "Are tree-based",
            "Use frequency counts",
            "Are rule-based",
        ],
        correctAnswer: 1,
    },
    {
        id: 75,
        text: "The confusion matrix is used to evaluate:",
        options: [
            "Regression models",
            "Classification models",
            "Clustering algorithms",
            "Dimensionality reduction",
        ],
        correctAnswer: 2,
    },
];
