"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class MonsterRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    getAll(req, res, next) {
        res.json([]);
    }
    getOne(req, res, next) {
        let query = parseInt(req.params.id);
        const monster = {};
        if (monster) {
            res.json({ message: 'Success', monster });
        }
        else {
            res.json({ message: 'No monster found with the given id.' });
        }
    }
    init() {
        this.router.get('/', this.getAll);
        this.router.get('/:id', this.getOne);
    }
}
exports.MonsterRouter = MonsterRouter;
const monsterRoutes = new MonsterRouter();
monsterRoutes.init();
exports.default = monsterRoutes.router;
