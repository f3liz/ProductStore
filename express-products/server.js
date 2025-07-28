import express from 'express';
import productsRouter from './routes/productsRouter.js';

const app = express();

// declare pug as template language
app.set('view engine', 'pug');
app.set('views', './views');

// static assets (css, JS, images, etc...)
app.use(express.static("./public"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use("/", productsRouter);

// app.get("/", (req, res) => {
//     res.send("hello");
// })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})


