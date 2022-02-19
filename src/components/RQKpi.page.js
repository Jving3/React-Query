import { useQuery } from "react-query";
import axios from "axios";

const fetchKpi = () => {
    return axios.get('http://localhost:4040/getUsers')
}

const RQKpiPage = () => {

   const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
       'kpi', 
       fetchKpi,
        {
           enabled: false, 
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
            <button onClick={refetch}>Actualizar</button>
            {
                data?.data.map(item => {
                    return <div key={item.id}>{item.firstname}</div>
                }) 

            }
        </>
     );


}
 
export default RQKpiPage;