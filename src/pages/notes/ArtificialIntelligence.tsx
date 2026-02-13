import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ArtificialIntelligence = () => {
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
              10
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Artificial Intelligence</h1>
              <p className="text-gray-600">Complete notes for CUET PG MTQP04</p>
            </div>
          </div>

          {/* AI Basics Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">10.1 Introduction to AI</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What is AI?</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Artificial Intelligence:</strong> Science and engineering of creating intelligent machines that can perform tasks requiring human intelligence.</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Four Approaches to AI:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-blue-50 p-3 rounded">
                        <p className="font-semibold">Thinking Humanly</p>
                        <p className="text-sm">Cognitive modeling approach</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded">
                        <p className="font-semibold">Acting Humanly</p>
                        <p className="text-sm">Turing test approach</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded">
                        <p className="font-semibold">Thinking Rationally</p>
                        <p className="text-sm">Laws of thought approach</p>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded">
                        <p className="font-semibold">Acting Rationally</p>
                        <p className="text-sm">Rational agent approach</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">AI Domains:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Problem Solving and Search</li>
                      <li>Knowledge Representation</li>
                      <li>Machine Learning</li>
                      <li>Natural Language Processing</li>
                      <li>Computer Vision</li>
                      <li>Robotics</li>
                      <li>Expert Systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Intelligent Agents Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">10.2 Intelligent Agents</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Agent Fundamentals</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Definition:</p>
                    <p><strong>Agent:</strong> Anything that perceives environment through sensors and acts through actuators.</p>
                    <p className="mt-2"><strong>Rational Agent:</strong> Acts to maximize expected performance measure based on percept sequence and built-in knowledge.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">PEAS Description:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>P - Performance Measure:</strong> Criteria for success</li>
                      <li><strong>E - Environment:</strong> Task environment</li>
                      <li><strong>A - Actuators:</strong> Actions agent can perform</li>
                      <li><strong>S - Sensors:</strong> Perceptions agent receives</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Environment Types:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Fully/Partially Observable:</strong> Can agent see complete state?</li>
                      <li><strong>Deterministic/Stochastic:</strong> Is next state completely determined?</li>
                      <li><strong>Episodic/Sequential:</strong> Do actions affect future?</li>
                      <li><strong>Static/Dynamic:</strong> Does environment change?</li>
                      <li><strong>Discrete/Continuous:</strong> Finite or infinite states?</li>
                      <li><strong>Single/Multi-agent:</strong> How many agents?</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Agent Types:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Simple Reflex Agent:</strong> Acts based on current percept only</li>
                      <li><strong>Model-Based Reflex Agent:</strong> Maintains internal state</li>
                      <li><strong>Goal-Based Agent:</strong> Acts to achieve goals</li>
                      <li><strong>Utility-Based Agent:</strong> Maximizes utility function</li>
                      <li><strong>Learning Agent:</strong> Improves performance over time</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Uninformed Search Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">10.3 Uninformed Search Strategies</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Blind Search Algorithms</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Problem Formulation:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Initial State:</strong> Starting configuration</li>
                      <li><strong>Actions:</strong> Possible operations</li>
                      <li><strong>Transition Model:</strong> Result of actions</li>
                      <li><strong>Goal Test:</strong> Is this state a goal?</li>
                      <li><strong>Path Cost:</strong> Cost of sequence of actions</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Breadth-First Search (BFS):</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Explores all nodes at depth d before d+1</li>
                      <li>Uses FIFO queue</li>
                      <li><strong>Complete:</strong> Yes (if branching factor finite)</li>
                      <li><strong>Optimal:</strong> Yes (if step cost = 1)</li>
                      <li><strong>Time:</strong> O(b^d), <strong>Space:</strong> O(b^d)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Depth-First Search (DFS):</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Explores deepest node first</li>
                      <li>Uses LIFO stack</li>
                      <li><strong>Complete:</strong> No (can get stuck in infinite path)</li>
                      <li><strong>Optimal:</strong> No</li>
                      <li><strong>Time:</strong> O(b^m), <strong>Space:</strong> O(bm)</li>
                      <li>m = maximum depth</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Depth-Limited Search:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>DFS with depth limit l</li>
                      <li>Solves infinite-path problem</li>
                      <li><strong>Complete:</strong> No (if l &lt; d)</li>
                      <li><strong>Optimal:</strong> No</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Iterative Deepening DFS:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Gradually increases depth limit</li>
                      <li>Combines benefits of BFS and DFS</li>
                      <li><strong>Complete:</strong> Yes</li>
                      <li><strong>Optimal:</strong> Yes (if step cost = 1)</li>
                      <li><strong>Time:</strong> O(b^d), <strong>Space:</strong> O(bd)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Uniform Cost Search:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Expands node with lowest path cost</li>
                      <li>Uses priority queue</li>
                      <li><strong>Complete:</strong> Yes</li>
                      <li><strong>Optimal:</strong> Yes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Informed Search Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">10.4 Informed Search Strategies</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Heuristic Search</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Heuristic Function h(n):</p>
                    <p>Estimated cost from node n to goal. Domain-specific knowledge.</p>
                    <p className="mt-2"><strong>Admissible Heuristic:</strong> Never overestimates actual cost (h(n) ≤ h*(n))</p>
                    <p><strong>Consistent Heuristic:</strong> h(n) ≤ c(n,a,n') + h(n')</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Greedy Best-First Search:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Expands node with smallest h(n)</li>
                      <li>Evaluation function: f(n) = h(n)</li>
                      <li><strong>Complete:</strong> No (can get stuck in loops)</li>
                      <li><strong>Optimal:</strong> No</li>
                      <li><strong>Time & Space:</strong> O(b^m)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">A* Search:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Evaluation function: f(n) = g(n) + h(n)</li>
                      <li>g(n) = cost from start to n</li>
                      <li>h(n) = estimated cost from n to goal</li>
                      <li><strong>Complete:</strong> Yes</li>
                      <li><strong>Optimal:</strong> Yes (with admissible heuristic)</li>
                      <li>Most widely used best-first search</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Hill Climbing:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Local search algorithm</li>
                      <li>Always moves to better neighbor</li>
                      <li>Can get stuck at local maxima</li>
                      <li>No backtracking</li>
                      <li>Variants: Steepest ascent, Stochastic, Random restart</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Simulated Annealing:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Probabilistic technique</li>
                      <li>Accepts worse moves with decreasing probability</li>
                      <li>Avoids local maxima</li>
                      <li>Temperature parameter controls randomness</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Logical Agents Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">10.5 Logical Agents</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Knowledge-Based Agents</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Components:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Knowledge Base (KB):</strong> Set of sentences in formal language</li>
                      <li><strong>Inference Engine:</strong> Derives new knowledge from KB</li>
                      <li><strong>TELL:</strong> Add new sentence to KB</li>
                      <li><strong>ASK:</strong> Query KB for information</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Propositional Logic:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Syntax:</strong> Atomic propositions, logical connectives (∧, ∨, ¬, →, ↔)</li>
                      <li><strong>Semantics:</strong> True/False in model</li>
                      <li><strong>Entailment (⊨):</strong> KB ⊨ α means α is true in all models where KB is true</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Logical Connectives:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>AND (∧):</strong> P ∧ Q true if both true</li>
                      <li><strong>OR (∨):</strong> P ∨ Q true if at least one true</li>
                      <li><strong>NOT (¬):</strong> ¬P true if P false</li>
                      <li><strong>Implication (→):</strong> P → Q equivalent to ¬P ∨ Q</li>
                      <li><strong>Biconditional (↔):</strong> P ↔ Q true if both have same value</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Inference Methods:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Modus Ponens:</strong> From P and P→Q, infer Q</li>
                      <li><strong>Modus Tollens:</strong> From ¬Q and P→Q, infer ¬P</li>
                      <li><strong>Resolution:</strong> (P∨Q) and (¬P∨R) implies (Q∨R)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* First Order Logic Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">10.6 First Order Logic (FOL)</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Predicate Logic</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">FOL Components:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Constants:</strong> Specific objects (e.g., John, 5)</li>
                      <li><strong>Variables:</strong> x, y, z</li>
                      <li><strong>Predicates:</strong> Relations (e.g., Brother(x,y))</li>
                      <li><strong>Functions:</strong> Map objects to objects (e.g., Father(x))</li>
                      <li><strong>Quantifiers:</strong> ∀ (for all), ∃ (there exists)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Quantifiers:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Universal (∀):</strong> ∀x P(x) means P is true for all x</li>
                      <li><strong>Existential (∃):</strong> ∃x P(x) means P is true for some x</li>
                      <li>De Morgan's for quantifiers: ¬∀x P ≡ ∃x ¬P, ¬∃x P ≡ ∀x ¬P</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Examples:</p>
                    <div className="space-y-2 text-sm">
                      <p>"All humans are mortal": ∀x Human(x) → Mortal(x)</p>
                      <p>"Some birds can fly": ∃x Bird(x) ∧ CanFly(x)</p>
                      <p>"John is Mary's father": Father(John, Mary)</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Inference in FOL:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Unification:</strong> Make two expressions identical</li>
                      <li><strong>Substitution:</strong> Replace variables with terms</li>
                      <li><strong>Forward Chaining:</strong> Data-driven reasoning</li>
                      <li><strong>Backward Chaining:</strong> Goal-driven reasoning</li>
                      <li><strong>Resolution:</strong> Complete inference procedure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Knowledge Representation Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">10.7 Knowledge Representations</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Representation Methods</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Semantic Networks:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Graph-based representation</li>
                      <li>Nodes represent concepts/objects</li>
                      <li>Edges represent relationships</li>
                      <li>IS-A hierarchy for inheritance</li>
                      <li>Easy visualization, limited expressiveness</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Frames:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Structured representation with slots</li>
                      <li>Each slot has attributes and values</li>
                      <li>Supports inheritance and default values</li>
                      <li>Similar to object-oriented programming</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Production Rules:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>IF-THEN rules: IF condition THEN action</li>
                      <li>Used in expert systems</li>
                      <li>Forward chaining or backward chaining</li>
                      <li>Easy to understand and modify</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Ontologies:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Formal specification of concepts and relationships</li>
                      <li>Classes, properties, individuals, axioms</li>
                      <li>OWL (Web Ontology Language)</li>
                      <li>Enables knowledge sharing and reuse</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Scripts:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Represent stereotypical sequences of events</li>
                      <li>Contains roles, props, entry conditions, results</li>
                      <li>Example: Restaurant script (enter → order → eat → pay)</li>
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
                    <li><strong>Search Algorithms:</strong> BFS, DFS, A*, properties (complete, optimal)</li>
                    <li><strong>Intelligent Agents:</strong> Types, PEAS, environment characteristics</li>
                    <li><strong>Heuristic Search:</strong> A* algorithm, admissible heuristics</li>
                    <li><strong>Propositional Logic:</strong> Truth tables, inference rules</li>
                    <li><strong>First Order Logic:</strong> Quantifiers, unification</li>
                    <li><strong>Knowledge Representation:</strong> Different methods and their uses</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-lg mb-3">📝 Common Exam Questions:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Trace BFS/DFS on given graph</li>
                    <li>Apply A* with given heuristic function</li>
                    <li>Compare search algorithm properties (time, space, completeness)</li>
                    <li>Convert English sentences to FOL</li>
                    <li>Apply inference rules in propositional logic</li>
                    <li>Identify agent type for given scenario</li>
                    <li>Classify environment (observable, deterministic, etc.)</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-lg mb-3">⚡ Quick Reference:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>BFS: Complete, optimal (unit cost), O(b^d) time & space</li>
                    <li>DFS: Incomplete, not optimal, O(b^m) time, O(bm) space</li>
                    <li>A*: Complete, optimal (admissible h), f(n) = g(n) + h(n)</li>
                    <li>Admissible heuristic: h(n) ≤ h*(n)</li>
                    <li>Modus Ponens: P, P→Q ⊢ Q</li>
                    <li>Resolution: (A∨B), (¬B∨C) ⊢ (A∨C)</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-lg mb-3">⚠️ Common Mistakes:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Confusing BFS and DFS complexity</li>
                    <li>Using non-admissible heuristic in A*</li>
                    <li>Wrong logical connective in FOL translation</li>
                    <li>Mixing up universal and existential quantifiers</li>
                    <li>Not considering all environment characteristics</li>
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

export default ArtificialIntelligence;
