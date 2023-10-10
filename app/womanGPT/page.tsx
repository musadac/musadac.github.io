'use client'
import React, { useEffect,useState } from 'react';


  
function PenaltySection({ section }:{section:any}) {
    return (
    <div className="mb-2 w-full bg-gradient-to-r from-white  to-white p-2 rounded border-gray-500 border-2">
        <h2 className="text-sm font-bold">{section.section}</h2>
        <p className="text-gray-700 text-sm ">{section.penalty}</p>
    </div>
    );
}

function LoadingOverlay() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black opacity-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-900"></div>
    </div>
  );
}

function FemaleGPT() {

    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState<any>(null);
    const [selectedLanguage, setSelectedLanguage] = useState('English'); // Default language is English
    const [loading, setLoading] = useState(false);

    const handleLanguageChange = (e:any) => {
      const newLanguage = e.target.value;
      setSelectedLanguage(newLanguage);
    };

    const handleChange = (e:any) => {
      setInputValue(e.target.value);
    };
  
    const handleSubmit = async (e:any) => {
      e.preventDefault();
      setLoading(true);

      // Define the Flask API URL
      const apiUrl = 'http://3.132.214.197:5055/generate_response'; // Update this URL as needed
  
      // Define the request data
      const requestData = {
        question:inputValue,
        'lang':selectedLanguage,
      };
  
      // Make a POST request to the Flask API
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error:', error);
      }
      finally {
        setLoading(false); // Set loading back to false after the request is complete
      }
    };

    const handleGo = async (e:any) => {
      e.preventDefault();
    
      // Redirect to the specified URL
      window.location.href = 'http://3.132.214.197/womanGPT';
    };

    // return (
    //     <div className='min-h-screen bg-white w-screen'>
    //         {loading && <LoadingOverlay />}
    //         <div className='flex h-[150px] w-screen bg-gradient-to-r from-blue-900  to-blue-500 items-center'>
    //             <div>
    //                 <h1 className="text-2xl lg:text-7xl font-bold lg:ml-6 ml-4 bg-clip-text bg-gradient-to-b from-white from-50% to-blue-600 text-transparent ">
    //                     Pakistani Woman GPT
    //                 </h1>
    //                 <h1 className="text-xs lg:ml-7  ml-4 mt-2 mr-7 text-white ">
    //                     The goal is to provide professional guidance to women in Pakistan on comprehending the law and the process for filing a complaint.
    //                     <br></br>
    //                     This is still under Experimentation Please contact me directly in case you can help me improve it.
    //                 </h1>
    //             </div>
    //         </div>
    //         <div className="bg-gradient-to-r from-blue-900  to-blue-500 w-screen">
    //             <input
    //                 className="lg:ml-7 ml-4  mb-5 w-[90%] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //                 id="text"
    //                 type="text"
    //                 placeholder= 'Please Enter your case.'
    //                 value={inputValue}
    //                 onChange={handleChange}
    //             />
                
    //         </div>
    //         <div className="bg-gradient-to-r from-blue-900  to-blue-500 w-screen">
    //           <button className='bg-white text-black lg:ml-7 ml-4  mb-2  p-2 rounded-md cursor-pointer' onClick={handleSubmit}>Submit</button>
    //           <select className='bg-white text-black ml-2 mb-2  p-2 rounded-md cursor-pointer' id="languageSelect" onChange={handleLanguageChange} value={selectedLanguage}>
    //               <option value="English">English</option>
    //               <option value="Urdu">Urdu</option>
    //           </select>
    //         </div>
    //         {data !== null?
    //         <div className=" ml-3 mr-3  p-2 ">
    //             <h1 className="text-2xl font-semibold mb-4">Legal Information</h1>

    //             <div className="mb-2 w-full bg-gradient-to-r from-blue-200  to-blue-100 p-2 rounded border-gray-500 border-2">
    //                 <h2 className="text-xl font-semibold">Penalty</h2>
    //                 <p className="text-gray-700 text-sm">{data.penalty}</p>
    //             </div>

    //             <div className="mb-2 w-full bg-gradient-to-r from-blue-200  to-blue-100 p-2 rounded border-gray-500 border-2">
    //                 <h2 className="text-xl font-semibold">Procedure</h2>
    //                 <p className="text-gray-700 text-sm">{data.procedure}</p>
    //             </div>

    //             <div className="mb-2 w-full bg-gradient-to-r from-blue-200  to-blue-100 p-2 rounded border-gray-500 border-2">
    //                 <h2 className="text-xl font-semibold mb-2">Sections</h2>
    //                 <div className="space-y-4 ml-2 mr-2 mt-2 mb-2">
    //                 {data.sections.map((section:any, index:any) => (
    //                     <PenaltySection key={index} section={section} />
    //                 ))}
    //                 </div>
    //             </div>
    //             </div>
    //             :<div className='fixed top-[400px] left-0 w-full h-full flex lg:items-center justify-center   text-blue-200 lg:text-6xl font-extrabold '>PAKISTAN WOMAN GPT</div>}
    //     </div>
    // );

    return (
        <div className='min-h-screen bg-white w-screen justify-center items-center flex'>
            <div className='flex p-5 w-[90vw] bg-gradient-to-r from-blue-900  to-blue-500 items-center rounded-lg'>
                <div>
                    <h1 className="text-2xl lg:text-7xl font-bold lg:ml-6 ml-4 bg-clip-text bg-gradient-to-b from-white from-50% to-blue-600 text-transparent ">
                        Pakistani Woman GPT
                    </h1>
                    <h1 className="text-xs lg:ml-7  ml-4 mt-2 mr-7 text-white ">
                        My name is Musa and the goal of this project is to provide professional guidance to women in Pakistan on comprehending the law and the process for filing a complaint.
                        <br></br>
                        This is still under Experimentation Please contact me directly in case you can help me improve it. @ mcheema2010@gmail.com
                    </h1>
                    <h1 className="text-2xl lg:ml-7 ml-4 mt-2 text-white font-bold">
                      Reasons for Starting the Project
                    </h1>
                    <ul className="text-xs lg:ml-7 ml-4 mt-2 mr-7 list-disc text-white">
                      <li>
                        <strong>Empowering Women:</strong> In many parts of the world, including Pakistan, women often face significant challenges related to their legal rights, safety, and access to justice. By creating a platform that offers professional guidance and information on legal matters, I aim to empower women with the knowledge they need to protect themselves and seek justice when necessary.
                      </li>
                      <li>
                        <strong>Addressing Information Gaps:</strong> There is a lack of accessible resources and information tailored to the specific legal context of Pakistan. Many women may not be aware of their rights or the steps to take when they encounter legal issues. This project seeks to bridge that information gap.
                      </li>
                      <li>
                        <strong>Promoting Gender Equality:</strong> Education and knowledge are powerful tools for promoting gender equality. When women are informed about their rights and the legal processes available to them, they are better equipped to assert themselves and advocate for their rights in various aspects of life.
                      </li>
                      <li>
                        <strong>Community Support:</strong> By providing a platform for women to access information and seek guidance, this project encourages a sense of community and support among women in Pakistan. It fosters a network where women can share experiences and knowledge, ultimately strengthening their collective voice.
                      </li>
                    </ul>
                    <h1 className="text-2xl lg:ml-7 ml-4 mt-2 text-white font-bold">
                      Milestones
                    </h1>
                    <ul className="text-xs lg:ml-7 ml-4 mt-2  list-disc text-white">
                      <li>
                        Integrate the app with reporting directly to authorities.
                      </li>
                      <li>
                        Take action by deploying iframes in company portals.
                      </li>
                      <li>
                        Raise awareness about women's legal rights.
                      </li>
                      <li>
                        Connect with lawyers to provide legal guidance and support.
                      </li>
                    </ul>
                    <button className='bg-white text-black w-[98%] ml-4 mt-2 mb-2  p-2 rounded-md cursor-pointer hover:bg-blue-800 hover:text-white border-2' onClick={handleGo}>DEMO</button>
                </div>
            </div>
        </div>
    );
}

export default FemaleGPT