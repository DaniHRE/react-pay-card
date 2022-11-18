import one from '../assets/card-background/1.jpeg';
import two from '../assets/card-background/2.jpeg';
import three from '../assets/card-background/3.jpeg';
import four from '../assets/card-background/4.jpeg';
import five from '../assets/card-background/5.jpeg';
import six from '../assets/card-background/6.jpeg';
import seven from '../assets/card-background/7.jpeg';
import eight from '../assets/card-background/8.jpeg';
import nine from '../assets/card-background/9.jpeg';
import ten from '../assets/card-background/10.jpeg';
import eleven from '../assets/card-background/11.jpeg';
import twelve from '../assets/card-background/12.jpeg';
import thirteen from '../assets/card-background/13.jpeg';
import fourteen from '../assets/card-background/14.jpeg';
import fiveteen from '../assets/card-background/15.jpeg';
import sixteen from '../assets/card-background/16.jpeg';
import seventeen from '../assets/card-background/17.jpeg';
import eighteen from '../assets/card-background/18.jpeg';
import nineteen from '../assets/card-background/19.jpeg';
import twenty from '../assets/card-background/20.jpeg';

const BACKGROUNDS = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fiveteen,
    sixteen,
    seventeen,
    eighteen,
    nineteen,
    twenty
]

export function shuffleBackground() {
    const random = Math.floor(Math.random() * BACKGROUNDS.length);
    return (BACKGROUNDS[random]);
};
