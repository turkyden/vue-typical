module.exports = {
  preset: 'ts-jest',
  collectCoverageFrom: ['src/**/*.ts'],
  moduleNameMapper: {},
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
};
