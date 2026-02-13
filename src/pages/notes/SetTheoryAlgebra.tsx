import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

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

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.5 Cartesian Product</h3>
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
