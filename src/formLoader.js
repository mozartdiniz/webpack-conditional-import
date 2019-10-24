let loadedModule;

if (process.env.NODE_ENV === 'UK') {
    loadedModule = require('./form-uk').default;
} else {
    loadedModule = require('./form-es').default;
}

export const Form = loadedModule
