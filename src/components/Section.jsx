
import React from 'react';
import "./Section.css"
import { SearchIcon } from '@heroicons/react/solid';

function Section() {

    return (
        <div className='section'>
           {/* Left section of the whole section */}
            <div className='leftSection'>
                <div className="leftSectionData">
                    <h1>
                        30
                        {/* temp in c */}
                        <span className='leftSection__degree'> C</span></h1>

                    <h2>
                        {/* location   */}
                        Kochi
                    </h2>
                    <div className="data__Details">


                    </div>
                    <div className="data__type">

                        <img
                            src=""
                            alt="" />
                        <p>Condition :  <span>
                            {/* mist */}
                            Mist
                        </span></p>
                    </div>


                </div>
            </div>


               {/* Right section of the whole section */}
            <div className='rightSection'>
                <div className="rightSection__header">
                    <div className="header__Left">
                        <input type="text" placeholder='Enter your district/state' />
                    </div>

                    <div className="header__Right">
                        <button>
                            <SearchIcon style={{ width: "40px" }} />
                        </button>
                    </div>
                </div>





                <div className="rightSection__lastSearched">
                    <h2>Recently Searched</h2>

                    <p>Brisbane</p>
                    <p>Sydney</p>
                    <p>Kottayam</p>
                    <p>Kochi</p>
                </div>


                <div className="rightSection__weatherDetails">

                    <h2>Weather Details</h2>

                    <p>Country : <span></span></p>
                    <p>Region : <span></span></p>
                    <p>Local Time : <span></span></p>

                    <p>Time Zone : <span></span></p>

                    <p>Temp in C : <span></span></p>
                    <p>Condition : <span></span></p>
                    <img alt="" />
                    <p>Wind speed in kph : <span></span></p>
                </div>

            </div>

        </div>
    )
}

export default Section