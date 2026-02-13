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

          {/* I/O Interfacing */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">6. I/O Interfacing</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 I/O Addressing Techniques</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Memory-Mapped I/O</p>
                    <ul className="text-sm list-disc ml-4 space-y-1 text-gray-700">
                      <li>I/O devices mapped to memory addresses</li>
                      <li>Uses memory instructions (LDA, STA)</li>
                      <li>Reduces available memory space</li>
                      <li>No special I/O instructions needed</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">I/O-Mapped I/O (Isolated I/O)</p>
                    <ul className="text-sm list-disc ml-4 space-y-1 text-gray-700">
                      <li>Separate address space for I/O</li>
                      <li>Uses IN and OUT instructions</li>
                      <li>256 I/O ports (8-bit address)</li>
                      <li>IO/M̄ signal distinguishes I/O</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 8255 PPI (Programmable Peripheral Interface)</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Features:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
                      <li>3 ports: Port A, Port B, Port C (8-bit each)</li>
                      <li>Port C can be split into two 4-bit ports</li>
                      <li>Modes: Mode 0 (Simple I/O), Mode 1 (Strobed I/O), Mode 2 (Bidirectional)</li>
                      <li>Programmable via control word</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Control Word Format:</p>
                    <p className="text-sm text-gray-700">D7: 1 for mode set, 0 for bit set/reset</p>
                    <p className="text-sm text-gray-700">D6-D5: Mode selection for Port A</p>
                    <p className="text-sm text-gray-700">D4: Port A direction (1=input, 0=output)</p>
                    <p className="text-sm text-gray-700">D3: Port C upper direction</p>
                    <p className="text-sm text-gray-700">D2: Mode selection for Port B</p>
                    <p className="text-sm text-gray-700">D1: Port B direction</p>
                    <p className="text-sm text-gray-700">D0: Port C lower direction</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3 8251 USART (Universal Synchronous/Asynchronous Receiver-Transmitter)</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Functions:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
                      <li>Serial data transmission and reception</li>
                      <li>Supports both synchronous and asynchronous modes</li>
                      <li>Programmable baud rate</li>
                      <li>Error detection (parity, framing, overrun)</li>
                      <li>Data format: 5-8 bits, 1-2 stop bits</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Asynchronous Mode:</p>
                    <p className="text-sm text-gray-700">Start bit + Data bits + Parity bit (optional) + Stop bits</p>
                    <p className="text-sm text-gray-700 mt-1">Common: 8N1 (8 data, No parity, 1 stop)</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.4 8259 PIC (Programmable Interrupt Controller)</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Features:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
                      <li>Manages 8 interrupt requests (IR0-IR7)</li>
                      <li>Priority resolver with programmable priorities</li>
                      <li>Cascade support up to 64 interrupts (8 × 8259s)</li>
                      <li>Edge or level triggered modes</li>
                      <li>Automatic EOI (End of Interrupt)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Initialization:</p>
                    <p className="text-sm text-gray-700">Requires 4 ICWs (Initialization Command Words)</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700 mt-1">
                      <li>ICW1: Initialization, edge/level, single/cascade</li>
                      <li>ICW2: Interrupt vector address</li>
                      <li>ICW3: Master-slave configuration</li>
                      <li>ICW4: Microprocessor mode, EOI mode</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* DMA and Timer */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">7. DMA and Timer</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 DMA (Direct Memory Access)</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Purpose:</strong> Transfer data between memory and I/O without CPU intervention</p>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">DMA Controller (8257) Functions:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Generates memory addresses</li>
                      <li>Controls data transfer</li>
                      <li>Uses HOLD and HLDA signals in 8085</li>
                      <li>CPU releases buses when HOLD is active</li>
                      <li>4 independent DMA channels</li>
                      <li>Auto-increment/decrement addresses</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">DMA Transfer Modes:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li><strong>Burst Mode:</strong> DMA takes over until transfer complete</li>
                      <li><strong>Cycle Stealing:</strong> DMA uses one bus cycle at a time</li>
                      <li><strong>Transparent Mode:</strong> DMA uses idle CPU cycles</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 Timer (8253/8254)</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Features:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>3 independent 16-bit counters (Counter 0, 1, 2)</li>
                      <li>6 programmable modes (Mode 0-5)</li>
                      <li>Binary or BCD counting</li>
                      <li>Used for time delays, event counting, waveform generation</li>
                      <li>Maximum count: 65536 (binary) or 10000 (BCD)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Operating Modes:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li><strong>Mode 0:</strong> Interrupt on terminal count</li>
                      <li><strong>Mode 1:</strong> Programmable one-shot</li>
                      <li><strong>Mode 2:</strong> Rate generator (divide by N)</li>
                      <li><strong>Mode 3:</strong> Square wave generator</li>
                      <li><strong>Mode 4:</strong> Software triggered strobe</li>
                      <li><strong>Mode 5:</strong> Hardware triggered strobe</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Microcontrollers Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">8. Microcontroller Basics (8051)</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">8.1 8051 Architecture</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Key Features:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
                      <li>8-bit CPU optimized for control applications</li>
                      <li>4KB on-chip ROM (program memory)</li>
                      <li>128 bytes on-chip RAM (data memory)</li>
                      <li>Four 8-bit I/O ports (P0, P1, P2, P3)</li>
                      <li>Two 16-bit timers/counters (T0, T1)</li>
                      <li>Full-duplex UART for serial communication</li>
                      <li>5 interrupt sources (2 external, 3 internal)</li>
                      <li>64KB external code memory addressable</li>
                      <li>64KB external data memory addressable</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Special Function Registers (SFRs):</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
                      <li><strong>ACC:</strong> Accumulator</li>
                      <li><strong>B:</strong> B register</li>
                      <li><strong>PSW:</strong> Program Status Word</li>
                      <li><strong>SP:</strong> Stack Pointer</li>
                      <li><strong>DPTR:</strong> Data Pointer (16-bit)</li>
                      <li><strong>TCON:</strong> Timer Control</li>
                      <li><strong>TMOD:</strong> Timer Mode</li>
                      <li><strong>IE:</strong> Interrupt Enable</li>
                      <li><strong>IP:</strong> Interrupt Priority</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">8.2 Microprocessor vs Microcontroller</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Microprocessor (8085):</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
                      <li>General-purpose computing</li>
                      <li>External memory required</li>
                      <li>External peripherals needed</li>
                      <li>Higher power consumption</li>
                      <li>More expensive system</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Microcontroller (8051):</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
                      <li>Dedicated control applications</li>
                      <li>On-chip memory included</li>
                      <li>Built-in peripherals (timers, I/O)</li>
                      <li>Lower power consumption</li>
                      <li>Cost-effective solution</li>
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
              <li>✓ Memorize 8085 pin diagram and all signal functions</li>
              <li>✓ Understand difference between maskable and non-maskable interrupts</li>
              <li>✓ Practice assembly language programming for common tasks</li>
              <li>✓ Know all addressing modes with clear examples</li>
              <li>✓ Understand timing diagrams for memory read/write cycles</li>
              <li>✓ Remember instruction formats and common opcodes</li>
              <li>✓ Study DMA vs interrupt-driven I/O differences thoroughly</li>
              <li>✓ Practice memory interfacing calculations and chip select logic</li>
              <li>✓ Understand 8255 PPI modes and control word format</li>
              <li>✓ Know 8253 timer modes and their applications</li>
              <li>✓ Compare microprocessor vs microcontroller features</li>
              <li>✓ Study 8051 architecture and special function registers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Microprocessors;
