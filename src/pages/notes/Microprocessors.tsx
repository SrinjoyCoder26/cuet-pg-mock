import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Microprocessors = () => {
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
              5
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Microprocessors and Interfacing</h1>
              <p className="text-gray-600">Complete notes for CUET PG MTQP04</p>
            </div>
          </div>

          {/* 8085 Microprocessor Architecture */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">1. 8085 Microprocessor Architecture</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1 Overview</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>8085:</strong> 8-bit microprocessor manufactured by Intel in 1977</p>
                  <p><strong>Features:</strong></p>
                  <div className="bg-white p-4 rounded mt-3">
                    <ul className="list-disc ml-6 space-y-1">
                      <li>8-bit data bus and 16-bit address bus</li>
                      <li>Can address up to 64 KB of memory (2^16)</li>
                      <li>Clock frequency: 3 MHz</li>
                      <li>Requires +5V power supply</li>
                      <li>40-pin IC package</li>
                      <li>Multiplexed address/data bus</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.2 Internal Architecture</h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Arithmetic Logic Unit (ALU):</p>
                    <ul className="text-sm list-disc ml-4 space-y-1">
                      <li>Performs arithmetic operations</li>
                      <li>Performs logical operations</li>
                      <li>8-bit operation unit</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Accumulator (A):</p>
                    <ul className="text-sm list-disc ml-4 space-y-1">
                      <li>8-bit register</li>
                      <li>Stores one operand</li>
                      <li>Stores result of operation</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">General Purpose Registers:</p>
                    <ul className="text-sm list-disc ml-4 space-y-1">
                      <li>B, C, D, E, H, L (6 registers)</li>
                      <li>Each 8-bit wide</li>
                      <li>Can form pairs: BC, DE, HL</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Program Counter (PC):</p>
                    <ul className="text-sm list-disc ml-4 space-y-1">
                      <li>16-bit register</li>
                      <li>Holds address of next instruction</li>
                      <li>Auto-incremented after fetch</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Stack Pointer (SP):</p>
                    <ul className="text-sm list-disc ml-4 space-y-1">
                      <li>16-bit register</li>
                      <li>Points to top of stack</li>
                      <li>Grows downward in memory</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Flags Register:</p>
                    <ul className="text-sm list-disc ml-4 space-y-1">
                      <li>S, Z, AC, P, CY flags</li>
                      <li>Indicates ALU operation results</li>
                      <li>Used for conditional operations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Instruction Set */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">2. Instruction Set</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Data Transfer Instructions</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">MOV r1, r2</p>
                    <p className="text-sm text-gray-600">Move data from r2 to r1</p>
                    <p className="text-sm text-gray-600 mt-1">Example: MOV A, B (Copy B to A)</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">MVI r, data</p>
                    <p className="text-sm text-gray-600">Move immediate data to register</p>
                    <p className="text-sm text-gray-600 mt-1">Example: MVI A, 05H (Load 05H to A)</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">LDA addr</p>
                    <p className="text-sm text-gray-600">Load accumulator direct from memory</p>
                    <p className="text-sm text-gray-600 mt-1">Example: LDA 2000H</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">STA addr</p>
                    <p className="text-sm text-gray-600">Store accumulator direct to memory</p>
                    <p className="text-sm text-gray-600 mt-1">Example: STA 3000H</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Arithmetic Instructions</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">ADD r / ADI data</p>
                    <p className="text-sm text-gray-600">Add register/immediate to accumulator</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">SUB r / SUI data</p>
                    <p className="text-sm text-gray-600">Subtract register/immediate from accumulator</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">INR r / DCR r</p>
                    <p className="text-sm text-gray-600">Increment/Decrement register by 1</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">INX rp / DCX rp</p>
                    <p className="text-sm text-gray-600">Increment/Decrement register pair</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Logical Instructions</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">ANA r / ANI data</p>
                    <p className="text-sm text-gray-600">Logical AND with accumulator</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">ORA r / ORI data</p>
                    <p className="text-sm text-gray-600">Logical OR with accumulator</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">XRA r / XRI data</p>
                    <p className="text-sm text-gray-600">Logical XOR with accumulator</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">CMA</p>
                    <p className="text-sm text-gray-600">Complement accumulator (1's complement)</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.4 Branch Instructions</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">JMP addr</p>
                    <p className="text-sm text-gray-600">Unconditional jump to address</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">JZ / JNZ addr</p>
                    <p className="text-sm text-gray-600">Jump if Zero / Not Zero flag is set</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">CALL addr / RET</p>
                    <p className="text-sm text-gray-600">Call subroutine / Return from subroutine</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Addressing Modes */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">3. Addressing Modes</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Direct Addressing</h3>
                  <p className="text-gray-700 mb-2">Address specified directly in instruction</p>
                  <div className="bg-white p-3 rounded">
                    <p className="font-mono text-sm">LDA 2050H</p>
                    <p className="text-xs text-gray-600 mt-1">Load from address 2050H</p>
                  </div>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Register Addressing</h3>
                  <p className="text-gray-700 mb-2">Operand in register</p>
                  <div className="bg-white p-3 rounded">
                    <p className="font-mono text-sm">MOV A, B</p>
                    <p className="text-xs text-gray-600 mt-1">Copy B register to A</p>
                  </div>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Immediate Addressing</h3>
                  <p className="text-gray-700 mb-2">Data specified in instruction</p>
                  <div className="bg-white p-3 rounded">
                    <p className="font-mono text-sm">MVI A, 25H</p>
                    <p className="text-xs text-gray-600 mt-1">Load immediate 25H to A</p>
                  </div>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Indirect Addressing</h3>
                  <p className="text-gray-700 mb-2">Address in register pair</p>
                  <div className="bg-white p-3 rounded">
                    <p className="font-mono text-sm">MOV A, M</p>
                    <p className="text-xs text-gray-600 mt-1">Load from address in HL</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Memory Interfacing */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">4. Memory Interfacing</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Memory Organization</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Address Decoding:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>16-bit address bus (A0-A15)</li>
                      <li>Can address 64KB memory (0000H - FFFFH)</li>
                      <li>Uses IO/M̄ signal to distinguish I/O vs Memory</li>
                      <li>Multiplexed AD0-AD7 for lower byte</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Memory Interfacing Techniques</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Linear Select Decoding</p>
                    <p className="text-sm text-gray-600">Each address line selects one chip</p>
                    <p className="text-sm text-gray-600 mt-1">Simple but wasteful</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Absolute Decoding</p>
                    <p className="text-sm text-gray-600">All address lines decoded</p>
                    <p className="text-sm text-gray-600 mt-1">No address ambiguity</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interrupts */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">5. Interrupts</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Interrupt Types</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">TRAP (RST 4.5)</p>
                    <p className="text-sm text-gray-600">Non-maskable, highest priority, vector: 0024H</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">RST 7.5, 6.5, 5.5</p>
                    <p className="text-sm text-gray-600">Maskable interrupts with decreasing priority</p>
                    <p className="text-sm text-gray-600 mt-1">Vectors: 003CH, 0034H, 002CH</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">INTR</p>
                    <p className="text-sm text-gray-600">Lowest priority, maskable, vectored interrupt</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Interrupt Control Instructions</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">EI (Enable Interrupts)</p>
                    <p className="text-sm text-gray-600">Enables maskable interrupts</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">DI (Disable Interrupts)</p>
                    <p className="text-sm text-gray-600">Disables all maskable interrupts</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">SIM</p>
                    <p className="text-sm text-gray-600">Set Interrupt Mask</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">RIM</p>
                    <p className="text-sm text-gray-600">Read Interrupt Mask</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* DMA and Timer */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">6. DMA and Timer</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 DMA (Direct Memory Access)</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Purpose:</strong> Transfer data between memory and I/O without CPU intervention</p>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">DMA Controller Functions:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Generates memory addresses</li>
                      <li>Controls data transfer</li>
                      <li>Uses HOLD and HLDA signals in 8085</li>
                      <li>CPU releases buses when HOLD is active</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Timer (8253/8254)</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Features:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>3 independent 16-bit counters</li>
                      <li>6 programmable modes</li>
                      <li>Binary or BCD counting</li>
                      <li>Used for time delays, event counting, waveform generation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Exam Tips */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <BookOpen size={24} />
              📚 Exam Tips & Important Points
            </h2>
            <ul className="space-y-2 text-sm">
              <li>✓ Memorize 8085 pin diagram and functions</li>
              <li>✓ Understand difference between maskable and non-maskable interrupts</li>
              <li>✓ Practice assembly language programming</li>
              <li>✓ Know all addressing modes with examples</li>
              <li>✓ Understand timing diagrams for memory read/write cycles</li>
              <li>✓ Remember instruction formats and opcodes</li>
              <li>✓ Study DMA vs interrupt-driven I/O differences</li>
              <li>✓ Practice memory interfacing calculations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Microprocessors;
