# 🔢 Number Facts App

A fun and interactive app that fetches interesting facts about numbers using the Numbers API.

**🎥 Original Tutorial Video:**  
https://youtu.be/s3LFCErzmHI?si=RRBRKktkjKO3I1Dj

---

## 🌐For Live Demo  click given link 👇 
https://sawera-kiran.github.io/FrontendPracticePack/Numbers-Facts/

---

## 🌟 Features

### ✅ From the tutorial:
- Fetches and displays facts for any number entered via the Numbers API.

### 🚀 Enhancements I Added:
1. **Input validation** — entering blank space or non-number shows inline error "Not a number".  
2. **Error display** appears where facts show, and hides automatically after we reload or enter valid number.  
3. **Documentation file** i research and understand all the properties, methods and attributes used in the original tutorial
Create thorough documentation explaining how each part of the code works you can access the file in this project folder along other files

---

## 🧠 How It Works

1. User types a number into the input field.
2. On input or button click (whichever triggered search), validation checks:
   - If invalid (empty/whitespace/non-number), displays “Not a number”.
3. Valid entries trigger a fetch to Numbers API.
4. The returned fact is displayed below the input in the fact container.

---

## 🛠 Tech Stack

- HTML5  
- CSS3 (Flexbox & layout)  
- JavaScript (ES6+, Fetch API, DOM manipulation)  
- Numbers API: `http://numbersapi.com/`

---

## ⚙️ Run Locally

```bash
git clone https://github.com/sawera-kiran/FrontendPracticePack.git
cd FrontendPracticePack/Numbers-Facts/
open index.html
