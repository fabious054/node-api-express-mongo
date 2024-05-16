import http from "http";

const PORT = 3000;

const rotas = {
    "/" : "curso de express api",
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(rotas[req.url] || "rota não encontrada");
});

server.listen(PORT, () => {
  console.log("servidor escutando!");
});