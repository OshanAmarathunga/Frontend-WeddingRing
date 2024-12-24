import React, { useState } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const navigate=useNavigate();
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [displayName,setDisplayName]=useState("");
  const [gender,setGender]=useState("");
  const [contactNo,setContactNo]=useState("");
  const [landLineNo,setLandLineNo]=useState("");
  const [email,setEmail]=useState("");
  const [birthDay,setBirthDay]=useState("");
  const [religion,setReligion]=useState("");
  const [ethnicity,setEthnicity]=useState("");
  const [height,setHeight]=useState("");
  const [civilStatus,setCivilStatus]=useState("");
  const [countryOfResidence,setCountryOfResidence]=useState("");
  const [district,setDistrict]=useState("");
  const [city,setCity]=useState("");
  const [educationLevel,setEducationLevel]=useState("");
  const [currentProfession,setCurrentProfession]=useState("");
  const [caste,setCaste]=useState("");
  const [description,setDescription]=useState("");
  const [photos,setPhotos]=useState([]);
  const [fatherProfession,setFatherProfession]=useState("");
  const [motherProfession,setMotherProfession]=useState("");
  const [horoScopeMatching,setHoroScopeMatching]=useState("");

  function handleSubmit(e){
    e.preventDefault();
  }
  



  return (
    <div className="min-h-screen bg-gradient-to-b from-[#820059] to-[#ff0074] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-4xl">
        <div className="flex justify-between items-center text-center">
          <h2 className="text-3xl font-Roboto font-bold text-center text-[#820059] mb-6">
            Register with US!
          </h2>
          <div className="fixed top-4 right-4">
            <button onClick={()=>{navigate("/")}}><IoArrowBackCircleSharp title="Go Back to Home" className=" size-7 hover:size-9"/></button>
          </div>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                placeholder="Enter your first name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                placeholder="Enter your last name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Display Name
              </label>
              <input
                type="text"
                name="displayName"
                value={displayName}
                onChange={(e)=>setDisplayName(e.target.value)}
                placeholder="Enter your display name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              />
            </div>
          </div>

          {/* Gender */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                name="gender"
                value={gender}
                onChange={(e)=>setGender(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                name="birthDay"
                value={birthDay}
                onChange={(e)=>setBirthDay(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="text"
                name="displayName"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact No
              </label>
              <input
                type="text"
                name="contactNo"
                value={contactNo}
                onChange={(e)=>setContactNo(e.target.value)}
                placeholder="Enter your contact number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Landline No
              </label>
              <input
                type="text"
                name="landLineNo"
                value={landLineNo}
                onChange={(e)=>setLandLineNo(e.target.value)}
                placeholder="Enter your landline number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              />
            </div>
          </div>

          {/* Religion */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Religion
              </label>
              <input
                type="text"
                name="religion"
                value={religion}
                onChange={(e)=>setReligion(e.target.value)}
                placeholder="Enter your religion"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ethnicity
              </label>
              <input
                type="text"
                name="ethnicity"
                value={ethnicity}
                onChange={(e)=>setEthnicity(e.target.value)}
                placeholder="Enter your ethnicity"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Height
              </label>
              <input
                type="text"
                name="height"
                value={height}
                onChange={(e)=>setHeight(e.target.value)}
                placeholder="Enter your height"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Civil Status
              </label>
              <input
                type="text"
                name="civilStatus"
                value={civilStatus}
                onChange={(e)=>setCivilStatus(e.target.value)}
                placeholder="Enter your civil status"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Country Of Residence
              </label>
              <input
                type="text"
                name="countryOfResidence"
                value={countryOfResidence}
                onChange={(e)=>setCountryOfResidence(e.target.value)}
                placeholder="Enter your country of residence"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                District
              </label>
              <input
                type="text"
                name="district"
                value={district}
                onChange={(e)=>setDistrict(e.target.value)}
                placeholder="Enter your district"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                name="city"
                value={city}
                onChange={(e)=>setCity(e.target.value)}
                placeholder="Enter your city"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Education Level
              </label>
              <input
                type="text"
                name="educationLevel"
                value={educationLevel}
                onChange={(e)=>setEducationLevel(e.target.value)}
                placeholder="Enter your education level"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Current Profession
              </label>
              <input
                type="text"
                name="currentProfession"
                value={currentProfession}
                onChange={(e)=>setCurrentProfession(e.target.value)}
                placeholder="Enter your current profession"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Caste
              </label>
              <input
                type="text"
                name="caste"
                value={caste}
                onChange={(e)=>setCaste(e.target.value)}
                placeholder="Enter your caste"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              />
            </div>
          </div>

          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Father Profession
              </label>
              <input
                type="text"
                name="fatherProfession"
                value={fatherProfession}
                onChange={(e)=>setFatherProfession(e.target.value)}
                placeholder="Enter your father profession"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mother Profession
              </label>
              <input
                type="text"
                name="motherProfession"
                value={motherProfession}
                onChange={(e)=>setMotherProfession(e.target.value)}
                placeholder="Enter your mother profession"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Horescope matching required
              </label>
              <input
                type="text"
                name="horoScopeMatching"
                value={horoScopeMatching}
                onChange={(e)=>setHoroScopeMatching(e.target.value)}
                placeholder="Enter your horoscope matching required or not"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <input
                type="text"
                name="description"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                placeholder="Enter your description"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Photos
              </label>
              <input
                type="text"
                name="photos"
                value={photos}
                onChange={(e)=>setPhotos(e.target.value)}
                placeholder="Add your photos"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#820059] text-white font-bold py-2 rounded-lg hover:bg-[#ff0074] transition-all"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
