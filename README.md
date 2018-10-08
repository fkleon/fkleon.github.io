# Portfolio site

My static portfolio site created with [Jekyll](https://jekyllrb.com/).

## Build

The build requires `bundler` to manage the dependencies.

First install the dependencies:

    bundle install --path vendor/bundle

The static site can then be built with `jekyll`:

    bundle exec jekyll clean
    bundle exec jekyll build

## Deployment

Two options:

* Use [GitHub Pages](https://pages.github.com/).
* Build the page and deploy the static contents of `_site` to any web server.

## License

The content of this project itself is licensed under the (https://creativecommons.org/licenses/by-nc/4.0/)[Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) license],
and the underlying source code used to format and display that content is
licensed under the [MIT license)(LICENSE.md).
