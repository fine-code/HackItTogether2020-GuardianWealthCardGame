var partialDeck = [{
    color: "black",
    value: "A",
    text: "The average graduate student leaves school $30,000 in debt"
},
{
    color: "black",
    value: "2",
    text: "Around 45 million Americans owe $1.6 trillion in student loans"
},
{
    color: "black",
    value: "3",
    text: "11.1% of student loans are 90 days or more delinquent (missed 3 or more payments)"
},
{
    color: "black",
    value: "4",
    text: "Monthly student loan payment (among those not in deferment) usually range between $200 and $299 on average"
},
{
    color: "black",
    value: "5",
    text: "Average life insurance costs are around $70.00 a month"
},
{
    color: "black",
    value: "6",
    text: "70% of college students graduate in debt"
},
{
    color: "black",
    value: "7",
    text: "Enroll in a banking plan today!"
},
{
    color: "black",
    value: "8",
    text: "The average cost of a wedding is over $30,000"
},
{
    color: "black",
    value: "9",
    text: "The average rent for a studio in NYC is over $1800"
},
{
    color: "black",
    value: "10",
    text: "The average cost of groceries for an American family is $550 month"
},
{
    color: "black",
    value: "J",
    text: "One in 11 deaths by suicide among young professionals was at least partly due to student loans"
},
{
    color: "black",
    value: "Q",
    text: "A 2016 study found that 43 percent of students don't track their spending while 58 percent said they aren't saving money each month"
},
{
    color: "black",
    value: "K",
    text: "Saving money is important to begin a career"
},
{
    color: "black",
    value: "A",
    text: "Saving money is important to begin a career"
}
];

var suits = ["hearts", "clubs", "diamonds", "spades"];

//get new array of cards and their suit

// var fullDeck = suits.map (

//     function (suit) {


//         console.log(suit); 

//         var fullCardArray = partialDeck.map (

//             function(card) {

//                 var updatedCard = card;

//                 updatedCard.suit = suit; 

//                 if (suit === "hearts" || suit === "diamonds") {
//                     updatedCard.color = "red";
//                 }
//                 else {
//                     updatedCard.color = "black";
//                 }
                
//                 console.log(updatedCard); 
//                 return updatedCard; 

//             }
//             );
//         console.log(fullCardArray);
//         return fullCardArray; 

//     }
// ); 
// console.log(fullDeck); 


function addSuit() {

    var newFullDeck = [];

    partialDeck.forEach(
    
    card =>    {

        suits.forEach(
           suit => {
                var deepCard = JSON.parse(JSON.stringify(card));
                deepCard.suit = suit; 
                if (deepCard.suit === "hearts" || deepCard.suit === "diamonds") {
                    deepCard.color = "red";
                }
                else {
                    deepCard.color = "black";
                }
                newFullDeck.push(deepCard);

            }
        )

    }
    ); 

    return newFullDeck;
}

function drawCard(deck) {
    var num = Math.floor(Math.random() * deck.length-1);   
    var card = deck.splice(num, 1);
    return card[0];
}


   
 


$(document).ready(function() {

    var playerDeck = addSuit(); 
    var computerDeck = addSuit(); 

    var playerScore = 0;
    var computerScore = 0;


    console.log(draw);
    $("#draw").click(function() {

            var draw = drawCard(playerDeck); 
            $("#cards").html(draw.value + "\t" + draw.color + "\t" + draw.suit + "\t" + draw.text);
            if (draw.value === "Q" | draw.value === "K" | draw.value === "J" ) {
                playerScore += 10; 
            }
            else if(draw.value === "A"){
                playerScore +=1;
            }
            else {
                playerScore +=parseInt(draw.value);
            }

            var computerDraw = drawCard(computerDeck);
            if (computerDraw.value === "Q" | computerDraw.value === "K" | computerDraw.value === "J" ) {
                computerScore += 10; 
            }
            else if (computerDraw.value === "A"){
                computerScore += 1;
            }
            else {
                computerScore += parseInt(draw.value);
            }
            
            if (playerScore > 21) {
                $("#phrase").html("You lost! Your score is greater than 21!" + "</br>");
            }
            else if (playerScore === 21) {
                $("#phrase").html("You won!" + "</br>");
            }
            else {
                $("#phrase").html("Your score is " + playerScore + "</br>");
            }
        }
    );

    $("#freeze").click(function() {
        if (playerScore > 21) {
       $("#phrase").html("You lost! Your score is greater than 21!" + "</br>");
   }
   else if (playerScore === 21) {
       $("#phrase").html("You won!" + "</br>");
   }
   else if (computerScore > 21 || computerScore < playerScore ) {
           $("#phrase").html("You won! :):):):)" + "</br>");
   } else{
    $("#phrase").html("The computer won this time :( Oh well!" + "</br>");
   }
   }); 

   $("#quit").click(function() {
    window.stop();
}); 

});
	
// deckOfCards.add(new Card(1, Suit.values()[i], Color.RED, "1", "The average graduate student leaves school $30,000 in debt"));
// deckOfCards.add(new Card(2, Suit.values()[i], Color.RED, "2", "Around 45 million Americans owe $1.6 trillion in student loans"));
// deckOfCards.add(new Card(3, Suit.values()[i], Color.RED, "3", "Enroll in a banking plan toay!"));
// deckOfCards.add(new Card(4, Suit.values()[i], Color.RED, "4", "70% of college students graduate in debt"));
// deckOfCards.add(new Card(5, Suit.values()[i], Color.RED, "5", "Monthly student loan payment (among those not in deferment) usually range between $200 and $299 on average"));
// deckOfCards.add(new Card(6, Suit.values()[i], Color.RED, "6", "The average rent for a studio in nyc is over $1800"));
// deckOfCards.add(new Card(7, Suit.values()[i], Color.RED, "7", "A 2016 study found that 43 percent of students don't track their spending while 58 percent said they aren't saving money each month."));
// deckOfCards.add(new Card(8, Suit.values()[i], Color.RED, "8", "One in 11 deaths by suicide among young professionals was at least partly due to student loans"));
// deckOfCards.add(new Card(9, Suit.values()[i], Color.RED, "9", "The average grocery cost per American family is $550 month"));
// deckOfCards.add(new Card(10, Suit.values()[i], Color.RED, "10", "Saving money is important to begin a career"));
// deckOfCards.add(new Card(10, Suit.values()[i], Color.RED, "J", "The average cost of a wedding is over $30,000"));
// deckOfCards.add(new Card(10, Suit.values()[i], Color.RED, "Q", "Average life insurance costs are around $70.00 a month"));
// deckOfCards.add(new Card(10, Suit.values()[i], Color.RED, "K", "11.1% of student loans are 90 days or more delinquent (missed 3 or more payments)"));
// }]