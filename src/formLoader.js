let loadedModule;

if (process.env.VENTURE === 'UK') {
    loadedModule = require('./forms/form-uk').default;
} else {
    loadedModule = require('./forms/form-es').default;
}

export const Form = loadedModule
