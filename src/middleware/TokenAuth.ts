import { Request ,Response, NextFunction } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import UserAuthRequest from "../interface/UserAuthRequest";

interface jwtPayload extends JwtPayload {
    userId: string
}

const verifyAuth = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.headers['authorization']);

    if (req.headers['authorization']) {
        const token = req.headers['authorization'];
        if (token.startsWith('Bearer ')) {
            const jwtToken = token.substring(7);
            console.log(jwtToken);
            // const decoded = jwt.verify(jwtToken,'hcp30');
            jwt.verify(jwtToken,'hcp30',(err,decoded) => {
                if (err) {
                    console.log(decoded);
                    res.status(401).send({
                        token: jwtToken,
                        decoded: decoded,
                        errMsg: err
                    });
                } else {
                    console.log(decoded);
                    (<UserAuthRequest>req).userId = (<jwtPayload>decoded).userId;
                    // res.status(200).send({
                    //     token: jwtToken,
                    //     decoded: decoded,
                    //     reqUserId: (<UserAuthRequest>req).userId
                    // });
                    next();
                }
            });
        } else {
            res.status(401).send({
                msg: 'Incorrect Authorization schema',
            });
        }
    } else {
        res.status(401).send({
            msg: 'No Authorization token',
        });
    }
}

export { verifyAuth };