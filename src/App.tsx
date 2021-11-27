// import html2canvas from 'html2canvas'
import React, { useState, createContext } from 'react'
import Step1 from './pages/Step1'
import Header from './components/Header'
import Footer from './components/Footer'
import Step2 from './pages/Step2'
import Step3 from './pages/Step3'
import Preview from './components/Preview'
import Step4 from './pages/Step4'

export type SelectionContent = {
    title: string;
    description: string;
    photo: string; // URL or unicode ?
}

type InitialState = {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    selectionTitle: string;
    setSelectionTitle: React.Dispatch<React.SetStateAction<string>>;
    selectionContent: Array<SelectionContent>;
    setSelectionContent: React.Dispatch<React.SetStateAction<SelectionContent[]>>;
};
export const SelectionContext = createContext<InitialState>({
    currentStep: 0,
    setCurrentStep: () => {},
    selectionTitle: "",
    setSelectionTitle: () => {},
    selectionContent: [{ title: "", description: "", photo: "" }],
    setSelectionContent: () => {}
});


const App = () => {
    // const clickev = () => {
    //     const html: any = document.getElementById('toImage')
    //     console.log(html)
    //     html2canvas(html).then(function(canvas) {
    //         document.body.appendChild(canvas)
    //     });
    // }
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [selectionTitle, setSelectionTitle] = useState<string>("");
    const [selectionContent, setSelectionContent] = useState<Array<SelectionContent>>(
        [{ title: "test", description: "tes", photo: "te" }]
    );
    return (
        <SelectionContext.Provider value={{currentStep, setCurrentStep, selectionTitle, setSelectionTitle, selectionContent, setSelectionContent}} >
            <div className="flex w-screen h-screen">
                <div className="flex flex-col w-710px">
                    <Header></Header>
                    {currentStep === 0 && (<Step1></Step1>)}
                    {currentStep === 1 && (<Step2></Step2>)}
                    {currentStep === 2 && (<Step3></Step3>)}
                    {currentStep === 3 && (<Step4></Step4>)}
                    <Footer></Footer>
                </div>
                <div className="flex flex-1 p-8 bg-gray-100 border-l border-gray-300 justify-items-center">
                    <Preview></Preview>
                </div>
            </div>
        </SelectionContext.Provider>
    )
}

export default App
