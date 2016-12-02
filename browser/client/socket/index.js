import io from 'socket.io-client'

export default io('//localhost:5000', {
  path: '/api/socket.io/'
})
