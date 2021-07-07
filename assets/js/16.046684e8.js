(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{407:function(t,a,e){"use strict";e.r(a);var r=e(11),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("em",[t._v("ES10 还只是一个草案。但是除了 Object.fromEntries 之外，Chrome 的大多数功能都已经实现了。在新的语言特性方面，ES10 不如 ES6 重要，但它确实添加了一些有趣的特性。让我们一起来看一下具体有哪些特性吧。")])]),t._v(" "),e("h1",{attrs:{id:"es10新特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#es10新特性"}},[t._v("#")]),t._v(" ES10新特性")]),t._v(" "),e("ul",[e("li",[t._v("String.matchAll()")]),t._v(" "),e("li",[t._v("Dynamic import()")]),t._v(" "),e("li",[t._v("Array.flat().flatMap()")]),t._v(" "),e("li",[t._v("Object.fromEntries()")]),t._v(" "),e("li",[t._v("String.trimStart().trimEnd()")]),t._v(" "),e("li",[t._v("well-formed JSON.stringify()")]),t._v(" "),e("li",[t._v("stable Array.sort()")]),t._v(" "),e("li",[t._v("new Function.toString()")]),t._v(" "),e("li",[t._v("Standardized globalThis object")])]),t._v(" "),e("h2",{attrs:{id:"_1-bigint-任意精度整数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-bigint-任意精度整数"}},[t._v("#")]),t._v(" 1. BigInt -任意精度整数")]),t._v(" "),e("h2",{attrs:{id:"_1-1-bigint-是第七种-原始类型。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-bigint-是第七种-原始类型。"}},[t._v("#")]),t._v(" 1.1 BigInt 是第七种 原始类型。")]),t._v(" "),e("p",[t._v("BigInt 是一个任意精度的整数。这意味着变量现在可以 "),e("font",{attrs:{color:"#F39C12"}},[t._v("$表示^{253}$")]),t._v(" 数字，而不仅仅是 "),e("font",{attrs:{color:"#F39C12"}},[t._v("9007199254740992")]),t._v("。\nconst b = 1n; // 追加 n 以创建 BigInt\n在过去，不支持大于 "),e("font",{attrs:{color:"#F39C12"}},[t._v("9007199254740992")]),t._v(" 的整数值。如果超过，该值将锁定为 "),e("font",{attrs:{color:"#F39C12"}},[t._v("MAX_SAFE_INTEGER + 1")]),t._v(":")],1),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('const limit = Number.MAX_SAFE_INTEGER; \n⇨ 9007199254740991\nlimit + 1;\n⇨ 9007199254740992\nlimit + 2;\n⇨ 9007199254740992 <--- MAX_SAFE_INTEGER + 1 exceeded\nconst larger = 9007199254740991n;\n⇨ 9007199254740991n\nconst integer = BigInt(9007199254740991); // initialize with number\n⇨ 9007199254740991n\nconst same = BigInt("9007199254740991"); // initialize with "string"\n⇨ 9007199254740991n\n')])])]),e("h2",{attrs:{id:"_1-2-typeof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-typeof"}},[t._v("#")]),t._v(" 1.2 typeof")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("typeof 10;\n⇨ 'number'\ntypeof 10n;\n⇨ 'bigint'\n")])])]),e("h2",{attrs:{id:"_1-3-等于运算符可用于两种类型之间比较"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-等于运算符可用于两种类型之间比较"}},[t._v("#")]),t._v(" 1.3 等于运算符可用于两种类型之间比较：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("10n === BigInt(10);\n⇨ true\n10n == 10;\n⇨ true\n")])])]),e("h2",{attrs:{id:"_1-4-数学运算符只能在自己的类型中工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-数学运算符只能在自己的类型中工作"}},[t._v("#")]),t._v(" 1.4 数学运算符只能在自己的类型中工作:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("200n / 10n\n⇨ 20n\n200n / 20\n⇨ Uncaught TypeError:\nCannotmix BigInt and other types, use explicit conversions <\n")])])]),e("h2",{attrs:{id:"_1-5-运算符可以操作-不可用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-运算符可以操作-不可用"}},[t._v("#")]),t._v(" 1.5 运算符可以操作，+不可用")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("-100n\n⇨ -100n\n+100n\n⇨ Uncaught TypeError:\nCannot convert a BigInt value to a number\n")])])]),e("h1",{attrs:{id:"_2-string-matchall"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-string-matchall"}},[t._v("#")]),t._v(" 2.String.matchAll()")]),t._v(" "),e("p",[t._v("matchAll 可能已经在 Chrome C73 中正式实现了——如果不是，它仍然值得一看。特别是如果你是一个正则表达式(regex)爱好者。")]),t._v(" "),e("h2",{attrs:{id:"_2-1-string-prototype-matchall"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-string-prototype-matchall"}},[t._v("#")]),t._v(" 2.1 string.prototype.matchAll()")]),t._v(" "),e("p",[t._v("如果您运行谷歌搜索JavaScript string match all，第一个结果将是这样的：如何编写正则表达式“match all”？")]),t._v(" "),e("p",[t._v("最佳结果将建议 String.match 与正则表达式和 /g 一起使用或者带有 /g 的 RegExp.exec 或者带有 /g 的 RegExp.test。")]),t._v(" "),e("p",[t._v("首先，让我们看看旧规范是如何工作的。")]),t._v(" "),e("p",[t._v("带字符串参数的 String.match 仅返回第一个匹配：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("let string = 'Hello';\nlet matches = string.match('1');\nconsole.log(matches[0]); // \"l\"\n")])])]),e("p",[t._v('结果是单个 "l"（注意：匹配存储在 matches[0] 中而不是 matches）')]),t._v(" "),e("p",[t._v('在“hello”中搜索 "l" 只返回 "l"。')]),t._v(" "),e("p",[t._v("将 string.match 与 regex 参数一起使用也是如此：")]),t._v(" "),e("p",[t._v("让我们使用正则表达式 /l/ 找到字符 串“hello” 中的 “l” 字符：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('let string = "Hello";\nlet matches = string.match(/l/);\nconsole.log(matches[0]); // "l"\n')])])]),e("h2",{attrs:{id:"_2-2-添加-g-混合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-添加-g-混合"}},[t._v("#")]),t._v(" 2.2 添加 /g 混合")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('let string = "Hello";\nlet ret = string.match(/l/g); // (2) [“l”, “l”];\n')])])]),e("p",[t._v("很好，我们使用 < ES10 方式得到了多个匹配，它一直起作用。")]),t._v(" "),e("p",[t._v("那么为什么要使用全新的 matchAll 方法呢? 在我们更详细地回答这个问题之前，让我们先来看看 捕获组。如果不出意外，你可能会学到一些关于正则表达式的新知识。")]),t._v(" "),e("h2",{attrs:{id:"_2-3-正则表达式捕获组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-正则表达式捕获组"}},[t._v("#")]),t._v(" 2.3 正则表达式捕获组")]),t._v(" "),e("p",[t._v("在 regex 中捕获组只是从 () 括号中提取一个模式，可以使用 "),e("strong",[t._v("/regex/.exec(string)")]),t._v(" 和 "),e("strong",[t._v("string.match")]),t._v(" 捕捉组。")]),t._v(" "),e("p",[t._v("常规捕获组是通过将模式包装在 "),e("strong",[t._v("(pattern)")]),t._v(" 中创建的，但是要在结果对象上创建 "),e("font",{attrs:{color:"#F39C12"}},[t._v("groups")]),t._v(" 属性，它是: "),e("font",{attrs:{color:"#F39C12"}},[t._v("(?<name>pattern)")]),t._v("。")],1),t._v(" "),e("p",[t._v("要创建一个新的组名，只需在括号内附加 "),e("strong",[t._v("?<name>")]),t._v("，结果中，分组 (pattern) 匹配将成为 "),e("strong",[t._v("group.name")]),t._v("，并附加到 "),e("strong",[t._v("match")]),t._v(" 对象，以下是一个实例：")]),t._v(" "),e("p",[t._v("字符串标本匹配：\nblack*raven lime*parrot white*seagull")]),t._v(" "),e("p",[t._v("这里创建了 match.groups."),e("strong",[t._v("color")]),t._v(" 和 match.groups."),e("strong",[t._v("bird")]),t._v(" ：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const string = 'black*raven lime*parrot white*seagull';\nconst regex = /(?<color>.*?)\\*(?<bird>[a-z0-9]+)/g;\nwhile (match = regex.exec(string))\n{\n  let value = match[0];\n  let index = match.index;\n  let input = match.input;\n  console.log(`${value} at ${index} with '${input}'`);\n  console.log(match.groups.color);\n  console.log(match.groups.bird);\n}\n")])])]),e("p",[t._v("需要多次调用 regex.exec 方法来遍历整个搜索结果集。 在每次迭代期间调用 .exec 时，将显示下一个结果（它不会立即返回所有匹配项。），因此使用 while 循环。")]),t._v(" "),e("p",[t._v("输出如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("black*raven at 0 with 'black*raven lime*parrot white*seagull'\nblack\nraven\nlime*parrot at 11 with 'black*raven lime*parrot white*seagull'\nlime\nparrot\nwhite*seagull at 23 with 'black*raven lime*parrot white*seagull'\nwhite\nseagull\n")])])]),e("p",[e("strong",[t._v("但奇怪的是:")]),t._v(" "),e("font",{attrs:{color:"#2980B9"}},[e("em",[t._v("如果你从这个正则表达式中删除 /g，你将永远在第一个结果上创建一个无限循环。这在过去是一个巨大的痛苦。想象一下，从某个数据库接收正则表达式时，你不确定它的末尾是否有 /g，你得先检查一下。")])])],1),t._v(" "),e("h2",{attrs:{id:"_2-4-使用-matchall-的好理由"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-使用-matchall-的好理由"}},[t._v("#")]),t._v(" 2.4 使用 .matchAll() 的好理由")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("在与捕获组一起使用时，它可以 "),e("strong",[t._v("更加优雅")]),t._v(",捕获组只是使用 () 提取模式的正则表达式的一部分。")])]),t._v(" "),e("li",[e("p",[t._v("它 "),e("strong",[t._v("返回一个迭代器而")]),t._v(" 不是一个数组，迭代器本身是有用的。")])]),t._v(" "),e("li",[e("p",[t._v("迭代器可以使用扩展运算符 (…) 转换为数组。")])]),t._v(" "),e("li",[e("p",[t._v("它避免了带有 "),e("strong",[t._v("/g")]),t._v(" 标志的正则表达式，当从数据库或外部源检索未知正则表达式并与陈旧的 "),e("strong",[t._v("RegEx")]),t._v(" 对象一起使用时，它非常有用。")])]),t._v(" "),e("li",[e("p",[t._v("使用 "),e("strong",[t._v("RegEx")]),t._v(" 对象创建的正则表达式不能使用点 "),e("strong",[t._v("(.)")]),t._v(" 操作符链接。")])]),t._v(" "),e("li",[e("p",[t._v("高级: "),e("strong",[t._v("RegEx")]),t._v(" 对象更改跟踪最后匹配位置的内部 "),e("strong",[t._v(".lastindex")]),t._v(" 属性，这在复杂的情况下会造成严重破坏。")])])]),t._v(" "),e("h2",{attrs:{id:"_2-5-matchall-是如何工作的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-matchall-是如何工作的"}},[t._v("#")]),t._v(" 2.5 .matchAll() 是如何工作的")]),t._v(" "),e("p",[t._v("让我们尝试匹配单词 hello 中字母 e 和 l 的所有实例， 因为返回了迭代器，所以可以使用 "),e("strong",[t._v("for…of")]),t._v(" 循环遍历它：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('// Match all occurrences of the letters: "e" or "l" \nlet iterator = "hello".matchAll(/[el]/);\nfor (const match of iterator)\n  console.log(match);\n')])])]),e("p",[t._v("这一次你可以跳过 "),e("strong",[t._v("/g")]),t._v("， .matchall 方法不需要它，结果如下:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[ 'e', index: 1, input: 'hello' ] // Iteration 1\n[ 'l', index: 2, input: 'hello' ] // Iteration 2\n[ 'l', index: 3, input: 'hello' ] // Iteration 3\n")])])]),e("h2",{attrs:{id:"_2-6-使用-matchall-捕获组示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-使用-matchall-捕获组示例"}},[t._v("#")]),t._v(" 2.6 使用 .matchAll() 捕获组示例：")]),t._v(" "),e("p",[e("strong",[t._v(".matchAll")]),t._v("  具有上面列出的所有好处。它是一个迭代器，可以用 "),e("strong",[t._v("for…of")]),t._v(" 循环遍历它,这就是整个语法的不同。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const string = 'black*raven lime*parrot white*seagull';\nconst regex = /(?<color>.*?)\\*(?<bird>[a-z0-9]+)/;\nfor (const match of string.matchAll(regex)) {\n  let value = match[0];\n  let index = match.index;\n  let input = match.input;\n  console.log(`${value} at ${index} with '${input}'`);\n  console.log(match.groups.color);\n  console.log(match.groups.bird);\n}\n")])])]),e("p",[t._v("请注意已经没有 "),e("strong",[t._v("/g")]),t._v(" 标志，因为 "),e("strong",[t._v(".matchAll()")]),t._v(" 已经包含了它，打印如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("black*raven at 0 with 'black*raven lime*parrot white*seagull'\nblack\nraven\nlime*parrot at 11 with 'black*raven lime*parrot white*seagull'\nlime\nparrot\nwhite*seagull at 23 with 'black*raven lime*parrot white*seagull'\nwhite\nseagull\n")])])]),e("p",[t._v("也许在美学上它与原始正则表达式非常相似，执行while循环实现。但是如前所述，由于上面提到的许多原因，这是更好的方法，移除 "),e("strong",[t._v("/g")]),t._v(" 不会导致无限循环。")]),t._v(" "),e("h1",{attrs:{id:"_3-动态导入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-动态导入"}},[t._v("#")]),t._v(" 3. 动态导入")]),t._v(" "),e("p",[t._v("现在可以将导入分配给变量：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("element.addEventListener('click', async() => {\n  const module = await import(`./api-scripts/button-click.js`);\n  module.clickEvent();\n})\n")])])]),e("h1",{attrs:{id:"_4-array-flat-array-flatmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-array-flat-array-flatmap"}},[t._v("#")]),t._v(" 4. Array.flat() & Array.flatMap()")]),t._v(" "),e("h2",{attrs:{id:"_4-1-array-flat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-array-flat"}},[t._v("#")]),t._v(" 4.1 Array.flat()")]),t._v(" "),e("p",[t._v("扁平化多维数组：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("let multi = [1,2,3,[4,5,6,[7,8,9,[10,11,12]]]];\nmulti.flat();               // [1,2,3,4,5,6,Array(4)]\nmulti.flat().flat();        // [1,2,3,4,5,6,7,8,9,Array(3)]\nmulti.flat().flat().flat(); // [1,2,3,4,5,6,7,8,9,10,11,12]\nmulti.flat(Infinity);       // [1,2,3,4,5,6,7,8,9,10,11,12]\n")])])]),e("h2",{attrs:{id:"_4-2-array-flatmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-array-flatmap"}},[t._v("#")]),t._v(" 4.2 Array.flatMap()")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("let array = [1, 2, 3, 4, 5];\narray.map(x => [x, x * 2]);\n\nlet array = [1, 2, 3, 4, 5];\narray.map(x => [x, x * 2]);\n")])])]),e("p",[t._v("结果：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[Array(2),Array(2),Array(2),Array(2),Array(2)]\n0: (2) [1, 2]\n1: (2) [2, 4]\n2: (2) [3, 6]\n3: (2) [4, 8]\n4: (2) [5, 10]\n")])])]),e("p",[t._v("使用 flatMap 方法：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("array.flatMap(v => [v, v * 2]);\n[1, 2, 2, 4, 3, 6, 4, 8, 5, 10]\n")])])]),e("h1",{attrs:{id:"_5-object-fromentries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-object-fromentries"}},[t._v("#")]),t._v(" 5. Object.fromEntries()")]),t._v(" "),e("p",[t._v("将键值对列表转换为对象:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('let obj = { apple : 10, orange : 20, banana : 30 };\nlet entries = Object.entries(obj);\nentries;\n(3) [Array(2), Array(2), Array(2)]\n0: (2) ["apple", 10]\n1: (2) ["orange", 20]\n2: (2) ["banana", 30]\nlet fromEntries = Object.fromEntries(entries);\n{ apple: 10, orange: 20, banana: 30 }\n')])])]),e("h1",{attrs:{id:"_6-string-trimstart-与-string-trimend"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-string-trimstart-与-string-trimend"}},[t._v("#")]),t._v(" 6. String.trimStart() 与 String.trimEnd()")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('let greeting = "     Space around     ";\ngreeting.trimEnd();   // "     Space around";\ngreeting.trimStart(); // "Space around     ";\n')])])]),e("h1",{attrs:{id:"_7-格式良好的-json-stringify"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-格式良好的-json-stringify"}},[t._v("#")]),t._v(" 7. 格式良好的 JSON.stringify()")]),t._v(" "),e("p",[t._v("此更新修复了字符 "),e("strong",[t._v("U+D800")]),t._v(" 到 "),e("strong",[t._v("U+DFFF")]),t._v(" 的处理，有时可以进入 JSON 字符串。 这可能是一个问题，因为 "),e("strong",[t._v("JSON.stringify")]),t._v(" 可能会将这些数字格式化为没有等效 UTF-8 字符的值, 但 JSON 格式需要 UTF-8 编码。")]),t._v(" "),e("p",[t._v("解析方法使用格式良好的JSON字符串，如:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("'{ “prop1” : 1, \"prop2\" : 2 }'; // A well-formed JSON format string\n")])])]),e("p",[t._v("注意，要创建正确 JSON 格式的字符串，绝对需要在属性名周围加上双引号。缺少或任何其他类型的引号都不会生成格式良好的JSON。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("'{ “prop1” : 1, \"meth\" : () => {}}'; // Not JSON format string\n")])])]),e("p",[t._v("JSON 字符串格式与 Object Literal 不同，后者看起来几乎一样，但可以使用任何类型的引号括住属性名，也可以包含方法(JSON格式不允许使用方法):")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("let object_literal={ property: 1, meth:()=> {}};\n")])])]),e("p",[t._v("不管怎样，一切似乎都很好。第一个示例看起来是兼容的。但它们也是简单的例子，大多数情况下都能顺利地工作!")]),t._v(" "),e("h1",{attrs:{id:"_8-稳定的-array-prototype-sort"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-稳定的-array-prototype-sort"}},[t._v("#")]),t._v(" 8. 稳定的 Array.prototype.sort()")]),t._v(" "),e("p",[e("strong",[t._v("V8")]),t._v(" 之前的实现对包含10个以上项的数组使用了一种 "),e("strong",[t._v("不稳定")]),t._v(" 的快速排序算法。")]),t._v(" "),e("p",[e("font",{attrs:{color:"#2980B9"}},[e("em",[t._v("一个稳定的排序算法是当两个键值相等的对象在排序后的输出中出现的顺序与在未排序的输入中出现的顺序相同时。")])])],1),t._v(" "),e("p",[t._v("但情况不再是这样了，ES10 提供了一个稳定的数组排序:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('var fruit = [\n  { name: "Apple",      count: 13, },\n  { name: "Pear",       count: 12, },\n  { name: "Banana",     count: 12, },\n  { name: "Strawberry", count: 11, },\n  { name: "Cherry",     count: 11, },\n  { name: "Blackberry", count: 10, },\n  { name: "Pineapple",  count: 10, }\n];\n// 创建排序函数:\nlet my_sort = (a, b) => a.count - b.count;\n// 执行稳定的ES10排序:\nlet sorted = fruit.sort(my_sort);\nconsole.log(sorted);\n')])])]),e("h1",{attrs:{id:"_9-新的function-tostring"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-新的function-tostring"}},[t._v("#")]),t._v(" 9. 新的Function.toString()")]),t._v(" "),e("p",[t._v("函数是对象，并且每个对象都有一个 "),e("strong",[t._v(".toString()")]),t._v(" 方法，因为它最初存在于 "),e("strong",[t._v("Object.prototype.toString()")]),t._v(" 上。所有对象（包括函数）都是通过基于原型的类继承从它继承的。")]),t._v(" "),e("p",[t._v("这意味着我们以前已经有 "),e("strong",[t._v("function.toString()")]),t._v(" 方法")]),t._v(" "),e("p",[t._v("但是 ES10 进一步尝试标准化所有对象和内置函数的字符串表示。以下是各种新案例：")]),t._v(" "),e("p",[e("strong",[t._v("典型的例子：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function(){console.log('Hello there.')}.toString();\n")])])]),e("p",[e("strong",[t._v("控制台输出（函数体的字符串格式：）")]),t._v("\n⇨ function () { console.log('Hello there.'); }")]),t._v(" "),e("p",[t._v("下面是剩下的例子：")]),t._v(" "),e("p",[e("strong",[t._v("直接在方法名 .toString()")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Number.parseInt.toString();\n⇨ function parseInt() { [native code] }\n")])])]),e("p",[e("strong",[t._v("绑定上下文:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function () { }.bind(0).toString();\n⇨ function () { [native code] }\n")])])]),e("p",[e("strong",[t._v("内置可调用函数对象:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Symbol.toString();\n⇨ function Symbol() { [native code] }\n")])])]),e("p",[e("strong",[t._v("动态生成的函数:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function* () { }.toString();\n⇨ function* () { }\n")])])]),e("p",[e("strong",[t._v("prototype.toString")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Function.prototype.toString.call({});\n⇨ Function.prototype.toString requires that 'this' be a Function\"\n")])])]),e("h1",{attrs:{id:"_10-可选的-catch-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-可选的-catch-binding"}},[t._v("#")]),t._v(" 10. 可选的 Catch Binding")]),t._v(" "),e("p",[t._v("在过去，"),e("strong",[t._v("try/catch")]),t._v(" 语句中的 "),e("strong",[t._v("catch")]),t._v(" 语句需要一个变量。 "),e("strong",[t._v("try/catch")]),t._v(" 语句帮助捕获终端级别的错误:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('try {\n  // Call a non-existing function undefined_Function\n  undefined_Function("I\'m trying");\n}\ncatch(error) {\n  // Display the error if statements inside try above fail\n  console.log( error ); // undefined_Function is undefined\n}\n')])])]),e("p",[t._v("在某些情况下，所需的"),e("strong",[t._v("错误")]),t._v("变量是未使用的:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('try {\n  JSON.parse(text); // <--- this will fail with "text not defined"\n  return true; <--- exit without error even if there is one\n}\ncatch (redundant_sometmes) <--- this makes error variable redundant\n{\n  return false;\n}\n')])])]),e("p",[t._v("编写此代码的人通过尝试强制 "),e("font",{attrs:{color:"#F39C12"}},[t._v("true")]),t._v(" 退出 "),e("strong",[t._v("try")]),t._v(" 子句。但是，这并不是实际发生的情况")],1),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("(() => {\n    try {\n        JSON.parse(text)\n        return true\n    } catch(err) {\n        return false\n    }\n})()\n=> false\n")])])]),e("p",[e("strong",[t._v("在 ES10 中，捕获错误的变量是可选的")])]),t._v(" "),e("p",[t._v("现在可以跳过错误变量:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("try {\n    JSON.parse(text);\n    return true;\n}\ncatch\n{\n    return false;\n}\n")])])]),e("p",[t._v("目前还无法测试上一个示例中的 "),e("strong",[t._v("try")]),t._v(" 语句的结果，但一旦它出来，我将更新这部分。")]),t._v(" "),e("h1",{attrs:{id:"_11-标准化-globalthis-对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-标准化-globalthis-对象"}},[t._v("#")]),t._v(" 11. 标准化 globalThis 对象")]),t._v(" "),e("p",[t._v("这在ES10之前， globalThis 还没有标准化。")]),t._v(" "),e("p",[t._v("在产品代码中，你可以自己编写这个怪物，在多个平台上“标准化”它:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var getGlobal = function () {\n  if (typeof self !== 'undefined') { return self; }\n  if (typeof window !== 'undefined') { return window; }\n  if (typeof global !== 'undefined') { return global; }\n  throw new Error('unable to locate global object');\n};\n")])])]),e("p",[t._v("但即使这样也不总是奏效。因此，ES10 添加了 "),e("strong",[t._v("globalThis")]),t._v(" 对象，从现在开始，该对象用于在任何平台上访问全局作用域:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 访问全局数组构造函数\nglobalThis.Array(0, 1, 2);\n⇨ [0, 1, 2]\n\n// 类似于 ES5 之前的 window.v = { flag: true }\nglobalThis.v = { flag: true };\n\nconsole.log(globalThis.v);\n⇨ { flag: true }\n")])])]),e("h1",{attrs:{id:"_12-symbol-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12-symbol-description"}},[t._v("#")]),t._v(" 12. Symbol.description")]),t._v(" "),e("p",[e("font",{attrs:{color:"#F39C12"}},[t._v("description")]),t._v(" 是一个只读属性，它返回 "),e("strong",[t._v("Symbol")]),t._v(" 对象的可选描述。")],1),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("let mySymbol = 'My Symbol';\nlet symObj = Symbol(mySymbol);\nsymObj; // Symbol(My Symbol)\nsymObj.description; // \"My Symbol\"\n")])])]),e("h1",{attrs:{id:"_13-hashbang-语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-hashbang-语法"}},[t._v("#")]),t._v(" 13. Hashbang  语法")]),t._v(" "),e("p",[t._v("也就是 unix 用户熟悉的 "),e("strong",[t._v("shebang")]),t._v("。它指定一个解释器(什么将执行JavaScript文件?)。")]),t._v(" "),e("p",[t._v("ES10标准化，我不会对此进行详细介绍，因为从技术上讲，这并不是一个真正的语言特性，但它基本上统一了 JavaScript 在服务器端的执行方式。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ ./index.js\n")])])]),e("p",[t._v("代替")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ node index.js\n")])])]),e("h1",{attrs:{id:"_14-es10类-private、static-和-公共成员"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_14-es10类-private、static-和-公共成员"}},[t._v("#")]),t._v(" 14. ES10类:private、static 和 公共成员")]),t._v(" "),e("p",[e("strong",[t._v("新的语法字符 #octothorpe（hash tag）现在用于直接在类主体的范围内定义变量，函数，getter 和 setter ......以及构造函数和类方法。")])]),t._v(" "),e("p",[t._v("下面是一个毫无意义的例子，它只关注新语法:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("class Raven extends Bird {\n    #state = { eggs: 10};\n    // getter\n    get #eggs() { \n        return state.eggs;\n    }\n    // setter\n    set #eggs(value) {\n        this.#state.eggs = value;\n    }\n    #lay() {\n        this.#eggs++;\n    }\n    constructor() {\n        super();\n        this.#lay.bind(this);\n    }\n    #render() {\n        /* paint UI */\n    }\n}\n")])])]),e("p",[t._v("老实说，我认为这会让语言更难读。")])])}),[],!1,null,null,null);a.default=n.exports}}]);