import { useQuery } from "react-query";
import axios from "axios";

const fetchKpi = () => {
    return axios.get('http://localhost:4040/getUsers')
}

const RQKpiPage = () => {

   const { isLoading, data, isError, error, isFetching } = useQuery(
       'kpi', 
       fetchKpi,
        {
            refetchOnMount: true, //true, false (actualiza solo la primera vez), 'always'
            refetchOnWindowFocus: 'always' // configuracion del comportamiento del enfoque de ventana
        }
       )

   console.log({isLoading, isFetching})

    if (isLoading) {
        return <h2> Cargando...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return ( 
        <>
            <div><h1>RQ KPI PAGE</h1></div>
            {
                data?.data.map(item => {
                    return <div key={item.id}>{item.firstname}</div>
                }) 

            }
        </>
     );


}
 
export default RQKpiPage;