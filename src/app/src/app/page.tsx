export default function Home() {
  return (
    <div style={{fontFamily:"sans-serif"}}>
      {/* HEADER */}
      <header style={{padding:"15px 20px", background:"white", display:"flex", justifyContent:"space-between", alignItems:"center", boxShadow:"0 1px 3px rgba(0,0,0,0.1)"}}>
        <div style={{fontWeight:"bold", fontSize:"20px", color:"#2563eb"}}>ProClean Co.</div>
        <button style={{background:"#2563eb", color:"white", border:"none", padding:"10px 20px", borderRadius:"8px", fontWeight:"bold"}}>Book Now</button>
      </header>

      {/* HERO */}
      <div style={{padding:"60px 20px", textAlign:"center", background:"#eff6ff"}}>
        <h1 style={{fontSize:"32px", fontWeight:"bold", maxWidth:"600px", margin:"0 auto"}}>Professional Cleaning Service for Homes & Offices</h1>
        <p style={{color:"#64748b", marginTop:"15px", maxWidth:"500px", margin:"15px auto"}}>Reliable, affordable, and spotless cleaning. We make your space shine so you don't have to.</p>
        <div style={{marginTop:"25px"}}>
          <button style={{background:"#2563eb", color:"white", border:"none", padding:"14px 28px", borderRadius:"8px", fontWeight:"bold", margin:"5px"}}>Get Free Quote</button>
          <button style={{background:"white", color:"#2563eb", border:"1px solid #2563eb", padding:"14px 28px", borderRadius:"8px", fontWeight:"bold", margin:"5px"}}>Our Services</button>
        </div>
      </div>

      {/* SERVICES */}
      <div style={{padding:"40px 20px", maxWidth:"900px", margin:"0 auto"}}>
        <h2 style={{textAlign:"center", fontSize:"24px", fontWeight:"bold"}}>Our Services</h2>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"15px", marginTop:"20px"}}>
          <div style={{background:"white", padding:"20px", borderRadius:"12px", boxShadow:"0 1px 3px rgba(0,0,0,0.1)", textAlign:"center"}}>
            <div style={{fontSize:"30px"}}>🏠</div>
            <h3 style={{fontWeight:"bold", marginTop:"10px"}}>House Cleaning</h3>
            <p style={{color:"#64748b", fontSize:"14px", marginTop:"5px"}}>Deep cleaning for your entire home</p>
          </div>
          <div style={{background:"white", padding:"20px", borderRadius:"12px", boxShadow:"0 1px 3px rgba(0,0,0,0.1)", textAlign:"center"}}>
            <div style={{fontSize:"30px"}}>🏢</div>
            <h3 style={{fontWeight:"bold", marginTop:"10px"}}>Office Cleaning</h3>
            <p style={{color:"#64748b", fontSize:"14px", marginTop:"5px"}}>Keep your workplace spotless</p>
          </div>
          <div style={{background:"white", padding:"20px", borderRadius:"12px", boxShadow:"0 1px 3px rgba(0,0,0,0.1)", textAlign:"center"}}>
            <div style={{fontSize:"30px"}}>✨</div>
            <h3 style={{fontWeight:"bold", marginTop:"10px"}}>Move In/Out</h3>
            <p style={{color:"#64748b", fontSize:"14px", marginTop:"5px"}}>Perfect for moving days</p>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div style={{background:"#1e293b", color:"white", padding:"40px 20px", textAlign:"center"}}>
        <h2 style={{fontSize:"22px", fontWeight:"bold"}}>Ready to book?</h2>
        <p style={{color:"#94a3b8", marginTop:"10px"}}>Contact us now for a free quote</p>
        <p style={{marginTop:"15px", fontWeight:"bold"}}>📞 +1 (555) 123-4567 | 📧 hello@proclean.com</p>
      </div>
    </div>
  );
}
