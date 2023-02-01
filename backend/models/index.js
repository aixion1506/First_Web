import mongoose from 'mongoose';
import UserSchema from './schemas/user';
import OrderSchema from './schemas/order';

export * from "./models/user-model";

exports.User = mongoose.model('User', UserSchema);
exports.Order = mongoose.model('Order', OrderSchema);