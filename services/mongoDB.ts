import mongoose from "mongoose";

import keys from "../config/keys";

// Connect to a MongoDB database
mongoose.connect(keys.mongoURI);
