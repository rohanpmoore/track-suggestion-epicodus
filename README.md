# _Track Selector_

#### _Suggesting tracks to Epicodus students, 10.19.2018_

#### By **_Rohan Moore_**

## Description

_This program is a short quiz to help prospective Epicodus students decide which track is right for them.  It asks the user questions about their preferences and what they wish to do in the future and suggests a track based on their answers._

## Setup/Installation Instructions

1. _Clone this project from its [Github repository](https://github.com/rohanpmoore/track-suggestion-epicodus)._
2. _Run index.html, which will bring you to the portfolio home page._

_Alternatively, you can visit the GH-Pages version of the website [here](https://rohanpmoore.github.io/track-suggestion-epicodus/)._

## Known Bugs

* _No bugs currently known._

## Modding Details

* Be mindful around adding negative questions: if all final values are at or below zero the "no result" outcome will be given.  Adding negative questions without also adding positive ones increases the likelihood of an unwanted no result.
* Changing the questions or answers in html requires no additional changes to the code.
* Changing the number of either type of question requires you to enter the scrips.js file in the js directory and edit the appropriate value (either const positiveQuestionNumber or const negativeQuestionNumber).
* Changing option names is done by changing the id of the div the option is contained in as well as changing the name in const options in the scripts.js file.
* The value of an option's answers _must_ correspond with its position in the const options array in scripts.js.  If you wish to add or remove options, you must make sure that you adjust the values in the answers accordingly, and ensure that all results that lead to a "no result" outcome have the highest value.  const optionNumber must also be updated to account for additions or removals.

## Support and Contact Details

_If you discover a bug or want to make a suggestion or comment, send me an email at rohanpmoore@gmail.com or file an issue on Github._

## Technologies Used

_This portfolio uses CSS, HTML, and Javascript._

### License

Copyright (c) 2018 **_Rohan Moore_**

This software is licensed under the MIT license.
