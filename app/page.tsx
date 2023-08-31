'use client'

import Image from 'next/image'
import python from '../public/python.png'
import cplus from '../public/cplus.png'
import pytorch from '../public/pytorch.png'
import openai from '../public/openai.png'
import aws from '../public/aws.png'
import azure from '../public/azure.png'
import hf from '../public/hf.png'
import git from '../public/git.png'
import docker from '../public/docker.png'
import kub from '../public/kub.png'
import mongo from '../public/mongo.png'
import jen from '../public/jen.png'
import flask from '../public/flask.png'
import hadoop from '../public/hadoop.png'
import kafka from '../public/kafka.png'
import pyspark from '../public/pyspark.png'

import { useState, useEffect } from 'react';

export default function Home() {
  const [cpuCores, setCpuCores] = useState<number | null>(null);
  const [totalMemory, setTotalMemory] = useState<number | null>(null);

  let logos = [
    python,
    cplus,
    pytorch,
    openai,
    aws,
    azure,
    hf,
    git,
    docker,
    kub,
    mongo,
    jen,
    flask,
    hadoop,
    kafka,
    pyspark
  ];

  const [currentLogos, setCurrentLogos] = useState<any>([]);
  
  useEffect(() => {
    const cores = window.navigator.hardwareConcurrency;
    setCpuCores(cores);

    // Get total memory information
    // @ts-ignore
    if (window.navigator.deviceMemory) {
      // @ts-ignore
      const memory = window.navigator.deviceMemory;
      setTotalMemory(memory);
    }

    

    setCurrentLogos(logos);
    const interval = setInterval(() => {
      setCurrentLogos((prevLogos:any) => {
        const [firstLogo, ...restLogos] = prevLogos;
        return [...restLogos, firstLogo];
      });
    }, 2000); // Move every 1 second

    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <main className="min-h-screen bg-white ">
      <div className="flex z-50 fixed w-screen bg-white h-[75px] items-center border-blue-900 border-b-4 justify-between">
        <p className="text-2xl font-bold text-blue-900 ml-6 tracking-tight" >Musa Dildar Ahmed Cheema</p>
        <a href='https://www.linkedin.com/in/musadac/' className='mt-2 lg:mt-0 border-blue-400 border-2 text-blue-400 p-2 rounded-lg mr-2 cursor-pointer hover:bg-blue-400 hover:text-white'> LinkedIn </a>
      </div>
      <div className="flex h-[500px] w-screen bg-gradient-to-r from-blue-900  to-blue-500 items-center">
        <div>
          <h1 className="text-2xl lg:text-7xl font-bold ml-6 bg-clip-text bg-gradient-to-b from-white from-50% to-blue-600 text-transparent ">
            Data Scientist
          </h1>
          <div className="ml-6  border-white border-b-4"></div>
          <div className="lg:flex mt-2 ml-7">
              <p className="text-white">&nbsp;&#x2022; AI/ML </p>
              <p className="text-white ml-1">&#x2022; DevOps/MLOps  </p>
              <p className="text-white ml-1">&#x2022; NLP  </p>
              <p className="text-white ml-1">&#x2022; LLMs  </p>
              <p className="text-white ml-1">&#x2022; AGI </p>
              <p className="text-white ml-1">&#x2022; Space Enthusiast</p>
          </div>
          <h1 className="text-sm ml-6 mt-4 text-white ">
            Contact me @ <a href='mailto:mcheema2010@gmail.com' className='underline'>mcheema2010@gmail.com</a>
          </h1>
        </div>
        
      </div>
      <div className='bg-gradient-to-r from-blue-900  to-blue-500'>
          <p className='ml-6 text-xs text-white'>System Cores: {cpuCores}, System Memory: {totalMemory?.toPrecision(1)}GB</p>
      </div>  
      <div className='carouselContainer border-blue-900 border-b-4'>
        <ul className='carousel'>
          {currentLogos.map((logo:any, index:any) => (
            <li
              key={index}
              className={`carouselItem`}
            >
              <Image
                src={logo}
                alt={'logo '+ index}
                className='logoImage w-[125px] object-fit h-[65px] p-2'
              />
            </li>
          ))}
        </ul>
      </div>
      <div className='lg:flex mt-6 justify-between mx-6 '>
          <div className='min-h-[300px] w-full p-2 mb-2 lg:w-[32%] bg-gradient-to-br from-blue-900  to-blue-500 rounded-lg'>
            <div className='rounded-full px-2 py-1 mt-4 ml-2 bg-white w-[150px] font-bold text-center'>Who I am ?</div>
            <p className='font-bold text-white m-4'>
              I am Musa Dildar Ahmed Cheema, a passionate and versatile individual with a strong foundation in Data Science.
              My journey has been guided by a thirst for knowledge and a drive to make a meaningful impact through technology. 
              I believe that technology has the potential to transform lives, industries, and societies, and I&apos;ve dedicated myself
              to harnessing this potential for the betterment of our world.
            </p>
          </div>
          <div className='min-h-[300px] mb-2 w-full p-2 lg:w-[32%] bg-gradient-to-br from-red-500  to-purple-500 rounded-lg'>
            <div className='rounded-full px-2 py-1 mt-6 ml-2 bg-white w-[150px] font-bold text-center'>My Education</div>
            <div className='rounded px-2 py-1 mt-3 mx-3 bg-white  font-bold'>
              <div className='lg:flex justify-between'>
                <p>NUCES FAST ISB</p>
                <p className='text-gray-500 text-sm'>Aug 2019 - June, 23</p>
              </div>
              <p className='text-gray-500 text-sm'>Bs Data Science</p>
              <p className='text-gray-500 text-sm'>
                <span className='text-black'>Coursework:</span> AI, NLP, Big Data, Distributed Data Engg, DevOps, MLOps, Data Mining, Data Analysis & Visualization, Operating System, 
                Computer Networks, Algorithms
              </p>
            </div>
            <div className='rounded px-2 py-1 mt-3 mx-3 mb-4 bg-white  font-bold'>
              <div className='lg:flex justify-between'>
                <p>Stanford University</p>
                <p className='text-gray-500 text-sm'>June 2022 - Aug 22</p>
              </div>
              <p className='text-gray-500 text-sm'>Stanford Summer School, California</p>
              <p className='text-gray-500 text-sm'>
                <span className='text-black'>Coursework:</span> CS229 Machine Learning, SOC-128D Mining Culture Through Text Data: Introduction to Social Data Science
              </p>
            </div>
            
          </div>
          <div className='min-h-[300px] mb-2  w-full lg:w-[32%] p-2 bg-gradient-to-br from-rose-400  to-rose-600 rounded-lg'>
            <div className='rounded-full px-2 py-1 mt-6 ml-2 bg-white w-[170px] font-bold text-center'>Career Aspiration</div>
            <p className='font-bold text-white m-4'>
              My career aspiration is to become a visionary leader and innovator in the field of Data Science and Artificial Intelligence.
              I envision myself driving transformative change through the creative and responsible application of cutting-edge technologies to address real-world challenges. 
              One of my most significant career aspirations is to pursue a Master&apos;s degree from <span className='text-black font-bold'>Stanford</span> . 
              Ultimately, my career aspiration is to leave a lasting legacy as someone who not only contributed technically but also inspired and empowered others to reach new heights. 
            </p>
          </div>
          
      </div>
      <div className='mx-6 mt-6 rounded-lg min-h-[500px]  font-bold p-6 bg-gradient-to-br from-blue-100  to-white'>
          <p className='text-3xl mb-5 text-black'>Experience</p>
          <div className='border-[#D83764] border-4 p-4 mt-2 rounded-xl text-[#365495]'>
            <p className=''>My Impact Meter</p>
            <div className='lg:flex justify-between'>
              <p className='text-[#D83764] '>&#x2022; Data Scientist</p>
              <p className='text-[#D83764] '>Feb, 2022 - Current </p>
            </div>
            <p className='text-black font-light'>&nbsp;&nbsp;- Developed data visualization dashboards for informed decision-making.</p>
            <p className='text-black font-light'>&nbsp;&nbsp;- Automated the Payment & Services data pipeline, reducing manual processing by 80% and enhancing efficiency.</p>
            <p className='text-black font-light'>&nbsp;&nbsp;- Developed Live LeaderBoard that show Live impact created by Impactors.</p>
            <div className='lg:flex justify-between'>
              <p className='text-[#D83764] '>&#x2022; Developer</p>
              <p className='text-[#D83764] '>Aug, 2020 - Feb, 2022 </p>
            </div>
            <p className='text-black font-light'>&nbsp;&nbsp;- Utilized advanced tools to create a secure, scalable MVP using Flutter.</p>
            <p className='text-black font-light'>&nbsp;&nbsp;- Demonstrated the potential of our product concept.</p>
            <p className='text-black font-light'>&nbsp;&nbsp;- Collabrated with companies CEO, COO, and CFO.</p>
            <div className='bg-[#D83764] font-normal text-sm min-h-[30px] b-0 -ml-4 -mr-4 -mb-4 flex items-center p-2 text-white mt-3'>
              Python, Flask, Pytorch, Transformers, Node.JS, Flutter, Next.JS, React.JS, Plotly, Scikit-Learn, Matplotlib, Socket.io, MongoDB, SQL, PowerBI, AWS, Docker
            </div>
          </div>
          <div className='border-blue-400 border-4 p-4 mt-2 rounded-xl text-green-900'>
            <p className=''>Data Insight Lab</p>
            <div className='lg:flex justify-between'>
              <p className='text-blue-400 '>&#x2022; Research Assistant</p>
              <p className='text-blue-400'>Aug 2022 - June 2023 </p>
            </div>
            <p className='text-black font-light'>&nbsp;&nbsp;- Engaged in an R&D-based Final Year Project focusing on &#34;A solution to extract entities from unstructured handwritten bilingual medical prescriptions.&#34;</p>
            <p className='text-black font-light'>&nbsp;&nbsp;- Pioneered the development of a state-of-the-art (SOTA) method named ViLanOCR, specialized in extracting handwritten text from bilingual Medical Prescriptions (Urdu and English).</p>
            <p className='text-black font-light'>&nbsp;&nbsp;- Successfully resolved the longstanding challenge of extracting handwritten Urdu text, contributing to enhanced accuracy and efficiency in medical data processing.</p>
            <p className='text-black font-light'>&nbsp;&nbsp;- Working on Publishing in Q1 Journal.</p>
            <div className='bg-blue-400 font-normal text-sm min-h-[30px] b-0 -ml-4 -mr-4 -mb-4 flex items-center p-2 text-white mt-3'>
              Pytorch, Python, MongoDB, Socket.io, Transformers, Tensorflow, LLMs, YOLO, React, Flutter, LabelImg, Latex, MatplotLib, Docker, Kubernetes, DVC, AWS, Hugging Face, Github Actions, Wikipedia
            </div>
          
          </div>
          <div className='border-purple-800 border-4 p-4 mt-2 rounded-xl text-pink-900'>
            <p className=''>Knoweledge Data & Discovery Lab</p>
            <div className='lg:flex justify-between'>
              <p className='text-purple-800 '>&#x2022; Research Assistant</p>
              <p className='text-purple-800'>Mar 2021 - Aug 2022 </p>
            </div>
            <p className='text-black font-light'>&nbsp;&nbsp;- Contributed to a funded project by the National Center for Artificial Intelligence (NCAI), titled &#34;Re-Designing E-recruitment using AI for Temporal Analysis.&#34;</p>
            <p className='text-black font-light'>&nbsp;&nbsp;- Designed and developed a novel resume ranking algorithm for a recommender system.</p>
            <p className='text-black font-light'>&nbsp;&nbsp;- Assisted in optimizing disk I/O for real-time entity enrichment from resumes in a graph database (ontology).</p>
            <p className='text-black font-light'>&nbsp;&nbsp;- Worked with two PhD Professors and 5 Master Students and Succesfully published 2 Research Papers.</p>
            <div className='bg-purple-800 font-normal text-sm min-h-[30px] b-0 -ml-4 -mr-4 -mb-4 flex items-center p-2 text-white mt-3'>
              Python, NLP, Ontology, Neo.Js, ElasticDB, AWS, OpenCL, Bloomfilter, Latex, React, MongoDB, SQL, Github
            </div>
          </div>
          <div className='border-blue-800 border-4 p-4 mt-2 rounded-xl text-black'>
            <p className=''>NUCES FAST ISB</p>
            <div className='lg:flex justify-between'>
              <p className='text-blue-400 '>&#x2022; Teacher Assistant</p>
              <p className='text-blue-400'>Jan 2023 - June 2023 </p>
            </div>
            <p className='text-black font-light'>&nbsp;&nbsp;- Big Data and Analytics and Database Systems.</p>
            <p className='text-black font-light'>&nbsp;&nbsp;- Taught 130 Students combined. </p>
            <p className='text-black font-light'>&nbsp;&nbsp;- Pioneered an interactive teaching strategy, focusing on project-based learning to cultivate practical skills. </p>
            <p className='text-black font-light'>&nbsp;&nbsp;- Facilitated hands-on learning, preparing students for real-world challenges in data management and analytics. </p>
            <div className='lg:flex justify-between'>
              <p className='text-blue-400 '>&#x2022; Teacher Assistant</p>
              <p className='text-blue-400'>Aug 2022 - Dec 2022 </p>
            </div>
            <p className='text-black font-light'>&nbsp;&nbsp;- Programming Fundamentals (PF).</p>
            <p className='text-black font-light'>&nbsp;&nbsp;- Taught 300 Students. </p>
            <p className='text-black font-light'>&nbsp;&nbsp;- Designed a comprehensive assignments focusing on the fundamental concepts of C++ programming. </p>
            <p className='text-black font-light'>&nbsp;&nbsp;- Guided students through real-world coding challenges, enhancing problem-solving and algorithmic thinking skills. </p>
            <p className='text-black font-light'>&nbsp;&nbsp;- Provided personalized feedback and assistance to ensure a strong grasp of core programming principles. </p>
            <div className='lg:flex justify-between'>
              <p className='text-blue-400 '>&#x2022; Teacher Assistant</p>
              <p className='text-blue-400'>Jan 2022 - June 2022 </p>
            </div>
            <p className='text-black font-light'>&nbsp;&nbsp;- Big Data and Analytics (BDA).</p>
            <p className='text-black font-light'>&nbsp;&nbsp;- Taught 50 Students. </p>
            <p className='text-black font-light'>&nbsp;&nbsp;- Crafted diverse assignments involving scalable data pipelines with Hadoop and Spark, and optimized database schema design. </p>
            <p className='text-black font-light'>&nbsp;&nbsp;- Developed a comprehensive project that leveraged Kafka for mobile sensor data acquisition, orchestrating the entire pipeline from data ingestion to machine learning-driven analysis. </p>
            <p className='text-black font-light'>&nbsp;&nbsp;- The initiative not only exposed students to real-time data handling but also provided insights into machine learning integration for informed decision-making. </p>
            <div className='bg-blue-800 font-normal text-sm min-h-[30px] b-0 -ml-4 -mr-4 -mb-4 flex items-center p-2 text-white mt-3'>
                Python, SQL, MongoDB, Hive, Hadoop, PySpark, Cassandra, Kafka, Pub Sub, AWS, Flask, io.Socket, Big Data Algorithms
            </div>
          </div>
      </div>
      <div className='mx-6 mt-6 rounded-lg min-h-[130px]  font-bold p-6 bg-gradient-to-br from-pink-500  to-purple-900'>
          <p className='text-4xl mb-2 text-white'>Volunteer Work</p>
          <p className='text-white font-light'>&nbsp;- Google Student Club Vice Head App Dev 2020</p>
          <p className='text-white font-light'>&nbsp;- NASCOM Arrangments</p>
      </div>

      <div className='min-h-[300px] mx-6 mt-4 mb-10 rounded-lg bg-gradient-to-br from-purple-300  to-white ' style={{zIndex:'100'}}>
        <p className='text-3xl lg:text-5xl ml-6 text-black font-extrabold pt-10'>Projects</p>
        <div className='lg:flex mx-6 mb-4 mt-8 justify-between'>
            <div className='min-h-[250px] lg:w-[32%]  shadow-purple-700 rounded-3xl border-black border-2 p-8 mb-10 lg:mb-2'>
              <p className='text-black text-3xl font-bold'>ViLanOCR</p>
              <p className='text-black text-sm font-light mt-2'>
                MultiLingual OCR Trained on Urdu English, Chinese, Japnese Language. It uses MBART-50 and Swin as Decoder and Encoder. It is trained on over 50M images.
                It generalizes on Handwritten Urdu really well at 1.2% CER Only.
              </p>
              <div className='mt-2 lg:flex'>
                <div className='mt-2 lg:mt-0 border-black border-2 text-black p-2 rounded-lg mr-2 cursor-default hover:bg-black hover:text-white'> Transformers </div>
                <div className='mt-2 lg:mt-0 border-black border-2 text-black p-2 rounded-lg mr-2 cursor-default hover:bg-black hover:text-white'> Vit </div>
                <div className='mt-2 lg:mt-0 border-black border-2 text-black p-2 rounded-lg mr-2 cursor-default hover:bg-black hover:text-white'> HuggingFace </div>
              </div>
              <div className='mt-2 block lg:flex'>
                <a href='https://github.com/musadac/ViLanOCR' className='mt-2 block lg:mt-0 border-black border-2 text-black p-2 rounded-lg mr-2 cursor-pointer hover:bg-black hover:text-white'> Github Code </a>
                <a href='https://huggingface.co/spaces/musadac/VilanOCR-Urdu-English-Chinese' className='mt-2 block lg:mt-0 border-black border-2 text-black p-2 rounded-lg mr-2 cursor-pointer hover:bg-black hover:text-white'> Live Demo </a>
              </div>
            </div>
            <div className='min-h-[250px] lg:w-[32%] shadow-xl rounded-3xl border-black border-2 p-8 mb-10 lg:mb-2'>
              <p className='text-black text-3xl font-bold'>BART/LLama 7b SFT Trainer</p>
              <p className='text-black text-sm font-light mt-2'>
                Implementation for training Language Models on a single GPU using PEFT and Trained using Hugging Face SFT Trainer. Dataset used is Instruct. Maximum Model that can be 
                trained is LLama 7B.
              </p>
              <div className='mt-2 lg:flex'>
                <div className='mt-2 lg:mt-0 border-black border-2 text-black p-2 rounded-lg mr-2 cursor-default hover:bg-black hover:text-white'> LLM </div>
                <div className='mt-2 lg:mt-0 border-black border-2 text-black p-2 rounded-lg mr-2 cursor-default hover:bg-black hover:text-white'> PEFT </div>
                <div className='mt-2 lg:mt-0 border-black border-2 text-black p-2 rounded-lg mr-2 cursor-default hover:bg-black hover:text-white'> HuggingFace </div>
              </div>
              <div className='mt-2 block lg:flex'>
                <a href='https://github.com/musadac/Training-LLMs' className='mt-2 block lg:mt-0 border-black border-2 text-black p-2 rounded-lg mr-2 cursor-pointer hover:bg-black hover:text-white'> Github Code </a>
              </div>
            </div>
            <div className='min-h-[250px] lg:w-[32%] shadow-xl  rounded-3xl border-black border-2 p-8 mb-10 lg:mb-2'>
              <p className='text-black text-3xl font-bold'>LLama2.C</p>
              <p className='text-black text-sm font-light mt-2'>
                Made a Chat UI for LLama2 Inference model in C by Andrew Karpathy. Built a socket server in C and used HTML to connect to socket server. This inference the Model
                on CPU in realtime. LLama can be trained for small tasks.
              </p>
              <div className='mt-2 lg:flex'>
                <div className='mt-2 lg:mt-0 border-black border-2 text-black p-2 rounded-lg mr-2 cursor-default hover:bg-black hover:text-white'> LLama </div>
                <div className='mt-2 lg:mt-0 border-black border-2 text-black p-2 rounded-lg mr-2 cursor-default hover:bg-black hover:text-white'> C </div>
                <div className='mt-2 lg:mt-0 border-black border-2 text-black p-2 rounded-lg mr-2 cursor-default hover:bg-black hover:text-white'> WebSocket.C </div>
              </div>
              <div className='mt-2 block lg:flex'>
                <a href='https://github.com/musadac/llama2.c' className='mt-2 block lg:mt-0 border-black border-2 text-black p-2 rounded-lg mr-2 cursor-pointer hover:bg-black hover:text-white'> Github Code </a>
              </div>
            </div>
        </div>
        <div className='lg:flex mx-6 mb-4 mt-0 justify-between'>
            <div className='min-h-[250px] lg:w-[32%] shadow-xl  rounded-3xl border-black border-2 p-8 mb-10 lg:mb-2'>
              <p className='text-black text-3xl font-bold'>Chatbot GPT3</p>
              <p className='text-black text-sm font-light mt-2'>
                Chatbot to carry conversation with a client and take information from them in a conversation. Implemented it on Rules and regulation of companies data.
                Used Vector Database and Prompt Engineering to get good results.
              </p>
              <div className='mt-2 lg:flex'>
                <div className='mt-2 lg:mt-0 border-black border-2 text-black p-2 rounded-lg mr-2 cursor-default hover:bg-black hover:text-white'> Prompt Engg </div>
                <div className='mt-2 lg:mt-0 border-black border-2 text-black p-2 rounded-lg mr-2 cursor-default hover:bg-black hover:text-white'> OpenAI </div>
                <div className='mt-2 lg:mt-0 border-black border-2 text-black p-2 rounded-lg mr-2 cursor-default hover:bg-black hover:text-white'> PineCone </div>
              </div>
             
            </div>
            <div className='min-h-[250px] lg:w-[32%] shadow-xl  rounded-3xl border-black border-2 p-8 mb-10 lg:mb-2'>
              <p className='text-black text-3xl font-bold'>POS System</p>
              <p className='text-black text-sm font-light mt-2'>
                Implemented a POS System that can give live stats of sales from anywhere around the world. This project is deployed in shops. Pakistan is place that lacks these types
                of system this can help track as well as help you detect fraud with intelligent solutions integrated into it.
              </p>
              <div className='mt-2 lg:flex'>
                <div className='mt-2 lg:mt-0 border-black border-2 text-black p-2 rounded-lg mr-2 cursor-default hover:bg-black hover:text-white'> NextJS </div>
                <div className='mt-2 lg:mt-0 border-black border-2 text-black p-2 rounded-lg mr-2 cursor-default hover:bg-black hover:text-white'> ExpressJS </div>
                <div className='mt-2 lg:mt-0 border-black border-2 text-black p-2 rounded-lg mr-2 cursor-default hover:bg-black hover:text-white'> AWS </div>
              </div>
              <div className='mt-2 block lg:flex'>
                <a href='http://3.128.132.194:3000' className='mt-2 block lg:mt-0 border-black border-2 text-black p-2 rounded-lg mr-2 cursor-pointer hover:bg-black hover:text-white'> Live Demo </a>
              </div>
            </div>
            <div className='min-h-[250px] lg:w-[32%] shadow-xl  rounded-3xl border-black border-2 p-8 mb-10 lg:mb-2'>
              <p className='text-black text-3xl font-bold'>DBLP-HADOOP</p>
              <p className='text-black text-sm font-light mt-2'>
                An Efficent Method to load an XML of 32GB by using only 30MB of system memory using hadoop Loading it into Hadoop File System. Extends on also integrating
                MongoDB. 
              </p>
              <div className='mt-2 lg:flex'>
                <div className='mt-2 lg:mt-0 border-black border-2 text-black p-2 rounded-lg mr-2 cursor-default hover:bg-black hover:text-white'> Hadoop </div>
                <div className='mt-2 lg:mt-0 border-black border-2 text-black p-2 rounded-lg mr-2 cursor-default hover:bg-black hover:text-white'> MongoDB </div>
              </div>
              <div className='mt-2 block lg:flex'>
                <a  href='https://github.com/musadac/DBLP-HADOOP' className='mt-2 block lg:mt-0 border-black border-2 text-black p-2 rounded-lg mr-2 cursor-pointer hover:bg-black hover:text-white'> Github Code </a>
              </div>
            </div>
        </div>
        <div className='flex justify-center mt-10 mx-6 pb-10'>
          <a href='https://github.com/musadac' className='mt-2 block lg:mt-0 border-black border-2 text-black p-2 rounded-lg mr-2 cursor-pointer hover:bg-black hover:text-white text-lg'> Other Projects on Github &#8680; </a>
        </div>
      </div>
      <div className='mt-6 min-h-[40vh] mb-6 bg-white flex items-center justify-center'>
        <div className='min-h-[40vh] mx-6 bg-gradient-to-br from-pink-600  to-rose-400 p-6 z-10 rounded-xl'>
          <h1 className='text-5xl text-white font-extrabold'>
            Publications
          </h1>
          <p className='text-white font-normal mt-3'>
            <span className='text-2xl font-extrabold mr-2'>1.</span>
            <a href="https://ieeexplore.ieee.org/abstract/document/9721629/" className='font-bold text-xl underline'>An efficient algorithm for ranking candidates in e-recruitment system</a>
            <br/><span className='text-xs text-gray-200 '>Abdul Hanan Minhas, Mohammad Daniyal Shaiq, Saad Ali Qureshi, Musa Dildar Ahmed Cheema, Shujaat Hussain, Kifayat Ullah Khan</span> 
            <br/>
            <span className='text-sm text-white'>
            Over the last decade, the growth of e-recruitment has resulted in the expansion of web channels dedicated to candidate recruitment, making it easy to find and apply for jobs. 
            However, as a result, today’s human resource managers are inundated with applications for each job opening. This leads to the production of significant number of documents, referred to as resumes or curriculum vitae (CV).
            </span>
          </p>

          <p className='text-white font-normal mt-3'>
            <span className='text-2xl font-extrabold mr-2'>2.</span>
            <a href="https://ieeexplore.ieee.org/abstract/document/9721803/" className='font-bold text-xl underline'>Feature-Wise Ranking of Candidates through Maximum Degrees in Hidden Bipartite Graphs</a>
            <br/><span className='text-xs text-gray-200 '>Sarah Kiyani, Musa Dildar Ahmed Cheema, Saad Ali Qureshi, Shujaat Hussain, Kifayat Ullah Khan</span> 
            <br/>
            <span className='text-sm text-white'>
            In this day and age of technological breakthroughs, electronic recruitment tools have gained much recognition due to their increasing popularity among recruiters.
             Many methods like Learning To Rank and Multi-Criteria Decision making have been employed inside these tools to enhance the process. The ranking is one of the most important parts of e-recruitment on which these methods and techniques are applied.
             Among these methods, the research area of graphs has not been explored enough in the context of ranking.
            </span>
          </p>
          

          <p className='text-white font-normal mt-3'>
            <span className='text-2xl font-extrabold mr-2'>3.</span>
            <a href="https://arxiv.org/abs/2206.04575" className='font-bold text-xl underline'>Transformer based Urdu Handwritten Text Optical Character Reader</a>
            <br/><span className='text-xs text-gray-200 '>Sarah Kiyani, Musa Dildar Ahmed Cheema, Saad Ali Qureshi, Shujaat Hussain, Kifayat Ullah Khan</span> 
            <br/>
            <span className='text-sm text-white'>
            Extracting Handwritten text is one of the most important components of digitizing information and making it available for large scale setting.
             Handwriting Optical Character Reader (OCR) is a research problem in computer vision and natural language processing computing, and a lot of work has been done for English, but unfortunately, very little work has been done for low resourced languages such as Urdu.
            </span>
          </p>
        </div>
      </div>
      
    </main>
  )
}
