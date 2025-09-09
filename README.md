var হলো function scoped এবং hoisted হয়, একই scope এ আবার declare করা যায়। let হলো block scoped, একই scope এ পুনরায় declare করা যায় না কিন্তু value পরিবর্তন করা যায়। const ও block scoped, তবে এটি declare করার সময়ই value দিতে হয় এবং পরে পরিবর্তন করা যায় না।

map() একটি নতুন array রিটার্ন করে এবং প্রতিটি element কে transform করতে ব্যবহৃত হয়। forEach() শুধু array এর প্রতিটি element এর উপর কাজ চালায় কিন্তু কিছু রিটার্ন করে না। filter() একটি নতুন array রিটার্ন করে যেখানে শুধু শর্ত পূরণ করা elements গুলো থাকে।


Arrow function হলো ES6 এর সংক্ষিপ্ত syntax দিয়ে function লেখার পদ্ধতি। এটি this keyword bind করে না, তাই callback বা nested function এর ভেতরে বেশি ব্যবহার হয়। যেমন:

const add = (a, b) => a + b;

estructuring assignment ব্যবহার করে সহজে array বা object থেকে value আলাদা variable এ রাখা যায়। যেমন:

const [a, b] = [1, 2];  
const {name, age} = person;  


এতে কোড ছোট ও পড়তে সহজ হয়।

Template literals backtick (`) ব্যবহার করে লেখা হয়। এর মধ্যে ${variable} দিয়ে ডাইনামিক ভ্যালু বসানো যায় এবং multi-line string লিখতেও সুবিধা হয়। যেমন:

const name = "Alex";
console.log(`Hello, ${name}!`);


এটি string concatenation ("Hello, " + name) এর তুলনায় অনেক সহজ ও পরিষ্কার।
