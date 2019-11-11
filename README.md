# screen-rem-fitter.js

## 概述

这是一个根据浏览器屏幕大小，按照设置比例动态调整html标签的font-size大小的库，用于rem来适配屏幕。

设置基准是html的font-size为100。

## Usage(使用)

使用有两种形式，一种是 `npm` 安装，一种是 `<script>` 引用。

### npm 安装：

``` shell
npm install --save screen-rem-fitter.js
```

``` JavaScript
import ScreenRemFitter from 'screen-rem-fitter.js'
ScreenRemFitter.setData(360, 750); // 设置方法
ScreenRemFitter.flexible(); // 适配方法
// 或者
const ScreenRemFitter = require('screen-rem-fitter.js')
ScreenRemFitter.setData(360, 750); // 设置方法
ScreenRemFitter.flexible(); // 适配方法
```

### `<script>`使用

``` HTML
<script src="//unpkg.com/screen-rem-fitter.js@1.0.0/lib/index.js"></script>
<script>
  console.log(window.screenRemFitter);
  window.screenRemFitter.setData(360, 750); // 设置方法
  window.screenRemFitter.flexible(); // 适配方法
</script>
```

## API

#### setData(datumWidth, maxWidth)

设置方法，用来设置 datumWidth（运算基准宽度）和 maxWidth（最大运算宽度）。

###### datumWidth：

必传，运算基准宽度，它代表的是html的font-size为100px的屏幕宽度，这个值是任意定义的，您可以随意设定，常见设为`ScreenRemFitter.setData(360)`，意为在屏幕宽度为360px时，html的font-size为100px。如果您把运算基准宽度设为360，那么当屏幕宽度为360px时，html的font-size为100px；当屏幕宽度为375px时，html的font-size为104.166px；当屏幕宽度为414px时，html的font-size为115px；当屏幕宽度为750px时，html的font-size为208.334px。

>注意：font-size的运算一般保留5位小数

###### maxWidth：

非必传，最大运算宽度。当你指定maxWidth为750时，那么当屏幕宽度大于750时，html的font-size不再改变，它会以屏幕宽度为750px时的font-size结果作为最终值。它可以用来解决PC上浏览h5全屏铺满的问题。

#### flexible()

适配方法，用来设置方法`setData(datumWidth, maxWidth)`设置后，启动适配器。


## 如果你使用scss等css扩展语言

>你可以基于screen-rem-fitter.js来设定你样式大小的运算，这样就避免了我们自己手算。

例如：当你通过`ScreenRemFitter.setData(360)`，把html的font-size为100px时的屏幕宽度定为360px;一个宽度为200px的元素，即为2rem;那么当屏幕宽度为750px的时候，这2rem表示的宽度为：750 / 360 * 2 * 100;也就是px = 屏幕宽度 / 运算基准宽度 * rem * 100；换算后：rem = px * (运算基准宽度 / 屏幕宽度) / 100，于是，我们可以得到rem单位换算:

```
// 运算基准宽度为360
// scss:rem单位换算
@function rem($px) {
  @return $px * (360 / 750) * 100 + rem;
}
```

当设计稿为750px，一个元素宽度为100px时，我们可以这样：

```
// scss
width: rem(100)
```

有了表达式，就避免了我们自己手算。记得在scss等css扩展语言中，使用这个公式：

```
rem = px * (运算基准宽度 / 屏幕宽度) / 100
```

## run(运行)

``` bash
# git clone ...
git clone https://github.com/nongshuqiner/screen-rem-fitter.js.git

# enter
cd screen-rem-fitter.js

# install dependencies
npm install

# 运行此命令将所有代码从 src 目录编译到 lib
npm run build

# open examples HTML
npm run examples
```

## Donation(打赏)

![payment-code.png](https://upload-images.jianshu.io/upload_images/4645892-20338f9a0a443ff2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## Contact me(联系我)

Just Contact Me At:
- Email: ym1185509297@163.com
- 简书: [言墨儿](https://www.jianshu.com/u/319464da1cc1)

## License

[MIT](http://opensource.org/licenses/MIT) Copyright (c) 2018 - forever Naufal Rabbani
