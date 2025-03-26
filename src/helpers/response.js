const response = ({ req, res, code, message, data }) => {
    return res.jsonp({
        req,
        res,
        code,
        message,
        data
    });
}
module.exports = { response };

