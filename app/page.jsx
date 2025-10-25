import About_Home from "@/component/Home/About_Home";
import CTA_Home from "@/component/Home/CTA_Home";
import FAQs_Home from "@/component/Home/FAQs_Home";
import Gallery_Home from "@/component/Home/Gallery_Home";
import Homepage_Hero from "@/component/Home/Homepage_Hero";
import MovingStripe_Home from "@/component/Home/MovingStripe_Home";
import Process_Home from "@/component/Home/Process_Home";
import Service_Home from "@/component/Home/Service_Home";
import Testimonial_Home from "@/component/Home/Testimonial_Home";
import Value_Home from "@/component/Home/Value_Home"
  
export default function Home() {
  return (
    <div>
      <Homepage_Hero />
      <About_Home />
      <Value_Home />
      <Service_Home />
      <Process_Home />
      <Gallery_Home />
      <Testimonial_Home />
      <MovingStripe_Home />
      <FAQs_Home />
      <CTA_Home />
    </div>
  );
}
