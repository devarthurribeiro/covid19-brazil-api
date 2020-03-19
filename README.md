<h1 align="center">
  <img src="/public/logo.svg" width="90px"/>
</h1>
<h1 align="center">COVID-19 Brazil API</h1>
<p align="center">
  <strong>Notificação de casos de doença pelo coronavírus 2019 (COVID-19) no Brasil</strong>
</p>

## Motivo

Fornecer um API json com dados atualizados sobre avanço do coronavírus Brasil.

## Rodando o projeto

Servidor de desenvolvimento

```bash
npm run dev
# or
yarn dev
```

Visite [http://localhost:3000](http://localhost:3000) com o seu navegador para ver o resultado.

## Endpoints

Todas chamas devem usar como a url
```
https://covid19-brazil-api.now.sh
```


#### Consulta dados de casos por estado

```
// GET /api/report/v1

{
"data": [
    {
      "id": 20,
      "uid": 35,
      "uf": "SP",
      "state": "São Paulo",
      "cases": 164,
      "deaths": 1,
      "suspects": 5047,
      "refuses": 709,
      "broadcast": "true",
      "comments": "Transmissão comunitária no município de São Paulo.",
      "created_at": "2020-03-17 14:45:18",
      "updated_at": "2020-03-18 12:32:00"
    }
    //...
   ]
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

## Contribuidores

## Autores

| [<img src="https://avatars1.githubusercontent.com/u/12974798?s=460&u=6a69934913c6f56d74fdf9c80793881d4cfb7bf6&v=4" width=115><br><sub>@devarthurribeioro</sub>](https://github.com/devarthurribeiro)
| :---: |
