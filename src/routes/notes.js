const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const { isAuthenticated } = require('../helpers/auth');

//Ruta para Agregar notas
router.get('/notes/add', isAuthenticated, (req, res) => {
    res.render('notes/new-note');
});

//Ruta para recibir los datos de la pagina de note/new-notes
router.post('/notes/new-note', isAuthenticated, async(req, res) => {
    //Datos como variables
    const { tittle, description } = req.body;
    //Creando una forma para validar las variables    
    const errors = [];
    if (!tittle) {
        errors.push({ text: 'Please Write a Title' });
    }
    if (!description) {
        errors.push({ text: 'Please Write a Description' });
    }
    if (errors.length > 0) {
        res.render('notes/new-note', {
            errors,
            tittle,
            description
        });
    } else {
        const newNote = new Note({ tittle, description });
        newNote.user = req.user.id;
        await newNote.save();
        req.flash('success_msg', 'Note add Successfully');
        res.redirect('/notes');
    }
});

router.get('/notes', isAuthenticated, async(req, res) => {
    const notes = await Note.find({ user: req.user.id }).sort({ date: 'desc' });
    res.render('notes/all-notes', { notes });
});

// Ruta para Editar
router.get('/notes/edit/:id', isAuthenticated, async(req, res) => {
    //req.params.id para tomar el id que esta en la ruta.
    const note = await Note.findById(req.params.id);
    res.render('notes/edit-note', { note });
});

//Ruta para recibir y actualizar la nota editada
router.put('/notes/edit-note/:id', isAuthenticated, async(req, res) => {
    const { tittle, description } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { tittle, description });
    req.flash('success_msg', 'Note Updated Successfully');
    res.redirect('/notes');
});

router.delete('/notes/delete/:id', isAuthenticated, async(req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Note Deleted Successfully');
    res.redirect('/notes');
});

module.exports = router;