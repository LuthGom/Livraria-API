import { Request, Response } from "express";
import mongoose, { CallbackError, ObjectId } from "mongoose";

import { Autor } from "../models/Autor";

export default class AutorController {
  static async cadastrarAutor(req: Request, res: Response) {
    try {
      const { nome, genero, origem } = req.body;

      const autor = { nome, genero, origem };

      if (!nome) {
        res.status(422).json({
          errorMessage: "o nome do autor é obrigatório para cadastro!",
        });
      } else if (typeof nome !== "string") {
        res.status(400).json({
          error: true,
          errorMessage:
            "Sintaxe errada! Tipo de inserido para nome não é válido!",
        });
      }
      await Autor.create(autor);
      res.status(201).json({
        error: false,
        message: "Autor cadastrado com sucesso",
        autor: autor,
      });
    } catch (error) {
      res.status(500).json({ error: true, errorMessage: error });
    }
  }
  static async buscarTodosOsAutores(req: Request, res: Response) {
    try {
      const autores = await Autor.find();
      res.status(200).json({
        error: false,
        message: "Busca de todos os autores bem sucedida",
        autores: autores,
      });
    } catch (error) {
      res.status(500).json({ error: true, errorMessage: error });
    }
  }
  static async buscarAutorPeloId(req: Request, res: Response) {
    const id = req.params.id;

    try {
      const autor = await Autor.findById(id).exec();
      if (!autor) {
        res.status(404).json({
          error: true,
          errorMessage:
            "Autor não encontrado. Tente novamente com um id válido!",
        });
      } else {
        res.status(200).json({ error: false, autor: autor });
      }
    } catch (error) {
      res.status(400).json({ error: true, errorMessage: error });
      console.error(error);
    }
  }
  static async atualizarAutorPeloId(req: Request, res: Response) {
    const id = req.params.id;

    const { nome, genero, origem } = req.body;
    const novosDados = { nome, genero, origem };
    const autor = await Autor.findById(id);

    if (!autor) {
      res.status(404).json({
        error: true,
        errorMessage: "Autor não encontrado. Tente novamente!",
      });
    }
    try {
      await Autor.findByIdAndUpdate(
        { _id: id },
        {
          $set: novosDados,
        }
      );
      res.status(201).json({ error: false, autor: novosDados });
    } catch (error) {
      res.status(400).json({ error: true, errorMessage: error });
      console.error(error);
    }
  }
  static async deletarAutorPeloId(req: Request, res: Response) {
    const id = req.params.id;

    const autor = await Autor.findById(id);

    if (!autor) {
      res.status(404).json({
        error: true,
        errorMessage: "Autor não encontrado. Tente novamente!",
      });
    }
    try {
      await Autor.findByIdAndDelete(id);
      res
        .status(200)
        .json({
          error: false,
          message: `Autor ${autor?.nome} deletado com sucesso!`,
        });
    } catch (error) {
      res.status(400).json({ error: true, errorMessage: error });
    }
  }
}
