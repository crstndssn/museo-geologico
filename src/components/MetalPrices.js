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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Object.keys(metalPrices).map(metal => (
        <div key={metal} className="p-4 border rounded-lg shadow-lg bg-[#FEFCF2]">
          <h2 className="text-lg font-semibold">{metal}</h2>
          <p className="text-gray-500">Price: {metalPrices[metal].toFixed(2)} COP</p>
        </div>
      ))}
    </div>
  );
};

export default MetalPrices;
