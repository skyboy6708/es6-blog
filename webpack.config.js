var path = require("path");
const webpack = require("webpack");

// module.exports = {
//   mode: "development",
//   // 합칠파일 입력
//   entry: "./src/index.js",
//   // 합친 파일 출력
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   // 어느모듈에 적용할지
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         include: path.resolve(__dirname, "src"),
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: [
//               ["@babel/preset-env"],
//               [
//                 "env",
//                 {
//                   targets: {
//                     browsers: ["last 2 versions"],
//                   },
//                 },
//               ],
//             ],
//           },
//         },
//       },
//     ],
//   },
// };
module.exports = {
  // enntry file
  entry: "./src/index.js",
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "src")],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // presets: [
            //   [
            //     "env",
            //     {
            //       targets: {
            //         browsers: ["last 2 versions", "ie 9"],
            //       },
            //       debug: true,
            //     },
            //   ],
            // ],
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
  devtool: "source-map",
  // https://webpack.js.org/concepts/mode/#mode-development
  mode: "development",
};

// 패키지제이슨에 웹팩 스타트 설정하고 웹팩 설치(나중에 바벨설치해서 호환성 해결)
// 웹팩설정 어떤 파일을 분석해서 만들어주고 경로는 그거야! 추가적인 룰이있다면 설정
