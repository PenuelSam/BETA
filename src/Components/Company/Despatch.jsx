import Title2 from "../Title2"
import despatch from '../../assets/Figma-Images/Manufacturing/despatch.png'
const Despatch = () => {
  return (
    <div className="mb-40">
      <Title2 title="DESPATCH OPERATIVE" />
      <div className="flex items-center lg:flex-col sm:items-start lg:gap-10 gap-40">
        <div className="w-[700px] lg:h-[700px] sm:w-[420px] sm:h-[420px] h-[1117px]">
          <img src={despatch} alt="" className="w-[100%] h-[100%] object-cover"/>
        </div>
        <div className="w-[581px] sm:w-[340px] lg:h-[700px] sm:h-[1300px] lg:justify-start lg:pl-10 h-[1101px] flex flex-col justify-center ">
          <p className="font-[300] text-[20px] lg:text-[20px] leading-[35px] sm:leading-[35px] tracking-[0.1px] lg:tracking-normal text-[#363637]">
          Despatch operatives, also known as picking and packing workers, form an integral part of the supply chain in any business. They are responsible for ensuring that customer orders are picked, packed, and shipped in a timely manner. 
          </p>
          <p className="font-[300] text-[20px] lg:text-[20px] leading-[35px] sm:leading-[35px] tracking-[0.1px] lg:tracking-normal mt-5 text-[#363637]">Our operatives are able to communicate in the
            English language and know the importance of teamwork.</p>
            <p className="font-[300] text-[20px] lg:text-[20px] leading-[35px] sm:leading-[35px] tracking-[0.1px] lg:tracking-normal mt-5 text-[#363637]">The role of despatch operatives is becoming increasingly important as more businesses shift to online models. As the demand for online products rises, our despatch operatives are essential to help ensure that customer orders arrive quickly and safely.</p>
            <p className="font-[300] text-[20px] lg:text-[20px] leading-[35px] sm:leading-[35px] tracking-[0.1px] lg:tracking-normal mt-5 text-[#363637]">Due to the changing nature of their roles, our despatch operatives possess a range of skills including attention to detail, problem-solving skills, and an understanding of inventory management systems. 
            They are also able to work quickly and accurately under pressure in order to maximize efficiency and customer satisfaction.</p>
        </div>
      </div>
    </div>
  )
}

export default Despatch

/*Despatch operatives, also known as picking and packing workers, form an integral part of the supply chain in any business. They are responsible for ensuring that customer orders are picked, packed, and shipped in a timely manner.

The role of despatch operatives is becoming increasingly important as more businesses shift to online models. As the demand for online products rises, our despatch operatives are essential to help ensure that customer orders arrive quickly and safely.

Due to the changing nature of their roles, our despatch operatives possess a range of skills including attention to detail, problem-solving skills, and an understanding of inventory management systems. 
They are also able to work quickly and accurately under pressure in order to maximize efficiency and customer satisfaction. */