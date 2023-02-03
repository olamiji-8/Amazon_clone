import React from 'react'
import NavImg from "../../Asset/SavileRow_Registry_D._CB1198675309_.jpg"
import "./Registry.css"

const Registry = () => {
  return (
    <div>
        <img src={NavImg} alt='' width="100%" style={{marginTop:"4%"}}/>
        <div>
            <p>Find a registry or gift list</p>
            <p>Registrant name</p>
            <div>
                <input type="text" placeholder='Search by Registrant name'/>
                <select>
                    <option>Wedding Registry</option>
                    <option>Baby Registry</option>
                    <option>Gift List</option>
                </select>
                <buton>Search</buton>
            </div>
        </div>
        <div>
            <p>Reasons to create a registry or gift list on Amazon</p>
            
        </div>
    </div>
  )
}

export default Registry