const express = require('express');

const { PORT } = require('./config');
const router = require('./routes');

const app = express();
app.set('view engine', 'ejs');
app.set("views", "./assets/views");
app.use("/css", express.static("./assets/css"));
app.use("/images", express.static("./assets/images"));
app.use("/js", express.static("./assets/js"));

app.use(router);

app.listen(PORT, () => { console.log(`Server is listening on :${PORT}`); });
