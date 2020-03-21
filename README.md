<p align="center">
  <img src="/api/public/logo.svg" width="90px" float="center"/>
</p>
<h1 align="center">COVID-19 Brazil API</h1>
<p align="center">
  <strong>Notificação de casos de doença pelo coronavírus 2019 (COVID-19) no Brasil</strong>
</p>

## Motivo 🤔

Fornecer um API json com dados atualizados sobre avanço do coronavírus Brasil. Assim como em outros países.

## Datasets 💽

- [CSSEGISandData](https://github.com/CSSEGISandData/COVID-19)
- [Ministério da Saúde](http://plataforma.saude.gov.br/novocoronavirus)

## Rodando o projeto 🚀

Servidor de desenvolvimento

```bash
cd api
npm run dev
# or
yarn dev
```

Visite [http://localhost:3000](http://localhost:3000) com o seu navegador para ver o resultado.

## Endpoints 🔌

Todas chamas devem usar a url base:

```
https://covid19-brazil-api.now.sh
```

#### Consulta dados de casos por estado

```
// GET /api/report/v1

{
"data": [
    {
      "uid": 35,
      "datetime": "2020-03-18T20:00:00.000Z",
      "uf": "SP",
      "state": "São Paulo",
      "cases": 164,
      "deaths": 1,
      "suspects": 5047,
      "refuses": 709,
    }
    //...
   ]
}
```

#### Consulta dados de casos de todos paises

```
// GET /api/report/v1/countries

{
"data": [
    {
      "country": "Brazil",
      "cases": 523,
      "confirmed": 529,
      "deaths": 4,
      "recovered": 2,
      "updated_at": "2020-03-19T02:53:32.000Z"
    }
    //...
   ]
}
```

#### Consulta dados de casos por pais

```
// GET /api/report/v1/:country

// resultado para /api/report/v1/brazil
{
  "data": {
    "country": "Brazil",
    "cases": 523,
    "confirmed": 529,
    "deaths": 4,
    "recovered": 2,
    "updated_at": "2020-03-19T02:53:32.000Z"
  }
}
```

#### Status da api

```
// GET /api/status/v1

{
  "status": "ok",
  "date": "2020-03-18T12:37:59.227Z",
  "environment": "production",
  "aws": {
    "region": "us-west-1",
    "function_version": "$LATEST"
  }
}
```

## Autor

<table>
  <tr>
    <td align="center"><a href="https://github.com/devarthurribeiro"><img src="https://avatars1.githubusercontent.com/u/12974798?s=460&u=6a69934913c6f56d74fdf9c80793881d4cfb7bf6&v=4" width="100px;" alt=""/><br /><sub><b>Arthur Ribeiro</b></sub></a><br /><a href="https://github.com/devarthurribeiro/covid19-brazil-api/commits?author=devarthurribeiro" title="Code">💻</a> <a href="#devarthurribeiro" title="Design">🎨</a></td>
  <tr>
</table>
