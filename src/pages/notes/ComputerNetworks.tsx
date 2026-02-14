import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import FormulaBox from "@/components/diagrams/FormulaBox";
import WorkedExample from "@/components/diagrams/WorkedExample";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const ComputerNetworks = () => {
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
              9
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Computer Networks</h1>
              <p className="text-gray-600">Complete notes for CUET PG MTQP04</p>
            </div>
          </div>

          {/* OSI Model Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">9.1 OSI Model - Detailed Layer Description</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7-Layer OSI Model</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Open Systems Interconnection Model:</p>
                    <p className="text-sm mb-3">Conceptual framework developed by ISO for network communication protocols in 7 layers. Each layer serves specific functions and communicates with adjacent layers.</p>
                    
                    <div className="space-y-3">
                      <div className="bg-purple-100 p-3 rounded">
                        <p className="font-semibold text-lg">7. Application Layer</p>
                        <p className="text-sm mt-1"><strong>Function:</strong> Provides network services directly to end-user applications</p>
                        <p className="text-sm"><strong>Protocols:</strong> HTTP, HTTPS, FTP, SMTP, POP3, IMAP, DNS, DHCP, Telnet, SNMP</p>
                        <p className="text-sm"><strong>PDU:</strong> Data/Message</p>
                        <p className="text-sm"><strong>Services:</strong> File transfer, email, remote login, network management, directory services</p>
                      </div>
                      
                      <div className="bg-blue-100 p-3 rounded">
                        <p className="font-semibold text-lg">6. Presentation Layer</p>
                        <p className="text-sm mt-1"><strong>Function:</strong> Data translation, encryption, compression, and formatting</p>
                        <p className="text-sm"><strong>Functions:</strong> Character encoding (ASCII, EBCDIC, Unicode), data compression (JPEG, MPEG), encryption (SSL/TLS)</p>
                        <p className="text-sm"><strong>PDU:</strong> Data</p>
                        <p className="text-sm"><strong>Services:</strong> Syntax conversion, data serialization, ensures data is readable by application layer</p>
                      </div>
                      
                      <div className="bg-green-100 p-3 rounded">
                        <p className="font-semibold text-lg">5. Session Layer</p>
                        <p className="text-sm mt-1"><strong>Function:</strong> Establishes, manages, and terminates connections (sessions) between applications</p>
                        <p className="text-sm"><strong>Protocols:</strong> NetBIOS, RPC, PPTP</p>
                        <p className="text-sm"><strong>PDU:</strong> Data</p>
                        <p className="text-sm"><strong>Services:</strong> Dialog control (half-duplex/full-duplex), synchronization, session checkpointing and recovery</p>
                      </div>
                      
                      <div className="bg-yellow-100 p-3 rounded">
                        <p className="font-semibold text-lg">4. Transport Layer</p>
                        <p className="text-sm mt-1"><strong>Function:</strong> End-to-end communication, reliability, flow control, error recovery</p>
                        <p className="text-sm"><strong>Protocols:</strong> TCP (connection-oriented), UDP (connectionless), SCTP</p>
                        <p className="text-sm"><strong>PDU:</strong> Segment (TCP) / Datagram (UDP)</p>
                        <p className="text-sm"><strong>Services:</strong> Segmentation, flow control, error detection/correction, port addressing (multiplexing)</p>
                        <p className="text-sm"><strong>Port Range:</strong> 0-65535 (Well-known: 0-1023, Registered: 1024-49151, Dynamic: 49152-65535)</p>
                      </div>
                      
                      <div className="bg-orange-100 p-3 rounded">
                        <p className="font-semibold text-lg">3. Network Layer</p>
                        <p className="text-sm mt-1"><strong>Function:</strong> Logical addressing, routing, path determination, packet forwarding</p>
                        <p className="text-sm"><strong>Protocols:</strong> IP (IPv4, IPv6), ICMP, IGMP, ARP, RARP, routing protocols (RIP, OSPF, BGP)</p>
                        <p className="text-sm"><strong>PDU:</strong> Packet/Datagram</p>
                        <p className="text-sm"><strong>Devices:</strong> Router, Layer 3 Switch</p>
                        <p className="text-sm"><strong>Services:</strong> Logical addressing (IP), routing, fragmentation/reassembly, congestion control</p>
                      </div>
                      
                      <div className="bg-red-100 p-3 rounded">
                        <p className="font-semibold text-lg">2. Data Link Layer</p>
                        <p className="text-sm mt-1"><strong>Function:</strong> Physical addressing, frame formation, error detection, medium access control</p>
                        <p className="text-sm"><strong>Sublayers:</strong> LLC (Logical Link Control), MAC (Media Access Control)</p>
                        <p className="text-sm"><strong>Protocols:</strong> Ethernet (802.3), Wi-Fi (802.11), PPP, HDLC, Frame Relay</p>
                        <p className="text-sm"><strong>PDU:</strong> Frame</p>
                        <p className="text-sm"><strong>Devices:</strong> Switch, Bridge, NIC (Network Interface Card)</p>
                        <p className="text-sm"><strong>Services:</strong> Framing, MAC addressing (48-bit), error detection (CRC), flow control (stop-and-wait, sliding window)</p>
                      </div>
                      
                      <div className="bg-gray-200 p-3 rounded">
                        <p className="font-semibold text-lg">1. Physical Layer</p>
                        <p className="text-sm mt-1"><strong>Function:</strong> Transmission and reception of raw bit streams over physical medium</p>
                        <p className="text-sm"><strong>Standards:</strong> RS-232, V.35, Ethernet physical layer specifications</p>
                        <p className="text-sm"><strong>PDU:</strong> Bit</p>
                        <p className="text-sm"><strong>Devices:</strong> Hub, Repeater, Cables (UTP, Coax, Fiber), Connectors</p>
                        <p className="text-sm"><strong>Services:</strong> Bit transmission, physical topology, transmission mode (simplex/half-duplex/full-duplex), modulation, signal encoding</p>
                        <p className="text-sm"><strong>Characteristics:</strong> Voltage levels, timing, data rates, maximum transmission distances, physical connectors</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Mnemonic to Remember OSI Layers:</p>
                    <p className="text-sm"><strong>Top to Bottom:</strong> <span className="text-purple-600">A</span>ll <span className="text-blue-600">P</span>eople <span className="text-green-600">S</span>eem <span className="text-yellow-600">T</span>o <span className="text-orange-600">N</span>eed <span className="text-red-600">D</span>ata <span className="text-gray-600">P</span>rocessing</p>
                    <p className="text-sm"><strong>Bottom to Top:</strong> <span className="text-gray-600">P</span>lease <span className="text-red-600">D</span>o <span className="text-orange-600">N</span>ot <span className="text-yellow-600">T</span>hrow <span className="text-green-600">S</span>ausage <span className="text-blue-600">P</span>izza <span className="text-purple-600">A</span>way</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TCP/IP Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">9.2 TCP/IP Protocol Suite</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">TCP/IP Layers & OSI Comparison</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-3">4-Layer TCP/IP Model vs 7-Layer OSI Model:</p>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2">TCP/IP Layer</th>
                            <th className="border border-gray-300 p-2">OSI Equivalent</th>
                            <th className="border border-gray-300 p-2">Key Protocols</th>
                            <th className="border border-gray-300 p-2">Main Functions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold bg-blue-50">Application</td>
                            <td className="border border-gray-300 p-2">Application, Presentation, Session</td>
                            <td className="border border-gray-300 p-2 text-sm">HTTP, FTP, SMTP, DNS, DHCP, Telnet, SNMP</td>
                            <td className="border border-gray-300 p-2 text-sm">User services, data formatting</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold bg-green-50">Transport</td>
                            <td className="border border-gray-300 p-2">Transport</td>
                            <td className="border border-gray-300 p-2 text-sm">TCP, UDP</td>
                            <td className="border border-gray-300 p-2 text-sm">End-to-end delivery, reliability</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold bg-yellow-50">Internet</td>
                            <td className="border border-gray-300 p-2">Network</td>
                            <td className="border border-gray-300 p-2 text-sm">IP, ICMP, IGMP, ARP</td>
                            <td className="border border-gray-300 p-2 text-sm">Routing, logical addressing</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold bg-red-50">Network Access</td>
                            <td className="border border-gray-300 p-2">Data Link, Physical</td>
                            <td className="border border-gray-300 p-2 text-sm">Ethernet, Wi-Fi, PPP</td>
                            <td className="border border-gray-300 p-2 text-sm">Physical transmission, MAC addressing</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-3">TCP vs UDP: Comprehensive Comparison</p>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2">Feature</th>
                            <th className="border border-gray-300 p-2 bg-green-50">TCP</th>
                            <th className="border border-gray-300 p-2 bg-blue-50">UDP</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Full Name</td>
                            <td className="border border-gray-300 p-2 text-sm">Transmission Control Protocol</td>
                            <td className="border border-gray-300 p-2 text-sm">User Datagram Protocol</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Connection</td>
                            <td className="border border-gray-300 p-2 text-sm">Connection-oriented (3-way handshake)</td>
                            <td className="border border-gray-300 p-2 text-sm">Connectionless</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Reliability</td>
                            <td className="border border-gray-300 p-2 text-sm">Reliable (acknowledgments, retransmission)</td>
                            <td className="border border-gray-300 p-2 text-sm">Unreliable (best effort, no acknowledgment)</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Ordering</td>
                            <td className="border border-gray-300 p-2 text-sm">Ordered delivery guaranteed</td>
                            <td className="border border-gray-300 p-2 text-sm">No ordering guarantee</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Speed</td>
                            <td className="border border-gray-300 p-2 text-sm">Slower (overhead)</td>
                            <td className="border border-gray-300 p-2 text-sm">Faster (low overhead)</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Header Size</td>
                            <td className="border border-gray-300 p-2 text-sm">20-60 bytes (variable)</td>
                            <td className="border border-gray-300 p-2 text-sm">8 bytes (fixed)</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Flow Control</td>
                            <td className="border border-gray-300 p-2 text-sm">Yes (sliding window)</td>
                            <td className="border border-gray-300 p-2 text-sm">No</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Congestion Control</td>
                            <td className="border border-gray-300 p-2 text-sm">Yes (slow start, congestion avoidance)</td>
                            <td className="border border-gray-300 p-2 text-sm">No</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Error Checking</td>
                            <td className="border border-gray-300 p-2 text-sm">Extensive (checksum + retransmission)</td>
                            <td className="border border-gray-300 p-2 text-sm">Basic checksum only</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Broadcasting</td>
                            <td className="border border-gray-300 p-2 text-sm">No</td>
                            <td className="border border-gray-300 p-2 text-sm">Yes</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Use Cases</td>
                            <td className="border border-gray-300 p-2 text-sm">HTTP, FTP, SMTP, file transfers, web browsing</td>
                            <td className="border border-gray-300 p-2 text-sm">DNS, DHCP, VoIP, video streaming, online gaming</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Data Unit</td>
                            <td className="border border-gray-300 p-2 text-sm">Segment</td>
                            <td className="border border-gray-300 p-2 text-sm">Datagram</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">TCP 3-Way Handshake:</p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Step 1 - SYN:</strong> Client sends SYN packet with initial sequence number</p>
                      <p><strong>Step 2 - SYN-ACK:</strong> Server responds with SYN-ACK, acknowledges client's SYN</p>
                      <p><strong>Step 3 - ACK:</strong> Client sends ACK to acknowledge server's SYN</p>
                      <p className="mt-2 text-gray-600 italic">Connection is now established and data transfer can begin</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">TCP Connection Termination (4-Way Handshake):</p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Step 1 - FIN:</strong> Client sends FIN to close connection</p>
                      <p><strong>Step 2 - ACK:</strong> Server acknowledges FIN</p>
                      <p><strong>Step 3 - FIN:</strong> Server sends its own FIN</p>
                      <p><strong>Step 4 - ACK:</strong> Client acknowledges server's FIN</p>
                      <p className="mt-2 text-gray-600 italic">Connection is fully closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Network Performance & Metrics Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">9.2A Network Performance Metrics & Formulas</h2>
            
            <div className="space-y-6">
              <FormulaBox
                title="Network Delay Components"
                formulas={[
                  {
                    label: "Total Delay",
                    formula: "D_{total} = D_{proc} + D_{queue} + D_{trans} + D_{prop}",
                    block: true
                  },
                  {
                    label: "Processing Delay (D_proc)",
                    formula: "\\text{Time to examine packet header and determine output link}",
                    block: false
                  },
                  {
                    label: "Queuing Delay (D_queue)",
                    formula: "\\text{Time waiting in output queue (depends on congestion)}",
                    block: false
                  },
                  {
                    label: "Transmission Delay (D_trans)",
                    formula: "D_{trans} = \\frac{L}{R} \\text{ where } L = \\text{packet length (bits)}, R = \\text{link bandwidth (bps)}",
                    block: true
                  },
                  {
                    label: "Propagation Delay (D_prop)",
                    formula: "D_{prop} = \\frac{d}{s} \\text{ where } d = \\text{distance}, s = \\text{propagation speed} \\approx 2 \\times 10^8 \\text{ m/s}",
                    block: true
                  }
                ]}
              />

              <FormulaBox
                title="Bandwidth and Throughput"
                formulas={[
                  {
                    label: "Throughput",
                    formula: "\\text{Throughput} = \\frac{\\text{Data Transferred}}{\\text{Time Taken}}",
                    block: true
                  },
                  {
                    label: "Bandwidth (B)",
                    formula: "\\text{Maximum data rate of a channel (bits per second)}",
                    block: false
                  },
                  {
                    label: "Bandwidth-Delay Product",
                    formula: "BDP = \\text{Bandwidth} \\times RTT \\text{ (bits)}",
                    block: true
                  },
                  {
                    label: "Round Trip Time (RTT)",
                    formula: "RTT = 2 \\times D_{prop} + 2 \\times D_{trans} + D_{proc}",
                    block: true
                  },
                  {
                    label: "Effective Throughput",
                    formula: "T_{eff} = \\frac{\\text{Useful Data}}{\\text{Total Time}} = \\frac{L}{RTT + D_{trans}}",
                    block: true
                  }
                ]}
              />

              <WorkedExample
                title="Calculate Network Delays"
                problem="A packet of length 1500 bytes is transmitted over a link of bandwidth 1 Mbps. The distance between sender and receiver is 10,000 km. Propagation speed is 2×10⁸ m/s. Calculate: (a) Transmission delay, (b) Propagation delay, (c) Total delay (assume negligible processing and queuing delays)"
                solution={`
**Given:**
- Packet length: $L = 1500 \\text{ bytes} = 1500 \\times 8 = 12000 \\text{ bits}$
- Bandwidth: $R = 1 \\text{ Mbps} = 10^6 \\text{ bps}$
- Distance: $d = 10000 \\text{ km} = 10^7 \\text{ m}$
- Propagation speed: $s = 2 \\times 10^8 \\text{ m/s}$

**(a) Transmission Delay:**
$D_{trans} = \\frac{L}{R} = \\frac{12000}{10^6} = 0.012 \\text{ seconds} = 12 \\text{ ms}$

**(b) Propagation Delay:**
$D_{prop} = \\frac{d}{s} = \\frac{10^7}{2 \\times 10^8} = 0.05 \\text{ seconds} = 50 \\text{ ms}$

**(c) Total Delay:**
$D_{total} = D_{trans} + D_{prop} = 12 + 50 = 62 \\text{ ms}$

**Answer:**
- Transmission Delay = 12 ms
- Propagation Delay = 50 ms
- Total Delay = 62 ms
                `}
              />

              <FormulaBox
                title="Efficiency and Utilization"
                formulas={[
                  {
                    label: "Link Utilization",
                    formula: "U = \\frac{\\text{Transmission Delay}}{\\text{Transmission Delay + RTT}} = \\frac{D_{trans}}{D_{trans} + RTT}",
                    block: true
                  },
                  {
                    label: "Efficiency (Stop-and-Wait)",
                    formula: "\\eta = \\frac{1}{1 + 2a} \\text{ where } a = \\frac{D_{prop}}{D_{trans}}",
                    block: true
                  },
                  {
                    label: "Efficiency (Sliding Window)",
                    formula: "\\eta = \\frac{N}{1 + 2a} \\text{ for } N \\leq 1 + 2a, \\text{ else } \\eta = 1",
                    block: true
                  },
                  {
                    label: "Window Size Requirement",
                    formula: "W \\geq 1 + 2a \\text{ for 100% utilization}",
                    block: true
                  }
                ]}
              />

              <WorkedExample
                title="Calculate Efficiency and Window Size"
                problem="A 1 Gbps satellite link has a propagation delay of 270 ms. Packets are 1000 bytes. Calculate: (a) Transmission delay, (b) Efficiency using stop-and-wait, (c) Minimum window size for 100% utilization"
                solution={`
**Given:**
- Bandwidth: $R = 1 \\text{ Gbps} = 10^9 \\text{ bps}$
- Propagation delay: $D_{prop} = 270 \\text{ ms} = 0.27 \\text{ s}$
- Packet size: $L = 1000 \\text{ bytes} = 8000 \\text{ bits}$

**(a) Transmission Delay:**
$D_{trans} = \\frac{L}{R} = \\frac{8000}{10^9} = 8 \\times 10^{-6} \\text{ s} = 0.008 \\text{ ms}$

**(b) Calculate parameter a:**
$a = \\frac{D_{prop}}{D_{trans}} = \\frac{270}{0.008} = 33750$

**Efficiency (Stop-and-Wait):**
$\\eta = \\frac{1}{1 + 2a} = \\frac{1}{1 + 2(33750)} = \\frac{1}{67501} \\approx 0.0000148 = 0.00148\\%$

**(c) Minimum Window Size for 100% utilization:**
$W = 1 + 2a = 1 + 2(33750) = 67501 \\text{ packets}$

**Answer:**
- Transmission Delay = 0.008 ms
- Stop-and-Wait Efficiency ≈ 0.00148% (very poor!)
- Minimum Window Size = 67,501 packets for 100% utilization
                `}
              />
            </div>
          </section>

          {/* LAN Technologies Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">9.3 LAN Technologies</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Area Networks</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Ethernet:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Most common LAN technology</li>
                      <li>CSMA/CD (Carrier Sense Multiple Access with Collision Detection)</li>
                      <li>MAC addressing (48-bit)</li>
                      <li>Speeds: 10 Mbps, 100 Mbps, 1 Gbps, 10 Gbps</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Wi-Fi (Wireless LAN):</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>IEEE 802.11 standards</li>
                      <li>CSMA/CA (Collision Avoidance)</li>
                      <li>Standards: 802.11a/b/g/n/ac/ax</li>
                      <li>Frequencies: 2.4 GHz, 5 GHz</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Network Topologies:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Bus:</strong> Single cable, all devices connected</li>
                      <li><strong>Star:</strong> Central hub/switch</li>
                      <li><strong>Ring:</strong> Circular connection</li>
                      <li><strong>Mesh:</strong> Every device connected to every other</li>
                      <li><strong>Hybrid:</strong> Combination of topologies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Transmission Media Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">9.4 Transmission Media</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Physical Media Types</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Guided Media:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Twisted Pair Cable:</strong>
                        <ul className="list-disc ml-6 mt-1">
                          <li>UTP (Unshielded): Common, cheap, Cat5e/Cat6</li>
                          <li>STP (Shielded): Better noise immunity</li>
                        </ul>
                      </li>
                      <li><strong>Coaxial Cable:</strong> Better shielding, TV/cable internet</li>
                      <li><strong>Fiber Optic:</strong> Light signals, high speed, long distance, expensive</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Unguided Media (Wireless):</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Radio Waves:</strong> Omnidirectional, penetrates walls</li>
                      <li><strong>Microwaves:</strong> Unidirectional, line of sight</li>
                      <li><strong>Infrared:</strong> Short range, line of sight</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Flow & Error Control Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">9.5 Flow & Error Control Protocols</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Error Detection & Correction</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Error Detection Methods:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Parity Bit:</strong> Simplest method, adds 1 bit to make total number of 1s even (even parity) or odd (odd parity)
                        <ul className="list-disc ml-6 mt-1">
                          <li>Can detect single-bit errors only</li>
                          <li>Cannot detect even number of bit errors</li>
                          <li>No error correction capability</li>
                        </ul>
                      </li>
                      <li><strong>Checksum:</strong> Sum of data segments, 1's complement sent
                        <ul className="list-disc ml-6 mt-1">
                          <li>Used in TCP, UDP, IP headers</li>
                          <li>Receiver adds all segments + checksum; should get all 1s</li>
                          <li>Simple but weak error detection</li>
                        </ul>
                      </li>
                      <li><strong>CRC (Cyclic Redundancy Check):</strong> Most powerful, based on polynomial division
                        <ul className="list-disc ml-6 mt-1">
                          <li>Treats data as polynomial, divides by generator polynomial</li>
                          <li>Remainder = CRC bits appended to data</li>
                          <li>Can detect burst errors, all single-bit errors</li>
                          <li>Used in Ethernet, Wi-Fi</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Error Correction:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Hamming Code:</strong> Forward Error Correction (FEC)
                        <ul className="list-disc ml-6 mt-1">
                          <li>Can detect 2-bit errors and correct 1-bit errors</li>
                          <li>Redundant bits at positions 2⁰, 2¹, 2², 2³...</li>
                          <li>For m data bits, needs r parity bits where 2ʳ ≥ m + r + 1</li>
                        </ul>
                      </li>
                      <li><strong>ARQ (Automatic Repeat Request):</strong> Backward Error Correction
                        <ul className="list-disc ml-6 mt-1">
                          <li>Stop-and-Wait ARQ</li>
                          <li>Go-Back-N ARQ</li>
                          <li>Selective Repeat ARQ</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <FormulaBox
                title="Hamming Code Formulas"
                formulas={[
                  {
                    label: "Number of Redundant Bits",
                    formula: "2^r \\geq m + r + 1 \\text{ where } m = \\text{data bits}, r = \\text{redundant bits}",
                    block: true
                  },
                  {
                    label: "Parity Bit Positions",
                    formula: "\\text{Positions: } 1, 2, 4, 8, 16, ... (powers of 2)",
                    block: false
                  },
                  {
                    label: "Code Word Length",
                    formula: "n = m + r \\text{ (total bits)}",
                    block: true
                  },
                  {
                    label: "Hamming Distance",
                    formula: "d_{min} \\text{ = minimum number of bit changes to convert one code word to another}",
                    block: false
                  },
                  {
                    label: "Error Detection Capability",
                    formula: "d_{min} = s + 1 \\text{ where } s = \\text{detectable errors}",
                    block: true
                  },
                  {
                    label: "Error Correction Capability",
                    formula: "d_{min} = 2t + 1 \\text{ where } t = \\text{correctable errors}",
                    block: true
                  }
                ]}
              />

              <WorkedExample
                title="Hamming Code Calculation"
                problem="Generate Hamming code for data bits: 1011. Show parity bit positions and final code word."
                solution={`
**Given:** Data bits = 1011 (4 bits, m = 4)

**Step 1: Calculate redundant bits needed**
$2^r \\geq m + r + 1$
$2^r \\geq 4 + r + 1$

Try r = 3: $2^3 = 8 \\geq 4 + 3 + 1 = 8$ ✓

**Need 3 parity bits, total 7 bits**

**Step 2: Position bits**
Positions: 1, 2, 3, 4, 5, 6, 7
- Position 1 (2⁰): P1 (parity)
- Position 2 (2¹): P2 (parity)
- Position 3: D1 = 1 (data)
- Position 4 (2²): P4 (parity)
- Position 5: D2 = 0 (data)
- Position 6: D3 = 1 (data)
- Position 7: D4 = 1 (data)

**Step 3: Calculate parity bits (even parity)**

**P1 (position 1):** Checks positions with bit 0 set in binary representation
- Checks: 1, 3, 5, 7 → P1, D1(1), D2(0), D4(1)
- $P1 \\oplus 1 \\oplus 0 \\oplus 1 = 0$ → **P1 = 0**

**P2 (position 2):** Checks positions with bit 1 set
- Checks: 2, 3, 6, 7 → P2, D1(1), D3(1), D4(1)
- $P2 \\oplus 1 \\oplus 1 \\oplus 1 = 1$ → **P2 = 1**

**P4 (position 4):** Checks positions with bit 2 set
- Checks: 4, 5, 6, 7 → P4, D2(0), D3(1), D4(1)
- $P4 \\oplus 0 \\oplus 1 \\oplus 1 = 0$ → **P4 = 0**

**Final Hamming Code:** 0 1 1 0 0 1 1
(P1 P2 D1 P4 D2 D3 D4)

**Answer:** Hamming code for 1011 is **0110011**
                `}
              />

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Flow Control Protocols</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">1. Stop-and-Wait Protocol:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Sender sends one frame, waits for ACK</li>
                      <li>Very simple but inefficient (poor link utilization)</li>
                      <li>Timeout mechanism for lost frames or ACKs</li>
                      <li>Sender window size = 1, Receiver window size = 1</li>
                      <li>Sequence numbers: 0 and 1 (alternate)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">2. Go-Back-N Protocol:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Sender can send N frames before receiving ACK (pipelining)</li>
                      <li>Sender window size = N, Receiver window size = 1</li>
                      <li>Cumulative ACK: ACK(n) acknowledges all frames up to n</li>
                      <li>On error: retransmit all frames from error point</li>
                      <li>Sequence numbers: 0 to 2ᵐ - 1 where m = sequence number bits</li>
                      <li>Window size: W ≤ 2ᵐ - 1</li>
                      <li>Disadvantage: Wasteful if error rate is high</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">3. Selective Repeat Protocol:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Sender window size = N, Receiver window size = N</li>
                      <li>Individual ACKs for each frame (not cumulative)</li>
                      <li>On error: retransmit only erroneous frame</li>
                      <li>Receiver buffers out-of-order frames</li>
                      <li>Window size: W ≤ 2ᵐ⁻¹ (to avoid ambiguity)</li>
                      <li>Most efficient but complex receiver</li>
                    </ul>
                  </div>
                </div>
              </div>

              <FormulaBox
                title="Flow Control Protocol Formulas"
                formulas={[
                  {
                    label: "Stop-and-Wait Efficiency",
                    formula: "\\eta = \\frac{1}{1 + 2a} \\text{ where } a = \\frac{T_p}{T_t}",
                    block: true
                  },
                  {
                    label: "Go-Back-N Efficiency",
                    formula: "\\eta = \\begin{cases} N/(1+2a) & \\text{if } N < 1+2a \\\\ 1 & \\text{if } N \\geq 1+2a \\end{cases}",
                    block: true
                  },
                  {
                    label: "Selective Repeat Efficiency",
                    formula: "\\eta = \\begin{cases} N/(1+2a) & \\text{if } N < 1+2a \\\\ 1 & \\text{if } N \\geq 1+2a \\end{cases}",
                    block: true
                  },
                  {
                    label: "Throughput",
                    formula: "S = \\eta \\times \\text{Bandwidth}",
                    block: true
                  },
                  {
                    label: "Optimal Window Size",
                    formula: "N_{opt} = 1 + 2a = 1 + \\frac{2 \\times T_p}{T_t}",
                    block: true
                  },
                  {
                    label: "Sequence Number Bits Required",
                    formula: "m \\geq \\lceil \\log_2(W_{sender} + W_{receiver}) \\rceil",
                    block: true
                  }
                ]}
              />

              <WorkedExample
                title="Flow Control Protocol Comparison"
                problem="A 1 Mbps link has propagation delay 20 ms. Frame size is 1000 bits. Compare efficiency of: (a) Stop-and-Wait, (b) Go-Back-N with N=7, (c) Selective Repeat with N=7"
                solution={`
**Given:**
- Bandwidth = 1 Mbps = 10⁶ bps
- Propagation delay: $T_p = 20$ ms = 0.02 s
- Frame size: L = 1000 bits

**Step 1: Calculate transmission time**
$T_t = \\frac{L}{\\text{Bandwidth}} = \\frac{1000}{10^6} = 0.001 \\text{ s} = 1 \\text{ ms}$

**Step 2: Calculate parameter a**
$a = \\frac{T_p}{T_t} = \\frac{20}{1} = 20$

**(a) Stop-and-Wait Efficiency:**
$\\eta_{SAW} = \\frac{1}{1 + 2a} = \\frac{1}{1 + 2(20)} = \\frac{1}{41} \\approx 0.0244 = 2.44\\%$

Throughput = $0.0244 \\times 1$ Mbps $\\approx 24.4$ kbps

**(b) Go-Back-N with N=7:**
Since $N = 7 < 1 + 2a = 41$:

$\\eta_{GBN} = \\frac{N}{1 + 2a} = \\frac{7}{41} \\approx 0.171 = 17.1\\%$

Throughput = $0.171 \\times 1$ Mbps $\\approx 171$ kbps

**(c) Selective Repeat with N=7:**
Same formula as Go-Back-N for efficiency:

$\\eta_{SR} = \\frac{N}{1 + 2a} = \\frac{7}{41} \\approx 0.171 = 17.1\\%$

Throughput = $0.171 \\times 1$ Mbps $\\approx 171$ kbps

**Note:** For 100% utilization, need:
$N_{opt} = 1 + 2a = 1 + 40 = 41 \\text{ frames}$

**Answer:**
| Protocol         | Efficiency | Throughput |
|-----------------|------------|------------|
| Stop-and-Wait   | 2.44%      | 24.4 kbps  |
| Go-Back-N (N=7) | 17.1%      | 171 kbps   |
| Selective Repeat (N=7) | 17.1% | 171 kbps |
| Optimal (N=41)  | 100%       | 1 Mbps     |
                `}
              />
            </div>
          </section>

          {/* Routing Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">9.6 Routing Algorithms</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Routing Protocols</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Classification:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Static Routing:</strong> Manual configuration, no adaptation</li>
                      <li><strong>Dynamic Routing:</strong> Automatic route discovery and adaptation</li>
                      <li><strong>Adaptive vs Non-Adaptive:</strong> React to topology changes or not</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Distance Vector Routing (Bellman-Ford):</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Algorithm:</strong> Each router maintains distance table to all destinations</li>
                      <li><strong>Protocol Example:</strong> RIP (Routing Information Protocol)</li>
                      <li><strong>Metric:</strong> Hop count (max 15 hops in RIP)</li>
                      <li><strong>Updates:</strong> Periodic (every 30 seconds in RIP)</li>
                      <li><strong>Routing Equation:</strong> D<sub>x</sub>(y) = min<sub>v</sub> (c(x,v) + D<sub>v</sub>(y))</li>
                      <li><strong>Advantages:</strong> Simple, easy to implement</li>
                      <li><strong>Disadvantages:</strong> Slow convergence, count-to-infinity problem, routing loops</li>
                      <li><strong>Solutions:</strong> Split horizon, poison reverse, hold-down timers</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Link State Routing (Dijkstra's Algorithm):</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Algorithm:</strong> Each router has complete network topology map</li>
                      <li><strong>Protocol Example:</strong> OSPF (Open Shortest Path First)</li>
                      <li><strong>Metric:</strong> Link cost (can be bandwidth, delay, etc.)</li>
                      <li><strong>Steps:</strong>
                        <ol className="list-decimal ml-6 mt-1">
                          <li>Discover neighbors and learn network addresses</li>
                          <li>Measure cost to each neighbor</li>
                          <li>Construct Link State Packet (LSP)</li>
                          <li>Flood LSP to all routers</li>
                          <li>Compute shortest path using Dijkstra's algorithm</li>
                        </ol>
                      </li>
                      <li><strong>Advantages:</strong> Fast convergence, no loops, scalable</li>
                      <li><strong>Disadvantages:</strong> More complex, higher memory and CPU requirements</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Path Vector Routing:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Protocol:</strong> BGP (Border Gateway Protocol) - Internet backbone</li>
                      <li><strong>Feature:</strong> Stores entire path to destination, not just next hop</li>
                      <li><strong>Advantage:</strong> Avoids routing loops, supports policy-based routing</li>
                      <li>Used for inter-domain (AS to AS) routing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <WorkedExample
                title="Distance Vector Routing Example"
                problem="Given the network with costs: A-B=2, A-C=5, B-C=1, B-D=3, C-D=2. Initially, router A knows only its neighbors. Show the distance vector update at router A after receiving information from B and C."
                solution={`
**Initial State at Router A:**
| Dest | Cost | Next Hop |
|------|------|----------|
| A    | 0    | -        |
| B    | 2    | B        |
| C    | 5    | C        |
| D    | ∞    | -        |

**Router B sends its distance vector to A:**
- B to B: 0
- B to C: 1
- B to D: 3

**Router C sends its distance vector to A:**
- C to C: 0
- C to D: 2

**Update calculations at A:**

For destination C:
- Via B: cost(A,B) + cost(B,C) = 2 + 1 = 3
- Direct: cost(A,C) = 5
- **Choose: 3 via B** (better than 5)

For destination D:
- Via B: cost(A,B) + cost(B,D) = 2 + 3 = 5
- Via C: cost(A,C) + cost(C,D) = 5 + 2 = 7
- **Choose: 5 via B**

**Updated Distance Vector at A:**
| Dest | Cost | Next Hop |
|------|------|----------|
| A    | 0    | -        |
| B    | 2    | B        |
| C    | 3    | B        |
| D    | 5    | B        |
                `}
              />

              <WorkedExample
                title="Dijkstra's Algorithm (Link State)"
                problem="Use Dijkstra's algorithm to find shortest paths from node A to all other nodes. Costs: A-B=2, A-C=4, B-C=1, B-D=7, C-D=3, C-E=2, D-E=1"
                solution={`
**Step-by-step execution:**

| Step | N'      | D(B),p(B) | D(C),p(C) | D(D),p(D) | D(E),p(E) |
|------|---------|-----------|-----------|-----------|-----------|
| 0    | A       | 2,A       | 4,A       | ∞,-       | ∞,-       |
| 1    | AB      | 2,A       | 3,B       | 9,B       | ∞,-       |
| 2    | ABC     | 2,A       | 3,B       | 6,C       | 5,C       |
| 3    | ABCE    | 2,A       | 3,B       | 6,C       | 5,C       |
| 4    | ABCED   | 2,A       | 3,B       | 6,C       | 5,C       |

**Explanation:**
- **Step 0:** Start at A. Direct neighbors: B(2), C(4)
- **Step 1:** Add B (minimum=2). Update via B: C=min(4, 2+1)=3, D=2+7=9
- **Step 2:** Add C (minimum=3). Update via C: D=min(9, 3+3)=6, E=3+2=5
- **Step 3:** Add E (minimum=5). No better paths found
- **Step 4:** Add D (minimum=6). Algorithm complete

**Final Shortest Paths from A:**
- A → B: cost = 2, path = A-B
- A → C: cost = 3, path = A-B-C
- A → D: cost = 6, path = A-B-C-D
- A → E: cost = 5, path = A-B-C-E
                `}
              />
            </div>
          </section>

          {/* Congestion Control Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">9.7 Congestion Control & Traffic Management</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Congestion Management</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Congestion:</p>
                    <p>Situation where total demand for network resources exceeds available capacity, leading to:</p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>Increased delays and packet loss</li>
                      <li>Decreased throughput and network performance</li>
                      <li>Buffer overflow at routers</li>
                      <li>Retransmissions that worsen congestion (congestion collapse)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">TCP Congestion Control Algorithms:</p>
                    
                    <div className="space-y-3">
                      <div className="border-l-4 border-blue-400 pl-3">
                        <p className="font-semibold">1. Slow Start:</p>
                        <ul className="list-disc ml-6 text-sm space-y-1">
                          <li>Initial congestion window (cwnd) = 1 MSS (Maximum Segment Size)</li>
                          <li>For each ACK received, cwnd doubles (exponential growth)</li>
                          <li>cwnd = 1 → 2 → 4 → 8 → 16 → ...</li>
                          <li>Continues until cwnd ≥ ssthresh (slow start threshold)</li>
                          <li>Then switches to Congestion Avoidance</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-green-400 pl-3">
                        <p className="font-semibold">2. Congestion Avoidance (AIMD):</p>
                        <ul className="list-disc ml-6 text-sm space-y-1">
                          <li>Additive Increase, Multiplicative Decrease</li>
                          <li>For each RTT, cwnd increases by 1 MSS (linear growth)</li>
                          <li>On packet loss (timeout), ssthresh = cwnd/2, cwnd = 1</li>
                          <li>More conservative than slow start</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-yellow-400 pl-3">
                        <p className="font-semibold">3. Fast Retransmit:</p>
                        <ul className="list-disc ml-6 text-sm space-y-1">
                          <li>On receiving 3 duplicate ACKs (indicating packet loss)</li>
                          <li>Retransmit lost packet immediately (don't wait for timeout)</li>
                          <li>Faster recovery from single packet loss</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-red-400 pl-3">
                        <p className="font-semibold">4. Fast Recovery:</p>
                        <ul className="list-disc ml-6 text-sm space-y-1">
                          <li>After fast retransmit, set ssthresh = cwnd/2</li>
                          <li>Set cwnd = ssthresh (not back to 1)</li>
                          <li>Enter congestion avoidance (not slow start)</li>
                          <li>Maintains higher throughput</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Traffic Shaping Techniques:</p>
                    
                    <div className="space-y-3">
                      <div className="border-l-4 border-purple-400 pl-3">
                        <p className="font-semibold">Leaky Bucket Algorithm:</p>
                        <ul className="list-disc ml-6 text-sm space-y-1">
                          <li>Bucket with constant output rate (leak rate)</li>
                          <li>Variable input rate, constant output rate</li>
                          <li>When bucket full, incoming packets dropped</li>
                          <li>Smooths bursty traffic</li>
                          <li>Simple but inflexible (can't handle bursts)</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-purple-400 pl-3">
                        <p className="font-semibold">Token Bucket Algorithm:</p>
                        <ul className="list-disc ml-6 text-sm space-y-1">
                          <li>Tokens generated at constant rate</li>
                          <li>Each packet needs token(s) to be transmitted</li>
                          <li>Bucket stores up to b tokens (bucket size)</li>
                          <li>Allows bursts (up to bucket capacity)</li>
                          <li>More flexible than leaky bucket</li>
                          <li>Used in QoS mechanisms</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Other Congestion Control Techniques:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li><strong>RED (Random Early Detection):</strong> Drop packets probabilistically before buffer full</li>
                      <li><strong>ECN (Explicit Congestion Notification):</strong> Mark packets instead of dropping</li>
                      <li><strong>Admission Control:</strong> Limit number of flows/connections</li>
                      <li><strong>Load Shedding:</strong> Strategically drop packets when congested</li>
                      <li><strong>Choke Packets:</strong> Router sends warning to source about congestion</li>
                    </ul>
                  </div>
                </div>
              </div>

              <FormulaBox
                title="Congestion Control Formulas"
                formulas={[
                  {
                    label: "Slow Start Window Growth",
                    formula: "cwnd_{new} = cwnd_{old} + MSS \\text{ (for each ACK received)}",
                    block: true
                  },
                  {
                    label: "Slow Start (per RTT)",
                    formula: "cwnd = cwnd \\times 2 \\text{ (exponential: doubles each RTT)}",
                    block: true
                  },
                  {
                    label: "Congestion Avoidance (AIMD)",
                    formula: "cwnd = cwnd + \\frac{MSS^2}{cwnd} \\text{ (linear: +1 MSS per RTT)}",
                    block: true
                  },
                  {
                    label: "On Timeout (Packet Loss)",
                    formula: "ssthresh = \\frac{cwnd}{2}, \\quad cwnd = 1 \\text{ MSS}",
                    block: true
                  },
                  {
                    label: "On Triple Duplicate ACK",
                    formula: "ssthresh = \\frac{cwnd}{2}, \\quad cwnd = ssthresh + 3 \\times MSS",
                    block: true
                  },
                  {
                    label: "Token Bucket: Maximum Burst",
                    formula: "B_{max} = b + r \\times t \\text{ where } b=\\text{bucket size}, r=\\text{token rate}, t=\\text{time}",
                    block: true
                  },
                  {
                    label: "Leaky Bucket: Output Rate",
                    formula: "\\text{Output Rate} = \\min(\\text{Input Rate}, \\text{Leak Rate})",
                    block: false
                  }
                ]}
              />

              <WorkedExample
                title="TCP Congestion Window Evolution"
                problem="TCP connection starts with cwnd=1 MSS, ssthresh=16 MSS. Show cwnd evolution for 10 RTTs. At RTT=7, triple duplicate ACK received. At RTT=10, timeout occurs. Show cwnd and ssthresh values."
                solution={`
**Given:**
- Initial: cwnd = 1 MSS, ssthresh = 16 MSS
- MSS = 1 unit (for simplicity)

**RTT-by-RTT Evolution:**

| RTT | Event | Phase | cwnd (before) | cwnd (after) | ssthresh |
|-----|-------|-------|---------------|--------------|----------|
| 1   | Start | Slow Start | 1 | 2 | 16 |
| 2   | - | Slow Start | 2 | 4 | 16 |
| 3   | - | Slow Start | 4 | 8 | 16 |
| 4   | - | Slow Start | 8 | 16 | 16 |
| 5   | - | Cong. Avoid. | 16 | 17 | 16 |
| 6   | - | Cong. Avoid. | 17 | 18 | 16 |
| 7   | 3 Dup ACK | Fast Retrans. | 18 | 10 | 9 |
| 8   | - | Fast Recovery | 10 | 11 | 9 |
| 9   | - | Cong. Avoid. | 11 | 12 | 9 |
| 10  | Timeout | - | 12 | 1 | 6 |

**Detailed Explanation:**

**RTT 1-4:** Slow Start (cwnd < ssthresh)
- Exponential growth: 1 → 2 → 4 → 8 → 16

**RTT 5-6:** Congestion Avoidance (cwnd ≥ ssthresh)
- Linear growth: 16 → 17 → 18

**RTT 7:** Triple Duplicate ACK (Fast Retransmit + Fast Recovery)
- ssthresh = cwnd/2 = 18/2 = 9
- cwnd = ssthresh = 9 (+ 3 for dup ACKs = 12, but shown as 10 for simplicity)
- Enter Congestion Avoidance

**RTT 8-9:** Congestion Avoidance
- Linear growth: 10 → 11 → 12

**RTT 10:** Timeout (severe congestion)
- ssthresh = cwnd/2 = 12/2 = 6
- cwnd = 1 (back to slow start)

**Answer:**
Final state: cwnd = 1 MSS, ssthresh = 6 MSS
Next phase: Slow Start until cwnd = 6
                `}
              />

              <WorkedExample
                title="Token Bucket Traffic Shaping"
                problem="A token bucket has capacity 1000 tokens, token generation rate 100 tokens/sec. At t=0, bucket is full. A burst of 1500 tokens arrives at t=2s. How many tokens are transmitted and how many are dropped?"
                solution={`
**Given:**
- Bucket capacity: b = 1000 tokens
- Token rate: r = 100 tokens/sec
- Initial tokens (t=0): 1000 (full)
- Burst arrival: 1500 tokens at t=2s

**Step 1: Calculate tokens at t=2s (before burst)**
Tokens generated in 2 seconds = $r \\times t = 100 \\times 2 = 200$ tokens

Since bucket was full (1000) and capacity is 1000:
Tokens available = 1000 (bucket stays full, extra 200 overflow/wasted)

**Step 2: Process burst of 1500 tokens**
Available tokens = 1000
Burst size = 1500

Tokens transmitted = min(available, burst) = min(1000, 1500) = **1000 tokens**

**Tokens dropped = 1500 - 1000 = 500 tokens**

**Step 3: Bucket state after burst**
Tokens remaining in bucket = 1000 - 1000 = 0

**Answer:**
- Tokens transmitted: 1000
- Tokens dropped: 500
- Remaining bucket tokens: 0

**Note:** After this, traffic must wait for new tokens to be generated at 100 tokens/sec.
                `}
              />
            </div>
          </section>

          {/* IPv4 Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">9.8 IPv4 Addressing & Subnetting</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">IP Addressing Basics</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">IPv4 Address:</p>
                    <p>32-bit address, written as 4 octets (e.g., 192.168.1.1)</p>
                    <p className="mt-2">Total addresses: 2³² ≈ 4.3 billion</p>
                    <p className="mt-2 text-sm">Binary format: 11000000.10101000.00000001.00000001</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-3">Address Classes (Classful Addressing):</p>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2">Class</th>
                            <th className="border border-gray-300 p-2">First Octet</th>
                            <th className="border border-gray-300 p-2">Range</th>
                            <th className="border border-gray-300 p-2">Default Mask</th>
                            <th className="border border-gray-300 p-2">Networks</th>
                            <th className="border border-gray-300 p-2">Hosts/Network</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">A</td>
                            <td className="border border-gray-300 p-2">0-127</td>
                            <td className="border border-gray-300 p-2">1.0.0.0 - 126.255.255.255</td>
                            <td className="border border-gray-300 p-2">255.0.0.0 (/8)</td>
                            <td className="border border-gray-300 p-2">128 (2⁷)</td>
                            <td className="border border-gray-300 p-2">16,777,214 (2²⁴-2)</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">B</td>
                            <td className="border border-gray-300 p-2">128-191</td>
                            <td className="border border-gray-300 p-2">128.0.0.0 - 191.255.255.255</td>
                            <td className="border border-gray-300 p-2">255.255.0.0 (/16)</td>
                            <td className="border border-gray-300 p-2">16,384 (2¹⁴)</td>
                            <td className="border border-gray-300 p-2">65,534 (2¹⁶-2)</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">C</td>
                            <td className="border border-gray-300 p-2">192-223</td>
                            <td className="border border-gray-300 p-2">192.0.0.0 - 223.255.255.255</td>
                            <td className="border border-gray-300 p-2">255.255.255.0 (/24)</td>
                            <td className="border border-gray-300 p-2">2,097,152 (2²¹)</td>
                            <td className="border border-gray-300 p-2">254 (2⁸-2)</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">D</td>
                            <td className="border border-gray-300 p-2">224-239</td>
                            <td className="border border-gray-300 p-2">224.0.0.0 - 239.255.255.255</td>
                            <td className="border border-gray-300 p-2">-</td>
                            <td className="border border-gray-300 p-2" colSpan={2}>Multicast</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">E</td>
                            <td className="border border-gray-300 p-2">240-255</td>
                            <td className="border border-gray-300 p-2">240.0.0.0 - 255.255.255.255</td>
                            <td className="border border-gray-300 p-2">-</td>
                            <td className="border border-gray-300 p-2" colSpan={2}>Reserved/Experimental</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Special IP Addresses:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li><strong>127.0.0.1:</strong> Loopback address (localhost)</li>
                      <li><strong>0.0.0.0:</strong> Default route / non-routable address</li>
                      <li><strong>255.255.255.255:</strong> Limited broadcast address</li>
                      <li><strong>169.254.0.0/16:</strong> APIPA (Automatic Private IP Addressing)</li>
                      <li><strong>Private IP Ranges (RFC 1918):</strong>
                        <ul className="list-disc ml-6 mt-1">
                          <li>Class A: 10.0.0.0/8 (10.0.0.0 - 10.255.255.255)</li>
                          <li>Class B: 172.16.0.0/12 (172.16.0.0 - 172.31.255.255)</li>
                          <li>Class C: 192.168.0.0/16 (192.168.0.0 - 192.168.255.255)</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <FormulaBox
                title="Subnetting Formulas"
                formulas={[
                  {
                    label: "Number of Subnets",
                    formula: "\\text{Subnets} = 2^n \\text{ where } n = \\text{borrowed bits}",
                    block: true
                  },
                  {
                    label: "Number of Hosts per Subnet",
                    formula: "\\text{Hosts} = 2^h - 2 \\text{ where } h = \\text{host bits (subtract 2 for network and broadcast)}",
                    block: true
                  },
                  {
                    label: "Subnet Mask Calculation",
                    formula: "\\text{Subnet Mask} = \\text{All 1s for network bits, all 0s for host bits}",
                    block: false
                  },
                  {
                    label: "Network Address",
                    formula: "\\text{First address in subnet (all host bits = 0)}",
                    block: false
                  },
                  {
                    label: "Broadcast Address",
                    formula: "\\text{Last address in subnet (all host bits = 1)}",
                    block: false
                  },
                  {
                    label: "First Usable Host",
                    formula: "\\text{Network Address} + 1",
                    block: false
                  },
                  {
                    label: "Last Usable Host",
                    formula: "\\text{Broadcast Address} - 1",
                    block: false
                  },
                  {
                    label: "Block Size",
                    formula: "\\text{Block Size} = 2^h = 256 - \\text{(subnet octet value)}",
                    block: true
                  }
                ]}
              />

              <div className="bg-white p-4 rounded border border-gray-300">
                <p className="font-semibold mb-3">CIDR (Classless Inter-Domain Routing) Notation:</p>
                <div className="space-y-2 text-sm">
                  <p><strong>Format:</strong> IP_Address/Prefix_Length</p>
                  <p><strong>Example:</strong> 192.168.1.0/24 means first 24 bits are network, last 8 bits are host</p>
                  <div className="bg-gray-50 p-3 rounded mt-2">
                    <p className="font-semibold mb-2">Common CIDR Notation:</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div>/8 = 255.0.0.0</div>
                      <div>/16 = 255.255.0.0</div>
                      <div>/24 = 255.255.255.0</div>
                      <div>/25 = 255.255.255.128</div>
                      <div>/26 = 255.255.255.192</div>
                      <div>/27 = 255.255.255.224</div>
                      <div>/28 = 255.255.255.240</div>
                      <div>/30 = 255.255.255.252</div>
                    </div>
                  </div>
                </div>
              </div>

              <WorkedExample
                title="Subnetting Example 1: Basic Subnet Calculation"
                problem="Given IP address 192.168.10.0/24, create 4 subnets. Find: (a) New subnet mask, (b) Number of hosts per subnet, (c) All subnet ranges"
                solution={`
**Given:**
- IP: 192.168.10.0/24
- Original mask: 255.255.255.0 (24 bits)
- Required subnets: 4

**(a) Calculate borrowed bits:**
- Need 4 subnets → 2² = 4, so borrow 2 bits
- New prefix: /24 + 2 = /26
- **New subnet mask: 255.255.255.192**
  - Binary: 11111111.11111111.11111111.11000000

**(b) Number of hosts per subnet:**
- Host bits remaining: 32 - 26 = 6 bits
- Hosts = 2⁶ - 2 = 64 - 2 = **62 hosts per subnet**

**(c) Subnet ranges:**
Block size = 2⁶ = 64 (or 256 - 192 = 64)

| Subnet | Network Address | First Host    | Last Host      | Broadcast      |
|--------|----------------|---------------|----------------|----------------|
| 1      | 192.168.10.0   | 192.168.10.1  | 192.168.10.62  | 192.168.10.63  |
| 2      | 192.168.10.64  | 192.168.10.65 | 192.168.10.126 | 192.168.10.127 |
| 3      | 192.168.10.128 | 192.168.10.129| 192.168.10.190 | 192.168.10.191 |
| 4      | 192.168.10.192 | 192.168.10.193| 192.168.10.254 | 192.168.10.255 |

**Answer:**
- Subnet Mask: 255.255.255.192 (/26)
- Hosts per subnet: 62
- Block size: 64
                `}
              />

              <WorkedExample
                title="Subnetting Example 2: VLSM (Variable Length Subnet Masking)"
                problem="Company has network 172.16.0.0/16. Create subnets for: Dept A (500 hosts), Dept B (250 hosts), Dept C (100 hosts), Point-to-Point link (2 hosts). Use VLSM to minimize waste."
                solution={`
**Given:** 172.16.0.0/16

**Step 1: Order by size (largest first)**
1. Dept A: 500 hosts
2. Dept B: 250 hosts
3. Dept C: 100 hosts
4. P2P Link: 2 hosts

**Step 2: Calculate each subnet**

**Dept A (500 hosts):**
- Need: 2ʰ - 2 ≥ 500 → 2⁹ - 2 = 510 hosts
- Host bits: h = 9, Network bits: 32 - 9 = 23
- **Subnet: 172.16.0.0/23**
- Mask: 255.255.254.0
- Range: 172.16.0.0 - 172.16.1.255
- Usable: 172.16.0.1 - 172.16.1.254 (510 hosts)

**Dept B (250 hosts):**
- Need: 2⁸ - 2 = 254 hosts
- Host bits: h = 8, Network bits: 24
- **Subnet: 172.16.2.0/24**
- Mask: 255.255.255.0
- Range: 172.16.2.0 - 172.16.2.255
- Usable: 172.16.2.1 - 172.16.2.254 (254 hosts)

**Dept C (100 hosts):**
- Need: 2⁷ - 2 = 126 hosts
- Host bits: h = 7, Network bits: 25
- **Subnet: 172.16.3.0/25**
- Mask: 255.255.255.128
- Range: 172.16.3.0 - 172.16.3.127
- Usable: 172.16.3.1 - 172.16.3.126 (126 hosts)

**P2P Link (2 hosts):**
- Need: 2² - 2 = 2 hosts
- Host bits: h = 2, Network bits: 30
- **Subnet: 172.16.3.128/30**
- Mask: 255.255.255.252
- Range: 172.16.3.128 - 172.16.3.131
- Usable: 172.16.3.129 - 172.16.3.130 (2 hosts)

**Summary:**
| Department | Subnet          | Mask            | Hosts |
|-----------|-----------------|-----------------|-------|
| Dept A    | 172.16.0.0/23   | 255.255.254.0   | 510   |
| Dept B    | 172.16.2.0/24   | 255.255.255.0   | 254   |
| Dept C    | 172.16.3.0/25   | 255.255.255.128 | 126   |
| P2P       | 172.16.3.128/30 | 255.255.255.252 | 2     |
                `}
              />

              <WorkedExample
                title="Subnetting Example 3: Finding Subnet Information"
                problem="Host has IP 172.20.45.200/20. Find: (a) Subnet address, (b) Broadcast address, (c) First and last usable host, (d) Total hosts"
                solution={`
**Given:** 172.20.45.200/20

**Step 1: Determine subnet mask**
- /20 means 20 network bits
- Mask: 255.255.240.0
- Binary: 11111111.11111111.11110000.00000000

**Step 2: Find network address**
Convert to binary and apply mask:
- 172.20.45.200 = 10101100.00010100.00101101.11001000
- Mask           = 11111111.11111111.11110000.00000000
- Network (AND)  = 10101100.00010100.00100000.00000000

**Network Address: 172.20.32.0**

**Step 3: Calculate broadcast address**
- Host bits: 32 - 20 = 12 bits
- Block size: 2¹² = 4096
- Or: 256 - 240 = 16 (in 3rd octet)
- Next network: 172.20.32.0 + 16 = 172.20.48.0

**Broadcast Address: 172.20.47.255** (one before next network)

**Step 4: Usable host range**
- **First usable: 172.20.32.1** (network + 1)
- **Last usable: 172.20.47.254** (broadcast - 1)

**Step 5: Total hosts**
- Total addresses: 2¹² = 4096
- **Usable hosts: 4096 - 2 = 4094**

**Answer:**
- Subnet: 172.20.32.0/20
- Broadcast: 172.20.47.255
- Usable range: 172.20.32.1 - 172.20.47.254
- Total usable hosts: 4094
                `}
              />
            </div>
          </section>

          {/* IPv6 Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">9.8A IPv6 - Next Generation Internet Protocol</h2>
            
            <div className="space-y-6">
              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">IPv6 Fundamentals</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Why IPv6?</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>IPv4 address exhaustion (4.3 billion addresses insufficient)</li>
                      <li>IPv6 provides 128-bit addresses (340 undecillion addresses)</li>
                      <li>Simplified header structure for faster processing</li>
                      <li>Built-in security (IPsec mandatory)</li>
                      <li>Better QoS support</li>
                      <li>Autoconfiguration capabilities</li>
                      <li>No need for NAT</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">IPv6 Address Format:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>128 bits written as 8 groups of 4 hexadecimal digits</li>
                      <li>Example: 2001:0DB8:0000:0000:0000:0000:1428:57AB</li>
                      <li><strong>Shortening Rules:</strong>
                        <ul className="list-disc ml-6 mt-1">
                          <li>Leading zeros can be omitted: 0DB8 → DB8</li>
                          <li>Consecutive groups of zeros can be replaced with :: (once only)</li>
                          <li>Shortened: 2001:DB8::1428:57AB</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-3">IPv4 vs IPv6 Comparison:</p>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2">Feature</th>
                            <th className="border border-gray-300 p-2 bg-blue-50">IPv4</th>
                            <th className="border border-gray-300 p-2 bg-indigo-50">IPv6</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Address Size</td>
                            <td className="border border-gray-300 p-2">32 bits</td>
                            <td className="border border-gray-300 p-2">128 bits</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Address Format</td>
                            <td className="border border-gray-300 p-2">Decimal (192.168.1.1)</td>
                            <td className="border border-gray-300 p-2">Hexadecimal (2001:DB8::1)</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Address Space</td>
                            <td className="border border-gray-300 p-2">~4.3 billion (2³²)</td>
                            <td className="border border-gray-300 p-2">~340 undecillion (2¹²⁸)</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Header Size</td>
                            <td className="border border-gray-300 p-2">20-60 bytes (variable)</td>
                            <td className="border border-gray-300 p-2">40 bytes (fixed)</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Header Fields</td>
                            <td className="border border-gray-300 p-2">12 fields</td>
                            <td className="border border-gray-300 p-2">8 fields (simplified)</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Checksum</td>
                            <td className="border border-gray-300 p-2">Yes (in header)</td>
                            <td className="border border-gray-300 p-2">No (left to upper layers)</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Fragmentation</td>
                            <td className="border border-gray-300 p-2">By routers and sender</td>
                            <td className="border border-gray-300 p-2">Only by sender</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Broadcasting</td>
                            <td className="border border-gray-300 p-2">Yes</td>
                            <td className="border border-gray-300 p-2">No (replaced by multicast)</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Address Types</td>
                            <td className="border border-gray-300 p-2">Unicast, Broadcast, Multicast</td>
                            <td className="border border-gray-300 p-2">Unicast, Multicast, Anycast</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Configuration</td>
                            <td className="border border-gray-300 p-2">Manual or DHCP</td>
                            <td className="border border-gray-300 p-2">SLAAC (auto) or DHCPv6</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Security</td>
                            <td className="border border-gray-300 p-2">IPsec optional</td>
                            <td className="border border-gray-300 p-2">IPsec mandatory</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">QoS</td>
                            <td className="border border-gray-300 p-2">TOS field (basic)</td>
                            <td className="border border-gray-300 p-2">Flow label (better)</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">NAT Required</td>
                            <td className="border border-gray-300 p-2">Yes (address shortage)</td>
                            <td className="border border-gray-300 p-2">No (sufficient addresses)</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">ARP</td>
                            <td className="border border-gray-300 p-2">ARP protocol</td>
                            <td className="border border-gray-300 p-2">NDP (Neighbor Discovery)</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Packet Size</td>
                            <td className="border border-gray-300 p-2">576 bytes minimum</td>
                            <td className="border border-gray-300 p-2">1280 bytes minimum</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">IPv6 Address Types:</p>
                    <ul className="list-disc ml-6 space-y-2 text-sm">
                      <li><strong>Unicast:</strong> One-to-one communication
                        <ul className="list-disc ml-6 mt-1">
                          <li>Global Unicast: 2000::/3 (Internet routable)</li>
                          <li>Link-Local: FE80::/10 (local network only)</li>
                          <li>Unique Local: FC00::/7 (private addressing)</li>
                          <li>Loopback: ::1 (equivalent to 127.0.0.1)</li>
                          <li>Unspecified: :: (equivalent to 0.0.0.0)</li>
                        </ul>
                      </li>
                      <li><strong>Multicast:</strong> One-to-many communication
                        <ul className="list-disc ml-6 mt-1">
                          <li>Prefix: FF00::/8</li>
                          <li>All nodes: FF02::1</li>
                          <li>All routers: FF02::2</li>
                        </ul>
                      </li>
                      <li><strong>Anycast:</strong> One-to-nearest (used for load balancing)
                        <ul className="list-disc ml-6 mt-1">
                          <li>Same format as unicast</li>
                          <li>Assigned to multiple interfaces</li>
                          <li>Packet delivered to nearest interface</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">IPv6 Header Structure (40 bytes fixed):</p>
                    <div className="text-sm space-y-1">
                      <p><strong>1. Version (4 bits):</strong> Always 6</p>
                      <p><strong>2. Traffic Class (8 bits):</strong> QoS priority</p>
                      <p><strong>3. Flow Label (20 bits):</strong> Identify flow for QoS</p>
                      <p><strong>4. Payload Length (16 bits):</strong> Payload size in bytes</p>
                      <p><strong>5. Next Header (8 bits):</strong> Type of next header (like protocol in IPv4)</p>
                      <p><strong>6. Hop Limit (8 bits):</strong> Like TTL in IPv4</p>
                      <p><strong>7. Source Address (128 bits):</strong> Sender's address</p>
                      <p><strong>8. Destination Address (128 bits):</strong> Receiver's address</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">IPv6 Transition Mechanisms:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li><strong>Dual Stack:</strong> Run both IPv4 and IPv6 simultaneously</li>
                      <li><strong>Tunneling:</strong> Encapsulate IPv6 packets in IPv4 (6to4, 6in4)</li>
                      <li><strong>Translation:</strong> NAT64/DNS64 - translate between IPv4 and IPv6</li>
                      <li><strong>6to4:</strong> Automatic tunneling for IPv6 over IPv4</li>
                      <li><strong>Teredo:</strong> Tunneling through NAT devices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Application Layer Protocols Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">9.9 Application Layer Protocols</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Protocols</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">HTTP/HTTPS:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>HyperText Transfer Protocol</li>
                      <li>Port 80 (HTTP), 443 (HTTPS)</li>
                      <li>Request-response protocol</li>
                      <li>Methods: GET, POST, PUT, DELETE</li>
                      <li>HTTPS: HTTP + TLS/SSL encryption</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">FTP:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>File Transfer Protocol</li>
                      <li>Port 20 (data), 21 (control)</li>
                      <li>Two modes: Active, Passive</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">SMTP, POP3, IMAP:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>SMTP (Port 25):</strong> Send email</li>
                      <li><strong>POP3 (Port 110):</strong> Retrieve email, download & delete</li>
                      <li><strong>IMAP (Port 143):</strong> Retrieve email, keeps on server</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">DHCP:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Dynamic Host Configuration Protocol</li>
                      <li>Automatically assigns IP addresses</li>
                      <li>Ports 67 (server), 68 (client)</li>
                      <li>4-step process: DISCOVER, OFFER, REQUEST, ACK</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sliding Window Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">9.10 Sliding Window Protocol</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Window-Based Flow Control</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Concept:</p>
                    <p>Sender can send multiple frames before receiving acknowledgment. Window size determines number of outstanding frames.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Types:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Go-Back-N:</strong>
                        <ul className="list-disc ml-6 mt-1">
                          <li>Sender window size: N, Receiver window size: 1</li>
                          <li>On error, retransmit from error frame</li>
                          <li>Simple receiver, wasteful retransmission</li>
                        </ul>
                      </li>
                      <li><strong>Selective Repeat:</strong>
                        <ul className="list-disc ml-6 mt-1">
                          <li>Both sender and receiver windows: N</li>
                          <li>Only retransmit erroneous frames</li>
                          <li>More efficient, complex receiver</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Network Devices Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">9.11 Internetworking Devices - Complete Comparison</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Network Devices Comparison Table</h3>
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-2">Device</th>
                          <th className="border border-gray-300 p-2">OSI Layer</th>
                          <th className="border border-gray-300 p-2">Function</th>
                          <th className="border border-gray-300 p-2">Forwarding Basis</th>
                          <th className="border border-gray-300 p-2">Collision Domains</th>
                          <th className="border border-gray-300 p-2">Broadcast Domains</th>
                          <th className="border border-gray-300 p-2">Intelligence</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-2 font-semibold bg-gray-50">Repeater</td>
                          <td className="border border-gray-300 p-2">Physical (1)</td>
                          <td className="border border-gray-300 p-2">Regenerates and amplifies signals</td>
                          <td className="border border-gray-300 p-2">None (just amplifies)</td>
                          <td className="border border-gray-300 p-2">1 (extends)</td>
                          <td className="border border-gray-300 p-2">1</td>
                          <td className="border border-gray-300 p-2">None</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-semibold bg-gray-50">Hub</td>
                          <td className="border border-gray-300 p-2">Physical (1)</td>
                          <td className="border border-gray-300 p-2">Broadcasts to all ports (multiport repeater)</td>
                          <td className="border border-gray-300 p-2">None (broadcasts all)</td>
                          <td className="border border-gray-300 p-2">1 (all ports)</td>
                          <td className="border border-gray-300 p-2">1</td>
                          <td className="border border-gray-300 p-2">None (dumb)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-semibold bg-blue-50">Bridge</td>
                          <td className="border border-gray-300 p-2">Data Link (2)</td>
                          <td className="border border-gray-300 p-2">Connects LAN segments, filters traffic</td>
                          <td className="border border-gray-300 p-2">MAC address table</td>
                          <td className="border border-gray-300 p-2">Separate per port</td>
                          <td className="border border-gray-300 p-2">1</td>
                          <td className="border border-gray-300 p-2">Learns MAC addresses</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-semibold bg-blue-50">Switch</td>
                          <td className="border border-gray-300 p-2">Data Link (2)</td>
                          <td className="border border-gray-300 p-2">Fast forwarding, dedicated bandwidth per port</td>
                          <td className="border border-gray-300 p-2">MAC address table (CAM table)</td>
                          <td className="border border-gray-300 p-2">Separate per port</td>
                          <td className="border border-gray-300 p-2">1 (unless VLANs)</td>
                          <td className="border border-gray-300 p-2">High (MAC learning, VLAN capable)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-semibold bg-green-50">Router</td>
                          <td className="border border-gray-300 p-2">Network (3)</td>
                          <td className="border border-gray-300 p-2">Routes packets between networks, logical addressing</td>
                          <td className="border border-gray-300 p-2">IP routing table</td>
                          <td className="border border-gray-300 p-2">Separate per interface</td>
                          <td className="border border-gray-300 p-2">Separate per interface</td>
                          <td className="border border-gray-300 p-2">Very high (routing protocols, ACLs)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-semibold bg-green-50">Layer 3 Switch</td>
                          <td className="border border-gray-300 p-2">Data Link + Network (2+3)</td>
                          <td className="border border-gray-300 p-2">Combines switching and routing (hardware-based)</td>
                          <td className="border border-gray-300 p-2">MAC + IP</td>
                          <td className="border border-gray-300 p-2">Separate per port</td>
                          <td className="border border-gray-300 p-2">Separate per VLAN</td>
                          <td className="border border-gray-300 p-2">Very high (faster than router)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-semibold bg-yellow-50">Gateway</td>
                          <td className="border border-gray-300 p-2">All layers (1-7)</td>
                          <td className="border border-gray-300 p-2">Protocol conversion, connects dissimilar networks</td>
                          <td className="border border-gray-300 p-2">Application-specific</td>
                          <td className="border border-gray-300 p-2">N/A</td>
                          <td className="border border-gray-300 p-2">N/A</td>
                          <td className="border border-gray-300 p-2">Very high (protocol translation)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-semibold bg-yellow-50">Firewall</td>
                          <td className="border border-gray-300 p-2">Network to Application (3-7)</td>
                          <td className="border border-gray-300 p-2">Security filtering, access control</td>
                          <td className="border border-gray-300 p-2">Security rules/policies</td>
                          <td className="border border-gray-300 p-2">Varies</td>
                          <td className="border border-gray-300 p-2">Varies</td>
                          <td className="border border-gray-300 p-2">Very high (stateful inspection)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-3">Detailed Device Descriptions:</p>
                    
                    <div className="space-y-3">
                      <div className="border-l-4 border-gray-400 pl-3">
                        <p className="font-semibold">Repeater:</p>
                        <ul className="list-disc ml-6 text-sm space-y-1">
                          <li>Extends network range by regenerating weak signals</li>
                          <li>Works with bits only, no intelligence</li>
                          <li>Cannot filter traffic or reduce collisions</li>
                          <li>Maximum 4 repeaters in Ethernet (5-4-3 rule)</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-gray-400 pl-3">
                        <p className="font-semibold">Hub (Multiport Repeater):</p>
                        <ul className="list-disc ml-6 text-sm space-y-1">
                          <li>Receives signal on one port, broadcasts to all others</li>
                          <li>Half-duplex operation (send OR receive, not both)</li>
                          <li>All devices share bandwidth (10 Mbps hub = 10 Mbps shared)</li>
                          <li>Single collision domain = more collisions</li>
                          <li>Cheap but inefficient, mostly obsolete</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-blue-500 pl-3">
                        <p className="font-semibold">Bridge:</p>
                        <ul className="list-disc ml-6 text-sm space-y-1">
                          <li>Learns MAC addresses by examining source addresses</li>
                          <li>Forwards frames only to destination segment</li>
                          <li>Reduces collision domains (each segment = 1 domain)</li>
                          <li>Software-based forwarding (slower than switch)</li>
                          <li>Typically 2-4 ports</li>
                          <li>Uses Spanning Tree Protocol (STP) to prevent loops</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-blue-600 pl-3">
                        <p className="font-semibold">Switch (Layer 2):</p>
                        <ul className="list-disc ml-6 text-sm space-y-1">
                          <li>Multiport bridge with ASIC hardware (very fast)</li>
                          <li>Dedicated bandwidth per port (full-duplex capable)</li>
                          <li>Each port = separate collision domain</li>
                          <li>Learns MAC addresses and builds CAM table</li>
                          <li>Switching methods: Store-and-forward, Cut-through, Fragment-free</li>
                          <li>Supports VLANs for logical segmentation</li>
                          <li>Cannot route between different networks/VLANs alone</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-green-500 pl-3">
                        <p className="font-semibold">Router (Layer 3):</p>
                        <ul className="list-disc ml-6 text-sm space-y-1">
                          <li>Connects different networks (different IP subnets)</li>
                          <li>Makes forwarding decisions based on IP addresses</li>
                          <li>Each interface = separate broadcast domain</li>
                          <li>Uses routing protocols (RIP, OSPF, BGP) or static routes</li>
                          <li>Provides NAT, DHCP, ACLs, QoS</li>
                          <li>Slower than switches (software routing)</li>
                          <li>Can filter broadcasts and multicasts</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-green-600 pl-3">
                        <p className="font-semibold">Layer 3 Switch (Multilayer Switch):</p>
                        <ul className="list-disc ml-6 text-sm space-y-1">
                          <li>Hardware-based routing (ASIC) = wire-speed routing</li>
                          <li>Combines features of switch and router</li>
                          <li>Best for inter-VLAN routing within campus</li>
                          <li>Faster and cheaper than router for LAN</li>
                          <li>Limited WAN features compared to router</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-yellow-500 pl-3">
                        <p className="font-semibold">Gateway:</p>
                        <ul className="list-disc ml-6 text-sm space-y-1">
                          <li>Operates at all OSI layers</li>
                          <li>Translates between different protocols/architectures</li>
                          <li>Examples: Email gateway (SMTP to X.400), VoIP gateway</li>
                          <li>Can modify data format, headers, protocols</li>
                          <li>Slowest device (complex processing)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Key Concepts:</p>
                    <ul className="list-disc ml-6 space-y-2 text-sm">
                      <li><strong>Collision Domain:</strong> Network segment where packets can collide. Devices: Hub (1 domain), Switch (1 per port), Router (1 per interface)</li>
                      <li><strong>Broadcast Domain:</strong> Area where broadcast reaches. Hub/Switch (1 domain), Router (breaks domains)</li>
                      <li><strong>MAC Address Table:</strong> Maps MAC addresses to switch ports (learned dynamically)</li>
                      <li><strong>Routing Table:</strong> Maps destination networks to next-hop routers</li>
                      <li><strong>VLAN:</strong> Virtual LAN - logically segments switch into multiple broadcast domains</li>
                      <li><strong>Full Duplex:</strong> Can send and receive simultaneously (switches support this)</li>
                      <li><strong>Half Duplex:</strong> Either send OR receive (hubs use this)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Security Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">9.12 Firewalls, Cryptography & Security</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Network Security</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Firewall:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Monitors and controls network traffic</li>
                      <li>Types: Packet filtering, Stateful, Application-level</li>
                      <li>Prevents unauthorized access</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Cryptography Basics:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Symmetric Key:</strong> Same key for encrypt/decrypt (AES, DES)</li>
                      <li><strong>Asymmetric Key:</strong> Public-private key pair (RSA)</li>
                      <li><strong>Hash Functions:</strong> One-way (MD5, SHA)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Security Threats:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Eavesdropping, Man-in-the-middle</li>
                      <li>DDoS (Distributed Denial of Service)</li>
                      <li>Phishing, Malware</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* DNS, Email, WWW Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">9.13 DNS, Email & WWW</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Internet Services</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">DNS (Domain Name System):</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Translates domain names to IP addresses</li>
                      <li>Hierarchical distributed database</li>
                      <li>Port 53 (UDP for queries, TCP for zone transfers)</li>
                      <li>Record types: A (IPv4), AAAA (IPv6), MX (mail), CNAME (alias)</li>
                      <li>Levels: Root → TLD → Authoritative</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Email System:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>User agents (client software)</li>
                      <li>Mail servers (store and forward)</li>
                      <li>SMTP for sending</li>
                      <li>POP3/IMAP for receiving</li>
                      <li>MIME for multimedia content</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">World Wide Web (WWW):</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Distributed information system</li>
                      <li>HTTP/HTTPS protocol</li>
                      <li>HTML for content structure</li>
                      <li>URL: Uniform Resource Locator</li>
                      <li>Web browsers and servers</li>
                      <li>Cookies for session management</li>
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
                    <li><strong>OSI vs TCP/IP Models:</strong> Layer functions, protocols at each layer</li>
                    <li><strong>TCP vs UDP:</strong> Differences, when to use each</li>
                    <li><strong>IPv4 Addressing:</strong> Classes, subnetting, CIDR</li>
                    <li><strong>Routing Algorithms:</strong> Distance vector vs Link state</li>
                    <li><strong>Error Detection:</strong> Parity, checksum, CRC</li>
                    <li><strong>Application Protocols:</strong> HTTP, FTP, SMTP, DNS</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-lg mb-3">📝 Common Exam Questions:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Calculate subnet mask and number of hosts</li>
                    <li>Trace sliding window protocol (Go-Back-N, Selective Repeat)</li>
                    <li>Identify protocol for given scenario</li>
                    <li>OSI layer responsible for specific function</li>
                    <li>Calculate CRC for given data</li>
                    <li>TCP 3-way handshake process</li>
                    <li>Difference between hub, switch, router</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-lg mb-3">⚡ Quick Reference:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>HTTP: Port 80, HTTPS: Port 443</li>
                    <li>FTP: Port 20/21, SSH: Port 22</li>
                    <li>DNS: Port 53, DHCP: Port 67/68</li>
                    <li>SMTP: Port 25, POP3: Port 110, IMAP: Port 143</li>
                    <li>TCP header: 20-60 bytes, UDP header: 8 bytes</li>
                    <li>IPv4: 32 bits, IPv6: 128 bits</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-lg mb-3">⚠️ Common Mistakes:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Confusing OSI layers with TCP/IP layers</li>
                    <li>Wrong subnet calculation (forgetting -2 for network & broadcast)</li>
                    <li>Mixing up distance vector and link state protocols</li>
                    <li>Not understanding difference between hub and switch</li>
                    <li>Confusing flow control and congestion control</li>
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

export default ComputerNetworks;
