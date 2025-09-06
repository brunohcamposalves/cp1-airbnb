const PLAYERS = [
  {
    nome: "Marta",
    posicao: "ATA",
    clube:
      "https://upload.wikimedia.org/wikipedia/pt/c/c0/OrlandoCity_SC_logo.png",
    foto: "https://static.wefut.com/assets/images/fut24/playeravatars/custom/50558538.png",
    gols: 15,
    assistencias: 10,
    jogos: 28,
    favorita: false,
  },
  {
    nome: "Aitana Bonmatí",
    posicao: "MEI",
    clube:
      "https://upload.wikimedia.org/wikipedia/pt/thumb/4/43/FCBarcelona.svg/2020px-FCBarcelona.svg.png",
    foto: "https://cdn.futwiz.com/assets/img/fc24/faces/117682179.png",
    gols: 5,
    assistencias: 12,
    jogos: 30,
    favorita: false,
  },
  {
    nome: "Alex Morgan",
    posicao: "ATA",
    clube:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDIEuby3BvZue9cwVBi7WtEI6dbuHAPwQpSvXI7WkwfgzT56zudBeLGDdUjz9UCN7-es5C4Za2DZZzj7BH1_huKeFYd-f1AUncyy4CR2HZorzqZr_-wiktWik3whKX97PKIwBzvycdKLk/s1600/1646909251708930-0.png",
    foto: "https://cdn3.futbin.com/content/fifa24/img/players/p134444029.png?fm=png&ixlib=java-2.1.0&w=224&s=5a3a3079c8cfb7a03037583931df64cb",
    gols: 2,
    assistencias: 1,
    jogos: 32,
    favorita: false,
  },
  {
    nome: "Renard",
    posicao: "ZAG",
    clube: "https://fifastatic.fifaindex.com/FIFA22/teams/light/66.png",
    foto: "https://cdn3.futbin.com/content/fifa25/img/players/p67336180.png?fm=png&ixlib=java-2.1.0&verzion=1&w=485&s=161eea8ea4a4c7c9d11fef7d6a0fe607",
    gols: 1,
    assistencias: 2,
    jogos: 25,
    favorita: false,
  },
  {
    nome: "Alex Greenwood",
    posicao: "LE",
    clube:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/England_national_football_team_crest.svg/250px-England_national_football_team_crest.svg.png",
    foto: "https://cdn3.futbin.com/content/fifa24/img/players/p50558902.png?fm=png&ixlib=java-2.1.0&w=224&s=ed308190da7122c0952a310ed97fa3bc",
    gols: 0,
    assistencias: 0,
    jogos: 18,
    favorita: false,
  },
];

// Create
const addPlayer = () => {
  const playerForm = document.querySelector("#playerForm");

  const playerName = document.querySelector("#namePlayer").value;
  const playerTeam = document.querySelector("#playerTeam").value;
  const playerPicture = document.querySelector("#playerPicture").value;
  const playerAssists = document.querySelector("#playerAssists").value;
  const playerGoals = document.querySelector("#playerGoals").value;
  const playerPostion = document.querySelector("#playerPostion").value;
  const playerGames = document.querySelector("#playerGames").value;

  if (!playerForm.reportValidity()) {
    console.warn("Todos os campos obrigatórios devem ser preenchidos");
    return;
  }

  const player = {
    nome: playerName,
    posicao: playerPostion,
    clube: playerTeam,
    foto: playerPicture,
    gols: playerGoals,
    assistencias: playerAssists,
    jogos: playerGames,
    favorita: false,
  };

  PLAYERS.unshift(player);
  playerForm.reset();
  listPlayers();

  alert("Jogadora criada com sucesso!");
};

