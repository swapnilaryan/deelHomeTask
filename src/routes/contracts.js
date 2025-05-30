const { Router } = require('express');

const { getProfile } = require('../middleware/getProfile.js');
const { getContract, getNotFinishedContracts } = require('../services/contract.js');
const {HEADERS} = require("../constants");
const {getHeaderValue} = require("../utils");

const contractRoute = Router();
const path = '/contracts';

contractRoute.use(path, getProfile);

contractRoute.get(`${path}/:id`, async (req, res) => {
    const { id: contractId } = req.params;
    const profileId = getHeaderValue(req, HEADERS.PROFILE_ID);
    const contract = await getContract(contractId, profileId);
    if (!contract) return res.status(404).send();
    res.send(contract);
});

contractRoute.get(`${path}`, async (req, res) => {
    const profileId = getHeaderValue(req, HEADERS.PROFILE_ID);
    const contracts = await getNotFinishedContracts(profileId);
    if (!contracts) return res.status(404).send();
    res.send(contracts);
});

module.exports = contractRoute;