let theme;

switch (process.env.VENTURE) {
    case 'UK':
        theme = require('./styles/jackpotjoy').default;
        break;
    case 'ES':
        theme = require('./styles/starspins').default;
        break;
    default:
        theme = require('./styles/default').default;
        break;
}

export default theme;
