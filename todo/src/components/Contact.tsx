import React from "react";
import contact from "../assets/get-touch-concept-illustration114360-2586-1.png";

interface MessageInformation {
  email: string;
  phone: string;
  mssg: string;
}

const Contact = () => {
  const [formData, setFormData] = React.useState<MessageInformation>({
    email: "",
    phone: "",
    mssg: "",
  });

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({ ...prevData, email: event.target.value }));
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({ ...prevData, phone: event.target.value }));
  };

  const handleMssgChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prevData) => ({ ...prevData, mssg: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(formData.email + " " + formData.phone + " " + formData.mssg);
  };

  return (
    <div className="w-full h-auto bg-white p-5 sm:p-10 md:p-20" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="grid place-content-center relative">
          <img className="h-auto w-full z-20" src={contact} alt="i" />
          {/* gmail: omd.tech.ng@gmail.com, 08160284043 */}
        </div>
        <div className="flex flex-col g-4">
          <div className="text-[#181D36] font-bold">
            <p>CONTACT US</p>
            <p className="text-2xl">Drop A Message</p>
          </div>
          <p className="text-[#181D36] my-2">
            Send us a message and we you are step away from getting your
            answers.
          </p>
          <div className="">
            <form
              action=""
              onSubmit={handleSubmit}
              className="flex gap-5 items-start justify-between flex-col"
            >
              <input
                className="p-3 rounded-md w-full outline outline-2 active:outline-4 active:outline-blue-200 focus:outline-4 focus:outline-blue-200 outline-gray-400"
                type="text"
                placeholder="@email"
                value={formData.email}
                onChange={handleEmailChange}
              />
              <input
                className="p-3 rounded-md w-full outline outline-2 active:outline-4 active:outline-blue-200 focus:outline-4 focus:outline-blue-200  outline-gray-400"
                type="text"
                placeholder="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
              />
              <textarea
                className="p-3 rounded-md w-full outline outline-2 active:outline-4 active:outline-blue-200 focus:outline-4 focus:outline-blue-200  outline-gray-400"
                placeholder="message"
                value={formData.mssg}
                onChange={handleMssgChange}
              />
              <button
                className="p-4 rounded-md bg-[#5A0B4D] w-full font-bold text-white hover:bg-[#471c40] hover:duration-300 hover:ease-in-out transform"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
