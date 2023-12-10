import { useState } from 'react'
import { Input } from 'antd';
import { Button, Flex } from 'antd';
const { TextArea } = Input;


const Features = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <section id="features-unicode" className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[150px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]">
                
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="wow fadeInUp mx-auto max-w-[800px] text-center" data-wow-delay=".2s">
                            <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">unicode to bijoy converter</h1>
                            <p className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">Helps you convert between Unicode and Bijoy via: unicode to bijoy converter .</p>
                        </div>
                    </div>
                </div>
                <div className='features-unicode'>
                    <div className='responsive-flex'>
                        <div className='flex-item'> <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} /></div>
                        <div className='flex-item'> <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} /></div>
                    </div>
                    <Flex gap="small" wrap="wrap" className='operation'>
                        <Button type="primary">Convert Unicode</Button>
                        <Button>Convert Bijoy </Button>
                    </Flex>
                </div>
            </section>
        </>
    );
};

export default Features;
