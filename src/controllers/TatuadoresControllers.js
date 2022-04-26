import tatuadores from "../models/TatuadoresModels.js";

class TatuadoresController {
    static getTatuadores = (req, res) => {
        tatuadores.find((e, tatuadores) => {
          if (e) {
            res.status(500).send({ message: `${e.message} - Fail search` });
          } else {
            res.status(200).json(tatuadores);
          }
        });
      };


      static getPorEstilo = (req, res) => {
        const estilo = req.query.estilo_tattoo
      tatuadores.find({estilo_tattoo: estilo}, {}, (e, tatuadores) => {
        if (e) {
          res.status(500).send({ message: `${e.message} - Fail to search` });
        } else {
          res.status(200).json(tatuadores);
        }
      });
    };

      static postTatuadores = (req, res) => {
          const cadastroTatuador = new tatuadores(req.body)
        cadastroTatuador.save(cadastroTatuador, (e) => {
          if (e) {
            res.status(500).send({ message: `${e.message} - Fail to post` });
          } else {
            res.status(200).json(cadastroTatuador);
          }
        });

      };

      static updateTatuadores = (req, res) => {
        const id = req.params.id
      tatuadores.findByIdAndUpdate(id, {$set: req.body}, (e) => {
        if (e) {
          res.status(500).send({ message: `${e.message} - Fail to update` });
        } else {
          res.status(200).json(tatuadores);
        }
      });
    }
      static deleteTatuadores = (req, res) => {
        const id = req.params.id
      tatuadores.findByIdAndDelete(id, (e) => {
        if (e) {
          res.status(500).send({ message: `${e.message} - Fail to delete Tatuador` });
        } else {
          res.status(200).json();
        }
      });

    };
      





}
  

export default TatuadoresController


