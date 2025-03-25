const response = require("../helpers/response.js");
const {logger} = require("../helpers/logger.js");
const {Loan} = require("../models/Loan.js");
const {Users} = require("../models/Users.js");
const {Account} = require("../models/Account.js");

const addLoanSequelizer = async (data) => {
    try {
        // Verify if user exists
        const user = await Users.findByPk(data.user_id);
        if (!user) {
            logger.error(`User not found with ID: ${data.user_id}`);
            return {
                success: false,
                message: "User not found",
                code: 404
            };
        }

        // Verify if account exists
        const account = await Account.findByPk(data.account_number);
        if (!account) {
            logger.error(`Account not found with number: ${data.account_number}`);
            return {
                success: false,
                message: "Account not found",
                code: 404
            };
        }

        // Create new loan
        const newLoan = await Loan.create({
            user_id: data.user_id,
            account_number: data.account_number,
            amount: data.amount,
            interest_rate: data.interest_rate,
            loan_date: data.loan_date || new Date(),
            due_date: data.due_date
        });

        logger.info(`Loan created successfully with ID: ${newLoan.loan_id}`);
        return {
            success: true,
            message: "Loan created successfully",
            code: 201,
            data: newLoan
        };

    } catch (error) {
        logger.error(`Error creating loan: ${error.message}`);
        return {
            success: false,
            message: "Error creating loan",
            code: 500,
            error: error.message
        };
    }
};

module.exports = {addLoanSequelizer};
