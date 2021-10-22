const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection("incidents").count(); //[] posicao zero

    const incidents = await connection("incidents")
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf",
      ]);

    response.header("X-Total-Count", count["count(*)"]);

    return response.json(incidents);
  },

  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization; //contexto da ong logada no sistema

    const [id] = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id,
    });

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization; //contexto da ong logada no sistema

    //select para trazer o id do incident primeiramente
    const incident = await connection("incidents")
      .where("id", id)
      .select("ong_id")
      .first();

    //verificação se o incident retornado acima nao possui o id da ong logada, nao permitindo deletá-lo
    if (incident.ong_id != ong_id) {
      return response.status(401).json({ error: "Operation not permitted" });
    }

    //se nao parou na verificação acima, significa q o incident foi criado pela ong logada, entao deleta
    await connection("incidents").where("id", id).delete();

    return response.status(204).send();
  },
};
