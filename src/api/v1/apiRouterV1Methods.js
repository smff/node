import {Router} from 'express';
import personsMethod from './methods/personsMethod';

let router = new Router();

router.use('/persons', personsMethod);

export default router;