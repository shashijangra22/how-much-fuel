// popup.js
document.addEventListener('DOMContentLoaded', function () {
    const startInput = document.getElementById('start');
    const endInput = document.getElementById('end');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');
  
    calculateBtn.addEventListener('click', async function () {
      const startLocation = startInput.value;
      const endLocation = endInput.value;
  
      // Call a function to calculate fuel price using Google Maps APIs
      const fuelPrice = await calculateFuelPrice(startLocation, endLocation);
  
      // Display the result
      resultDiv.textContent = `Estimated Fuel Price: $${fuelPrice}`;
    });
  
    async function calculateFuelPrice(startLocation, endLocation) {
      // Use Google Maps APIs to get directions and calculate distance
      // and then estimate fuel price based on distance and fuel efficiency.
  
      // Example: Fetch directions from Google Maps API
      const directionsApiUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${startLocation}&destination=${endLocation}&key=YOUR_DIRECTIONS_API_KEY`;
  
      const response = await fetch(directionsApiUrl);
      const data = await response.json();
  
      // Example: Calculate distance in miles
      const distanceInMiles = data.routes[0].legs[0].distance.value * 0.000621371;
  
      // Example: Calculate fuel price based on distance and fuel efficiency
      const fuelEfficiency = 25; // miles per gallon
      const fuelPricePerGallon = 100; // dollars per gallon
  
      const fuelPrice = (distanceInMiles / fuelEfficiency) * fuelPricePerGallon;
      
      return fuelPrice.toFixed(2);
    }
  });
  