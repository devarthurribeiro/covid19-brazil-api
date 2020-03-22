import Layout from '../components/Layout';

function Map() {
  return (
    <Layout>
      <h2>Mapa &rarr;</h2>
      <div className="flex-center">
        <main>
          <iframe
            title="teste"
            src="https://olhardigital.com.br/site/frontend/padrao/templates/paginas/outras/corona/brasil.html"
            frameBorder="0"
          />
        </main>
      </div>
      <style jsx>
        {`
          iframe{
            width: 600px;
            height: 600px;
            border-radius: 8px;
          }
        `}

      </style>
    </Layout>
  );
}

export default Map;
