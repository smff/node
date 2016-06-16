import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import errorHandlerService from './api/services/error/errorHandlerService';
import apiRoutes from './api/apiRoutes';

let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(methodOverride());


app.use('/api', apiRoutes);

app.use(errorHandlerService);


app.listen(3000, () => console.log('It seems to work'));

export default app;