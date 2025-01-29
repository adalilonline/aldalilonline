import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

// رابط جلب بيانات الإعلان من GitHub
const advertisment_URL =
  'https://raw.githubusercontent.com/adalilonline/dasht/main/dasht/advertisment/advertisment.json';

function Starting() {
  // ===================== (A) الإعلان (advertisment) =====================
  const [adData, setAdData] = useState([]);
  const [showAdModal, setShowAdModal] = useState(false);

  // جلب بيانات الإعلان من GitHub
  useEffect(() => {
    async function fetchAd() {
      try {
        const res = await fetch(advertisment_URL);
        if (!res.ok) throw new Error('Failed to fetch advertisment data');
        const data = await res.json();
        setAdData(data);
      } catch (err) {
        console.error('Error fetching advertisment:', err);
      }
    }
    fetchAd();
  }, []);

  // عند تغيّر adData، إذا وُجد عنصر واحد على الأقل => نظهر المودال
  useEffect(() => {
    if (adData && adData.length > 0) {
      setShowAdModal(true);
    }
  }, [adData]);

  // ===================== بوكس 1: فيديوهات فرنساوي =====================
  const [showVideosModal, setShowVideosModal] = useState(false);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const handleOpenVideosModal = () => setShowVideosModal(true);
  const handleCloseVideosModal = () => setShowVideosModal(false);

  // اختيار فيديو في بوكس1 => يفتح مودال تشغيل الفيديو
  const handleSelectVideo = (videoId) => {
    setSelectedVideoId(videoId);
    setShowVideoPlayer(true);
  };
  const handleCloseVideoPlayer = () => {
    setShowVideoPlayer(false);
    setSelectedVideoId(null);
  };

  // ===================== بوكس 2 =====================
  const [showBox2Modal, setShowBox2Modal] = useState(false);
  const [showBox2SubModal, setShowBox2SubModal] = useState(false);
  const [showBox2Player, setShowBox2Player] = useState(false);
  const [box2PlayerId, setBox2PlayerId] = useState(null);

  const handleOpenBox2Modal = () => setShowBox2Modal(true);
  const handleCloseBox2Modal = () => setShowBox2Modal(false);

  const handleOpenBox2SubModal = () => setShowBox2SubModal(true);
  const handleCloseBox2SubModal = () => setShowBox2SubModal(false);

  const handleOpenBox2Player = (driveId) => {
    setBox2PlayerId(driveId);
    setShowBox2Player(true);
  };
  const handleCloseBox2Player = () => {
    setBox2PlayerId(null);
    setShowBox2Player(false);
  };

  // ===================== بوكس 3 =====================
  const [showBox3Modal, setShowBox3Modal] = useState(false);
  const [showBox3SubModal, setShowBox3SubModal] = useState(false);
  const [showBox3Player, setShowBox3Player] = useState(false);
  const [box3PlayerId, setBox3PlayerId] = useState(null);

  const handleOpenBox3Modal = () => setShowBox3Modal(true);
  const handleCloseBox3Modal = () => setShowBox3Modal(false);

  const handleOpenBox3SubModal = () => setShowBox3SubModal(true);
  const handleCloseBox3SubModal = () => setShowBox3SubModal(false);

  const handleOpenBox3Player = (driveId) => {
    setBox3PlayerId(driveId);
    setShowBox3Player(true);
  };
  const handleCloseBox3Player = () => {
    setBox3PlayerId(null);
    setShowBox3Player(false);
  };

  // ===================== بوكس 4 =====================
  const [showBox4Modal, setShowBox4Modal] = useState(false);
  const [showBox4SubModal, setShowBox4SubModal] = useState(false);
  const [showBox4Player, setShowBox4Player] = useState(false);
  const [box4PlayerId, setBox4PlayerId] = useState(null);

  const handleOpenBox4Modal = () => setShowBox4Modal(true);
  const handleCloseBox4Modal = () => setShowBox4Modal(false);

  const handleOpenBox4SubModal = () => setShowBox4SubModal(true);
  const handleCloseBox4SubModal = () => setShowBox4SubModal(false);

  const handleOpenBox4Player = (driveId) => {
    setBox4PlayerId(driveId);
    setShowBox4Player(true);
  };
  const handleCloseBox4Player = () => {
    setBox4PlayerId(null);
    setShowBox4Player(false);
  };

  // ---------------------------------------------------------------------
  // (1) محتوى "كيفية الاشتراك"
  // ---------------------------------------------------------------------
  const renderSubscriptionInstructions = () => {
    return (
      <div
        style={{
          marginTop: '20px',
          backgroundColor: '#222',
          padding: '15px',
          borderRadius: '10px',
        }}
      >
        <h5 style={{ marginBottom: '10px', textAlign: 'center', color: '#fff' }}>
          : كيفية الاشتراك
        </h5>
        <div style={{ textAlign: 'right', direction: 'rtl' }}>
          <ol style={{ paddingRight: '20px', color: '#fff' }}>
            <li>قم بالدفع عن طريق فوادفون كاش على الرقم الاتي ( رقم التحويل : 01027453008 )</li>
            <li>قم بارسال صورة التحويل على رقم الواتساب 01062039393</li>
            <li>
              ثم ارسل مع صورة التحويل بياناتك ( اسمك , العام الدراسي , المدرسة , رقم للتواصل )
            </li>
            <li>
              بعد ارسال هذه البيانات سنرسل لك اسم المستخدم وكلمة السر الخاصة بك لتتمكن من
              الدخول والاستفادة بالمنصة الخاصة بنا
            </li>
          </ol>
          <p style={{ marginTop: '10px', color: '#fff' }}>
            اذا كنت مشترك بالفعل قم بتسجيل الدخول من هنا{' '}
            <a href="/login" style={{ color: '#ff5722' }}>
              تسجيل الدخول
            </a>
          </p>
        </div>
      </div>
    );
  };

  // ---------------------------------------------------------------------
  // (2) تصميم "صف بصورتين" (الأولى clickable, الثانية ثابتة) + تعليمات
  // ---------------------------------------------------------------------
  const renderTwoImagesWithInstructions = ({ onClickFirstImage, clickableImg, staticImg }) => {
    return (
      <>
        <Row className="justify-content-center">
          {/* الصورة الأولى (اليسرى) قابلة للضغط */}
          <Col xs={12} md={6} style={{ textAlign: 'center' }}>
            <img
              src={clickableImg}
              alt="Clickable"
              style={{
                width: '100%',
                border: '2px solid #fff',
                borderRadius: '15px',
                cursor: 'pointer',
              }}
              onClick={onClickFirstImage}
            />
          </Col>

          {/* الصورة الثانية (اليمنى) ثابتة */}
          <Col xs={12} md={6} style={{ textAlign: 'center' }}>
            <img
              src={staticImg}
              alt="Static"
              style={{
                width: '100%',
                border: '2px solid #fff',
                borderRadius: '15px',
              }}
            />
          </Col>
        </Row>

        {renderSubscriptionInstructions()}
      </>
    );
  };

  // ---------------------------------------------------------------------
  // (3) زرّا "فيديو" و"ملف" مع معرفات مختلفة لكل بوكس
  // ---------------------------------------------------------------------
  const renderVideoFileButtons = (onSelectDriveId, { videoId, fileId }) => {
    return (
      <div style={{ textAlign: 'center' }}>
        <p>اختر أحد الخيارين:</p>
        <Button
          variant="primary"
          style={{ margin: '10px' }}
          onClick={() => onSelectDriveId(videoId)}
        >
          فيديو
        </Button>
        <Button
          variant="success"
          style={{ margin: '10px' }}
          onClick={() => onSelectDriveId(fileId)}
        >
          ملف
        </Button>
      </div>
    );
  };

  // ---------------------------------------------------------------------
  // (4) مودال iframe (فيديو/ملف) + تشويش
  // ---------------------------------------------------------------------
  const renderIframeModal = (show, onClose, driveId) => {
    return (
      <Modal show={show} onHide={onClose} centered size="lg">
        <Modal.Header closeButton />
        <Modal.Body>
          {driveId && (
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                title="Drive Preview"
                src={`https://drive.google.com/file/d/${driveId}/preview`}
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
              {/* Overlay تشويش لمنع الضغط على أيقونة النافذة الخارجية */}
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
    );
  };

  return (
    <>
      {/* ============ مودال إعلان (إن وجد عناصر في advertisment.json) ============ */}
      <Modal show={showAdModal} onHide={() => setShowAdModal(false)} centered size="md">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: 'center' }}>
          {/* اذا كان adData[0] موجودًا، نعرض صورته */}
          {adData && adData[0] && (
            <img
              src={adData[0].thumbnail}
              alt="إعلان"
              style={{ maxWidth: '100%', borderRadius: '10px' }}
            />
          )}
        </Modal.Body>
      </Modal>

      <Container
        fluid
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(to right, #434343, #000000)',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          direction: 'rtl',
          marginTop: '90px',
        }}
      >
        {/* الصف الأول: بوكس1 (فيديوهات) + بوكس2 */}
        <Row className="gy-4 justify-content-center">
          {/* بوكس الأول */}
          <Col xs={12} sm={6} md={5} lg={4} style={{ textAlign: 'center' }}>
            <img
              src="Boxes/box1.png"
              alt="box1"
              style={{
                width: '90%',
                border: '2px solid #fff',
                borderRadius: '15px',
                cursor: 'pointer',
              }}
              onClick={handleOpenVideosModal}
            />
          </Col>

          {/* بوكس الثاني */}
          <Col xs={12} sm={6} md={5} lg={4} style={{ textAlign: 'center' }}>
            <img
              src="Boxes/box2.jpg"
              alt="box2"
              style={{
                width: '90%',
                border: '2px solid #fff',
                borderRadius: '15px',
                cursor: 'pointer',
              }}
              onClick={handleOpenBox2Modal}
            />
          </Col>
        </Row>

        {/* الصف الثاني: بوكس3 + بوكس4 */}
        <Row className="gy-4 justify-content-center" style={{ marginTop: '20px' }}>
          {/* بوكس الثالث */}
          <Col xs={12} sm={6} md={5} lg={4} style={{ textAlign: 'center' }}>
            <img
              src="Boxes/box3.jpg"
              alt="box3"
              style={{
                width: '90%',
                border: '2px solid #fff',
                borderRadius: '15px',
                cursor: 'pointer',
              }}
              onClick={handleOpenBox3Modal}
            />
          </Col>

          {/* بوكس الرابع */}
          <Col xs={12} sm={6} md={5} lg={4} style={{ textAlign: 'center' }}>
            <img
              src="Boxes/box4.jpg"
              alt="box4"
              style={{
                width: '90%',
                border: '2px solid #fff',
                borderRadius: '15px',
                cursor: 'pointer',
              }}
              onClick={handleOpenBox4Modal}
            />
          </Col>
        </Row>

        {/* ---------------------------------------------------------------------
            بوكس 1 (فيديوهات فرنساوي)
        --------------------------------------------------------------------- */}
        <Modal show={showVideosModal} onHide={handleCloseVideosModal} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>اتكلم فرنساوي #</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                justifyContent: 'center',
                direction: 'rtl',
              }}
            >
              <div style={{ cursor: 'pointer' }}>
                <img
                  src="FreeCourse/video1.jpg"
                  alt="Video 1"
                  style={{ width: '350px', borderRadius: '10px' }}
                  onClick={() => handleSelectVideo('1nXCGOTNyHPaV9S_ppnFCJjaYfMAHejEg')}
                />
              </div>
              <div style={{ cursor: 'pointer' }}>
                <img
                  src="FreeCourse/video2.jpg"
                  alt="Video 2"
                  style={{ width: '350px', borderRadius: '10px' }}
                  onClick={() => handleSelectVideo('1DDkcywVNNkfzCPBpwFLSJjgqiJI2Sg0C')}
                />
              </div>
              <div style={{ cursor: 'pointer' }}>
                <img
                  src="FreeCourse/video3.jpg"
                  alt="Video 3"
                  style={{ width: '350px', borderRadius: '10px' }}
                  onClick={() => handleSelectVideo('1C0Z4RSxobg37j5yj-AbgdbfTB6MsIOGX')}
                />
              </div>
              <div style={{ cursor: 'pointer' }}>
                <img
                  src="FreeCourse/video4.jpg"
                  alt="Video 4"
                  style={{ width: '350px', borderRadius: '10px' }}
                  onClick={() => handleSelectVideo('1bIhjs4hUWywZYeleorpV3p2O1OFvKQiS')}
                />
              </div>

              {/* تابع بقية الصور كما في مثالك... */}
              <div style={{ cursor: 'pointer' }}>
                <img
                  src="FreeCourse/video5.jpg"
                  alt="Video 5"
                  style={{ width: '350px', borderRadius: '10px' }}
                  onClick={() => handleSelectVideo('143wNdvitsGdYMPMKxtjdsJWUhynywHHg')}
                />
              </div>
              <div style={{ cursor: 'pointer' }}>
                <img
                  src="FreeCourse/video6.jpg"
                  alt="Video 6"
                  style={{ width: '350px', borderRadius: '10px' }}
                  onClick={() => handleSelectVideo('1OQa3q7qZMJF5C_xfL9qp74K_kWIF8d7J')}
                />
              </div>
              <div style={{ cursor: 'pointer' }}>
                <img
                  src="FreeCourse/video7.jpg"
                  alt="Video 7"
                  style={{ width: '350px', borderRadius: '10px' }}
                  onClick={() => handleSelectVideo('1FSjlapHB7T1hfBLu2fnRJiJwtykO9gUw')}
                />
              </div>
              <div style={{ cursor: 'pointer' }}>
                <img
                  src="FreeCourse/video8.jpg"
                  alt="Video 8"
                  style={{ width: '350px', borderRadius: '10px' }}
                  onClick={() => handleSelectVideo('1D-lXgU1wrEJvcm2KyWe3v4f91GCIZb7C')}
                />
              </div>
              <div style={{ cursor: 'pointer' }}>
                <img
                  src="FreeCourse/video9.jpg"
                  alt="Video 9"
                  style={{ width: '350px', borderRadius: '10px' }}
                  onClick={() => handleSelectVideo('1XmSlfibX6jlqbEJwGI6hqqnGv_Yi6-BA')}
                />
              </div>
              <div style={{ cursor: 'pointer' }}>
                <img
                  src="FreeCourse/video10.jpg"
                  alt="Video 10"
                  style={{ width: '350px', borderRadius: '10px' }}
                  onClick={() => handleSelectVideo('')} // ضع المعرف المناسب
                />
              </div>
              {/* ... بقية الصور حسب رغبتك */}
            </div>
          </Modal.Body>
        </Modal>

        {/* مودال تشغيل فيديو بوكس1 */}
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
                {/* Overlay (تشويش) */}
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

        {/* ---------------------------------------------------------------------
            بوكس 2
        --------------------------------------------------------------------- */}
        <Modal show={showBox2Modal} onHide={handleCloseBox2Modal} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>الصف الأول الثانوي</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {renderTwoImagesWithInstructions({
              onClickFirstImage: handleOpenBox2SubModal,
              clickableImg: 'clickable/clickable2.jpg',
              staticImg: 'static/static1.jpg',
            })}
          </Modal.Body>
        </Modal>

        {/* مودال فرعي لاختيار فيديو/ملف في بوكس2 */}
        <Modal show={showBox2SubModal} onHide={handleCloseBox2SubModal} centered size="md">
          <Modal.Header closeButton>
            <Modal.Title>اختر الفيديو أو الملف</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {renderVideoFileButtons(
              (driveId) => {
                // عند اختيار "فيديو" أو "ملف" نغلق المودال الفرعي ونفتح مودال iframe
                handleCloseBox2SubModal();
                handleOpenBox2Player(driveId);
              },
              {
                videoId: 'VIDEO_2_ID_UNIQUE',
                fileId: 'FILE_2_ID_UNIQUE',
              }
            )}
          </Modal.Body>
        </Modal>

        {/* مودال عرض iframe (بوكس2) */}
        {renderIframeModal(showBox2Player, handleCloseBox2Player, box2PlayerId)}

        {/* ---------------------------------------------------------------------
            بوكس 3
        --------------------------------------------------------------------- */}
        <Modal show={showBox3Modal} onHide={handleCloseBox3Modal} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>الصف الثاني الثانوي</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {renderTwoImagesWithInstructions({
              onClickFirstImage: handleOpenBox3SubModal,
              clickableImg: 'clickable/clickable3.jpg',
              staticImg: 'static/static2.jpg',
            })}
          </Modal.Body>
        </Modal>

        <Modal show={showBox3SubModal} onHide={handleCloseBox3SubModal} centered size="md">
          <Modal.Header closeButton>
            <Modal.Title>اختر الفيديو أو الملف</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {renderVideoFileButtons(
              (driveId) => {
                handleCloseBox3SubModal();
                handleOpenBox3Player(driveId);
              },
              {
                videoId: 'VIDEO_3_ID_UNIQUE',
                fileId: 'FILE_3_ID_UNIQUE',
              }
            )}
          </Modal.Body>
        </Modal>

        {renderIframeModal(showBox3Player, handleCloseBox3Player, box3PlayerId)}

        {/* ---------------------------------------------------------------------
            بوكس 4
        --------------------------------------------------------------------- */}
        <Modal show={showBox4Modal} onHide={handleCloseBox4Modal} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>الصف الثالث الثانوي</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {renderTwoImagesWithInstructions({
              onClickFirstImage: handleOpenBox4SubModal,
              clickableImg: 'clickable/clickable4.jpg',
              staticImg: 'static/static3.jpg',
            })}
          </Modal.Body>
        </Modal>

        <Modal show={showBox4SubModal} onHide={handleCloseBox4SubModal} centered size="md">
          <Modal.Header closeButton>
            <Modal.Title>اختر الفيديو أو الملف</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {renderVideoFileButtons(
              (driveId) => {
                handleCloseBox4SubModal();
                handleOpenBox4Player(driveId);
              },
              {
                videoId: 'VIDEO_4_ID_UNIQUE',
                fileId: 'FILE_4_ID_UNIQUE',
              }
            )}
          </Modal.Body>
        </Modal>

        {renderIframeModal(showBox4Player, handleCloseBox4Player, box4PlayerId)}
      </Container>
    </>
  );
}

export default Starting;
