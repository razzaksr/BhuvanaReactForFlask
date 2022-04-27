import { useEffect, useState } from "react"
import { all } from "./Bridge"

export const Home=()=>{

    const[arr,setArr]=useState([])

    const callAll=async()=>{
        const t = await all()
        setArr(t.data)
    }

    useEffect(()=>{
        callAll()
    },[])

    return(<>
        <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='table-responsive-md'>
                        <table className='text-center col-lg-12 col-md-9 col-sm-12 shadow p-5 table table-hover'>
                            <thead>
                                <tr>
                                    <th>Resource name</th>
                                    <th>Resource experience</th>
                                    <th>Resource role</th>
                                    <th>Resource ctc</th>
                                    <th>Resource expected</th>
                                    <th>Resource Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {arr.map((ele)=>(
                                    <tr>
                                        <td>{ele.person}</td>
                                        <td>{ele.experience}</td>
                                        <td>{ele.role}</td>
                                        <td>{ele.ctc}</td>
                                        <td>{ele.expected}</td>
                                        <td className="row justify-content-around">
                                            <a href={`/read/${ele.id}`} className="btn btn-outline-info col-3">
                                                <i class="bi bi-envelope-open-fill"></i>
                                            </a>
                                            <a href={`/edit/${ele.id}`} className="btn btn-outline-warning col-3">
                                                <i class="bi bi-arrow-up-square-fill"></i>
                                            </a>
                                            <a href={`/del/${ele.id}`} className="btn btn-outline-danger col-3">
                                                <i class="bi bi-person-dash-fill"></i>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    </>)
}