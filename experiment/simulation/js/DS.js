


function inputChange(){
	
	if(document.getElementById('Ts').value >5){
		
	alert('maintain the range');	
		
	}
	
	
}

function refresh(){
//location.reload();	
/* document.getElementById('plotbucket').style.display = "none";
document.getElementById('chartContainer1').style.display = "none";
document.getElementById('chartContainer2').style.display = "none";
dataOPPoints=[];	
dataOPPoints1=[];
 */
 location.reload();
//document.getElementById('0.3fr').style.display = "none";



}

//var dataOPPoints=[];	///for plotting chart
//var dataOPPoints1=[];

///name change impulse

function impName(){
	document.getElementById("methodB").innerHTML ="Impulse Invariance Method: Freq. Resp.";
	document.getElementById('mchk').value=1;
	document.getElementById('rn').style.display = "block";
	
}
function biName(){
	document.getElementById("methodB").innerHTML ="Bilinear Transformation Method: Freq. Resp.";
	document.getElementById('mchk').value=2;
	document.getElementById('rn').style.display = "block";
	
}
function RunM(){
	if(document.getElementById('mchk').value == 1){
	IIM();
	IIMF();	
	}
	if(document.getElementById('mchk').value == 2){
	BTM(); 
	BTMF();	
	}
}



//////////////////////
function system(){
var outputText1;
var outputText2;
var outputText2_1;
var outputText3;
var R1;
var R2;
var Rt1;
var Rt2;
            document.getElementById('tfbody').style.display = "block";
			document.getElementById('tfbody2').style.display = "block";
	       document.getElementById('pfG').style.visibility = "visible";
		   document.getElementById('Disc').style.display = "block";
			document.getElementById('clr').style.display = "block";
			
            var b0 = document.getElementById('b_0').value;			
			var b1 = document.getElementById('b_1').value;
			var b2 = document.getElementById('b_2').value;
            var a0 = document.getElementById('a_0').value;
			var a1 = document.getElementById('a_1').value;
			var a2 = document.getElementById('a_2').value;
	        var T = document.getElementById('Ts').value;
			
			document.getElementById('tfn1').value = b0;
	        document.getElementById('tfn2').value = b1;
	        document.getElementById('tfn3').value = b2;
	        document.getElementById('tfd1').value = a0;
	        document.getElementById('tfd2').value = a1;
	        document.getElementById('tfd3').value = a2;
			
			outputText1=" G(s)= ["+b0+"s\u00B2+("+b1+")s+("+b2+ ")] / [" +a0+"s<sup>2</sup>+("+a1+")s+("+a2+ ")]";//+b0+"s\u00B2+"+b1+"s+"+b2+;
	        outputText2=" b<sub>0</sub>="+b0+";  b<sub>1</sub>="+b1+"; b<sub>2</sub>="+b2+ "; a<sub>0</sub>="+a0+";  a<sub>1</sub>="+a1+";  a<sub>2</sub>="+a2+ "";
			//document.getElementById("output_text1").innerHTML=outputText1;
			//document.getElementById("output_text2").innerHTML=outputText2;
		    
			var part=math.subtract(math.pow(a1,2),math.multiply(4,a0,a2));
			if (part < 0)
			{
			var part1=math.sqrt(part);
			var num1=math.add(-a1,part1);
			var den=math.multiply(2,a0);
			R11=math.divide(num1,den);
			
			R1 = math.complex(math.divide(math.round(math.multiply(R11.re,1000)),1000),math.divide(math.round(math.multiply(R11.im,1000)),1000));
			
			console.log(R1);
			console.log(R1.re);
			console.log(R1.im);
			
			var num2=math.add(-a1,-part1);
			
			R2=math.complex(R1.re,-R1.im);
			
			console.log(R2);
			Rt1="Root-1 = " +R1+ "";
			Rt2="Root-2 = " +R2+ "";
			
			document.getElementById("Rt_text1").innerHTML=Rt1;
			document.getElementById("Rt_text2").innerHTML=Rt2;
				
			var e0=math.subtract(b1,math.multiply(a1,math.divide(b0,a0)));
			var e1=math.subtract(b2,math.multiply(a2,math.divide(b0,a0)));
			
			
			////////
			var A1= math.divide(math.round(math.multiply(math.divide(math.add(math.multiply(e0,R1),e1),math.subtract(R1,R2)),1000)),1000);
			var A2= math.divide(math.round(math.multiply(math.divide(math.add(math.multiply(e0,R2),e1),math.subtract(R2,R1)),1000)),1000);
			
			console.log(e0);
			console.log(e1);
			console.log(A1);
			console.log(A2);
			
			document.getElementById('tfn4').value = b0;
	        document.getElementById('tfn5').value = b1;
	        document.getElementById('tfn6').value = b2;
			
			document.getElementById('tfd4').value = a0;
	        document.getElementById('tfd5').value = a1;
	        document.getElementById('tfd6').value = a2;
			
			document.getElementById('tfn7').value = b0;
	        document.getElementById('tfn8').value = e0;
	        document.getElementById('tfn9').value = e1;
			
	        document.getElementById('tfd7').value = a0;
	        document.getElementById('tfd8').value = a1;
	        document.getElementById('tfd9').value = a2;
			
			document.getElementById('tfn10').value = b0;
	        document.getElementById('tfn11').value = A1;
			//document.getElementById('tfn11').value = A1.re;
			//document.getElementById('tfn11_1').value = A1.im;
	        document.getElementById('tfn12').value = A2;
			//document.getElementById('tfn12').value = A2.re;
			//document.getElementById('tfn12_1').value = A2.im;
			
			
	        //document.getElementById('tfd10').value = -R1;
			R11=math.complex(-R1.re,-R1.im);
	        document.getElementById('tfd10').value = R11;
			//document.getElementById('tfd10').value = -R1.re;
			//document.getElementById('tfd10_1').value = -R1.im;
			R22=math.complex(-R2.re,-R2.im);
	        document.getElementById('tfd11').value = R22;
			//document.getElementById('tfd11').value = -R2.re;
			//document.getElementById('tfd11_1').value = -R2.im;
			
			
	
	        
			
			//document.getElementById('my-div').innerHTML = '<img src="./images/pf.png">';
			
			outputText2_1=" b<sub>0</sub>="+b0+";  b<sub>1</sub>="+b1+"; b<sub>2</sub>="+b2+ "; a<sub>0</sub>="+a0+";  a<sub>1</sub>="+a1+";  a<sub>2</sub>="+a2+ "";
			outputText3=" p<sub>1</sub>="+-R1+"; p<sub>2</sub>="+-R2+ " b<sub>0</sub>="+b0+"; e<sub>0</sub>="+e0+";  e<sub>1</sub>="+e1+";  A<sub>1</sub>="+A1+ "; A<sub>2</sub>="+A2+"";
			///////
				
				
			}
			
			else {
			
			var part1=math.sqrt(part);
			var num1=math.add(-a1,part1);
			var num2=math.add(-a1,-part1);
			var den=math.multiply(2,a0);
			R1=math.divide(num1,den);
			R2=math.divide(num2,den);
			console.log(R1);
			console.log(R2);
			Rt1="Root-1 = " +math.divide(num1,den)+ "";
			Rt2="Root-2 = " +math.divide(num2,den)+ "";
			
			document.getElementById("Rt_text1").innerHTML=Rt1;
			document.getElementById("Rt_text2").innerHTML=Rt2;
			
			//document.getElementById("Root_text1").innerHTML=-R1;
			//document.getElementById("Root_text2").innerHTML=-R2;
			
			if (R1==R2){
			var d = R1;
			
			var e0=math.add(b1,math.multiply(2,b0,d));
			var e1=math.subtract(b2,math.multiply(b0,d,d));
			
			var A1=math.add(b1,math.multiply(2,b0,d));
			var A2=math.add(b2,math.multiply(b1,d),math.multiply(b0,d,d));
			
			
			var b0a0 = math.divide(math.round(math.multiply(math.divide(b0,a0),100)),100);
			
			var rp1=1;
			var rp2=2;
			
			console.log(e0);
			console.log(e1);
			console.log(A1);
			console.log(A2);
			
			document.getElementById('tfn4').value = b0;
	        document.getElementById('tfn5').value = b1;
	        document.getElementById('tfn6').value = b2;
			
			document.getElementById('tfd4').value = a0;
	        document.getElementById('tfd5').value = a1;
	        document.getElementById('tfd6').value = a2;
			
			document.getElementById('tfn7').value = b0a0;
	        document.getElementById('tfn8').value = e0;
	        document.getElementById('tfn9').value = e1;
			
	        document.getElementById('tfd7').value = a0;
	        document.getElementById('tfd8').value = a1;
	        document.getElementById('tfd9').value = a2;
			
			document.getElementById('tfn10').value = b0;
	        document.getElementById('tfn11').value = A1;
			//document.getElementById('tfn11_1').value = 0;
	        document.getElementById('tfn12').value = A2;
			//document.getElementById('tfn12_1').value = 0;
			
			
	        document.getElementById('tfd10').value = -R1;
			//document.getElementById('tfd10_1').value = 0;
	        document.getElementById('tfd11').value = -R2;
			//document.getElementById('tfd11_1').value = 0;
			
			document.getElementById('rr1').value = rp1;
			document.getElementById('rr2').value = rp2;
			
			}
			else{
			
			var e0=math.subtract(b1,math.multiply(a1,math.divide(b0,a0)));
			var e1=math.subtract(b2,math.multiply(a2,math.divide(b0,a0)));
			
			var A1=math.divide(math.add(math.multiply(e0,R1),e1),math.subtract(R1,R2));
			var A2=math.divide(math.add(math.multiply(e0,R2),e1),math.subtract(R2,R1));
			
			console.log(e0);
			console.log(e1);
			console.log(A1);
			console.log(A2);
			
			var b0a0 = math.divide(math.round(math.multiply(math.divide(b0,a0),100)),100);
			
			var rp1=1;
			var rp2=1;
			
			
			console.log(e0);
			console.log(e1);
			console.log(A1);
			console.log(A2);
			
			document.getElementById('tfn4').value = b0;
	        document.getElementById('tfn5').value = b1;
	        document.getElementById('tfn6').value = b2;
			
			document.getElementById('tfd4').value = a0;
	        document.getElementById('tfd5').value = a1;
	        document.getElementById('tfd6').value = a2;
			
			document.getElementById('tfn7').value = b0a0;
	        document.getElementById('tfn8').value = e0;
	        document.getElementById('tfn9').value = e1;
			
	        document.getElementById('tfd7').value = a0;
	        document.getElementById('tfd8').value = a1;
	        document.getElementById('tfd9').value = a2;
			
			document.getElementById('tfn10').value = b0;
	        document.getElementById('tfn11').value = A1;
			//document.getElementById('tfn11_1').value = 0;
	        document.getElementById('tfn12').value = A2;
			//document.getElementById('tfn12_1').value = 0;
			
			
	        document.getElementById('tfd10').value = -R1;
			//document.getElementById('tfd10_1').value = 0;
	        document.getElementById('tfd11').value = -R2;
			//document.getElementById('tfd11_1').value = 0;
			document.getElementById('rr1').value = rp1;
			document.getElementById('rr2').value = rp2;
			
			
			
	        
	
	        
			
			//document.getElementById('my-div').innerHTML = '<img src="./images/pf.png">';
			
			outputText2_1=" b<sub>0</sub>="+b0+";  b<sub>1</sub>="+b1+"; b<sub>2</sub>="+b2+ "; a<sub>0</sub>="+a0+";  a<sub>1</sub>="+a1+";  a<sub>2</sub>="+a2+ "";
			outputText3=" p<sub>1</sub>="+-R1+"; p<sub>2</sub>="+-R2+ " b<sub>0</sub>="+b0+"; e<sub>0</sub>="+e0+";  e<sub>1</sub>="+e1+";  A<sub>1</sub>="+A1+ "; A<sub>2</sub>="+A2+"";
			
			//document.getElementById("output_text2_1").innerHTML=outputText2_1;
			//document.getElementById("output_text3").innerHTML=outputText3;
			}
			}
			}

////////////////////

