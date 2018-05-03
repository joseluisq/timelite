import { name as pkgName } from "./package.json";

export default {
  entry: 'dist/index.js',
  dest: `dist/${pkgName}.umd.js`,
  format: 'umd',
  sourceMap: true,
  moduleName: pkgName,
  exports: 'named',
  onwarn
}

function onwarn(message) {
  const suppressed = ['UNRESOLVED_IMPORT', 'THIS_IS_UNDEFINED']

  if (!suppressed.find((code) => message.code === code)) {
    return console.warn(message.message)
  }
}
