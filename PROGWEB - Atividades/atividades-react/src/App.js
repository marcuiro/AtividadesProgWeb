// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
      <div style={{ margin: 'auto' }}>

        <div className="cabecalho">
          <h1>Catálogo de Produtos</h1>
        </div>
        <table className="table" style={{ width: '90%', marginTop: '10px', marginLeft: 'auto', marginRight: 'auto' }}>
          <thead>
            <tr>
              <th>Nome do Produto</th>
              <th>Preço</th>
              <th>Desconto</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Mais Frio Que Gelo</td>
              <td>R$ 55,00</td>
              <td>15%</td>
            </tr>
            <tr>
              <td>Na Mente de Sherlock Holmes</td>
              <td>R$ 76,00</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>Vade Mecum</td>
              <td>R$ 160,00</td>
              <td>20%</td>
            </tr>
            <tr>
              <td>Orgulho e Preconceito</td>
              <td>R$ 19,00</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>Dom Casmurro</td>
              <td>R$ 15,00</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>One Piece Vol. 1</td>
              <td>R$ 35,00</td>
              <td>5%</td>
            </tr>
          </tbody>
        </table>
      </div>
  );
}

export default App;
