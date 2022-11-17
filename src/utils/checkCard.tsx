import React from 'react';
import { Visa } from '../badges/visa';
import { Amex } from '../badges/amex';
import { Mastercard } from '../badges/mastercard';
import { Discover } from '../badges/discover';
import { Unionpay } from '../badges/unionpay';
import { Diners } from '../badges/diners';

const cardBadges = {
    "visa": <Visa />,
    "amex": <Amex />,
    "mastercard": <Mastercard />,
    "discover": <Discover />,
    "unionpay": <Unionpay />,
    "diners": <Diners />
}

export function checkCard(cardName: string) {
    return cardBadges[cardName as keyof typeof cardBadges];
}