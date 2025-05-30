const {HEADERS} = require("../constants");

const getProfile = async (req, res, next) => {
    const profileId = req.get(HEADERS.PROFILE_ID);
    if (!profileId) {
        return res.status(401).json({ error: 'Profile ID header missing' });
    }

    const {Profile} = req.app.get('models');
    const profile = await Profile.findOne({where: {id: req.get('profile_id') || 0}})
    if(!profile) return res.status(401).end()
    req.profile = profile
    next()
}
module.exports = {getProfile}