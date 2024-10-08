// const nome: string = 'Mateus'
// console.log(nome)
import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(authRoutes)
app.register(memoriesRoutes)

// HTTP Method: GET (listar), POST(criação), PUT, PATCH, DELETE

// API RESTful

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀HTTP server running on http://localhost:3333')
  })

// eslint-disable-next-line spaced-comment
//Padrão de codificação/Padronização ESlint
