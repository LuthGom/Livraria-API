import { Livro } from "../models/Livro";
import { Request, Response } from "express";
export default class LivroController {
  static async cadastrarLivro(req: Request, res: Response) {
    const {
      titulo,
      autor,
      editora,
      volume,
      numeroDePaginas,
      isbn,
      generoLiterario,
    } = req.body;

    const novoLivro = {
      titulo,
      autor,
      editora,
      volume,
      numeroDePaginas,
      isbn,
      generoLiterario,
    };
    if (!titulo || titulo === "") {
      res
        .status(422)
        .json({ errr: true, errorMessage: "Campo titulo é obrigatório!" });
    } else if (!autor || autor === "") {
      res
        .status(422)
        .json({ errr: true, errorMessage: "Campo autor é obrigatório!" });
    } else if (!editora || editora === "") {
      res
        .status(422)
        .json({ errr: true, errorMessage: "Campo editora é obrigatório!" });
    }
    try {
      await Livro.create(novoLivro);
      res.status(201).json({
        error: false,
        message: `Livro ${titulo} cadastrado com sucesso!`,
        livro: novoLivro,
      });
    } catch (error) {
      res.status(400).json({ error: true, errorMessage: error });
    }
  }
  static  listarTodosOsLivros(req: Request, res: Response) {
    Livro.find()
      .populate({ path: "author", select: "nome" })
      .populate({ path: "publisher", select: "nome" })
      .exec((err, livros) => {
        res.status(200).send(livros);
      });
  }
  static listarLivroPeloId(req: Request, res: Response) {
    const id = req.params.id;

    try {
      const livro = Livro.findById(id)
        .populate("author")
        .populate("publisher")
        .exec((err) => {
          if (err) {
            res.status(500).json({ error: true, errorMessage: err.message });
          }
        });
      res.status(200).json({
        error: false,
        message: "Requisição bem sucedida",
        livro: livro,
      });
    } catch (error) {
      res.status(400).json({ error: true, errorMessage: error });
    }
  }
  static async atualizarLivroPeloId(req: Request, res: Response) {
    const id = req.params.id;

    const livro = await Livro.findById(id);
    if (!livro) {
      res.status(404).json({
        error: true,
        errorMessage: "Livro não encontrado. Tente novamente!",
      });
    }
    const livroAtualizado = req.body;
    try {
      await Livro.findByIdAndUpdate(id, { $set: livroAtualizado });
      res
        .status(201)
        .json({ error: false, errorMessage: "Livro atualizado com sucesso!" });
    } catch (error) {
      res.status(500).json({ error: true, errorMessage: error });
    }
  }

  static async deletarLivroPeloId(req: Request, res: Response) {
    const id = req.params.id;
    const livro = await Livro.findById(id);
    if (!livro) {
      res.status(404).json({
        error: true,
        errorMessage: "Livro não encontrado. Tente novamente!",
      });
    }
    try {
      await Livro.findByIdAndDelete(id);
      res.status(200).json({
        error: false,
        message: `Livro ${livro?.titulo} deletado com suceso!`,
      });
    } catch (error) {
      res.status(400).json({ error: true, errorMessage: error });
    }
  }
}
