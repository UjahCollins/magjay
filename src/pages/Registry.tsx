import pot from '../assets/pot.jpg'
import macbook from '../assets/macbook.avif'
import blender from '../assets/Blender.jpg'
import book from '../assets/marriage.png'

const Registry = () => {

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10">

      {/* MAIN WRAPPER CARD */}
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl w-full max-w-5xl p-6 md:p-10 space-y-10 border border-[#556B2F]/20">

        {/* ================= BANK DETAILS ================= */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Bride */}
          <div className="bg-[#556B2F] text-white rounded-xl p-6 shadow-md">
            <p className="text-lg font-semibold mb-2">Bride Account</p>
            <p>Bank: Access Bank</p>
            <p>Account Name: Ogbuji Chioma</p>
            <p>Account Number: 1487253116</p>
          </div>

          {/* Groom */}
          <div className="bg-[#556B2F] text-white rounded-xl p-6 shadow-md">
            <p className="text-lg font-semibold mb-2">Groom Account</p>
            <p>Bank: Access Bank</p>
            <p>Account Name: Johnson Jakperian</p>
            <p>Account Number: 0082824074</p>
          </div>

        </div>

        {/* ================= BOOK GIFT ================= */}
        <div className="bg-gradient-to-r from-[#556B2F]/10 to-yellow-50 border border-[#556B2F]/20 rounded-xl p-6 text-center">

  {/* BOOK IMAGE */}
  <div className="flex justify-center mb-4">
    <img
      src={book}
      alt="Recommended Book"
      className="w-28 h-36 object-cover rounded-lg shadow-md"
    />
  </div>

  {/* TITLE */}
  <p className="text-xl font-bold text-[#556B2F] mb-2">
    Recommended Book They Love 📚
  </p>

  {/* DESCRIPTION */}
  <p className="text-gray-700 mb-4">
    A beautiful book that reflects their journey and love story.
  </p>

  {/* BUTTON */}
  <a
    href="https://www.amazon.com"
    target="_blank"
    rel="noreferrer"
    className="bg-[#556B2F] text-white px-6 py-2 rounded-full hover:opacity-90 inline-block"
  >
    Get Book
  </a>

</div>

        {/* ================= HONEYMOON SUPPORT ================= */}
        <div className="bg-white border-2 border-dashed border-[#556B2F] rounded-xl p-6 text-center">

          <p className="text-xl font-bold text-[#556B2F] mb-2">
            Honeymoon Support ✈️
          </p>

          <p className="text-gray-700 mb-4">
            For those willing to support their honeymoon getaway.
          </p>

          <div className="bg-[#556B2F] text-white rounded-lg p-4 inline-block">
            <p className="font-semibold">Bride Account</p>
            <p>Bank: Access Bank</p>
            <p>Account Name: Ogbuji Chioma</p>
            <p>Account Number: 1487253116</p>
          </div>

        </div>

        {/* ================= GIFT ITEMS ================= */}
       <div className="grid md:grid-cols-3 gap-6">

  {/* ================= ITEM 1 ================= */}
  <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition flex flex-col items-center py-6 px-4 gap-4">

  {/* IMAGE (60% WIDTH CONTROLLED) */}
  <div className="w-[60%] h-36 bg-gray-50 overflow-hidden rounded-lg">
    <img
      src={blender}
      alt="Blender"
      className="w-full h-full object-cover hover:scale-105 transition duration-300"
    />
  </div>

  {/* TEXT SECTION */}
  <div className="text-center space-y-2">
    <p className="font-semibold text-[#556B2F]">Blender</p>

    <a
      href="https://buy-link.com"
      target="_blank"
      rel="noreferrer"
      className="text-sm text-white bg-[#556B2F] px-4 py-2 rounded-full inline-block hover:opacity-90 transition"
    >
      Buy Now
    </a>
  </div>

</div>

  {/* ================= ITEM 2 ================= */}
  <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition flex flex-col items-center py-6 px-4 gap-4">

  {/* IMAGE (60% WIDTH CONTROLLED) */}
  <div className="w-[60%] h-36 bg-gray-50 overflow-hidden rounded-lg">
    <img
      src={macbook}
      alt="Blender"
      className="w-full h-full object-cover hover:scale-105 transition duration-300"
    />
  </div>

  {/* TEXT SECTION */}
  <div className="text-center space-y-2">
    <p className="font-semibold text-[#556B2F]">macBook</p>

    <a
      href="https://buy-link.com"
      target="_blank"
      rel="noreferrer"
      className="text-sm text-white bg-[#556B2F] px-4 py-2 rounded-full inline-block hover:opacity-90 transition"
    >
      Buy Now
    </a>
  </div>

</div>

  {/* ================= ITEM 3 ================= */}
  <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition flex flex-col items-center py-6 px-4 gap-4">

  {/* IMAGE (60% WIDTH CONTROLLED) */}
  <div className="w-[60%] h-36 bg-gray-50 overflow-hidden rounded-lg">
    <img
      src={pot}
      alt="Blender"
      className="w-full h-full object-cover hover:scale-105 transition duration-300"
    />
  </div>

  {/* TEXT SECTION */}
  <div className="text-center space-y-2">
    <p className="font-semibold text-[#556B2F]">Non sticky Pot</p>

    <a
      href="https://buy-link.com"
      target="_blank"
      rel="noreferrer"
      className="text-sm text-white bg-[#556B2F] px-4 py-2 rounded-full inline-block hover:opacity-90 transition"
    >
      Buy Now
    </a>
  </div>

</div>

</div>

        {/* ================= FOOTER NOTE ================= */}
        <div className="text-center pt-6 border-t border-gray-200">
          <p className="text-gray-600">
            For delivery details, kindly contact any of the RSVP contacts.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Registry;