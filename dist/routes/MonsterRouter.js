"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const monster_queries_1 = require("../db/monster.queries");
class MonsterRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const monsters = yield monster_queries_1.default.getAll();
            res.json({ message: 'Success', monsters });
        });
    }
    getOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = parseInt(req.params.id);
            const monster = yield monster_queries_1.default.getOne(id);
            if (monster) {
                res.json({ message: 'Success', monster });
            }
            else {
                res.json({ message: 'No monster found with the given id.' });
            }
        });
    }
    add(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body.name && typeof req.body.name === 'string') {
                const monster = yield monster_queries_1.default.add(req.body);
                res.json({ message: 'Success', monster });
            }
            else {
                res.json({ message: 'Name is required to add a monster' });
            }
        });
    }
    edit(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = parseInt(req.params.id);
            const monster = yield monster_queries_1.default.edit(id, req.body);
            res.json({ message: 'Success', monster });
        });
    }
    remove(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = parseInt(req.params.id);
            try {
                yield monster_queries_1.default.remove(id);
                res.json({ message: 'Success' });
            }
            catch (error) {
                res.json({ message: 'No monster found with the given id.', error });
            }
        });
    }
    init() {
        this.router.get('/', this.getAll);
        this.router.get('/:id', this.getOne);
        this.router.post('/', this.add);
        this.router.put('/:id', this.edit);
        this.router.delete('/:id', this.remove);
    }
}
exports.MonsterRouter = MonsterRouter;
const monsterRoutes = new MonsterRouter();
monsterRoutes.init();
exports.default = monsterRoutes.router;
