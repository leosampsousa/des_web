module.exports = {
	async index(req, res) {

		return res.json(campis);
	},

	async show(req, res) {
		try {
			const codigo = req.params.codigo;
			const campi = campis.find(campi => (campi.codigo == codigo));

			if (!campi) return res.status(404).send({ error: "Campi não encontrado" });

			return res.json(campi);
		} catch (error) {
			return res.status(500).send({ error: "Erro interno do servidor" });
		}
	},

	async store(req, res) {
		try {
			const nome = req.params.nome;
			const campi = campis.find(campi => (campi.nome == nome));

			if (campi) return res.status(409).send({ error: "Campi já cadastrado" });

			if (req.body.cursos.length === 0)
				return res.status(400).send({ error: "Campi deve conter pelo menos um curso" });

			const campiCriado = await Campi.create(req.body);

			return res.json(campiCriado);
		} catch (error) {
			return res.status(500).send({ error: "Erro interno do servidor" });
		}
	},

	async update(req, res) {
		try {

			let _campi = campis.find(campi => (campi.codigo == req.params.codigo));
			if (_campi){
				_campi.nome = req.body.nome;
				res.json(_campi);
			}

			if (!campi) return res.status(404).send({ error: "Campi não encontrado" });


			if (!campi) return res.status(404).send({ error: "Campi não encontrado" });

			return res.json(campi);
		} catch (error) {
			return res.status(500).send({ error: "Erro interno do servidor" });
		}
	},

	async destroy(req, res) {
		try {
			let _campi = alunos.find(campi => (campi.codigo == req.params.codigo));
			if (_campi){
				const index = campis.indexOf(_campi)
				campis.splice(index,1);
				res.json(_campi);
			} else{
				res.status(404).send("Aluno não encontrado");
			}

			return res.send(campi);
		} catch (error) {
			return res.status(500).send({ error: "Erro interno do servidor" });
		}
	}
};
