import Link from "next/link";
import React, { useState, useEffect } from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";
import axios from "../src/utils/axios";

const RoomGrid = () => {
  const [tipe, setDataTipe] = useState([])

  useEffect(() => {
    const getTipe = async () =>{
      await axios
      .get('/tipe',)
      .then((res) => setDataTipe(res.data.rows))
      .catch((err) => console.log("error bodoh"))
    }
    
    Promise.all([getTipe()])
  }, [])

  return (
    <Layouts>
      <PageBanner pageName={"Our Room"} />
      <section className="section-twenty-five">
        <div className="auto-container">
          <div className="row">
            {tipe.map(item =>(
              <div className="col-lg-4" key={item.id}>
              <div className="block-twenty-five">
                <div className="image">
                  <img src= {`https://wikusama-hotel.s3.ap-southeast-1.amazonaws.com/tipe/${item.image}`} alt="" />
                </div>
                <div className="lower-content">
                  <div className="pricing">{item.harga}</div>
                  
                  <h3>{item.nama_tipe}</h3>
                  <Link href={`/room-details?id=${item.id}`}>
                    <a className="theme-btn btn-style-four">
                      <span>View Room</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            ))}
            
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default RoomGrid;
