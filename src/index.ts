import * as http from 'http'
import { handler } from './app'

// create server
const port = 5000
const httpServer = http.createServer(handler)
httpServer.listen(port, () => {
  console.log(`Server run on port ${port}`)
})
