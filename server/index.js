// Importamos las dependencias necesarias
const express = require('express');
const {Pool} = require('pg');
const cors = require('cors');
require('dotenv').config();

// Creamos la aplicación Express
const app = express();

// Habilitamos CORS y el parsing de JSON
app.use(cors());
app.use(express.json());

// Configuramos la conexión a la base de datos
const pool = new Pool({
    user: process.env.DB_USER,        // Usuario de PostgreSQL
    host: process.env.DB_HOST,        // Dirección del servidor
    database: process.env.DB_NAME,    // Nombre de la base de datos
    password: process.env.DB_PASSWORD, // Contraseña
    port: process.env.DB_PORT,        // Puerto (normalmente 5432)
});

// ENDPOINT 1: Obtener todas las barberías
app.get('/api/barbershops', async (req, res) => {
    try {
        // Ejecuta una consulta SQL para obtener todas las barberías
        const result = await pool.query('SELECT * FROM barbershops');
        // Devuelve los resultados como JSON
        res.json(result.rows);
    } catch (err) {
        // Si hay un error, devuelve un estado 500 y el mensaje de error
        res.status(500).json({error: err.message});
    }
});

// ENDPOINT 2: Obtener los bookmarks de un usuario específico
app.get('/api/bookmarks/:userId', async (req, res) => {
    try {
        const {userId} = req.params; // Obtiene el ID del usuario de la URL

        // Ejecuta una consulta SQL más compleja:
        const result = await pool.query(
            `SELECT b.*
             FROM barbershops b -- Selecciona todas las columnas de barberías
                      JOIN bookmarks bm -- Conecta con la tabla bookmarks
                           ON b.id = bm.barbershop_id -- Donde los IDs coincidan, Y el usuario sea el especificado
             WHERE bm.user_id = $1`,
            [userId]                         // El ID del usuario se pasa como parámetro
        );

        res.json(result.rows);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// ENDPOINT 3: Agregar un bookmark
app.post('/api/bookmarks', async (req, res) => {
    try {
        const {barbershopId} = req.body;

        // Por ahora asumimos un usuario fijo (después implementaremos autenticación)
        const userId = 1;

        // Verificar si el bookmark ya existe
        const existingBookmark = await pool.query(
            'SELECT * FROM bookmarks WHERE user_id = $1 AND barbershop_id = $2',
            [userId, barbershopId]
        );

        if (existingBookmark.rows.length > 0) {
            // Si existe, lo eliminamos
            await pool.query(
                'DELETE FROM bookmarks WHERE user_id = $1 AND barbershop_id = $2',
                [userId, barbershopId]
            );
            res.json({saved: false});
        } else {
            // Si no existe, lo creamos
            await pool.query(
                'INSERT INTO bookmarks (user_id, barbershop_id) VALUES ($1, $2)',
                [userId, barbershopId]
            );
            res.json({saved: true});
        }
    } catch (err) {
        console.error('Error en toggle bookmark:', err);
        res.status(500).json({error: err.message});
    }
});

// ENDPOINT 4: Obtener una barbería específica
app.get('/api/barbershops/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const result = await pool.query(
            'SELECT * FROM barbershops WHERE id = $1',
            [id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// ENDPOINT 5: Verificar estado del bookmark
app.get('/api/bookmarks/status/:barbershopId', async (req, res) => {
    try {
        const {barbershopId} = req.params;
        // Por ahora usamos un userId fijo
        const userId = 1;

        const result = await pool.query(
            'SELECT * FROM bookmarks WHERE user_id = $1 AND barbershop_id = $2',
            [userId, barbershopId]
        );
        res.json({saved: result.rows.length > 0});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// Inicia el servidor en el puerto especificado
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});