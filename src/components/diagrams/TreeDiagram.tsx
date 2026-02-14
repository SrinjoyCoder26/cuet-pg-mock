import { useEffect, useRef } from 'react';

interface TreeNode {
  id: string;
  label: string;
  children?: string[];
}

interface TreeDiagramProps {
  nodes: TreeNode[];
  title?: string;
  width?: number;
  height?: number;
}

const TreeDiagram = ({ 
  nodes, 
  title,
  width = 600,
  height = 400 
}: TreeDiagramProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw title
    if (title) {
      ctx.fillStyle = '#000';
      ctx.font = 'bold 16px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(title, canvas.width / 2, 25);
    }

    // Calculate positions for nodes
    const positions = new Map<string, { x: number; y: number }>();
    const levels = new Map<number, string[]>();
    
    // Build level map (BFS)
    const root = nodes[0];
    const queue: { node: TreeNode; level: number }[] = [{ node: root, level: 0 }];
    const visited = new Set<string>();

    while (queue.length > 0) {
      const { node, level } = queue.shift()!;
      if (visited.has(node.id)) continue;
      visited.add(node.id);

      if (!levels.has(level)) {
        levels.set(level, []);
      }
      levels.get(level)!.push(node.id);

      if (node.children) {
        node.children.forEach(childId => {
          const childNode = nodes.find(n => n.id === childId);
          if (childNode) {
            queue.push({ node: childNode, level: level + 1 });
          }
        });
      }
    }

    // Calculate positions
    const levelHeight = 80;
    const startY = 60;

    levels.forEach((nodeIds, level) => {
      const y = startY + level * levelHeight;
      const spacing = canvas.width / (nodeIds.length + 1);
      
      nodeIds.forEach((nodeId, index) => {
        const x = spacing * (index + 1);
        positions.set(nodeId, { x, y });
      });
    });

    // Draw edges
    ctx.strokeStyle = '#6b7280';
    ctx.lineWidth = 2;
    
    nodes.forEach(node => {
      const parentPos = positions.get(node.id);
      if (!parentPos || !node.children) return;

      node.children.forEach(childId => {
        const childPos = positions.get(childId);
        if (!childPos) return;

        ctx.beginPath();
        ctx.moveTo(parentPos.x, parentPos.y + 25);
        ctx.lineTo(childPos.x, childPos.y - 25);
        ctx.stroke();
      });
    });

    // Draw nodes
    nodes.forEach(node => {
      const pos = positions.get(node.id);
      if (!pos) return;

      // Draw node circle
      ctx.fillStyle = '#22c55e';
      ctx.strokeStyle = '#16a34a';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 25, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();

      // Draw node label
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.label, pos.x, pos.y);
    });
  }, [nodes, title, width, height]);

  return (
    <div className="flex justify-center my-4">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="border border-gray-300 rounded-lg shadow-sm bg-white"
      />
    </div>
  );
};

export default TreeDiagram;
