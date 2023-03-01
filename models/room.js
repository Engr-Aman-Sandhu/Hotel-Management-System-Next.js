import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter room name'],
    trim: true,
    maxLength: [100, 'Room name cannot exceeds 100 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Please enter room price'],
    maxLength: [100, 'Room name cannot exceeds 100 characters'],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, 'Please enter room description'],
  },
  address: {
    type: String,
    required: [true, 'Please enter room address'],
  },
  guestCapacity: {
    type: Number,
    required: [true, 'Please enter room guest capacity'],
  },
  numOfBeds: {
    type: Number,
    required: [true, "Please enter room's number of beds"],
  },
  internet: {
    type: Boolean,
    default: false,
  },
  breakfast: {
    type: Boolean,
    default: false,
  },
  airConditioned: {
    type: Boolean,
    default: false,
  },
  petsAllowed: {
    type: Boolean,
    default: false,
  },
  roomCleaning: {
    type: Boolean,
    default: false,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, 'Please enter room category'],
    enum: {
      values: ['King', 'Single', 'Twins'],
      message: 'Please select correct category fro room',
    },
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mangoose.model.Room || mangoose.model('Room', roomSchema);