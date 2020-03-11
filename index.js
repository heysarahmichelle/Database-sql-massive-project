require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      {SERVER_PORT, CONNECTION_STRING} = process.env
      ctrl = require('./controller'),
      app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('DB connected')

})

app.get('/api/planes', ctrl.getPlanes);
app.get('/api/plane', ctrl.getSinglePlane);

const port = SERVER_PORT;
app.listen(port, () => console.log(`Server Running on ${port}`));