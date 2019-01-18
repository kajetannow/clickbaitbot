var display = document.getElementById('newsTitle');
var button = document.getElementById('generate');
var dataText, data, noun, start, mNoun, mAdj, end;
var xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json');
xhr.responseType = 'text';
xhr.send();

xhr.onload = function(){
    //if(xhr.status === 200)
    dataText = xhr.response;
    data = JSON.parse(dataText);
    ({ noun, start, mNoun, mAdj, end} = data);

}


function randomize(anArray){
    return anArray[Math.floor(Math.random()*anArray.length)];
}


 var generateNews = function(){
    var n = randomize(noun);
    var s = randomize(start);
    var midAdj = randomize(mAdj);
    var mN = randomize(mNoun);
    var e = randomize(end);
    var phrase = `${n.number[s.plural]} ${s.content} ${midAdj.content[mN.nMOs]} ${mN.content}. ${e}`;
    display.textContent = phrase;
}
//nMOs - niemęskoosobowy
;

button.addEventListener("click", generateNews);