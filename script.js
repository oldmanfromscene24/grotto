function newContainer(titleText, paraText, imageSrc) {
  const container = document.querySelector(".container");

  const hero = document.createElement("div");
  hero.className = "hero";
  container.appendChild(hero);

  const heroText = document.createElement("div");
  heroText.className = "herotext";
  hero.appendChild(heroText);

  const title = document.createElement("div");
  title.className = "title";
  title.textContent = titleText;
  heroText.appendChild(title);

  const para = document.createElement("p");
  para.textContent = paraText;
  heroText.appendChild(para);

  const image = document.createElement("img");
  image.src = imageSrc;
  image.width = 971;
  image.height = 1094;
  hero.appendChild(image);

  const a = document.createElement("a");
  const link = document.createTextNode("Indietro");
  a.appendChild(link);
  a.href = "./home.html";
  a.className = "back";
  heroText.appendChild(a);
}

function clearContainer() {
  const container = document.querySelector(".container");
  container.innerHTML = "";
}

function potature() {
  const titleText = "Potature";
  const paraText =
    'La potatura consiste nella rimozione di una parte della chioma tagliandone alcuni rami o porzioni. La potatura di alberi è una tappa fondamentale nella vita di un albero, un momento molto molto importante. Ovviamente la potatura alberi intesa in ambiente urbano. Nei boschi infatti gli alberi non hanno bisogno di essere potati, dal momento in cui non devono "convivere" con l\'uomo. Deve essere assolutamente eseguita nel rispetto delle esigenze dell’albero e del luogo dove è cresciuto. Un intervento sbagliato infatti può portare a conseguenze addirittura tragiche. La potatura è un intervento molto importante ma è fondamentale che a farlo sia un personale adeguato. Troppo spesso assistiamo a interventi svolti da improvvisati. Uno degli errori più gravi, ma purtroppo molto comuni è la capitozzatura. Operiamo su ogni tipo di esemplare arboreo per svolgere mirati interventi di potatura nel pieno rispetto dell’architettura e della salute degli alberi. La potatura corretta è quella che mantiene la forma naturale dell’albero, favorisce la penetrazione della luce e la circolazione dell’aria. Questi sono infatti fattori indispensabili per lo sviluppo di una pianta sana e sicura oltre che bella. Una potatura eccessiva o mal eseguita è dannosa e indebolisce la pianta esponendola agli attacchi di funghi e parassiti.';
  const imageSrc = "./home/logo.jpg";
  newContainer(titleText, paraText, imageSrc);
}

function abbattimenti() {
  const titleText = "Abbattimenti";
  const paraText =
    "Grazie alle nostre competenze tecniche e operative siamo in grado di intervenire ovunque. Nel nostro ambiente urbano molte volte gli alberi si sono sviluppati in spazi ristretti. Basti pensare ai cortili interni delle nostre città o a quei giardini di difficile accesso, che a volte risultano \"invisibili\" dall'esterno. Con le nostre tecniche e la nostra professionalità riusciamo a intervenire in ogni situazione, anche quando è impossibile l'accesso per i normali mezzi meccanici. Anche se cestelli, autogru o macchinari non possono accedere con le nostre competenze di treeclimber riusciamo ad abbattere alberi di qualsiasi dimensione.";
  const imageSrc = "./home/logo.jpg";
  newContainer(titleText, paraText, imageSrc);
}

function consolidamenti() {
  const titleText = "Consolidamenti";
  const paraText =
    "In arboricoltura urbana spesso può rendersi necessario applicare in chioma dei cavi di consolidamento branche. Questi cavi, che possono essere di diversi materiali che vanno dal Nylon al Dynema, hanno la principale funzione di aiutare il ramo a sostenere i carichi di neve e l'azione del vento. E' una tecnica che prevede un alta e particolareggiata formazione per applicarla, una profonda osservazione delle esigenze delle singole branche e dell'albero nella sua interezza come sistema. I consolidamenti possono essere dinamici o statici a seconda delle esigenze che l'arboricoltore riscontra correlate al tipo di danno o problema che presenta l'albero e le branche che vanno cablate. I  consolidamenti possono anche essere utili per evitare alcune potature, in particolar modo negli alberi molto vetusti che subirebbero un danno energetico vedendosi ridotta la loro superfice fotosintetica: legando la branca si evita di potarla e quindi si evita di togliere foglie. La mia azienda si avvale dei materiali migliori per eseguire questo tipo di intervento e interagisce sempre con altre figure professionali come gli agronomi valutatori di stabilità per ottenere il massimo in termini di risoluzione del problema in un ambito cosi delicato che va a modificare il comportamento naturale di un albero.";
  const imageSrc = "./home/logo.jpg";
  newContainer(titleText, paraText, imageSrc);
}

