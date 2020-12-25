import React from "react";
import Board from "./partial/board";
import Review from "./partial/review";
import Payment from "./partial/payment";
import Detail from "./partial/detail";
import Instructor from "./partial/instructor";
import Overview from "./partial/overview";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Detail
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Payment
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Review
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                 Board
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <Detail openTab={ openTab }></Detail>
                <Board openTab={ openTab }></Board>
                <Payment openTab={ openTab }></Payment>
                <Review openTab={ openTab }></Review>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
      <div className="shadow-sm max-w-screen-xxl mx-auto">
        <div class="flex min-h-screen flex-1">
            <main className="min-h-screen flex flex-col w-full bg">
                <div className="sm:mx-3 flex flex-col xl:flex-row p-3">
                    <div className="w-full p-5">
                        <Overview color="pink" />
                    </div>
                </div>
                <div className="sm:mx-3 flex flex-col xl:flex-row p-3">
                    <div className="w-full xl:w-2/3 sm:mx-2 p-5">
                        <Tabs color="pink" />
                    </div>
                    <div className="w-full xl:w-1/3 sm:mx-2 p-5">
                        <Instructor/>
                    </div>
                </div>
            </main>
        </div>
      </div>
  );
}