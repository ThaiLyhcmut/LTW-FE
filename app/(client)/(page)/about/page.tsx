


export default function AboutPage() {
  const data = {
    title: "CHUYÊN ÂM NHẠC PHONG CÁCH, HIỆN ĐẠI",
    desc: "Chúng tôi chuyên cung cấp nhiều loại âm nhạc ở nhiều quốc gia, được sáng tác bởi những ca sĩ nổi tiếng và hiện đại.",
    type1: {
      total: "200+",
      desc: "Thương Hiệu"
    },
    type2: {
      total: "2000+",
      desc: "Bản Nhạc Chất Lượng"
    },
    type3: {
      total: "30,000+",
      desc: "Khách Hàng"
    },
    section1: ["https://project3-six-sigma.vercel.app/assets/img/img1.png", "https://project3-six-sigma.vercel.app/assets/img/icon1.svg", "https://project3-six-sigma.vercel.app/assets/img/icon1.svg"],
    section2: ["https://project3-six-sigma.vercel.app/assets/img/partner_1.png", "https://project3-six-sigma.vercel.app/assets/img/partner_2.png", "https://project3-six-sigma.vercel.app/assets/img/partner_3.png", "https://project3-six-sigma.vercel.app/assets/img/partner_4.png", "https://project3-six-sigma.vercel.app/assets/img/partner_5.png"],
    title2: "DANH MỤC NỔI BẬT",
    section3: ["https://project3-six-sigma.vercel.app/assets/img/banner1.jpg", "https://project3-six-sigma.vercel.app/assets/img/banner2.jpg", "https://project3-six-sigma.vercel.app/assets/img/banner3.jpg", "https://project3-six-sigma.vercel.app/assets/img/banner4.jpg"],
    title3: "CẬP NHẬT VỀ ƯU ĐÃI MỚI NHẤT CỦA CHÚNG TÔI"
  } 
  return (
    <>
      <section className="bg-[#1a1a1a] text-white rounded-t-[20px]">
        <div className="container mx-auto flex justify-between items-center flex-wrap md:py-0 py-[16px]">
          <div className="md:w-[48%] w-full ml-[10px]">
            <h1 className="font-black xl:text-[48px] lg:text-[38px] text-[28px] xl:mb-[30px] mb-[20px]" data-aos="fade-up" data-aos-duration="8000" data-aos-delay="800">{data.title}</h1>
            <div className="text-white opacity-80 xl:mb-[50px] lg:mb-[40px] mb-[30px] xl:text-[16px] text-[14px]" data-aos="fade-up" data-aos-duration="8000" data-aos-delay="300">{data.desc}</div>
            <a className="bg-white text-black py-[16px] px-[64px] sm:inline-block block font-medium rounded-[62px] text-center" href="/" data-aos="fade-up" data-aos-duration="8000" data-aos-delay="800">Xem ngay</a>
            <div className="flex sm:flex-nowrap flex-wrap sm:mt-[50px] mt-[30px]" data-aos="fade-up" data-aos-duration="8000" data-aos-delay="600">
              <div className="sm:pr-[32px] sm:mr-[32px] sm:border-r border-gray-500 sm:w-auto w-[50%] sm:text-left text-center">
                <div className="xl:text-[40px] text-[24px] font-bold">{data.type1.total}</div>
                <div className="opacity-80 xl:text-[16px] text-[12px]">{data.type1.desc}</div>
              </div>
              <div className="sm:pr-[32px] sm:mr-[32px] sm:border-r border-gray-500 sm:w-auto w-[50%] sm:text-left text-center">
                <div className="xl:text-[40px] text-[24px] font-bold">{data.type2.total}</div>
                <div className="opacity-80 xl:text-[16px] text-[12px]">{data.type2.desc}</div>
              </div>
              <div className="w-full sm:text-left text-center">
                <div className="xl:text-[40px] text-[24px] font-bold">{data.type3.total}</div>
                <div className="opacity-80 xl:text-[16px] text-[12px]">{data.type3.desc}</div>
              </div>
            </div>
          </div>
          <div className="relative md:w-[48%] w-full">
            <img className="w-full pt-[50px]" src={data.section1[0]} />
            <img className="absolute top-[45%] left-0 w-[56px] sm:block hidden" src={data.section1[1]} />
            <img className="absolute top-[15%] right-0 lg:w-[104px] w-[60px] sm:block hidden" src={data.section1[2]} />
          </div>
        </div>
      </section>
      <section className="section-2 bg-black py-[30px] rounded-b-[20px]">
        <div className="container mx-auto sm:px-0 px-[16px] flex justify-center items-center flex-wrap">
          {
            data.section2.map((item, index) => (
              <div key={index} className="md:mx-[30px] mx-[17px] my-[15px]"><img className="md:h-[32px] h-[22px] w-auto" src={item} alt="" /></div>
            ))
          }
        </div>
      </section>
      <section className="section-5 md:mb-[86px] mb-[40px]">
        <div className="container mx-auto sm:px-0 px-[16px]">
          <div className="bg-[#1A1A1A] md:rounded-[42px] rounded-[20px] md:py-[70px] py-[28px] md:px-[64px] px-[24px]">
            <h2 className="lg:text-[48px] text-[32px] font-bold text-white text-center lg:mb-[60px] mb-[32px]" data-aos="zoom-in" data-aos-delay="150">{data.title2}</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-[20px]">
              <div className="relative truncate rounded-[20px]" data-aos="zoom-in" data-aos-delay="300">
                <a href="/">
                  <h3 className="absolute md:top-[20px] top-[17px] md:left-[36px] left-[24px] font-bold md:text-[36px] text-[24px] text-white"> Đơn Giản</h3>
                  <img className="w-full md:h-[289px] h-[190px] object-cover" src={data.section3[0]} alt="" />
                </a>
              </div>
              <div className="lg:col-span-2 relative truncate rounded-[20px]" data-aos="zoom-in" data-aos-delay="400">
                <a href="/">
                  <h3 className="absolute md:top-[20px] top-[17px] md:left-[36px] left-[24px] font-bold md:text-[36px] text-[24px] text-white"> Lịch Lãm</h3>
                  <img className="w-full md:h-[289px] h-[190px] object-cover" src={data.section3[1]} alt="" />
                </a>
              </div>
              <div className="lg:col-span-2 relative truncate rounded-[20px]" data-aos="zoom-in" data-aos-delay="500">
                <a href="/">
                  <h3 className="absolute md:top-[20px] top-[17px] md:left-[36px] left-[24px] font-bold md:text-[36px] text-[24px] text-white"> Dạ Hội</h3>
                  <img className="w-full md:h-[289px] h-[190px] object-cover" src={data.section3[2]} alt="" />
                </a>
              </div>
              <div className="relative truncate rounded-[20px]" data-aos="zoom-in" data-aos-delay="600">
                <a href="/">
                  <h3 className="absolute md:top-[20px] top-[17px] md:left-[36px] left-[24px] font-bold md:text-[36px] text-[24px] text-white"> Gym</h3>
                  <img className="w-full md:h-[289px] h-[190px] object-cover" src={data.section3[3]} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-[80px] relative">
        <div className="container mx-auto sm:px-0 px-[16px]">
          <div className="bg-[#1A1A1A] rounded-[20px] md:py-[54px] py-[32px] md:px-[37px] px-[24px] flex items-center justify-between flex-wrap">
            <h2 className="text-white xl:text-[40px] text-[32px] font-bold xl:w-[550px] lg:w-[450px] w-full lg:mr-[20px] lg:mb-[0px] mb-[20px]">{data.title3}</h2>
            <form className="lg:w-[350px] w-full" action="">
              <div className="relative">
                <i className="fa-regular fa-envelope opacity-40 absolute md:top-[16px] top-[13px] left-[18px] text-white"></i>
                <input className="md:h-[48px] h-[42px] w-full rounded-[62px] pl-[52px] pr-[10px] outline-none md:text-[16px] text-[14px] bg-[#333] text-white placeholder-gray-400" type="email" placeholder="Nhập email của bạn..." name="" />
              </div>
              <button className="bg-white rounded-[62px] text-black font-medium text-[16px] md:h-[44px] h-[42px] w-full md:mt-[14px] mt-[12px]" type="submit">Đăng Ký Nhận Tin</button>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}