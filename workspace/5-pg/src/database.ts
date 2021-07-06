import { Pool } from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: '192.168.1.200',
    password: 'Universidad11201911',
    database: 'firstapi',
    port: 5432
});

