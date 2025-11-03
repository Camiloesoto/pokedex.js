const express = require('express');
const apiRoutes = require('./routes/api');
const pokeneaRoutes = require('./routes/pokenea');

const app = express();
const port = 80;

// Rutas
app.use('/api', apiRoutes);
app.use('/', pokeneaRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pokedex Pokeneas</title>
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
          text-align: center;
        }
        h1 {
          color: #333;
          margin-bottom: 20px;
        }
        .links {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 30px;
        }
        a {
          display: inline-block;
          padding: 15px 30px;
          background: #667eea;
          color: white;
          text-decoration: none;
          border-radius: 10px;
          font-size: 1.1em;
          transition: background 0.3s;
        }
        a:hover {
          background: #5568d3;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Pokedex Pokeneas</h1>
        <p>Bienvenido a la Pokedex de Pokeneas nacidos en Antioquia</p>
        <div class="links">
          <a href="/pokenea">Ver Pokenea (HTML)</a>
          <a href="/api/pokenea">Ver Pokenea (JSON)</a>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Pokedex app listening on port ${port}`);
});

