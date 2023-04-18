import { validationResult } from "express-validator";

function verifyBodyFieldsError(request, response, next) {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
        return response.status(400).json({ message: 'Operation failed', data: errors.array() });
    };

    next();
};

export default verifyBodyFieldsError;