import { useState } from "react"
import { byRole } from "./Bridge"

export const Short=()=>{

    const[view,setView]=useState(false)
    const[arr,setArr]=useState([])

    const[cred,setCred]=useState({
        "person":"",
        "role1":"",
        "role2":"",
        "expected":0.0
    })

    const track=(eve)=>{
        const{name,value}=eve.target

        setCred((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const sub=async()=>{
        alert(JSON.stringify(cred))
        const t = await byRole(cred.role1,cred.role2)
        if(t.data){
            setView(true)
            setArr(t.data)
        }
    }

    const res=()=>{
        setCred(()=>{
            return{
                "person":"",
                "role1":"",
                "role2":"",
                "expected":0.0
            }
        })
    }

    return(<>
        <div className="container-fluid mt-3">
            <h1 className="display-6 text-center text-primary">Shortlist Resource's</h1>
            <div className="row justify-content-center">
                {(view)?
                <>
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
                    <button className="btn btn-outline-dark" onClick={()=>{
                        setView(false)
                    }}>
                        Back
                    </button>
                </>
                :
                <>
                    <div className="col-lg-5 col-md-8 col-sm-12 shadow rounded p-3">
                        <div className="form-group">
                            <label>By Name</label>
                            <input className="form-control" type="text" name="person" value={cred.person} onChange={track} placeholder="Person NAme"/>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label>By Role</label>
                                <input className="form-control" type="text" name="role1" value={cred.role1} onChange={track} placeholder="Person Role"/>
                            </div>
                            <div className="col">
                                <label>By Role</label>
                                <input className="form-control" type="text" name="role2" value={cred.role2} onChange={track} placeholder="Person Role"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>By Expected Salary</label>
                            <input className="form-control" type="text" name="expected" value={cred.expected} onChange={track} placeholder="Person Expected Salary"/>
                        </div>
                        <div className="mt-2 row justify-content-around">
                            <button className="btn btn-success col-1" onClick={sub}>
                                <i class="bi bi-funnel-fill"></i>
                            </button>
                            <button className="btn btn-secondary col-1" onClick={res}>
                                <i class="bi bi-skip-backward-fill"></i>
                            </button>
                        </div>
                    </div>
                </>
                }
            </div>
        </div>
    </>)
}