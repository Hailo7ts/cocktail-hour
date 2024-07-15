/*
	Hyperspace by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$sidebar = $('#sidebar');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Hack: Enable IE flexbox workarounds.
		if (browser.name == 'ie')
			$body.addClass('is-ie');

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Forms.

		// Hack: Activate non-input submits.
			$('form').on('click', '.submit', function(event) {

				// Stop propagation, default.
					event.stopPropagation();
					event.preventDefault();

				// Submit form.
					$(this).parents('form').submit();

			});

	// Sidebar.
		if ($sidebar.length > 0) {

			var $sidebar_a = $sidebar.find('a');

			$sidebar_a
				.addClass('scrolly')
				.on('click', function() {

					var $this = $(this);

					// External link? Bail.
						if ($this.attr('href').charAt(0) != '#')
							return;

					// Deactivate all links.
						$sidebar_a.removeClass('active');

					// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
						$this
							.addClass('active')
							.addClass('active-locked');

				})
				.each(function() {

					var	$this = $(this),
						id = $this.attr('href'),
						$section = $(id);

					// No section for this link? Bail.
						if ($section.length < 1)
							return;

					// Scrollex.
						$section.scrollex({
							mode: 'middle',
							top: '-20vh',
							bottom: '-20vh',
							initialize: function() {

								// Deactivate section.
									$section.addClass('inactive');

							},
							enter: function() {

								// Activate section.
									$section.removeClass('inactive');

								// No locked links? Deactivate all links and activate this section's one.
									if ($sidebar_a.filter('.active-locked').length == 0) {

										$sidebar_a.removeClass('active');
										$this.addClass('active');

									}

								// Otherwise, if this section's link is the one that's locked, unlock it.
									else if ($this.hasClass('active-locked'))
										$this.removeClass('active-locked');

							}
						});

				});

		}

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() {

				// If <=large, >small, and sidebar is present, use its height as the offset.
					if (breakpoints.active('<=large')
					&&	!breakpoints.active('<=small')
					&&	$sidebar.length > 0)
						return $sidebar.height();

				return 0;

			}
		});

	// Spotlights.
		$('.spotlights > section')
			.scrollex({
				mode: 'middle',
				top: '-10vh',
				bottom: '-10vh',
				initialize: function() {

					// Deactivate section.
						$(this).addClass('inactive');

				},
				enter: function() {

					// Activate section.
						$(this).removeClass('inactive');

				}
			})
			.each(function() {

				var	$this = $(this),
					$image = $this.find('.image'),
					$img = $image.find('img'),
					x;

				// Assign image.
					$image.css('background-image', 'url(' + $img.attr('src') + ')');

				// Set background position.
					if (x = $img.data('position'))
						$image.css('background-position', x);

				// Hide <img>.
					$img.hide();

			});

	// Features.
		$('.features')
			.scrollex({
				mode: 'middle',
				top: '-20vh',
				bottom: '-20vh',
				initialize: function() {

					// Deactivate section.
						$(this).addClass('inactive');

				},
				enter: function() {

					// Activate section.
						$(this).removeClass('inactive');

				}
			});

})(jQuery);


/**
 * API for cocktails
*/

//event listeners for api fetch, left and right movers
document.querySelector('.goRight').addEventListener('click', goRight)
document.querySelector('.goLeft').addEventListener('click', goLeft)
document.querySelector('.get-drink').addEventListener('click', getDrink)



//initializing cocktial object
//setting user input, drink, to empty string on page load
let drink = ''
let cocktail = {}

class Cocktail{

	constructor(drinkName, drinkImage, drinkInstructions, index,
		drinkArray
		){
			this.drinkName = drinkName
			this.drinkImage = drinkImage
			this.drinkInstructions = drinkInstructions
			this.currentSlide = index
			this.slides = drinkArray
		}

	//get drink instructions and return string
	getInstructions(){
		let i = this.currentSlide
		return this.slides[i].strInstructions
	}


