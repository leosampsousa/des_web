var alunos = [
    {
       nome:"Fernando",
	   matricula: 1,
    },
    {  
       nome:"Maria",
       matricula: 2,
    }
];

module.exports = {
	index(req, res) {

		return res.json(alunos);
	},

	show(req, res) {
		try {
			const matricula = req.params.matricula;
			const aluno = alunos.find(aluno => (aluno.matricula == matricula));

			if (!aluno) return res.status(404).send({ error: "Aluno não encontrado" });

			return res.json(aluno);
		} catch (error) {
			return res.status(500).send({ error: "Erro interno do servidor" });
		}
	},

	store(req, res) {
		try {
			const matricula = req.body.matricula;

			let _aluno = alunos.find(aluno => (aluno.matricula == matricula));

			if (_aluno) return res.status(409).send({ error: "Aluno já cadastrado" });

			let aluno = req.body;
			console.log(aluno);
			alunos.push(aluno)

			return res.json(aluno);
		} catch (error) {
			return res.status(500).send({ error: "Erro interno do servidor" });
		}
	},

	update(req, res) {
		try {
			const matricula = req.params.matricula;
			let _aluno = alunos.find(aluno => (aluno.matricula == matricula));
			if (_aluno){
				_aluno.nome = req.body.nome;
				res.json(_aluno);
			}

			if (!aluno) return res.status(404).send({ error: "Aluno não encontrado" });

			return res.json(aluno);
		} catch (error) {
			return res.status(500).send({ error: "Erro interno do servidor" });
		}
	},

	destroy(req, res) {
		try {
			const matricula = req.params.matricula;
			let _aluno = alunos.find(aluno => (aluno.matricula == matricula));
			if (_aluno){
				const index = alunos.indexOf(_aluno)
				alunos.splice(index,1);
				res.json(_aluno);
			} else{
				res.status(404).send("Aluno não encontrado");
			}

			return res.send(aluno);
		} catch (error) {
			return res.status(500).send({ error: "Erro interno do servidor" });
		}
	}
};
