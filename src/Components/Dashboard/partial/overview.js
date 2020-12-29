import React from "react"
import logo from "../../../bbpp.jpg"

class Overview extends React.Component {
    render() {
        return (
            <div className="flex flex-warp">
                <div className="flex flex-col lg:flex-row w-full p-5">
                    <div className="w-full lg:w-2/5 sm:mx-2 p-5">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="flex sm:mx-2 p-5 justify-center lg:justify-end">
                        <div
                            className="border-2 border-gray-300 w-4/5 mb-10 lg:px-4 px-6 py-10 p-10 text-center text-gray-500 rounded-lg">
                            <div
                                className="pb-4 flex justify-center font-bold">
                                <span className="text-3xl">1,500 บาท</span>
                            </div>
                            <button
                                className="text-green-700 font-bold py-4 rounded border-2 border-gray-500 w-full text-base hover:border-white hover:bg-green-500 hover:text-white"
                            >
                                ชำระเงินเรียนไม่เก็บหน่วยกิต
                            </button>
                            <ul className="text-xs font-bold pt-4 text-left">
                                <li className="">สามารถเรียนที่ไหน
                                    เมื่อไหร่ก็ได้ตลอดชีพ
                                </li>
                                <li className=""> เนื้อหาทั้งหมด 40 วิดีโอ
                                    ความยาวรวมกัน 7 ชั่วโมง 46 นาที
                                </li>
                                <li className=""> แบบทดสอบทั้งหมด 4 แบบทดสอบ
                                </li>
                                <li className=""> ข้อสอบทั้งหมด 1 ข้อสอบ
                                </li>
                                <li className=""> เก็บหน่วยกิตเรียนปริญญาโท
                                </li>
                                <li className=""> ประกาศนียบัตร
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex sm:mx-2 p-5 justify-center">
                        <div
                            className="border-2 border-gray-300 w-4/5 mb-10 lg:px-4 px-6 py-10 text-center text-gray-500 rounded-lg">
                            <div
                                className="pb-4 flex justify-center font-bold">
                                <span className="text-3xl">4,500 บาท</span>
                            </div>
                            <button
                                className="py-4 rounded border-2 bg-green-700 w-full text-base text-white"
                            >
                                ชำระเงินเรียนเก็บหน่วยกิต
                            </button>
                            <ul className="text-xs font-bold pt-4 text-left">
                                <li className="">สามารถเรียนที่ไหน
                                    เมื่อไหร่ก็ได้ตลอดชีพ
                                </li>
                                <li className=""> เนื้อหาทั้งหมด 40 วิดีโอ
                                    ความยาวรวมกัน 7 ชั่วโมง 46 นาที
                                </li>
                                <li className=""> แบบทดสอบทั้งหมด 4 แบบทดสอบ
                                </li>
                                <li className=""> ข้อสอบทั้งหมด 1 ข้อสอบ
                                </li>
                                <li className=""> เก็บหน่วยกิตเรียนปริญญาโท
                                </li>
                                <li className=""> ประกาศนียบัตร
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Overview