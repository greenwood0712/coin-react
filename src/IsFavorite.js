import { clear } from '@testing-library/user-event/dist/clear';
import React, { useState } from 'react'
import { Table } from "react-bootstrap"
function IsFavorite(props) {


    const [addingFavorite, setAddingFavorite] = useState()

    
    

    let tBody = [];
    // function addItem(){
    if (props.items) props.items.filter(item => {
        if (item.isFav === true) {

            tBody.push(
                
                    <tbody key={item.id} >
                        <tr className="Kripto-moneys-tablebody"  >
                                
                            <td ><i className="fa-solid fa-star yellow"></i></td>
                            <td >{item.market_cap_rank}</td>
                            <td ><img className="kripto-resim" src={item.image}  />{item.name}</td>
                            <td >{item.symbol}</td>
                            <td >{item.current_price.toLocaleString()} $</td>
                            <td >{item.market_cap.toLocaleString()}</td>
                            <td >{item.high_24h.toLocaleString()} / {item.low_24h.toLocaleString()}</td>
                            <td >{item.price_change_24h.toLocaleString()}</td>
                        </tr>
                    </tbody>
                
            )
            
        }
        
    })

    
    
    // }
    function removeStar(){
        tBody.pop()
    }


    return (


    <div className='container'>

        <Table responsive="sm">

            <thead>
                <tr>
                    <th></th>
                    <th>No.</th>
                    <th>İsim</th>
                    <th>Sembol</th>
                    <th>Fiyat(USD)</th>
                    <th>Piy.Değ.</th>
                    <th>(24S)En y./(24S)En d.</th>
                    <th>Değ(24S)</th>


                </tr>
            </thead>
            {tBody}
        </Table>
        </div>    



    )
}

export default IsFavorite