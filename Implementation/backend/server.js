const express = require('express')
const cors = require('cors')
const colors = require('colors')
const dotenv = require('dotenv').config()
const vetRoutes = require('./routes/vetRoutes')
const { errorHandler } = require('./middleware/errorMiddleware') 
const eventregister = require('./routes/registerEventRoutes')
const eventRoutes = require('./routes/eventRoutes')
const efeedbackRoutes = require('./routes/eventFeedbackRoutes')
const connectDB = require('./config/db');
const port = process.env.port || 8080

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/vet',vetRoutes)    
app.use('/api/booking/', require('./routes/bookingRoutes.js'))
app.use('/api/suppliers/', require('./routes/suppliersRoutes'))
app.use('/api/inventory', require('./routes/inventoryItemRoutes'))
app.use('/api/inventory', require('./routes/stockRequestRoutes'))
app.use('/api/inventory', require('./routes/stockReleaseRoutes'))
app.use('/api/vehicle/', require('./routes/vehicleRoutes.js'))
app.use('/api/transport/', require('./routes/transportRoutes.js'))
app.use('/api/availability/', require('./routes/availabilityRoutes.js'))
app.use('/api/employee', require('./route/employee.route'))
app.use('/api/eventregister', eventregister);
app.use('/api/event', eventRoutes);
app.use('/api/eventfeedback', efeedbackRoutes);


app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`));