// contents/grade3/FilesGrade3.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';

function FilesGrade3() {
  const [filesData, setFilesData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await fetch(
          'https://raw.githubusercontent.com/adalilonline/dasht/main/dasht/grade3/files.json'
        );
        if (!res.ok) throw new Error('Failed to fetch files');
        const data = await res.json();
        setFilesData(data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };
    fetchFiles();
  }, []);

  const handleOpenModal = (file) => {
    setSelectedFile(file);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFile(null);
  };

  return (
    <Container style={{ direction: 'rtl', color: '#fff', marginTop: '40px' }}>
      <h2 className="mb-4" style={{ textAlign: 'center' }}>ملفات الصف الثالث الثانوي</h2>

      <Row className="gy-4 justify-content-center">
        {filesData.slice().map((file, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card
              style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
              onClick={() => handleOpenModal(file)}
            >
              <Card.Img
                variant="top"
                src={file.thumbnail}
                alt="File thumbnail"
                style={{ borderRadius: '10%' }}
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* مودال الملف */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton />
        <Modal.Body>
          {selectedFile && (
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                title="File Preview"
                src={`https://drive.google.com/file/d/${selectedFile.id}/preview`}
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

export default FilesGrade3;
