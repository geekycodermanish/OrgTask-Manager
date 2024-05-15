const Organization = require('../models/Organization');
const User = require('../models/User');

exports.createOrganization = async (req, res) => {
    const { name } = req.body;
    try {
        let org = await Organization.findOne({ name });
        if (org) {
            return res.status(400).json({ msg: 'Organization already exists' });
        }
        org = new Organization({ name, users: [req.user.id] });
        await org.save();
        const user = await User.findById(req.user.id);
        user.organizations.push(org.id);
        await user.save();
        res.json(org);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getOrganizations = async (req, res) => {
    try {
        const organizations = await Organization.find({ users: req.user.id });
        res.json(organizations);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
