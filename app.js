const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

// health check endpoint
app.get('/health', (req, res) => {
  const healthCheck = {
    service: 'pokedex',
    uptime: process.uptime(),
    status: 'ok',
    timestamp: new Date().toISOString()
  }
  try {
    if (true) throw new Error(JSON.stringify('test error...'))
    res.json(healthCheck)
  } catch (error) {
    healthCheck.status = 'error'
    healthCheck.message = JSON.parse(error.message)
    res.status(503).json(healthCheck)
  }
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})

