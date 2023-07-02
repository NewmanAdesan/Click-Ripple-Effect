<p align="center">
  <img src="./ReadMe-Images/Web-Effect-Project-banner3.png">
</p>
<p align="center">
  <img src="https://img.shields.io/badge/HTML-E34F26.svg" alt="HTML badge" style="height: 25px;">
  <img src="https://img.shields.io/badge/CSS-1572B6.svg" alt="CSS badge" style="height: 25px;"> 
  <img src="https://img.shields.io/badge/JS-F7DF1E.svg" alt="JS badge" style="height: 25px;">
  <img src="https://img.shields.io/badge/Keyframe Animation-4AB2B4.svg" alt="Web Effect badge" style="height: 25px;">
</p>

# Click-Ripple-Effect
A Web Effect Project that shows how a click ripple effect can be designed.<br />
in this case, when any part of a button is clicked, a click ripple effect is activated. <br/>

basically, at the point of the click of the element, in this case, the button element, <br />
a 100px by 100px white circle element(span element) is positioned. <br />
then over the time span of 0.5 seconds, two things happen simultaneously. <br />
- one, it is made to transition from a scale of 0 to a scale three times its size <br />
- two, it is made to transition to an opacity of 0 i.e transparent <br />
After this, the element is removed.
<br />

A key component to activating this effect is that <br />
the element that is clicked in this case the button element <br />
must have its overflow property set to hidden. <br />
this causes any child element which overflows to be hidden. <br />
by the time the circle element scales, when it overflows, it will be hidden.

# Positioning the circle Element
The circle element is created and positioned by the javascript code. <br />
it is placed as the child of the button element and must be positioned with reference to the button element <br />
so that when it scales and overflows, the part of the circle element that overflows will be hidden. <br />

to position the circle Element at the point at which the button element was clicked, <br/>
we make use of two sets of properties:
- `pageX & pageY`
- `offsetTop & offsetLeft`

<img src="./ReadMe-Images/ripple-effect.png" style="width:600px; height:auto" alt="javascript for the ripple effect">

pageX & pageY returns the position of the clicked point relative to the viewpoint.
offsetTop & offsetLeft return the position of the clicked element relative to the viewport.
