const obecnaData = new Date();
const dataPoczatkowa = new Date("2023-10-26 00:00:00");
const dataKoncowa = new Date("2023-10-26 12:00:00");
const wiekWLatach = Math.floor(roznicaCzasu / (1000 * 60 * 60 * 24 * 365.25)); // Uwzględnia przestępne lata

// Obliczanie różnicy między datami w milisekundach
const roznicaWMillisekundach = dataKoncowa - dataPoczatkowa;

// Przeliczanie różnicy na sekundy
const roznicaWSekundach = roznicaWMillisekundach / 1000;

console.log("Różnica w sekundach: " + roznicaWSekundach);


function data(dane) {
 let skladnikiDaty = dane.split(".");
 let dzien = parseInt(skladnikiDaty[0], 10);
 let miesiac = parseInt(skladnikiDaty[1], 10) - 1; // Miesiące w JavaScript są indeksowane od zera, więc odejmujemy 1
 let rok = parseInt(skladnikiDaty[2], 10);
 return  new Date(rok, miesiac, dzien);
}



f = document.getElementById("form");
w = document.getElementById("wypluwacz");
t = document.getElementById("tabela");
b = "<br>";

f.name.addEventListener("change", function(e) { walid(this); });
f.dob.addEventListener("change", function(e) { pesel(this); });
f.surname.addEventListener("change", function(e) { walid(this); });


function Data(d) {
    dzis = new Date();
    datka = new Date(d.value);
    nowaData = datka - dzis;
    nowaDataH = Math.floor(nowaData / (60*60*1000)); 
    nowaDataD = Math.floor(nowaData / (24*60*60*1000))+1;
    nowaDataM = Math.floor(nowaData / (24*60*60*1000*30.44))+1;
    nowaDataR = Math.floor(nowaData / (24*60*60*1000*365.25))+1;
    datkaW = "H:"+nowaDataH + "D:" +  nowaDataD + "M:" + nowaDataM + "R:" + nowaDataR;

}
function pesel(da) {
   let datka = da.value;
   ck = Array(1,3,7,9,1,3,7,9,1,3);
   plec = f.gender.value;
   pesel = datka[2]+datka[3]+datka[5]+datka[6]+datka[8]+datka[9];
   pesel += Math.floor(Math.random()*10000);

   sk = 0; 
   for(i=0;i < ck.length;i++){ 
       sk= ck[i]*(pesel[i]*1) + sk; 
       console.log(Math.floor(Math.random()*1000)+1000);
    } 
    sk  = ""+sk;
    sk = 10 - (sk[1]*1);
    pesel += sk; 
  
   tabla(da, pesel);
}

function tabla(a,b){
    wiersz = t.insertRow(-1);
    w1 = wiersz.insertCell(0);
    w1.innerHTML = a.name;
    w2 = wiersz.insertCell(1);
    w2.innerHTML =a.value;
    w3 = wiersz.insertCell(2);
    w3.innerHTML = b;
}


function walid(v) {
    if(v.value.length >3) {
 w.innerHTML += v.name + ":";
 w.innerHTML += v.value +b;
 v.style.color="#fff";
 v.style.backgroundColor= "blue";
    } else {
        v.style.color="#fff";
        v.style.backgroundColor= "red";
    }
} 
