import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface FormulaBoxProps {
  title?: string;
  formulas: {
    label: string;
    formula: string;
    block?: boolean;
  }[];
  bgColor?: string;
  borderColor?: string;
}

const FormulaBox = ({ 
  title, 
  formulas,
  bgColor = 'bg-indigo-50',
  borderColor = 'border-indigo-500'
}: FormulaBoxProps) => {
  return (
    <div className={`${bgColor} border-l-4 ${borderColor} p-6 rounded-r-lg my-4`}>
      {title && (
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      )}
      <div className="space-y-3">
        {formulas.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded">
            <p className="font-semibold text-gray-900 mb-2">{item.label}</p>
            {item.block ? (
              <BlockMath math={item.formula} />
            ) : (
              <div className="text-lg">
                <InlineMath math={item.formula} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormulaBox;
