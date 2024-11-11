// Number and its methods explain


// ****************************************
// 1. Number()
// *****************************************

/* JavaScript-এর `Number()` ফাংশনটি একটি বিল্ট-ইন ফাংশন, যা কোনো ভেরিয়েবল বা মানকে সংখ্যা (number) টাইপে রূপান্তর করতে ব্যবহৃত হয়। এটি সাধারণত স্ট্রিং (string) বা অন্য ডেটা টাইপকে সংখ্যা হিসেবে কনভার্ট করতে ব্যবহৃত হয়।

### `Number()` ফাংশনের কিছু বৈশিষ্ট্য:
1. **যদি স্ট্রিং-এ শুধুমাত্র সংখ্যা থাকে**, তাহলে এটি সংখ্যায় কনভার্ট হবে।
   ```javascript
   console.log(Number("123")); // আউটপুট: 123
   ```

2. **যদি স্ট্রিং-এর মধ্যে অ-সংখ্যা অক্ষর থাকে**, তাহলে এটি `NaN` (Not a Number) রিটার্ন করবে।
   ```javascript
   console.log(Number("123abc")); // আউটপুট: NaN
   ```

3. **বুলিয়ান ভ্যালু কনভার্ট করা**: `true` কনভার্ট হলে 1 হবে এবং `false` কনভার্ট হলে 0 হবে।
   ```javascript
   console.log(Number(true)); // আউটপুট: 1
   console.log(Number(false)); // আউটপুট: 0
   ```

4. **ফাঁকা স্ট্রিং বা `null`**: ফাঁকা স্ট্রিং বা `null` এর মান `0` হিসেবে রিটার্ন করবে।
   ```javascript
   console.log(Number("")); // আউটপুট: 0
   console.log(Number(null)); // আউটপুট: 0
   ```

5. **`undefined`**: এটি সর্বদা `NaN` রিটার্ন করবে কারণ `undefined` সংখ্যায় রূপান্তরযোগ্য নয়।
   ```javascript
   console.log(Number(undefined)); // আউটপুট: NaN
   ```

### ব্যবহার
`Number()` ফাংশনটি বিভিন্ন সময়ে ব্যবহার করা হয় যখন ভিন্ন ডেটা টাইপকে সংখ্যা টাইপে রূপান্তর করা প্রয়োজন। তবে, সবসময় লক্ষ্য রাখতে হবে যে রূপান্তর সফল হবে কি না।

**উদাহরণ:**
```javascript
let age = "25";
let convertedAge = Number(age); // age কে string থেকে number এ রূপান্তর করছে
console.log(convertedAge); // আউটপুট: 25
```
এইভাবে, `Number()` ফাংশনটি JavaScript-এ টাইপ কনভার্সনের জন্য একটি গুরুত্বপূর্ণ টুল। */

// ****************************************
// 2. Number.isFinite()
// *****************************************

