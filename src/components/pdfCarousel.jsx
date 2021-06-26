import React,{useState} from 'react';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";




export const PdfCarousel = (data) =>{
    const [currImg, setCurrImg] = useState(0);
    return(
        <>
         <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${data[currImg]?.img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: 30 }} />
        </div>
        <div className="center">
          <h1>{data[currImg]?.title}</h1>
          <p>{data[currImg]?.subtitle}</p>
        </div>
        <div
          className="right"
          onClick={() => {
            currImg < data.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
        
        </>
    )
}
