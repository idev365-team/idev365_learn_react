const { src,dest } = require('gulp')
const jsx = require("gulp-jsx")
var babel = require('gulp-babel')

function jsTask(){
    return src("src/**/*.js")
        .pipe(jsx({
            factory:'React.createClass'
        }))
        .pipe(babel({
            "plugins": [
                [
                  "@babel/plugin-transform-runtime",
                  {
                    "corejs": false,
                    "helpers": true,
                    "regenerator": true,
                    "useESModules": false
                  }
                ]
              ]
          }))
        .pipe(dest("dist/"))
}

exports.default = jsTask