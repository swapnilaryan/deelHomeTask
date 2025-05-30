const { Router } = require('express');
const {HEADERS} = require("../constants");
const {getHeaderValue} = require("../utils");
const {getUnpaidJobs} = require("../services/jobs");

const jobsRoute = Router();

jobsRoute.get('/unpaid', async (req, res) => {
    const profileId = getHeaderValue(req, HEADERS.PROFILE_ID);
    const jobs = await getUnpaidJobs(profileId);
    if (!jobs) return res.status(404).send();
    res.send(jobs);
});

module.exports = jobsRoute;