/* JavaScript-এর `Number.isFinite()` একটি মেথড যা নির্ধারণ করে একটি মান ফাইনাইট সংখ্যা কিনা। এটি শুধুমাত্র সেই মানগুলোর জন্য `true` রিটার্ন করে যা ফাইনাইট সংখ্যা (অর্থাৎ, `NaN`, `Infinity`, বা `-Infinity` নয়)। এই মেথডটি শুধুমাত্র সংখ্যাগত মান চেক করতে ব্যবহৃত হয় এবং অন্য কোনো ডেটা টাইপকে ফাইনাইট হিসেবে বিবেচনা করে না।

### `Number.isFinite()` এর ব্যবহার:
- **সিনট্যাক্স**:
  ```javascript
  Number.isFinite(value)
  ```
  এখানে `value` হচ্ছে সেই মান যেটি যাচাই করা হবে যে এটি ফাইনাইট কিনা।

### `Number.isFinite()` কিভাবে কাজ করে:
1. **সাধারণ সংখ্যার জন্য**: যদি `value` একটি সাধারণ সংখ্যা (ফাইনাইট সংখ্যা) হয়, এটি `true` রিটার্ন করবে।
   ```javascript
   console.log(Number.isFinite(42)); // আউটপুট: true
   console.log(Number.isFinite(-99.5)); // আউটপুট: true
   ```

2. **`Infinity` বা `-Infinity`**: যদি `value` `Infinity` বা `-Infinity` হয়, এটি `false` রিটার্ন করবে।
   ```javascript
   console.log(Number.isFinite(Infinity)); // আউটপুট: false
   console.log(Number.isFinite(-Infinity)); // আউটপুট: false
   ```

3. **`NaN` এর জন্য**: যদি `value` `NaN` হয়, তাহলে এটি `false` রিটার্ন করবে।
   ```javascript
   console.log(Number.isFinite(NaN)); // আউটপুট: false
   ```

4. **অন্য ডেটা টাইপ**: `Number.isFinite()` শুধুমাত্র সংখ্যা চেক করে, তাই অন্যান্য ডেটা টাইপ (যেমন স্ট্রিং, বুলিয়ান) এর জন্য এটি `false` রিটার্ন করবে।
   ```javascript
   console.log(Number.isFinite("100")); // আউটপুট: false
   console.log(Number.isFinite(true)); // আউটপুট: false
   ```

5. **`parseFloat` বা `Number()` মেথড দিয়ে রূপান্তর করা**: শুধুমাত্র `Number.isFinite()` মেথডে সংখ্যা প্রদান করলে ফাইনাইট চেক করতে পারবে।
   ```javascript
   console.log(Number.isFinite(Number("100"))); // আউটপুট: true
   console.log(Number.isFinite(Number("Hello"))); // আউটপুট: false
   ```

### ব্যবহার:
`Number.isFinite()` ব্যবহার করা হয় এমন পরিস্থিতিতে যেখানে কেবলমাত্র একটি বৈধ, ফাইনাইট সংখ্যা প্রয়োজন। এটি `isNaN()` এর বিপরীতভাবে কাজ করে এবং বৈধ সংখ্যার সীমা চেক করে।

**উদাহরণ:**
```javascript
let num = 123;
if (Number.isFinite(num)) {
    console.log("This is a finite number.");
} else {
    console.log("This is not a finite number.");
}
// আউটপুট: This is a finite number.
```

এইভাবে, `Number.isFinite()` ফাংশনটি JavaScript-এ মান যাচাই করার জন্য একটি উপকারী মেথড, বিশেষত যখন নিশ্চিত করতে হবে যে মানটি একটি সীমিত সংখ্যা। */


// ****************************************
// 3. Number.isInteger()
// *****************************************

