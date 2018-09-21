# IT2810 Webutvikling - Prosjekt-2
NTNU Høst 2018, Gruppe 56 - Scott Hagen Gullaksen, Jakob Vaardal og Charlotte Halmrast.
Se nettsiden på http://it2810-56.idi.ntnu.no/prosjekt2/

Dette prosjektet går ut på å lage en online kunstutstilling med brukerstyrte kombinasjoner av 3 kategorier: lyd, svg-grafikk og tekst. Hver kombinasjon skal vises som separat side i et «tabs display» som egner seg for å bla mellom de 4 kombinasjonene. Brukeren skal kunne endre på kategorivalgene og få en ny utstilling ved endring.

Utstillingen skal ha responsivt web design hvor layout, skalering og interaksjonsmuligheter tilpasses type enhet og størrelse på skjerm. Det skal se bra ut, og interaksjonen skal fungere både på mobil, pad og pc med skjerm av forskjellig størrelse.


Kravene til prosjekt:

-Innhold og Funskjonalitet
-Bruk av REACT
-Bruk av AJAX
-Responsivt web design
-Testing på forskjellige plattformer
-Bruk av git/version control

### Innhold og Funskjonalitet

I løsning vår har vi et design hvor det finnes til sammen 9 kategorier som er fordelt inn 3 typer medier. Disse er implementert med radiobuttons og det er meningen at bruker skal kunne velge kategori i hvert medie. Dette genererer et “kunstverk”. Man kan velge mellom ulike kunstverk ved å navigere mellom tabsene på toppen.
Filer er lagret lokalt og på Github. Vi legger trykk på at Webdesign er ikke noe vi har lagt stort fokus på, og istedet konsentrert oss på å forstå react-konseptet samt praktisere det.

###Teknologi

React:

Prosjektet er basert på React-komponenter som bruker en ES6 syntaks. Det var kun lov til og bruke de ordinære mekanismene i React for å håndtere og lagre data. I dette prosjektet har vi laget alle komponentene helt fra bunn, uten hjelp av tredjeparts komponenter. Vi er klar over at dette selvfølgelig påvirker designet vårt ettersom ingen av oss har tidligere erfaring i webdesign. Løsningen bygger på at vi dekomponerte nettsidens områder ned i komponenter. Dette lagde vi så en tre-struktur av for å kunne se avhengigheter mellom komponenter og hvor det er fornuftig med gjenbruk. I reposotoriets rot-mappe ligger vedlagt et bilde som illustrerer hvordan vi tenkte.



AJAX:

Vi brukte axios for å løse AJAX kravet. Bildene (i SVG) og teksten (i .json) og hentet du det vi skulle ha med en http-request som dynamisk laster inn bilde og tekstfilen som brukeren har valgt med i form av klikk på tabs eller radiobuttons. Ved innlasting fra server blir også responsen lagret som en string i et objekt i staten i app-komponenten. Dermed kan vi utføre en sjekk om vi kan hente filen fra staten i stedet for å gjøre en http-request.


Node.js & NPM:
Npm har vært i hyppig bruk for å initialisere React-miljøet og installere avhengigher. Axios ble også installert vha npm.


GIT & General code structure:

Hele prosjektet har vært utviklet i versjonskontrollsystemet git og dens andrepart Github. Vi bestemte oss raskt for å bruke en sekundær branch “develop” for all utvikling mot et kjørende system. Ettersom develo ble (mer eller mindre) klart, skulle det endelig merges inn i master. Vi har satt oss gjøremål i starten og underveis og disse ble ført opp som issues på Github. Alle har til enhver tid hatt issues og jobbe med, og har vært flinke med å føre seg selv opp og lukke dem når vi ble ferdig. Branches ble hovedsakelig laget med en tilhørende issue. Vi branchet også ut ifra develop for å så merge inn igjen når f.eks. en feature ble ferdig. Alle (dvs de aller fleste) comits hadde en tilhørende tag til issue de bidro til.

Annet:

Lydfilene (i .mp3) er lastet inn med dvs. vanilla javaScript funskjoner. Mulig dette bidro til at vi ikke fikk det til. Vi så samme dagen som innleveringsfristen at man ikke trengte å bruke ajax for å laste inn mp3…


###Responsiv web design
Vi hadde designet på plass før vi startet med responsivitet. Dette synes vi fungerte godt da det var enkelt å teste ut, og implementere responsivitet når vi visste hvordan vi ville at siden skulle se ut.

For å få en responsiv nettside brukte vi Viewport og Media-queries for å oppnå en flytende og fleksibel layout som tilpasser seg etter størrelsen på skjermen. Med dette ble applikasjonen mer intuitiv for både nettlesere på pc og mac, samt på mindre skjermer som smarttelefon.

Som man kan teste vil layoutet  på app-en vår endre struktur av tabs, art-del og kategoriene når de kommer på liten skjerm. Dette ble vi fornøyd med til tross for mye knot.


###Testing

Alle filene som er brukt la vi inn i public mappen for å teste om applikasjonen hentet ut riktige filer.  Vi har testet i nettleserne Google Chrome, Firefox og Safari på Iphone.
Under hele prosessen har vi testet med live feedback fra React. Vi testet også med hjelp av nettleserens egen funksjonalitet for å velge “device-viewport”. Dette lot oss teste hvordan det ville sett ut på f.eks en iPhone.

###SAMARBEID, BRUK AV GIT, KODING, LEVERANSE


Ingen av medlemmene i gruppen hadde noe erfaring med verken tidligere webutvikling(bortsett fra forrige prosjekt), React eller git fra før. Dette gjorde at det tok en god stund før vi i det hele tatt kunne begynne å kode. Men ved hjelp av tutorials og hjelp fra andre kunne vi omsider starte.
Samarbeid har gått fint fordi vi var flink til å kommunisere. Git gjorde det lett å holde oversikt over hva som måtte gjøres til enhver tid og bidro også til å fordele arbeidsoppgaver. Det skal sies at tiden tok innpå oss. Dette kan enklest sees i at det finnes bugs når man trykker på enkelte kategorier og at lyden ikke fungerer. Dette er rett å slett et resultat av veldig lite forkunnskaper og feilberegning av arbeidsmengden som medfølger.

###Kilder
-https://www.bensound.com/
-https://www.poetryfoundation.org
-https://www.flaticon.com/
