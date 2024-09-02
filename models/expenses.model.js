import mongoose from "mongoose";

const ExpenseSchema = mongoose.Schema(
  {
    title : {
      type: String,
      required: [true, "Title cannot be Empty"],
    },

    amount : {
        type: String,
        required: [true, "Amount cannot be Empty"],
    },

    category : {
        type: String,
        required: [true, "Category cannot be Empty"],
    },

  },
  {
    timestamps: true,
  }
);

export const Expense = mongoose.model("Expense", ExpenseSchema);