# Overview

This repo is an draft of an quiz create with react and next.js.
This project is a proposal for the learn section of the nodejs website

## Design

You can found the [Figma design](https://www.figma.com/file/jRMFKZBuEJ5yqzun2WfFT0/learn?node-id=0%3A1&t=Aq1WgSPcR19HjCoI-1).

### icons

Icons from Figma.

## Test of quiz with next.js

This section is a test of quiz with [next.js](https://nextjs.org)

### local development

```bash
npm install
npm run dev
```

## TODO

* [ ] Add a "How to use" section

* [X] Finish the Figma design
* [X] Put the design from Figma in the project
* [ ] Put the correct color from Figma in the project

* [X] Setup next.js
* [X] Create a home page
* [X] Create a quiz component
* [X] Implement the multiple choice question
* [X] Add TSX type bool question
* [X] Add unselect answer
* [X] System to block the user to click on question when the quiz's answers are submitted.

* [X] Implement the bool type question
* [ ] Store the data in local storage
* [ ] Add I18n
  * [ ] Next.js i18n
  * [ ] Lang switcher
  * [ ] Introduce React-intl

* [X] Install ESlint
* [X] Format the code
* [ ] Test the project

## Thinks to consider

* "What is the goal of the quiz"

> The objective is to do a test that allows you to know if you have understood the document you have just read.

* "Where will the data be send"

> It's will be store on local storage and don't send to any server

## Inspiration

* [next learn](https://nextjs.org/learn/basics/create-nextjs-app/setup)


## Refractoring

Goal:

```jsx
<Quiz>
{
  [{
    type: "multiple",
    question : "What is node.js?",
    answers : [
        "A server side javascript runtime",
        "A javascript framework",
        "A tools for building javascript applications",
    ],
    correctAnswer: "A server side javascript runtime"
  },
  {
    type: "boolean",
    question : "Is nodejs a server side javascript runtime?",
    correctAnswer: true
  }]
}
</Quiz>
```
