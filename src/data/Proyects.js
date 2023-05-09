// Template para añadir más info
// {
//     proyect: '',
//     img: '',
//     description: ' ',
//     origin: 'Proyecto ',
//     repo: 'Github',
//     imgRepo:
//       'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683118881/Portfolio/github_ejpjmn.png',
//     linkRepo: '',
//     technologies: [
//       {
//         technology: '',
//         img: ''
//       },
//       {
//         technology: '',
//         img: ''
//       }
//     ]
//   }

const proyectsData = [
  {
    proyect: 'App NASA',
    img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683122102/Portfolio/nasa_fx2byf.jpg',
    description:
      'Se ha creado una web que consume dos API’s oficiales de la NASA. `APOD`, para consultar la fotografía astronómica del día y `Mars Rover Photos` para consultar las imágenes de los rovers',
    origin: 'Proyecto Rock{theCode}',
    repo: 'Github',
    imgRepo:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683118881/Portfolio/github_ejpjmn.png',
    linkRepo: 'https://github.com/Graimi/proyecto-4-app-nasa/tree/main',
    linkdeploy: 'https://gleaming-cendol-7c4c74.netlify.app/',
    technologies: [
      {
        technology: 'HTML',
        img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362632/logos/html_jhpxjv.png'
      },
      {
        technology: 'CSS',
        img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362634/logos/css_zxaqym.png'
      },
      {
        technology: 'REACT',
        img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362632/logos/react_gwx0m7.svg'
      },
      {
        technology: 'PRETTIER',
        img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362632/logos/prettier_kjswv5.svg'
      },
      {
        technology: 'ESLINT',
        img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362632/logos/eslint_y29ea5.svg'
      },
      {
        technology: 'VITE',
        img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362632/logos/vite_pv5xkq.svg'
      }
    ]
  },
  {
    proyect: 'Portfolio personal',
    img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683622108/Portfolio/portfolio_ym5gsh.jpg',
    description:
      'Se ha usado una Single Page Application para crear este portfolio personal en el que el usuario puede cambiar la ruta de información y mostrar diferente contenido según haga click en un link de navegación',
    origin: 'Proyecto Rock{theCode}',
    repo: 'Github',
    imgRepo:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683118881/Portfolio/github_ejpjmn.png',
    linkRepo: 'https://github.com/Graimi/proyecto-3-portfolio',
    linkdeploy: 'https://graimi.netlify.app/',
    technologies: [
      {
        technology: 'HTML',
        img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362632/logos/html_jhpxjv.png'
      },
      {
        technology: 'CSS',
        img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362634/logos/css_zxaqym.png'
      },
      {
        technology: 'JAVASCRIPT',
        img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362634/logos/js_wgrovv.png'
      },
      {
        technology: 'PRETTIER',
        img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362632/logos/prettier_kjswv5.svg'
      },
      {
        technology: 'ESLINT',
        img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362632/logos/eslint_y29ea5.svg'
      },
      {
        technology: 'VITE',
        img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362632/logos/vite_pv5xkq.svg'
      }
    ]
  },
  {
    proyect: 'Tienda dinámica',
    img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683626413/Portfolio/norba-box_cjjorw.png',
    description:
      'El objetivo de este proyecto es mejorar el proyecto anterior añadiéndole mejoras en las visualizaciones y nuevas funcionalidades como un filtro de búsqueda mediante Javascript',
    origin: 'Proyecto Rock{theCode}',
    repo: 'Github',
    imgRepo:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683118881/Portfolio/github_ejpjmn.png',
    linkRepo: 'https://github.com/Graimi/proyecto-2-tienda-dinamica',
    linkdeploy: 'https://legendary-druid-275542.netlify.app/',
    technologies: [
      {
        technology: 'HTML',
        img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362632/logos/html_jhpxjv.png'
      },
      {
        technology: 'CSS',
        img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362634/logos/css_zxaqym.png'
      },
      {
        technology: 'JAVASCRIPT',
        img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362634/logos/js_wgrovv.png'
      },
      {
        technology: 'PRETTIER',
        img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362632/logos/prettier_kjswv5.svg'
      },
      {
        technology: 'ESLINT',
        img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362632/logos/eslint_y29ea5.svg'
      },
      {
        technology: 'VITE',
        img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362632/logos/vite_pv5xkq.svg'
      }
    ]
  },
  {
    proyect: 'Web responsive',
    img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683626413/Portfolio/norba-box_cjjorw.png',
    description:
      'Se creó una landing page maquetada y responsive para una “supuesta tienda”, este proyecto se ha basado en una tienda ficticia de boxeo en Cáceres. ',
    origin: 'Proyecto Rock{theCode}',
    repo: 'Github',
    imgRepo:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683118881/Portfolio/github_ejpjmn.png',
    linkRepo: 'https://github.com/Graimi/proyecto-1-pagina-web-responsive',
    linkdeploy: 'https://sparkling-tarsier-bd1f1a.netlify.app/',
    technologies: [
      {
        technology: 'HTML',
        img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362632/logos/html_jhpxjv.png'
      },
      {
        technology: 'CSS',
        img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362634/logos/css_zxaqym.png'
      },
      {
        technology: 'PRETTIER',
        img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362632/logos/prettier_kjswv5.svg'
      },
      {
        technology: 'ESLINT',
        img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362632/logos/eslint_y29ea5.svg'
      },
      {
        technology: 'VITE',
        img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362632/logos/vite_pv5xkq.svg'
      }
    ]
  }
];

export default proyectsData;
