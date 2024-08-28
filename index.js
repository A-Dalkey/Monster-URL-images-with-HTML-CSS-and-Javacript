import { monsters } from "./monster.js";


// console.log(monsters);
// for(let monsterdiv of monsters){
//     showMonsters(monsterdiv);

// }

for (let i = 0; i < monsters.length; i++) {
    showMonsters(monsters[i], i);
}
// monsters.forEach((monsterdiv, index) => {
//     showMonsters(monsterdiv, index);
// });
function showMonsters(monsterdiv, index) {

    const Monster = document.createElement("div");
    Monster.className = 'monster';

    const img = document.createElement("img");
    img.src = `https://robohash.org/${monsterdiv.id}?set=set2`
    img.alt = 'MD. Sakib Khan';

    // Apply background color based on the index
    if (index % 2 === 0) {
        Monster.style.backgroundColor = 'lightgreen'; // Even index background color
        img.style.backgroundColor = 'lightgreen'; // Even index background color
        Monster.style.color = 'black'; // Even index background color

    } else {
        Monster.style.backgroundColor = 'lightcoral'; // Odd index background color
        img.style.backgroundColor = 'lightcoral'; // Odd index background color
        Monster.style.color = 'white';
    }
    const p = document.createElement("p");
    p.className = 'name';
    p.innerHTML = monsterdiv.name;

    const email = document.createElement('p');
    email.className = 'email';
    email.innerHTML = monsterdiv.email;

    console.log(Monster);

    Monster.append(img, p, email)

    document.querySelector('.monsters').append(Monster);


}
nofound();
function nofound() {

    const nofoundDiv = document.createElement("div");
    nofoundDiv.className = 'p-5 not-found';
    nofoundDiv.style.display = 'none';

    const span = document.createElement('span');
    span.innerHTML = '404';

    const h1 = document.createElement('h1');
    h1.innerHTML = '🙅‍♂️No Monster Found 🙅‍♂️';

    //appending
    nofoundDiv.append(span, h1)
    let mon = document.querySelector('.monsters').append(nofoundDiv);
    console.log(mon);

}



// document.querySelector('#search-monster').addEventListener('keyup',
//     function (e) {
//         const keyword = e.target.value.toLowerCase();
//         // console.log(e);
//         // console.log(keyword);

//         const findmonster = document.querySelectorAll('.monster');

//         let notfound = true;
//         for (let monster of findmonster) {
//             const name = monster.children[1].innerText.toLowerCase();
//             const email = monster.children[2].innerText.toLowerCase();

//             if (name.includes(keyword) || email.includes(keyword)) {
//                 monster.style.display = 'block';
//                 notfound = false;
//             } else {
//                 monster.style.display = 'none';
//             }

//         }
//         if (notfound) {
//             document.querySelector('.not-found').style.display = 'block';
//         } else {
//             document.querySelector('.not-found').style.display = 'none';
//         }

//     });

    document.getElementById('search').addEventListener('keyup', function (e) {
        const keyword = e.target.value.toLowerCase();
        let tr = document.getElementsByClassName('tr');
        
        let notfound = true;
        for (let td of tr) {
            const id = td.children[0].innerText.toLowerCase();
            const name = td.children[1].innerText.toLowerCase();
            const gender = td.children[2].innerText.toLowerCase();
            const phone = td.children[3].innerText.toLowerCase();
            const email = td.children[4].innerText.toLowerCase();
            const district = td.children[5].innerText.toLowerCase();
    
            if (id.includes(keyword) || name.includes(keyword) || gender.includes(keyword) 
                || phone.includes(keyword) || email.includes(keyword) || district.includes(keyword)) {
                td.style.display = ''; // Correct display style for table rows
                notfound = false;
            } else {
                td.style.display = 'none';
            }
        }
    });
    