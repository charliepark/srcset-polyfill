# srcset-polyfill

A really simple, pretty tiny, dependency-free polyfill for serving higher-res files to retina devices when using browsers that are confused by `srcset`.

It's not a framework. It's not a library. It's just a few lines of vanilla JavaScript.

## Are _you_ confused by srcset?

You're not alone. Currently, both Firefox and IE have trouble with it as well. Safari is a little fussy, but gets it right where it counts. Chrome's fine.

#### `srcset` in your code

Where you normally would have written:

```
<img alt="A eucalyptus tree, in the woods." src="tree.jpg">
```

You now have this:

```
<img alt="A eucalyptus tree, in the woods." src="tree.jpg" srcset="tree_2x.jpg 2x">
```

That "2x" on the end there tells the browser "if you're on a retina device (with pixels at 2x the single-axis-density of a normal screen), use _this_ image instead of the one that doesn't have a 2x". (If you have an even larger version of tree.jpg, you can do the same with "3x".) You will want your 2x assets to have the same height:width ratio as your 1x assets, of course, so things don't squash.

Chrome and Safari can both handle that added attribute with no problem. Firefox and IE, though, don't know what to do. This is for them.

## So what does this JS do? How do I use it?

This JS is a tiny bit of code that helps older browsers load higher-res graphics.

Just add the code in [srcsetpolyfill.js](https://github.com/charliepark/srcset-polyfill/blob/master/srcsetpolyfill.js) to the JS on your site, and call it once your page has loaded, with `srcsetPolyfill.run();`. If the viewer is on a retina device, the JS will look through every `<img>` file on your page and, if the image has a 2x version (as defined in the srcset), it will replace the `src` attribute's value with the 2x value.

Since Chrome and Safari only use the `src` attribute if `srcset` is missing, they won't be affected by this code in any meaningful way. We aren't bothering with a 3x multiplier in this code, as anyone using an iPhone 6 to access your site will be using a browser that handles srcset.

Once srcset is more fully covered (you can [check at caniuse.com](http://caniuse.com/#feat=srcset)), you can remove this code completely.

This code does not require jQuery or any other libraries to run.

If you have questions or suggestions, I'm [@charliepark](https://twitter.com/charliepark) on Twitter, and love getting feedback.
