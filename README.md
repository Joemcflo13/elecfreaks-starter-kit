
> Open this page at [https://joemcflo13.github.io/elecfreaks-starter-kit/](https://joemcflo13.github.io/elecfreaks-starter-kit/)

## Usage

### ``self-lock switch up``

use the block ``self-lock switch up`` to set up the selflock button

```blocks
starterkit.buttonsetup()
basic.showNumber(starterkit.temp())
basic.forever(function () {
    if (starterkit.button()) {
        basic.clearScreen()
        starterkit.rgb(0, 0, 0)
    } else {
        starterkit.dial()
    }
})
```

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/joemcflo13/elecfreaks-starter-kit** and import

## Edit this project ![Build status badge](https://github.com/joemcflo13/elecfreaks-starter-kit/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/joemcflo13/elecfreaks-starter-kit** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
