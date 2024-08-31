import Footer from "./Footer";
const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r ">
      {/* Hero Section */}
      <div className="flex justify-between h-screen">
        <div className="flex flex-col justify-center pb-15 mx-5">
          <h1 className="flex text-4xl text-blue-700 mb-5 font-semibold items-center">
            Join the largest{" "}
            <span className="flex bg-blue-700 text-white p-2 border rounded-lg">
              Freelancing
            </span>{" "}
            platform
          </h1>
          <p className="text-xl font-semibold flex">
            Now learn skills and search for the job at the same place
          </p>
          <p className="text-md flex">
            An initiative by the government of Punjab
          </p>
        </div>
        <div className="w-2/5 h-2/5 p-10 pt-20">
          <img src="/bg.jpg" alt="Background" className="border rounded-xl" />
        </div>
      </div>

      {/* Government of Punjab Section */}
      <div className="flex flex-col mt-10 items-center bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl text-blue-500 font-bold mb-5">
          The Government of Punjab
        </h1>
        <p className="text-lg text-gray-700 mb-4 text-center">
          The Government of Punjab is committed to empowering its people through
          innovative initiatives and dynamic leadership. From driving economic
          growth to ensuring social welfare, the government is at the forefront
          of transforming lives. Join us in our mission to build a brighter
          future for all.
        </p>
        <div className="flex justify-center">
          <img
            src="/punjabGov.png"
            alt="Government of Punjab"
            className="w-1/3 h-auto mb-5"
          />
        </div>
        <p className="text-md text-gray-500">
          With a vision for progress and prosperity, the Government of Punjab is
          dedicated to fostering an environment where every citizen has the
          opportunity to thrive.
        </p>
      </div>

      
      <div className="mt-10 p-10 bg-white rounded-lg shadow-lg">
        
        <h2 className="text-2xl text-blue-500 font-bold mb-5">Know Punjab</h2>
        <div>
          <img src="/bg2.jpg" alt="" className="w-2/5 h-2/5"/>
        </div>
        <p className="text-lg text-gray-700 mb-4">
          Punjab is a state in the northwest region of India and is one of the
          most prosperous states. The name Punjab is made of two words Punj
          (Five) + Aab (Water) i.e. land of five rivers. These five rivers of
          Punjab are Sutlej, Beas, Ravi, Chenab, and Jhelum. Only Sutlej, Ravi,
          and Beas rivers flow in today’s Punjab. The other two rivers are now
          in the state of Punjab, situated in Pakistan.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          The Punjab State is divided into three regions: Majha, Doaba, and
          Malwa. Agriculture is the mainstay of Punjab’s economy. Other major
          industries include manufacturing of scientific instruments, electrical
          goods, financial services, machine tools, textiles, sewing machines,
          etc.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Punjab has made considerable economic progress after Independence
          despite the setback it suffered in 1947. It contributes nearly two
          thirds to the total production of food grains and a third of milk
          production in the country. It is the leading producer of wheat,
          thereby contributing to the national food security.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Punjab is considered to have the best infrastructure in India; this
          includes road, rail, air, and river transport links that are extensive
          throughout the region. Punjab also has the lowest poverty rate in
          India and has won the best state performance award, based on
          statistical data compiled by the Indian Government.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          The total area of the state is 50,362 square kilometers (19,445 square
          miles), with the cultivable area being under assured irrigation. Its
          average elevation is 300 meters (980 ft) above sea level, with a range
          from 180 meters (590 ft) in the southwest to more than 500 meters
          (1,600 ft) around the northeast border.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Punjab extends from the latitudes 29.30° North to 32.32° North and
          longitudes 73.55° East to 76.50° East. Punjab is bounded on the west
          by Pakistan, on the north by Jammu and Kashmir, on the northeast by
          Himachal Pradesh and on the south by Haryana and Rajasthan.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          The state has a balanced amalgamation of heat in summer, rain in
          monsoon, and cold in winter. The three seasons are so distinctly
          distributed that you can enjoy each of them individually.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Punjabi, the official language of the state, is the tenth most widely
          spoken language in the world. It is also the fourth most spoken
          language in Asia. Punjabi is written in the Gurmukhi Script. Besides
          Punjabi, Hindi, Urdu, and English are also spoken in Punjab.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Chandigarh is a union territory and serves as the capital of the
          states of Punjab and Haryana. It is one of the early planned cities in
          post-independence India. Picturesquely located at the foothills of
          Shivaliks, it is known as one of the best experiments in urban
          planning and modern architecture in the twentieth century in India.
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
