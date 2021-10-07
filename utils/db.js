import mongoose from "mongoose"

const connection = {}

async function connect() {
  if (connection.isConnected) {
    console.log("already connected")
    return
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState
    if (connection.isConnected === 1) {
      console.log("use previous connection")
      return
    }
    await mongoose.disconnect
  }
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    // From the Mongoose 6.0 docs:
    // useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex are no longer supported options.
    // Mongoose 6 always behaves as if useNewUrlParser, useUnifiedTopology, and useCreateIndex are true,
    // and useFindAndModify is false. Please remove these options from your code.
    
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  console.log("new connection")
  connection.isConnected = db.connections[0].readyState
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect()
      connection.isConnected = false
    } else {
      console.log("not disconnected")
    }
  }
}

const db = { connect, disconnect }
export default db
