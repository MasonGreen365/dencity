import React from 'react'
import ViewForMoreInfo from './ViewForMoreInfo';
import styles from './HousingCard.module.css'
//styles is a JSON object, must use {} to evaluate expression to render style
//for any element

//if using tailwind, can use cntrl+space to get options for styling
//ex: p- + cntrl+space = padding options

//if using DaisyUI, (bootstrap equivalent for workign with TailWind)
//follow same proces as bootstrap but use DasiyUI classes (they are mostly the same)

//fix this to follow interface notation
const HousingCard = ({plan}: {plan: any}) => {
    return (
    <>
    <div key={plan.id} className="card w-96 bg-base-100 shadow-xl p-10">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{plan.name}</h2>
                    <p>View more information at 
                        <a className="link" href={plan.website}>{plan.website}</a>
                    </p>
                    <div className="card-actions justify-left">
                        <button className='btn btn-primary'>View for more information</button>
                    </div>
                </div>
            </div>
    </>
  )
}

export default HousingCard