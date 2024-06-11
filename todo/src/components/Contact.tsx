import contact from "../assets/get-touch-concept-illustration114360-2586-1.png";

const Contact = () => {
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
              className="flex gap-5 items-start justify-between flex-col"
            >
              <input
                className="p-3 rounded-md w-full outline outline-2 active:outline-4 active:outline-blue-200 focus:outline-4 focus:outline-blue-200 outline-gray-400"
                type="text"
                placeholder="@email"
              />
              <input
                className="p-3 rounded-md w-full outline outline-2 active:outline-4 active:outline-blue-200 focus:outline-4 focus:outline-blue-200  outline-gray-400"
                type="text"
                placeholder="phone"
              />
              <textarea
                className="p-3 rounded-md w-full outline outline-2 active:outline-4 active:outline-blue-200 focus:outline-4 focus:outline-blue-200  outline-gray-400"
                placeholder="message"
              />
              <button
                className="p-4 rounded-md bg-[#5A0B4D] w-full font-bold text-white"
                type="button"
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
