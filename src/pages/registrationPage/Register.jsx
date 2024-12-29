import axios from "axios";
import React, { useState } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { uploadFile } from "../../utils/UploadMedia";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Toaster, toast } from "sonner";
import { Calculate } from "@mui/icons-material";

export default function Register() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [gender, setGender] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [landLineNo, setLandLineNo] = useState("");
  const [email, setEmail] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [religion, setReligion] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [height, setHeight] = useState(0);
  const [civilStatus, setCivilStatus] = useState("");
  const [countryOfResidence, setCountryOfResidence] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [currentProfession, setCurrentProfession] = useState("");
  const [caste, setCaste] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState([]);
  const [fatherProfession, setFatherProfession] = useState("");
  const [motherProfession, setMotherProfession] = useState("");
  const [horoScopeMatching, setHoroScopeMatching] = useState("");

  const [feet, setFeet] = useState(0);
  const [inch, setInch] = useState(0);

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  async function handleUploadImages(e) {
    e.preventDefault();
    handleOpen();

    const files = e.target.files;
    const file = files[0];
    try {
      const res = await uploadFile(file);
      if (res.status === "success") {
        setPhotos([...photos, res.data]);
        handleClose();
      } else {
        console.log("File upload failed. Check console for details.");
      }
    } catch (err) {}
  }

  const handleDeleteImage = (url) => {
    setPhotos((prev) => prev.filter((image) => image !== url));
  };

  function clearForm() {
    setFirstName("");
    setLastName("");
    setDisplayName("");
    setGender("");
    setContactNo("");
    setLandLineNo("");
    setEmail("");
    setBirthDay("");
    setReligion("");
    setEthnicity("");
    setHeight("");
    setCivilStatus("");
    setCountryOfResidence("");
    setDistrict("");
    setCity("");
    setEducationLevel("");
    setCurrentProfession("");
    setCaste("");
    setDescription("");
    setPhotos([]);
    setFatherProfession("");
    setMotherProfession("");
    setHoroScopeMatching("");
    setFeet(0);
    setInch(0);
  }

  


  function handleSubmit(e) {
    e.preventDefault();
    handleOpen();

    const heightCalculation = Number(feet)+(inch/12);
    
    const data = {
      firstName: firstName,
      lastName: lastName,
      displayName: displayName,
      gender: gender,
      contactNo: contactNo,
      landLineNo: landLineNo,
      email: email,
      birthDay: birthDay,
      religion: religion,
      ethnicity: ethnicity,
      height: heightCalculation.toFixed(2),
      civilStatus: civilStatus,
      countryOfResidence: countryOfResidence,
      district: district,
      city: city,
      educationLevel: educationLevel,
      currentProfession: currentProfession,
      caste: caste,
      description: description,
      photos: photos,
      fatherProfession: fatherProfession,
      motherProfession: motherProfession,
      isHoroscopeMatchingRequired: horoScopeMatching,
    };

    console.log(data);

    axios.post(import.meta.env.VITE_BACKEND_URL+"/save-profile",data).then((res)=>{

      if(res.data.errorMessage=='Duplicate Email'){
        handleClose();
        toast.error('This email is already registered');

      }else{
        handleClose();
        toast.success('Suucessfully Registered');
        clearForm();
      }

    }).catch((error)=>{
      console.log(error);

    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFD369] to-[#FFD369] flex items-center justify-center p-4">
      <Toaster richColors position="top-center" />
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-4xl">
        <div className="flex justify-between items-center text-center">
          <h2 className="text-3xl font-Roboto font-bold text-center text-[#222831] mb-6">
            Register with US!
          </h2>
          <div className="fixed top-4 right-4">
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              <IoArrowBackCircleSharp
                title="Go Back to Home"
                className=" size-7 hover:size-9"
              />
            </button>
          </div>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                required
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
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
                required
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
                required
                name="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
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
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
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
                required
                name="birthDay"
                value={birthDay}
                onChange={(e) => setBirthDay(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                name="displayName"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                required
                name="contactNo"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
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
                onChange={(e) => setLandLineNo(e.target.value)}
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
              <select
                name="religion"
                required
                value={religion}
                onChange={(e) => setReligion(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              >
                <option value="">Select Religion</option>
                <option value="Buddhist">Buddhist</option>
                <option value="Christian">Christian</option>
                <option value="Hindu">Hindu</option>
                <option value="Islam">Islam</option>
                <option value="Agnostic">Agnostic</option>
                <option value="Catholic">Catholic</option>
                <option value="Non">Non</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ethnicity
              </label>
              <select
                name="ethnicity"
                required
                value={ethnicity}
                onChange={(e) => setEthnicity(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              >
                <option value="">Select ethnicity</option>
                <option value="Sinhalese">Sinhalese</option>
                <option value="Tamil">Tamil</option>
                <option value="Muslim">Muslim</option>
                <option value="Burgher">Burgher</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Height
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    required
                    name="feet"
                    value={feet}
                    onChange={(e) => setFeet(e.target.value)}
                    placeholder="Feet"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="inch"
                    required
                    value={inch}
                    onChange={(e) => setInch(e.target.value)}
                    placeholder="Inch"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Civil Status
              </label>
              <select
                name="horoScopeMatching"
                required
                value={civilStatus}
                onChange={(e) => setCivilStatus(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              >
                <option value="">Select</option>
                <option value="Never Married">Never Married</option>
                <option value="Widowed">Widowed</option>
                <option value="Divorced">Divorced</option>
                <option value="Seperated">Seperated</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Country Of Residence
              </label>
              <select
                required
                name="countryOfResidence"
                value={countryOfResidence}
                onChange={(e) => setCountryOfResidence(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              >
                <option value="">Select Country</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
                <option value="Italy">Italy</option>
                <option value="Japan">Japan</option>
                <option value="Maldives">Maldives</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Singapore">Singapore</option>
                <option value="South Koria">South Koria</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                District
              </label>
              <select
                name="district"
                required
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              >
                <option value="">Select</option>
                <option value="Colombo">Colombo</option>
                <option value="Kaluthara">Kaluthara</option>
                <option value="Gampaha">Gampaha</option>
                <option value="Monaragala">Monaragala</option>
                <option value="Badulla">Badulla</option>
                <option value="Mathara">Mathara</option>
                <option value="Hambanthota">Hambanthota</option>
                <option value="Galle">Galle</option>
                <option value="Rathnapura">Rathnapura</option>
                <option value="Kegalle">Kegalle</option>
                <option value="Puttlam">Puttlam</option>
                <option value="Kurunegala">Kurunegala</option>
                <option value="Vavuniya">Vavuniya</option>
                <option value="Mullaitive">Mullaitive</option>
                <option value="Mannar">Mannar</option>
                <option value="Kilinochchi">Kilinochchi</option>
                <option value="Jaffna">Jaffna</option>
                <option value="Polonnaruwa">Polonnaruwa</option>
                <option value="Anuradhapura">Anuradhapura</option>
                <option value="Trincomalee">Trincomalee</option>
                <option value="Batticaloa">Batticaloa</option>
                <option value="Ampara">Ampara</option>
                <option value="Nuwala Eliya">Nuwala Eliya</option>
                <option value="Matale">Matale</option>
                <option value="Kandy">Kandy</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                required
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter your city"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Education Level
              </label>
              <select
                name="educationLevel"
                required
                value={educationLevel}
                onChange={(e) => setEducationLevel(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              >
                <option value="">Select</option>
                <option value="Never Married">Up to GCE O/L</option>
                <option value="Widowed">Up to GCE A/L</option>
                <option value="Divorced">Diploma</option>
                <option value="Seperated">Proffessional Qualification</option>
                <option value="Seperated">Undergraduate</option>
                <option value="Seperated">
                  Bachelor's degree or equivalant
                </option>
                <option value="Seperated">Post graduate diploma</option>
                <option value="Seperated">Master's degree fo equivalant</option>
                <option value="Seperated">PHD or Post Doctoral</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Current Profession
              </label>
              <input
                type="text"
                required
                name="currentProfession"
                value={currentProfession}
                onChange={(e) => setCurrentProfession(e.target.value)}
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
                required
                value={caste}
                onChange={(e) => setCaste(e.target.value)}
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
                onChange={(e) => setFatherProfession(e.target.value)}
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
                onChange={(e) => setMotherProfession(e.target.value)}
                placeholder="Enter your mother profession"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Horescope matching required
              </label>
              <select
                name="horoScopeMatching"
                required
                value={horoScopeMatching}
                onChange={(e) => setHoroScopeMatching(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not much consider">Not much consider</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={1}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
                placeholder="Enter your description"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Photos (Upload clear full-face photos)
              </label>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="file"
                  name="photos"
                  onChange={handleUploadImages}
                  placeholder="Add your photos"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#820059]"
                />
              </div>

              <div className="mt-4 grid grid-cols-3 md:grid-cols-6 gap-1">
                {photos.map((url, index) => (
                  <div key={index} className="relative">
                    <img
                      src={url}
                      alt="Uploaded"
                      className="w-32 h-32 object-cover rounded-lg border border-gray-300"
                    />
                    <button
                      onClick={() => handleDeleteImage(url)}
                      className="absolute top-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#393E46] text-white font-bold py-2 rounded-lg hover:bg-[#222831] transition-all"
          >
            Register with US!
          </button>
        </form>
      </div>
    </div>
  );
}
