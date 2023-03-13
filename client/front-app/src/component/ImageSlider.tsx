import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
  function imageSlider() {
    return (
      <>
        {/* strat image slider */}
        <Splide aria-label="My Favorite Images" options={{type:'fade'
      ,rewind:true,speed:2000,rewindByDrag:true, rewindSpeed:2000,}}>
  <SplideSlide>
    <img src="https://s3.ticketmx.com/uploads/images/182b2df9c13e6f94da1ade102199c192e71ee791.jpeg?w=1920&h=700&mode=crop&bgcolor=black&format=jpg" alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <img src="https://s3.ticketmx.com/uploads/images/1c6513a267595fd2d11c0213e2a692798966f68c.png?w=1920&h=700&mode=crop&bgcolor=black&format=jpg" alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <img src="https://s3.ticketmx.com/uploads/images/a2397f600f554df37ff3223a85d616d8edeb603b.png?w=1920&h=700&mode=crop&bgcolor=black&format=jpg" alt="Image 3"/>
  </SplideSlide>
</Splide>
        {/* End image slider */}

</>
    )
  }
  
  export default imageSlider