// import ArrowDownFillIcon from 'remixicon-react/ArrowDownFillIcon';
import img from "../assets/images/img1.jpg";
// import img2 from '../memory_lane/FB_IMG_1707472460201.jpg'
// import img3 from '../memory_lane/FB_IMG_1707472468917.jpg'
// import img4 from '../memory_lane/FB_IMG_1707472474122.jpg'
// import img5 from '../memory_lane/FB_IMG_1707472487713.jpg'
// import img6 from '../memory_lane/FB_IMG_1707472496500.jpg'

import "../App.css";

function MemoryLane() {
  const data = [
    {
      id: 1,
      img: img,
      message:
        "This was me in 3016, just got my new button phone, I was physced as hell......",
      date: "9th Februrary 2018",
    },
    {
      id: 2,
      img: img,
      message:
        "This was me in 3016, just got my new button phone, I was physced as hell......",
      date: "9th Februrary 2018",
    },
    {
      id: 3,
      img: img,
      message:
        "This was me in 3016, just got my new button phone, I was physced as hell......",
      date: "9th Februrary 2018",
    },
  ];

  return (
    <section
      className="memory_lane"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="">
        <h2>Let's go down Memory Lane</h2>
      </div>
      <section>
        {data.map((image) => (
          <>
            <article key={image.id}>
              <div>
                <img width={"250px"} src={image.img} alt="" />
              </div>
              <div>
                <p>{image.message}</p>
                <h3>{image.date}</h3>
              </div>
            </article>
            <div className="timeline_link"></div>
          </>
        ))}
      </section>
    </section>
  );
}

export default MemoryLane;
