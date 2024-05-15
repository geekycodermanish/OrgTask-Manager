const Task = require('../models/Task');
const Organization = require('../models/Organization');

exports.createTask = async (req, res) => {
    const { title, description, organizationId } = req.body;
    try {
        const organization = await Organization.findById(organizationId);
        if (!organization) {
            return res.status(404).json({ msg: 'Organization not found' });
        }
        if (!organization.users.includes(req.user.id)) {
            return res.status(403).json({ msg: 'User not authorized' });
        }
        const task = new Task({
            title,
            description,
            organization: organizationId,
            createdBy: req.user.id,
        });
        await task.save();
        res.json(task);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getTasksByOrganization = async (req, res) => {
    try {
        const tasks = await Task.find({ organization: req.params.organizationId });
        res.json(tasks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
