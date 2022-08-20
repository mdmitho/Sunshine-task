import React from 'react';

const Baner = () => {
    return (
      <div>
        <div class="hero container mx-auto min-h-screen bg-base-100 text-left">
          <div class="hero-content flex-col lg:flex-row">
            <div className="ml-10">
              <h1 class="text-6xl font-bold ">A Great Addition</h1>
              <p class="py-6 text-3xl">
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
              <button class="btn btn-primary">Get Started</button>
            </div>
            <img
              src="http://mu.creativeracer.net/lando/pro/images/20.png?crc=4020612501"
              class="max-w-sm rounded-lg "
            />
          </div>
        </div>
      </div>
    );
};

export default Baner;