

let jela=[
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
]

function inicijalizujKorpu(){

    if(!localStorage.getItem("korpa")){
        localStorage.setItem('korpa', JSON.stringify(jela));
    }


}


function izbrisiKorpu(){
    localStorage.clear();
    //dohvatiProizvode()
    let dodataJela=document.querySelectorAll("#dodataJela");
    let korpa=document.getElementById("korpa");
    while(korpa.hasChildNodes()){
        korpa.firstChild.remove();
    }

    //document.getElementById("korpa").removeChild(document.getElementById("dodataJela"))

}

function dodajUKorpu(broj){
    
    /*
    if(broj==6){
        alert("Dodali ste supu sa nudlama i pacjom krvlju")
    }
    */


    /*
    ubaceniProizvodi.push(broj);
    let section=document.getElementById("korpa")
    let p=document.createElement("p")
    p.innerHTML=`Dodali ste artikal broj ${ubaceniProizvodi.length}`
    section.appendChild(p);
    localStorage.setItem(ubaceniProizvodi);

    let korpa = JSON.parse(localStorage.getItem('korpa')) || [];
    let noviProizvod = { ime: 'Proizvod '+broj, cena: 10 };
    korpa.push(noviProizvod);
    localStorage.setItem('korpa', JSON.stringify(korpa));
    */  

    let jela = JSON.parse(localStorage.getItem('korpa')) || [];


    jela[broj]++;
    localStorage.setItem('korpa', JSON.stringify(jela));


}


function dohvatiNazivJela(broj){
    switch (broj) {
        case 0:
            return "Kineski krastavci u soja sosu"
            break;
        case 1:
            return "Prolecne rolnice sa pirincem"
            break;
        case 2:
            return "Jiaozi"
            break;
        case 3:
            return "Budin skok preko zida"
            
            break;   
        case 4:
            return "Pekisnka patka"
            
            break;
        case 5:
            return "Riba veverica"
            
            break;
        case 6:
            return "Kung-Pao piletina"
            
            break;
        case 7:
            return "Mapo Tofu"
            
            break; 
        case 8:
            return "Supa sa nudlama i pacjom krvlju"
            
            break;
        case 9:
            return "Pohovane loptice sa susamom"
            
            break;
        case 10:
            return "Mesecev kolac"
            
            break;
        case 11:
            return "Zmajeva brada"
            
            break;   
        case 12:
            return "Grilovane zmije"
            
            break;
        case 13:
            return "Kineska pileca salata"
            
            break;
        case 14:
            return "Salata od krastavaca i avokada zmije"
            
            break;
        case 15:
            return "Pirinac"
            
            break; 
        case 16:
            return "Asian Pear"
            
            break;
        case 17:
            return "Blood Orange Margarita"
            
            break;   
        case 18:
            return "Firecracker"
            
            break;
        case 19:
            return "Gunfire"
            
            break;
        case 20:
            return "Green Dragon"
            break;
        
    
        default:
            break;
    }

}

function dohvatiCenuJela(broj){
    switch (broj) {
        case 0:
            return 800
            break;
        case 1:
            return 1000
            break;
        case 2:
            return 950
            break;
        case 3:
            return 2800
            
            break;   
        case 4:
            return 3000
            
            break;
        case 5:
            return 3200
            
            break;
        case 6:
            return 2500
            
            break;
        case 7:
            return 2400
            
            break; 
        case 8:
            return 2100
            
            break;
        case 9:
            return 700
            
            break;
        case 10:
            return 800
            
            break;
        case 11:
            return 600
            
            break;   
        case 12:
            return 300
            
            break;
        case 13:
            return 400
            
            break;
        case 14:
            return 450
            
            break;
        case 15:
            return 200
            
            break; 
        case 16:
            return 600
            
            break;
        case 17:
            return 650
            
            break;   
        case 18:
            return 750
            
            break;
        case 19:
            return 500
            
            break;
        case 20:
            return 700
            break;
        
    
        default:
            break;
    }
}

function dohvatiProizvode(){
    /*
    let korpa = JSON.parse(localStorage.getItem('korpa')) || [];
    let korpaElement = document.getElementById('korpa');
    korpa.forEach(proizvod => {
    let proizvodElement = document.createElement('div');
    proizvodElement.textContent = `${proizvod.ime}: ${proizvod.cena}`;
    korpaElement.appendChild(proizvodElement);
    });
    let cena = document.createElement('div');
    cena.textContent=1500
    korpa.appendChild(cena);
    */

    let jela = JSON.parse(localStorage.getItem('korpa')) || [];

    console.log(jela)

    var cenaUkupno=0
    for (let index = 0; index < jela.length; index++) {
        if(jela[index]>0){
            let naziv=dohvatiNazivJela(index);
            let cena=dohvatiCenuJela(index);
            cena*=jela[index]
            cenaUkupno+=cena;
            naziv+=` x ${jela[index]}`
            let korpaElement = document.getElementById('korpa');
            let proizvodElement = document.createElement('div');
            proizvodElement.id="dodataJela"
            proizvodElement.textContent = `${naziv}: ${cena}`;
            korpaElement.appendChild(proizvodElement);

        }
        
    }
    let korpaElement = document.getElementById('korpa');
    let cenaElement = document.createElement('div');
    cenaElement.textContent=`Ukupno : ${cenaUkupno}`;
    korpaElement.appendChild(cenaElement);



}


function ispis(){
    

}

function osvezi(){

    setInterval(() => {
        
        let korpa = JSON.parse(localStorage.getItem('korpa')) || [];
        let korpaElement = document.getElementById('korpa');
        korpa.forEach(proizvod => {
        let proizvodElement = document.createElement('div');
        proizvodElement.textContent = `${proizvod.ime}: ${proizvod.cena}`;
        korpaElement.appendChild(proizvodElement);


    }, 1500);


})}


dohvatiProizvode();