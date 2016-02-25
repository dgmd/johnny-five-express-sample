# README

This is a small, sample project demonstrating how to use [`johnny-five`](http://johnny-five.io/) (a [Node](https://nodejs.org/en/) library which lets you talk to many microcontoller platforms—including the [Arduino](https://www.arduino.cc/) and [Tessel](https://tessel.io/)—_via_ JavaScript) in conjunction with [`express`](http://expressjs.com/) (another Node library which lets you write a simple web server with JavaScript) to use the Arduino as a web server.

To run this project, we need to do two things:

1. Teach the Arduino how to receive communications from our computer for the `johnny-five` library.
2. And install the required libraries and run the code for this sample project.

---

To do (1):

1. Download and install [the Arduino IDE](https://www.arduino.cc/en/Main/Software) (integrated development environment—kind of like a [Sublime Text](https://www.sublimetext.com/) which can talk to the Arduino)
2. Open the Arduino IDE, and open the `StandardFermata` example by going to `File > Examples > Fermata > StandardFermata`
3. Upload the `StandardFermata` sketch by selecting `Sketch > Upload`

---

To do (2):

1. Clone this repository _via_ [GitHub Desktop](`github-mac://openRepo/https://github.com/dgmd/johnny-five-express-sample`) or from the command line (`git clone git@github.com:dgmd/johnny-five-express-sample.git`).
2. Open the cloned repository in your terminal.
3. Within the repository, run `npm install` in your terminal.  This uses [`npm`](https://www.npmjs.com/)—Node's package manager—to install the libraries required for this project (`express` and `johnny-five`) by looking within the `package.json` file.
3. Connect your Arduino to your computer _via_ USB.
4. In your terminal (which should still be within the cloned repository), run `node server.js`
5. You should see `Server's up at http://localhost:3000!`; when you do, go to [http://localhost:3000](http://localhost:3000) and you should see "Hello from `server.js`!"
6. Now you can explore the other routes and behavior detailed in [`server.js`](https://github.com/dgmd/johnny-five-express-sample/blob/master/server.js)

## Suggested Explorations

Here are a few ways to play around with and explore the syntax and setup of using Express and the Arduino which might be interesting and useful to you if you're planning to build a project with a physical, web-connected component.

### Exploration 1 — Add a route of your own

Get comfortable with the syntax for [adding routes with Express](http://expressjs.com/en/starter/basic-routing.html) and add your own which either returns a particular string, or perhaps serves up a different web from a file.

### Exploration 2 — Add a route which returns something depending on a URL parameter

You can use the [`req.params` object](http://expressjs.com/en/api.html#req.params) to access parameters passed in a URL—_e.g._ If someone goes to `/hello/world` and then `/goodbye/world`, you can write a route whose returned content depends on `hello` _v._ `goodbye`.

### Exploration 3 — Add a route which returns something depending on the state of an individual pin

You can query the state of an individual pin using [`johnny-five`'s Pin API](https://github.com/rwaldron/johnny-five/wiki/Pin#api).  Just as you can write a route which returns something different depending on the URL you go to, you can also write a route which returns something different depending on the state of an individual pin.

### Exploration 4 — Add a route which serves a web page which regularly queries the state of a pin and changes something on the web page depending on that pin

The first three explorations are all a single interaction—a user goes to a URL and Express serves up a page after looking at the URL and/or the Arduino's pins.  But you can also create a web page which itself regularly queries the server using [`XMLHTTPRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest).  In this exploration, try to create a web page which is served up at a particular URL, but which when it loads, regularly queries (in JavaScript, _via_ XMLHTTPRequest) a _different_ URL (say, one which is measuring the state of a pin) and modifies the content of the page accordingly…_e.g._ You could have a web page where the `background-color` of a `div` changes when a particular pin is set low (say, by a switch).