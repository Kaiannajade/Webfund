console.log('page loading...');


var likes=[9,12,9];
var spans=[
    document.querySelector('#post1'),
    document.querySelector('#post2'),
    document.querySelector('#post3'),
]


var likeCount1=0;
var likeSpan1= document.querySelector('#post1');

function like1() {
    likeCount1++;
    likeSpan1.innerText= likeCount1 +"like(s)";
}
var likeCount2=0;
var likeSpan2= document.querySelector('#post2');


function like2() {
    likeCount2++;
    likeSpan2.innerText= likeCount2 +"like(s)";
}
var likeCount3=0;
var likeSpan3= document.querySelector('#post3');

    function like3() {
       console.log(likeSpan3.innerText)
       
        likeCount3++;
        likeSpan3.innerText= likeCount3 +"like(s)";
        console.log(likeSpan3.innerText)
    }
    
    