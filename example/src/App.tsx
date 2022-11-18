import { Card } from '../../lib/index';

function App() {

  return (
    <div className="App">
      <Card
        cardHolder={'JOHN DOE'}
        cardNumber={'0037 0854 0525 5006'}
        cardMonth={'10'}
        cardYear={'2022'}
        cardCvv={'000'}
      />
    </div>
  )
}

export default App
