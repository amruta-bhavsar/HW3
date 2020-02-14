# HW3

1. The code that draws the blades of grass is 

stroke(random(60, 70), 100, 90)


2. The code that makes the lawnmower come by is 

if (random(1000) > 999) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }
  
It comes by every time the grass grow sup to the top of the canvas.
  
  
3. The h variable allows the grass to grow beyond the original set 10 px.

What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?


4. The -10 makes it so that the grass doesn't keep growing and getting cut at the same height value, and also so that when the grass is cut, it'll disappear all the way down to the dirt.
