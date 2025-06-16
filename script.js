
function getRandomDate(){
    let start=new Date(1995, 5, 16);
    let end=new Date();
    let randomTime=start.getTime()+Math.random()*(end.getTime()-start.getTime());
    let randomDate= new Date(randomTime);

    let year=randomDate.getFullYear();
    let month=randomDate.getMonth()+1;
    let day=randomDate.getDate();

    return year + "-" + month + "-" + day;
}


async function getData(date){
    const apiKey="3CjUmyyo8nvBBfFL3cSR93XEBPSPzmXkeLHOB9EH";
    const url=`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

    const response= await fetch(url);
    const json=await response.json();

    document.body.style.backgroundImage=`url(${json.url}`;
    document.querySelector(".Title").innerHTML=json.title;
    document.querySelector(".Explanation").innerHTML=json.explanation;
}

document.getElementById("randomBtn").addEventListener("click", function(){
    let randomDate=getRandomDate();
    getData(randomDate);
});

let today=new Date();
getData(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`);

document.getElementById("closeBtn").addEventListener("click", function(){
    document.getElementById("navbar").style.display="none";
});

document.getElementById("infoBtn").addEventListener("click", function(){
    document.getElementById("navbar").style.display="flex";
});