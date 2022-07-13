import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Table, Button, Alert, Breadcrumb } from "react-bootstrap"
import './index.css';
import { getSuggestedQuery } from "@testing-library/react";

export default function useKripto(items, setItems) {

    // const [items, setItems] = useState([]);
    const [searchFormData, setSearchFormData] = useState("")
    const [currentTarget, setCurrentTarget] = useState()
    


    useEffect(() => {
        async function getData() {


            const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h")
            let data = await res.json()
            data = data.map((item) => ({ ...item, isFav: false }))
            setItems(data)
        }
        getData()

    }, [])

    
    const handleClick = event => {

        
        
        console.log(event.target.attributes[1].nodeValue)


        setItems(items.map((item) => {
            if (item.symbol === event.target.attributes[1].nodeValue) {
                item.isFav = !item.isFav
                console.log(item.isFav)
                item.isFav ? event.currentTarget.style.color = 'yellow' : event.currentTarget.style.color = "black"
                
            }
            return item;
            
        }))

    }

   


    let tablebody;
    if(items) tablebody = items.filter((val) => {
        if (searchFormData == "") {
            return val
        } else if (val.name.toLowerCase().includes(searchFormData.toLowerCase()))
            return val.name
    }).map((item) => {

        return (


            <tbody key={item.id} >
                <tr className="Kripto-moneys-tablebody"  >
                    <td ><i className="fa-solid fa-star"value={item.symbol} onClick={handleClick}></i></td>
                    <td >{item.market_cap_rank}</td>
                    <td ><img className="kripto-resim" src={item.image} />{item.name}</td>
                    <td >{item.symbol}</td>
                    <td >{item.current_price.toLocaleString()} $</td>
                    <td >{item.market_cap.toLocaleString()}</td>
                    <td >{item.high_24h.toLocaleString()} / {item.low_24h.toLocaleString()}</td>
                    <td >{item.price_change_24h.toLocaleString()}</td>


                </tr>
            </tbody>)
    })


    return {
        handleClick,
        render: (
            <div className="Kripto-moneys-all container">
                
                <form>
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={(event) => {
                            setSearchFormData(event.target.value)
                        }}
                    />
                </form>
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
                    {tablebody}
                </Table>
            </div>
        )
    }
}