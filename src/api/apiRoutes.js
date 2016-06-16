import {Router} from 'express';
import apiRouterV1Methods from  './v1/apiRouterV1Methods';

let router = new Router();

router.use('/v1', apiRouterV1Methods);

export default router;