import React from "react";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// components

import { userService } from 'services';
import CardStats from "components/Cards/CardStats";


export default function Cards(props) {

  return (
    <>

      {/* Card stats */}


      <div className="flex flex-wrap">
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="تعداد بازی"
            statTitle="22"
            statArrow="up"
            statPercent="3.48"
            statPercentColor="text-emerald-500"
            statDescripiron="Since last month"
            statIconName="far fa-chart-bar"
            statIconColor="bg-red-500"
          />
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="کاربر جدید"
            statTitle={props.newGamers.length + ""}
            statArrow="down"
            statPercent="3.48"
            statPercentColor="text-red-500"
            statDescripiron="Since last week"
            statIconName="fas fa-chart-pie"
            statIconColor="bg-orange-500"
          />
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="تعداد اشتراک گذاری"
            statTitle={props.gameShares.length + ""}
            statArrow="down"
            statPercent="1.10"
            statPercentColor="text-orange-500"
            statDescripiron="Since yesterday"
            statIconName="fas fa-users"
            statIconColor="bg-pink-500"
          />
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="مجموع امتیازات"
            statTitle={'props.gamers.map(g=>g.score).reduce((a,b)=>a+b,0)  +""'}
            statArrow="up"
            statPercent="12"
            statPercentColor="text-emerald-500"
            statDescripiron="Since last month"
            statIconName="fas fa-percent"
            statIconColor="bg-lightBlue-500"
          />
        </div>
      </div>


    </>
  );



}