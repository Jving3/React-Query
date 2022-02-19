import useKpiData from "./hooks/useKpiData"


const RQKpiPage = () => {
    
    const onSuccess = (data) => {
        console.log('Resultados obtenidos satisfactoriamente', data)
    }
    const onError = (error) => {
        console.log('Resultados no obtenidos', error)
    }
    
   const { isLoading, data, isError, error, isFetching, refetch } = useKpiData(onSuccess, onError)

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