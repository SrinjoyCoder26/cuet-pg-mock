import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const DigitalLogic = () => {
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
              3
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Digital Logic</h1>
              <p className="text-gray-600">Number Systems, Logic Design & Converters</p>
            </div>
          </div>

          {/* Number Representations */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">1. Number Representations and Computer Arithmetic</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1 Number Systems</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Binary (Base-2):</p>
                    <p className="text-sm">Digits: 0, 1</p>
                    <p className="text-sm">Example: (1011)₂ = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 11₁₀</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Octal (Base-8):</p>
                    <p className="text-sm">Digits: 0-7</p>
                    <p className="text-sm">Example: (13)₈ = 1×8¹ + 3×8⁰ = 11₁₀</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Hexadecimal (Base-16):</p>
                    <p className="text-sm">Digits: 0-9, A-F (A=10, B=11, ..., F=15)</p>
                    <p className="text-sm">Example: (B)₁₆ = 11₁₀, (1F)₁₆ = 31₁₀</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Conversion Techniques:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Decimal to Binary: Successive division by 2</li>
                      <li>Binary to Decimal: Positional multiplication</li>
                      <li>Binary to Octal: Group by 3 bits</li>
                      <li>Binary to Hex: Group by 4 bits</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.2 Fixed Point Representation</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Unsigned Integers:</p>
                    <p className="text-sm">All bits represent magnitude</p>
                    <p className="text-sm">Range for n bits: 0 to 2ⁿ - 1</p>
                    <p className="text-sm text-gray-600">Example: 8 bits → 0 to 255</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Sign-Magnitude:</p>
                    <p className="text-sm">MSB = sign bit (0=positive, 1=negative)</p>
                    <p className="text-sm">Remaining bits = magnitude</p>
                    <p className="text-sm text-gray-600">Problem: Two representations of zero (+0, -0)</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">1's Complement:</p>
                    <p className="text-sm">Positive: Normal binary</p>
                    <p className="text-sm">Negative: Flip all bits</p>
                    <p className="text-sm text-gray-600">Example: +5 = 0101, -5 = 1010</p>
                    <p className="text-sm text-gray-600">Problem: Two zeros (0000, 1111)</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">2's Complement (Most Common):</p>
                    <p className="text-sm">Positive: Normal binary</p>
                    <p className="text-sm">Negative: 1's complement + 1</p>
                    <p className="text-sm text-gray-600">Example: +5 = 0101, -5 = 1011</p>
                    <p className="text-sm mt-2">Range for n bits: -2^(n-1) to 2^(n-1) - 1</p>
                    <p className="text-sm">Advantages: Single zero, simple arithmetic</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.3 Floating Point Representation</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>IEEE 754 Standard:</strong></p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Single Precision (32 bits):</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>1 bit: Sign (S)</li>
                      <li>8 bits: Exponent (E) with bias 127</li>
                      <li>23 bits: Mantissa/Fraction (M)</li>
                    </ul>
                    <p className="text-sm mt-2">Value = (-1)^S × 1.M × 2^(E-127)</p>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Double Precision (64 bits):</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>1 bit: Sign</li>
                      <li>11 bits: Exponent with bias 1023</li>
                      <li>52 bits: Mantissa</li>
                    </ul>
                    <p className="text-sm mt-2">Value = (-1)^S × 1.M × 2^(E-1023)</p>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Special Values:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>E=0, M=0: Zero (±0)</li>
                      <li>E=255, M=0: Infinity (±∞)</li>
                      <li>E=255, M≠0: NaN (Not a Number)</li>
                      <li>E=0, M≠0: Denormalized numbers</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.4 Binary Arithmetic</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Binary Addition:</p>
                    <p className="text-sm">0+0=0, 0+1=1, 1+0=1, 1+1=10 (carry 1)</p>
                    <p className="text-sm text-gray-600">Overflow: When result exceeds representable range</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Binary Subtraction:</p>
                    <p className="text-sm">Use 2's complement: A - B = A + (-B)</p>
                    <p className="text-sm">Discard final carry in 2's complement</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Binary Multiplication:</p>
                    <p className="text-sm">Shift and add method</p>
                    <p className="text-sm">0×0=0, 0×1=0, 1×0=0, 1×1=1</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Binary Division:</p>
                    <p className="text-sm">Repeated subtraction and shift</p>
                    <p className="text-sm">Similar to decimal long division</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.5 BCD and Other Codes</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Binary Coded Decimal (BCD):</p>
                    <p className="text-sm">Each decimal digit encoded in 4 bits</p>
                    <p className="text-sm text-gray-600">Example: 39₁₀ = 0011 1001 (BCD)</p>
                    <p className="text-sm mt-1">Advantage: Easy decimal to binary conversion</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Gray Code:</p>
                    <p className="text-sm">Adjacent values differ by only 1 bit</p>
                    <p className="text-sm">Used in K-maps and analog-to-digital conversion</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Excess-3 Code:</p>
                    <p className="text-sm">BCD + 3 (self-complementing code)</p>
                    <p className="text-sm text-gray-600">Example: 5₁₀ = 1000 (Excess-3)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Logic Functions */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">2. Logic Functions and Boolean Algebra</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Basic Logic Gates</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">AND Gate:</p>
                    <p className="text-sm text-gray-700">Y = A · B (Y = AB)</p>
                    <p className="text-sm text-gray-600">Output 1 only if all inputs are 1</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">OR Gate:</p>
                    <p className="text-sm text-gray-700">Y = A + B</p>
                    <p className="text-sm text-gray-600">Output 1 if any input is 1</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">NOT Gate:</p>
                    <p className="text-sm text-gray-700">Y = A' (or Ā)</p>
                    <p className="text-sm text-gray-600">Inverts the input</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">NAND Gate:</p>
                    <p className="text-sm text-gray-700">Y = (AB)'</p>
                    <p className="text-sm text-gray-600">Universal gate - can implement any function</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">NOR Gate:</p>
                    <p className="text-sm text-gray-700">Y = (A+B)'</p>
                    <p className="text-sm text-gray-600">Universal gate</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">XOR Gate:</p>
                    <p className="text-sm text-gray-700">Y = A ⊕ B = A'B + AB'</p>
                    <p className="text-sm text-gray-600">Output 1 if inputs differ</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">XNOR Gate:</p>
                    <p className="text-sm text-gray-700">Y = (A ⊕ B)' = AB + A'B'</p>
                    <p className="text-sm text-gray-600">Output 1 if inputs are same</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Boolean Algebra Laws</h3>
                <div className="bg-white p-4 rounded space-y-2 text-gray-700">
                  <p className="font-semibold">Identity Laws:</p>
                  <p className="text-sm">A + 0 = A, A · 1 = A</p>
                  
                  <p className="font-semibold mt-3">Null Laws:</p>
                  <p className="text-sm">A + 1 = 1, A · 0 = 0</p>
                  
                  <p className="font-semibold mt-3">Idempotent Laws:</p>
                  <p className="text-sm">A + A = A, A · A = A</p>
                  
                  <p className="font-semibold mt-3">Complement Laws:</p>
                  <p className="text-sm">A + A' = 1, A · A' = 0, (A')' = A</p>
                  
                  <p className="font-semibold mt-3">Commutative Laws:</p>
                  <p className="text-sm">A + B = B + A, A · B = B · A</p>
                  
                  <p className="font-semibold mt-3">Associative Laws:</p>
                  <p className="text-sm">(A + B) + C = A + (B + C)</p>
                  <p className="text-sm">(A · B) · C = A · (B · C)</p>
                  
                  <p className="font-semibold mt-3">Distributive Laws:</p>
                  <p className="text-sm">A + (B · C) = (A + B) · (A + C)</p>
                  <p className="text-sm">A · (B + C) = (A · B) + (A · C)</p>
                  
                  <p className="font-semibold mt-3">Absorption Laws:</p>
                  <p className="text-sm">A + (A · B) = A, A · (A + B) = A</p>
                  
                  <p className="font-semibold mt-3">De Morgan's Theorems:</p>
                  <p className="text-sm">(A + B)' = A' · B'</p>
                  <p className="text-sm">(A · B)' = A' + B'</p>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Canonical Forms</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Sum of Products (SOP):</p>
                    <p className="text-sm">Sum of minterms</p>
                    <p className="text-sm text-gray-600">Example: F = AB'C + A'BC + ABC</p>
                    <p className="text-sm mt-1">Minterm: Product where all variables appear</p>
                    <p className="text-sm">Notation: F = Σm(1,3,5,7)</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Product of Sums (POS):</p>
                    <p className="text-sm">Product of maxterms</p>
                    <p className="text-sm text-gray-600">Example: F = (A+B+C)(A+B'+C)(A'+B+C)</p>
                    <p className="text-sm mt-1">Maxterm: Sum where all variables appear</p>
                    <p className="text-sm">Notation: F = ΠM(0,2,4,6)</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Conversion:</p>
                    <p className="text-sm">SOP minterms → POS maxterms: Use complement set</p>
                    <p className="text-sm">If F = Σm(1,3,5,7), then F = ΠM(0,2,4,6)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Minimization */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">3. Minimization Techniques</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Karnaugh Map (K-Map)</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Purpose:</strong> Graphical method to minimize Boolean functions</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Steps:</p>
                    <ol className="list-decimal ml-6 space-y-1 text-sm">
                      <li>Draw K-map (2², 2³, or 2⁴ cells)</li>
                      <li>Fill 1s for minterms (or 0s for maxterms)</li>
                      <li>Group adjacent 1s in powers of 2 (1, 2, 4, 8, 16...)</li>
                      <li>Groups can wrap around edges</li>
                      <li>Make groups as large as possible</li>
                      <li>Cover all 1s with minimum groups</li>
                      <li>Write simplified expression</li>
                    </ol>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Rules:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Use Gray code ordering (adjacent cells differ by 1 bit)</li>
                      <li>Groups must be rectangular (1×2, 2×2, 2×4, etc.)</li>
                      <li>Each group represents one product term</li>
                      <li>Variables that change within group are eliminated</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Don't Care Conditions (X or d):</p>
                    <p className="text-sm">Can be treated as 0 or 1 for better minimization</p>
                    <p className="text-sm">Use when output doesn't matter for certain inputs</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Quine-McCluskey Method</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Purpose:</strong> Tabular method for minimization (suitable for &gt;4 variables)</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Algorithm:</p>
                    <ol className="list-decimal ml-6 space-y-1 text-sm">
                      <li>List all minterms in binary</li>
                      <li>Group by number of 1s</li>
                      <li>Compare adjacent groups, combine if differ by 1 bit</li>
                      <li>Replace differing bit with '-' (dash)</li>
                      <li>Repeat until no more combinations possible</li>
                      <li>Find prime implicants</li>
                      <li>Create prime implicant table</li>
                      <li>Select essential prime implicants</li>
                      <li>Cover remaining minterms optimally</li>
                    </ol>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Terminology:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li><strong>Prime Implicant:</strong> Cannot be combined further</li>
                      <li><strong>Essential Prime Implicant:</strong> Covers at least one unique minterm</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Combinational Circuits */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">4. Combinational Circuits</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Arithmetic Circuits</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Half Adder:</p>
                    <p className="text-sm text-gray-700">Adds 2 bits: S = A ⊕ B, C = AB</p>
                    <p className="text-sm text-gray-600">Inputs: A, B | Outputs: Sum, Carry</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Full Adder:</p>
                    <p className="text-sm text-gray-700">Adds 3 bits: S = A ⊕ B ⊕ Cin</p>
                    <p className="text-sm text-gray-700">Cout = AB + Cin(A ⊕ B)</p>
                    <p className="text-sm text-gray-600">Can cascade for multi-bit addition</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Half Subtractor:</p>
                    <p className="text-sm text-gray-700">D = A ⊕ B, B = A'B</p>
                    <p className="text-sm text-gray-600">Difference and Borrow</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Full Subtractor:</p>
                    <p className="text-sm text-gray-700">D = A ⊕ B ⊕ Bin</p>
                    <p className="text-sm text-gray-700">Bout = A'B + Bin(A ⊕ B)'</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Parallel Adder:</p>
                    <p className="text-sm text-gray-700">Multiple full adders cascaded</p>
                    <p className="text-sm text-gray-600">Ripple carry adder - simple but slow</p>
                    <p className="text-sm text-gray-600">Carry lookahead adder - faster</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Multiplexer and Demultiplexer</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Multiplexer (MUX):</p>
                    <p className="text-sm text-gray-700">2ⁿ inputs, 1 output, n select lines</p>
                    <p className="text-sm text-gray-600">Selects one input to pass to output</p>
                    <p className="text-sm mt-1">Types: 2:1, 4:1, 8:1, 16:1</p>
                    <p className="text-sm">Application: Data routing, function implementation</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Demultiplexer (DEMUX):</p>
                    <p className="text-sm text-gray-700">1 input, 2ⁿ outputs, n select lines</p>
                    <p className="text-sm text-gray-600">Routes input to selected output</p>
                    <p className="text-sm mt-1">Also called decoder with enable</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Encoder and Decoder</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Encoder:</p>
                    <p className="text-sm text-gray-700">2ⁿ inputs → n outputs</p>
                    <p className="text-sm text-gray-600">Converts one-hot to binary</p>
                    <p className="text-sm mt-1">Priority Encoder: Handles multiple active inputs</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Decoder:</p>
                    <p className="text-sm text-gray-700">n inputs → 2ⁿ outputs</p>
                    <p className="text-sm text-gray-600">Converts binary to one-hot</p>
                    <p className="text-sm mt-1">Examples: 2:4, 3:8, 4:16 decoder</p>
                    <p className="text-sm">Application: Memory addressing, display drivers</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.4 Comparators and Other Circuits</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Magnitude Comparator:</p>
                    <p className="text-sm text-gray-700">Compares two n-bit numbers</p>
                    <p className="text-sm text-gray-600">Outputs: A&gt;B, A=B, A&lt;B</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Parity Generator/Checker:</p>
                    <p className="text-sm text-gray-700">Even parity: XOR of all bits = 0</p>
                    <p className="text-sm text-gray-700">Odd parity: XOR of all bits = 1</p>
                    <p className="text-sm text-gray-600">Used for error detection</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Code Converters:</p>
                    <p className="text-sm text-gray-700">Binary to Gray, Gray to Binary</p>
                    <p className="text-sm text-gray-700">BCD to Excess-3, etc.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sequential Circuits */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">5. Sequential Circuits</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Flip-Flops</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">SR Flip-Flop (Set-Reset):</p>
                    <p className="text-sm text-gray-700">S=1, R=0: Set (Q=1)</p>
                    <p className="text-sm text-gray-700">S=0, R=1: Reset (Q=0)</p>
                    <p className="text-sm text-gray-700">S=0, R=0: Hold</p>
                    <p className="text-sm text-red-600">S=1, R=1: Invalid/Forbidden</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">D Flip-Flop (Data/Delay):</p>
                    <p className="text-sm text-gray-700">Q(next) = D</p>
                    <p className="text-sm text-gray-600">Simple storage element</p>
                    <p className="text-sm">No invalid states</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">JK Flip-Flop:</p>
                    <p className="text-sm text-gray-700">J=0, K=0: Hold</p>
                    <p className="text-sm text-gray-700">J=0, K=1: Reset</p>
                    <p className="text-sm text-gray-700">J=1, K=0: Set</p>
                    <p className="text-sm text-gray-700">J=1, K=1: Toggle</p>
                    <p className="text-sm text-gray-600">Most versatile flip-flop</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">T Flip-Flop (Toggle):</p>
                    <p className="text-sm text-gray-700">T=0: Hold, T=1: Toggle</p>
                    <p className="text-sm text-gray-600">Used in counters</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Registers</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Parallel Load Register:</p>
                    <p className="text-sm text-gray-700">All bits loaded simultaneously</p>
                    <p className="text-sm text-gray-600">Uses D flip-flops</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Shift Registers:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
                      <li>SISO: Serial In Serial Out</li>
                      <li>SIPO: Serial In Parallel Out</li>
                      <li>PISO: Parallel In Serial Out</li>
                      <li>PIPO: Parallel In Parallel Out</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-2">Applications: Data conversion, delay, multiplication/division</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Universal Shift Register:</p>
                    <p className="text-sm text-gray-700">Can perform all shift operations</p>
                    <p className="text-sm text-gray-600">Left shift, right shift, parallel load</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 Counters</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Asynchronous (Ripple) Counter:</p>
                    <p className="text-sm text-gray-700">Flip-flops triggered sequentially</p>
                    <p className="text-sm text-gray-600">Simple but has propagation delay</p>
                    <p className="text-sm">Example: 4-bit ripple counter (0-15)</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Synchronous Counter:</p>
                    <p className="text-sm text-gray-700">All flip-flops clocked together</p>
                    <p className="text-sm text-gray-600">Faster, no cumulative delay</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Up/Down Counter:</p>
                    <p className="text-sm text-gray-700">Can count in both directions</p>
                    <p className="text-sm text-gray-600">Control signal determines direction</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Modulo-N Counter:</p>
                    <p className="text-sm text-gray-700">Counts from 0 to N-1</p>
                    <p className="text-sm text-gray-600">Decade counter (Mod-10), Mod-6, etc.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Ring Counter:</p>
                    <p className="text-sm text-gray-700">Shift register with feedback</p>
                    <p className="text-sm text-gray-600">One-hot encoded states</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Johnson Counter:</p>
                    <p className="text-sm text-gray-700">Twisted ring counter</p>
                    <p className="text-sm text-gray-600">2n states for n flip-flops</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.4 State Machines</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Finite State Machine (FSM):</p>
                    <p className="text-sm">Defined by states, transitions, outputs</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Moore Machine:</p>
                    <p className="text-sm">Output depends only on current state</p>
                    <p className="text-sm text-gray-600">More states, but simpler output logic</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Mealy Machine:</p>
                    <p className="text-sm">Output depends on state and input</p>
                    <p className="text-sm text-gray-600">Fewer states, reacts faster</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Design Steps:</p>
                    <ol className="list-decimal ml-6 space-y-1 text-sm">
                      <li>State diagram</li>
                      <li>State table</li>
                      <li>State assignment</li>
                      <li>Flip-flop selection</li>
                      <li>Excitation table</li>
                      <li>Boolean minimization</li>
                      <li>Circuit implementation</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Converters */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">6. A/D and D/A Converters</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Digital-to-Analog Converter (DAC)</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Purpose:</strong> Convert digital signal to analog voltage/current</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Binary Weighted DAC:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Uses binary weighted resistors</li>
                      <li>R, 2R, 4R, 8R... for bits</li>
                      <li>Simple but requires precision resistors</li>
                      <li>Vout = Vref × (b₀/2 + b₁/4 + b₂/8 + ...)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">R-2R Ladder DAC:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Uses only two resistor values (R and 2R)</li>
                      <li>Easier to manufacture with precision</li>
                      <li>Most commonly used</li>
                      <li>Better accuracy and stability</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Key Parameters:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Resolution: 1/2ⁿ for n-bit DAC</li>
                      <li>Settling time: Time to reach final value</li>
                      <li>Linearity: Deviation from ideal transfer</li>
                      <li>Monotonicity: Output always increases with input</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Analog-to-Digital Converter (ADC)</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Purpose:</strong> Convert analog signal to digital code</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Flash ADC (Parallel):</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Fastest conversion method</li>
                      <li>Uses 2ⁿ - 1 comparators for n bits</li>
                      <li>Expensive for high resolution</li>
                      <li>Used in high-speed applications</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Successive Approximation ADC:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Binary search algorithm</li>
                      <li>Requires n clock cycles for n bits</li>
                      <li>Good balance of speed and cost</li>
                      <li>Most widely used</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Dual Slope ADC:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>High accuracy, slow speed</li>
                      <li>Integrates input and reference</li>
                      <li>Rejects noise effectively</li>
                      <li>Used in digital voltmeters</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Counter-Type ADC:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Uses counter and DAC</li>
                      <li>Slow conversion</li>
                      <li>Simple and inexpensive</li>
                      <li>Tracking ADC: Faster variant</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3 Sampling and Quantization</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Nyquist Theorem:</p>
                    <p className="text-sm">Sampling frequency ≥ 2 × Maximum signal frequency</p>
                    <p className="text-sm text-gray-600">fs ≥ 2fm to avoid aliasing</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Quantization:</p>
                    <p className="text-sm">Mapping continuous values to discrete levels</p>
                    <p className="text-sm">Quantization error: ±½ LSB</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Resolution:</p>
                    <p className="text-sm">n-bit ADC: 2ⁿ levels</p>
                    <p className="text-sm">Step size = Vref / 2ⁿ</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.4 Applications</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">DAC Applications:</p>
                    <ul className="list-disc ml-6 text-sm text-gray-700">
                      <li>Audio systems</li>
                      <li>Waveform generation</li>
                      <li>Motor control</li>
                      <li>Display systems</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">ADC Applications:</p>
                    <ul className="list-disc ml-6 text-sm text-gray-700">
                      <li>Data acquisition</li>
                      <li>Digital multimeters</li>
                      <li>Sensor interfaces</li>
                      <li>Digital oscilloscopes</li>
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
                <li>✓ Master 2's complement arithmetic - frequently tested</li>
                <li>✓ Practice K-map minimization for 3 and 4 variable functions</li>
                <li>✓ Know all Boolean algebra laws and De Morgan's theorems</li>
                <li>✓ Understand difference between combinational and sequential circuits</li>
                <li>✓ Remember flip-flop characteristics and excitation tables</li>
                <li>✓ Practice counter and shift register design problems</li>
                <li>✓ Know differences between Moore and Mealy machines</li>
                <li>✓ Understand ADC/DAC types and their applications</li>
                <li>✓ Practice IEEE 754 floating point conversions</li>
                <li>✓ Remember gate-level implementation using NAND/NOR gates</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DigitalLogic;
