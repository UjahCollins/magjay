import { Link } from "react-router-dom";
import { useCountdown } from "../hooks/useCountDown";
import img1 from '../assets/10.jpeg'

const Home = () => {
  const timeLeft = useCountdown()
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 gap-10">

      {/* LEFT SIDE */}
      <div className="flex-1 flex flex-col justify-center">
        
        {/* Title */}
        <p className="text-3xl md:text-5xl font-bold text-[#3f4f24] tracking-widest italic drop-shadow-md">Margaret & Johnson</p>
        {/* Countdown (placeholder for now) */}
        <div className="mt-6">

  <div className="bg-[#556B2F] text-white rounded-2xl p-6 shadow-lg w-[100%]">
    <div className="flex justify-around text-center">

      <div>
        <div className="text-3xl font-bold">{timeLeft.days}</div>
        <div className="text-xs uppercase tracking-wider">Days</div>
      </div>

      <div>
        <div className="text-3xl font-bold">{timeLeft.hours}</div>
        <div className="text-xs uppercase tracking-wider">Hours</div>
      </div>

      <div>
        <div className="text-3xl font-bold">{timeLeft.minutes}</div>
        <div className="text-xs uppercase tracking-wider">Mins</div>
      </div>

      <div>
        <div className="text-3xl font-bold">{timeLeft.seconds}</div>
        <div className="text-xs uppercase tracking-wider">Secs</div>
      </div>

    </div>
  </div>
</div>

        {/* Buttons */}
        <div className="flex justify-between md:justify-start md:gap-4 mt-8">
          <Link
            to="/invite"
            className="bg-[#556B2F] text-white px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            Invitation
          </Link>

          <Link
            to="/registry"
            className="border border-[#556B2F] text-[#556B2F] px-6 py-3 rounded-full hover:bg-[#556B2F] hover:text-white transition"
          >
            Gift Registry
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex justify-center items-center">
        <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-2xl bg-gray-200">
          <img
            src={img1}
            alt="Coupe"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  );
};

export default Home;