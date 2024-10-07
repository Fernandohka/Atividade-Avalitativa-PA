"use client";

import { useState } from "react";


export default function Imc() {
    const [peso, setPeso] = useState<string>("");
    const [altura, setAltura] = useState<string>("");
    const [res, setRes] = useState<number | undefined>();

    const erro = "Digite um numero válido";

    interface ICalcular {
        p: string,
        a: string
    }
    function Calcular({p, a}: ICalcular) {
        let peso = parseFloat(p);
        let altura = parseFloat(a);
        if(!isNaN(altura) && !isNaN(peso)){
            setRes(peso/(altura*altura))
        }
        else{
            setRes(undefined);
        }
    }

    return (
        <div className="flex justify-center mt-5">
            <div className="bg-cor2">
                <div className="text-center p-2 bg-cor1">
                    <h1>Calculo de IMC</h1>
                </div>
                <div className="flex flex-col items-center gap-3 p-5">
                    <div className="flex items-center gap-2">
                        <p>Peso (kg): </p>
                        <input type="text" className="bg-cor3 text-preto p-1" value={peso} onChange={(e) => {setPeso(e.target.value)}} />
                    </div>
                    <div className="flex items-center gap-2">
                        <p>Altura (m): </p>
                        <input type="text" className="bg-cor3 text-preto p-1" value={altura} onChange={(e) => {setAltura(e.target.value)}} />
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={() => {Calcular({p:peso, a:altura})}}>Calcular</button>
                    </div>
                    <div className="bg-azul p-2 text-branco rounded">
                        <p>{!isNaN(res ?? NaN) ? res?.toFixed(2) : erro}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}