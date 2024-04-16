import { useMemo } from "react";
import "./Blog.css";
import { Divider } from "semantic-ui-react";

const Blog= ({ propBottom }) => {
  const groupDiv1Style = useMemo(() => {
    return {
      bottom: propBottom,
    };
  }, [propBottom]);

  return (
    
   <article>
    <div style={{display:"flex",justifyContent:"space-between",gap:"20px"}}>
    <img src="../image 7.png"/>
    <div>
    <h4>U.S. Court Orders NSO Group to Hand Over Pegasus Spyware Code to WhatsApp</h4>
    <div style={{display:"flex",justifyContent:"space-between"}}>
        <h6 style={{fontFamily: "Ubuntu",
fontSize: "17.22px",
fontWeight: "300",
textAlign: "left",
color:"#1E1E1E"
}}>02/05/2024</h6>
<h6 style={{fontFamily: "Ubuntu",
fontSize: "17.22px",
fontWeight: "300",
textAlign: "left",
color:"#1E1E1E"
}}>10:28am</h6>
<h6 style={{fontFamily: "Ubuntu",
fontSize: "17.22px",
fontWeight: "300",
textAlign: "left",
color:"#1E1E1E"
}}>By Tejas Sable</h6>
    </div>
    </div>
    <div style={{ display: "flex", alignItems: "center" }}>
  <img src="../Arrow_drop_down_big.png" />
  <span style={{
    fontFamily: "Ubuntu",
    fontSize: "26.87px",
    fontWeight: 700,
    textAlign: "left"
  }}>110K</span>
</div>


    </div>
    <Divider/>
   </article>
    
  );
};

export default Blog;