function IIM(){
	var outputText4;
	var outputText4_1;
	
	
	 document.getElementById('tfbody3').style.display = "block"; 
	 
	 document.getElementById('DiscD').style.visibility = "visible";
	 
	        var b0 = document.getElementById('b_0').value;			
			var b1 = document.getElementById('b_1').value;
			var b2 = document.getElementById('b_2').value;
            var a0 = document.getElementById('a_0').value;
			var a1 = document.getElementById('a_1').value;
			var a2 = document.getElementById('a_2').value;
	        var T = document.getElementById('Ts').value;
			
           	
	        var part=math.subtract(math.pow(a1,2),math.multiply(4,a0,a2));
			
			if (part < 0)
			{
			var part1=math.sqrt(part);
			var num1=math.add(-a1,part1);
			var den=math.multiply(2,a0);
			R11=math.divide(num1,den);
			
			R1 = math.complex(math.divide(math.round(math.multiply(R11.re,1000)),1000),math.divide(math.round(math.multiply(R11.im,1000)),1000));
			
			console.log(R1);
			console.log(R1.re);
			console.log(R1.im);
			
			var num2=math.add(-a1,-part1);
			
			R2=math.complex(R1.re,-R1.im);
			
			console.log(R2);
			
			var e0=math.subtract(b1,math.multiply(a1,math.divide(b0,a0)));
			var e1=math.subtract(b2,math.multiply(a2,math.divide(b0,a0)));
			var A1=math.divide(math.add(math.multiply(e0,R1),e1),math.subtract(R1,R2));
			var A2=math.divide(math.add(math.multiply(e0,R2),e1),math.subtract(R2,R1));
	
	var TA1=math.divide(math.round(math.multiply(math.multiply(T,A1),1000)),1000);
	var TA2=math.divide(math.round(math.multiply(math.multiply(T,A2),1000)),1000);
	var eTp1=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R1)),1000)),1000);
	var eTp2=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R2)),1000)),1000);
	var c1=math.divide(math.round(math.multiply(math.add(eTp1,eTp2),1000)),1000);
	var c2=math.divide(math.round(math.multiply(math.multiply(eTp1,eTp2),1000)),1000);
	var d0=math.divide(math.round(math.multiply(math.add(TA1,TA2),1000)),1000);
	var d1=math.divide(math.round(math.multiply(math.add(math.multiply(TA1,eTp2),math.multiply(TA2,eTp1)),1000)),1000);
	var d2=0;//math.divide(math.round(math.multiply(math.multiply(math.multiply(T,0.5,b0),eTp1,eTp2),100)),100);
	
	
	        console.log(TA1);
			console.log(TA2);
			console.log(eTp1);
			console.log(eTp2);
	        
			/* document.getElementById('tfn13').value = b0;
	        document.getElementById('tfn14').value = TA1;	
	        document.getElementById('tfn15').value = TA2;
			
	        document.getElementById('tfn16').value = b0;
			document.getElementById('tfn17').value = TA1;
			document.getElementById('tfn18').value = TA2;
			 */
			document.getElementById('tfn19').value = d0;
			document.getElementById('tfn20').value = -d1;
			document.getElementById('tfn21').value = d2;
			
			/* document.getElementById('tfd12').value = eTp1;
	        document.getElementById('tfd13').value = eTp2;
			
			document.getElementById('tfd14').value = eTp1;
	        document.getElementById('tfd15').value = eTp2; */
			
			document.getElementById('tfd16').value = 1;
	        document.getElementById('tfd17').value = -c1;
			document.getElementById('tfd18').value = c2;
	        
			
			
			outputText4=" b<sub>0</sub>="+b0+";  TA<sub>1</sub>="+TA1+"; TA<sub>2</sub>="+TA2+ "; e<sup>Tp<sub>1</sub></sup>="+eTp1+";  e<sup>Tp<sub>2</sub></sup>="+eTp2+"";
			outputText4_1=" d<sub>0</sub>="+d0+"; d<sub>1</sub>="+d1+ "; d<sub>2</sub>="+d2+"; c<sub>1</sub>="+c1+";  c<sub>2</sub>="+c2+"";
			
				
			}
			
			else {
			
			var part1=math.sqrt(part);
			var num1=math.add(-a1,part1);
			var num2=math.add(-a1,-part1);
			var den=math.multiply(2,a0);
			R1=math.divide(num1,den);
			R2=math.divide(num2,den);
			
			if (R1==R2){
				
			var d = R1;
			
			var e0=math.add(b1,math.multiply(2,b0,d));
			var e1=math.subtract(b2,math.multiply(b0,d,d));
			
			var A1=math.add(b1,math.multiply(2,b0,d));
			var A2=math.add(b2,math.multiply(b1,d),math.multiply(b0,d,d));
			
			var b0a0 = math.divide(math.round(math.multiply(math.divide(b0,a0),100)),100);
			
			var Tb0a0 = math.divide(math.round(math.multiply(math.multiply(T,b0a0),100)),100);
			
			
			var TA1=math.divide(math.round(math.multiply(math.multiply(T,A1),1000)),1000);
			var TA2=math.divide(math.round(math.multiply(math.multiply(T,A2),1000)),1000);
			var eTp1=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R1)),1000)),1000);
			var eTp2=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R2)),1000)),1000);
			
			var c1=math.divide(math.round(math.multiply(math.multiply(2,eTp2),1000)),1000);
			var c2=math.divide(math.round(math.multiply(math.multiply(eTp1,eTp2),1000)),1000);
			
			var d0=math.divide(math.round(math.multiply(math.add(Tb0a0,TA1),1000)),1000);
			var d1=math.divide(math.round(math.multiply(math.add(math.multiply(-2,b0,eTp2,T),-math.multiply(TA1,eTp1),math.multiply(T,TA2,eTp1)),1000)),1000);
			
			//var d0=math.divide(math.round(math.multiply(math.add(TA1,TA2),1000)),1000);
			//var d1=math.divide(math.round(math.multiply(math.add(math.multiply(TA1,eTp2),math.multiply(TA2,eTp1)),1000)),1000);
			
			var d2=0;//math.divide(math.round(math.multiply(math.multiply(b0,eTp1,eTp2),1000)),1000);//0;//math.divide(math.round(math.multiply(math.multiply(math.multiply(T,0.5,b0),eTp1,eTp2),100)),100);
	
	
	        console.log(A1);
			console.log(A2);
			console.log(d0);
			console.log(d1);
			console.log(d2);
			console.log(c1);
			console.log(c2);
	        
			/* document.getElementById('tfn13').value = b0;
	        document.getElementById('tfn14').value = TA1;	
	        document.getElementById('tfn15').value = TA2;
			
	        document.getElementById('tfn16').value = b0;
			document.getElementById('tfn17').value = TA1;
			document.getElementById('tfn18').value = TA2; */
			
			document.getElementById('tfn19').value = d0;
			document.getElementById('tfn20').value = d1;
			document.getElementById('tfn21').value = d2; 
			
			/* document.getElementById('tfd12').value = eTp1;
	        document.getElementById('tfd13').value = eTp2;
			
			document.getElementById('tfd14').value = eTp1;
	        document.getElementById('tfd15').value = eTp2; */
			
			document.getElementById('tfd16').value = 1;
	        document.getElementById('tfd17').value = -c1;
			document.getElementById('tfd18').value = c2;  
	        
			
			}
			
			else {
			
			var e0=math.subtract(b1,math.multiply(a1,math.divide(b0,a0)));
			var e1=math.subtract(b2,math.multiply(a2,math.divide(b0,a0)));
			var A1=math.divide(math.add(math.multiply(e0,R1),e1),math.subtract(R1,R2));
			var A2=math.divide(math.add(math.multiply(e0,R2),e1),math.subtract(R2,R1));
	
			var TA1=math.divide(math.round(math.multiply(math.multiply(T,A1),1000)),1000);
			var TA2=math.divide(math.round(math.multiply(math.multiply(T,A2),1000)),1000);
			var eTp1=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R1)),1000)),1000);
			var eTp2=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R2)),1000)),1000);
			var c1=math.divide(math.round(math.multiply(math.add(eTp1,eTp2),1000)),1000);
			var c2=math.divide(math.round(math.multiply(math.multiply(eTp1,eTp2),1000)),1000);
			var d0=math.divide(math.round(math.multiply(math.add(TA1,TA2),1000)),1000);
			var d1=math.divide(math.round(math.multiply(math.add(math.multiply(TA1,eTp2),math.multiply(TA2,eTp1)),1000)),1000);
			var d2=0;//math.divide(math.round(math.multiply(math.multiply(math.multiply(T,0.5,b0),eTp1,eTp2),100)),100);
	
	
	        console.log(TA1);
			console.log(TA2);
			console.log(eTp1);
			console.log(eTp2);
	        
			/* document.getElementById('tfn13').value = b0;
	        document.getElementById('tfn14').value = TA1;	
	        document.getElementById('tfn15').value = TA2;
			
	        document.getElementById('tfn16').value = b0;
			document.getElementById('tfn17').value = TA1;
			document.getElementById('tfn18').value = TA2; */
			
			document.getElementById('tfn19').value = d0;
			document.getElementById('tfn20').value = -d1;
			document.getElementById('tfn21').value = d2;
			
			/* document.getElementById('tfd12').value = eTp1;
	        document.getElementById('tfd13').value = eTp2;
			
			document.getElementById('tfd14').value = eTp1;
	        document.getElementById('tfd15').value = eTp2; */
			
			document.getElementById('tfd16').value = 1;
	        document.getElementById('tfd17').value = -c1;
			document.getElementById('tfd18').value = c2;
	        
			}
			
			outputText4=" b<sub>0</sub>="+b0+";  TA<sub>1</sub>="+TA1+"; TA<sub>2</sub>="+TA2+ "; e<sup>Tp<sub>1</sub></sup>="+eTp1+";  e<sup>Tp<sub>2</sub></sup>="+eTp2+"";
			outputText4_1=" d<sub>0</sub>="+d0+"; d<sub>1</sub>="+d1+ "; d<sub>2</sub>="+d2+"; c<sub>1</sub>="+c1+";  c<sub>2</sub>="+c2+"";
			
			/* document.getElementById("output_text4").innerHTML=outputText4;
			document.getElementById("output_text4_1").innerHTML=outputText4_1; */
			}
}
var incr1 =0,incr2=0;
function IIMF(){
	var outputText5;
	var outputText5_1;
	incr1=1;
	if(incr1==1 && incr2==1){
		document.getElementById("run3").style.display="block";
		document.getElementById("run32").style.display="block";
		
		document.getElementById("run4").style.display="block";
		document.getElementById("run42").style.display="block";
		
	document.getElementById("run5").style.display="block";
	document.getElementById("run52").style.display="block";
	
	document.getElementById("run6").style.display="none";
	document.getElementById("run62").style.display="none";
	}	
		
	if(incr1==1 && incr2!=1){	
	document.getElementById("run3").style.display="block";
	document.getElementById("run32").style.display="block";
	
	document.getElementById("run5").style.display="none";
	document.getElementById("run52").style.display="none";
	
	document.getElementById("run4").style.display="none";
	document.getElementById("run42").style.display="none";
	
	document.getElementById("run6").style.display="block";
	document.getElementById("run62").style.display="block";
	}
	if(incr1!=1 && incr2==1){	
	document.getElementById("run3").style.display="none";
	document.getElementById("run32").style.display="none";
	
	document.getElementById("run5").style.display="none";
	document.getElementById("run52").style.display="none";
	
	document.getElementById("run4").style.display="block";
	document.getElementById("run42").style.display="block";
	
	document.getElementById("run6").style.display="block";
	document.getElementById("run62").style.display="block";
	}
	
	
	 document.getElementById('tfbody4').style.display = "block"; 
	  document.getElementById('PlotFreq').style.display = "block";
	  document.getElementById('PlotFreqLog').style.display = "block";
	   
	  
	        var b0 = document.getElementById('b_0').value;			
			var b1 = document.getElementById('b_1').value;
			var b2 = document.getElementById('b_2').value;
            var a0 = document.getElementById('a_0').value;
			var a1 = document.getElementById('a_1').value;
			var a2 = document.getElementById('a_2').value;
	        var T = document.getElementById('Ts').value;
			
           	
	        /* var part=math.sqrt(math.subtract(math.pow(a1,2),math.multiply(4,a0,a2)));
			var num1=math.add(-a1,part);
			var num2=math.add(-a1,-part);
			var den=math.multiply(2,a0);
			R1=math.divide(num1,den);
			R2=math.divide(num2,den);
			
			var e0=math.subtract(b1,math.multiply(a1,math.divide(b0,a0)));
			var e1=math.subtract(b2,math.multiply(a2,math.divide(b0,a0)));
			var A1=math.divide(math.add(math.multiply(e0,R1),e1),math.subtract(R1,R2));
			var A2=math.divide(math.add(math.multiply(e0,R2),e1),math.subtract(R2,R1));
	
	var TA1=math.divide(math.round(math.multiply(math.multiply(T,A1),100)),100);
	var TA2=math.divide(math.round(math.multiply(math.multiply(T,A2),100)),100);
	var eTp1=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R1)),100)),100);
	var eTp2=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R2)),100)),100);
	var c1=math.divide(math.round(math.multiply(math.add(eTp1,eTp2),100)),100);
	var c2=math.divide(math.round(math.multiply(math.multiply(eTp1,eTp2),100)),100);
	var d0=math.divide(math.round(math.multiply(math.add(TA1,TA2),100)),100);
	var d1=math.divide(math.round(math.multiply(math.add(math.multiply(TA1,eTp2),math.multiply(TA2,eTp1)),100)),100);
	var d2=0;//math.divide(math.round(math.multiply(math.multiply(b0,eTp1,eTp2),100)),100);
	
	        
			document.getElementById('tfnf13').value = b0;
	        document.getElementById('tfnf14').value = TA1;	
	        document.getElementById('tfnf15').value = TA2;
			
	        document.getElementById('tfnf16').value = b0;
			document.getElementById('tfnf17').value = TA1;
			document.getElementById('tfnf18').value = TA2;
			
			document.getElementById('tfnf19').value = d0;
			document.getElementById('tfnf20').value = d1;
			document.getElementById('tfnf21').value = d2;
			
			document.getElementById('tfdf12').value = eTp1;
	        document.getElementById('tfdf13').value = eTp2;
			
			document.getElementById('tfdf14').value = eTp1;
	        document.getElementById('tfdf15').value = eTp2;
			
			document.getElementById('tfdf16').value = 1;
	        document.getElementById('tfdf17').value = -c1;
			document.getElementById('tfdf18').value = c2;
	        
			
			
			/* outputText4=" b<sub>0</sub>="+b0+";  TA<sub>1</sub>="+TA1+"; TA<sub>2</sub>="+TA2+ "; e<sup>Tp<sub>1</sub></sup>="+eTp1+";  e<sup>Tp<sub>2</sub></sup>="+eTp2+"";
			outputText4_1=" d<sub>0</sub>="+d0+"; d<sub>1</sub>="+d1+ "; d<sub>2</sub>="+d2+"; c<sub>1</sub>="+c1+";  c<sub>2</sub>="+c2+"";
			
			document.getElementById("output_text5").innerHTML=outputText5;
			document.getElementById("output_text5_1").innerHTML=outputText5_1; */ 
			
			var part=math.subtract(math.pow(a1,2),math.multiply(4,a0,a2));
			
			if (part < 0)
			{
			var part1=math.sqrt(part);
			var num1=math.add(-a1,part1);
			var den=math.multiply(2,a0);
			R11=math.divide(num1,den);
			
			R1 = math.complex(math.divide(math.round(math.multiply(R11.re,1000)),1000),math.divide(math.round(math.multiply(R11.im,1000)),1000));
			
			console.log(R1);
			console.log(R1.re);
			console.log(R1.im);
			
			var num2=math.add(-a1,-part1);
			
			R2=math.complex(R1.re,-R1.im);
			
			console.log(R2);
			
			var e0=math.subtract(b1,math.multiply(a1,math.divide(b0,a0)));
			var e1=math.subtract(b2,math.multiply(a2,math.divide(b0,a0)));
			var A1=math.divide(math.add(math.multiply(e0,R1),e1),math.subtract(R1,R2));
			var A2=math.divide(math.add(math.multiply(e0,R2),e1),math.subtract(R2,R1));
	
	var TA1=math.divide(math.round(math.multiply(math.multiply(T,A1),1000)),1000);
	var TA2=math.divide(math.round(math.multiply(math.multiply(T,A2),1000)),1000);
	var eTp1=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R1)),1000)),1000);
	var eTp2=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R2)),1000)),1000);
	var c1=math.divide(math.round(math.multiply(math.add(eTp1,eTp2),1000)),1000);
	var c2=math.divide(math.round(math.multiply(math.multiply(eTp1,eTp2),1000)),1000);
	var d0=math.divide(math.round(math.multiply(math.add(TA1,TA2),1000)),1000);
	var d1=math.divide(math.round(math.multiply(math.add(math.multiply(TA1,eTp2),math.multiply(TA2,eTp1)),1000)),1000);
	var d2=0;//math.divide(math.round(math.multiply(math.multiply(math.multiply(T,0.5,b0),eTp1,eTp2),100)),100);
	
	
	        console.log(TA1);
			console.log(TA2);
			console.log(eTp1);
			console.log(eTp2);
	        
			/* document.getElementById('tfn13').value = b0;
	        document.getElementById('tfn14').value = TA1;	
	        document.getElementById('tfn15').value = TA2;
			
	        document.getElementById('tfn16').value = b0;
			document.getElementById('tfn17').value = TA1;
			document.getElementById('tfn18').value = TA2;
			 */
			document.getElementById('tfnf19').value = d0;
			document.getElementById('tfnf20').value = -d1;
			document.getElementById('tfnf21').value = d2;
			
			/* document.getElementById('tfd12').value = eTp1;
	        document.getElementById('tfd13').value = eTp2;
			
			document.getElementById('tfd14').value = eTp1;
	        document.getElementById('tfd15').value = eTp2; */
			
			document.getElementById('tfdf16').value = 1;
	        document.getElementById('tfdf17').value = -c1;
			document.getElementById('tfdf18').value = c2;
	        
			
			
			/* outputText4=" b<sub>0</sub>="+b0+";  TA<sub>1</sub>="+TA1+"; TA<sub>2</sub>="+TA2+ "; e<sup>Tp<sub>1</sub></sup>="+eTp1+";  e<sup>Tp<sub>2</sub></sup>="+eTp2+"";
			outputText4_1=" d<sub>0</sub>="+d0+"; d<sub>1</sub>="+d1+ "; d<sub>2</sub>="+d2+"; c<sub>1</sub>="+c1+";  c<sub>2</sub>="+c2+""; */
			
				
			}
			
			else {
			
			var part1=math.sqrt(part);
			var num1=math.add(-a1,part1);
			var num2=math.add(-a1,-part1);
			var den=math.multiply(2,a0);
			R1=math.divide(num1,den);
			R2=math.divide(num2,den);
			
			if (R1==R2){
				
			var d = R1;
			
			var e0=math.add(b1,math.multiply(2,b0,d));
			var e1=math.subtract(b2,math.multiply(b0,d,d));
			
			var A1=math.add(b1,math.multiply(2,b0,d));
			var A2=math.add(b2,math.multiply(b1,d),math.multiply(b0,d,d));
			
			var b0a0 = math.divide(math.round(math.multiply(math.divide(b0,a0),100)),100);
			
			var Tb0a0 = math.divide(math.round(math.multiply(math.multiply(T,b0a0),100)),100);
			
			
			var TA1=math.divide(math.round(math.multiply(math.multiply(T,A1),1000)),1000);
			var TA2=math.divide(math.round(math.multiply(math.multiply(T,A2),1000)),1000);
			var eTp1=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R1)),1000)),1000);
			var eTp2=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R2)),1000)),1000);
			
			var c1=math.divide(math.round(math.multiply(math.multiply(2,eTp2),1000)),1000);
			var c2=math.divide(math.round(math.multiply(math.multiply(eTp1,eTp2),1000)),1000);
			
			var d0=math.divide(math.round(math.multiply(math.add(Tb0a0,TA1),1000)),1000);
			var d1=math.divide(math.round(math.multiply(math.add(math.multiply(-2,b0,eTp2,T),-math.multiply(TA1,eTp1),math.multiply(T,TA2,eTp1)),1000)),1000);
			
			//var d0=math.divide(math.round(math.multiply(math.add(TA1,TA2),1000)),1000);
			//var d1=math.divide(math.round(math.multiply(math.add(math.multiply(TA1,eTp2),math.multiply(TA2,eTp1)),1000)),1000);
			
			var d2=0;//math.divide(math.round(math.multiply(math.multiply(b0,eTp1,eTp2),1000)),1000);//0;//math.divide(math.round(math.multiply(math.multiply(math.multiply(T,0.5,b0),eTp1,eTp2),100)),100);
	
	
	        console.log(A1);
			console.log(A2);
			console.log(d0);
			console.log(d1);
			console.log(d2);
			console.log(c1);
			console.log(c2);
	        
			/* document.getElementById('tfn13').value = b0;
	        document.getElementById('tfn14').value = TA1;	
	        document.getElementById('tfn15').value = TA2;
			
	        document.getElementById('tfn16').value = b0;
			document.getElementById('tfn17').value = TA1;
			document.getElementById('tfn18').value = TA2; */
			
			document.getElementById('tfnf19').value = d0;
			document.getElementById('tfnf20').value = d1;
			document.getElementById('tfnf21').value = d2; 
			
			/* document.getElementById('tfd12').value = eTp1;
	        document.getElementById('tfd13').value = eTp2;
			
			document.getElementById('tfd14').value = eTp1;
	        document.getElementById('tfd15').value = eTp2; */
			
			document.getElementById('tfdf16').value = 1;
	        document.getElementById('tfdf17').value = -c1;
			document.getElementById('tfdf18').value = c2;  
	        
			
			}
			
			else {
			
			var e0=math.subtract(b1,math.multiply(a1,math.divide(b0,a0)));
			var e1=math.subtract(b2,math.multiply(a2,math.divide(b0,a0)));
			var A1=math.divide(math.add(math.multiply(e0,R1),e1),math.subtract(R1,R2));
			var A2=math.divide(math.add(math.multiply(e0,R2),e1),math.subtract(R2,R1));
	
			var TA1=math.divide(math.round(math.multiply(math.multiply(T,A1),1000)),1000);
			var TA2=math.divide(math.round(math.multiply(math.multiply(T,A2),1000)),1000);
			var eTp1=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R1)),1000)),1000);
			var eTp2=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R2)),1000)),1000);
			var c1=math.divide(math.round(math.multiply(math.add(eTp1,eTp2),1000)),1000);
			var c2=math.divide(math.round(math.multiply(math.multiply(eTp1,eTp2),1000)),1000);
			var d0=math.divide(math.round(math.multiply(math.add(TA1,TA2),1000)),1000);
			var d1=math.divide(math.round(math.multiply(math.add(math.multiply(TA1,eTp2),math.multiply(TA2,eTp1)),1000)),1000);
			var d2=0;//math.divide(math.round(math.multiply(math.multiply(math.multiply(T,0.5,b0),eTp1,eTp2),100)),100);
	
	
	        console.log(TA1);
			console.log(TA2);
			console.log(eTp1);
			console.log(eTp2);
	        
			/* document.getElementById('tfn13').value = b0;
	        document.getElementById('tfn14').value = TA1;	
	        document.getElementById('tfn15').value = TA2;
			
	        document.getElementById('tfn16').value = b0;
			document.getElementById('tfn17').value = TA1;
			document.getElementById('tfn18').value = TA2; */
			
			document.getElementById('tfnf19').value = d0;
			document.getElementById('tfnf20').value = -d1;
			document.getElementById('tfnf21').value = d2;
			
			/* document.getElementById('tfd12').value = eTp1;
	        document.getElementById('tfd13').value = eTp2;
			
			document.getElementById('tfd14').value = eTp1;
	        document.getElementById('tfd15').value = eTp2; */
			
			document.getElementById('tfdf16').value = 1;
	        document.getElementById('tfdf17').value = -c1;
			document.getElementById('tfdf18').value = c2;
	        
			}
			
			/* outputText4=" b<sub>0</sub>="+b0+";  TA<sub>1</sub>="+TA1+"; TA<sub>2</sub>="+TA2+ "; e<sup>Tp<sub>1</sub></sup>="+eTp1+";  e<sup>Tp<sub>2</sub></sup>="+eTp2+"";
			outputText4_1=" d<sub>0</sub>="+d0+"; d<sub>1</sub>="+d1+ "; d<sub>2</sub>="+d2+"; c<sub>1</sub>="+c1+";  c<sub>2</sub>="+c2+""; */
			
			/* document.getElementById("output_text4").innerHTML=outputText4;
			document.getElementById("output_text4_1").innerHTML=outputText4_1; */
			}
			
			
}

