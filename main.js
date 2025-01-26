let hr=document.getElementById('hr')
let mn=document.getElementById('mn')
let sc=document.getElementById('sc')



function clock(){
    let day=new Date();

    var hh=(day.getHours() / 12) * 360;
    var mm=(day.getMinutes() /  60) * 360 ;
    var ss=(day.getSeconds() / 60 ) * 360;
    
    
    
    hr.style.transform=`rotate(${hh}deg)`
    mn.style.transform=`rotate(${mm}deg)`
    sc.style.transform=`rotate(${ss}deg)`
}




setInterval(()=>{
clock()
},1000)


clock()


// clock Digital

function digitalClock(){
    var hour=document.getElementById('hour')
    var minute=document.getElementById('minute')
    var second=document.getElementById('second')
    var ampm=document.getElementById('ampm')
    
    
    
    var h=new Date().getHours()
    var m=new Date().getMinutes()
    var s=new Date().getSeconds()
    
    am= h >= 12 ? "Pm" : "Am"
    

    if(h > 12){
        h=h-12
    }


    h=(h < 10) ? "0"+h : h
    m=(m < 10) ? "0"+m : m;
    s=(s < 10) ? "0"+s : s
    
    
    
    
    hour.innerHTML=h
    minute.innerHTML=m
    second.innerHTML=s
    ampm.innerHTML=am
}


setInterval(()=>{
digitalClock()
},1000)

digitalClock()


