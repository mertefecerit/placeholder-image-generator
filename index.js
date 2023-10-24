import PlaceholderImageGenerator from "./PlaceholderImageGenerator";

export default {
  install: (app, options) => {
    window.phig = new PlaceholderImageGenerator();
    app.config.globalProperties.$phig = window.phig;
    app.provide('phig', window.phig);
  }
}