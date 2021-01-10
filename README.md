# sight-singng-frontend
<h1>MusicTutor</h1>
An app to help user practive sight singing.
<br></br>
<h2>General Info</h2>
<p>
MusicTutor is a innovative single-page web-based application that helps users better their sight singing skill through practicig specific intervals. Additionally, MusicTutor allows users a chance to familiarize their sights with what intervals look like and hopefully being able to eventaully hear the interval even before the attempt to sing it. The quicker one is able to hear melodies he/she sees then the quicker music will be learned.<br>
<br>:notes:</br>
</p>

<h2>Inspiration</h2>

<p>
Throughout my teaching career and as a lifelong music student, I have witnessed the struggle of sight singing. No, most people expecially instrumentalist are not required to sing their lines of music. But, it does help with the musicality and the ability to learn faster. As a student and prfessional, I am always under some sort of dead line. So, the more quickly I can learn a piece, the more time I can save. 
</p>

<h2>Intro Video</h2>
Coming soon...

<h2>Technologies</h2>

<ul>
 <li>Node: version 15.0.1</li>
 <li>body-parser: 1.19.0</li>
 <li>Mongoose: version 5.11.8</li>
 <li>MongoDB: version 3.6.3</li>
 <li>cors: 2.8.5</li>
 <li>bcrypt: 5.0.0</li>
 <li>jsonwebtoken: 8.5.1</li>
 <li>JavaScript: version 1.1.1</li>
 <li>JSON: version 2.3</li>
 <li>body-parser: 1.19.0</li>
 <li>express: 4.17.1</li>
 <li>nodemon: 2.0.6</li>
 <li>dotenv: 8.2.0</li>
</ul>

<h2>Setup</h2>
To run this project, create a folder on your local environment where you can clone the "sight-singing-frontend" and "sight-singing-backend" GitHub repositories. Open both in your code editor.<br><br>
From your backend folder perform the following commands:<br>
<li>Use the command to start your NPM: <code>npm init</code></li>
<li>In your terminal, install express: <code>npm install express</code></li>
<li>You don't want to send your node-modules to github, in terminal: <code>touch .gitignore</code></li>
<li>require express in your index.js folder</li><br>
<li>Use terminal to install mongoose: <code>npm i mongoose</code></li><br>
<li>Use terminal to install cors: <code>npm install cors</code></li><br>
<li>last but not least install bcrypt: <code>npm install bcrypt</code></li><br>
<li>last but not least install jsonwebtoken: <code>npm install jsonwebtoken</code></li><br>

From your frontend folder perform the following command: <code>npm install</code><br><br>
Then you should: <code>npm start</code><br><br>
You are now ready to start using the first iteration of MusicTutor!<br>

<h2>Alternative run scripts</h2>

### Docker Setup:

<p>Inside of your terminal run: <code>docker build -t sight-singing-frontend:lts -f Dockerfile .</code></p>
<p>Once the container is built, run: <code>docker run -d -p 8087:3000 --name sight-singing-frontend sight-singing-frontend:lts </code></p>
<br>
<p>On your browser you can see the code by going to "localhost:8087" Make sure the backend is running in order to retrieve all of the information.</p>

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<i>*Please note that some features are still a work in progress.</i>

<h2>Instructions</h2>
<ol>
 <li>Sign up!</li>
 <li>Or Login if you've creatd an account previously.</li>
 <li>Choose and Interval to practice.</li>
 <li>Once once on the page, hit play, and the oscillator will give the user the first tone and then the user is expected to sing the written interval.</li>
  <li>There is also a hint on each page to remind the user what the interval sounds like.</li>
</ol>

<h2>Code Example</h2>

<h4>useEffect for pitch detection:</h4>

```  
useEffect(() => {
  console.log('tuner thing again')
  let mic;

  new p5(instance => {
    instance.setup = () => {
      instance.noCanvas();
      const audioContext = instance.getAudioContext();
      mic = new p5.AudioIn();
      mic.start(() => {
        setPitch(
          ml5.pitchDetection(model, audioContext , mic.stream, () => {})
        )
      });
    }
  })

  return () => {
    mic.stop() 
  }
}, [])
```

<h4>To start the oscillator and the listening cycle for the correct pitch:</h4>

```
const handlePlay = () => {
  oscillator.start();
  let timeOut = setTimeout(() => {
    oscillator.stop()
    setShouldDisplayPlay(false)
    setShouldDisplayPitch(true)
    let interval = setInterval(getPitch, 500) // This won't work
    setIntervalId(interval)
  }, 500)
  setTimeOutId(timeOut)
}
```
  
<h2>App Preview</h2>
<img src="https://i.imgur.com/wJ2povs.png" border="0" width="300" height="auto"/><br>
<img src="https://i.imgur.com/upxkYGq.png" border="0" width="300" height="auto"/><br>
<p>Before:</p>
<img src="https://i.imgur.com/pGZpIHb.png" border="0" width="300" height="auto"/><br>
<p>After:</p>
<img src="https://i.imgur.com/8aqgFqq.png" border="0" width="300" height="auto"/><br>

<h2>Status</h2>

Looking forward to rolling-out the following features:
<li>Eartraining feature.</li>
<li>Tracker to keep track of progress</li>
<li>Admin capabilities</li>
<li>Stretch goal is to have admin create melodies to sent to student.</li>

 <h2>Contact</h2>
<a href="https://www.linkedin.com/in/musicmeier/"><img src="https://user-images.githubusercontent.com/68958970/97038321-a07f9600-1538-11eb-90f4-baa2d81a0664.png" alt="Music Meier" style="width:10px;height:10px;"></a>Music Meier :musical_score:<br>

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
