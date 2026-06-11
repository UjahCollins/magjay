const Locationz = () => {
  // comment
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10">

      {/* MAIN CARD */}
      <div className="w-full max-w-4xl bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-6 md:p-10 border border-[#556B2F]/20 space-y-8">

        {/* TITLE */}
        <p className="text-center text-3xl md:text-4xl font-bold text-[#556B2F] italic">
          Location Details
        </p>

        {/* ================= CHURCH ================= */}
        <div className="p-5 border rounded-xl">
          <p className="text-lg font-semibold text-[#556B2F]">
            Wedding Mass
          </p>

          <p className="text-gray-700 mt-2">
            St. Vincent Catholic Church
          </p>

          <p className="text-gray-600 text-sm mt-1">
            Time: 10:00 AM
          </p>
        </div>

        {/* ================= RECEPTION ================= */}
        <div className="p-5 border rounded-xl">
          <p className="text-lg font-semibold text-[#556B2F]">
            Reception Venue
          </p>

          <p className="text-gray-700 mt-2">
            Abayomi Event Centre, Oregie, Ajegunle Apapa, Lagos
          </p>

          <p className="text-gray-600 text-sm mt-1">
            Follows immediately after church ceremony
          </p>
        </div>

        {/* ================= PARKING ================= */}
        <div className="p-5 border rounded-xl bg-[#556B2F]/5">
          <p className="text-lg font-semibold text-[#556B2F]">
            Parking Information
          </p>

          <p className="text-gray-700 mt-2">
            Complimentary parking is available for all guests.
          </p>
        </div>

        {/* ================= MAP SECTION ================= */}
        <div className="text-center space-y-3">

          <p className="text-lg font-semibold text-[#556B2F]">
            Venue Map
          </p>

          <p className="text-gray-600 text-sm">
            Use the map below to locate the venue easily
          </p>

          {/* MAP IMAGE / PLACEHOLDER */}
          <div className="w-full h-64 rounded-xl overflow-hidden shadow-md bg-gray-100 flex items-center justify-center">

            {/* Replace with real map or image */}
            <img
              src="/map.jpg"
              alt="Map Location"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </div>
    </div>
  );
};

export default Locationz;