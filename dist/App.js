"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const MonsterRouter_1 = require("./routes/MonsterRouter");
class App {
    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.app.use(cors());
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        let router = express.Router();
        router.get('/', (req, res, next) => {
            res.json({
                message: 'RESTful API /api/v1/monsters'
            });
        });
        this.app.use('/', router);
        this.app.use('/api/v1/monsters', MonsterRouter_1.default);
    }
}
exports.default = new App().app;
