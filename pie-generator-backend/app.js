import express from 'express';

import * as pieService from './pie-service.js';

const app = express();
// TODO: Make this configurable
const port = 3000;

// GET /pie?a=1&b=2
app.get('/pie', (req, res) => {
  const keyValues = Object.entries(req.query);
  const keys = keyValues.map(([key]) => key);
  const values = keyValues.map(([, value]) => Number(value));

  const isValid = values.length > 0 && values.every(value => !Number.isNaN(value));
  if (!isValid) {
    res.status(400);
    return res.send('Bad request');
  }

  pieService.generateExcel({ labels: keys, values })
    .then(excelBuffer => {
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.setHeader('Content-Disposition', 'attachment; filename="output.xlsx"');
      res.send(excelBuffer);
    })
    .catch(err => {
      console.error(err);
      res.status(500);
      res.send('Internal server error');
    });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

export default app;
