import { useQuery } from "react-query";
import axios from "axios";

const fetchKpi = () => {
    return axios.get('http://localhost:4040/getProd')
}

const useKpiData = (onSuccess, onError) => {

    return useQuery(
        'kpi', //Primer argumento: clave unica
        fetchKpi, // Segundo argumento: Funcion de busqueda
        {
            onSuccess: onSuccess, //Tercer argumento: es un objeto donde podemos especificar opciones o configuraciones para modificar su comportamiento
            onError: onError,
            refetchInterval: false
            // staleTime: 5000
            // enabled:false
        },  
        )

}

export default useKpiData;