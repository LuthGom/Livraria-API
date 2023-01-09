import { Request, Response } from "express";

import { Cliente } from "../models/Cliente";

export default class ClienteController {
  static async cadastrarCliente(req: Request, res: Response) {
    const { nome, senha, email, endereco } = req.body;

    const novoCliente = { nome, senha, email, endereco };
    // console.log(novoCliente);

    if (!nome || nome === "") {
      res
        .status(422)
        .json({ errr: true, errorMessage: "Campo nome é obrigatório!" });
    } else if (!senha || senha === "") {
      res
        .status(422)
        .json({ errr: true, errorMessage: "Campo senha é obrigatório!" });
    } else if (!email || email === "") {
      res
        .status(422)
        .json({ errr: true, errorMessage: "Campo email é obrigatório!" });
    } else if (!endereco || endereco === "") {
      res
        .status(422)
        .json({ errr: true, errorMessage: "Campo endereco é obrigatório!" });
    }
    try {
      await Cliente.create(novoCliente);
      res.status(201).json({
        error: false,
        message: "Cadastro de cliente bem sucedido",
        clienteCadastrado: novoCliente,
      });
    } catch (error) {
      res.status(400).json({ error: true, errorMessage: error });
      console.log(error);
    }
  }
  static async buscarTodosOsClientes(req: Request, res: Response) {
    try {
      const clientes = await Cliente.find();
      res.status(200).json({ error: false, clientes: clientes });
    } catch (error) {
      res.status(500).json({ error: true, errorMessage: error });
    }
  }
  static async buscarClientePeloId(req: Request, res: Response) {
    const id = req.params.id;

    try {
      const cliente = await Cliente.findById(id).exec();
      if (!cliente) {
        res.status(404).json({
          error: true,
          errorMessage:
            "Cliente não encontrado. Tente novamente com um id válido!",
        });
      } else {
        res.status(200).json({ error: false, cliente: cliente });
      }
    } catch (error) {
      res.status(500).json({ error: true, errorMessage: error });
    }
  }
  static async atualizarClientePeloId(req: Request, res: Response) {
    const id = req.params.id;

    const cliente = await Cliente.findById(id);
    const { nome, senha, email, endereco } = req.body;

    const novosDados = { nome, senha, email, endereco };
    if (!cliente) {
      res.status(404).json({
        error: true,
        errorMessage:
          "Cliente não encontrado. Tente novamente com um id válido!",
      });
    }
    try {
      await Cliente.findByIdAndUpdate(id, { $set: novosDados });
      res.status(201).json({
        error: false,
        message: "Cliente atualizado com sucesso",
        clienteAtualizado: novosDados,
      });
    } catch (error) {
      res.status(400).json({ error: true, errorMessage: error });
    }
  }
  static async deletarClientePeloId(req: Request, res: Response) {
    const id = req.params.id;

    const cliente = await Cliente.findById(id);

    if (!cliente) {
      res.status(404).json({
        error: true,
        errorMessage:
          "Cliente não encontrado. Tente novamente com um id válido!",
      });
    }
    try {
      await Cliente.findByIdAndDelete(id);
      res.status(200).json({
        error: false,
        message: `Cliente ${cliente?.nome} deletado com sucesso!`,
      });
    } catch (error) {
      res.status(400).json({ error: true, errorMessage: error });
    }
  }
}
