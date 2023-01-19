import { useState } from 'react';
import Plot from 'react-plotly.js';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Plot
        data={[
          {
            type: 'surface',
            z: [
              ['1', '4', '2', '3', '1', '3', '4', '2', '3', '1', '2', '3'],
              ['4', '3', '3', '4', '4', '3', '3', '9', '6', '7', '9', '4'],
              ['2', '3', '2', '4', '3', '3', '4', '2', '3', '2', '3', '4'],
              ['3', '9', '6', '7', '9', '4', '3', '5', '6', '5', '3', '12'],
              ['4', '3', '3', '4', '4', '9', '6', '7', '9', '4', '3', '5'],
            ],
            y: ['8', '5', '1', '-14', '-32'],
            x: [
              '-1',
              '3',
              '4',
              '7',
              '13',
              '22',
              '32',
              '33',
              '42',
              '44',
              '45',
              '51',
            ],
          },
        ]}
        layout={{ showlegend: false, height: 758, width: 1310, autosize: true }}
      />
    </div>
  );
}

export default App;
