import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const TheoryOfComputations = () => {
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
              2
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Theory of Computations</h1>
              <p className="text-gray-600">Automata, Formal Languages & Turing Machines</p>
            </div>
          </div>

          {/* Finite Automata Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">1. Finite Automata and Regular Expressions</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1 Deterministic Finite Automaton (DFA)</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Definition:</strong> A 5-tuple M = (Q, Σ, δ, q₀, F) where:</p>
                  <div className="bg-white p-4 rounded space-y-2">
                    <p>• Q = finite set of states</p>
                    <p>• Σ = finite input alphabet</p>
                    <p>• δ: Q × Σ → Q (transition function)</p>
                    <p>• q₀ ∈ Q (initial state)</p>
                    <p>• F ⊆ Q (set of final/accepting states)</p>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Key Properties:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Exactly one transition for each state-symbol pair</li>
                      <li>Deterministic - no ambiguity in execution</li>
                      <li>Accepts string w if δ*(q₀, w) ∈ F</li>
                      <li>Memory-less - depends only on current state</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.2 Regular Expressions</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Regular Expression:</strong> Pattern describing a regular language</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Basic Operations:</p>
                    <div className="space-y-2">
                      <p>• ∅ - Empty language</p>
                      <p>• ε - Empty string</p>
                      <p>• a - Single symbol from Σ</p>
                      <p>• r₁ + r₂ - Union (alternation)</p>
                      <p>• r₁r₂ - Concatenation</p>
                      <p>• r* - Kleene closure (zero or more repetitions)</p>
                      <p>• r+ - Positive closure (one or more repetitions)</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Examples:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>(a+b)* - All strings over {`{a, b}`}</li>
                      <li>a*b* - Zero or more a's followed by zero or more b's</li>
                      <li>(ab)+ - One or more repetitions of "ab"</li>
                      <li>a(a+b)*b - Strings starting with 'a' and ending with 'b'</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.3 Equivalence of DFA and Regular Expressions</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Theorem:</strong> A language is accepted by a DFA ⟺ It can be described by a regular expression</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">RE to DFA Construction:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Convert RE to NFA using Thompson's construction</li>
                      <li>Convert NFA to DFA using subset construction</li>
                      <li>Minimize DFA if needed</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">DFA to RE (Arden's Theorem):</p>
                    <p>If R = Q + RP, then R = QP* (where ε ∉ P)</p>
                    <p className="text-sm text-gray-600 mt-1">Used to eliminate states and derive regular expressions</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* NFA Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">2. Non-determinism and NFA</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Non-deterministic Finite Automaton (NFA)</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Definition:</strong> M = (Q, Σ, δ, q₀, F) where:</p>
                  <p>δ: Q × Σ → 2^Q (transitions to a set of states)</p>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Key Differences from DFA:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Multiple transitions possible for same state-symbol pair</li>
                      <li>Can have ε-transitions (move without reading input)</li>
                      <li>May have no transition for some state-symbol pairs</li>
                      <li>Accepts if ANY path leads to accepting state</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Advantages:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Simpler to construct for complex languages</li>
                      <li>Easier to understand and design</li>
                      <li>Often requires fewer states than equivalent DFA</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 NFA to DFA Conversion (Subset Construction)</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Algorithm:</strong></p>
                  <div className="bg-white p-4 rounded">
                    <ol className="list-decimal ml-6 space-y-2">
                      <li>Start with ε-closure(q₀) as initial state of DFA</li>
                      <li>For each state S in DFA and symbol a:
                        <ul className="list-disc ml-6 mt-1">
                          <li>Compute move(S, a) = all states reachable from S on 'a'</li>
                          <li>Take ε-closure of this set</li>
                          <li>Add as new state if not already present</li>
                        </ul>
                      </li>
                      <li>Repeat until no new states are added</li>
                      <li>Final states: those containing any NFA final state</li>
                    </ol>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">ε-closure(s):</p>
                    <p>Set of all states reachable from s using only ε-transitions</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Equivalence Theorem</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Theorem:</strong> For every NFA, there exists an equivalent DFA</p>
                  <p>Two automata are equivalent if they accept the same language</p>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Implications:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>NFA and DFA have same computational power</li>
                      <li>Both recognize exactly the regular languages</li>
                      <li>DFA may have up to 2^n states for n-state NFA</li>
                      <li>DFA is faster for execution, NFA is easier to design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Properties of Regular Sets */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">3. Properties of Regular Sets</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Closure Properties</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Regular languages are closed under:</strong></p>
                  <div className="bg-white p-4 rounded space-y-3">
                    <div>
                      <p className="font-semibold">Union:</p>
                      <p className="text-sm">If L₁ and L₂ are regular, then L₁ ∪ L₂ is regular</p>
                    </div>
                    <div>
                      <p className="font-semibold">Concatenation:</p>
                      <p className="text-sm">L₁L₂ = {`{xy | x ∈ L₁, y ∈ L₂}`} is regular</p>
                    </div>
                    <div>
                      <p className="font-semibold">Kleene Closure:</p>
                      <p className="text-sm">L* is regular</p>
                    </div>
                    <div>
                      <p className="font-semibold">Intersection:</p>
                      <p className="text-sm">L₁ ∩ L₂ is regular (construct product DFA)</p>
                    </div>
                    <div>
                      <p className="font-semibold">Complement:</p>
                      <p className="text-sm">L' is regular (swap final and non-final states in DFA)</p>
                    </div>
                    <div>
                      <p className="font-semibold">Difference:</p>
                      <p className="text-sm">L₁ - L₂ = L₁ ∩ L₂' is regular</p>
                    </div>
                    <div>
                      <p className="font-semibold">Reversal:</p>
                      <p className="text-sm">L^R = {`{w^R | w ∈ L}`} is regular</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Pumping Lemma for Regular Languages</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Statement:</strong> If L is regular, then ∃ pumping length p such that:</p>
                  <div className="bg-white p-4 rounded">
                    <p>For any string w ∈ L with |w| ≥ p:</p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>w can be divided as w = xyz where:</li>
                      <li>|xy| ≤ p</li>
                      <li>|y| ≥ 1</li>
                      <li>xy^iz ∈ L for all i ≥ 0</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Usage (Proof by Contradiction):</p>
                    <ol className="list-decimal ml-6 space-y-1">
                      <li>Assume L is regular</li>
                      <li>Let p be the pumping length</li>
                      <li>Choose a string w ∈ L with |w| ≥ p</li>
                      <li>Consider all possible divisions w = xyz</li>
                      <li>Show xy^iz ∉ L for some i</li>
                      <li>Contradiction → L is not regular</li>
                    </ol>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-300 p-3 rounded mt-3">
                    <p className="text-sm font-semibold text-yellow-900">Example:</p>
                    <p className="text-sm text-yellow-800">L = {`{a^n b^n | n ≥ 0}`} is NOT regular</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Minimization of DFA</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Goal:</strong> Find DFA with minimum number of states for a language</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Algorithm (Table Filling Method):</p>
                    <ol className="list-decimal ml-6 space-y-1">
                      <li>Remove unreachable states</li>
                      <li>Mark pairs (p, q) where p ∈ F and q ∉ F</li>
                      <li>For each unmarked pair (p, q):
                        <ul className="list-disc ml-6">
                          <li>If δ(p, a) and δ(q, a) are marked for any a, mark (p, q)</li>
                        </ul>
                      </li>
                      <li>Repeat until no new pairs are marked</li>
                      <li>Merge unmarked pairs (equivalent states)</li>
                    </ol>
                  </div>
                  <p className="mt-3"><strong>Theorem:</strong> Minimal DFA is unique (up to state renaming)</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.4 Decision Properties</h3>
                <div className="bg-white p-4 rounded space-y-3">
                  <div>
                    <p className="font-semibold">Membership:</p>
                    <p className="text-sm text-gray-700">Is w ∈ L? - Decidable (simulate DFA)</p>
                  </div>
                  <div>
                    <p className="font-semibold">Emptiness:</p>
                    <p className="text-sm text-gray-700">Is L = ∅? - Decidable (check if final state is reachable)</p>
                  </div>
                  <div>
                    <p className="font-semibold">Finiteness:</p>
                    <p className="text-sm text-gray-700">Is L finite? - Decidable (check for cycles from start to final states)</p>
                  </div>
                  <div>
                    <p className="font-semibold">Equivalence:</p>
                    <p className="text-sm text-gray-700">Is L₁ = L₂? - Decidable (minimize both DFAs and compare)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Context-Free Grammar */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">4. Context-Free Grammar (CFG)</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 CFG Definition</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Context-Free Grammar:</strong> G = (V, T, P, S) where:</p>
                  <div className="bg-white p-4 rounded space-y-2">
                    <p>• V = finite set of variables (non-terminals)</p>
                    <p>• T = finite set of terminals</p>
                    <p>• P = set of productions (A → α where A ∈ V, α ∈ (V ∪ T)*)</p>
                    <p>• S ∈ V (start symbol)</p>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Example:</p>
                    <p>S → aSb | ε</p>
                    <p className="text-sm text-gray-600">Generates L = {`{a^n b^n | n ≥ 0}`}</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Chomsky Normal Form (CNF)</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Definition:</strong> All productions are of the form:</p>
                  <div className="bg-white p-4 rounded">
                    <ul className="list-disc ml-6 space-y-1">
                      <li>A → BC (two non-terminals)</li>
                      <li>A → a (single terminal)</li>
                      <li>S → ε (if ε ∈ L)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Conversion Algorithm:</p>
                    <ol className="list-decimal ml-6 space-y-1">
                      <li>Add new start symbol S₀ → S</li>
                      <li>Eliminate ε-productions (A → ε)</li>
                      <li>Eliminate unit productions (A → B)</li>
                      <li>Convert remaining productions to CNF:
                        <ul className="list-disc ml-6">
                          <li>Replace terminals in long productions</li>
                          <li>Break productions with length &gt; 2</li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Advantage:</p>
                    <p className="text-sm">Simplifies parsing algorithms (CYK algorithm)</p>
                    <p className="text-sm">Every derivation of string w has exactly 2|w| - 1 steps</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Greibach Normal Form (GNF)</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Definition:</strong> All productions are of the form:</p>
                  <div className="bg-white p-4 rounded">
                    <p>A → aα where:</p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>a ∈ T (terminal)</li>
                      <li>α ∈ V* (string of non-terminals, possibly empty)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Key Properties:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Every production starts with a terminal</li>
                      <li>No ε-productions (except S → ε if ε ∈ L)</li>
                      <li>No unit productions</li>
                      <li>Useful for PDA construction</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Example:</p>
                    <p>S → aAB | b</p>
                    <p>A → aA | a</p>
                    <p>B → bB | b</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.4 Ambiguity in CFG</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Ambiguous Grammar:</strong> Has more than one parse tree for some string</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Example (Arithmetic Expressions):</p>
                    <p>E → E + E | E * E | id</p>
                    <p className="text-sm text-gray-600 mt-1">String "id + id * id" has two parse trees</p>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Resolving Ambiguity:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Rewrite grammar to enforce precedence</li>
                      <li>Use separate non-terminals for different precedence levels</li>
                      <li>Left/right recursion for left/right associativity</li>
                    </ul>
                  </div>
                  <p className="mt-3 text-sm"><strong>Note:</strong> No algorithm exists to detect if a CFG is ambiguous (undecidable problem)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Push-down Automata */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">5. Push-down Automata (PDA)</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 PDA Definition</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Push-down Automaton:</strong> M = (Q, Σ, Γ, δ, q₀, Z₀, F) where:</p>
                  <div className="bg-white p-4 rounded space-y-2">
                    <p>• Q = finite set of states</p>
                    <p>• Σ = input alphabet</p>
                    <p>• Γ = stack alphabet</p>
                    <p>• δ: Q × (Σ ∪ {`{ε}`}) × Γ → 2^(Q × Γ*)</p>
                    <p>• q₀ = initial state</p>
                    <p>• Z₀ = initial stack symbol</p>
                    <p>• F = set of final states</p>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Key Features:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Has a stack (LIFO) for memory</li>
                      <li>Can push, pop, or replace stack top</li>
                      <li>More powerful than FA (can recognize CFLs)</li>
                      <li>Non-deterministic by default</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Acceptance by PDA</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Two modes of acceptance:</strong></p>
                  <div className="bg-white p-4 rounded space-y-3">
                    <div>
                      <p className="font-semibold">Acceptance by Final State:</p>
                      <p className="text-sm">String w is accepted if PDA can reach a final state after reading w</p>
                    </div>
                    <div>
                      <p className="font-semibold">Acceptance by Empty Stack:</p>
                      <p className="text-sm">String w is accepted if PDA can empty its stack after reading w</p>
                    </div>
                  </div>
                  <p className="mt-3"><strong>Theorem:</strong> Both acceptance modes are equivalent (can convert between them)</p>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 Equivalence of PDA and CFG</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Theorem:</strong> A language is context-free ⟺ It is accepted by some PDA</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">CFG to PDA:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Push start symbol onto stack</li>
                      <li>For each production A → α:
                        <ul className="list-disc ml-6">
                          <li>Pop A, push α (in reverse)</li>
                        </ul>
                      </li>
                      <li>Match terminals with input</li>
                      <li>Accept when stack is empty</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">PDA to CFG:</p>
                    <p className="text-sm">Create non-terminals representing stack configurations</p>
                    <p className="text-sm">Productions simulate PDA transitions</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.4 Deterministic PDA (DPDA)</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Properties:</strong></p>
                  <div className="bg-white p-4 rounded">
                    <ul className="list-disc ml-6 space-y-1">
                      <li>At most one transition for each configuration</li>
                      <li>If δ(q, a, X) is defined, then δ(q, ε, X) must be undefined</li>
                      <li>Recognizes deterministic context-free languages (DCFL)</li>
                      <li>DPDA ⊂ PDA (strictly less powerful)</li>
                      <li>Used in LR parsing</li>
                    </ul>
                  </div>
                  <p className="mt-3 text-sm"><strong>Note:</strong> Not all CFLs can be recognized by DPDA</p>
                </div>
              </div>
            </div>
          </section>

          {/* Moore and Mealy Machines */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">6. Moore and Mealy Machines</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Mealy Machine</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Definition:</strong> M = (Q, Σ, Δ, δ, λ, q₀) where:</p>
                  <div className="bg-white p-4 rounded space-y-2">
                    <p>• Q = set of states</p>
                    <p>• Σ = input alphabet</p>
                    <p>• Δ = output alphabet</p>
                    <p>• δ: Q × Σ → Q (transition function)</p>
                    <p>• λ: Q × Σ → Δ (output function)</p>
                    <p>• q₀ = initial state</p>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Key Characteristics:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Output depends on current state AND input</li>
                      <li>Output produced during transitions</li>
                      <li>Generally requires fewer states</li>
                      <li>Output length = input length</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Moore Machine</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Definition:</strong> M = (Q, Σ, Δ, δ, λ, q₀) where:</p>
                  <div className="bg-white p-4 rounded space-y-2">
                    <p>• Q, Σ, Δ, δ, q₀ same as Mealy</p>
                    <p>• λ: Q → Δ (output function depends only on state)</p>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Key Characteristics:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Output depends ONLY on current state</li>
                      <li>Output produced on entering a state</li>
                      <li>May require more states than Mealy</li>
                      <li>Output length = input length + 1</li>
                      <li>Easier to design</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3 Comparison and Conversion</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Mealy vs Moore:</p>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">Aspect</th>
                          <th className="text-left py-2">Mealy</th>
                          <th className="text-left py-2">Moore</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-b">
                          <td className="py-2">Output depends on</td>
                          <td>State + Input</td>
                          <td>State only</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">States required</td>
                          <td>Fewer</td>
                          <td>More</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Output timing</td>
                          <td>During transition</td>
                          <td>On state entry</td>
                        </tr>
                        <tr>
                          <td className="py-2">Design complexity</td>
                          <td>More complex</td>
                          <td>Simpler</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-3"><strong>Theorem:</strong> Every Mealy machine has an equivalent Moore machine and vice versa</p>
                </div>
              </div>
            </div>
          </section>

          {/* Turing Machines */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">7. Turing Machines</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Turing Machine Definition</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Turing Machine:</strong> M = (Q, Σ, Γ, δ, q₀, B, F) where:</p>
                  <div className="bg-white p-4 rounded space-y-2">
                    <p>• Q = finite set of states</p>
                    <p>• Σ = input alphabet (Σ ⊂ Γ)</p>
                    <p>• Γ = tape alphabet</p>
                    <p>• δ: Q × Γ → Q × Γ × {`{L, R}`} (transition function)</p>
                    <p>• q₀ = initial state</p>
                    <p>• B ∈ Γ = blank symbol</p>
                    <p>• F ⊆ Q = final states</p>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Components:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Infinite tape (both directions)</li>
                      <li>Read/write head</li>
                      <li>Can move left or right</li>
                      <li>Can read and write symbols</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 Capabilities and Church-Turing Thesis</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Capabilities:</strong></p>
                  <div className="bg-white p-4 rounded">
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Can recognize recursively enumerable languages</li>
                      <li>Can compute all computable functions</li>
                      <li>More powerful than PDA (can recognize {`{a^n b^n c^n}`})</li>
                      <li>Universal model of computation</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Church-Turing Thesis:</p>
                    <p className="text-sm">"Any function that can be computed by an algorithm can be computed by a Turing machine"</p>
                    <p className="text-sm text-gray-600 mt-2">This is a thesis, not a theorem (cannot be proven)</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.3 Variants of Turing Machines</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">Multi-tape TM:</p>
                    <p className="text-sm text-gray-700">Has k tapes, each with own head</p>
                    <p className="text-sm text-gray-600">Equivalent to single-tape TM in power</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">Non-deterministic TM (NTM):</p>
                    <p className="text-sm text-gray-700">Multiple possible transitions for each configuration</p>
                    <p className="text-sm text-gray-600">Equivalent to deterministic TM in power</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">Universal Turing Machine:</p>
                    <p className="text-sm text-gray-700">Can simulate any other TM</p>
                    <p className="text-sm text-gray-600">Takes TM description and input as its input</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">Linear Bounded Automaton (LBA):</p>
                    <p className="text-sm text-gray-700">Tape limited to input length</p>
                    <p className="text-sm text-gray-600">Recognizes context-sensitive languages</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.4 Decidability and Halting Problem</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Language Classes:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Recursive (Decidable):</strong> TM halts on all inputs</li>
                      <li><strong>Recursively Enumerable:</strong> TM halts and accepts for strings in L</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Halting Problem:</p>
                    <p className="text-sm">Problem: Does TM M halt on input w?</p>
                    <p className="text-sm font-semibold text-red-600 mt-1">Result: UNDECIDABLE</p>
                    <p className="text-sm text-gray-600 mt-1">Proven by contradiction (diagonalization)</p>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Other Undecidable Problems:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Post Correspondence Problem (PCP)</li>
                      <li>Ambiguity of CFG</li>
                      <li>Equivalence of two CFGs</li>
                      <li>Does a TM accept a regular language?</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.5 Chomsky Hierarchy</h3>
                <div className="bg-white p-4 rounded">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Type</th>
                        <th className="text-left py-2">Language</th>
                        <th className="text-left py-2">Automaton</th>
                        <th className="text-left py-2">Production</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b">
                        <td className="py-2">Type 0</td>
                        <td>Recursively Enumerable</td>
                        <td>Turing Machine</td>
                        <td>α → β</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Type 1</td>
                        <td>Context-Sensitive</td>
                        <td>LBA</td>
                        <td>αAβ → αγβ</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Type 2</td>
                        <td>Context-Free</td>
                        <td>PDA</td>
                        <td>A → α</td>
                      </tr>
                      <tr>
                        <td className="py-2">Type 3</td>
                        <td>Regular</td>
                        <td>FA</td>
                        <td>A → aB | a</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-sm text-gray-600 mt-3">Type 3 ⊂ Type 2 ⊂ Type 1 ⊂ Type 0</p>
                </div>
              </div>
            </div>
          </section>

          {/* Exam Tips */}
          <section className="mb-6">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">📚 Exam Tips & Important Points</h2>
              <ul className="space-y-2 text-green-50">
                <li>✓ Practice DFA/NFA design for common patterns (ending with, containing, etc.)</li>
                <li>✓ Master NFA to DFA conversion using subset construction</li>
                <li>✓ Know how to use pumping lemma to prove non-regularity</li>
                <li>✓ Understand CFG to CNF and GNF conversions thoroughly</li>
                <li>✓ Practice PDA design for palindromes and balanced parentheses</li>
                <li>✓ Know differences between Moore and Mealy machines with examples</li>
                <li>✓ Understand Chomsky hierarchy and language class containment</li>
                <li>✓ Remember that halting problem is undecidable</li>
                <li>✓ Practice minimization of DFA using table-filling method</li>
                <li>✓ Know closure properties of regular and context-free languages</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TheoryOfComputations;
