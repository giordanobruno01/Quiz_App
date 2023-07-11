function checkAnswer(){
   var anwers =  document.getElementById('quiz');

    var an1 = anwers.elements['q1'].value;
    var an2 = anwers.elements['q2'].value;
    document.getElementById("result").innerHTML = an1 + " ans2 " + an2;
    console.log(an1)
   
}