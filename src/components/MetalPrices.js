// components/MetalPrices.js
import { useEffect, useState } from 'react';

const MetalPrices = () => {
  const [metalPrices, setMetalPrices] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://api.metalpriceapi.com/v1/latest?api_key=a2c13dffe37b4d6ab4163b2fbde40f05&base=COP&currencies=EUR,USD,XAG';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setMetalPrices(data.rates);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto px-4 w-full bg-[#FEFCF2] text-black py-8">
      <h2 className="container mx-auto text-3xl tracking-tighter uppercase font-semibold mb-4">Indicadores Economicos</h2>
      <div className="container mx-auto grid md:grid-cols-3 gap-4">
        {Object.keys(metalPrices).map(metal => (
          <div key={metal} className="p-4 border rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">{metal}</h2>
            <p className="text-gray-500">Price: {metalPrices[metal].toFixed(2)} COP</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetalPrices;
