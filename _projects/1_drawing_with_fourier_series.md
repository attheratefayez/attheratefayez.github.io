---
layout: page
title: Drawing with Fourier Series
description: Signal decomposition and reconstruction using DFT and Complex Fourier Series.
img: assets/img/drawing_with_fourier_series/cover.png
importance: 1
category: "Signal Processing"
---

Applying the Discrete Fourier Transform (DFT) to a signal breaks it in its fundamental frequency components and their respective amplitudes. With this spectral information, the signal can be reconstructed using the Complex Fourier Series. This program performs both decomposition and reconstruction.


This program takes an svg image as input. It then creates some points that outlines the image. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/drawing_with_fourier_series/maple_leaf.svg" title="input image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/drawing_with_fourier_series/points_mirrored_x.png" title="outlined image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Input image (Maple Leaf Image) becomes an outlined discrete signal (dotted maple leaf image) that will be analyzed later with DFT. 
</div>

This outlined image is out discrete signal, and DFT is applied on it to get the fundamental frequencies present on this signal. We get this as a 
series of complex numbers, where the modulus of the complex number is the amplitude of the frequency, and the argument is the phase angle.

Once we have the spectral information of the signal, we can use that to perform different operations on the signal. We can use Complex Fourier Series 
to reconstruct the signal.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/drawing_with_fourier_series/maple.gif" title="drawing_animation" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Reconstructing the Signal. (Drawing the maple leaf with Circles.)
</div>

More about project and the code can be found here:  <a href="https://github.com/attheratefayez/drawing_with_fourier_series">Drawing with Fourier Series.</a> 

Learn more about: 

1. DFT: <a href="https://www.robots.ox.ac.uk/~sjrob/Teaching/SP/l7.pdf">Drawing with Fourier Series.</a> 
2. Complex Fourier Series: 
    - <a href="https://math24.net/complex-form-fourier-series.html">Math24: Complex Fourier Series.</a> 
    - <a href="https://npflueger.people.amherst.edu/math19/1201%20Complex%20Fourier%20Series.pdf">Nathan Pflueger Note: Complex Fourier Series.</a> 
