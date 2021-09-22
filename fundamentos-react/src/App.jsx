import './App.css'
import React from 'react'

import Mega from './components/mega/Mega';
import Contador from './components/contador/Contador';
import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import DiretaPai from './components/comunicacao/DiretaPai';
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Card from './components/layout/Card';
import Aleatorio from './components/basicos/Aleatorio';
import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#13 - Mega" color="#B9006E">
                <Mega qtde={8}></Mega>
            </Card>

            <Card titulo="#12 - Contador" color="#7a95">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#11 - Componente Controlado (Input)" color="#884f26">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#59323c">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando' }} />
            </Card>

            <Card titulo="#07 - Desafio Repetição" color="#7E15">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#FF14C5">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filho" color="#00C8F8">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com parametro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro Silva"
                    nota={9.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#CCFF00">
                <Primeiro></Primeiro>
            </Card>
        </div>


    </div>
);
