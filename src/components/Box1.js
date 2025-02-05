// Box1.js
import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';

function Box1() {
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);

  // مصفوفة الفيديوهات (10 فيديوهات) - مثال
  const videosData = [
    {
      id: '1nXCGOTNyHPaV9S_ppnFCJjaYfMAHejEg',
      thumbnail: 'FreeCourse/video1.jpg',
      alt: 'Video 1',
    },
    {
      id: '1DDkcywVNNkfzCPBpwFLSJjgqiJI2Sg0C',
      thumbnail: 'FreeCourse/video2.jpg',
      alt: 'Video 2',
    },
    {
      id: '1C0Z4RSxobg37j5yj-AbgdbfTB6MsIOGX',
      thumbnail: 'FreeCourse/video3.jpg',
      alt: 'Video 3',
    },
    {
      id: '1bIhjs4hUWywZYeleorpV3p2O1OFvKQiS',
      thumbnail: 'FreeCourse/video4.jpg',
      alt: 'Video 4',
    },
    {
      id: '143wNdvitsGdYMPMKxtjdsJWUhynywHHg',
      thumbnail: 'FreeCourse/video5.jpg',
      alt: 'Video 5',
    },
    {
      id: '1OQa3q7qZMJF5C_xfL9qp74K_kWIF8d7J',
      thumbnail: 'FreeCourse/video6.jpg',
      alt: 'Video 6',
    },
    {
      id: '1FSjlapHB7T1hfBLu2fnRJiJwtykO9gUw',
      thumbnail: 'FreeCourse/video7.jpg',
      alt: 'Video 7',
    },
    {
      id: '1D-lXgU1wrEJvcm2KyWe3v4f91GCIZb7C',
      thumbnail: 'FreeCourse/video8.jpg',
      alt: 'Video 8',
    },
    {
      id: '1XmSlfibX6jlqbEJwGI6hqqnGv_Yi6-BA',
      thumbnail: 'FreeCourse/video9.jpg',
      alt: 'Video 9',
    },
    {
      id: '', // ضع المعرف المناسب إن وجد
      thumbnail: 'FreeCourse/video10.jpg',
      alt: 'Video 10',
    },
  ];

  const handleSelectVideo = (videoId) => {
    setSelectedVideoId(videoId);
    setShowVideoPlayer(true);
  };

  const handleCloseVideoPlayer = () => {
    setShowVideoPlayer(false);
    setSelectedVideoId(null);
  };

  return (
    <>
      <Container
        fluid
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(to right, #434343, #000000)',
          color: '#fff',
          direction: 'rtl',
          marginTop: '10px',
          paddingTop: '20px',
        }}
      >
        {/* عرض الفيديوهات */}
        <Row className="justify-content-center g-3">
          {videosData.map((video, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={3}
              className="d-flex justify-content-center"
              style={{ textAlign: 'center' }}
            >
              <img
                src={video.thumbnail}
                alt={video.alt}
                style={{
                  width: '350px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  border: '2px solid #fff',
                }}
                onClick={() => handleSelectVideo(video.id)}
              />
            </Col>
          ))}
        </Row>

        {/* مودال تشغيل الفيديو */}
        <Modal show={showVideoPlayer} onHide={handleCloseVideoPlayer} centered size="lg">
          <Modal.Header closeButton />
          <Modal.Body>
            {selectedVideoId && (
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  title="Video Preview"
                  src={`https://drive.google.com/file/d/${selectedVideoId}/preview`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                />
                {/* Overlay لتأمين نافذة الفيديو */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '60px',
                    height: '60px',
                    zIndex: 9999,
                    cursor: 'default',
                  }}
                />
              </div>
            )}
          </Modal.Body>
        </Modal>
      </Container>

      {/* إضافة keyframes للانيميشن */}
      <style>
        {`
          @keyframes floatIcon {
            0% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>

      {/* أيقونات واتساب وتيليجرام عائمة في أسفل يمين الصفحة */}
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          zIndex: 9999,
        }}
      >
        {/* أيقونة واتساب */}
        <a
          href="https://wa.me/201062039393"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#25D366',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '30px',
            textDecoration: 'none',
            animation: 'floatIcon 2s ease-in-out infinite',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.15)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <FaWhatsapp />
        </a>

        {/* أيقونة تيليجرام */}
        <a
          href="https://t.me/201062039393"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#0088cc',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '30px',
            textDecoration: 'none',
            animation: 'floatIcon 2.2s ease-in-out infinite',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.15)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <FaTelegram />
        </a>
      </div>
    </>
  );
}

export default Box1;
