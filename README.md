# react-native-fast-image

> 🚩 FastImage, performant React Native image component.

---

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Repository Structure](#repository-structure)
4. [Key Components](#key-components)
5. [Setup & Installation](#setup--installation)
6. [Running the Application](#running-the-application)
7. [Infrastructure & CI/CD](#infrastructure--cicd)
8. [Contributing](#contributing)

---

## Overview

**react-native-fast-image** is part of the [Unacademy](https://github.com/unacademy) engineering ecosystem.

🚩 FastImage, performant React Native image component.

**Topics / Tags:** `approvers-1`

---

## Tech Stack

| Attribute | Value |
|-----------|-------|
| **Primary Language** | JavaScript |
| **Framework / Platform** | JavaScript |
| **Package Manager** | npm / yarn |

### Dependencies

**Dev Dependencies:**
- `@babel/core`
- `@semantic-release/changelog`
- `@semantic-release/commit-analyzer`
- `@semantic-release/git`
- `@semantic-release/npm`
- `@semantic-release/release-notes-generator`
- `babel-eslint`
- `babel-jest`
- `commitizen`
- `cz-conventional-changelog`


---

## Repository Structure

```
react-native-fast-image/
├── .babelrc
├── .circleci
├── .eslintrc.js
├── .github
├── .gitignore
├── .npmignore
├── .prettierignore
├── CHANGELOG.md
├── LICENSE
├── README.md
├── RNFastImage.podspec
├── ReactNativeFastImageExample/
│   ├── .buckconfig
│   ├── .eslintrc.js
│   ├── .flowconfig
│   ├── .gitattributes
│   ├── .gitignore
├── ReactNativeFastImageExampleServer/
│   ├── index.js
│   ├── package.json
│   ├── pictures
│   ├── yarn.lock
├── android/
│   ├── build.gradle
│   ├── src
├── babel.config.js
├── docs/
│   ├── app-glide-module.md
│   ├── assets
│   ├── development.md
│   ├── how-is-caching-handled.md
│   ├── troubleshooting.md
├── ios/
│   ├── FastImage
│   ├── FastImage.xcodeproj
... (truncated)
```

---

## Key Components

Below is an analysis of the key files and modules:

| File / Directory | Purpose |
|-----------------|---------|
| `CHANGELOG.md` | Source file |
| `LICENSE` | Source file |
| `README.md` | Source file |
| `RNFastImage.podspec` | Source file |
| `ReactNativeFastImageExample/.buckconfig` | Source file |
| `ReactNativeFastImageExample/.eslintrc.js` | Source file |
| `ReactNativeFastImageExample/.flowconfig` | Source file |
| `ReactNativeFastImageExample/.gitattributes` | Source file |
| `ReactNativeFastImageExample/.gitignore` | Source file |
| `ReactNativeFastImageExample/.watchmanconfig` | Source file |
| `ReactNativeFastImageExample/__tests__/App-test.js` | Source file |
| `ReactNativeFastImageExample/android/app/BUCK` | Source file |
| `ReactNativeFastImageExample/android/app/build.gradle` | Source file |

> **Note:** Only the first 20 non-trivial files are listed. See the repository tree above for the complete structure.

---

## Setup & Installation

### Prerequisites

- Git (`git --version`)
- JavaScript runtime installed



### Steps

```bash
# 1. Clone the repository
git clone git@github.com:unacademy/react-native-fast-image.git
cd react-native-fast-image

# 2. Install dependencies
npm install      # or yarn install
```

### Available Scripts

```bash
# build
npm run build   # exit 0

# commit
npm run commit   # git-cz

# format
npm run format   # yarn prettier --write

# lint
npm run lint   # eslint src/**/*.js

# prettier
npm run prettier   # prettier './**/*.{js,d.ts,js.flow,yml}'

# semantic-release
npm run semantic-release   # semantic-release

# test
npm run test   # jest ./src/*.js

```


---

## Running the Application

_Refer to the project's build system or CI configuration._

---

## Infrastructure & CI/CD

- Test suite present — run tests before submitting PRs

---

## Contributing

1. Create a feature branch: `git checkout -b feat/your-feature`
2. Commit your changes: `git commit -m "feat: describe your change"`
3. Push and open a PR targeting `master`
4. Ensure all CI checks pass before requesting review

---

## Original README (Excerpt)

> <h1 align="center">
  🚩 FastImage
</h1>

<div align="center">

Performant React Native image component.

[![Version][version-badge]][package]
[![Downloads][downloads-badge]][npmtrends]
[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

</div>

<p align="center" >
  <kbd>
    <img src="https://github.com/DylanVann/react-native-fast-image/raw/master/docs/assets/scroll.gif" title="Scroll Demo" float="left">
  </kbd>
  <kbd>

---

*This README was auto-generated on 2026-09-14 by the Unacademy repo-summarizer tool.*
*For corrections or additions, edit this file directly or open an issue.*
