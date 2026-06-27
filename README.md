# 📦 Dynamic User Greeting Application

An optimized, clean, and interactive JavaScript implementation that takes real-time user inputs to generate custom, case-insensitive time-of-day greetings.

---

## 🚀 Project Overview

This repository showcases a highly efficient approach to string formatting and runtime input manipulation in vanilla JavaScript. By combining clean conditional logic with native browser API dialogs (`prompt`, `alert`), the application provides a seamless, framework-free interactive user experience.

## ✨ Key Features & Code Optimizations

* **Case-Insensitive Normalization:** Utilizes `.toLowerCase()` to ensure strings like `"Morning"`, `"MORNING"`, or `"morning"` resolve uniformly, eliminating validation failures.
* **Optimized Execution & Low Memory Overhead:** Structural flat scopes replace deeply nested helper functions, minimizing call-stack overhead and maximizing lookup speeds.
* **DRY Architecture (Don't Repeat Yourself):** Consolidates code paths down to a single template literal return statement, avoiding repetitive output commands.
* **Functional Separation:** Logic processes data via pure returns, while side effects (`console.log`, `alert`) are handled externally at the application layer.

---
