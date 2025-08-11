const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

const clientOptions = {
  serverApi: {
    version: "1",
    strict: true,
    deprecationErrors: true,
  },
};

async function connectToDB() {
  try {
    await mongoose.connect(uri, clientOptions);
    console.log("Connected to MongoDB successfully");
    console.log("Database name:", mongoose.connection.name);

    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();
    console.log(
      "Collections in DB:",
      collections.map((c) => c.name)
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = connectToDB;
