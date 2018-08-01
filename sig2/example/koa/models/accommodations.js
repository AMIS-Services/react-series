import mongoose from 'mongoose';

const AccommodationSchema = new mongoose.Schema(
  {
    name: { type: String },
    location: { type: String },
    favorite: { type: Boolean },
    image: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

const Accommodation = mongoose.model('Accommodation', AccommodationSchema);

export default Accommodation;
