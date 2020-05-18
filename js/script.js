const salon = {
    name:"The Fashion Pet",
    phone: "(619)619-6196",
    address:{
        street: "705 Market Street"
    },
    workingHours:{
        days: "Monday-Friday",
        businessHours: "9am-5pm"
    },
    pets:[],
    count:function(){
        alert("Register a new Pet Appointment" + this.pets.length + "pets");
    }
}

let {name,phone,address:{street},workingHours:{days,businessHours}}=salon;

document.getElementById("info-main").innerHTML=`
    <h2> ${name} </h2>
    <p> Phone Number: ${phone}, ${street} </p>

`;
let c=0;

class Pet{
    constructor(name,age,gender,breed,services,ownerName,contactPhone){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.services=services;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
        this.id="pet"+c;
        c+=1;
    }
    ownerInfo=function(){
        console.log(`${this.ownerName} ${this.contactPhone}`);
    }
}

const Uno = new Pet("Uno","2","Male","Boxer-Mix","Full Service","Rene","655656565");

Uno.ownerInfo();
displayList(Uno);

let txtName = document.getElementById('petName');
let txtAge = document.getElementById('petAge');
let txtGender = document.getElementById('petGender');
let txtBreed = document.getElementById('petBreed');
let txtServices = document.getElementById('petServices');
let txtOwners = document.getElementById('ownersName');
let txtPhone = document.getElementById('contactPhone');

function register(){
    let thePet=new Pet(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtServices.value,txtOwners.value,txtPhone.value);

    console.log(thePet);

    salon.pets.push(thePet);

    displayList(thePet);

    clear();

}

function displayList(aPet) {
    let listBody=document.getElementById("rowPet");
    let item = `
        <tr id="${aPet.id}"> 
        <td> ${aPet.name} </td>
        <td> ${aPet.age} </td> 
        <td> ${aPet.gender}</td>
        <td> ${aPet.breed} </td>
        <td> ${aPet.services} </td>
        <td> ${aPet.ownerName} </td> 
        <td> ${aPet.contactPhone} </td>
        <td> <button onclick='deletePet("${aPet.id}");'> Delete </button> </td> 
        </tr>
    `;
    
    listBody.innerHTML+=item;

    //mortal hw show all the pets attributes on the li, apply a css style

    //immortal hw show all the pet in a table (challange)
}



function deletePet(petID){
    
    let row = document.getElementById(petID);
    let indexDelete;

    for(let i=0;i<salon.pets.length;i++){
        
        let seleted = salon.pets[i];
        if(petID===seleted.id){
            indexDelete=i;
        }

    }

    salon.pets.splice(indexDelete,1);


    row.remove();
    
}



function clear(){
    txtName.value=" ";
    txtAge.value=" ";
    txtGender.value=" ";
    txtBreed.value=" ";
    txtServices.value=" ";
    txtOwners.value=" ";
    txtPhone.value=" ";
}


function searchPet(){
    let searchString=document.getElementById('txtSearch').value;
    let ss = searchString.toLowerCase();

    for(let j=0;j<salon.pets.length;j++){
        let searched = salon.pets[j];
        if(ss===searched.id || ss=== searched.services.toLowerCase()){
            document.getElementById('pet'+j).setAttribute('class','selected');
        }
    }  
}


//search using pets name

