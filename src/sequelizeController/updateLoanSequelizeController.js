const{Loan} = require("../models/Loan.js");
const{logger} = require("../helpers/logger.js");

const updateLoanSequelizeController = async({loan_id, data}) => {
    try {
        console.log(loan_id,data);
        
        const [affectedRows] = await Loan.update(
            { amount: data.amount },
            { 
                where: { 
                    loan_id: loan_id,
                    user_id: data.user_id 
                },
                returning: true
            }
        );
        
        if(!affectedRows) {
            return {
                code: 404,
                message: "Loan not found or unauthorized",
                data: {}
            }
        }
        
        const updatedLoan = await Loan.findOne({ where: { loan_id: loan_id } });
        if(!updatedLoan) {
            return {
                code: 500,
                message: "Internal server error",
                data: {}
            }
        }
        return {
            code: 200,
            message: "Loan updated successfully",
            data: updatedLoan
        }
    } catch(error) {
        console.log(error);
        logger.error(error);
        return {
            code: 500,
            message: "Internal server error",
            data: {}
        }
    }
}

module.exports = {updateLoanSequelizeController};