function BTM(){
	var outputText6;
	var outputText6_1;
	
	 document.getElementById('tfbody5').style.display = "block";
	  document.getElementById('DiscD').style.visibility = "visible";
	
	        var b0 = document.getElementById('b_0').value;			
			var b1 = document.getElementById('b_1').value;
			var b2 = document.getElementById('b_2').value;
            var a0 = document.getElementById('a_0').value;
			var a1 = document.getElementById('a_1').value;
			var a2 = document.getElementById('a_2').value;
	        var T = document.getElementById('Ts').value; 
	
	        var part=math.subtract(math.pow(a1,2),math.multiply(4,a0,a2));
	
			var part1=math.sqrt(part);
			var num1=math.add(-a1,part1);
			var num2=math.add(-a1,-part1);
			var den=math.multiply(2,a0);
			R1=math.divide(num1,den);
			R2=math.divide(num2,den);
			
			if (R1==R2){
				
			/* var k=math.divide(2,T);
			var b0k2=math.multiply(b0,math.pow(k,2));
			var b1k=math.multiply(b1,k);
			var a0k2=math.multiply(a0,math.pow(k,2));
			var a1k=math.multiply(a1,k); */
			
			/* var d0=math.divide(math.round(math.multiply(math.add(math.divide(math.multiply(b0,4),math.multiply(T,T)),math.divide(math.multiply(b1,2),T),b2),1000)),1000);
			var d1=math.divide(math.round(math.multiply(math.add(math.divide(math.multiply(b0,-8),math.multiply(T,T)),math.multiply(b2,2)),1000)),1000);
			var d2=math.divide(math.round(math.multiply(math.add(math.divide(math.multiply(b0,4),math.multiply(T,T)),math.divide(math.multiply(b1,-2),T),b2),1000)),1000);
			
			var c0=math.divide(math.round(math.multiply(math.add(math.divide(4,math.multiply(T,T)),math.divide(math.multiply(R1,4),T),math.multiply(R1,R1)),1000)),1000);
			
			var c1=math.divide(math.round(math.multiply(math.add(math.divide(-8,math.multiply(T,T)),math.multiply(R1,R1,2)),1000)),1000);
			var c2=math.divide(math.round(math.multiply(math.add(math.divide(4,math.multiply(T,T)),math.divide(math.multiply(R1,-4),T),math.multiply(R1,R1)),1000)),1000);
			
			var d0c0 = math.divide(math.round(math.multiply(math.divide(d0,c0),1000)),1000);
			var d1c0 = math.divide(math.round(math.multiply(math.divide(d1,c0),1000)),1000);
			var d2c0 = math.divide(math.round(math.multiply(math.divide(d2,c0),1000)),1000);
			
			var c1c0 = math.divide(math.round(math.multiply(math.divide(c1,c0),1000)),1000);
			var c2c0 = math.divide(math.round(math.multiply(math.divide(c2,c0),1000)),1000);
			
			
			document.getElementById('tfn22').value = d0c0;
	        document.getElementById('tfn23').value = d1c0;	
	        document.getElementById('tfn24').value = d2c0;
			        			
						
			document.getElementById('tfd19').value = 1;
	        document.getElementById('tfd20').value = c1c0;
			document.getElementById('tfd21').value = c2c0; */
			
			var k=math.divide(2,T);
			var b0k2=math.multiply(b0,math.pow(k,2));
			var b1k=math.multiply(b1,k);
			var a0k2=math.multiply(a0,math.pow(k,2));
			var a1k=math.multiply(a1,k);
			
			var d0=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,b1k,b2),math.add(a0k2,a1k,a2)),1000)),1000);
			var d1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*b2,2*b0k2),math.add(a0k2,a1k,a2)),1000)),1000);
			var d2=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,-b1k,b2),math.add(a0k2,a1k,a2)),1000)),1000);
			
			var c1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*a2,2*a0k2),math.add(a0k2,a1k,a2)),1000)),1000);
			var c2=math.divide(math.round(math.multiply(math.divide(math.add(a0k2,-a1k,a2),math.add(a0k2,a1k,a2)),1000)),1000);
			
			document.getElementById('tfn22').value = d0;
	        document.getElementById('tfn23').value = d1;	
	        document.getElementById('tfn24').value = d2;
			        			
						
			document.getElementById('tfd19').value = 1;
	        document.getElementById('tfd20').value = c1;
			document.getElementById('tfd21').value = c2;
				
			}
			
			else{
	
	        var k=math.divide(2,T);
			var b0k2=math.multiply(b0,math.pow(k,2));
			var b1k=math.multiply(b1,k);
			var a0k2=math.multiply(a0,math.pow(k,2));
			var a1k=math.multiply(a1,k);
			
			var d0=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,b1k,b2),math.add(a0k2,a1k,a2)),1000)),1000);
			var d1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*b2,2*b0k2),math.add(a0k2,a1k,a2)),1000)),1000);
			var d2=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,-b1k,b2),math.add(a0k2,a1k,a2)),1000)),1000);
			
			var c1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*a2,2*a0k2),math.add(a0k2,a1k,a2)),1000)),1000);
			var c2=math.divide(math.round(math.multiply(math.divide(math.add(a0k2,-a1k,a2),math.add(a0k2,a1k,a2)),1000)),1000);
			
			document.getElementById('tfn22').value = d0;
	        document.getElementById('tfn23').value = d1;	
	        document.getElementById('tfn24').value = d2;
			        			
						
			document.getElementById('tfd19').value = 1;
	        document.getElementById('tfd20').value = c1;
			document.getElementById('tfd21').value = c2;
			}
	
	        /* outputText4=" d<sub>0</sub>="+d0+"; d<sub>1</sub>="+d1+ "; d<sub>2</sub>="+d2+";";
			outputText4_1=" c<sub>1</sub>="+c1+";  c<sub>2</sub>="+c2+"";
			
			document.getElementById("output_text6").innerHTML=outputText6;
			document.getElementById("output_text6_1").innerHTML=outputText6_1; */
}

