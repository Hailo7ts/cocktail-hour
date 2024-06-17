# cocktail-hour
Find new cocktails by providing alcohol preference. Ingredients and instructions included.

**Link to project:** https://home-cocktail-hour.netlify.app/

![home-page](https://github.com/Hailo7ts/cocktail-hour/assets/101282320/9746ccd2-a313-4afc-8a68-5c82e4ef4be0)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, API

This website was built around the JSON returned by the API and what information was available for each cocktail. The documentation from (www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita) worked with the website so that users can look up any type of alcohol and be given a cocktail. If the returned JSON for this alcohol contained an array of drinks greater than 1 then the user can navigate through all the options! Additional information from the received data included: ingredients and instructions for users to make their perfect cocktail!

## Optimizations

This website initially started with five static cards for the drink information: drink name, instructions, and ingredients. This worked to an extent, however, it limited the amount of data the user would receive. Instead of getting the whole array of drinks based on their alcohol selection, they would only receive the first five drinks. Another problem caused by using this method is that if they looked up an alcohol with less than five drinks then the cards in the DOM would remain empty(other than titles).

The optimization for this problem was to use only one card with classes that would be used to loop through the drinks carousel based on the user's interaction of moving either left or right. Doing it this way meant that if there were more/or less than five drinks the design wouldn't have gaps and the user could access all the drinks.

## Lessons Learned:

Building this website added to my toolkit the understanding that code evolves and some projects will change. Initially, I was hesitant to use a card carousel for the drinks, but I knew that the feature of accessing all the drinks was important. At the end of this project, the data received worked more dynamically and delivered a more suitable user experience.
