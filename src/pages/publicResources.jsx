import React from 'react';
import './styles/publicResources.css';
import {Card} from 'antd';
import { MapSection } from '../components/map.jsx';
import {PdfCarousel} from '../components/pdfCarousel';
import {images} from '../components/fixtures';

export const PublicResources = () =>{

     var data = [...Array(10).keys()];
     

return(

    <>
    <div className='important-messages-section'>
        <h1 id='message-text-title'>Important Messages</h1>
        <div className='messages-div'>
            {data.slice(0,3).map((item,index)=>(
       <Card className='card' key={index.toString()}>
           <p className='card-title'>Lorem ipsum dolor sit amet, consec-
tetuer adipiscing elit, sed diam nonum-
my nibh euismod tincidunt</p>
           <p className='card-date'>12/02/2021</p>
           <p className='card-body'>Lorem ipsum dolor sit amet, consectetuer adipiscing
elit, sed diam nonummy nibh euismod tincidunt ut
laoreet dolore magna aliquam erat volutpat. Ut wisi
enim ad minim veniam, quis nostrud exerci tation
ullamcorper suscipit lobortis nisl ut aliquip ex ea com-
modo consequat. Duis autem vel eum iriure dolor in
hendrerit in vulputate velit esse molestie consequat-
dolor sit amet.
Lorem ipsum dolor sit amet, consectetuer adipiscing
elit, sed diam nonummy nibh euismod tincidunt ut
laoreet dolore magna aliquam erat volutpat. Ut wisi
enim ad minim veniam, quis nostrud exerci tation
ullamcorper suscipit lobortis nisl ut aliquip ex ea com-
modo consequat. Duis autem vel eum iriure dolor in
hendrerit in vulputate velit esse molestie consequat-
dolor sit amet.
Lorem ipsum dolor sit amet, consectetuer adipiscing
elit, sed diam nonummy nibh euismod tincidunt ut
laoreet dolore magna aliquam erat volutpat. Ut wisi
enim ad minim veniam, quis nostrud exerci tation
ullamcorper suscipit lobortis nisl ut aliquip ex ea com-
modo consequat. Duis autem vel eum iriure dolor in
hendrerit in vulputate velit esse molestie consequat-
dolor sit amet.
Lorem ipsum dolor sit amet, consectetuer adipiscing
elit, sed diam nonummy nibh euismod tincidunt ut
laoreet dolore magna aliquam erat volutpat. Ut wisi
enim ad minim veniam, quis nostrud exerci tation
ullamcorper suscipit lobortis nisl ut aliquip ex ea com-
modo consequat. Duis autem vel eum iriure dolor in
hendrerit in vulputate velit esse molestie consequat-
dolor sit amet.</p>
<p><button className='read-more-button'>READ MORE</button></p>
           </Card>
            ))}
  </div>
  <div className='view-more-div'><button className='view-all-button'>VIEW ALL</button></div>
 
        </div>
        <div className="map-sectipn">
            <MapSection />
        </div>
        <PdfCarousel data={images}/>
    </>
)
}