function BTMF(){
	var outputText7;
	var outputText7_1;
	incr2=1;
	if(incr1==1 && incr2==1){
		document.getElementById("run3").style.display="block";
		document.getElementById("run32").style.display="block";
		
		document.getElementById("run4").style.display="block";
		document.getElementById("run42").style.display="block";
		
	document.getElementById("run5").style.display="block";
	document.getElementById("run52").style.display="block";

	document.getElementById("run6").style.display="none";
	document.getElementById("run62").style.display="none";
	}	
		
	if(incr1!=1 && incr2==1){	
	document.getElementById("run3").style.display="none";
	document.getElementById("run32").style.display="none";
	
	document.getElementById("run5").style.display="none";
	document.getElementById("run52").style.display="none";
	
	document.getElementById("run4").style.display="block";
	document.getElementById("run42").style.display="block";
	
	document.getElementById("run6").style.display="block";
	document.getElementById("run62").style.display="block";
	}
	if(incr1==1 && incr2!=1){	
	document.getElementById("run3").style.display="block";
	document.getElementById("run32").style.display="block";
	
	document.getElementById("run6").style.display="block";
	document.getElementById("run62").style.display="block";
	
	document.getElementById("run5").style.display="none";
	document.getElementById("run52").style.display="none";
	
	document.getElementById("run4").style.display="none";
	document.getElementById("run42").style.display="none";
	}
	
	 document.getElementById('tfbody6').style.display = "block";
	  document.getElementById('PlotFreq').style.display = "block";
	  document.getElementById('PlotFreqLog').style.display = "block";
	 
	        var b0 = document.getElementById('b_0').value;			
			var b1 = document.getElementById('b_1').value;
			var b2 = document.getElementById('b_2').value;
            var a0 = document.getElementById('a_0').value;
			var a1 = document.getElementById('a_1').value;
			var a2 = document.getElementById('a_2').value;
	        var T = document.getElementById('Ts').value; 
	
	        var part=math.subtract(math.pow(a1,2),math.multiply(4,a0,a2));
	
			var part1=math.sqrt(part);
			var num1=math.add(-a1,part1);
			var num2=math.add(-a1,-part1);
			var den=math.multiply(2,a0);
			R1=math.divide(num1,den);
			R2=math.divide(num2,den);
			
			if (R1==R2){
				
			/* var k=math.divide(2,T);
			var b0k2=math.multiply(b0,math.pow(k,2));
			var b1k=math.multiply(b1,k);
			var a0k2=math.multiply(a0,math.pow(k,2));
			var a1k=math.multiply(a1,k); */
			
			/* var d0=math.divide(math.round(math.multiply(math.add(math.divide(math.multiply(b0,4),math.multiply(T,T)),math.divide(math.multiply(b1,2),T),b2),1000)),1000);
			var d1=math.divide(math.round(math.multiply(math.add(math.divide(math.multiply(b0,-8),math.multiply(T,T)),math.multiply(b2,2)),1000)),1000);
			var d2=math.divide(math.round(math.multiply(math.add(math.divide(math.multiply(b0,4),math.multiply(T,T)),math.divide(math.multiply(b1,-2),T),b2),1000)),1000);
			
			var c0=math.divide(math.round(math.multiply(math.add(math.divide(4,math.multiply(T,T)),math.divide(math.multiply(R1,4),T),math.multiply(R1,R1)),1000)),1000);
			
			var c1=math.divide(math.round(math.multiply(math.add(math.divide(-8,math.multiply(T,T)),math.multiply(R1,R1,2)),1000)),1000);
			var c2=math.divide(math.round(math.multiply(math.add(math.divide(4,math.multiply(T,T)),math.divide(math.multiply(R1,-4),T),math.multiply(R1,R1)),1000)),1000);
			
			var d0c0 = math.divide(math.round(math.multiply(math.divide(d0,c0),1000)),1000);
			var d1c0 = math.divide(math.round(math.multiply(math.divide(d1,c0),1000)),1000);
			var d2c0 = math.divide(math.round(math.multiply(math.divide(d2,c0),1000)),1000);
			
			var c1c0 = math.divide(math.round(math.multiply(math.divide(c1,c0),1000)),1000);
			var c2c0 = math.divide(math.round(math.multiply(math.divide(c2,c0),1000)),1000);
			
			
			document.getElementById('tfn22').value = d0c0;
	        document.getElementById('tfn23').value = d1c0;	
	        document.getElementById('tfn24').value = d2c0;
			        			
						
			document.getElementById('tfd19').value = 1;
	        document.getElementById('tfd20').value = c1c0;
			document.getElementById('tfd21').value = c2c0; */
			
			var k=math.divide(2,T);
			var b0k2=math.multiply(b0,math.pow(k,2));
			var b1k=math.multiply(b1,k);
			var a0k2=math.multiply(a0,math.pow(k,2));
			var a1k=math.multiply(a1,k);
			
			var d0=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,b1k,b2),math.add(a0k2,a1k,a2)),1000)),1000);
			var d1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*b2,2*b0k2),math.add(a0k2,a1k,a2)),1000)),1000);
			var d2=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,-b1k,b2),math.add(a0k2,a1k,a2)),1000)),1000);
			
			var c1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*a2,2*a0k2),math.add(a0k2,a1k,a2)),1000)),1000);
			var c2=math.divide(math.round(math.multiply(math.divide(math.add(a0k2,-a1k,a2),math.add(a0k2,a1k,a2)),1000)),1000);
			
			document.getElementById('tfnf22').value = d0;
	        document.getElementById('tfnf23').value = d1;	
	        document.getElementById('tfnf24').value = d2;
			        			
						
			document.getElementById('tfdf19').value = 1;
	        document.getElementById('tfdf20').value = c1;
			document.getElementById('tfdf21').value = c2;
				
			}
			
			else{
	
	        var k=math.divide(2,T);
			var b0k2=math.multiply(b0,math.pow(k,2));
			var b1k=math.multiply(b1,k);
			var a0k2=math.multiply(a0,math.pow(k,2));
			var a1k=math.multiply(a1,k);
			
			var d0=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,b1k,b2),math.add(a0k2,a1k,a2)),1000)),1000);
			var d1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*b2,2*b0k2),math.add(a0k2,a1k,a2)),1000)),1000);
			var d2=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,-b1k,b2),math.add(a0k2,a1k,a2)),1000)),1000);
			
			var c1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*a2,2*a0k2),math.add(a0k2,a1k,a2)),1000)),1000);
			var c2=math.divide(math.round(math.multiply(math.divide(math.add(a0k2,-a1k,a2),math.add(a0k2,a1k,a2)),1000)),1000);
			
			document.getElementById('tfnf22').value = d0;
	        document.getElementById('tfnf23').value = d1;	
	        document.getElementById('tfnf24').value = d2;
			        			
						
			document.getElementById('tfdf19').value = 1;
	        document.getElementById('tfdf20').value = c1;
			document.getElementById('tfdf21').value = c2;
			}
	 
	       
}



var dataOPPoints=[];	///for plotting chart linear
var dataOPPoints1=[];



