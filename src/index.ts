import app from './app'

function init (): void {
  try {
    app.listen(app.get('port'), () => {
      console.log(`Server is listening on: http://localhost:${port}`)
    })
  } catch (error) {
    console.error('Error occurred:', error)
  }
}

init()
