// Declaration of all Image and Text variables.
var food_img;
var food_text;

var military_img;
var military_text;

var budget_text;
var budget_img;

var background_img;

var title_text;


// Setup function sets up all images and hides them until they are initialized
function setup() { 
  createCanvas(600, 600);
	food_img = createImg('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg')
	food_img.hide();
	
	military_img = createImg('https://www.fastweb.com/uploads/article_photo/photo/2035983/crop635w_Military-Scholarships.jpg')
	military_img.hide();
	
	budget_img = createImg('http://www.sunsetaccounting.net/memberarea/images/uploaded/sabats/discretionary-desk2015.png')
	budget_img.hide();
	
	background_img = createImg('https://blog.newegg.com/blog/wp-content/uploads/windows_xp_bliss-wide.jpg')
	background_img.hide()
	
	

	
// Initialize background image
	image(background_img, 0,0)
	
// Set Text size for the Title Text
	textSize(25)
// Initialize title text for the bottom
	title_text = text("National Spending is way out of proportion in 2017.", 170, 400, 300, 100)
	
// Set Text size for the rest of the program
	textSize(15)
	
	
	
	
	
} 

// Set up function for when a certain key(s) are pressed
	function keyTyped() {
	
// If the 'a' key is pressed, bring up food image and text.
		if (key == 'a') {
			image(food_img, 0, 0, width/5, height/5)
			food_text = text("~1% of nat. spending", 20, 130, 80,50)	
		}
// If the 'b' key is pressed, bring up the military image and text.
		if (key == 'b') {
			image(military_img, 120, 0, width/3.2, height/3.2)
			military_text = text("Close to 55% of national spending", 160, 200, 100, 70)	
		}
// If the 'c' key is pressed, bring up budget image and text.
		if (key == 'c') {
			image(budget_img, 300, 0, width/2, height/2)
			budget_text = text("The Overall National Budget Is: 1.16 Trillion", 380, 310, 210, 60)
		}
		
}
