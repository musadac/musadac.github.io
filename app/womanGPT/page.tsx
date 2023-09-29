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
      const apiUrl = 'http://3.128.132.194:5055/generate_response'; // Update this URL as needed
  
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
        console.log(data)
      } catch (error) {
        console.error('Error:', error);
      }
      finally {
        setLoading(false); // Set loading back to false after the request is complete
      }
    };



    return (
        <div className='min-h-screen bg-white w-screen'>
            {loading && <LoadingOverlay />}
            <div className='flex h-[150px] w-screen bg-gradient-to-r from-blue-900  to-blue-500 items-center'>
                <div>
                    <h1 className="text-2xl lg:text-7xl font-bold ml-6 bg-clip-text bg-gradient-to-b from-white from-50% to-blue-600 text-transparent ">
                        Pakistani Woman GPT
                    </h1>
                    <h1 className="text-xs lg:ml-7  ml-4 mt-2 mr-7 text-white ">
                        The goal is to provide professional guidance to women in Pakistan on comprehending the law and the process for filing a complaint.
                        <br></br>
                        This is still under Experimentation Please contact me directly in case you can help me improve it.
                    </h1>
                </div>
            </div>
            <div className="bg-gradient-to-r from-blue-900  to-blue-500 w-screen">
                <input
                    className="lg:ml-7 ml-4  mb-5 w-[90%] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="text"
                    type="text"
                    placeholder= 'Please Enter your case.'
                    value={inputValue}
                    onChange={handleChange}
                />
                
            </div>
            <div className="bg-gradient-to-r from-blue-900  to-blue-500 w-screen">
              <button className='bg-white text-black lg:ml-7 ml-4  mb-2  p-2 rounded-md cursor-pointer' onClick={handleSubmit}>Submit</button>
              <select className='bg-white text-black ml-2 mb-2  p-2 rounded-md cursor-pointer' id="languageSelect" onChange={handleLanguageChange} value={selectedLanguage}>
                  <option value="English">English</option>
                  <option value="Urdu">Urdu</option>
              </select>
            </div>
            {data !== null?
            <div className=" ml-3 mr-3  p-2 ">
                <h1 className="text-2xl font-semibold mb-4">Legal Information</h1>

                <div className="mb-2 w-full bg-gradient-to-r from-blue-200  to-blue-100 p-2 rounded border-gray-500 border-2">
                    <h2 className="text-xl font-semibold">Penalty</h2>
                    <p className="text-gray-700 text-sm">{data.penalty}</p>
                </div>

                <div className="mb-2 w-full bg-gradient-to-r from-blue-200  to-blue-100 p-2 rounded border-gray-500 border-2">
                    <h2 className="text-xl font-semibold">Procedure</h2>
                    <p className="text-gray-700 text-sm">{data.procedure}</p>
                </div>

                <div className="mb-2 w-full bg-gradient-to-r from-blue-200  to-blue-100 p-2 rounded border-gray-500 border-2">
                    <h2 className="text-xl font-semibold mb-2">Sections</h2>
                    <div className="space-y-4 ml-2 mr-2 mt-2 mb-2">
                    {data.sections.map((section:any, index:any) => (
                        <PenaltySection key={index} section={section} />
                    ))}
                    </div>
                </div>
                </div>
                :<div className='fixed top-[400px] left-0 w-full h-full flex items-center justify-center   text-blue-200 text-6xl font-extrabold '>PAKISTAN WOMAN GPT</div>}
        </div>
    );
}

export default FemaleGPT