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
  title: "CUET PG 2025",
  subject: "Data Science, AI, Cyber Security & Computer Science",
  totalQuestions: 75,
  totalMarks: 300,
  correctMarks: 4,
  wrongMarks: -1,
  durationMinutes: 90,
  date: "29 March 2025 - Shift 1",
};

export const questions: Question[] = [
  {
    id: 1,
    text: "Consider the following relation R= {(4,5),(5,4),(7,6),(6,7)} on set I= {4,5,6,7}. Which of the following properties relation R does not have?\n\nA. Reflexive property\nB. Symmetric property\nC. Transitive property\nD. Antisymmetric property\n\nChoose the correct answer from the options given below:",
    options: [
      "A, C and D only",
      "A, B and D only",
      "A, B, C and D",
      "B, C and D only",
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    text: "If an algebraic system (M, *) where M is the set of all non-zero real numbers and * is a binary operator defined by X*Y = XY/4, which of the following properties are satisfied by M?\n\nA. Closure Property\nB. Associative Property\nC. Inverse property\nD. Commutative property\n\nChoose the correct answer from the options given below:",
    options: [
      "A, B and D only",
      "A, B and C only",
      "A, B, C and D",
      "B, C and D only",
    ],
    correctAnswer: 3,
  },
  {
    id: 3,
    text: "What will be the output after minimizing the following expression with the help of a K-map?\n\nF(X,Y) = XY + X'Y + YX'",
    options: ["X", "X + Y", "XY", "Y"],
    correctAnswer: 2,
  },
  {
    id: 4,
    text: "Find the least upper bound and greatest lower bound of S= {X,Y,Z} if they exist, of the poset whose Hasse diagram is shown below:",
    options: [
      "The least upper bound is T and the greatest lower bound is X",
      "The least upper bound is Z and the greatest lower bound is E",
      "The least upper bound is I and the greatest lower bound is Y",
      "The least upper bound is T and the greatest lower bound is Y",
    ],
    correctAnswer: 2,
  },
  {
    id: 5,
    text: "Which of the following is a valid property of a group homomorphism?",
    options: [
      "It preserves the group operation",
      "It reverses the group operation",
      "It only works for abelian groups",
      "It requires isomorphism",
    ],
    correctAnswer: 3,
  },
  {
    id: 6,
    text: "For a Non-deterministic Finite Automaton (NDFA) with N number of states, the equivalent Deterministic Finite Automaton (DFA) has D number of states. Then, possible number of states in DFA can be defined as:",
    options: ["N × 2", "N ÷ 2", "2^N", "N × D"],
    correctAnswer: 3,
  },
  {
    id: 7,
    text: "Suppose D1 = (S1, Σ, q1, F1, δ1) and D2 = (S2, Σ, q2, F2, δ2) are finite automata accepting languages L1 and L2, respectively. Then, which of the following languages will also be accepted by the finite automata:\n\nA. L1 ∪ L2\nB. L1 ∩ L2\nC. L1 - L2\nD. L2 - L1\n\nChoose the correct answer from the options given below:",
    options: [
      "A, B and D only",
      "A, B and C only",
      "A, B, C and D",
      "B, C and D only",
    ],
    correctAnswer: 4,
  },
  {
    id: 8,
    text: "Match LIST-I with LIST-II\n\nA. A Language L can be accepted by a Finite Automata, if and only if, the set of equivalence classes of I is finite → III. Myhill-Nerode Theorem\nB. For every finite automaton M = (Q, Σ, q0, A, δ), the language L(M) is regular → IV. Kleen's Theorem\nC. Let X and Y be two regular expressions over Σ. If X does not contain null, then the equation R = Y + RX in R, has a unique solution given by R = YX* → I. Arden's Theorem\nD. The regular expressions X and Y are equivalent if the corresponding finite automata are equivalent → II. Regular Expression Equivalence\n\nChoose the correct answer from the options given below:",
    options: [
      "A - I, B - IV, C - III, D - II",
      "A - I, B - III, C - II, D - IV",
      "A - I, B - II, C - IV, D - III",
      "A - III, B - IV, C - I, D - II",
    ],
    correctAnswer: 4,
  },
  {
    id: 9,
    text: "If Li is the set of languages of type i for i=0,1,2 or 3. Then, as per Chomsky hierarchy, arrange the given set of four languages in order from subset to super set, from left to right.\n\nA. L3\nB. L2\nC. L1\nD. L0\n\nChoose the correct answer from the options given below:",
    options: ["A, B, C, D", "A, C, D, B", "B, A, D, C", "C, B, D, A"],
    correctAnswer: 1,
  },
  {
    id: 10,
    text: "How many productions will be there, after constructing the reduced grammar for the given grammar below?\n\n1. X → aYa\n2. Y → Xb\n3. Y → bCC\n4. Y → ZaY\n5. C → abb\n6. C → ZZ\n7. E → aC\n8. Z → aZY",
    options: ["Three", "Four", "Five", "Six"],
    correctAnswer: 2,
  },
  {
    id: 11,
    text: "In a standard Turing Machine T, the transition function δ(q, a) for q ∈ Q and a ∈ Γ is defined:",
    options: [
      "For some, not necessarily for all elements of (q, a) ∈ Q × Γ",
      "For no element of (q, a) ∈ Q × Γ",
      "For all elements of (q, a) ∈ Q × Γ",
      "For a set of triples with more than one element",
    ],
    correctAnswer: 1,
  },
  {
    id: 12,
    text: "What will be the output, if we compute the 9's complement of the decimal number 782.54?",
    options: ["216.54", "217.45", "215.45", "216.45"],
    correctAnswer: 2,
  },
  {
    id: 13,
    text: "The given diagram is of a 4-bit switched current-source Digital to Analog Converter (DAC), where EREF = 10V and R = 5kΩ. What will be the output voltage Vout for the digital input 1101?",
    options: ["8.125V", "-8.125V", "-7.125V", "7.125V"],
    correctAnswer: 2,
  },
  {
    id: 14,
    text: "For the gate shown in the figure, the output will be HIGH:",
    options: [
      "If and only if both the inputs are LOW",
      "If and only if both the inputs are HIGH",
      "If one of the inputs is HIGH",
      "If one of the inputs is LOW",
    ],
    correctAnswer: 2,
  },
  {
    id: 15,
    text: "The Prime Implicant (PI) whose each 1 is covered by a minimum of one Essential Prime Implicant (EPI) is known as:",
    options: [
      "Essential prime implicant",
      "Selective prime implicant",
      "False prime implicant",
      "Redundant prime implicant",
    ],
    correctAnswer: 4,
  },
  {
    id: 16,
    text: "A parallel adder in which the carry-out of each full-adder is the carry-in to the next significant digit adder is known as:",
    options: [
      "Parallel carry adder",
      "Ripple carry adder",
      "Look-ahead-carry adder",
      "Serial carry adder",
    ],
    correctAnswer: 2,
  },
  {
    id: 17,
    text: "Which flip-flop is not widely available for commercial purposes?",
    options: ["T flip-flop", "SR flip-flop", "D flip-flop", "JK flip-flop"],
    correctAnswer: 1,
  },
  {
    id: 18,
    text: "The expression X = (A+B)*(C+D) has been evaluated using two address instructions method. The following is the set of instructions used.\n\nA. MOV R1, A; ADD R1, B\nB. MUL R1, R2\nC. MOV R2, C; ADD R2, D\nD. MOV X, R1\n\nChoose the correct sequence of instruction execution:",
    options: ["A, B, C, D", "A, C, B, D", "B, A, D, C", "C, B, D, A"],
    correctAnswer: 2,
  },
  {
    id: 19,
    text: "Which of the following instruction format is used by stack-organised computer?",
    options: [
      "Zero-Address Instructions",
      "One-Address Instructions",
      "Two-Address Instructions",
      "Three-Address Instructions",
    ],
    correctAnswer: 1,
  },
  {
    id: 20,
    text: "Match LIST-I with LIST-II\n\nA. Implied Mode → III. Zero-Address Instructions\nB. Relative Addressing Mode → IV. Content of program counter is added to the address part of the instruction to obtain effective address\nC. Immediate Mode → I. Operand is specified in the instruction itself\nD. Register Mode → II. Operand is in register\n\nChoose the correct answer from the options given below:",
    options: [
      "A - I, B - II, C - III, D - IV",
      "A - I, B - III, C - II, D - IV",
      "A - I, B - I, C - IV, D - III",
      "A - III, B - IV, C - I, D - II",
    ],
    correctAnswer: 4,
  },
  {
    id: 21,
    text: "Consider a pipeline system. Let tp = 20 ns, k = 4 segments, n = 100 tasks. For non-pipeline system, tn = ktp. Find the speedup of pipeline processing over non-pipeline processing to execute 100 tasks.",
    options: ["3.88", "0.08", "0.88", "1.88"],
    correctAnswer: 1,
  },
  {
    id: 22,
    text: "The major difficulties that cause the instruction pipeline to deviate from its normal operation are:\n\nA. Resource conflicts\nB. Stack operation\nC. Data dependency\nD. Branch difficulties\n\nChoose the correct answer from the options given below:",
    options: [
      "A, B and D only",
      "B and D only",
      "A, C and D only",
      "C and D only",
    ],
    correctAnswer: 3,
  },
  {
    id: 23,
    text: "Which among the following statement(s) is/are true in the context of a page replacement policy.\n\nA. The goal of a page replacement policy is to try to remove the page most likely to be referenced in the immediate future.\nB. FIFO and LRU are the two most common page replacement algorithms.\nC. The FIFO algorithm selects for replacement the page that has been in memory the longest time.\nD. LRU algorithm is based on the assumption that the least recently loaded page is a better candidate for removal.\n\nChoose the correct answer from the options given below:",
    options: [
      "A, B and D only",
      "B and D only",
      "B and C only",
      "B, C and D only",
    ],
    correctAnswer: 3,
  },
  {
    id: 24,
    text: "128 × 8 RAM represents:",
    options: [
      "The capacity of the memory is 128 words of 8 bits per word",
      "The capacity of the memory is 8 words of 128 bits per word",
      "The capacity of memory is 128 bits of 8 words per bit",
      "The capacity of memory is 8 bits of 128 words per bit",
    ],
    correctAnswer: 1,
  },
  {
    id: 25,
    text: "A conditional branch instruction in Microprocessor:",
    options: [
      "checks status of condition code flag and affects some flag register",
      "does not check condition code flag and does not affect any flag register",
      "does not check condition code flag and affects some flag register",
      "checks status of condition code flag and does not affect any flag register",
    ],
    correctAnswer: 4,
  },
  {
    id: 26,
    text: "Match LIST-I with LIST-II\n\nA. 4F → I. MOV C,A\nB. 80 → II. ADD B\nC. 47 → III. MOV B,A\nD. 76 → IV. HLT\n\nChoose the correct answer from the options given below:",
    options: [
      "A - I, B - I, C - III, D - IV",
      "A - I, B - II, C - III, D - IV",
      "A - I, B - II, C - IV, D - III",
      "A - III, B - IV, C - I, D - II",
    ],
    correctAnswer: 2,
  },
  {
    id: 27,
    text: "The time required to complete one operation of accessing memory, I/O, or acknowledging an external request by a microprocessor, is known as:",
    options: [
      "One Machine Cycle",
      "One Instruction Cycle",
      "One T-state",
      "One Clock period",
    ],
    correctAnswer: 1,
  },
  {
    id: 28,
    text: "Arrange these interrupt call locations in order of priority (from highest to lowest priority) of the interrupts with whom they are associated with:\n\nA. 003CH\nB. 0024H\nC. 0034H\nD. 002CH\n\nChoose the correct answer from the options given below:",
    options: ["A, B, C, D", "D, C, B, A", "B, A, D, C", "B, A, C, D"],
    correctAnswer: 4,
  },
  {
    id: 29,
    text: "Which of the following statements are applicable to 8237 DMA controller for working in the Master Mode:\n\nA. The signals I/O Read and I/O Write are kept in tri-state.\nB. The signals Memory Read and Memory Write are kept in tri-state.\nC. The signals I/O Read, I/O Write, Memory Read and Memory Write may all be used as per the data transfer requirement.\nD. The data transfer can be terminated by sending low End of Process (EOP) from outside, also.",
    options: [
      "A and D only",
      "B and D only",
      "C and D only",
      "B and C only",
    ],
    correctAnswer: 3,
  },
  {
    id: 30,
    text: "What will be the foldback memory address range of the following memory chip while interfacing with 8085 microprocessor?",
    options: [
      "2000H-20FFH",
      "2100H-27FFH",
      "2000H-27FFH",
      "2400H-24FFH",
    ],
    correctAnswer: 2,
  },
  {
    id: 31,
    text: "_______ refers to a set of data values and associated operations that are specified accurately, independent of any particular implementation.",
    options: [
      "Data Structure",
      "Abstract Data Type",
      "Data Type",
      "Array",
    ],
    correctAnswer: 2,
  },
  {
    id: 32,
    text: "Arrange the following data types available in C language according to their size (smallest to largest).\n\nA. signed long int\nB. long double\nC. unsigned char\nD. unsigned int",
    options: [
      "C, D, A, B",
      "C, A, D, B",
      "D, C, B, A",
      "C, D, B, A",
    ],
    correctAnswer: 4,
  },
  {
    id: 33,
    text: "Consider the following code blocks. Arrange the number of iterations of the loops (number of times 'statement block' is executed) in ascending order.\n\nA. for (i=0;i<1000;i++) statement block;\nB. for (i=0;i<100;i+=2) statement block;\nC. for (i=1;i<1000;i*=2) statement block;\nD. for (i=0;i<10;i++) for (j=0;j<10;j++) statement block;",
    options: [
      "C, B, D, A",
      "C, D, B, A",
      "D, C, B, A",
      "C, B, A, D",
    ],
    correctAnswer: 4,
  },
  {
    id: 34,
    text: "Match LIST-I with LIST-II\n\nA. The first index comes after the last index → III. Circular Queue\nB. More than one queue in the same array of sufficient size → IV. Multiple Queue\nC. Elements can be inserted or deleted at either end → I. Head-tail Linked List\nD. Each element is assigned a priority → II. Priority Queue\n\nChoose the correct answer from the options given below:",
    options: [
      "A - I, B - II, C - III, D - IV",
      "A - I, B - III, C - II, D - IV",
      "A - I, B - II, C - IV, D - III",
      "A - III, B - IV, C - I, D - II",
    ],
    correctAnswer: 4,
  },
  {
    id: 35,
    text: "Consider the following statements about arrays. Which of the following are TRUE?\n\nA. The index specifies an offset from the beginning of the array to the element being referenced.\nB. Declaring an array means specifying three parameters; data type, name, and its size.\nC. The length of an array is given by the number of elements stored in it.\nD. The name of an array is a symbolic reference to the address of the first byte of the array.\n\nChoose the correct answer from the options given below:",
    options: [
      "A, B and D only",
      "A, B and C only",
      "B, D and A only",
      "A, B, C and D",
    ],
    correctAnswer: 4,
  },
  {
    id: 36,
    text: "Consider the binary tree given below. What will be the corresponding infix expression to this?",
    options: [
      "((a + b + c * d)) % (f ^ g) / (g − h)",
      "(a + b) − (c * d) % ((f ^ i) + (g / h))",
      "((a + b) − (c * d)) % (f ^ g) / (h − i)",
      "((a + b) − (c * d)) / (f ^ g) / h − i)",
    ],
    correctAnswer: 3,
  },
  {
    id: 37,
    text: "Loop invariant allows us to understand and prove the correctness of an algorithm. Which of the following options is NOT to be proven, when we prove the correctness of any algorithm using loop invariant?",
    options: ["Sequence", "Initialization", "Maintenance", "Termination"],
    correctAnswer: 1,
  },
  {
    id: 38,
    text: "Match LIST-I with LIST-II\n\nA. Logarithmic O(lg n) → II. Finding an element in a sorted array\nB. Quadratic O(n²) → III. Bubble sort (worst case)\nC. Cubic O(n³) → IV. Matrix Multiplication\nD. Exponential O(2^n) → I. The Tower of Hanoi problem\n\nChoose the correct answer from the options given below:",
    options: [
      "A - I, B - III, C - IV, D - II",
      "A - II, B - III, C - IV, D - I",
      "A - II, B - IV, C - III, D - I",
      "A - III, B - IV, C - I, D - II",
    ],
    correctAnswer: 2,
  },
  {
    id: 39,
    text: "Which of the following is not the application of Divide and Conquer technique?",
    options: [
      "Quick Sort",
      "Strassen's Matrix Multiplication",
      "Linear Search",
      "Binary Search",
    ],
    correctAnswer: 3,
  },
  {
    id: 40,
    text: "In C language, mat[i][j] is equivalent to:\n(where mat[i][j] is a two dimensional array)",
    options: [
      "*(*(mat + i) + j)",
      "(mat + i) + j",
      "(mat + *i) + j)",
      "*(*(mat + j) + j)",
    ],
    correctAnswer: 1,
  },
  {
    id: 41,
    text: "Suppose a minimum spanning tree is to be generated for a graph whose edge weights are given below. Identify the graph which represents a valid minimum spanning tree?\n\nEdges: (1,2)=11, (3,6)=14, (4,6)=21, (2,6)=24, (1,4)=31, (3,5)=36",
    options: [
      "Graph with edges (1,2), (3,6), (4,6), (2,6), (1,4)",
      "Graph with edges (1,2), (2,6), (3,6), (4,6), (3,5)",
      "Graph with edges (1,2), (3,6), (2,6), (1,4), (3,5)",
      "Graph with edges (1,2), (3,6), (4,6), (1,4), (3,5)",
    ],
    correctAnswer: 1,
  },
  {
    id: 42,
    text: "Match LIST-I with LIST-II (Graphs with their corresponding Adjacency matrices)\n\nChoose the correct answer from the options given below:",
    options: [
      "A - I, B - I, C - III, D - IV",
      "A - I, B - III, C - II, D - IV",
      "A - I, B - II, C - IV, D - III",
      "A - III, B - IV, C - I, D - II",
    ],
    correctAnswer: 3,
  },
  {
    id: 43,
    text: "The time complexity in order to build a heap of 'n' elements is:",
    options: ["O(n lg n)", "O(n²)", "O(lg n²)", "O(lg lg n)"],
    correctAnswer: 1,
  },
  {
    id: 44,
    text: "The operating system is not responsible for:",
    options: [
      "process and thread management",
      "the creation and deletion of both user and system processes",
      "the development of the program",
      "the process scheduling",
    ],
    correctAnswer: 3,
  },
  {
    id: 45,
    text: "Process control block in operating system is defined as:",
    options: [
      "Each process is represented in the operating system by a process control block (PCB)—also called a task control block",
      "Process control block is used to store only process state",
      "Process control block is used to control a block",
      "Process control block tells us about logic behind process",
    ],
    correctAnswer: 1,
  },
  {
    id: 46,
    text: "In the context of process creation, arrange the following statements in sequential order of their occurrence.\n\nA. One of the two processes typically uses the exec() system call to replace the process's memory space with a new program.\nB. A new process is created by the fork() system call.\nC. The parent can then create more children; or, can issue a wait() system call.\nD. The exec() system call loads a binary file into memory and starts its execution.\n\nChoose the correct answer from the options given below:",
    options: ["A, B, C, D", "A, C, B, D", "B, A, D, C", "C, B, D, A"],
    correctAnswer: 3,
  },
  {
    id: 47,
    text: "A solution to the critical-section problem must satisfy:\n\nA. Mutual exclusion\nB. Progress\nC. Support Vector Machine\nD. Bounded waiting\n\nChoose the correct answer from the options given below:",
    options: [
      "A, B and D only",
      "A, B and C only",
      "A, B, C and D",
      "B, C and D only",
    ],
    correctAnswer: 1,
  },
  {
    id: 48,
    text: "Consider processes P1-P5 with burst times 10,1,2,1,5 and priorities 3,1,4,5,2 respectively. Using priority scheduling (1=highest), find the average waiting time.",
    options: [
      "5.2 milliseconds",
      "18.2 milliseconds",
      "288.2 milliseconds",
      "8.2 milliseconds",
    ],
    correctAnswer: 4,
  },
  {
    id: 49,
    text: "In a system with multiple instances of resources, the resource allocation graph for deadlock avoidance does NOT contain the following edge:",
    options: [
      "Request edge",
      "Assignment edge",
      "Claim edge",
      "Process edge",
    ],
    correctAnswer: 4,
  },
  {
    id: 50,
    text: "Consider a paging system: hit ratio = 80%, TLB access time = 100 ns, main memory access time = 100 ns. Find Effective Access Time (EAT), assuming page-table lookup takes only one memory access.",
    options: [
      "20 nanoseconds",
      "220 nanoseconds",
      "120 nanoseconds",
      "2 nanoseconds",
    ],
    correctAnswer: 3,
  },
  {
    id: 51,
    text: "A device which connects dissimilar LANs of different topologies, using different sets of communication protocols, is called:",
    options: ["Router", "Bridge", "Gateway", "Switch"],
    correctAnswer: 3,
  },
  {
    id: 52,
    text: "Match LIST-I with LIST-II\n\nA. Physical → I. Bit\nB. Data Link → II. Frame\nC. Network → IV. Packet\nD. Transport → III. TPDU\n\nChoose the correct answer from the options given below:",
    options: [
      "A - I, B - III, C - II, D - IV",
      "A - I, B - II, C - III, D - IV",
      "A - III, B - IV, C - I, D - II",
      "A - I, B - II, C - IV, D - III",
    ],
    correctAnswer: 4,
  },
  {
    id: 53,
    text: "Which of the following functionality is to be implemented by transport layer?",
    options: [
      "Recovery from packet loses",
      "Detection of duplicate packets",
      "Packet delivery in correct order",
      "End to end delivery",
    ],
    correctAnswer: 4,
  },
  {
    id: 54,
    text: "Match LIST-I with LIST-II\n\nA. 10Base5 → I. Thick coax\nB. 10Base2 → II. Thin coax\nC. 10Base-T → IV. Twisted pair\nD. 10Base-F → III. Fiber optics\n\nChoose the correct answer from the options given below:",
    options: [
      "A - I, B - II, C - IV, D - III",
      "A - III, B - IV, C - I, D - II",
      "A - I, B - II, C - III, D - IV",
      "A - I, B - III, C - II, D - IV",
    ],
    correctAnswer: 1,
  },
  {
    id: 55,
    text: "The data link layer has a number of specific functions. Which of the following are its functions?\n\nA. Providing a well-defined interface to the network layer\nB. Dealing with transmission errors\nC. Regulating the flow of data so that slow receivers are not swamped by fast senders\nD. Routing packets from the source machine to the destination machine\n\nChoose the correct answer from the options given below:",
    options: [
      "A, B and D only",
      "A and C only",
      "A, B, and C only",
      "B, C and D only",
    ],
    correctAnswer: 3,
  },
  {
    id: 56,
    text: "What will be the number of cross points needed for a full duplex 8 line cross point switch with no self connections?",
    options: ["64", "32", "28", "36"],
    correctAnswer: 3,
  },
  {
    id: 57,
    text: "Which of the following IP address can be used as a loop-back address?",
    options: [
      "255.255.255.255",
      "127.0.0.1",
      "0.0.0.0",
      "0.255.255.255",
    ],
    correctAnswer: 2,
  },
  {
    id: 58,
    text: "Arrange the following steps in order in which they take place, while solving problems using State Space Approach.\n\nA. Identify the set of rules (all possible actions)\nB. Describe the states\nC. Identify the initial state followed by the goal state\nD. Find the solution path in the state space\n\nChoose the correct answer from the options given below:",
    options: ["A, C, B, D", "A, B, C, D", "B, C, A, D", "C, B, D, A"],
    correctAnswer: 3,
  },
  {
    id: 59,
    text: "With respect to Artificial Intelligence, find the correct properties of an agent.\n\nA. An agent's choice of action at any given instant does not depend on its built-in knowledge.\nB. Agents do not interact with the environment.\nC. Agents interact with the environment through sensors and actuators.\nD. An agent's choice of action at any given instant can depend on its built-in knowledge and on the entire percept sequence observed to date.\n\nChoose the correct answer from the options given below:",
    options: [
      "A, B and D only",
      "C and D only",
      "A, B, C and D",
      "B, C and D only",
    ],
    correctAnswer: 2,
  },
  {
    id: 60,
    text: "Match LIST-I with LIST-II\n\nA. Completeness → III. Is the algorithm guaranteed to find a solution when there is one?\nB. Cost optimality → IV. Does it find a solution with the lowest path cost?\nC. Time complexity → I. How long does it take to find a solution?\nD. Space complexity → II. How much memory is needed?\n\nChoose the correct answer from the options given below:",
    options: [
      "A - III, B - IV, C - I, D - II",
      "A - I, B - II, C - III, D - IV",
      "A - I, B - II, C - IV, D - III",
      "A - II, B - IV, C - III, D - I",
    ],
    correctAnswer: 1,
  },
  {
    id: 61,
    text: "Match LIST-I with LIST-II (Logical Equivalences)\n\nA. (α → β) ≡ (¬β → ¬α) → IV. Contraposition\nB. (α ↔ β) ≡ ((α → β) ∧ (β → α)) → I. Biconditional elimination\nC. ¬(α ∨ β) ≡ (¬α ∧ ¬β) → II. De Morgan's law\nD. (α ∨ (β ∧ γ)) ≡ ((α ∨ β) ∧ (α ∨ γ)) → III. Distributivity of ∨ over ∧\n\nChoose the correct answer from the options given below:",
    options: [
      "A - I, B - II, C - III, D - IV",
      "A - I, B - II, C - IV, D - III",
      "A - IV, B - I, C - II, D - III",
      "A - III, B - IV, C - I, D - II",
    ],
    correctAnswer: 3,
  },
  {
    id: 62,
    text: "Convert the following statement into First Order Logic.\n\n\"For every s, if s is a student, then s is a player\"",
    options: [
      "∃s player(s) → student(s)",
      "∀s player(s) → student(s)",
      "∃s student(s) → player(s)",
      "∀s student(s) → player(s)",
    ],
    correctAnswer: 4,
  },
  {
    id: 63,
    text: "Consider the following arguments and determine whether they are valid.\n\nA. Either I will get good marks or I will not graduate. If I did not graduate I will go to America. I got good marks. Thus, I would not go to America.\nB. Either I will pass the examination or I will not graduate. If I do not graduate I will go to America. I failed. Thus, I will go to America.\nC. If I study then I will pass examination. If I do not go to shopping then I will study. But I failed examination. Therefore, I went to shopping.\nD. If the mall is free then there is no inflation. If there is no inflation then there are price controls. Since there are price controls, therefore, the mall is free.\n\nChoose the correct valid arguments:",
    options: [
      "A and D only",
      "A, C and D only",
      "A, B and D only",
      "A, B, C and D",
    ],
    correctAnswer: 4,
  },
  {
    id: 64,
    text: "If we encrypt the following plain text using rail fence technique with depth 2, what will be the encrypted message?\n\nPlain Text = DIFFICULTWAYLEADSTODESTINATION",
    options: [
      "DFIUTALASOETNTOIFCLWYEDTDSIAIN",
      "DFIUTALASOETNTDSIAINOIFCLWYEDT",
      "DFIUTALAYEDTDSIAINSOETNTOIFCLW",
      "DFIUTOIFCLWYEDTDSIAINTALASOET",
    ],
    correctAnswer: 1,
  },
  {
    id: 65,
    text: "In Playfair cipher what happens when two identical letters appear in the same pair?",
    options: [
      "letters must be separated with a filler letter such as 'x'",
      "one letter must be deleted",
      "letters must be swapped",
      "both letters must be deleted",
    ],
    correctAnswer: 1,
  },
  {
    id: 66,
    text: "Match LIST-I with LIST-II\n\nA. Encipherment → I. The use of mathematical algorithms to transform data into a form that is not readily intelligible\nB. Digital Signature → II. Cryptographic transformation that allows a recipient to prove the source and integrity\nC. Access Control → IV. A variety of mechanisms that enforce access rights to resources\nD. Data Integrity → III. A variety of mechanisms used to assure the integrity of a data unit\n\nChoose the correct answer from the options given below:",
    options: [
      "A - I, B - I, C - IV, D - III",
      "A - I, B - II, C - III, D - IV",
      "A - I, B - III, C - II, D - IV",
      "A - III, B - IV, C - I, D - II",
    ],
    correctAnswer: 1,
  },
  {
    id: 67,
    text: "Which of the following is not included in the CIA triad?",
    options: [
      "Integrity",
      "Availability",
      "Authenticity",
      "Confidentiality",
    ],
    correctAnswer: 3,
  },
  {
    id: 68,
    text: "If a cryptanalyst only knows the encryption algorithm and ciphertext, then which type of attack can be performed by him?",
    options: [
      "Known Plaintext Attack",
      "Ciphertext Only Attack",
      "Chosen plaintext attack",
      "Chosen text attack",
    ],
    correctAnswer: 2,
  },
  {
    id: 69,
    text: "If it is known that a given ciphertext is Caesar Cipher, then a brute-force cryptanalysis requires _____ keys to try.",
    options: ["25", "26", "2^25", "2^26"],
    correctAnswer: 1,
  },
  {
    id: 70,
    text: "The agent observes input-output pairs and learns a function that maps from input to output. For example, the inputs could be camera images, each one accompanied by an output saying \"bus\" or \"pedestrian\". This type of learning is known as:",
    options: [
      "Supervised",
      "Unsupervised",
      "Reinforcement",
      "Semi-supervised",
    ],
    correctAnswer: 1,
  },
  {
    id: 71,
    text: "_______ is the process of computing the distribution over past states given evidence up to the present.",
    options: [
      "Smoothing",
      "Normalization",
      "Clustering",
      "Alpha Normalization",
    ],
    correctAnswer: 1,
  },
  {
    id: 72,
    text: "When the output is one of a finite set of values (such as sunny/cloudy/rainy or true/false), the learning problem is known as:",
    options: [
      "Classification",
      "Clustering",
      "Regression",
      "Optimization",
    ],
    correctAnswer: 1,
  },
  {
    id: 73,
    text: "Which model is represented by a graph showing a linear relationship between variables?",
    options: [
      "Logistic regression model",
      "Simple Linear regression model",
      "Multiple linear regression model",
      "k nearest neighbor model",
    ],
    correctAnswer: 2,
  },
  {
    id: 74,
    text: "The term \"Residual\" is defined as:",
    options: [
      "Fraction of all the test data's variance that is accounted for by the model",
      "The difference between the value predicted for a data point and the actual observed value",
      "A regression method where we tune our model parameters so as to minimize sum of the distances between data points",
      "Actual predicted value",
    ],
    correctAnswer: 2,
  },
  {
    id: 75,
    text: "Which among the following is not a valid distance specifying criteria between the clusters, in the context of hierarchical clustering?",
    options: [
      "Single linkage",
      "Group Average",
      "Complete Linkage",
      "Double linkage",
    ],
    correctAnswer: 4,
  },
];
