import React, { useState } from 'React';

function App() {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    }
    const decrementar = () => {
        setContador(contador - 1); 
    }
    return (
        <div>
            <p>voce clicou {contador} Vezes.</p>
            <button onClick={incrementar}>Clique aqui</button>
            <button onClick={decrementar}>Clique aqui</button>
        </div>
    );
}
export default App;