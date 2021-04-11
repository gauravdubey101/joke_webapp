
const api_url = 'https://api.chucknorris.io/jokes/random';
const api_url2 = 'https://api.chucknorris.io/jokes/categories';

async function getData (){

    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    console.log(data.value);
    const {value} = data;
    
    document.getElementById('plain-text').textContent = value;
   
    
    
}

async function animal(){
    const response = await fetch(api_url2);
    const data = await response.json();
    console.log(data);
    
    document.getElementById('catagory').textContent = data[0];
}

async function career(){
    const response = await fetch(api_url2);
    const data = await response.json();
    console.log(data);
    
    document.getElementById('catagory').textContent = data[1];
}

async function celebrity(){
    const response = await fetch(api_url2);
    const data = await response.json();
    console.log(data);
    
    document.getElementById('catagory').textContent = data[2];
}

async function dev(){
    const response = await fetch(api_url2);
    const data = await response.json();
    console.log(data);
    
    document.getElementById('catagory').textContent = data[3];
}

async function explicit(){
    const response = await fetch(api_url2);
    const data = await response.json();
    console.log(data);
    
    document.getElementById('catagory').textContent = data[4];
}

async function fashion(){
    const response = await fetch(api_url2);
    const data = await response.json();
    console.log(data);
    
    document.getElementById('catagory').textContent = data[5];
}

async function food(){
    const response = await fetch(api_url2);
    const data = await response.json();
    console.log(data);
    
    document.getElementById('catagory').textContent = data[6];
}

async function history1(){
    const response = await fetch(api_url2);
    const data = await response.json();
    console.log(data);
    
    document.getElementById('catagory').textContent = data[7];
}

async function money(){
    const response = await fetch(api_url2);
    const data = await response.json();
    console.log(data);
    
    document.getElementById('catagory').textContent = data[8];
}

async function movie(){
    const response = await fetch(api_url2);
    const data = await response.json();
    console.log(data);
    
    document.getElementById('catagory').textContent = data[9];
}

async function music(){
    const response = await fetch(api_url2);
    const data = await response.json();
    console.log(data);
    
    document.getElementById('catagory').textContent = data[10];
}

async function political(){
    const response = await fetch(api_url2);
    const data = await response.json();
    console.log(data);
    
    document.getElementById('catagory').textContent = data[11];
}

async function religion(){
    const response = await fetch(api_url2);
    const data = await response.json();
    console.log(data);
    
    document.getElementById('catagory').textContent = data[12];
}

async function science(){
    const response = await fetch(api_url2);
    const data = await response.json();
    console.log(data);
    
    document.getElementById('catagory').textContent = data[13];
}

async function sport(){
    const response = await fetch(api_url2);
    const data = await response.json();
    console.log(data);
    
    document.getElementById('catagory').textContent = data[14];
}

async function travel(){
    const response = await fetch(api_url2);
    const data = await response.json();
    console.log(data);
    
    document.getElementById('catagory').textContent = data[15];
}
