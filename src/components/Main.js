import React from "react";
import { useState } from "react";
// import { Outlet } from "react-router-dom";

export default function Main(props) {
  // const [title, settitle] = useState("Online Video Downloader.");
  const [text, settext] = useState("");
  const [errorMsg, seterrorMsg] = useState({
    status:false
  });
  const [isLoading, setisLoading] = useState(false)
  function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }
  const validateSearchBox = (mytext) => {
    
    if (mytext!=="" && !validURL(mytext)) {
      seterrorMsg({
        status:true,
        text: "Error : Enter valid url in input box...",
        classNameText: "invalid",
        id_for_Box: "invalidate",
      });
    }
    else if (mytext==="") {
      seterrorMsg({
        status:true,
        text: "Error : Search box not can be empty..",
        classNameText: "invalid",
        id_for_Box: "invalidate",
      });
    } else {
      seterrorMsg({
        status:false,
        text: "",
        classNameText: "",
        id_for_Box:""
      });
    }
  };

  function getDownloadLink(){
    if (!errorMsg.status && text !== ""){
      setisLoading(true)
    }
    else{
      seterrorMsg({
        status:true,
        text: "Error : Please enter any video link in search bar..",
        classNameText: "invalid",
        id_for_Box: "invalidate",
      });
    }
  }
  return (
    <section className="main">
      <div className="container">
        <div className="search-system">
          <div className="title mt-2">
          
            <div className="heading"> <i class="fa fa-download"></i> {props.title}</div>
            <div className="sub-heading">Paste your video link below.</div>
          </div>
          <div  className="search-bar text-center input-group my-4 ">
            {/* <form className=" search-bar text-center input-group needs-validation" novalidate> */}
            <input
              type="text"
              id= {`${errorMsg.id_for_Box}`}
              className={`form-control py-1`}
              value={text}
              onChange={(e) => {
                settext(e.target.value);
                validateSearchBox(e.target.value);
              }}
              placeholder="Enter your video link here..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span
              id= {`${errorMsg.id_for_Box}`}

              className="input-group-text mybtn py-3 px-4"
              // id="basic-addon2"
              onClick={getDownloadLink}
            >
              Download
            </span>
            {/* </form> */}
          </div>
          <div className={`form-label ${errorMsg.classNameText}`}>{errorMsg.text}</div>

          <div className="how-to-download h4 mt-3">
            <a href="#">How to download video from Allsave.in</a>
          </div>
        </div>
        {
        isLoading && <div className="loader w-50 m-auto mb-5">Processing the link to download. Stay on the page.</div>
        }
      </div>
      {/* <Outlet />  */}
    </section>
  );
}
