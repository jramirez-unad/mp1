const express = require('express');
const router = express.Router();
const Estudiante = require('../models/Estudiantes');

//Ruta para Agregar notas
router.get('/mp1/add', (req, res) => {
    res.render('mp1/new-estudiante');
});

//Ruta para recibir los datos de la pagina de note/new-notes
router.post('/mp1/new-estudiante', async(req, res) => {
    //Datos como variables
    const { nombre, apellido, matricula, carrera } = req.body;
    //Creando una forma para validar las variables    
    const errors = [];
    if (!nombre) {
        errors.push({ text: 'Please Write a Nombre' });
    }
    if (!apellido) {
        errors.push({ text: 'Please Write a Apellido' });
    }
    if (!matricula) {
        errors.push({ text: 'Please Write a Matricula' });
    }
    if (!carrera) {
        errors.push({ text: 'Please Write a Carrera' });
    }
    if (errors.length > 0) {
        res.render('mp1/new-estudiante', {
            errors,
            nombre,
            apellido,
            matricula,
            carrera
        });
    } else {
        const newEstudiante = new Estudiante({ nombre, apellido, matricula, carrera });
        await newEstudiante.save();
        req.flash('success_msg', 'Estudiante add Successfully');
        res.redirect('/mp1');
    }
});

router.get('/mp1', async(req, res) => {
    const estudiante = await Estudiante.find().sort({ date: 'desc' });
    res.render('mp1/all-estudiante', { estudiante });
});

// Ruta para Editar
router.get('/mp1/edit/:id', async(req, res) => {
    //req.params.id para tomar el id que esta en la ruta.
    const estudiante = await Estudiante.findById(req.params.id);
    res.render('mp1/edit-estudiante', { estudiante });
});

//Ruta para recibir y actualizar la nota editada
router.put('/mp1/edit-estudiante/:id', async(req, res) => {
    const { nombre, apellido, matricula, carrera } = req.body;
    await Estudiante.findByIdAndUpdate(req.params.id, { nombre, apellido, matricula, carrera });
    req.flash('success_msg', 'Estudiante Updated Successfully');
    res.redirect('/mp1');
});

router.delete('/mp1/delete/:id', async(req, res) => {
    await Estudiante.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Estudiante Deleted Successfully');
    res.redirect('/mp1');
});

module.exports = router;