import mongoose from "mongoose";

export interface IAutor {
  id: String;
  nome: String;
  genero: String;
  origem: String;
}

export interface ILivro {
  id: String;
  titulo: String;
  autor: Object;
  editora: Object;
  volume: String;
  numeroDePaginas: string;
  isbn: Number;
  generoLiterario: String;
}

export interface IEditora {
  id: String;
  nome: String;
  cidade: String;
  cnpj: String;
}

export interface IAdmin {
  id: String;
  nome: String;
  usuario_admin: String;
  senha: String;
  email: String;
}

export interface ICliente {
  id: String;
  nome: String;
  senha: String;
  email: String;
  endereco: Endereco
}

export type Endereco = {
  rua: string;
  numero: number;
  bairro: string;
  cep: number;
  cidade: string;
  uf: string;
};
