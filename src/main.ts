import './style.css'
import typescriptLogo from '/typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

const main = () => {
  // get reference to #app div element
  const app = document.querySelector<HTMLDivElement>('#app');

}

window.addEventListener('load', main);
