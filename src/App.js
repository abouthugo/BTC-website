import React, { Component } from 'react';
import Hero from './components/Hero'
import Layout from './components/Layout'
import Container from './components/Container'
import Button from './components/Button'
import Nav from './components/Nav';
import Alert from './components/Alert';
import BuyBitcoin from './components/BuyBitcoin';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './Footer';
class App extends Component {
  render() {
    return (
      <>
      <Hero>
        <Layout full>
        <Nav />
          <Container>
            <div className="col-1">
              <Alert>Catch mouse and gave it as a present chew the plant but scratch</Alert>
              <div>
              <h1 class="title">Buy Bitcoin with Credit Card</h1>
              <p class="content">
                Catch mouse and gave it as a present chew the plant but scratch
                me there, elevator butt. Always ensure to lay down in <br/>
                such a manner that tail can lightly brush.
              </p>  
              </div>
              <Button>CREATE ACCOUNT</Button>
            </div>
            <BuyBitcoin />
          </Container>
        </Layout>
      </Hero>
      <Features/>
      <Testimonials/>
      <CTA/>
      <Footer/>
      </>

    );
  }
}

export default App;
