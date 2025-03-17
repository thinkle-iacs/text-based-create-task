import './style.css'
import { TextInterface } from 'text-interface';

// Create a new "Text Interface"
let ti = new TextInterface();

ti.setTitle("Hello World");
let name = await ti.prompt("What is your name?");
let age = await ti.promptNumber("How old are you?");
ti.output("It is good to meet you, " + name + "!");
ti.output("You are " + age + " years old.");

