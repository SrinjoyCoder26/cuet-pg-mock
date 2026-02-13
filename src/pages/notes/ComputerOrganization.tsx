import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const ComputerOrganization = () => {
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
              4
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Computer Organization and Architecture</h1>
              <p className="text-gray-600">CPU, Memory, I/O & Performance</p>
            </div>
          </div>

          {/* Machine Instructions */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">1. Machine Instructions and Addressing Modes</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1 Instruction Format</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Components of Instruction:</strong></p>
                  <div className="bg-white p-4 rounded space-y-2">
                    <p>• <strong>Opcode:</strong> Specifies operation to perform</p>
                    <p>• <strong>Operands:</strong> Data or addresses</p>
                    <p>• <strong>Mode bits:</strong> Addressing mode indicators</p>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Instruction Types:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Data Transfer:</strong> MOV, LOAD, STORE, PUSH, POP</li>
                      <li><strong>Arithmetic:</strong> ADD, SUB, MUL, DIV, INC, DEC</li>
                      <li><strong>Logical:</strong> AND, OR, XOR, NOT, SHIFT, ROTATE</li>
                      <li><strong>Control Transfer:</strong> JMP, CALL, RET, BRANCH</li>
                      <li><strong>I/O Instructions:</strong> IN, OUT</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Instruction Length:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Fixed-length: Same size (RISC), easier to decode</li>
                      <li>Variable-length: Different sizes (CISC), better code density</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.2 Addressing Modes</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">1. Immediate Addressing:</p>
                    <p className="text-sm text-gray-700">Operand is part of instruction</p>
                    <p className="text-sm text-gray-600">Example: ADD R1, #5 (Add 5 to R1)</p>
                    <p className="text-sm">Fast, but operand size limited</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">2. Direct/Absolute Addressing:</p>
                    <p className="text-sm text-gray-700">Address of operand in instruction</p>
                    <p className="text-sm text-gray-600">Example: LOAD R1, [1000]</p>
                    <p className="text-sm">EA = Address field</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">3. Register Addressing:</p>
                    <p className="text-sm text-gray-700">Operand in register</p>
                    <p className="text-sm text-gray-600">Example: ADD R1, R2</p>
                    <p className="text-sm">Fastest, limited operands</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">4. Register Indirect:</p>
                    <p className="text-sm text-gray-700">Register contains address</p>
                    <p className="text-sm text-gray-600">Example: LOAD R1, (R2)</p>
                    <p className="text-sm">EA = [R2]</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">5. Indexed Addressing:</p>
                    <p className="text-sm text-gray-700">EA = Base + Index register</p>
                    <p className="text-sm text-gray-600">Example: LOAD R1, 100(R2)</p>
                    <p className="text-sm">Useful for arrays</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">6. Base Register Addressing:</p>
                    <p className="text-sm text-gray-700">EA = Base register + Displacement</p>
                    <p className="text-sm text-gray-600">Used for relocatable code</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">7. Relative Addressing:</p>
                    <p className="text-sm text-gray-700">EA = PC + Displacement</p>
                    <p className="text-sm text-gray-600">Used in branch instructions</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">8. Auto-increment/decrement:</p>
                    <p className="text-sm text-gray-700">Register value adjusted after/before use</p>
                    <p className="text-sm text-gray-600">Useful for stack operations</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.3 RISC vs CISC</h3>
                <div className="bg-white p-4 rounded">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Feature</th>
                        <th className="text-left py-2">RISC</th>
                        <th className="text-left py-2">CISC</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b">
                        <td className="py-2">Instruction set</td>
                        <td>Small, simple</td>
                        <td>Large, complex</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Instruction length</td>
                        <td>Fixed</td>
                        <td>Variable</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Addressing modes</td>
                        <td>Few (3-5)</td>
                        <td>Many (12-24)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Execution</td>
                        <td>Single cycle</td>
                        <td>Multi-cycle</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Memory access</td>
                        <td>Load/Store only</td>
                        <td>Any instruction</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Registers</td>
                        <td>Many (32+)</td>
                        <td>Few (8-16)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Pipelining</td>
                        <td>Easy</td>
                        <td>Difficult</td>
                      </tr>
                      <tr>
                        <td className="py-2">Examples</td>
                        <td>ARM, MIPS</td>
                        <td>x86, 8086</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* ALU and Data-path */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">2. ALU and Data-path</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Arithmetic Logic Unit (ALU)</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Purpose:</strong> Performs arithmetic and logical operations</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Components:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Arithmetic circuit (adder, subtractor)</li>
                      <li>Logic circuit (AND, OR, XOR, NOT)</li>
                      <li>Shifter/Rotator</li>
                      <li>Multiplexer for operation selection</li>
                      <li>Status flags register</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Status Flags:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Zero (Z):</strong> Result is zero</li>
                      <li><strong>Sign (S):</strong> Result is negative</li>
                      <li><strong>Carry (C):</strong> Carry out from MSB</li>
                      <li><strong>Overflow (V):</strong> Signed overflow occurred</li>
                      <li><strong>Parity (P):</strong> Even/odd number of 1s</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Operations:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Arithmetic: ADD, SUB, INC, DEC, NEG</li>
                      <li>Logical: AND, OR, XOR, NOT</li>
                      <li>Shift: SHL, SHR, SAL, SAR</li>
                      <li>Rotate: ROL, ROR, RCL, RCR</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Data-path Organization</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Data-path:</strong> Collection of functional units that perform data processing</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Components:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Register file (general purpose registers)</li>
                      <li>ALU</li>
                      <li>Multiplexers (data routing)</li>
                      <li>Buses (data transfer paths)</li>
                      <li>Program Counter (PC)</li>
                      <li>Instruction Register (IR)</li>
                      <li>Memory Address Register (MAR)</li>
                      <li>Memory Data Register (MDR)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Bus Organization:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li><strong>Single Bus:</strong> Simple, slow (one transfer at a time)</li>
                      <li><strong>Two Bus:</strong> Better performance</li>
                      <li><strong>Three Bus:</strong> Fastest (two sources, one destination)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Integer Multiplication & Division</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Multiplication Algorithms:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
                      <li><strong>Pencil-and-paper:</strong> Shift and add based on multiplier bits</li>
                      <li><strong>Booth's Algorithm:</strong> Handles signed numbers, reduces operations</li>
                      <li><strong>Array Multiplier:</strong> Parallel, fast but expensive</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Division Algorithms:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
                      <li><strong>Restoring Division:</strong> Restore if subtraction fails</li>
                      <li><strong>Non-restoring Division:</strong> No restoration needed</li>
                      <li>Both produce quotient and remainder</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CPU Control Design */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">3. CPU Control Design</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Instruction Cycle</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Phases:</p>
                    <ol className="list-decimal ml-6 space-y-2">
                      <li><strong>Fetch:</strong> Load instruction from memory
                        <ul className="list-disc ml-6 text-sm">
                          <li>MAR ← PC</li>
                          <li>IR ← Memory[MAR]</li>
                          <li>PC ← PC + instruction_length</li>
                        </ul>
                      </li>
                      <li><strong>Decode:</strong> Interpret instruction
                        <ul className="list-disc ml-6 text-sm">
                          <li>Extract opcode and operands</li>
                          <li>Determine operation and addressing mode</li>
                        </ul>
                      </li>
                      <li><strong>Execute:</strong> Perform operation
                        <ul className="list-disc ml-6 text-sm">
                          <li>ALU operation or memory access</li>
                          <li>Update registers/flags</li>
                        </ul>
                      </li>
                      <li><strong>Memory Access:</strong> Read/write if needed</li>
                      <li><strong>Write-back:</strong> Store result in register/memory</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Hardwired Control</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Implementation:</strong> Control signals generated by combinational logic</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Characteristics:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Fast execution</li>
                      <li>Fixed logic - difficult to modify</li>
                      <li>Complex circuit design</li>
                      <li>Used in RISC processors</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Components:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Instruction decoder</li>
                      <li>Timing and control unit</li>
                      <li>Control signal generator</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Microprogrammed Control</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Implementation:</strong> Control signals stored in control memory (microprogram)</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Components:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Control Memory:</strong> Stores microinstructions</li>
                      <li><strong>Microinstruction Register:</strong> Holds current microinstruction</li>
                      <li><strong>Sequencer:</strong> Determines next microinstruction</li>
                      <li><strong>Control Address Register:</strong> Points to next microinstruction</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Advantages:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Flexible - easy to modify/add instructions</li>
                      <li>Simpler design process</li>
                      <li>Better for CISC processors</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Disadvantages:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Slower than hardwired</li>
                      <li>Requires control memory</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Memory Interface */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">4. Memory Interface</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Memory Hierarchy</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Levels (Top to Bottom):</p>
                    <ol className="list-decimal ml-6 space-y-2 text-sm">
                      <li><strong>Registers:</strong> Fastest, smallest, most expensive</li>
                      <li><strong>Cache (L1, L2, L3):</strong> SRAM, very fast</li>
                      <li><strong>Main Memory (RAM):</strong> DRAM, moderate speed</li>
                      <li><strong>Secondary Storage:</strong> HDD/SSD, large, slow</li>
                      <li><strong>Tertiary Storage:</strong> Tape, optical, slowest</li>
                    </ol>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Design Principles:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Locality of reference (temporal and spatial)</li>
                      <li>Faster memory is smaller and expensive</li>
                      <li>Goal: Speed of fastest, capacity of largest</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Memory Types</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">RAM (Random Access Memory):</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
                      <li><strong>SRAM:</strong> Fast, expensive, used in cache (6 transistors/bit)</li>
                      <li><strong>DRAM:</strong> Slower, cheaper, main memory (1 transistor + 1 capacitor/bit)</li>
                      <li><strong>SDRAM:</strong> Synchronous DRAM</li>
                      <li><strong>DDR SDRAM:</strong> Double Data Rate (DDR2, DDR3, DDR4, DDR5)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">ROM (Read-Only Memory):</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
                      <li><strong>PROM:</strong> Programmable once</li>
                      <li><strong>EPROM:</strong> Erasable with UV light</li>
                      <li><strong>EEPROM:</strong> Electrically erasable</li>
                      <li><strong>Flash:</strong> Block-erasable EEPROM (USB, SSD)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Memory Interleaving</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Purpose:</strong> Increase memory bandwidth by parallel access</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Types:</p>
                    <ul className="list-disc ml-6 space-y-2 text-sm">
                      <li><strong>Low-order Interleaving:</strong>
                        <ul className="list-disc ml-6">
                          <li>Consecutive addresses in different modules</li>
                          <li>Better for sequential access</li>
                        </ul>
                      </li>
                      <li><strong>High-order Interleaving:</strong>
                        <ul className="list-disc ml-6">
                          <li>Consecutive addresses in same module</li>
                          <li>Simpler address mapping</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* I/O Interface */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">5. I/O Interface</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 I/O Techniques</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">1. Programmed I/O (Polling):</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
                      <li>CPU continuously checks I/O device status</li>
                      <li>Simple but inefficient (CPU busy-waiting)</li>
                      <li>Wastes CPU cycles</li>
                      <li>Used for simple, slow devices</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">2. Interrupt-driven I/O:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
                      <li>Device signals CPU when ready</li>
                      <li>CPU can do other work meanwhile</li>
                      <li>More efficient than polling</li>
                      <li>Overhead of context switching</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">3. Direct Memory Access (DMA):</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
                      <li>Device transfers data directly to/from memory</li>
                      <li>CPU not involved in data transfer</li>
                      <li>Most efficient for bulk transfers</li>
                      <li>Requires DMA controller</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Interrupt Handling</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Interrupt Process:</p>
                    <ol className="list-decimal ml-6 space-y-1 text-sm">
                      <li>Device sends interrupt signal</li>
                      <li>CPU completes current instruction</li>
                      <li>Save program state (PC, registers)</li>
                      <li>Identify interrupt source</li>
                      <li>Execute Interrupt Service Routine (ISR)</li>
                      <li>Restore program state</li>
                      <li>Resume execution</li>
                    </ol>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Types:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li><strong>Vectored Interrupt:</strong> Device provides ISR address</li>
                      <li><strong>Non-vectored:</strong> Fixed ISR address, must poll to identify</li>
                      <li><strong>Maskable:</strong> Can be disabled by software</li>
                      <li><strong>Non-maskable (NMI):</strong> Cannot be disabled</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Priority Handling:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Daisy chain - simple, serial priority</li>
                      <li>Parallel priority - faster, requires encoder</li>
                      <li>Higher priority can interrupt lower</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 DMA Controller</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">DMA Registers:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Address register - memory location</li>
                      <li>Word count register - number of words</li>
                      <li>Control register - mode and direction</li>
                      <li>Status register - transfer status</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">DMA Transfer Modes:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li><strong>Burst Mode:</strong> Transfers entire block, CPU idle</li>
                      <li><strong>Cycle Stealing:</strong> One word at a time, shares bus</li>
                      <li><strong>Transparent Mode:</strong> Uses idle CPU cycles</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Process:</p>
                    <ol className="list-decimal ml-6 space-y-1 text-sm">
                      <li>CPU initializes DMA controller</li>
                      <li>DMA requests bus control</li>
                      <li>CPU grants bus (HRQ/HLDA signals)</li>
                      <li>DMA transfers data</li>
                      <li>DMA releases bus and interrupts CPU</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.4 I/O Buses and Standards</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">Internal Buses:</p>
                    <ul className="list-disc ml-6 text-sm text-gray-700">
                      <li>System bus (FSB)</li>
                      <li>PCI, PCIe</li>
                      <li>SATA, NVMe</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">External Buses:</p>
                    <ul className="list-disc ml-6 text-sm text-gray-700">
                      <li>USB (2.0, 3.0, 3.1)</li>
                      <li>Thunderbolt</li>
                      <li>HDMI, DisplayPort</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Instruction Pipelining */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">6. Instruction Pipelining</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Pipeline Basics</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Concept:</strong> Overlap execution of multiple instructions</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Classic 5-stage Pipeline:</p>
                    <ol className="list-decimal ml-6 space-y-1">
                      <li>IF - Instruction Fetch</li>
                      <li>ID - Instruction Decode</li>
                      <li>EX - Execute</li>
                      <li>MEM - Memory Access</li>
                      <li>WB - Write Back</li>
                    </ol>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Performance:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Speedup ≈ Number of stages (ideal)</li>
                      <li>Throughput increased, not latency</li>
                      <li>CPI approaches 1 in ideal case</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Pipeline Hazards</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">1. Structural Hazards:</p>
                    <p className="text-sm text-gray-700">Hardware cannot support all combinations</p>
                    <p className="text-sm text-gray-600 mt-1">Solution: Separate instruction/data memory, more ALUs</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">2. Data Hazards:</p>
                    <p className="text-sm text-gray-700">Instruction depends on previous result</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-gray-600 mt-1">
                      <li>RAW (Read After Write) - true dependency</li>
                      <li>WAR (Write After Read) - anti-dependency</li>
                      <li>WAW (Write After Write) - output dependency</li>
                    </ul>
                    <p className="text-sm mt-2"><strong>Solutions:</strong></p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Forwarding/Bypassing - pass data directly</li>
                      <li>Stalling/Bubbles - insert NOPs</li>
                      <li>Compiler scheduling - reorder instructions</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">3. Control Hazards (Branch):</p>
                    <p className="text-sm text-gray-700">Uncertainty about next instruction (branches)</p>
                    <p className="text-sm mt-2"><strong>Solutions:</strong></p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Branch prediction (static/dynamic)</li>
                      <li>Delayed branch - fill with useful instruction</li>
                      <li>Branch target buffer (BTB)</li>
                      <li>Speculative execution</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3 Advanced Pipelining</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Superpipelining:</p>
                    <p className="text-sm text-gray-700">More stages (10-20), higher clock frequency</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Superscalar:</p>
                    <p className="text-sm text-gray-700">Multiple pipelines, multiple instructions per cycle</p>
                    <p className="text-sm text-gray-600">Example: Issue 4 instructions/cycle</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">VLIW (Very Long Instruction Word):</p>
                    <p className="text-sm text-gray-700">Compiler finds parallelism, packs into long instruction</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cache Memory */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">7. Cache and Main Memory</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Cache Memory Basics</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Purpose:</strong> Fast memory between CPU and main memory</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Cache Performance:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Hit: Data found in cache</li>
                      <li>Miss: Data not in cache, fetch from memory</li>
                      <li>Hit ratio (h) = Hits / Total accesses</li>
                      <li>Average access time = h × T_cache + (1-h) × T_memory</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Locality Principles:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li><strong>Temporal:</strong> Recently accessed data likely accessed again</li>
                      <li><strong>Spatial:</strong> Nearby data likely accessed together</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 Cache Mapping Techniques</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">1. Direct Mapping:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
                      <li>Each block maps to exactly one cache line</li>
                      <li>Cache line = Block address MOD Number of lines</li>
                      <li>Simple, fast, but high conflict misses</li>
                      <li>Address: Tag | Line | Word offset</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">2. Fully Associative:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
                      <li>Block can go in any cache line</li>
                      <li>Compare tag with all lines (parallel)</li>
                      <li>Flexible but expensive (complex hardware)</li>
                      <li>Address: Tag | Word offset</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg">3. Set-Associative:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
                      <li>N-way: Cache divided into sets, each with N lines</li>
                      <li>Block maps to a set, can be in any line within set</li>
                      <li>Compromise between direct and fully associative</li>
                      <li>Common: 2-way, 4-way, 8-way</li>
                      <li>Address: Tag | Set | Word offset</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.3 Replacement Policies</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">When cache is full, which block to replace?</p>
                    <ul className="list-disc ml-6 space-y-2 text-sm text-gray-700">
                      <li><strong>LRU (Least Recently Used):</strong> Replace oldest accessed block
                        <ul className="list-disc ml-6 text-xs text-gray-600">
                          <li>Best performance, complex hardware</li>
                        </ul>
                      </li>
                      <li><strong>FIFO (First In First Out):</strong> Replace oldest loaded block
                        <ul className="list-disc ml-6 text-xs text-gray-600">
                          <li>Simple, but may replace frequently used blocks</li>
                        </ul>
                      </li>
                      <li><strong>Random:</strong> Replace random block
                        <ul className="list-disc ml-6 text-xs text-gray-600">
                          <li>Simplest, surprisingly effective</li>
                        </ul>
                      </li>
                      <li><strong>LFU (Least Frequently Used):</strong> Replace least accessed</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.4 Write Policies</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Write Hit:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
                      <li><strong>Write-through:</strong> Update cache and memory simultaneously
                        <ul className="list-disc ml-6 text-xs text-gray-600">
                          <li>Simple, consistent, but slower</li>
                          <li>Often uses write buffer</li>
                        </ul>
                      </li>
                      <li><strong>Write-back:</strong> Update cache only, write to memory on replacement
                        <ul className="list-disc ml-6 text-xs text-gray-600">
                          <li>Faster, but needs dirty bit</li>
                          <li>Memory may be stale</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Write Miss:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
                      <li><strong>Write-allocate:</strong> Load block into cache, then write</li>
                      <li><strong>No-write-allocate:</strong> Write directly to memory</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.5 Multi-level Cache</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">L1, L2, L3 Cache:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>L1: Smallest (32-64 KB), fastest, on-chip</li>
                      <li>L2: Larger (256 KB-1 MB), slower than L1, on-chip</li>
                      <li>L3: Largest (8-32 MB), shared among cores</li>
                      <li>Each level filters requests to slower memory</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Secondary Storage */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">8. Secondary Storage</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">8.1 Hard Disk Drive (HDD)</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Components:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Platters - magnetic storage surfaces</li>
                      <li>Spindle - rotates platters (5400-15000 RPM)</li>
                      <li>Read/write heads - one per surface</li>
                      <li>Actuator arm - moves heads</li>
                      <li>Controller - interface electronics</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Organization:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Track - concentric circle on platter</li>
                      <li>Sector - subdivision of track (512 bytes or 4 KB)</li>
                      <li>Cylinder - same track number on all platters</li>
                      <li>Cluster - group of sectors</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Access Time:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Seek time - move head to track (3-10 ms)</li>
                      <li>Rotational latency - wait for sector (2-5 ms)</li>
                      <li>Transfer time - read/write data</li>
                      <li>Total = Seek + Rotation + Transfer</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">8.2 Solid State Drive (SSD)</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Technology:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Based on NAND flash memory</li>
                      <li>No moving parts</li>
                      <li>Pages (4-16 KB) and blocks (128-256 pages)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Advantages over HDD:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Much faster access (0.1 ms)</li>
                      <li>Lower power consumption</li>
                      <li>Silent operation</li>
                      <li>More durable (shock resistant)</li>
                      <li>Lighter weight</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded mt-3">
                    <p className="font-semibold mb-2">Disadvantages:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>More expensive per GB</li>
                      <li>Limited write cycles (wear leveling needed)</li>
                      <li>Must erase before rewrite</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">8.3 Disk Scheduling Algorithms</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Optimize seek time by ordering requests:</p>
                    <ul className="list-disc ml-6 space-y-2 text-sm text-gray-700">
                      <li><strong>FCFS:</strong> First Come First Served - simple, fair, but inefficient</li>
                      <li><strong>SSTF:</strong> Shortest Seek Time First - greedy, may starve</li>
                      <li><strong>SCAN:</strong> Elevator algorithm - sweep back and forth</li>
                      <li><strong>C-SCAN:</strong> Circular SCAN - sweep in one direction only</li>
                      <li><strong>LOOK/C-LOOK:</strong> Like SCAN but reverse at last request</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">8.4 RAID (Redundant Array of Independent Disks)</h3>
                <div className="bg-white p-4 rounded">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Level</th>
                        <th className="text-left py-2">Description</th>
                        <th className="text-left py-2">Min Disks</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b">
                        <td className="py-2">RAID 0</td>
                        <td>Striping, no redundancy, high performance</td>
                        <td>2</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">RAID 1</td>
                        <td>Mirroring, 100% redundancy</td>
                        <td>2</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">RAID 5</td>
                        <td>Block striping with distributed parity</td>
                        <td>3</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">RAID 6</td>
                        <td>Like RAID 5 but double parity</td>
                        <td>4</td>
                      </tr>
                      <tr>
                        <td className="py-2">RAID 10</td>
                        <td>Striping + Mirroring (RAID 1+0)</td>
                        <td>4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Exam Tips */}
          <section className="mb-6">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">📚 Exam Tips & Important Points</h2>
              <ul className="space-y-2 text-green-50">
                <li>✓ Master all addressing modes with examples</li>
                <li>✓ Know RISC vs CISC differences thoroughly</li>
                <li>✓ Understand pipeline hazards and solutions</li>
                <li>✓ Practice cache mapping and address breakdown</li>
                <li>✓ Calculate average memory access time with cache</li>
                <li>✓ Know interrupt handling process step-by-step</li>
                <li>✓ Understand DMA operation and advantages</li>
                <li>✓ Remember disk scheduling algorithms and their trade-offs</li>
                <li>✓ Know RAID levels and their characteristics</li>
                <li>✓ Understand instruction cycle phases clearly</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ComputerOrganization;
