import React from 'react'
import NavImg from "../../Asset/SavileRow_Registry_D._CB1198675309_.jpg"
import  Celebrate from "../../Asset/icon_Celebrate.svg"
import Return from "../../Asset/icon_Return.svg"
import Share from "../../Asset/icon_Share.svg"
import Thank from "../../Asset/icon_Thank_you.svg"
import "./Registry.css"
import { Register, subRegister } from '../../Data'

const Registry = () => {
  return (
    <div>
        <img src={NavImg} alt='' width="100%" style={{marginTop:"4%"}}/>
        <div>
            <p style={{fontSize:"30px", fontWeight:"600",textAlign:"center", }} >The gift of better gift-giving</p>
        </div>
        <div className='Registry_Body'>
            <p style={{fontSize:"22px", fontWeight:"680",textAlign:"center", }}>Find a registry or gift list</p>
            <p>Registrant name</p>
            <div className='Registry_BodyFlex'>
                <input type="text" placeholder='Search by Registrant name'/>
                <select>
                    <option>Wedding Registry</option>
                    <option>Baby Registry</option>
                    <option>Gift List</option>
                </select>
                <buton className="Registry_BodyFlex_Button">Search</buton>
            </div>
            
        </div>
        <div>
            <p style={{fontSize:"31px", fontWeight:"600",textAlign:"center", marginBottom:"4%"}}>Reasons to create a registry or gift list on Amazon</p>
            <div className='Registry_Image'>
                <img src={Celebrate} alt="" width="6%"/>
                <img src={Share} alt="" width="6%"/>
                <img src={Return} alt="" width="6%"/>
                <img src={Thank} alt="" width="6%"/>
            </div>
            <div className='Registry_Register'>
                {Register.map(Register =>{
                    return(
                        <div className='Registry_RegisterBorder'>
                            <p style={{fontSize:"22px", fontWeight:"600"}}>{Register.title}</p>
                            <p>{Register.description}</p>
                        </div>
                    )
                })}
            </div>
            <p style={{fontSize:"32px", fontWeight:"600",textAlign:"center", marginBottom:"-8%"}}>Learn more about our different registries and gift lists</p>
            <div className='Registry_subRegister'>
                {subRegister.map(subRegister =>{
                    return(
                        <div className='Registry_subRegisterBorder'>
                            <img src={subRegister.img} alt=''/>
                            <p>{subRegister.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Registry