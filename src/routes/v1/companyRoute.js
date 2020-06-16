const express = require('express');
const controller = require('../../controllers/v1/companyController');

const router = express.Router();

router.get('/', controller.getCompanies);
router.post('/', controller.createCompany);
router.put('/', controller.updateCompany);
router.delete('/:id', controller.deleteCompany);
router.get('/:id', controller.getCompanyById);

module.exports = router;
