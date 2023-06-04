const express = require("express")
const path = require("path")

const app = express()

const port = 3001
const apiRouter = require("./routers/main_router")

app.get("/", (req, res) =>{
    res.send({
        data: "Catalogo Libros"
    })
})

app.listen(port, () =>{
    console.log("prendió")
})
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")))
app.use("/api", apiRouter);