import React from "react";
import { useEffect, useState } from "react";
import Feature from "./../Feature";
import { Row,Container } from "react-bootstrap";
import './../css/feature.css'


function FeatureHooks() {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products?skip=4&limit=4')
        .then(res => res.json())
        .then(json => setData(json.products))
        .catch(err => err)
    },[])

    return(
        <div className="feature">
        <Container>
        <Row>
            <h2 style={{color:'white',margin:'50px 0'}}>Feature Projects</h2>
                  {data.map((data) => { return (<Feature key={data.id} itemData={data} />)})}
        </Row>
        </Container>
        </div>
    )
}

export default FeatureHooks;