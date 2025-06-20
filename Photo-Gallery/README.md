📸 Photo Gallery App

An interactive photo gallery built using the Pexels API for curated and search-based images.

🎥 Original Tutorial Video:**  
https://youtu.be/gGBpmzLN1Hw?si=2oCcoBj_O4ashQCQ

For Live Demo click given link 👇 
  
https://sawera-kiran.github.io/FrontendPracticePack/Photo-Gallery/




🌟 Features

✅ From the tutorial:
- Fetches and displays curated photos.  
- Allows searching for images using the Pexels API.  
- Includes a Load More button to fetch additional results.

🚀 Enhancements I Added:
1. **Clickable search icon** — initiates search both by clicking the icon and pressing Enter.  
2. **Empty input validation** — if only whitespace is entered:
   - The input shakes.
   - Displays error message “Please enter a valid item” briefly.
3. **Loading text during search** — displays “Loading...” in place of images while fetching data.  
4. **Loading indicator on “Load More”** — shows loading text below the button until new images load.  
5. **Styled logo** — Gallery logo has split colors for visual appeal.  
6. **Clickable logo** — clicking the logo resets to curated images and clears search state.  
7. **Documentation included** — researched and documented all CSS, JS properties/attributes, and API usage in a separate file.

---

## 🧠 How It Works

**Search Flow:**
1. Enter a keyword and either press Enter or click the search icon.  
2. For empty/whitespace input, the input shakes and an error message appears briefly.  
3. On valid input, “Loading...” text appears in the gallery area while fetching data.  
4. Images load, and **Load More** fetches the next page with its own loading indicator.

**Logo Interaction:**
- Clicking the gallery logo resets the gallery to curated images and clears search results.

---

## 🛠 Tech Stack

- HTML5  
- CSS3 (Grid, Flexbox, transitions)  
- JavaScript (Fetch API, DOM manipulation, ES6+)  
- Pexels API

---

## ⚙️ Run Locally

```bash
git clone https://github.com/sawera-kiran/FrontendPracticePack.git
cd FrontendPracticePack/Photo-Gallery/
open index.html
