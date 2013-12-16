grunt-jekyll-boilerplate
========================

## Boilerplate for new projects using Grunt and Jekyll.

Along with some working knowledge of what they are and how to use them, you'll need to have the following installed for this to work:

* SASS - http://sass-lang.com
* Jekyll - http://jekyllrb.com
* Grunt - http://gruntjs.com
* LiveReload browser extention - http://bit.ly/1ka3ni3

### To run:

Open up Terminal and navigate to the root folder and start Jekyll with:

```
jekyll serve --watch
```

Then navigate into the _grunt folder and run Grunt:

```
grunt watch
```

From there, you should be able to view the default index page by going to **http://localhost:4000/** in your browser. Update localhost with your computer's IP address to view it on other computers or devices on your network.

### What it should do

This should work as follows:

1. Launch Terminal and run Jekyll and Grunt (instructions above).
2. Go to http://localhost:4000
3. Enable LiveReload via the browser extension
4. Edit the following resource files within the _grunt folder:
  * CSS: _grunt/css/global.scss
  * JavaScript: _grunt/js/global.js
  * Images: _grunt/images/
5. global.scss gets compiled with SASS, then any necessary browser prefixes are added via Autoprefixer
6. CSS, JS, and Images then get compressed and are moved to their appropriate folders within the Jekyll system
7. Jekyll publishes your static site to the _site folder
8. LiveReload monitors the _site/CSS/ folder along with any HTML file changes
9. Grunt watches for changes to your resource files and repeats the process

### Warning

Although I'd be happy if a lot of smart people contributed to this project and made it fast, bulletproof, better written, etc., this is up here to provide myself with a solid starting point for starting new projects. It works for me, but I can't guarantee it will work for you.

### Credits

This is based off of Chris Coyier's excellent Grunt tutorial for people like me: http://24ways.org/2013/grunt-is-not-weird-and-hard/

