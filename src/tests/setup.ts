import * as mongoose from "mongoose";
import { FiddleSchema } from "../models/fiddleModel";

beforeEach(async () => {
  async function clearDB() {
    await Promise.all(
      Object.keys(mongoose.connection.collections).map(async (key) => {
        return await mongoose.connection.collections[key].remove({});
      }),
    );
  }

  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(
      `mongodb://localhost:27017/${process.env.TEST_SUITE}`,
      {
        useNewUrlParser: true,
      },
    );
  }
  await clearDB();
});

afterEach(async () => {
  await mongoose.disconnect();
});