/* JavaScript-এর `Number.isInteger()` একটি মেথড যা চেক করে কোনো মান সম্পূর্ণ সংখ্যা (integer) কিনা। যদি মানটি একটি পূর্ণসংখ্যা হয়, তাহলে এটি `true` রিটার্ন করে, আর যদি না হয় তাহলে `false` রিটার্ন করে। এটি বিশেষভাবে সংখ্যা যাচাই করতে ব্যবহৃত হয়, যাতে অন্য কোনো ডেটা টাইপকে পূর্ণসংখ্যা হিসেবে গণ্য না করা হয়।

### `Number.isInteger()` এর ব্যবহার:
- **সিনট্যাক্স**:
  ```javascript
  Number.isInteger(value)
  ```
  এখানে `value` হচ্ছে সেই মান যেটি যাচাই করা হবে যে এটি পূর্ণসংখ্যা কিনা।

### `Number.isInteger()` কিভাবে কাজ করে:
1. **পূর্ণসংখ্যার জন্য**: যদি `value` একটি পূর্ণসংখ্যা হয়, এটি `true` রিটার্ন করবে।
   ```javascript
   console.log(Number.isInteger(42));     // আউটপুট: true
   console.log(Number.isInteger(-99));    // আউটপুট: true
   ```

2. **ভগ্নাংশের জন্য**: যদি `value` ভগ্নাংশ সংখ্যা হয়, এটি `false` রিটার্ন করবে।
   ```javascript
   console.log(Number.isInteger(3.14));   // আউটপুট: false
   console.log(Number.isInteger(-0.5));   // আউটপুট: false
   ```

3. **`NaN`, `Infinity`, বা `-Infinity`**: যদি `value` `NaN`, `Infinity`, বা `-Infinity` হয়, এটি `false` রিটার্ন করবে।
   ```javascript
   console.log(Number.isInteger(NaN));        // আউটপুট: false
   console.log(Number.isInteger(Infinity));   // আউটপুট: false
   console.log(Number.isInteger(-Infinity));  // আউটপুট: false
   ```

4. **অন্য ডেটা টাইপ**: `Number.isInteger()` শুধুমাত্র সংখ্যা চেক করে, তাই স্ট্রিং, বুলিয়ান বা অন্য কোনো ডেটা টাইপ `false` রিটার্ন করবে।
   ```javascript
   console.log(Number.isInteger("100"));   // আউটপুট: false
   console.log(Number.isInteger(true));    // আউটপুট: false
   ```

### ব্যবহার:
`Number.isInteger()` ব্যবহার করা হয় যখন নিশ্চিত করতে হবে যে একটি মান সঠিকভাবে পূর্ণসংখ্যা কিনা, বিশেষত এমন ক্ষেত্রে যখন সংখ্যাগুলিকে নির্দিষ্ট সংখ্যার ভিত্তিতে প্রক্রিয়া করতে হবে।

**উদাহরণ:**
```javascript
let num = 10.5;
if (Number.isInteger(num)) {
    console.log("This is an integer.");
} else {
    console.log("This is not an integer.");
}
// আউটপুট: This is not an integer.
```

এইভাবে, `Number.isInteger()` মেথডটি JavaScript-এ পূর্ণসংখ্যা যাচাই করার জন্য একটি সহজ এবং কার্যকর উপায়। */

// ****************************************
// 4. Number.isNaN()
// *****************************************

/* JavaScript-এর `Number.isNaN()` মেথডটি ব্যবহৃত হয় কোনো মান সত্যিকারের `NaN` (Not-a-Number) কিনা তা চেক করতে। এটি একটি নির্দিষ্ট মানের ডেটা টাইপ সংখ্যা কিনা তা যাচাই করে এবং শুধুমাত্র সেই ক্ষেত্রে `true` রিটার্ন করে, যদি তা `NaN` হয়। অন্যদিকে, এটি `false` রিটার্ন করে যদি মানটি কোনো সংখ্যা বা অন্য কোনো ডেটা টাইপ হয়।

### `Number.isNaN()` এর ব্যবহার
- **সিনট্যাক্স**:
  ```javascript
  Number.isNaN(value)
  ```
  এখানে `value` হচ্ছে সেই মান, যেটি যাচাই করা হবে যে এটি `NaN` কিনা।

### `Number.isNaN()` কিভাবে কাজ করে:
1. **`NaN` হলে**: যদি `value` সত্যিই `NaN` হয়, তাহলে এটি `true` রিটার্ন করবে।
   ```javascript
   console.log(Number.isNaN(NaN));        // আউটপুট: true
   ```

2. **যদি সংখ্যা নয় এমন কিছু দেয়া হয়**: `Number.isNaN()` শুধুমাত্র `NaN` চেক করে এবং যেকোনো অন্য ডেটা টাইপের জন্য `false` রিটার্ন করে।
   ```javascript
   console.log(Number.isNaN(10));         // আউটপুট: false
   console.log(Number.isNaN("NaN"));      // আউটপুট: false
   console.log(Number.isNaN(undefined));  // আউটপুট: false
   ```

3. **সংখ্যার মধ্যে গণনার ত্রুটির ফলে `NaN`**: এটি ব্যবহার করা হয় যখন কোনো সংখ্যা `NaN` হতে পারে, যেমন অনুপযুক্ত গণনা। উদাহরণস্বরূপ, শূন্য দিয়ে ভাগ করলে বা সংখ্যা থেকে স্ট্রিং বিয়োগ করলে, `NaN` রিটার্ন করবে।
   ```javascript
   console.log(Number.isNaN(0 / 0));      // আউটপুট: true
   console.log(Number.isNaN("hello" - 5)); // আউটপুট: true
   ```

### পার্থক্য: `isNaN()` বনাম `Number.isNaN()`
`isNaN()` মেথডটি অন্য ডেটা টাইপকেও `NaN` বলে বিবেচনা করতে পারে, কিন্তু `Number.isNaN()` কেবলমাত্র প্রকৃত `NaN` চেক করে।

```javascript
console.log(isNaN("hello"));         // আউটপুট: true
console.log(Number.isNaN("hello"));  // আউটপুট: false
```

### ব্যবহার
`Number.isNaN()` সাধারণত ব্যবহৃত হয় যখন কোনো মান নির্দিষ্ট সংখ্যা কিনা তা নিশ্চিত করতে হয় এবং ভুল ফলাফল এড়াতে হয়।

**উদাহরণ:**
```javascript
let result = 0 / 0;
if (Number.isNaN(result)) {
    console.log("This is NaN");
} else {
    console.log("This is a valid number");
}
// আউটপুট: This is NaN
```

`Number.isNaN()` মেথডটি `NaN` সঠিকভাবে চিহ্নিত করতে একটি সহজ উপায়। */

