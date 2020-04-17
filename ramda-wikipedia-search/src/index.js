import 'bootstrap/dist/css/bootstrap.min.css';
import getInputValue from './getInputValue'
import getUrl from './getUrl';
import { pipe,tap } from 'ramda';
import Results from './components/Results';

const render = markup => {
    const resultsElement = document.getElementById('results')
    resultsElement.innerHTML = markup
}

const searchAndRenderResults = pipe(
    getInputValue,
    getUrl,
    tap(console.warn),
    url => fetch(url)
        .then(res => res.json())
        .then(tap(console.warn))
        .then(result => Object.values(result.query.pages).map(({ title, extract }) => ({ title, text: extract}) ))
        .then(tap(console.warn))
        .then(Results)
        .then(tap(console.warn))
        .then(render)
)

const input = document.querySelector('input')

input.addEventListener('keyup', searchAndRenderResults)
