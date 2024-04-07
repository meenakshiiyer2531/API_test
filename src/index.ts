import express, { Request, Response } from 'express';
import { Pool } from 'pg';

const app = express();
const port = 2002;

const pool = new Pool({
  connectionString: 'postgresql://VMI:meenu2002@localhost:2002/API_test',

});

app.use(express.json());

// Route for adding a new student
app.post('/API_test', async (req: Request, res: Response) => {
  const { id, name, age } = req.body;

  try {
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO public.students (id, name, age) VALUES ($1, $2, $3) RETURNING *',
      [id, name, age]
    );
    client.release();
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error adding student:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
