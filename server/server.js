const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev})
const handle = app.getRequestHandler();
const compression = require('compression');
const path = require('path');

const robotsOptions = {
    root: path.join(__dirname, '../public/'),
    headers: {
        'Content-Type': 'text/plain;charset=UTF-8'
    }
}

app.prepare()
.then(() => {
    const server = express();
    server.use(compression());

    // ROBOTS //
    server.get('/robots.txt', ((req, res)=>{
        return res.status(200).sendFile('robots.txt', robotsOptions)
    }))

    // END ROBOTS //

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    const PORT = process.env.PORT || 3000;

    server.listen(PORT, (err) => {
        if (err) {
            throw err;
        }
        console.log(`> Ready on Port ${PORT}`);
    });
}).catch((ex) => {
    console.error(ex.stack);
    process.exit(1)
})
