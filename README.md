# README

This is a small, sample project demonstrating how to use [`johnny-five`](http://johnny-five.io/) (a [Node](https://nodejs.org/en/) library which lets you talk to many microcontoller platforms—including the [Arduino](https://www.arduino.cc/) and [Tessel](https://tessel.io/)—_via_ JavaScript) in conjunction with [`express`](http://expressjs.com/) (another Node library which lets you write a simple web server with JavaScript) to use the Arduino as a web server.

To run this project, we need to do two things:

1. Teach the Arduino how to receive communications from our computer for the `johnny-five` library.
2. And install the required libraries and run the code for this sample project.

To do (1):

1. Download and install [the Arduino IDE](https://www.arduino.cc/en/Main/Software) (integrated development environment—kind of like a Sublime Text which can talk to the Arduino)
2. Open the Arduino IDE, and open the `StandardFermata` example by going to `File > Examples > Fermata > StandardFermata`
3. Upload the `StandardFermata` sketch by selecting `Sketch > Upload`

To do (2):

1. Clone this repository _via_ [GitHub Desktop](`TK`) or from the command line (`git clone TK`).
2. Open the cloned repository in your terminal.
3. Within the repository, run `npm install` in your terminal.  This uses [`npm`](https://www.npmjs.com/)—Node's package manager—to install the libraries required for this project (`express` and `johnny-five`) by looking within the `package.json` file.
3. Connect your Arduino to your computer _via_ USB.
4. In your terminal (which should still be within the cloned repository), run `node server.js`
5. You should see `Server's up at http://localhost:3000!`; when you do, go to [http://localhost:3000](http://localhost:3000) and you should see "Hello from `server.js`!"
6. Now you can explore the other routes and behavior detailed in `server.js`
