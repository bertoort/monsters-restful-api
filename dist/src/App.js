"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const MonsterRouter_1 = require("./routes/MonsterRouter");
class App {
    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        let router = express.Router();
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World!'
            });
        });
        this.app.use('/', router);
        this.app.use('/api/v1/monsters', MonsterRouter_1.default);
    }
}
exports.default = new App().app;
