


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
		    
			var part=math.sqrt(math.subtract(math.pow(a1,2),math.multiply(4,a0,a2)));
			var num1=math.add(-a1,part);
			var num2=math.add(-a1,-part);
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
			
			var e0=math.subtract(b1,math.multiply(a1,math.divide(b0,a0)));
			var e1=math.subtract(b2,math.multiply(a2,math.divide(b0,a0)));
			
			var A1=math.divide(math.add(math.multiply(e0,R1),e1),math.subtract(R1,R2));
			var A2=math.divide(math.add(math.multiply(e0,R2),e1),math.subtract(R2,R1));
			
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
	        document.getElementById('tfn12').value = A2;
			
			
	        document.getElementById('tfd10').value = -R1;
	        document.getElementById('tfd11').value = -R2;
	        
	
	        
			
			//document.getElementById('my-div').innerHTML = '<img src="./images/pf.png">';
			
			outputText2_1=" b<sub>0</sub>="+b0+";  b<sub>1</sub>="+b1+"; b<sub>2</sub>="+b2+ "; a<sub>0</sub>="+a0+";  a<sub>1</sub>="+a1+";  a<sub>2</sub>="+a2+ "";
			outputText3=" p<sub>1</sub>="+-R1+"; p<sub>2</sub>="+-R2+ " b<sub>0</sub>="+b0+"; e<sub>0</sub>="+e0+";  e<sub>1</sub>="+e1+";  A<sub>1</sub>="+A1+ "; A<sub>2</sub>="+A2+"";
			
			//document.getElementById("output_text2_1").innerHTML=outputText2_1;
			//document.getElementById("output_text3").innerHTML=outputText3;
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
			
           	
	        var part=math.sqrt(math.subtract(math.pow(a1,2),math.multiply(4,a0,a2)));
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
	var eTp1=math.divide(math.round(math.multiply(math.exp(math.multiply(T,-R1)),100)),100);
	var eTp2=math.divide(math.round(math.multiply(math.exp(math.multiply(T,-R2)),100)),100);
	var c1=math.divide(math.round(math.multiply(math.add(eTp1,eTp2),100)),100);
	var c2=math.divide(math.round(math.multiply(math.multiply(eTp1,eTp2),100)),100);
	var d0=math.divide(math.round(math.multiply(math.add(b0,TA1,TA2),100)),100);
	var d1=math.divide(math.round(math.multiply(math.add(b0,math.multiply(TA1,eTp2),math.multiply(TA2,eTp1)),100)),100);
	var d2=math.divide(math.round(math.multiply(math.multiply(b0,eTp1,eTp2),100)),100);
	
	        
			document.getElementById('tfn13').value = b0;
	        document.getElementById('tfn14').value = TA1;	
	        document.getElementById('tfn15').value = TA2;
			
	        document.getElementById('tfn16').value = b0;
			document.getElementById('tfn17').value = TA1;
			document.getElementById('tfn18').value = TA2;
			
			document.getElementById('tfn19').value = d0;
			document.getElementById('tfn20').value = d1;
			document.getElementById('tfn21').value = d2;
			
			document.getElementById('tfd12').value = eTp1;
	        document.getElementById('tfd13').value = eTp2;
			
			document.getElementById('tfd14').value = eTp1;
	        document.getElementById('tfd15').value = eTp2;
			
			document.getElementById('tfd16').value = 1;
	        document.getElementById('tfd17').value = c1;
			document.getElementById('tfd18').value = c2;
	        
			
			
			/* outputText4=" b<sub>0</sub>="+b0+";  TA<sub>1</sub>="+TA1+"; TA<sub>2</sub>="+TA2+ "; e<sup>Tp<sub>1</sub></sup>="+eTp1+";  e<sup>Tp<sub>2</sub></sup>="+eTp2+"";
			outputText4_1=" d<sub>0</sub>="+d0+"; d<sub>1</sub>="+d1+ "; d<sub>2</sub>="+d2+"; c<sub>1</sub>="+c1+";  c<sub>2</sub>="+c2+"";
			
			/* document.getElementById("output_text4").innerHTML=outputText4;
			document.getElementById("output_text4_1").innerHTML=outputText4_1; */ 
}
var incr1 =0,incr2=0;
function IIMF(){
	var outputText5;
	var outputText5_1;
	incr1=1;
	if(incr1==1 && incr2==1){
		document.getElementById("run3").style.display="block";
		document.getElementById("run4").style.display="block";
	document.getElementById("run5").style.display="block";	
	}	
		
	if(incr1==1 && incr2!=1){	
	document.getElementById("run3").style.display="block";
	document.getElementById("run5").style.display="none";
	document.getElementById("run4").style.display="none";
	}
	if(incr1!=1 && incr2==1){	
	document.getElementById("run3").style.display="none";
	document.getElementById("run5").style.display="none";
	document.getElementById("run4").style.display="block";
	}
	
	
	 document.getElementById('tfbody4').style.display = "block"; 
	  document.getElementById('PlotFreq').style.display = "block";
	   
	  
	        var b0 = document.getElementById('b_0').value;			
			var b1 = document.getElementById('b_1').value;
			var b2 = document.getElementById('b_2').value;
            var a0 = document.getElementById('a_0').value;
			var a1 = document.getElementById('a_1').value;
			var a2 = document.getElementById('a_2').value;
	        var T = document.getElementById('Ts').value;
			
           	
	        var part=math.sqrt(math.subtract(math.pow(a1,2),math.multiply(4,a0,a2)));
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
	var eTp1=math.divide(math.round(math.multiply(math.exp(math.multiply(T,-R1)),100)),100);
	var eTp2=math.divide(math.round(math.multiply(math.exp(math.multiply(T,-R2)),100)),100);
	var c1=math.divide(math.round(math.multiply(math.add(eTp1,eTp2),100)),100);
	var c2=math.divide(math.round(math.multiply(math.multiply(eTp1,eTp2),100)),100);
	var d0=math.divide(math.round(math.multiply(math.add(b0,TA1,TA2),100)),100);
	var d1=math.divide(math.round(math.multiply(math.add(b0,math.multiply(TA1,eTp2),math.multiply(TA2,eTp1)),100)),100);
	var d2=math.divide(math.round(math.multiply(math.multiply(b0,eTp1,eTp2),100)),100);
	
	        
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
	        document.getElementById('tfdf17').value = c1;
			document.getElementById('tfdf18').value = c2;
	        
			
			
			/* outputText4=" b<sub>0</sub>="+b0+";  TA<sub>1</sub>="+TA1+"; TA<sub>2</sub>="+TA2+ "; e<sup>Tp<sub>1</sub></sup>="+eTp1+";  e<sup>Tp<sub>2</sub></sup>="+eTp2+"";
			outputText4_1=" d<sub>0</sub>="+d0+"; d<sub>1</sub>="+d1+ "; d<sub>2</sub>="+d2+"; c<sub>1</sub>="+c1+";  c<sub>2</sub>="+c2+"";
			
			document.getElementById("output_text5").innerHTML=outputText5;
			document.getElementById("output_text5_1").innerHTML=outputText5_1; */
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
	
	        var k=math.divide(2,T);
			var b0k2=math.multiply(b0,math.pow(k,2));
			var b1k=math.multiply(b1,k);
			var a0k2=math.multiply(a0,math.pow(k,2));
			var a1k=math.multiply(a1,k);
			
			var d0=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,b1k,b2),math.add(a0k2,a1k,a2)),100)),100);
			var d1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*b2,2*b0k2),math.add(a0k2,a1k,a2)),100)),100);
			var d2=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,-b1k,b2),math.add(a0k2,a1k,a2)),100)),100);
			
			var c1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*a2,2*a0k2),math.add(a0k2,a1k,a2)),100)),100);
			var c2=math.divide(math.round(math.multiply(math.divide(math.add(a0k2,-a1k,a2),math.add(a0k2,a1k,a2)),100)),100);
			
			document.getElementById('tfn22').value = d0;
	        document.getElementById('tfn23').value = d1;	
	        document.getElementById('tfn24').value = d2;
			        			
						
			document.getElementById('tfd19').value = 1;
	        document.getElementById('tfd20').value = c1;
			document.getElementById('tfd21').value = c2;
	
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
		document.getElementById("run4").style.display="block";
	document.getElementById("run5").style.display="block";	
	}	
		
	if(incr1!=1 && incr2==1){	
	document.getElementById("run3").style.display="none";
	document.getElementById("run5").style.display="none";
	document.getElementById("run4").style.display="block";
	}
	if(incr1==1 && incr2!=1){	
	document.getElementById("run3").style.display="block";
	document.getElementById("run5").style.display="none";
	document.getElementById("run4").style.display="none";
	}
	
	 document.getElementById('tfbody6').style.display = "block";
	  document.getElementById('PlotFreq').style.display = "block";
	 
	        var b0 = document.getElementById('b_0').value;			
			var b1 = document.getElementById('b_1').value;
			var b2 = document.getElementById('b_2').value;
            var a0 = document.getElementById('a_0').value;
			var a1 = document.getElementById('a_1').value;
			var a2 = document.getElementById('a_2').value;
	        var T = document.getElementById('Ts').value; 
	
	        var k=math.divide(2,T);
			var b0k2=math.multiply(b0,math.pow(k,2));
			var b1k=math.multiply(b1,k);
			var a0k2=math.multiply(a0,math.pow(k,2));
			var a1k=math.multiply(a1,k);
			
			var d0=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,b1k,b2),math.add(a0k2,a1k,a2)),100)),100);
			var d1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*b2,2*b0k2),math.add(a0k2,a1k,a2)),100)),100);
			var d2=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,-b1k,b2),math.add(a0k2,a1k,a2)),100)),100);
			
			var c1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*a2,2*a0k2),math.add(a0k2,a1k,a2)),100)),100);
			var c2=math.divide(math.round(math.multiply(math.divide(math.add(a0k2,-a1k,a2),math.add(a0k2,a1k,a2)),100)),100);
			
			document.getElementById('tfnf22').value = d0;
	        document.getElementById('tfnf23').value = d1;	
	        document.getElementById('tfnf24').value = d2;
			        			
						
			document.getElementById('tfdf19').value = 1;
	        document.getElementById('tfdf20').value = c1;
			document.getElementById('tfdf21').value = c2;
	
	        /* outputText4=" d<sub>0</sub>="+d0+"; d<sub>1</sub>="+d1+ "; d<sub>2</sub>="+d2+";";
			outputText4_1=" c<sub>1</sub>="+c1+";  c<sub>2</sub>="+c2+"";
			
			document.getElementById("output_text7").innerHTML=outputText7;
			document.getElementById("output_text7_1").innerHTML=outputText7_1; */
}


