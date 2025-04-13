import { generatePieChart } from "./generate-chart.js";
import { generateExcelWithImage } from "./generate-excel.js";
import { saveToWebdav } from "./save-to-webdav.js";

export async function process({ labels, values }) {
  const pngBuffer = await generatePieChart({ labels, values });
  const excelBuffer = await generateExcelWithImage(pngBuffer);

  const operationId = new Date().toISOString();
  await saveToWebdav(`pie/${operationId}/input.json`, JSON.stringify({ labels, values }, null, 2));
  await saveToWebdav(`pie/${operationId}/output.png`, pngBuffer);
  await saveToWebdav(`pie/${operationId}/output.xlsx`, excelBuffer);

  return excelBuffer;
}
