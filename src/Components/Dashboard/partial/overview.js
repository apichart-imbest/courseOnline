import React from "react"

class Overview extends React.Component {
    render() {
        return (
            <div className="flex flex-warp">
                <div className="flex flex-col lg:flex-row w-full p-5">
                    <div className="w-full lg:w-2/5 sm:mx-2 p-5">
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised words which don't
                            look
                            even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to
                            be
                            sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
                            generators on the Internet tend to repeat predefined chunks as necessary, making this
                            the
                            first true generator on the Internet. It uses a dictionary of over 200 Latin words,
                            combined
                            with a handful of model sentence structures, to generate Lorem Ipsum which looks
                            reasonable.
                            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
                            non-characteristic words etc.
                        </p>
                    </div>
                    <div className="flex sm:mx-2 p-5 justify-center lg:justify-end">
                        <div
                            className="border-2 border-gray-300 w-4/5 mb-10 lg:px-4 px-6 py-10 p-10 text-center text-gray-500 rounded-lg">
                            <div
                                className="pb-4 flex justify-center font-bold">
                                <span className="text-3xl"> 199.99 บาท</span>
                            </div>
                            <button
                                className="rounded text-center border-2 border-green-500 w-full text-2xl hover:bg-green-500 hover:text-white"
                            >
                                Learn More
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
                                <span className="text-3xl"> 199.99 บาท</span>
                            </div>
                            <button
                                className="rounded text-center border-2 border-green-500 w-full text-2xl hover:bg-green-500 hover:text-white"
                            >
                                Learn More
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