///// for plots////////////////////



/* function refresh(){
//location.reload();	
document.getElementById('plotbucket').style.display = "none";
document.getElementById('chartContainer1').style.display = "none";
document.getElementById('chartContainer2').style.display = "none";
dataOPPoints=[];	
dataOPPoints1=[];

//document.getElementById('0.3fr').style.display = "none";



} */

var dataOPPoints=[];	///for plotting chart
var dataOPPoints1=[];




//////////////////////// ZOH 
var dArray1=[],dArray2=[],dArray3=[],dArray4=[];
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
			
           	
	        var part=math.sqrt(math.subtract(math.pow(a1,2),math.multiply(4,a0,a2)));
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
	var eTp1=math.divide(math.round(math.multiply(math.exp(math.multiply(T,-R1)),100)),100);
	var eTp2=math.divide(math.round(math.multiply(math.exp(math.multiply(T,-R2)),100)),100);
	var c0 = 1;
	var c1=math.divide(math.round(math.multiply(math.add(eTp1,eTp2),100)),100);
	var c2=math.divide(math.round(math.multiply(math.multiply(eTp1,eTp2),100)),100);
	var d0=math.divide(math.round(math.multiply(math.add(b0,TA1,TA2),100)),100);
	var d1=math.divide(math.round(math.multiply(math.add(b0,math.multiply(TA1,eTp2),math.multiply(TA2,eTp1)),100)),100);
	var d2=math.divide(math.round(math.multiply(math.multiply(b0,eTp1,eTp2),100)),100);
	
	console.log(d0);
	console.log(d1);
	console.log(d2);
	console.log(c0);
	console.log(c1);
	console.log(c2);
	
	var maxf = 10;
	var minf = 0;
	
		
    var yop = new Array();	///continous data output result storing
	var phase = [];
	
	var	f = minf;
	while(f<=maxf){
	//for(var f=minf;f<=maxf;f++){
	f1=f;
		
	//f = f.toFixed(3);
	//f1=f;
	//fre=math.subtract(fre,-0.1);
	//fre=fre.toFixed(3);
	var w = math.multiply(2,math.pi,f);
	//console.log(w);
	
	/* var num1 = math.divide(math.round(math.multiply(math.multiply(d0,math.pow(math.e,math.complex(0,math.multiply(2,w)))),100)),100);
	
	var num2 = math.divide(math.round(math.multiply(math.multiply(d1,math.pow(math.e,math.complex(0,w))),100)),100);
	
	var den1 = math.divide(math.round(math.multiply(math.multiply(c0,math.pow(math.e,math.complex(0,math.multiply(2,w)))),100)),100);
	var den2 = math.divide(math.round(math.multiply(math.multiply(c1,math.pow(math.e,math.complex(0,w))),100)),100);
	
	var yy = math.divide(math.add(num1,num2,d2),math.add(den1,den2,c2)); */
	var i = math.sqrt(-1);
	/* var num = math.add(math.multiply(d0,math.pow(math.e,math.multiply(2,w,i))),math.multiply(d1,math.pow(math.e,math.multiply(1,w,i))),d2);
	var den = math.add(math.multiply(c0,math.pow(math.e,math.multiply(2,w,i))),math.multiply(c1,math.pow(math.e,math.multiply(1,w,i))),c2);
	var yy = math.divide(num,den); */
	
	var num1 = math.multiply(math.complex(math.cos(math.multiply(2,w)),math.sin(math.multiply(w,2))),d0);
	var num2 = math.multiply(math.complex(math.cos(math.multiply(1,w)),math.sin(math.multiply(w,1))),d1);
	var num = math.add(num1,num2,d2);
	
	var den1 = math.multiply(math.complex(math.cos(math.multiply(2,w)),math.sin(math.multiply(w,2))),c0);
	var den2 = math.multiply(math.complex(math.cos(math.multiply(1,w)),math.sin(math.multiply(w,1))),c1);
	var den = math.add(den1,den2,c2);
	
	var yy = math.abs(math.divide(num,den));
	
	//console.log(yy);
	
	/* var scndprt1 = math.complex(0,w);
	
	var eprt1 = math.pow(math.e,math.complex(0,math.dotMultiply(-w,Ts)));
	var frstprt1 = math.subtract(1,eprt1);
	/// var y = (math.divide(frstprt1,scndprt1)).re;
	
	var frth1 = math.multiply(w,Ts,1/2); */
	
	
	// var yy = math.multiply(Ts,math.sin(frth1),1/frth1);
	/* var real = yy.re;
	var imginary = yy.im;
	var absolute = math.sqrt(math.add(math.pow(real,2),math.pow(imginary,2))); */
	
	//yop[f] = absolute;
	//yop[f] = 20*Math.log10(absolute);
	yop[f] = math.multiply(20,math.log(yy,10));
	//console.log(yop[f]);
	/// yop[f] = Math.abs(y);
	dataOPPoints1.push({x:(w), y:(yop[f])});///magnitude part
	dArray1 = dataOPPoints1;
	
	
	var w1 = math.multiply(2,math.pi,f);
	
	var y = math.divide(num,den).re;
	
	var imagy = math.divide(num,den).im;
	
	/* var y = (math.divide(frstprt,scndprt)).re;
	
	var imagy = (math.divide(frstprt,scndprt)).im; */
	
	var fraction = math.divide(imagy,y);
	//phase = math.atan2(fraction);
	//phase[f] = math.atan2(imagy,y);
	//phase[f]=(180/Math.PI)*math.atan2(imagy,y);
	
	phase[f]=math.multiply(math.divide(180,math.pi),math.atan2(imagy,y));
	
	dataOPPoints2.push({x:(w), y:(phase[f])});//phase part
	dArray2 = dataOPPoints2;
	
	
	
	//console.log("mag="+yop[f]);
	//console.log("phase="+phase[f]);
	//console.log("freq="+f);
	
	f=math.add(f,0.01);
}

