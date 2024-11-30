"use client";

import { Anchor, Layout, Row, Typography, Card, Col, Avatar } from "antd";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

export default function Home() {

  // Anchor Items Data
  const anchorItems = [
    { key: 'home', href: '#home', title: 'Home' },
    { key: 'services', href: '#services', title: 'Services' },
    { key: 'about', href: '#about', title: 'About' },
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
            title: <div className="font-inter">{title}</div>,
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
          className="flex flex-col items-center justify-center text-center py-10"
          style={{ width: '100vw', minHeight: '100vh' }}
        >
          <Title level={2}>Our Services</Title>
          <Row gutter={[16, 16]} className="w-4/5 mt-8">
            {services.map((service, index) => (
              <Col key={index} xs={24} sm={12} md={8}>
                <Card hoverable className="h-full">
                  <Title level={4}>{service.title}</Title>
                  <Paragraph>{service.description}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* About Section */}
        <div
          id="about"
          className="flex flex-col items-center justify-center py-10"
          style={{ width: '100vw', minHeight: '100vh' }}
        >
          <Title level={2}>About Us</Title>
          <Row className="w-4/5 mt-8 flex items-center">
            <Col xs={24} md={8} className="flex justify-center">
              <Avatar size={200} src="/placeholder-image.jpg" />
            </Col>
            <Col xs={24} md={16} className="mt-5 md:mt-0">
              <Paragraph>
                We are a passionate team dedicated to delivering high-quality digital solutions. Our mission is to help businesses establish a strong online presence and achieve their digital goals through innovative strategies and cutting-edge technology.
              </Paragraph>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}
