import { Card } from '../../lib/index';
import './App.css';

function App() {

  return (
    <div className="card">
      <Card
        cardHolder={'JOHN DOE'}
        cardNumber={'5037 0854 0525 5006'}
        cardMonth={'10'}
        cardYear={'2022'}
        cardCvv={'000'}
      />
    </div>
  )
}

export default App
