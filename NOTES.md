- without config file 
script: "rollup": "rollup src/sum.ts -o build/bundle.ts -f cjs",

- with config file
rollup.config.js
export default {
input: 'src/sum.ts'
output: {
file: 'build/bundle.ts'
format: cjs
}
}
script: "rollup": rollup --config or rollup -c

