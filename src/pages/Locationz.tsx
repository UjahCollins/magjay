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
          <div className="text-center space-y-6">

  <p className="text-lg font-semibold text-[#556B2F]">
    Directions
  </p>

  <p className="text-gray-600 text-sm">
    Tap any button below to open the location in Google Maps and get turn-by-turn directions.
  </p>

  <div className="grid md:grid-cols-2 gap-4">

    {/* Church Directions */}
    <div className="border rounded-xl p-5 bg-[#556B2F]/5">
      <p className="font-semibold text-[#556B2F] mb-2">
        Wedding Mass
      </p>

      <p className="text-gray-700 text-sm mb-4">
        St. Vincent Catholic Church
      </p>

      <a
        href="https://maps.app.goo.gl/Z1mAAqiJUhqZd3iY7?g_st=ic"
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-[#556B2F] text-white px-5 py-2 rounded-full hover:opacity-90 transition"
      >
        Get Directions
      </a>
    </div>

    {/* Reception Directions */}
    <div className="border rounded-xl p-5 bg-[#556B2F]/5">
      <p className="font-semibold text-[#556B2F] mb-2">
        Reception Venue
      </p>

      <p className="text-gray-700 text-sm mb-4">
        Abayomi Event Centre, Oregie, Ajegunle Apapa, Lagos
      </p>

      <a
        href="https://maps.app.goo.gl/3mUxHcEdhdHmNzSy9?g_st=ic"
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-[#556B2F] text-white px-5 py-2 rounded-full hover:opacity-90 transition"
      >
        Get Directions
      </a>
    </div>

  </div>

</div>

        </div>

      </div>
    </div>
  );
};

export default Locationz;