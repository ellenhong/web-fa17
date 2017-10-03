# React Demo

First things first pls add your tunezz to our [Spotify playlist](https://open.spotify.com/user/ellenphantt/playlist/24uFfWtpzXkcgIoGSKhnck) :^)
  (you can copy+paste this link into the search bar in the Spotify web app)

## Table of Contents
* [Getting Started](#start)
* [Notes](#notes)
* [Client Work](#clients)

## Getting Started <a name="start"></a>
Use Create React App:
https://github.com/facebookincubator/create-react-app
* Follow instructions to install create-react-app, create an app, and start it up on a local server.
* Go to "Adding a CSS Preprocessor" & install the CLI for SASS
* Create a "styles" folder inside "src/"
  * Within that folder, create separate folders "css" and "scss"
  * Now your file structure should have folders src/styles/css & src/styles/scss
* Change the following lines under "scripts" in package.json:
  * `"build-css": "node-sass-chokidar src/styles/scss -o src/styles/css",`
  * `"watch-css": "npm run build-css && node-sass-chokidar src/styles/scss -o src/styles/css --watch --recursive",`


## Notes <a name="notes"></a>
* `_handleChange(e)` : takes in any event `e` (this variable is arbitrary)
* `export default Search` -- makes this component available & able to be used ANYWHERE
* `const` vs. `let`
  * You cannot modify, or change the reference, of a `const` variable

## Clients <a name="clients"></a>
* Clients & their respective groups:
  * [Cal Pre-Vet Club](https://drive.google.com/open?id=0B8uIwUvKKnp3a1c3NEZxbGhGMkU)
    * Annie, Mason, Richard, Sheryl
  * [Fei Tian Dancers](https://drive.google.com/open?id=0B8uIwUvKKnp3QVNYbWNSUjNhd1E)
    * Ariel, Holly, Katharine, Victor
