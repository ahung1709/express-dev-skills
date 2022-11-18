const skill = require('../models/skill');
const skillsDB = require('../models/skill')

module.exports = {
    index, 
    show,
    new: newSkill, 
    create, 
    delete: deleteSkill, 
    edit: editSkill, 
    update: updateSkill, 
}

function index(req, res) {
    res.render('skills/index', {skills: skillsDB.getAll()});
}

function show(req, res) {
    let skill = skillsDB.getOne(req.params.id)
    res.render("skills/show", { skill: skill })
}

function newSkill(req, res) {
    res.render("skills/new") // an ejs template as arg
}

function create(req, res) {
    skillsDB.create(req.body)
    // res.redirect anytime data is changed
    res.redirect('/skills') // a route (path) as arg
}

function deleteSkill(req, res) {
    skillsDB.deleteOne(req.params.id)
    res.redirect('/skills')
}

function editSkill(req, res) {
    let skill = skillsDB.getOne(req.params.id)
    res.render("skills/edit", { skill: skill })
}

function updateSkill(req, res) {
    skillsDB.updateOne(req.params.id, req.body)
    res.redirect('/skills/'+req.body.id)
}