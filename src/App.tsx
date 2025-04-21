import "./index.css";
import { FileText, Mail } from "lucide-react";
import OfficeScene from "./components/OfficeScene";

function App() {
  return (
    <>
    <div className="flex flex-col h-screen w-screen">
      <div className="absolute flex px-6 py-4 w-full justify-between">
        <div>
          <h1 className="font-semibold">Adri Parris </h1>
          <h2 className="text-zinc-500 text-xs">Designer | Engineer</h2>
        </div>
        <div className="flex items-end">
          <a
            className="flex"
            href="https://adri-parris.notion.site/resume" target="_blank"
          >
            <FileText size={13} className="mr-[4px] mt-[3px]" />Resume 
          </a>
          <a
            className="flex ml-5"
            href="mailto:adriparris.work@gmail.com"
          >
            <Mail size={13} className="mr-[6px] mt-[4px]"/>Email me
          </a>
        </div>
      </div>
      <div className="absolute bottom-0  h-[calc(100vh-64px)] mt-[64px] w-full">
        <OfficeScene/>
      </div>
      
      </div>
    </>
  );
}

export default App;
