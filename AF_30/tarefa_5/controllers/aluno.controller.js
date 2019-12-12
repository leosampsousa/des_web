const Aluno = require('../models/aluno.model');

exports.listar = async function(req,res){
	const alunos = await Aluno.find();
	return res.json(alunos);
};

exports.inserir = async function(req,res){
	try{

		const teste = await Aluno.findOne({matricula : req.body.matricula})
		if (teste) return res.status(409).send({ error: "Aluno já cadastrado" });

		const alunoCriado = await Aluno.create(req.body)
	
		return res.json(alunoCriado);

	}catch(error){

		return res.status(500).send({ error: "Erro interno do servidor" });
	}
};

exports.visualizar = async function(req,res){
	try{	
		const alunoDesejado = await Aluno.findOne({matricula : req.params.matricula})
		if (alunoDesejado) return res.json(alunoDesejado);
		return res.status(404).send({error: "Aluno não cadastrado"});

	}catch(error){
		return res.status(500).send({ error: "Erro interno do servidor" });
	}
};


exports.update = async function(req,res){

	try{
		const alunoAtualizado = await Aluno.findOneAndUpdate({matricula : req.params.matricula}, req.body, {new : true})
		if(alunoAtualizado) return res.json(alunoAtualizado);
		return res.status(404).send({error:"Aluno não encontrado"});

	}catch(error){
		return res.status(500).send({error:"Erro interno do servidor"});
	}

};

exports.remover = async function(req,res){

	try {
		const alunoRemovido = await Aluno.findOneAndRemove({matricula: req.params.matricula })
		if(alunoRemovido) return res.json(alunoRemovido);
		return res.status(404).send({error:"Aluno não encontrado"});
	}catch(error){
		return res.status(500).send({error:"Erro interno do servidor"});
	}
}