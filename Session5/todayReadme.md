# JavaScript Session 1

---

## 1. What is JavaScript?

JavaScript is a programming language used to make websites interactive.

**Simple Meaning:**

| Without JavaScript | With JavaScript |
|--------------------|-----------------|
| Static website (only text/images) | Buttons work, forms validate, animations happen |

**Real-life example:**

```js
console.log('Hello World');
```

---

## 2. History of JavaScript

Created in **1995** by **Brendan Eich**, made in just **10 days**.

| Stage | Name |
|-------|------|
| First | Mocha |
| Then | LiveScript |
| Final | **JavaScript** |

> 💡 Fun fact: JavaScript was built in just 10 days!

---

## 3. How JavaScript Works

JavaScript runs inside the browser using a **JavaScript Engine**.

**Popular Engines:**

| Browser | Engine |
|---------|--------|
| Chrome | V8 |
| Firefox | SpiderMonkey |

**Execution Flow:**

```
You write code → Browser reads it → Engine executes line by line
```

---

## 4. Adding JavaScript to HTML

Three ways to add JavaScript:

### ① Inline

```html
<button onclick="alert('Hi')">Click Me</button>
```

### ② Internal (Inside `<script>` tag)

```html
<script>
  console.log("Hello");
</script>
```

### ③ External (Separate `.js` file)

```html
<script src="script.js"></script>
```

---

## 5. Variables

A **variable** is a container to store data.

| Keyword | Usage | Can Change? |
|---------|-------|-------------|
| `let` | Modern, block-scoped | ✅ Yes |
| `const` | Fixed value | ❌ No |
| `var` | Old style (avoid) | ✅ Yes |

```js
let name = 'Neeraj';      // can be changed later
const PI = 3.14;          // fixed value
var age = 21;             // old way (avoid using)
```

---

## 6. Variable Naming Rules

- ✅ Can use: letters, `$`, `_`
- ❌ Cannot start with a number
- ❌ No spaces allowed
- ✅ Use **camelCase** (recommended)

```js
let userName = 'Neeraj';   // ✅ valid
let _score = 100;          // ✅ valid
let $amount = 500;         // ✅ valid
// let 1name = 'bad';      // ❌ invalid — starts with number
```

---

## 7. Data Types

### Primitive Data Types

```js
let age = 21;                      // Number
let name = "Neeraj";               // String
let isPassed = true;               // Boolean
let score;                         // Undefined
let result = null;                 // Null
let big = 12345678901234567890n;   // BigInt
let id = Symbol("id");             // Symbol
```

### Non-Primitive Data Types

#### Object

```js
let person = {
  name: "Neeraj",
  age: 21
};
```

#### Array

```js
let fruits = ["Apple", "Mango", "Banana"];
```

---

## 8. Operators

### Arithmetic Operators

```js
console.log(10 + 5);  // 15
console.log(10 - 3);  // 7
console.log(10 * 2);  // 20
console.log(10 / 2);  // 5
console.log(10 % 3);  // 1 (remainder)
```

### Comparison Operators

```js
console.log(10 == "10");   // true  (loose equality — only checks value)
console.log(10 === "10");  // false (strict equality — checks value AND type)
console.log(10 != "10");   // false
console.log(10 !== "10");  // true
```

> ⚠️ Always prefer `===` over `==` to avoid unexpected results.

### Logical Operators

```js
console.log(true && false);  // false (AND)
console.log(true || false);  // true  (OR)
console.log(!true);          // false (NOT)
```

---

## 9. Input & Output

| Method | Purpose |
|--------|---------|
| `console.log()` | Print output in browser console |
| `alert()` | Show a popup message |
| `prompt()` | Take input from the user |

```js
let name = prompt('Enter your name:');  // takes input
alert('Welcome, ' + name);             // shows popup
console.log(name);                     // prints in console
```

---

## 10. Comments

**Why use comments?**
- Explain your code to others (and future you!)
- Ignored by the browser — doesn't affect execution

```js
// This is a single-line comment

/*
  This is a
  multi-line comment
*/

let x = 10; // you can also comment at end of a line
```

---

> 📝 **Session Summary**
>
> | Topic | Key Takeaway |
> |-------|-------------|
> | What is JS | Makes websites interactive |
> | History | Created 1995 by Brendan Eich |
> | How it works | Browser engine runs it line by line |
> | Adding JS | Inline / Internal / External |
> | Variables | `let`, `const`, `var` |
> | Naming Rules | camelCase, no spaces, no leading numbers |
> | Data Types | Primitive & Non-Primitive |
> | Operators | Arithmetic, Comparison, Logical |
> | Input/Output | `prompt()`, `alert()`, `console.log()` |
> | Comments | `//` and `/* */` |