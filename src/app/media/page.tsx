"use client";

import { useState } from "react";

export default function Media() {
    const [n1, setN1] = useState<string>("");
    const [n2, setN2] = useState<string>("");
    const [n3, setN3] = useState<string>("");
    const [n4, setN4] = useState<string>("");
    const [n5, setN5] = useState<string>("");

    const [res, setRes] = useState<number | undefined>();

    const erro = "Digite um numero válido";

    interface ICalcular {
        n1: string,
        n2: string,
        n3: string,
        n4: string,
        n5: string
    }

    function Calcular({n1, n2, n3, n4, n5}: ICalcular) {
        let nota1 = parseFloat(n1);
        let nota2 = parseFloat(n2);
        let nota3 = parseFloat(n3);
        let nota4 = parseFloat(n4);
        let nota5 = parseFloat(n5);
        if(!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3) && !isNaN(nota4) && !isNaN(nota5)){
            setRes((nota1 + nota2 + nota3 + nota4 + nota5) / 5);
        }
        else{
            setRes(undefined);
        }
    }

    return (
        <div className="flex justify-center mt-5">
            <div className="bg-cor2">
                <div className="text-center p-2 bg-cor1">
                    <h1>Calculo Média</h1>
                </div>
                <div className="flex flex-col items-center gap-3 p-5">
                    <div className="flex items-center gap-2">
                        <p>Nota 1:</p>
                        <input type="text" className="bg-cor3 text-preto p-1" value={n1} onChange={(e) => {setN1(e.target.value)}} />
                    </div>
                    <div className="flex items-center gap-2">
                        <p>Nota 2:</p>
                        <input type="text" className="bg-cor3 text-preto p-1" value={n2} onChange={(e) => {setN2(e.target.value)}} />
                    </div>
                    <div className="flex items-center gap-2">
                        <p>Nota 3:</p>
                        <input type="text" className="bg-cor3 text-preto p-1" value={n3} onChange={(e) => {setN3(e.target.value)}} />
                    </div>
                    <div className="flex items-center gap-2">
                        <p>Nota 4:</p>
                        <input type="text" className="bg-cor3 text-preto p-1" value={n4} onChange={(e) => {setN4(e.target.value)}} />
                    </div>
                    <div className="flex items-center gap-2">
                        <p>Nota 5:</p>
                        <input type="text" className="bg-cor3 text-preto p-1" value={n5} onChange={(e) => {setN5(e.target.value)}} />
                    </div>
                    <div className="bg-azul p-2 text-branco rounded">
                        <button onClick={() => Calcular({n1:n1, n2:n2, n3:n3, n4:n4, n5:n5})}>Calcular</button>
                    </div>
                    <div>
                        <p>
                            {!isNaN(res ?? NaN) ? ((res ?? NaN) >= 7) ? `Nota Final: ${res?.toFixed(2)}, PASSOU` : `Nota Final: ${res?.toFixed(2)}, NÃO PASSOU` : erro}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}