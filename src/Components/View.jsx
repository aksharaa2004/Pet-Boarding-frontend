import axios from 'axios'
import { useEffect, useState } from 'react'

const View = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.post("http://localhost:3000/view_pet").then(

            (response) => {

                changeData(response.data)

            }

        ).catch()

    }

    useEffect(() => {

        fetchData()

    }, [])

    return (
        <div>

            <h1 className="text-center mt-3">View Pet Bookings</h1>

            <div className="container">
                <div className="row g-3">

                    <div className="col-12">

                        <table className="table table-light table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Booking ID</th>
                                    <th scope="col">Pet Name</th>
                                    <th scope="col">Pet Type</th>
                                    <th scope="col">Breed</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Weight (kg)</th>
                                    <th scope="col">Vaccination Status</th>
                                    <th scope="col">Owner Name</th>
                                    <th scope="col">Owner Phone</th>
                                    <th scope="col">Owner Email</th>
                                    <th scope="col">Check-in Date</th>
                                    <th scope="col">Check-out Date</th>
                                    <th scope="col">Kennel Number</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    data.map((value, index) => {

                                        return (

                                            <tr key={index}>
                                                <th scope="row">{value.booking_id}</th>
                                                <td>{value.pet_name}</td>
                                                <td>{value.pet_type}</td>
                                                <td>{value.breed}</td>
                                                <td>{value.age}</td>
                                                <td>{value.weight}</td>
                                                <td>{value.vaccination_status}</td>
                                                <td>{value.owner_name}</td>
                                                <td>{value.owner_phone}</td>
                                                <td>{value.owner_email}</td>
                                                <td>{value.check_in_date}</td>
                                                <td>{value.check_out_date}</td>
                                                <td>{value.kennel_number}</td>
                                            </tr>

                                        )

                                    })
                                }

                            </tbody>

                        </table>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default View