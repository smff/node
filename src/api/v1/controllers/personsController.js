import PersonModel from '../schemas/personsSchema';

import personsUpdateRequredValidationService from '../services/validation/persons/personsUpdateRequredValidationService';
import personsCreateRequredValidationService from '../services/validation/persons/personsCreateRequredValidationService';

import aliasPersonsService from '../services/data/persons/aliasPersonsService';



export function personsReadAll(req, res, next) {
    let limit = 100;

    PersonModel.findAll({limit: limit}).then(function (data) {
        res.json(data);
    }).catch(function (err) {
        next(err);
    });
}


export function personsCreate(req, res, next) {
    let params = req.body;
    let requredValidation = personsCreateRequredValidationService(params);

    params = aliasPersonsService(params, 'aliasesToParam');



    if (!requredValidation.status) {
        let err = new Error();
        err.name = requredValidation.name;
        err.message = requredValidation.message;
        throw err;
    }

    PersonModel.create(params).then(function (data) {
        res.json(data);
    }).catch(function (err) {
        next(err);
    });
}


export function personsReadOne(req, res, next) {

    PersonModel.findOne({where: {pr_d_id: req.params.personId}}).then(function (data) {
        if (!data) {
            var err = new Error();
            err.name = 'NotFound';
            err.message = 'User not found';
            throw err;
        }
        res.json(data);

    }).catch(function (err) {
        next(err);
    });
}


export function personsUpdate(req, res, next) {
    req.body.personId = req.params.personId;

    let params = req.body;
    let requredValidation = personsUpdateRequredValidationService(params);

    params = aliasPersonsService(params, 'aliasesToParam');


    if (!requredValidation.status) {
        var err = new Error();
        err.name = requredValidation.name;
        err.message = requredValidation.message;
        throw err;
    }

    var userId = params.pr_d_id;
    delete params.pr_d_id;

    PersonModel.update(params, {where: {pr_d_id: userId}}).then(function (data) {

        if (data == false) {
            var err = new Error();
            err.name = 'NotFound';
            err.message = 'User not found';
            throw err;
        } else {
            data = {
                status: 'ok',
                message: 'user updated'
            }
        }

        res.json(data);

    }).catch(function (err) {
        next(err);
    });
}