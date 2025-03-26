export const response = ({ req, res, code, message, data }) => {
    return res.json({
        code,
        message,
        data
    });
}

