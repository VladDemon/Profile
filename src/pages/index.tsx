import { useRouter } from "next/router";
import HomeContents from "../../HomeContents";

import { Context } from "../components/Context";
import { useContext } from "react";

const Home = (): JSX.Element => {
    // const router = useRouter();

    const {language} = useContext(Context);
    return (
      <div className="Home__text text-start flex flex-col w-96 self-center">
        {language ? (<>
          <h1 className="">{HomeContents.en.header.title}</h1><br></br>
          <h1 className="text-start text-2xl p-4">{HomeContents.en.header.name}</h1>
          <h1>{HomeContents.en.header.ProfLife}</h1><br></br>
          
          <div className="LearnExp text-start">
            <h1 className="text-start text-2xl p-4">{HomeContents.en.header.LearnExp.name}</h1>
            <h1>{HomeContents.en.header.LearnExp.Start}</h1><br></br>
            <h1>{HomeContents.en.header.LearnExp.Time}</h1><br></br>
            <h1>{HomeContents.en.header.LearnExp.Current}</h1>
          </div>
        </>) : <>
          <h1 className="">{HomeContents.ru.header.title}</h1><br></br>
          <h1 className="text-start text-2xl p-4">{HomeContents.ru.header.name}</h1>
          <h1>{HomeContents.ru.header.ProfLife}</h1><br></br>
          
          <div className="LearnExp text-start">
            <h1 className="text-start text-2xl p-4">{HomeContents.ru.header.LearnExp.name}</h1>
            <h1>{HomeContents.ru.header.LearnExp.Start}</h1><br></br>
            <h1>{HomeContents.ru.header.LearnExp.Time}</h1><br></br>
            <h1>{HomeContents.ru.header.LearnExp.Current}</h1>
          </div>
        </>
        }
      </div>
    );
  };
  
export default Home;