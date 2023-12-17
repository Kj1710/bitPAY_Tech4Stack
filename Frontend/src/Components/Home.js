import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"
// import ChatBot from "./ChatBot";

const Home = () => {
  const call = () => {
    ref.current.click();
  }
  const ref = useRef(null)
  const navigate = useNavigate()
  return (
    <>
      <Navbar />

      <button type="button" ref={ref} class="btn btn-primary"  style={{"display":"none"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">

              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>


            {/* <div class="modal-body"> */}
              <div style={{ "height": "50rem", "width": "100%" }}>
                {/* Your chatbot iframe */}
                <iframe
                  src="https://www.chatbase.co/chatbot-iframe/33wkyxvfzSG-WnsUYgC7M"
                  width="100%"
                  style={{ height: '100%', minHeight: '70px'}}
                  frameBorder="0"
                  title="ChatBot"
                >
                </iframe>
              </div>
            {/* </div> */}


          </div>
        </div>
      </div>
      <main style={{"marginTop":"10rem"}}>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content" style={{"marginLeft":"50px" , "paddingRight":"40px"}}>
              <p>Simple Swift Secure</p>
              <h1>Revolutionize Transactions with Blockchain QR Code Technology!</h1>
              <p>
                No more waiting for bank confirmations – enjoy swift and efficient transactions that keep your revenue flowing seamlessly
              </p>
              <div className="btn btn-group">
                <button onClick={()=>{navigate('/login')}} style={{"marginRight":"20px" , "fontSize":"15px"}} >Login</button>
                <button onClick={()=>{navigate('/register')}} style={{ "fontSize":"15px"}}>SignUp</button>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/Home.svg"
                alt="codingTogether"
                width="400"
                height="500"
              />
            </div >
            <div onClick={() => { call() }} style={{"height":"50px" , "width":"50px" ,"marginLeft":"200%", "bottom":"10%"}}><img src='images/chatbot.png'  height={"60px"} width={"60px"}/></div>
          </div>
        </section>
      </main>
      <style>{`
      @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");
      @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
      body {
        margin: 0;
        height: 100%;
        overflow: hidden;
        width: 100%;
        line-height: normal;
        background-color: #f8f9fa;
      }
      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Urbanist, system-ui, Avenir, Helvetica, Arial, sans-serif;
          color-scheme: light dark;
          
        }
        
        :root {
          --bg-color: #f4f3ff;
          --btn-color: #646cff;
          --dark-color: #242424;
          --helper-color: #99b9ff;
        }
        
        html {
          font-size: 62.5%;
        }
        
     
        
        h1 {
          font-size: 7.0rem;
          line-height: 1.9;
          font-weight: bold;
        }
        
        p,
        li,
        label,
        input,
        textarea {
          font-size: 2rem;
          line-height: 1.56;
          letter-spacing: 0.1rem;
          word-spacing: 0.06rem;
        }
        
        a {
          font-weight: 500;
          font-size: 1.8rem;
          letter-spacing: 0.1rem;
          color: var(--btn-color);
          text-decoration: inherit;
        }
        
        
        li {
          list-style: none;
        }
        
        
        .container {
          max-width: 140rem;
          padding: 4rem 2.4rem;
          margin: 0 auto;
        }
        
        .grid {
          display: grid;
          gap: 6.4rem;
        }
        
        .grid-two-cols {
          grid-template-columns: repeat(2, 1fr);
        }
        
        .grid-four-cols {
          grid-template-columns: repeat(4, 1fr);
        }
        
    
        button {
          text-transform: capitalize;
          padding: 1rem 2.2rem;

          font-weight: 600;
          background-color: var(--btn-color);
          border-radius: 0.8rem;
          -webkit-border-radius: 0.8rem;
          -moz-border-radius: 0.8rem;
          -ms-border-radius: 0.8rem;
          -o-border-radius: 0.8rem;
          border: 0.1rem solid transparent;
          cursor: pointer;
          letter-spacing: 0.1rem;
          transition: border-color 0.3s;
          -webkit-transition: border-color 0.3s;
          -moz-transition: border-color 0.3s;
          -ms-transition: border-color 0.3s;
          -o-transition: border-color 0.3s;
        }
        
        .secondary-btn {
          background-color: transparent;
          box-shadow: inset 0 0 0 0.2rem var(--btn-color);
          margin-left: 3.2rem;
        }
        
        
        .section-hero {
          & .grid {
            align-items: center;
          }
        
          .hero-content {
            & p {
              margin: 2.4rem 0 4.8rem 0;
              &:first-child {
                margin: 0 0 1.2rem 0;
              }
            }
          }
        
          .hero-image {
            display: flex;
            justify-content: center;
            & img {
              width: 70%;
              height: auto;
            }
          }
        }

        
        .section-analytics {
          margin: 9.6rem 0;
        
          & .container {
            background-color: var(--bg-color);
            border-radius: 1rem;
          }
        
          & .grid {
            color: var(--dark-color);
        
            & .div1 {
              text-align: center;
              border-right: 0.2rem solid var(--dark-color);
        
              &:last-child {
                border: none;
              }
              & h2 {
                font-size: 4.8rem;
              }
              & p {
                text-transform: capitalize;
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default Home;