<br />

*italic*

<hr>

**bold**

<hr>

~~strike through~~

<hr>

> this is a block quote
> it goes like this
>
> if you want space, put arrow head in blank line
> you can also the the html `<blockquote>` tags

<hr>

### task list
- [x] flip
- [ ] flap
- [ ] flop

<hr>

<ul>
    <li>unordered list</li>
</ul>

<hr>

<ol>
    <li>ordered list</li>
</ol>

<hr>

| Col 1  | Col 2 |
| ------------- | ------------- |
| tables  | don't you  |
| are fun  | think so?  |

<hr>

```print("This is code") ```

<hr>

```json
{
    "This is" : "specific code"
}
```

<hr>

emojis are fine 😍
[emoji index](https://unicode.org/emoji/charts/full-emoji-list.html)

<hr>

not supported in *GitHub*:

<span style="background-color: darkslategray; color: cyan"> text and highlight colors supported as inline-styles </span>

supported in *GitHub* (this may not display in other previewers):

```diff
- text in red
+ text in green
! text in orange
# text in gray
@@ text in purple (and bold)@@
```

<hr>

basic link [My ToolBox](https://anthonybench.github.io)

<hr>

email <anthonybenchyep@gmail.com>

<hr>

basic image: \
![Holochan!](https://i.imgur.com/oTopiyf.jpg)

tagged image, more control, \
you can stack image tags by adding the `align="left"` attribute: \
<img alt="example image tag" src="https://i.imgur.com/oTopiyf.jpg" width="200" />

<br />

<hr>

section jump [`Table of Contents`](#table-of-contents-)

(links must omit special characters and emojis, and spaces must have dashes. Underscores do not count as special characters. special means *anything* not alpha-numeric. this may not work in other previewers.)

<hr>

badges:

* license/GitHub
![GitHub](https://img.shields.io/github/license/anthonybench/Algorithms)
* Analysis/HitHub top language
![GitHub top language](https://img.shields.io/github/languages/top/anthonybench/Algorithms)
* Analysis/GitHub language count
![GitHub language count](https://img.shields.io/github/languages/count/anthonybench/anthonybench.github.io)
* Make new badge: [shield.io](https://shields.io/)
* [MIT License Link](https://opensource.org/licenses/MIT)

<hr>

You can render LaTeX mathematical expressions using [KaTeX](https://khan.github.io/KaTeX/):

The *Gamma function* satisfying $\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$ is via the Euler integral

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

> You can find more information about **LaTeX** mathematical expressions [here](http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference).


<hr>

You can render UML diagrams using [Mermaid](https://mermaidjs.github.io/). For example, this will produce a sequence diagram:

```mermaid
sequenceDiagram
Alice ->> Bob: Hello Bob, how are you?
Bob-->>John: How about you John?
Bob--x Alice: I am good thanks!
Bob-x John: I am good thanks!
Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

Bob-->Alice: Checking with John...
Alice->John: Yes... John, how are you?
```

And this will produce a flow chart:

```mermaid
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
```