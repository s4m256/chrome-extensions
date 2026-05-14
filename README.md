# MathShield

MathShield is a Chrome extension that fixes broken math when translating webpages.

## The problem

When using tools like Google Translate on pages with MathJax, formulas often break.

Example:  
https://pho.rs/p/4191

After translation:
- units get mistranslated 
- symbols get corrupted 
- formulas overlap or duplicate
- spacing disappears, making expressions unreadable

Result: the problem becomes unusable.

---

## The solution

MathShield fixes this by:

- Protecting rendered math from translation  
- Translating only human-readable text inside LaTeX  
- Converting units correctly using prefix + base logic   
- Re-rendering MathJax safely after modifications  

---

## Features

- Works automatically on any site using MathJax  
- Handles Cyrillic units and text  
- Prevents layout break and overlapping formulas  
- No setup required after installation  

---

## Installation

1. Download or clone this repository  
2. Open Chrome and go to: chrome://extensions/
3. Enable **Developer mode**  
4. Click **Load unpacked**  
5. Select the project folder  

---

## Usage

1. Open a page with math (e.g. the example above)  
2. Use browser translation  
3. MathShield automatically fixes the formulas  

---

## AI Usage

Artificial intelligence tools were used during development for:
- Debugging and troubleshooting parts of the extension
- Brainstorming implementation ideas
- Generating the project logo

All core functionality, design decisions, and final implementation were reviewed and integrated manually.

---

## Status

Core functionality is complete.  
Tested on physics/math problem pages with heavy LaTeX usage.

---

## Notes

- Some translation issues (like visually similar letters) come from Google Translate itself and cannot be fully fixed externally  
- Future improvements may include support for MathJax v3  
