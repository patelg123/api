import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const FiddleSchema = new Schema({
      creator: {
        required: false,
        type: String,
      },
      description: {
        required: false,
        type: String,
      },
      fiddle: {
        required: true,
        type: String,
      },
      name: {
        required: true,
        type: String,
      },
      private: {
        required: true,
        type: Number,
      },
      stars: [{
        id: String,
        date: Date,
      }],
      value: {
        required: true,
        type: String,
      }
});
