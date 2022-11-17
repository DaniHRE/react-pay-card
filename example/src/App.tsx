import { Card } from 'react-card-bank';

function App() {

  return (
    <div className="App">
      <Card cardHolder={'JOHN DOE'} cardNumber={'5552 0854 0525 5586'} cardMonth={'12'} cardYear={'2022'} cardCvv={'000'} isCardFlipped={false} onUpdateState={function (keyName: any, value: any): void {
        throw new Error('Function not implemented.');
      } } />
    </div>
  )
}

export default App
