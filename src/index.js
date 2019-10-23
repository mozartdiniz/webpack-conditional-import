import React from 'react';
import ReactDOM from 'react-dom';

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

// #if process.env.NODE_ENV === 'UK'
import FormUK from './form-uk';
// #endif

// #if process.env.NODE_ENV === 'ES'
import FormES from './form-es';
// #endif

console.log('FormUK', process.env.NODE_ENV === 'UK');
console.log('FormES', process.env.NODE_ENV === 'ES');

let Form;

if (typeof FormUK !== 'undefined') {
    Form = FormUK;
} else if (typeof FormES !== 'undefined') {
    Form = FormES;
}

const nothingHere = <div>
    <h1>Nothing here</h1>
    <Form />
</div>;

ReactDOM.render(nothingHere, document.getElementById('app'));