// Read
const listPlayers = () => {
  const playersList = document.querySelector(".playersList");
  playersList.innerHTML = " ";

  PLAYERS.forEach((jogadora, index) => {
    const cardPlayers = document.createElement("div");
    cardPlayers.classList.add("cardPlayer");

    cardPlayers.innerHTML = `
    <div class="playerInfo"> 
        <img src="${jogadora.foto}" class="playerImage" alt="foto da jogadora"> 
        <p class="playerPosition">
         ${jogadora.posicao} 
         <button class="buttonEdit" data-section="posicao" data-action="edit" data-index="${index}">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>  
         </p>
        <img src="${jogadora.clube}" class="playerTeam" alt="logo do clube">
        <p class="playerName">
          ${jogadora.nome.toUpperCase()} 
          <button class="buttonEdit" data-section="nome" data-action="edit" data-index="${index}">
              <i class="fa-solid fa-pen-to-square"></i>
            </button> 
        </p>
    </div>
    <div class="playerStatistics">
        <p> <strong> Jogos: </strong> ${jogadora.jogos}  
         <button class="buttonEdit" data-section="jogos" data-action="edit" data-index="${index}">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>  
        </p>
        <p> <strong> Gols: </strong> ${jogadora.gols} 
         <button class="buttonEdit" data-section="gols" data-action="edit" data-index="${index}">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>   
        </p>
        <p> <strong> Assis.: </strong> ${jogadora.assistencias}  
          <button class="buttonEdit" data-section="assistencias" data-action="edit" data-index="${index}">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>  
        </p>
    </div>
    `;

    playersList.append(cardPlayers);
  });
};

// Update
const editPlayer = (index, section) => {
  let novoCampo = "";

  switch (section) {
    case "clube":
      novoCampo = prompt("Editar Clube:", PLAYERS[index].clube);
      if (novoCampo !== null) {
        PLAYERS[index].clube = novoCampo;
        listPlayers();
      }
      alert(
        `Clube da jogadora "${PLAYERS[index].nome}" atualizado com sucesso para "${novoCampo}"!`
      );
      break;

    case "jogos":
      novoCampo = prompt("Editar Jogos:", PLAYERS[index].jogos);
      if (novoCampo !== null) {
        PLAYERS[index].jogos = novoCampo;
        listPlayers();
      }
      alert(
        `Jogos da jogadora "${PLAYERS[index].nome}" atualizados com sucesso para "${novoCampo}"!`
      );
      break;

    case "nome":
      novoCampo = prompt("Editar Nome:", PLAYERS[index].nome);
      if (novoCampo !== null) {
        PLAYERS[index].nome = novoCampo;
        listPlayers();
      }
      alert(`Nome atualizado com sucesso para "${novoCampo}"!`);

      break;

    case "posicao":
      novoCampo = prompt("Editar Posição:", PLAYERS[index].posicao);
      if (novoCampo !== null) {
        PLAYERS[index].posicao = novoCampo;
        listPlayers();
      }
      alert(`Posição atualizada da jogadora "${PLAYERS[index].nome}" com sucesso para "${novoCampo}"!`);

      break;

    case "assistencias":
      novoCampo = prompt(
        "Editar N° de Asistencias:",
        PLAYERS[index].assistencias
      );
      if (novoCampo !== null) {
        PLAYERS[index].assistencias = novoCampo;
        listPlayers();
      }
      alert(
        `Assistências da jogadora "${PLAYERS[index].nome}" atualizadas com sucesso para "${novoCampo}"!`
      );

      break;

    case "gols":
      novoCampo = prompt("Editar N° de gols:", PLAYERS[index].gols);
      if (novoCampo !== null) {
        PLAYERS[index].gols = novoCampo;
        listPlayers();
      }
      alert(
        `Gols da jogadora "${PLAYERS[index].nome}" atualizados com sucesso para "${novoCampo}"!`
      );
      break;

    case "image":
      novoCampo = prompt("Editar imagem(url):", PLAYERS[index].foto);
      if (novoCampo !== null) {
        PLAYERS[index].foto = novoCampo;
        listPlayers();
      }
      alert("Imagem atualizada com sucesso!");
      break;

    default:
      alert("Erro");
      break;
  }
};

// Delete
const deletePlayer = (index) => {
  const confirm = window.confirm("Tem certeza que deseja apagar este post?");

  if (confirm) {
    PLAYERS.splice(index, 1);
    listPlayers();
  }
};

const handleCardClick = (event) => {
  const clickedElement = event.target.closest("button");

  if (!clickedElement) return;

  const action = clickedElement.dataset.action;
  const index = clickedElement.dataset.index;
  const section = clickedElement.dataset.section;

  if (action === "edit") {
    editPlayer(index, section);
  } else if (action === "delete") {
    deletePlayer(index);
  }
};

window.onload = () => {
  listPlayers();

  document
    .querySelector(".playersList")
    .addEventListener("click", handleCardClick);
};

const button = document.querySelector("#playerPost");
button.addEventListener("click", addPlayer);
