import React from "react";
import logo from "../../../45949458_2309956945744543_1954282554303447040_o.jpg"

class Instructor extends React.Component {
    render() {
        return (
            <div className="flex flex-warp">
                <div className="w-full">
                    <ul
                        className="flex flex-col"
                        role="tablist"
                    >
                        <li className="-mb-px last:mr-0 flex-auto text-left">
                            <a
                                className="text-gray-600 p-4 block focus:outline-none border-b-4 font-medium"
                            >
                                ผู้สมัคร
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-2 py-5 flex-auto">
                            <div className="flex flex-row tab-content tab-space">
                                <div className="w-full">
                                    <img src={logo} alt=""/>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p className="w-full text-sm">
                                    อภิชาติ พิมมานนท์
                                </p>
                                <p className="w-full text-sm">
                                    Software Engineer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Instructor