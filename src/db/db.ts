import mongoose from 'mongoose';

const connect = async () => {
  await mongoose.connect(process.env.NEXT_MONGO_DB_URL!);
};

connect();
