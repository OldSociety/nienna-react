import Button from "../layouts/Button";

// eslint-disable-next-line react/prop-types
const Contact = ({ closeForm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form className=" w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl">
          <h1 className="text-4xl font-semibold text-center text-backgroundColor">
            Contact Us
          </h1>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 outline outline-slate-500/50 rounded-lg"
              type="text"
              name="userFirstName"
              id="userFirstName"
              placeholder="First Name"
            />
          </div>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 outline outline-slate-500/50 rounded-lg"
              type="text"
              name="userLastName"
              id="userLastName"
              placeholder="Last Name"
            />
          </div>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 outline outline-slate-500/50 rounded-lg"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Your Email"
            />
          </div>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 outline outline-slate-500/50 rounded-lg"
              type="number"
              name="userNumber"
              id="userNumber"
              placeholder="Phone No."
            />
          </div>
          <div className=" flex gap-5">
            <Button title="Book Consultation" />
            <button
              className=" bg-slate-500 text-white ml-5 px-10 rounded-md active:bg-red-500"
              onClick={closeForm}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;