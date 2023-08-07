import express, { Application } from "express"
import cors from "cors"

const port : number = 1234

const app : Application = express()

const server = app.listen(port , ()=>{
    console.log("Server is Up and and Running");
    
})