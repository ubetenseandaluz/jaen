
   // Lista completa de los 97 municipios de la provincia de Jaén
const municipiosJaen = [
  "Albanchez de Mágina", "Alcalá la Real", "Alcaudete", "Aldeaquemada", "Andújar",
  "Arjona", "Arjonilla", "Arquillos", "Arroyo del Ojanco", "Baeza", "Bailén",
  "Baños de la Encina", "Beas de Segura", "Bedmar y Garcíez", "Begíjar",
  "Bélmez de la Moraleda", "Benatae", "Cabra del Santo Cristo", "Cambil",
  "Campillo de Arenas", "Canena", "Carboneros", "Cárcheles", "Castellar",
  "Castillo de Locubín", "Cazalilla", "Cazorla", "Chiclana de Segura",
  "Chilluévar", "Escañuela", "Espelúy", "Frailes", "Fuensanta de Martos",
  "Fuerte del Rey", "Génave", "La Guardia de Jaén", "Guarromán",
  "Higuera de Calatrava", "Hinojares", "Hornos", "Huelma", "Huesa", "Ibros",
  "La Iruela", "Iznatoraf", "Jabalquinto", "Jaén", "Jamilena", "Jimena",
  "Jódar", "Lahiguera", "Larva", "Linares", "Lopera", "Lupión", "Mancha Real",
  "Marmolejo", "Martos", "Mengíbar", "Montizón", "Navas de San Juan",
  "Noalejo", "Orcera", "Peal de Becerro", "Pegalajar", "Porcuna", "Pozo Alcón",
  "Puente de Génave", "La Puerta de Segura", "Quesada", "Rus", "Sabiote",
  "Santa Elena", "Santiago de Calatrava", "Santiago-Pontones",
  "Santisteban del Puerto", "Santo Tomé", "Segura de la Sierra", "Siles",
  "Sorihuela del Guadalimar", "Torredelcampo", "Torreblascopedro",
  "Torredonjimeno", "Torreperogil", "Torres", "Torres de Albanchez", "Úbeda",
  "Valdepeñas de Jaén", "Vilches", "Villacarrillo", "Villanueva de la Reina",
  "Villanueva del Arzobispo", "Villardompardo", "Villarrodrigo", "Villatorres"
];

document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  const entrada = document.getElementById("municipio").value.trim().toLowerCase();
  const resultado = document.getElementById("resultado");

  const pertenece = municipiosJaen.some(m => m.toLowerCase() === entrada);

  if (pertenece) {
    resultado.textContent = "✅ El municipio pertenece a la provincia de Jaén.";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "❌ El municipio NO pertenece a la provincia de Jaén.";
    resultado.style.color = "red";
  }
});

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("municipio").value = "";
  const resultado = document.getElementById("resultado");
  resultado.textContent = "";
  resultado.style.color = "black";
});
