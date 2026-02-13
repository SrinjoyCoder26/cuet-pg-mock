import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">9.1 OSI Model</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7-Layer OSI Model</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Open Systems Interconnection Model:</p>
                    <p className="text-sm mb-3">Conceptual framework for network communication protocols in 7 layers.</p>
                    <div className="space-y-2">
                      <div className="bg-purple-100 p-2 rounded">
                        <p className="font-semibold">7. Application Layer</p>
                        <p className="text-sm">Network services to applications (HTTP, FTP, SMTP, DNS)</p>
                      </div>
                      <div className="bg-blue-100 p-2 rounded">
                        <p className="font-semibold">6. Presentation Layer</p>
                        <p className="text-sm">Data translation, encryption, compression</p>
                      </div>
                      <div className="bg-green-100 p-2 rounded">
                        <p className="font-semibold">5. Session Layer</p>
                        <p className="text-sm">Session establishment, maintenance, termination</p>
                      </div>
                      <div className="bg-yellow-100 p-2 rounded">
                        <p className="font-semibold">4. Transport Layer</p>
                        <p className="text-sm">End-to-end communication (TCP, UDP)</p>
                      </div>
                      <div className="bg-orange-100 p-2 rounded">
                        <p className="font-semibold">3. Network Layer</p>
                        <p className="text-sm">Routing, logical addressing (IP, ICMP, ARP)</p>
                      </div>
                      <div className="bg-red-100 p-2 rounded">
                        <p className="font-semibold">2. Data Link Layer</p>
                        <p className="text-sm">Physical addressing, error detection (MAC, LLC)</p>
                      </div>
                      <div className="bg-gray-200 p-2 rounded">
                        <p className="font-semibold">1. Physical Layer</p>
                        <p className="text-sm">Transmission of raw bits (cables, signals)</p>
                      </div>
                    </div>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">TCP/IP Layers</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">4-Layer Model:</p>
                    <div className="space-y-2">
                      <div className="bg-blue-100 p-2 rounded">
                        <p className="font-semibold">Application Layer</p>
                        <p className="text-sm">HTTP, FTP, SMTP, DNS, Telnet, SNMP</p>
                      </div>
                      <div className="bg-green-100 p-2 rounded">
                        <p className="font-semibold">Transport Layer</p>
                        <p className="text-sm">TCP (reliable), UDP (unreliable but fast)</p>
                      </div>
                      <div className="bg-yellow-100 p-2 rounded">
                        <p className="font-semibold">Internet Layer</p>
                        <p className="text-sm">IP, ICMP, IGMP, ARP</p>
                      </div>
                      <div className="bg-red-100 p-2 rounded">
                        <p className="font-semibold">Network Access Layer</p>
                        <p className="text-sm">Ethernet, Wi-Fi, PPP</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">TCP (Transmission Control Protocol):</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Connection-oriented</li>
                      <li>Reliable, ordered delivery</li>
                      <li>Flow control, congestion control</li>
                      <li>3-way handshake: SYN, SYN-ACK, ACK</li>
                      <li>Header size: 20-60 bytes</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">UDP (User Datagram Protocol):</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Connectionless</li>
                      <li>Unreliable, no ordering guarantee</li>
                      <li>No flow/congestion control</li>
                      <li>Faster, lower overhead</li>
                      <li>Header size: 8 bytes</li>
                      <li>Used for: DNS, DHCP, streaming, gaming</li>
                    </ul>
                  </div>
                </div>
              </div>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">9.5 Flow & Error Control</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Error Detection & Correction</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Error Detection:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Parity Bit:</strong> Simple, detects single bit errors</li>
                      <li><strong>Checksum:</strong> Sum of data, detects errors</li>
                      <li><strong>CRC (Cyclic Redundancy Check):</strong> Polynomial division, very reliable</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Error Correction:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Hamming Code:</strong> Can detect and correct single-bit errors</li>
                      <li><strong>ARQ (Automatic Repeat Request):</strong> Retransmission on error</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Flow Control:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Stop-and-Wait:</strong> Send one frame, wait for ACK</li>
                      <li><strong>Sliding Window:</strong> Send multiple frames before ACK</li>
                      <li>Prevents sender from overwhelming receiver</li>
                    </ul>
                  </div>
                </div>
              </div>
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
                      <li><strong>Static Routing:</strong> Manual configuration</li>
                      <li><strong>Dynamic Routing:</strong> Automatic route discovery</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Distance Vector Routing:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>RIP (Routing Information Protocol)</li>
                      <li>Uses hop count as metric</li>
                      <li>Bellman-Ford algorithm</li>
                      <li>Slow convergence, count-to-infinity problem</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Link State Routing:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>OSPF (Open Shortest Path First)</li>
                      <li>Each router has complete network topology</li>
                      <li>Dijkstra's algorithm</li>
                      <li>Fast convergence, more complex</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Path Vector Routing:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>BGP (Border Gateway Protocol)</li>
                      <li>Used for inter-domain routing (Internet backbone)</li>
                      <li>Stores entire path, avoids loops</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Congestion Control Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">9.7 Congestion Control</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Congestion Management</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Congestion:</p>
                    <p>Too many packets in network causes delays and packet loss.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">TCP Congestion Control:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Slow Start:</strong> Exponentially increase window size</li>
                      <li><strong>Congestion Avoidance:</strong> Linearly increase after threshold</li>
                      <li><strong>Fast Retransmit:</strong> Retransmit on 3 duplicate ACKs</li>
                      <li><strong>Fast Recovery:</strong> Don't go back to slow start</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Techniques:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Traffic Shaping:</strong> Regulate data rate (leaky bucket, token bucket)</li>
                      <li><strong>Admission Control:</strong> Limit number of connections</li>
                      <li><strong>Load Shedding:</strong> Drop packets when congested</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* IPv4 Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">9.8 IPv4 Addressing</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">IP Addressing</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">IPv4 Address:</p>
                    <p>32-bit address, written as 4 octets (e.g., 192.168.1.1)</p>
                    <p className="mt-2">Total addresses: 2³² ≈ 4.3 billion</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Address Classes:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Class A:</strong> 0.0.0.0 - 127.255.255.255 (Large networks)</li>
                      <li><strong>Class B:</strong> 128.0.0.0 - 191.255.255.255 (Medium networks)</li>
                      <li><strong>Class C:</strong> 192.0.0.0 - 223.255.255.255 (Small networks)</li>
                      <li><strong>Class D:</strong> 224.0.0.0 - 239.255.255.255 (Multicast)</li>
                      <li><strong>Class E:</strong> 240.0.0.0 - 255.255.255.255 (Reserved)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Special Addresses:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>127.0.0.1:</strong> Loopback (localhost)</li>
                      <li><strong>0.0.0.0:</strong> Default route</li>
                      <li><strong>255.255.255.255:</strong> Broadcast</li>
                      <li><strong>Private ranges:</strong> 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Subnetting:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Divide network into smaller subnets</li>
                      <li>Subnet mask determines network/host portions</li>
                      <li>CIDR notation: 192.168.1.0/24 (24 network bits)</li>
                      <li>Number of hosts = 2^(host bits) - 2</li>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">9.11 Internetworking Devices</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Network Devices</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Hub:</p>
                    <p>Physical layer device. Broadcasts to all ports. Creates single collision domain.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Switch:</p>
                    <p>Data link layer device. Forwards based on MAC address. Each port is collision domain.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Router:</p>
                    <p>Network layer device. Routes based on IP address. Connects different networks.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Bridge:</p>
                    <p>Data link layer device. Connects two LAN segments. Filters based on MAC.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Gateway:</p>
                    <p>All layers. Protocol converter. Connects dissimilar networks.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Repeater:</p>
                    <p>Physical layer device. Regenerates signal to extend range.</p>
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
