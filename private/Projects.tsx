import Image from 'next/image'
import React from 'react'

interface Props {}

function Projects(props: Props) {
    const {} = props

    return (
        <section id='Projects' data-scroll-index="1">
        <div className='relative flex justify-center items-center py-20'>
            <div className='max-w-[1200px] text-white w-full h-full'>
                <div className='animate-bounce' data-aos='fade-up'>
                <div className='flex justify-center items-center p-10  rotation-img '>
                    <Image loading='lazy' src={`/Image/Earth-icon.png`} width={300} height={300} alt="logo" />
                </div>
                </div>
                <div className='flex justify-center items-center text-2xl font-bold'>
                    <h3 className='text-primary p-5'>Nextjs là gì và tại sao dùng Nextjs để xây dựng ứng dụng web</h3>
                    
                </div><div className='bar-1 w-10'/>

                <div className='grid md:grid-cols-3 w-full gap-5 '>
                    <div className='flex flex-col justify-start items-center p-5' data-aos='fade-up'>
                        <h2 className='mb-5'>Seo & Webpack</h2>
                        React không tốt cho SEO, bạn cần render ở cả client và server nhưng nó chỉ có thể xử lý phía client.
                        <br/>Nextjs đóng gói tất cả các tiện ích hữu ích trong 1 framework không cần phải cài đặt setup mới.

                    </div>
                    <div className='flex flex-col justify-start items-center p-5' data-aos='fade-up'>
                        <h2 className='mb-5'>Feature</h2>
                        Pre-rendering, cả static generation (SSG) và server-side rendering (SSR)
                        <br/>Tách mã tự động để tải trang nhanh hơn, mỗi page chỉ load những gì cần thiết cho page đó. 
                        <br/>Hỗ trợ refresh page nhanh chóng, Render trang chủ thì những page khác sẽ không được khởi tạo, như vậy trang chủ sẽ được load nhanh cho dù website của bạn có cả 100 page.
                        <br/>Hoàn toàn có thể mở rộng

                    </div>
                    <div className='flex flex-col justify-start items-center p-5' data-aos='fade-up'>
                        <h2 className='mb-5'>Univarsal Access</h2>
                        Nextjs được sử dụng trên hàng nghìn website và trên rất nhiều website lớn trên thế giới. <br/>Vì vậy cộng đồng hỗ trợ lớn sẽ giúp bạn dễ dàng xây dựng ứng dụng cả mình một cách nhanh chóng và đầy đủ

                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Projects
