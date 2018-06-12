module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/require-v-for-key": "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};

// Sample `.eslintrc.js`

// module.exports = {
//   plugins: ["vue"], // enable vue plugin
//   extends: ["plugin:vue/essential", "prettier"], // activate vue related rules
//   rules: {
//     "vue/require-v-for-key": "off"
//   }
// };
