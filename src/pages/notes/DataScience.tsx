import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

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
