import jwt from 'jsonwebtoken';

export default class Login {
    static async socialLogin(req, res) {
        try {
            if(req.user) {
                const [{value}] = req.user.photos
                const data = {
                    id: req.user.id,
                    username: req.user.displayName,
                    photo: value
                }
                const token = jwt.sign(data, process.env.SECRET);
                res.redirect(`http://localhost:3000/login?token=${token}`)
            }
        } catch (err) {
            return res.status(500).json({
                status: 500,
                error: 'Internal Server Error'
            })
        }
    }
}