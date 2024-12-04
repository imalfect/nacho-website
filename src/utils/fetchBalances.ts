import axios from 'axios';

const KASPA_ADDRESS = 'kaspa:qzrsq2mfj9sf7uye3u5q7juejzlr0axk5jz9fpg4vqe76erdyvxxze84k9nk7';
const CMC_API_KEY = 'b8e2f4ac-5e9e-4675-835d-bb405f1b9dfb';

async function fetchBalances() {
  try {
    // Fetch NACHO balance
    const nachoResponse = await axios.get(`https://api.kasplex.org/v1/krc20/address/${KASPA_ADDRESS}/token/NACHO`);
    const nachoBalanceRaw = nachoResponse.data.result[0].balance;
    const nachoBalance = parseFloat(nachoBalanceRaw) / Math.pow(10, 8);

    // Fetch KAS balance
    const kasResponse = await axios.get(`https://api.kaspa.org/addresses/${KASPA_ADDRESS}/balance`);
    const kasBalanceRaw = kasResponse.data.balance;
    const kasBalance = kasBalanceRaw / Math.pow(10, 8);

    // Fetch NACHO price
    const nachoPriceResponse = await axios.get(`/api/coinmarketcap?symbol=NACHO`, {
      headers: {
        'X-CMC_PRO_API_KEY': CMC_API_KEY
      }
    });
    const nachoPrice = nachoPriceResponse.data.data.NACHO.quote.USD.price;

    // Fetch KAS price
    const kasPriceResponse = await axios.get(`/api/coinmarketcap?symbol=KAS`, {
      headers: {
        'X-CMC_PRO_API_KEY': CMC_API_KEY
      }
    });
    const kasPrice = kasPriceResponse.data.data.KAS.quote.USD.price;

    // Calculate USD values
    const nachoUSDValue = nachoBalance * nachoPrice;
    const kasUSDValue = kasBalance * kasPrice;

    return {
      nachoUSDValue,
      kasUSDValue
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching balances:', error);
    throw error;
  }
}

export default fetchBalances; 