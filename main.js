import './style.css'
import {TextInterface} from './textInterface';

// Create a new "Text Interface"
let ti = new TextInterface();
let correctProblems = [];
let incorrectProblems = [];
let numbers = [2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let keepPlaying = true;

const getRandomItem = (list) => {
    let randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}

const askQuestion = async (a, b) => {
    ti.output(
        `What is ${a} x ${b}?`
    );
    let answer = await ti.readNumber();
    if (answer == a * b) {
        correctProblems.push([a,b]);
        ti.output('Great work!')
    } else {
        ti.output('Alas, not quite -- we can try this again later');
        incorrectProblems.push([a,b]);
    }
}
while (keepPlaying) {
    if (incorrectProblems.length && Math.random() > 0.5) {
        let problem = getRandomItem(incorrectProblems);
        let [a,b] = problem;
        await askQuestion(a,b);
    } else {
        let a = getRandomItem(numbers);
        let b = getRandomItem(numbers);
        await askQuestion(a,b);
    }
}
