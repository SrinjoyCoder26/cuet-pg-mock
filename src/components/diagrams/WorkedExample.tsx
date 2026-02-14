interface Step {
  description: string;
  calculation?: string;
  result?: string;
}

interface WorkedExampleProps {
  title: string;
  problem: string;
  steps: Step[];
  solution: string;
  bgColor?: string;
  borderColor?: string;
}

const WorkedExample = ({
  title,
  problem,
  steps,
  solution,
  bgColor = 'bg-amber-50',
  borderColor = 'border-amber-500'
}: WorkedExampleProps) => {
  return (
    <div className={`${bgColor} border-l-4 ${borderColor} p-6 rounded-r-lg my-4`}>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
        <span className="text-2xl">📝</span>
        {title}
      </h3>
      
      <div className="bg-white p-4 rounded mb-4">
        <p className="font-semibold text-gray-900 mb-2">Problem:</p>
        <p className="text-gray-700">{problem}</p>
      </div>

      <div className="space-y-3">
        <p className="font-semibold text-gray-900">Solution Steps:</p>
        {steps.map((step, index) => (
          <div key={index} className="bg-white p-4 rounded">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="text-gray-700 mb-2">{step.description}</p>
                {step.calculation && (
                  <div className="bg-gray-50 p-3 rounded font-mono text-sm">
                    {step.calculation}
                  </div>
                )}
                {step.result && (
                  <p className="text-gray-900 font-semibold mt-2">
                    Result: {step.result}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-green-100 border-2 border-green-500 p-4 rounded mt-4">
        <p className="font-semibold text-green-900 mb-2">✓ Final Answer:</p>
        <p className="text-green-900 text-lg">{solution}</p>
      </div>
    </div>
  );
};

export default WorkedExample;
