document.getElementById("education_box1").addEventListener("mouseover", education1);
document.getElementById("education_box2").addEventListener("mouseover", education1);
document.getElementById("education_box3").addEventListener("mouseover", education1);
document.getElementById("education_box1").addEventListener("mouseout",education11);
document.getElementById("education_box2").addEventListener("mouseout",education11);
document.getElementById("education_box3").addEventListener("mouseout",education11);
function education1() {
    var div1;
    if(this.id==="education_box1")
    {
        div1 = document.getElementById("education_box1");
        
        div1.innerHTML="<br><br><br><br><b>In the year of 2018,<br><br>I have completed SSLC in RKR Grks Matriculation Higher Secondary School with the percentage of<br><br>87%</b>";
    }
    else if(this.id==="education_box2")
    {
        div1=document.getElementById("education_box2");
        div1.innerHTML="<br><br><br><br><b>In the year of 2020,<br><br>I have completed HSC in RKR Grks Matriculation Higher Secondary School with the percentage of<br><br>75%</b>";
    }
    else if(this.id==="education_box3")
    {
        div1=document.getElementById("education_box3");
        div1.innerHTML="<br><br><br><br><b>B.E(ECE)(2020-2024)<br><br>I am pursuing B.E(ECE) in Sri Eshwar College of Engineering with the CGPA of<br><br>8.3*</b>";
    }
    div1.style.backgroundColor = "#0ee9de";
    div1.style.color="black";
    div1.style.textAlign="center";
    div1.style.fontFamily="sans-serif";
    div1.style.fontSize="20px";
    }
function education11() {
    var div1;
    var heading;
    if(this.id=="education_box1")
    {
        div1=document.getElementById("education_box1");
        div1.style.backgroundColor="rosybrown";
        heading=document.createElement("h1");
        div1.innerHTML="";
        heading.innerHTML="SSLC";
        
    }
    else if(this.id=="education_box2")
    {
        div1=document.getElementById("education_box2");
        div1.style.backgroundColor="blanchedalmond";
        heading=document.createElement("h1");
        div1.innerHTML="";
        heading.innerHTML="HSC"; 
    }
    else if(this.id=="education_box3")
    {
        div1=document.getElementById("education_box3");
        div1.style.backgroundColor="darkgray";
        heading=document.createElement("h1");
        div1.innerHTML="";
        heading.innerHTML="B.E(ECE)";
        
    }
    div1.appendChild(heading);
    heading.style.marginTop="150px";
    div1.style.color="white";
    div1.style.fontFamily="sans-serif";
    div1.style.fontSize="25px";
}
document.getElementById("project1").addEventListener("mouseover",project1);
document.getElementById("project2").addEventListener("mouseover",project1);
document.getElementById("project3").addEventListener("mouseover",project1);
function project1(){
    var p1;
    if(this.id=="project1")
    {
        p1=document.getElementById("project1");
        p1.innerHTML="<h2><b>Self Balancing Robot</h2><br>Self-balancing robot is a hardware project and it use a 'closed-loop feedback control' system. This means that realtime data from motion sensors are used to control the motors and quickly compensate for any tilting motion in order to keep the robot upright.</b>"
    }
    else if(this.id=="project2")
    {
        p1=document.getElementById("project2");
        p1.innerHTML="<h2><b>Keypad Based Door Lock System</h2><br>Password based door lock system is a hardware project and it allows only approved persons to access restricted areas. This system is fully controlled by Arduino. The password can be entered via a keypad.</b>"
    }
    else if(this.id=="project3")
    {
        p1=document.getElementById("project3");
        p1.innerHTML="<h2><b>Rock Paper Scissor</h2><br>Rock, paper and scissors game is a software project and it is a simple fun game in which both the players have to make a rock, paper, or scissors. It has only two possible outcomes a draw, or a win for one player and a loss for the other player."
    }
    p1.style.backgroundColor = "#0ee9de";
    p1.style.color="black";
    p1.style.textAlign="center";
    p1.style.fontFamily="sans-serif";
    p1.style.fontSize="20px";
}
document.getElementById("project1").addEventListener("mouseout",project11);
document.getElementById("project2").addEventListener("mouseout",project11);
document.getElementById("project3").addEventListener("mouseout",project11);
function project11(){
    var div2;
    var pp1;
    if(this.id=="project1")
    {
        div2=document.getElementById("project1");
        div2.innerHTML="";
        pp1=document.createElement("img");
        pp1.src="https://tse2.mm.bing.net/th?id=OIP.wfPisOUGQJKG-Qn8U-ro5gHaFj&pid=Api&P=0&h=180";
       
    }
    else if(this.id=="project2")
    {
        div2=document.getElementById("project2");
        div2.innerHTML="";
        pp1=document.createElement("img");
        pp1.src="https://tse2.mm.bing.net/th?id=OIP.trBDdEC3RqIljJey48HGLwHaGF&pid=Api&P=0&h=180";
    }
    else if(this.id=="project3")
    {
        div2=document.getElementById("project3");
        div2.innerHTML="";
        pp1=document.createElement("img");
        pp1.src="https://tse4.mm.bing.net/th?id=OIP.id2gtYoIA2HBoXeCkFDCCwHaHa&pid=Api&P=0&h=180";
    }
    pp1.style.height="100%";
    pp1.style.width="100%";
    pp1.style.borderRadius="5px";
    div2.appendChild(pp1);
}