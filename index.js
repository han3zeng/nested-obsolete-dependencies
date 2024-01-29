const { strip } = require('@luxass/strip-json-comments')

const json = `{
    // this is a comment
    "foo": /* this is also a comment */ "bar"
  }`;
  
function main() {
    const stripReult = JSON.parse(strip(json)); // { foo: "bar" }
    console.log('==== This is obsoleted package log ====')
    console.log('==== stripReult ====\n', stripReult)
    console.log('==== end ====')
}

module.exports = {
    main,
}
