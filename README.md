# ChromeKeePass App
Chrome app for reading KeePass password files.  WIP, nowhere near ready!

## Running or Updating the code locally
If you want to hack on the code...

Tools needed:
* [Node.Js](http://nodejs.org/) - prerequisite for other dev tools
* [Grunt.js](gruntjs.com) - for less/css processing, packaging, and copying libs to the lib folder
* [Bower](http://bower.io/) - for dependencies (libraries)

1) Clone the codebase, and then (from the code folder) run ```bower install``` to install the dev dependencies.  
1) ```npm install``` to install the dependencies Node.js dependencies.  
2) Then ```grunt updatelib``` to copy the dependencies to their lib location.  
3) If you are editing ```.less``` files then run ```grunt watch``` to compile them when they change.

