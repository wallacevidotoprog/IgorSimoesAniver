const convidados = {
  "ricardo": {
    nome: "Ricardo",
    idade: 30,
    foto: "https://via.placeholder.com/180", // Substitua por foto real
    endereco: "Rua das Festas, 90 - São Paulo, SP"
  },
  "ana": {
    nome: "Ana",
    idade: 25,
    foto: "https://via.placeholder.com/180",
    endereco: "Av. Neon, 123 - Rio de Janeiro, RJ"
  }
};

const params = new URLSearchParams(window.location.search);
const nome = new URLSearchParams(window.location.search).get("nome");
const convidado = convidados[path.toLowerCase()];

if (convidado) {
  document.getElementById("nome").textContent = convidado.nome;
  document.getElementById("idade").textContent = convidado.idade;
  document.getElementById("foto").src = convidado.foto;
  document.getElementById("endereco").textContent = convidado.endereco;
  document.getElementById("link-mapa").href =
    `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(convidado.endereco)}`;
} else {
  document.body.innerHTML = "<h2 style='color:#f00;'>Convite não encontrado 😢</h2>";
}
