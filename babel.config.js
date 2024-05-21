module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        blacklist: null, // DEPRECATED
        whitelist: null, // DEPRECATED
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    ['@babel/plugin-transform-class-properties', {loose: true}],
    ['@babel/plugin-transform-private-methods', {loose: true}],
    ['@babel/plugin-transform-private-property-in-object', {loose: true}],
  ],
};
