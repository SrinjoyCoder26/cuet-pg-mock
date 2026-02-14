import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import FormulaBox from "@/components/diagrams/FormulaBox";
import WorkedExample from "@/components/diagrams/WorkedExample";
import VennDiagram from "@/components/diagrams/VennDiagram";

const SetTheoryAlgebra = () => {
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
              1
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Set Theory & Algebra</h1>
              <p className="text-gray-600">Complete notes for CUET PG MTQP04</p>
            </div>
          </div>

          {/* Sets Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">1. Sets</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1 Basic Definitions</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Set:</strong> A well-defined collection of distinct objects, considered as an object in its own right.</p>
                  <p><strong>Element:</strong> An object belonging to a set (notation: a ∈ A means 'a belongs to set A')</p>
                  <p><strong>Empty Set (∅):</strong> A set containing no elements</p>
                  <p><strong>Universal Set (U):</strong> The set of all elements under consideration</p>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Representation Methods:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Roster Form: A = {`{1, 2, 3, 4, 5}`}</li>
                      <li>Set-Builder Form: A = {`{x | x ∈ ℕ, x ≤ 5}`}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.2 Types of Sets</h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">Finite Set:</p>
                    <p className="text-sm">Has countable number of elements. Example: A = {`{1, 2, 3}`}</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">Infinite Set:</p>
                    <p className="text-sm">Has uncountable elements. Example: ℕ = {`{1, 2, 3, ...}`}</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">Subset (A ⊆ B):</p>
                    <p className="text-sm">Every element of A is in B</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">Proper Subset (A ⊂ B):</p>
                    <p className="text-sm">A ⊆ B and A ≠ B</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">Power Set P(A):</p>
                    <p className="text-sm">Set of all subsets of A. If |A| = n, then |P(A)| = 2ⁿ</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">Singleton Set:</p>
                    <p className="text-sm">Contains exactly one element</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.3 Set Operations</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Union (A ∪ B):</p>
                    <p className="mb-2">A ∪ B = {`{x | x ∈ A or x ∈ B}`}</p>
                    <p className="text-sm text-gray-600">Properties: Commutative, Associative, Identity: A ∪ ∅ = A</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Intersection (A ∩ B):</p>
                    <p className="mb-2">A ∩ B = {`{x | x ∈ A and x ∈ B}`}</p>
                    <p className="text-sm text-gray-600">Properties: Commutative, Associative, Identity: A ∩ U = A</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Difference (A - B):</p>
                    <p className="mb-2">A - B = {`{x | x ∈ A and x ∉ B}`}</p>
                    <p className="text-sm text-gray-600">Not commutative: A - B ≠ B - A</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Complement (A'):</p>
                    <p className="mb-2">A' = U - A = {`{x | x ∈ U and x ∉ A}`}</p>
                    <p className="text-sm text-gray-600">De Morgan's Laws: (A ∪ B)' = A' ∩ B', (A ∩ B)' = A' ∪ B'</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Symmetric Difference (A Δ B):</p>
                    <p className="mb-2">A Δ B = (A - B) ∪ (B - A) = (A ∪ B) - (A ∩ B)</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.4 Important Laws and Identities</h3>
                <div className="bg-white p-4 rounded space-y-2 text-gray-700">
                  <p><strong>Distributive Laws:</strong></p>
                  <ul className="list-disc ml-6 mb-3">
                    <li>A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)</li>
                    <li>A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)</li>
                  </ul>
                  <p><strong>Absorption Laws:</strong></p>
                  <ul className="list-disc ml-6 mb-3">
                    <li>A ∪ (A ∩ B) = A</li>
                    <li>A ∩ (A ∪ B) = A</li>
                  </ul>
                  <p><strong>Complement Laws:</strong></p>
                  <ul className="list-disc ml-6">
                    <li>A ∪ A' = U</li>
                    <li>A ∩ A' = ∅</li>
                    <li>(A')' = A</li>
                  </ul>
                </div>
              </div>

              <FormulaBox
                title="1.5 Cardinality Formulas"
                bgColor="bg-indigo-50"
                borderColor="border-indigo-500"
                formulas={[
                  {
                    label: "Cardinality of Union (Inclusion-Exclusion Principle)",
                    formula: "|A \\cup B| = |A| + |B| - |A \\cap B|",
                    block: true
                  },
                  {
                    label: "Three Sets Union",
                    formula: "|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |B \\cap C| - |A \\cap C| + |A \\cap B \\cap C|",
                    block: true
                  },
                  {
                    label: "Power Set Cardinality",
                    formula: "|P(A)| = 2^{|A|}",
                    block: true
                  },
                  {
                    label: "Cartesian Product Cardinality",
                    formula: "|A \\times B| = |A| \\times |B|",
                    block: true
                  },
                  {
                    label: "Complement Cardinality",
                    formula: "|A'| = |U| - |A|",
                    block: true
                  }
                ]}
              />

              <VennDiagram
                sets={{
                  A: ['1', '2', '3'],
                  B: ['4', '5', '6'],
                  intersection: ['7', '8']
                }}
                labels={{
                  A: 'Set A',
                  B: 'Set B',
                  title: 'A ∪ B (Union)'
                }}
                operation="union"
              />

              <WorkedExample
                title="Example 1: Cardinality with Inclusion-Exclusion"
                problem="In a class of 100 students, 60 students play cricket, 50 play football, and 30 play both. How many students play at least one sport? How many play neither?"
                steps={[
                  {
                    description: "Identify the given information",
                    calculation: "|U| = 100 (total students)\n|C| = 60 (cricket players)\n|F| = 50 (football players)\n|C ∩ F| = 30 (both sports)"
                  },
                  {
                    description: "Apply inclusion-exclusion principle to find students playing at least one sport",
                    calculation: "|C ∪ F| = |C| + |F| - |C ∩ F|\n        = 60 + 50 - 30\n        = 80",
                    result: "80 students play at least one sport"
                  },
                  {
                    description: "Find students playing neither sport",
                    calculation: "Neither = |U| - |C ∪ F|\n        = 100 - 80\n        = 20",
                    result: "20 students play neither sport"
                  }
                ]}
                solution="80 students play at least one sport, and 20 students play neither sport."
              />

              <WorkedExample
                title="Example 2: Power Set Calculation"
                problem="Given set A = {1, 2, 3}, find the power set P(A) and verify its cardinality."
                steps={[
                  {
                    description: "List all subsets of A systematically",
                    calculation: "Subsets with 0 elements: {∅}\nSubsets with 1 element: {{1}, {2}, {3}}\nSubsets with 2 elements: {{1,2}, {1,3}, {2,3}}\nSubsets with 3 elements: {{1,2,3}}"
                  },
                  {
                    description: "Write the power set",
                    calculation: "P(A) = {∅, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}}",
                    result: "P(A) has 8 elements"
                  },
                  {
                    description: "Verify using formula",
                    calculation: "|P(A)| = 2^|A| = 2^3 = 8 ✓",
                    result: "Formula confirmed"
                  }
                ]}
                solution="P(A) = {∅, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}} with |P(A)| = 8"
              />

              <VennDiagram
                sets={{
                  A: ['1', '2'],
                  B: ['3', '4'],
                  intersection: ['5', '6']
                }}
                labels={{
                  A: 'Set A',
                  B: 'Set B',
                  title: 'A ∩ B (Intersection)'
                }}
                operation="intersection"
              />

              <WorkedExample
                title="Example 3: Three Sets Inclusion-Exclusion"
                problem="In a survey of 200 people: 100 like tea (T), 80 like coffee (C), 60 like juice (J), 40 like both tea and coffee, 30 like both coffee and juice, 20 like both tea and juice, and 10 like all three. How many like at least one beverage?"
                steps={[
                  {
                    description: "Write down all given information",
                    calculation: "|T| = 100, |C| = 80, |J| = 60\n|T ∩ C| = 40, |C ∩ J| = 30, |T ∩ J| = 20\n|T ∩ C ∩ J| = 10"
                  },
                  {
                    description: "Apply three-set inclusion-exclusion formula",
                    calculation: "|T ∪ C ∪ J| = |T| + |C| + |J| - |T ∩ C| - |C ∩ J| - |T ∩ J| + |T ∩ C ∩ J|\n            = 100 + 80 + 60 - 40 - 30 - 20 + 10\n            = 240 - 90 + 10\n            = 160",
                    result: "160 people like at least one beverage"
                  },
                  {
                    description: "Calculate people who like none",
                    calculation: "None = 200 - 160 = 40",
                    result: "40 people like none of the beverages"
                  }
                ]}
                solution="160 people like at least one beverage, and 40 people like none."
              />

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.6 Cartesian Product</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Definition:</strong> A × B = {`{(a, b) | a ∈ A and b ∈ B}`}</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Properties:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Not commutative: A × B ≠ B × A (unless A = B)</li>
                      <li>|A × B| = |A| × |B|</li>
                      <li>A × ∅ = ∅</li>
                      <li>A × (B ∪ C) = (A × B) ∪ (A × C)</li>
                      <li>A × (B ∩ C) = (A × B) ∩ (A × C)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <WorkedExample
                title="Example 4: Cartesian Product"
                problem="Given A = {1, 2} and B = {x, y, z}, find A × B and B × A. Verify that |A × B| = |A| × |B|."
                steps={[
                  {
                    description: "Calculate A × B (all ordered pairs with first element from A, second from B)",
                    calculation: "A × B = {(1,x), (1,y), (1,z), (2,x), (2,y), (2,z)}",
                    result: "|A × B| = 6"
                  },
                  {
                    description: "Calculate B × A (all ordered pairs with first element from B, second from A)",
                    calculation: "B × A = {(x,1), (x,2), (y,1), (y,2), (z,1), (z,2)}",
                    result: "|B × A| = 6"
                  },
                  {
                    description: "Verify the formula and note that A × B ≠ B × A",
                    calculation: "|A| × |B| = 2 × 3 = 6 ✓\nA × B ≠ B × A (different ordered pairs)",
                    result: "Formula verified, sets are different"
                  }
                ]}
                solution="A × B = {(1,x), (1,y), (1,z), (2,x), (2,y), (2,z)}, |A × B| = 6. Cartesian product is not commutative."
              />

              <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 Practice Tips for Sets</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-teal-900 mb-2">✓ Key Strategies:</p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Always draw Venn diagrams for visual problems</li>
                      <li>For inclusion-exclusion, write down all given values first</li>
                      <li>Remember: intersection removes double counting</li>
                      <li>Power set: number of subsets = 2^n where n = |A|</li>
                      <li>Cartesian product: remember order matters in ordered pairs</li>
                      <li>De Morgan's Laws: complement switches ∪ and ∩</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-teal-900 mb-2">⚡ Common Mistakes to Avoid:</p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Don't confuse ∈ (element of) with ⊆ (subset of)</li>
                      <li>Empty set ∅ is a subset of every set</li>
                      <li>|A ∪ B| ≠ |A| + |B| (must subtract intersection)</li>
                      <li>A × B ≠ B × A (Cartesian product is not commutative)</li>
                      <li>{`{a} ≠ a (set containing 'a' is different from element 'a')`}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Relations Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">2. Relations</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Basic Concepts</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Binary Relation:</strong> A relation R from set A to set B is a subset of A × B</p>
                  <p>If (a, b) ∈ R, we write aRb (a is related to b)</p>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Domain and Range:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Domain(R) = {`{a | ∃b, (a,b) ∈ R}`}</li>
                      <li>Range(R) = {`{b | ∃a, (a,b) ∈ R}`}</li>
                      <li>Co-domain = Set B (where R: A → B)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Types of Relations</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Reflexive:</p>
                    <p>∀a ∈ A, (a, a) ∈ R</p>
                    <p className="text-sm text-gray-600 mt-1">Example: "≤" on integers (every number ≤ itself)</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Symmetric:</p>
                    <p>If (a, b) ∈ R, then (b, a) ∈ R</p>
                    <p className="text-sm text-gray-600 mt-1">Example: "is sibling of" relation</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Antisymmetric:</p>
                    <p>If (a, b) ∈ R and (b, a) ∈ R, then a = b</p>
                    <p className="text-sm text-gray-600 mt-1">Example: "≤" on integers</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Transitive:</p>
                    <p>If (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R</p>
                    <p className="text-sm text-gray-600 mt-1">Example: "is ancestor of" relation</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Equivalence Relation:</p>
                    <p>Reflexive + Symmetric + Transitive</p>
                    <p className="text-sm text-gray-600 mt-1">Example: Equality (=), Congruence modulo n</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Equivalence Relations and Partitions</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Equivalence Class:</p>
                    <p>[a] = {`{x ∈ A | xRa}`} (all elements related to a)</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Partition:</p>
                    <p>A collection of non-empty, disjoint subsets whose union equals the entire set</p>
                    <p className="text-sm text-gray-600 mt-2">Theorem: Every equivalence relation induces a partition, and every partition defines an equivalence relation</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.4 Relation Operations</h3>
                <div className="bg-white p-4 rounded space-y-3">
                  <div>
                    <p className="font-semibold">Inverse Relation (R⁻¹):</p>
                    <p className="text-gray-700">R⁻¹ = {`{(b, a) | (a, b) ∈ R}`}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Composite Relation (R ∘ S):</p>
                    <p className="text-gray-700">R ∘ S = {`{(a, c) | ∃b, (a, b) ∈ S and (b, c) ∈ R}`}</p>
                    <p className="text-sm text-gray-600 mt-1">Note: Applied right to left</p>
                  </div>
                </div>
              </div>

              <FormulaBox
                title="2.5 Important Relation Formulas"
                bgColor="bg-purple-50"
                borderColor="border-purple-500"
                formulas={[
                  {
                    label: "Number of Relations from A to B",
                    formula: "2^{|A| \\times |B|}",
                    block: true
                  },
                  {
                    label: "Number of Reflexive Relations on Set A",
                    formula: "2^{n^2 - n} \\text{ where } n = |A|",
                    block: true
                  },
                  {
                    label: "Number of Symmetric Relations on Set A",
                    formula: "2^{\\frac{n(n+1)}{2}} \\text{ where } n = |A|",
                    block: true
                  },
                  {
                    label: "Inverse of Inverse",
                    formula: "(R^{-1})^{-1} = R",
                    block: true
                  },
                  {
                    label: "Composition Associativity",
                    formula: "(R \\circ S) \\circ T = R \\circ (S \\circ T)",
                    block: true
                  }
                ]}
              />

              <WorkedExample
                title="Example 1: Checking Relation Properties"
                problem="Let A = {1, 2, 3, 4} and R = {(1,1), (2,2), (3,3), (4,4), (1,2), (2,1), (3,4), (4,3)}. Determine if R is reflexive, symmetric, transitive, and/or an equivalence relation."
                steps={[
                  {
                    description: "Check Reflexive: Does (a,a) ∈ R for all a ∈ A?",
                    calculation: "(1,1) ∈ R ✓\n(2,2) ∈ R ✓\n(3,3) ∈ R ✓\n(4,4) ∈ R ✓",
                    result: "R is REFLEXIVE"
                  },
                  {
                    description: "Check Symmetric: If (a,b) ∈ R, is (b,a) ∈ R?",
                    calculation: "(1,2) ∈ R and (2,1) ∈ R ✓\n(2,1) ∈ R and (1,2) ∈ R ✓\n(3,4) ∈ R and (4,3) ∈ R ✓\n(4,3) ∈ R and (3,4) ∈ R ✓",
                    result: "R is SYMMETRIC"
                  },
                  {
                    description: "Check Transitive: If (a,b) ∈ R and (b,c) ∈ R, is (a,c) ∈ R?",
                    calculation: "(1,2) ∈ R and (2,1) ∈ R, need (1,1) ∈ R ✓\n(3,4) ∈ R and (4,3) ∈ R, need (3,3) ∈ R ✓\nAll cases satisfy transitivity",
                    result: "R is TRANSITIVE"
                  },
                  {
                    description: "Determine if R is an equivalence relation",
                    calculation: "Reflexive ✓ + Symmetric ✓ + Transitive ✓",
                    result: "R IS an equivalence relation"
                  }
                ]}
                solution="R is reflexive, symmetric, and transitive, therefore R is an equivalence relation."
              />

              <WorkedExample
                title="Example 2: Finding Equivalence Classes"
                problem="Let A = {0, 1, 2, 3, 4, 5} and define relation R: aRb if a ≡ b (mod 3). Find all equivalence classes."
                steps={[
                  {
                    description: "Verify R is an equivalence relation (given congruence modulo n is always an equivalence relation)",
                    calculation: "Reflexive: a ≡ a (mod 3) ✓\nSymmetric: a ≡ b (mod 3) ⟹ b ≡ a (mod 3) ✓\nTransitive: a ≡ b and b ≡ c (mod 3) ⟹ a ≡ c (mod 3) ✓"
                  },
                  {
                    description: "Find equivalence class [0] - all elements ≡ 0 (mod 3)",
                    calculation: "[0] = {x ∈ A | x ≡ 0 (mod 3)} = {0, 3}",
                    result: "[0] = {0, 3}"
                  },
                  {
                    description: "Find equivalence class [1] - all elements ≡ 1 (mod 3)",
                    calculation: "[1] = {x ∈ A | x ≡ 1 (mod 3)} = {1, 4}",
                    result: "[1] = {1, 4}"
                  },
                  {
                    description: "Find equivalence class [2] - all elements ≡ 2 (mod 3)",
                    calculation: "[2] = {x ∈ A | x ≡ 2 (mod 3)} = {2, 5}",
                    result: "[2] = {2, 5}"
                  },
                  {
                    description: "Verify partition properties",
                    calculation: "Disjoint: [0] ∩ [1] = ∅, [1] ∩ [2] = ∅, [0] ∩ [2] = ∅ ✓\nCover A: [0] ∪ [1] ∪ [2] = {0,1,2,3,4,5} = A ✓",
                    result: "Valid partition"
                  }
                ]}
                solution="Equivalence classes: [0] = {0, 3}, [1] = {1, 4}, [2] = {2, 5}. These form a partition of A."
              />

              <WorkedExample
                title="Example 3: Relation Composition"
                problem="Let A = {1, 2, 3}, R = {(1,2), (2,3), (1,3)} and S = {(1,1), (2,2), (3,1)}. Find R ∘ S and S ∘ R."
                steps={[
                  {
                    description: "Find R ∘ S: For each (a,b) ∈ S, find (b,c) ∈ R, then include (a,c)",
                    calculation: "(1,1) ∈ S, no (1,c) ∈ R ⟹ nothing\n(2,2) ∈ S and (2,3) ∈ R ⟹ (2,3) ∈ R∘S\n(3,1) ∈ S and (1,2) ∈ R ⟹ (3,2) ∈ R∘S\n(3,1) ∈ S and (1,3) ∈ R ⟹ (3,3) ∈ R∘S",
                    result: "R ∘ S = {(2,3), (3,2), (3,3)}"
                  },
                  {
                    description: "Find S ∘ R: For each (a,b) ∈ R, find (b,c) ∈ S, then include (a,c)",
                    calculation: "(1,2) ∈ R and (2,2) ∈ S ⟹ (1,2) ∈ S∘R\n(2,3) ∈ R and (3,1) ∈ S ⟹ (2,1) ∈ S∘R\n(1,3) ∈ R and (3,1) ∈ S ⟹ (1,1) ∈ S∘R",
                    result: "S ∘ R = {(1,2), (2,1), (1,1)}"
                  },
                  {
                    description: "Compare compositions",
                    calculation: "R ∘ S = {(2,3), (3,2), (3,3)}\nS ∘ R = {(1,2), (2,1), (1,1)}\nR ∘ S ≠ S ∘ R",
                    result: "Composition is NOT commutative"
                  }
                ]}
                solution="R ∘ S = {(2,3), (3,2), (3,3)} and S ∘ R = {(1,2), (2,1), (1,1)}. Relation composition is not commutative."
              />

              <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 Practice Tips for Relations</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-teal-900 mb-2">✓ Key Strategies:</p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>For reflexive: check diagonal elements (a,a) for all a</li>
                      <li>For symmetric: if you have (a,b), must also have (b,a)</li>
                      <li>For transitive: check all paths of length 2</li>
                      <li>Equivalence relation = reflexive + symmetric + transitive</li>
                      <li>Composition: read right to left (R ∘ S means S first, then R)</li>
                      <li>Equivalence classes partition the set into disjoint subsets</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-teal-900 mb-2">⚡ Common Mistakes:</p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Don't confuse antisymmetric with "not symmetric"</li>
                      <li>Relation composition is NOT commutative: R ∘ S ≠ S ∘ R</li>
                      <li>Empty relation is symmetric and transitive (vacuously true)</li>
                      <li>Remember: n² possible pairs in relation on set of size n</li>
                      <li>Equivalence classes must be non-empty and cover entire set</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Functions Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">3. Functions</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Definition and Types</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Function:</strong> A relation f from A to B where each element in A is related to exactly one element in B</p>
                  <p>Notation: f: A → B, y = f(x)</p>
                  <div className="bg-white p-4 rounded mt-3 space-y-3">
                    <div>
                      <p className="font-semibold">Injective (One-to-One):</p>
                      <p>If f(a₁) = f(a₂), then a₁ = a₂</p>
                      <p className="text-sm text-gray-600">Different inputs → Different outputs</p>
                    </div>
                    <div>
                      <p className="font-semibold">Surjective (Onto):</p>
                      <p>Range(f) = Codomain(f)</p>
                      <p className="text-sm text-gray-600">Every element in B has a pre-image in A</p>
                    </div>
                    <div>
                      <p className="font-semibold">Bijective:</p>
                      <p>Both Injective and Surjective</p>
                      <p className="text-sm text-gray-600">One-to-one correspondence; has an inverse</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Special Functions</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">Identity Function:</p>
                    <p className="text-gray-700">I(x) = x for all x ∈ A</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">Constant Function:</p>
                    <p className="text-gray-700">f(x) = c for all x ∈ A</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">Floor Function:</p>
                    <p className="text-gray-700">⌊x⌋ = greatest integer ≤ x</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">Ceiling Function:</p>
                    <p className="text-gray-700">⌈x⌉ = smallest integer ≥ x</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Function Composition</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Composition (g ∘ f):</strong> If f: A → B and g: B → C, then (g ∘ f): A → C</p>
                  <p>(g ∘ f)(x) = g(f(x))</p>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Properties:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Associative: (h ∘ g) ∘ f = h ∘ (g ∘ f)</li>
                      <li>Not commutative: g ∘ f ≠ f ∘ g (in general)</li>
                      <li>If f and g are injective, then g ∘ f is injective</li>
                      <li>If f and g are surjective, then g ∘ f is surjective</li>
                      <li>If f and g are bijective, then g ∘ f is bijective</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.4 Inverse Functions</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Inverse Function f⁻¹:</strong> Exists only if f is bijective</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Properties:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>f⁻¹(f(x)) = x for all x ∈ domain(f)</li>
                      <li>f(f⁻¹(y)) = y for all y ∈ range(f)</li>
                      <li>(g ∘ f)⁻¹ = f⁻¹ ∘ g⁻¹</li>
                      <li>(f⁻¹)⁻¹ = f</li>
                    </ul>
                  </div>
                </div>
              </div>

              <FormulaBox
                title="3.5 Counting Functions"
                bgColor="bg-blue-50"
                borderColor="border-blue-500"
                formulas={[
                  {
                    label: "Total number of functions from A to B",
                    formula: "|B|^{|A|}",
                    block: true
                  },
                  {
                    label: "Number of injective functions from A to B (|A| ≤ |B|)",
                    formula: "\\frac{|B|!}{(|B| - |A|)!} = P(|B|, |A|)",
                    block: true
                  },
                  {
                    label: "Number of bijective functions from A to B (|A| = |B| = n)",
                    formula: "n!",
                    block: true
                  },
                  {
                    label: "Number of surjective functions from A to B (using Stirling numbers)",
                    formula: "|B|! \\times S(|A|, |B|)",
                    block: true
                  },
                  {
                    label: "Composition of bijections",
                    formula: "f: A \\to B, g: B \\to C \\text{ both bijective} \\Rightarrow g \\circ f: A \\to C \\text{ bijective}",
                    block: true
                  }
                ]}
              />

              <WorkedExample
                title="Example 1: Testing for Injection and Surjection"
                problem="Let f: ℝ → ℝ be defined by f(x) = 2x + 3. Determine if f is injective, surjective, and/or bijective."
                steps={[
                  {
                    description: "Test for Injectivity: Assume f(x₁) = f(x₂) and prove x₁ = x₂",
                    calculation: "f(x₁) = f(x₂)\n2x₁ + 3 = 2x₂ + 3\n2x₁ = 2x₂\nx₁ = x₂",
                    result: "f is INJECTIVE (one-to-one)"
                  },
                  {
                    description: "Test for Surjectivity: For any y ∈ ℝ, can we find x such that f(x) = y?",
                    calculation: "Let y ∈ ℝ be arbitrary\nSolve: 2x + 3 = y\n2x = y - 3\nx = (y - 3)/2\nFor any y, x = (y-3)/2 gives f(x) = y",
                    result: "f is SURJECTIVE (onto)"
                  },
                  {
                    description: "Determine if f is bijective",
                    calculation: "Injective ✓ + Surjective ✓ = Bijective ✓",
                    result: "f is BIJECTIVE"
                  },
                  {
                    description: "Find the inverse function",
                    calculation: "y = 2x + 3\nx = (y - 3)/2\nf⁻¹(x) = (x - 3)/2",
                    result: "Inverse exists: f⁻¹(x) = (x - 3)/2"
                  }
                ]}
                solution="f is injective, surjective, and bijective. The inverse function is f⁻¹(x) = (x - 3)/2."
              />

              <WorkedExample
                title="Example 2: Function Composition"
                problem="Let f: ℝ → ℝ with f(x) = x² and g: ℝ → ℝ with g(x) = 2x + 1. Find (g ∘ f)(x) and (f ∘ g)(x). Are they equal?"
                steps={[
                  {
                    description: "Calculate g ∘ f (apply f first, then g)",
                    calculation: "(g ∘ f)(x) = g(f(x))\n           = g(x²)\n           = 2(x²) + 1\n           = 2x² + 1",
                    result: "(g ∘ f)(x) = 2x² + 1"
                  },
                  {
                    description: "Calculate f ∘ g (apply g first, then f)",
                    calculation: "(f ∘ g)(x) = f(g(x))\n           = f(2x + 1)\n           = (2x + 1)²\n           = 4x² + 4x + 1",
                    result: "(f ∘ g)(x) = 4x² + 4x + 1"
                  },
                  {
                    description: "Compare the two compositions",
                    calculation: "(g ∘ f)(x) = 2x² + 1\n(f ∘ g)(x) = 4x² + 4x + 1\nThese are NOT equal",
                    result: "Function composition is NOT commutative"
                  }
                ]}
                solution="(g ∘ f)(x) = 2x² + 1 and (f ∘ g)(x) = 4x² + 4x + 1. They are not equal, showing composition is not commutative."
              />

              <WorkedExample
                title="Example 3: Counting Functions"
                problem="Let A = {1, 2, 3} and B = {a, b, c, d}. How many total functions, injective functions, and bijective functions exist from A to B?"
                steps={[
                  {
                    description: "Count total functions from A to B",
                    calculation: "Total functions = |B|^|A|\n               = 4³\n               = 64",
                    result: "64 total functions"
                  },
                  {
                    description: "Count injective functions (|A| ≤ |B|, so injections exist)",
                    calculation: "Injective functions = P(|B|, |A|) = |B|!/(|B|-|A|)!\n                    = 4!/(4-3)!\n                    = 24/1\n                    = 24",
                    result: "24 injective functions"
                  },
                  {
                    description: "Count bijective functions",
                    calculation: "Bijection requires |A| = |B|\nHere |A| = 3 and |B| = 4\nSince |A| ≠ |B|, no bijection exists",
                    result: "0 bijective functions"
                  }
                ]}
                solution="There are 64 total functions, 24 injective functions, and 0 bijective functions from A to B."
              />

              <WorkedExample
                title="Example 4: Verifying Inverse Function"
                problem="Let f: ℝ → ℝ be defined by f(x) = 3x - 5. Find f⁻¹ and verify that f⁻¹(f(x)) = x and f(f⁻¹(y)) = y."
                steps={[
                  {
                    description: "Find the inverse function",
                    calculation: "Let y = f(x) = 3x - 5\nSolve for x:\ny = 3x - 5\ny + 5 = 3x\nx = (y + 5)/3\nTherefore: f⁻¹(y) = (y + 5)/3\nOr: f⁻¹(x) = (x + 5)/3",
                    result: "f⁻¹(x) = (x + 5)/3"
                  },
                  {
                    description: "Verify f⁻¹(f(x)) = x",
                    calculation: "f⁻¹(f(x)) = f⁻¹(3x - 5)\n          = ((3x - 5) + 5)/3\n          = 3x/3\n          = x ✓",
                    result: "Verified: f⁻¹(f(x)) = x"
                  },
                  {
                    description: "Verify f(f⁻¹(y)) = y",
                    calculation: "f(f⁻¹(y)) = f((y + 5)/3)\n          = 3((y + 5)/3) - 5\n          = (y + 5) - 5\n          = y ✓",
                    result: "Verified: f(f⁻¹(y)) = y"
                  }
                ]}
                solution="f⁻¹(x) = (x + 5)/3, and both inverse function properties are verified."
              />

              <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 Practice Tips for Functions</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-teal-900 mb-2">✓ Key Strategies:</p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Injective test: f(x₁) = f(x₂) must imply x₁ = x₂</li>
                      <li>Surjective test: for every y in codomain, find x where f(x) = y</li>
                      <li>Bijective = injective + surjective (one-to-one correspondence)</li>
                      <li>Composition: (g ∘ f)(x) means apply f first, then g</li>
                      <li>Inverse exists only for bijective functions</li>
                      <li>To find inverse: swap x and y, then solve for y</li>
                      <li>Counting: |B|^|A| total functions from A to B</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-teal-900 mb-2">⚡ Common Mistakes:</p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Don't confuse domain, codomain, and range</li>
                      <li>Function composition is NOT commutative: g∘f ≠ f∘g</li>
                      <li>Every function is a relation, but not every relation is a function</li>
                      <li>Inverse reverses order: (g∘f)⁻¹ = f⁻¹∘g⁻¹ (not g⁻¹∘f⁻¹)</li>
                      <li>For bijection from A to B, must have |A| = |B|</li>
                      <li>{`Injective functions: can have |A| ≤ |B|, not |A| > |B|`}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Groups Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">4. Groups</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Group Definition</h3>
                <div className="space-y-3 text-gray-700">
                  <p>A group (G, *) is a set G with a binary operation * satisfying:</p>
                  <div className="bg-white p-4 rounded space-y-3">
                    <div>
                      <p className="font-semibold">1. Closure:</p>
                      <p>∀a, b ∈ G, a * b ∈ G</p>
                    </div>
                    <div>
                      <p className="font-semibold">2. Associativity:</p>
                      <p>∀a, b, c ∈ G, (a * b) * c = a * (b * c)</p>
                    </div>
                    <div>
                      <p className="font-semibold">3. Identity Element:</p>
                      <p>∃e ∈ G such that ∀a ∈ G, a * e = e * a = a</p>
                    </div>
                    <div>
                      <p className="font-semibold">4. Inverse Element:</p>
                      <p>∀a ∈ G, ∃a⁻¹ ∈ G such that a * a⁻¹ = a⁻¹ * a = e</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Types of Groups</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">Abelian (Commutative) Group:</p>
                    <p className="text-gray-700">∀a, b ∈ G, a * b = b * a</p>
                    <p className="text-sm text-gray-600 mt-1">Example: (ℤ, +), (ℝ, +)</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">Cyclic Group:</p>
                    <p className="text-gray-700">Generated by a single element: G = {`{aⁿ | n ∈ ℤ}`}</p>
                    <p className="text-sm text-gray-600 mt-1">All cyclic groups are abelian</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">Finite Group:</p>
                    <p className="text-gray-700">Group with finite number of elements</p>
                    <p className="text-sm text-gray-600 mt-1">Order of group = |G|</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Subgroups</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Subgroup H:</strong> A subset H of G that is itself a group under the same operation</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Subgroup Test:</p>
                    <p>H is a subgroup of G if:</p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>H is non-empty</li>
                      <li>∀a, b ∈ H, a * b ∈ H (closure)</li>
                      <li>∀a ∈ H, a⁻¹ ∈ H (inverse)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Lagrange's Theorem:</p>
                    <p>If H is a subgroup of finite group G, then |H| divides |G|</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.4 Important Examples</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">(ℤ, +):</p>
                    <p className="text-sm text-gray-700">Integers under addition - infinite abelian group</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">(ℤₙ, +ₙ):</p>
                    <p className="text-sm text-gray-700">Integers modulo n - finite cyclic group of order n</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">(ℚ-{`{0}`}, ×):</p>
                    <p className="text-sm text-gray-700">Non-zero rationals under multiplication</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">Sₙ:</p>
                    <p className="text-sm text-gray-700">Symmetric group - all permutations of n elements</p>
                  </div>
                </div>
              </div>

              <FormulaBox
                title="4.5 Group Theory Formulas"
                bgColor="bg-indigo-50"
                borderColor="border-indigo-500"
                formulas={[
                  {
                    label: "Order of Element (smallest positive integer n)",
                    formula: "a^n = e \\text{ where } e \\text{ is identity}",
                    block: true
                  },
                  {
                    label: "Lagrange's Theorem",
                    formula: "|H| \\text{ divides } |G| \\text{ for subgroup } H \\leq G",
                    block: true
                  },
                  {
                    label: "Order of Cyclic Group",
                    formula: "|\\langle a \\rangle| = \\text{order of } a",
                    block: true
                  },
                  {
                    label: "Number of elements in Symmetric Group Sₙ",
                    formula: "|S_n| = n!",
                    block: true
                  },
                  {
                    label: "Inverse in Abelian Group",
                    formula: "(ab)^{-1} = a^{-1}b^{-1} = b^{-1}a^{-1}",
                    block: true
                  }
                ]}
              />

              <WorkedExample
                title="Example 1: Verifying Group Axioms"
                problem="Verify that (ℤ₄, +₄) where ℤ₄ = {0, 1, 2, 3} with addition modulo 4 is a group."
                steps={[
                  {
                    description: "Verify Closure: Create operation table to show a +₄ b ∈ ℤ₄ for all a, b",
                    calculation: "  +₄ | 0  1  2  3\n  ---|------------\n   0 | 0  1  2  3\n   1 | 1  2  3  0\n   2 | 2  3  0  1\n   3 | 3  0  1  2\nAll results in {0,1,2,3} ✓",
                    result: "Closure satisfied"
                  },
                  {
                    description: "Verify Associativity: (a +₄ b) +₄ c = a +₄ (b +₄ c) for all a,b,c",
                    calculation: "Example: (1 +₄ 2) +₄ 3 = 3 +₄ 3 = 2\n        1 +₄ (2 +₄ 3) = 1 +₄ 1 = 2 ✓\nHolds for all combinations (integer addition is associative)",
                    result: "Associativity satisfied"
                  },
                  {
                    description: "Find Identity Element: element e where a +₄ e = a for all a",
                    calculation: "From table, first row and column show:\n0 +₄ a = a and a +₄ 0 = a for all a\nIdentity element e = 0",
                    result: "Identity: e = 0"
                  },
                  {
                    description: "Find Inverse Elements: for each a, find a⁻¹ where a +₄ a⁻¹ = 0",
                    calculation: "0⁻¹ = 0 (0 +₄ 0 = 0)\n1⁻¹ = 3 (1 +₄ 3 = 0)\n2⁻¹ = 2 (2 +₄ 2 = 0)\n3⁻¹ = 1 (3 +₄ 1 = 0)\nAll elements have inverses ✓",
                    result: "All inverses exist"
                  }
                ]}
                solution="(ℤ₄, +₄) is a group. It satisfies closure, associativity, has identity 0, and all elements have inverses. Additionally, it's abelian since addition is commutative."
              />

              <WorkedExample
                title="Example 2: Order of Group Elements"
                problem="In the group (ℤ₆, +₆), find the order of each element."
                steps={[
                  {
                    description: "Recall: Order of element a is smallest positive n where nᵃ = e (identity)",
                    calculation: "In additive notation: n·a ≡ 0 (mod 6)\nFind smallest n for each element"
                  },
                  {
                    description: "Find order of each element",
                    calculation: "ord(0): 1·0 = 0 ⟹ order = 1\nord(1): 1·1=1, 2·1=2, ..., 6·1=0 ⟹ order = 6\nord(2): 1·2=2, 2·2=4, 3·2=0 ⟹ order = 3\nord(3): 1·3=3, 2·3=0 ⟹ order = 2\nord(4): 1·4=4, 2·4=2, 3·4=0 ⟹ order = 3\nord(5): 1·5=5, 2·5=4, ..., 6·5=0 ⟹ order = 6",
                    result: "Orders: 1,6,3,2,3,6 respectively"
                  },
                  {
                    description: "Verify Lagrange's Theorem: order divides |G|",
                    calculation: "|G| = 6\nAll orders {1, 2, 3, 6} divide 6 ✓",
                    result: "Lagrange's Theorem verified"
                  }
                ]}
                solution="Orders in ℤ₆: ord(0)=1, ord(1)=6, ord(2)=3, ord(3)=2, ord(4)=3, ord(5)=6. Elements of order 6 generate the entire group (cyclic)."
              />

              <WorkedExample
                title="Example 3: Subgroup Verification"
                problem="Let G = (ℤ, +) and H = {3n | n ∈ ℤ} = {..., -6, -3, 0, 3, 6, ...}. Prove H is a subgroup of G."
                steps={[
                  {
                    description: "Check H is non-empty",
                    calculation: "0 = 3·0 ∈ H\nH is non-empty ✓",
                    result: "Non-empty"
                  },
                  {
                    description: "Check closure: if a, b ∈ H, then a + b ∈ H",
                    calculation: "Let a = 3m and b = 3n where m, n ∈ ℤ\na + b = 3m + 3n = 3(m + n)\nSince m + n ∈ ℤ, we have a + b ∈ H ✓",
                    result: "Closure satisfied"
                  },
                  {
                    description: "Check inverse: if a ∈ H, then -a ∈ H",
                    calculation: "Let a = 3m where m ∈ ℤ\n-a = -3m = 3(-m)\nSince -m ∈ ℤ, we have -a ∈ H ✓",
                    result: "Inverses exist in H"
                  },
                  {
                    description: "Apply Lagrange's theorem (note: both are infinite)",
                    calculation: "Both G and H are infinite groups\nH consists of all multiples of 3\nThis is a proper subgroup of ℤ",
                    result: "H < G (proper subgroup)"
                  }
                ]}
                solution="H = {3n | n ∈ ℤ} is a subgroup of (ℤ, +) as it satisfies all subgroup conditions: non-empty, closure, and inverse."
              />

              <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 Practice Tips for Groups</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-teal-900 mb-2">✓ Key Strategies:</p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Always check all 4 axioms: closure, associativity, identity, inverse</li>
                      <li>Operation tables help verify closure and find identity/inverses</li>
                      <li>Order of element divides order of group (Lagrange)</li>
                      <li>Cyclic groups are always abelian</li>
                      <li>For subgroup: check non-empty, closure, and inverse</li>
                      <li>Identity element is unique in any group</li>
                      <li>Each element has exactly one inverse</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-teal-900 mb-2">⚡ Common Mistakes:</p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Don't assume commutativity - not all groups are abelian</li>
                      <li>Remember to exclude 0 from multiplicative groups</li>
                      <li>Order of element ≠ number of elements in group</li>
                      <li>Subgroup must contain the identity of the parent group</li>
                      <li>Not every subset is a subgroup</li>
                      <li>|Sₙ| = n! (grows very fast: |S₅| = 120)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Partial Orders Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">5. Partial Orders</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Partial Order (Poset)</h3>
                <div className="space-y-3 text-gray-700">
                  <p>A relation ≤ on set A is a partial order if it is:</p>
                  <div className="bg-white p-4 rounded space-y-3">
                    <div>
                      <p className="font-semibold">Reflexive:</p>
                      <p>a ≤ a for all a ∈ A</p>
                    </div>
                    <div>
                      <p className="font-semibold">Antisymmetric:</p>
                      <p>If a ≤ b and b ≤ a, then a = b</p>
                    </div>
                    <div>
                      <p className="font-semibold">Transitive:</p>
                      <p>If a ≤ b and b ≤ c, then a ≤ c</p>
                    </div>
                  </div>
                  <p className="mt-3">(A, ≤) is called a partially ordered set (poset)</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Total Order</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Total (Linear) Order:</strong> A partial order where every pair of elements is comparable</p>
                  <p>∀a, b ∈ A, either a ≤ b or b ≤ a</p>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Examples:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>(ℤ, ≤) - Integers with usual ordering</li>
                      <li>(ℝ, ≤) - Real numbers with usual ordering</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 Special Elements in Posets</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">Maximal Element:</p>
                    <p className="text-gray-700">a is maximal if there is no b ∈ A with a ≤ b and a ≠ b</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">Minimal Element:</p>
                    <p className="text-gray-700">a is minimal if there is no b ∈ A with b ≤ a and a ≠ b</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">Greatest Element (Maximum):</p>
                    <p className="text-gray-700">a is greatest if b ≤ a for all b ∈ A</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">Least Element (Minimum):</p>
                    <p className="text-gray-700">a is least if a ≤ b for all b ∈ A</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">Upper Bound of S ⊆ A:</p>
                    <p className="text-gray-700">b is an upper bound if s ≤ b for all s ∈ S</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">Least Upper Bound (LUB/Supremum):</p>
                    <p className="text-gray-700">Smallest element that is an upper bound of S</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.4 Hasse Diagrams</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Hasse Diagram:</strong> Visual representation of a poset</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Construction Rules:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Draw vertices for elements</li>
                      <li>If a ≤ b and no c exists with a ≤ c ≤ b, draw edge from a to b</li>
                      <li>Place smaller elements below larger ones</li>
                      <li>Omit reflexive and transitive edges</li>
                    </ul>
                  </div>
                </div>
              </div>

              <WorkedExample
                title="Example 1: Drawing Hasse Diagram"
                problem="Draw the Hasse diagram for the poset (P({a,b,c}), ⊆) where P({a,b,c}) is the power set with subset relation."
                steps={[
                  {
                    description: "List all elements of P({a,b,c})",
                    calculation: "P({a,b,c}) = {∅, {a}, {b}, {c}, {a,b}, {a,c}, {b,c}, {a,b,c}}\nTotal: 2³ = 8 elements",
                    result: "8 subsets to place in diagram"
                  },
                  {
                    description: "Identify subset relationships (covering relations)",
                    calculation: "Level 0 (bottom): ∅\nLevel 1: {a}, {b}, {c} (each covers ∅)\nLevel 2: {a,b}, {a,c}, {b,c}\n  {a,b} covers {a} and {b}\n  {a,c} covers {a} and {c}\n  {b,c} covers {b} and {c}\nLevel 3 (top): {a,b,c} (covers all level 2 sets)",
                    result: "4 levels identified"
                  },
                  {
                    description: "Structure of Hasse diagram",
                    calculation: "         {a,b,c}\n        /   |   \\\n    {a,b} {a,c} {b,c}\n      / \\   / \\   / \\\n    {a} {b} {c}\n       \\  |  /\n         ∅",
                    result: "Diamond-like lattice structure"
                  }
                ]}
                solution="The Hasse diagram has 4 levels with ∅ at bottom, singletons at level 1, pairs at level 2, and {a,b,c} at top. This forms a complete lattice."
              />

              <WorkedExample
                title="Example 2: Finding LUB and GLB"
                problem="In the poset (D₁₂, |) where D₁₂ = {1,2,3,4,6,12} with divisibility relation, find LUB and GLB of S = {2,3}."
                steps={[
                  {
                    description: "Draw Hasse diagram for (D₁₂, |)",
                    calculation: "        12\n       /  \\\n      6    4\n     / \\  /\n    3   2\n     \\ /\n      1\n(a | b means 'a divides b')",
                    result: "Diagram complete"
                  },
                  {
                    description: "Find upper bounds of {2,3}",
                    calculation: "Need elements divisible by both 2 and 3:\n2 | x and 3 | x\nUpper bounds: {6, 12}\n(Both 6 and 12 are divisible by 2 and 3)",
                    result: "Upper bounds = {6, 12}"
                  },
                  {
                    description: "Find least upper bound (LUB/supremum)",
                    calculation: "Among upper bounds {6, 12}:\n6 | 12, so 6 ≤ 12\n6 is the smallest upper bound\nLUB({2,3}) = 6 = lcm(2,3)",
                    result: "LUB = 6"
                  },
                  {
                    description: "Find lower bounds of {2,3}",
                    calculation: "Need elements that divide both 2 and 3:\nx | 2 and x | 3\nOnly element: {1}\n(1 divides everything)",
                    result: "Lower bounds = {1}"
                  },
                  {
                    description: "Find greatest lower bound (GLB/infimum)",
                    calculation: "Among lower bounds {1}:\nGLB({2,3}) = 1 = gcd(2,3)",
                    result: "GLB = 1"
                  }
                ]}
                solution="For S = {2,3} in (D₁₂, |): LUB = 6 (lcm), GLB = 1 (gcd). This poset forms a lattice since every pair has LUB and GLB."
              />

              <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.5 Lattices</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Lattice:</strong> A poset where every pair of elements has both LUB (join) and GLB (meet)</p>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Notation:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Join (LUB): a ∨ b</li>
                      <li>Meet (GLB): a ∧ b</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Lattice Properties:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Commutative: a ∨ b = b ∨ a, a ∧ b = b ∧ a</li>
                      <li>Associative: (a ∨ b) ∨ c = a ∨ (b ∨ c)</li>
                      <li>Absorption: a ∨ (a ∧ b) = a, a ∧ (a ∨ b) = a</li>
                      <li>Idempotent: a ∨ a = a, a ∧ a = a</li>
                    </ul>
                  </div>
                </div>
              </div>

              <WorkedExample
                title="Example 3: Verifying Lattice Properties"
                problem="Determine if the poset (D₆, |) where D₆ = {1,2,3,6} with divisibility is a lattice."
                steps={[
                  {
                    description: "Draw Hasse diagram",
                    calculation: "      6\n     / \\\n    2   3\n     \\ /\n      1",
                    result: "Diamond structure"
                  },
                  {
                    description: "Check LUB exists for all pairs",
                    calculation: "LUB(1,2)=2, LUB(1,3)=3, LUB(1,6)=6\nLUB(2,3)=6, LUB(2,6)=6, LUB(3,6)=6\nAll pairs have LUB ✓",
                    result: "All joins exist"
                  },
                  {
                    description: "Check GLB exists for all pairs",
                    calculation: "GLB(1,2)=1, GLB(1,3)=1, GLB(1,6)=1\nGLB(2,3)=1, GLB(2,6)=2, GLB(3,6)=3\nAll pairs have GLB ✓",
                    result: "All meets exist"
                  }
                ]}
                solution="(D₆, |) is a lattice because every pair of elements has both LUB and GLB. This is a distributive lattice."
              />

              <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 Practice Tips for Partial Orders & Lattices</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-teal-900 mb-2">✓ Key Strategies:</p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Partial order: reflexive + antisymmetric + transitive</li>
                      <li>Total order: partial order where all pairs comparable</li>
                      <li>Hasse diagrams: omit reflexive/transitive edges, draw upward</li>
                      <li>LUB = smallest upper bound (join, ∨)</li>
                      <li>GLB = greatest lower bound (meet, ∧)</li>
                      <li>Lattice = every pair has both LUB and GLB</li>
                      <li>In divisibility poset: LUB = lcm, GLB = gcd</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-teal-900 mb-2">⚡ Common Mistakes:</p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Maximal ≠ maximum (maximal may not be unique)</li>
                      <li>Don't confuse antisymmetric with asymmetric</li>
                      <li>LUB may not exist in general posets</li>
                      <li>In Hasse diagrams, don't draw all edges - only covering relations</li>
                      <li>Not all posets are lattices</li>
                      <li>Total order ⊂ Partial order ⊂ General relation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Boolean Algebra Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">6. Boolean Algebra</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Definition</h3>
                <div className="space-y-3 text-gray-700">
                  <p>A Boolean algebra is an algebraic structure (B, +, ·, ', 0, 1) satisfying:</p>
                  <div className="bg-white p-4 rounded space-y-2">
                    <p><strong>Commutative Laws:</strong></p>
                    <ul className="list-disc ml-6">
                      <li>a + b = b + a</li>
                      <li>a · b = b · a</li>
                    </ul>
                    <p className="mt-3"><strong>Associative Laws:</strong></p>
                    <ul className="list-disc ml-6">
                      <li>a + (b + c) = (a + b) + c</li>
                      <li>a · (b · c) = (a · b) · c</li>
                    </ul>
                    <p className="mt-3"><strong>Distributive Laws:</strong></p>
                    <ul className="list-disc ml-6">
                      <li>a + (b · c) = (a + b) · (a + c)</li>
                      <li>a · (b + c) = (a · b) + (a · c)</li>
                    </ul>
                    <p className="mt-3"><strong>Identity Laws:</strong></p>
                    <ul className="list-disc ml-6">
                      <li>a + 0 = a</li>
                      <li>a · 1 = a</li>
                    </ul>
                    <p className="mt-3"><strong>Complement Laws:</strong></p>
                    <ul className="list-disc ml-6">
                      <li>a + a' = 1</li>
                      <li>a · a' = 0</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Important Theorems</h3>
                <div className="bg-white p-4 rounded space-y-3">
                  <div>
                    <p className="font-semibold">Idempotent Laws:</p>
                    <p className="text-gray-700">a + a = a, a · a = a</p>
                  </div>
                  <div>
                    <p className="font-semibold">Absorption Laws:</p>
                    <p className="text-gray-700">a + (a · b) = a, a · (a + b) = a</p>
                  </div>
                  <div>
                    <p className="font-semibold">De Morgan's Laws:</p>
                    <p className="text-gray-700">(a + b)' = a' · b', (a · b)' = a' + b'</p>
                  </div>
                  <div>
                    <p className="font-semibold">Involution Law:</p>
                    <p className="text-gray-700">(a')' = a</p>
                  </div>
                  <div>
                    <p className="font-semibold">Null Laws:</p>
                    <p className="text-gray-700">a + 1 = 1, a · 0 = 0</p>
                  </div>
                  <div>
                    <p className="font-semibold">Unique Complement:</p>
                    <p className="text-gray-700">Each element has exactly one complement</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3 Boolean Functions</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Boolean Function:</strong> f: Bⁿ → B where B = {`{0, 1}`}</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Representation Methods:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Truth Table: Lists all input combinations and outputs</li>
                      <li>Boolean Expression: Using +, ·, ' operators</li>
                      <li>Logic Circuit: Using gates (AND, OR, NOT)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.4 Normal Forms</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Sum of Products (SOP):</p>
                    <p className="text-gray-700">Disjunction of minterms</p>
                    <p className="text-sm text-gray-600 mt-1">Example: f = ab'c + a'bc + abc</p>
                    <p className="text-sm text-gray-600">Minterm: Product term with all variables</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Product of Sums (POS):</p>
                    <p className="text-gray-700">Conjunction of maxterms</p>
                    <p className="text-sm text-gray-600 mt-1">Example: f = (a+b+c)(a'+b+c)(a+b'+c')</p>
                    <p className="text-sm text-gray-600">Maxterm: Sum term with all variables</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Canonical Forms:</p>
                    <p className="text-gray-700">SOP with all minterms or POS with all maxterms</p>
                    <p className="text-sm text-gray-600 mt-1">Every Boolean function has unique canonical forms</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.5 Applications</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">Digital Logic Design:</p>
                    <p className="text-sm text-gray-700">Designing logic circuits and gates</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">Set Theory:</p>
                    <p className="text-sm text-gray-700">Boolean algebra of sets with ∪, ∩, '</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">Switching Theory:</p>
                    <p className="text-sm text-gray-700">Analysis of switching circuits</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">Computer Arithmetic:</p>
                    <p className="text-sm text-gray-700">Binary operations in processors</p>
                  </div>
                </div>
              </div>

              <FormulaBox
                title="6.6 Boolean Algebra Laws Summary"
                bgColor="bg-purple-50"
                borderColor="border-purple-500"
                formulas={[
                  {
                    label: "De Morgan's Laws",
                    formula: "(a + b)' = a' \\cdot b', \\quad (a \\cdot b)' = a' + b'",
                    block: true
                  },
                  {
                    label: "Distributive Laws",
                    formula: "a + (b \\cdot c) = (a+b) \\cdot (a+c), \\quad a \\cdot (b+c) = (a \\cdot b) + (a \\cdot c)",
                    block: true
                  },
                  {
                    label: "Absorption Laws",
                    formula: "a + (a \\cdot b) = a, \\quad a \\cdot (a + b) = a",
                    block: true
                  },
                  {
                    label: "Complement Laws",
                    formula: "a + a' = 1, \\quad a \\cdot a' = 0, \\quad (a')' = a",
                    block: true
                  },
                  {
                    label: "Idempotent Laws",
                    formula: "a + a = a, \\quad a \\cdot a = a",
                    block: true
                  }
                ]}
              />

              <WorkedExample
                title="Example 1: Simplifying Boolean Expression"
                problem="Simplify the Boolean expression: f(a,b,c) = ab + a'c + bc using Boolean algebra laws."
                steps={[
                  {
                    description: "Apply consensus theorem: xy + x'z + yz = xy + x'z",
                    calculation: "f = ab + a'c + bc\nConsensus theorem with x=a, y=b, z=c:\nbc is redundant (consensus of ab and a'c)",
                    result: "f = ab + a'c + bc"
                  },
                  {
                    description: "Verify using bc = bc(a + a') expansion",
                    calculation: "bc = bc·1 = bc(a + a')\n   = abc + a'bc\nabc is absorbed by ab\na'bc is absorbed by a'c\nTherefore bc is redundant",
                    result: "bc can be eliminated"
                  },
                  {
                    description: "Simplified expression",
                    calculation: "f = ab + a'c",
                    result: "Final simplified form"
                  }
                ]}
                solution="f(a,b,c) = ab + a'c (simplified from ab + a'c + bc using consensus theorem)"
              />

              <WorkedExample
                title="Example 2: Truth Table to Boolean Expression"
                problem="Create a Boolean expression in SOP form from this truth table where f(a,b,c) = 1 for rows: (0,0,1), (0,1,1), (1,0,1), (1,1,1)."
                steps={[
                  {
                    description: "Identify minterms where f = 1",
                    calculation: "Row (0,0,1): a'b'c  (minterm m₁)\nRow (0,1,1): a'bc   (minterm m₃)\nRow (1,0,1): ab'c   (minterm m₅)\nRow (1,1,1): abc    (minterm m₇)",
                    result: "4 minterms identified"
                  },
                  {
                    description: "Write sum of products (SOP) form",
                    calculation: "f = a'b'c + a'bc + ab'c + abc\nThis is the canonical SOP form",
                    result: "f = Σ(1,3,5,7)"
                  },
                  {
                    description: "Simplify using Boolean algebra",
                    calculation: "f = a'b'c + a'bc + ab'c + abc\n  = a'c(b' + b) + ac(b' + b)\n  = a'c(1) + ac(1)\n  = a'c + ac\n  = c(a' + a)\n  = c·1\n  = c",
                    result: "Simplified: f = c"
                  }
                ]}
                solution="f(a,b,c) = c. The function outputs 1 whenever c=1, regardless of a and b values."
              />

              <WorkedExample
                title="Example 3: Proving Boolean Identity using De Morgan's Laws"
                problem="Prove that (a + b)' · (a' + b')' = 0 using Boolean algebra laws."
                steps={[
                  {
                    description: "Apply De Morgan's Law to first term",
                    calculation: "(a + b)' = a' · b'  (De Morgan's Law)",
                    result: "(a + b)' = a'b'"
                  },
                  {
                    description: "Apply De Morgan's Law to second term",
                    calculation: "(a' + b')' = (a')' · (b')'  (De Morgan's Law)\n           = a · b  (Involution: (x')' = x)",
                    result: "(a' + b')' = ab"
                  },
                  {
                    description: "Multiply the simplified terms",
                    calculation: "(a'b') · (ab) = a'b'ab\n              = a'a · b'b  (rearrange)\n              = 0 · 0  (a'a = 0, b'b = 0)\n              = 0",
                    result: "Product equals 0"
                  }
                ]}
                solution="(a + b)' · (a' + b')' = 0. Proved using De Morgan's Laws and complement property."
              />

              <div className="bg-white border-2 border-purple-500 rounded-lg p-6 my-4">
                <h4 className="text-lg font-bold text-purple-900 mb-4">Truth Table Example: XOR Function</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-purple-100">
                        <th className="border border-purple-300 px-4 py-2">a</th>
                        <th className="border border-purple-300 px-4 py-2">b</th>
                        <th className="border border-purple-300 px-4 py-2">a ⊕ b (XOR)</th>
                        <th className="border border-purple-300 px-4 py-2">Expression</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-purple-300 px-4 py-2 text-center">0</td>
                        <td className="border border-purple-300 px-4 py-2 text-center">0</td>
                        <td className="border border-purple-300 px-4 py-2 text-center">0</td>
                        <td className="border border-purple-300 px-4 py-2 text-center text-gray-500">-</td>
                      </tr>
                      <tr className="bg-purple-50">
                        <td className="border border-purple-300 px-4 py-2 text-center">0</td>
                        <td className="border border-purple-300 px-4 py-2 text-center">1</td>
                        <td className="border border-purple-300 px-4 py-2 text-center font-bold">1</td>
                        <td className="border border-purple-300 px-4 py-2 text-center">a'b</td>
                      </tr>
                      <tr>
                        <td className="border border-purple-300 px-4 py-2 text-center">1</td>
                        <td className="border border-purple-300 px-4 py-2 text-center">0</td>
                        <td className="border border-purple-300 px-4 py-2 text-center font-bold">1</td>
                        <td className="border border-purple-300 px-4 py-2 text-center">ab'</td>
                      </tr>
                      <tr className="bg-purple-50">
                        <td className="border border-purple-300 px-4 py-2 text-center">1</td>
                        <td className="border border-purple-300 px-4 py-2 text-center">1</td>
                        <td className="border border-purple-300 px-4 py-2 text-center">0</td>
                        <td className="border border-purple-300 px-4 py-2 text-center text-gray-500">-</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="mt-3 text-center text-gray-700">
                    <strong>XOR Expression:</strong> a ⊕ b = a'b + ab' = (a + b)(a' + b')
                  </p>
                </div>
              </div>

              <WorkedExample
                title="Example 4: Converting to Product of Sums (POS)"
                problem="Express f(a,b,c) = (a+b)(b+c) in canonical POS form."
                steps={[
                  {
                    description: "Expand the expression",
                    calculation: "f = (a+b)(b+c)\n  = ab + ac + b² + bc\n  = ab + ac + b + bc  (b² = b, idempotent)\n  = ab + ac + b(1 + c)\n  = ab + ac + b  (1 + c = 1)",
                    result: "SOP: f = ab + ac + b"
                  },
                  {
                    description: "Simplify further",
                    calculation: "f = ab + ac + b\n  = b(a + 1) + ac\n  = b + ac  (a + 1 = 1)",
                    result: "f = b + ac"
                  },
                  {
                    description: "Convert to POS using f = (f')' and De Morgan",
                    calculation: "f' = (b + ac)'\n   = b' · (ac)'  (De Morgan)\n   = b'(a' + c')  (De Morgan)\n   = a'b' + b'c'\n\nf = (f')' = (a'b' + b'c')'\n  = (a'b')' · (b'c')'  (De Morgan)\n  = (a + b)(b + c)  (De Morgan)",
                    result: "POS form: f = (a+b)(b+c)"
                  }
                ]}
                solution="f = (a+b)(b+c) in POS form, which simplifies to f = b + ac in SOP form."
              />

              <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 Practice Tips for Boolean Algebra</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-teal-900 mb-2">✓ Key Strategies:</p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>De Morgan's Laws: flip operator and complement each term</li>
                      <li>Complement laws: a + a' = 1, a·a' = 0</li>
                      <li>Absorption: a + ab = a, a(a+b) = a</li>
                      <li>Consensus theorem: xy + x'z + yz = xy + x'z</li>
                      <li>SOP: sum of minterms (OR of AND terms)</li>
                      <li>POS: product of maxterms (AND of OR terms)</li>
                      <li>Truth tables: 2ⁿ rows for n variables</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-teal-900 mb-2">⚡ Common Mistakes:</p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Don't confuse + (OR) with addition: 1+1 = 1 (not 2)</li>
                      <li>Don't confuse · (AND) with multiplication in all cases</li>
                      <li>Remember: a+1 = 1 (not a), a·0 = 0 (not a)</li>
                      <li>De Morgan's requires both: flip operator AND complement</li>
                      <li>XOR (a⊕b) ≠ OR: XOR is exclusive, OR is inclusive</li>
                      <li>Minterm uses AND (product), maxterm uses OR (sum)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Exam Tips */}
          <section className="mb-6">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">📚 Exam Tips & Important Points</h2>
              <ul className="space-y-2 text-green-50">
                <li>✓ Master set operations and their properties - frequently tested</li>
                <li>✓ Understand difference between equivalence and partial order relations</li>
                <li>✓ Practice identifying injective, surjective, and bijective functions</li>
                <li>✓ Know group properties and Lagrange's theorem applications</li>
                <li>✓ Be comfortable with Hasse diagrams and finding maximal/minimal elements</li>
                <li>✓ Memorize all Boolean algebra laws and De Morgan's theorems</li>
                <li>✓ Practice converting between SOP and POS forms</li>
                <li>✓ Understand composition of functions and relations thoroughly</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SetTheoryAlgebra;
