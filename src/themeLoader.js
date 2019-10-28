let theme;

if (process.env.VENTURE === 'jackpotjoy') {
    theme = require('./styles/jackpotjoy').default;
} else if (process.env.VENTURE === 'starspins') {
    theme = require('./styles/starspins').default;
} else {
    theme = require('./styles/default').default;
}

export default theme;
