const url = "http://localhost:8080/motiva-se/frases";

async function consumirApi() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erro na rede ao buscar as frases");
    }

    const frase = await response.json();
    exibirFrase(frase);
  } catch (error) {
    console.error("Erro ao buscar frases:", error);
  }
}

function exibirFrase(frase) {
  const textoFrase = document.getElementById("texto-frase");
  const autorFrase = document.getElementById("autor-frase");

  textoFrase.textContent = `"${frase.texto}"`;
  autorFrase.textContent = frase.autor;

  console.log(textoFrase);
  console.log(autorFrase);
}

document.addEventListener("DOMContentLoaded", consumirApi);
