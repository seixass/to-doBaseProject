import Tarefa from "../models/tarefaModel.js";

//tarefas?page=2&limit=10
export const getAll = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  try {
    const tarefas = await Tarefa.findAndCountAll({
      limit,
      offset,
    });

    const totalPaginas = Math.ceil(tarefas.count / limit);
    res.status(200).json({
      totalTarefas: tarefas.count,
      totalPaginas,
      paginaAtual: page,
      itensPorPagina: limit,
      proximaPagina:
        totalPaginas === 0
          ? null
          : `http://localhost:3333/tarefas?page=${page + 1}`,
      tarefas: tarefas.rows,
    });
  } catch (error) {
    res.status(500).json({ msg: "Erro ao listar tarefas" });
  }
};

export const create = async (req, res) => {
  const { tarefa, descricao } = req.body;
  const status = "pendente";

  if (!tarefa) {
    res.status(400).json({ err: "A tarefa é obrigatório" });
    return;
  }
  if (!descricao) {
    res.status(400).json({ err: "A tarefa é obrigatório" });
    return;
  }

  const novaTarefa = {
    tarefa,
    descricao,
    status,
  };
  try {
    await Tarefa.create(novaTarefa);
    res.status(201).json({ mes: "Tarefa Cadastrada" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ meg: "Erro ao cadastrar tarefa" });
  }
};

export const getTarefa = async (req, res) => {
  const { id } = req.params;

  try {
    // const tarefa = await Tarefa.findByPk(id);
    const tarefa = await Tarefa.findOne({ where: {id} })
    res.status(200).json(tarefa);
  } catch (error) {
    res.status(500).json({ msg: "Erro ao buscar tarefa" });
  }
};
