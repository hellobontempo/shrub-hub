// const ul = document.getElementById('plant-search-results')
// const resultDiv = document.getElementById('result-div')

// document.getElementById('fetch-plants').addEventListener('click', sendIdentification)


// function sendIdentification() {
//     const files = [...document.querySelector('input[type=file]').files];
//     const promises = files.map((file) => {
//       return new Promise((resolve, reject) => {
//           const reader = new FileReader();
//           reader.onload = (event) => {
//             const res = event.target.result;
//             console.log(res);
//             resolve(res);
//           }
//           reader.readAsDataURL(file)
//       })
//     })
    
//     Promise.all(promises).then((base64files) => {
//     //   console.log(base64files)     
//       const data = {
//             api_key: `${config}`,
//             images: base64files,
//             modifiers: ["crops_fast", "similar_images"],
//             plant_language: "en",
//             plant_details: ["common_names",
//                             "url",
//                             "name_authority",
//                             "wiki_description",
//                             "taxonomy",
//                             "synonyms"]
//         };
      
//       fetch('https://api.plant.id/v2/identify', {
//             method: 'POST',
//             headers: {
//             'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         })
//         .then(response => response.json())
//         .then(data => {
//             renderPlantResults(data.suggestions);
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
//     })  

// };

// function renderPlantResults(plants){
//     resultDiv.hidden = false
//     plants.forEach(plant => {
//         const li = document.createElement('li')
//         li.dataset["id"] = plant.id
//         li.id = `plant-${plant.id}`
//         li.innerHTML =  `<div data-id="${plant.id}">
//                         <strong class="name">Botanical Name: ${plant.plant_name}</strong><br>
//                         <img src="${plant.similar_images[0].url}" alt="${plant.plant_name}" width="300"><br>
//                         <span class="common-names">Common Name(s): ${plant.plant_details.common_names.join(", ")}</span> 
//                         <p class="description">${plant.plant_details.wiki_description.value}</p> 
//                         <a href="${plant.plant_details.url}" target="_blank">Click for More Information</a>
//                         <button class="add" data-id="${plant.id}">Save to Collection</button>
//                         </div>
//                         `
//         ul.appendChild(li)
//         li.addEventListener('click', handleClick)
//     })
// }


// function handleClick(e) {
//     if (e.target.className === "add"){
//         const plantInfo = {
//             sci_name: e.currentTarget.querySelector(".name").innerText,
//             img_src: e.currentTarget.querySelector("img").src,
//             common_name: e.currentTarget.querySelector(".common-names").innerText,
//             care: e.currentTarget.querySelector(".description").innerText,
//         }
//         const configObj = {
//             method: 'POST', 
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json"
//             }, 
//             body: JSON.stringify(plantInfo)
//         }
//         plantApi.createPlant(configObj)
        
//     }   
// }

