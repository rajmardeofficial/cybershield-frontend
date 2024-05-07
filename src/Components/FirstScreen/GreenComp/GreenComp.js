
// import './GreenComp.css';

// function GreenComp() {
//   return (
//     <div className='greenbigdiv'>
//     <div className="greenApp" style={{display:"flex",marginLeft:"2%"}}>
//    <div className='greenimage'>
//     <img src='./image_2.png'/>
   
//    </div>
//    <div >
//    <h1 className='greenheading'>Cyber Tip Of The Day</h1>
//    <h5 className='content'>Cyber Tip of the Day: Sgreenecure Your Digital Footprint
// In today's digital age, safeguarding your online presence is crucial. Regularly review your privacy settings on social media platforms and adjust them to limit who can see your personal information. Use strong, unique passwords for each online account and enable two-factor authentication whenever possible. Be cautious about the information you share online and think twice before clicking on suspicious links or downloading unknown files. By taking these simple steps, you can better protect yourself from cyber threats and keep your digital footprint secure. #CyberSecurity #OnlineSafety</h5>
// <button className='greenbutton'>Chat Now</button>
//    </div>
//     </div>
//     </div>
//   );
// }

// export default GreenComp;

import "./GreenComp.css";

const GreenComp = () => {
  return (
    <div className="frame-container">
      <div className="image-2-parent"  style={{display:"flex",justifyContent:"space-between"}}>
        <img
          className="image-2-icon"
          loading="lazy"
          alt=""
          src="/image_2.png"
         
        />
        <div className="rectangle-group">
          <div className="frame-item" />
          <h3 className="cyber-tip-of">Cyber Tip Of The Day</h3>
          <div className="cyber-tip-of-the-day-secure-y-parent">
            <div className="cyber-tip-of-container">
              <p className="cyber-tip-of1">
                Cyber Tip of the Day: Secure Your Digital Footprint
              </p>
              <p className="in-todays-digital">
                In today's digital age, safeguarding your online presence is
                crucial. Regularly review your privacy settings on social media
                platforms and adjust them to limit who can see your personal
                information. Use strong, unique passwords for each online
                account and enable two-factor authentication whenever possible.
                Be cautious about the information you share online and think
                twice before clicking on suspicious links or downloading unknown
                files. By taking these simple steps, you can better protect
                yourself from cyber threats and keep your digital footprint
                secure. #CyberSecurity #OnlineSafety
              </p>
            </div>
            <button className="button">
              <div className="button-child" />
              <div className="chat-now">Chat Now</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenComp;

