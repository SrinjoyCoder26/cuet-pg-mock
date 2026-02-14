import { useEffect, useRef } from 'react';

interface VennDiagramProps {
  sets: {
    A?: string[];
    B?: string[];
    intersection?: string[];
  };
  labels?: {
    A?: string;
    B?: string;
    title?: string;
  };
  operation?: 'union' | 'intersection' | 'difference' | 'complement';
}

const VennDiagram = ({ sets, labels, operation = 'union' }: VennDiagramProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 80;
    const offset = 50;

    // Draw background
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set A
    const aX = centerX - offset;
    const aY = centerY;

    // Set B
    const bX = centerX + offset;
    const bY = centerY;

    // Draw sets based on operation
    if (operation === 'union') {
      // Draw both sets filled
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = '#22c55e';
      ctx.beginPath();
      ctx.arc(aX, aY, radius, 0, 2 * Math.PI);
      ctx.fill();
      
      ctx.fillStyle = '#3b82f6';
      ctx.beginPath();
      ctx.arc(bX, bY, radius, 0, 2 * Math.PI);
      ctx.fill();
    } else if (operation === 'intersection') {
      // Draw intersection only
      ctx.save();
      ctx.globalAlpha = 0.3;
      
      // Clip to set A
      ctx.beginPath();
      ctx.arc(aX, aY, radius, 0, 2 * Math.PI);
      ctx.clip();
      
      // Fill set B (only intersection will be visible)
      ctx.fillStyle = '#8b5cf6';
      ctx.beginPath();
      ctx.arc(bX, bY, radius, 0, 2 * Math.PI);
      ctx.fill();
      
      ctx.restore();
    } else if (operation === 'difference') {
      // Draw A - B (A without intersection)
      ctx.save();
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = '#22c55e';
      ctx.beginPath();
      ctx.arc(aX, aY, radius, 0, 2 * Math.PI);
      ctx.fill();
      
      // Clear the intersection
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(bX, bY, radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.restore();
    }

    // Draw outlines
    ctx.globalAlpha = 1;
    ctx.strokeStyle = '#22c55e';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(aX, aY, radius, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.strokeStyle = '#3b82f6';
    ctx.beginPath();
    ctx.arc(bX, bY, radius, 0, 2 * Math.PI);
    ctx.stroke();

    // Draw labels
    ctx.fillStyle = '#000';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(labels?.A || 'A', aX - 40, centerY);
    ctx.fillText(labels?.B || 'B', bX + 40, centerY);

    // Draw title
    if (labels?.title) {
      ctx.font = 'bold 14px Arial';
      ctx.fillText(labels.title, centerX, 30);
    }

    // Draw elements if provided
    ctx.font = '12px Arial';
    if (sets.A && sets.A.length > 0) {
      const aOnlyElements = sets.A.filter(el => !sets.intersection?.includes(el));
      ctx.fillText(aOnlyElements.slice(0, 3).join(', '), aX - 40, centerY + 20);
    }
    
    if (sets.B && sets.B.length > 0) {
      const bOnlyElements = sets.B.filter(el => !sets.intersection?.includes(el));
      ctx.fillText(bOnlyElements.slice(0, 3).join(', '), bX + 40, centerY + 20);
    }
    
    if (sets.intersection && sets.intersection.length > 0) {
      ctx.fillText(sets.intersection.slice(0, 2).join(', '), centerX, centerY);
    }
  }, [sets, labels, operation]);

  return (
    <div className="flex justify-center my-4">
      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        className="border border-gray-300 rounded-lg shadow-sm"
      />
    </div>
  );
};

export default VennDiagram;
