import atendimentos from "./Atendimentosroots.js";
import tatuadores from "./Tatuadoresroots.js"


export default (app) => {
  app.use(tatuadores);
  app.use(atendimentos);
  
};