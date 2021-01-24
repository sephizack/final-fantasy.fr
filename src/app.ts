import Logger from './modules/logger.js'
import express from 'express'
import path from 'path'
import config from 'config';
const app = express();

if (!config.has("serverPort")) {
    Logger.warning("You must provide the config 'serverPort'")
    process.exit(1);
}

app.set('views', './views');
app.set('view engine', 'pug');

app.use("/public", express.static("public"))

app.use((req,res) => {
    res.render('home', {
         title: 'Final-Fanstasy.fr',
    });
});

// Start server
app.listen(config.get("serverPort"), err => {
    if (err) {
        return Logger.error(err);
    }
    Logger.info(`Server is listening on port ${config.get("serverPort")}`);
});
