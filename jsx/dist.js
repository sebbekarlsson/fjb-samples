/* Bundled with FJB */function globalDef(value) {  return window && value && value.name && (window[value.name] = value);}var __jsx_queue = [];globalDef(__jsx_queue);function __isElement(obj) {  try {    return obj instanceof HTMLElement;  } catch (e) {    return (      typeof obj === "object" &&      obj.nodeType === 1 &&      typeof obj.style === "object" &&      typeof obj.ownerDocument === "object"    );  }}globalDef(__isElement);function __toElement(val) {  if (__isElement(val)) return val;  if (typeof val == "string" || typeof val == "number")    return document.createTextNode(val);    return val;}function __jsx_append_many(parent, elements) {  for (var i = 0; i < elements.length; i++) {    parent.appendChild(__toElement(elements[i]));  }}globalDef(__jsx_append_many);function __jsx_append(parent, el) {  if (!Array.isArray(el)) return parent.appendChild(__toElement(el));  return __jsx_append_many(parent, el);}globalDef(__jsx_append);function React_createTextNode(text) {  return React.createElement("span", null, text);}globalDef(React_createTextNode); ;var _fjb1=(function(module={},exports={}){function render (jsx,root_id){const el=document.getElementById(root_id);el.innerHTML='';el.appendChild(jsx);} ;if (typeof this !== "undefined"){this.render=render;};var __exp = module.exports || exports;return typeof __exp=="function"?__exp:(Object.assign(this, __exp));}).call({},{},{},);let render=(_fjb1.render||_fjb1);; ;var _fjb9=(function(module={},exports={}){const cardStyle=`
background-color: white;
color: black;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
width: 200px;
height: 200px;
display: grid;
grid-template-rows: 20% auto;
font-family: Sans-Serif;
cursor: pointer;
`;const cardHeaderStyle=`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgb(48, 48, 48);
`;const cardBodyStyle=`
  box-sizing: border-box;
  padding: 1rem;
`; function CardHeader (){return (function (){(this.ref=(this.element=(function(){let parent = document.createElement("section");;return parent;})(/* style=cardHeaderStyle */))); this.ref.setAttribute("style", cardHeaderStyle);  return this.ref;}).apply(this);} ;if (typeof this !== "undefined"){this.CardHeader=CardHeader;}; function CardBody (){return (function (){(this.ref=(this.element=(function(){let parent = document.createElement("section");;return parent;})(/* style=cardBodyStyle */))); this.ref.setAttribute("style", cardBodyStyle);  return this.ref;}).apply(this);} ;if (typeof this !== "undefined"){this.CardBody=CardBody;}; function Card (name,description){this.state={toggled:false};this.toggle=function   (){this.state.toggled=!this.state.toggled;} ;handleClick=function   (e){e.preventDefault();this.toggle();this.ref.style.backgroundColor=this.state.toggled?"purple":"";} .bind(this);return ((function (){(this.ref=(this.element=(function(){let parent = document.createElement("div");__jsx_append(parent,(function(){(this.ref =(this.element =(function(){ let parent = new CardHeader();CardHeader;__jsx_append(parent,document.createTextNode(`${name}`));;return parent;})(/*  */)));   return this.ref;}).apply(this));__jsx_append(parent,(function(){(this.ref =(this.element =(function(){ let parent = new CardBody();CardBody;__jsx_append(parent,document.createTextNode(`${description}`));;return parent;})(/*  */)));   return this.ref;}).apply(this));;return parent;})(/* click=handleClick,style=cardStyle,title=name */))); this.ref.addEventListener("click",handleClick);this.ref.setAttribute("style", cardStyle);this.ref.setAttribute("title", name);  return this.ref;}).apply(this));} ;if (typeof this !== "undefined"){this.Card=Card;};var __exp = module.exports || exports;return typeof __exp=="function"?__exp:(Object.assign(this, __exp));}).call({},{},{},);let Card=(_fjb9.Card||_fjb9);;
/* IMPORT `./components/../data/data.json` */
;var _fjb14=(function(module={},exports={}){let cardData=[
  {
    "title": "Tockus flavirostris",
    "description": "Advanced asymmetric policy"
  },
  {
    "title": "Balearica pavonina",
    "description": "Front-line 6th generation website"
  },
  {
    "title": "Didelphis virginiana",
    "description": "Multi-tiered empowering service-desk"
  },
  {
    "title": "Dasypus novemcinctus",
    "description": "Face to face national knowledge user"
  },
  {
    "title": "Certotrichas paena",
    "description": "Proactive optimal application"
  },
  {
    "title": "Meles meles",
    "description": "Ameliorated fault-tolerant contingency"
  },
  {
    "title": "Casmerodius albus",
    "description": "Digitized logistical process improvement"
  },
  {
    "title": "Colobus guerza",
    "description": "Open-source grid-enabled approach"
  },
  {
    "title": "Lasiodora parahybana",
    "description": "Quality-focused discrete success"
  },
  {
    "title": "Grus antigone",
    "description": "Managed homogeneous leverage"
  },
  {
    "title": "Laniaurius atrococcineus",
    "description": "Front-line responsive challenge"
  },
  {
    "title": "Branta canadensis",
    "description": "Focused empowering local area network"
  },
  {
    "title": "Acrantophis madagascariensis",
    "description": "Persistent neutral capability"
  },
  {
    "title": "Phoca vitulina",
    "description": "Re-contextualized transitional knowledge base"
  },
  {
    "title": "Pteronura brasiliensis",
    "description": "Enterprise-wide leading edge core"
  },
  {
    "title": "Phalacrocorax varius",
    "description": "Multi-layered secondary productivity"
  },
  {
    "title": "Manouria emys",
    "description": "Synergistic intangible archive"
  },
  {
    "title": "Lycaon pictus",
    "description": "Multi-layered bandwidth-monitored process improvement"
  },
  {
    "title": "Smithopsis crassicaudata",
    "description": "Secured homogeneous focus group"
  },
  {
    "title": "Alopex lagopus",
    "description": "Diverse coherent workforce"
  },
  {
    "title": "Dacelo novaeguineae",
    "description": "Triple-buffered multimedia encoding"
  },
  {
    "title": "Numida meleagris",
    "description": "Re-contextualized system-worthy artificial intelligence"
  },
  {
    "title": "Phalaropus lobatus",
    "description": "Centralized high-level encryption"
  },
  {
    "title": "Bucephala clangula",
    "description": "Reverse-engineered actuating frame"
  },
  {
    "title": "Aonyx capensis",
    "description": "Face to face motivating workforce"
  },
  {
    "title": "Plegadis falcinellus",
    "description": "De-engineered uniform access"
  },
  {
    "title": "Ramphastos tucanus",
    "description": "User-friendly mobile flexibility"
  },
  {
    "title": "Speothos vanaticus",
    "description": "Organized tangible contingency"
  },
  {
    "title": "Heloderma horridum",
    "description": "Operative reciprocal synergy"
  },
  {
    "title": "Arctogalidia trivirgata",
    "description": "Diverse didactic infrastructure"
  },
  {
    "title": "Macaca mulatta",
    "description": "Upgradable multi-state attitude"
  },
  {
    "title": "Bucorvus leadbeateri",
    "description": "Reduced asynchronous definition"
  },
  {
    "title": "Connochaetus taurinus",
    "description": "Streamlined bottom-line instruction set"
  },
  {
    "title": "Gyps fulvus",
    "description": "Reduced heuristic capability"
  },
  {
    "title": "Ardea golieth",
    "description": "Distributed needs-based initiative"
  },
  {
    "title": "Varanus salvator",
    "description": "Team-oriented client-driven challenge"
  },
  {
    "title": "Meleagris gallopavo",
    "description": "Switchable leading edge task-force"
  },
  {
    "title": "Crotalus cerastes",
    "description": "Assimilated hybrid approach"
  },
  {
    "title": "Taxidea taxus",
    "description": "Proactive leading edge orchestration"
  },
  {
    "title": "Cyrtodactylus louisiadensis",
    "description": "Synchronised hybrid Graphical User Interface"
  },
  {
    "title": "Agkistrodon piscivorus",
    "description": "Progressive responsive complexity"
  },
  {
    "title": "Helogale undulata",
    "description": "Realigned uniform portal"
  },
  {
    "title": "Cathartes aura",
    "description": "Fundamental local groupware"
  },
  {
    "title": "Dasyprocta leporina",
    "description": "Reduced explicit knowledge base"
  },
  {
    "title": "Dusicyon thous",
    "description": "Reduced zero tolerance alliance"
  },
  {
    "title": "Bucorvus leadbeateri",
    "description": "Intuitive systematic application"
  },
  {
    "title": "Falco mexicanus",
    "description": "Enhanced full-range core"
  },
  {
    "title": "Pelecans onocratalus",
    "description": "Fully-configurable heuristic product"
  },
  {
    "title": "Papio ursinus",
    "description": "Polarised mobile functionalities"
  },
  {
    "title": "Halcyon smyrnesis",
    "description": "Profit-focused fresh-thinking leverage"
  },
  {
    "title": "Mazama gouazoubira",
    "description": "Self-enabling directional model"
  },
  {
    "title": "Alopex lagopus",
    "description": "Integrated exuding definition"
  },
  {
    "title": "Anthropoides paradisea",
    "description": "Vision-oriented motivating implementation"
  },
  {
    "title": "Lasiorhinus latifrons",
    "description": "Secured object-oriented framework"
  },
  {
    "title": "Buteo regalis",
    "description": "Proactive dynamic middleware"
  },
  {
    "title": "Haliaeetus leucoryphus",
    "description": "Triple-buffered high-level orchestration"
  },
  {
    "title": "Spermophilus tridecemlineatus",
    "description": "De-engineered 24 hour middleware"
  },
  {
    "title": "Myotis lucifugus",
    "description": "Business-focused client-driven moderator"
  },
  {
    "title": "Aegypius tracheliotus",
    "description": "Right-sized cohesive approach"
  },
  {
    "title": "Bettongia penicillata",
    "description": "Enhanced heuristic knowledge user"
  },
  {
    "title": "Cervus duvauceli",
    "description": "Triple-buffered object-oriented conglomeration"
  },
  {
    "title": "Corvus albus",
    "description": "Right-sized user-facing implementation"
  },
  {
    "title": "Bubalus arnee",
    "description": "Multi-tiered full-range superstructure"
  },
  {
    "title": "unavailable",
    "description": "Balanced cohesive approach"
  }
]
;if (typeof this !== "undefined"){this.cardData=cardData;};;var __exp = module.exports || exports;return typeof __exp=="function"?__exp:(Object.assign(this, __exp));}).call({},{},{},);let cardData=(_fjb14.cardData||_fjb14);; ;var _fjb6=(function(module={},exports={}){const appStyle=`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 0.1fr));
  grid-template-rows: repeat(auto-fit, minmax(200px, 0.1fr));
  grid-gap: 2rem;
`; function App (){return ((function (){(this.ref=(this.element=(function(){let parent = document.createElement("div");__jsx_append(parent,cardData.map((data)=>((function(){(this.ref =(this.element =(function(){ let parent = new Card(text=data.title,description=data.description);Card;;return parent;})(/* text=data.title,description=data.description */))); this.ref.setAttribute("text", data.title);this.ref.setAttribute("description", data.description);  return this.ref;}).apply(this))));;return parent;})(/* style=appStyle */))); this.ref.setAttribute("style", appStyle);  return this.ref;}).apply(this));} ;if (typeof this !== "undefined"){this.App=App;};var __exp = module.exports || exports;return typeof __exp=="function"?__exp:(Object.assign(this, __exp));}).call({},{},{},);let App=(_fjb6.App||_fjb6);
/* IMPORT `index.jsx` */ render((function(){(this.ref =(this.element =(function(){ let parent = new App();App;;return parent;})(/*  */)));   return this.ref;}).apply(this),"root");
