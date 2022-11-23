import React from 'react';
import { useState, useEffect, useMemo, LegacyRef } from 'react';
import {
    CSSTransition,
    TransitionGroup,
    SwitchTransition
} from 'react-transition-group';
import { Dino } from '../../badges/dino';
import { checkCard } from '../../utils/checkCard';
import { shuffleBackground } from '../../utils/shuffleBackground';
import chip from '../../assets/icons/chip.png';
import './styles.css';

const CARDS = {
    visa: '^4',
    amex: '^(34|37)',
    mastercard: '^5[1-5]',
    discover: '^6011',
    unionpay: '^62',
    diners: '^(30[0-5]|36)'
};

const cardBackgroundName = () => {
    let random = Math.floor(Math.random() * 20 + 1);
    return `${random}.jpeg`;
};

const BACKGROUND_IMG = shuffleBackground();

export interface CardProps {
    cardHolder: string,
    cardNumber: string,
    cardMonth: string,
    cardYear: string,
    cardCvv: string,
    chipIcon?: string,
    brandIcon?: string,
    backgroundImage?: string,
    currentFocusedElm?: null | any,
    cardNumberRef?: LegacyRef<HTMLLabelElement> | undefined,
    cardHolderRef?: LegacyRef<HTMLLabelElement> | undefined,
    cardDateRef?: LegacyRef<HTMLLabelElement> | any,
}

