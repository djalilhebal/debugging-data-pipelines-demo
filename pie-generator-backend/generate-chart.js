import Chart from 'chart.js/auto';
import { createCanvas } from 'canvas';

function generateColors(count) {
  // Example: simple HSL-based dynamic palette
  return Array.from({ length: count }, (_, i) => `hsl(${(360 / count) * i}, 70%, 60%)`);
}

export async function generatePieChart({ labels, values }) {
  const colors = generateColors(values.length);

  const canvas = createCanvas(400, 300);
  const chart = new Chart(canvas, {
    type: 'pie',
    data: {
      labels,
      datasets: [{
        data: values,
        backgroundColor: colors,
      }]
    }
  });

  const pngBuffer = canvas.toBuffer('image/png');
  chart.destroy();
  return pngBuffer;
}
