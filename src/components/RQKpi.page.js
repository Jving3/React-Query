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
            staleTime: 40000,
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