// ****************************************
// 5. Number.toFixed()
// *****************************************

/* `Number.toFixed()` জাভাস্ক্রিপ্টে একটি মেথড, যা একটি সংখ্যা নির্দিষ্ট সংখ্যক দশমিক পয়েন্ট পর্যন্ত প্রদর্শনের জন্য ব্যবহৃত হয়। এটি সংখ্যা দশমিকের পর কতটা ডিজিট রাখবে তা নির্ধারণ করতে দেয় এবং দশমিকের পরের অংশটি প্রয়োজন অনুসারে রাউন্ড করে।

### সিনট্যাক্স
```javascript
number.toFixed(digits)
```

এখানে:
- **`digits`**: এটি একটি ঐচ্ছিক প্যারামিটার। এটি সংখ্যা দশমিকের পরে কতটি ডিজিট প্রদর্শন করা হবে তা নির্ধারণ করে। ডিফল্ট মান `0`।

### উদাহরণ ও ব্যাখ্যা

1. **সাধারণ ব্যবহার**:
   ```javascript
   let num = 5.6789;
   console.log(num.toFixed(2));  // আউটপুট: "5.68"
   ```
   এখানে `toFixed(2)` সংখ্যা `5.6789` কে দুটি দশমিক পয়েন্ট পর্যন্ত রাউন্ড করে "5.68" আউটপুট করবে।

2. **যদি `digits` না দেয়া হয়**:
   ```javascript
   let num = 10.1234;
   console.log(num.toFixed());  // আউটপুট: "10"
   ```
   এখানে দশমিকের পরে কোন ডিজিট থাকবেনা, কারণ ডিফল্ট মান `0`। সুতরাং, এটি কেবলমাত্র পূর্ণসংখ্যা অংশ দেখাবে।

3. **বড় ডিজিট সংখ্যা**:
   ```javascript
   let num = 3.14159265359;
   console.log(num.toFixed(5));  // আউটপুট: "3.14159"
   ```
   এখানে দশমিকের পর পাঁচটি ডিজিট দেখানোর জন্য `toFixed(5)` ব্যবহার করা হয়েছে।

4. **শূন্য পূরণ করা**:
   ```javascript
   let num = 6.3;
   console.log(num.toFixed(4));  // আউটপুট: "6.3000"
   ```
   এখানে `toFixed(4)` সংখ্যা দশমিকের পরে চারটি ডিজিট দেখায়, প্রয়োজনীয় শূন্যগুলি পূরণ করে।

5. **রাউন্ডিং**:
   ```javascript
   let num = 2.56789;
   console.log(num.toFixed(3));  // আউটপুট: "2.568"
   ```
   দশমিকের পর তৃতীয় ডিজিট অনুযায়ী সংখ্যাটি রাউন্ড করা হয়।

### ব্যবহার
`toFixed()` মেথডটি সাধারণত আর্থিক গাণিতিক গণনা, UI-তে নির্দিষ্ট দশমিক সংখ্যা প্রদর্শন, এবং যেখানে নির্দিষ্ট পরিমাণ ডিজিট সহ মান প্রদর্শন দরকার সেই ক্ষেত্রে ব্যবহৃত হয়।

**উদাহরণ**:
```javascript
let price = 49.99;
console.log("Price: $" + price.toFixed(2));  // আউটপুট: "Price: $49.99"
``` */

