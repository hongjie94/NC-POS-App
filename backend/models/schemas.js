const mongoose = require("mongoose");
mongoose.pluralize(null);

const orderHistorySchema = new mongoose.Schema({
  orderNumber: Number,
  orderId: String
});
const  History = mongoose.model("history", orderHistorySchema);

const orderSchema = mongoose.Schema({
  orderNumber: Number,
  items: [{
    itemNumber: String,
    itemName: String,
    quantity: Number,
    price: Number
  }],
  total: Number,
  status: {
    type: String,
    enum: ['pending', 'in progress', 'completed'],
    default: 'pending'
  },
  date: {
    type: Date,
    default: Date.now
  }
});
var Order = mongoose.model("order", orderSchema);

module.exports = {
  History,
  Order
}