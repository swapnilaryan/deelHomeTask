const { Job, Contract } = require('../model.js');
const { Op } = require('sequelize');

const getUnpaidJobs = async (profileId) => {
    if(!profileId) return null;
    try {
        const where = {
            [Op.or]: [
                {
                    paid: null,
                }
            ]
        }
        const include = [
            {
                model: Contract,
                required: true,
                attributes: [],
                where: {
                    status: 'in_progress',
                    [Op.or]: [
                        {
                            ContractorId: profileId,
                        },
                        {
                            ClientId: profileId,
                        }
                    ]
                }
            }
        ];
        const unPaidJobs = Job.findAll({
            where,
            include
        })
        return await unPaidJobs;
    } catch(e) {
        console.error('Error fetching unpaid jobs:', error);
        return { error: 'Failed to fetch unpaid jobs' };
    }
}

module.exports = {
    getUnpaidJobs
}