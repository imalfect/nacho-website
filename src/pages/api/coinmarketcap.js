import axios from 'axios';

export default async function handler(req, res) {
  const { symbol } = req.query;
  const CMC_API_KEY = 'b8e2f4ac-5e9e-4675-835d-bb405f1b9dfb';

  try {
    const response = await axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${symbol}`, {
      headers: {
        'X-CMC_PRO_API_KEY': CMC_API_KEY
      }
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
} 