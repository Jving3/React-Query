import { useState } from "react";
import { useContext } from "react";
import { ProduccionContext } from "../context/ProduccionContext";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'; //Legend, Cell

const Produccion = () => {

    const { data, refetch, picking, putaway, chart  } = useContext(ProduccionContext);

    const [ boton, setBoton ] = useState(true);


    return (
        <>

        {boton ? ( 

            <main>
        
            <div className="titulo">
                 <h1>PRODUCCIÓN FORUS BEE</h1>
            </div>

            <div className="encabezado">
                <div>
                    <h3>Total Picking: {picking} | Total Putaway: {putaway}</h3>
                </div>
                <div>
                    <h3>{data.data[0].fecha}</h3>
                </div>

                <div>
                <h3><button onClick={() => refetch}>Actualizar</button></h3>
                <h3><button onClick={() => setBoton(false)}>Ver tabla</button></h3>
                </div>
            </div>

            <div className="grafico">
                <div className="grafico-container">
                <ResponsiveContainer width='99%' height='99%'>
                    <BarChart
                        width={800}
                        height={400}
                        data={chart}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Estación" />
                        <YAxis />
                        <Tooltip />
                        {/* <Legend/> */}
                        <Bar dataKey="Pick" fill="#8884d8" />
                        <Bar dataKey="Put" fill="#82ca9d" />
                    </BarChart>
                    </ResponsiveContainer>

                    </div>
                </div>

            </main>
        
        ) : ( 
        
        <main>

            <div className="titulo">
                 <h1>PRODUCCIÓN FORUS BEE</h1>
            </div>

            <div className="encabezado">
                <div>
                    <h3>Total Picking: {picking} | Total Putaway: {putaway}</h3>
                </div>
                <div>
                    <h3>{data.data[0].fecha}</h3>
                </div>

                <div>
                <h3><button onClick={() => refetch}>Actualizar</button></h3>
                <h3><button onClick={() => setBoton(true)}>Ver gráfico</button></h3>
                </div>
            </div>

            <div className="produccion">
                {/* <div>

                    <p>Estación 1 Picking: {pick_uno} | Putaway: {put_uno}</p>
                    <p>Estación 2 Picking: {pick_dos} | Putaway: {put_dos}</p>
                    <p>Estación 3 Picking: {pick_tres} | Putaway: {put_tres}</p>
                    <p>Estación 4 Picking: {pick_cuatro} | Putaway: {put_cuatro}</p>
                    <p>Estación 5 Picking: {pick_cinco} | Putaway: {put_cinco}</p>
                    <p>Estación 6 Picking: {pick_seis} | Putaway: {put_seis}</p>
                    <p>Estación 7 Picking: {pick_siete} | Putaway: {put_siete}</p>
                    <p>Estación 8 Picking: {pick_ocho} | Putaway: {put_ocho}</p>
                    <p>Estación 9 Picking: {pick_nueve} | Putaway: {put_nueve}</p>

                </div>

                <div>

                    <p>Estación 10 Picking: {pick_diez} | Putaway: {put_diez}</p>
                    <p>Estación 11 Picking: {pick_once} | Putaway: {put_once}</p>
                    <p>Estación 12 Picking: {pick_doce} | Putaway: {put_doce}</p>
                    <p>Estación 13 Picking: {pick_trece} | Putaway: {put_trece}</p>
                    <p>Estación 14 Picking: {pick_catorce} | Putaway: {put_catorce}</p>
                    <p>Estación 15 Picking: {pick_quince} | Putaway: {put_quince}</p>
                    <p>Estación 16 Picking: {pick_dieciseis} | Putaway: {put_dieciseis}</p>
                    <p>Estación 17 Picking: {pick_diecisiete} | Putaway: {put_diecisiete}</p>
                    <p>Estación 18 Picking: {pick_dieciocho} | Putaway: {put_dieciocho}</p>

                </div>

                <div>

                    <p>Estación 19 Picking: {pick_diecinueve} | Putaway: {put_diecinueve}</p>
                    <p>Estación 20 Picking: {pick_veinte} | Putaway: {put_veinte}</p>
                    <p>Estación 21 Picking: {pick_veintiuno} | Putaway: {put_veintiuno}</p>
                    <p>Estación 22 Picking: {pick_veintidos} | Putaway: {put_veintidos}</p>
                    <p>Estación 23 Picking: {pick_veintitres} | Putaway: {put_veintitres}</p>
                    <p>Estación 24 Picking: {pick_veinticuatro} | Putaway: {put_veinticuatro}</p>
                    <p>Estación 25 Picking: {pick_veinticinco} | Putaway: {put_veinticinco}</p>
                    <p>Estación 26 Picking: {pick_veintiseis} | Putaway: {put_veintiseis}</p>
                    <p>Estación 27 Picking: {pick_veintisiete} | Putaway: {put_veintisiete}</p>

                </div> */}
            </div>


        </main>
        
        )}

            
            

            


           

                


        </>
    );


}

export default Produccion;