///LINEAR SCALE
//////////////////////// IIM 
var dArray1=[],dArray2=[],dArray3=[],dArray4=[];///for method comparison
var DatafTs = [],DatapTs = [], inc1=0, spstore1=[];///for iim Ts compare
var chart1, chart2;
function IIM_fr(){
	
	var dataOPPoints1=[];	///for plotting chart
    var dataOPPoints2=[];
	
	        var b0 = document.getElementById('b_0').value;			
			var b1 = document.getElementById('b_1').value;
			var b2 = document.getElementById('b_2').value;
            var a0 = document.getElementById('a_0').value;
			var a1 = document.getElementById('a_1').value;
			var a2 = document.getElementById('a_2').value;
	        var T = document.getElementById('Ts').value;
			spstore1.push(T);        
	
	var part=math.subtract(math.pow(a1,2),math.multiply(4,a0,a2));
			
			if (part < 0)
			{
			var part1=math.sqrt(part);
			var num1=math.add(-a1,part1);
			var den=math.multiply(2,a0);
			R11=math.divide(num1,den);
			
			R1 = math.complex(math.divide(math.round(math.multiply(R11.re,1000)),1000),math.divide(math.round(math.multiply(R11.im,1000)),1000));
			
			console.log(R1);
			console.log(R1.re);
			console.log(R1.im);
			
			var num2=math.add(-a1,-part1);
			
			R2=math.complex(R1.re,-R1.im);
			
			console.log(R2);
			
			var e0=math.subtract(b1,math.multiply(a1,math.divide(b0,a0)));
			var e1=math.subtract(b2,math.multiply(a2,math.divide(b0,a0)));
			var A1=math.divide(math.add(math.multiply(e0,R1),e1),math.subtract(R1,R2));
			var A2=math.divide(math.add(math.multiply(e0,R2),e1),math.subtract(R2,R1));
	
	var TA1=math.divide(math.round(math.multiply(math.multiply(T,A1),1000)),1000);
	var TA2=math.divide(math.round(math.multiply(math.multiply(T,A2),1000)),1000);
	var eTp1=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R1)),1000)),1000);
	var eTp2=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R2)),1000)),1000);
	var c0 = 1;
	var c1=-math.divide(math.round(math.multiply(math.add(eTp1,eTp2),1000)),1000);
	var c2=math.divide(math.round(math.multiply(math.multiply(eTp1,eTp2),1000)),1000);
	var d0=math.divide(math.round(math.multiply(math.add(TA1,TA2),1000)),1000);
	var d1=-math.divide(math.round(math.multiply(math.add(math.multiply(TA1,eTp2),math.multiply(TA2,eTp1)),1000)),1000);
	var d2=0;//math.divide(math.round(math.multiply(math.multiply(math.multiply(T,0.5,b0),eTp1,eTp2),100)),100);
	
	
	console.log(d0);
	console.log(d1);
	console.log(d2);
	console.log(c0);
	console.log(c1);
	console.log(c2);		
				
			}
			
			else {
			
			var part1=math.sqrt(part);
			var num1=math.add(-a1,part1);
			var num2=math.add(-a1,-part1);
			var den=math.multiply(2,a0);
			R1=math.divide(num1,den);
			R2=math.divide(num2,den);
			
			if (R1==R2){
				
			var d = R1;
			
			var e0=math.add(b1,math.multiply(2,b0,d));
			var e1=math.subtract(b2,math.multiply(b0,d,d));
			
			var A1=math.add(b1,math.multiply(2,b0,d));
			var A2=math.add(b2,math.multiply(b1,d),math.multiply(b0,d,d));
			
			var b0a0 = math.divide(math.round(math.multiply(math.divide(b0,a0),100)),100);
			
			var Tb0a0 = math.divide(math.round(math.multiply(math.multiply(T,b0a0),100)),100);
			
			
			var TA1=math.divide(math.round(math.multiply(math.multiply(T,A1),1000)),1000);
			var TA2=math.divide(math.round(math.multiply(math.multiply(T,A2),1000)),1000);
			var eTp1=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R1)),1000)),1000);
			var eTp2=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R2)),1000)),1000);
			
			var c0=1;
			var c1=math.divide(math.round(math.multiply(math.multiply(2,eTp2),1000)),1000);
			var c2=math.divide(math.round(math.multiply(math.multiply(eTp1,eTp2),1000)),1000);
			
			var d0=math.divide(math.round(math.multiply(math.add(Tb0a0,TA1),1000)),1000);
			var d1=math.divide(math.round(math.multiply(math.add(math.multiply(-2,b0,eTp2,T),-math.multiply(TA1,eTp1),math.multiply(T,TA2,eTp1)),1000)),1000);
			
			//var d0=math.divide(math.round(math.multiply(math.add(TA1,TA2),1000)),1000);
			//var d1=math.divide(math.round(math.multiply(math.add(math.multiply(TA1,eTp2),math.multiply(TA2,eTp1)),1000)),1000);
			
			var d2=0;//math.divide(math.round(math.multiply(math.multiply(b0,eTp1,eTp2),1000)),1000);//0;//math.divide(math.round(math.multiply(math.multiply(math.multiply(T,0.5,b0),eTp1,eTp2),100)),100);
	
			}
			
			else {
			

			var part1=math.sqrt(part);
			var num1=math.add(-a1,part1);
			var num2=math.add(-a1,-part1);
			var den=math.multiply(2,a0);
			R1=math.divide(num1,den);
			R2=math.divide(num2,den);
			
			var e0=math.subtract(b1,math.multiply(a1,math.divide(b0,a0)));
			var e1=math.subtract(b2,math.multiply(a2,math.divide(b0,a0)));
			var A1=math.divide(math.add(math.multiply(e0,R1),e1),math.subtract(R1,R2));
			var A2=math.divide(math.add(math.multiply(e0,R2),e1),math.subtract(R2,R1));
	
	var TA1=math.divide(math.round(math.multiply(math.multiply(T,A1),1000)),1000);
	var TA2=math.divide(math.round(math.multiply(math.multiply(T,A2),1000)),1000);
	var eTp1=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R1)),1000)),1000);
	var eTp2=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R2)),1000)),1000);
	var c0 = 1;
	var c1=-math.divide(math.round(math.multiply(math.add(eTp1,eTp2),1000)),1000);
	var c2=math.divide(math.round(math.multiply(math.multiply(eTp1,eTp2),1000)),1000);
	var d0=math.divide(math.round(math.multiply(math.add(TA1,TA2),1000)),1000);
	var d1=-math.divide(math.round(math.multiply(math.add(math.multiply(TA1,eTp2),math.multiply(TA2,eTp1)),1000)),1000);
	var d2=0;//math.divide(math.round(math.multiply(math.multiply(math.multiply(T,0.5,b0),eTp1,eTp2),100)),100);
	
	console.log(d0);
	console.log(d1);
	console.log(d2);
	console.log(c0);
	console.log(c1);
	console.log(c2);	
	        
			}	
			}
	
	var maxf = 10;//50;
	var minf = 0;
	
		
    var yop = new Array();	///continous data output result storing
	var phase = [];
	
	var	f = minf;
	while(f<=maxf){
	
	f1=f;
	
	var w = math.multiply(2,math.pi,f);
	
	var i = math.sqrt(-1);
	var num1 = math.multiply(math.complex(math.cos(math.multiply(2,w)),math.sin(math.multiply(w,2))),d0);
	var num2 = math.multiply(math.complex(math.cos(math.multiply(1,w)),math.sin(math.multiply(w,1))),d1);
	var num = math.add(num1,num2,d2);
	
	var den1 = math.multiply(math.complex(math.cos(math.multiply(2,w)),math.sin(math.multiply(w,2))),c0);
	var den2 = math.multiply(math.complex(math.cos(math.multiply(1,w)),math.sin(math.multiply(w,1))),c1);
	var den = math.add(den1,den2,c2);
	
	var yy = math.abs(math.divide(num,den));
	
	yop[f] = yy;//math.multiply(20,math.log(yy,10));
	dataOPPoints1.push({x:(w), y:(yop[f])});///magnitude part
	dArray1 = dataOPPoints1;
	DatafTs['ar'+inc1]= dataOPPoints1;	
	
	var w1 = math.multiply(2,math.pi,f);
	
	var y = math.divide(num,den).re;
	
	var imagy = math.divide(num,den).im;
	
	var fraction = math.divide(imagy,y);
	
	phase[f]=math.multiply(math.divide(180,math.pi),math.atan2(imagy,y));
	
	dataOPPoints2.push({x:(w), y:(phase[f])});//phase part
	dArray2 = dataOPPoints2;
	DatapTs['ar'+inc1]= dataOPPoints2;
	
	f=math.add(f,0.01);
}
inc1++;
document.getElementById('plotbucket').style.display  = "block"; 
 
document.getElementById('chartContainer1').style.display  = "block"; 	
	 chart1 = new CanvasJS.Chart("chartContainer1",
    {
      animationEnabled: true,
	  zoomEnabled:true,
	  zoomType: "xy",
		  animationDuration: 10000, 
	  title:{
      text: "Frequency Response (Magnitude vs. Frequency) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Frequency (rad/s)",
		//logarithmic:true,
		maximum:maxf,
		minimum:minf,
      },
    axisY: 
	      {/////output Y axis
		  //logarithmic: true,
            title: "Magnitude(T)",
			
			///maximum:0.3,
        },
		
	data:[ 
      {        
        type: "spline",
		color:"#ed2c4e",
        dataPoints:dataOPPoints1
	
       }]
       
	});

	chart1.render();	
	
document.getElementById('chartContainer2').style.display  = "block"; 	
	 chart2 = new CanvasJS.Chart("chartContainer2",
    {
      animationEnabled: true,
	  zoomEnabled:true,
	  zoomType: "xy",
		  animationDuration: 10000, 
	  title:{
      text: "Frequency Response (Phase vs. Frequency) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Frequency(rad/s)",
		//logarithmic:true,
		maximum:maxf,
		minimum:minf,
      },
    axisY: 
	      {/////output Y axis
		  //logarithmic: true,
            title: "Phase",
			
			///maximum:0.3,
        },
		
	data:[ 
      {        
        type: "spline",
		color:"#109DB6",
        dataPoints:dataOPPoints2
	
       }]
       
	});

	chart2.render();

document.getElementById("okb").style.display = "block";
document.getElementById("exportChart").style.display = "block";

}

///LOG SCALE
//////////////////////// IIM 
var dArray1s=[],dArray2s=[],dArray3s=[],dArray4s=[];///for method comparison
var DatafTss = [],DatapTss = [], inc1s=0, spstore1s=[];///for iim Ts compare
var chart1s, chart2s;
function IIM_frs(){
	
	var dataOPPoints1s=[];	///for plotting chart
    var dataOPPoints2s=[];
	
	        var b0 = document.getElementById('b_0').value;			
			var b1 = document.getElementById('b_1').value;
			var b2 = document.getElementById('b_2').value;
            var a0 = document.getElementById('a_0').value;
			var a1 = document.getElementById('a_1').value;
			var a2 = document.getElementById('a_2').value;
	        var T = document.getElementById('Ts').value;
			spstore1s.push(T);        
	
	var part=math.subtract(math.pow(a1,2),math.multiply(4,a0,a2));
			
			if (part < 0)
			{
			var part1=math.sqrt(part);
			var num1=math.add(-a1,part1);
			var den=math.multiply(2,a0);
			R11=math.divide(num1,den);
			
			R1 = math.complex(math.divide(math.round(math.multiply(R11.re,1000)),1000),math.divide(math.round(math.multiply(R11.im,1000)),1000));
			
			console.log(R1);
			console.log(R1.re);
			console.log(R1.im);
			
			var num2=math.add(-a1,-part1);
			
			R2=math.complex(R1.re,-R1.im);
			
			console.log(R2);
			
			var e0=math.subtract(b1,math.multiply(a1,math.divide(b0,a0)));
			var e1=math.subtract(b2,math.multiply(a2,math.divide(b0,a0)));
			var A1=math.divide(math.add(math.multiply(e0,R1),e1),math.subtract(R1,R2));
			var A2=math.divide(math.add(math.multiply(e0,R2),e1),math.subtract(R2,R1));
	
	var TA1=math.divide(math.round(math.multiply(math.multiply(T,A1),1000)),1000);
	var TA2=math.divide(math.round(math.multiply(math.multiply(T,A2),1000)),1000);
	var eTp1=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R1)),1000)),1000);
	var eTp2=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R2)),1000)),1000);
	var c0 = 1;
	var c1=-math.divide(math.round(math.multiply(math.add(eTp1,eTp2),1000)),1000);
	var c2=math.divide(math.round(math.multiply(math.multiply(eTp1,eTp2),1000)),1000);
	var d0=math.divide(math.round(math.multiply(math.add(TA1,TA2),1000)),1000);
	var d1=-math.divide(math.round(math.multiply(math.add(math.multiply(TA1,eTp2),math.multiply(TA2,eTp1)),1000)),1000);
	var d2=0;//math.divide(math.round(math.multiply(math.multiply(math.multiply(T,0.5,b0),eTp1,eTp2),100)),100);
	
	
	console.log(d0);
	console.log(d1);
	console.log(d2);
	console.log(c0);
	console.log(c1);
	console.log(c2);		
				
			}
			
			else {
			
			var part1=math.sqrt(part);
			var num1=math.add(-a1,part1);
			var num2=math.add(-a1,-part1);
			var den=math.multiply(2,a0);
			R1=math.divide(num1,den);
			R2=math.divide(num2,den);
			
			if (R1==R2){
				
			var d = R1;
			
			var e0=math.add(b1,math.multiply(2,b0,d));
			var e1=math.subtract(b2,math.multiply(b0,d,d));
			
			var A1=math.add(b1,math.multiply(2,b0,d));
			var A2=math.add(b2,math.multiply(b1,d),math.multiply(b0,d,d));
			
			var b0a0 = math.divide(math.round(math.multiply(math.divide(b0,a0),100)),100);
			
			var Tb0a0 = math.divide(math.round(math.multiply(math.multiply(T,b0a0),100)),100);
			
			
			var TA1=math.divide(math.round(math.multiply(math.multiply(T,A1),1000)),1000);
			var TA2=math.divide(math.round(math.multiply(math.multiply(T,A2),1000)),1000);
			var eTp1=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R1)),1000)),1000);
			var eTp2=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R2)),1000)),1000);
			
			var c0=1;
			var c1=math.divide(math.round(math.multiply(math.multiply(2,eTp2),1000)),1000);
			var c2=math.divide(math.round(math.multiply(math.multiply(eTp1,eTp2),1000)),1000);
			
			var d0=math.divide(math.round(math.multiply(math.add(Tb0a0,TA1),1000)),1000);
			var d1=math.divide(math.round(math.multiply(math.add(math.multiply(-2,b0,eTp2,T),-math.multiply(TA1,eTp1),math.multiply(T,TA2,eTp1)),1000)),1000);
			
			//var d0=math.divide(math.round(math.multiply(math.add(TA1,TA2),1000)),1000);
			//var d1=math.divide(math.round(math.multiply(math.add(math.multiply(TA1,eTp2),math.multiply(TA2,eTp1)),1000)),1000);
			
			var d2=0;//math.divide(math.round(math.multiply(math.multiply(b0,eTp1,eTp2),1000)),1000);//0;//math.divide(math.round(math.multiply(math.multiply(math.multiply(T,0.5,b0),eTp1,eTp2),100)),100);
	
			}
			
			else {
			
			
			var part1=math.sqrt(part);
			var num1=math.add(-a1,part1);
			var num2=math.add(-a1,-part1);
			var den=math.multiply(2,a0);
			R1=math.divide(num1,den);
			R2=math.divide(num2,den);
			
			var e0=math.subtract(b1,math.multiply(a1,math.divide(b0,a0)));
			var e1=math.subtract(b2,math.multiply(a2,math.divide(b0,a0)));
			var A1=math.divide(math.add(math.multiply(e0,R1),e1),math.subtract(R1,R2));
			var A2=math.divide(math.add(math.multiply(e0,R2),e1),math.subtract(R2,R1));
	
	var TA1=math.divide(math.round(math.multiply(math.multiply(T,A1),1000)),1000);
	var TA2=math.divide(math.round(math.multiply(math.multiply(T,A2),1000)),1000);
	var eTp1=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R1)),1000)),1000);
	var eTp2=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R2)),1000)),1000);
	var c0 = 1;
	var c1=-math.divide(math.round(math.multiply(math.add(eTp1,eTp2),1000)),1000);
	var c2=math.divide(math.round(math.multiply(math.multiply(eTp1,eTp2),1000)),1000);
	var d0=math.divide(math.round(math.multiply(math.add(TA1,TA2),1000)),1000);
	var d1=-math.divide(math.round(math.multiply(math.add(math.multiply(TA1,eTp2),math.multiply(TA2,eTp1)),1000)),1000);
	var d2=0;//math.divide(math.round(math.multiply(math.multiply(math.multiply(T,0.5,b0),eTp1,eTp2),100)),100);
	
	console.log(d0);
	console.log(d1);
	console.log(d2);
	console.log(c0);
	console.log(c1);
	console.log(c2);	
	        
			}	
			}
	
	var maxf = 10;//100;
	var minf = 0.1;
	
		
    var yop = new Array();	///continous data output result storing
	var phase = [];
	
	var	f = minf;
	while(f<=maxf){
	
	f1=f;
	
	var w = math.multiply(2,math.pi,f);
	
	var i = math.sqrt(-1);
	var num1 = math.multiply(math.complex(math.cos(math.multiply(2,w)),math.sin(math.multiply(w,2))),d0);
	var num2 = math.multiply(math.complex(math.cos(math.multiply(1,w)),math.sin(math.multiply(w,1))),d1);
	var num = math.add(num1,num2,d2);
	
	var den1 = math.multiply(math.complex(math.cos(math.multiply(2,w)),math.sin(math.multiply(w,2))),c0);
	var den2 = math.multiply(math.complex(math.cos(math.multiply(1,w)),math.sin(math.multiply(w,1))),c1);
	var den = math.add(den1,den2,c2);
	
	var yy = math.abs(math.divide(num,den));
	
	//var ww = math.log(w,10);
	
	yop[f] = math.multiply(20,math.log(yy,10));
	dataOPPoints1s.push({x:(w), y:(yop[f])});//dataOPPoints1s.push({x:(w), y:(yop[f])});///magnitude part
	dArray1s = dataOPPoints1s;
	DatafTss['ar'+inc1s]= dataOPPoints1s;	
	
	var w1 = math.multiply(2,math.pi,f);
	
	var y = math.divide(num,den).re;
	
	var imagy = math.divide(num,den).im;
	
	var fraction = math.divide(imagy,y);
	
	phase[f]=math.multiply(math.divide(180,math.pi),math.atan2(imagy,y));
	
	dataOPPoints2s.push({x:(w), y:(phase[f])});//dataOPPoints2s.push({x:(w), y:(phase[f])});//phase part
	dArray2s = dataOPPoints2s;
	DatapTss['ar'+inc1s]= dataOPPoints2s;
	
	f=math.add(f,0.01);
}
inc1s++;
document.getElementById('plotbucket').style.display  = "block"; 
 