// ****************************************
// 6. Number.toPrecision()
// *****************************************

/* `Number.toPrecision()` জাভাস্ক্রিপ্টের একটি মেথড যা একটি নির্দিষ্ট সংখ্যক উল্লেখযোগ্য ডিজিট সহ সংখ্যা প্রদর্শন করতে ব্যবহৃত হয়। এটি কেবলমাত্র দশমিকের পরে নয়, পুরো সংখ্যাটিকে একটি নির্দিষ্ট নির্ভুলতায় কনভার্ট করে।

### সিনট্যাক্স
```javascript
number.toPrecision(precision)
```

এখানে:
- **`precision`**: এটি একটি বাধ্যতামূলক প্যারামিটার। এটি মোট কত সংখ্যক উল্লেখযোগ্য ডিজিট থাকবে তা নির্ধারণ করে।

### উদাহরণ ও ব্যাখ্যা

1. **সাধারণ ব্যবহার**:
   ```javascript
   let num = 123.456;
   console.log(num.toPrecision(4));  // আউটপুট: "123.5"
   ```
   এখানে `toPrecision(4)` মানে হলো পুরো সংখ্যাটিতে মোট চারটি উল্লেখযোগ্য ডিজিট থাকবে। ফলে সংখ্যাটি রাউন্ড করে `"123.5"` আউটপুট দেয়।

2. **ছোট সংখ্যা ক্ষেত্রে**:
   ```javascript
   let num = 0.004567;
   console.log(num.toPrecision(2));  // আউটপুট: "0.0046"
   ```
   এখানে দুটি উল্লেখযোগ্য ডিজিট সহ সংখ্যাটি `"0.0046"` আউটপুট হবে।

3. **বড় সংখ্যা ক্ষেত্রে**:
   ```javascript
   let num = 12345.67;
   console.log(num.toPrecision(3));  // আউটপুট: "1.23e+4"
   ```
   এখানে `toPrecision(3)` ব্যবহার করে সংখ্যা বিজ্ঞানী পদ্ধতিতে প্রদর্শিত হয়, যেখানে `1.23e+4` মানে হলো `1.23 * 10^4`।

4. **ডিফল্ট `precision` ছাড়া ব্যবহার**:
   ```javascript
   let num = 789.12;
   console.log(num.toPrecision());  // আউটপুট: "789.12"
   ```
   যদি কোনো `precision` না দেয়া হয়, তাহলে পুরো সংখ্যাটি অপরিবর্তিত থাকে।

5. **পুরো সংখ্যা হিসেবে প্রদর্শন**:
   ```javascript
   let num = 45.678;
   console.log(num.toPrecision(2));  // আউটপুট: "46"
   ```
   এখানে শুধুমাত্র দুটি উল্লেখযোগ্য ডিজিট ব্যবহার করা হয়েছে বলে এটি `46` হিসেবে রাউন্ড করে।

### ব্যবহার
`toPrecision()` মেথডটি বিশেষভাবে গুরুত্বপূর্ণ যখন একটি সংখ্যার নির্দিষ্ট সংখ্যক উল্লেখযোগ্য ডিজিট সহ প্রদর্শনের প্রয়োজন হয়, যেমন বিজ্ঞান ও প্রকৌশল বিষয়ক গণনায়। এটি বিশেষ করে যেসব ক্ষেত্রে সুনির্দিষ্ট গাণিতিক ফলাফল প্রয়োজন, সেখানে সহায়ক।

**উদাহরণ**:
```javascript
let measurement = 0.00056789;
console.log(measurement.toPrecision(3));  // আউটপুট: "0.000568"
```
এখানে `toPrecision(3)` ব্যবহার করে মাপটি তিনটি উল্লেখযোগ্য ডিজিটসহ প্রদর্শিত হয়েছে। */

