import { Request, Response } from "express";
import CreateProductService from "../services/CreateProductService";
import ListProductService from "../services/ListProductService";
import ShowProductService from "../services/ShowProductService";

// observem que não há regra de negócio aqui, elas estão nos services
export default class ProductController {
    // vai chamar o ListProductService
    public async index(request: Request, response: Response): Promise<Response> {
        const listProduct = new ListProductService()
        const products = await listProduct.execute()
        return response.json(products) // converte para JSON e retorna
    }
    // vai chamar o ShowProductService
    public async show(request: Request, response: Response): Promise<Response> {
        // recupera o id do produto que vem dentro dos parâmetros da URL
        const {id} = request.params
        const showProduct = new ShowProductService()
        const product = await showProduct.execute(id)
        return response.json(product)
    }
    // vai chamar o CreateProductService
    public async create(request: Request, response: Response): Promise<Response> {
        // recupera os dados do produto que vem no corpo (body) do requisição
        const {name, quantity, price} = request.body
        const createProduct = new CreateProductService()
        const product = await createProduct.execute({name, quantity, price})
        return response.json(product)
    }
    
}