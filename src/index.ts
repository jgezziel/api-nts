
import connection from './database/database'
import app from './app'

const port: string = app.get('port')

const init = async (): Promise<void> => {
  try {
    await connection.authenticate()
    console.log('Connection has been established successfully. ✔')
    app.listen(port, () => {
      console.log(`Server is listening on: http://localhost:${port}`)
    })
  } catch (error) {
    console.error('Error occurred:', error)
  }
}
/* eslint-disable-next-line @typescript-eslint/no-floating-promises */
init()
