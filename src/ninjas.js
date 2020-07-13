import React from 'react';

const Ninjas = ({ data , deleteNinja}) => {
    /* const list = data.map(ninja => {
         if (ninja.id > 1)
             return (
                 <div className="card col-md-4" key={ninja.id}>
                     <h3>Name : {ninja.name}</h3>
                     <h3>Course : {ninja.course}</h3>
                     <br />
                 </div>
             );
         else {
             return null;
         }
     })
     */

    const list = data.map(ninja => {
        return ninja.id > 0 ? (
            <div className="card col-md-4" key={ninja.id}>
                <h3>Name : {ninja.name}</h3>
                <p>Course : {ninja.course}</p>
                <p>Age : {ninja.age}</p>
                <button onClick={()=>{deleteNinja(ninja.id)}}>Delete Ninja</button>
                <br />
            </div>
        ) : null;
    })
    return (
        <div>
            {list}
        </div>
    )

}

export default Ninjas
