import { useState} from 'react';


function App(){
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState ('');
  const [idade, setIdade] = useState ('0'); 
  
  return (
    <div>
      <h1> Cadastrando usuario</h1>


    <form onSubmit={hanL}>
      <label>Nome: </label><br/>
      <input 
      placeholder="Digite seu nome"/> 
      value={nome}
      onChange = { (e) => setNome(e.target.value) }
      <br/>

      <label>Email: </label><br/>
      <input placeholder=" Digite seu email"/>
      placeholder="Digite seu email"
      value={email}
      onChange = {(e) => setEmail(e.target.value)}
      
       <br/>
      
      <label>Idade: </label><br/>
      <input placeholder=" Digite seu nome"/> 
      placeholder={idade}
      onChange={(e) => setIdade(e.target.value)}
      <br/>
      
      <button trype="submit"> Registrar</button> 
    </form>

    <br/><br/>

    <div>
      <span> Bem vindo: Mateus</span><br/>
      <span>Idade 30</span><br/>
      <span>Email: teste@teste.com</span><br/>
    </div>
  </div>
  );
  
}

export default App;

