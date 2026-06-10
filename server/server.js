import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import mongoose from 'mongoose';
import contactRouter from './routes/contact.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '10kb' }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Too many requests. Please try again later.' },
});
app.use('/api/contact', limiter);
app.use('/api/contact', contactRouter);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

try {
  await mongoose.connect(MONGODB_URI);
  console.log('MongoDB connected');
} catch (err) {
  console.warn('MongoDB not available - running without database:', err.message);
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
