const skills = [
    {id: 100001, skill: 'HTML', done: true}, 
    {id: 100002, skill: 'CSS', done: false}, 
    {id: 100003, skill: 'JavaScript', done: true}, 
];

module.exports = {
    getAll: getAll,
    getOne, 
    create, 
    deleteOne, 
    updateOne, 
};

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id))
}

function create(incomingSkill) {
    incomingSkill.done = false
    incomingSkill.id = Date.now() % 1000000
    skills.push(incomingSkill)
}

function deleteOne(id) {
    let idx = skills.findIndex( skill => skill.id === parseInt(id))
    skills.splice(idx, 1)
}

function updateOne(id, incomingSkill) {
    let idx = skills.findIndex( skill => skill.id === parseInt(id))
    skills[idx].id = parseInt(incomingSkill.id)
    skills[idx].skill = incomingSkill.skill
    skills[idx].done = incomingSkill.done === "on"
}