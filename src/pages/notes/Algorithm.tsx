import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Algorithm = () => {
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
              7
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Algorithm Analysis & Design</h1>
              <p className="text-gray-600">Complete notes for CUET PG MTQP04</p>
            </div>
          </div>

          {/* Algorithm Basics Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">7.1 Algorithm Fundamentals</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Algorithm Definition</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Algorithm:</strong> Step-by-step procedure to solve a problem with finite steps.</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Characteristics:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Input:</strong> Zero or more inputs</li>
                      <li><strong>Output:</strong> At least one output</li>
                      <li><strong>Definiteness:</strong> Each instruction is clear and unambiguous</li>
                      <li><strong>Finiteness:</strong> Terminates after finite steps</li>
                      <li><strong>Effectiveness:</strong> Each step is feasible</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Algorithm Analysis</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Time Complexity:</p>
                    <p>Amount of time taken by algorithm as function of input size.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Space Complexity:</p>
                    <p>Amount of memory used by algorithm as function of input size.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Asymptotic Notations Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">7.2 Asymptotic Notations</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Big-O Notation (O)</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Upper Bound (Worst Case):</p>
                    <p>f(n) = O(g(n)) if ∃ constants c, n₀ such that f(n) ≤ c·g(n) for all n ≥ n₀</p>
                    <p className="mt-2 text-sm text-gray-600">Represents maximum time algorithm can take</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Omega Notation (Ω)</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Lower Bound (Best Case):</p>
                    <p>f(n) = Ω(g(n)) if ∃ constants c, n₀ such that f(n) ≥ c·g(n) for all n ≥ n₀</p>
                    <p className="mt-2 text-sm text-gray-600">Represents minimum time algorithm will take</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Theta Notation (Θ)</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Tight Bound (Average Case):</p>
                    <p>f(n) = Θ(g(n)) if f(n) = O(g(n)) and f(n) = Ω(g(n))</p>
                    <p className="mt-2 text-sm text-gray-600">Represents exact asymptotic behavior</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Common Time Complexities (Fastest to Slowest):</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>O(1) - Constant</li>
                      <li>O(log n) - Logarithmic</li>
                      <li>O(n) - Linear</li>
                      <li>O(n log n) - Linearithmic</li>
                      <li>O(n²) - Quadratic</li>
                      <li>O(n³) - Cubic</li>
                      <li>O(2ⁿ) - Exponential</li>
                      <li>O(n!) - Factorial</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Analysis Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">7.3 Worst & Average Case Analysis</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Analysis Types</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Best Case:</p>
                    <p>Minimum time required for any input of size n</p>
                    <p className="text-sm mt-1">Example: Linear search finds element at first position - O(1)</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Average Case:</p>
                    <p>Expected time over all possible inputs of size n</p>
                    <p className="text-sm mt-1">Example: Linear search on average checks n/2 elements - O(n)</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Worst Case:</p>
                    <p>Maximum time required for any input of size n</p>
                    <p className="text-sm mt-1">Example: Linear search checks all n elements - O(n)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Greedy Approach Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">7.4 Greedy Approach</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Greedy Strategy</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Principle:</p>
                    <p>Make locally optimal choice at each step, hoping to find global optimum.</p>
                    <p className="mt-2"><strong>Greedy Choice Property:</strong> Local optimum leads to global optimum</p>
                    <p><strong>Optimal Substructure:</strong> Optimal solution contains optimal solutions to subproblems</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Classic Greedy Problems:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Activity Selection:</strong> Select maximum non-overlapping activities</li>
                      <li><strong>Fractional Knapsack:</strong> Maximize value, can take fractions</li>
                      <li><strong>Huffman Coding:</strong> Data compression using variable length codes</li>
                      <li><strong>Prim's Algorithm:</strong> Minimum Spanning Tree</li>
                      <li><strong>Kruskal's Algorithm:</strong> Minimum Spanning Tree</li>
                      <li><strong>Dijkstra's Algorithm:</strong> Shortest path from single source</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">When Greedy Fails:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>0/1 Knapsack (need dynamic programming)</li>
                      <li>Traveling Salesman Problem</li>
                      <li>Problems requiring backtracking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Dynamic Programming Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">7.5 Dynamic Programming</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">DP Fundamentals</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Core Concept:</p>
                    <p>Solve complex problems by breaking into simpler subproblems, storing results to avoid recomputation.</p>
                    <p className="mt-2"><strong>Overlapping Subproblems:</strong> Same subproblems solved multiple times</p>
                    <p><strong>Optimal Substructure:</strong> Optimal solution built from optimal subproblem solutions</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Approaches:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Top-Down (Memoization):</strong> Recursion + caching results</li>
                      <li><strong>Bottom-Up (Tabulation):</strong> Iteratively build table from base cases</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Classic DP Problems:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Fibonacci Numbers:</strong> F(n) = F(n-1) + F(n-2)</li>
                      <li><strong>0/1 Knapsack:</strong> Maximize value with weight constraint</li>
                      <li><strong>Longest Common Subsequence (LCS):</strong> Find longest common subsequence</li>
                      <li><strong>Longest Increasing Subsequence (LIS):</strong> Find longest increasing subsequence</li>
                      <li><strong>Matrix Chain Multiplication:</strong> Minimize multiplication operations</li>
                      <li><strong>Edit Distance:</strong> Minimum operations to convert string A to B</li>
                      <li><strong>Coin Change:</strong> Minimum coins to make amount</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">DP vs Greedy:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Greedy: Makes choice, never reconsiders</li>
                      <li>DP: Explores all possibilities, chooses best</li>
                      <li>Greedy is faster but doesn't always work</li>
                      <li>DP guarantees optimal but slower</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Divide and Conquer Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">7.6 Divide and Conquer</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">D&C Strategy</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Three Steps:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Divide:</strong> Break problem into smaller subproblems</li>
                      <li><strong>Conquer:</strong> Solve subproblems recursively</li>
                      <li><strong>Combine:</strong> Merge solutions of subproblems</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Classic Examples:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Merge Sort:</strong> Divide array, sort halves, merge - O(n log n)</li>
                      <li><strong>Quick Sort:</strong> Partition around pivot, sort partitions - O(n log n) avg</li>
                      <li><strong>Binary Search:</strong> Search in sorted array - O(log n)</li>
                      <li><strong>Strassen's Matrix Multiplication:</strong> Multiply matrices - O(n^2.81)</li>
                      <li><strong>Closest Pair of Points:</strong> Find closest pair in plane - O(n log n)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Master Theorem:</p>
                    <p>For recurrence T(n) = aT(n/b) + f(n):</p>
                    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
                      <li>If f(n) = O(n^c) where c &lt; log_b(a): T(n) = Θ(n^(log_b(a)))</li>
                      <li>If f(n) = Θ(n^c) where c = log_b(a): T(n) = Θ(n^c log n)</li>
                      <li>If f(n) = Ω(n^c) where c &gt; log_b(a): T(n) = Θ(f(n))</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Graph Traversals Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">7.7 Tree & Graph Traversals</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Graph Traversal Algorithms</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Breadth-First Search (BFS):</p>
                    <p className="mb-2">Explore all neighbors before going deeper. Uses Queue.</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Time: O(V + E), Space: O(V)</li>
                      <li>Finds shortest path in unweighted graph</li>
                      <li>Level-order traversal in trees</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Depth-First Search (DFS):</p>
                    <p className="mb-2">Explore as far as possible before backtracking. Uses Stack/Recursion.</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Time: O(V + E), Space: O(V)</li>
                      <li>Detect cycles in graph</li>
                      <li>Topological sorting</li>
                      <li>Find connected components</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Applications:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Path finding</li>
                      <li>Cycle detection</li>
                      <li>Connectivity checking</li>
                      <li>Topological sorting (DFS)</li>
                      <li>Shortest path (BFS)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Spanning Trees Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">7.8 Spanning Trees</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Minimum Spanning Tree (MST)</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Definition:</p>
                    <p>Spanning tree with minimum total edge weight in weighted graph.</p>
                    <p className="mt-2">For graph with V vertices, MST has exactly V-1 edges.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Kruskal's Algorithm:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Sort edges by weight</li>
                      <li>Add edge if doesn't create cycle (use Union-Find)</li>
                      <li>Time: O(E log E) or O(E log V)</li>
                      <li>Greedy approach: Choose minimum weight edge</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Prim's Algorithm:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Start from any vertex</li>
                      <li>Add minimum weight edge connecting tree to non-tree vertex</li>
                      <li>Time: O(E log V) with binary heap, O(E + V log V) with Fibonacci heap</li>
                      <li>Greedy approach: Grow tree one vertex at a time</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Shortest Paths Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">7.9 Shortest Path Algorithms</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Shortest Path Algorithms</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Dijkstra's Algorithm:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Single source shortest path</li>
                      <li>Only works with non-negative weights</li>
                      <li>Greedy approach using priority queue</li>
                      <li>Time: O((V + E) log V) with min-heap</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Bellman-Ford Algorithm:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Single source shortest path</li>
                      <li>Works with negative weights</li>
                      <li>Detects negative cycles</li>
                      <li>Time: O(VE)</li>
                      <li>Relax all edges V-1 times</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Floyd-Warshall Algorithm:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>All pairs shortest path</li>
                      <li>Dynamic programming approach</li>
                      <li>Time: O(V³), Space: O(V²)</li>
                      <li>Can detect negative cycles</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Hashing Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">7.10 Hashing</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hash Tables</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Concept:</p>
                    <p>Data structure that maps keys to values using hash function.</p>
                    <p className="mt-2"><strong>Hash Function:</strong> h(key) → index in array</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Hash Functions:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Division Method:</strong> h(k) = k mod m</li>
                      <li><strong>Multiplication Method:</strong> h(k) = ⌊m(kA mod 1)⌋</li>
                      <li><strong>Mid-Square Method:</strong> Square key, extract middle digits</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Collision Resolution:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Chaining:</strong> Store collisions in linked list at same index</li>
                      <li><strong>Open Addressing:</strong>
                        <ul className="list-disc ml-6 mt-1">
                          <li>Linear Probing: h(k, i) = (h(k) + i) mod m</li>
                          <li>Quadratic Probing: h(k, i) = (h(k) + c₁i + c₂i²) mod m</li>
                          <li>Double Hashing: h(k, i) = (h₁(k) + i·h₂(k)) mod m</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Performance:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Average case: O(1) for search, insert, delete</li>
                      <li>Worst case: O(n)</li>
                      <li>Load factor α = n/m (n = elements, m = table size)</li>
                      <li>Keep α &lt; 0.7 for good performance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sorting Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">7.11 Sorting Algorithms</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Comparison-Based Sorting</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Sorting Algorithm Comparison:</p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm border">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="border px-2 py-1">Algorithm</th>
                            <th className="border px-2 py-1">Best</th>
                            <th className="border px-2 py-1">Average</th>
                            <th className="border px-2 py-1">Worst</th>
                            <th className="border px-2 py-1">Space</th>
                            <th className="border px-2 py-1">Stable</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-2 py-1">Bubble Sort</td>
                            <td className="border px-2 py-1">O(n)</td>
                            <td className="border px-2 py-1">O(n²)</td>
                            <td className="border px-2 py-1">O(n²)</td>
                            <td className="border px-2 py-1">O(1)</td>
                            <td className="border px-2 py-1">Yes</td>
                          </tr>
                          <tr>
                            <td className="border px-2 py-1">Selection Sort</td>
                            <td className="border px-2 py-1">O(n²)</td>
                            <td className="border px-2 py-1">O(n²)</td>
                            <td className="border px-2 py-1">O(n²)</td>
                            <td className="border px-2 py-1">O(1)</td>
                            <td className="border px-2 py-1">No</td>
                          </tr>
                          <tr>
                            <td className="border px-2 py-1">Insertion Sort</td>
                            <td className="border px-2 py-1">O(n)</td>
                            <td className="border px-2 py-1">O(n²)</td>
                            <td className="border px-2 py-1">O(n²)</td>
                            <td className="border px-2 py-1">O(1)</td>
                            <td className="border px-2 py-1">Yes</td>
                          </tr>
                          <tr>
                            <td className="border px-2 py-1">Merge Sort</td>
                            <td className="border px-2 py-1">O(n log n)</td>
                            <td className="border px-2 py-1">O(n log n)</td>
                            <td className="border px-2 py-1">O(n log n)</td>
                            <td className="border px-2 py-1">O(n)</td>
                            <td className="border px-2 py-1">Yes</td>
                          </tr>
                          <tr>
                            <td className="border px-2 py-1">Quick Sort</td>
                            <td className="border px-2 py-1">O(n log n)</td>
                            <td className="border px-2 py-1">O(n log n)</td>
                            <td className="border px-2 py-1">O(n²)</td>
                            <td className="border px-2 py-1">O(log n)</td>
                            <td className="border px-2 py-1">No</td>
                          </tr>
                          <tr>
                            <td className="border px-2 py-1">Heap Sort</td>
                            <td className="border px-2 py-1">O(n log n)</td>
                            <td className="border px-2 py-1">O(n log n)</td>
                            <td className="border px-2 py-1">O(n log n)</td>
                            <td className="border px-2 py-1">O(1)</td>
                            <td className="border px-2 py-1">No</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Non-Comparison Sorting:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Counting Sort:</strong> O(n + k) - k is range of input</li>
                      <li><strong>Radix Sort:</strong> O(d(n + k)) - d is number of digits</li>
                      <li><strong>Bucket Sort:</strong> O(n + k) average case</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Searching Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">7.12 Searching Algorithms</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Search Techniques</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Linear Search:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Sequential check of each element</li>
                      <li>Works on unsorted arrays</li>
                      <li>Time: O(n)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Binary Search:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Divide and conquer on sorted array</li>
                      <li>Compare with middle element</li>
                      <li>Time: O(log n)</li>
                      <li>Space: O(1) iterative, O(log n) recursive</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Other Search Methods:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Interpolation Search:</strong> O(log log n) for uniformly distributed data</li>
                      <li><strong>Jump Search:</strong> O(√n) - Jump ahead by fixed steps</li>
                      <li><strong>Exponential Search:</strong> O(log n) - Find range then binary search</li>
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
                    <li><strong>Time Complexity Analysis:</strong> Master Big-O, Omega, Theta notations</li>
                    <li><strong>Sorting Comparison:</strong> Know complexities and when to use each</li>
                    <li><strong>Graph Algorithms:</strong> BFS, DFS, Dijkstra, MST algorithms</li>
                    <li><strong>DP vs Greedy:</strong> Understand when to use which approach</li>
                    <li><strong>Divide and Conquer:</strong> Master theorem, recursion tree</li>
                    <li><strong>Hashing:</strong> Collision resolution techniques</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-lg mb-3">📝 Common Exam Questions:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Analyze time complexity of given code</li>
                    <li>Trace sorting algorithm step-by-step</li>
                    <li>Find shortest path using Dijkstra</li>
                    <li>Build MST using Prim's or Kruskal's</li>
                    <li>Solve DP problem (knapsack, LCS)</li>
                    <li>Hash table with collision resolution</li>
                    <li>BFS/DFS traversal of graph</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-lg mb-3">⚡ Quick Reference:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Best general-purpose sort: Quick Sort (average O(n log n))</li>
                    <li>Stable sort needed: Merge Sort</li>
                    <li>Nearly sorted data: Insertion Sort</li>
                    <li>Shortest path (non-negative): Dijkstra O((V+E) log V)</li>
                    <li>All pairs shortest path: Floyd-Warshall O(V³)</li>
                    <li>MST: Kruskal O(E log E) or Prim O(E log V)</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-lg mb-3">⚠️ Common Mistakes:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Confusing best/average/worst case complexities</li>
                    <li>Using Dijkstra with negative weights (use Bellman-Ford)</li>
                    <li>Forgetting stability requirement in sorting</li>
                    <li>Not considering space complexity</li>
                    <li>Mixing up BFS (queue) and DFS (stack)</li>
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

export default Algorithm;