function fresatura() {
  const titleText = "Fresatura dei ceppi";
  const paraText =
    "La fresatura delle ceppaie è senza dubbio la soluzione migliore in alcuni contesti. Nei giardini dove lavoriamo infatti molte volte si trovano dei bellissimi prati. Una volta rimosso l'albero però rimane il grande ingombro della ceppaia. Oltre a un problema di spazio ci troviamo davanti a un problema di natura estetica. Con questa operazione però riusciamo a riqualificare tutto lo spazio verde, regalandolo un nuovo aspetto al tuo giardino!";
  const imageSrc = "./home/logo.jpg";
  newContainer(titleText, paraText, imageSrc);
}

function processionaria() {
  const titleText = "Rimozione nidi di processionaria";
  const paraText =
    "L’azione di questo temibile insetto risulta pericolosa sia per l’uomo, con effetti dannosi agli occhi e all’apparato respiratorio sia per gli animali domestici in particolare i cani. Sono una minaccia anche per gli alberi: gli apici dei rami su cui si formano i nidi tendono a seccarsi. Questi rischi giustificano e richiedono provvedimenti obbligatori disciplinati dal D.M. del 30 ottobre 2007. La rimozione dei nidi è da svolgere a fine inverno (gennaio e febbraio).";
  const imageSrc = "./home/logo.jpg";
  newContainer(titleText, paraText, imageSrc);
}

function sopralluoghi() {
  const titleText = "Sopralluoghi per offerte";
  const paraText =
    "Contattaci subito per un sopralluogo e preventivo gratuito!";
  const imageSrc = "./home/logo.jpg";
  newContainer(titleText, paraText, imageSrc);
}

function trattamenti() {
  const titleText = "Trattamenti radicali";
  const paraText =
    "Un elemento indispensabile per la salute e la vitalità degli alberi è rappresentato dal suolo e dalle sue caratteristiche fisiche, biologiche e chimiche. Può essere opportuno, a volte, apportare delle migliorie in questo senso, aggiungendo elementi concimanti, somministrando prodotti che stimolino l’attività microbica positiva a livello radicale, arieggiando senza causare danni terreni troppo compatti e carenti di ossigeno. Anche queste operazioni, è importante ricordarlo, vanno calibrate con grande attenzione: gli alberi sono molto sensibili a qualsiasi modifica dell’ambiente in cui vivono, e queste operazioni, se eseguite da personale improvvisato, possono rivelarsi un ulteriore danno invece che un aiuto.";
  const imageSrc = "./home/logo.jpg";
  newContainer(titleText, paraText, imageSrc);
}

function analisi() {
  const titleText = "Analisi di stabilità";
  const paraText =
    "Attraverso la valutazione di stabilità di un albero è possibile verificarne le condizioni vegetative, fitosanitarie e strutturali  e definire gli interventi colturali necessari (ad esempio: potatura, consolidamento, altri interventi specifici). La analisi di stabilità o VTA basa il sistema di controllo visuale tradizionale su fondati principi biomeccanici e definisce i criteri di valutazione del rischio di crollo o rottura. Attraverso l’identificazione di sintomi esterni è possibile cogliere il segnale della presenza di anomalie a carico del legno interno, difetti meccanici e fisici all’interno dell’albero. Se vengono individuati sintomi di difetto (“punti critici”), questi devono essere confermati da metodi di analisi approfonditi. Dove necessario, utilizziamo strumenti non invasivi per la valutazione delle condizioni del legno interno (es.: resistograph RESI, tomografo ARBOTOM) ed effettuiamo pulling test (prove di trazione) per la verifica della tenuta radicale dell’albero (SIM – Static Integrated Methods).";
  const imageSrc = "./home/logo.jpg";
  newContainer(titleText, paraText, imageSrc);
}

function manutenzione() {
  const titleText = "Manutenzione giardini";
  const paraText =
    "Grotto Treeclimbing si prende cura di parchi e giardini sotto ogni aspetto. Il mantenimento delle condizioni ottimali richiede attenzioni specifiche. Sherwood collabora con i migliori professionisti, eseguendo interventi sempre precisi e accurati con la massima dedizione, consapevoli del potenziale di ogni giardino per farlo splendere tutto l’anno.  Offre un servizio completo di manutenzione giardini, aree verdi terrazzi e balconi sia privati, che condominiali e aziendali.";
  const imageSrc = "./home/logo.jpg";
  newContainer(titleText, paraText, imageSrc);
}

function buttonListener(e) {
  const buttonId = e.target.id;
  if (buttonId) clearContainer();

  switch (buttonId) {
    case "potature":
      potature();
      break;
    case "abbattimenti":
      abbattimenti();
      break;
    case "consolidamenti":
      consolidamenti();
      break;
    case "fresatura":
      fresatura();
      break;
    case "processionaria":
      processionaria();
      break;
    case "sopralluoghi":
      sopralluoghi();
      break;
    case "trattamenti":
      trattamenti();
      break;
    case "analisi":
      analisi();
      break;
    case "manutenzione":
      manutenzione();
  }
}

const button = document.querySelector(".info");
button.addEventListener("click", buttonListener);
