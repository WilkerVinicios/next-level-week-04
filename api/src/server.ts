import express, { response } from 'express';

const app = express();

//http://localhost:3030/users
app.get("/", (request, response) => {
    //return response.send("Hello World - NLW04");
    return response.json({message: "Hello World - NLW04"});
});

app.post("/", (request, response) => {
    return response.json({message: "Os dados foram salvos com sucesso!"})
});

app.listen(3030, () => console.log("Server is running!"));