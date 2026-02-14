import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import FormulaBox from "@/components/diagrams/FormulaBox";
import WorkedExample from "@/components/diagrams/WorkedExample";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const DataScience = () => {
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
              12
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Data Science</h1>
              <p className="text-gray-600">Complete notes for CUET PG MTQP04</p>
            </div>
          </div>

          {/* Basic Concepts Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">12.1 Introduction to Data Science</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What is Data Science?</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Data Science:</strong> Interdisciplinary field that uses scientific methods, algorithms, and systems to extract knowledge and insights from data.</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Key Components:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Mathematics & Statistics:</strong> Foundation for analysis</li>
                      <li><strong>Computer Science:</strong> Algorithms and programming</li>
                      <li><strong>Domain Knowledge:</strong> Understanding specific field</li>
                      <li><strong>Data Engineering:</strong> Managing and processing data</li>
                      <li><strong>Machine Learning:</strong> Automated pattern recognition</li>
                      <li><strong>Visualization:</strong> Communicating insights</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Data Science Process:</p>
                    <ol className="list-decimal ml-6 space-y-1">
                      <li><strong>Problem Definition:</strong> Understand business problem</li>
                      <li><strong>Data Collection:</strong> Gather relevant data</li>
                      <li><strong>Data Preprocessing:</strong> Clean and prepare data</li>
                      <li><strong>Exploratory Analysis:</strong> Understand patterns</li>
                      <li><strong>Modeling:</strong> Build predictive models</li>
                      <li><strong>Evaluation:</strong> Assess model performance</li>
                      <li><strong>Deployment:</strong> Put model into production</li>
                      <li><strong>Monitoring:</strong> Track performance over time</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Types of Data Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">12.2 Types of Data</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Structured vs Unstructured Data</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Structured Data:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Organized in predefined format (rows and columns)</li>
                      <li>Easily searchable and analyzable</li>
                      <li>Stored in relational databases (SQL)</li>
                      <li><strong>Examples:</strong> Spreadsheets, databases, CSV files</li>
                      <li>Quantitative data with clear schema</li>
                      <li>~20% of all data</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Unstructured Data:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>No predefined format or organization</li>
                      <li>Difficult to search and analyze</li>
                      <li>Requires specialized tools (NoSQL, text mining)</li>
                      <li><strong>Examples:</strong> Text documents, images, videos, audio, social media, emails</li>
                      <li>Qualitative data, rich information</li>
                      <li>~80% of all data</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Semi-Structured Data:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Partial organization with tags/markers</li>
                      <li><strong>Examples:</strong> JSON, XML, HTML, log files</li>
                      <li>Self-describing structure</li>
                      <li>More flexible than structured, more organized than unstructured</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Types by Nature</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Quantitative Data (Numerical):</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Discrete:</strong> Countable values (number of students, items sold)</li>
                      <li><strong>Continuous:</strong> Measurable values (height, temperature, time)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Qualitative Data (Categorical):</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Nominal:</strong> Categories without order (colors, gender, city)</li>
                      <li><strong>Ordinal:</strong> Categories with order (ratings, education level, size)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Data Representation Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">12.3 Data Representation</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Representing Data</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Common Formats:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Tables:</strong> Rows and columns (relational)</li>
                      <li><strong>Matrices:</strong> 2D arrays of numbers</li>
                      <li><strong>Vectors:</strong> 1D arrays</li>
                      <li><strong>Graphs/Networks:</strong> Nodes and edges</li>
                      <li><strong>Time Series:</strong> Temporal sequences</li>
                      <li><strong>Trees:</strong> Hierarchical structures</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">File Formats:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>CSV:</strong> Comma-separated values, simple tabular</li>
                      <li><strong>JSON:</strong> JavaScript Object Notation, hierarchical</li>
                      <li><strong>XML:</strong> Extensible Markup Language, tagged</li>
                      <li><strong>Parquet:</strong> Columnar storage, efficient</li>
                      <li><strong>HDF5:</strong> Hierarchical data format</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Feature Representation:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>One-Hot Encoding:</strong> Binary vectors for categories</li>
                      <li><strong>Label Encoding:</strong> Integer mapping for categories</li>
                      <li><strong>Embedding:</strong> Dense vector representation</li>
                      <li><strong>Feature Scaling:</strong> Normalize numerical values</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Statistical Measures Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">12.3A Descriptive Statistics</h2>
            
            <div className="space-y-6">
              <FormulaBox
                title="Measures of Central Tendency"
                formulas={[
                  {
                    label: "Mean (Average)",
                    formula: "\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i = \\frac{x_1 + x_2 + ... + x_n}{n}",
                    block: true
                  },
                  {
                    label: "Median",
                    formula: "\\text{Middle value when data is ordered}",
                    block: false
                  },
                  {
                    label: "Mode",
                    formula: "\\text{Most frequently occurring value}",
                    block: false
                  },
                  {
                    label: "Weighted Mean",
                    formula: "\\bar{x}_w = \\frac{\\sum_{i=1}^{n} w_i x_i}{\\sum_{i=1}^{n} w_i}",
                    block: true
                  }
                ]}
              />

              <FormulaBox
                title="Measures of Dispersion"
                formulas={[
                  {
                    label: "Range",
                    formula: "R = x_{max} - x_{min}",
                    block: false
                  },
                  {
                    label: "Variance (Population)",
                    formula: "\\sigma^2 = \\frac{1}{N} \\sum_{i=1}^{N} (x_i - \\mu)^2",
                    block: true
                  },
                  {
                    label: "Variance (Sample)",
                    formula: "s^2 = \\frac{1}{n-1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2",
                    block: true
                  },
                  {
                    label: "Standard Deviation",
                    formula: "\\sigma = \\sqrt{\\sigma^2}, \\quad s = \\sqrt{s^2}",
                    block: true
                  },
                  {
                    label: "Coefficient of Variation",
                    formula: "CV = \\frac{\\sigma}{\\mu} \\times 100\\%",
                    block: true
                  },
                  {
                    label: "Interquartile Range",
                    formula: "IQR = Q_3 - Q_1",
                    block: false
                  }
                ]}
              />

              <WorkedExample
                title="Calculate Mean, Variance, and Standard Deviation"
                problem="Find the mean, variance, and standard deviation of the dataset: 4, 8, 6, 5, 3, 2, 8, 9, 2, 5"
                solution={`
**Step 1: Calculate Mean**
$\\bar{x} = \\frac{4 + 8 + 6 + 5 + 3 + 2 + 8 + 9 + 2 + 5}{10} = \\frac{52}{10} = 5.2$

**Step 2: Calculate Deviations and Squared Deviations**
| $x_i$ | $x_i - \\bar{x}$ | $(x_i - \\bar{x})^2$ |
|-------|------------------|----------------------|
| 4     | -1.2            | 1.44                 |
| 8     | 2.8             | 7.84                 |
| 6     | 0.8             | 0.64                 |
| 5     | -0.2            | 0.04                 |
| 3     | -2.2            | 4.84                 |
| 2     | -3.2            | 10.24                |
| 8     | 2.8             | 7.84                 |
| 9     | 3.8             | 14.44                |
| 2     | -3.2            | 10.24                |
| 5     | -0.2            | 0.04                 |
| **Sum** |               | **57.6**             |

**Step 3: Calculate Variance (Sample)**
$s^2 = \\frac{57.6}{n-1} = \\frac{57.6}{9} = 6.4$

**Step 4: Calculate Standard Deviation**
$s = \\sqrt{6.4} \\approx 2.53$

**Answer:**
- Mean = 5.2
- Variance = 6.4
- Standard Deviation ≈ 2.53
                `}
              />

              <FormulaBox
                title="Measures of Position"
                formulas={[
                  {
                    label: "Percentile (k-th)",
                    formula: "P_k: \\text{ value below which } k\\% \\text{ of data falls}",
                    block: false
                  },
                  {
                    label: "Quartiles",
                    formula: "Q_1 = P_{25}, \\quad Q_2 = P_{50} (\\text{median}), \\quad Q_3 = P_{75}",
                    block: true
                  },
                  {
                    label: "Z-Score (Standardization)",
                    formula: "z = \\frac{x - \\mu}{\\sigma}",
                    block: true
                  }
                ]}
              />

              <FormulaBox
                title="Correlation and Covariance"
                formulas={[
                  {
                    label: "Covariance",
                    formula: "\\text{Cov}(X,Y) = \\frac{1}{n-1} \\sum_{i=1}^{n} (x_i - \\bar{x})(y_i - \\bar{y})",
                    block: true
                  },
                  {
                    label: "Pearson Correlation Coefficient",
                    formula: "r = \\frac{\\text{Cov}(X,Y)}{s_X \\cdot s_Y} = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum (x_i - \\bar{x})^2} \\sqrt{\\sum (y_i - \\bar{y})^2}}",
                    block: true
                  },
                  {
                    label: "Interpretation",
                    formula: "-1 \\leq r \\leq 1 \\text{ (r = 1: perfect positive, r = -1: perfect negative, r = 0: no correlation)}",
                    block: true
                  }
                ]}
              />
            </div>
          </section>

          {/* Probability Distributions Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">12.3B Probability Distributions</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Discrete Probability Distributions</h3>
                <div className="space-y-4">
                  <FormulaBox
                    title="Binomial Distribution"
                    formulas={[
                      {
                        label: "Probability Mass Function",
                        formula: "P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k} = \\frac{n!}{k!(n-k)!} p^k (1-p)^{n-k}",
                        block: true
                      },
                      {
                        label: "Mean",
                        formula: "E[X] = \\mu = np",
                        block: false
                      },
                      {
                        label: "Variance",
                        formula: "\\text{Var}(X) = \\sigma^2 = np(1-p)",
                        block: false
                      },
                      {
                        label: "Standard Deviation",
                        formula: "\\sigma = \\sqrt{np(1-p)}",
                        block: false
                      }
                    ]}
                  />

                  <WorkedExample
                    title="Binomial Distribution Problem"
                    problem="A coin is tossed 10 times. What is the probability of getting exactly 6 heads? (p = 0.5)"
                    solution={`
**Given:**
- n = 10 (number of trials)
- k = 6 (number of successes)
- p = 0.5 (probability of success)

**Solution:**
$P(X = 6) = \\binom{10}{6} (0.5)^6 (0.5)^{10-6}$

$= \\frac{10!}{6! \\cdot 4!} (0.5)^{10}$

$= \\frac{10 \\times 9 \\times 8 \\times 7}{4 \\times 3 \\times 2 \\times 1} \\times \\frac{1}{1024}$

$= 210 \\times \\frac{1}{1024}$

$= \\frac{210}{1024} \\approx 0.205$

**Answer:** Probability ≈ 0.205 or 20.5%
                    `}
                  />

                  <FormulaBox
                    title="Poisson Distribution"
                    formulas={[
                      {
                        label: "Probability Mass Function",
                        formula: "P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}",
                        block: true
                      },
                      {
                        label: "Mean",
                        formula: "E[X] = \\lambda",
                        block: false
                      },
                      {
                        label: "Variance",
                        formula: "\\text{Var}(X) = \\lambda",
                        block: false
                      },
                      {
                        label: "Use Case",
                        formula: "\\text{Events in fixed interval (calls/hour, arrivals/day)}",
                        block: false
                      }
                    ]}
                  />
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Probability Distributions</h3>
                <div className="space-y-4">
                  <FormulaBox
                    title="Normal (Gaussian) Distribution"
                    formulas={[
                      {
                        label: "Probability Density Function",
                        formula: "f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}",
                        block: true
                      },
                      {
                        label: "Notation",
                        formula: "X \\sim N(\\mu, \\sigma^2)",
                        block: false
                      },
                      {
                        label: "Standard Normal",
                        formula: "Z \\sim N(0, 1), \\quad Z = \\frac{X - \\mu}{\\sigma}",
                        block: true
                      },
                      {
                        label: "68-95-99.7 Rule",
                        formula: "\\begin{cases} P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma) \\approx 68\\% \\\\ P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 95\\% \\\\ P(\\mu - 3\\sigma \\leq X \\leq \\mu + 3\\sigma) \\approx 99.7\\% \\end{cases}",
                        block: true
                      }
                    ]}
                  />

                  <WorkedExample
                    title="Normal Distribution Problem"
                    problem="Test scores are normally distributed with mean μ = 75 and standard deviation σ = 10. What percentage of students scored between 65 and 85?"
                    solution={`
**Given:**
- μ = 75, σ = 10
- Range: [65, 85]

**Solution:**
Calculate Z-scores for boundaries:
$Z_1 = \\frac{65 - 75}{10} = -1$

$Z_2 = \\frac{85 - 75}{10} = 1$

This is the range [μ - σ, μ + σ]

By the 68-95-99.7 rule:
$P(65 \\leq X \\leq 85) = P(-1 \\leq Z \\leq 1) \\approx 68\\%$

**Answer:** Approximately 68% of students scored between 65 and 85.
                    `}
                  />

                  <FormulaBox
                    title="Uniform Distribution"
                    formulas={[
                      {
                        label: "Probability Density Function",
                        formula: "f(x) = \\begin{cases} \\frac{1}{b-a} & a \\leq x \\leq b \\\\ 0 & \\text{otherwise} \\end{cases}",
                        block: true
                      },
                      {
                        label: "Mean",
                        formula: "E[X] = \\frac{a + b}{2}",
                        block: false
                      },
                      {
                        label: "Variance",
                        formula: "\\text{Var}(X) = \\frac{(b-a)^2}{12}",
                        block: false
                      }
                    ]}
                  />

                  <FormulaBox
                    title="Exponential Distribution"
                    formulas={[
                      {
                        label: "Probability Density Function",
                        formula: "f(x) = \\lambda e^{-\\lambda x}, \\quad x \\geq 0",
                        block: true
                      },
                      {
                        label: "Mean",
                        formula: "E[X] = \\frac{1}{\\lambda}",
                        block: false
                      },
                      {
                        label: "Variance",
                        formula: "\\text{Var}(X) = \\frac{1}{\\lambda^2}",
                        block: false
                      },
                      {
                        label: "Use Case",
                        formula: "\\text{Time between events (waiting times, lifetimes)}",
                        block: false
                      }
                    ]}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Machine Learning Basics Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">12.4 Machine Learning Fundamentals</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What is Machine Learning?</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Definition:</p>
                    <p><strong>Machine Learning:</strong> Field of study that gives computers ability to learn without being explicitly programmed.</p>
                    <p className="mt-2">Systems learn from data and improve with experience.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Key Concepts:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Training Data:</strong> Historical data used to learn patterns</li>
                      <li><strong>Features (X):</strong> Input variables/attributes</li>
                      <li><strong>Target (y):</strong> Output variable to predict</li>
                      <li><strong>Model:</strong> Mathematical representation of patterns</li>
                      <li><strong>Prediction:</strong> Output for new, unseen data</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Supervised Learning Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">12.5 Supervised Learning</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Learning from Labeled Data</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Concept:</p>
                    <p>Learn from labeled training data (input-output pairs). Model learns mapping from inputs to outputs.</p>
                    <p className="mt-2"><strong>Goal:</strong> Predict output for new inputs</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Two Main Tasks:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Classification:</strong> Predict discrete category
                        <ul className="list-disc ml-6 mt-1">
                          <li>Binary: Yes/No, Spam/Not Spam</li>
                          <li>Multi-class: Dog/Cat/Bird</li>
                        </ul>
                      </li>
                      <li><strong>Regression:</strong> Predict continuous value
                        <ul className="list-disc ml-6 mt-1">
                          <li>House price, temperature, stock price</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Popular Algorithms:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Linear Regression:</strong> Fit line to data</li>
                      <li><strong>Logistic Regression:</strong> Binary classification</li>
                      <li><strong>Decision Trees:</strong> Tree-based rules</li>
                      <li><strong>Random Forest:</strong> Ensemble of trees</li>
                      <li><strong>Support Vector Machines (SVM):</strong> Find optimal hyperplane</li>
                      <li><strong>Neural Networks:</strong> Layered transformations</li>
                      <li><strong>k-Nearest Neighbors (k-NN):</strong> Vote from neighbors</li>
                      <li><strong>Naive Bayes:</strong> Probabilistic classifier</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Linear Regression</h3>
                <div className="space-y-4">
                  <FormulaBox
                    title="Simple Linear Regression"
                    formulas={[
                      {
                        label: "Model",
                        formula: "y = \\beta_0 + \\beta_1 x + \\epsilon",
                        block: true
                      },
                      {
                        label: "Slope (β₁)",
                        formula: "\\beta_1 = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum (x_i - \\bar{x})^2} = \\frac{\\text{Cov}(X,Y)}{\\text{Var}(X)}",
                        block: true
                      },
                      {
                        label: "Intercept (β₀)",
                        formula: "\\beta_0 = \\bar{y} - \\beta_1 \\bar{x}",
                        block: true
                      },
                      {
                        label: "Prediction",
                        formula: "\\hat{y} = \\beta_0 + \\beta_1 x",
                        block: true
                      }
                    ]}
                  />

                  <FormulaBox
                    title="Multiple Linear Regression"
                    formulas={[
                      {
                        label: "Model",
                        formula: "y = \\beta_0 + \\beta_1 x_1 + \\beta_2 x_2 + ... + \\beta_p x_p + \\epsilon",
                        block: true
                      },
                      {
                        label: "Matrix Form",
                        formula: "\\mathbf{y} = \\mathbf{X}\\boldsymbol{\\beta} + \\boldsymbol{\\epsilon}",
                        block: true
                      },
                      {
                        label: "Coefficients (OLS)",
                        formula: "\\boldsymbol{\\beta} = (\\mathbf{X}^T \\mathbf{X})^{-1} \\mathbf{X}^T \\mathbf{y}",
                        block: true
                      }
                    ]}
                  />

                  <WorkedExample
                    title="Simple Linear Regression Example"
                    problem="Given the data: (1, 2), (2, 4), (3, 5), (4, 4), (5, 5). Find the regression line."
                    solution={`
**Step 1: Calculate means**
$\\bar{x} = \\frac{1+2+3+4+5}{5} = 3$

$\\bar{y} = \\frac{2+4+5+4+5}{5} = 4$

**Step 2: Calculate slope (β₁)**
| $x_i$ | $y_i$ | $(x_i - \\bar{x})$ | $(y_i - \\bar{y})$ | $(x_i - \\bar{x})(y_i - \\bar{y})$ | $(x_i - \\bar{x})^2$ |
|-------|-------|---------------------|---------------------|-------------------------------------|----------------------|
| 1     | 2     | -2                  | -2                  | 4                                   | 4                    |
| 2     | 4     | -1                  | 0                   | 0                                   | 1                    |
| 3     | 5     | 0                   | 1                   | 0                                   | 0                    |
| 4     | 4     | 1                   | 0                   | 0                                   | 1                    |
| 5     | 5     | 2                   | 1                   | 2                                   | 4                    |
| **Sum** |     |                     |                     | **6**                               | **10**               |

$\\beta_1 = \\frac{6}{10} = 0.6$

**Step 3: Calculate intercept (β₀)**
$\\beta_0 = 4 - 0.6(3) = 4 - 1.8 = 2.2$

**Step 4: Write regression equation**
$\\hat{y} = 2.2 + 0.6x$

**Answer:** The regression line is ŷ = 2.2 + 0.6x
                    `}
                  />

                  <FormulaBox
                    title="Model Evaluation Metrics"
                    formulas={[
                      {
                        label: "Mean Squared Error (MSE)",
                        formula: "\\text{MSE} = \\frac{1}{n} \\sum_{i=1}^{n} (y_i - \\hat{y}_i)^2",
                        block: true
                      },
                      {
                        label: "Root Mean Squared Error (RMSE)",
                        formula: "\\text{RMSE} = \\sqrt{\\text{MSE}} = \\sqrt{\\frac{1}{n} \\sum_{i=1}^{n} (y_i - \\hat{y}_i)^2}",
                        block: true
                      },
                      {
                        label: "Mean Absolute Error (MAE)",
                        formula: "\\text{MAE} = \\frac{1}{n} \\sum_{i=1}^{n} |y_i - \\hat{y}_i|",
                        block: true
                      },
                      {
                        label: "R-Squared (R²)",
                        formula: "R^2 = 1 - \\frac{\\sum (y_i - \\hat{y}_i)^2}{\\sum (y_i - \\bar{y})^2} = 1 - \\frac{SS_{res}}{SS_{tot}}",
                        block: true
                      },
                      {
                        label: "Interpretation",
                        formula: "0 \\leq R^2 \\leq 1 \\text{ (higher is better, measures goodness of fit)}",
                        block: false
                      }
                    ]}
                  />
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Logistic Regression (Classification)</h3>
                <div className="space-y-4">
                  <FormulaBox
                    title="Logistic Regression Formulas"
                    formulas={[
                      {
                        label: "Logistic (Sigmoid) Function",
                        formula: "\\sigma(z) = \\frac{1}{1 + e^{-z}}",
                        block: true
                      },
                      {
                        label: "Model",
                        formula: "P(y=1|x) = \\sigma(\\beta_0 + \\beta_1 x_1 + ... + \\beta_p x_p)",
                        block: true
                      },
                      {
                        label: "Log-Odds (Logit)",
                        formula: "\\log\\left(\\frac{p}{1-p}\\right) = \\beta_0 + \\beta_1 x_1 + ... + \\beta_p x_p",
                        block: true
                      },
                      {
                        label: "Decision Boundary",
                        formula: "\\text{Predict } y=1 \\text{ if } P(y=1|x) \\geq 0.5",
                        block: false
                      }
                    ]}
                  />

                  <FormulaBox
                    title="Classification Metrics"
                    formulas={[
                      {
                        label: "Accuracy",
                        formula: "\\text{Accuracy} = \\frac{TP + TN}{TP + TN + FP + FN}",
                        block: true
                      },
                      {
                        label: "Precision",
                        formula: "\\text{Precision} = \\frac{TP}{TP + FP}",
                        block: true
                      },
                      {
                        label: "Recall (Sensitivity)",
                        formula: "\\text{Recall} = \\frac{TP}{TP + FN}",
                        block: true
                      },
                      {
                        label: "F1-Score",
                        formula: "F1 = 2 \\times \\frac{\\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}} = \\frac{2 \\times TP}{2 \\times TP + FP + FN}",
                        block: true
                      },
                      {
                        label: "Specificity",
                        formula: "\\text{Specificity} = \\frac{TN}{TN + FP}",
                        block: true
                      }
                    ]}
                  />

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-3">Confusion Matrix</p>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2" rowSpan={2} colSpan={2}></th>
                            <th className="border border-gray-300 p-2 text-center" colSpan={2}>Predicted</th>
                          </tr>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2">Positive</th>
                            <th className="border border-gray-300 p-2">Negative</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th className="border border-gray-300 p-2 bg-gray-100" rowSpan={2}>Actual</th>
                            <th className="border border-gray-300 p-2 bg-gray-100">Positive</th>
                            <td className="border border-gray-300 p-2 text-center bg-green-50">
                              <strong>TP</strong><br/>True Positive
                            </td>
                            <td className="border border-gray-300 p-2 text-center bg-red-50">
                              <strong>FN</strong><br/>False Negative
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-gray-300 p-2 bg-gray-100">Negative</th>
                            <td className="border border-gray-300 p-2 text-center bg-red-50">
                              <strong>FP</strong><br/>False Positive
                            </td>
                            <td className="border border-gray-300 p-2 text-center bg-green-50">
                              <strong>TN</strong><br/>True Negative
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <WorkedExample
                    title="Classification Metrics Calculation"
                    problem="Given a confusion matrix: TP=85, FP=15, FN=10, TN=90. Calculate Accuracy, Precision, Recall, and F1-Score."
                    solution={`
**Given:**
- True Positives (TP) = 85
- False Positives (FP) = 15
- False Negatives (FN) = 10
- True Negatives (TN) = 90
- Total = 200

**Accuracy:**
$\\text{Accuracy} = \\frac{85 + 90}{200} = \\frac{175}{200} = 0.875 = 87.5\\%$

**Precision:**
$\\text{Precision} = \\frac{85}{85 + 15} = \\frac{85}{100} = 0.85 = 85\\%$

**Recall:**
$\\text{Recall} = \\frac{85}{85 + 10} = \\frac{85}{95} \\approx 0.8947 = 89.47\\%$

**F1-Score:**
$F1 = 2 \\times \\frac{0.85 \\times 0.8947}{0.85 + 0.8947} = 2 \\times \\frac{0.7605}{1.7447} \\approx 0.8718 = 87.18\\%$

**Answer:**
- Accuracy = 87.5%
- Precision = 85%
- Recall ≈ 89.47%
- F1-Score ≈ 87.18%
                    `}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Unsupervised Learning Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">12.6 Unsupervised Learning</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Learning from Unlabeled Data</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Concept:</p>
                    <p>Learn patterns from data without labels. Discover hidden structure in data.</p>
                    <p className="mt-2"><strong>Goal:</strong> Find patterns, groups, or representations</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Main Tasks:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Clustering:</strong> Group similar data points</li>
                      <li><strong>Dimensionality Reduction:</strong> Reduce number of features</li>
                      <li><strong>Anomaly Detection:</strong> Find outliers</li>
                      <li><strong>Association Rules:</strong> Discover relationships</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Popular Algorithms:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>K-Means:</strong> Partition into k clusters</li>
                      <li><strong>Hierarchical Clustering:</strong> Tree of clusters</li>
                      <li><strong>DBSCAN:</strong> Density-based clustering</li>
                      <li><strong>PCA:</strong> Principal Component Analysis</li>
                      <li><strong>t-SNE:</strong> Visualization in 2D/3D</li>
                      <li><strong>Autoencoders:</strong> Neural network compression</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">K-Means Clustering</h3>
                <div className="space-y-4">
                  <FormulaBox
                    title="K-Means Algorithm"
                    formulas={[
                      {
                        label: "Objective",
                        formula: "\\min \\sum_{i=1}^{k} \\sum_{x \\in C_i} \\|x - \\mu_i\\|^2",
                        block: true
                      },
                      {
                        label: "Cluster Center (Centroid)",
                        formula: "\\mu_i = \\frac{1}{|C_i|} \\sum_{x \\in C_i} x",
                        block: true
                      },
                      {
                        label: "Distance Metric (Euclidean)",
                        formula: "d(x, y) = \\sqrt{\\sum_{j=1}^{p} (x_j - y_j)^2}",
                        block: true
                      }
                    ]}
                  />

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">K-Means Algorithm Steps:</p>
                    <ol className="list-decimal ml-6 space-y-1">
                      <li>Initialize k centroids randomly</li>
                      <li>Assign each point to nearest centroid</li>
                      <li>Recalculate centroids as mean of assigned points</li>
                      <li>Repeat steps 2-3 until convergence (centroids don't change)</li>
                    </ol>
                  </div>

                  <WorkedExample
                    title="K-Means Clustering Example (2D, k=2)"
                    problem="Given points: A(2,3), B(3,3), C(8,7), D(9,8). Perform one iteration of K-Means with initial centroids at (2,3) and (9,8)."
                    solution={`
**Initial Centroids:**
- C₁ = (2, 3)
- C₂ = (9, 8)

**Step 1: Assign points to nearest centroid**

Distance from A(2,3):
- To C₁: $\\sqrt{(2-2)^2 + (3-3)^2} = 0$
- To C₂: $\\sqrt{(2-9)^2 + (3-8)^2} = \\sqrt{49+25} = \\sqrt{74} \\approx 8.6$
- **A → Cluster 1**

Distance from B(3,3):
- To C₁: $\\sqrt{(3-2)^2 + (3-3)^2} = 1$
- To C₂: $\\sqrt{(3-9)^2 + (3-8)^2} = \\sqrt{36+25} = \\sqrt{61} \\approx 7.8$
- **B → Cluster 1**

Distance from C(8,7):
- To C₁: $\\sqrt{(8-2)^2 + (7-3)^2} = \\sqrt{36+16} = \\sqrt{52} \\approx 7.2$
- To C₂: $\\sqrt{(8-9)^2 + (7-8)^2} = \\sqrt{1+1} = \\sqrt{2} \\approx 1.4$
- **C → Cluster 2**

Distance from D(9,8):
- To C₁: $\\sqrt{(9-2)^2 + (8-3)^2} = \\sqrt{49+25} = \\sqrt{74} \\approx 8.6$
- To C₂: $\\sqrt{(9-9)^2 + (8-8)^2} = 0$
- **D → Cluster 2**

**Step 2: Recalculate centroids**

New C₁ (mean of A, B):
$C_1 = \\left(\\frac{2+3}{2}, \\frac{3+3}{2}\\right) = (2.5, 3)$

New C₂ (mean of C, D):
$C_2 = \\left(\\frac{8+9}{2}, \\frac{7+8}{2}\\right) = (8.5, 7.5)$

**Answer:** After one iteration:
- Cluster 1: {A, B}, Centroid = (2.5, 3)
- Cluster 2: {C, D}, Centroid = (8.5, 7.5)
                    `}
                  />
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Dimensionality Reduction - PCA</h3>
                <div className="space-y-4">
                  <FormulaBox
                    title="Principal Component Analysis (PCA)"
                    formulas={[
                      {
                        label: "Objective",
                        formula: "\\text{Find orthogonal directions of maximum variance}",
                        block: false
                      },
                      {
                        label: "Covariance Matrix",
                        formula: "\\mathbf{C} = \\frac{1}{n-1} \\mathbf{X}^T \\mathbf{X}",
                        block: true
                      },
                      {
                        label: "Eigenvalue Equation",
                        formula: "\\mathbf{C} \\mathbf{v} = \\lambda \\mathbf{v}",
                        block: true
                      },
                      {
                        label: "Variance Explained",
                        formula: "\\text{Var Explained} = \\frac{\\lambda_i}{\\sum_{j=1}^{p} \\lambda_j}",
                        block: true
                      }
                    ]}
                  />

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">PCA Steps:</p>
                    <ol className="list-decimal ml-6 space-y-1">
                      <li>Standardize data (mean=0, std=1)</li>
                      <li>Compute covariance matrix</li>
                      <li>Calculate eigenvalues and eigenvectors</li>
                      <li>Sort eigenvectors by eigenvalues (descending)</li>
                      <li>Select top k eigenvectors (principal components)</li>
                      <li>Transform data to new k-dimensional space</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Reinforcement Learning Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">12.7 Reinforcement Learning</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Learning through Interaction</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Concept:</p>
                    <p>Agent learns by interacting with environment, receiving rewards/penalties for actions.</p>
                    <p className="mt-2"><strong>Goal:</strong> Maximize cumulative reward</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Components:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Agent:</strong> Learner/decision maker</li>
                      <li><strong>Environment:</strong> World agent interacts with</li>
                      <li><strong>State:</strong> Current situation</li>
                      <li><strong>Action:</strong> What agent can do</li>
                      <li><strong>Reward:</strong> Feedback from environment</li>
                      <li><strong>Policy:</strong> Strategy (state → action mapping)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Applications:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Game playing (AlphaGo, Chess)</li>
                      <li>Robotics and autonomous vehicles</li>
                      <li>Resource management</li>
                      <li>Recommendation systems</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Popular Algorithms:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Q-Learning:</strong> Learn action-value function</li>
                      <li><strong>SARSA:</strong> State-Action-Reward-State-Action</li>
                      <li><strong>Deep Q-Networks (DQN):</strong> Neural network Q-learning</li>
                      <li><strong>Policy Gradient Methods</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Clustering Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">12.8 Clustering</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Grouping Similar Data</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Definition:</p>
                    <p>Partition data into groups (clusters) where items in same cluster are more similar to each other than to those in other clusters.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">K-Means Clustering:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Partition data into k clusters</li>
                      <li><strong>Algorithm:</strong>
                        <ol className="list-decimal ml-6 mt-1">
                          <li>Initialize k centroids randomly</li>
                          <li>Assign each point to nearest centroid</li>
                          <li>Update centroids as mean of assigned points</li>
                          <li>Repeat until convergence</li>
                        </ol>
                      </li>
                      <li>Time: O(n×k×i×d) - i iterations, d dimensions</li>
                      <li>Need to specify k in advance</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Hierarchical Clustering:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Build tree of clusters (dendrogram)</li>
                      <li><strong>Agglomerative (bottom-up):</strong> Merge similar clusters</li>
                      <li><strong>Divisive (top-down):</strong> Split dissimilar clusters</li>
                      <li>No need to specify k</li>
                      <li>Linkage methods: Single, Complete, Average</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">DBSCAN:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Density-Based Spatial Clustering</li>
                      <li>Groups together closely packed points</li>
                      <li>Can find arbitrarily-shaped clusters</li>
                      <li>Identifies outliers as noise</li>
                      <li>Parameters: ε (radius), MinPts (minimum points)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Classification & Regression Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">12.9 Classification & Regression</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Predictive Modeling</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Classification:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Goal:</strong> Predict categorical label</li>
                      <li><strong>Examples:</strong> Spam detection, disease diagnosis, image recognition</li>
                      <li><strong>Metrics:</strong> Accuracy, Precision, Recall, F1-score, AUC-ROC</li>
                      <li><strong>Common algorithms:</strong> Logistic Regression, Decision Trees, SVM, Neural Networks</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Regression:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Goal:</strong> Predict continuous value</li>
                      <li><strong>Examples:</strong> House price prediction, sales forecasting, temperature prediction</li>
                      <li><strong>Metrics:</strong> MSE, RMSE, MAE, R²</li>
                      <li><strong>Common algorithms:</strong> Linear Regression, Ridge, Lasso, Decision Trees</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Decision Trees:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Tree structure with decision nodes and leaf nodes</li>
                      <li>Split based on features to maximize information gain</li>
                      <li>Easy to interpret and visualize</li>
                      <li>Can handle both classification and regression</li>
                      <li>Prone to overfitting (use pruning or Random Forest)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Data Preprocessing Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">12.10 Data Preprocessing</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Preparing Data for Analysis</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Why Preprocess?</p>
                    <p>Real-world data is often incomplete, noisy, and inconsistent. Preprocessing improves data quality and model performance.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Common Preprocessing Steps:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Data Cleaning:</strong>
                        <ul className="list-disc ml-6 mt-1">
                          <li>Handle missing values (deletion, imputation)</li>
                          <li>Remove duplicates</li>
                          <li>Fix errors and inconsistencies</li>
                        </ul>
                      </li>
                      <li><strong>Data Integration:</strong> Combine data from multiple sources</li>
                      <li><strong>Data Transformation:</strong> Convert to suitable format</li>
                      <li><strong>Data Reduction:</strong> Reduce volume while maintaining integrity</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Handling Missing Values:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Deletion:</strong> Remove rows/columns with missing data</li>
                      <li><strong>Mean/Median Imputation:</strong> Replace with average</li>
                      <li><strong>Mode Imputation:</strong> Replace with most frequent</li>
                      <li><strong>Forward/Backward Fill:</strong> Use adjacent values</li>
                      <li><strong>Predictive Imputation:</strong> Use ML to predict</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Normalization & Smoothing Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">12.11 Normalization & Smoothing</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Transformation Techniques</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Normalization:</p>
                    <p className="mb-2">Scale data to specific range, typically [0, 1] or [-1, 1]</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Min-Max Scaling:</strong> x' = (x - min) / (max - min)
                        <p className="text-sm ml-4">Scales to [0, 1]</p>
                      </li>
                      <li><strong>Z-Score Normalization (Standardization):</strong> x' = (x - μ) / σ
                        <p className="text-sm ml-4">Mean = 0, Standard deviation = 1</p>
                      </li>
                      <li><strong>Decimal Scaling:</strong> x' = x / 10^j
                        <p className="text-sm ml-4">j is smallest integer where max|x'| &lt; 1</p>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Why Normalize?</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Features on different scales can bias model</li>
                      <li>Improves convergence in gradient descent</li>
                      <li>Required for distance-based algorithms (k-NN, k-Means)</li>
                      <li>Prevents features with large ranges from dominating</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-lg mb-2">Smoothing:</p>
                    <p className="mb-2">Remove noise from data</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Binning:</strong> Group values into bins, replace with bin average/median</li>
                      <li><strong>Moving Average:</strong> Replace with average of neighbors</li>
                      <li><strong>Regression:</strong> Fit data to function (linear, polynomial)</li>
                      <li><strong>Clustering:</strong> Group similar values, detect outliers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Visualization Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">12.12 Data Visualization</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Communicating Insights</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Why Visualize?</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Understand patterns and relationships</li>
                      <li>Identify outliers and anomalies</li>
                      <li>Communicate findings effectively</li>
                      <li>Support decision making</li>
                      <li>Explore data before modeling</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Common Visualization Types:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Bar Chart:</strong> Compare categories</li>
                      <li><strong>Line Chart:</strong> Show trends over time</li>
                      <li><strong>Scatter Plot:</strong> Show relationship between two variables</li>
                      <li><strong>Histogram:</strong> Distribution of single variable</li>
                      <li><strong>Box Plot:</strong> Show quartiles and outliers</li>
                      <li><strong>Heatmap:</strong> Show matrix of values with colors</li>
                      <li><strong>Pie Chart:</strong> Show proportions (use sparingly)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Tools & Libraries:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Python:</strong> Matplotlib, Seaborn, Plotly, Bokeh</li>
                      <li><strong>R:</strong> ggplot2, lattice</li>
                      <li><strong>Tableau, Power BI:</strong> Business intelligence tools</li>
                      <li><strong>D3.js:</strong> Web-based interactive visualizations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Data Visualization Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">12.8 Data Visualization</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Visualization Types</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Charts for Different Data Types:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 p-3 rounded">
                        <p className="font-semibold text-blue-600">Bar Chart</p>
                        <p className="text-sm">Compare categorical data</p>
                        <p className="text-xs text-gray-600">Use: Sales by region, counts per category</p>
                      </div>
                      <div className="border border-gray-200 p-3 rounded">
                        <p className="font-semibold text-blue-600">Histogram</p>
                        <p className="text-sm">Distribution of numerical data</p>
                        <p className="text-xs text-gray-600">Use: Age distribution, test scores</p>
                      </div>
                      <div className="border border-gray-200 p-3 rounded">
                        <p className="font-semibold text-blue-600">Line Chart</p>
                        <p className="text-sm">Trends over time</p>
                        <p className="text-xs text-gray-600">Use: Stock prices, temperature changes</p>
                      </div>
                      <div className="border border-gray-200 p-3 rounded">
                        <p className="font-semibold text-blue-600">Scatter Plot</p>
                        <p className="text-sm">Relationship between two variables</p>
                        <p className="text-xs text-gray-600">Use: Correlation analysis, regression</p>
                      </div>
                      <div className="border border-gray-200 p-3 rounded">
                        <p className="font-semibold text-blue-600">Box Plot</p>
                        <p className="text-sm">Distribution summary (5-number)</p>
                        <p className="text-xs text-gray-600">Use: Outlier detection, compare distributions</p>
                      </div>
                      <div className="border border-gray-200 p-3 rounded">
                        <p className="font-semibold text-blue-600">Heatmap</p>
                        <p className="text-sm">Matrix data with color coding</p>
                        <p className="text-xs text-gray-600">Use: Correlation matrix, confusion matrix</p>
                      </div>
                      <div className="border border-gray-200 p-3 rounded">
                        <p className="font-semibold text-blue-600">Pie Chart</p>
                        <p className="text-sm">Proportions of a whole</p>
                        <p className="text-xs text-gray-600">Use: Market share, budget allocation</p>
                      </div>
                      <div className="border border-gray-200 p-3 rounded">
                        <p className="font-semibold text-blue-600">Violin Plot</p>
                        <p className="text-sm">Distribution + density</p>
                        <p className="text-xs text-gray-600">Use: Compare distributions with density info</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-3">Box Plot Components (5-Number Summary):</p>
                    <div className="space-y-2">
                      <p>• <strong>Minimum:</strong> Smallest value (excluding outliers)</p>
                      <p>• <strong>Q₁ (First Quartile):</strong> 25th percentile</p>
                      <p>• <strong>Q₂ (Median):</strong> 50th percentile</p>
                      <p>• <strong>Q₃ (Third Quartile):</strong> 75th percentile</p>
                      <p>• <strong>Maximum:</strong> Largest value (excluding outliers)</p>
                      <p>• <strong>IQR = Q₃ - Q₁:</strong> Interquartile range</p>
                      <p>• <strong>Outliers:</strong> Points beyond Q₁ - 1.5×IQR or Q₃ + 1.5×IQR</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Visualization Best Practices</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Key Principles:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Clarity:</strong> Clear labels, legends, and titles</li>
                      <li><strong>Simplicity:</strong> Avoid chart junk, keep it simple</li>
                      <li><strong>Accuracy:</strong> Don't mislead (proper scales, no truncation)</li>
                      <li><strong>Consistency:</strong> Use consistent colors and styles</li>
                      <li><strong>Accessibility:</strong> Color-blind friendly palettes</li>
                      <li><strong>Context:</strong> Provide necessary context and annotations</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Common Mistakes to Avoid:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Using pie charts for too many categories (&gt; 5-6)</li>
                      <li>3D charts that distort perception</li>
                      <li>Truncated y-axis to exaggerate differences</li>
                      <li>Too many colors or inconsistent color schemes</li>
                      <li>Missing axis labels or units</li>
                      <li>Overplotting in scatter plots (use transparency)</li>
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
                    <li><strong>Data Types:</strong> Structured vs unstructured, quantitative vs qualitative</li>
                    <li><strong>ML Categories:</strong> Supervised, unsupervised, reinforcement differences</li>
                    <li><strong>Clustering Algorithms:</strong> K-means, hierarchical, DBSCAN</li>
                    <li><strong>Classification vs Regression:</strong> Use cases and examples</li>
                    <li><strong>Preprocessing:</strong> Normalization formulas, handling missing data</li>
                    <li><strong>Visualization:</strong> Appropriate chart types for different data</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-lg mb-3">📝 Common Exam Questions:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Classify given data as structured/unstructured</li>
                    <li>Identify appropriate ML algorithm for scenario</li>
                    <li>Trace k-means clustering steps</li>
                    <li>Calculate normalized values using Min-Max or Z-score</li>
                    <li>Distinguish supervised from unsupervised learning</li>
                    <li>Identify classification vs regression problem</li>
                    <li>Choose appropriate visualization for data type</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-lg mb-3">⚡ Quick Formulas:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Min-Max: x' = (x - min) / (max - min)</li>
                    <li>Z-Score: x' = (x - μ) / σ</li>
                    <li>Accuracy = (TP + TN) / Total</li>
                    <li>Precision = TP / (TP + FP)</li>
                    <li>Recall = TP / (TP + FN)</li>
                    <li>F1-Score = 2 × (Precision × Recall) / (Precision + Recall)</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-lg mb-3">⚠️ Common Mistakes:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Confusing classification with regression</li>
                    <li>Wrong normalization formula application</li>
                    <li>Mixing up supervised and unsupervised learning</li>
                    <li>Not understanding when to use which clustering algorithm</li>
                    <li>Choosing inappropriate visualization type</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-lg mb-3">💡 Key Takeaways:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Structured data: organized, easily searchable (20%)</li>
                    <li>Unstructured data: no format, requires special tools (80%)</li>
                    <li>Supervised: labeled data, predict output</li>
                    <li>Unsupervised: unlabeled data, find patterns</li>
                    <li>Reinforcement: learn through reward/penalty</li>
                    <li>Always preprocess data before modeling</li>
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

export default DataScience;
