import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto">
      <div className="gap-20 my-28 grid grid-cols-2 justify-between ">
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover bg-no-repeat"
            src="https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg"
            alt=""
          />
        </div>

        <div className="  ">
          <h1 className="text-4xl  font-bold tracking-wide">Contuct Us</h1>
          <p className="text-xl   my-6 tracking-wider  opacity-60">
            Amet minim mollit non deserunt ullamco est sit
          </p>
          <div className="w-2/3">
            <form className="">
              <div className="form-control">
                <label>
                  <span className="text-xl  font-semibold">Send Mail To</span>
                </label>
                <input
                  className="bg-slate-300 p-3 mt-2 w-full text-xl"
                  type="text"
                  placeholder="Istaqul"
                  required
                />
              </div>
              <div className="form-control">
                <label className="mt-6">
                  <span className="text-xl  font-semibold">Frist Name</span>
                </label>
                <input
                  className="bg-slate-300 p-3 mt-2 w-full "
                  type="text"
                  placeholder=""
                  required
                />
              </div>
              <div className="form-control">
                <label className="mt-6">
                  <span className="text-xl font-semibold">Last Name</span>
                </label>
                <input
                  className="bg-slate-300 p-3 mt-2 w-full"
                  type="text"
                  placeholder=""
                  required
                />
              </div>
              <div className="form-control">
                <label className="mt-6">
                  <span className="text-xl font-semibold">Email Address</span>
                </label>
                <input
                  className="bg-slate-300 p-3 mt-2 w-full"
                  type="text"
                  placeholder=""
                  required
                />
              </div>
              <div className="form-control">
                <label className="mt-6">
                  <span className="text-xl font-semibold">Subject</span>
                </label>
                <input
                  className="bg-slate-300 p-3 mt-2 w-full"
                  type="text"
                  placeholder=""
                  required
                />
              </div>
              <div className="form-control">
                <label className="mt-6">
                  <span className="text-xl font-semibold">Messages</span>
                </label>

                <textarea
                  className="bg-slate-300 p-3 mt-2 w-full text-xl"
                  name="messages"
                  id=""
                  cols="20"
                  rows="5"
                ></textarea>
              </div>
            </form>
        <div className="flex gap-5 mt-10"> 
          <h1 className="text-3xl">Indicates a required field</h1>
          <button className="bg-blue-400 w-20 text-xl p-2">send</button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

