import Title2 from "../Title2";
import hygiene from "../../assets/Figma-Images/Manufacturing/hygiene.png";
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Hygiene = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      easing: "ease-in-out", 
    })
    Aos.refresh()
  },[])

  return (
    <div className="mb-20">
      <Title2 title="HYGIENE OPERATIVE" />
      <div className="flex items-start justify-end sm:justify-start lg:items-start lg:flex-col-reverse lg:gap-10 gap-40 ">
        <div data-aos="zoom-in" className="w-[581px] sm:w-[340px] pl-20 lg:pl-10 sm:h-[1700px] h-[700px] flex flex-col items-center mt-10 lg:justify-start ">
          <p className="font-[300]  lg:text-left text-[20px] lg:text-[20px] leading-[35px] sm:leading-[35px] lg:tracking-normal tracking-[0.1px] text-[#363637]">
            Our hygiene operatives play an important role for the food and other
            allied companies in which they are employed. They work across all of
            the production areas and are responsible for ensuring that all
            floor, machines and the actual building meet strict standards of
            hygiene at all times.
          </p>
          <p className="font-[300]  lg:text-left text-[20px] lg:text-[20px] leading-[35px] sm:leading-[35px] lg:tracking-normal tracking-[0.1px] text-[#363637] mt-10">
            They are also trained to carry out scheduled daily cleaning tasks,
            cleaning of processing equipment and production lines to meet
            required standards, measured through testing of samples, they are
            also able to do deep cleaning of production areas.
          </p>
          <p className="font-[300]  lg:text-left text-[20px] lg:text-[20px] leading-[35px] sm:leading-[35px] lg:tracking-normal tracking-[0.1px] text-[#363637] mt-10">
            Other training received include but not limited to ; post cleaning
            checks to make sure everything has been completed properly ,ensuring
            that all paperwork is correctly completed,making sure that
            everything they do complies with company procedures for Health &
            Safety and Hygiene.
          </p>

          <p className="font-[300]  lg:text-left text-[20px] lg:text-[20px] leading-[35px] sm:leading-[35px] lg:tracking-normal tracking-[0.1px] text-[#363637] mt-10">
            They are to also ensure that their cleaning and personal protective
            equipment are functioning correctly at all times and are able to
            work effectively under pressure of time.
          </p>
          <p className="font-[300]  lg:text-left text-[20px] lg:text-[20px] leading-[35px] sm:leading-[35px] lg:tracking-normal tracking-[0.1px] text-[#363637] mt-10">
            They are also in the know that they are to report any incidents or
            environmental concerns to their line manager.
          </p>
        </div>
        <div data-aos="zoom-in" className="w-[700px] lg:h-[700px] sm:w-[420px] sm:h-[420px] h-[1250px]">
          <img
            src={hygiene}
            alt=""
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hygiene;

/*font-[300] text-right lg:text-left text-[24px] sm:texxt-[20px] leading-[37.92px] sm:leading-[35px] sm:tracking-normal tracking-[0.1px] text-[#363637] mt-10

font-[300] text-[24px] sm:text-[20px] leading-[43.8px] sm:leading-[35px] tracking-[0.1px] sm:tracking-normal text-[#363637]
*/
