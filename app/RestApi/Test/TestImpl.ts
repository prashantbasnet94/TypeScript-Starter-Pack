import {Response,Request} from "express";

const router = require('express').Router();
import {Test} from "./Test";

export class TestImpl implements  Test {
    test(req: Request, res: Response):Response{
        return res.send('all set');
    }
}
