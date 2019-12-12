function alterarCurso(element){
		var campus = element.value;

		var cursos;

		switch (campus) {
			case "Pici":
				cursos = ["Computação", "Matemática", "Geologia"];
				break;

			case "Benfica":
				cursos = ["Letras", "Filosofia", "Direito"];
				break;

			case "Porangabussu":
				cursos = ["Medicina", "Odontologia", "Farmácia"];
				break;

			default:
				cursos = [];
				break;
		}

		var cursoSelectElement = document.getElementById("curso");



		while(cursoSelectElement.firstChild){
			cursoSelectElement.removeChild(cursoSelectElement.firstChild);

		}

		var selecioneOptionElement = document.createElement("option");

		selecioneOptionElement.className = "selected";
		selecioneOptionElement.textContent = "Selecione um curso";
		selecioneOptionElement.value = "";

		cursoSelectElement.appendChild(selecioneOptionElement);

		cursos.forEach(curso => {
			var optionElement = document.createElement("option");
			optionElement.textContent = curso;

			cursoSelectElement.appendChild(optionElement);
		});

	}