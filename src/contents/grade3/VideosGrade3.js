import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';

function VideosGrade3() {
  const [videosData, setVideosData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          'https://raw.githubusercontent.com/adalilonline/dasht/main/dasht/grade3/videos.json'
        );
        if (!res.ok) throw new Error('Failed to fetch videos');
        const data = await res.json();
        setVideosData(data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
    fetchVideos();
  }, []);

  const handleOpenModal = (video) => {
    setSelectedVideo(video);
    setShowModal(true);
    setIsFullScreen(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedVideo(null);
    setIsFullScreen(false);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <Container style={{ direction: 'rtl', color: '#fff', marginTop: '40px' }}>
      <h2 className="mb-4" style={{ textAlign: 'center' }}>فيديوهات الصف الثالث الثانوي</h2>

      <Row className="gy-4 justify-content-center">
        {videosData.slice().map((video, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card
              style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
              onClick={() => handleOpenModal(video)}
            >
              <Card.Img
                variant="top"
                src={video.thumbnail}
                alt="Video thumbnail"
                style={{ borderRadius: '10%' }}
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* مودال الفيديو */}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal} 
        centered 
        size={isFullScreen ? "xl" : "lg"}
        fullscreen={isFullScreen}
        className={isFullScreen ? "fullscreen-modal" : ""}
      >
        <Modal.Header closeButton>
          {selectedVideo && (
            <button
              onClick={toggleFullScreen}
              className="btn"
              style={{
                border: '1px solid rgba(0,0,0,0.1)',
                background: 'rgba(255,255,255,0.9)',
                fontSize: '1.2rem',
                position: 'absolute',
                left: '15px',
                top: '10px',
                zIndex: 9999,
                padding: '5px 10px',
                borderRadius: '4px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              title={isFullScreen ? "إغلاق العرض الكامل" : "عرض كامل الشاشة"}
            >
              {isFullScreen ? (
                <i className="fas fa-compress" style={{ color: '#6e6e6e' }}></i>
              ) : (
                <i className="fas fa-expand" style={{ color: '#000000' }}></i>
              )}
            </button>
          )}
        </Modal.Header>
        <Modal.Body style={{ padding: isFullScreen ? '0' : undefined }}>
          {selectedVideo && (
            <div style={{ 
              position: 'relative', 
              paddingBottom: isFullScreen ? '95vh' : '56.25%', 
              height: 0 
            }}>
              <iframe
                title="Video Preview"
                src={`https://drive.google.com/file/d/${selectedVideo.id}/preview`}
                frameBorder="0"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              />
              {/* Overlay */}
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
  );
}

export default VideosGrade3;
