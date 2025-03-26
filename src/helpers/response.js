const response = ({ req, res, code=243, message="okoko", data="kk" }) => {
    return res.json({
        code,
        message,
        data
    });
}
module.exports = { response };

