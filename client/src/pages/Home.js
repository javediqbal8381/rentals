import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCars } from '../redux/actions/carsAction';
import { Row, Col, DatePicker } from 'antd'
import Spinner from '../components/Spinner';
import { Menu, Dropdown } from 'antd';
import { GrLinkedin, GrFacebook } from 'react-icons/gr';
import { ImWhatsapp } from 'react-icons/im'
import { SiGmail } from 'react-icons/si'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Link } from 'react-router-dom'
import moment from 'moment';
import './home.css'
const { RangePicker } = DatePicker

function Home() {
  const user = JSON.parse(localStorage.getItem('user'))

  const { cars } = useSelector(state => state.carsReducer)
  const loading = useSelector(state => state.alertsReducer)
  const [totalcars, setTotalCars] = useState([]);
  const [isadmin, setIsadmin] = useState(user.password)
  const dispatch = useDispatch();





  useEffect(() => {
    dispatch(getAllCars())

  }, [])
  useEffect(() => {

    setTotalCars(cars)

  }, [cars])

  function setFilter(values) {
    var selectedFrom = moment(values[0], 'YYYY-MM-DD HH:mm')
    var selectedTo = moment(values[1], 'YYYY-MM-DD HH:mm')


    var temp = []

    for (var car of cars) {

      if (car.bookedTimeSlots.length === 0) {
        temp.push(car)
      }
      else {

        for (var booking of car.bookedTimeSlots) {

          if (selectedFrom.isBetween(booking.from, booking.to) ||
            selectedTo.isBetween(booking.from, booking.to) ||
            moment(booking.from).isBetween(selectedFrom, selectedTo) ||
            moment(booking.to).isBetween(selectedFrom, selectedTo)
          ) {

          }
          else {
            temp.push(car)
          }

        }

      }

    }


    setTotalCars(temp)




  }

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
      <Menu.Item onClick={() => {
        localStorage.removeItem('user')
        window.location.href = '/login'
      }}>
        <li>Logout</li>
      </Menu.Item>
    </Menu>

  );




  return (
    <div className='wholle-container-home'>
      <Parallax pages={3} className='landingpage'>
         

        <ParallaxLayer offset={0} speed={1} >
        

          <div>
            <div className='header bs1' id='navbar'>


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
                    {user.password == 'devpassword' ? <a href='/admin' className="nav-btn v6">
                      <span className="label0">Admin</span>
                      <span className="icon-btn">
                        <span></span>
                      </span>
                    </a> : null
                    }
                    <a href='Contactus' className="nav-btn v6">
                      <span className="label0">Contact us</span>
                      <span className="icon-btn">
                        <span></span>
                      </span>
                    </a>

                    <a onClick={() => {
                      localStorage.removeItem('user')
                      window.location.href = '/login'
                    }} className="nav-btn v6">
                      <span className="label0">Logout</span>
                      <span className="icon-btn">
                        <span></span>
                      </span>
                    </a>


                  </div>
                  <div>
                    <Dropdown overlay={menu} placement="bottomLeft" >
                      <button className='menu-button'>{user.username}</button>
                    </Dropdown>
                  </div>

                </div>



              </div>

              {loading == true && (<Spinner />)}
            </div>
            <Row className='home-intro '>
              <h1 >THE LOW LATENCY ADVANTAGE FOR MORE FX DEALS</h1>
              <h4 className='animated-text'> Lets Ride</h4>

              <p>The rental drive gives you the chance to checkout the latest vehicles in the market
                with out buying them.Just in few simple steps you can book any vehicle and can test it out. </p>
              <button onClick={()=>{window.open('https://dmc-limousines.com/blog/', '_blank', 'noopener,noreferrer')}} className='explore-btn-in-home'>Explore</button>
              <br /><br /><br /><br /><br /><br />

            </Row>
            <div className='bold-line'>
            </div>



            <div className='myrow'>

              <div className='myrow1 ' ><a href='/autocare'>Autocare</a></div>


              <div className='myrow2'>
                <p>Auto care is a service where a customer can connect to the service center and give his
                  vehicle problem the center can provide solution of problem via feedback.
                </p>

                </div>
                <div className='myrow3'>
                <button  onClick={()=>{window.open('https://dmc-limousines.com/blog/', '_blank', 'noopener,noreferrer')}} className='explore-btn-2'>Explore</button>
                </div>
            </div>
          </div>


        </ParallaxLayer>





        <ParallaxLayer offset={1} speed={1} className="parallax-1">

          <div>
            <Row className='mt-3' justify='center'>
              <Col lg={20} sm={24} className="d-flex justify-content-left time-range-div-in-home">
                <h4 className='select-time-range' style={{ fontWeight: 'bold', color: 'white', fontFamily: 'Poppins' }}>Select Your Time Range</h4><hr />
                <RangePicker className='rangepicker' showTime='HH:mm' format='YYYY-MM-DD HH:mm' onChange={setFilter} />
              </Col>
            </Row>
            <Row justify='center' gutter={15} >
              {
                totalcars.map((car,index) => {
                  return <Col key={index} lg={6} sm={24} xs={24}>
                    <div className='car p-2 bs1 '>
                      <img src={car.image} className='carimg' />
                      <div className='car-content d-flex align-items-center justify-content-between'>
                        <div >
                          <p>{car.name}</p>
                          <p>Rent per hour {car.rentPerHour}/-</p>
                        </div>
                        <div><button className='btn1 book-btn-inhome'><Link className='book-link-inbutton' to={`/booking/${car._id}`}>Book Now</Link></button></div>
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

export default Home;



