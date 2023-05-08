// Plantilla para añadir más
// {
//     institution: '',
//     logo: '',
//     link: '',
//     location: '',
//     country: '',
//     flag: '',
//     title: '',
//     description: '',
//     date: '',
//     ects: ''
//   },

const learningData = [
  {
    institution: 'Ilerna FP',
    logo: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683550625/Portfolio/ilerna-online_ujvik1.png',
    link: 'https://www.ilerna.es/es/ciclo-grado-superior-desarrollo-aplicaciones-multiplataforma-39',
    location: 'Online',
    country: 'España',
    flag: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683542606/Pa%C3%ADses/espana_pjmx7s.png',
    title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
    description: '',
    date: '2022 - Ongoing',
    ects: '2.000h'
  },
  {
    institution: 'ThePower Business School',
    logo: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683549981/Portfolio/ThePower-business-school_cmavi0.png',
    link: 'https://www.rockthecode.es/',
    location: 'Online',
    country: 'España',
    flag: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683542606/Pa%C3%ADses/espana_pjmx7s.png',
    title: 'Rock{theCode}',
    description: 'Programador Full Stack',
    date: '2022 - Ongoing',
    ects: '934h'
  },
  {
    institution: 'ThePower Business School',
    logo: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683549981/Portfolio/ThePower-business-school_cmavi0.png',
    link: 'https://www.thepowermba.com/es/master-mba-marketing-digital',
    location: 'Online',
    country: 'España',
    flag: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683542606/Pa%C3%ADses/espana_pjmx7s.png',
    title: 'ThePowerMBA',
    description: 'Especialización en marketing digital',
    date: '2022 - Ongoing',
    ects: '120h'
  },
  {
    institution: 'Google',
    logo: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683551959/Portfolio/google_mwxqmt.png',
    link: 'https://www.coursera.org/professional-certificates/google-data-analytics#courses',
    location: 'Online',
    country: 'Estados Unidos',
    flag: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683551882/Pa%C3%ADses/eeuu_zyaeiq.png',
    title: 'Google Data Analytics Certificate',
    description: 'Curso realizado en la plataforma Coursera, subvencionado por FUNDAE',
    date: '2022',
    ects: '187h'
  },
  {
    institution: 'Google',
    logo: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683551959/Portfolio/google_mwxqmt.png',
    link: 'https://www.coursera.org/professional-certificates/soporte-de-tecnologias-de-informacion-google',
    location: 'Online',
    country: 'Estados Unidos',
    flag: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683551882/Pa%C3%ADses/eeuu_zyaeiq.png',
    title: 'Soporte de Tecnologías de la Información de Google',
    description: 'Curso realizado en la plataforma Coursera, subvencionado por FUNDAE',
    date: '2021',
    ects: '133h'
  },
  {
    institution: 'IBM',
    logo: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683555136/Portfolio/ibm_rp8dyy.png',
    link: 'https://santandersmartbank.es/beca/becas-santander-tecnologia-ibm/',
    location: 'Online',
    country: 'España',
    flag: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683542606/Pa%C3%ADses/espana_pjmx7s.png',
    title: 'Digital Experience IBM',
    description: 'Becas Santander Tecnología',
    date: '2021',
    ects: '23h'
  },
  {
    institution: 'Universidad de Extremadura',
    logo: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683546963/Portfolio/unex_qxpndr.png',
    link: 'https://sites.google.com/view/curso-verano-catedratefuex2020',
    location: 'Cáceres, ES',
    country: 'España',
    flag: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683542606/Pa%C3%ADses/espana_pjmx7s.png',
    title:
      'Internet of things, BigData, Machine Learning, y Blockchain para revolucionar el sector agroganadero',
    description: 'XXI Cursos Internacionales de Verano de la Universidad de Extremadura',
    date: '2020',
    ects: '15h'
  },
  {
    institution: 'Fujitsu',
    logo: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683557338/Portfolio/fujitsu_jvig0a.png',
    link: 'https://fujitsucompetenciasdigitales.es/transformacion.html',
    location: 'Online',
    country: 'España',
    flag: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683542606/Pa%C3%ADses/espana_pjmx7s.png',
    title: 'Transformación Digital',
    description: '',
    date: '2020',
    ects: '10h'
  },
  {
    institution: 'Universitat de Barcelona',
    logo: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683549627/Portfolio/universidad-de-barcelona_bacjri.png',
    link: 'https://www.comercioexterior.ub.edu/',
    location: 'Barcelona, ES',
    country: 'España',
    flag: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683542606/Pa%C3%ADses/espana_pjmx7s.png',
    title: 'Posgrado en Comercio y Finanzas internacionales',
    description:
      'Beca de estudios a cambio de gestionar la grabación de las clases para la modalidad online',
    date: '2018 - 2019',
    ects: '40 ects'
  },
  {
    institution: 'Cambridge University',
    logo: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683552771/Portfolio/university-of-cambridge_xtq9cq.png',
    link: 'https://www.cambridgeenglish.org/es/exams-and-tests/first/',
    location: 'Brighton, UK',
    country: 'United Kingdom',
    flag: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683543019/Pa%C3%ADses/reino-unido_zeybww.png',
    title: 'First Certificate English',
    description: 'Título ofical obtenido en Brighton',
    date: '2018',
    ects: 'N/A'
  },
  {
    institution: 'Universitas Telefónica',
    logo: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683555649/Portfolio/telefonica-universitas_voq92s.jpg',
    link: 'https://miriadax.net/',
    location: 'Online',
    country: 'España',
    flag: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683542606/Pa%C3%ADses/espana_pjmx7s.png',
    title: 'Introducción a la programación. Descubre el lenguaje de la era digital. (5.a edición)',
    description: 'Curso desarrollado en la plataforma MiriadaX',
    date: '2017',
    ects: '30h'
  },
  {
    institution: 'Universidad de Guadalajara',
    logo: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683548864/Portfolio/cucea_qa4cfs.png',
    link: 'https://www.cucea.udg.mx/es/oferta-academica/licenciaturas/administracion',
    location: 'Guadalajara, MX',
    country: 'México',
    flag: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683543017/Pa%C3%ADses/mexico_vcqcqg.png',
    title: 'Licenciatura en administracion',
    description: 'Beca Santander Iberoamérica',
    date: '2017',
    ects: '36 ects'
  },
  {
    institution: 'ASISA',
    logo: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683557955/Portfolio/asisa_hl0hv4.png',
    link: 'https://www.asisa.es/seguros-de-salud',
    location: 'Online',
    country: 'España',
    flag: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683542606/Pa%C3%ADses/espana_pjmx7s.png',
    title: 'Curso avanzado en prevención de riesgos laborales',
    description: '',
    date: '2016',
    ects: '10h'
  },
  {
    institution: 'Universidad San Jorge',
    logo: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683556915/Portfolio/universidad-san-jorge_ckmi7u.png',
    link: 'https://miriadax.net/',
    location: 'Online',
    country: 'España',
    flag: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683542606/Pa%C3%ADses/espana_pjmx7s.png',
    title: 'Sostenibilidad ambiental de las organizaciones en la economía circular',
    description: 'Curso desarrollado en la plataforma MiriadaX',
    date: '2016',
    ects: '20h'
  },
  {
    institution: 'Instituto Superior de Gestão',
    logo: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683548450/Portfolio/instituto_superior_de_gest%C3%A3o_obubou.png',
    link: 'https://www.isg.pt/licenciatura-em-gestao/',
    location: 'Lisboa, PT',
    country: 'Portugal',
    flag: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683548551/Pa%C3%ADses/portugal_reygts.png',
    title: 'Licenciatura em Gestão',
    description: 'Beca Erasmus Estudios',
    date: '2015 - 2016',
    ects: '49 ects'
  },
  {
    institution: 'Universidad de Extremadura',
    logo: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683546963/Portfolio/unex_qxpndr.png',
    link: 'https://www.unex.es/',
    location: 'Cáceres, ES',
    country: 'España',
    flag: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683542606/Pa%C3%ADses/espana_pjmx7s.png',
    title:
      'La gestión de la planificación estratégica de los RRHH en las nuevas organizaciones desde la perspectiva de la RSC',
    description: '',
    date: '2015',
    ects: 'N/A'
  },
  {
    institution: 'Universidad de Extremadura',
    logo: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683546963/Portfolio/unex_qxpndr.png',
    link: 'https://www.unex.es/conoce-la-uex/centros/feet/titulaciones/info/presentacion?id=1407',
    location: 'Cáceres, ES',
    country: 'España',
    flag: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683542606/Pa%C3%ADses/espana_pjmx7s.png',
    title: 'Grado en administracion y direccion empresas',
    description: 'TFG: Formación Experiencial',
    date: '2013 - 2017',
    ects: '240 ects'
  }
];

export default learningData;
