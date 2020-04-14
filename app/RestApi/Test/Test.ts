import {Request,Response} from "express";

export interface Test {
    test(req:Request,res:Response):Response;
}