document.getElementById('chartContainer1').style.display  = "block"; 	
	 chart1s = new CanvasJS.Chart("chartContainer1",
    {
      animationEnabled: true,
	  zoomEnabled:true,
	  zoomType: "xy",
		  animationDuration: 10000, 
	  title:{
      text: "Frequency Response (Magnitude vs. Frequency) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Frequency(rad/s)",
		logarithmic:true,
		maximum:maxf,
		minimum:minf,
      },
    axisY: 
	      {/////output Y axis
		  //logarithmic: true,
            title: "Magnitude(T) in dB",
			
			///maximum:0.3,
        },
		
	data:[ 
      {        
        type: "spline",
		color:"#ed2c4e",
        dataPoints:dataOPPoints1s
	
       }]
       
	});

	chart1s.render();	
	
document.getElementById('chartContainer2').style.display  = "block"; 	
	 chart2s = new CanvasJS.Chart("chartContainer2",
    {
      animationEnabled: true,
	  zoomEnabled:true,
	  zoomType: "xy",
		  animationDuration: 10000, 
	  title:{
      text: "Frequency Response (Phase vs. Frequency) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Frequency (rad/s)",
		logarithmic:true,
		maximum:maxf,
		minimum:minf,
      },
    axisY: 
	      {/////output Y axis
		  //logarithmic: true,
            title: "Phase",
			
			///maximum:0.3,
        },
		
	data:[ 
      {        
        type: "spline",
		color:"109DB6",
        dataPoints:dataOPPoints2s
	
       }]
       
	});

	chart2s.render();

document.getElementById("okb").style.display = "block";
document.getElementById("exportChart").style.display = "block";

}

///LINEAR SCALE SAMPLING TIME COMPARISON IIM
var dFreq_IIM=[]; dPh_IIM=[];
 function IIM_fr_Ts() {
    var sampleTime = $('#Ts').val();

    // Initialize color palettes
    CanvasJS.addColorSet("MagPlot", ["#a2b9bc", "#b2ad7f", "#878f99", "#6b5b95", "#feb236", "#d64161", "#ff7b25", "#d6cbd3", "#eca1a6", "#bdcebe"]);
    CanvasJS.addColorSet("PhPlot", ["#ada397", "#feb236", "#d64161", "#ff7b25", "#d6cbd3", "#eca1a6", "#bdcebe", "#e3eaa7", "#d5e1df", "#b5e7a0"]);
    
    // Clear previous chart data arrays
    chart1.options.data = [];
    chart2.options.data = [];

    for (var dnum = 0; dnum <= inc1-1; dnum++) {
        dFreq_IIM[dnum] = DatafTs["ar" + dnum];
        dPh_IIM[dnum] = DatapTs["ar" + dnum];
        
        if (inc1>=0) {
            var stime = spstore1[dnum];
            
            // Magnitude IIM Chart
            chart1.options.data.push({
                type: "spline",
                //showInLegend: true,
                //name: "Run " + dnum,
                toolTipContent:
                    "<b>Sampling Time</b> = " + stime+' '+ "sec"+"<br/>"+
	  "<b>Time:</b> {x}" +"<br/>"+
  "<b>Magnitude:</b> {y}" ,
                dataPoints: dFreq_IIM[dnum]
            });

            // Angle Chart
            chart2.options.data.push({
                type: "spline",
                //showInLegend: true,
                //name: "Run " + dnum,
                toolTipContent:
                    "<b>Sampling Time</b> = " + stime+' '+ "sec"+"<br/>"+
	  "<b>Time:</b> {x}" +"<br/>"+
  "<b>Phase:</b> {y}" ,
                dataPoints: dPh_IIM[dnum]
            });

        }
    }

    chart1.render();
    chart2.render();
    
	document.getElementById("okb").style.display = "block";
    document.getElementById("exportChart").style.display = "block";

}
///LOG SCALE SAMPLING TIME COMPARISON IIM
var dFreq_IIMs=[]; dPh_IIMs=[];
 function IIM_fr_Tss() {
    var sampleTime = $('#Ts').val();

    // Initialize color palettes
    CanvasJS.addColorSet("MagPlot", ["#a2b9bc", "#b2ad7f", "#878f99", "#6b5b95", "#feb236", "#d64161", "#ff7b25", "#d6cbd3", "#eca1a6", "#bdcebe"]);
    CanvasJS.addColorSet("PhPlot", ["#ada397", "#feb236", "#d64161", "#ff7b25", "#d6cbd3", "#eca1a6", "#bdcebe", "#e3eaa7", "#d5e1df", "#b5e7a0"]);
    
    // Clear previous chart data arrays
    chart1s.options.data = [];
    chart2s.options.data = [];

    for (var dnum = 0; dnum <= inc1s-1; dnum++) {
        dFreq_IIMs[dnum] = DatafTss["ar" + dnum];
        dPh_IIMs[dnum] = DatapTss["ar" + dnum];
        
        if (inc1s>=0) {
            var stime = spstore1s[dnum];
            
            // Magnitude IIM Chart
            chart1s.options.data.push({
                type: "spline",
                //showInLegend: true,
                //name: "Run " + dnum,
                toolTipContent:
                    "<b>Sampling Time</b> = " + stime+' '+ "sec"+"<br/>"+
	  "<b>Time:</b> {x}" +"<br/>"+
  "<b>Magnitude:</b> {y}" ,
                dataPoints: dFreq_IIMs[dnum]
            });

            // Angle Chart
            chart2s.options.data.push({
                type: "spline",
                //showInLegend: true,
                //name: "Run " + dnum,
                toolTipContent:
                    "<b>Sampling Time</b> = " + stime+' '+ "sec"+"<br/>"+
	  "<b>Time:</b> {x}" +"<br/>"+
  "<b>Phase:</b> {y}" ,
                dataPoints: dPh_IIMs[dnum]
            });

        }
    }

    chart1s.render();
    chart2s.render();
    
	document.getElementById("okb").style.display = "block";
    document.getElementById("exportChart").style.display = "block";

}

///LINEAR SCALE
var chart3, chart4;
var DatafTs2 = [],DatapTs2 = [], inc2=0, spstore2=[];///for btm Ts compare

