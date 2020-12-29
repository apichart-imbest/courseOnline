import React from "react";

class Detail extends React.Component {
    render() {
        return (
            <div className={this.props.openTab === 1 ? "block" : "hidden"} id="link1">
                <div className="flex flex-col">
                    <div className="w-full">
                        <div className="flex">
                                {this.state.longText}
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered
                                alteration in some form, by injected humour, or randomised words which don't look even
                                slightly
                                believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there
                                isn't
                                anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                                the
                                Internet
                                tend to repeat predefined chunks as necessary, making this the first true generator on
                                the
                                Internet.
                                It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                                structures,
                                to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
                                always
                                free
                                from repetition, injected humour, or non-characteristic words etc.
                            </p>
                        </div>

                        <div className="py-5 flex-auto">
                            <p>
                                Content
                            </p>
                            <div className="flex flex-col w-full rounded block shadow-lg text-lg">
                                <div className="bg-gray-500 text-white">
                                    <p className="mx-2">
                                        Overview
                                    </p>
                                </div>
                                <div className="flex w-full justify-between text-base">
                                    <p className="mx-2">
                                        Introduce
                                    </p>
                                    <p className="mx-2">
                                        1:20
                                    </p>
                                </div>
                                <div className="bg-gray-500 text-white">
                                    <p className="mx-2">
                                        Overview
                                    </p>
                                </div>
                                <div className="flex w-full justify-between text-base">
                                    <p className="mx-2">
                                        Introduce
                                    </p>
                                    <p className="mx-2">
                                        1:20
                                    </p>
                                </div>
                                <div className="bg-gray-500 text-white">
                                    <p className="mx-2">
                                        Overview
                                    </p>
                                </div>
                                <div className="flex flex-col w-full text-base">
                                    <div className="flex w-full justify-between">
                                        <p className="mx-2">
                                            Introduce
                                        </p>
                                        <p className="mx-2">
                                            1:20
                                        </p>
                                    </div>
                                    <div className="flex w-full justify-between">
                                        <p className="mx-2">
                                            Introduce
                                        </p>
                                        <p className="mx-2">
                                            1:20
                                        </p>
                                    </div>
                                    <div className="flex w-full justify-between">
                                        <p className="mx-2">
                                            Introduce
                                        </p>
                                        <p className="mx-2">
                                            1:20
                                        </p>
                                    </div>
                                    <div className="flex w-full justify-between">
                                        <p className="mx-2">
                                            Introduce
                                        </p>
                                        <p className="mx-2">
                                            1:20
                                        </p>
                                    </div>
                                    <div className="flex w-full justify-between">
                                        <p className="mx-2">
                                            Introduce
                                        </p>
                                        <p className="mx-2">
                                            1:20
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail