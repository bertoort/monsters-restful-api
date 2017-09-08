"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knex = require("knex");
const config = require("../../knexfile");
const environment = process.env.NODE_ENV || 'development';
exports.default = knex(config[environment]);
