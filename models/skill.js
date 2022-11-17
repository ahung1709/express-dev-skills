const skills = [
    {id: 100001, skill: 'HTML', done: true}, 
    {id: 100002, skill: 'CSS', done: true}, 
    {id: 100003, skill: 'JavaScript', done: true}, 
];

module.exports = {
    getAll: getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id))
}