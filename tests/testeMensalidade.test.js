import { jest } from "@jest/globals";


jest.unstable_mockModule("../models/update.js", () => ({
  atualiza_mensalidade: jest.fn(() => Promise.resolve())
}));

jest.unstable_mockModule("../models/insert.js", () => ({
  insere_historico: jest.fn(() => Promise.resolve())
}));


const { editaMensalidade } = await import("../controllers/controllerMensalidade.js");


const updateModule = await import("../models/update.js");
const insertModule = await import("../models/insert.js");


describe("Teste do editaMensalidade", () => {
    it("deve atualizar mensalidade e inserir histórico quando on=true", async () => {
    const req = {
      body: {
        rg: "123456789 Aluno Teste",
        on: "on",
        data_pagamento: "2025-09-06T03:00:00.000Z"
      }
    };
    const res = { redirect: jest.fn() };

    await editaMensalidade(req, res);

    expect(updateModule.atualiza_mensalidade).toHaveBeenCalledWith({
      Rg: "123456789",
      Nome: "Aluno Teste",
      Mensalidade: 1
    });

    expect(insertModule.insere_historico).toHaveBeenCalledWith(
      "123456789",
      { Rg: "123456789", Nome: "Aluno Teste", Mensalidade: 1 },
      "2025-09-06T03:00:00.000Z"
    );

    expect(res.redirect).toHaveBeenCalledWith("mostraInformacoes");
  });
});

//Teste do controller de pagamento de mensalidade