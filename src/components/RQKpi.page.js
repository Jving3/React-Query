import { useQuery } from "react-query";
import axios from "axios";

const fetchKpi = () => {
    return axios.get('http://localhost:4040/getUsers')
}


const RQKpiPage = () => {

   const { cargando, data } = useQuery('kpi', fetchKpi)

    if (cargando) {
        return <h2> Cargando...</h2>
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