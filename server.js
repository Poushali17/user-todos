const express = require("express");
const errorHandler = require("./middleware/errorHandler");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/user/todos/count', require("./routes/todoRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})