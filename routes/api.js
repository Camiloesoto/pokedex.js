const express = require('express');
const router = express.Router();
const os = require('os');
const pokeneas = require('../data/pokeneas');

// Ruta que devuelve JSON con id, nombre, altura, habilidad de un Pokenea aleatorio
router.get('/pokenea', (req, res) => {
  const randomIndex = Math.floor(Math.random() * pokeneas.length);
  const pokenea = pokeneas[randomIndex];
  
  const response = {
    id: pokenea.id,
    nombre: pokenea.nombre,
    altura: pokenea.altura,
    habilidad: pokenea.habilidad,
    containerId: os.hostname()
  };
  
  res.json(response);
});

module.exports = router;

