//const axios = require('axios');
//
//const getCharById = (res, id) => {
//    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//        .then(({ data }) => {
//           const { name, gender, species, origin, image, status } = data;
//            const character = {id, name, gender, species, origin, image, status }
//
//            res.writeHead(200, { 'content-type': 'application/json' });
//            return res.end(JSON.stringify(character));
//        })
//        .catch((err) => {
//            res.writeHead(500, { 'content-type': 'text-plain' })
//            return res.end(err.message)
//        })
//}
//
//module.exports = getCharById;


const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(`${URL}${id}`);
    const { data } = response;

    if (data.error) {
      // No se encontró un personaje con el ID especificado
      return res.status(404).json({ message: "Not found" });
    }

    // Extracción de las propiedades requeridas
    const {
      id: characterId,
      status,
      name,
      species,
      origin,
      image,
      gender,
    } = data;

    // Respuesta exitosa con los datos del personaje
    return res.json({
      id: characterId,
      status,
      name,
      species,
      origin,
      image,
      gender,
    });
  } catch (error) {
    // Manejo de errores en caso de problemas con la petición
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getCharById };