import React, { useState, useRef, useEffect } from "react";
//images
import caramel from "./images/caramel.jpg"
import filtre from "./images/filtre.jpeg"
import latte from "./images/latte.jpeg"
import expresso from "./images/expresso.jpeg"
import mocha from "./images/mocha.jpg"
import americano from "./images/americano.jpg"
import cappuchino from "./images/cappuchino.jpeg"
import tea from "./images/tea.jpeg"
import coldBrew from "./images/coldBrew.jpeg"
//
import "./menu.css"
import { Rating } from "semantic-ui-react"
import Footer from "./footer";
import Navbar from "./navbar";



const Menu = (e) => {



    const list = [

        {
            id:1,
            name:"Americano",
            price:"35",
            pic: americano,
        },


        {
            id:2,
            name:"Caramel Macchiato",
            price:"37",
            pic: caramel,
        },


        {
            id:3,
            name:"Filter Coffe",
            price:"25",
            pic: filtre,
        },


        {
            id:4,
            name:"Latte",
            price:"36",
            pic: latte,
        },


        {
            id:5,
            name:"Cappuchino",
            price:"32",
            pic: cappuchino,
        },


        {
            id:6,
            name:"Expresso",
            price:"30",
            pic: expresso,
        },

        {
            id:7,
            name:"Mocha",
            price:"38",
            pic: mocha,
        },

        {
            id:8,
            name:"Tea",
            price:"15",
            pic: tea,
        },

        {
            id: 9,
            name: "Cold Brew",
            price: "45",
            pic: coldBrew
        }


    ]



    const exmpStar = <Rating  aria-checked="true" icon='star' defaultRating={5} maxRating={5} />


  //   var balance = document.getElementById("credit").innerHTML = 150;
  //  var price = document.getElementById("price").value

    const [credit,setCredit] = useState(150)

    const [clickedElement,setClickedElement] = useState(false)
    const [clickedElement2,setClickedElement2] = useState(false)
    const [clickedElement3,setClickedElement3] = useState(false)
    const [clickedElement4,setClickedElement4] = useState(false)
    const [clickedElement5,setClickedElement5] = useState(false)
    const [clickedElement6,setClickedElement6] = useState(false)
    const [clickedElement7,setClickedElement7] = useState(false)
    const [clickedElement8,setClickedElement8] = useState(false)
    const [clickedElement9,setClickedElement9] = useState(false)



    const [times, setTimes] = useState(0)
    const [times2, setTimes2] = useState(0)
    const [times3, setTimes3] = useState(0)
    const [times4, setTimes4] = useState(0)
    const [times5, setTimes5] = useState(0)
    const [times6, setTimes6] = useState(0)
    const [times7, setTimes7] = useState(0)
    const [times8, setTimes8] = useState(0)
    const [times9, setTimes9] = useState(0)

    const itemsRef = useRef([])
    const itemsRef2 = useRef([])
    const dataFetchedRef = useRef(true);

  

    function calcBuy(e){ 

       
        //item1
       

        

        if(e.target.id == 0){

            const c = credit - Number(e.target.value);
            console.log(c)
            if( c < 0){
                alert("Yetersiz Credi")
            }

            if(c >=0){

                setCredit(credit - itemsRef.current[1].value) 
            
                document.getElementById("credit").innerText = credit
                setClickedElement(true)
                setTimes(times+1)
            

            }


           
        }


        //item2

        if(e.target.id == 1){


            const c = credit - Number(e.target.value);
            console.log(c)
            if( c < 0){
                alert("Yetersiz Credi")
            }

            if( c >= 0) {

                setCredit(credit - itemsRef.current[2].value)

                document.getElementById("credit").innerText = credit
                setClickedElement2(true)
                setTimes2(times2+1)

            }
            



        }

        if(e.target.id == 2){

            const c = credit - Number(e.target.value);
            console.log(c)
            if( c < 0){
                alert("Yetersiz Credi")
            }

            if( c>=0){
            
            setCredit(credit - itemsRef.current[3].value)

                document.getElementById("credit").innerText = credit
                setClickedElement3(true)
                setTimes3(times3+1) }


        }

        if(e.target.id == 3){

            const c = credit - Number(e.target.value);
            console.log(c)
            if( c < 0){
                alert("Yetersiz Credi")
            }

            if(c>=0){

            setCredit(credit - itemsRef.current[4].value)

                document.getElementById("credit").innerText = credit
                setClickedElement4(true)
                setTimes4(times4+1)
            }

        }

         if(e.target.id == 4){

            const c = credit - Number(e.target.value);
            console.log(c)
            if( c < 0){
                alert("Yetersiz Credi")
            }

            if(c>=0){
            setCredit(credit - itemsRef.current[5].value)

                document.getElementById("credit").innerText = credit
                setClickedElement5(true)
                setTimes5(times5+1)}


        }

        if(e.target.id == 5){

            const c = credit - Number(e.target.value);
            console.log(c)
            if( c < 0){
                alert("Yetersiz Credi")
            }

            if(c>=0){

            setCredit(credit - itemsRef.current[6].value)

                document.getElementById("credit").innerText = credit
                setClickedElement6(true)
                setTimes6(times6+1)
            }

        }

        if(e.target.id == 6){

            const c = credit - Number(e.target.value);
            console.log(c)
            if( c < 0){
                alert("Yetersiz Credi")
            }

            if(c>=0){
            setCredit(credit - itemsRef.current[7].value)

                document.getElementById("credit").innerText = credit
                setClickedElement7(true)
                setTimes7(times7+1) }


        }

        if(e.target.id == 7){

            const c = credit - Number(e.target.value);
            console.log(c)
            if( c < 0){
                alert("Yetersiz Credi")
            }

            if(c>=0){
            setCredit(credit - itemsRef.current[8].value)

                document.getElementById("credit").innerText = credit
                setClickedElement8(true)
                setTimes8(times8+1)}


        }

        if(e.target.id == 8){

            const c = credit - Number(e.target.value);
            console.log(c)
            if( c < 0){
                alert("Yetersiz Credi")
            }

            if(c>=0){
            setCredit(credit - itemsRef.current[9].value)

                document.getElementById("credit").innerText = credit
                setClickedElement9(true)
                setTimes9(times9+1)}


        }

    }



    //delete calculation

    function calcDelete(e){


        if(e.target.id == 1  && clickedElement==true ){

            setTimes(times-1)

            console.log(times)
            if(times <= 0){

                alert("Bu işlem gerçekleştirilemez. Satın alma işlemini iptal etmek için"+
                " halihazırda işlem yapmış olmanız gerekmektedir.")
            }

            else if(times > 0){

                setCredit(Number(credit) + Number(itemsRef2.current[1].value)) 
            
                document.getElementById("credit").innerText = credit

            }

       
            
        }


        if(e.target.id == 2 && clickedElement2 == true){
           
            setTimes2(times2-1)

            if(times2 <= 0){

                alert("Bu işlem gerçekleştirilemez. Satın alma işlemini iptal etmek için"+
                " halihazırda işlem yapmış olmanız gerekmektedir.")
            }

            else if(times2 > 0){

                setCredit(Number(credit) + Number(itemsRef2.current[2].value)) 
            
                document.getElementById("credit").innerText = credit

            }

       
        }

        if(e.target.id == 3 && clickedElement3==true){
            setTimes3(times3-1)

            if(times3 <= 0){

                alert("Bu işlem gerçekleştirilemez. Satın alma işlemini iptal etmek için"+
                " halihazırda işlem yapmış olmanız gerekmektedir.")
            }

            else if(times3 > 0){

                setCredit(Number(credit) + Number(itemsRef2.current[3].value)) 
            
                document.getElementById("credit").innerText = credit

            }

       
        }

        if(e.target.id == 4 && clickedElement4==true){
            setTimes4(times4-1)

            if(times4 <= 0){

                alert("Bu işlem gerçekleştirilemez. Satın alma işlemini iptal etmek için"+
                " halihazırda işlem yapmış olmanız gerekmektedir.")
            }

            else if(times4 > 0){

                setCredit(Number(credit) + Number(itemsRef2.current[4].value)) 
            
                document.getElementById("credit").innerText = credit

            }

       
        }

        if(e.target.id == 5 && clickedElement5==true){
            setTimes5(times5-1)

            if(times5 <= 0){

                alert("Bu işlem gerçekleştirilemez. Satın alma işlemini iptal etmek için"+
                " halihazırda işlem yapmış olmanız gerekmektedir.")
            }

            else if(times5 > 0){

                setCredit(Number(credit) + Number(itemsRef2.current[5].value)) 
            
                document.getElementById("credit").innerText = credit

            }

       
        }

        if(e.target.id == 6 && clickedElement6==true){
            setTimes6(times6-1)

            if(times6 <= 0){

                alert("Bu işlem gerçekleştirilemez. Satın alma işlemini iptal etmek için"+
                " halihazırda işlem yapmış olmanız gerekmektedir.")
            }

            else if(times6 > 0){

                setCredit(Number(credit) + Number(itemsRef2.current[6].value)) 
            
                document.getElementById("credit").innerText = credit

            }

       
        }

        if(e.target.id == 7 && clickedElement7==true){
            setTimes7(times7-1)

            if(times7 <= 0){

                alert("Bu işlem gerçekleştirilemez. Satın alma işlemini iptal etmek için"+
                " halihazırda işlem yapmış olmanız gerekmektedir.")
            }

            else if(times7 > 0){

                setCredit(Number(credit) + Number(itemsRef2.current[7].value)) 
            
                document.getElementById("credit").innerText = credit

            }

       
        }

        if(e.target.id == 8 && clickedElement8==true){
            setTimes8(times8-1)

            if(times8 <= 0){

                alert("Bu işlem gerçekleştirilemez. Satın alma işlemini iptal etmek için"+
                " halihazırda işlem yapmış olmanız gerekmektedir.")
            }

            else if(times8 > 0){

                setCredit(Number(credit) + Number(itemsRef2.current[8].value)) 
            
                document.getElementById("credit").innerText = credit

            }

       
        }

        if(e.target.id == 9 && clickedElement9==true){
            setTimes9(times9-1)

            if(times9 <= 0){

                alert("Bu işlem gerçekleştirilemez. Satın alma işlemini iptal etmek için"+
                " halihazırda işlem yapmış olmanız gerekmektedir.")
            }

            else if(times9 > 0){

                setCredit(Number(credit) + Number(itemsRef2.current[9].value)) 
            
                document.getElementById("credit").innerText = credit

            }

       
        }
    }

    useEffect(() => { 
        document.getElementById("credit").innerText = credit
    },[credit])   

  



    return(

     <>

            <Navbar />

            <div className="container2">
                {list.map((e, index) => (

                    <div className="ui cards" id="design" key={e.id}>
                        <div className="card">
                            <img src={e.pic} />
                        
                                 <div > <p id="pname" >$ <span  id={e.id} key={e.id} value={e.price}> {e.price} </span>{e.name}</p> </div>
                        
                            <div className="extra">
                                <button className="btnplus" ref={el => itemsRef.current[e.id] = el } id={index} value={e.price} key={index} onClick={(e) => calcBuy(e)}><i className="fa-solid fa-cart-shopping"></i></button>
                                <button className="btnminus" ref={el => itemsRef2.current[e.id] = el} id={e.id} value={e.price} key={e.id} onClick={(e) => calcDelete(e)} ><i className="fa-solid fa-minus"></i></button> 
                            </div>
                        </div>
                    </div>))}
            </div>


            


            

        <Footer /></>
         
    
    )
}

export default Menu;