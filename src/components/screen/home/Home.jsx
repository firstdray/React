import { useMemo, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {cars as carsData} from './cars.data.js'
import CarItem from './car-item/Caritem.jsx'
import CreateCarForm from './create-car-form/CreateCarForm.jsx'



function Home() {
    const [cars, setCars] = useState(carsData)

    

return (
    <div>
        <h1>Cars Catalog</h1>
        <CreateCarForm setCars={setCars} />
        <div>
            {cars.length ? (cars.map(car => (
                <CarItem key={car.id} car={car} />
            ))
            ) : (
            <p>There are no cars</p>
        )}
        </div>
    </div>

)
}

export default Home