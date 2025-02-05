// FirstYear.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';

function FirstYear() {
  // حالات البيانات المجلوبة (videosData, filesData, homeworkData, examsData)
  const [videosData, setVideosData] = useState([]);
  const [filesData, setFilesData] = useState([]);
  const [homeworkData, setHomeworkData] = useState([]);
  const [examsData, setExamsData] = useState([]);

  // حالات واجهة الفيديوهات
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

  // حالات واجهة الملفات
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

  // حالات واجهة الواجبات
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

  // حالات واجهة الامتحانات
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

  // جلب بيانات الصف الأول من GitHub
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          'https://raw.githubusercontent.com/adalilonline/dasht/main/dasht/grade1/videos.json'
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
          'https://raw.githubusercontent.com/adalilonline/dasht/main/dasht/grade1/files.json'
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
          'https://raw.githubusercontent.com/adalilonline/dasht/main/dasht/grade1/homework.json'
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
          'https://raw.githubusercontent.com/adalilonline/dasht/main/dasht/grade1/exams.json'
        );
        if (!res.ok) throw new Error('Failed to fetch exams');
        const data = await res.json();
        setExamsData(data);
      } catch (error) {
        console.error('Error fetching exams:', error);
      }
    };

    // استدعاء جميع الدوال
    fetchVideos();
    fetchFiles();
    fetchHomework();
    fetchExams();
  }, []);

  return (
    <>

      <Container style={{ direction: 'rtl', textAlign: 'right', color: '#fff' }} className="my-4">
        <h2 className="mb-4" style={{ textAlign: 'center', marginTop: '60px' }}>
          الصف الأول الثانوي
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
                style={{ borderRadius: '10%', background: 'transparent', height: '255px' }}
              />
            </Card>
          </Col>
        </Row>

        {/* -------------------------------------------
          مودال عرض الفيديوهات
       ------------------------------------------- */}
        <Modal show={showVideosModal} onHide={handleCloseVideosModal} centered size="xl">
          <Modal.Header closeButton>
            <Modal.Title>الفيديوهات</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row
              className="d-flex flex-row-reverse flex-wrap justify-content-center"
              style={{ direction: 'ltr', gap: '10px' }}
            >
              {videosData
                .slice()
                .reverse() // بحيث الأحدث يظهر أولًا
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

        {/* مودال تشغيل الفيديو المختار */}
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

        {/* -------------------------------------------
          مودال عرض الملفات
       ------------------------------------------- */}
        <Modal show={showFilesModal} onHide={handleCloseFilesModal} centered size="xl">
          <Modal.Header closeButton>
            <Modal.Title>الملفات</Modal.Title>
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

        {/* -------------------------------------------
          مودال عرض الواجبات
       ------------------------------------------- */}
        <Modal show={showHomeworkModal} onHide={handleCloseHomeworkModal} centered size="xl">
          <Modal.Header closeButton>
            <Modal.Title>الواجبات</Modal.Title>
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

        {/* -------------------------------------------
          مودال عرض الامتحانات
       ------------------------------------------- */}
        <Modal show={showExamsModal} onHide={handleCloseExamsModal} centered size="xl">
          <Modal.Header closeButton>
            <Modal.Title>الامتحانات</Modal.Title>
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

        {/* مودال عرض الامتحان (لو كان Google Form) */}
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

export default FirstYear;
