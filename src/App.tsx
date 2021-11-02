// import html2canvas from 'html2canvas'
import React from 'react'
import Step1 from './pages/Step1'
import Header from './components/Header'
import Footer from './components/Footer'
import Step2 from './pages/Step2'
import Step3 from './pages/Step3'
import Preview from './components/Preview'

const App = () => {
    // const clickev = () => {
    //     const html: any = document.getElementById('toImage')
    //     console.log(html)
    //     html2canvas(html).then(function(canvas) {
    //         document.body.appendChild(canvas)
    //     });
    // }
    return (
        <div className="flex w-screen h-screen">
            <div className="flex flex-col w-710px">
                <Header step={1} ></Header>
                <Step3></Step3>
                <Footer></Footer>
            </div>
            <div className="flex flex-1 p-8 bg-gray-100 border-l border-gray-300 justify-items-center">
                <Preview></Preview>
            </div>
        </div>
    )
}

export default App
