import useKpiData from "../hooks/useKpiData"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const RQKpiPage = () => {

    const onSuccess = (data) => {
        console.log('Resultados obtenidos satisfactoriamente', data) //,data "Para mostrar los datos obtenidos de la DB"
    }
    const onError = (error) => {
        console.log('Resultados no obtenidos', error)
    }

    const { isLoading, data, isError, error, isFetching, refetch } = useKpiData(onSuccess, onError)

    console.log({ isLoading, isFetching })

    if (isLoading || isFetching) {
        return <>
            <div className="encabezado"><h1>FORUS BEE</h1></div>
            <div className="encabezado"><h2>Cargando datos...</h2></div>
        </>

    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    const pick = data.data.filter(item => item.actividad.includes('PICK'));
    const picking = pick.map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put = data.data.filter(item => item.actividad.includes('PUTAWAY'));
    const putaway = put.map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_uno = pick.filter(item => item.estacion === 1).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_uno = put.filter(item => item.estacion === 1).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_dos = pick.filter(item => item.estacion === 2).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_dos = put.filter(item => item.estacion === 2).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_tres = pick.filter(item => item.estacion === 3).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_tres = put.filter(item => item.estacion === 3).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_cuatro = pick.filter(item => item.estacion === 4).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_cuatro = put.filter(item => item.estacion === 4).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_cinco = pick.filter(item => item.estacion === 5).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_cinco = put.filter(item => item.estacion === 5).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_seis = pick.filter(item => item.estacion === 6).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_seis = put.filter(item => item.estacion === 6).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_siete = pick.filter(item => item.estacion === 7).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_siete = put.filter(item => item.estacion === 7).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_ocho = pick.filter(item => item.estacion === 8).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_ocho = put.filter(item => item.estacion === 8).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_nueve = pick.filter(item => item.estacion === 9).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_nueve = put.filter(item => item.estacion === 9).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_diez = pick.filter(item => item.estacion === 10).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_diez = put.filter(item => item.estacion === 10).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_once = pick.filter(item => item.estacion === 11).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_once = put.filter(item => item.estacion === 11).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_doce = pick.filter(item => item.estacion === 12).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_doce = put.filter(item => item.estacion === 12).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_trece = pick.filter(item => item.estacion === 13).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_trece = put.filter(item => item.estacion === 13).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_catorce = pick.filter(item => item.estacion === 14).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_catorce = put.filter(item => item.estacion === 14).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_quince = pick.filter(item => item.estacion === 15).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_quince = put.filter(item => item.estacion === 15).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_dieciseis = pick.filter(item => item.estacion === 16).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_dieciseis = put.filter(item => item.estacion === 16).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_diecisiete = pick.filter(item => item.estacion === 17).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_diecisiete = put.filter(item => item.estacion === 17).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_dieciocho = pick.filter(item => item.estacion === 18).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_dieciocho = put.filter(item => item.estacion === 18).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_diecinueve = pick.filter(item => item.estacion === 19).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_diecinueve = put.filter(item => item.estacion === 19).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_veinte = pick.filter(item => item.estacion === 20).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_veinte = put.filter(item => item.estacion === 20).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_veintiuno = pick.filter(item => item.estacion === 21).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_veintiuno = put.filter(item => item.estacion === 21).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_veintidos = pick.filter(item => item.estacion === 22).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_veintidos = put.filter(item => item.estacion === 22).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_veintitres = pick.filter(item => item.estacion === 23).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_veintitres = put.filter(item => item.estacion === 23).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_veinticuatro = pick.filter(item => item.estacion === 24).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_veinticuatro = put.filter(item => item.estacion === 24).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_veinticinco = pick.filter(item => item.estacion === 25).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_veinticinco = put.filter(item => item.estacion === 25).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_veintiseis = pick.filter(item => item.estacion === 26).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_veintiseis = put.filter(item => item.estacion === 26).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const pick_veintisiete = pick.filter(item => item.estacion === 27).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const put_veintisiete = put.filter(item => item.estacion === 27).map(item => item.completed_quantity).reduce((prev, curr) => prev + curr, 0);

    const chart = [
        {
            estacion: 'Estación 1',
            picking: pick_uno,
            putaway: put_uno,
        },
        {
            estacion: 'Estación 2',
            picking: pick_dos,
            putaway: put_dos,
        },
        {
            estacion: 'Estación 3',
            picking: pick_tres,
            putaway: put_tres,
        },
        {
            estacion: 'Estación 4',
            picking: pick_cuatro,
            putaway: put_cuatro,
        },
        {
            estacion: 'Estación 5',
            picking: pick_cinco,
            putaway: put_cinco,
        },
        {
            estacion: 'Estación 6',
            picking: pick_seis,
            putaway: put_seis,
        },
        {
            estacion: 'Estación 7',
            picking: pick_siete,
            putaway: put_siete,
        },
        {
            estacion: 'Estación 8',
            picking: pick_ocho,
            putaway: put_ocho,
        },
        {
            estacion: 'Estación 9',
            picking: pick_nueve,
            putaway: put_nueve,
        },
        {
            estacion: 'Estación 10',
            picking: pick_diez,
            putaway: put_diez,
        },
        {
            estacion: 'Estación 11',
            picking: pick_once,
            putaway: put_once,
        },
        {
            estacion: 'Estación 12',
            picking: pick_doce,
            putaway: put_doce,
        },
        {
            estacion: 'Estación 13',
            picking: pick_trece,
            putaway: put_trece,
        },
        {
            estacion: 'Estación 14',
            picking: pick_catorce,
            putaway: put_catorce,
        },
        {
            estacion: 'Estación 15',
            picking: pick_quince,
            putaway: put_quince,
        },
        {
            estacion: 'Estación 16',
            picking: pick_dieciseis,
            putaway: put_dieciseis,
        },
        {
            estacion: 'Estación 17',
            picking: pick_diecisiete,
            putaway: put_diecisiete,
        },
        {
            estacion: 'Estación 18',
            picking: pick_dieciocho,
            putaway: put_dieciocho,
        },
        {
            estacion: 'Estación 19',
            picking: pick_diecinueve,
            putaway: put_diecinueve,
        },
        {
            estacion: 'Estación 20',
            picking: pick_veinte,
            putaway: put_veinte,
        },
        {
            estacion: 'Estación 21',
            picking: pick_veintiuno,
            putaway: put_veintiuno,
        },
        {
            estacion: 'Estación 22',
            picking: pick_veintidos,
            putaway: put_veintidos,
        },
        {
            estacion: 'Estación 23',
            picking: pick_veintitres,
            putaway: put_veintitres,
        },
        {
            estacion: 'Estación 24',
            picking: pick_veinticuatro,
            putaway: put_veinticuatro,
        },
        {
            estacion: 'Estación 25',
            picking: pick_veinticinco,
            putaway: put_veinticinco,
        },
        {
            estacion: 'Estación 26',
            picking: pick_veintiseis,
            putaway: put_veintiseis,
        },
        {
            estacion: 'Estación 27',
            picking: pick_veintisiete,
            putaway: put_veintisiete,
        },
    ];

    console.log(chart)

    return (
        <>
            <div className="encabezado"><h1>FORUS BEE</h1></div>
            <div className="encabezado"><h2><button onClick={refetch}>Actualizar</button></h2></div>

            <div className="encabezado"><h2>{data.data[0].fecha}</h2></div>

            <div className="produccion-total">
                <h3>Total Picking: {picking} | Total Putaway: {putaway}</h3>
            </div>

            <div>

                <BarChart
                    width={1500}
                    height={600}
                    data={chart}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="estacion" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="picking" fill="#8884d8" />
                    <Bar dataKey="putaway" fill="#82ca9d" />
                </BarChart>

            </div>

            <div className="produccion">
                <div>

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

                </div>
            </div>


        </>
    );


}

export default RQKpiPage;