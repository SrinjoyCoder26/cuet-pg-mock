import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProgrammingDataStructures = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="max-w-5xl mx-auto py-8">
        <Button
          variant="outline"
          onClick={() => navigate("/notes")}
          className="mb-6"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Notes
        </Button>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold">
              6
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Programming & Data Structures</h1>
              <p className="text-gray-600">Complete notes for CUET PG MTQP04</p>
            </div>
          </div>

          {/* Programming in C Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">6.1 Programming in C</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Basic Structure</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="bg-white p-4 rounded font-mono text-sm">
                    <pre>{`#include <stdio.h>

int main() {
    // Your code here
    printf("Hello, World!\\n");
    return 0;
}`}</pre>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Data Types:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>int:</strong> Integer (4 bytes, -2³¹ to 2³¹-1)</li>
                      <li><strong>float:</strong> Floating point (4 bytes, ~7 decimal digits)</li>
                      <li><strong>double:</strong> Double precision (8 bytes, ~15 decimal digits)</li>
                      <li><strong>char:</strong> Character (1 byte, -128 to 127)</li>
                      <li><strong>void:</strong> No type</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Control Structures</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Conditional Statements:</p>
                    <ul className="text-sm space-y-1 list-disc ml-4">
                      <li>if-else</li>
                      <li>switch-case</li>
                      <li>Ternary operator (? :)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Loops:</p>
                    <ul className="text-sm space-y-1 list-disc ml-4">
                      <li>for loop</li>
                      <li>while loop</li>
                      <li>do-while loop</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Functions Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">6.2 Functions</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Function Basics</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Function Syntax:</p>
                    <div className="font-mono text-sm bg-gray-50 p-3 rounded">
                      return_type function_name(parameter_list) {`{`}<br/>
                      &nbsp;&nbsp;// function body<br/>
                      &nbsp;&nbsp;return value;<br/>
                      {`}`}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Types of Functions:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Library Functions:</strong> printf(), scanf(), sqrt(), etc.</li>
                      <li><strong>User-defined Functions:</strong> Created by programmer</li>
                      <li><strong>Recursive Functions:</strong> Function calling itself</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Parameter Passing</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Call by Value:</p>
                    <p className="mb-2">Copy of actual parameter is passed. Changes don't affect original.</p>
                    <div className="bg-gray-50 p-3 rounded font-mono text-sm">
                      void swap(int a, int b) {`{`}<br/>
                      &nbsp;&nbsp;int temp = a; a = b; b = temp;<br/>
                      {`}`}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Call by Reference:</p>
                    <p className="mb-2">Address of actual parameter is passed. Changes affect original.</p>
                    <div className="bg-gray-50 p-3 rounded font-mono text-sm">
                      void swap(int *a, int *b) {`{`}<br/>
                      &nbsp;&nbsp;int temp = *a; *a = *b; *b = temp;<br/>
                      {`}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recursion Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">6.3 Recursion</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Recursion Concepts</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Definition:</p>
                    <p>A function that calls itself directly or indirectly.</p>
                    <p className="mt-2"><strong>Base Case:</strong> Stopping condition to prevent infinite recursion</p>
                    <p><strong>Recursive Case:</strong> Problem reduced to smaller subproblem</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Example: Factorial</p>
                    <div className="bg-gray-50 p-3 rounded font-mono text-sm">
                      int factorial(int n) {`{`}<br/>
                      &nbsp;&nbsp;if (n == 0) return 1; // Base case<br/>
                      &nbsp;&nbsp;return n * factorial(n - 1); // Recursive case<br/>
                      {`}`}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Types of Recursion:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Direct:</strong> Function calls itself</li>
                      <li><strong>Indirect:</strong> Function A calls B, B calls A</li>
                      <li><strong>Tail Recursion:</strong> Recursive call is last statement</li>
                      <li><strong>Non-tail Recursion:</strong> Operations after recursive call</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Arrays Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">6.4 Arrays</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Array Fundamentals</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Definition:</p>
                    <p>Collection of elements of same type stored in contiguous memory locations.</p>
                    <p className="mt-2 font-mono text-sm">int arr[10]; // 1D array</p>
                    <p className="font-mono text-sm">int matrix[3][4]; // 2D array</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Properties:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Index starts from 0</li>
                      <li>Fixed size (static allocation)</li>
                      <li>Constant time access: O(1)</li>
                      <li>Memory Address: base_address + (index × size_of_element)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">2D Array Storage:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Row-Major:</strong> Row by row (C, C++, Java)</li>
                      <li><strong>Column-Major:</strong> Column by column (Fortran, MATLAB)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stacks Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">6.5 Stacks</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Stack Data Structure</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Definition:</p>
                    <p><strong>LIFO (Last In First Out)</strong> linear data structure</p>
                    <p className="mt-2">Operations performed at one end called TOP</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Basic Operations:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>push(x):</strong> Insert element at top - O(1)</li>
                      <li><strong>pop():</strong> Remove element from top - O(1)</li>
                      <li><strong>peek()/top():</strong> Return top element - O(1)</li>
                      <li><strong>isEmpty():</strong> Check if stack is empty - O(1)</li>
                      <li><strong>isFull():</strong> Check if stack is full - O(1)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Applications:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Function call stack (recursion)</li>
                      <li>Expression evaluation (infix to postfix)</li>
                      <li>Parenthesis matching</li>
                      <li>Undo/Redo operations</li>
                      <li>Backtracking algorithms</li>
                      <li>Browser history</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Queues Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">6.6 Queues</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Queue Data Structure</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Definition:</p>
                    <p><strong>FIFO (First In First Out)</strong> linear data structure</p>
                    <p className="mt-2">Insertion at REAR, Deletion at FRONT</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Basic Operations:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>enqueue(x):</strong> Insert element at rear - O(1)</li>
                      <li><strong>dequeue():</strong> Remove element from front - O(1)</li>
                      <li><strong>front():</strong> Return front element - O(1)</li>
                      <li><strong>isEmpty():</strong> Check if queue is empty - O(1)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Types of Queues:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Simple Queue:</strong> Basic FIFO</li>
                      <li><strong>Circular Queue:</strong> Last position connects to first</li>
                      <li><strong>Priority Queue:</strong> Elements have priorities</li>
                      <li><strong>Double-Ended Queue (Deque):</strong> Insert/delete at both ends</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Applications:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>CPU scheduling</li>
                      <li>Disk scheduling</li>
                      <li>BFS traversal</li>
                      <li>Print spooler</li>
                      <li>Request handling in web servers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Linked Lists Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">6.7 Linked Lists</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Linked List Fundamentals</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Definition:</p>
                    <p>Linear data structure where elements (nodes) are not stored in contiguous memory.</p>
                    <p className="mt-2"><strong>Node Structure:</strong> Data + Pointer to next node</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Types:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Singly Linked List:</strong> Each node has pointer to next node</li>
                      <li><strong>Doubly Linked List:</strong> Pointers to both next and previous nodes</li>
                      <li><strong>Circular Linked List:</strong> Last node points to first node</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Operations:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Insertion at beginning:</strong> O(1)</li>
                      <li><strong>Insertion at end:</strong> O(n) or O(1) with tail pointer</li>
                      <li><strong>Deletion:</strong> O(n) to find, O(1) to delete</li>
                      <li><strong>Search:</strong> O(n)</li>
                      <li><strong>Traversal:</strong> O(n)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Advantages vs Arrays:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Dynamic size</li>
                      <li>Efficient insertion/deletion at beginning</li>
                      <li>No memory wastage</li>
                    </ul>
                    <p className="font-semibold mt-3 mb-2">Disadvantages:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>No random access</li>
                      <li>Extra memory for pointers</li>
                      <li>Not cache friendly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trees Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">6.8 Trees</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tree Data Structure</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Definition:</p>
                    <p>Hierarchical, non-linear data structure with root and children forming parent-child relationships.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Tree Terminology:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Root:</strong> Top node with no parent</li>
                      <li><strong>Parent:</strong> Node with children</li>
                      <li><strong>Child:</strong> Node with parent</li>
                      <li><strong>Leaf:</strong> Node with no children</li>
                      <li><strong>Height:</strong> Longest path from root to leaf</li>
                      <li><strong>Depth:</strong> Length of path from root to node</li>
                      <li><strong>Degree:</strong> Number of children of a node</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Binary Tree:</p>
                    <p>Tree where each node has at most 2 children (left and right)</p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li><strong>Full Binary Tree:</strong> Every node has 0 or 2 children</li>
                      <li><strong>Complete Binary Tree:</strong> All levels filled except last, filled left to right</li>
                      <li><strong>Perfect Binary Tree:</strong> All internal nodes have 2 children, all leaves at same level</li>
                      <li><strong>Max nodes at level i:</strong> 2ⁱ</li>
                      <li><strong>Max nodes in tree of height h:</strong> 2^(h+1) - 1</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Tree Traversals:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Inorder (LNR):</strong> Left → Node → Right</li>
                      <li><strong>Preorder (NLR):</strong> Node → Left → Right</li>
                      <li><strong>Postorder (LRN):</strong> Left → Right → Node</li>
                      <li><strong>Level Order:</strong> Level by level (BFS)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Priority Queues & Heaps Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">6.9 Priority Queues & Heaps</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Priority Queue</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Definition:</p>
                    <p>Abstract data type where each element has a priority. Elements with higher priority are served before lower priority.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Operations:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>insert(x, priority):</strong> Add element with priority</li>
                      <li><strong>extractMax()/extractMin():</strong> Remove highest/lowest priority element</li>
                      <li><strong>peek():</strong> Get highest priority element without removing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Heap</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Definition:</p>
                    <p>Complete binary tree that satisfies heap property. Efficiently implements priority queue.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Types:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Max Heap:</strong> Parent ≥ Children (root is maximum)</li>
                      <li><strong>Min Heap:</strong> Parent ≤ Children (root is minimum)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Array Representation:</p>
                    <p>For node at index i:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Left child: 2i + 1</li>
                      <li>Right child: 2i + 2</li>
                      <li>Parent: (i - 1) / 2</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Operations:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>insert:</strong> O(log n) - Insert at end, heapify up</li>
                      <li><strong>extractMax/Min:</strong> O(log n) - Remove root, heapify down</li>
                      <li><strong>getMax/Min:</strong> O(1)</li>
                      <li><strong>heapify:</strong> O(log n)</li>
                      <li><strong>buildHeap:</strong> O(n)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Applications:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Heap Sort</li>
                      <li>Priority Queue implementation</li>
                      <li>Dijkstra's shortest path</li>
                      <li>Prim's MST algorithm</li>
                      <li>Median maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Binary Search Trees Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">6.10 Binary Search Trees (BST)</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">BST Properties</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Definition:</p>
                    <p>Binary tree where for each node:</p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>All values in left subtree &lt; node value</li>
                      <li>All values in right subtree &gt; node value</li>
                      <li>Both left and right subtrees are also BSTs</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Operations:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Search:</strong> O(h) - h is height</li>
                      <li><strong>Insert:</strong> O(h)</li>
                      <li><strong>Delete:</strong> O(h)</li>
                      <li><strong>Find Min/Max:</strong> O(h)</li>
                      <li><strong>Inorder Traversal:</strong> Gives sorted order</li>
                    </ul>
                    <p className="mt-2 text-sm text-gray-600">
                      Best case: h = log n (balanced tree)<br/>
                      Worst case: h = n (skewed tree)
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Deletion Cases:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Node is leaf:</strong> Simply remove</li>
                      <li><strong>Node has one child:</strong> Replace with child</li>
                      <li><strong>Node has two children:</strong> Replace with inorder successor/predecessor</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Balanced BSTs:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>AVL Tree:</strong> Height difference ≤ 1</li>
                      <li><strong>Red-Black Tree:</strong> Color-based balancing</li>
                      <li>Guarantee O(log n) operations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Exam Tips Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-500">Exam Tips & Important Points</h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-lg mb-3">🎯 High Priority Topics:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Recursion vs Iteration:</strong> Know differences, when to use each</li>
                    <li><strong>Stack vs Queue:</strong> LIFO vs FIFO, applications</li>
                    <li><strong>Tree Traversals:</strong> Be able to trace inorder, preorder, postorder</li>
                    <li><strong>BST Operations:</strong> Search, insert, delete algorithms</li>
                    <li><strong>Heap Properties:</strong> Max heap vs min heap, array representation</li>
                    <li><strong>Time Complexities:</strong> Know Big-O for all operations</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-lg mb-3">📝 Common Exam Questions:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Convert recursive function to iterative using stack</li>
                    <li>Trace tree traversal for given tree</li>
                    <li>Insert/delete in BST step by step</li>
                    <li>Build heap from array</li>
                    <li>Applications of different data structures</li>
                    <li>Compare array vs linked list</li>
                    <li>Evaluate postfix expression using stack</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-lg mb-3">⚡ Quick Formulas:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Array address: base + (index × element_size)</li>
                    <li>2D array (row-major): base + ((i × cols) + j) × size</li>
                    <li>Heap parent: (i-1)/2, left child: 2i+1, right child: 2i+2</li>
                    <li>Max nodes in binary tree of height h: 2^(h+1) - 1</li>
                    <li>Min height of complete binary tree with n nodes: log₂(n+1) - 1</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-lg mb-3">⚠️ Common Mistakes to Avoid:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Forgetting base case in recursion</li>
                    <li>Array index out of bounds</li>
                    <li>Not handling empty list/tree cases</li>
                    <li>Confusing call by value and call by reference</li>
                    <li>Wrong heap property (max vs min)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProgrammingDataStructures;
