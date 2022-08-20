import React from 'react';
import { useQuery } from 'react-query';
import Loading from "../../Hooks/Loading";
import DisplayWacth from './DisplayWacth';

const AllWacth = () => {
    const {
      data: wacths,
      isLoading,
      refetch,
    } = useQuery(["watch"], () =>
      fetch("http://localhost:5000/watch").then((res) => res.json())
    );
  
    
      if (isLoading) {
        return <Loading />;
      }
      console.log(wacths);
    
    return (
      <div className="container mx-auto my-5">
        <h1 className="text-center text-5xl font-bold my-10 ">All New Watch</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {wacths.map((watch) => (
            <DisplayWacth key={watch._id} watch={watch}></DisplayWacth>
          ))}
        </div>
        
      </div>
    );
};

export default AllWacth;