import express, { Application } from 'express'
import morgan from 'morgan'// DEV
import userRoutes from './routes/user.routes'

const app: Application = express()
app.set('port', process.env.PORT ?? 3000)
app.disable('x-powered-by') // Disable the x-powered-by header

// Middlewares
app.use(express.json())

// Cookies

// DEV: Morgan
app.use(morgan('dev'))

// Routes
const API_VERSION = '/api/v1'
app.use(`${API_VERSION}/user`, userRoutes)// User routes

export default app
