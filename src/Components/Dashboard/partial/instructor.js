import React from "react";

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
                                ผู้สอน
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority
                                    have suffered
                                    alteration in some form, by injected humour, or randomised words which don't look
                                    even slightly
                                    believable. If you are going to use a passage of Lorem Ipsum, you need to be sure
                                    there isn't
                                    anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators
                                    on the
                                    Internet tend to repeat predefined chunks as necessary, making this the first true
                                    generator on
                                    the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
                                    of model
                                    sentence structures, to generate Lorem Ipsum which looks reasonable. The generated
                                    Lorem Ipsum
                                    is therefore always free from repetition, injected humour, or non-characteristic
                                    words etc.
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