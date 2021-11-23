# projectSahkoinenKeruulista

Johdatus ohjelmointiin project

Asiakas on keskisuuri tukkuliike, joka myy koneiden varaosia.
Tilaukset tulevat heille sähköisen tilausjärjestelmän kautta.
Tilauksessa on seuraavat tiedot: tilausnumero, asiakasnumero, nimi, laskutusosoite, toimitusosoite, toimituspäivä, vastuumyyjä, vapaa kommentti, tilauksen kokonaissumma sekä tilatut tuotteet.
Tuotteista on talletettuna seuraavat tiedot: tuotekoodi, tuotteen nimi, kuvaus, toimittajan koodi, kappalemäärä, yksikköhinta sekä hyllypaikka.

Tällä hetkellä asiakas tulostaa sähköisestä tilausjärjestelmästä PDF:n, jota hän käyttää tilattujen varaosien keräämiseen.
Asiakas siis avaa tilausjärjestelmän, hakee halutun tilauksen (erilaisia hakukriteereitä, mm asiakasnumerolla, tilausnumerolla), tulostaa PDF:n ja aloittaa keräilyn.
Keräilyssä hän tekee PDF:n merkintöjä kynällä, mitkä osat on kerännyt / saiko kerättyä vasta osan tilatusta määrästä.
Tämän PDF:n kerääjä laittaa tavaroiden mukana asiakkaalle, omilla merkinnöillään varustettuna.

Nyt asiakas haluaa sähköistää tämän keruuprosessin ja on ottanut teihin yhteyttä yhteistyön merkeissä.
Tilaukset tulevat edelleen olemassaolevan järjestelmän kautta, ne on saatavilla JSON:tiedostona http://www.cc.puv.fi/~asa/json/project.json.
Uudessa sovelluksessa kerääjän tulee edelleen voida etsiä tilausta erilaisilla hakukriteereillä. Kerääjän tulee voida avata tilauksia nähdäkseen tilauksen tietoja ja mitä tuotteita on tilattu. Kerääjän tulee voida kerätä tilauksen tuotteet kokonaan tai kommentoida tilattuja tuotteita. Kommentteja kerääjä käyttää oman työnsä sujuvoittamiseksi, esimerkiksi ”kolme viidestä kerätty, lisää tulee ylihuomenna”.
Kun kaikki tuotteet on kerätty, tulee kerääjän voida kuitata tilaus kerätyksi ja tulostaa siisti kollilista lähetettäväksi tilauksen mukana. Tilauksen kuittaaminen on tärkeää, jotta myyjä näkee tilauksensa tilanteen ja voi vastata asiakkaan kyselyihin.

Sovelluksemme on oltava tietoturvallinen, eli sisäänkirjautuminen vaaditaan.

---

1. Määrittely:
   Mitä vaatimuksia sähköisessä keruulistassa on? Listatkaa ne itsellenne ylös

2. Suunnittelu:
   Millainen käyttöliittymä tarvitaan?
   Piirrä paperille / käytä esim draw.io –sovellusta (New… Wireframe…)
   Mitä pääkomponentteja sovelluksessa on?
   Miten sisäänkirjautuminen tehdään?
   Millainen pakkauslista sovelluksesta tulostetaan?

3. Toteutus:
   Kuka tekee mitäkin?
   HTML, CSS, Javascript
   Login, tilaukset, tulostus jne
   Versiohallinta?

4. Projektin tuotokset:
   Käyttöliittymän suunnitelma (palautus Moodleen)
   Sähköinen keruulista –sovellus VAMK:n palvelimella
   Sovelluksenne esittely
   Demo
   Työnjako, kuka teki mitä

5. Projektin arviointi (asteikolla 0-5):
   Käytettävyys
   Toiminnallisuudet
   Toteutus
   esim miten sisäänkirjautuminen toteutettu
