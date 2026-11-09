const db = require('../models');

async function getAllKomik(req, res) {
    try {
        const Komik = await db.Komik.findAll();
        res.status(200).json(Komik);
    } catch (error) {
        console.error('Error retrieving komik:', error.message);
        res.status(500).json({ error: "an error occured while retrieving komik."});
    }
}