function BTM_fr(){
	
	var dataOPPoints3=[];	///for plotting chart
    var dataOPPoints4=[];
	
	         var b0 = document.getElementById('b_0').value;			
			var b1 = document.getElementById('b_1').value;
			var b2 = document.getElementById('b_2').value;
            var a0 = document.getElementById('a_0').value;
			var a1 = document.getElementById('a_1').value;
			var a2 = document.getElementById('a_2').value;
	        var T = document.getElementById('Ts').value;
			spstore2.push(T);
	
	        /* var k=math.divide(2,T);
			var b0k2=math.multiply(b0,math.pow(k,2));
			var b1k=math.multiply(b1,k);
			var a0k2=math.multiply(a0,math.pow(k,2));
			var a1k=math.multiply(a1,k);
			
			var d0=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,b1k,b2),math.add(a0k2,a1k,a2)),100)),100);
			var d1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*b2,2*b0k2),math.add(a0k2,a1k,a2)),100)),100);
			var d2=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,-b1k,b2),math.add(a0k2,a1k,a2)),100)),100);
			
			var c0=1;
			var c1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*a2,2*a0k2),math.add(a0k2,a1k,a2)),100)),100);
			var c2=math.divide(math.round(math.multiply(math.divide(math.add(a0k2,-a1k,a2),math.add(a0k2,a1k,a2)),100)),100);
	
	console.log(d0);
	console.log(d1);
	console.log(d2);
	console.log(c0);
	console.log(c1);
	console.log(c2); */
	
	var part=math.subtract(math.pow(a1,2),math.multiply(4,a0,a2));
	
			var part1=math.sqrt(part);
			var num1=math.add(-a1,part1);
			var num2=math.add(-a1,-part1);
			var den=math.multiply(2,a0);
			R1=math.divide(num1,den);
			R2=math.divide(num2,den);
			
			if (R1==R2){
				
			/* var k=math.divide(2,T);
			var b0k2=math.multiply(b0,math.pow(k,2));
			var b1k=math.multiply(b1,k);
			var a0k2=math.multiply(a0,math.pow(k,2));
			var a1k=math.multiply(a1,k); */
			
			/* var d0=math.divide(math.round(math.multiply(math.add(math.divide(math.multiply(b0,4),math.multiply(T,T)),math.divide(math.multiply(b1,2),T),b2),1000)),1000);
			var d1=math.divide(math.round(math.multiply(math.add(math.divide(math.multiply(b0,-8),math.multiply(T,T)),math.multiply(b2,2)),1000)),1000);
			var d2=math.divide(math.round(math.multiply(math.add(math.divide(math.multiply(b0,4),math.multiply(T,T)),math.divide(math.multiply(b1,-2),T),b2),1000)),1000);
			
			var c0=math.divide(math.round(math.multiply(math.add(math.divide(4,math.multiply(T,T)),math.divide(math.multiply(R1,4),T),math.multiply(R1,R1)),1000)),1000);
			
			var c1=math.divide(math.round(math.multiply(math.add(math.divide(-8,math.multiply(T,T)),math.multiply(R1,R1,2)),1000)),1000);
			var c2=math.divide(math.round(math.multiply(math.add(math.divide(4,math.multiply(T,T)),math.divide(math.multiply(R1,-4),T),math.multiply(R1,R1)),1000)),1000);
			
			var d0c0 = math.divide(math.round(math.multiply(math.divide(d0,c0),1000)),1000);
			var d1c0 = math.divide(math.round(math.multiply(math.divide(d1,c0),1000)),1000);
			var d2c0 = math.divide(math.round(math.multiply(math.divide(d2,c0),1000)),1000);
			
			var c1c0 = math.divide(math.round(math.multiply(math.divide(c1,c0),1000)),1000);
			var c2c0 = math.divide(math.round(math.multiply(math.divide(c2,c0),1000)),1000);
			
			
			document.getElementById('tfn22').value = d0c0;
	        document.getElementById('tfn23').value = d1c0;	
	        document.getElementById('tfn24').value = d2c0;
			        			
						
			document.getElementById('tfd19').value = 1;
	        document.getElementById('tfd20').value = c1c0;
			document.getElementById('tfd21').value = c2c0; */
			
			var k=math.divide(2,T);
			var b0k2=math.multiply(b0,math.pow(k,2));
			var b1k=math.multiply(b1,k);
			var a0k2=math.multiply(a0,math.pow(k,2));
			var a1k=math.multiply(a1,k);
			
			var d0=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,b1k,b2),math.add(a0k2,a1k,a2)),1000)),1000);
			var d1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*b2,2*b0k2),math.add(a0k2,a1k,a2)),1000)),1000);
			var d2=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,-b1k,b2),math.add(a0k2,a1k,a2)),1000)),1000);
			var c0=1;
			var c1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*a2,2*a0k2),math.add(a0k2,a1k,a2)),1000)),1000);
			var c2=math.divide(math.round(math.multiply(math.divide(math.add(a0k2,-a1k,a2),math.add(a0k2,a1k,a2)),1000)),1000);
			
			
				
			}
			
			else{
	
	        var k=math.divide(2,T);
			var b0k2=math.multiply(b0,math.pow(k,2));
			var b1k=math.multiply(b1,k);
			var a0k2=math.multiply(a0,math.pow(k,2));
			var a1k=math.multiply(a1,k);
			
			var d0=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,b1k,b2),math.add(a0k2,a1k,a2)),1000)),1000);
			var d1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*b2,2*b0k2),math.add(a0k2,a1k,a2)),1000)),1000);
			var d2=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,-b1k,b2),math.add(a0k2,a1k,a2)),1000)),1000);
			var c0=1;
			var c1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*a2,2*a0k2),math.add(a0k2,a1k,a2)),1000)),1000);
			var c2=math.divide(math.round(math.multiply(math.divide(math.add(a0k2,-a1k,a2),math.add(a0k2,a1k,a2)),1000)),1000);
			
			}
	
	var maxf = 10;//50;
	var minf = 0;
	
		
    var yop = new Array();	///continous data output result storing
	var phase = [];
	
	var	f = minf;
	while(f<=maxf){
	
	f1=f;
	
	var w = math.multiply(2,math.pi,f);
	
	var i = math.sqrt(-1);
	
	var num1 = math.multiply(math.complex(math.cos(math.multiply(2,w)),math.sin(math.multiply(w,2))),d0);
	var num2 = math.multiply(math.complex(math.cos(math.multiply(1,w)),math.sin(math.multiply(w,1))),d1);
	var num = math.add(num1,num2,d2);
	
	var den1 = math.multiply(math.complex(math.cos(math.multiply(2,w)),math.sin(math.multiply(w,2))),c0);
	var den2 = math.multiply(math.complex(math.cos(math.multiply(1,w)),math.sin(math.multiply(w,1))),c1);
	var den = math.add(den1,den2,c2);
	
	var yy = math.abs(math.divide(num,den));
	
	yop[f] = yy;//math.multiply(20,math.log(yy,10));
	
	dataOPPoints3.push({x:(w), y:(yop[f])});///magnitude part
	dArray3 = dataOPPoints3;
	DatafTs2['ar'+inc2]= dataOPPoints3;
	
	var w1 = math.multiply(2,math.pi,f);
	
	var y = math.divide(num,den).re;
	
	var imagy = math.divide(num,den).im;
	
	var fraction = math.divide(imagy,y);
	
	phase[f]=math.multiply(math.divide(180,math.pi),math.atan2(imagy,y));
	
	dataOPPoints4.push({x:(w), y:(phase[f])});//phase part
	dArray4 = dataOPPoints4;
	DatapTs2['ar'+inc2]= dataOPPoints4;
	
	f=math.add(f,0.01);
}
inc2++;
document.getElementById('plotbucket').style.display  = "block"; 
 
document.getElementById('chartContainer1').style.display  = "block"; 	
	chart3 = new CanvasJS.Chart("chartContainer1",
    {      
	  
	  animationEnabled: true,
	  zoomEnabled:true,
	  zoomType: "xy",
		  animationDuration: 10000, 
	  title:{
      text: "Frequency Response (Magnitude vs. Frequency) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Frequency(rad/s)",
		//logarithmic:true,
		maximum:maxf,
		minimum:minf,
      },
    axisY: 
	      {/////output Y axis
		  //logarithmic: true,
            title: "Magnitude(T)",
			
			///maximum:0.3,
        },
		
	data:[ 
      {        
        type: "spline",
		color:"#ed2c4e",
        dataPoints:dataOPPoints3
	
       }]
       
	});

	chart3.render();	
	
document.getElementById('chartContainer2').style.display  = "block"; 	
	 chart4 = new CanvasJS.Chart("chartContainer2",
    {
      animationEnabled: true,
	  zoomEnabled:true,
	  zoomType: "xy",
		  animationDuration: 10000, 
	  title:{
      text: "Frequency Response (Phase vs. Frequency) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Frequency(rad/s)",
		//logarithmic:true,
		maximum:maxf,
		minimum:minf,
      },
    axisY: 
	      {/////output Y axis
		  //logarithmic: true,
            title: "Phase",
			
			///maximum:0.3,
        },
		
	data:[ 
      {        
        type: "spline",
		color:"#109DB6",
        dataPoints:dataOPPoints4

       }]
       
	});

	chart4.render();

document.getElementById("okb").style.display = "block";
document.getElementById("exportChart").style.display = "block";

}

///LOG SCALE
var chart3s, chart4s;
var DatafTs2s = [],DatapTs2s = [], inc2s=0, spstore2s=[];///for btm Ts compare

function BTM_frs(){
	
	var dataOPPoints3s=[];	///for plotting chart
    var dataOPPoints4s=[];
	
	         var b0 = document.getElementById('b_0').value;			
			var b1 = document.getElementById('b_1').value;
			var b2 = document.getElementById('b_2').value;
            var a0 = document.getElementById('a_0').value;
			var a1 = document.getElementById('a_1').value;
			var a2 = document.getElementById('a_2').value;
	        var T = document.getElementById('Ts').value;
			spstore2s.push(T);
	
	       /*  var k=math.divide(2,T);
			var b0k2=math.multiply(b0,math.pow(k,2));
			var b1k=math.multiply(b1,k);
			var a0k2=math.multiply(a0,math.pow(k,2));
			var a1k=math.multiply(a1,k);
			
			var d0=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,b1k,b2),math.add(a0k2,a1k,a2)),100)),100);
			var d1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*b2,2*b0k2),math.add(a0k2,a1k,a2)),100)),100);
			var d2=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,-b1k,b2),math.add(a0k2,a1k,a2)),100)),100);
			
			var c0=1;
			var c1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*a2,2*a0k2),math.add(a0k2,a1k,a2)),100)),100);
			var c2=math.divide(math.round(math.multiply(math.divide(math.add(a0k2,-a1k,a2),math.add(a0k2,a1k,a2)),100)),100);
	
	console.log(d0);
	console.log(d1);
	console.log(d2);
	console.log(c0);
	console.log(c1);
	console.log(c2); */
	
	var part=math.subtract(math.pow(a1,2),math.multiply(4,a0,a2));
	
			var part1=math.sqrt(part);
			var num1=math.add(-a1,part1);
			var num2=math.add(-a1,-part1);
			var den=math.multiply(2,a0);
			R1=math.divide(num1,den);
			R2=math.divide(num2,den);
			
			if (R1==R2){
				
			/* var k=math.divide(2,T);
			var b0k2=math.multiply(b0,math.pow(k,2));
			var b1k=math.multiply(b1,k);
			var a0k2=math.multiply(a0,math.pow(k,2));
			var a1k=math.multiply(a1,k); */
			
			/* var d0=math.divide(math.round(math.multiply(math.add(math.divide(math.multiply(b0,4),math.multiply(T,T)),math.divide(math.multiply(b1,2),T),b2),1000)),1000);
			var d1=math.divide(math.round(math.multiply(math.add(math.divide(math.multiply(b0,-8),math.multiply(T,T)),math.multiply(b2,2)),1000)),1000);
			var d2=math.divide(math.round(math.multiply(math.add(math.divide(math.multiply(b0,4),math.multiply(T,T)),math.divide(math.multiply(b1,-2),T),b2),1000)),1000);
			
			var c0=math.divide(math.round(math.multiply(math.add(math.divide(4,math.multiply(T,T)),math.divide(math.multiply(R1,4),T),math.multiply(R1,R1)),1000)),1000);
			
			var c1=math.divide(math.round(math.multiply(math.add(math.divide(-8,math.multiply(T,T)),math.multiply(R1,R1,2)),1000)),1000);
			var c2=math.divide(math.round(math.multiply(math.add(math.divide(4,math.multiply(T,T)),math.divide(math.multiply(R1,-4),T),math.multiply(R1,R1)),1000)),1000);
			
			var d0c0 = math.divide(math.round(math.multiply(math.divide(d0,c0),1000)),1000);
			var d1c0 = math.divide(math.round(math.multiply(math.divide(d1,c0),1000)),1000);
			var d2c0 = math.divide(math.round(math.multiply(math.divide(d2,c0),1000)),1000);
			
			var c1c0 = math.divide(math.round(math.multiply(math.divide(c1,c0),1000)),1000);
			var c2c0 = math.divide(math.round(math.multiply(math.divide(c2,c0),1000)),1000);
			
			
			document.getElementById('tfn22').value = d0c0;
	        document.getElementById('tfn23').value = d1c0;	
	        document.getElementById('tfn24').value = d2c0;
			        			
						
			document.getElementById('tfd19').value = 1;
	        document.getElementById('tfd20').value = c1c0;
			document.getElementById('tfd21').value = c2c0; */
			
			var k=math.divide(2,T);
			var b0k2=math.multiply(b0,math.pow(k,2));
			var b1k=math.multiply(b1,k);
			var a0k2=math.multiply(a0,math.pow(k,2));
			var a1k=math.multiply(a1,k);
			
			var d0=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,b1k,b2),math.add(a0k2,a1k,a2)),1000)),1000);
			var d1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*b2,2*b0k2),math.add(a0k2,a1k,a2)),1000)),1000);
			var d2=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,-b1k,b2),math.add(a0k2,a1k,a2)),1000)),1000);
			var c0=1;
			var c1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*a2,2*a0k2),math.add(a0k2,a1k,a2)),1000)),1000);
			var c2=math.divide(math.round(math.multiply(math.divide(math.add(a0k2,-a1k,a2),math.add(a0k2,a1k,a2)),1000)),1000);
			
			
				
			}
			
			else{
	
	        var k=math.divide(2,T);
			var b0k2=math.multiply(b0,math.pow(k,2));
			var b1k=math.multiply(b1,k);
			var a0k2=math.multiply(a0,math.pow(k,2));
			var a1k=math.multiply(a1,k);
			
			var d0=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,b1k,b2),math.add(a0k2,a1k,a2)),1000)),1000);
			var d1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*b2,2*b0k2),math.add(a0k2,a1k,a2)),1000)),1000);
			var d2=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,-b1k,b2),math.add(a0k2,a1k,a2)),1000)),1000);
			var c0=1;
			var c1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*a2,2*a0k2),math.add(a0k2,a1k,a2)),1000)),1000);
			var c2=math.divide(math.round(math.multiply(math.divide(math.add(a0k2,-a1k,a2),math.add(a0k2,a1k,a2)),1000)),1000);
			
			}
	
	var maxf = 10;//100;
	var minf = 0.1;
	
		
    var yop = new Array();	///continous data output result storing
	var phase = [];
	
	var	f = minf;
	while(f<=maxf){
	
	f1=f;
	
	var w = math.multiply(2,math.pi,f);
	
	var i = math.sqrt(-1);
	
	var num1 = math.multiply(math.complex(math.cos(math.multiply(2,w)),math.sin(math.multiply(w,2))),d0);
	var num2 = math.multiply(math.complex(math.cos(math.multiply(1,w)),math.sin(math.multiply(w,1))),d1);
	var num = math.add(num1,num2,d2);
	
	var den1 = math.multiply(math.complex(math.cos(math.multiply(2,w)),math.sin(math.multiply(w,2))),c0);
	var den2 = math.multiply(math.complex(math.cos(math.multiply(1,w)),math.sin(math.multiply(w,1))),c1);
	var den = math.add(den1,den2,c2);
	
	var yy = math.abs(math.divide(num,den));
	
	yop[f] = math.multiply(20,math.log(yy,10));
	
	//var ww = math.log(w,10);
	
	dataOPPoints3s.push({x:(w), y:(yop[f])});//dataOPPoints3s.push({x:(w), y:(yop[f])});///magnitude part
	dArray3s = dataOPPoints3s;
	DatafTs2s['ar'+inc2s]= dataOPPoints3s;
	
	var w1 = math.multiply(2,math.pi,f);
	
	var y = math.divide(num,den).re;
	
	var imagy = math.divide(num,den).im;
	
	var fraction = math.divide(imagy,y);
	
	phase[f]=math.multiply(math.divide(180,math.pi),math.atan2(imagy,y));
	
	dataOPPoints4s.push({x:(w), y:(phase[f])});//dataOPPoints4s.push({x:(w), y:(phase[f])});//phase part
	dArray4s = dataOPPoints4s;
	DatapTs2s['ar'+inc2s]= dataOPPoints4s;
	
	f=math.add(f,0.01);
}
inc2s++;
document.getElementById('plotbucket').style.display  = "block"; 
 
