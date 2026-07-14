import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'


const Add = () => {

    const [input, changeData] = useState({
        booking_id: "",
        pet_name: "",
        pet_type: "",
        breed: "",
        age: "",
        weight: "",
        vaccination_status: "",
        owner_name: "",
        owner_phone: "",
        owner_email: "",
        check_in_date: "",
        check_out_date: "",
        kennel_number: ""
    })

    const inputHandler = (event) => {
        changeData({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)

        axios.post("http://localhost:3000/add_pet", input)
            .then((response) => {
                console.log(response.data)
                alert("Pet Booking Added Successfully")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <NavBar/>

            <h1 className="text-center mt-3">Add Pet Booking</h1>

            <div className="container">
                <div className="row">
                    <div className="col-12">

                        <div className="row g-3">

                            <div className="col-md-6">
                                <label className="form-label">Booking ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="booking_id"
                                    value={input.booking_id}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Pet Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="pet_name"
                                    value={input.pet_name}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Pet Type</label>
                                <select
                                    className="form-control"
                                    name="pet_type"
                                    value={input.pet_type}
                                    onChange={inputHandler}
                                >
                                    <option value="">Select</option>
                                    <option value="Dog">Dog</option>
                                    <option value="Cat">Cat</option>
                                    <option value="Bird">Bird</option>
                                    <option value="Rabbit">Rabbit</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Breed</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="breed"
                                    value={input.breed}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Age</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="age"
                                    value={input.age}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Weight (kg)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="weight"
                                    value={input.weight}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Vaccination Status</label>
                                <select
                                    className="form-control"
                                    name="vaccination_status"
                                    value={input.vaccination_status}
                                    onChange={inputHandler}
                                >
                                    <option value="">Select</option>
                                    <option value="Vaccinated">Vaccinated</option>
                                    <option value="Not Vaccinated">Not Vaccinated</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Owner Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="owner_name"
                                    value={input.owner_name}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Owner Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="owner_phone"
                                    value={input.owner_phone}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Owner Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="owner_email"
                                    value={input.owner_email}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Check-in Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="check_in_date"
                                    value={input.check_in_date}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Check-out Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="check_out_date"
                                    value={input.check_out_date}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Kennel Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="kennel_number"
                                    value={input.kennel_number}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-12 text-center">
                                <button
                                    className="btn btn-success"
                                    onClick={readValue}
                                >
                                    Submit
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add