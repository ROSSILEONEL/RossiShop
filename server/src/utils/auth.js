
import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
          // jwt.sign({objeto con datos}, 'Secretkey', {expiresIn: '1h'})

       return  new Promise((resolve, reject) => {

               jwt.sign(
                  {
                      userId: user._id,
                      email: user.email
                    },
                    process.env.SECRET_KEY,
                    {
                        expiresIn: "1h"
                    },(err, token) => {
                        if (err) {
                reject(console.log(err));
            } else {
                resolve(token);
            }
        }
    );
})
};

export const verifyToken = (req, res, next) => {
    // const token = req.cookies.token;
//    const token = req.cookies.token;
   const tokenHeaders = req.headers.authorization;
 const token = tokenHeaders.split(' ')[1];
// const {token} = req.signedCookies;
   console.log('token que llega a very-->',token); 

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
