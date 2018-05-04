import { name, index } from "./package.json";
import rollupTypescript from "rollup-plugin-typescript2";

export default {
  input: './src/index.ts',
  name: 'timelite',
  output: {
    file: './timelite.umd.js',
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
