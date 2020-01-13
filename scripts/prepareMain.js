const concat = require('concat')

concat([
  'src/browser/index-header.js',
  'src/deps/browser/sql-asm-memory-growth.js',
  'src/browser/index-mod1-header.js',
  'src/browser/SQLiteProxy.js',
  'src/browser/index-mod1-footer.js',
  'src/browser/index-mod2-header.js',
  'www/SQLitePlugin.js',
  'src/browser/index-mod2-footer.js',
  'src/browser/index-footer.js'
], 'index.js')
