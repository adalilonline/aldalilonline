import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';

function ThirdYear() {
  // ------------------ حالات البيانات المجلوية (videos, files, homework, exams) ------------------
  const [videosData, setVideosData] = useState([]);
  const [filesData, setFilesData] = useState([]);
  const [homeworkData, setHomeworkData] = useState([]);
  const [examsData, setExamsData] = useState([]);

  // ------------------ (1) الفيديوهات ------------------
  const [showVideosModal, setShowVideosModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);

  const handleOpenVideosModal = () => setShowVideosModal(true);
  const handleCloseVideosModal = () => setShowVideosModal(false);

  const handleSelectVideo = (video) => {
    setSelectedVideo(video);
    setShowVideoPlayer(true);
  };
  const handleCloseVideoPlayer = () => {
    setShowVideoPlayer(false);
    setSelectedVideo(null);
  };

  // ------------------ (2) الملفات ------------------
  const [showFilesModal, setShowFilesModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showFileViewer, setShowFileViewer] = useState(false);

  const handleOpenFilesModal = () => setShowFilesModal(true);
  const handleCloseFilesModal = () => setShowFilesModal(false);

  const handleSelectFile = (file) => {
    setSelectedFile(file);
    setShowFileViewer(true);
  };
  const handleCloseFileViewer = () => {
    setShowFileViewer(false);
    setSelectedFile(null);
  };

  // ------------------ (3) الواجبات (homework) ------------------
  const [showHomeworkModal, setShowHomeworkModal] = useState(false);
  const [selectedHomework, setSelectedHomework] = useState(null);
  const [showHomeworkViewer, setShowHomeworkViewer] = useState(false);

  const handleOpenHomeworkModal = () => setShowHomeworkModal(true);
  const handleCloseHomeworkModal = () => setShowHomeworkModal(false);

  const handleSelectHomework = (hw) => {
    setSelectedHomework(hw);
    setShowHomeworkViewer(true);
  };
  const handleCloseHomeworkViewer = () => {
    setShowHomeworkViewer(false);
    setSelectedHomework(null);
  };

  // ------------------ (4) الامتحانات (exams) ------------------
  const [showExamsModal, setShowExamsModal] = useState(false);
  const [selectedExam, setSelectedExam] = useState(null);
  const [showExamsViewer, setShowExamsViewer] = useState(false);

  const handleOpenExamsModal = () => setShowExamsModal(true);
  const handleCloseExamsModal = () => setShowExamsModal(false);

  const handleSelectExam = (exam) => {
    setSelectedExam(exam);
    setShowExamsViewer(true);
  };
  const handleCloseExamsViewer = () => {
    setShowExamsViewer(false);
    setSelectedExam(null);
  };

  // ------------------ (Fetch) جلب البيانات من GitHub للصف الثالث ------------------
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

    const fetchHomework = async () => {
      try {
        const res = await fetch(
          'https://raw.githubusercontent.com/adalilonline/dasht/main/dasht/grade3/homework.json'
        );
        if (!res.ok) throw new Error('Failed to fetch homework');
        const data = await res.json();
        setHomeworkData(data);
      } catch (error) {
        console.error('Error fetching homework:', error);
      }
    };

    const fetchExams = async () => {
      try {
        const res = await fetch(
          'https://raw.githubusercontent.com/adalilonline/dasht/main/dasht/grade3/exams.json'
        );
        if (!res.ok) throw new Error('Failed to fetch exams');
        const data = await res.json();
        setExamsData(data);
      } catch (error) {
        console.error('Error fetching exams:', error);
      }
    };

    // استدعاء الدوال الأربع
    fetchVideos();
    fetchFiles();
    fetchHomework();
    fetchExams();
  }, []);

  return (
    <Container style={{ direction: 'rtl', textAlign: 'right', color: '#fff' }} className="my-4">
      <h2 className="mb-4" style={{ textAlign: 'center', marginTop: '60px' }}>
        الصف الثالث الثانوي
      </h2>

      {/* الصف الأول: فيديوهات + ملفات */}
      <Row className="gy-4 justify-content-center">
        {/* بوكس الفيديوهات */}
        <Col xs={12} sm={6} md={5} lg={4}>
          <Card
            style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
            onClick={handleOpenVideosModal}
          >
            <Card.Img
              variant="top"
              src="ContentPages/videos.png"
              alt="بوكس الفيديوهات"
              style={{ borderRadius: '10%', background: 'transparent' }}
            />
          </Card>
        </Col>

        {/* بوكس الملفات */}
        <Col xs={12} sm={6} md={5} lg={4}>
          <Card
            style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
            onClick={handleOpenFilesModal}
          >
            <Card.Img
              variant="top"
              src="ContentPages/files.png"
              alt="بوكس الملفات"
              style={{ borderRadius: '10%', background: 'transparent' }}
            />
          </Card>
        </Col>
      </Row>

      {/* الصف الثاني: الواجبات + الامتحانات */}
      <Row className="gy-4 justify-content-center" style={{ marginTop: '20px' }}>
        {/* بوكس الواجبات */}
        <Col xs={12} sm={6} md={5} lg={4}>
          <Card
            style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
            onClick={handleOpenHomeworkModal}
          >
            <Card.Img
              variant="top"
              src="ContentPages/homework.png"
              alt="بوكس الواجبات"
              style={{ borderRadius: '10%', background: 'transparent' }}
            />
          </Card>
        </Col>

        {/* بوكس الامتحانات */}
        <Col xs={12} sm={6} md={5} lg={4}>
          <Card
            style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
            onClick={handleOpenExamsModal}
          >
            <Card.Img
              variant="top"
              src="ContentPages/exams.png"
              alt="بوكس الامتحانات"
              style={{ borderRadius: '10%', background: 'transparent' }}
            />
          </Card>
        </Col>
      </Row>

      {/* مودال (videos) */}
      <Modal show={showVideosModal} onHide={handleCloseVideosModal} centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title>الفيديوهات (سنة ثالثة)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row
            className="d-flex flex-row-reverse flex-wrap justify-content-center"
            style={{ direction: 'ltr', gap: '10px' }}
          >
            {videosData
              .slice()
              .map((video, index) => (
                <Col
                  key={index}
                  xs={12}
                  sm="auto"
                  style={{ cursor: 'pointer' }}
                  className="d-flex justify-content-center"
                  onClick={() => handleSelectVideo(video)}
                >
                  <Card style={{ width: '250px', border: 'none' }}>
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
        </Modal.Body>
      </Modal>

      {/* مودال تشغيل الفيديو */}
      <Modal show={showVideoPlayer} onHide={handleCloseVideoPlayer} centered size="lg">
        <Modal.Header closeButton />
        <Modal.Body>
          {selectedVideo && (
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                title="Video Preview"
                src={`https://drive.google.com/file/d/${selectedVideo.id}/preview`}
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
              {/* Overlay لمنع الضغط على أيقونة النافذة الخارجية */}
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

      {/* مودال (files) */}
      <Modal show={showFilesModal} onHide={handleCloseFilesModal} centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title>الملفات (سنة ثالثة)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row
            className="d-flex flex-row-reverse flex-wrap justify-content-center"
            style={{ direction: 'ltr', gap: '10px' }}
          >
            {filesData
              .slice()
              .reverse()
              .map((file, index) => (
                <Col
                  key={index}
                  xs={12}
                  sm="auto"
                  style={{ cursor: 'pointer' }}
                  className="d-flex justify-content-center"
                  onClick={() => handleSelectFile(file)}
                >
                  <Card style={{ width: '250px', border: 'none' }}>
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
        </Modal.Body>
      </Modal>

      {/* مودال عرض الملف المختار */}
      <Modal show={showFileViewer} onHide={handleCloseFileViewer} centered size="lg">
        <Modal.Header closeButton />
        <Modal.Body>
          {selectedFile && (
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                title="File Preview"
                src={`https://drive.google.com/file/d/${selectedFile.id}/preview`}
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

      {/* مودال (homework) */}
      <Modal show={showHomeworkModal} onHide={handleCloseHomeworkModal} centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title>الواجبات (سنة ثالثة)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row
            className="d-flex flex-row-reverse flex-wrap justify-content-center"
            style={{ direction: 'ltr', gap: '10px' }}
          >
            {homeworkData
              .slice()
              .reverse()
              .map((hw, index) => (
                <Col
                  key={index}
                  xs={12}
                  sm="auto"
                  style={{ cursor: 'pointer' }}
                  className="d-flex justify-content-center"
                  onClick={() => handleSelectHomework(hw)}
                >
                  <Card style={{ width: '250px', border: 'none' }}>
                    <Card.Img
                      variant="top"
                      src={hw.thumbnail}
                      alt="Homework thumbnail"
                      style={{ borderRadius: '10%' }}
                    />
                  </Card>
                </Col>
              ))}
          </Row>
        </Modal.Body>
      </Modal>

      {/* مودال عرض الواجب المختار */}
      <Modal show={showHomeworkViewer} onHide={handleCloseHomeworkViewer} centered size="lg">
        <Modal.Header closeButton />
        <Modal.Body>
          {selectedHomework && (
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                title="Homework Preview"
                src={`https://drive.google.com/file/d/${selectedHomework.id}/preview`}
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

      {/* مودال (exams) */}
      <Modal show={showExamsModal} onHide={handleCloseExamsModal} centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title>الامتحانات (سنة ثالثة)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row
            className="d-flex flex-row-reverse flex-wrap justify-content-center"
            style={{ direction: 'ltr', gap: '10px' }}
          >
            {examsData
              .slice()
              .reverse()
              .map((exam, index) => (
                <Col
                  key={index}
                  xs={12}
                  sm="auto"
                  style={{ cursor: 'pointer' }}
                  className="d-flex justify-content-center"
                  onClick={() => handleSelectExam(exam)}
                >
                  <Card style={{ width: '250px', border: 'none' }}>
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
        </Modal.Body>
      </Modal>

      {/* مودال عرض الامتحان (Google Forms) */}
      <Modal show={showExamsViewer} onHide={handleCloseExamsViewer} centered size="lg">
        <Modal.Header closeButton />
        <Modal.Body>
          {selectedExam && (
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                title="Exam Form"
                src={selectedExam.link}
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

export default ThirdYear;
