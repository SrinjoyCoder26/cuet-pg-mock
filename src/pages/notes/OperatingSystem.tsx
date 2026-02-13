import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const OperatingSystem = () => {
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
              8
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Operating Systems</h1>
              <p className="text-gray-600">Complete notes for CUET PG MTQP04</p>
            </div>
          </div>

          {/* OS Basics Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">8.1 Operating System Functions</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What is an OS?</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Operating System:</strong> System software that manages hardware and software resources, provides services to applications.</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Primary Functions:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Process Management:</strong> Create, schedule, terminate processes</li>
                      <li><strong>Memory Management:</strong> Allocate/deallocate memory</li>
                      <li><strong>File System Management:</strong> Organize and access files</li>
                      <li><strong>I/O Management:</strong> Control input/output devices</li>
                      <li><strong>Security:</strong> Protect resources from unauthorized access</li>
                      <li><strong>User Interface:</strong> CLI or GUI for user interaction</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">OS Types</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">Batch OS:</p>
                    <p className="text-sm">Groups similar jobs, executes without user interaction</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">Time-Sharing OS:</p>
                    <p className="text-sm">Multiple users share CPU time (UNIX, Linux)</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">Distributed OS:</p>
                    <p className="text-sm">Manages group of independent computers</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold">Real-Time OS:</p>
                    <p className="text-sm">Processes data with strict time constraints</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Processes Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">8.2 Processes</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Process Fundamentals</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Definition:</p>
                    <p><strong>Process:</strong> Program in execution. Includes program code, current activity, stack, heap, data section.</p>
                    <p className="mt-2"><strong>Program vs Process:</strong> Program is passive (code on disk), Process is active (executing program)</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Process States:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>New:</strong> Process being created</li>
                      <li><strong>Ready:</strong> Waiting to be assigned to CPU</li>
                      <li><strong>Running:</strong> Instructions being executed</li>
                      <li><strong>Waiting/Blocked:</strong> Waiting for I/O or event</li>
                      <li><strong>Terminated:</strong> Process finished execution</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Process Control Block (PCB):</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Process ID (PID)</li>
                      <li>Process State</li>
                      <li>Program Counter</li>
                      <li>CPU Registers</li>
                      <li>Memory Management Info</li>
                      <li>I/O Status Information</li>
                      <li>Accounting Information</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Threads Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">8.3 Threads</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Multithreading</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Definition:</p>
                    <p><strong>Thread:</strong> Lightweight process, basic unit of CPU utilization. Multiple threads share same address space.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Thread Components:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Thread ID</li>
                      <li>Program Counter</li>
                      <li>Register Set</li>
                      <li>Stack</li>
                    </ul>
                    <p className="mt-2 font-semibold">Shared Among Threads:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Code section</li>
                      <li>Data section</li>
                      <li>Open files</li>
                      <li>Signals</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Benefits:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Responsiveness:</strong> Continue execution even if part blocked</li>
                      <li><strong>Resource Sharing:</strong> Share memory and resources</li>
                      <li><strong>Economy:</strong> Cheaper than process creation</li>
                      <li><strong>Scalability:</strong> Utilize multiprocessor architectures</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Types:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>User-Level Threads:</strong> Managed by user-level library</li>
                      <li><strong>Kernel-Level Threads:</strong> Managed by OS</li>
                      <li><strong>Hybrid Model:</strong> Many-to-many mapping</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* IPC Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">8.4 Inter-Process Communication (IPC)</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">IPC Mechanisms</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Why IPC?</p>
                    <p>Processes need to communicate and synchronize their actions.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">IPC Methods:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Shared Memory:</strong> Processes share memory region. Fast but needs synchronization.</li>
                      <li><strong>Message Passing:</strong> Exchange messages via send/receive. Easier synchronization, slower.</li>
                      <li><strong>Pipes:</strong> Unidirectional communication channel
                        <ul className="list-disc ml-6 mt-1">
                          <li>Ordinary Pipes: Parent-child only</li>
                          <li>Named Pipes: Unrelated processes</li>
                        </ul>
                      </li>
                      <li><strong>Sockets:</strong> Communication endpoint, can be across network</li>
                      <li><strong>Signals:</strong> Software interrupt notification</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Synchronization Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">8.5 Process Synchronization</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Critical Section Problem</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Critical Section:</p>
                    <p>Code segment where shared resources are accessed. Only one process should execute in critical section at a time.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Requirements:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Mutual Exclusion:</strong> Only one process in critical section</li>
                      <li><strong>Progress:</strong> Selection of next process can't be postponed indefinitely</li>
                      <li><strong>Bounded Waiting:</strong> Limit on times others enter CS before request granted</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Synchronization Tools</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Semaphore:</p>
                    <p>Integer variable accessed via atomic operations: wait() and signal()</p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li><strong>Binary Semaphore:</strong> Value 0 or 1 (mutex lock)</li>
                      <li><strong>Counting Semaphore:</strong> Value can be any integer</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Mutex Lock:</p>
                    <p>Boolean variable for mutual exclusion. acquire() before CS, release() after.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Monitors:</p>
                    <p>High-level synchronization construct. Only one process active in monitor at a time.</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Classic Problems</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Producer-Consumer Problem:</p>
                    <p>Producer produces items for buffer, consumer consumes from buffer. Need synchronization.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Readers-Writers Problem:</p>
                    <p>Multiple readers can read simultaneously, but writers need exclusive access.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Dining Philosophers Problem:</p>
                    <p>5 philosophers, 5 forks. Each needs 2 forks to eat. Avoid deadlock and starvation.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Deadlock Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">8.6 Deadlock</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Deadlock Concepts</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Definition:</p>
                    <p>Set of processes permanently blocked, each waiting for resource held by another in the set.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Necessary Conditions (All 4 must hold):</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Mutual Exclusion:</strong> Resources non-sharable</li>
                      <li><strong>Hold and Wait:</strong> Process holds resources while waiting for more</li>
                      <li><strong>No Preemption:</strong> Resources can't be forcibly taken</li>
                      <li><strong>Circular Wait:</strong> Circular chain of waiting processes</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Handling Deadlocks:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Prevention:</strong> Ensure at least one necessary condition can't hold</li>
                      <li><strong>Avoidance:</strong> Use Banker's algorithm, ensure safe state</li>
                      <li><strong>Detection & Recovery:</strong> Allow deadlock, detect and recover</li>
                      <li><strong>Ignorance:</strong> Ostrich algorithm - ignore problem (used by most OS)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CPU Scheduling Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">8.7 CPU Scheduling</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Scheduling Algorithms</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Scheduling Criteria:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>CPU Utilization:</strong> Keep CPU busy</li>
                      <li><strong>Throughput:</strong> Processes completed per unit time</li>
                      <li><strong>Turnaround Time:</strong> Time from submission to completion</li>
                      <li><strong>Waiting Time:</strong> Time spent in ready queue</li>
                      <li><strong>Response Time:</strong> Time from submission to first response</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">First-Come First-Served (FCFS):</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Non-preemptive</li>
                      <li>Simple but poor performance</li>
                      <li>Convoy effect: Short processes wait for long ones</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Shortest Job First (SJF):</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Non-preemptive or preemptive (SRTF)</li>
                      <li>Optimal - minimum average waiting time</li>
                      <li>Difficult to predict burst time</li>
                      <li>Can cause starvation</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Priority Scheduling:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Each process has priority</li>
                      <li>Can be preemptive or non-preemptive</li>
                      <li>Problem: Starvation (solution: aging)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Round Robin (RR):</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Preemptive, time quantum</li>
                      <li>Fair, no starvation</li>
                      <li>Performance depends on quantum size</li>
                      <li>High context switch overhead if quantum too small</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Multilevel Queue:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Multiple queues with different priorities</li>
                      <li>Processes permanently assigned to queues</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Disk Scheduling Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">8.8 I/O & Disk Scheduling</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Disk Scheduling Algorithms</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Goal: Minimize seek time</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>FCFS:</strong> Service in order. Fair but poor performance.</li>
                      <li><strong>SSTF (Shortest Seek Time First):</strong> Service closest request. May cause starvation.</li>
                      <li><strong>SCAN (Elevator):</strong> Move in one direction, service all requests, reverse. No starvation.</li>
                      <li><strong>C-SCAN:</strong> Like SCAN but only services in one direction, jumps back.</li>
                      <li><strong>LOOK:</strong> Like SCAN but reverses when no more requests in direction.</li>
                      <li><strong>C-LOOK:</strong> Circular LOOK.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Banker's Algorithm Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">8.9 Banker's Algorithm</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Deadlock Avoidance</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Concept:</p>
                    <p>Algorithm to avoid deadlock by ensuring system always remains in safe state.</p>
                    <p className="mt-2"><strong>Safe State:</strong> System can allocate resources to each process in some order and avoid deadlock.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Data Structures:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Available:</strong> Vector of available resources</li>
                      <li><strong>Max:</strong> Maximum demand of each process</li>
                      <li><strong>Allocation:</strong> Currently allocated to each process</li>
                      <li><strong>Need:</strong> Remaining need = Max - Allocation</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Safety Algorithm:</p>
                    <ol className="list-decimal ml-6 space-y-1">
                      <li>Find process whose Need ≤ Available</li>
                      <li>Simulate allocation and completion</li>
                      <li>Add its resources to Available</li>
                      <li>Repeat until all processes complete (safe) or no such process exists (unsafe)</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Memory Management Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">8.10 Memory Management</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Memory Allocation</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Contiguous Allocation:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Fixed Partitioning:</strong> Divide memory into fixed partitions. Internal fragmentation.</li>
                      <li><strong>Dynamic Partitioning:</strong> Allocate exact size needed. External fragmentation.</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Allocation Strategies:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>First Fit:</strong> Allocate first hole large enough</li>
                      <li><strong>Best Fit:</strong> Allocate smallest hole that fits</li>
                      <li><strong>Worst Fit:</strong> Allocate largest hole</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Paging:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Divide physical memory into fixed-size frames</li>
                      <li>Divide logical memory into same-size pages</li>
                      <li>No external fragmentation</li>
                      <li>Use page table for address translation</li>
                      <li>Logical address = Page number + Page offset</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Segmentation:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Divide program into logical segments</li>
                      <li>Variable size segments</li>
                      <li>Segment table for address translation</li>
                      <li>External fragmentation possible</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Virtual Memory Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">8.11 Virtual Memory</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Virtual Memory Concepts</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Concept:</p>
                    <p>Separation of logical memory from physical memory. Only part of program needs to be in memory for execution.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Benefits:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Programs larger than physical memory can run</li>
                      <li>More processes in memory</li>
                      <li>Less I/O for loading</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Page Replacement Algorithms:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>FIFO:</strong> Replace oldest page. Can suffer from Belady's anomaly.</li>
                      <li><strong>Optimal:</strong> Replace page not used for longest future time. Theoretical.</li>
                      <li><strong>LRU (Least Recently Used):</strong> Replace page not used for longest past time. Good but expensive.</li>
                      <li><strong>LFU (Least Frequently Used):</strong> Replace least frequently used page.</li>
                      <li><strong>Clock (Second Chance):</strong> FIFO with reference bit.</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Thrashing:</p>
                    <p>Process spends more time paging than executing. Occurs when too many processes in memory.</p>
                    <p className="mt-2"><strong>Solution:</strong> Working set model, page fault frequency</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* File Systems Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">8.12 File Systems</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">File System Concepts</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">File Attributes:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Name, Type, Location</li>
                      <li>Size, Protection</li>
                      <li>Time, date, user ID</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">File Operations:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Create, Delete, Open, Close</li>
                      <li>Read, Write, Seek</li>
                      <li>Get/Set attributes</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Directory Structure:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Single-Level:</strong> All files in one directory</li>
                      <li><strong>Two-Level:</strong> Separate directory for each user</li>
                      <li><strong>Tree-Structured:</strong> Hierarchical (most common)</li>
                      <li><strong>Acyclic Graph:</strong> Allow sharing</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Allocation Methods:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Contiguous:</strong> Each file occupies contiguous blocks. Fast but fragmentation.</li>
                      <li><strong>Linked:</strong> Each block points to next. No fragmentation but slow random access.</li>
                      <li><strong>Indexed:</strong> Index block contains pointers to data blocks. Fast but overhead.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* DOS, UNIX, Windows Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">8.13 DOS, UNIX & Windows</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Operating System Comparison</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">DOS (Disk Operating System):</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Single-user, single-tasking</li>
                      <li>Command-line interface</li>
                      <li>16-bit operating system</li>
                      <li>FAT file system</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">UNIX:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Multi-user, multitasking</li>
                      <li>Hierarchical file system</li>
                      <li>Shell for command interpretation</li>
                      <li>Portable, written in C</li>
                      <li>Strong security model</li>
                      <li>Process concept, IPC</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Windows:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Multi-user, multitasking</li>
                      <li>Graphical user interface</li>
                      <li>NTFS file system</li>
                      <li>Preemptive multitasking</li>
                      <li>Virtual memory</li>
                      <li>Object-oriented design</li>
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
                    <li><strong>CPU Scheduling:</strong> Know all algorithms, calculate avg waiting/turnaround time</li>
                    <li><strong>Deadlock:</strong> Conditions, prevention, Banker's algorithm</li>
                    <li><strong>Memory Management:</strong> Paging, segmentation, page replacement</li>
                    <li><strong>Process Synchronization:</strong> Semaphores, critical section problem</li>
                    <li><strong>Disk Scheduling:</strong> Understand all algorithms, calculate total head movement</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-lg mb-3">📝 Common Exam Questions:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Calculate average waiting time for scheduling algorithm</li>
                    <li>Apply Banker's algorithm to check safe state</li>
                    <li>Page replacement algorithm trace (LRU, FIFO, Optimal)</li>
                    <li>Calculate page fault rate</li>
                    <li>Disk scheduling - total head movement</li>
                    <li>Process state diagram transitions</li>
                    <li>Solve producer-consumer with semaphores</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-lg mb-3">⚡ Quick Formulas:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Turnaround Time = Completion Time - Arrival Time</li>
                    <li>Waiting Time = Turnaround Time - Burst Time</li>
                    <li>Response Time = First CPU Time - Arrival Time</li>
                    <li>Logical Address = Page Number × Page Size + Offset</li>
                    <li>Physical Address = Frame Number × Frame Size + Offset</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-lg mb-3">⚠️ Common Mistakes:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Confusing preemptive and non-preemptive scheduling</li>
                    <li>Forgetting to check all 4 deadlock conditions</li>
                    <li>Wrong page table calculation in paging</li>
                    <li>Mixing up internal and external fragmentation</li>
                    <li>Incorrect Banker's algorithm safe sequence</li>
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

export default OperatingSystem;
