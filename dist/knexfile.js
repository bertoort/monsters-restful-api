"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const development = {
    client: 'pg',
    connection: 'postgres://localhost/monsters'
};
exports.development = development;
const production = {
    client: 'pg',
    connection: process.env.DATABASE_URL
};
exports.production = production;
