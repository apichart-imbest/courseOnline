import React from "react";
import Board from "./partial/board";
import Review from "./partial/review";
import Payment from "./partial/payment";
import Detail from "./partial/detail";
import Instructor from "./partial/instructor";
import Overview from "./partial/overview";

export default class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            openTab: 1
        }
    }

    setOpenTab = (tab) => {
        this.setState(prevState => ({
                openTab: tab
            }),
            () => this.forceUpdate()
        )
    }

    render() {
        return (
            <div className="shadow-sm max-w-screen-xxl mx-auto">
                <div className="flex min-h-screen flex-1">
                    <main className="min-h-screen flex flex-col w-full lg:p-10">
                        <div className="sm:mx-3 flex flex-col xl:flex-row">
                            <Overview color="pink"/>
                        </div>
                        <div className="sm:mx-3 flex flex-col xl:flex-row">
                            <div className="flex flex-warp">
                                <div className="flex flex-col lg:flex-row w-full p-5 justify-center">
                                    <div className="w-full sm:mx-2 lg:pr-16">
                                        <div className="flex flex-wrap">
                                            <div className="w-full bg-white">
                                                <ul
                                                    className="flex flex-row"
                                                    role="tablist"
                                                >
                                                    <li className="-mb-px last:mr-0 flex-auto">
                                                        <a
                                                            className={
                                                                "text-gray-600 py-4 px-6 block hover:bg-gray-100 focus:outline-none border-b-4 font-medium" +
                                                                (this.state.openTab === 1
                                                                    ? " border-blue-500"
                                                                    : "")
                                                            }
                                                            onClick={e => {
                                                                e.preventDefault();
                                                                this.setOpenTab(1);
                                                            }}
                                                            data-toggle="tab"
                                                            href="#link1"
                                                            role="tablist"
                                                        >
                                                            Detail
                                                        </a>
                                                    </li>
                                                    <li className="-mb-px last:mr-0 flex-auto">
                                                        <a
                                                            className={
                                                                "text-gray-600 py-4 px-6 block hover:bg-gray-100 focus:outline-none border-b-4 font-medium" +
                                                                (this.state.openTab === 2
                                                                    ? " border-blue-500"
                                                                    : "")
                                                            }
                                                            onClick={e => {
                                                                e.preventDefault();
                                                                this.setOpenTab(2);
                                                            }}
                                                            data-toggle="tab"
                                                            href="#link2"
                                                            role="tablist"
                                                        >
                                                            Payment
                                                        </a>
                                                    </li>
                                                    <li className="-mb-px last:mr-0 flex-auto">
                                                        <a
                                                            className={
                                                                "text-gray-600 py-4 px-6 block hover:bg-gray-100 focus:outline-none border-b-4 font-medium" +
                                                                (this.state.openTab === 3
                                                                    ? " border-blue-500"
                                                                    : "")
                                                            }
                                                            onClick={e => {
                                                                e.preventDefault();
                                                                this.setOpenTab(3);
                                                            }}
                                                            data-toggle="tab"
                                                            href="#link3"
                                                            role="tablist"
                                                        >
                                                            Review
                                                        </a>
                                                    </li>
                                                    <li className="-mb-px last:mr-0 flex-auto invisible md:visible">
                                                        <a
                                                            className={
                                                                "text-gray-600 py-4 px-6 block hover:bg-gray-100 focus:outline-none border-b-4 font-medium" +
                                                                (this.state.openTab === 4
                                                                    ? " border-blue-500"
                                                                    : "")
                                                            }
                                                            onClick={e => {
                                                                e.preventDefault();
                                                                this.setOpenTab(4);
                                                            }}
                                                            data-toggle="tab"
                                                            href="#link4"
                                                            role="tablist"
                                                        >
                                                            Board
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div
                                                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
                                                    <div className="px-4 py-5 flex-auto">
                                                        <div className="tab-content tab-space">
                                                            <Detail openTab={this.state.openTab}></Detail>
                                                            <Board openTab={this.state.openTab}></Board>
                                                            <Payment openTab={this.state.openTab}></Payment>
                                                            <Review openTab={this.state.openTab}></Review>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex w-full lg:w-1/3 lg:pr-16">
                                        <Instructor/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}