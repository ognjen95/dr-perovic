import proteza from '../images/proteza.png';
import protetika from '../images/protetika.png';
import alat from '../images/alat.png';
import rendgen from '../images/rendgen.png';
import cetkica from '../images/cetkica.png';
import izbjeljivanje from '../images/izbjeljivanje.png';

const cards = {
  hirurgija: {
    naslov: 'Oralna hirurgija',
    link: 'oralna-hirurgija',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, incidunt.',
    img: rendgen,
    style: {
      background: 'linear-gradient(to left, #fdc830, #f37335)',
    },

    imgStyle: {
      width: '80%',
      right: '-20%',
    },
    usluge: [
      'Klasične ekstrakcije (vađenja) zuba',
      '  Separacija zubnih korenova',
      ' Hirurško vađenje umnjaka',
    ],
  },

  protetika: {
    usluge: [
      'Totalnim i skeletiranim protezama se rešava problem bezubosti i krezubosti kod pacijenata. ',
      ' Skeletirane proteze su u kombinaciji sa fiksnim krunicama i mostovima od metalokeramike.',
      'Krunice i mostovi su metalokeramički i od čiste keramike i svaki ima svoje funkcionalne i estetske prednosti.',
    ],
    naslov: 'Stomatološka protetika',
    link: 'stomatoloska-protetika',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, incidunt.',
    img: protetika,
    style: {
      background: 'linear-gradient(to left, #eaafc8, #654ea3)',
    },
    imgStyle: {
      width: '45%',
    },
  },
  endodoncija: {
    usluge: [
      'Konzervativno zbrinjavanje zuba zahvaćenih karijesom kompozitnim plombama koje su odličnih estetskih i funkcionalnih kvaliteta.',
      ' Ukoliko je karijes uznapredovao i zahvatio komoru pulpe radi se endodontsko lečenje istog i punjenje kanala ispunima koji su bioinertni i postojani u kanalu zuba.',
    ],
    naslov: 'Bolesti zuba i endodoncija',
    link: 'bolesti-zuba-i-endodoncija',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, incidunt.',
    img: alat,
    style: {
      background: 'linear-gradient(to right, #3a7bd5, #00d2ff)',
    },
    imgStyle: {
      width: '70%',
    },
  },

  deca: {
    usluge: [
      'Preventivni pregledi.',
      'Zbrinjavanje zuba zahvaćenih karijesom u mlečnoj, mešovitoj i stalnoj denticiji.',
      'Ekstrakcije mlečnih zuba.',
    ],
    img: proteza,
    naslov: 'Dečija stomatologija ',
    text: ' Deca vam se žale da ih boli zub? Kontaktirajte nas.',
    link: 'decija-stomatologija',
    style: {
      background: 'linear-gradient(to right, #56ab2f, #a8e063)',
    },
  },
  higjena: {
    usluge: ['Uklanjanje čvrstih i mekih naslaga.', ' Peskiranje.'],
    naslov: 'Oralna higjena',
    link: 'oralna-higjena',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, incidunt.',
    img: cetkica,
    style: {
      background: 'linear-gradient(to right, #00b09b, #96c93d)',
    },
    imgStyle: {
      width: '80%',
      right: '-30%',
    },
  },
  izbeljivanje: {
    usluge: [
      'Radi se u stomatološkoj ordinaciji, kontrolisano. Tretman traje oko sat vremena. Pre intervencije se radi priprema da bi period po završetku bio bezbolan ili bezbolniji.',
    ],
    naslov: 'Izbeljivanje zuba',
    link: 'izbeljivanje-zuba',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, incidunt.',
    img: izbjeljivanje,
    style: {
      background: 'linear-gradient(to right, #8a2387, #e94057, #f27121)',
    },
    imgStyle: {
      width: '60%',
      right: '-10%',
    },
  },
};

export default cards;
