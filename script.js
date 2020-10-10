//challenge 3
function rpsgame(yourchoice){
    console.log(yourchoice);
    
    var humanchoice, botchoice;
    humanchoice=yourchoice.id;
    botchoice=numbertochoice(randtorpsint());
    console.log('computer choice:',botchoice);
    results = decidewinner(humanchoice,botchoice);
    console.log(results);

    message=finalmessage(results);
    console.log(message);
    
    rpsfrontend(yourchoice.id, botchoice,message);
    
    }
    function randtorpsint(){
    return Math.floor(Math.random()*3);
    }
    
    
    function numbertochoice(number){
    return ['rock','paper','scissor'][number];
    }
    
    
    
    
    function decidewinner(yourchoice,computerchoice){
    
    var rpsdatabase={'rock':{'scissor':1,'rock':0.5,'paper':0},
    
                     'paper':{'rock':1,'paper':0.5,'scissor':0},
    
                     'scissor':{'paper':1,'scissor':0.5,'rock':0}
    };
    
    var yourscore=rpsdatabase[yourchoice][computerchoice];
    
    var computerscore=rpsdatabase[computerchoice][yourchoice];
    
    
    return [yourscore, computerscore];
    }
    
    
    function finalmessage([yourscore,computerscore]){
    if(yourscore===0){
    return {'message':'You Lost!','color':'red'};
    
    }     else if(yourscore===0.5){
         return {'message':'You Tied','color':'yellow'};
    
    }
    else{
    return {'message': 'You Won!','color' : 'green'};
    
       }
    }
    
    
    function rpsfrontend(humanimagechoice, botimagechoice, finalmessage){
    var imagesdatabase={
            'rock':document.getElementById('rock').src,
             'paper':document.getElementById('paper').src,
                'scissor':document.getElementById('scissor').src}
    // remove
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    
    var humandiv=document.createElement('div');
    var botdiv =document.createElement('div');
    var messagediv=document.createElement('div');
    
    humandiv.innerHTML="<img src = '"+imagesdatabase[humanimagechoice]+"'height=150 width=150 style ='box-shadow:0px 10px 50 px rgba(37,50,233,1);'>"
    messagediv.innerHTML="<h1 style='color:"+finalmessage['color']+";font-size: 60px;padding: 30px; '>"+ finalmessage['message']+ "</h1>"
    botdiv.innerHTML="<img src = '"+imagesdatabase[botimagechoice]+"'height=150 width=150 style ='box-shadow:0px 10px 50 px rgba(243,38,24,1);'>"
    
    document.getElementById('flex-box-rps-div').appendChild(humandiv);
    document.getElementById('flex-box-rps-div').appendChild(messagediv);
    document.getElementById('flex-box-rps-div').appendChild(botdiv);
    }
    
    
    function resetthis(){
    
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();}
    