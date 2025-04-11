const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // или 'production' для оптимизации
  entry: "./src/index.js", // Точка входа JavaScript
  output: {
    filename: "bundle.js", // Имя выходного файла
    path: path.resolve(__dirname, "dist"), // Путь к директории для выходных файлов
    clean: true, // Очищает папку 'dist' перед каждой сборкой
  },
  devServer: {
    static: "./dist", // Директория, из которой будут обслуживаться статические файлы
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Регулярное выражение для CSS файлов
        use: ["style-loader", "css-loader"], // Применение загрузчиков (порядок важен!)
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Для обработки изображений
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // Для обработки шрифтов
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // Путь к HTML шаблону
    }),
  ],
};