const Card = ({
    cardHolder,
    cardNumber,
    cardMonth,
    cardYear,
    cardCvv,
    chipIcon,
    brandIcon,
    backgroundImage,
    currentFocusedElm,
    cardNumberRef,
    cardHolderRef,
    cardDateRef,
}: CardProps) => {
    const [style, setStyle] = useState<any>();
    const [isCardFlipped, setIsCardFlipped] = useState(false);

    const cardType = (cardNumber: string) => {
        const number = cardNumber;
        let re;
        for (const card of Object.keys(CARDS)) {
            const pattern = CARDS[card as keyof typeof CARDS];
            re = new RegExp(pattern);
            if (number.match(re) != null) {
                const nCard = checkCard(card);
                return nCard;
            }
        }

        return <Dino />;
    };

    const useCardType = useMemo(() => {
        return cardType(cardNumber);
    }, [cardNumber]);

    const outlineElementStyle = (element: { offsetWidth: any; offsetHeight: any; offsetLeft: any; offsetTop: any; }) => {
        return element
            ? {
                width: `${element.offsetWidth}px`,
                height: `${element.offsetHeight}px`,
                transform: `translateX(${element.offsetLeft}px) translateY(${element.offsetTop}px)`
            }
            : null;
    };

    useEffect(() => {
        if (currentFocusedElm) {
            const style = outlineElementStyle(currentFocusedElm.current);
            setStyle(style);
        }
    }, [currentFocusedElm]);

    const maskCardNumber = (cardNumber: string) => {
        let cardNumberArr = cardNumber.split('');
        cardNumberArr.forEach((val: any, index: number) => {
            if (index > 4 && index < 14) {
                if (cardNumberArr[index] !== ' ') {
                    cardNumberArr[index] = '*';
                }
            }
        });

        return cardNumberArr;
    };

    return (
        <div className={'card-item ' + (isCardFlipped ? '-active' : '')} onClick={() => {
            setIsCardFlipped(!isCardFlipped);
        }}>
            <div className="card-item__side -front">
                <div
                    className={`card-item__focus ${currentFocusedElm ? `-active` : ``
                        }`}
                    style={style}
                />
                <div className="card-item__cover">
                    <img
                        alt=""
                        src={!backgroundImage ? BACKGROUND_IMG : backgroundImage}
                        className="card-item__bg"
                    />
                </div>

                <div className="card-item__wrapper">
                    <div className="card-item__top">
                        <img
                            src={!chipIcon ? chip : chipIcon}
                            alt=""
                            className="card-item__chip"
                        />
                        <div className="card-item__type">
                            <div className="card-item__typeImg">
                                {!brandIcon ? useCardType : brandIcon}
                            </div>
                        </div>
                    </div>

                    <label
                        className="card-item__number"
                        itemRef=''
                        ref={cardNumberRef}
                    >
                        <TransitionGroup
                            className="slide-fade-up"
                            component="div"
                        >
                            {cardNumber ? (
                                maskCardNumber(cardNumber).map((val, index) => (
                                    <CSSTransition
                                        classNames="slide-fade-up"
                                        timeout={250}
                                        key={index}
                                    >
                                        <div className="card-item__numberItem">
                                            {val}
                                        </div>
                                    </CSSTransition>
                                ))
                            ) : (
                                <CSSTransition
                                    classNames="slide-fade-up"
                                    timeout={250}
                                >
                                    <div className="card-item__numberItem">
                                        #
                                    </div>
                                </CSSTransition>
                            )}
                        </TransitionGroup>
                    </label>
                    <div className="card-item__content">
                        <label
                            className="card-item__info"
                            ref={cardHolderRef}
                        >
                            <div className="card-item__holder">Card Holder</div>
                            <div className="card-item__name">
                                <TransitionGroup
                                    component="div"
                                    className="slide-fade-up"
                                >
                                    {cardHolder === 'FULL NAME' ? (
                                        <CSSTransition
                                            classNames="slide-fade-up"
                                            timeout={250}
                                        >
                                            <div>FULL NAME</div>
                                        </CSSTransition>
                                    ) : (
                                        cardHolder
                                            .split('')
                                            .map((val, index) => (
                                                <CSSTransition
                                                    timeout={250}
                                                    classNames="slide-fade-right"
                                                    key={index}
                                                >
                                                    <span className="card-item__nameItem">
                                                        {val}
                                                    </span>
                                                </CSSTransition>
                                            ))
                                    )}
                                </TransitionGroup>
                            </div>
                        </label>
                        <div
                            className="card-item__date"
                            ref={cardDateRef}
                        >
                            <label className="card-item__dateTitle">
                                Expires
                            </label>
                            <label className="card-item__dateItem">
                                <SwitchTransition in-out>
                                    <CSSTransition
                                        classNames="slide-fade-up"
                                        timeout={200}
                                        key={cardMonth}
                                    >
                                        <span>
                                            {!cardMonth ? 'MM' : (cardMonth.split('').length > 1 ? `0${cardMonth}` : cardMonth)}{' '}
                                        </span>
                                    </CSSTransition>
                                </SwitchTransition>
                            </label>
                            /
                            <label
                                htmlFor="cardYear"
                                className="card-item__dateItem"
                            >
                                <SwitchTransition out-in>
                                    <CSSTransition
                                        classNames="slide-fade-up"
                                        timeout={250}
                                        key={cardYear}
                                    >
                                        <span>
                                            {!cardYear
                                                ? 'YY'
                                                : cardYear
                                                    .toString()
                                                    .substr(-2)}
                                        </span>
                                    </CSSTransition>
                                </SwitchTransition>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-item__side -back">
                <div className="card-item__cover">
                    <img
                        alt=""
                        src={!backgroundImage ? BACKGROUND_IMG : backgroundImage}
                        className="card-item__bg"
                    />
                </div>
                <div className="card-item__band" />
                <div className="card-item__cvv">
                    <div className="card-item__cvvTitle">CVV</div>
                    <div className="card-item__cvvBand">
                        <TransitionGroup>
                            {cardCvv.split('').map((val, index) => (
                                <CSSTransition
                                    classNames="zoom-in-out"
                                    key={index}
                                    timeout={250}
                                >
                                    <span>*</span>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </div>
                    <div className="card-item__type">
                        <div className="card-item__typeImgCover">
                            {!brandIcon ? useCardType : brandIcon}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
