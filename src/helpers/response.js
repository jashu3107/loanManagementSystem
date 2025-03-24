export default response = ({ req, res, code, message, data }) => {
    return res.json({
        req,
        res,
        code,
        message,
        data
    });
}

