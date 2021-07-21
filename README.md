# [Quality Assurance with Chai](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-and-testing-with-chai/)


# A headless browser:
 is a web browser WITHOUT a graphical user interface. This kind of tool is particularly useful for testing web pages, as it is able to render and understand HTML, CSS, and JavaScript the same way a browser would.

# Zombie.JS
It's a lightweight browser which is totally based on JS, without relying on additional binaries to be installed. This feature makes it usable in an environment such as Replit. 

# Mocha 
Allows you to prepare the ground running some code before the actual tests. 

With a headless browser, before the actual testing, we need to visit the page we are going to inspect. The suiteSetup 'hook' is executed only once at the suite startup. Other different hook types can be executed before each test, after each test, or at the end of a suite. See the Mocha docs for more information.