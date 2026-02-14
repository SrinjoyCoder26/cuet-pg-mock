import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import FormulaBox from "@/components/diagrams/FormulaBox";
import WorkedExample from "@/components/diagrams/WorkedExample";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

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
                    <p className="mb-3">Represents the maximum time/space an algorithm can take</p>
                    <div className="bg-gray-50 p-4 rounded">
                      <BlockMath math="f(n) = O(g(n)) \text{ if } \exists \text{ constants } c > 0, n_0 > 0" />
                      <BlockMath math="\text{such that } 0 \leq f(n) \leq c \cdot g(n) \text{ for all } n \geq n_0" />
                    </div>
                  </div>
                </div>
              </div>

              <FormulaBox
                title="Big-O Notation - Formal Definition"
                formulas={[
                  {
                    label: "Mathematical Definition",
                    formula: "f(n) = O(g(n)) \\Leftrightarrow \\lim_{n \\to \\infty} \\sup \\frac{f(n)}{g(n)} < \\infty",
                    block: true
                  },
                  {
                    label: "Practical Interpretation",
                    formula: "f(n) \\text{ grows no faster than } g(n)",
                    block: true
                  }
                ]}
                bgColor="bg-indigo-50"
                borderColor="border-indigo-500"
              />

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Omega Notation (Ω)</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Lower Bound (Best Case):</p>
                    <p className="mb-3">Represents the minimum time/space an algorithm will take</p>
                    <div className="bg-gray-50 p-4 rounded">
                      <BlockMath math="f(n) = \Omega(g(n)) \text{ if } \exists \text{ constants } c > 0, n_0 > 0" />
                      <BlockMath math="\text{such that } 0 \leq c \cdot g(n) \leq f(n) \text{ for all } n \geq n_0" />
                    </div>
                  </div>
                </div>
              </div>

              <FormulaBox
                title="Omega Notation - Formal Definition"
                formulas={[
                  {
                    label: "Mathematical Definition",
                    formula: "f(n) = \\Omega(g(n)) \\Leftrightarrow \\lim_{n \\to \\infty} \\inf \\frac{f(n)}{g(n)} > 0",
                    block: true
                  },
                  {
                    label: "Relationship to Big-O",
                    formula: "f(n) = \\Omega(g(n)) \\Leftrightarrow g(n) = O(f(n))",
                    block: true
                  }
                ]}
                bgColor="bg-green-50"
                borderColor="border-green-500"
              />

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Theta Notation (Θ)</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Tight Bound (Average Case):</p>
                    <p className="mb-3">Represents exact asymptotic behavior - both upper and lower bound</p>
                    <div className="bg-gray-50 p-4 rounded">
                      <BlockMath math="f(n) = \Theta(g(n)) \text{ if } \exists \text{ constants } c_1, c_2 > 0, n_0 > 0" />
                      <BlockMath math="\text{such that } 0 \leq c_1 \cdot g(n) \leq f(n) \leq c_2 \cdot g(n) \text{ for all } n \geq n_0" />
                    </div>
                  </div>
                </div>
              </div>

              <FormulaBox
                title="Theta Notation - Key Properties"
                formulas={[
                  {
                    label: "Definition in terms of Big-O and Omega",
                    formula: "f(n) = \\Theta(g(n)) \\Leftrightarrow f(n) = O(g(n)) \\text{ and } f(n) = \\Omega(g(n))",
                    block: true
                  },
                  {
                    label: "Limit Definition",
                    formula: "f(n) = \\Theta(g(n)) \\Leftrightarrow 0 < \\lim_{n \\to \\infty} \\frac{f(n)}{g(n)} < \\infty",
                    block: true
                  }
                ]}
                bgColor="bg-yellow-50"
                borderColor="border-yellow-500"
              />

              <WorkedExample
                title="Proving f(n) = 3n² + 5n + 2 is O(n²)"
                problem="Prove that f(n) = 3n² + 5n + 2 = O(n²) using the formal definition"
                steps={[
                  {
                    description: "We need to find constants c and n₀ such that f(n) ≤ c·n² for all n ≥ n₀",
                    calculation: "3n² + 5n + 2 ≤ c·n²"
                  },
                  {
                    description: "For n ≥ 1, we know that 5n ≤ 5n² and 2 ≤ 2n²",
                    calculation: "3n² + 5n + 2 ≤ 3n² + 5n² + 2n² = 10n²"
                  },
                  {
                    description: "Choose c = 10 and n₀ = 1",
                    result: "f(n) ≤ 10·n² for all n ≥ 1"
                  }
                ]}
                solution="f(n) = O(n²) with c = 10 and n₀ = 1"
                bgColor="bg-purple-50"
                borderColor="border-purple-500"
              />

              <WorkedExample
                title="Analyzing Nested Loops Complexity"
                problem="Find the time complexity of the following nested loop: for(i=0; i<n; i++) for(j=0; j<i; j++) sum++"
                steps={[
                  {
                    description: "Count iterations of inner loop for each value of i",
                    calculation: "i=0: 0 iterations\ni=1: 1 iteration\ni=2: 2 iterations\n...\ni=n-1: n-1 iterations"
                  },
                  {
                    description: "Total iterations is sum of arithmetic series",
                    calculation: "Total = 0 + 1 + 2 + ... + (n-1) = n(n-1)/2"
                  },
                  {
                    description: "Expand and simplify",
                    calculation: "n(n-1)/2 = (n² - n)/2 = n²/2 - n/2"
                  },
                  {
                    description: "Drop constants and lower-order terms",
                    result: "The dominant term is n²/2"
                  }
                ]}
                solution="Time Complexity = Θ(n²)"
                bgColor="bg-blue-50"
                borderColor="border-blue-500"
              />

              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Little-o and Little-omega Notations</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Little-o (o) - Strict Upper Bound:</p>
                    <div className="bg-gray-50 p-4 rounded">
                      <BlockMath math="f(n) = o(g(n)) \Leftrightarrow \lim_{n \to \infty} \frac{f(n)}{g(n)} = 0" />
                    </div>
                    <p className="mt-2 text-sm">Example: <InlineMath math="2n = o(n^2)" /> but <InlineMath math="2n \neq o(n)" /></p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Little-omega (ω) - Strict Lower Bound:</p>
                    <div className="bg-gray-50 p-4 rounded">
                      <BlockMath math="f(n) = \omega(g(n)) \Leftrightarrow \lim_{n \to \infty} \frac{f(n)}{g(n)} = \infty" />
                    </div>
                    <p className="mt-2 text-sm">Example: <InlineMath math="n^2 = \omega(n)" /> but <InlineMath math="n^2 \neq \omega(n^2)" /></p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Time Complexities Comparison</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Growth Rates (Fastest to Slowest):</p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm border">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="border px-3 py-2">Complexity</th>
                            <th className="border px-3 py-2">Name</th>
                            <th className="border px-3 py-2">n=10</th>
                            <th className="border px-3 py-2">n=100</th>
                            <th className="border px-3 py-2">n=1000</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-3 py-2"><InlineMath math="O(1)" /></td>
                            <td className="border px-3 py-2">Constant</td>
                            <td className="border px-3 py-2">1</td>
                            <td className="border px-3 py-2">1</td>
                            <td className="border px-3 py-2">1</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2"><InlineMath math="O(\log n)" /></td>
                            <td className="border px-3 py-2">Logarithmic</td>
                            <td className="border px-3 py-2">3</td>
                            <td className="border px-3 py-2">7</td>
                            <td className="border px-3 py-2">10</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2"><InlineMath math="O(n)" /></td>
                            <td className="border px-3 py-2">Linear</td>
                            <td className="border px-3 py-2">10</td>
                            <td className="border px-3 py-2">100</td>
                            <td className="border px-3 py-2">1000</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2"><InlineMath math="O(n \log n)" /></td>
                            <td className="border px-3 py-2">Linearithmic</td>
                            <td className="border px-3 py-2">30</td>
                            <td className="border px-3 py-2">700</td>
                            <td className="border px-3 py-2">10000</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2"><InlineMath math="O(n^2)" /></td>
                            <td className="border px-3 py-2">Quadratic</td>
                            <td className="border px-3 py-2">100</td>
                            <td className="border px-3 py-2">10000</td>
                            <td className="border px-3 py-2">1000000</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2"><InlineMath math="O(n^3)" /></td>
                            <td className="border px-3 py-2">Cubic</td>
                            <td className="border px-3 py-2">1000</td>
                            <td className="border px-3 py-2">1000000</td>
                            <td className="border px-3 py-2">10⁹</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2"><InlineMath math="O(2^n)" /></td>
                            <td className="border px-3 py-2">Exponential</td>
                            <td className="border px-3 py-2">1024</td>
                            <td className="border px-3 py-2">1.27×10³⁰</td>
                            <td className="border px-3 py-2">≈∞</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2"><InlineMath math="O(n!)" /></td>
                            <td className="border px-3 py-2">Factorial</td>
                            <td className="border px-3 py-2">3628800</td>
                            <td className="border px-3 py-2">≈∞</td>
                            <td className="border px-3 py-2">≈∞</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <FormulaBox
                title="Important Asymptotic Properties & Rules"
                formulas={[
                  {
                    label: "Transitivity",
                    formula: "f(n) = O(g(n)) \\text{ and } g(n) = O(h(n)) \\Rightarrow f(n) = O(h(n))",
                    block: true
                  },
                  {
                    label: "Sum Rule",
                    formula: "O(f(n) + g(n)) = O(\\max(f(n), g(n)))",
                    block: true
                  },
                  {
                    label: "Product Rule",
                    formula: "O(f(n) \\cdot g(n)) = O(f(n)) \\cdot O(g(n))",
                    block: true
                  },
                  {
                    label: "Polynomial Dominance",
                    formula: "\\text{If } k < m, \\text{ then } n^k = O(n^m)",
                    block: true
                  },
                  {
                    label: "Logarithm Property",
                    formula: "O(\\log_a n) = O(\\log_b n) \\text{ for any } a, b > 1",
                    block: true
                  }
                ]}
                bgColor="bg-teal-50"
                borderColor="border-teal-500"
              />

              <WorkedExample
                title="Finding Complexity Using Limit Method"
                problem="Determine if f(n) = n² + 3n is O(n²), Ω(n²), or Θ(n²)"
                steps={[
                  {
                    description: "Calculate the limit of f(n)/g(n) where g(n) = n²",
                    calculation: "lim(n→∞) (n² + 3n)/n²"
                  },
                  {
                    description: "Divide numerator and denominator by n²",
                    calculation: "lim(n→∞) (1 + 3/n) = 1 + 0 = 1"
                  },
                  {
                    description: "Since 0 < limit < ∞, by limit definition:",
                    result: "f(n) = Θ(n²)"
                  },
                  {
                    description: "This also implies:",
                    result: "f(n) = O(n²) and f(n) = Ω(n²)"
                  }
                ]}
                solution="f(n) = Θ(n²), which is the tightest bound"
                bgColor="bg-emerald-50"
                borderColor="border-emerald-500"
              />
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
                    <p className="font-semibold mb-2">When Greedy Works:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Problem has greedy-choice property</li>
                      <li>Problem has optimal substructure</li>
                      <li>Can prove local optimum leads to global optimum</li>
                    </ul>
                  </div>
                </div>
              </div>

              <WorkedExample
                title="Activity Selection Problem"
                problem="Given n activities with start and finish times, select maximum number of non-overlapping activities. Activities: [(1,4), (3,5), (0,6), (5,7), (3,9), (5,9), (6,10), (8,11), (8,12), (2,14), (12,16)]"
                steps={[
                  {
                    description: "Sort activities by finish time (ascending)",
                    calculation: "Sorted: [(1,4), (3,5), (0,6), (5,7), (3,9), (5,9), (6,10), (8,11), (8,12), (2,14), (12,16)]",
                    result: "Already sorted by finish time"
                  },
                  {
                    description: "Greedy Choice: Always select activity with earliest finish time",
                    calculation: "Select (1,4), finish = 4"
                  },
                  {
                    description: "Select next activity that starts after previous finish",
                    calculation: "Select (5,7), finish = 7\n(3,5) and (0,6) overlap with (1,4)"
                  },
                  {
                    description: "Continue selecting compatible activities",
                    calculation: "Select (8,11), finish = 11\n(3,9), (5,9), (6,10) all overlap"
                  },
                  {
                    description: "Final selection",
                    calculation: "Select (12,16), finish = 16",
                    result: "Selected: (1,4), (5,7), (8,11), (12,16)"
                  }
                ]}
                solution="Maximum 4 non-overlapping activities. Time Complexity: O(n log n) for sorting"
                bgColor="bg-green-50"
                borderColor="border-green-500"
              />

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Proof of Greedy Choice Property</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Activity Selection - Why Greedy Works:</p>
                    <ol className="list-decimal ml-6 space-y-2">
                      <li><strong>Claim:</strong> There exists an optimal solution that includes the activity with earliest finish time</li>
                      <li><strong>Proof by Exchange:</strong>
                        <ul className="list-disc ml-6 mt-2">
                          <li>Let A be optimal solution, let a₁ be activity with earliest finish in A</li>
                          <li>Let g be the greedy choice (earliest overall finish time)</li>
                          <li>If g = a₁, we're done</li>
                          <li>If g ≠ a₁, then finish(g) ≤ finish(a₁)</li>
                          <li>Replace a₁ with g in A to get solution A'</li>
                          <li>A' is still valid (g finishes before a₁, so compatible with rest)</li>
                          <li>|A'| = |A|, so A' is optimal and contains greedy choice</li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <WorkedExample
                title="Fractional Knapsack Problem"
                problem="Knapsack capacity W=50. Items: [(value=60, weight=10), (v=100, w=20), (v=120, w=30)]. Maximize value."
                steps={[
                  {
                    description: "Calculate value-to-weight ratio for each item",
                    calculation: "Item 1: 60/10 = 6.0\nItem 2: 100/20 = 5.0\nItem 3: 120/30 = 4.0",
                    result: "Sorted by ratio (desc): Item1, Item2, Item3"
                  },
                  {
                    description: "Greedy: Take items in order of ratio",
                    calculation: "Take Item 1 completely: weight=10, value=60\nRemaining capacity: 50-10=40"
                  },
                  {
                    description: "Take next item",
                    calculation: "Take Item 2 completely: weight=20, value=100\nRemaining capacity: 40-20=20"
                  },
                  {
                    description: "Take fraction of last item",
                    calculation: "Take 20/30 of Item 3: value=(20/30)×120=80\nRemaining capacity: 0",
                    result: "Total weight = 50, Total value = 60+100+80"
                  }
                ]}
                solution="Maximum value = 240 by taking items in ratio order"
                bgColor="bg-amber-50"
                borderColor="border-amber-500"
              />

              <FormulaBox
                title="Fractional Knapsack - Greedy Algorithm"
                formulas={[
                  {
                    label: "Value-to-Weight Ratio",
                    formula: "r_i = \\frac{v_i}{w_i} \\text{ for item } i",
                    block: true
                  },
                  {
                    label: "Sort by Ratio",
                    formula: "r_1 \\geq r_2 \\geq r_3 \\geq \\ldots \\geq r_n",
                    block: true
                  },
                  {
                    label: "Greedy Selection",
                    formula: "x_i = \\begin{cases} 1 & \\text{if } \\sum_{j=1}^{i-1} w_j + w_i \\leq W \\\\ \\frac{W - \\sum_{j=1}^{i-1} w_j}{w_i} & \\text{if } \\sum_{j=1}^{i-1} w_j < W < \\sum_{j=1}^{i} w_j \\\\ 0 & \\text{otherwise} \\end{cases}",
                    block: true
                  },
                  {
                    label: "Time Complexity",
                    formula: "O(n \\log n) \\text{ for sorting} + O(n) \\text{ for selection} = O(n \\log n)",
                    block: true
                  }
                ]}
                bgColor="bg-cyan-50"
                borderColor="border-cyan-500"
              />

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Classic Greedy Problems</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">1. Huffman Coding (Data Compression):</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Goal:</strong> Optimal prefix-free binary code</li>
                      <li><strong>Greedy:</strong> Repeatedly merge two minimum frequency nodes</li>
                      <li><strong>Complexity:</strong> <InlineMath math="O(n \log n)" /> with min-heap</li>
                      <li><strong>Optimality:</strong> Provably optimal compression for given frequencies</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">2. Minimum Spanning Tree - Prim's Algorithm:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Greedy Choice:</strong> Add minimum weight edge connecting tree to non-tree vertex</li>
                      <li><strong>Complexity:</strong> <InlineMath math="O(E \log V)" /> with binary heap</li>
                      <li><strong>Cut Property:</strong> Minimum edge crossing a cut is in some MST</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">3. Minimum Spanning Tree - Kruskal's Algorithm:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Greedy Choice:</strong> Add minimum weight edge that doesn't create cycle</li>
                      <li><strong>Complexity:</strong> <InlineMath math="O(E \log E)" /> or <InlineMath math="O(E \log V)" /></li>
                      <li><strong>Uses:</strong> Union-Find data structure for cycle detection</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">4. Dijkstra's Shortest Path:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Greedy Choice:</strong> Visit unvisited vertex with minimum distance</li>
                      <li><strong>Limitation:</strong> Only works with non-negative edge weights</li>
                      <li><strong>Complexity:</strong> <InlineMath math="O((V+E) \log V)" /> with min-heap</li>
                    </ul>
                  </div>
                </div>
              </div>

              <WorkedExample
                title="Coin Change - Greedy vs Optimal"
                problem="Make change for 40 cents. Available coins: 25¢, 10¢, 5¢, 1¢ (US coins)"
                steps={[
                  {
                    description: "Greedy approach: Use largest coin first",
                    calculation: "25¢: take 1 coin, remaining = 40-25 = 15¢"
                  },
                  {
                    description: "Continue with largest available",
                    calculation: "10¢: take 1 coin, remaining = 15-10 = 5¢"
                  },
                  {
                    description: "Complete the change",
                    calculation: "5¢: take 1 coin, remaining = 5-5 = 0¢",
                    result: "Total coins = 3 (1×25¢ + 1×10¢ + 1×5¢)"
                  }
                ]}
                solution="Greedy works for US coins: 3 coins. This is optimal!"
                bgColor="bg-teal-50"
                borderColor="border-teal-500"
              />

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">When Greedy Fails</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Example: Coin System {25, 10, 1}</p>
                    <p className="mb-2">Make change for 30 cents:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Greedy:</strong> 1×25¢ + 5×1¢ = 6 coins ❌</li>
                      <li><strong>Optimal:</strong> 3×10¢ = 3 coins ✓</li>
                      <li><strong>Lesson:</strong> Greedy doesn't always give optimal solution!</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">0/1 Knapsack - Greedy Fails:</p>
                    <p className="mb-2">Capacity W=10, Items: (v=60,w=10), (v=100,w=20), (v=120,w=30)</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Greedy by ratio:</strong> Take (60,10), value=60</li>
                      <li><strong>Cannot take fraction:</strong> Next item too heavy</li>
                      <li><strong>Better solution:</strong> Take (60,10) = value 60</li>
                      <li><strong>Need DP:</strong> Greedy doesn't consider all combinations</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Problems Requiring Other Approaches:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>0/1 Knapsack:</strong> Use Dynamic Programming</li>
                      <li><strong>Longest Path:</strong> NP-hard, may need backtracking</li>
                      <li><strong>Traveling Salesman:</strong> NP-hard, approximation algorithms</li>
                      <li><strong>Graph Coloring:</strong> Greedy gives approximation, not optimal</li>
                    </ul>
                  </div>
                </div>
              </div>

              <FormulaBox
                title="Greedy Algorithm Design Steps"
                formulas={[
                  {
                    label: "Step 1: Cast as optimization problem",
                    formula: "\\text{Define objective function to maximize or minimize}",
                    block: true
                  },
                  {
                    label: "Step 2: Make greedy choice",
                    formula: "\\text{Choose locally optimal option at each step}",
                    block: true
                  },
                  {
                    label: "Step 3: Prove greedy choice property",
                    formula: "\\text{Show that local optimum leads to global optimum}",
                    block: true
                  },
                  {
                    label: "Step 4: Prove optimal substructure",
                    formula: "\\text{Show problem has optimal substructure property}",
                    block: true
                  }
                ]}
                bgColor="bg-lime-50"
                borderColor="border-lime-500"
              />
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
                    <p className="font-semibold mb-2">Key Characteristics:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Recursive structure with overlapping subproblems</li>
                      <li>Store intermediate results (memoization/tabulation)</li>
                      <li>Trade space for time efficiency</li>
                      <li>Bottom-up or top-down solution approach</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Memoization vs Tabulation</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Top-Down (Memoization):</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Approach:</strong> Recursive with caching</li>
                      <li><strong>Start:</strong> Original problem, break down to subproblems</li>
                      <li><strong>Storage:</strong> Hash map or array to cache results</li>
                      <li><strong>Pros:</strong> Only computes needed subproblems, easier to code</li>
                      <li><strong>Cons:</strong> Recursion overhead, stack space</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Bottom-Up (Tabulation):</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Approach:</strong> Iterative, build table from base cases</li>
                      <li><strong>Start:</strong> Base cases, build up to original problem</li>
                      <li><strong>Storage:</strong> Table (array) filled iteratively</li>
                      <li><strong>Pros:</strong> No recursion, better space optimization</li>
                      <li><strong>Cons:</strong> May compute unnecessary subproblems</li>
                    </ul>
                  </div>
                </div>
              </div>

              <WorkedExample
                title="Fibonacci Numbers - Memoization"
                problem="Calculate F(6) using memoization. F(n) = F(n-1) + F(n-2), F(0)=0, F(1)=1"
                steps={[
                  {
                    description: "Initialize memo array, calculate F(6)",
                    calculation: "memo = [-1, -1, -1, -1, -1, -1, -1]\nF(6) calls F(5) and F(4)"
                  },
                  {
                    description: "Calculate F(5) → calls F(4) and F(3)",
                    calculation: "F(4) → calls F(3) and F(2)\nF(3) → calls F(2) and F(1)"
                  },
                  {
                    description: "Base cases and memoization",
                    calculation: "F(2) = F(1) + F(0) = 1 + 0 = 1 ✓ memo[2]=1\nF(3) = F(2) + F(1) = 1 + 1 = 2 ✓ memo[3]=2\nF(4) = F(3) + F(2) = 2 + 1 = 3 ✓ memo[4]=3"
                  },
                  {
                    description: "Reuse memoized values",
                    calculation: "F(5) = F(4) + F(3) = 3 + 2 = 5 (using memo)\nF(6) = F(5) + F(4) = 5 + 3 = 8 (using memo)",
                    result: "Many subproblems solved only once!"
                  }
                ]}
                solution="F(6) = 8. Time: O(n) instead of O(2ⁿ), Space: O(n)"
                bgColor="bg-purple-50"
                borderColor="border-purple-500"
              />

              <FormulaBox
                title="Fibonacci Complexity Analysis"
                formulas={[
                  {
                    label: "Naive Recursion",
                    formula: "T(n) = T(n-1) + T(n-2) + O(1) \\Rightarrow T(n) = O(2^n)",
                    block: true
                  },
                  {
                    label: "With Memoization",
                    formula: "T(n) = O(n), \\quad S(n) = O(n)",
                    block: true
                  },
                  {
                    label: "With Tabulation",
                    formula: "T(n) = O(n), \\quad S(n) = O(n) \\text{ or } O(1) \\text{ optimized}",
                    block: true
                  },
                  {
                    label: "Closed Form (Binet's Formula)",
                    formula: "F(n) = \\frac{\\phi^n - \\psi^n}{\\sqrt{5}} \\text{ where } \\phi = \\frac{1+\\sqrt{5}}{2}, \\psi = \\frac{1-\\sqrt{5}}{2}",
                    block: true
                  }
                ]}
                bgColor="bg-indigo-50"
                borderColor="border-indigo-500"
              />

              <WorkedExample
                title="0/1 Knapsack Problem - Dynamic Programming"
                problem="Capacity W=7. Items: [(v=1,w=1), (v=4,w=3), (v=5,w=4), (v=7,w=5)]. Maximize value."
                steps={[
                  {
                    description: "Define DP table: dp[i][w] = max value using first i items with capacity w",
                    calculation: "Base case: dp[0][w] = 0 for all w (no items)\ndp[i][0] = 0 for all i (no capacity)"
                  },
                  {
                    description: "Recurrence relation for each item",
                    calculation: "dp[i][w] = max(\n  dp[i-1][w],              // don't take item i\n  dp[i-1][w-wᵢ] + vᵢ      // take item i\n)"
                  },
                  {
                    description: "Fill table for item 1 (v=1, w=1)",
                    calculation: "dp[1][1..7] = max(0, 1) = [1,1,1,1,1,1,1]"
                  },
                  {
                    description: "Fill for item 2 (v=4, w=3)",
                    calculation: "dp[2][3] = max(dp[1][3], dp[1][0]+4) = max(1,4) = 4\ndp[2][4] = max(dp[1][4], dp[1][1]+4) = max(1,5) = 5",
                    result: "Row 2: [0,1,1,4,5,5,5]"
                  },
                  {
                    description: "Complete table (abbreviated)",
                    calculation: "dp[4][7] considers all items with capacity 7",
                    result: "Maximum value = dp[4][7] = 9"
                  }
                ]}
                solution="Max value = 9 (take items 2 and 4: v=4+5=9, w=3+4=7). Time: O(nW), Space: O(nW)"
                bgColor="bg-amber-50"
                borderColor="border-amber-500"
              />

              <FormulaBox
                title="0/1 Knapsack - DP Formulation"
                formulas={[
                  {
                    label: "State Definition",
                    formula: "dp[i][w] = \\text{max value using items } 1..i \\text{ with capacity } w",
                    block: true
                  },
                  {
                    label: "Base Cases",
                    formula: "dp[0][w] = 0 \\text{ for all } w, \\quad dp[i][0] = 0 \\text{ for all } i",
                    block: true
                  },
                  {
                    label: "Recurrence Relation",
                    formula: "dp[i][w] = \\begin{cases} dp[i-1][w] & \\text{if } w_i > w \\\\ \\max(dp[i-1][w], \\ dp[i-1][w-w_i] + v_i) & \\text{if } w_i \\leq w \\end{cases}",
                    block: true
                  },
                  {
                    label: "Time and Space Complexity",
                    formula: "T(n) = O(nW), \\quad S(n) = O(nW) \\text{ or } O(W) \\text{ optimized}",
                    block: true
                  }
                ]}
                bgColor="bg-cyan-50"
                borderColor="border-cyan-500"
              />

              <WorkedExample
                title="Longest Common Subsequence (LCS)"
                problem="Find LCS of strings X='ABCDGH' and Y='AEDFHR'"
                steps={[
                  {
                    description: "Define: dp[i][j] = length of LCS of X[0..i-1] and Y[0..j-1]",
                    calculation: "Base: dp[0][j] = 0, dp[i][0] = 0"
                  },
                  {
                    description: "Recurrence relation",
                    calculation: "If X[i-1] == Y[j-1]: dp[i][j] = dp[i-1][j-1] + 1\nElse: dp[i][j] = max(dp[i-1][j], dp[i][j-1])"
                  },
                  {
                    description: "Build DP table (partial)",
                    calculation: "    ε  A  E  D  F  H  R\nε   0  0  0  0  0  0  0\nA   0  1  1  1  1  1  1\nB   0  1  1  1  1  1  1\nC   0  1  1  1  1  1  1\nD   0  1  1  2  2  2  2\nG   0  1  1  2  2  2  2\nH   0  1  1  2  2  3  3"
                  },
                  {
                    description: "LCS length",
                    result: "dp[6][6] = 3"
                  },
                  {
                    description: "Backtrack to find actual LCS",
                    calculation: "Start at dp[6][6], follow path where characters match",
                    result: "LCS = 'ADH'"
                  }
                ]}
                solution="LCS('ABCDGH', 'AEDFHR') = 'ADH' with length 3. Time: O(mn), Space: O(mn)"
                bgColor="bg-green-50"
                borderColor="border-green-500"
              />

              <FormulaBox
                title="LCS - Dynamic Programming Formula"
                formulas={[
                  {
                    label: "State Definition",
                    formula: "L[i][j] = \\text{length of LCS of } X[0..i-1] \\text{ and } Y[0..j-1]",
                    block: true
                  },
                  {
                    label: "Recurrence Relation",
                    formula: "L[i][j] = \\begin{cases} 0 & \\text{if } i = 0 \\text{ or } j = 0 \\\\ L[i-1][j-1] + 1 & \\text{if } X[i-1] = Y[j-1] \\\\ \\max(L[i-1][j], L[i][j-1]) & \\text{if } X[i-1] \\neq Y[j-1] \\end{cases}",
                    block: true
                  },
                  {
                    label: "Complexity",
                    formula: "T(m,n) = O(mn), \\quad S(m,n) = O(mn) \\text{ or } O(\\min(m,n)) \\text{ optimized}",
                    block: true
                  }
                ]}
                bgColor="bg-teal-50"
                borderColor="border-teal-500"
              />

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Classic DP Problems & Patterns</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">1. Longest Increasing Subsequence (LIS):</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Problem:</strong> Find longest strictly increasing subsequence</li>
                      <li><strong>State:</strong> <InlineMath math="dp[i]" /> = length of LIS ending at index i</li>
                      <li><strong>Recurrence:</strong> <InlineMath math="dp[i] = \max_{j<i, arr[j]<arr[i]}(dp[j] + 1)" /></li>
                      <li><strong>Complexity:</strong> <InlineMath math="O(n^2)" /> naive, <InlineMath math="O(n \log n)" /> optimized</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">2. Matrix Chain Multiplication:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Problem:</strong> Minimize scalar multiplications for matrix chain</li>
                      <li><strong>State:</strong> <InlineMath math="m[i][j]" /> = min cost to multiply matrices i to j</li>
                      <li><strong>Recurrence:</strong> <InlineMath math="m[i][j] = \min_{i \leq k < j}(m[i][k] + m[k+1][j] + p_{i-1}p_kp_j)" /></li>
                      <li><strong>Complexity:</strong> <InlineMath math="O(n^3)" /> time, <InlineMath math="O(n^2)" /> space</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">3. Edit Distance (Levenshtein):</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Problem:</strong> Min operations (insert/delete/replace) to convert string A to B</li>
                      <li><strong>State:</strong> <InlineMath math="dp[i][j]" /> = min edit distance for A[0..i] to B[0..j]</li>
                      <li><strong>Operations:</strong> Insert (+1), Delete (+1), Replace (+1 if different)</li>
                      <li><strong>Complexity:</strong> <InlineMath math="O(mn)" /> time and space</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">4. Coin Change Problem:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Problem:</strong> Minimum coins to make amount with unlimited coins</li>
                      <li><strong>State:</strong> <InlineMath math="dp[i]" /> = min coins needed for amount i</li>
                      <li><strong>Recurrence:</strong> <InlineMath math="dp[i] = \min_{c \in coins}(dp[i-c] + 1)" /></li>
                      <li><strong>Complexity:</strong> <InlineMath math="O(n \times amount)" /></li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">5. Subset Sum Problem:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Problem:</strong> Check if subset exists with given sum</li>
                      <li><strong>State:</strong> <InlineMath math="dp[i][s]" /> = can we make sum s using first i elements</li>
                      <li><strong>Recurrence:</strong> <InlineMath math="dp[i][s] = dp[i-1][s] \vee dp[i-1][s-arr[i]]" /></li>
                      <li><strong>Complexity:</strong> <InlineMath math="O(n \times sum)" /> (pseudo-polynomial)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <WorkedExample
                title="Coin Change - Minimum Coins"
                problem="Coins: [1, 5, 6, 9]. Make amount = 11. Find minimum number of coins."
                steps={[
                  {
                    description: "Initialize DP array",
                    calculation: "dp[0] = 0 (0 coins for amount 0)\ndp[1..11] = ∞ (impossible initially)"
                  },
                  {
                    description: "For each amount, try each coin",
                    calculation: "For amount 5:\n  Using coin 1: dp[5] = dp[4] + 1\n  Using coin 5: dp[5] = dp[0] + 1 = 1 ✓"
                  },
                  {
                    description: "Fill table systematically",
                    calculation: "dp[6] = min(dp[5]+1, dp[1]+1, dp[0]+1) = min(2,2,1) = 1\ndp[9] = min(dp[8]+1, dp[4]+1, dp[3]+1, dp[0]+1) = 1\ndp[10] = min(dp[9]+1, dp[5]+1, dp[4]+1, dp[1]+1) = 2",
                    result: "Using 1 coin of 9 is optimal"
                  },
                  {
                    description: "Calculate dp[11]",
                    calculation: "dp[11] = min(\n  dp[10]+1 = 3,\n  dp[6]+1 = 2,  ✓ Best!\n  dp[5]+1 = 2,  ✓ Best!\n  dp[2]+1 = 3\n)",
                    result: "dp[11] = 2"
                  }
                ]}
                solution="Minimum 2 coins: either [5,6] or [6,5]. Time: O(n×amount), Space: O(amount)"
                bgColor="bg-violet-50"
                borderColor="border-violet-500"
              />

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">DP vs Greedy vs Divide & Conquer</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm border">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="border px-3 py-2">Aspect</th>
                            <th className="border px-3 py-2">Dynamic Programming</th>
                            <th className="border px-3 py-2">Greedy</th>
                            <th className="border px-3 py-2">Divide & Conquer</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-3 py-2 font-semibold">Approach</td>
                            <td className="border px-3 py-2">Solve all subproblems</td>
                            <td className="border px-3 py-2">Make local optimal choice</td>
                            <td className="border px-3 py-2">Split, solve, combine</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2 font-semibold">Subproblems</td>
                            <td className="border px-3 py-2">Overlapping</td>
                            <td className="border px-3 py-2">No revisiting</td>
                            <td className="border px-3 py-2">Independent</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2 font-semibold">Optimal Solution</td>
                            <td className="border px-3 py-2">Guaranteed</td>
                            <td className="border px-3 py-2">Not always</td>
                            <td className="border px-3 py-2">Depends on problem</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2 font-semibold">Time Complexity</td>
                            <td className="border px-3 py-2">Polynomial (usually)</td>
                            <td className="border px-3 py-2">Fast (O(n log n) typical)</td>
                            <td className="border px-3 py-2">Often O(n log n)</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2 font-semibold">Space Usage</td>
                            <td className="border px-3 py-2">High (memoization)</td>
                            <td className="border px-3 py-2">Low</td>
                            <td className="border px-3 py-2">Recursion stack</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2 font-semibold">Example</td>
                            <td className="border px-3 py-2">0/1 Knapsack, LCS</td>
                            <td className="border px-3 py-2">Activity Selection</td>
                            <td className="border px-3 py-2">Merge Sort</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <FormulaBox
                title="DP Problem Identification Checklist"
                formulas={[
                  {
                    label: "1. Optimal Substructure",
                    formula: "\\text{Optimal solution contains optimal solutions to subproblems}",
                    block: true
                  },
                  {
                    label: "2. Overlapping Subproblems",
                    formula: "\\text{Same subproblems are solved multiple times}",
                    block: true
                  },
                  {
                    label: "3. State Transition",
                    formula: "\\text{Can express } dp[i] \\text{ in terms of previous states}",
                    block: true
                  },
                  {
                    label: "4. Base Cases",
                    formula: "\\text{Clear base cases with known solutions}",
                    block: true
                  }
                ]}
                bgColor="bg-pink-50"
                borderColor="border-pink-500"
              />
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
                </div>
              </div>

              <FormulaBox
                title="Master Theorem for Divide and Conquer Recurrences"
                formulas={[
                  {
                    label: "Standard Form",
                    formula: "T(n) = aT\\left(\\frac{n}{b}\\right) + f(n)",
                    block: true
                  },
                  {
                    label: "Where",
                    formula: "a \\geq 1 \\text{ (number of subproblems)}, \\quad b > 1 \\text{ (division factor)}",
                    block: true
                  },
                  {
                    label: "Critical Exponent",
                    formula: "c_{\\text{crit}} = \\log_b a",
                    block: true
                  }
                ]}
                bgColor="bg-indigo-50"
                borderColor="border-indigo-500"
              />

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Master Theorem - Three Cases</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Case 1: Work dominated by leaves</p>
                    <div className="bg-gray-50 p-4 rounded mb-2">
                      <BlockMath math="\text{If } f(n) = O(n^c) \text{ where } c < \log_b a" />
                      <BlockMath math="\text{Then } T(n) = \Theta(n^{\log_b a})" />
                    </div>
                    <p className="text-sm text-gray-600">Tree leaves dominate the work</p>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Case 2: Work evenly distributed</p>
                    <div className="bg-gray-50 p-4 rounded mb-2">
                      <BlockMath math="\text{If } f(n) = \Theta(n^c \log^k n) \text{ where } c = \log_b a, k \geq 0" />
                      <BlockMath math="\text{Then } T(n) = \Theta(n^c \log^{k+1} n)" />
                    </div>
                    <p className="text-sm text-gray-600">Work is balanced across all levels</p>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Case 3: Work dominated by root</p>
                    <div className="bg-gray-50 p-4 rounded mb-2">
                      <BlockMath math="\text{If } f(n) = \Omega(n^c) \text{ where } c > \log_b a" />
                      <BlockMath math="\text{and } af\\left(\\frac{n}{b}\\right) \leq kf(n) \\text{ for some } k < 1 \\text{ (regularity)}" />
                      <BlockMath math="\text{Then } T(n) = \Theta(f(n))" />
                    </div>
                    <p className="text-sm text-gray-600">Root/top-level work dominates</p>
                  </div>
                </div>
              </div>

              <WorkedExample
                title="Master Theorem: Merge Sort Analysis"
                problem="Analyze the recurrence T(n) = 2T(n/2) + n using Master Theorem"
                steps={[
                  {
                    description: "Identify parameters from T(n) = aT(n/b) + f(n)",
                    calculation: "a = 2 (two subproblems)\nb = 2 (divide by 2)\nf(n) = n (merging cost)",
                    result: "a = 2, b = 2, f(n) = Θ(n)"
                  },
                  {
                    description: "Calculate critical exponent",
                    calculation: "c_crit = log_b(a) = log₂(2) = 1",
                    result: "c_crit = 1"
                  },
                  {
                    description: "Compare f(n) with n^c_crit",
                    calculation: "f(n) = n = Θ(n¹) = Θ(n^c_crit)",
                    result: "This is Case 2 with k = 0"
                  },
                  {
                    description: "Apply Case 2 formula",
                    calculation: "T(n) = Θ(n^c_crit · log^(k+1) n)\n     = Θ(n¹ · log^(0+1) n)\n     = Θ(n log n)",
                    result: "T(n) = Θ(n log n)"
                  }
                ]}
                solution="Merge Sort has time complexity T(n) = Θ(n log n)"
                bgColor="bg-amber-50"
                borderColor="border-amber-500"
              />

              <WorkedExample
                title="Master Theorem: Binary Search Analysis"
                problem="Analyze the recurrence T(n) = T(n/2) + 1 using Master Theorem"
                steps={[
                  {
                    description: "Identify parameters",
                    calculation: "a = 1 (one subproblem)\nb = 2 (divide by 2)\nf(n) = 1 (constant work)",
                    result: "a = 1, b = 2, f(n) = Θ(1)"
                  },
                  {
                    description: "Calculate critical exponent",
                    calculation: "c_crit = log₂(1) = 0",
                    result: "c_crit = 0"
                  },
                  {
                    description: "Compare f(n) with n^c_crit",
                    calculation: "f(n) = 1 = Θ(n⁰) = Θ(n^c_crit)",
                    result: "This is Case 2 with k = 0"
                  },
                  {
                    description: "Apply Case 2 formula",
                    calculation: "T(n) = Θ(n⁰ · log¹ n) = Θ(log n)",
                    result: "T(n) = Θ(log n)"
                  }
                ]}
                solution="Binary Search has time complexity T(n) = Θ(log n)"
                bgColor="bg-blue-50"
                borderColor="border-blue-500"
              />

              <WorkedExample
                title="Master Theorem: Strassen's Algorithm"
                problem="Analyze T(n) = 7T(n/2) + n² (Strassen's matrix multiplication)"
                steps={[
                  {
                    description: "Identify parameters",
                    calculation: "a = 7 (seven subproblems)\nb = 2 (divide by 2)\nf(n) = n²",
                    result: "a = 7, b = 2, f(n) = Θ(n²)"
                  },
                  {
                    description: "Calculate critical exponent",
                    calculation: "c_crit = log₂(7) ≈ 2.807",
                    result: "c_crit ≈ 2.807"
                  },
                  {
                    description: "Compare f(n) = n² with n^c_crit",
                    calculation: "f(n) = n² = O(n^2.807)\nSince 2 < 2.807",
                    result: "This is Case 1"
                  },
                  {
                    description: "Apply Case 1 formula",
                    calculation: "T(n) = Θ(n^log₂(7)) = Θ(n^2.807)",
                    result: "T(n) = Θ(n^2.807)"
                  }
                ]}
                solution="Strassen's algorithm: T(n) = Θ(n^2.807), better than standard O(n³)"
                bgColor="bg-green-50"
                borderColor="border-green-500"
              />

              <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Merge Sort - Detailed Analysis</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Algorithm Steps:</p>
                    <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                      MergeSort(A, left, right):<br/>
                      &nbsp;&nbsp;if left &lt; right:<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;mid = (left + right) / 2<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;MergeSort(A, left, mid)&nbsp;&nbsp;&nbsp;&nbsp;// Divide<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;MergeSort(A, mid+1, right)&nbsp;&nbsp;// Divide<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;Merge(A, left, mid, right)&nbsp;&nbsp;// Combine
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Complexity Analysis:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Divide:</strong> Finding mid takes <InlineMath math="O(1)" /></li>
                      <li><strong>Conquer:</strong> Recursively solve 2 subproblems of size n/2</li>
                      <li><strong>Combine:</strong> Merging takes <InlineMath math="O(n)" /></li>
                      <li><strong>Recurrence:</strong> <InlineMath math="T(n) = 2T(n/2) + O(n)" /></li>
                      <li><strong>Height of recursion tree:</strong> <InlineMath math="\log_2 n" /></li>
                      <li><strong>Work per level:</strong> <InlineMath math="O(n)" /></li>
                      <li><strong>Total:</strong> <InlineMath math="O(n) \times O(\log n) = O(n \log n)" /></li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Space Complexity:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Auxiliary array for merging: <InlineMath math="O(n)" /></li>
                      <li>Recursion stack depth: <InlineMath math="O(\log n)" /></li>
                      <li>Total Space: <InlineMath math="O(n)" /></li>
                    </ul>
                  </div>
                </div>
              </div>

              <FormulaBox
                title="Common Divide and Conquer Recurrences"
                formulas={[
                  {
                    label: "Binary Search",
                    formula: "T(n) = T(n/2) + O(1) \\Rightarrow T(n) = O(\\log n)",
                    block: true
                  },
                  {
                    label: "Merge Sort",
                    formula: "T(n) = 2T(n/2) + O(n) \\Rightarrow T(n) = O(n \\log n)",
                    block: true
                  },
                  {
                    label: "Quick Sort (average)",
                    formula: "T(n) = 2T(n/2) + O(n) \\Rightarrow T(n) = O(n \\log n)",
                    block: true
                  },
                  {
                    label: "Karatsuba Multiplication",
                    formula: "T(n) = 3T(n/2) + O(n) \\Rightarrow T(n) = O(n^{\\log_2 3}) \\approx O(n^{1.585})",
                    block: true
                  },
                  {
                    label: "Strassen's Algorithm",
                    formula: "T(n) = 7T(n/2) + O(n^2) \\Rightarrow T(n) = O(n^{\\log_2 7}) \\approx O(n^{2.807})",
                    block: true
                  }
                ]}
                bgColor="bg-violet-50"
                borderColor="border-violet-500"
              />
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
                    <p className="mb-2">Explore all neighbors before going deeper. Uses Queue (FIFO).</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Time:</strong> <InlineMath math="O(V + E)" /> for adjacency list</li>
                      <li><strong>Space:</strong> <InlineMath math="O(V)" /> for queue and visited array</li>
                      <li>Finds shortest path in unweighted graph</li>
                      <li>Level-order traversal in trees</li>
                      <li>Explores vertices in layers from source</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Depth-First Search (DFS):</p>
                    <p className="mb-2">Explore as far as possible before backtracking. Uses Stack/Recursion (LIFO).</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Time:</strong> <InlineMath math="O(V + E)" /> for adjacency list</li>
                      <li><strong>Space:</strong> <InlineMath math="O(V)" /> for recursion stack/explicit stack</li>
                      <li>Detect cycles in graph</li>
                      <li>Topological sorting (for DAG)</li>
                      <li>Find connected components</li>
                      <li>Path finding with backtracking</li>
                    </ul>
                  </div>
                </div>
              </div>

              <FormulaBox
                title="BFS & DFS Time Complexity Analysis"
                formulas={[
                  {
                    label: "Adjacency List Representation",
                    formula: "T(V, E) = O(V + E)",
                    block: true
                  },
                  {
                    label: "Adjacency Matrix Representation",
                    formula: "T(V, E) = O(V^2)",
                    block: true
                  },
                  {
                    label: "Space for Adjacency List",
                    formula: "S(V, E) = O(V + E)",
                    block: true
                  },
                  {
                    label: "Space for Adjacency Matrix",
                    formula: "S(V) = O(V^2)",
                    block: true
                  }
                ]}
                bgColor="bg-sky-50"
                borderColor="border-sky-500"
              />

              <WorkedExample
                title="BFS Traversal Example"
                problem="Perform BFS starting from vertex 0. Graph edges: 0-1, 0-2, 1-3, 1-4, 2-5, 2-6"
                steps={[
                  {
                    description: "Initialize: Queue={0}, Visited={0}",
                    calculation: "Level 0: Visit 0\nEnqueue neighbors: Queue={1, 2}"
                  },
                  {
                    description: "Process vertex 1",
                    calculation: "Level 1: Dequeue 1, Visit 1\nEnqueue unvisited neighbors: Queue={2, 3, 4}\nVisited={0, 1}",
                    result: "Exploring neighbors of 1"
                  },
                  {
                    description: "Process vertex 2",
                    calculation: "Level 1: Dequeue 2, Visit 2\nEnqueue unvisited neighbors: Queue={3, 4, 5, 6}\nVisited={0, 1, 2}"
                  },
                  {
                    description: "Process remaining vertices",
                    calculation: "Level 2: Process 3, 4, 5, 6 in order\nQueue becomes empty\nVisited={0, 1, 2, 3, 4, 5, 6}",
                    result: "All vertices visited"
                  }
                ]}
                solution="BFS Order: 0 → 1 → 2 → 3 → 4 → 5 → 6 (level by level)"
                bgColor="bg-blue-50"
                borderColor="border-blue-500"
              />

              <WorkedExample
                title="DFS Traversal Example"
                problem="Perform DFS starting from vertex 0. Same graph: 0-1, 0-2, 1-3, 1-4, 2-5, 2-6"
                steps={[
                  {
                    description: "Start at vertex 0, mark visited",
                    calculation: "Visit 0, Visited={0}\nRecursively visit first unvisited neighbor (1)"
                  },
                  {
                    description: "Go deep into path through vertex 1",
                    calculation: "Visit 1, Visited={0, 1}\nRecursively visit first unvisited neighbor (3)"
                  },
                  {
                    description: "Continue going deep",
                    calculation: "Visit 3, Visited={0, 1, 3}\nNo unvisited neighbors, backtrack to 1",
                    result: "Backtracking begins"
                  },
                  {
                    description: "Explore other branch from 1",
                    calculation: "Visit 4, Visited={0, 1, 3, 4}\nBacktrack to 0, visit 2"
                  },
                  {
                    description: "Complete traversal",
                    calculation: "Visit 2, then 5, then 6\nVisited={0, 1, 3, 4, 2, 5, 6}",
                    result: "All vertices visited"
                  }
                ]}
                solution="DFS Order: 0 → 1 → 3 → 4 → 2 → 5 → 6 (depth-first)"
                bgColor="bg-indigo-50"
                borderColor="border-indigo-500"
              />

              <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">BFS vs DFS Comparison</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm border">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="border px-3 py-2">Aspect</th>
                            <th className="border px-3 py-2">BFS</th>
                            <th className="border px-3 py-2">DFS</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-3 py-2 font-semibold">Data Structure</td>
                            <td className="border px-3 py-2">Queue (FIFO)</td>
                            <td className="border px-3 py-2">Stack/Recursion (LIFO)</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2 font-semibold">Time Complexity</td>
                            <td className="border px-3 py-2">O(V + E)</td>
                            <td className="border px-3 py-2">O(V + E)</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2 font-semibold">Space Complexity</td>
                            <td className="border px-3 py-2">O(V) - worst when all at same level</td>
                            <td className="border px-3 py-2">O(V) - recursion depth</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2 font-semibold">Shortest Path</td>
                            <td className="border px-3 py-2">✓ Finds shortest (unweighted)</td>
                            <td className="border px-3 py-2">✗ May not find shortest</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2 font-semibold">Memory Usage</td>
                            <td className="border px-3 py-2">High for wide graphs</td>
                            <td className="border px-3 py-2">High for deep graphs</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2 font-semibold">Best For</td>
                            <td className="border px-3 py-2">Shortest paths, level-order</td>
                            <td className="border px-3 py-2">Topological sort, cycle detection</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2 font-semibold">Implementation</td>
                            <td className="border px-3 py-2">Iterative (queue)</td>
                            <td className="border px-3 py-2">Recursive or Iterative (stack)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">DFS Applications & Variants</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Topological Sorting:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Linear ordering of vertices in DAG</li>
                      <li>For edge (u,v), u comes before v in ordering</li>
                      <li>Use DFS and add to stack after visiting all neighbors</li>
                      <li>Pop stack to get topological order</li>
                      <li><strong>Time:</strong> <InlineMath math="O(V + E)" /></li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Cycle Detection:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Undirected Graph:</strong> If back edge found (edge to visited non-parent)</li>
                      <li><strong>Directed Graph:</strong> If back edge found (edge to ancestor in DFS tree)</li>
                      <li>Use colors: White (unvisited), Gray (in progress), Black (done)</li>
                      <li>Cycle exists if gray node reached from its descendant</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Strongly Connected Components (Kosaraju's):</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Step 1: DFS on original graph, record finish times</li>
                      <li>Step 2: Reverse all edges in graph</li>
                      <li>Step 3: DFS on reversed graph in decreasing finish time order</li>
                      <li>Each DFS tree in step 3 is one SCC</li>
                      <li><strong>Time:</strong> <InlineMath math="O(V + E)" /></li>
                    </ul>
                  </div>
                </div>
              </div>

              <WorkedExample
                title="Detecting Cycle in Directed Graph"
                problem="Check if cycle exists in directed graph with edges: 0→1, 1→2, 2→3, 3→1, 2→4"
                steps={[
                  {
                    description: "Initialize color array: all WHITE (unvisited)",
                    calculation: "color[0..4] = WHITE"
                  },
                  {
                    description: "Start DFS from vertex 0, mark GRAY (in progress)",
                    calculation: "DFS(0): color[0] = GRAY\nVisit neighbor 1: DFS(1)"
                  },
                  {
                    description: "Continue DFS through vertex 1 and 2",
                    calculation: "DFS(1): color[1] = GRAY, visit 2\nDFS(2): color[2] = GRAY, visit 3"
                  },
                  {
                    description: "From vertex 3, try to visit vertex 1",
                    calculation: "DFS(3): color[3] = GRAY\nTry to visit neighbor 1\ncolor[1] = GRAY (ancestor in DFS tree!)",
                    result: "Back edge detected: 3→1"
                  },
                  {
                    description: "Cycle found",
                    result: "Cycle: 1 → 2 → 3 → 1"
                  }
                ]}
                solution="Graph contains a cycle. Time: O(V+E), Space: O(V)"
                bgColor="bg-red-50"
                borderColor="border-red-500"
              />

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Applications</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">BFS Applications:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Shortest path in unweighted graphs</li>
                      <li>Web crawlers (level by level)</li>
                      <li>Social networking (friends at distance k)</li>
                      <li>Broadcasting in networks</li>
                      <li>GPS navigation (unweighted roads)</li>
                      <li>Finding connected components</li>
                      <li>Bipartite graph checking (2-coloring)</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">DFS Applications:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Topological sorting (task scheduling)</li>
                      <li>Cycle detection (deadlock detection)</li>
                      <li>Path finding with backtracking</li>
                      <li>Solving mazes and puzzles</li>
                      <li>Finding strongly connected components</li>
                      <li>Detecting bridges and articulation points</li>
                      <li>Generating permutations/combinations</li>
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
                    <p className="font-semibold text-lg mb-2">Dijkstra's Algorithm (Single Source):</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Single source shortest path</li>
                      <li><strong>Requirement:</strong> Non-negative edge weights only</li>
                      <li>Greedy approach using priority queue (min-heap)</li>
                      <li><strong>Time:</strong> <InlineMath math="O((V + E) \log V)" /> with binary heap</li>
                      <li><strong>Time:</strong> <InlineMath math="O(V^2)" /> with array (dense graphs)</li>
                      <li>Maintains distance array, updates via relaxation</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Bellman-Ford Algorithm:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Single source shortest path</li>
                      <li><strong>Advantage:</strong> Works with negative weights</li>
                      <li>Detects negative weight cycles</li>
                      <li><strong>Time:</strong> <InlineMath math="O(VE)" /></li>
                      <li>Relax all edges V-1 times</li>
                      <li>One more iteration to detect negative cycles</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Floyd-Warshall Algorithm:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>All pairs</strong> shortest path</li>
                      <li>Dynamic programming approach</li>
                      <li><strong>Time:</strong> <InlineMath math="O(V^3)" />, <strong>Space:</strong> <InlineMath math="O(V^2)" /></li>
                      <li>Can detect negative cycles</li>
                      <li>Works with negative weights (no negative cycles)</li>
                      <li>Computes shortest paths between all pairs simultaneously</li>
                    </ul>
                  </div>
                </div>
              </div>

              <FormulaBox
                title="Dijkstra's Algorithm - Edge Relaxation"
                formulas={[
                  {
                    label: "Initialization",
                    formula: "dist[s] = 0, \\quad dist[v] = \\infty \\text{ for all } v \\neq s",
                    block: true
                  },
                  {
                    label: "Relaxation Step",
                    formula: "\\text{If } dist[u] + w(u,v) < dist[v] \\text{ then } dist[v] = dist[u] + w(u,v)",
                    block: true
                  },
                  {
                    label: "Priority Queue Operations",
                    formula: "\\text{Extract-Min: } O(\\log V), \\quad \\text{Decrease-Key: } O(\\log V)",
                    block: true
                  },
                  {
                    label: "Total Complexity",
                    formula: "O(V \\cdot \\log V + E \\cdot \\log V) = O((V+E) \\log V)",
                    block: true
                  }
                ]}
                bgColor="bg-blue-50"
                borderColor="border-blue-500"
              />

              <WorkedExample
                title="Dijkstra's Algorithm Example"
                problem="Find shortest path from A to all vertices. Graph: A→B(4), A→C(2), B→C(1), B→D(5), C→D(8), C→E(10), D→E(2)"
                steps={[
                  {
                    description: "Initialize distances and priority queue",
                    calculation: "dist = {A:0, B:∞, C:∞, D:∞, E:∞}\nPQ = [(0,A)]\nvisited = {}",
                    result: "Start from A with distance 0"
                  },
                  {
                    description: "Extract A (min distance), relax edges from A",
                    calculation: "Extract (0,A), mark A visited\nRelax A→B: dist[B] = min(∞, 0+4) = 4\nRelax A→C: dist[C] = min(∞, 0+2) = 2\nPQ = [(2,C), (4,B)]",
                    result: "Updated distances to B and C"
                  },
                  {
                    description: "Extract C (min distance = 2), relax edges from C",
                    calculation: "Extract (2,C), mark C visited\nRelax C→B: dist[B] = min(4, 2+1) = 3 ✓\nRelax C→D: dist[D] = min(∞, 2+8) = 10\nRelax C→E: dist[E] = min(∞, 2+10) = 12\nPQ = [(3,B), (10,D), (12,E)]"
                  },
                  {
                    description: "Extract B, relax edges",
                    calculation: "Extract (3,B), mark B visited\nRelax B→D: dist[D] = min(10, 3+5) = 8 ✓\nPQ = [(8,D), (12,E)]"
                  },
                  {
                    description: "Complete remaining vertices",
                    calculation: "Extract (8,D), mark D visited\nRelax D→E: dist[E] = min(12, 8+2) = 10 ✓\nExtract (10,E), mark E visited",
                    result: "All vertices processed"
                  }
                ]}
                solution="Shortest distances from A: {A:0, B:3, C:2, D:8, E:10}"
                bgColor="bg-purple-50"
                borderColor="border-purple-500"
              />

              <FormulaBox
                title="Bellman-Ford Algorithm"
                formulas={[
                  {
                    label: "Initialization",
                    formula: "dist[s] = 0, \\quad dist[v] = \\infty \\text{ for all } v \\neq s",
                    block: true
                  },
                  {
                    label: "Main Loop (V-1 iterations)",
                    formula: "\\text{For } i = 1 \\text{ to } V-1: \\text{ Relax all edges } (u,v)",
                    block: true
                  },
                  {
                    label: "Relaxation",
                    formula: "\\text{If } dist[u] + w(u,v) < dist[v]: dist[v] = dist[u] + w(u,v)",
                    block: true
                  },
                  {
                    label: "Negative Cycle Detection",
                    formula: "\\text{If any edge can still be relaxed, negative cycle exists}",
                    block: true
                  }
                ]}
                bgColor="bg-green-50"
                borderColor="border-green-500"
              />

              <WorkedExample
                title="Bellman-Ford with Negative Weights"
                problem="Find shortest paths from A. Graph: A→B(4), A→C(2), B→C(-3), C→D(1), B→D(2)"
                steps={[
                  {
                    description: "Initialize distances",
                    calculation: "dist = {A:0, B:∞, C:∞, D:∞}",
                    result: "Source A has distance 0"
                  },
                  {
                    description: "Iteration 1: Relax all edges",
                    calculation: "A→B: dist[B] = 0+4 = 4\nA→C: dist[C] = 0+2 = 2\nB→C: 4+(-3) = 1 < 2, dist[C] = 1\nC→D: dist[D] = 1+1 = 2\nB→D: 4+2 = 6",
                    result: "dist = {A:0, B:4, C:1, D:2}"
                  },
                  {
                    description: "Iteration 2: Relax all edges again",
                    calculation: "B→C: 4+(-3) = 1, no change\nC→D: 1+1 = 2, no change\nOther edges don't improve",
                    result: "dist = {A:0, B:4, C:1, D:2} (unchanged)"
                  },
                  {
                    description: "Iteration 3: Check for changes (|V|-1 = 3 iterations total)",
                    calculation: "No edges can be relaxed further",
                    result: "Algorithm converged"
                  },
                  {
                    description: "Negative cycle check (one more iteration)",
                    calculation: "Try to relax all edges\nNo edge produces better distance",
                    result: "No negative cycle detected"
                  }
                ]}
                solution="Shortest paths: {A:0, B:4, C:1, D:2}. Handles negative weight B→C(-3) correctly!"
                bgColor="bg-amber-50"
                borderColor="border-amber-500"
              />

              <FormulaBox
                title="Floyd-Warshall Algorithm"
                formulas={[
                  {
                    label: "DP State Definition",
                    formula: "dist[i][j][k] = \\text{shortest path from } i \\text{ to } j \\text{ using vertices } \\{1..k\\}",
                    block: true
                  },
                  {
                    label: "Recurrence Relation",
                    formula: "dist[i][j][k] = \\min(dist[i][j][k-1], \\ dist[i][k][k-1] + dist[k][j][k-1])",
                    block: true
                  },
                  {
                    label: "Space-Optimized (in-place)",
                    formula: "dist[i][j] = \\min(dist[i][j], \\ dist[i][k] + dist[k][j])",
                    block: true
                  },
                  {
                    label: "Initialization",
                    formula: "dist[i][j] = \\begin{cases} 0 & \\text{if } i = j \\\\ w(i,j) & \\text{if edge exists} \\\\ \\infty & \\text{otherwise} \\end{cases}",
                    block: true
                  }
                ]}
                bgColor="bg-indigo-50"
                borderColor="border-indigo-500"
              />

              <WorkedExample
                title="Floyd-Warshall Algorithm"
                problem="Find all-pairs shortest paths. Vertices: {0,1,2,3}. Edges: 0→1(3), 0→2(6), 1→2(2), 2→3(1), 1→3(5)"
                steps={[
                  {
                    description: "Initialize distance matrix",
                    calculation: "dist[i][j] = edge weight if exists, 0 if i=j, ∞ otherwise\n    0   1   2   3\n0 [ 0   3   6   ∞ ]\n1 [ ∞   0   2   5 ]\n2 [ ∞   ∞   0   1 ]\n3 [ ∞   ∞   ∞   0 ]"
                  },
                  {
                    description: "k=0: Consider paths through vertex 0",
                    calculation: "dist[1][2] = min(2, dist[1][0]+dist[0][2])\n           = min(2, ∞+6) = 2 (no change)\n(Most paths don't improve)",
                    result: "Matrix mostly unchanged"
                  },
                  {
                    description: "k=1: Consider paths through vertex 1",
                    calculation: "dist[0][2] = min(6, dist[0][1]+dist[1][2])\n           = min(6, 3+2) = 5 ✓ Better!\ndist[0][3] = min(∞, 3+5) = 8 ✓ New path!"
                  },
                  {
                    description: "k=2: Consider paths through vertex 2",
                    calculation: "dist[0][3] = min(8, dist[0][2]+dist[2][3])\n           = min(8, 5+1) = 6 ✓ Better!\ndist[1][3] = min(5, 2+1) = 3 ✓ Better!"
                  },
                  {
                    description: "k=3: Consider paths through vertex 3",
                    calculation: "No improvements (vertex 3 has no outgoing edges)",
                    result: "Final matrix computed"
                  }
                ]}
                solution="All-pairs shortest distances computed. Path 0→3: 0→1→2→3 with cost 6"
                bgColor="bg-teal-50"
                borderColor="border-teal-500"
              />

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Shortest Path Algorithm Comparison</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm border">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="border px-3 py-2">Algorithm</th>
                            <th className="border px-3 py-2">Type</th>
                            <th className="border px-3 py-2">Time</th>
                            <th className="border px-3 py-2">Space</th>
                            <th className="border px-3 py-2">Negative Weights</th>
                            <th className="border px-3 py-2">Best Use Case</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-3 py-2 font-semibold">BFS</td>
                            <td className="border px-3 py-2">Single source</td>
                            <td className="border px-3 py-2">O(V+E)</td>
                            <td className="border px-3 py-2">O(V)</td>
                            <td className="border px-3 py-2">Unweighted only</td>
                            <td className="border px-3 py-2">Unweighted graphs</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2 font-semibold">Dijkstra</td>
                            <td className="border px-3 py-2">Single source</td>
                            <td className="border px-3 py-2">O((V+E)log V)</td>
                            <td className="border px-3 py-2">O(V)</td>
                            <td className="border px-3 py-2">❌ No</td>
                            <td className="border px-3 py-2">Non-negative weights</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2 font-semibold">Bellman-Ford</td>
                            <td className="border px-3 py-2">Single source</td>
                            <td className="border px-3 py-2">O(VE)</td>
                            <td className="border px-3 py-2">O(V)</td>
                            <td className="border px-3 py-2">✓ Yes</td>
                            <td className="border px-3 py-2">Negative weights, cycle detection</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2 font-semibold">Floyd-Warshall</td>
                            <td className="border px-3 py-2">All pairs</td>
                            <td className="border px-3 py-2">O(V³)</td>
                            <td className="border px-3 py-2">O(V²)</td>
                            <td className="border px-3 py-2">✓ Yes</td>
                            <td className="border px-3 py-2">Dense graphs, all pairs</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2 font-semibold">Johnson's</td>
                            <td className="border px-3 py-2">All pairs</td>
                            <td className="border px-3 py-2">O(V²log V + VE)</td>
                            <td className="border px-3 py-2">O(V²)</td>
                            <td className="border px-3 py-2">✓ Yes</td>
                            <td className="border px-3 py-2">Sparse graphs, all pairs</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">When to Use Each Algorithm:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>BFS:</strong> Unweighted graph, shortest path needed</li>
                      <li><strong>Dijkstra:</strong> Non-negative weights, single source, need fast solution</li>
                      <li><strong>Bellman-Ford:</strong> Negative weights allowed, or need to detect negative cycles</li>
                      <li><strong>Floyd-Warshall:</strong> Need all-pairs distances, dense graph, simple implementation</li>
                      <li><strong>Run Dijkstra V times:</strong> All-pairs for sparse graph with non-negative weights</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Important Notes & Gotchas</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">⚠️ Common Mistakes:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Using Dijkstra with negative weights → Wrong results!</li>
                      <li>Forgetting to check for negative cycles in Bellman-Ford</li>
                      <li>Using Floyd-Warshall for sparse graphs → Inefficient</li>
                      <li>Not initializing dist[i][i] = 0 in Floyd-Warshall</li>
                      <li>Forgetting to mark vertices as visited in Dijkstra</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">📝 Exam Tips:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Know when each algorithm applies (weights, graph type)</li>
                      <li>Practice tracing algorithms step-by-step on small graphs</li>
                      <li>Remember: Dijkstra = greedy, Bellman-Ford = DP, Floyd = all-pairs DP</li>
                      <li>Understand relaxation concept - key to all shortest path algorithms</li>
                      <li>Can reconstruct paths using predecessor/parent array</li>
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

              <WorkedExample
                title="Bubble Sort Analysis"
                problem="Analyze time complexity of Bubble Sort for array [5, 2, 8, 1, 9]"
                steps={[
                  {
                    description: "Pass 1: Compare adjacent elements, swap if needed",
                    calculation: "Comparisons: (5,2) swap → [2,5,8,1,9]\n(5,8) no swap → [2,5,8,1,9]\n(8,1) swap → [2,5,1,8,9]\n(8,9) no swap → [2,5,1,8,9]",
                    result: "4 comparisons, largest element bubbled to end"
                  },
                  {
                    description: "Pass 2: Repeat for first n-1 elements",
                    calculation: "Comparisons: 3 more\nArray state: [2,1,5,8,9]",
                    result: "Second largest in position"
                  },
                  {
                    description: "Continue for n-1 passes total",
                    calculation: "Pass 3: 2 comparisons\nPass 4: 1 comparison\nTotal: 4+3+2+1 = 10 comparisons"
                  },
                  {
                    description: "General formula for n elements",
                    calculation: "Comparisons = (n-1) + (n-2) + ... + 1\n            = n(n-1)/2\n            = (n² - n)/2",
                    result: "Quadratic growth"
                  }
                ]}
                solution="Time Complexity: O(n²) worst/average, O(n) best (sorted). Space: O(1)"
                bgColor="bg-blue-50"
                borderColor="border-blue-500"
              />

              <FormulaBox
                title="Insertion Sort Complexity Analysis"
                formulas={[
                  {
                    label: "Best Case (Already Sorted)",
                    formula: "T(n) = O(n) \\text{ - only } n-1 \\text{ comparisons}",
                    block: true
                  },
                  {
                    label: "Worst Case (Reverse Sorted)",
                    formula: "T(n) = 1 + 2 + 3 + \\cdots + (n-1) = \\frac{n(n-1)}{2} = O(n^2)",
                    block: true
                  },
                  {
                    label: "Average Case",
                    formula: "T(n) = O(n^2) \\text{ - expect half elements to shift on average}",
                    block: true
                  },
                  {
                    label: "Space Complexity",
                    formula: "S(n) = O(1) \\text{ - in-place sorting}",
                    block: true
                  }
                ]}
                bgColor="bg-cyan-50"
                borderColor="border-cyan-500"
              />

              <WorkedExample
                title="Quick Sort Partition Analysis"
                problem="Analyze Quick Sort complexity. Array: [3, 7, 8, 5, 2, 1, 9, 6, 4], pivot = 4"
                steps={[
                  {
                    description: "Partition using last element (4) as pivot",
                    calculation: "i = -1 (points to last smaller element)\nScan: 3 < 4, swap, i=0: [3,7,8,5,2,1,9,6,4]\n      7 > 4, no swap\n      2 < 4, swap with 7, i=1: [3,2,8,5,7,1,9,6,4]\n      1 < 4, swap with 8, i=2: [3,2,1,5,7,8,9,6,4]",
                    result: "Partition around pivot"
                  },
                  {
                    description: "Place pivot in correct position",
                    calculation: "Swap pivot with arr[i+1]:\n[3,2,1,4,7,8,9,6,5]\nPivot 4 is now at index 3",
                    result: "Elements < 4 on left, > 4 on right"
                  },
                  {
                    description: "Recursively sort left and right partitions",
                    calculation: "Left: [3,2,1], Right: [7,8,9,6,5]\nRecurrence: T(n) = T(k) + T(n-k-1) + O(n)",
                    result: "Partition cost: O(n)"
                  },
                  {
                    description: "Best case: Balanced partitions (k ≈ n/2)",
                    calculation: "T(n) = 2T(n/2) + O(n)\nBy Master Theorem: T(n) = O(n log n)",
                    result: "Logarithmic recursion depth"
                  },
                  {
                    description: "Worst case: Unbalanced (already sorted)",
                    calculation: "T(n) = T(n-1) + O(n)\n     = O(n²)",
                    result: "Linear recursion depth"
                  }
                ]}
                solution="Average: O(n log n), Worst: O(n²). Space: O(log n) for recursion"
                bgColor="bg-purple-50"
                borderColor="border-purple-500"
              />

              <FormulaBox
                title="Lower Bound for Comparison-Based Sorting"
                formulas={[
                  {
                    label: "Decision Tree Model",
                    formula: "\\text{Each comparison is a binary decision (yes/no)}",
                    block: true
                  },
                  {
                    label: "Number of Possible Permutations",
                    formula: "n! \\text{ possible orderings of } n \\text{ elements}",
                    block: true
                  },
                  {
                    label: "Minimum Tree Height",
                    formula: "h \\geq \\lceil \\log_2(n!) \\rceil",
                    block: true
                  },
                  {
                    label: "Using Stirling's Approximation",
                    formula: "\\log_2(n!) = \\Theta(n \\log n)",
                    block: true
                  },
                  {
                    label: "Lower Bound Theorem",
                    formula: "\\text{Any comparison-based sorting requires } \\Omega(n \\log n) \\text{ comparisons}",
                    block: true
                  }
                ]}
                bgColor="bg-rose-50"
                borderColor="border-rose-500"
              />

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Detailed Algorithm Analysis</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Merge Sort:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Strategy:</strong> Divide and conquer</li>
                      <li><strong>Recurrence:</strong> <InlineMath math="T(n) = 2T(n/2) + O(n)" /></li>
                      <li><strong>Stable:</strong> Yes (maintains relative order)</li>
                      <li><strong>Pros:</strong> Guaranteed O(n log n), good for linked lists</li>
                      <li><strong>Cons:</strong> Requires O(n) extra space</li>
                      <li><strong>Use when:</strong> Stability required, predictable performance needed</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Quick Sort:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Strategy:</strong> Divide and conquer with partitioning</li>
                      <li><strong>Average Recurrence:</strong> <InlineMath math="T(n) = 2T(n/2) + O(n) = O(n \log n)" /></li>
                      <li><strong>Worst Recurrence:</strong> <InlineMath math="T(n) = T(n-1) + O(n) = O(n^2)" /></li>
                      <li><strong>Pivot Selection:</strong> Random/median-of-3 improves performance</li>
                      <li><strong>Pros:</strong> In-place, cache-friendly, fast in practice</li>
                      <li><strong>Cons:</strong> Unstable, worst case O(n²)</li>
                      <li><strong>Use when:</strong> Average case performance prioritized</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Heap Sort:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Strategy:</strong> Build max-heap, extract max repeatedly</li>
                      <li><strong>Build Heap:</strong> <InlineMath math="O(n)" /> using bottom-up approach</li>
                      <li><strong>Extract Max:</strong> <InlineMath math="O(\log n)" /> per extraction, n times</li>
                      <li><strong>Total:</strong> <InlineMath math="O(n) + n \cdot O(\log n) = O(n \log n)" /></li>
                      <li><strong>Pros:</strong> In-place, guaranteed O(n log n)</li>
                      <li><strong>Cons:</strong> Not stable, slower than Quick Sort in practice</li>
                      <li><strong>Use when:</strong> Predictable time with O(1) space needed</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Selection Sort:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Strategy:</strong> Find min, swap with first unsorted</li>
                      <li><strong>Comparisons:</strong> <InlineMath math="\sum_{i=0}^{n-1} (n-i-1) = \frac{n(n-1)}{2} = O(n^2)" /></li>
                      <li><strong>Swaps:</strong> <InlineMath math="O(n)" /> - exactly n-1 swaps</li>
                      <li><strong>Pros:</strong> Minimizes swaps, simple</li>
                      <li><strong>Cons:</strong> Always O(n²), not stable</li>
                      <li><strong>Use when:</strong> Swap cost is very high</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Non-Comparison Sorting Algorithms</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Counting Sort:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Assumption:</strong> Input integers in range [0, k]</li>
                      <li><strong>Time:</strong> <InlineMath math="O(n + k)" /></li>
                      <li><strong>Space:</strong> <InlineMath math="O(n + k)" /></li>
                      <li><strong>Stable:</strong> Yes</li>
                      <li><strong>Best when:</strong> k = O(n), i.e., range is small</li>
                      <li><strong>Limitation:</strong> Only works for integers with bounded range</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Radix Sort:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Strategy:</strong> Sort by each digit/character position</li>
                      <li><strong>Time:</strong> <InlineMath math="O(d(n + k))" /> where d = digits, k = base</li>
                      <li><strong>Space:</strong> <InlineMath math="O(n + k)" /></li>
                      <li><strong>Stable:</strong> Yes (uses stable sort for each digit)</li>
                      <li><strong>Best when:</strong> Numbers have fixed number of digits</li>
                      <li><strong>Example:</strong> For d-digit decimals, O(d·n) with counting sort</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Bucket Sort:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Strategy:</strong> Distribute elements into buckets, sort each</li>
                      <li><strong>Average Time:</strong> <InlineMath math="O(n + k)" /> assuming uniform distribution</li>
                      <li><strong>Worst Time:</strong> <InlineMath math="O(n^2)" /> if all in one bucket</li>
                      <li><strong>Space:</strong> <InlineMath math="O(n + k)" /></li>
                      <li><strong>Best when:</strong> Input uniformly distributed over range</li>
                    </ul>
                  </div>
                </div>
              </div>

              <WorkedExample
                title="Counting Sort Example"
                problem="Sort array [2, 5, 3, 0, 2, 3, 0, 3] using Counting Sort. Range: 0-5"
                steps={[
                  {
                    description: "Count occurrences of each value",
                    calculation: "count[0] = 2  (two 0's)\ncount[1] = 0  (zero 1's)\ncount[2] = 2  (two 2's)\ncount[3] = 3  (three 3's)\ncount[4] = 0\ncount[5] = 1",
                    result: "Frequency array created"
                  },
                  {
                    description: "Transform count to cumulative count",
                    calculation: "count[0] = 2\ncount[1] = 2 + 0 = 2\ncount[2] = 2 + 2 = 4\ncount[3] = 4 + 3 = 7\ncount[4] = 7\ncount[5] = 8",
                    result: "Shows position where each value ends"
                  },
                  {
                    description: "Build output array (right to left for stability)",
                    calculation: "Process [2,5,3,0,2,3,0,3] from right:\n  3: output[count[3]-1=6] = 3, count[3]--\n  0: output[count[0]-1=1] = 0, count[0]--\n  ...",
                    result: "Stable sorted output"
                  },
                  {
                    description: "Final sorted array",
                    result: "[0, 0, 2, 2, 3, 3, 3, 5]"
                  }
                ]}
                solution="Sorted in O(n+k) = O(8+6) = O(14) time, linear!"
                bgColor="bg-emerald-50"
                borderColor="border-emerald-500"
              />

              <FormulaBox
                title="Radix Sort Complexity"
                formulas={[
                  {
                    label: "For d-digit numbers in base b",
                    formula: "T(n) = d \\times T_{\\text{stable sort}}(n)",
                    block: true
                  },
                  {
                    label: "Using Counting Sort as stable sort",
                    formula: "T(n) = d \\times O(n + b) = O(d(n + b))",
                    block: true
                  },
                  {
                    label: "If d is constant and b = O(n)",
                    formula: "T(n) = O(n)",
                    block: true
                  },
                  {
                    label: "Space Complexity",
                    formula: "S(n) = O(n + b)",
                    block: true
                  }
                ]}
                bgColor="bg-violet-50"
                borderColor="border-violet-500"
              />

              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sorting Algorithm Selection Guide</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm border">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="border px-3 py-2">Scenario</th>
                            <th className="border px-3 py-2">Best Algorithm</th>
                            <th className="border px-3 py-2">Reason</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-3 py-2">Small array (n &lt; 10-20)</td>
                            <td className="border px-3 py-2">Insertion Sort</td>
                            <td className="border px-3 py-2">Simple, low overhead</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2">Nearly sorted data</td>
                            <td className="border px-3 py-2">Insertion Sort</td>
                            <td className="border px-3 py-2">O(n) for nearly sorted</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2">General purpose</td>
                            <td className="border px-3 py-2">Quick Sort</td>
                            <td className="border px-3 py-2">Fast average case</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2">Guaranteed O(n log n)</td>
                            <td className="border px-3 py-2">Merge/Heap Sort</td>
                            <td className="border px-3 py-2">No worst-case degradation</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2">Stability required</td>
                            <td className="border px-3 py-2">Merge Sort</td>
                            <td className="border px-3 py-2">Stable O(n log n)</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2">Memory constrained</td>
                            <td className="border px-3 py-2">Heap Sort</td>
                            <td className="border px-3 py-2">O(1) extra space</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2">Integer range [0,k], k=O(n)</td>
                            <td className="border px-3 py-2">Counting Sort</td>
                            <td className="border px-3 py-2">O(n) linear time</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2">Fixed-length strings/numbers</td>
                            <td className="border px-3 py-2">Radix Sort</td>
                            <td className="border px-3 py-2">O(dn) where d=digits</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
                      <li><strong>Best Case:</strong> <InlineMath math="O(1)" /> - element at first position</li>
                      <li><strong>Average Case:</strong> <InlineMath math="O(n/2) = O(n)" /></li>
                      <li><strong>Worst Case:</strong> <InlineMath math="O(n)" /> - element at end or not present</li>
                      <li><strong>Space:</strong> <InlineMath math="O(1)" /></li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Binary Search:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Divide and conquer on <strong>sorted</strong> array</li>
                      <li>Compare with middle element, eliminate half</li>
                      <li><strong>Time:</strong> <InlineMath math="O(\log n)" /></li>
                      <li><strong>Space:</strong> <InlineMath math="O(1)" /> iterative, <InlineMath math="O(\log n)" /> recursive</li>
                      <li><strong>Requirement:</strong> Array must be sorted</li>
                    </ul>
                  </div>
                </div>
              </div>

              <FormulaBox
                title="Binary Search Recurrence Analysis"
                formulas={[
                  {
                    label: "Recurrence Relation",
                    formula: "T(n) = T(n/2) + O(1)",
                    block: true
                  },
                  {
                    label: "By Master Theorem (a=1, b=2, f(n)=O(1))",
                    formula: "c_{crit} = \\log_2(1) = 0, \\quad f(n) = \\Theta(n^0) = \\Theta(1)",
                    block: true
                  },
                  {
                    label: "Case 2 applies",
                    formula: "T(n) = \\Theta(n^0 \\log n) = \\Theta(\\log n)",
                    block: true
                  },
                  {
                    label: "Number of comparisons",
                    formula: "\\text{Max comparisons} = \\lceil \\log_2(n+1) \\rceil",
                    block: true
                  }
                ]}
                bgColor="bg-teal-50"
                borderColor="border-teal-500"
              />

              <WorkedExample
                title="Binary Search Trace"
                problem="Search for target = 23 in sorted array [3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]"
                steps={[
                  {
                    description: "Initialize pointers",
                    calculation: "left = 0, right = 10 (array length - 1)\nmid = (0 + 10) / 2 = 5",
                    result: "Check arr[5] = 17"
                  },
                  {
                    description: "Compare target with middle element",
                    calculation: "23 > 17, search right half\nleft = mid + 1 = 6\nmid = (6 + 10) / 2 = 8",
                    result: "Check arr[8] = 29"
                  },
                  {
                    description: "Target less than middle",
                    calculation: "23 < 29, search left half\nright = mid - 1 = 7\nmid = (6 + 7) / 2 = 6",
                    result: "Check arr[6] = 19"
                  },
                  {
                    description: "Target greater than middle",
                    calculation: "23 > 19, search right\nleft = 7\nmid = (7 + 7) / 2 = 7",
                    result: "Check arr[7] = 23"
                  },
                  {
                    description: "Found target!",
                    result: "arr[7] = 23, return index 7"
                  }
                ]}
                solution="Found at index 7 in 4 comparisons. log₂(11) ≈ 3.46, so at most 4 comparisons."
                bgColor="bg-green-50"
                borderColor="border-green-500"
              />

              <WorkedExample
                title="Binary Search Analysis - Unsuccessful Search"
                problem="Analyze comparisons when searching for 20 (not present) in [3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]"
                steps={[
                  {
                    description: "First iteration",
                    calculation: "mid = 5, arr[5] = 17\n20 > 17, search right: left = 6",
                    result: "1 comparison"
                  },
                  {
                    description: "Second iteration",
                    calculation: "mid = 8, arr[8] = 29\n20 < 29, search left: right = 7",
                    result: "2 comparisons"
                  },
                  {
                    description: "Third iteration",
                    calculation: "mid = 6, arr[6] = 19\n20 > 19, search right: left = 7",
                    result: "3 comparisons"
                  },
                  {
                    description: "Fourth iteration",
                    calculation: "mid = 7, arr[7] = 23\n20 < 23, search left: right = 6",
                    result: "4 comparisons"
                  },
                  {
                    description: "Termination",
                    calculation: "left > right (7 > 6)",
                    result: "Element not found, return -1"
                  }
                ]}
                solution="4 comparisons for unsuccessful search, same as ⌈log₂(11)⌉ = 4"
                bgColor="bg-blue-50"
                borderColor="border-blue-500"
              />

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Searching Algorithms</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Interpolation Search:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Improvement over Binary Search</strong></li>
                      <li>Estimates position based on value distribution</li>
                      <li><strong>Formula:</strong> <InlineMath math="pos = low + \frac{(target - arr[low]) \times (high - low)}{arr[high] - arr[low]}" /></li>
                      <li><strong>Best/Avg Case:</strong> <InlineMath math="O(\log \log n)" /> for uniform distribution</li>
                      <li><strong>Worst Case:</strong> <InlineMath math="O(n)" /> for non-uniform data</li>
                      <li><strong>Use when:</strong> Data is uniformly distributed</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Jump Search:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Jump ahead by fixed steps, then linear search in block</li>
                      <li><strong>Optimal jump size:</strong> <InlineMath math="\sqrt{n}" /></li>
                      <li><strong>Time:</strong> <InlineMath math="O(\sqrt{n})" /></li>
                      <li><strong>Space:</strong> <InlineMath math="O(1)" /></li>
                      <li><strong>Advantage:</strong> Better than linear, doesn't need random access</li>
                      <li><strong>Use when:</strong> Sorted array, backward jumping expensive</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Exponential Search:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Find range where element exists, then binary search</li>
                      <li>Jump in powers of 2: check positions 1, 2, 4, 8, 16, ...</li>
                      <li><strong>Time:</strong> <InlineMath math="O(\log i)" /> where i is position of element</li>
                      <li><strong>Better than binary search</strong> when target is near beginning</li>
                      <li><strong>Use when:</strong> Unbounded/infinite sorted array</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Fibonacci Search:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Similar to binary search, uses Fibonacci numbers to divide array</li>
                      <li><strong>Time:</strong> <InlineMath math="O(\log n)" /></li>
                      <li><strong>Advantage:</strong> Uses addition/subtraction instead of division</li>
                      <li><strong>Use when:</strong> Division operation is costly</li>
                    </ul>
                  </div>
                </div>
              </div>

              <FormulaBox
                title="Jump Search Optimal Step Size Derivation"
                formulas={[
                  {
                    label: "Let step size = m",
                    formula: "\\text{Jumps needed} = \\frac{n}{m}, \\quad \\text{Linear search} = m-1",
                    block: true
                  },
                  {
                    label: "Total comparisons",
                    formula: "T(n,m) = \\frac{n}{m} + m - 1",
                    block: true
                  },
                  {
                    label: "Minimize by taking derivative",
                    formula: "\\frac{dT}{dm} = -\\frac{n}{m^2} + 1 = 0 \\Rightarrow m^2 = n \\Rightarrow m = \\sqrt{n}",
                    block: true
                  },
                  {
                    label: "Optimal complexity",
                    formula: "T(n) = \\frac{n}{\\sqrt{n}} + \\sqrt{n} = 2\\sqrt{n} = O(\\sqrt{n})",
                    block: true
                  }
                ]}
                bgColor="bg-amber-50"
                borderColor="border-amber-500"
              />

              <WorkedExample
                title="Jump Search Example"
                problem="Search for 55 in [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]. n=15, optimal jump=√15≈3"
                steps={[
                  {
                    description: "Initialize with jump size",
                    calculation: "jump = √15 ≈ 3.87 → 3 (integer)\nprev = 0, current = 0",
                    result: "Start at index 0"
                  },
                  {
                    description: "Jump forward while arr[min(current,n-1)] < target",
                    calculation: "Jump 1: current = 3, arr[3] = 2 < 55\nJump 2: current = 6, arr[6] = 8 < 55\nJump 3: current = 9, arr[9] = 34 < 55\nJump 4: current = 12, arr[12] = 144 > 55",
                    result: "Found block: indices [9, 12)"
                  },
                  {
                    description: "Linear search in block [prev, current)",
                    calculation: "prev = 9\nCheck arr[9] = 34 ≠ 55\nCheck arr[10] = 55 ✓ Found!",
                    result: "Linear search took 2 comparisons"
                  },
                  {
                    description: "Total comparisons",
                    calculation: "Jumps: 4 comparisons\nLinear: 2 comparisons\nTotal: 6 comparisons",
                    result: "Much better than linear (15 comparisons)"
                  }
                ]}
                solution="Found at index 10. Comparisons: 6 vs 11 for linear search"
                bgColor="bg-cyan-50"
                borderColor="border-cyan-500"
              />

              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Search Algorithm Comparison</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm border">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="border px-3 py-2">Algorithm</th>
                            <th className="border px-3 py-2">Time (Avg)</th>
                            <th className="border px-3 py-2">Time (Worst)</th>
                            <th className="border px-3 py-2">Space</th>
                            <th className="border px-3 py-2">Requires Sorted</th>
                            <th className="border px-3 py-2">Best Use Case</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-3 py-2 font-semibold">Linear</td>
                            <td className="border px-3 py-2">O(n)</td>
                            <td className="border px-3 py-2">O(n)</td>
                            <td className="border px-3 py-2">O(1)</td>
                            <td className="border px-3 py-2">No</td>
                            <td className="border px-3 py-2">Unsorted/small arrays</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2 font-semibold">Binary</td>
                            <td className="border px-3 py-2">O(log n)</td>
                            <td className="border px-3 py-2">O(log n)</td>
                            <td className="border px-3 py-2">O(1)</td>
                            <td className="border px-3 py-2">Yes</td>
                            <td className="border px-3 py-2">General sorted arrays</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2 font-semibold">Jump</td>
                            <td className="border px-3 py-2">O(√n)</td>
                            <td className="border px-3 py-2">O(√n)</td>
                            <td className="border px-3 py-2">O(1)</td>
                            <td className="border px-3 py-2">Yes</td>
                            <td className="border px-3 py-2">Large sorted arrays</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2 font-semibold">Interpolation</td>
                            <td className="border px-3 py-2">O(log log n)</td>
                            <td className="border px-3 py-2">O(n)</td>
                            <td className="border px-3 py-2">O(1)</td>
                            <td className="border px-3 py-2">Yes</td>
                            <td className="border px-3 py-2">Uniform distribution</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2 font-semibold">Exponential</td>
                            <td className="border px-3 py-2">O(log i)*</td>
                            <td className="border px-3 py-2">O(log n)</td>
                            <td className="border px-3 py-2">O(1)</td>
                            <td className="border px-3 py-2">Yes</td>
                            <td className="border px-3 py-2">Unbounded/target near start</td>
                          </tr>
                        </tbody>
                      </table>
                      <p className="text-xs mt-2 text-gray-600">*i is the position of the target element</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Decision Guide:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Unsorted data:</strong> Linear search (or sort first if multiple searches)</li>
                      <li><strong>Sorted, general purpose:</strong> Binary search</li>
                      <li><strong>Sorted, uniform distribution:</strong> Interpolation search</li>
                      <li><strong>Sorted, target likely near start:</strong> Exponential search</li>
                      <li><strong>Sorted, backward jumps expensive:</strong> Jump search</li>
                      <li><strong>Frequent searches:</strong> Hash table O(1) average</li>
                    </ul>
                  </div>
                </div>
              </div>

              <FormulaBox
                title="Search Complexity Summary"
                formulas={[
                  {
                    label: "Linear Search",
                    formula: "T(n) = O(n), \\quad S(n) = O(1)",
                    block: true
                  },
                  {
                    label: "Binary Search",
                    formula: "T(n) = O(\\log n), \\quad S(n) = O(1) \\text{ iterative}",
                    block: true
                  },
                  {
                    label: "Jump Search",
                    formula: "T(n) = O(\\sqrt{n}), \\quad S(n) = O(1)",
                    block: true
                  },
                  {
                    label: "Interpolation Search (uniform)",
                    formula: "T(n) = O(\\log \\log n), \\quad S(n) = O(1)",
                    block: true
                  },
                  {
                    label: "Hash Table",
                    formula: "T(n) = O(1) \\text{ average}, O(n) \\text{ worst}, \\quad S(n) = O(n)",
                    block: true
                  }
                ]}
                bgColor="bg-emerald-50"
                borderColor="border-emerald-500"
              />
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
