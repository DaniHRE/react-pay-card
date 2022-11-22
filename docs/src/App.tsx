import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import { Card, Form, SimpleFormCard } from 'react-pay-card';
import './App.css';

function App() {

  return (
    <div className="card">
      <Fullpage>
        <FullPageSections>

          <FullpageSection>
            <div className="center-obj">
              <Card
                cardHolder={'JOHN DOE'}
                cardNumber={'5037 0854 0525 5006'}
                cardMonth={'10'}
                cardYear={'2022'}
                cardCvv={'000'}
              />
            </div>
          </FullpageSection>

          <FullpageSection>
            <div className="center-obj">
              <Form cardMonth={''} cardYear={''} onUpdateState={function (keyName: any, value: any): void {
                throw new Error('Function not implemented.');
              }} cardNumberRef={undefined} cardHolderRef={undefined} cardDateRef={undefined} cardCvv={undefined} onCardInputFocus={function (_event: any, inputName: any): void {
                throw new Error('Function not implemented.');
              }} onCardInputBlur={function (): void {
                throw new Error('Function not implemented.');
              }} children={undefined} />
            </div>
          </FullpageSection>

          <FullpageSection>
            <SimpleFormCard />
          </FullpageSection>

        </FullPageSections>
      </Fullpage>

    </div>
  )
}

export default App
