// Js Condition and lOgices

// ********************************
// 1. If Condition system
// *********************************

/* JavaScript-এ **if condition** ব্যবহার করে আমরা কোনো নির্দিষ্ট শর্ত পূরণ হলে কিছু কোড চালাতে পারি। এটি একটি শর্তনির্ভর কন্ডিশনাল স্টেটমেন্ট, যা সত্য (true) হলে একটি নির্দিষ্ট ব্লক চালায় এবং মিথ্যা (false) হলে সেটি বাদ দিয়ে যায়।

### if statement এর গঠন:

```javascript
if (condition) {
    // শর্ত সত্য হলে এখানে যে কোডটি থাকবে তা চালানো হবে
}
```

### উদাহরণ:
```javascript
let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote.");
}
```

এখানে `age >= 18` শর্তটি পরীক্ষা করা হচ্ছে। যদি এটি সত্য হয়, তাহলে "You are eligible to vote." কনসোলে প্রিন্ট হবে। যদি `age` এর মান ১৮ এর চেয়ে কম হয়, তাহলে কিছুই প্রিন্ট হবে না।

### else if এবং else যুক্ত করা:
আপনার যদি একাধিক শর্ত পরীক্ষা করতে হয়, তবে `else if` এবং `else` যুক্ত করতে পারেন:

```javascript
let marks = 85;

if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else {
    console.log("Grade: F");
}
```

এখানে প্রথম শর্তটি সত্য না হলে, পরবর্তী শর্তগুলো পরীক্ষা করা হবে যতক্ষণ না সত্য শর্ত পাওয়া যায়। যদি কোনোটাই সত্য না হয়, তবে `else` ব্লক চালানো হবে।

### সংক্ষেপে:
- **if**: শুধুমাত্র শর্ত সত্য হলে কোড ব্লক চালায়।
- **else if**: আগের শর্তগুলি মিথ্যা হলে নতুন শর্ত পরীক্ষা করে।
- **else**: সব শর্ত মিথ্যা হলে এটি চালানো হয়।

**if condition** আমাদের প্রোগ্রামে সিদ্ধান্ত গ্রহণ সহজ করে, যা কন্ডিশনাল লজিক যুক্ত করার জন্য খুবই গুরুত্বপূর্ণ। */

// ********************************
// 2. Else condition system
// *********************************

/* **Else condition** JavaScript-এ **if** ব্লকের পর ব্যবহার করা হয়, যখন সব পূর্বের শর্ত মিথ্যা হয়। এটি একটি ডিফল্ট ব্লকের মতো কাজ করে, যা তখনই কার্যকর হয় যখন অন্যান্য সব শর্ত মিথ্যা হয়। **else** শর্তের কোনো নির্দিষ্ট শর্ত নেই—এটি একপ্রকার "catch-all" হিসেবে কাজ করে।

### গঠন:
```javascript
if (condition) {
    // শর্তটি সত্য হলে এই ব্লক চালানো হবে
} else {
    // অন্যথায়, এই ব্লকটি চালানো হবে
}
```

### উদাহরণ:
```javascript
let temperature = 30;

if (temperature > 35) {
    console.log("It's a hot day.");
} else {
    console.log("It's not a hot day.");
}
```

এখানে যদি `temperature` ৩৫ এর বেশি হয়, তাহলে "It's a hot day." প্রিন্ট হবে। কিন্তু যদি `temperature` ৩৫ বা তার কম হয়, তাহলে **else** ব্লকটি চালু হবে এবং "It's not a hot day." প্রিন্ট হবে।

### else if এর সাথে else ব্যবহার:
**else if** ব্লকের পর **else** ব্লক ব্যবহার করে আমরা বিভিন্ন পরিস্থিতির জন্য কোড ব্লক চালাতে পারি।

```javascript
let score = 65;

if (score >= 90) {
    console.log("Grade: A+");
} else if (score >= 80) {
    console.log("Grade: A");
} else if (score >= 70) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}
```

এখানে, যদি `score` ৯০ বা তার বেশি হয়, তবে প্রথম **if** ব্লক চালানো হবে। যদি তা না হয় এবং **else if** শর্ত মিলে যায়, তবে সেই ব্লক চালানো হবে। সবশেষে, যদি কোন শর্তই সত্য না হয়, তবে **else** ব্লকটি চালানো হবে।

### সংক্ষেপে:
- **else** ব্লক এমন কোড চালায় যা পূর্বের সব শর্ত মিথ্যা হলে কার্যকর হয়।
- এটি একটি "default" অপশন হিসেবে কাজ করে। */

// ********************************
// 3. Else condition system
// *********************************

