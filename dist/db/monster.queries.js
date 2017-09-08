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
const connection_1 = require("./connection");
const getAll = () => {
    return connection_1.default('monster').select();
};
const getOne = (id) => __awaiter(this, void 0, void 0, function* () {
    const monster = yield connection_1.default('monster').select().where('id', id);
    return monster[0];
});
const add = (monster) => __awaiter(this, void 0, void 0, function* () {
    const result = yield connection_1.default('monster').insert(monster).returning('*');
    return result[0];
});
const edit = (id, monster) => __awaiter(this, void 0, void 0, function* () {
    const result = yield connection_1.default('monster').update(monster).where('id', id).returning('*');
    return result[0];
});
const remove = (id) => {
    return connection_1.default('monster').del().where('id', id);
};
exports.default = {
    getAll,
    getOne,
    add,
    edit,
    remove
};
