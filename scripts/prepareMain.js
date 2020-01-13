const concat = require('concat')

concat([
  'index-header.js',
  'index-mod1-header.js',
  'src/deps/browser/sql-memory-growth.js',
  'index-mod1-footer.js',
  'index-mod2-header.js',
  'src/browser/SQLiteProxy.js',
  'index-mod2-footer.js',
  'index-mod3-header.js',
  'www/SQLitePlugin.js',
  'index-mod3-footer.js',
  'index-footer.js'
], 'index.js')
