const contractRoute = require('./contracts');
const jobsRoute = require('./jobs');

module.exports = [
    { path: '/contracts', router: contractRoute },
    { path: '/jobs', router: jobsRoute }
];