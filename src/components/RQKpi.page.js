import { useQuery } from "react-query";
import axios from "axios";

const fetchKpi = () => {
    return axios.get('http://localhost:4040/getUsers')
}

const onSuccess = (data) => {
    console.log('Resultados obtenidos satisfactoriamente', data)
}
const onError = (error) => {
    console.log('Resultados no obtenidos', error)
}

const RQKpiPage = () => {

   const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
       'kpi', 
       fetchKpi,
        {
            onSuccess: onSuccess, 
            onError: onError,
            select: (data) => {
                const nombres = data.data.filter(item => item.lastname === 'Apostol')
                return nombres
            }
        }
       )

   console.log({isLoading, isFetching})

    if (isLoading || isFetching) {
        return <h2> Cargando...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return ( 
        <>
            <div><h1>RQ KPI PAGE</h1></div>
            {/* <button onClick={refetch}>Actualizar</button> */}
            {/* {
                data?.data.map(item => {
                    return <div key={item.id}>{item.firstname}</div>
                }) 

            } */}
            {
                data.map( (nombres) => {
                    return <div key={nombres.id}>{nombres.firstname}</div>
                })
            }
        </>
     );


}
 
export default RQKpiPage;