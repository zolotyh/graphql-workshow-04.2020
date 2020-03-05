import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
import {Products} from "./db/entities/Products.entity";

(async function(){
    const connection = await createConnection();
    const products = await getRepository(Products).find();
    console.log(JSON.stringify(products, null, 2));
    await connection.close();
})()
