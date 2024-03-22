import './style.css'
import {TextInterface} from './textInterface';

// Create a new "Text Interface"
let ti = new TextInterface();
ti.setTitle('Hello World');
ti.output('Hello');
await ti.readText();
ti.clear();
ti.output('Here is some text');
ti.output('Type a number:');
let number = await ti.readNumber();
ti.clear();
ti.output('Type a name');
let name = await ti.readText();
ti.clear();
ti.output('Choose your mood:');
let mood = await ti.readChoice(['Happy','Sad','Mad','Fine']);
ti.clear();
ti.output('Twice '+number+' is '+number*2);
ti.output('I am also feeling '+mood);
ti.output('It was good talking with you, '+name);
