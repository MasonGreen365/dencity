import React from 'react'
import HousingCard from '../components/HousingCard';

//interface defines the shape of the data being recieved
interface HousingPlan {
    id: number;
    name: string;
    email: string;
    website: string;
}


const DashboardPage = async () => {
  //insert dummy data for now
  //fetch has option for caching, consider using if data needs to be refreshed
  // cache: 'no-store'
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data: HousingPlan[] = await res.json()
  
    return (
        <div id="container" className="w-4/5 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map(plan => <HousingCard key={plan.id} plan={plan} />)}
            </div>
        </div>
    )
}

export default DashboardPage