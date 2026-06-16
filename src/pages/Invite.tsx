import { FaPhone, FaWhatsapp } from "react-icons/fa";
import invitationImage from "../assets/12.jpeg";

const Invite = () => {
  const openInvitation = () => {
    const newWindow = window.open(invitationImage, "_blank");

    if (newWindow) {
      newWindow.focus();
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 gap-8">

      {/* ================= INVITATION CARD ================= */}
      <div className="bg-[#556B2F] text-white shadow-2xl rounded-2xl p-8 md:p-14 w-full max-w-2xl text-center space-y-4 md:space-y-5">

        <p className="text-3xl md:text-4xl italic tracking-wide">
          Wedding Invitation
        </p>

        <p className="leading-relaxed">
          <span className="font-semibold">Date:</span> July 25, 2026
        </p>

        <p className="leading-relaxed">
          <span className="font-semibold">Church:</span> 10:00 AM – St. Vincent Catholic Church
        </p>

        <p className="leading-relaxed">
          <span className="font-semibold">Reception:</span> 12:00 PM
        </p>

        <p className="leading-relaxed">
          <span className="font-semibold">Venue:</span> Abayomi Event Centre, Oregie, Ajegunle Apapa, Lagos
        </p>

        <p className="text-white/90 font-medium pt-2">
          Dress Code: Blush Pink, Burgundy, Gold and Olive Green
        </p>
      </div>

      {/* ================= ACTION CARD ================= */}
      <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 w-full max-w-2xl border border-[#556B2F]/20">

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">

          {/* Register (Google Form) */}
          <a
            href="https://forms.gle/YOUR_GOOGLE_FORM_LINK"
            target="_blank"
            rel="noreferrer"
            className="bg-[#556B2F] text-white px-6 py-2 rounded-full hover:opacity-90 transition"
          >
            Register
          </a>

         

          {/* View Invitation */}
          <button
            onClick={openInvitation}
            className="border border-[#556B2F] text-[#556B2F] px-6 py-2 rounded-full hover:bg-[#556B2F] hover:text-white transition"
          >
            View Invitation
          </button>

        </div>

        {/* ================= RSVP CONTACT ================= */}
        <div className="mt-8 text-center bg-white/70 rounded-xl p-4">

          <p className="text-lg font-semibold text-[#556B2F]">
            RSVP Contact
          </p>

          <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-6 text-gray-700">

            {/* Jane */}
            <div className="flex items-center justify-center gap-2 w-full md:w-auto">
              <span>08139323945</span>

              <a href="tel:08139323945" className="text-[#556B2F]">
                <FaPhone />
              </a>

              <a
                href="https://wa.me/08139323945"
                target="_blank"
                rel="noreferrer"
                className="text-green-600"
              >
                <FaWhatsapp />
              </a>
            </div>

            {/* Sam */}
            <div className="flex items-center justify-center gap-2 w-full md:w-auto">
              <span>09016015668</span>

              <a href="tel:09016015668" className="text-[#556B2F]">
                <FaPhone />
              </a>

              <a
                href="https://wa.me/09016015668"
                target="_blank"
                rel="noreferrer"
                className="text-green-600"
              >
                <FaWhatsapp />
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Invite;