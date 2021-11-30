import mongo from 'mongoose';

const connectDB = async () => {
  try {
    await mongo.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('[INFO] Connected to DB');
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
