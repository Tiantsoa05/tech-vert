import React, { useState } from "react";
import Card from "./Card/Card";

const Services = ()=>{

    const [products,setProducts] = useState(
        [
            {
                image:"logo192.png",
                description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, optio accusamus. Explicabo beatae molestiae atque enim."
            },
            {
                image:"logo192.png",
                description:" ipsum dolor, sit amet consectetur adipisicing elit. Aut, optio accusamus. Explicabo beatae molestiae atque enim."
            },
            {
                image:"logo192.png",
                description:" dolor, sit amet consectetur adipisicing elit. Aut, optio accusamus. Explicabo beatae molestiae atque enim."
            },
            {
                image:"logo192.png",
                description:" sit amet consectetur adipisicing elit. Aut, optio accusamus. Explicabo beatae molestiae atque enim."
            },
            {
                image:"logo192.png",
                description:" amet consectetur adipisicing elit. Aut, optio accusamus. Explicabo beatae molestiae atque enim."
            },
            {
                image:"logo192.png",
                description:" consectetur adipisicing elit. Aut, optio accusamus. Explicabo beatae molestiae atque enim."
            }
        ]
    )

    const [services,setServices] = useState(
        [
            {
                image:"logo192.png",
                description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, optio accusamus. Explicabo beatae molestiae atque enim."
            },
            {
                image:"logo192.png",
                description:" ipsum dolor, sit amet consectetur adipisicing elit. Aut, optio accusamus. Explicabo beatae molestiae atque enim."
            },
            {
                image:"logo192.png",
                description:" dolor, sit amet consectetur adipisicing elit. Aut, optio accusamus. Explicabo beatae molestiae atque enim."
            },
            {
                image:"logo192.png",
                description:" sit amet consectetur adipisicing elit. Aut, optio accusamus. Explicabo beatae molestiae atque enim."
            },
            {
                image:"logo192.png",
                description:" amet consectetur adipisicing elit. Aut, optio accusamus. Explicabo beatae molestiae atque enim."
            },
            {
                image:"logo192.png",
                description:" consectetur adipisicing elit. Aut, optio accusamus. Explicabo beatae molestiae atque enim."
            }
        ]
    )

    const [product,setProduct]=useState(products[0])
    const [service,setService]=useState(services[0])

    const nextProd = ()=>{
        const index = products.indexOf(product)
        console.log(index,products.length-1)
        if(index < products.length-1){
            setProduct(products[index+1])
        }else{
            console.log("merde")
            setProduct(products[0])
        }
    }

    const prevProd = ()=>{
        const index = products.indexOf(product)
        console.log(index)
        if(index==0){
            let i = products.length
            setProduct(products[i-1])
        }else{
            setProduct(products[index - 1])
        }
    }

    const nextService = ()=>{
        const index = services.indexOf(service)
        console.log(index,services.length-1)
        if(index < services.length-1){
            setService(services[index+1])
        }else{
            console.log("merde")
            setService(services[0])
        }
    }

    const prevService = ()=>{
        const index = services.indexOf(service)
        console.log(index)
        if(index==0){
            let i = services.length
            setService(services[i-1])
        }else{
            setService(services[index - 1])
        }
    }

    return <section className="services" id="services">
        <h3>Nos services et produits</h3>
        <div className="card-desc row">
            <div className="pbm col-11">
                <h5>Problèmes à résoudre</h5>
                <ul>
                    <li>La pollution urbaine: Débordement des bacs à ordures, mauvaise gestion des déchets, contammination des sols et des eaux.</li>
                    <li>La déforestation et incendies: destruction des fôrets par des feux de brousse, coupe illegale d'arbres, perte de la biodiversité</li>
                    <li>Les changements climatiques: Dégradation de l'environnement naturel, impacts sur la faune, la flore et les habitants.</li>
                    <li>Infrasturctures insuffisantes: manque de systèmes intelligents pour la surveillance environnementaux et la prevention des risques.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolor atque alias dolore expedita ipsum ab! Tempora, ab tempore odi.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, quasi excepturi? Debitis nam fugit vitae, enim deserunt asperiores.</li>
                </ul>
            </div>

            <div className="prd">
                <h5>Nos produits:</h5>
                <div className="d-flex align-items-center">
                    <button onClick={()=>prevProd()} className="btn btn-success">prev</button>
                        <Card product={product}/>
                    <button onClick={()=>nextProd()} className="btn btn-success">next</button>
                </div>
            </div>

            <div className="srv">
                <h5>Nos services:</h5>
                <div className="d-flex align-items-center">
                    <button onClick={()=>prevService()} className="btn btn-success">prev</button>
                        <Card product={service}/>
                    <button onClick={()=>nextService()} className="btn btn-success">next</button>
                </div>
            </div>

        </div>
    </section>
}

export default Services