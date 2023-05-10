import './Card.css';

function Card(item) {
  return `
      <article class="card">
        <div class="card-front">
          <h2 class="card-institution">${item.institution}</h2>
          <img
            class="card-img"
            src=${item.logo}
            alt=${item.institution}
          />
          <h3 class="card-title">${item.title}</h3>
          <img class="card-flag" src="${item.flag}" alt=${item.country}/>
          <span class="material-symbols-outlined"> keyboard_double_arrow_right </span>
        </div>
        <div class="card-back">
          <p class="card-location">${item.location}</p>
          <p class="card-description">${item.description}</p>
          <div class="card-info">
            <p>${item.date}</p>
            
            <a href=${item.link} target="_blank" rel="noopener noreferrer">
            <img
              src='https://res.cloudinary.com/dwsffp1eq/image/upload/v1683626612/Portfolio/open_in_new_liibm3.svg'
              alt='open in new'
            />
          </a>
          <p>${item.ects}</p>
          </div>
        </div>
      </article>
    `;
}

function generateCards(array) {
  return array.map((item) => Card(item));
}

// function generateCard(
//   item,
//   cardName,
//   imgName,
//   technologiesName,
//   descriptionName,
//   originName,
//   linkRepoName,
//   imgRepoName,
//   linkDeployName
// ) {
//   return `
//         <article class="card">
//           <div class="card-front">
//             <h2 class="card-title">${item[cardName]}</h2>
//             <img
//               class="card-img"
//               src=${item[imgName]}
//               alt=${item[cardName]}
//             />
//             <div class="card-technologies">
//             ${item[technologiesName]}
//             </div>
//             <span class="material-symbols-outlined"> keyboard_double_arrow_right </span>
//           </div>
//           <div class="card-back">
//             <p>${item[descriptionName]}</p>
//             <p class="card-origin">${item[originName]}</p>
//             <div class="card-links">
//               <a href=${item[linkRepoName]} target="_blank" rel="noopener noreferrer">
//                 <img
//                   src=${item[imgRepoName]}
//                   alt=${item.repo}
//                 />
//               </a>
//               <a href=${item[linkDeployName]} target="_blank" rel="noopener noreferrer">
//               <img
//                 src='https://res.cloudinary.com/dwsffp1eq/image/upload/v1683626612/Portfolio/open_in_new_liibm3.svg'
//                 alt='open in new'
//               />
//             </a>
//           </div>
//           </div>
//         </article>
//       `;
// }

// export function generateCardsArray(
//   array,
//   cardName,
//   imgName,
//   technologiesName,
//   descriptionName,
//   originName,
//   linkRepoName,
//   imgRepoName,
//   linkDeployName
// ) {
//   return array.map((item) =>
//     generateCard(
//       item,
//       cardName,
//       imgName,
//       technologiesName,
//       descriptionName,
//       originName,
//       linkRepoName,
//       imgRepoName,
//       linkDeployName
//     )
//   );
// }

export default generateCards;
