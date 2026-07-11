import "react";

import { MdCurrencyExchange, MdProductionQuantityLimits } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const state = {
    series: [
      {
        name: "Orders",
        data: [23, 24, 54, 76, 25, 75, 45, 85, 25, 75, 45, 85],
      },
      {
        name: "Revenue",
        data: [23, 24, 54, 44, 25, 75, 45, 75, 25, 75, 45, 85],
      },
      {
        name: "Sellers",
        data: [23, 24, 54, 90, 25, 29, 45, 99, 25, 75, 45, 85],
      },
    ],
    options: {
      color: ["#181ee8", "#181ee8"],
      plotOptions: {
        radios: 30,
      },
      chart: {
        background: "transparent",
        foreColor: "#d0d2d6",
      },
      dataLabels: {
        enabled: false,
      },
      strock: {
        show: true,
        curve: ["smooth", "straight", "stepline"],
        lineCap: "butt",
        colors: "#f0f0f0",
        width: 0.5,
        dashArray: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apl",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        position: "top",
      },
      responsive: [
        {
          breakpoint: 565,
          yaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apl",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
          },
          chart: {
            height: "550px",
          },
        },
      ],
    },
  };

  return (
    <div className="px-2 md:px-7 py-5">
      <div
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        lg:grid-cols-4 gap-7"
      >
        <div className="flex justify-between items-center p-7 bg-[#fae8e8] rounded-md gap-3">
          <div className="flex flex-col justify-start items-center text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">$3435</h2>
            <span className="text-base font-medium">Total Sales</span>
          </div>
          <div
            className="w-10 h-11.5 rounded-full bg-[#fa0305] 
                flex justify-center items-center text-xl "
          >
            <MdCurrencyExchange className="text-[#fae8e8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-7 bg-[#fde2ff] rounded-md gap-3">
          <div className="flex flex-col justify-start items-center text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">50</h2>
            <span className="text-base font-medium">Products</span>
          </div>
          <div
            className="w-10 h-11.5 rounded-full bg-[#760077] 
                flex justify-center items-center text-xl "
          >
            <MdProductionQuantityLimits className="text-[#fae8e8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-7 bg-[#e9feea] rounded-md gap-3">
          <div className="flex flex-col justify-start items-center text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">600</h2>
            <span className="text-base font-medium">Sellers</span>
          </div>
          <div
            className="w-10 h-11.5 rounded-full bg-[#038000] 
                flex justify-center items-center text-xl "
          >
            <FaUsers className="text-[#fae8e8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-7 bg-[#ecebff] rounded-md gap-3">
          <div className="flex flex-col justify-start items-center text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">54</h2>
            <span className="text-base font-medium">Orders</span>
          </div>
          <div
            className="w-10 h-11.5 rounded-full bg-[#0200f8] 
                flex justify-center items-center text-xl "
          >
            <FaCartShopping className="text-[#fae8e8] shadow-lg" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap mt-7">
        {/* Chart Section */}
        <div className="w-full lg:w-7/12 lg:pr-3">
          <div className="w-full bg-[#6a5fdf] p-4 rounded-md">
            <Chart options={state.options} series={state.series} type="bar" />
          </div>
        </div>
        {/* Chat Section */}
        <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
          <div className="w-full bg-[#6a5fdf] p-4 rounded-md text-[#d0d2d6]">
            <div className="flex justify-between mb-3 items-center">
              <h2 className="font-semibold  text-lg">Recent Seller Messages</h2>
              <Link className="font-semibold text-sm">View All</Link>
            </div>
            <div className="flex flex-col gap-2  pt-6 text-[#d0d2d6] ">
              <ol className="relative ml-4 ">
                <li className="mb-3 ml-6">
                  <div
                    className="flex absolute -left-5 shadow-lg
                            justify-center items-center w-10 h-10 p-1.5 bg-[#4c7fe2] rounded-full z-10"
                  >
                    <img
                      className="w-full h-full rounded-full shadow-lg"
                      src="/profile.jpeg"
                      alt=""
                    />
                  </div>
                  <div
                    className="p-3 bg-slate-800 rounded-lg border
                             border-slate-600 shadow-sm"
                  >
                    <div className="flex justify-between items-center mb-2 ">
                      <Link className="text-base font-normal">Admin</Link>
                      <time className="text-sm font-normal mb-1 sm:order-last sm:mb-0">
                        4 day Ago
                      </time>
                    </div>
                    <div
                      className="p-2 text-xs font-normal bg-slate-700
                                rounded-lg border border-slate-800"
                    >
                      How Are You
                    </div>
                  </div>
                </li>
                <li className="mb-3 ml-6">
                  <div
                    className="flex absolute -left-5 shadow-lg
                            justify-center items-center w-10 h-10 p-1.5 bg-[#4c7fe2] rounded-full z-10"
                  >
                    <img
                      className="w-full h-full rounded-full shadow-lg"
                      src="/profile.jpeg"
                      alt=""
                    />
                  </div>
                  <div
                    className="p-3 bg-slate-800 rounded-lg border
                             border-slate-600 shadow-sm"
                  >
                    <div className="flex justify-between items-center mb-2 ">
                      <Link className="text-base font-normal">Admin</Link>
                      <time className="text-sm font-normal mb-1 sm:order-last sm:mb-0">
                        4 day Ago
                      </time>
                    </div>
                    <div
                      className="p-2 text-xs font-normal bg-slate-700
                                rounded-lg border border-slate-800"
                    >
                      How Are You
                    </div>
                  </div>
                </li>
                <li className="mb-3 ml-6">
                  <div
                    className="flex absolute -left-5 shadow-lg
                            justify-center items-center w-10 h-10 p-1.5 bg-[#4c7fe2] rounded-full z-10"
                  >
                    <img
                      className="w-full h-full rounded-full shadow-lg"
                      src="/profile.jpeg"
                      alt=""
                    />
                  </div>
                  <div
                    className="p-3 bg-slate-800 rounded-lg border
                             border-slate-600 shadow-sm"
                  >
                    <div className="flex justify-between items-center mb-2 ">
                      <Link className="text-base font-normal">Admin</Link>
                      <time className="text-sm font-normal mb-1 sm:order-last sm:mb-0">
                        4 day Ago
                      </time>
                    </div>
                    <div
                      className="p-2 text-xs font-normal bg-slate-700
                                rounded-lg border border-slate-800"
                    >
                      How Are You
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* table section */}
      <div className="w-full p-4 bg-[#6a5fdf] mt-6 rounded-lg">
        <div className="flex justify-between mb-3 items-center text-[#d0d2d6]">
          <h2 className="font-semibold  text-lg">Recent Orders</h2>
          <Link className="font-semibold text-sm">View All</Link>
        </div>
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left ">
              <thead className="text-sm uppercase text-[#d0d2d6] border-b border-slate-700">
                <tr>
                 <th scope='col' className="py-3 px-4">Order Id</th>
                <th scope='col' className="py-3 px-4">Price</th>
                <th scope='col' className="py-3 px-4"> Payment Status</th>
                <th scope='col' className="py-3 px-4">Order Status</th>
                <th scope='col' className="py-3 px-4">Active</th>
               </tr>
              </thead>
              <tbody className="text-[#d0d2d6] ">
               
                 {
                  [1,2,3,4,5].map((d,i)=>(
                      <tr key={i}>
                      <td scope="row" className="py-3 px-4 font-normal whitespace-nowrap">#1</td>
                      <td scope="row" className="py-3 px-4 font-normal whitespace-nowrap">$454</td>
                      <td scope="row" className="py-3 px-4 font-normal whitespace-nowrap">Pending</td>
                      <td scope="row" className="py-3 px-4 font-normal whitespace-nowrap">Pending</td>
                      <td scope="row" className="py-3 px-4 font-normal whitespace-nowrap">
                        <Link>view</Link>
                      </td>
                      </tr>
                  ))
                 }
              </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
