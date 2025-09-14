import { logout } from "../controllers/controllerLogout.js"
import { jest } from "@jest/globals";

describe("Controller logout", () => {
  let req, res;

  beforeEach(() => {
    req = {
      session: {
        sessionId: "abc123",
        destroy: jest.fn((callback) => callback())
      }
    };

    res = {
      render: jest.fn()
    };
  });

  it("deve destruir a sessão e renderizar login", async () => {
    await logout(req, res);

    expect(req.session.destroy).toHaveBeenCalled();
    expect(res.render).toHaveBeenCalledWith("login", { msg: "" });
  });

  it("não chama destroy se não houver sessionId", async () => {
    req.session = {};

    await logout(req, res);

    expect(res.render).not.toHaveBeenCalled();
  });
});

//Teste do controller de Logout