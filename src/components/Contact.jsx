import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <>
    <div className="container border mt-2 pt-2">
    <div className="row">
        <div className="col-md-4 col-lg-3 mb-4 mb-md-0">
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-home"></i></span>
            <div className="media-body">
              <h4>California United States</h4>
              <p>Santa monica bullevard</p>
            </div>
          </div>
          <div className="media contact-info ">
            <span className="contact-info__icon"><i className="ti-headphone"></i></span>
            <div className="media-body">
              <h4><Link to="tel:454545654">00 (440) 9865 562</Link></h4>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-email"></i></span>
            <div className="media-body">
              <h4><Link to="mailto:support@colorlib.com">support@colorlib.com</Link></h4>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-lg-9">
          <form action="#/" className="form-contact contact_form"  method="post" id="contactForm" novalidate="novalidate">
            <div className="row">
              <div className="col-lg-5 d-flex flex-column gap-2 ">
                <div className="form-group">
                  <input className="form-control rounded-0" name="name" id="name" type="text" placeholder="Enter your name"/>
                </div>
                <div className="form-group">
                  <input className="form-control rounded-0" name="email" id="email" type="email" placeholder="Enter email address"/>
                </div>
                <div className="form-group">
                  <input className="form-control rounded-0" name="subject" id="subject" type="text" placeholder="Enter Subject"/>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="form-group">
                    <textarea className="form-control different-control w-100 rounded-0" name="message" id="message" cols="30" rows="5" placeholder="Enter Message"></textarea>
                </div>
              </div>
            </div>
            <div className="form-group text-center text-md-right mt-4">
              <button type="submit" className="btn btn-primary rounded-0 px-3 py-2">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}


