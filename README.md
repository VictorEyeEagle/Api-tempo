# Weather and City Image Query

This project utilizes React to display the current temperature of a city and show an image related to it. It makes calls to the OpenWeatherMap and Pexels APIs.

## Technologies Used

- React
- Axios
- OpenWeatherMap API
- Pexels API

## How It Works

The user inputs the name of a city and clicks the "SEARCH" button. The application makes two API calls:

1. **OpenWeatherMap API**: Retrieves the current temperature of the city.
2. **Pexels API**: Searches for an image related to the city.

If the city is found, the temperature in Celsius and Fahrenheit is displayed, along with the image of the city. If the city is not found or if there is no related image, the image area will be left blank.

## Usage Instructions

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the application with `npm start`.
4. Enter the city name in the search field and click "SEARCH".

## Running the Project

Make sure to replace `'YOUR_PEXELS_API_KEY'` and `'YOUR_OPENWEATHERMAP_API_KEY'` with your corresponding API token.

### Example Usage

```javascript
// Inserting your API keys
const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const pexelsApiKey = 'YOUR_PEXELS_API_KEY';
