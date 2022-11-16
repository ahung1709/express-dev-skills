const skills = [
    {id: 100001, skill: 'HTML', done: true}, 
    {id: 100002, skill: 'CSS', done: true}, 
    {id: 100003, skill: 'JavaScript', done: true}, 
];

module.exports = {
    getAll: getAll,
};

function getAll() {
    return skills;
}