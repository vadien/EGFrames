# EG Frames (eCommerce demo project)

(Not currently deployed)

---

## Info

An eCommerce project to build familiarity with ReactJS and Google's Firestore NoSQL database. Takes design inspiration from [EB Games](www.ebgames.com.au).

---

## Build Steps

- Clone the repository
- Run `npm install` inside the relevant directory, then `npm run dev` to run in watch mode

---

## Goals

- To utilise Firestore as a backend and begin to understand the system.
- To structure a React project from scratch using good design patterns and clean coding practices.
- To implement challenging new features like a persistent cart, page routing, and an image carousel.

---

## Features

- Image carousel
- Page routing

---

## Known issues

- Design issues persist
- Cart functionality is not yet complete, therefore temporarily disabled

---

## Future Goals

- Fully implement persistent cart
- Checkout page
- Styling pass

---

## Challenges

- This project proved to be a significant challenge not because of any technical components, but as an issue of design and theming. The name (a pun on EB Games) ended up becoming the basis for the website design and product line, which proved cumbersome later when it came time to gather/create dummy product information and assets. I hope to reattempt this project at the first available opportunity using the further React skills I have since developed, but also a more generic theming which gives me more freedom with design elements and allows me to use helpful tools like [Mockey](https://mockey.ai/) to avoid wasting time gathering product information.

---

## Licensing Details

MIT License

Copyright (c) 2024 David Neill

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## Further details, related projects, reimplementations

- Is this project a reimplementation for something you've done in the past? if so explain it and link it here.
- If it's an API, is there a client app that works with this project? link it# EGFrames

# Due Date: 5th August

## A mock eShop in React, TypeScript and Firestore

#### MVP TODO:

- Firestore
  - Populate Firestore db with data
    - Picture URL(s)
- Pages
  - Splash page
  - Home page
    - Product carousel
    - Grid of product cards
  - Product page (per product, using id)
- Services
  - Get collection of products
- Components
  - Product card

#### BONUS TODO:

- Add to cart button on product page
- Implement stock/availability to products
- Cart page button accessible from any other page
- Cart page
  - Shows carted items with quantities
  - Shows total price of all items (delivery?)
  - Able to change quantity of cart items
  - Able to remove from cart
    - Quantity selector
- React Testing Library - 0/10 tests

## Palette

- Blue: rgb(8, 90, 192)
  - Blue hover: rgb(101, 165, 244)
- Shadow Blue: rgb(6, 74, 161)
- Red: rgb(244, 71, 75)

#### Attributions:

Uses [Phosphoricons](https://phosphoricons.com/)

- Photo by [Toa Heftiba](https://unsplash.com/@heftiba?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/rectangular-gray-wooden-photo-frame-beside-pink-flower-HBL6itmv2Zw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
  --- Photo by [Angèle Kamp](https://unsplash.com/@angelekamp?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/green-leafed-beside-white-photo-frame-bDuh4oK_MCU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [Minh Pham](https://unsplash.com/@minhphamdesign?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/white-and-brown-wooden-cabinet-Wn1gmozpNZc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [Vladimir Mokry](https://unsplash.com/@vmokry?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/white-and-brown-wooden-end-table-near-wall-inside-room-2dTeBxsF-Q0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [Kenny Eliason](https://unsplash.com/@neonbrand?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/couch-near-painting-Wp7t4cWN-68?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [Martin Péchy](https://unsplash.com/@martinpechy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/wall-mounted-helvetica-alphabet-poster-above-sofa-iXHdGk8JVYU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [Sven](https://unsplash.com/@shauste?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/rectangular-brown-framed-photo-frame-on-white-desk-3rX4x1oQtPc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [Dmitry Mashkin](https://unsplash.com/@artcoastdesign?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/white-wooden-framed-mirror-on-brown-wooden-table-hyGXlmNeK-I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [Kari Shea](https://unsplash.com/@karishea?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/a-living-room-with-a-couch-and-a-picture-on-the-wall-rZm5MghM1dQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [Kam Idris](https://unsplash.com/@ka_idris?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/brown-wooden-framed-yellow-padded-chair-_HqHX3LBN18?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
