import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import FormulaBox from "@/components/diagrams/FormulaBox";
import WorkedExample from "@/components/diagrams/WorkedExample";

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

              <WorkedExample
                title="DFA Minimization Step-by-Step"
                problem="Minimize the given DFA with states {A, B, C, D, E, F} and alphabet {0, 1}"
                steps={[
                  {
                    description: "Given DFA transition table",
                    calculation: `States: A(start), B, C, D, E, F
Final states: {C, E}

State │  0  │  1
──────┼─────┼─────
  A   │  B  │  D
  B   │  C  │  F
  C   │  C  │  F
  D   │  E  │  F
  E   │  E  │  F
  F   │  F  │  F`
                  },
                  {
                    description: "Step 1: Remove unreachable states (all are reachable from A)",
                    result: "No states removed - all reachable"
                  },
                  {
                    description: "Step 2: Initialize marking table - mark pairs (final, non-final)",
                    calculation: `Mark pairs:
(A,C), (A,E), (B,C), (B,E), (D,C), (D,E), (F,C), (F,E)

Distinguishable pairs marked with X:
    A   B   C   D   E
B   -
C   X   X
D   -   -   X
E   X   X   -   X
F   -   -   X   -   X`
                  },
                  {
                    description: "Step 3: Iteratively mark pairs based on transitions",
                    result: `Check unmarked pairs:

(A,B): δ(A,0)=B, δ(B,0)=C → (B,C) marked ✓
       Mark (A,B) ✗

(A,D): δ(A,0)=B, δ(D,0)=E → (B,E) marked ✓
       Mark (A,D) ✗

(A,F): δ(A,0)=B, δ(F,0)=F → (B,F) not marked
       δ(A,1)=D, δ(F,1)=F → (D,F) not marked
       Keep (A,F) unmarked for now

(B,D): δ(B,0)=C, δ(D,0)=E → (C,E) marked ✓
       Mark (B,D) ✗

(B,F): δ(B,0)=C, δ(F,0)=F → (C,F) marked ✓
       Mark (B,F) ✗

(D,F): δ(D,0)=E, δ(F,0)=F → (E,F) marked ✓
       Mark (D,F) ✗

(C,E): Both final, check transitions
       δ(C,0)=C, δ(E,0)=E → (C,E) to itself
       δ(C,1)=F, δ(E,1)=F → same
       Keep (C,E) unmarked - EQUIVALENT!

Continue until no new marks...
Final unmarked: (C,E) only`
                  },
                  {
                    description: "Step 4: Merge equivalent states",
                    calculation: `Equivalent states: C ≡ E

Create merged state CE:
New states: {A, B, CE, D, F}
Final states: {CE}

Minimized transition table:
State │  0  │  1
──────┼─────┼─────
  A   │  B  │  D
  B   │ CE  │  F
  CE  │ CE  │  F
  D   │ CE  │  F
  F   │  F  │  F`
                  }
                ]}
                solution="Minimized DFA has 5 states (reduced from 6) with states C and E merged into CE"
                bgColor="bg-green-50"
                borderColor="border-green-500"
              />

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

              <WorkedExample
                title="Context-Free Grammar Design"
                problem="Design CFG for L = {strings with equal number of a's and b's}"
                steps={[
                  {
                    description: "Analyze the language structure",
                    calculation: "Strings can have a's and b's in any order\nExamples: ab, ba, aabb, abab, baab, ε\nNeed to balance a's and b's recursively"
                  },
                  {
                    description: "Design strategy - recursive balanced generation",
                    result: `Option 1: Generate a then b (or vice versa)
S → aSb | bSa | SS | ε

This allows:
- S → aSb → aabb (2a's, 2b's)
- S → bSa → baa... No! This doesn't work

Need better approach...`
                  },
                  {
                    description: "Correct CFG using interleaving",
                    calculation: `S → aSbS | bSaS | ε

Derivation examples:
1. ε ∈ L (0 a's, 0 b's) ✓
2. S ⇒ aSbS ⇒ abS ⇒ ab (1a, 1b) ✓
3. S ⇒ aSbS ⇒ aaSbSbS ⇒ aabSbS ⇒ aabb (2a, 2b) ✓
4. S ⇒ bSaS ⇒ baSbSaS ⇒ baab ✓

Each production adds one 'a' and one 'b'
S can appear multiple times for interleaving`
                  },
                  {
                    description: "Verify with derivation tree",
                    result: `For string "abab":
        S
       /│\\
      a S b S
        |   |
        S  a S b S
        |       |
        ε       ε

Leftmost derivation:
S ⇒ aSbS ⇒ abS ⇒ abaSbS ⇒ ababS ⇒ abab ✓`
                  }
                ]}
                solution="CFG: S → aSbS | bSaS | ε generates all strings with equal a's and b's"
                bgColor="bg-purple-50"
                borderColor="border-purple-500"
              />

              <WorkedExample
                title="Converting CFG to Chomsky Normal Form"
                problem="Convert S → ASB | ε, A → aAS | a, B → SbS | A | bb to CNF"
                steps={[
                  {
                    description: "Step 1: Add new start symbol S₀",
                    calculation: `S₀ → S
S → ASB | ε
A → aAS | a
B → SbS | A | bb`
                  },
                  {
                    description: "Step 2: Eliminate ε-productions (S → ε)",
                    result: `Find all variables that derive ε:
- S derives ε directly
- Check which productions have S:
  * S → ASB, if S → ε, also add S → AB
  * B → SbS, if S → ε, also add B → bS, Sb, b

New grammar:
S₀ → S | ε
S → ASB | AB
A → aAS | a
B → SbS | A | bb | bS | Sb | b`
                  },
                  {
                    description: "Step 3: Eliminate unit productions (A → B form)",
                    calculation: `Unit productions: S₀ → S, B → A

Eliminate S₀ → S:
S₀ → ASB | AB | ε (copy S productions)

Eliminate B → A:
B → aAS | a | SbS | bb | bS | Sb | b

Grammar after unit elimination:
S₀ → ASB | AB | ε
S → ASB | AB
A → aAS | a
B → aAS | a | SbS | bb | bS | Sb | b`
                  },
                  {
                    description: "Step 4: Convert to A → BC or A → a form",
                    result: `Replace terminals in long productions:
Create new variables for terminals:
Ta → a, Tb → b

Convert productions:
S₀ → ASB | AB | ε
S → ASB | AB
A → TaX₁ | a  where X₁ → AS
B → TaX₁ | a | SX₂ | TbTb | TbS | STb | b
     where X₂ → TbS

Further break down:
S → AX₃ where X₃ → SB
X₂ → TbS
etc.

Final CNF (sample productions):
S₀ → AX₃ | AB | ε
S → AX₃ | AB
A → TaX₁ | a
B → TaX₁ | SX₄ | TbTb | TbS | STb | a | b
Ta → a
Tb → b
X₁ → AS
X₃ → SB
X₄ → TbS`
                  }
                ]}
                solution="CFG converted to CNF with all productions in form A → BC, A → a, or S₀ → ε"
                bgColor="bg-blue-50"
                borderColor="border-blue-500"
              />

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

              <WorkedExample
                title="PDA Design for Palindromes"
                problem="Design a PDA that accepts palindromes over Σ = {a, b}"
                steps={[
                  {
                    description: "Strategy for odd-length palindromes",
                    calculation: `1. Push first half onto stack
2. Guess middle (non-deterministically)
3. Pop and match second half

Example: "abcba"
- Push a, b, c
- At middle 'c', switch to popping mode
- Pop c (matches), pop b (matches), pop a (matches)
- Accept if stack empty`
                  },
                  {
                    description: "PDA formal definition",
                    result: `States: {q₀, q₁, q₂}
q₀: Initial, pushing phase
q₁: Middle transition (ε-transition)
q₂: Popping/matching phase

Stack alphabet: {a, b, Z₀}
Z₀ = initial stack symbol

Transitions:
δ(q₀, a, Z₀) = {(q₀, aZ₀)}     Push 'a'
δ(q₀, b, Z₀) = {(q₀, bZ₀)}     Push 'b'
δ(q₀, a, a) = {(q₀, aa)}        Push 'a'
δ(q₀, a, b) = {(q₀, ab)}        Push 'a'
δ(q₀, b, a) = {(q₀, ba)}        Push 'b'
δ(q₀, b, b) = {(q₀, bb)}        Push 'b'

Middle transitions (non-deterministic):
δ(q₀, ε, Z₀) = {(q₁, Z₀)}      Guess middle (even length)
δ(q₀, ε, a) = {(q₁, a)}         Guess middle
δ(q₀, ε, b) = {(q₁, b)}         Guess middle
δ(q₀, a, a) = {(q₁, ε)}         Middle symbol (odd)
δ(q₀, b, b) = {(q₁, ε)}         Middle symbol (odd)

Popping transitions:
δ(q₁, a, a) = {(q₁, ε)}         Match 'a'
δ(q₁, b, b) = {(q₁, ε)}         Match 'b'
δ(q₁, ε, Z₀) = {(q₂, Z₀)}      Accept

Final state: q₂`
                  },
                  {
                    description: "Example execution for 'aba'",
                    calculation: `Configuration: (state, remaining input, stack)

(q₀, aba, Z₀)
⊢ (q₀, ba, aZ₀)      Push 'a'
⊢ (q₁, ba, aZ₀)      Non-det: guess middle at 'b'
  OR
⊢ (q₀, a, baZ₀)      Push 'b' 
⊢ (q₁, ε, Z₀)        Match middle 'b' with stack 'b'
⊢ (q₁, ε, Z₀)        Match 'a' with stack 'a'
⊢ (q₂, ε, Z₀)        Accept! ✓`
                  }
                ]}
                solution="PDA for palindromes uses non-determinism to guess the middle, then matches second half with stack"
                bgColor="bg-green-50"
                borderColor="border-green-500"
              />

              <WorkedExample
                title="PDA for L = {aⁿbⁿ | n ≥ 1}"
                problem="Design a PDA that accepts strings with equal number of a's followed by b's"
                steps={[
                  {
                    description: "Strategy - use stack to count",
                    calculation: "1. Push each 'a' onto stack\n2. When first 'b' appears, start popping\n3. Pop one 'a' for each 'b'\n4. Accept if stack empty after reading all input"
                  },
                  {
                    description: "PDA specification",
                    result: `Q = {q₀, q₁, q₂}
Σ = {a, b}
Γ = {a, Z₀}
Start: q₀
Accept: q₂

Transition function δ:
1. δ(q₀, a, Z₀) = {(q₀, aZ₀)}   First 'a', push
2. δ(q₀, a, a) = {(q₀, aa)}      More a's, keep pushing
3. δ(q₀, b, a) = {(q₁, ε)}      First 'b', pop 'a'
4. δ(q₁, b, a) = {(q₁, ε)}      More b's, keep popping
5. δ(q₁, ε, Z₀) = {(q₂, Z₀)}    Empty stack, accept`
                  },
                  {
                    description: "Execution trace for 'aaabbb'",
                    calculation: `Step │ State │ Input  │ Stack   │ Action
─────┼───────┼────────┼─────────┼────────────────
  1  │  q₀   │ aaabbb │ Z₀      │ Initial
  2  │  q₀   │ aabbb  │ aZ₀     │ Push a
  3  │  q₀   │ abbb   │ aaZ₀    │ Push a
  4  │  q₀   │ bbb    │ aaaZ₀   │ Push a
  5  │  q₁   │ bb     │ aaZ₀    │ Pop a (first b)
  6  │  q₁   │ b      │ aZ₀     │ Pop a
  7  │  q₁   │ ε      │ Z₀      │ Pop a
  8  │  q₂   │ ε      │ Z₀      │ ACCEPT ✓`
                  },
                  {
                    description: "Why this rejects 'aabbb' (unequal)",
                    result: `For 'aabbb':
1. Push: aa → Stack: aaZ₀
2. Pop:  b  → Stack: aZ₀
3. Pop:  b  → Stack: Z₀
4. Read: b  → No transition δ(q₁, b, Z₀)
5. REJECT (stuck, can't process extra b)`
                  }
                ]}
                solution="PDA uses stack as counter: push a's, pop for each b, accept when balanced"
                bgColor="bg-blue-50"
                borderColor="border-blue-500"
              />

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

          {/* DFA Examples with Diagrams */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">8. DFA Examples with State Diagrams</h2>
            
            <div className="space-y-6">
              <WorkedExample
                title="DFA for Strings Ending with '01'"
                problem="Design a DFA that accepts all strings over Σ = {0, 1} that end with '01'"
                steps={[
                  {
                    description: "Identify states based on the last symbols seen",
                    calculation: "q₀: Start state (no symbols or doesn't end with 01)\nq₁: Last symbol is 0\nq₂: Last two symbols are 01 (accepting)"
                  },
                  {
                    description: "Define transitions for each state",
                    calculation: "From q₀: on '0' → q₁, on '1' → q₀\nFrom q₁: on '0' → q₁, on '1' → q₂\nFrom q₂: on '0' → q₁, on '1' → q₀"
                  },
                  {
                    description: "ASCII State Diagram",
                    result: `    0        1\n  ┌───┐   ┌───┐   ┌───┐\n→ │ q₀│─0→│ q₁│─1→│*q₂│\n  └───┘   └───┘   └───┘\n    ↑  1     ↑ 0     │ 0\n    └────────┴───────┘\n         ↑─────────1──┘\n\n* indicates accepting state`
                  }
                ]}
                solution="DFA M = ({q₀, q₁, q₂}, {0, 1}, δ, q₀, {q₂}) accepts all strings ending with '01'"
                bgColor="bg-green-50"
                borderColor="border-green-500"
              />

              <WorkedExample
                title="DFA for Binary Numbers Divisible by 3"
                problem="Design a DFA that accepts binary strings representing numbers divisible by 3"
                steps={[
                  {
                    description: "Use states to represent remainder when divided by 3",
                    calculation: "q₀: remainder 0 (divisible by 3) - accepting\nq₁: remainder 1\nq₂: remainder 2"
                  },
                  {
                    description: "Transition logic: If current remainder is r and input bit is b",
                    calculation: "New remainder = (2×r + b) mod 3\n\nExample: Reading '110' (6 in decimal):\n- Start: q₀ (0)\n- Read 1: (2×0 + 1) mod 3 = 1 → q₁\n- Read 1: (2×1 + 1) mod 3 = 0 → q₀\n- Read 0: (2×0 + 0) mod 3 = 0 → q₀ ✓"
                  },
                  {
                    description: "Complete transition table",
                    result: "State│ Input 0 │ Input 1\n─────┼─────────┼────────\n q₀  │   q₀    │   q₁\n q₁  │   q₂    │   q₀\n q₂  │   q₁    │   q₂"
                  },
                  {
                    description: "ASCII State Diagram",
                    result: `       1        0\n    ┌────┐   ┌────┐\n  ┌→│ q₁ │──→│ q₂ │←┐\n  │ └────┘    └────┘ │\n  │   ↑ 0        1    │\n  │   │    ┌────┐    │\n  │   └────│*q₀ │────┘\n  │        └────┘\n  └──────1──┘│↑\n           0 ││\n             └┘`
                  }
                ]}
                solution="DFA accepts binary strings divisible by 3 using modular arithmetic in state transitions"
                bgColor="bg-blue-50"
                borderColor="border-blue-500"
              />

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">8.1 DFA for Substring Pattern</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Problem:</strong> DFA that accepts strings containing substring '101'</p>
                  <div className="bg-white p-4 rounded font-mono text-sm">
                    <pre>{`State Diagram:
     0,1        1         0         1
   ┌────┐    ┌───┐    ┌───┐    ┌───┐
→  │ q₀ │─1→ │q₁ │─0→ │q₂ │─1→ │*q₃│
   └────┘    └───┘    └───┘    └───┘
     ↑ 0       │ 1      │ 0,1    │ 0,1
     └─────────┘        └────┐   │
                             │   │
                             └───┴──→ (stays in q₃)

Accepting state: q₃ (reached when '101' is found)
All transitions from q₃ lead back to q₃ (once found, always accept)`}</pre>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Example Run for '00101':</p>
                    <p className="text-sm">q₀ →[0] q₀ →[0] q₀ →[1] q₁ →[0] q₂ →[1] q₃ ✓ ACCEPT</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* NFA Examples with Epsilon Transitions */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">9. NFA and ε-NFA Examples</h2>
            
            <div className="space-y-6">
              <WorkedExample
                title="NFA for Strings Ending with '00' or '11'"
                problem="Design an NFA that accepts strings ending with either '00' or '11'"
                steps={[
                  {
                    description: "NFA allows non-deterministic choice - branch for both patterns",
                    calculation: "q₀: Initial state\nq₁, q₂: Intermediate states for '00' path\nq₃, q₄: Intermediate states for '11' path\nq₅: Common accepting state"
                  },
                  {
                    description: "ASCII State Diagram",
                    result: `                  0         0\n                ┌────┐    ┌────┐\n         ┌────→ │ q₁ │─→ │ q₂ │──┐\n         │      └────┘    └────┘  │\n         │                        │\n     ┌───┴──┐                     ↓\n   →│  q₀  │                   ┌────┐\n     └───┬──┘                   │*q₅ │\n         │                      └────┘\n         │                         ↑\n         │      ┌────┐    ┌────┐  │\n         └────→ │ q₃ │─→ │ q₄ │──┘\n                └────┘    └────┘\n                  1         1\n\nFrom q₀: can non-deterministically choose either path`
                  },
                  {
                    description: "Advantages of NFA",
                    result: "- Simpler to design than DFA\n- Naturally represents OR logic\n- Requires only 6 states vs potential DFA complexity"
                  }
                ]}
                solution="NFA accepts strings ending with '00' OR '11' using non-deterministic branching"
                bgColor="bg-green-50"
                borderColor="border-green-500"
              />

              <WorkedExample
                title="ε-NFA to NFA Conversion"
                problem="Convert an ε-NFA to NFA by eliminating ε-transitions"
                steps={[
                  {
                    description: "Original ε-NFA for (a|b)*abb",
                    calculation: `ε-NFA States: {q₀, q₁, q₂, q₃}
Initial: q₀, Final: {q₃}

Transitions with ε-moves:
q₀ -ε→ q₁
q₁ -a→ q₁, -b→ q₁, -a→ q₂
q₂ -b→ q₃
q₃ -b→ q₃`
                  },
                  {
                    description: "Calculate ε-closure for each state",
                    calculation: `ε-closure(q₀) = {q₀, q₁} (includes ε-transition)
ε-closure(q₁) = {q₁}
ε-closure(q₂) = {q₂}
ε-closure(q₃) = {q₃}`
                  },
                  {
                    description: "Construct NFA transitions (no ε)",
                    result: `New NFA transitions:
From q₀: on 'a' → {q₁, q₂}, on 'b' → {q₁}
From q₁: on 'a' → {q₁, q₂}, on 'b' → {q₁}
From q₂: on 'b' → {q₃}
From q₃: on 'b' → {q₃}

Initial state: q₀ (includes ε-closure)
Final states: {q₃}`
                  }
                ]}
                solution="ε-NFA converted to equivalent NFA by computing ε-closures and new transition function"
                bgColor="bg-blue-50"
                borderColor="border-blue-500"
              />

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">9.1 NFA to DFA Conversion Example</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Problem:</strong> Convert NFA to DFA using subset construction</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">NFA Definition:</p>
                    <p className="font-mono text-sm">States: {`{A, B, C}`}, Alphabet: {`{0, 1}`}</p>
                    <p className="font-mono text-sm mt-2">δ(A, 0) = {`{A, B}`}, δ(A, 1) = {`{A}`}</p>
                    <p className="font-mono text-sm">δ(B, 0) = ∅, δ(B, 1) = {`{C}`}</p>
                    <p className="font-mono text-sm">δ(C, 0) = ∅, δ(C, 1) = ∅</p>
                    <p className="font-mono text-sm mt-2">Initial: A, Final: {`{C}`}</p>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Subset Construction Steps:</p>
                    <div className="font-mono text-xs overflow-x-auto">
                      <pre>{`DFA State │ NFA States  │ Input 0    │ Input 1
──────────┼─────────────┼────────────┼────────────
   {A}    │     {A}     │    {A,B}   │    {A}
 → {A,B}  │    {A,B}    │    {A,B}   │   {A,C}*
   {A,C}* │    {A,C}    │    {A,B}   │    {A}

* = accepting state (contains C)

DFA has 3 states: {A}, {A,B}, {A,C}
Start state: {A,B}
Accepting states: {A,C}`}</pre>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-300 p-3 rounded mt-3">
                    <p className="text-sm font-semibold">Key Insight:</p>
                    <p className="text-sm">DFA states are subsets of NFA states. Each DFA state represents all possible NFA states simultaneously.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Regular Expression Examples */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">10. Regular Expression Detailed Examples</h2>
            
            <div className="space-y-6">
              <WorkedExample
                title="Converting Regular Expression to NFA (Thompson's Construction)"
                problem="Convert the regular expression (a|b)*abb to an NFA"
                steps={[
                  {
                    description: "Step 1: Build NFA for individual symbols 'a' and 'b'",
                    calculation: `For 'a': q₀ -a→ q₁
For 'b': q₂ -b→ q₃`
                  },
                  {
                    description: "Step 2: Apply union operation for (a|b)",
                    result: `      ε     a     ε
    ┌───→ q₁ ─→ q₂ ───┐
q₀ ─┤                 ├─→ q₇
    └───→ q₃ ─→ q₄ ───┘
      ε     b     ε`
                  },
                  {
                    description: "Step 3: Apply Kleene star for (a|b)*",
                    result: `     ┌────ε─────┐
     ↓          │
   ┌────────────┴──┐
q₀ │   (a|b) NFA   │ q₇
   └───────────┬───┘
          ε────┘
   (loop back with ε)`
                  },
                  {
                    description: "Step 4: Concatenate 'a', 'b', 'b'",
                    result: `Final NFA structure:
[(a|b)* part] -a→ q₈ -b→ q₉ -b→ q₁₀ (accepting)

Complete NFA has ~11 states with ε-transitions`
                  }
                ]}
                solution="Thompson's construction builds NFA compositionally: basic symbols → operations → complete NFA"
                bgColor="bg-green-50"
                borderColor="border-green-500"
              />

              <WorkedExample
                title="Regular Expression Pattern Matching"
                problem="Find all strings of length ≤ 4 accepted by RE: (0|1)*01(0|1)*"
                steps={[
                  {
                    description: "Understand the pattern",
                    calculation: "RE accepts strings containing '01' as substring\nPattern: [any]...01...[any]"
                  },
                  {
                    description: "Length 2 strings",
                    result: "01 ✓"
                  },
                  {
                    description: "Length 3 strings",
                    result: "001 ✓  (prefix before 01)\n010 ✓  (suffix after 01)\n101 ✓  (both prefix and suffix)"
                  },
                  {
                    description: "Length 4 strings",
                    result: "0010 ✓, 0011 ✓, 0101 ✓, 1010 ✓, 1011 ✓, \n0001 ✓, 1001 ✓, 0100 ✓, 0101 ✓\n\nTotal: 12 strings of length 4"
                  }
                ]}
                solution="13 total strings of length ≤ 4 contain substring '01'"
                bgColor="bg-blue-50"
                borderColor="border-blue-500"
              />

              <FormulaBox
                title="Regular Expression Identities"
                formulas={[
                  {
                    label: "Commutative (Union)",
                    formula: "r + s = s + r"
                  },
                  {
                    label: "Associative (Union & Concatenation)",
                    formula: "(r + s) + t = r + (s + t), \\quad (rs)t = r(st)"
                  },
                  {
                    label: "Distributive",
                    formula: "r(s + t) = rs + rt, \\quad (s + t)r = sr + tr"
                  },
                  {
                    label: "Identity Elements",
                    formula: "r + \\emptyset = r, \\quad r\\epsilon = \\epsilon r = r"
                  },
                  {
                    label: "Annihilator",
                    formula: "r\\emptyset = \\emptyset r = \\emptyset"
                  },
                  {
                    label: "Idempotent (Union)",
                    formula: "r + r = r"
                  },
                  {
                    label: "Kleene Star Properties",
                    formula: "\\epsilon + rr^* = r^*, \\quad (r^*)^* = r^*, \\quad \\emptyset^* = \\epsilon"
                  }
                ]}
                bgColor="bg-purple-50"
                borderColor="border-purple-500"
              />

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">10.1 Common Regular Expression Patterns</h3>
                <div className="bg-white p-4 rounded">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Pattern</th>
                        <th className="text-left py-2">Regular Expression</th>
                        <th className="text-left py-2">Description</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b">
                        <td className="py-2">Even length</td>
                        <td className="font-mono">((0|1)(0|1))*</td>
                        <td>Strings with even number of symbols</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Odd 0's</td>
                        <td className="font-mono">1*01*(01*01*)*</td>
                        <td>Odd number of 0's</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">No consecutive 1's</td>
                        <td className="font-mono">(0|10)*</td>
                        <td>Binary without adjacent 1's</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Starts and ends same</td>
                        <td className="font-mono">0(0|1)*0 | 1(0|1)*1 | 0 | 1</td>
                        <td>First = last symbol</td>
                      </tr>
                      <tr>
                        <td className="py-2">Divisible by 3 (length)</td>
                        <td className="font-mono">((0|1)(0|1)(0|1))*</td>
                        <td>Length is multiple of 3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Pumping Lemma Detailed Examples */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">11. Pumping Lemma Worked Examples</h2>
            
            <div className="space-y-6">
              <FormulaBox
                title="Pumping Lemma for Regular Languages - Formal Statement"
                formulas={[
                  {
                    label: "Main Statement",
                    formula: "\\text{If } L \\text{ is regular, then } \\exists p \\geq 1 \\text{ such that } \\forall w \\in L \\text{ with } |w| \\geq p:"
                  },
                  {
                    label: "Division Property",
                    formula: "w = xyz \\text{ where } |xy| \\leq p, |y| \\geq 1"
                  },
                  {
                    label: "Pumping Property",
                    formula: "\\forall i \\geq 0: xy^iz \\in L"
                  }
                ]}
                bgColor="bg-blue-50"
                borderColor="border-blue-500"
              />

              <WorkedExample
                title="Proving L = {aⁿbⁿ | n ≥ 0} is NOT Regular"
                problem="Use the pumping lemma to prove L = {aⁿbⁿ | n ≥ 0} is not regular"
                steps={[
                  {
                    description: "Step 1: Assume L is regular (proof by contradiction)",
                    calculation: "Let p be the pumping length guaranteed by pumping lemma"
                  },
                  {
                    description: "Step 2: Choose a string w ∈ L with |w| ≥ p",
                    calculation: "Let w = aᵖbᵖ\nClearly w ∈ L and |w| = 2p ≥ p"
                  },
                  {
                    description: "Step 3: By pumping lemma, w = xyz where |xy| ≤ p, |y| ≥ 1",
                    result: "Since |xy| ≤ p, both x and y consist only of a's\n(first p symbols are all a's)\n\nPossible divisions:\n- y = aᵏ for some 1 ≤ k ≤ p\n- x = aʲ for some 0 ≤ j < p\n- z = aᵖ⁻ʲ⁻ᵏbᵖ"
                  },
                  {
                    description: "Step 4: Test pumping property with i = 2",
                    calculation: "xy²z = aʲ(aᵏ)²aᵖ⁻ʲ⁻ᵏbᵖ\n     = aʲaᵏaᵏaᵖ⁻ʲ⁻ᵏbᵖ\n     = aᵖ⁺ᵏbᵖ\n\nSince k ≥ 1: |number of a's| > |number of b's|"
                  },
                  {
                    description: "Step 5: Contradiction",
                    result: "xy²z = aᵖ⁺ᵏbᵖ ∉ L (unequal a's and b's)\n\nBut pumping lemma says xy²z ∈ L\n\nContradiction! Therefore L is NOT regular."
                  }
                ]}
                solution="L = {aⁿbⁿ | n ≥ 0} is not regular (proven by pumping lemma contradiction)"
                bgColor="bg-green-50"
                borderColor="border-green-500"
              />

              <WorkedExample
                title="Proving L = {ww | w ∈ {a,b}*} is NOT Regular"
                problem="Prove that L = {ww | w ∈ {a,b}*} (strings that are exact repetitions) is not regular"
                steps={[
                  {
                    description: "Step 1: Assume L is regular, let p be pumping length",
                    calculation: "We will find a string that cannot be pumped"
                  },
                  {
                    description: "Step 2: Choose w = aᵖbaᵖb ∈ L",
                    calculation: "w = (aᵖb)(aᵖb) = ww where w = aᵖb\n|w| = 2p + 2 > p"
                  },
                  {
                    description: "Step 3: By pumping lemma, w = xyz where |xy| ≤ p, |y| ≥ 1",
                    result: "Since |xy| ≤ p, both x and y are in first p positions\nTherefore y = aᵏ for some 1 ≤ k ≤ p"
                  },
                  {
                    description: "Step 4: Test with i = 2 (pump up)",
                    calculation: "xy²z contains more a's before first b\nOriginal: p a's before first b\nAfter pump: p+k a's before first b\n\nBut still p a's before second b\n\nFirst half ≠ second half"
                  },
                  {
                    description: "Step 5: Test with i = 0 (pump down)",
                    result: "xz contains fewer a's before first b\nOriginal: p a's before first b  \nAfter removal: p-k a's before first b\n\nBut still p a's before second b\n\nFirst half ≠ second half\n\nxy⁰z = xz ∉ L (not a repetition)"
                  }
                ]}
                solution="L = {ww | w ∈ {a,b}*} is not regular - cannot maintain equal halves when pumped"
                bgColor="bg-purple-50"
                borderColor="border-purple-500"
              />

              <WorkedExample
                title="Proving L = {aⁿbᵐcⁿ | n,m ≥ 0} is NOT Regular"
                problem="Use pumping lemma to show this language is not regular"
                steps={[
                  {
                    description: "Step 1: Assume L is regular with pumping length p",
                    calculation: "Choose a specific string to test"
                  },
                  {
                    description: "Step 2: Choose w = aᵖbᵖcᵖ ∈ L",
                    calculation: "Here n = p, m = p\nClearly w ∈ L and |w| = 3p ≥ p"
                  },
                  {
                    description: "Step 3: Apply pumping lemma division",
                    result: "w = xyz where |xy| ≤ p, |y| ≥ 1\n\nSince |xy| ≤ p, y consists only of a's\nSo y = aᵏ for some 1 ≤ k ≤ p"
                  },
                  {
                    description: "Step 4: Test pumping with i = 0",
                    calculation: "xy⁰z = xz = aᵖ⁻ᵏbᵖcᵖ\n\nNumber of a's: p - k\nNumber of c's: p\n\nSince k ≥ 1: (p-k) < p"
                  },
                  {
                    description: "Step 5: Reach contradiction",
                    result: "xz = aᵖ⁻ᵏbᵖcᵖ ∉ L\n(a's ≠ c's)\n\nBut pumping lemma requires xy⁰z ∈ L\n\nContradiction! L is NOT regular"
                  }
                ]}
                solution="L = {aⁿbᵐcⁿ | n,m ≥ 0} is not regular - needs to count matching a's and c's"
                bgColor="bg-blue-50"
                borderColor="border-blue-500"
              />

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">11.1 Pumping Lemma Strategy Guide</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Step-by-Step Strategy:</p>
                    <ol className="list-decimal ml-6 space-y-2 text-sm">
                      <li><strong>Assume</strong> language L is regular (for contradiction)</li>
                      <li><strong>Let p</strong> be the pumping length from pumping lemma</li>
                      <li><strong>Choose</strong> a specific string w ∈ L with |w| ≥ p
                        <ul className="list-disc ml-6 mt-1">
                          <li>Usually contains patterns involving p</li>
                          <li>Common choice: aᵖbᵖ, aᵖbᵖcᵖ, etc.</li>
                        </ul>
                      </li>
                      <li><strong>Consider</strong> all possible divisions w = xyz with |xy| ≤ p, |y| ≥ 1</li>
                      <li><strong>Show</strong> for at least one value of i, xyⁱz ∉ L
                        <ul className="list-disc ml-6 mt-1">
                          <li>Try i = 0 (remove y)</li>
                          <li>Try i = 2 (duplicate y)</li>
                          <li>Sometimes need larger i</li>
                        </ul>
                      </li>
                      <li><strong>Conclude</strong> contradiction → L is NOT regular</li>
                    </ol>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Common Mistakes to Avoid:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>❌ Don't choose p yourself - it's given by the lemma</li>
                      <li>❌ Don't specify exact division - must work for ALL valid divisions</li>
                      <li>❌ Don't forget constraint |xy| ≤ p</li>
                      <li>❌ Don't forget constraint |y| ≥ 1</li>
                      <li>✓ Choose string carefully to force y in specific region</li>
                      <li>✓ Show pumping fails for ALL possible y choices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Turing Machine Examples */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">12. Turing Machine Detailed Examples</h2>
            
            <div className="space-y-6">
              <WorkedExample
                title="Turing Machine for L = {aⁿbⁿ | n ≥ 1}"
                problem="Design a TM that accepts strings with equal number of a's and b's"
                steps={[
                  {
                    description: "Strategy: Match each 'a' with a 'b' by marking them",
                    calculation: "Use special symbols X (marked a) and Y (marked b)\nAlgorithm:\n1. Replace leftmost 'a' with 'X'\n2. Move right to find leftmost 'b'\n3. Replace 'b' with 'Y'\n4. Move left to find next 'a'\n5. Repeat until all matched"
                  },
                  {
                    description: "States and their purposes",
                    result: `q₀: Initial state, search for 'a'
q₁: Found 'a', marked as 'X', moving right to find 'b'
q₂: Found 'b', marked as 'Y', moving left to find next 'a'
q₃: Verify all symbols are marked (accept state)
qᵣ: Reject state`
                  },
                  {
                    description: "Transition Function δ (partial)",
                    result: `State │ Read │ Write │ Move │ Next State
──────┼──────┼───────┼──────┼───────────
  q₀  │  a   │   X   │  R   │    q₁
  q₀  │  Y   │   Y   │  R   │    q₀
  q₀  │  B   │   B   │  R   │    q₃
  q₁  │  a   │   a   │  R   │    q₁
  q₁  │  Y   │   Y   │  R   │    q₁
  q₁  │  b   │   Y   │  L   │    q₂
  q₂  │  a   │   a   │  L   │    q₂
  q₂  │  Y   │   Y   │  L   │    q₂
  q₂  │  X   │   X   │  R   │    q₀
  q₃  │  Y   │   Y   │  R   │    q₃
  q₃  │  B   │   B   │  -   │   Accept`
                  },
                  {
                    description: "Example execution for 'aabb'",
                    result: `Tape: [ a  a  b  b ] q₀
      [ X  a  b  b ] q₁  (marked first a)
      [ X  a  b  b ] q₁  (skip a)
      [ X  a  Y  b ] q₂  (marked first b)
      [ X  a  Y  b ] q₂  (move left)
      [ X  a  Y  b ] q₂  (skip X)
      [ X  a  Y  b ] q₀  (ready for next)
      [ X  X  Y  b ] q₁  (marked second a)
      [ X  X  Y  Y ] q₂  (marked second b)
      [ X  X  Y  Y ] q₃  (verify all marked)
      ACCEPT ✓`
                  }
                ]}
                solution="TM accepts by matching each 'a' with corresponding 'b' using marking technique"
                bgColor="bg-green-50"
                borderColor="border-green-500"
              />

              <WorkedExample
                title="Turing Machine Tape Diagram Notation"
                problem="Understand how to read and write TM tape diagrams"
                steps={[
                  {
                    description: "Tape representation conventions",
                    calculation: `Tape is infinite in both directions
Cells contain symbols from tape alphabet Γ
Blank symbol B (or □) represents empty cells
Head position shown by ↓ or state below

Example notation:
... B  B  a  b  a  B  B ...
          ↓
          q₂ (current state)`
                  },
                  {
                    description: "Showing transitions step by step",
                    result: `Initial Configuration (IC):
Tape: ... B a b b B ...
State: q₀, Head at first symbol

Step 1: δ(q₀, a) = (q₁, X, R)
Tape: ... B X b b B ...
State: q₁, Head moved right

Step 2: δ(q₁, b) = (q₂, Y, R)  
Tape: ... B X Y b B ...
State: q₂, Head moved right`
                  },
                  {
                    description: "Complete notation example",
                    result: `Configuration: (state, tape, position)

Notation formats:
1. (q, w₁aw₂, i) - state q, tape w₁aw₂, head at position i
2. w₁qaw₂ - state q, head reading 'a'
3. Diagram with arrow/state label

Acceptance: Reach final state
Rejection: Reach reject state or loop forever`
                  }
                ]}
                solution="TM tape diagrams show complete configuration: tape contents, head position, and current state"
                bgColor="bg-blue-50"
                borderColor="border-blue-500"
              />

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">12.1 TM for Palindromes over {`{a,b}`}</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Problem:</strong> Design TM to recognize palindromes</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Strategy:</p>
                    <ol className="list-decimal ml-6 space-y-2 text-sm">
                      <li>Mark and remember leftmost symbol</li>
                      <li>Move to rightmost symbol</li>
                      <li>Check if symbols match</li>
                      <li>If match, erase both and repeat</li>
                      <li>Accept if all symbols matched</li>
                    </ol>
                  </div>
                  <div className="bg-white p-4 rounded mt-3 font-mono text-xs">
                    <pre>{`Example: "abba"

Tape: [ a  b  b  a ] q₀
      [ X  b  b  a ] q₁  (marked 'a', moving right)
      [ X  b  b  a ] q₁  (skip to end)
      [ X  b  b  a ] q₁
      [ X  b  b  a ] q₁
      [ X  b  b  X ] q₂  (found matching 'a', erase)
      [ X  b  b  X ] q₃  (move left to start)
      [ X  b  b  X ] q₃
      [ X  b  b  X ] q₀  (back to start, next round)
      [ X  Y  b  X ] q₄  (marked 'b', moving right)
      [ X  Y  b  X ] q₄  (skip to end)
      [ X  Y  Y  X ] q₅  (found matching 'b')
      [ X  Y  Y  X ] q₆  (all erased, check)
      ACCEPT ✓

States needed: ~8-10 states
Symbols: {a, b, X, Y, B}`}</pre>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">12.2 Multi-tape TM Example</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Problem:</strong> TM with 2 tapes for copying strings</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Multi-tape Advantage:</p>
                    <p className="text-sm">Copy string w to produce ww in O(n) time vs O(n²) for single tape</p>
                  </div>
                  <div className="bg-white p-4 rounded mt-3 font-mono text-xs">
                    <pre>{`2-Tape TM for copying "abc":

Initial:
Tape 1: [ a  b  c  B  B  B ... ]  ↓ (head at a)
Tape 2: [ B  B  B  B  B  B ... ]  ↓ (head at blank)
State: q₀

Step 1: Read 'a' from tape 1, write 'a' to tape 2
Tape 1: [ a  b  c  B  B  B ... ]     ↓
Tape 2: [ a  B  B  B  B  B ... ]     ↓
State: q₀

Step 2: Both heads move right
Tape 1: [ a  b  c  B  B  B ... ]        ↓
Tape 2: [ a  b  B  B  B  B ... ]        ↓

Step 3: After completion
Tape 1: [ a  b  c  B  B  B ... ]
Tape 2: [ a  b  c  B  B  B ... ]
State: accept

Time: O(n) - one pass through input
Single-tape would need O(n²) - shuttling back and forth`}</pre>
                  </div>
                  <div className="bg-blue-50 border border-blue-300 p-3 rounded mt-3">
                    <p className="text-sm font-semibold">Important Theorem:</p>
                    <p className="text-sm">Every k-tape TM can be simulated by a single-tape TM. Multi-tape TMs don't increase computational power, only efficiency.</p>
                  </div>
                </div>
              </div>

              <FormulaBox
                title="Turing Machine Computational Complexity"
                formulas={[
                  {
                    label: "Time Complexity",
                    formula: "T(n) = \\text{max steps on inputs of length } n"
                  },
                  {
                    label: "Space Complexity",
                    formula: "S(n) = \\text{max tape cells used on inputs of length } n"
                  },
                  {
                    label: "Multi-tape Simulation Overhead",
                    formula: "\\text{k-tape TM in } T(n) \\Rightarrow \\text{1-tape TM in } O(T^2(n))"
                  },
                  {
                    label: "Church-Turing Thesis",
                    formula: "\\text{Algorithm exists } \\Leftrightarrow \\text{ TM exists}"
                  }
                ]}
                bgColor="bg-green-50"
                borderColor="border-green-500"
              />
            </div>
          </section>

          {/* Advanced Topics */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">13. Context-Free Language Pumping Lemma</h2>
            
            <div className="space-y-6">
              <FormulaBox
                title="Pumping Lemma for Context-Free Languages"
                formulas={[
                  {
                    label: "Statement",
                    formula: "\\text{If } L \\text{ is CFL, } \\exists p \\geq 1: \\forall w \\in L, |w| \\geq p"
                  },
                  {
                    label: "Division",
                    formula: "w = uvxyz \\text{ where } |vxy| \\leq p, |vy| \\geq 1"
                  },
                  {
                    label: "Pumping",
                    formula: "\\forall i \\geq 0: uv^ixy^iz \\in L"
                  }
                ]}
                bgColor="bg-purple-50"
                borderColor="border-purple-500"
              />

              <WorkedExample
                title="Proving L = {aⁿbⁿcⁿ | n ≥ 1} is NOT Context-Free"
                problem="Use CFL pumping lemma to show this language is not context-free"
                steps={[
                  {
                    description: "Step 1: Assume L is context-free with pumping length p",
                    calculation: "Choose string to test the pumping property"
                  },
                  {
                    description: "Step 2: Choose w = aᵖbᵖcᵖ ∈ L",
                    calculation: "|w| = 3p ≥ p, so pumping lemma applies"
                  },
                  {
                    description: "Step 3: By CFL pumping lemma, w = uvxyz where |vxy| ≤ p, |vy| ≥ 1",
                    result: `Key constraint: vxy spans at most p symbols
This means vxy can contain at most 2 types of symbols
Cases:
1. vxy in aaa...ab region (a's and b's)
2. vxy in bbb...bc region (b's and c's)  
3. vxy in aaa... region (only a's)
4. vxy in bbb... region (only b's)
5. vxy in ccc... region (only c's)`
                  },
                  {
                    description: "Step 4: Test each case with i = 2",
                    calculation: `Case 1: vxy contains a's and b's
  - Pumping increases count of a's and/or b's
  - But c count stays same
  - uv²xy²z has unequal counts ∉ L

Case 2: vxy contains b's and c's
  - Pumping increases b's and/or c's
  - But a count stays same  
  - uv²xy²z has unequal counts ∉ L

Case 3,4,5: vxy contains only one symbol type
  - Pumping increases only one symbol's count
  - Other two counts stay same
  - uv²xy²z has unequal counts ∉ L`
                  },
                  {
                    description: "Step 5: Contradiction in all cases",
                    result: "No matter how w is divided, uv²xy²z ∉ L\nBut pumping lemma requires uv²xy²z ∈ L\n\nContradiction! Therefore L is NOT context-free."
                  }
                ]}
                solution="L = {aⁿbⁿcⁿ | n ≥ 1} is not context-free - needs to count 3 symbols simultaneously"
                bgColor="bg-green-50"
                borderColor="border-green-500"
              />

              <WorkedExample
                title="Proving L = {aⁱbʲcᵏ | i = j or j = k} IS Context-Free"
                problem="Show this language is context-free by constructing a CFG"
                steps={[
                  {
                    description: "Observation: Union of two CFLs is CFL",
                    calculation: "L = L₁ ∪ L₂ where:\nL₁ = {aⁿbⁿcᵐ | n,m ≥ 0} (i = j)\nL₂ = {aᵐbⁿcⁿ | n,m ≥ 0} (j = k)"
                  },
                  {
                    description: "CFG for L₁ (equal a's and b's)",
                    calculation: "S₁ → AB\nA → aAb | ε\nB → cB | ε\n\nGenerates: aⁿbⁿcᵐ"
                  },
                  {
                    description: "CFG for L₂ (equal b's and c's)",
                    calculation: "S₂ → AB\nA → aA | ε  \nB → bBc | ε\n\nGenerates: aᵐbⁿcⁿ"
                  },
                  {
                    description: "Combined CFG for L",
                    result: `S → S₁ | S₂
S₁ → AB₁\nA → aAb | ε
B₁ → cB₁ | ε
S₂ → A₂B
A₂ → aA₂ | ε
B → bBc | ε

This CFG generates L = L₁ ∪ L₂`
                  }
                ]}
                solution="L is context-free because it's a union of two CFLs, proven by constructive CFG"
                bgColor="bg-blue-50"
                borderColor="border-blue-500"
              />

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">13.1 CFL vs Regular Pumping Lemma Comparison</h3>
                <div className="bg-white p-4 rounded">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Aspect</th>
                        <th className="text-left py-2">Regular PL</th>
                        <th className="text-left py-2">CFL PL</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b">
                        <td className="py-2">Division</td>
                        <td>w = xyz (3 parts)</td>
                        <td>w = uvxyz (5 parts)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Pumped parts</td>
                        <td>y only</td>
                        <td>v and y (both)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Length constraint</td>
                        <td>|xy| ≤ p</td>
                        <td>|vxy| ≤ p</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Non-empty</td>
                        <td>|y| ≥ 1</td>
                        <td>|vy| ≥ 1</td>
                      </tr>
                      <tr>
                        <td className="py-2">Pumping</td>
                        <td>xyⁱz ∈ L</td>
                        <td>uvⁱxyⁱz ∈ L</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-blue-50 border border-blue-300 p-3 rounded mt-3">
                  <p className="text-sm font-semibold">Key Difference:</p>
                  <p className="text-sm">CFL pumping lemma pumps TWO separate regions (v and y) symmetrically, allowing it to handle nested structures like aⁿbⁿ but not crossing dependencies like aⁿbⁿcⁿ.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Comprehensive Exam Tips */}
          <section className="mb-6">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">📚 Comprehensive Exam Tips & Important Points</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-100">🎯 Must-Know Concepts</h3>
                  <ul className="space-y-2 text-green-50 text-sm">
                    <li>✓ DFA vs NFA vs ε-NFA: Know equivalences and conversions</li>
                    <li>✓ Regular expressions: Build from basic to complex patterns</li>
                    <li>✓ Thompson's construction: RE → NFA systematically</li>
                    <li>✓ Subset construction: NFA → DFA step-by-step</li>
                    <li>✓ DFA minimization: Table-filling method with examples</li>
                    <li>✓ Regular pumping lemma: Master the proof technique</li>
                    <li>✓ Non-regular languages: aⁿbⁿ, ww, aⁿbⁿcⁿ proofs</li>
                    <li>✓ Closure properties: Union, intersection, complement, reversal</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-100">📐 Design Patterns</h3>
                  <ul className="space-y-2 text-green-50 text-sm">
                    <li>✓ Strings ending with pattern: Track last k symbols</li>
                    <li>✓ Strings containing substring: Build prefix matcher</li>
                    <li>✓ Divisibility by n: Use modular arithmetic in states</li>
                    <li>✓ Even/odd counting: Use binary state (even/odd)</li>
                    <li>✓ Multiple conditions: Combine state sets (product)</li>
                    <li>✓ Palindromes (PDA): Match symbols from both ends</li>
                    <li>✓ Balanced parentheses (PDA): Stack-based matching</li>
                    <li>✓ Equal counts (TM): Mark and match technique</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-100">🔧 Context-Free Grammars</h3>
                  <ul className="space-y-2 text-green-50 text-sm">
                    <li>✓ CFG design: Use recursion for nested structures</li>
                    <li>✓ CNF conversion: 4-step systematic algorithm</li>
                    <li>✓ GNF conversion: Each production starts with terminal</li>
                    <li>✓ Ambiguity: Multiple parse trees for same string</li>
                    <li>✓ CYK algorithm: Parsing using CNF (O(n³))</li>
                    <li>✓ Left recursion: A → Aα causes parsing issues</li>
                    <li>✓ CFL pumping lemma: 5-part division uvxyz</li>
                    <li>✓ Non-CFLs: aⁿbⁿcⁿ, {`{ww | w ∈ {a,b}*}`} (squares)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-100">⚙️ Push-Down Automata</h3>
                  <ul className="space-y-2 text-green-50 text-sm">
                    <li>✓ PDA = NFA + Stack (LIFO memory)</li>
                    <li>✓ Acceptance: Final state OR empty stack</li>
                    <li>✓ CFG ↔ PDA: Equivalence constructions</li>
                    <li>✓ DPDA ⊂ PDA: Not all CFLs are deterministic</li>
                    <li>✓ Stack notation: Push/pop operations clearly</li>
                    <li>✓ Transition format: δ(q, a, X) → (p, α)</li>
                    <li>✓ Design strategy: Match symbols using stack</li>
                    <li>✓ Common PDAs: aⁿbⁿ, palindromes, nested structures</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-100">🖥️ Turing Machines</h3>
                  <ul className="space-y-2 text-green-50 text-sm">
                    <li>✓ TM = Unlimited memory + read/write capability</li>
                    <li>✓ Transition: δ(q, a) = (p, b, L/R)</li>
                    <li>✓ Tape diagrams: Show each step clearly</li>
                    <li>✓ Design techniques: Marking, multiple passes</li>
                    <li>✓ Multi-tape TM: More efficient, same power</li>
                    <li>✓ Universal TM: Can simulate any other TM</li>
                    <li>✓ Church-Turing thesis: TM = algorithm</li>
                    <li>✓ Time/space complexity: Count steps/cells used</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-100">🔍 Decidability & Complexity</h3>
                  <ul className="space-y-2 text-green-50 text-sm">
                    <li>✓ Decidable: TM halts on all inputs (YES/NO)</li>
                    <li>✓ Recognizable: TM halts on YES inputs only</li>
                    <li>✓ Halting problem: UNDECIDABLE (proven!)</li>
                    <li>✓ Post Correspondence Problem: Undecidable</li>
                    <li>✓ CFG equivalence: Undecidable problem</li>
                    <li>✓ Reductions: Show A ≤ B (A reduces to B)</li>
                    <li>✓ Rice's theorem: Non-trivial properties undecidable</li>
                    <li>✓ Diagonalization: Key proof technique</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-green-600 bg-opacity-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-green-100">🎓 Exam Strategy</h3>
                <div className="grid md:grid-cols-3 gap-4 text-green-50 text-sm">
                  <div>
                    <p className="font-semibold mb-2">Automata Design:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Draw state diagram first</li>
                      <li>• Label all transitions</li>
                      <li>• Mark initial & final states</li>
                      <li>• Test with example strings</li>
                      <li>• Verify edge cases (ε, single symbol)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Pumping Lemma:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Choose string with parameter p</li>
                      <li>• Consider ALL valid divisions</li>
                      <li>• Try i=0 and i=2 first</li>
                      <li>• Show violation clearly</li>
                      <li>• State contradiction explicitly</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Conversions:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Follow algorithm systematically</li>
                      <li>• Show intermediate steps</li>
                      <li>• Verify correctness with examples</li>
                      <li>• Check for unreachable states</li>
                      <li>• Minimize if asked</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-yellow-500 bg-opacity-20 border-2 border-yellow-300 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-yellow-100">⚠️ Common Mistakes to Avoid</h3>
                <ul className="space-y-1 text-yellow-50 text-sm ml-4">
                  <li>❌ Confusing DFA (deterministic) with NFA (non-deterministic)</li>
                  <li>❌ Forgetting ε-transitions in NFA conversions</li>
                  <li>❌ Not checking |xy| ≤ p constraint in pumping lemma</li>
                  <li>❌ Choosing your own pumping length (it's given!)</li>
                  <li>❌ Missing stack symbols in PDA transitions</li>
                  <li>❌ Not specifying head movement (L/R) in TM</li>
                  <li>❌ Claiming undecidable problems are decidable</li>
                  <li>❌ Confusing context-free with context-sensitive grammars</li>
                </ul>
              </div>

              <div className="mt-6 bg-blue-500 bg-opacity-20 border-2 border-blue-300 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-blue-100">💡 Quick Reference - Language Hierarchy</h3>
                <div className="text-blue-50 text-sm font-mono">
                  <p>Regular ⊂ Context-Free ⊂ Context-Sensitive ⊂ Recursively Enumerable</p>
                  <p className="mt-2">FA ⊂ PDA ⊂ LBA ⊂ TM</p>
                  <p className="mt-2">Type 3 ⊂ Type 2 ⊂ Type 1 ⊂ Type 0 (Chomsky Hierarchy)</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-green-400">
                <p className="text-center text-green-100 font-semibold">
                  ⭐ Focus on understanding concepts through examples, not just memorization!
                </p>
                <p className="text-center text-green-200 text-sm mt-2">
                  Practice drawing diagrams, working through conversions, and proving non-regularity/non-CFL properties.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TheoryOfComputations;
