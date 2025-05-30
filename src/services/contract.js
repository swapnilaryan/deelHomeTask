const { Contract } = require('../model.js');
const { Op } = require('sequelize');

const getContract = async (contractId, profileId) => {
    if(!contractId || ! profileId) return null;
    const where = {
        id: contractId,
        [Op.or]: [{ ContractorId: profileId }, { ClientId: profileId }]
    }
    return Contract.findOne({ where });
}

const getNotFinishedContracts = async (contracts) => {

}

module.exports = {
    getContract,
    getNotFinishedContracts
};

