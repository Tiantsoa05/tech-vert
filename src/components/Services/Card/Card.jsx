import React from "react";

const Card = ({product})=>{
    return <div className="card-display" style={styles.card_display}>
        <img src={product.image} alt="image"/>
        <p className="card-disp-desc" style={styles.card_description}>{product.description}</p>
    </div>
}

const styles = {
    card_display:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        position:"relative",
        overflow:"hidden",
        minHeight:"14pc"
    },
    card_image:{
        position:"absolute",
        top:"0",
        left:"0",
        width:"fit-content"
    },
    card_description:{
        textAlign:"center",
        width:"100%",
        transition:"all .8sec"
    }
}

export default Card