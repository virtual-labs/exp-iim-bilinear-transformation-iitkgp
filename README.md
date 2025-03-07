## Introduction

<div align="center">
<img src="experiment/images/iitkgp.png" width="10%">
</div>

<b>Discipline | <b>Electrical Engineering 
:--|:--|
<b> Lab | <b> Digital Control Laboratory
<b> Experiment|     <b> Compare the frequency responses with methods and for different sampling times and Exp 4

### About the Experiment 

The frequency response of a discrete system describes how the system responds to sinusoidal inputs of varying frequencies. It is a key concept in signal processing and helps in analyzing the system's behavior in the frequency domain.
For a discrete-time system, the frequency response is found by evaluating the system’s transfer function H(z) on the unit circle in the Z-plane, where z=e^jω. 
This results in H(e^jω), which represents the system's response to a sinusoidal input of frequency ω. </br>
The frequency response can be broken into two components: </br>
Magnitude Response: |H(e^jω)|, which indicates how much the system amplifies or attenuates the input at each frequency. </br>
Phase Response: arg⁡(H(e^jω)), which shows the phase shift the system introduces at each frequency. </br>

The frequency response is crucial in filter design (low-pass, high-pass, etc.), system identification, and stability analysis. It helps determine how a system modifies the amplitude and phase of sinusoidal components of a signal. 
A stable system's frequency response will not cause instability or excessive amplification at any frequency, making it a vital tool in both analysis and design of discrete systems.
</br></br>
The discretization is the process of converting the continuous system into discrete system. There are different discretization methods used for converting the continous system into discrete system.
Some methods tend to provide a better frequency-domain match between the original and converted systems, while others provide a better match in the time domain. </br> Following are the different methods:</br>
1. Zero Order Hold </br>
2. First Order Hold </br>
3. Impulse Invariance method </br>
4. Tustin Approximation </br>
5. Pole-Zero Mapping </br>
The application of z-transform gives an extremely useful mathematical description of a linear time invariant discrete time system.					
The transfer function of a linear time invariant discrete time system is, by defination, the z-transform of the impulse response of the system.

$$ G(z) = \frac{Z[y(k)]}{Z[r(k)]}  = \frac {Y(z)}{R(z)}	$$

when system is initially relaxed. </br>
Thus, the transfer function of a linear time invariant discrete time sytem is the ratio of the z-transforms of its output and input sequences, 
assuming that the system is initially relaxed. </br> </br>

The frequency response of the discrete time system is, 

$$ G(e^{j\omega}) =  \frac {Y(e^{j\omega})}{R(e^{j\omega})}	$$



<b>Subject matter expertise | <b> **Prof. Alok Kanti Deb**
:--|:--|
<b> Institute | <b>  **Indian Institute of Technology Kharagpur**
<b> Email id|     <b>  **alokkanti@ee.iitkgp.ac.in**
<b> Department |  **Department of Electrical Engineering**
<b>Webpage| <b> http://www.iitkgp.ac.in/department/EE/faculty/ee-alokkanti

### Contributors List

SrNo | Name | VLabs Developer or Integration Engineer | Designation | Department| Institute
:--|:--|:--|:--|:--|:--|
1 | **Kamal Sandeep Karreddula** | Developer | Research Scholar | Department of Electrical Engineering | IIT Kharagpur | 
2 | **Piyali Chattopadhyay** | Integration Engineer | Project Scientist | Department of Mechanical Engineering | IIT Kharagpur |


<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
