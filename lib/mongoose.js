import mongoose from "mongoose";

export async function initMongoose() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }
  return await mongoose.connect("mongodb+srv://jamesyu:potatoe123@test-ecommerce.41seqdf.mongodb.net/test-ecommerce?retryWrites=true&w=majority&appName=test-ecommerce");
}