"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const app = (0, express_1.default)();
const port = 2002;
const pool = new pg_1.Pool({
    connectionString: 'postgresql://VMI:meenu2002@localhost:2002/API_test',
});
app.use(express_1.default.json());
app.post('/students', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age } = req.body;
    try {
        const client = yield pool.connect();
        const result = yield client.query('INSERT INTO students (name, age) VALUES ($1, $2) RETURNING *', [name, age]);
        client.release();
        res.status(201).json(result.rows[0]);
    }
    catch (err) {
        console.error('Error adding student:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
