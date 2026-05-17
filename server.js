// ══════════════════════════════════════════════════════════════════
//  PremiumStore — Servidor de archivos estáticos
//  Ejecutar: node server.js  (o simplemente abre index.html directo)
// ══════════════════════════════════════════════════════════════════

const express = require('express');
const path    = require('path');

const app  = express();
const PORT = 3000;

// Servir archivos estáticos (index.html, imágenes, etc.)
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log('');
  console.log('  ╔══════════════════════════════════════════╗');
  console.log('  ║   PremiumStore — Servidor activo  🍎     ║');
  console.log(`  ║   http://localhost:${PORT}                  ║`);
  console.log('  ╚══════════════════════════════════════════╝');
  console.log('');
  console.log('  ✅ Los pagos van directo a Mercado Pago — sin backend necesario.');
  console.log('');
});
