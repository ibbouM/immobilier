import React, { useState, useEffect } from "react";
import GetAPI from "../../services/getAPI";
import "../Form/form.css";

const Contact = ()=>{

    const [from, setFrom]=useState("")
    const [subject, setSubject]=useState("")
    const [text, setText]=useState("")

    useEffect(()=>{
        console.log(from)
        console.log(subject)
        console.log(text)
    })

    const handleSubmit=((event)=>{
        const data ={
            from: from,
            subject: subject,
            text: text
        }
        event.preventDefault()
        if (from.length && subject.length && text.length){
            console.log(from);
            
            console.log(subject)
            console.log(text);
           GetAPI.PostEmail(data).then((res)=>{
               console.log(res.data)
           }).catch((error)=>{
               console.log(error)
           })
        }else{
            event.preventDefault()
        }
       
    })
    return (
        <>
        <section className="container py-4 pt-5">
            <h1 className="h3 text-center font-weight-bold mt-3 mb-4">
                Nous contacter
            </h1>
            <div className="row mb-4 row justify-content-md-center">
                <div className="col-xl-7 order-1">
                    <form onSubmit={handleSubmit} action="">
                        <div className="bg-white rounded rounded-huge shadow p-3 p-md-5 mb-4">
                            <input  onChange={e => setFrom(e.target.value)} className="form-control col-md-12" type="email" name="from" placeholder="from"/>
                            <br/>
                            <input onChange={e => setSubject(e.target.value)} className="form-control col-md-12" type="text" name="subject" placeholder="subject"/>
                            <br/>
                            <textarea onChange={e => setText(e.target.value)} className="form-control col-md-12"  name="text" id="text" cols="30" rows="10"></textarea>
                            <br/>
                            <div className="text-center">
                            <button className="button" type="submit">
                                Envoyer

                            </button>
                            </div>
                          

                        </div>
                    </form>

                </div>

            </div>

        </section>
        </>
    )
}

export default Contact