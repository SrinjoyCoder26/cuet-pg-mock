import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Syllabus = () => {
  const navigate = useNavigate();

  const syllabusTopics = [
    {
      title: "Set Theory & Algebra",
      content: "Sets; Relations; Functions; Compositions of functions and relations, Group; Partial Orders; Boolean Algebra."
    },
    {
      title: "Theory of Computations",
      content: "Finite Automata and Regular Expressions, on-determinism and NFA, Properties of Regular Sets, Context free grammar: Chomsky Normal Form (CNF), Griebach Normal Form (GNF), Push-down automata, Moore and mealy Machines, Turing machines."
    },
    {
      title: "Digital Logic",
      content: "Number representations and computer arithmetic (Fixed and floating point), Logic functions, Minimizations, Design and synthesis of combinational and sequential circuits, A/D AND D/A CONVERTERS."
    },
    {
      title: "Computer Organization and Architecture",
      content: "Machine instructions and addressing modes, ALU and data-path, CPU control design, memory interface, I/O interface (Interrupt and DMA mode), Instruction pipelining, Cache and main memory, Secondary storage."
    },
    {
      title: "Microprocessors and interfacing",
      content: "Instructions sets, addressing modes, Memory interfacing, interfacing peripheral devices, Interrupts. Microprocessor architecture, Instructions set and Programming (8085), Microprocessor applications, DMA, Interrupt and Timer."
    },
    {
      title: "Programming and Data Structures",
      content: "Programming in C; Functions, Recursion, Parameter passing, and Definition of data structure. Arrays, Stacks, Queues linked lists, trees, priority queues and heaps, Binary search trees."
    },
    {
      title: "Algorithm",
      content: "Algorithm concepts, Analyzing and design, asymptotic notations and their properties, Worst and average case analysis; Design: Greedy approach, Dynamic programming, Divide and conquer; Tree and graph transversals, Spanning trees, shortest paths: Hashing, Sorting Searching."
    },
    {
      title: "Operating System",
      content: "Main functions of operating systems, Processes, Threads, Interprocess communication, concurrency, Synchronization, Deadlock, CPU scheduling, I/O scheduling, Resource scheduling. Deadlock and scheduling algorithms, banker's algorithm for deadlock handling. Memory management and virtual memory. File Systems, I/O systems, DOS, UNIX and Windows."
    },
    {
      title: "Computer Networks",
      content: "OSI Model, TCP/IP model, LAN technologies (Ethernet, Token ring), Transmission media – twisted pair, coaxial cables fiber-optic cables, Flow and error control techniques, Routing algorithms, Congestion control, IP (v4), Application layer protocols (icmp, dns, smtp, pop, ftp, http); Sliding window protocols; Internetworking: Switch/Hub, Bridge, Router, Gateways, Concatenated virtual circuits, Firewalls: Network Security; Cryptography- public key, secret key. Domain Name System (DNS)-Electronic Mail and World Wide Web (WWW)."
    },
    {
      title: "Artificial Intelligence",
      content: "Basic concepts of AI; Intelligent agents; solving problems by searching – Uniformed search, Informed search; Logical agents; first order logic; knowledge representations."
    },
    {
      title: "Cryptography & Network security",
      content: "Computer & network security concepts, Classical encryption techniques: Symmetric cipher model, Caesar Cipher, Playfair Cipher, Hill Cipher."
    },
    {
      title: "Data Science",
      content: "Basic concepts; data, types of data–structured, unstructured; data representation, machine learning algorithms-supervised, unsupervised, reinforcement, clustering, classification and regression problems, data preprocessing, normalization, smoothing, visualization."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="max-w-5xl mx-auto py-8">
        <div className="mb-8">
          <Button
            variant="outline"
            onClick={() => navigate("/home")}
            className="mb-6"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Button>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white w-16 h-16 rounded-xl flex items-center justify-center">
                <BookOpen size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Syllabus</h1>
                <p className="text-gray-600">Data Science, Artificial Intelligence, Cyber Security etc. (MTQP04)</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <h2 className="font-semibold text-blue-900 mb-3">Exam Information:</h2>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• The Question Paper will have <strong>75 questions</strong></li>
                <li>• All questions will be based on <strong>Subject-Specific Knowledge</strong></li>
                <li>• All questions are <strong>compulsory</strong></li>
                <li>• The Question paper will be in <strong>English</strong></li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Topics</h2>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {syllabusTopics.map((topic, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl px-6 hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </span>
                      <span className="font-semibold text-gray-900">{topic.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4 text-gray-700 leading-relaxed">
                    {topic.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 flex gap-4">
              <Button
                onClick={() => navigate("/notes")}
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-xl"
              >
                Study Notes →
              </Button>
              <Button
                onClick={() => navigate("/exam")}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl"
              >
                Practice Mock Tests →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
