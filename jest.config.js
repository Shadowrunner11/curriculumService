module.exports = {
  transform: {
    '.*\\.(ts)?$': '@swc/jest',
  },
  "moduleFileExtensions": [
    "ts", "js"
  ],
  "rootDir": process.cwd()
}