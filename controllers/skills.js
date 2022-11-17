const skillsDB = require('../models/skill')

module.exports = {
    index, 
    show
}

function index(req, res, next) {
    res.render('skills/index', {skills: skillsDB.getAll()});
}

function show(req, res) {
    let skill = skillsDB.getOne(req.params.id)
    res.render("skills/show", { skill: skill })
}