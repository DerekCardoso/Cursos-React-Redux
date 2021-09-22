import React from 'react'

export default props => {
    const { min, max } = props;

    const aleatorio = parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2> O número aleatório </h2>
            <p><strong>Valor Mínimo: </strong> {min}</p>
            <p><strong>Valor Maximo: </strong> {max}</p>
            <p><strong>Valor Escolhido: </strong> {aleatorio}</p>
        </div>
    );
};


