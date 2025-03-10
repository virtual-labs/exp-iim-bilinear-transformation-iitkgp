# Theory

<b><i>Impulse Invariance Method:</i></b> <br>
Using the impulse invariance method, <i>H(z)</i> is directly generated from <i>H(s)</i> using a mapping that depends on the sampling period and the locations of the poles of <i>H(s)</i>. 
Because the input is an impulse, the system transfer function <i>H(s)</i> is the same as the Laplace transform of the response <i>y(t)</i>.<br>
The method starts by expressing the Laplace transfer function <i>H(s)</i> in partial form

$$ H(s) = \sum_{i=1}^{N}\frac{A_i}{(s-p_i)} \tag{1}$$

where <i> N </i> is the order of the system, poles are located at the points <i>p<sub>i</sub></i>.<br>
Then the discrete system can be written as:

$$ H(z) = \sum_{i=1}^{N}\frac{T A_i}{(1-z^{-1} e^{Tp_i})} \tag{2}$$

where <i>T</i> is the sampling period for the analog system. This formula applies when the poles <i>p<sub>i</sub></i> are all distinct.<br>
The frequency response of the discrete system can be written as:

$$ H(e^{j\omega}) = \sum_{i=1}^{N}\frac{T A_i}{(1-e^{-j\omega} e^{Tp_i})} \tag{3}$$

In the case of a pole of order two, which pertains to the damping ratio &zeta;=1,

$$ H(z) = \sum_{i=1}^{N}\frac{T z e^{Tp_i}}{(e^{Tp_i}-z)^2} \tag{4}$$

The frequency response of the discrete system can be written as:

$$ H(e^{j\omega}) = \sum_{i=1}^{N}\frac{T e^{j\omega} e^{Tp_i}}{(e^{Tp_i}-e^{j\omega})^2} \tag{5}$$

<b><i>Bilinear Transform Method:</i></b> <br>
The bilinear transform is used in digital control theory and digital signal processing to transform continuous-time system representation to discrete-time and vice-versa. 
The bilinear transform is often used to convert a transfer function <i>H<sub>a</sub>(s)</i> of a linear time-invariant (LTI) in the continuous-time domain to 
a transfer function <i>H<sub>d</sub>(z)</i> of a linear shift-invariant in the discrete time domain. <br>
The bilinear transform is a first-order pade approximation of the natural logrithm function that is an exact mapping of the <i>z</i>-plane to the <i>s</i>-plane. When the Laplace transform is performed on a discrete-time signal, 
the result is precisely the <i>z</i>-transform of the discrete-time sequence with the substitute of <i>z = e<sup>sT</sup></i>

$$ z = e^{sT} $$

$$ \approx \frac{e^{sT/2}}{e^{-sT/2}}\ $$

$$ \approx \frac{1+\frac{sT}{2}}{1- \frac {sT}{2}}\tag{6} $$

where <i>T</i> is the numerical integration step size of the trapezoidal rule used in the bilinear transformation derivation 
or <i>T</i> is the sampling period.

$$ s = \frac{1}{T} ln(z) $$

$$ \approx \frac{2}{T} \frac{z -1}{z+1} $$

$$ \approx \frac{2}{T} \frac{1- z^{-1}}{1+z^{-1}}\tag{7} $$


The frequency response of the discrete system can be written as:


$$ H(z) = H(e^{j\omega})\tag{8} $$



<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>