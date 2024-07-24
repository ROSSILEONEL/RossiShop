
import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
          // jwt.sign({objeto con datos}, 'Secretkey', {expiresIn: '1h'})
    const token = jwt.sign(
        {
            userId: user._id,
            email: user.email
        },
        process.env.SECRET_KEY,
        {
            expiresIn: "1h"
        }
    );
    return token;
};

export const verifyToken = (req, res, next) => {
    const tokenHeader = req.headers.authorization;
    const token = tokenHeader.split(" ")[1];
    console.log(token);
   

    if (!token) {
        res.send({ status: "error", message: "No token provided" });
    } else {
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                res.send({ status: "error", message: "Failed to authenticate token" });
            } else {
                req.userId = decoded.userId;
                req.email = decoded.email;
                next();}
        });
    }
};
