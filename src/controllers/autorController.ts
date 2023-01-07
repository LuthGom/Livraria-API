import { Request, Response } from "express";

import { Autor } from "../models/Autor";

export default class AutorController {
  static async cadastrarAutor(req: Request, res: Response) {
    try {
      const { nome, genero, origem } = req.body;

      const autor = { nome, genero, origem };

      if (!nome) {
        res
          .status(422)
          .json({
            errorMessage: "o nome do autor é obrigatório para cadastro!",
          });
      }
      await Autor.create(autor);
      res.status(200).json({
        error: false,
        message: "Autor cadastrado com sucesso",
        autor: autor,
      });
    } catch (error) {
      res.status(500).json({ error: true, errorMessage: error });
    }
  }
  static async buscarTodosOsAutores(req: Request, res: Response) {
    res.json({ mensagem: "teste" });
  }
}
