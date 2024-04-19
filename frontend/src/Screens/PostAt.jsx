import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useRegisterPostAtMutation,
  useImageUploadMutation,
} from "../store/slices/postAtSlice";
import { Form } from "react-bootstrap";


const PostAt = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const url = new URL("..", window.origin + location.pathname);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [saleOrRent, setSaleOrRent] = useState("sale");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [file, setFile] = useState({ preview: "", data: "" });

  const { userInfo } = useSelector((state) => state.auth);

  const [registerPostAt, { isLoading }] = useRegisterPostAtMutation();
  const [imageUpload, { isLoading: loadingUpload }] = useImageUploadMutation();
  // const validate = firstName || lastName || email || message || type || saleOrRent || phoneNumber;

  // const imgName = "image" + "-" + Date.now() + "." + file.data.type;
  // console.log(imgName);
  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setFile(img);
  };
  console.log(file.data);
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file.data);
    
    try {
      // if(validate) toast.error("Enter data");
      const uploadRes = await imageUpload(formData).unwrap();
      
      const postat = await registerPostAt({
        firstName,
        lastName,
        email,
        type,
        phoneNumber,
        message,
        saleOrRent,
        city,
        price,
        image:uploadRes.image,
      }).unwrap();
      toast.success("PostAd registered successfully");

      // navigate(url.href);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  useEffect(() => {
    if (userInfo) {
      setFirstName(userInfo.firstName);
      setLastName(userInfo.lastName);
      setEmail(userInfo.email);
      setPhoneNumber(userInfo.phoneNumber);
    }
  }, [userInfo]);

  return (
    <>
      <section
        id="Post Ad"
        className="w3-animate-zoom widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6"
      >
        <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          Add Your Ad
        </h2>

          <div className="mx-auto max-w-2xl text-center dark:bg-black">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Add Your Ad
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              fill the information of your real estate
            </p>
          </div>
          <form method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="form-group">
                  <label className="block text-sm font-semibold leading-6 text-gray-900">
                    Type:
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="form-control"
                  >
                    <option>Appartment</option>
                    <option>studio</option>
                    <option>Villa</option>
                    <option>office</option>
                    <option>Strong</option>
                    <option>Hall</option>
                    <option>Store</option>
                  </select>
                </div>
              </div>

              <div className="relative inline-block text-left">
                {/* Sale Or Rent */}
                <div className="form-group">
                  <label className="block text-sm font-semibold leading-6 text-gray-900">
                    Select:
                  </label>
                  <select
                    className="form-control"
                    id="sell"
                    value={saleOrRent}
                    onChange={(e) => setSaleOrRent(e.target.value)}
                  >
                    <option>Sale</option>
                    <option>Rent</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold leading-6 text-gray-900">
                    City
                  </label>
                  <div className="mt-2.5">
                    <Form.Control
                      as="select"
                      onChange={(e) => setCity(e.target.value)}
                    >
                      <option value="">City Select...</option>
                      <option>Akko</option>
                      <option>Haifa</option>
                      <option>Nazareth</option>
                      <option>Tel Avivi</option>
                      <option>Jerusalem</option>
                      <option>Eilat</option>
                      <option>Netanya</option>
                      <option>Herzliya</option>
                      <option>Ashdod</option>
                      <option>Tiberias</option>
                      <option>Petah Tikva</option>
                      <option>Holon</option>
                      <option>Rishon LeZion</option>
                      <option>Rehovot</option>
                      <option>Bat Yam</option>
                    </Form.Control>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold leading-6 text-gray-900">
                    Price
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="number"
                      name="price"
                      id="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="Price"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Picture
                </label>
                <div className="mt-2.5">
                  {file.preview && (
                    <>
                      <img
                        className="mt-1 mb-2 ring-2 ring-blue-500/50 border-dashed border-sky-400 hover:border-sky-800"
                        src={file.preview}
                        alt="preview"
                        width="500"
                        height="500"
                        style={{ margin: "auto" }}
                      ></img>

                      <hr />
                    </>
                  )}
                  <Form.Group controlId="image">
                    {/* <Form.Control
                      type="text"
                      placeholder="Enter image url"
                      value={image}
                    ></Form.Control> */}
                    <Form.Control
                      label="Choose File"
                      onChange={handleFileChange}
                      type="file"
                    ></Form.Control>
                  </Form.Group>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Phone Number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Phone Number"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  More Details
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
              <div className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  {/* <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" --> */}
                  <button
                    type="button"
                    className="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    role="switch"
                    aria-checked="false"
                    aria-labelledby="switch-1-label"
                  >
                    <span className="sr-only">Agree to policies</span>
                    {/* <!-- Enabled: "translate-x-3.5", Not Enabled: "translate-x-0" --> */}
                    <span
                      aria-hidden="true"
                      className="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                    ></span>
                  </button>
                </div>
                <label
                  className="text-sm leading-6 text-gray-600"
                  id="switch-1-label"
                >
                  By selecting this, you agree to our
                  <a className="font-semibold text-indigo-600">
                    privacy&nbsp;policy
                  </a>
                  .
                </label>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                onClick={submitHandler}
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoading ? "posting..." : "post"}
              </button>
            </div>
          </form>
      </section>

      <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
    </>
  );
};

export default PostAt;
