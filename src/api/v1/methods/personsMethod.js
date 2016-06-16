import {Router} from 'express';

import {
    personsReadOne,
    personsReadAll,
    personsCreate,
    personsUpdate
    
} from '../controllers/personsController';

let router = Router();

router.route('/')
    .get(personsReadAll)
    .post(personsCreate);
router.route('/:personId')
    .get(personsReadOne)
    .put(personsUpdate);


export default router;