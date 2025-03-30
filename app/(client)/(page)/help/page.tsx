import Head from 'next/head';
import Title from '../../components/Title/Title';

export default function HelpPage() {
  const contact = {
    email: "admin@thaily.id.vn",
    tel: "84366063879",
    phone: "0366063879",
    address: "https://maps.app.goo.gl/2UbpxbZHVt75G4KW9",
    location: "Trường Đại học Bách khoa - ĐHQG TP.HCM",
    website: "https://ltw-fe.thaily.id.vn",
    ggmap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0926371280025!2d106.80281137578632!3d10.880558489274598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8a5568c997f%3A0xdeac05f17a166e0c!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIC0gxJBIUUcgVFAuSENN!5e0!3m2!1svi!2s!4v1743352158877!5m2!1svi!2s"
  }
  return (
    <>
      <Title text="Trợ giúp | Help"/>
      <div className="min-h-screen bg-gray-900 p-6 rounded-2xl">
        <div className="max-w-4xl mx-auto bg-gray-800 shadow-md rounded-lg p-6 text-white">
          <h1 className="text-3xl font-bold text-white text-center">Trung tâm trợ giúp</h1>
          <p className="text-gray-300 mt-2 text-center">Chúng tôi ở đây để giúp bạn! Dưới đây là các thông tin quan trọng và tài nguyên hỗ trợ.</p>
          
          <section className="mt-6">
            <h2 className="text-3xl font-semibold text-gray-200 mb-[10px]">Thông tin liên hệ</h2>
            <p className="text-gray-300 text-2xl mb-[5px]">📧 Email: <a href={contact.email} className='hover:font-bold'>{contact.email}</a></p>
            <p className="text-gray-300 text-2xl mb-[5px]">📞 Số điện thoại: <a href={`tel:+${contact.tel}`} className='hover:font-bold'>{contact.phone}</a></p>
            <p className="text-gray-300 text-2xl mb-[5px]">📍 Địa chỉ: <a href={contact.address} target="_blank" rel="noopener noreferrer" className='hover:font-bold'>{contact.location}</a></p>
            <p className="text-gray-300 text-2xl mb-[5px]">🌍 Website: <a href={contact.website} className="text-blue-400 hover:font-bold">{contact.website}</a></p>
          </section>

          <section className="mt-6">
            <h2 className="text-3xl font-semibold text-gray-200">Câu hỏi thường gặp</h2>
            <div className="mt-4 space-y-4">
              <div>
                <p className="font-medium text-gray-200">💡 Làm thế nào để liên hệ hỗ trợ?</p>
                <p className="text-gray-300">Bạn có thể gửi email hoặc gọi số điện thoại trên để được hỗ trợ nhanh chóng.</p>
              </div>
              <div>
                <p className="font-medium text-gray-200">🔐 Tôi cần trợ giúp về tài khoản?</p>
                <p className="text-gray-300">Vui lòng truy cập <a href="/account" className="text-blue-400">trang tài khoản</a> để xem hướng dẫn.</p>
              </div>
              <div>
                <p className="font-medium text-gray-200">💳 Làm thế nào để thanh toán?</p>
                <p className="text-gray-300">Bạn có thể sử dụng thẻ tín dụng, ví điện tử hoặc chuyển khoản ngân hàng.</p>
              </div>
              <div>
                <p className="font-medium text-gray-200">🚀 Làm thế nào để nâng cấp tài khoản?</p>
                <p className="text-gray-300">Truy cập <a href="/pricing" className="text-blue-400">trang giá</a> để xem các gói dịch vụ.</p>
              </div>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-3xl font-semibold text-gray-200">Tài nguyên hữu ích</h2>
            <ul className="list-disc list-inside text-gray-300 mt-3">
              <li><a href="/docs" className="text-blue-400">📘 Hướng dẫn sử dụng</a></li>
              <li><a href="/support" className="text-blue-400">🎯 Trung tâm hỗ trợ</a></li>
              <li><a href="/blog" className="text-blue-400">📝 Blog & Tin tức</a></li>
              <li><a href="/community" className="text-blue-400">👥 Cộng đồng người dùng</a></li>
            </ul>
          </section>

          <section className="mt-6 mb-[50px]">
            <h2 className="text-3xl font-semibold text-gray-200">Liên hệ trực tuyến</h2>
            <p className="text-gray-300">Bạn có thể liên hệ với chúng tôi qua các nền tảng sau:</p>
            <div className="flex space-x-4 mt-3">
              <a href="https://facebook.com" className="text-blue-500">📘 Facebook</a>
              <a href="https://twitter.com" className="text-blue-400">🐦 Twitter</a>
              <a href="https://linkedin.com" className="text-blue-600">💼 LinkedIn</a>
            </div>
          </section>
          <h2 className="text-3xl font-semibold text-gray-200 mb-[20px]">Google Map</h2>
          <iframe src={contact.ggmap} className='w-full' height="450" loading="lazy"></iframe>
        </div>
      </div>
    </>
  );
}
