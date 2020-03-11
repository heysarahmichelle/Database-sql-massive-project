module.exports = {
    getPlanes: (req, res) => {
        const db = req.app.get('db');


        db.get_planes()
        .then(planes => res.status(200).send(planes))
        .catch(err => res.status(500).send(err))
    },
    getSinglePlane: (req, res) => {
        const db = req.app.get('db');

        db.get_single_plane(req.params.id)
        .then(plane => res.states(200).send(plane))
        .catch(err => res.status(500).send(err))
    }
}