import Aboutus from "@/components/homePage/aboutus";
import Accordian from "@/components/homePage/accordian";
import Banner from "@/components/homePage/banner";
import Cards from "@/components/homePage/cards";
import HeroSection from "@/components/homePage/heroSection";
import Partners from "@/components/homePage/partners";
import Boardcast from '@/components/homePage/boardcast';
import Card1 from "@/components/sub_cards/Card1";
// import Test_comp from "@/components/sub_cards/test"

export default function Home() {
  return (
    <main className=" min-h-screen bg-gradient-to-r  from-blue-50 to-pink-50  ">
      <Boardcast/>
      <HeroSection /> 
      <Aboutus />
      <Cards />
      {/* <Test_comp/> */}
      <Card1 />
      <Banner/>
      <Partners/>
      <Accordian/>
    </main>
  );
}
