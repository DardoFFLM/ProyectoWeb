import { Injectable } from '@nestjs/common';
import { Product } from '../producto/producto';
import * as fs from 'fs';

@Injectable()
export class CatalogoService {
    getProductos(): Product[] {
        let productos = fs.readFileSync('resources/productos.csv', 'utf8');
        const elementosP = productos.split('\n')
            .map(p => p.replace('\r', '')).map(p => p.split(','));
        let listaProductos: Product[] = [];
        for (let i = 0; i < elementosP.length; i++) {
                let producto = new Product(elementosP[i][0], elementosP[i][1], elementosP[i][2], elementosP[i][3], elementosP[i][4], elementosP[i][5]);
                listaProductos.push(producto);
        }
        return listaProductos;
    }
}