# Puppybook: A Fellow-led Review

This repo finishes Puppybook, including a lot of code that we didn't get to in our live session.

Specifically, please note:

* The finished router in index.js
* The new ```GET_A_PUPPY``` case in the reducer
* Lines 46-48 of server.js. The server now sends index.html for any routes that don't match (i.e. requests for ```localhost:3000/1```)
* The Link in AllPuppies, with an onClick that adds the chosen puppy to the redux store
* The componentDidMount in the SinglePuppy component, which now checks to see whether there is a chosenPuppy set in the store before getting a puppy

## Additional Prep

We encourage you to do the Puppybook workshop without referencing this solution. Outside of that, additional things you could do to prepare for the upcoming checkpoint:

* Take a look at the **seed.js** file left in the root directory of this repo. It's the reference seed file Karen sent you earlier today. Try rewriting your Puppybook backend to match the seed file, then wiring the front-end to work with that instead.

* This solution makes extensive use of the react-redux library. **How could we do this without it?** Put yourself through this exercise to test your understanding of redux.

Delivered with <3 to 1706-FSA-NY by [Natasha Desai](https://github.com/tashadesai/), [Gabriel Rowe](https://github.com/gabrielwr), [Emily Tseng](https://github.com/emtseng) and [Ben McCain](https://github.com/benjmac) @ [Fullstack Academy](https://github.com/FullstackAcademy/).
