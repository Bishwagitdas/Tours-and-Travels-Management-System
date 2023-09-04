import React from "react";
import "../styles/Home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png"
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
const Home = () => {
  return  <>
   <section>
   <Container>
   <Row>
     <Col lg='6'>
        <div className="hero__content">
        <div className="hero__subtitle d-flex align-items-center ">
           <Subtitle subtitle={'Know Before You Go'} />
           <img src={worldImg} alt=" "/>
        </div>
        <h1>
        Traveling open the door to creating{" "}
        <span className="highlight">memories</span>
        </h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta
        obcaecati deserunt nobis suscipit eaque</p>
        </div>
      </Col>
      <Col lg='2'>
        <div className="hero__img-box">
         <img src={ heroImg } alt=""/>
        </div>
      </Col>
      <Col lg='2'>
        <div className="hero__img-box mt-4">
         <video src={ heroVideo } alt="" controls/>
        </div>
      </Col>
      <Col lg='2'>
        <div className="hero__img-box mt-5">
         <img src={ heroImg02 } alt=""/>
        </div>
      </Col>
      <SearchBar />
     </Row>
    </Container>
   </section>
   {/* =================hero section start================*/}
  <section>
  <Container>
   <Row>
    <Col lg='3'>
      <h5 className="services__subtitle">What we serve</h5>
      <h2 className="services__title">We offer our best services</h2>
    </Col>
    <ServiceList />
   </Row>
  </Container>
  </section>
  {/*===========Feature Tour Section start==========  */}
  <section>
  <Container>
  <Row>
   <Col lg="12" className="mb-5">
   <Subtitle subtitle={"Explore"} />
   <h2 className="feature__tour-title"> Our Featured Tours</h2>
   
   </Col>
  <FeaturedTourList />
  </Row>
  </Container>
  </section>
  {/*===========Feature Tour Section end ==========  */}
  {/*===========experience Tour Section start ==========  */}
  <section>
    <Container>
      <Row>
         <Col lg="6">
         <div className="experience__content">
         <Subtitle subtitle={'Experience'} />

         <h2>With Our All Experience <br />We Will Serve You </h2>
         <p>orem Ipsum generator that provides a variety of different
          <br/> Ipsum text in both HTML and for pasting straight</p>
         </div>

         <div className="counter__wrapper d-flex align-items-center gap-5">
         <div className="counter__box">
         <span>12k</span>
         <h6>Successful Trip</h6>
         </div>
         <div className="counter__box">
         <span>2k</span>
         <h6>Regular Clients</h6>
         </div>
         <div className="counter__box">
         <span>10</span>
         <h6>Years Experience</h6>
         </div>
         
         </div>
         </Col>
         <Col lg="6">
         <div className="experience_img">
         <img src={experienceImg} alt="" />
         
         </div>
         </Col>
      
      </Row>
    
    </Container>
  </section>
  {/*===========experience Tour Section end ==========  */}

  {/*===========gallery Section end ==========  */}
  <section>
    <Container>
     <Row>
       <Col lg="12">
       <Subtitle subtitle={"Gallery"} />
       <h2 className="gallery__title">Visits Our Coustomer Tour Gallery </h2>
       
       </Col>
       <Col lg="12">
         <MasonryImagesGallery />
       </Col>
     </Row>
    </Container>
  </section>



  {/*===========gallery Section end ==========  */}

</>
  
};

export default Home
