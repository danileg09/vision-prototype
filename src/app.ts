import "reflect-metadata" 
import express from 'express'
import './database/connect'
import routes from './main/router/routes'

const app = express()

app.use(routes)

app.listen(3000, () => console.log("Server is running!"))