// ****************************************
// 7. Number.toString()
// *****************************************

/* `Number.toString()` একটি জাভাস্ক্রিপ্ট মেথড যা কোনো সংখ্যা বা `Number` কে স্ট্রিং বা টেক্সট ফর্ম্যাটে কনভার্ট করতে ব্যবহৃত হয়। এটি সাধারণত তখন ব্যবহার করা হয় যখন সংখ্যাটিকে বিভিন্ন বেস (যেমন, দশমিক, বাইনারি, হেক্সাডেসিমাল) অনুযায়ী স্ট্রিং ফর্ম্যাটে প্রয়োজন হয়।

### সিনট্যাক্স
```javascript
number.toString([radix])
```

এখানে:
- **`radix`** (ঐচ্ছিক): এটি একটি সংখ্যা যা বেস নির্দেশ করে (২ থেকে ৩৬ পর্যন্ত হতে পারে)। ডিফল্ট মান হলো `10` (দশমিক বেস)।

### উদাহরণ ও ব্যাখ্যা

1. **ডিফল্ট `toString()` ব্যবহার**:
   ```javascript
   let num = 123;
   console.log(num.toString());  // আউটপুট: "123"
   ```
   এখানে `toString()` মেথড ব্যবহার করে `123` সংখ্যাটি `"123"` স্ট্রিং-এ কনভার্ট হয়েছে।

2. **বেস পরিবর্তন করে বাইনারি (বেস ২) স্ট্রিং এ রূপান্তর**:
   ```javascript
   let num = 10;
   console.log(num.toString(2));  // আউটপুট: "1010"
   ```
   এখানে `toString(2)` ব্যবহার করে দশমিক সংখ্যা `10` কে বাইনারি স্ট্রিং `"1010"`-এ কনভার্ট করা হয়েছে।

3. **হেক্সাডেসিমাল (বেস ১৬) ফর্ম্যাটে রূপান্তর**:
   ```javascript
   let num = 255;
   console.log(num.toString(16));  // আউটপুট: "ff"
   ```
   এখানে `toString(16)` ব্যবহার করে `255` সংখ্যাটিকে `"ff"` হেক্সাডেসিমাল ফর্ম্যাটে কনভার্ট করা হয়েছে।

4. **অক্টাল (বেস ৮) ফর্ম্যাটে রূপান্তর**:
   ```javascript
   let num = 64;
   console.log(num.toString(8));  // আউটপুট: "100"
   ```
   এখানে `toString(8)` ব্যবহার করে `64` সংখ্যাটিকে অক্টাল ফর্ম্যাটে `"100"` রূপান্তর করা হয়েছে।

5. **বেস ৩৬ পর্যন্ত রূপান্তর**:
   ```javascript
   let num = 123456;
   console.log(num.toString(36));  // আউটপুট: "2n9c"
   ```
   এখানে `toString(36)` ব্যবহার করে সংখ্যাটিকে বেস ৩৬ ফর্ম্যাটে `"2n9c"` হিসেবে কনভার্ট করা হয়েছে।

### ব্যবহার
`toString()` মেথডটি তখন ব্যবহার করা হয় যখন কোনো সংখ্যাকে স্ট্রিং আকারে বা বিভিন্ন বেস অনুযায়ী প্রদর্শন প্রয়োজন হয়। এটি বিশেষত তখন সহায়ক, যখন বাইনারি, অক্টাল, বা হেক্সাডেসিমাল ফর্ম্যাটে সংখ্যা দেখানো দরকার। */

// ****************************************
// 8. parseInt()
// *****************************************

