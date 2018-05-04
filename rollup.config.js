import { name } from "./package.json";
import rollupTypescript from "rollup-plugin-typescript2";

export default {
  input: './src/index.ts',
  name,
  output: {
    file: `./${name}.umd.js`,
    format: 'umd',
    sourcemap: true,
    exports: 'named'
  },
  plugins: [
    rollupTypescript()
  ],
  onwarn
}

function onwarn(message) {
  const suppressed = ['UNRESOLVED_IMPORT', 'THIS_IS_UNDEFINED']

  if (!suppressed.find((code) => message.code === code)) {
    return console.warn(message.message)
  }
}
