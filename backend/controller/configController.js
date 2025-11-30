import { Router } from 'express';
const endpoints = Router();

endpoints.get('/config', (req, resp) => {
  try {
    const porta = process.env.API_PORTA || process.env.api_porta || process.env.PORT || 3000;
    // monta a URL com http e localhost por padrão. Caso você queira usar host/https, ajuste aqui ou melhore a detecção
    const apiUrl = `http://localhost:${porta}`;
    return resp.status(200).send({ apiUrl });
  } catch (err) {
    return resp.status(500).send({ mensagem: 'Erro ao ler configuração', erro: err.message });
  }
});

export default endpoints;
