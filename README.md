<h1 align="center">Members for Tailwind CSS</h1>

<div align="center">

[![minified size](https://img.shields.io/bundlephobia/min/tailwindcss-members)](https://bundlephobia.com/package/tailwindcss-members)
[![license](https://img.shields.io/github/license/brandonmcconnell/tailwindcss-members?label=license)](https://github.com/brandonmcconnell/tailwindcss-members/blob/main/LICENSE)
[![version](https://img.shields.io/npm/v/tailwindcss-members)](https://www.npmjs.com/package/tailwindcss-members)
[![twitter](https://img.shields.io/twitter/follow/branmcconnell)](https://twitter.com/branmcconnell)

</div>

Members for Tailwind CSS offers an inverse functionality to the built-in `groups` feature of Tailwind CSS, providing a more declarative way to customize a parent element based on the state of its descendants, helping you to simplify complex scenarios and build user interfaces more intuitively.

Currently, the common solution for this is to use the `has-[...]` variant with an arbitrary value, targeting a descendant selector explicitly. Arbitrary values in Tailwind CSS are powerful, but in many cases, it's better to reserve them as a last resort or escape hatch when a native-like solution is available.

Members for Tailwind CSS fills this gap by providing a declarative API which handles that `:has(...)` check under the hood.

## Installation

You can install the plugin via npm:

```bash
npm install tailwindcss-members
```

Include it in your `tailwind.config.js`:

```js
module.exports = {
  plugins: [
    require('tailwindcss-members'),
  ]
}
```

## Usage

The plugin introduces the `member` variant, which can be used to apply styles based on a descendant's state.

Here's an example comparing the traditional approach with the new members approach:

<table><tr></tr><tr><td>

#### Example: Without Members
```html
<div class="bg-red-400 has-[>form:valid]:bg-green-400">
  <form>
    <input type="checkbox" required /> ← Check this checkbox
  </form>
</div>
```
Open this example in Tailwind Play: https://play.tailwindcss.com/wVPSR6UF7W

<br></td></tr><tr></tr><tr><td>

#### Example: With Members
```html
<div class="bg-red-400 member-valid:bg-green-400">
  <form class="member">
    <input type="checkbox" required /> ← Check this checkbox
  </form>
</div>
```
Open this example in Tailwind Play: https://play.tailwindcss.com/0YMyI2NpIf

<br></td></tr></table>

---

I hope you find `tailwindcss-members` a valuable addition to your projects. If you have any issues or suggestions, don't hesitate to open an issue or pull request.

If you liked this, you might also like my other Tailwind CSS plugins:
* [tailwindcss-signals](https://github.com/brandonmcconnell/tailwindcss-signals): Apply styles based on parent or ancestor state, a state-driven alterative to groups
* [tailwindcss-members](https://github.com/brandonmcconnell/tailwindcss-members): Apply styles based on child or descendant state, the inverse of groups
* [tailwindcss-multi](https://github.com/brandonmcconnell/tailwindcss-multi): Group utilities together by variant
* [tailwindcss-mixins](https://github.com/brandonmcconnell/tailwindcss-mixins): Construct reusable & aliased sets of utilities inline
* [tailwindcss-selector-patterns](https://github.com/brandonmcconnell/tailwindcss-selector-patterns): Dynamic CSS selector patterns
* [tailwindcss-js](https://github.com/brandonmcconnell/tailwindcss-js): Effortless build-time JS script injection
* [tailwindcss-directional-shadows](https://github.com/brandonmcconnell/tailwindcss-directional-shadows): Supercharge your shadow utilities with added directional support (includes directional `shadow-border` utilities too ✨)
* [tailwindcss-default-shades](https://github.com/brandonmcconnell/tailwindcss-default-shades): Default shades for simpler color utility classes
* [tailwind-lerp-colors](https://github.com/brandonmcconnell/tailwind-lerp-colors): Expand your color horizons and take the fuss out of generating new—or expanding existing—color palettes