document.getElementById('chartContainer1').style.display  = "block"; 	
	chart3s = new CanvasJS.Chart("chartContainer1",
    {      
	  
	  animationEnabled: true,
	  zoomEnabled:true,
	  zoomType: "xy",
		  animationDuration: 10000, 
	  title:{
      text: "Frequency Response (Magnitude vs. Frequency) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Frequency(rad/s)",
		logarithmic:true,
		maximum:maxf,
		minimum:minf,
      },
    axisY: 
	      {/////output Y axis
		  //logarithmic: true,
            title: "Magnitude(T) in dB",
			
			///maximum:0.3,
        },
		
	data:[ 
      {        
        type: "spline",
		color:"#ed2c4e",
        dataPoints:dataOPPoints3s
	
       }]
       
	});

	chart3s.render();	
	
document.getElementById('chartContainer2').style.display  = "block"; 	
	 chart4s = new CanvasJS.Chart("chartContainer2",
    {
      animationEnabled: true,
	  zoomEnabled:true,
	  zoomType: "xy",
		  animationDuration: 10000, 
	  title:{
      text: "Frequency Response (Phase vs. Frequency) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Frequency (rad/s)",
		logarithmic:true,
		maximum:maxf,
		minimum:minf,
      },
    axisY: 
	      {/////output Y axis
		  //logarithmic: true,
            title: "Phase",
			
			///maximum:0.3,
        },
		
	data:[ 
      {        
        type: "spline",
		color:"#109DB6",
        dataPoints:dataOPPoints4s

       }]
       
	});

	chart4s.render();

document.getElementById("okb").style.display = "block";
document.getElementById("exportChart").style.display = "block";

}

///LINEAR SCALE SAMPLING TIME COMPARISON BTM
var dFreq_BTM=[]; dPh_BTM=[];
 function BTM_fr_Ts() {
    var sampleTime = $('#Ts').val();

    // Initialize color palettes
    CanvasJS.addColorSet("MagPlot", ["#a2b9bc", "#b2ad7f", "#878f99", "#6b5b95", "#feb236", "#d64161", "#ff7b25", "#d6cbd3", "#eca1a6", "#bdcebe"]);
    CanvasJS.addColorSet("PhPlot", ["#ada397", "#feb236", "#d64161", "#ff7b25", "#d6cbd3", "#eca1a6", "#bdcebe", "#e3eaa7", "#d5e1df", "#b5e7a0"]);
    
    // Clear previous chart data arrays
    chart3.options.data = [];
    chart4.options.data = [];

    for (var dnum2 = 0; dnum2 <= inc2-1; dnum2++) {
        dFreq_BTM[dnum2] = DatafTs2["ar" + dnum2];
        dPh_BTM[dnum2] = DatapTs2["ar" + dnum2];
        
        if (inc2>=0) {
            var stime = spstore2[dnum2];
            
            // Magnitude IIM Chart
            chart3.options.data.push({
                type: "spline",
                //showInLegend: true,
                //name: "Run " + dnum,
                toolTipContent:
                    "<b>Sampling Time</b> = " + stime+' '+ "sec"+"<br/>"+
	  "<b>Time:</b> {x}" +"<br/>"+
  "<b>Magnitude:</b> {y}" ,
                dataPoints: dFreq_BTM[dnum2]
            });

            // Angle Chart
            chart4.options.data.push({
                type: "spline",
                //showInLegend: true,
                //name: "Run " + dnum,
                toolTipContent:
                    "<b>Sampling Time</b> = " + stime+' '+ "sec"+"<br/>"+
	  "<b>Time:</b> {x}" +"<br/>"+
  "<b>Phase:</b> {y}" ,
                dataPoints: dPh_BTM[dnum2]
            });

        }
    }

    chart3.render();
    chart4.render();
    
	 document.getElementById("okb").style.display = "block";
    document.getElementById("exportChart").style.display = "block";

}

///LINEAR SCALE SAMPLING TIME COMPARISON BTM
var dFreq_BTMs=[]; dPh_BTMs=[];
 function BTM_fr_Tss() {
    var sampleTime = $('#Ts').val();

    // Initialize color palettes
    CanvasJS.addColorSet("MagPlot", ["#a2b9bc", "#b2ad7f", "#878f99", "#6b5b95", "#feb236", "#d64161", "#ff7b25", "#d6cbd3", "#eca1a6", "#bdcebe"]);
    CanvasJS.addColorSet("PhPlot", ["#ada397", "#feb236", "#d64161", "#ff7b25", "#d6cbd3", "#eca1a6", "#bdcebe", "#e3eaa7", "#d5e1df", "#b5e7a0"]);
    
    // Clear previous chart data arrays
    chart3s.options.data = [];
    chart4s.options.data = [];

    for (var dnum2 = 0; dnum2 <= inc2s-1; dnum2++) {
        dFreq_BTMs[dnum2] = DatafTs2s["ar" + dnum2];
        dPh_BTMs[dnum2] = DatapTs2s["ar" + dnum2];
        
        if (inc2s>=0) {
            var stime = spstore2s[dnum2];
            
            // Magnitude IIM Chart
            chart3s.options.data.push({
                type: "spline",
                //showInLegend: true,
                //name: "Run " + dnum,
                toolTipContent:
                    "<b>Sampling Time</b> = " + stime+' '+ "sec"+"<br/>"+
	  "<b>Time:</b> {x}" +"<br/>"+
  "<b>Magnitude:</b> {y}" ,
                dataPoints: dFreq_BTMs[dnum2]
            });

            // Angle Chart
            chart4s.options.data.push({
                type: "spline",
                //showInLegend: true,
                //name: "Run " + dnum,
                toolTipContent:
                    "<b>Sampling Time</b> = " + stime+' '+ "sec"+"<br/>"+
	  "<b>Time:</b> {x}" +"<br/>"+
  "<b>Phase:</b> {y}" ,
                dataPoints: dPh_BTMs[dnum2]
            });

        }
    }

    chart3s.render();
    chart4s.render();
    
	 document.getElementById("okb").style.display = "block";
    document.getElementById("exportChart").style.display = "block";

}

///LINEAR SCALE TS COMPARISON PLOTS
function comparePlots_Ts(){
	if(document.getElementById('mchk').value == 1){
		IIM_fr_Ts();
	}
	if(document.getElementById('mchk').value == 2){
		BTM_fr_Ts();
	}
	
}

///LOG SCALE TS COMPARISON PLOTS
function comparePlots_Ts_log(){
	if(document.getElementById('mchk').value == 1){
		IIM_fr_Tss();
	}
	if(document.getElementById('mchk').value == 2){
		BTM_fr_Tss();
	}
	
}


///Method comparison LINEAR SCALE
function comparePlots(){
	var maxf = 10;//50;
	var minf = 0;
	
document.getElementById('plotbucket').style.display  = "block"; 
 
document.getElementById('chartContainer1').style.display  = "block"; 	
	var chart5 = new CanvasJS.Chart("chartContainer1",
    {
      animationEnabled: true,
	  zoomEnabled:true,
	  zoomType: "xy",
		  animationDuration: 10000, 
	  title:{
      text: "Frequency Response (Magnitude vs. Frequency) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Frequency(rad/s)",
		//logarithmic:true,
		maximum:maxf,
		minimum:minf,
      },
    axisY:[ 
	      {//data array1 axis
		  //logarithmic: true,
            title: "Magnitude(T)",
			
			///maximum:0.3,
        },
		{///dataArray2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		
		],
		
	data:[ 
      {        
        type: "spline",
		color:"black",
		showInLegend: true,
		legendText: "IIM Magnitude",
        dataPoints:dArray1
	
       },
	  {        
        type: "spline",
		color:"red",
		showInLegend: true,
		legendText: "BTM Magnitude",
        dataPoints:dArray3
	
       },    
	   
	   
	   ]
       
	});

	chart5.render();	
	 
document.getElementById('chartContainer2').style.display  = "block"; 	
	var chart6 = new CanvasJS.Chart("chartContainer2",
    {
      animationEnabled: true,
	  zoomEnabled:true,
	  zoomType: "xy",
		  animationDuration: 10000, 
	  title:{
      text: "Frequency Response (Phase vs. Frequency) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Frequency(rad/s)",
		//logarithmic:true,
		maximum:maxf,
		minimum:minf,
      },
    axisY: 
	      [ 
	      {//data array1 axis
		  //logarithmic: true,
            title: "Phase",
			
			///maximum:0.3,
        },
		{///dataArray2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		
		],
		
	data:[ 
      {        
        type: "spline",
		color:"blue",
		showInLegend: true,
		legendText: "IIM Phase",
        dataPoints:dArray2
	
       },
	  {        
        type: "spline",
		color:"green",
		showInLegend: true,
		legendText: "BTM Phase",
        dataPoints:dArray4
	
       },    
	   
	   ]
       
	});

	chart6.render();
	
document.getElementById("okb").style.display = "block";
document.getElementById("exportChart").style.display = "block";	
	
}

///Method comparison LOG SCALE
function comparePlots_log(){
	var maxf = 10;//50;
	var minf = 0.1;
	
document.getElementById('plotbucket').style.display  = "block"; 
 
document.getElementById('chartContainer1').style.display  = "block"; 	
	var chart5s = new CanvasJS.Chart("chartContainer1",
    {
      animationEnabled: true,
	  zoomEnabled:true,
	  zoomType: "xy",
		  animationDuration: 10000, 
	  title:{
      text: "Frequency Response (Magnitude vs. Frequency) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Frequency(rad/s)",
		logarithmic:true,
		maximum:maxf,
		minimum:minf,
      },
    axisY:[ 
	      {//data array1 axis
		  //logarithmic: true,
            title: "Magnitude(T) in dB",
			
			///maximum:0.3,
        },
		{///dataArray2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		
		],
		
	data:[ 
      {        
        type: "spline",
		color:"black",
		showInLegend: true,
		legendText: "IIM Magnitude",
        dataPoints:dArray1s
	
       },
	  {        
        type: "spline",
		color:"red",
		showInLegend: true,
		legendText: "BTM Magnitude",
        dataPoints:dArray3s
	
       },    
	   
	   
	   ]
       
	});

	chart5s.render();	
	 
document.getElementById('chartContainer2').style.display  = "block"; 	
	var chart6s = new CanvasJS.Chart("chartContainer2",
    {
      animationEnabled: true,
	  zoomEnabled:true,
	  zoomType: "xy",
		  animationDuration: 10000, 
	  title:{
      text: "Frequency Response (Phase vs. Frequency) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Frequency(rad/s)",
		logarithmic:true,
		maximum:maxf,
		minimum:minf,
      },
    axisY: 
	      [ 
	      {//data array1 axis
		  //logarithmic: true,
            title: "Phase",
			
			///maximum:0.3,
        },
		{///dataArray2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		
		],
		
	data:[ 
      {        
        type: "spline",
		color:"blue",
		showInLegend: true,
		legendText: "IIM Phase",
        dataPoints:dArray2s
	
       },
	  {        
        type: "spline",
		color:"green",
		showInLegend: true,
		legendText: "BTM Phase",
        dataPoints:dArray4s
	
       },    
	   
	   ]
       
	});

	chart6s.render();
	
document.getElementById("okb").style.display = "block";
document.getElementById("exportChart").style.display = "block";	
	
}

///code for downloading the plot area
function saveAs(uri, filename) {

    var link = document.createElement('a');

    if (typeof link.download === 'string') {

        link.href = uri;
        link.download = filename;

        //Firefox requires the link to be in the body
        document.body.appendChild(link);

        //simulate click
        link.click();

        //remove the link when done
        document.body.removeChild(link);

    } else {

        window.open(uri);

    }
}

function saveImg(){
html2canvas(document.querySelector('#plotbucket')).then(function(canvas) {

        saveAs(canvas.toDataURL(), 'Plot.png');
    }); 
	
	
}

function hidePlot(){
	document.getElementById('plotbucket').style.display="none";
	document.getElementById('exportChart').style.display="none";
	document.getElementById('okb').style.display="none";
}