/* **Else if condition** JavaScript-এ একটি **if** ব্লকের সাথে অতিরিক্ত শর্ত যোগ করতে ব্যবহৃত হয়। যখন মূল **if** শর্তটি মিথ্যা হয়, তখন **else if** দিয়ে আরও শর্ত পরীক্ষা করা যায়।

### গঠন:
```javascript
if (condition1) {
    // condition1 সত্য হলে এই ব্লক চালানো হবে
} else if (condition2) {
    // condition1 মিথ্যা এবং condition2 সত্য হলে এই ব্লক চালানো হবে
} else {
    // সব শর্ত মিথ্যা হলে এই ব্লক চালানো হবে
}
```

### উদাহরণ:
```javascript
let score = 75;

if (score >= 90) {
    console.log("Grade: A+");
} else if (score >= 80) {
    console.log("Grade: A");
} else if (score >= 70) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}
```

এই কোডে, **score** ৭০ বা তার বেশি হলে "Grade: B" প্রিন্ট হবে। যদি **score** ৮০ বা তার বেশি হতো, তাহলে "Grade: A" প্রিন্ট হতো, এবং যদি **score** ৯০ বা তার বেশি হতো, তাহলে "Grade: A+" প্রিন্ট হতো। সবশেষে, যদি **score** কোনো শর্তেই না মিলে, তাহলে **else** ব্লকটি চালু হয়ে "Grade: C" প্রিন্ট হবে।

### মূল পয়েন্ট:
- **else if** বিভিন্ন শর্ত চেক করার জন্য **if** ব্লকের সাথে যুক্ত করা হয়।
- প্রথম **if** এবং পরবর্তী **else if** শর্তগুলির মধ্যে একটিমাত্র ব্লক চালু হয়, যা প্রথম সত্য শর্তে পৌঁছায়। */

// ********************************
// 4. Switch statement system
// *********************************

/* JavaScript-এ **switch** স্টেটমেন্টটি অনেকগুলো **if-else if** শর্তের বিকল্প হিসাবে ব্যবহৃত হয়। যখন একটি ভ্যালুর ওপর ভিত্তি করে একাধিক পরিস্থিতি পরীক্ষা করতে হয়, তখন **switch** স্টেটমেন্ট ব্যবহার করে কোডটি পড়া ও রক্ষণাবেক্ষণ করা সহজ হয়।

### গঠন:
```javascript
switch(expression) {
    case value1:
        // expression এর মান value1 হলে এই কোড ব্লক চালানো হবে
        break;
    case value2:
        // expression এর মান value2 হলে এই কোড ব্লক চালানো হবে
        break;
    default:
        // কোন কেস মেলেনি, তাই এই কোড ব্লক চালানো হবে
}
```

- **expression** হলো সেই ভ্যারিয়েবল বা মান যা বিভিন্ন কেসের সাথে মিলিয়ে পরীক্ষা করা হবে।
- প্রতিটি **case**-এর শেষে **break** ব্যবহার করা হয় যাতে মিল পাওয়া মাত্র **switch** স্টেটমেন্ট থেকে বেরিয়ে আসা যায়।
- **default** ব্লকটি ঐচ্ছিক; কোনো **case**-এর মান না মিললে **default** কোড ব্লকটি চালু হয়।

### উদাহরণ:
```javascript
let day = 3;

switch(day) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day number");
}
```

এখানে, **day** ভ্যারিয়েবলটি ৩ এর সমান, তাই **case 3** মিলবে এবং "Today is Wednesday" প্রিন্ট হবে।

### মূল পয়েন্ট:
- **switch** স্টেটমেন্টের মাধ্যমে একটি এক্সপ্রেশন বা ভ্যারিয়েবলের মান বিভিন্ন **case** এর সাথে মেলানো হয়।
- **break** স্টেটমেন্টটি প্রতিটি **case** ব্লকের শেষে রাখা হয়, না রাখলে পরবর্তী **case** গুলোর কোডও চালানো হয়।
- **default** ব্লক কোনো মিল না পেলে চালানো হয়, এটি ঐচ্ছিক হলেও প্রায়শই এটি ব্যবহার করা হয়। */


let fruit = "Mango";

switch (fruit) {
    case "Apple":
        console.log("The price of Apple is $2 per kg");
        break;
    case "Banana":
        console.log("The price of Banana is $1 per kg");
        break;
    case "Mango":
        console.log("The price of Mango is $3 per kg");
        break;
    case "Orange":
        console.log("The price of Orange is $2.5 per kg");
        break;
    default:
        console.log("Sorry, we don't have that fruit available.");
}


