import React from 'react'
import ImageGrid from './ImageGrid'

export default function MainSection() {
  const fourImages = [
    { src: '/1fourimage.png', title: 'Book an appointment ', description: 'You can contact with our experts doctors in many specialization' },
    { src: '/2fourimage.png', title: "Book an consultation", description: "You can contact with our experts doctors in many specialization" },
    { src: '/3fourimage.png', title: 'Book a home visit ', description: 'You can contact with our experts doctors in many specialization' },
    { src: '/4fourimage.png', title: "Book lab test at home", description: "You can contact with our experts doctors in many specialization" }
  ];
  const eightImages = [
    { src: '/Brain.png', title: "Brain & Nerves" },
    { src: '/Tooth.png', title: "Teeth" },
    { src: '/Bone.png', title: "Bones" },
    { src: '/Body.png', title: "Body health" },
    { src: '/Thermometer.png', title: "Genecology" },
    { src: '/Vector.png', title: "Child"},
    { src: '/Frame 1707479521.png', title: "Skin"},
    { src: '/mingcute_nose-fill.png', title: "Ear, Nose" }
  ];
  
  return (
   <>
    < div style={{background:"#d0d2d61c",margin:"2px" }}>
        <h1 style={{textAlign:"center"}}><span className='colored-word'>Our Main Services</span> Categories </h1>
        <ImageGrid  images={fourImages}/>
    </ div>
    <div style={{marginTop:"30px"}}>
      <ImageGrid images={eightImages} />
    </div>
    <h2 style={{margin:"20px",textAlign:"start"}}>Choice <span className='colored-word'>From Best Experts</span>  in Middle East</h2>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
      <img src='/etrw2ddb 1.png' alt='' width={100} height={100} />
      <img src='/fklkmfux-1.png' alt='' width={100} height={100}/>
      <img src='/BestDoctorExpertFrame.png' alt='' width={100} height={100}/>
    </div>
   </>
  )
}
