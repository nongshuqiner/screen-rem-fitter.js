(function (root, pluginName, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD:
    define(factory()); // define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node:
    module.exports = factory();
    // Use module export as simulated ES6 default export:(将模块导出用作模拟ES6默认导出)
    module.exports.default = module.exports;
  } else {
    // Browser:
    if (root === undefined) {
      root = typeof global !== "undefined" ? global : window
    }
    root[pluginName] = factory();
  }
}(this, 'screenRemFitter', function () {
  'use strict';

  // 对象类库
  var screenRemFitter = {
    name: 'screenRemFitter',
    htmlFontSize: null,
    // 不允许设置小数，设置小数会向上取整
    maxWidth: null, // 最大运算宽度
    datumWidth: null, // 运算基准宽度
    screenWidth: null, // 浏览器宽度
    // datumWidth: 必传; maxWidth: 非必传;
    setData: function (datumWidth, maxWidth) {
      if (maxWidth) {
        this.maxWidth = Math.ceil(maxWidth);
      }
      // 设置运算基准宽度
      this.datumWidth = Math.ceil(datumWidth);
    },
    // 适应
    flexible: function () {
      let fitter = this.fitter.bind(this);
      fitter();
      window.addEventListener('resize', fitter);
    },
    // 适配器
    fitter: function () {
      if (!this.datumWidth) {
        console.error(new Error("Don't set datumWidth!"));
        return;
      }
      // 屏幕宽度
      var screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      this.screenWidth = screenWidth
      var width = this.maxWidth ? (screenWidth > this.maxWidth ? this.maxWidth : screenWidth) : screenWidth;
      var fz = ~~(width / this.datumWidth * 100 * 10000) / 10000;
      var html = document.getElementsByTagName('html')[0];
      html.style.cssText = 'font-size: ' + fz + 'px';
      // 用户可能自己设置字体缩放比，所以我们需要比对，如果实际和我们运算的不一致，我们就要重新设置
      var realfz = ~~(+window.getComputedStyle(html).fontSize.replace('px', '') * 10000) / 10000;
      if (fz !== realfz) {
        html.style.cssText = 'font-size: ' + fz * (fz / realfz) + 'px'
      };
      this.htmlFontSize = +window.getComputedStyle(html).fontSize.replace('px', '');
    }
  }

  return screenRemFitter;
}));
