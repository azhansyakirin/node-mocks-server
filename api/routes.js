const routes = [
    'getGenericApi',
    'getClient',
    'getGoogleReview',
    'getSample',
    'getAnalyticsData',
    'getSampleDesign',
    'getSampleLanyard',
    'submitFeedback'
];

const pageRoutes = [
    'getHome',
    'getCustom',
    'getDesign',
    'getTemplate',
    'getSampleLanyard',
    'getUploadPage',
    'getProducts'
];

console.log({...routes, ...pageRoutes})

module.exports = { routes, pageRoutes };