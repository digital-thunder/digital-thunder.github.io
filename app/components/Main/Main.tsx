"use client";

import React from "react";
import { Anchor, Layout, Row, Typography, Card, Col, Avatar } from "antd";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

export const Main: React.FC = () => {
    // Anchor Items Data
    const anchorItems = [
        { key: 'home', href: '#home', title: 'Home' },
        { key: 'services', href: '#services', title: 'Services' },
        { key: 'about', href: '#about', title: 'About' },
        { key: 'contact', href: '#contact', title: 'Contact' },
    ];

    // Sample services data
    const services = [
        { title: 'Web Development', description: 'Building responsive and dynamic websites.' },
        { title: 'Consulting', description: 'Expert guidance for your digital strategy.' },
        { title: 'SEO Optimization', description: 'Improving your site’s visibility on search engines.' },
    ];

    return (
        <Layout
            className="min-h-screen bg-cover bg-center"
            style={{ backgroundImage: 'url("/thunder-svgrepo-com.svg")' }}
        >
            <Row className="w-full justify-center items-center p-5">
                <Anchor
                    direction="horizontal"
                    className="mt-10"
                    items={anchorItems.map(({ key, href, title }) => ({
                        key,
                        href,
                        title: <div className="font-['Roboto']">{title}</div>,
                    }))}
                />
            </Row>

            <Content>
                {/* Home Section */}
                <div
                id="home"
                className="flex flex-col justify-center items-center text-center"
                style={{ width: '100vw', height: '100vh' }}
                >
                <Typography>
                    <Title level={2}>Empowering Your Digital Presence</Title>
                    <Paragraph>
                    From consulting calls to full-fledged development teams, we offer a range of services to elevate your digital impression.
                    </Paragraph>
                </Typography>
                </div>

                {/* Services Section */}
                <div
                    id="services"
                    className="flex flex-col items-center justify-center text-center py-10 font-['Roboto']"
                    style={{ width: '100vw', minHeight: '100vh' }}
                >
                    <Title className="font-['Roboto']" level={2}>Our Services</Title>
                    <Row gutter={[16, 16]} className="w-4/5 mt-8">
                        {services.map((service, index) => (
                            <Col key={index} xs={24} sm={12} md={8}>
                                <Card hoverable className="h-full shadow bg-zinc-900 hover:border-[#e2eb34]">
                                    <Title className="font-['Roboto']" level={4}>{service.title}</Title>
                                    <Paragraph className="font-['Roboto']">{service.description}</Paragraph>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>

                {/* About Section */}
                <div
                    id="about"
                    className="flex flex-col items-center justify-center py-10 font-['Roboto']"
                    style={{ width: '100vw', minHeight: '100vh' }}
                >
                    <Title className="font-['Roboto']" level={2}>About Us</Title>
                    <Row className="w-4/5 mt-8 flex items-center">
                        <Col xs={24} md={8} className="flex justify-center">
                            <Avatar size={200} src="/placeholder-image.jpg" />
                        </Col>
                        <Col xs={24} md={16} className="mt-5 md:mt-0 font-['Roboto']">
                            <Paragraph className="font-['Roboto']">
                                We are a passionate team dedicated to delivering high-quality digital solutions. Our mission is to help businesses establish a strong online presence and achieve their digital goals through innovative strategies and cutting-edge technology.
                            </Paragraph>
                        </Col>
                    </Row>
                </div>

                <div id="contact" className="container mx-auto w-[50%]">
                                    <div className="text-center">
                                        <h1 className="my-3 text-3xl font-semibold text-gray-100">
                                            Contact Us
                                        </h1>
                                        <p className="text-gray-400 dark:text-gray-400">
                                            Fill up the form below to send us a message.
                                        </p>
                                    </div>
                                    <div className="m-7">
                                        <form action="https://api.web3forms.com/submit" method="POST" id="form">
                                            <input type="hidden" name="access_key" value="7a226894-fe26-4c55-bbd1-519a9f035f84" />
                                            <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                                            <input type="checkbox" name="botcheck" id="" style={{ display: 'none' }} />

                                            <div className="mb-6">
                                                <label key="name" className="block mb-2 text-sm text-gray-400">Full Name</label>
                                                <input type="text" name="name" id="name" placeholder="John Doe" required className="w-full px-3 py-2 h-12 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none" />
                                            </div>
                                            <div className="mb-6">
                                                <label key="email" className="block mb-2 text-sm text-gray-400">Email Address</label>
                                                <input type="email" name="email" id="email" placeholder="you@company.com" required className="w-full px-3 py-2 h-12 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none" />
                                            </div>
                                            <div className="mb-6">
                                                <label key="phone" className="block mb-2 text-sm text-gray-400">Phone Number</label>
                                                <input type="text" name="phone" id="phone" placeholder="+1 (555) 1234-567" required className="w-full px-3 py-2 h-12 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none" />
                                            </div>
                                            <div className="mb-6">
                                                <label key="message" className="block mb-2 text-sm text-gray-400">Your Message</label>

                                                <textarea rows={5} name="message" id="message" placeholder="Your Message" className="w-full px-3 py-2 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none" required></textarea>
                                            </div>
                                            <div className="mb-6">
                                                <button type="submit" className="w-full bg-[#e2eb34] inline-block text-black no-underline hover:text-indigo-100 py-4 px-4 rounded-sm focus:outline-none">
                                                    Send Message
                                                </button>
                                            </div>
                                            <p className="text-base text-center text-gray-400" id="result"></p>
                                        </form>
                                    </div>
                            </div>

            </Content>
        </Layout>
    )
}