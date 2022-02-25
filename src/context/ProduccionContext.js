import { createContext } from "react";
import useKpiData from "../hooks/useKpiData"

export const ProduccionContext = createContext();

const ProduccionProvider = (props) => {


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
            <div className="titulo">
                 <h1>PRODUCCIÓN FORUS BEE</h1>
            </div>

            <div className="encabezado">
                <div>
                    <h3>Total Picking: Cargando... | Total Putaway: Cargando...</h3>
                </div>
                <div>
                    <h3>Cargando...</h3>
                </div>

                <div>
                <h3><button>Actualizar</button></h3>
                </div>
            </div>
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
            Estación: '1',
            Pick: pick_uno,
            Put: put_uno,
        },
        {
            Estación: '2',
            Pick: pick_dos,
            Put: put_dos,
        },
        {
            Estación: '3',
            Pick: pick_tres,
            Put: put_tres,
        },
        {
            Estación: '4',
            Pick: pick_cuatro,
            Put: put_cuatro,
        },
        {
            Estación: '5',
            Pick: pick_cinco,
            Put: put_cinco,
        },
        {
            Estación: '6',
            Pick: pick_seis,
            Put: put_seis,
        },
        {
            Estación: '7',
            Pick: pick_siete,
            Put: put_siete,
        },
        {
            Estación: '8',
            Pick: pick_ocho,
            Put: put_ocho,
        },
        {
            Estación: '9',
            Pick: pick_nueve,
            Put: put_nueve,
        },
        {
            Estación: '10',
            Pick: pick_diez,
            Put: put_diez,
        },
        {
            Estación: '11',
            Pick: pick_once,
            Put: put_once,
        },
        {
            Estación: '12',
            Pick: pick_doce,
            Put: put_doce,
        },
        {
            Estación: '13',
            Pick: pick_trece,
            Put: put_trece,
        },
        {
            Estación: '14',
            Pick: pick_catorce,
            Put: put_catorce,
        },
        {
            Estación: '15',
            Pick: pick_quince,
            Put: put_quince,
        },
        {
            Estación: '16',
            Pick: pick_dieciseis,
            Put: put_dieciseis,
        },
        {
            Estación: '17',
            Pick: pick_diecisiete,
            Put: put_diecisiete,
        },
        {
            Estación: '18',
            Pick: pick_dieciocho,
            Put: put_dieciocho,
        },
        {
            Estación: '19',
            Pick: pick_diecinueve,
            Put: put_diecinueve,
        },
        {
            Estación: '20',
            Pick: pick_veinte,
            Put: put_veinte,
        },
        {
            Estación: '21',
            Pick: pick_veintiuno,
            Put: put_veintiuno,
        },
        {
            Estación: '22',
            Pick: pick_veintidos,
            Put: put_veintidos,
        },
        {
            Estación: '23',
            Pick: pick_veintitres,
            Put: put_veintitres,
        },
        {
            Estación: '24',
            Pick: pick_veinticuatro,
            Put: put_veinticuatro,
        },
        {
            Estación: '25',
            Pick: pick_veinticinco,
            Put: put_veinticinco,
        },
        {
            Estación: '26',
            Pick: pick_veintiseis,
            Put: put_veintiseis,
        },
        {
            Estación: '27',
            Pick: pick_veintisiete,
            Put: put_veintisiete,
        },
    ];


    return (

        <ProduccionContext.Provider
            value={{
                isLoading,
                data,
                isError,
                error,
                isFetching,
                pick,
                picking,
                put,
                putaway,
                chart,
                refetch 
            }}
        >
            {props.children}
        </ProduccionContext.Provider>

    );

}

export default ProduccionProvider;