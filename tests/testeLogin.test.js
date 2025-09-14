import { jest } from "@jest/globals";
import fazLogin from "../controllers/controllerLogin.js";

describe("fazLogin controller", () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: { nome: "Usuario", password: "123456" },
      session: {}
    };
    res = {
      render: jest.fn(),
      redirect: jest.fn()
    };
  });
  it("redireciona para mostraInformacoes se login for válido", async () => {
    await fazLogin(req, res);

    expect(res.redirect).toHaveBeenCalledWith("mostraInformacoes");
    expect(req.session.nome).toBe("Usuario");
  });

  it("renderiza login com erro se login for inválido", async () => {
    req.body.nome = "errado";
    req.body.password = "999";

    await fazLogin(req, res);

    expect(res.render).toHaveBeenCalledWith("login", { msg: "Usuário ou senha inválidos" });
  });
});

//Testa o controller de login