/* `parseInt()` একটি জাভাস্ক্রিপ্ট ফাংশন, যা একটি স্ট্রিং থেকে পূর্ণসংখ্যা বা ইন্টিজার এক্সট্র্যাক্ট করতে ব্যবহৃত হয়। এটি স্ট্রিং-এর শুরু থেকে সংখ্যাগুলি নিয়ে পূর্ণসংখ্যা হিসাবে রূপান্তর করে, এবং স্ট্রিং-এ সংখ্যা ছাড়া অন্য কিছু থাকলে তা বাদ দেয়।

### সিনট্যাক্স
```javascript
parseInt(string, radix)
```

এখানে:
- **`string`**: সেই স্ট্রিং যা থেকে সংখ্যা বের করা হবে।
- **`radix`** (ঐচ্ছিক): এটি বেস নির্দেশ করে, অর্থাৎ সংখ্যাটি কী বেসে আছে (যেমন, দশমিকের জন্য ১০, বাইনারির জন্য ২, হেক্সাডেসিমালের জন্য ১৬)। ডিফল্ট মান `10`।

### উদাহরণ এবং ব্যাখ্যা

1. **স্ট্রিং থেকে পূর্ণসংখ্যা বের করা**:
   ```javascript
   console.log(parseInt("123"));  // আউটপুট: 123
   ```
   এখানে `"123"` স্ট্রিংটি `parseInt()` ফাংশনের মাধ্যমে পূর্ণসংখ্যা `123`-এ রূপান্তরিত হয়েছে।

2. **স্ট্রিং-এর মধ্যে সংখ্যা ও অক্ষর থাকলে**:
   ```javascript
   console.log(parseInt("123abc"));  // আউটপুট: 123
   ```
   এখানে শুধুমাত্র প্রথম অংশের সংখ্যাগুলি পূর্ণসংখ্যা হিসেবে নেওয়া হয়েছে, এবং বাকি অক্ষরগুলি উপেক্ষা করা হয়েছে।

3. **স্ট্রিং-এর শুরুতে অক্ষর থাকলে**:
   ```javascript
   console.log(parseInt("abc123"));  // আউটপুট: NaN
   ```
   এখানে `NaN` (Not-a-Number) আউটপুট হয়েছে কারণ স্ট্রিংটির প্রথম অংশে সংখ্যা নেই।

4. **বেস (radix) ব্যবহার করে সংখ্যা বের করা**:
   ```javascript
   console.log(parseInt("1010", 2));   // আউটপুট: 10 (বাইনারি থেকে দশমিকে)
   console.log(parseInt("FF", 16));    // আউটপুট: 255 (হেক্সাডেসিমাল থেকে দশমিকে)
   ```
   এখানে, বাইনারি সংখ্যা `"1010"` কে বেস `2` ব্যবহার করে `10`-এ রূপান্তরিত করা হয়েছে এবং হেক্সাডেসিমাল `"FF"` কে `16` বেস ব্যবহার করে `255`-এ রূপান্তরিত করা হয়েছে।

5. **ডিফল্ট বেস ব্যবহার**:
   ```javascript
   console.log(parseInt("075"));  // আউটপুট: 75 (ডিফল্ট বেস 10)
   ```

### কিছু গুরুত্বপূর্ণ বিষয়
- `parseInt()` ফাংশন স্ট্রিং-এর প্রথম অংশ থেকে যতটুকু সম্ভব সংখ্যা নিয়ে পূর্ণসংখ্যা হিসেবে রূপান্তরিত করে।
- যদি প্রথম অংশে কোনো সংখ্যা না থাকে, তাহলে এটি `NaN` রিটার্ন করে।
- `parseInt()` দশমিক সংখ্যা (ফ্লোট) থেকে শুধুমাত্র পূর্ণসংখ্যা অংশ নেয়:
  ```javascript
  console.log(parseInt("45.67"));  // আউটপুট: 45
  ```

### ব্যবহার
`parseInt()` তখন ব্যবহৃত হয় যখন স্ট্রিং-এর মধ্যে থেকে সংখ্যা বের করে সেটিকে পূর্ণসংখ্যা হিসেবে দরকার হয়। এটি বেস পরিবর্তন করেও ব্যবহার করা যায়, যেমন হেক্সাডেসিমাল বা বাইনারি থেকে দশমিক কনভার্ট করতে। */

