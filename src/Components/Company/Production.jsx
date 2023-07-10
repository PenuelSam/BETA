import Title2 from "../Title2";
import production from "../../assets/Figma-Images/Manufacturing/production.png";
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Production = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      easing: "ease-in-out", 
    })
    Aos.refresh()
  },[])

  return (
    <div>
      <Title2 title="PRODUCTION OPERATIVE" />
      <div className="flex items-center lg:flex-col sm:items-start lg:gap-10 gap-40">
        <div data-aos="zoom-in" className="w-[700px] sm:w-[100%] sm:h-[400px]  h-[700px]">
          <img src={production} alt="" className="w-[100%] h-[100%] object-cover"/>
        </div>
        <div data-aos="zoom-in" className="w-[581px]  sm:w-[340px] sm:h-[1300px] h-[800px] flex flex-col justify-center  lg:justify-start  lg:pl-10 ">
          <p className="font-[300]   text-[18px] lg:text-[15px] leading-[40px] sm:leading-[35px] tracking-[0.1px] lg:tracking-normal text-[#363637]">
            Production operatives play an essential role in the manufacturing
            industry, providing the manual labour necessary to create and
            produce goods. We will provide you with operatives that are
            responsible for ensuring products are made accurately and
            efficiently while meeting quality standards. As technology advances,
            production operatives have to stay up-to-date with new technology
            and processes. We ensure that our operatives are trained in the use
            of technologies or equipment that will make them deliver their best.
            This means they are flexible, agile and ready to adapt quickly. With
            their knowledge and expertise in the field, production operatives
            help keep factories running smoothly and ensure that goods get
            produced on time. 
          </p>
          <p className="font-[300] sm:tracking-normal lg:text-[15px] text-[18px] leading-[40px] sm:leading-[35px] mt-10 tracking-[0.1px] text-[#363637]">Our operatives are able to communicate in the
            English language and know the importance of teamwork.</p>
        </div>
      </div>
    </div>
  );
};

export default Production;
