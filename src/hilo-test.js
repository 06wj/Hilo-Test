import * as Hilo from 'hilojs';
import ticker from './ticker';

console.log(`Hilo version: ${Hilo.version}`);
const stage = new Hilo.Stage({
    container:document.querySelector('#hiloContainer'),
    width: innerWidth,
    height: innerHeight
});

const text = new Hilo.Text({
    text:'hilojs',
    font:'48px arial',
    color: '#96f',
    textAlign:'center',
    textVAlign:'middle',
    y: 160
}).addTo(stage);

Hilo.Tween.fromTo(text, {
    x: innerWidth * 0.5 - 140,
    rotation: 360
}, {
    x:innerWidth * 0.5 + 140 
}, {
    duration: 2000,
    loop: true,
    reverse: true,
    ease: Hilo.Ease.Quad.EaseInOut
});

ticker.addTick(stage);