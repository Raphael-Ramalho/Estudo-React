type Data = {
  name: string;
  cpf: string;
  campus: string;
  ru: string;
  curse: string;
  endDate: string;
};

const leticiaData: Data = {
  name: "LETÍCIA DOMENE",
  cpf: "33784294880",
  campus: "CAMPINAS - SP",
  ru: "4521699",
  curse: "TECNOLOGIA EM ANÁLISE E DESENVOLVIMENTO DE SISTEMA",
  endDate: "29/11/2029",
};

const raphaelData: Data = {
  name: "RAPHAEL DE SOUZA RAMALHO VICTOR FERREIRA",
  cpf: "14426798752",
  campus: "NOVA FRIBURGO - RJ",
  ru: "3651314",
  curse: "TECNOLOGIA EM ANÁLISE E DESENVOLVIMENTO DE SISTEMA",
  endDate: "15/08/2028",
};

export const data = true ? leticiaData : raphaelData;
