const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const issuesRouter = require('./routes/issues');
const helmet = require('helmet');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use(helmet.xssFilter());
app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }))

const uri = process.env.MONGO_URI;
mongoose.connect(process.env.MONGODB_URI || uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database connected succesfully');
});

app.use('/issues', issuesRouter);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port: ${port}`));
