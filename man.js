
let title = document.getElementById('title')
let price = document.getElementById('price')
let taxet = document.getElementById('taxet')
let ads = document.getElementById('ads')
let discount = document.getElementById('discount')
let category =document.getElementById('category')
let total = document.getElementById('total')
let count = document.getElementById('count')
let sumbit = document.getElementById('sumbit')
// console.log(title,taxet,category)

let mood = 'create'
let tmp

function getTotal() {
if(price.value != '') {
    let result = (+price.value + +taxet.value + +ads.value)
    - +discount.value
    total.innerHTML = result
    total.style.background = 'green'
}else {
   total.innerHTML = ''
total.style.background = 'red'
}


}

let datapro

if(localStorage.product = null){
datapro =JSON.parse(localStorage.product)
}else {
    datapro = []
}

sumbit.onclick = function() {
  let  newpro = {
title:title.value.toLowerCase(),
price:price.value,
taxet:taxet.value,
ads:ads.value,
total:total.innerHTML,
discount:discount.value, 
count:count.value,
category:category.value.toLowerCase()
    }



if(mood === 'create') {
  if(newpro.count > 1 ) {
    for(let i = 0; i < newpro.count;i++){
      datapro.push(newpro)
    }
  
    }else {
      datapro.push(newpro)
    }
}else {
datapro[tmp] = newpro
mood = 'create'
sumbit.innerHTML = 'create'
count.style.display = 'block'
}





    localStorage.setItem('product', JSON.stringify(datapro))

    Data()

  clearmallk()
  }



function Data() {

    title.value = '';
    price.value = '';
    taxet.value = '';
    ads.value = '';
    total.innerHTML = '';
    discount.value = '';
    count.value = '';
    category.value = '';

}


function clearmallk()
{
  getTotal()
let table = ''
for(let i = 0; i < datapro.length;i++) {
  table += `
  <tr>
  <td>${i+1}</td>
  <td>${datapro[i].title}</td>
  <td>${datapro[i].price}</td>
  <td>${datapro[i].taxet}</td>
  <td>${datapro[i].ads}</td>
  <td>${datapro[i].discount}</td>
  <td>${datapro[i].total}</td>
  <td>${datapro[i].category}</td> 
  <td><button onclick="updateData(${i})"   id="update">update</button></td>
<td><button onclick="clearfatery(${i})"  id="delete">delete</button></td>

  </tr>
  `

} 
document.getElementById('tbody').innerHTML = table
let wert = document.getElementById('deleteAll')
if(datapro.length > 0) {
wert.innerHTML = `

<button onclick="deleteAll()">Delete All (${datapro.length})</button>

`
}else {
  wert.innerHTML = ''
}

 }
 clearmallk()



//  delete


function clearfatery(i) {
datapro.splice(i,1)
localStorage.product = JSON.stringify(datapro)
clearmallk()
}



function deleteAll() {
  localStorage.clear()
  datapro.splice(0)
  clearmallk()
}

function updateData(i) {
title.value = datapro[i].title
price.value = datapro[i].price
taxet.value = datapro[i].taxet
ads.value = datapro[i].ads
discount.value = datapro[i].discount
count.value = datapro[i].count
category.value = datapro[i].category
getTotal()
count.style.display = 'none'
sumbit.innerHTML = 'update'
mood = 'opdate'
tmp = i
scroll({
top : 0,
behavior: 'smooth'
})
}

// seaarch
let searchmood = 'title'


let wert = document.getElementById('search')
function getsearchMood(id)
{
if(id == 'cearchTitle') {
  searchmood = 'title'
  search.placeholder = 'Search By Title'
}else {
  searchmood = 'category'
    search.placeholder = 'Search By Category'
    
}

wert.focus()
search.value = ''
clearmallk()
}


function searchData(value)
{

  let table = ''
if(searchmood == 'title')
   {

    

    for(let i = 0; i < datapro.length;i++) {
      if(datapro[i].title.includes(value.toLowerCase())) {
        table += ` 
        <tr>
        <td>${i}</td>
        <td>${datapro[i].title}</td>
        <td>${datapro[i].price}</td>
        <td>${datapro[i].taxet}</td>
        <td>${datapro[i].ads}</td>
        <td>${datapro[i].discount}</td>
        <td>${datapro[i].total}</td>
        <td>${datapro[i].category}</td> 
        <td><button onclick="updateData(${i})"   id="update">update</button></td>
     
        <td><button onclick="clearfatery(${i})"  id="delete">delete</button></td>
      
        </tr>
        `
    
      }
    }
    
    
    
  }
    else {

      for(let i = 0; i < datapro.length;i++) {
        if(datapro[i].category.includes(value.toLowerCase())) {
          table += `
          <tr>
          <td>${i}</td>
          <td>${datapro[i].title}</td>
          <td>${datapro[i].price}</td>
          <td>${datapro[i].taxet}</td>
          <td>${datapro[i].ads}</td>
          <td>${datapro[i].discount}</td>
          <td>${datapro[i].total}</td>
          <td>${datapro[i].category}</td> 
          <td><button onclick="updateData(${i})"   id="update">update</button></td>
       
          <td><button onclick="clearfatery(${i})"  id="delete">delete</button></td>
        
          </tr>
          `
      
        }
      }
      
      
      
      
      
      
      
      }
      
  document.getElementById('tbody').innerHTML = table
}


