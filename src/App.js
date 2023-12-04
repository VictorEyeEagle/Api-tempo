import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [cidade, setCidade] = useState('');
  const [temperatura, setTemperatura] = useState({ celsius: '', fahrenheit: '' });
  const [imagem, setImagem] = useState('');

  const apiKey = 'OPENWEATHERMAP_API'; // mude aqui
  const pexelsApiKey = 'PEXELS_API';

  const buscarTemperatura = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`;
      const response = await axios.get(url);

      const tempCelsius = response.data.main.temp;
      const tempFahrenheit = tempCelsius * 9 / 5 + 32;

      setTemperatura({ celsius: tempCelsius, fahrenheit: tempFahrenheit });
    } catch (error) {
      console.error('Erro ao buscar temperatura:', error);
    }
  };

  const buscarImagem = async () => {
    try {
      const url = `https://api.pexels.com/v1/search?query=${cidade}&per_page=1`;
      const response = await axios.get(url, { headers: { Authorization: pexelsApiKey } });

      if (response.data.photos.length > 0) {
        setImagem(response.data.photos[0].src.large);
      } else {
        setImagem('');
      }
    } catch (error) {
      console.error('Erro ao buscar imagem:', error);
    }
  };

  const buscarDados = (e) => {
    e.preventDefault();
    buscarTemperatura();
    buscarImagem();
  };

  return (
    <div className="app-body">
      <header>
        <h1>Consulta sobre o tempo atual</h1>
      </header>
      <main>
        <div>
          <form onSubmit={buscarDados}>
            <input placeholder='cidade' value={cidade} onChange={e => setCidade(e.target.value)} />
            <button type="submit">PESQUISAR</button>
          </form>
          <p>Temperatura em C° = {temperatura.celsius}</p>
          <p>Temperatura em F° = {temperatura.fahrenheit}</p>
          {imagem && <img src={imagem} alt={`Imagem de ${cidade}`} />}
        </div>
      </main>
    </div>
  );
}

export default App;
