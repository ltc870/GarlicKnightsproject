# Style Guide for HTML

## Block Level Elements

Block level elements are elements that take up the width of its container, creating a new line underneath. These elements include:

| Element         | Description                                            |
| --------------- | ------------------------------------------------------ |
| `<address>`     | Contact information section                            |
| `<article>`     | Independent, self-contained content                    |
| `<aside>`       | Content tangentially related to the content around it  |
| `<blockquote>`  | Block of text quoted from another source               |
| `<canvas>`      | Area for drawing graphics using JavaScript             |
| `<dd>`          | Description in a description list                      |
| `<div>`         | Generic container for content                          |
| `<dl>`          | Description list                                       |
| `<dt>`          | Term in a description list                             |
| `<fieldset>`    | Group of related elements within a form                |
| `<figcaption>`  | Caption for the content of a `<figure>` element        |
| `<figure>`      | Group of content, usually with a caption               |
| `<footer>`      | Footer for a section or page                           |
| `<form>`        | Form to collect user input                             |
| `<h1>` - `<h6>` | Heading levels 1 to 6                                  |
| `<header>`      | Header for a section or page                           |
| `<hr>`          | Horizontal rule or line                                |
| `<li>`          | List item in an ordered or unordered list              |
| `<main>`        | Main content of the document                           |
| `<nav>`         | Navigation links                                       |
| `<noscript>`    | Content to be displayed if JavaScript is not supported |
| `<ol>`          | Ordered list                                           |
| `<p>`           | Paragraph                                              |
| `<pre>`         | Preformatted text                                      |
| `<section>`     | Section of content                                     |
| `<table>`       | Table                                                  |
| `<tfoot>`       | Footer for a table                                     |
| `<ul>`          | Unordered list                                         |
| `<video>`       | Video content                                          |

---

## Inline Level Elements

Inline level elements do not start on a new line, and they only take up as much width as necessary.

Example:

```html
<p>This is how to use a strong <strong>tag</strong></p>
```

| Element      | Description                                                             |
| ------------ | ----------------------------------------------------------------------- |
| `<a>`        | Hyperlink                                                               |
| `<abbr>`     | Abbreviation                                                            |
| `<acronym>`  | Acronym (deprecated in HTML5, use `<abbr>` instead)                     |
| `<b>`        | Bold text                                                               |
| `<bdo>`      | Bi-directional override (text direction)                                |
| `<big>`      | Bigger text (deprecated in HTML5)                                       |
| `<br>`       | Line break                                                              |
| `<button>`   | Button                                                                  |
| `<cite>`     | Citation or reference                                                   |
| `<code>`     | Code                                                                    |
| `<dfn>`      | Definition                                                              |
| `<em>`       | Emphasis (italic)                                                       |
| `<i>`        | Italic text                                                             |
| `<img>`      | Image                                                                   |
| `<input>`    | Input field                                                             |
| `<kbd>`      | Keyboard input                                                          |
| `<label>`    | Label for an `<input>`, `<select>`, `<textarea>`, or `<button>` element |
| `<map>`      | Image map                                                               |
| `<object>`   | Embedded object (e.g., multimedia)                                      |
| `<output>`   | Output of a calculation                                                 |
| `<q>`        | Short inline quotation                                                  |
| `<samp>`     | Sample output from a computer program                                   |
| `<script>`   | Script, typically JavaScript                                            |
| `<select>`   | Dropdown selection list                                                 |
| `<small>`    | Smaller text                                                            |
| `<span>`     | Generic container for inline elements                                   |
| `<strong>`   | Strong importance (bold)                                                |
| `<sub>`      | Subscript                                                               |
| `<sup>`      | Superscript                                                             |
| `<textarea>` | Text area (multi-line input)                                            |
| `<time>`     | Machine-readable date/time                                              |
| `<tt>`       | Teletype or monospace text                                              |
| `<var>`      | Variable                                                                |

### Div tag

Div tags are used as containers to split your code. I think of them like "dividers" or "sections". Divs can contain any other html elements. You can also nest divs within divs. Examples:

```html
<div>
  <p>This is how you use a div. A div is a block level element. This div will take the width of it's parent container unless specified with CSS.</p>
  <p>Here's another line. The div will create a blank like under it.</p>
</div>

<div>
  <p>Here's another line</p>
</div>
```

Nested divs:

```html
<div>
  <div>
    <p>This is how you nest a div. I wouldn't nest divs unless you have too. You'll get used to knowing when you use a nest div the more you look at different designs, especially if you want to do frontend work.</p>
  </div>
</div>
```

This is how you would use the <nav> tag. The nav tag will let screen readers know the user is interacting with a navigation bar. You can always use a <div> to accomplish this, but the <nav> tag provides more meaning than the <div> tag.

```html
<nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/python/">Python</a>
</nav>
```

## Semantic elements

Semantic elements clearly describes its meaning to both the browser and the developer.
Examples of non-semantic elements: `<div>` and `<span>` - Tells nothing about its content.
Examples of semantic elements: `<header>` `<nav>` `<footer>` - These will clearly define the contents nested within them.

- `<article>`
- `<aside>`
- `<figcaption>`
- `<figure>`
- `<footer>`
- `<header>`
- `<main>`
- `<mark>`
- `<nav>`
- `<section>`
- `<summary>`
- `<time>`

These elements also help screen readers let the user know where they're at on the page, especially if they are visually impaired and they utilize screen readers. Look up "accessability" to learn more. It's a lot, but it's worth learning about if you ever plan on doing custom work for people and don't want to get sued.

I try to use semantic HTML when possible, especially when using `<header>` `<section>` `<nav>` `<footer>` and `<aside>`. If you plan on using a `<div>`, think about the section you're creating. If the section can fit into one of the aforementioned elements, then go with those elements. I use `<div>`s when I can't think of any other element to use.

## Headings

Your `<h1>` - `<h6>` tags are your headings tags to your various sections. Every website is going to have at least an `<h1>` to `<h3>` tag. `<h1>` is always the main heading tag in each website. You will only ever have 1 `<h1>` tag. Then you can think of your `<h2>` tags as subtitles. Within those subtitles, the different sections may have an `<h3>` tag. Here is an example:

```html
<h1>Welcome To My Webpage (main title)</h1>

<section>
  <h2>Here is a subtitle of my website</h2>
  <div>
    <h3>This is a third level title</h3>
    <!-- content will go here -->
  </div>
  <div>
    <h3>Another third level title</h3>
    <!-- content will go here -->
  </div>
</section>

<section>
  <h2>Here is a subtitle of my website</h2>
  <div>
    <h3>This is a third level title</h3>
    <!-- content will go here -->
  </div>
  <div>
    <h3>Another third level title</h3>
    <!-- content will go here -->
  </div>
</section>
```
