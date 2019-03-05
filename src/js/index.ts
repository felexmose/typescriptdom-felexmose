//Her skal du skrive din typescriptkode
let li0 = document.getElementById('0');
console.log(li0);

let list = document.getElementsByClassName('sundt');
console.log(list);

let tagNameUl = document.getElementsByTagName('ul');
console.log(tagNameUl);

let getLiTags = document.getElementsByTagName('li');

for (var val in getLiTags){
    console.log(val);
}

//
let id2Tag = document.getElementById('2');
id2Tag.setAttribute('class','sundt');

//dfndkfdk
