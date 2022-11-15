import React, { useState, useRef, useCallback } from 'react';
import Form from '../Form';
import Card from '../Card';

interface IinitialState {
    cardNumber: string,
    cardHolder: string,
    cardMonth: string,
    cardYear: string,
    cardCvv: string,
    isCardFlipped: boolean,
}

const initialState: IinitialState = {
    cardNumber: '#### #### #### ####',
    cardHolder: 'FULL NAME',
    cardMonth: '',
    cardYear: '',
    cardCvv: '',
    isCardFlipped: false,
};

const SimpleFormCard = () => {
    const [state, setState] = useState<IinitialState>(initialState);
    const [currentFocusedElm, setCurrentFocusedElm] = useState<React.RefObject<HTMLLabelElement> | null>(null);

    const updateStateValues = useCallback(
        (keyName: keyof typeof initialState, value: boolean) => {
            setState({
                ...state,
                [keyName]: value || initialState[keyName]
            });
        },
        [state]
    );

    // References for the Form Inputs used to focus corresponding inputs.
    let formFieldsRefObj = {
        cardNumber: useRef<HTMLInputElement>(null),
        cardHolder: useRef<HTMLInputElement>(null),
        cardDate: useRef<HTMLSelectElement>(null),
        cardCvv: useRef<HTMLInputElement>(null),
    };

    // This are the references for the Card DIV elements.
    let cardElementsRef = {
        cardNumber: useRef<HTMLLabelElement>(null),
        cardHolder: useRef<HTMLLabelElement>(null),
        cardDate: useRef<HTMLLabelElement>(null),
    };

    let onCardFormInputFocus = (_event: any, inputName: keyof typeof cardElementsRef) => {
        const refByName = cardElementsRef[inputName];
        setCurrentFocusedElm(refByName);
    };

    let onCardInputBlur = useCallback(() => {
        setCurrentFocusedElm(null);
    }, []);

    return (
        <div className="wrapper">
            <Form
                cardMonth={state.cardMonth}
                cardYear={state.cardYear}
                onUpdateState={updateStateValues}
                cardNumberRef={formFieldsRefObj.cardNumber}
                cardHolderRef={formFieldsRefObj.cardHolder}
                cardDateRef={formFieldsRefObj.cardDate}
                cardCvv={formFieldsRefObj.cardCvv}
                onCardInputFocus={onCardFormInputFocus}
                onCardInputBlur={onCardInputBlur}
            >
                <Card
                        cardNumber={state.cardNumber}
                        cardHolder={state.cardHolder}
                        cardMonth={state.cardMonth}
                        cardYear={state.cardYear}
                        cardCvv={state.cardCvv}
                        isCardFlipped={state.isCardFlipped}
                        onUpdateState={updateStateValues}
                        currentFocusedElm={currentFocusedElm}
                        cardNumberRef={cardElementsRef.cardNumber}
                        cardHolderRef={cardElementsRef.cardHolder}
                        cardDateRef={cardElementsRef.cardDate}
                    ></Card>
            </Form>
        </div>
    );
};

export default SimpleFormCard;
