ENDPOINT:
https://olhardigital.com.br/site/arquivos/json/covid19.json

return data:
{
"u": "rn",
"s": 108,
"c": 1,
"d": 22,
"o": 0,
"v": false,
"t": false
},

DATA MAP
u = state
s = suspects
c = confirmed
d = refuses
o = deaths

ENDPOINT:
https://services.arcgis.com/lqRTrQp2HrfnJt8U/arcgis/rest/services/COVID_19_Backup/FeatureServer/0/

return data:
{
  "objectid": 6,
  "estados": "Ceará",
  "regiao": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bandeira_do_Cear%C3%A1.svg/40px-Bandeira_do_Cear%C3%A1.svg.png",
  "cod_uf": 23,
  "uf": "CE",
  "symbolid": " ",
  "shape_leng": 2147628.36386,
  "nióbio": " ",
  "nome_sigla": "Ceará (CE)",
  "casos_susp": 493,
  "casos_conf": 112,
  "casos_desc": 89,
  "obitos": 0,
  "transmissa": "Não",
  "casos_secr": 125,
  "Shape__Area": 147876615233.5,
  "Shape__Length": 2147628.36386458,
  "GlobalID": "0934b09e-5182-42c7-88f6-6d32a51383c4"
}

DATA MAP

nome_sigla = state
casos_susp = suspects
casos_conf = confirmed
casos_desc = refuses
obitos = deaths  
