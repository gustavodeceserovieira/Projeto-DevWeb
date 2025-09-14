import { jest } from "@jest/globals";


jest.unstable_mockModule("../models/select.js", () => ({
  retorna_historico_pagamento: jest.fn(() => Promise.resolve([
    { 
      id_pagamento: 4, 
      rg_aluno: "23232323232", 
      nome_aluno: "Pix da silva", 
      data_pagamento: "2025-09-06T03:00:00.000Z" 
    }
  ]))
}));


const { default: telaHistoricoPagamento } = await import("../controllers/controllerPagamento.js");

describe("Controller telaHistoricoPagamento", () => {
  test("deve renderizar historicoPagamento com os dados", async () => {
    const req = {};
    const res = { render: jest.fn() };

    await telaHistoricoPagamento(req, res);

    expect(res.render).toHaveBeenCalledWith("historicoPagamento", {
      data: [
        { 
          id_pagamento: 4, 
          rg_aluno: "23232323232", 
          nome_aluno: "Pix da silva", 
          data_pagamento: "2025-09-06T03:00:00.000Z" 
        }
      ]
    });
  });
});

//teste do controller de histórico de pagamento