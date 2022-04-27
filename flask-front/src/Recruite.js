import { useState } from "react"
import { add } from "./Bridge"

export const Recruite=()=>{

    const[pro,setPro]=useState({
        "person":"",
        "experience":0,
        "role":"",
        "ctc":0.0,
        "expected":0.0
    })

    const[roles,setRoles]=useState("")

    const track=(eve)=>{
        const{name,value}=eve.target

        setPro((old)=>{
            return{
                ...old,
                [name]:value,
            }
        })
    }

    const tracks=(eve)=>{
        const{name,value}=eve.target
        setRoles(value)
    }

    const sub=async()=>{
        pro.role=roles
        //alert(JSON.stringify(pro))
        const t = await add(pro)
        alert(JSON.stringify(t.data))
        window.location.assign("/")
    }

    const res=()=>{
        setPro(()=>{
            return{
                "person":"",
                "experience":0,
                "role":"",
                "ctc":0.0,
                "expected":0.0
            }
        })
    }

    return(<>
        <div className="container-fluid mt-3">
            <h1 className="display-6 text-center text-primary">Recruite New Resource</h1>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12 shadow rounded p-3">
                    <div className="form-group">
                        <label>Resource person name</label>
                        <input type="text" value={pro.person} onChange={track} name="person" className="form-control" placeholder="Person Name"/>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Resource person experience</label>
                            <input type="text" value={pro.experience} onChange={track} name="experience" className="form-control" placeholder="Person Experience"/>
                        </div>
                        <div className="col align-self-center">
                            <label>Resource person role</label>
                            <input type="radio" name="roles" onChange={tracks} value="Architect" className="form-inline-control"/>Architect
                            <input type="radio" name="roles" onChange={tracks} value="Trade" className="form-inline-control"/>Trade
                            <input type="radio" name="roles" onChange={tracks} value="Finance" className="form-inline-control"/>Finance
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Resource person CTC</label>
                            <input type="text" value={pro.ctc} onChange={track} name="ctc" className="form-control" placeholder="Person Current CTC"/>
                        </div>
                        <div className="col">
                            <label>Resource person expected</label>
                            <input type="text" value={pro.expected} onChange={track} name="expected" className="form-control" placeholder="Person Expected CTC"/>
                        </div>
                    </div>
                    <div className="mt-2 row justify-content-around">
                        <button className="btn btn-primary col-1" onClick={sub}>
                            <i class="bi bi-person-plus-fill"></i>
                        </button>
                        <button className="btn btn-dark col-1" onClick={res}>
                            <i class="bi bi-slash-square-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}