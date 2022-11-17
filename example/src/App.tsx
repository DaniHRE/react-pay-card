import { Card } from 'react-card-bank';

function App() {

  return (
    <div className="App">
      <Card cardHolder={''} cardNumber={''} cardMonth={''} cardYear={''} cardCvv={''} isCardFlipped={false} onUpdateState={function (keyName: any, value: any): void {
        throw new Error('Function not implemented.');
      } } />
    </div>
  )
}

export default App
