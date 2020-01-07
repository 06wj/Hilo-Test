import {Ticker, Tween} from 'hilojs';

const ticker = new Ticker(60);
ticker.addTick(Tween);
ticker.start();

export default ticker;