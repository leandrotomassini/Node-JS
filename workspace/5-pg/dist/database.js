"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: 'postgres',
    host: '192.168.1.200',
    password: 'Universidad11201911',
    database: 'firstapi',
    port: 5432
});
