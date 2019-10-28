let loadedModule;

console.log(process.env.JURISDICTION);

if (process.env.JURISDICTION === 'UK') {
    loadedModule = require('./forms/form-uk').default;
} else if (process.env.JURISDICTION === 'ES') {
    loadedModule = require('./forms/form-es').default;
} else {
    loadedModule = require('./forms/form-default').default;
}

export const Form = loadedModule;
