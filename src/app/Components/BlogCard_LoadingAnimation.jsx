import React from "react";

const BlogCard_LoadingAnimation = () => {
  return (
      <div className="w-[426px] h-[550px] shadow">
        <div className="testImage w-[426px] h-[240px] border-b"></div>
        <div className="w-full h-[214px]">
          <div className="testText w-[100px] h-5 rounded mt-5 ml-5"></div>
          <div className="testText w-[310px] h-7 rounded mt-5 ml-5"></div>
          <div className="testText w-[130px] h-5 rounded mt-5 ml-5"></div>
          <div className="testText w-[310px] h-24 rounded mt-5 ml-5"></div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
            <div className="testText w-[60px] h-6 rounded mt-5 ml-5"></div>
            <div className="testText w-[60px] h-6 rounded mt-5 ml-5"></div>
            <div className="testText w-[60px] h-6 rounded mt-5 ml-5"></div>
            </div>
            <div className="testText w-12 h-12 rounded mt-5 mr-5"></div>
          </div>
        </div>
      </div>
  );
};

export default BlogCard_LoadingAnimation;
