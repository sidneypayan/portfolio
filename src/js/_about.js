const about = document.getElementById('about')

const text =
	"Après de nombreuses péripéties, je décide de m'établir dans la belle contrée du web developpement en 2018. Ce qui devait être un court apprentissage lié à un projet de site de langue, se transforma en véritable passion. Autodidacte enthousiaste, j'ai à coeur de donner le meilleur de moi-même pour chacune des missions qui me sont confiées."

let i = 0
function typeText() {
	if (i < text.length) {
		about.innerHTML += text.charAt(i)
		i++
		setTimeout(typeText, 20)
	}
}

document.addEventListener('DOMContentLoaded', typeText)
