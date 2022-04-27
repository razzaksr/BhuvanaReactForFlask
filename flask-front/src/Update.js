import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOne, up } from "./Bridge"

export const Update=()=>{

    const[pro,setPro]=useState({})

    const{data}=useParams()

    const callGetOne=async()=>{
        const t = await getOne(data)
        setPro(t.data)
    }

    useEffect(()=>{
        callGetOne()
    },[])

    const track=(eve)=>{
        const{name,value}=eve.target

        setPro((old)=>{
            return{
                ...old,
                [name]:value,
            }
        })
    }

    const sub=async()=>{
        const t = await up(pro)
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
                        <div className="col">
                            <label>Resource person role</label>
                            <input type="text" value={pro.role} onChange={track} name="role" className="form-control" placeholder="Person Role"/>
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
                            <i class="bi bi-arrow-down-up"></i>
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