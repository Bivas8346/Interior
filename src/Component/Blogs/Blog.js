import React from 'react';
import './Blog.css'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Typography } from '@mui/material';

const Blog = () => {
  return (
    <>
      <div className="blog-post">
        <div className="blog-hero"><img src='../Assats/Blog/blog1.jpg' width="100%" /></div>
        <article className='tbloga'>
          <div className="blog-content">
            <div className='summary'>
              <h3 className="tblogh">My First Blog Post</h3>
              <div className="blog-date">23 Dec 2016</div>
            </div>
          </div>
          <div className="blog-img1">
            <img src='../Assats/Blog/blog2.jpg' width="100%" />
          </div>
          <div className="blog-content1">
            <p className="tblogp">Furniture Shopping Guide For First-time Home owners.</p>

            <p className="tblogps">Thinking of getting furniture for your new home? Here are some useful
              tips to help you make informed choices.</p>
          </div>

          <div className="blog-img2">
            <img src='../Assats/Blog/blog3.jpg' width="100%" />
          </div>
          <div className="blog-content2">
            <p className="tblogp">Easy ways to Ready your Kitchen for Summer</p>

            <p className="tblogps">Prepare your kitchen for the hotter months ideas on fridge
              ventilation,herb garden,cool zones,storage and more. </p>
          </div>

          <div className="blog-img3">
            <img src='../Assats/Blog/blog4.jpg' width="100%" />
          </div>
          <div className="blog-content3">
            <p className="tblogp">A Guide to Creating family Time spaces & Play areas</p>

            <p className="tblogps">Turn into house your multi-generational home by making
              the most of your space.Here are some ideas to to get started with</p>
          </div>

          <div className="blog-img4">
            <img src='../Assats/Blog/blog5.jpg' width="100%" />
          </div>
          <div className="blog-content4">
            <p className="tblogp">A Guide to creating friends and family party time spaces</p>

            <p className="tblogps">Start your brainstorming with this roundup of festive graduation party ideas</p>
          </div>
        </article>
      </div>

      <Container>
        <Row>
          <Col xs={6} md={4}>
            <div className="bcontainer">
              <div className="bsquare">
                <img className="mask" src="../../../../Assats/Blog/blog7.jpg" width={350} height={250} />
                <div className="blogh1">How to select appropiate dinning table for your family ?</div>
                <p className='blogp'>The dinning table is the stage where meals find their theatre.
                  Whether you're looking for a multi purpose dinning table
                  or a dedication dinning....</p>
                <div><a href=" " target="_" className="bbutton">Read More</a></div>
              </div>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div className="bcontainer">
              <div className="bsquare">
                <img className="mask" src="../../../../Assats/Blog/blog6.jpg" width={350} height={250} />
                <div className="blogh1">Choosing the correct Computer table for A Comfortable
                  WFH space.</div>
                <p className='blogp'>The low-down the choosing the best computer table
                  when you work from home.</p>
                <div><a href=" " target="_" className="bbutton">Read More</a></div>
              </div>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div className="bcontainer">
              <div className="bsquare">
                <img className="mask" src="../../../../Assats/Blog/blog8.jpg" width={350} height={250} />
                <div className="blogh1">Recliner chair for all ages With new design </div>
                <p className='blogp'>A unique piece of furniture,specifically built for ergonomic
                  comfort,the recliner is a favourite across age groups!
                  And having new design part for Comfortable furniture</p>
                <div><a href=" " target="_" className="bbutton">Read More</a></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>

  )
}

export default Blog