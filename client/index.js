const router = require('./router');

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// export main function for server side rendering
global.main = router.renderToString;

// start app if it in the browser
if(typeof window !== 'undefined') {
  // Start main application here
  router.run();
}
