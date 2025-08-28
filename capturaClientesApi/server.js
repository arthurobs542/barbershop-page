const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rota POST para receber os dados e gerar o link do WhatsApp
app.post("/agendar", (req, res) => {
  const { name, telefone, servico, mensagem } = req.body;
  const numeroWhatsApp = "5585991769862"; // DDD + número
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=Nome:%20${encodeURIComponent(
    name
  )}%0ATelefone:%20${encodeURIComponent(
    telefone
  )}%0AServiço:%20${encodeURIComponent(
    servico
  )}%0AMensagem:%20${encodeURIComponent(mensagem)}`;

  res.json({
    success: true,
    message: "Mensagem gerada com sucesso",
    url: urlWhatsApp,
  });
});

// Rodar o servidor HTTP
http.createServer(app).listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
