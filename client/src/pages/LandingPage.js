import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCars } from '../redux/actions/carsAction';
import { Row, Col, DatePicker } from 'antd'
import Spinner from '../components/Spinner';
import { Menu, Dropdown} from 'antd';
import { GrLinkedin, GrFacebook } from 'react-icons/gr';
import { ImWhatsapp } from 'react-icons/im'
import { SiGmail } from 'react-icons/si'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Link } from 'react-router-dom'
import moment from 'moment';
import './home.css'
const { RangePicker } = DatePicker

function LandingPage() {

  const { cars } = useSelector(state => state.carsReducer)
  const loading = useSelector(state => state.alertsReducer)
  const [totalcars, setTotalCars] = useState([]);
  const dispatch = useDispatch();





  useEffect(() => {
    dispatch(getAllCars())

  }, [])
  useEffect(() => {

    setTotalCars(cars)

  }, [cars])

  

  var menu = (
    <Menu>
      <Menu.Item>
        <a href='/'>
          home
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href='/admin'>
          Admin
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href='/bookings'>
          Bookings
        </a>
      </Menu.Item>
      <Menu.Item>
      <Link to='/login'>login</Link>
      </Menu.Item>
    </Menu>
    
  );
 
  
  
  
  return (
    <div  className='wholle-container-home'>
      <Parallax pages={3} className='landingpage'>


        <ParallaxLayer offset={0} speed={1} >
          <div>
            <div className='header bs1' id='navbar'>
              <Row gutter={16} justify='center'>
                <Col lg={20} sm={24} xs={24}>
                  <div className="d-flex justify-content-between">
                    <h1 className='h1-sitelogo'><a className='a-tag-site-logo' href='/'><b>THE RENTALS</b></a></h1>

                    <div className='nav-right'>
                    <div className='navbar-buttons'>
                    <a href='/' className="nav-btn v6">
                      <span className="label0">Home</span>
                      <span className="icon-btn">
                        <span></span>
                      </span>
                    </a>
                    <a href='/userbookings' className="nav-btn v6">
                      <span className="label0">My Bookings</span>
                      <span className="icon-btn">
                        <span></span>
                      </span>
                    </a>
                    <Link to='/register' className="nav-btn v6">
                      <span className="label0">register</span>
                      <span className="icon-btn">
                        <span></span>
                      </span>
                    </Link>
                    
                    <a href='Contactus' className="nav-btn v6">
                      <span className="label0">Contact us</span>
                      <span className="icon-btn">
                        <span></span>
                      </span>
                    </a>

                    <Link to='/login' className="nav-btn v6">
                      <span className="label0">Login</span>
                      <span className="icon-btn">
                        <span></span>
                      </span>
                    </Link>


                  </div>
                      <div>
                        <Dropdown overlay={menu} placement="bottomLeft" >
                          <button className='menu-button'>Menu</button>
                        </Dropdown>
                      </div>

                    </div>



                  </div>
                </Col>
              </Row>
              {loading == true && (<Spinner />)}
            </div>
            <Row className='home-intro '>
              <h1 >THE LOW LATENCY ADVANTAGE FOR MORE FX DEALS</h1>
              <h4  className='animated-text'> Lets Ride</h4>
              <p>The speed is achieved with supreme hardware, top tier network access and integration of
                real-time technologyinto one core system. Reach the highest hit-ratios with the velocity of light. </p>
                <button className='explore-btn-in-home'>Explore</button>
                <br/><br/><br/><br/><br/><br/>
                
            </Row>
            <div className='bold-line'>
                </div>


            
                    <div className='myrow'>
                      
                        <div className='myrow1 ' ><a href='/autocare'>Autocare</a></div>
                      
                      
                        <div className='myrow2'>
                        <p>Auto care is a service where a customer can connect to the service center and give his 
                              vehicle problem the center can provide solution of problem via feedback.
                            </p>
                              
                            <button className='explore-btn-2'>Explore</button>
                        </div>
                        </div>
            </div>
           
          
        </ParallaxLayer>





        <ParallaxLayer offset={1} speed={1} className="parallax-1">

          <div>
            <Row className='mt-3' justify='center'>
              <Col lg={20} sm={24} className="d-flex justify-content-left ">
                <h4 style={{ fontWeight:'bold', color: 'white', fontFamily: 'Poppins' }}>Select Your Time Range</h4><hr />
                <RangePicker showTime='HH:mm' format='YYYY-MM-DD HH:mm' />
              </Col>
            </Row>
            <Row justify='center' gutter={15} >
              {
                totalcars.map((car,index) => {
                  return <Col lg={5} sm={24} xs={24} key={index}>
                    <div className='car p-2 bs1 '>
                      <img src={car.image} className='carimg' />
                      <div className='car-content d-flex align-items-center justify-content-between'>
                        <div >
                          <p>{car.name}</p>
                          <p> Rent per hour {car.rentPerHour}/-</p>
                        </div>
                        <div><button className='btn1 book-btn-inhome'><Link className='book-link-inbutton' to='/login'>Book Now</Link></button></div>
                      </div>
                    </div>
                  </Col>
                })
              }

            </Row>

          </div>
        </ParallaxLayer>





        <ParallaxLayer offset={2} speed={1} className='parallax-2'>
          <div className='footer-in-home'>
            <div className='footer-left'>
              <a><h6>FAQs</h6></a>
              <a href='/contactus'><h6>Contact Us</h6></a>
              <a><h6>Read blog blog</h6></a>
              <a> <h6>Help</h6></a>
            </div>
            <div className='footer-center'>
              <br></br>
              <h4>Rent a Car</h4><br />
              <div><h5>developed by</h5><h6><br />Javed Iqbal &nbsp; &nbsp;| &nbsp;&nbsp;    Qazi Awais Akhtar &nbsp; &nbsp;|&nbsp;   &nbsp; Farman shah</h6></div>
            </div>
            <div className='footer-right'>
              <a className='socl-icon' href='https://web.whatsapp.com/'><ImWhatsapp /><span>  Whatsapp</span></a> <br />
              <a className='socl-icon' href='https://www.facebook.com/'><GrFacebook /> <span>facebook</span></a> <br />
              <a className='socl-icon' href='https://www.linkedin.com/'><GrLinkedin /><span> Linkedin</span></a>  <br />
              <a className='socl-icon' href='https://mail.google.com/mail/'><SiGmail /> <span>Google</span></a>
            </div>

          </div>
        </ParallaxLayer>




      </Parallax>
    </div>
  )
}

export default LandingPage;



