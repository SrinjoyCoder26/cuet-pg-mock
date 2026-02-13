import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const CryptographyNetworkSecurity = () => {
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
              11
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Cryptography & Network Security</h1>
              <p className="text-gray-600">Complete notes for CUET PG MTQP04</p>
            </div>
          </div>

          {/* Security Fundamentals Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">11.1 Computer & Network Security Concepts</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Goals</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-3">CIA Triad:</p>
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-3 rounded">
                        <p className="font-semibold">Confidentiality</p>
                        <p className="text-sm">Information accessible only to authorized parties. Prevents unauthorized disclosure.</p>
                        <p className="text-sm mt-1"><strong>Mechanisms:</strong> Encryption, Access Control</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded">
                        <p className="font-semibold">Integrity</p>
                        <p className="text-sm">Information not modified by unauthorized parties. Ensures accuracy and completeness.</p>
                        <p className="text-sm mt-1"><strong>Mechanisms:</strong> Hash functions, Digital signatures</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded">
                        <p className="font-semibold">Availability</p>
                        <p className="text-sm">Information and resources available to authorized users when needed.</p>
                        <p className="text-sm mt-1"><strong>Mechanisms:</strong> Redundancy, Backup, DDoS protection</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Additional Security Goals:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Authentication:</strong> Verify identity of users/systems</li>
                      <li><strong>Non-repudiation:</strong> Cannot deny having performed action</li>
                      <li><strong>Authorization:</strong> Grant appropriate access rights</li>
                      <li><strong>Accountability:</strong> Actions traceable to responsible party</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Threats</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Types of Attacks:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Passive Attacks:</strong> Eavesdropping, traffic analysis (hard to detect)</li>
                      <li><strong>Active Attacks:</strong> Modification, denial of service, replay (easier to detect)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Common Threats:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Malware:</strong> Viruses, worms, trojans, ransomware</li>
                      <li><strong>Phishing:</strong> Fraudulent emails/websites</li>
                      <li><strong>Man-in-the-Middle:</strong> Intercept communication</li>
                      <li><strong>DDoS:</strong> Overwhelm system with traffic</li>
                      <li><strong>SQL Injection:</strong> Malicious database queries</li>
                      <li><strong>Social Engineering:</strong> Manipulate people to divulge info</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Classical Encryption Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">11.2 Classical Encryption Techniques</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Classical Ciphers</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Cryptography Terminology:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Plaintext:</strong> Original message</li>
                      <li><strong>Ciphertext:</strong> Encrypted message</li>
                      <li><strong>Encryption:</strong> Convert plaintext to ciphertext</li>
                      <li><strong>Decryption:</strong> Convert ciphertext to plaintext</li>
                      <li><strong>Key:</strong> Secret value used in encryption/decryption</li>
                      <li><strong>Cipher:</strong> Algorithm for encryption/decryption</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Classical Cipher Types:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Substitution Cipher:</strong> Replace characters with other characters</li>
                      <li><strong>Transposition Cipher:</strong> Rearrange character positions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Symmetric Cipher Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">11.3 Symmetric Cipher Model</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Symmetric Key Cryptography</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Concept:</p>
                    <p>Same key used for both encryption and decryption. Key must be kept secret.</p>
                    <p className="mt-2"><strong>Also called:</strong> Secret key, Single key, Private key cryptography</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Components:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Plaintext</li>
                      <li>Encryption algorithm</li>
                      <li>Secret key</li>
                      <li>Ciphertext</li>
                      <li>Decryption algorithm</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Requirements:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Strong encryption algorithm</li>
                      <li>Sender and receiver must obtain secret key securely</li>
                      <li>Key must remain secret</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Advantages:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Fast and efficient</li>
                      <li>Suitable for large data</li>
                      <li>Less computational overhead</li>
                    </ul>
                    <p className="font-semibold mt-3 mb-2">Disadvantages:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Key distribution problem</li>
                      <li>Need n(n-1)/2 keys for n users</li>
                      <li>No non-repudiation</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Modern Examples:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>DES (Data Encryption Standard):</strong> 56-bit key, now insecure</li>
                      <li><strong>3DES (Triple DES):</strong> Apply DES three times, 168-bit key</li>
                      <li><strong>AES (Advanced Encryption Standard):</strong> 128/192/256-bit keys, current standard</li>
                      <li><strong>Blowfish, RC4, RC5</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Caesar Cipher Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">11.4 Caesar Cipher</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Shift Cipher</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Description:</p>
                    <p>Simplest and oldest substitution cipher. Each letter shifted by fixed number of positions.</p>
                    <p className="mt-2"><strong>Named after:</strong> Julius Caesar (used shift of 3)</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Algorithm:</p>
                    <p className="mb-2"><strong>Encryption:</strong> C = (P + k) mod 26</p>
                    <p><strong>Decryption:</strong> P = (C - k) mod 26</p>
                    <p className="mt-2 text-sm">Where P = plaintext letter (0-25), C = ciphertext letter, k = shift key</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Example (k=3):</p>
                    <div className="bg-gray-50 p-3 rounded font-mono text-sm">
                      <p>Plaintext:  HELLO</p>
                      <p>Ciphertext: KHOOR</p>
                      <p className="mt-2">H→K, E→H, L→O, L→O, O→R</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Security:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Only 25 possible keys (very weak)</li>
                      <li>Vulnerable to brute force attack</li>
                      <li>Easily broken with frequency analysis</li>
                      <li>Not used in practice (historical interest only)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Playfair Cipher Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">11.5 Playfair Cipher</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Digraph Substitution</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Description:</p>
                    <p>Encrypts pairs of letters (digraphs) instead of single letters. Uses 5×5 matrix of letters.</p>
                    <p className="mt-2">Invented by Charles Wheatstone, promoted by Lyon Playfair (1854)</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Key Matrix Construction:</p>
                    <ol className="list-decimal ml-6 space-y-1">
                      <li>Choose a keyword (remove duplicates)</li>
                      <li>Fill 5×5 matrix with keyword, then remaining alphabet</li>
                      <li>Combine I and J into single cell</li>
                    </ol>
                    <p className="mt-3 font-semibold">Example with keyword "MONARCHY":</p>
                    <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
                      M O N A R<br/>
                      C H Y B D<br/>
                      E F G I/J K<br/>
                      L P Q S T<br/>
                      U V W X Z
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Encryption Rules:</p>
                    <ol className="list-decimal ml-6 space-y-2">
                      <li><strong>Same Row:</strong> Replace with letter to immediate right (wrap around)
                        <p className="text-sm ml-4">AR → RM</p>
                      </li>
                      <li><strong>Same Column:</strong> Replace with letter immediately below (wrap around)
                        <p className="text-sm ml-4">MU → CA</p>
                      </li>
                      <li><strong>Rectangle:</strong> Replace with letter in same row but other corner
                        <p className="text-sm ml-4">HS → DY (or YD)</p>
                      </li>
                      <li><strong>Repeated Letters:</strong> Insert filler (usually X) between them
                        <p className="text-sm ml-4">BALLOON → BA LX LO ON</p>
                      </li>
                      <li><strong>Odd Length:</strong> Add filler at end</li>
                    </ol>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Security:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Stronger than simple substitution</li>
                      <li>26² = 676 possible digraphs</li>
                      <li>Resists simple frequency analysis</li>
                      <li>Still vulnerable to advanced cryptanalysis</li>
                      <li>Used in WWI and WWII</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Hill Cipher Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">11.6 Hill Cipher</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Matrix-Based Cipher</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Description:</p>
                    <p>Polygraphic substitution cipher using linear algebra. Invented by Lester S. Hill (1929).</p>
                    <p className="mt-2">Encrypts blocks of letters using matrix multiplication.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Concept:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Uses m×m key matrix (invertible mod 26)</li>
                      <li>Plaintext divided into blocks of m letters</li>
                      <li>Each block treated as vector, multiplied by key matrix</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Algorithm (m=2):</p>
                    <p className="mb-2"><strong>Encryption:</strong></p>
                    <div className="bg-gray-50 p-3 rounded font-mono text-sm">
                      C = K × P (mod 26)<br/>
                      <br/>
                      [c₁]   [k₁₁ k₁₂]   [p₁]<br/>
                      [c₂] = [k₂₁ k₂₂] × [p₂] (mod 26)
                    </div>
                    <p className="mt-3"><strong>Decryption:</strong></p>
                    <div className="bg-gray-50 p-3 rounded font-mono text-sm">
                      P = K⁻¹ × C (mod 26)
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Example (2×2 matrix):</p>
                    <div className="bg-gray-50 p-3 rounded text-sm">
                      <p className="font-semibold">Key Matrix K:</p>
                      <div className="font-mono">
                        [3  3]<br/>
                        [2  5]
                      </div>
                      <p className="mt-2 font-semibold">Encrypt "HELP":</p>
                      <p className="font-mono">
                        HE → [7, 4] → [3×7+3×4, 2×7+5×4] mod 26<br/>
                        → [33, 34] mod 26 → [7, 8] → HI
                      </p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Key Requirements:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Matrix must be invertible modulo 26</li>
                      <li>Determinant must be coprime with 26 (gcd = 1)</li>
                      <li>Determinant ≠ 0, 2, 13 (mod 26)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Security:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Resistant to frequency analysis</li>
                      <li>Vulnerable to known-plaintext attack</li>
                      <li>First practical polygraphic cipher</li>
                      <li>Theoretical basis for modern ciphers</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Advantages:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Completely hides single-letter frequencies</li>
                      <li>Easy to implement with linear algebra</li>
                      <li>Can use larger block sizes for more security</li>
                    </ul>
                    <p className="font-semibold mt-3 mb-2">Disadvantages:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Weak against known-plaintext attacks</li>
                      <li>Key matrix must be carefully chosen</li>
                      <li>Computationally intensive for large blocks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Modern Cryptography Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">11.7 Modern Cryptography Overview</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Contemporary Encryption</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Asymmetric Key Cryptography:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Uses pair of keys: public and private</li>
                      <li>Public key for encryption, private for decryption</li>
                      <li>Solves key distribution problem</li>
                      <li><strong>Examples:</strong> RSA, ECC, Diffie-Hellman</li>
                      <li>Slower than symmetric, used for key exchange</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Hash Functions:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>One-way function: easy to compute, hard to reverse</li>
                      <li>Fixed-size output for any input</li>
                      <li>Used for integrity verification</li>
                      <li><strong>Examples:</strong> MD5 (128-bit), SHA-1 (160-bit), SHA-256</li>
                      <li>Collision resistant</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Digital Signatures:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Provides authentication and non-repudiation</li>
                      <li>Sign with private key, verify with public key</li>
                      <li>Ensures message integrity</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Hybrid Cryptosystems:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Combine symmetric and asymmetric encryption</li>
                      <li>Use asymmetric to exchange symmetric key</li>
                      <li>Use symmetric to encrypt actual data</li>
                      <li>Best of both: security and performance</li>
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
                    <li><strong>CIA Triad:</strong> Confidentiality, Integrity, Availability</li>
                    <li><strong>Classical Ciphers:</strong> Caesar, Playfair, Hill - algorithms and examples</li>
                    <li><strong>Symmetric vs Asymmetric:</strong> Differences, advantages, disadvantages</li>
                    <li><strong>Security Threats:</strong> Types of attacks and countermeasures</li>
                    <li><strong>Cipher Techniques:</strong> Be able to manually encrypt/decrypt</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-lg mb-3">📝 Common Exam Questions:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Encrypt/decrypt using Caesar cipher with given key</li>
                    <li>Create Playfair matrix from keyword</li>
                    <li>Encrypt digraphs using Playfair cipher</li>
                    <li>Perform Hill cipher encryption with 2×2 matrix</li>
                    <li>Explain difference between symmetric and asymmetric encryption</li>
                    <li>Identify security goals violated in given scenario</li>
                    <li>Compare classical cipher security</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-lg mb-3">⚡ Quick Reference:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Caesar: C = (P + k) mod 26, P = (C - k) mod 26</li>
                    <li>Playfair: 5×5 matrix, encrypts digraphs, I/J combined</li>
                    <li>Hill: Matrix multiplication, C = K×P mod 26</li>
                    <li>Substitution: Replace characters</li>
                    <li>Transposition: Rearrange positions</li>
                    <li>Symmetric: Same key, fast, key distribution problem</li>
                    <li>Asymmetric: Key pair, slow, solves key distribution</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-lg mb-3">⚠️ Common Mistakes:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Wrong modulo arithmetic in Caesar cipher</li>
                    <li>Forgetting to handle repeated letters in Playfair</li>
                    <li>Incorrect rectangle rule application in Playfair</li>
                    <li>Matrix multiplication errors in Hill cipher</li>
                    <li>Confusing encryption and decryption formulas</li>
                    <li>Not checking if Hill cipher key matrix is invertible</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-lg mb-3">💡 Practice Tips:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Practice manual encryption/decryption for each cipher</li>
                    <li>Memorize encryption/decryption formulas</li>
                    <li>Understand modulo arithmetic (A=0, B=1, ..., Z=25)</li>
                    <li>Practice creating Playfair matrices quickly</li>
                    <li>Know matrix multiplication and inversion for Hill cipher</li>
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

export default CryptographyNetworkSecurity;
