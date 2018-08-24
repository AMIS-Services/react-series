const request = require("request");

const accommodations = [
  {
    id: 1,
    name: "Romantische vuurtoren",
    location: "Scheveningen",
    favorite: false,
    image: "http://www.weekendhotel.nl/acco_images/0002/0670/Vuurtoren_en_zeilboot.jpg",
    description:
      "Een zeer romantische lokatie aan de zee. Verblijf in een authentieke vuurtoren en overzie vanaf grote hoogte de zee. Enkel voor gasten met een goede conditie."
  },
  {
    id: 2,
    name: "Bezemkast in Amsterdam",
    location: "Amsterdam",
    favorite: false,
    image: "https://i.pinimg.com/originals/db/2b/20/db2b207c1bb61e5b7d1bafe1c81455ff.jpg",
    description:
      "De beste woning die je in Amsterdam gaat vinden onder de 500 euro per nacht. Accepteer de realiteit van de woningnood en zie de positieve kant in: het is erg knus."
  },
  {
    id: 3,
    name: "Hutje op de hei",
    location: "De Veluwe",
    favorite: false,
    image: "https://i.pinimg.com/originals/b6/e8/12/b6e812e996f90dc575acb6207235adf5.jpg",
    description:
      "Wat is nou een klassiekere Nederlands verblijfsplaats dan een hutje op de hei? Als je even weg wil van de drukte en belachelijkhe huizenprijzen van de stad is dit een perfecte locatie"
  },
  {
    id: 4,
    name: "Vakantievilla Vacuna",
    location: "Domburg",
    favorite: true,
    image: "http://www.zeelandrelais.com/files/DSC00204.jpg",
    description:
      "Een rustieke vakantievilla gelegen in Domburg aan de zeeuwse kust. Uitstekende beheersing van de Duitse taal is helaas wel een vereist voor communicatie in de omgeving."
  },
  {
    id: 5,
    name: "Appartement voor twee personen",
    location: "Utrecht",
    favorite: false,
    image: "http://www.interieur-inrichting.net/afbeeldingen/knus-scandinavisch-appartement-645x484.jpg",
    description:
      "Een appartement voor twee personen in Utrecht. Ingericht in typische vtwonen stijl. Mooi op het plaatje maar in de realiteit veel te wit."
  }
];

accommodations.map(acc => {
  const options = {
    url: "http://localhost:3030/accommodations",
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(acc)
  };
  request(options, (err, res, body) => {
    if (err) console.log(err);
    console.log("accommodation seeded");
  });
});
