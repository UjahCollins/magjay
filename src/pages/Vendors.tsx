const Vendors = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10">

      {/* MAIN CARD */}
      <div className="w-full max-w-4xl bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-6 md:p-10 border border-[#556B2F]/20 space-y-6">

        {/* TITLE */}
        <p className="text-center text-3xl md:text-4xl font-bold text-[#556B2F] italic">
          Wedding Vendors
        </p>

        {/* VENDORS LIST */}
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">

          {/* Website */}
          <div className="p-4 border rounded-xl">
            <p className="font-semibold text-[#556B2F]">Website</p>
            <p>De Verge Hub Ltd</p>
          </div>

          {/* Caterer */}
          <div className="p-4 border rounded-xl">
            <p className="font-semibold text-[#556B2F]">Caterer</p>
            <p>opsy.kitchen</p>
          </div>

          {/* Photography */}
          <div className="p-4 border rounded-xl">
            <p className="font-semibold text-[#556B2F]">Photography / Videography</p>
            <p>CP Creatives</p>
          </div>

          {/* Live Streaming */}
          <div className="p-4 border rounded-xl">
            <p className="font-semibold text-[#556B2F]">Event Planner</p>
            <p>Unusual Dimensions</p>
          </div>

          {/* Hair Vendor */}
          <div className="p-4 border rounded-xl">
            <p className="font-semibold text-[#556B2F]">Hair Vendor / Styling</p>
            <p>Starlight Royale</p>
          </div>

          {/* Wedding Attire */}
          <div className="p-4 border rounded-xl">
            <p className="font-semibold text-[#556B2F]">Wedding Attire</p>
            <p>Modest Fashion Home</p>
            <p>Trustee Closet</p>
          </div>

          {/* Traditional Attire */}
          <div className="p-4 border rounded-xl">
            <p className="font-semibold text-[#556B2F]">Traditional Attire</p>
            <p>Aisline Bridal</p>
          </div>

          {/* Cake / Small Chops */}
          <div className="p-4 border rounded-xl">
            <p className="font-semibold text-[#556B2F]">Cake / Small Chops</p>
            <p>iCakesntreats</p>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Vendors;