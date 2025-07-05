# 📟 String Calculator – TDD with Jest

This project demonstrates a **String Calculator** built using **Test-Driven Development (TDD)** in **JavaScript**, and tested using **Jest**.

---

## 🧠 What is TDD?

**Test-Driven Development** is a software development practice where you write tests before writing the actual code. The cycle typically follows:

1. Write a small, failing test (Red).
2. Write just enough code to make the test pass (Green).
3. Refactor for clarity and simplicity while keeping tests green.
4. Repeat to gradually build complete functionality.

This method helps produce clean, modular, and well-tested code.

---

## ⚙️ Tech Stack

- **Language**: JavaScript (Node.js)
- **Test Framework**: Jest

---

## ✅ Implemented Test Cases

| #  | Description                                                                 | Input Example                       | Expected Output / Behavior                 | Status |
|----|-----------------------------------------------------------------------------|-------------------------------------|--------------------------------------------|--------|
| 1  | Return 0 for empty string                                                   | `""`                                | `0`                                        | ✅     |
| 2  | Return the number itself for single number input                            | `"1"`                               | `1`                                        | ✅     |
| 3  | Return sum of comma-separated numbers                                       | `"1,2,3"`                            | `6`                                        | ✅     |
| 4  | Return sum with newline and comma delimiters                                | `"1\n2,3"`                           | `6`                                        | ✅     |
| 5  | Support custom single-character delimiter                                   | `"//;\n1;2"`                         | `3`                                        | ✅     |
| 6  | Support custom delimiter of any length                                      | `"//****\n1****2"`                  | `3`                                        | ✅     |
| 7  | Support custom delimiter wrapped in brackets                                | `"//[%%]\n1%%2%%3"`                 | `6`                                        | ✅     |
| 8  | Support multiple single-character custom delimiters                         | `"//[*][%]\n1*2%3"`                 | `6`                                        | ✅     |
| 9  | Support multiple custom delimiters of any length                            | `"//[***][%%]\n1***2%%3"`          | `6`                                        | ✅     |
| 10 | Throw error on one or more negative numbers                                 | `"1,-2,3"`                          | Error: `negative numbers not allowed -2`   | ✅     |
| 11 | List all negative numbers in the exception                                  | `"1,-2,-3"`                         | Error: `negative numbers not allowed -2,-3`| ✅     |
| 12 | Ignore numbers greater than 1000                                            | `"2,1001"`                          | `2`                                        | ✅     |
| 13 | Track how many times `add()` was called                                     | Call `add()` twice                  | `getCalledCount() returns 2`              | ✅     |

---

## 📸 Sample Test Run Results

### 🧪 Initial Test Output
![image](https://github.com/user-attachments/assets/20f225ac-6351-4332-a8a4-bcfbc547910b)


### 🧪 Final Test Output (All Cases Passed)
![image](https://github.com/user-attachments/assets/e581c810-6364-4cdf-b760-b0bf5da8777e)

---

## 🚀 Getting Started

### 📂 Clone the Repository

```bash
git clone https://github.com/SmitHaraniya35/StringCalculator-TDD-Incubyte.git
cd StringCalculator-TDD-Incubyte
npm install jest --D
npm test
