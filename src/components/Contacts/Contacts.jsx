import React from "react";

const Contacts = ()=>{
    return <section className="contacts d-flex justify-content-around" id="contacts">
        <div className="info">
            Contactez-nous
            <h6>Facebook : TechVert</h6>
            <h6>LinkedIn : TechVert</h6>
            <h6>Email : contact@techvert.com</h6>
        </div>
        <div className="form-submit form-control">
            <form>
                <input type="email" name="email" className="form-control" placeholder="Email"/><br />
                <textarea name="message" className="form-control"></textarea>
                <button type="submit" className="btn btn-primary float-right">Envoyer</button>
            </form>
        </div>
    </section>
}

export default Contacts