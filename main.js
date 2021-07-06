import CardGame from './src/components/CardGame';

import './src/styles/settings/color.css';
import './src/styles/elements/base.css';
import './src/styles/tools/NessBorder/style.css';


const $root = document.querySelector("#root");
const $htmlCardGame = CardGame();

$root.insertAdjacentHTML("beforeend", $htmlCardGame);