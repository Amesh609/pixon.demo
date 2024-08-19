
NOTE :: priorty of files which we @use or @import

@charset "UTF-8";

// 1. Configuration and helpers
@import 
 'abstracts/variables',
  'abstracts/functions',
  'abstracts/mixins';

// 2. Vendors
@import 'vendors/normalize';

// 3. Base stuff
@import 'base/base';

// 4. Layout-related sections
@import 'layout/header';

// 5. Components
@import 'components/button';

// 6. Page-specific styles
@import 'pages/home';

// 7. Themes
@import 'themes/default';

NOTE :: I have removeThemes(7) file because no need to use in the project