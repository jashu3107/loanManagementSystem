const {body, query, validationResult} = require('express-validator');
const {Loan} = require('../models/Loan.js');
const {Users} = require('../models/Users.js');

const updateLoanValidations = [
        body('loan_id')
            .notEmpty().withMessage('Loan ID is required')
            .isInt().withMessage('Loan ID must be an integer'),
        body('amount')
           .notEmpty().withMessage('Amount is required')
           .isFloat({ min: 0 }).withMessage('Amount must be a positive number'),
        
        body('user_id')
            .notEmpty().withMessage('User ID is required')
            .isInt().withMessage('User ID must be an integer')
            .custom(async (user_id) => {
                const user = await Users.findOne({ where: { user_id } });
                if (!user) {
                    throw new Error('Invalid user ID');
                }
                return true;
            })
            .custom(async (user_id, {req}) => {
                const loan = await Loan.findOne({ where: { loan_id: req.body.loan_id } });
                if (!loan) {
                    throw new Error('Loan not found');
                }
                if (loan.user_id !== parseInt(user_id)) {
                    throw new Error('User is not authorized to update this loan');
                }
                return true;
            }),

        
]

module.exports = updateLoanValidations;


