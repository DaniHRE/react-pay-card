import { Card, SimpleFormCard } from 'react-pay-card';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import './App.css';

function App() {

  return (
    <div className="card">
      <Fullpage>
        <FullPageSections>

          <FullpageSection>
            <div className="card">
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
            <SimpleFormCard />
          </FullpageSection>

        </FullPageSections>
      </Fullpage>

    </div>
  )
}

export default App
