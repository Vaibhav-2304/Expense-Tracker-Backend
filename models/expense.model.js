import mongoose from "mongoose";

const ExpenseSchema = mongoose.Schema(
  {
    title : {
      type: String,
      required: true,
    },

    date : {
      type: String,
      required: true,
    },

    amount : {
        type: int,
        required: true,
    },

    category : {
        type: String,
        required: true,
    },

  },
  {
    timestamps: true,
  }
);

export const Expense = mongoose.model("Expense", ExpenseSchema);