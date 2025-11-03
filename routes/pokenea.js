const express = require('express');
const router = express.Router();
const os = require('os');
const pokeneas = require('../data/pokeneas');

// Ruta que muestra imagen y frase filosófica de un Pokenea aleatorio
router.get('/pokenea', (req, res) => {
  const randomIndex = Math.floor(Math.random() * pokeneas.length);
  const pokenea = pokeneas[randomIndex];
  const containerId = os.hostname();
  
  const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pokenea - ${pokenea.nombre}</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          margin: 0;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
        .container {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          max-width: 600px;
          text-align: center;
        }
        h1 {
          color: #333;
          margin-bottom: 30px;
          font-size: 2.5em;
        }
        .pokenea-image {
          width: 100%;
          max-width: 400px;
          height: auto;
          border-radius: 15px;
          margin: 20px 0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        .quote {
          font-size: 1.3em;
          color: #555;
          font-style: italic;
          margin: 30px 0;
          padding: 20px;
          background: #f8f9fa;
          border-left: 4px solid #667eea;
          border-radius: 5px;
        }
        .container-id {
          margin-top: 30px;
          padding: 15px;
          background: #e9ecef;
          border-radius: 10px;
          color: #666;
          font-size: 0.9em;
        }
        .container-id strong {
          color: #333;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>${pokenea.nombre}</h1>
        <img src="${pokenea.imagen}" alt="${pokenea.nombre}" class="pokenea-image" onerror="this.src='https://via.placeholder.com/400x400?text=Imagen+no+disponible'">
        <div class="quote">
          "${pokenea.frase}"
        </div>
        <div class="container-id">
          <strong>Container ID:</strong> ${containerId}
        </div>
      </div>
    </body>
    </html>
  `;
  
  res.send(html);
});

module.exports = router;

