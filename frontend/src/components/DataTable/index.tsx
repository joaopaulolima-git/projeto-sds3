import axios from "axios";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/request";

const DataTable = () => {
    
    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    })

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=0&size20&sort=date,desc`)
            .then(reponse => {
                setPage(reponse.data);
            })

    }, []);
    
    
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {page.content?.map(x => (
                        <tr key={x.id}>
                        <td>{formatLocalDate(x.date, "dd/MM/yyyy")}</td>
                        <td>{x.seller.name}</td>
                        <td>{x.visited}</td>
                        <td>{x.deals}</td>
                        <td>{x.amount.toFixed(2)}</td>
                    </tr>
                    ))  }                          
                </tbody>
            </table>
        </div>
    );
}
export default DataTable;