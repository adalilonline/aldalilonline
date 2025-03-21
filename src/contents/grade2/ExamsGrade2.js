// contents/grade2/ExamsGrade2.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';

function ExamsGrade2() {
  const [examsData, setExamsData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedExam, setSelectedExam] = useState(null);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const res = await fetch(
          'https://raw.githubusercontent.com/adalilonline/dasht/main/dasht/grade2/exams.json'
        );
        if (!res.ok) throw new Error('Failed to fetch exams');
        const data = await res.json();
        setExamsData(data);
      } catch (error) {
        console.error('Error fetching exams:', error);
      }
    };
    fetchExams();
  }, []);

  const handleOpenModal = (exam) => {
    setSelectedExam(exam);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedExam(null);
  };

  return (
    <Container style={{ direction: 'rtl', color: '#fff', marginTop: '40px' }}>
      <h2 className="mb-4" style={{ textAlign: 'center' }}>امتحانات الصف الثاني الثانوي</h2>

      <Row className="gy-4 justify-content-center">
        {examsData.slice().map((exam, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card
              style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
              onClick={() => handleOpenModal(exam)}
            >
              <Card.Img
                variant="top"
                src={exam.thumbnail}
                alt="Exam thumbnail"
                style={{ borderRadius: '10%' }}
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* مودال الامتحان */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton />
        <Modal.Body>
          {selectedExam && (
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                title="Exam Form"
                src={selectedExam.link}
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

export default ExamsGrade2;
