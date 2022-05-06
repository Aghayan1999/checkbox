import React, { useEffect, useState } from "react";
import {HiOutlineCheck} from "react-icons/hi";
function Check(){
    const[type,setType]=useState(false)
    const[val,setVal]=useState(false)
    const[txt,setTxt]=useState(false)
    const[state,setState]=useState([])
    const[labels,setLabels]=useState([
        'Setup virtual office',
        'Setup mission & vison',
        'Select business name',
        'Buy domains'
    ])

    const[text,setText]=useState([
        'Create roadmap',
        'Competitor analyisis'
    ]);

    const[release,setRelease]=useState([
        'Release marketing website',
        'Release MVP'
    ])


    function Change(e){
        let cheks=document.querySelector('.cheks')
        let inputs=cheks.querySelectorAll('input')
        let empty=[...inputs]
        let chekAll=empty.every((e)=>{
            return e.checked
        })

        if(chekAll){
            setType(true)
        }

        else{
            setType(false)
        }

        let cheks1=document.querySelector('.cheks1')
        let inputs1=cheks1.querySelectorAll('input')
        let empty1=[...inputs1]
        let allCheck=empty1.every((e)=>{
           return e.checked
        })

        if(allCheck){
            setVal(true)
        }

        else{
            setVal(false)
        }

        let cheks2=document.querySelector('.cheks2')
        let inputs2=cheks2.querySelectorAll('input')
        let empty2=[...inputs2]
        let all=empty2.every((e)=>{
            return e.checked
        })

        if(all){
            setTxt(true)
        }

        else{
            setTxt(false)
        }

        let startup=[...inputs,...inputs1,...inputs2]
        let newStart=startup.every((e)=>{
            return e.checked
        })

        if(newStart){
            fetch('https://uselessfacts.jsph.pl/random.json')
            .then((res)=>{
                return res.json()
            })
            .then((req)=>{
                alert(req.text)
            })
            .then(()=>{
                for(let i=0;i<startup.length;i++){
                    startup[i].checked=false
                }
                setType(false)
                setVal(false)
                setTxt(false)
            })
        }

        setState([...inputs,...inputs1,...inputs1])
    }

    useEffect(()=>{
        for(let i=0;i<state.length;i++){
            localStorage.setItem('chek',JSON.stringify(state[i].checked))
            let b=JSON.parse(localStorage.getItem('chek'),state[i].checked)
            setState(b)
            console.log(state);
        }
    })


    return <div className="startup">
        <h2 className="progress">My startup progress</h2>
        <section className="sec">
            <div className="num1">1</div>
            <h3 className="found">Foundation</h3>
            <HiOutlineCheck className={type?'ha':'hi'}/>
        </section>

        <section className="cheks">
          {labels.map((e,i)=>{
              return <label key={i}>
              <input type='checkbox' onChange={Change}/>
              {e}
          </label>
          })}
      </section>

      <section className="sec dis">
            <div className="num1">2</div>
            <h3 className="found">Discovery</h3>
            <HiOutlineCheck className={val?'ha':'hi'}/>
        </section>

        <section className="cheks1">
          {text.map((e,i)=>{
              return <label key={i}>
              <input type='checkbox' onChange={Change}/>
              {e}
          </label>
          })}
      </section>

      <section className="sec dis">
            <div className="num1">3</div>
            <h3 className="found">Discovery</h3>
            <HiOutlineCheck className={txt?'ha':'hi'}/>
        </section>

        <section className="cheks2">
          {release.map((e,i)=>{
              return <label key={i}>
              <input type='checkbox' onChange={Change}/>
              {e}
          </label>
          })}
      </section>
    </div>
}

export default Check