// ****************************************
// 9. parseFloat()
// *****************************************

/* `parseFloat()` একটি জাভাস্ক্রিপ্ট ফাংশন যা একটি স্ট্রিং থেকে দশমিক সংখ্যা (ফ্লোট) এক্সট্র্যাক্ট করতে ব্যবহৃত হয়। এটি স্ট্রিং-এর শুরু থেকে যতটুকু সম্ভব দশমিক সংখ্যা নিয়ে ফ্লোট মানে রূপান্তর করে। 

### সিনট্যাক্স
```javascript
parseFloat(string)
```

এখানে:
- **`string`**: সেই স্ট্রিং যা থেকে দশমিক সংখ্যা বের করা হবে।

### উদাহরণ এবং ব্যাখ্যা

1. **স্ট্রিং থেকে দশমিক সংখ্যা বের করা**:
   ```javascript
   console.log(parseFloat("123.45"));  // আউটপুট: 123.45
   ```
   এখানে `"123.45"` স্ট্রিংটি `parseFloat()` ফাংশনের মাধ্যমে দশমিক সংখ্যা `123.45`-এ রূপান্তরিত হয়েছে।

2. **স্ট্রিং-এর মধ্যে সংখ্যা ও অক্ষর থাকলে**:
   ```javascript
   console.log(parseFloat("123.45abc"));  // আউটপুট: 123.45
   ```
   এখানে শুধুমাত্র প্রথম অংশের দশমিক সংখ্যা নেওয়া হয়েছে, এবং বাকি অক্ষরগুলি উপেক্ষা করা হয়েছে।

3. **স্ট্রিং-এর শুরুতে অক্ষর থাকলে**:
   ```javascript
   console.log(parseFloat("abc123.45"));  // আউটপুট: NaN
   ```
   এখানে `NaN` (Not-a-Number) আউটপুট হয়েছে কারণ স্ট্রিংটির প্রথম অংশে সংখ্যা নেই।

4. **পূর্ণসংখ্যা স্ট্রিং থেকে দশমিক সংখ্যা নেওয়া**:
   ```javascript
   console.log(parseFloat("456"));  // আউটপুট: 456
   ```
   যদি স্ট্রিং-এর মধ্যে কোনো দশমিক বিন্দু না থাকে, তাহলে `parseFloat()` শুধুমাত্র পূর্ণসংখ্যা নেয় কিন্তু এটিকে ফ্লোট হিসেবেই রিটার্ন করে।

5. **বিজ্ঞানসম্মত সংখ্যা ফরম্যাট**:
   ```javascript
   console.log(parseFloat("3.14e2"));  // আউটপুট: 314
   ```
   বিজ্ঞানসম্মত নোটেশন (`e` ফরম্যাট) সমর্থন করে, তাই `"3.14e2"`-কে `314`-এ রূপান্তরিত করা হয়েছে।

### কিছু গুরুত্বপূর্ণ বিষয়
- `parseFloat()` স্ট্রিং-এর প্রথম অংশ থেকে যতটুকু সম্ভব দশমিক সংখ্যা নিয়ে ফ্লোট হিসেবে রূপান্তরিত করে।
- যদি প্রথম অংশে কোনো সংখ্যা না থাকে, তাহলে এটি `NaN` রিটার্ন করে।
- `parseFloat()` পূর্ণসংখ্যার ক্ষেত্রেও কাজ করে, এবং ডিফল্টভাবে পূর্ণসংখ্যা নিলে সেটি দশমিক সংখ্যার মতো করে ধরে নেয়।

### ব্যবহার
`parseFloat()` ব্যবহৃত হয় যখন স্ট্রিং থেকে একটি ফ্লোট বা দশমিক সংখ্যা বের করে নিতে হয়। এটি সংখ্যার প্রথম অংশে দশমিক বিন্দু থাকা বা না থাকা দুই অবস্থাতেই কাজ করে, তাই ফ্লোট সংখ্যা এক্সট্র্যাক্ট করার ক্ষেত্রে এটি উপযোগী। */