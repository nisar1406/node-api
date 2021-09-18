const basicInfo = require('./basic.info');
const servers = require('./server');
const tags = require('./tags');
const paths = require('./paths');
const components = require('./components');

module.exports = {
    ...basicInfo,
    ...servers,
    ...tags,
    ...paths,
    ...components
};
