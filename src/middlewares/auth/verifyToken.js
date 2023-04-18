import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;

function verifyToken(request, response, next) {
    const token = request.headers['x-access-token'];

    if (!token) {
        return response.status(403).json({message: 'Operation failed', data: 'No tokens reported'});
    };

    jwt.verify(token, jwtSecret, function (err, decoded) {
        if (err) {
            return response.status(500).json({message: 'Operation failed', data: 'Could not verify the token sent'});
        };

        request.id = decoded.id;
        next();
    });
};

export default verifyToken;