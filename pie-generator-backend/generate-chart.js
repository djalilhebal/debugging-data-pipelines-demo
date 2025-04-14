import Chart from 'chart.js/auto';
import { Canvas } from 'skia-canvas';

function generateColors(count) {
  // Example: simple HSL-based dynamic palette
  return Array.from({ length: count }, (_, i) => `hsl(${(360 / count) * i}, 70%, 60%)`);
}

export async function generatePieChart({ labels, values }) {
  const colors = generateColors(values.length);

  const canvas = new Canvas(400, 300);
  const chart = new Chart(
    canvas, // TypeScript needs "as any" here
    {
      type: 'pie',
      data: {
        labels,
        datasets: [{
          data: values,
        }],
        backgroundColor: colors,
      }
    }
  );
  const pngBuffer = await canvas.toBuffer('png', { matte: 'white' });
  chart.destroy();
  return pngBuffer;
}
