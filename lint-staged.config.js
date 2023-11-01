// lint-staged.config.js
module.exports = {
  '*.{js,jsx,ts,tsx,vue}': ['npm run eslint', 'git add .'],
  '*.{scss,less,css,stylus,styl}': ['npm run stylelint', 'git add .']
}