	//store ingredients in array return array
	getIngredients(){
    	//get ingredients
    	let ingredients = []
		let i = this.currentSlide

    	ingredients.push(this.slides[i].strIngredient1)
    	ingredients.push(this.slides[i].strIngredient2)
    	ingredients.push(this.slides[i].strIngredient3)
    	ingredients.push(this.slides[i].strIngredient4)
    	ingredients.push(this.slides[i].strIngredient5)
    	ingredients.push(this.slides[i].strIngredient6)
    	ingredients.push(this.slides[i].strIngredient7)
    	ingredients.push(this.slides[i].strIngredient8)
    	ingredients.push(this.slides[i].strIngredient9)
    	ingredients.push(this.slides[i].strIngredient10)
    	ingredients.push(this.slides[i].strIngredient11)
    	ingredients.push(this.slides[i].strIngredient12)
    	ingredients.push(this.slides[i].strIngredient13)
    	ingredients.push(this.slides[i].strIngredient14)
    	ingredients.push(this.slides[i].strIngredient15)

		//filter out any item in array that is null
		ingredients = ingredients.filter(item => item != null)

    	return ingredients
	}

	//store measurements in array and retrun array
	getMeasurement(){
    	//get measurement
    	let measurement = []
		let i = this.currentSlide
		
    	measurement.push(this.slides[i].strMeasure1)
    	measurement.push(this.slides[i].strMeasure2)
    	measurement.push(this.slides[i].strMeasure3)
    	measurement.push(this.slides[i].strMeasure4)
    	measurement.push(this.slides[i].strMeasure5)
    	measurement.push(this.slides[i].strMeasure6)
    	measurement.push(this.slides[i].strMeasure7)
    	measurement.push(this.slides[i].strMeasure8)
    	measurement.push(this.slides[i].strMeasure9)
    	measurement.push(this.slides[i].strMeasure10)
    	measurement.push(this.slides[i].strMeasure11)
    	measurement.push(this.slides[i].strMeasure12)
    	measurement.push(this.slides[i].strMeasure13)
    	measurement.push(this.slides[i].strMeasure14)
    	measurement.push(this.slides[i].strMeasure15)

		//filter out any item in array that is null
		measurement = measurement.filter(item => item != null)

    	return measurement
	}
	
	//get measurements with ingredients and concat. Return array of strings
	mesurementIngredients(){
		let measurementIngredients = []
		let ingredients = this.getIngredients()
		let measurement = this.getMeasurement()

		//assemble measurement of ingredients and store in array
		for(let i=0; i<measurement.length; i++){
			measurementIngredients[i] = `${measurement[i]} of ${ingredients[i]}`
		}

		return measurementIngredients
	}

}


//fetch drink based on input from api
function getDrink(){
    drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data =>{
            let slides = data.drinks
            console.log(slides) 

			//create an instance of Cocktail
			cocktail = new Cocktail(slides[0].strDrink, slides[0].strDrinkThumb, 
				slides[0].strInstructions, 0, slides)
			

			document.querySelector('.drink-name').innerText = cocktail.drinkName
            document.querySelector('.drink-img').src = cocktail.drinkImage
            document.querySelector('.instructions').innerText = cocktail.getInstructions()
			

            let ingredients = cocktail.mesurementIngredients()
			document.querySelector('.ingredients').innerText = ingredients.join(', ')            
            

			
        })

    .catch(err => {
        console.log(`error ${err}`)
    })

}


//move in array of drink to the right
function goRight(){
	let slides = cocktail.slides

		//check the current slide index to see if it is at the
		//end of the array
    	if(cocktail.currentSlide < slides.length-1){
			//move to the next drink
        	cocktail.currentSlide += 1
			let index = cocktail.currentSlide

			//create an instance of Cocktail
			cocktail = new Cocktail(slides[index].strDrink, 
			slides[index].strDrinkThumb, 
			slides[index].strInstructions, 
			index, slides)

			displayDrink(cocktail)
    	}    
}



//move in array of drink to the left
function goLeft(){
	let slides = cocktail.slides

	//check the current slide index to see if it is at the
	//end of the array
    if(cocktail.currentSlide > 0){
			//move to the next drink
        	cocktail.currentSlide -= 1
			let index = cocktail.currentSlide

			//create an instance of Cocktail
			cocktail = new Cocktail(slides[index].strDrink, 
			slides[index].strDrinkThumb, 
			slides[index].strInstructions, 
			index, slides)

			displayDrink(cocktail)
    	}     
} 


function displayDrink(drink){
	
document.querySelector('.drink-name').innerText = drink.drinkName
document.querySelector('.drink-img').src = drink.drinkImage
document.querySelector('.instructions').innerText = drink.getInstructions()

let ingredients = drink.mesurementIngredients()
document.querySelector('.ingredients').innerText = ingredients.join(', ')   
}