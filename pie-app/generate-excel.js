import ExcelJS from 'exceljs';

/**
 * @param {Buffer} imageBuffer image buffer
 * @param {{width: number, height: number}} imageDims image dimensions in pixels
 * @returns {Promise<Buffer>}
 */
export async function generateExcelWithImage(imageBuffer, imageDims = { width: 400, height: 300 }) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Image Sheet');

  // Add image to workbook
  const imageId = workbook.addImage({
    buffer: imageBuffer,
    extension: 'png',
  });

  // You can only add image to a specific cell or range. This inserts it over cell B2 with size
  worksheet.addImage(imageId, {
    tl: { col: 1, row: 1 }, // top-left corner (B2)
    ext: { ...imageDims },
  });

  const excelBuffer = await workbook.xlsx.writeBuffer();
  return excelBuffer;
}
