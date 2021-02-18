
const quotes = ["Always believe that something wonderful is about to happen.",
"Act as if what you do makes a difference. It does.", 
"Success is not final, failure is not fatal: it is the courage to continue that counts.", 
"Never bend your head. Always hold it high. Look the world straight in the eye.", 
"What you get by achieving your goals is not as important as what you become by achieving your goals.", 
"When you have a dream, you've got to grab it and never let go.", 
"I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", 
"No matter what you're going through, there's a light at the end of the tunnel.",
"It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
"Life is like riding a bicycle. To keep your balance, you must keep moving."
,"What you do today can improve all your tomorrows.","What you get by achieving your goals is not as important as what you become by achieving your goals.",
"Problems are not stop signs, they are guidelines.",

"We may encounter many defeats but we must not be defeated.",
"Be kind whenever possible. It is always possible.",
"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
"Life is 10% what happens to us and 90% how we react to it.",
"The great thing in this world is not so much where you stand, as in what direction you are moving.",
"Courage is the first of human qualities because it is the quality which guarantees all others.",
"Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending."
];

// random quote index
const quotes_i = Math.floor(Math.random() * quotes.length);
// set a quote
document.getElementById("quote").innerHTML = quotes[quotes_i];

// this function is asynchronous
function setTime(){
    t = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second:'numeric', hour12: true });
    document.getElementById("show_time").innerHTML = t;
    // call itself for each 0.5Sec
    var k = setTimeout(setTime, 500);
}
// set current time
setTime();