import { Request, Response } from "express";

import { Editora } from "../models/Editora";

export default class EditoraController {
  static async cadastrarEditora(req: Request, res: Response) {
    const { nome, cidade, cnpj } = req.body;

    const novaEditora = { nome, cidade, cnpj };

    if (!nome || nome === "") {
      res
        .status(422)
        .json({ errr: true, errorMessage: "Campo titulo é obrigatório!" });
    } else if (!cnpj || cnpj === "") {
      res
        .status(422)
        .json({ errr: true, errorMessage: "Campo titulo é obrigatório!" });
    }
    try {
      await Editora.create(novaEditora);
      res.status(201).json({
        error: false,
        message: "Cadastro de nova Editora bem suceido!",
        editora: novaEditora,
      });
    } catch (error) {
      res.status(400).json({ error: true, errorMessage: error });
    }
  }
  static async listarTodasAsEditoras(req: Request, res: Response) {
    try {
      const editoras = await Editora.find().exec();
      res.status(200).json({
        error: false,
        message: "Requisição bem sucedida",
        editoras: editoras,
      });
    } catch (error) {
      res.status(500).json({ error: true, errorMessage: error });
    }
  }
  static async listarEditoraPorId(req: Request, res: Response) {
    const id = req.params.id;

    try {
      const editora = await Editora.findById(id);
      if (!editora) {
        res.status(404).json({
          error: true,
          errorMessage: "Editora não encontrada! Tente novamente.",
        });
      }
      res.status(200).json({
        error: false,
        message: "Requisição bem sucedida",
        editora: editora,
      });
    } catch (error) {
      res.status(500).json({ error: true, errorMessage: error });
    }
  }
  static async atualizarEditoraPorId(req: Request, res: Response) {
    const id = req.params.id;
    const { nome, cidade, cnpj } = req.body;
    const editoraAtualizada = { nome, cidade, cnpj };
    const editora = await Editora.findById(id);
    if (!editora) {
      res
        .status(404)
        .json({ errr: true, errorMessage: "Editora não encontrada!" });
    }

    try {
      await Editora.findByIdAndUpdate(id, { $set: editoraAtualizada });
      res.status(201).json({
        error: false,
        message: "Editora atualizada com sucesso!",
        editoraAtualizada: editoraAtualizada,
      });
    } catch (error) {
      res.status(400).json({ error: true, errorMessage: error });
    }
  }
  static async deleteEditoraPorId(req: Request, res: Response) {
    const id = req.params.id;

    const editora = await Editora.findById(id);
    if (!editora) {
      res
        .status(404)
        .json({ errr: true, errorMessage: "Editora não encontrada!" });
    }

    try {
      await Editora.findByIdAndDelete(id);
      res.status(204).json({
        error: false,
        message: "Editora deletada com sucesso!",
      });
    } catch (error) {
      res.status(400).json({ error: true, errorMessage: error });
    }
  }
}
