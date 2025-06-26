
# ⚙️ JavaScript (Node.js) Setup with `dotenv`

## 📦 Install dotenv Package

To manage environment variables securely, install the `dotenv` package:

```bash
npm install dotenv
```

## 🛠️ Usage in Main Server File (e.g., `index.js`)

```js
require('dotenv').config(); // Load environment variables

console.log(process.env); // ✅ Only for testing — remove later!

const apiKey = process.env.OPENROUTER_API_KEY;
console.log(apiKey); // Check if it's working
```

---

## 🌐 Types of Hosting

1. **Shared Hosting**
2. **Dedicated Hosting**
3. **Managed Hosting**

---

## 🐧 Linux Tutorial

Watch this helpful tutorial to get started with Linux:
[Linux Tutorial (YouTube)](https://www.youtube.com/watch?v=_tCY-c-sPZc)