document.getElementById('plotbucket').style.display  = "block"; 
 
document.getElementById('chartContainer1').style.display  = "block"; 	
	var chart1 = new CanvasJS.Chart("chartContainer1",
    {
      animationEnabled: true,
	  zoomEnabled:true,
	  zoomType: "xy",
		  animationDuration: 10000, 
	  title:{
      text: "Frequency Response (Magnitude vs. Hz) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Frequency(Hz)",
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
	//document.getElementById("result").style.display = "block";
	/*document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});*/	




//document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer2').style.display  = "block"; 	
	var chart2 = new CanvasJS.Chart("chartContainer2",
    {
      animationEnabled: true,
	  zoomEnabled:true,
	  zoomType: "xy",
		  animationDuration: 10000, 
	  title:{
      text: "Frequency Response (Phase vs. Hz) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Frequency(Hz)",
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
		color:"109DB6",
        dataPoints:dataOPPoints2
	
       }]
       
	});

	chart2.render();


/* 
	
	//document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
		
	/*chart1.exportChart({format: "jpg"});
	chart2.exportChart({format: "jpg"});*/
	/*
	window.print();
	
	
	});	 */


}


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
	
	        var k=math.divide(2,T);
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
	console.log(c2);
	
	var maxf = 10;
	var minf = 0;
	
		
    var yop = new Array();	///continous data output result storing
	var phase = [];
	
	var	f = minf;
	while(f<=maxf){
	//for(var f=minf;f<=maxf;f++){
	f1=f;
		
	//f = f.toFixed(3);
	//f1=f;
	//fre=math.subtract(fre,-0.1);
	//fre=fre.toFixed(3);
	var w = math.multiply(2,math.pi,f);
	//console.log(w);
	
	/* var num1 = math.divide(math.round(math.multiply(math.multiply(d0,math.pow(math.e,math.complex(0,math.multiply(2,w)))),100)),100);
	
	var num2 = math.divide(math.round(math.multiply(math.multiply(d1,math.pow(math.e,math.complex(0,w))),100)),100);
	
	var den1 = math.divide(math.round(math.multiply(math.multiply(c0,math.pow(math.e,math.complex(0,math.multiply(2,w)))),100)),100);
	var den2 = math.divide(math.round(math.multiply(math.multiply(c1,math.pow(math.e,math.complex(0,w))),100)),100);
	
	var yy = math.divide(math.add(num1,num2,d2),math.add(den1,den2,c2)); */
	var i = math.sqrt(-1);
	/* var num = math.add(math.multiply(d0,math.pow(math.e,math.multiply(2,w,i))),math.multiply(d1,math.pow(math.e,math.multiply(1,w,i))),d2);
	var den = math.add(math.multiply(c0,math.pow(math.e,math.multiply(2,w,i))),math.multiply(c1,math.pow(math.e,math.multiply(1,w,i))),c2);
	var yy = math.divide(num,den); */
	
	var num1 = math.multiply(math.complex(math.cos(math.multiply(2,w)),math.sin(math.multiply(w,2))),d0);
	var num2 = math.multiply(math.complex(math.cos(math.multiply(1,w)),math.sin(math.multiply(w,1))),d1);
	var num = math.add(num1,num2,d2);
	
	var den1 = math.multiply(math.complex(math.cos(math.multiply(2,w)),math.sin(math.multiply(w,2))),c0);
	var den2 = math.multiply(math.complex(math.cos(math.multiply(1,w)),math.sin(math.multiply(w,1))),c1);
	var den = math.add(den1,den2,c2);
	
	var yy = math.abs(math.divide(num,den));
	
	//console.log(yy);
	
	/* var scndprt1 = math.complex(0,w);
	
	var eprt1 = math.pow(math.e,math.complex(0,math.dotMultiply(-w,Ts)));
	var frstprt1 = math.subtract(1,eprt1);
	/// var y = (math.divide(frstprt1,scndprt1)).re;
	
	var frth1 = math.multiply(w,Ts,1/2); */
	
	
	// var yy = math.multiply(Ts,math.sin(frth1),1/frth1);
	/* var real = yy.re;
	var imginary = yy.im;
	var absolute = math.sqrt(math.add(math.pow(real,2),math.pow(imginary,2))); */
	
	//yop[f] = absolute;
	//yop[f] = 20*Math.log10(absolute);
	yop[f] = math.multiply(20,math.log(yy,10));
	//console.log(yop[f]);
	/// yop[f] = Math.abs(y);
	dataOPPoints3.push({x:(w), y:(yop[f])});///magnitude part
	dArray3 = dataOPPoints3;
	
	
	var w1 = math.multiply(2,math.pi,f);
	
	var y = math.divide(num,den).re;
	
	var imagy = math.divide(num,den).im;
	
	/* var y = (math.divide(frstprt,scndprt)).re;
	
	var imagy = (math.divide(frstprt,scndprt)).im; */
	
	var fraction = math.divide(imagy,y);
	//phase = math.atan2(fraction);
	//phase[f] = math.atan2(imagy,y);
	//phase[f]=(180/Math.PI)*math.atan2(imagy,y);
	
	phase[f]=math.multiply(math.divide(180,math.pi),math.atan2(imagy,y));
	
	dataOPPoints4.push({x:(w), y:(phase[f])});//phase part
	dArray4 = dataOPPoints4;
	
	
	
	//console.log("mag="+yop[f]);
	//console.log("phase="+phase[f]);
	//console.log("freq="+f);
	
	f=math.add(f,0.01);
}

document.getElementById('plotbucket').style.display  = "block"; 
 
document.getElementById('chartContainer1').style.display  = "block"; 	
	var chart1 = new CanvasJS.Chart("chartContainer1",
    {
      
	  
	  animationEnabled: true,
	  zoomEnabled:true,
	  zoomType: "xy",
		  animationDuration: 10000, 
	  title:{
      text: "Frequency Response (Magnitude vs. Hz) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Frequency(Hz)",
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

	chart1.render();	
	//document.getElementById("result").style.display = "block";
	/*document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});*/	




//document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer2').style.display  = "block"; 	
	var chart2 = new CanvasJS.Chart("chartContainer2",
    {
      animationEnabled: true,
	  zoomEnabled:true,
	  zoomType: "xy",
		  animationDuration: 10000, 
	  title:{
      text: "Frequency Response (Phase vs. Hz) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Frequency(Hz)",
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
		color:"109DB6",
        dataPoints:dataOPPoints4

       }]
       
	});

	chart2.render();


/* 
	
	//document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
		
	/*chart1.exportChart({format: "jpg"});
	chart2.exportChart({format: "jpg"});*/
	/*
	window.print();
	
	
	});	 */


}

function comparePlots(){
	var maxf = 10;
	var minf = 0;
	
document.getElementById('plotbucket').style.display  = "block"; 
 
document.getElementById('chartContainer1').style.display  = "block"; 	
	var chart1 = new CanvasJS.Chart("chartContainer1",
    {
      animationEnabled: true,
	  zoomEnabled:true,
	  zoomType: "xy",
		  animationDuration: 10000, 
	  title:{
      text: "Frequency Response (Magnitude vs. Hz) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Frequency(Hz)",
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

	chart1.render();	
	//document.getElementById("result").style.display = "block";
	/*document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});*/	




//document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer2').style.display  = "block"; 	
	var chart2 = new CanvasJS.Chart("chartContainer2",
    {
      animationEnabled: true,
	  zoomEnabled:true,
	  zoomType: "xy",
		  animationDuration: 10000, 
	  title:{
      text: "Frequency Response (Phase vs. Hz) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Frequency(Hz)",
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

	chart2.render();

	
	
	
	
	
}