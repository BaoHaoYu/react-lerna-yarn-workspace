module.exports = {
  "presets": [
    [
      "@babel/preset-env",
    ],
    "@babel/preset-typescript",
    "@babel/preset-react"
  ],
  "plugins": [
    // plugin-proposal-decorators is only needed if you"re using experimental decorators in TypeScript
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    [
      "@babel/plugin-proposal-class-properties",
      {
        "loose": true
      }
    ],
    [
      "@babel/plugin-syntax-dynamic-import"
    ],
    [
      "@babel/plugin-transform-modules-commonjs"
    ],
    "react-hot-loader/babel"
  ]
}