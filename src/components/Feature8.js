import React from "react";

const Feature8 = () => {
  return (
    
<div className="container-fluid py-4 my-4" 
      style={{
        backgroundImage:
          "linear-gradient(94.45deg, #4EFBC1 -20.86%, #BABABA 108.36%)",
        padding: "30px",
        color: "white",
      }}>
  <div className="row" style={{textAlign: 'center'}}>
    <div className="col-lg-4 col-md-12" >
      <p
        style={{
          fontSize: "40px",
          fontWeight: "700",
          marginBottom:'2px'
        }}
      >
        18,562+
      </p>

      <p  style={{
            fontSize: "25px",
            fontWeight: "400",
          }}>
      Total Advocate
      </p>
    </div>

    <div className="col-lg-4 col-md-12">
   <p
        style={{
          fontSize: "40px",
          fontWeight: "700",
          marginBottom:'2px'
        }}
      >
        598 Million Minutes
      </p>

      <p  style={{
            fontSize: "25px",
            fontWeight: "400",
          }}>
      Total Chat/Call Minutes
      </p>
    </div>

    <div className="col-lg-4 col-md-12">
      <p
        style={{
          fontSize: "40px",
          fontWeight: "700",
          marginBottom:'2px'
        }}
      >
        39.3
      </p>

      <p  style={{
            fontSize: "25px",
            fontWeight: "400",
          }}>
      Active Customer
      </p>
    </div>
  </div>
</div>

  );
};

export default Feature8;
