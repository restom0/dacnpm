import "../css/Introduction.css";
import 'boxicons'

import { Col, Container, Form, Image, InputGroup, Modal, NavDropdown, Row } from 'react-bootstrap';
const Introduction = () => {
  return (
    <div>
      <Row>
        <Image src="https://s3-alpha-sig.figma.com/img/2f9a/54bc/8c7b8895690b55c2745d06d5491af4a4?Expires=1699228800&Signature=g0LPNfN3obcxKLuQFUZnUYKseyQxQ7jNZwcBsncor4Tqr9bIHmLnu4bYYW-57z0f8SkPC9N8er~vkOaSZ-6ECowHPdsNS4orr~IDepL8FDVXooCqBP1C7zjyh~sB~xu0oTXfQDRAA6NZvWOlaMnZ~vmDYqJ3SSKCuslscyIc56LSrZBSYmCM2LFiaQfXIkI7FzDp836Oi0yWv4qklndCd-3y2Xv3H7QbGKWG~e4mFTQQAqwZO9I6avYa783lYUcTSF5crQw-qR7DJg4YFV6OqCFJJ0~z1e9kabm3UExIYW~kU5G9l-IhZcTHMSBMTuRRcbHV36wSf8f5im9zN-wlVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" fluid />

      </Row>
      <Row style={{ margin: "15vh" }} className="d-flex justify-content-center">
        <Image src="https://s3-alpha-sig.figma.com/img/8d1b/3b5c/9beefbb5649c89efd0506f30b1362492?Expires=1699228800&Signature=OhQh0IJiPGgrZNp8eQ0DlA5WJQbBgKgo4jEcKXZ7LnzLKm9e7cN~Ylld4ZBXEV~7AtfAFF9nRO9Q7MaNYq6sxf40bpEmEDUEtGujacrvKNTOuuXs8clMak6RGyZFSCa10z4q1YOuGiAmLopQ4k9lTWG6mJX2~4GNVhClHA~ORE~RXhmQkGiouPR4JzaXXq25zp~DY0i72MYgMv8gzg-Fo0-r-ZR7bWpvXVOsuUUJTK7hEeGLq0OkoCsUQPNyGfVsMC00FDM9-uYZOlQzXh3QTQUl1ZuEIjvx~loBqot6sVFf5ihGOGqn3vVmKPo8wc8X9vQPCbj7uQwLemxqtx3EWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" style={{ width: "75%" }} fluid />

      </Row>
      <Row style={{ margin: "15vh" }} className="d-flex justify-content-center">
        <p style={{ width: "42%" }} className="text-center">“SEP English tự hào mang tới một nền tảng giáo dục giúp thế hệ trẻ Việt Nam sẵn sàng cho tương lai."</p>
      </Row>
      <Row>
        <Image src="https://s3-alpha-sig.figma.com/img/ea29/2c01/a155b478d382180157503caeb27df20d?Expires=1699228800&Signature=qjOJ88syDNkkD2ucjfnZC49nP4I9480oqWMf~9A54XJE0R88P1howeOFpqY-b33yknWYqI5fvU67iRmvHtc34uuPS27Iu5P0Bb4cIUWNxhfbBaCAePHtp3Xh2yHjON1E4dN4rpIc5WT9p8sSKnz2L06Hv8zGi3BVYcsgtRkizEon~OG3fCFp09vN1mSYKAEA-bAHRRVq4Xkgu2F7hfd4FY9JIs7I8mrKufOwzc4LRsIuq46KfUizk0iVlVkidKNTZx6IcAb-F9XnPOu-Avh9Y2QCh9vBaG4cStZ6voBB1qn28TSI13SEa0F9fYTSzZKG4DIvnEYdqKORwiZVAtbdAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" fluid />
      </Row>
      <Row style={{ padding: "5vh", backgroundColor: "#249DE3" }} className="d-flex justify-content-center mt-2 mb-2">
        <p style={{ width: "42%", marginTop: "15vh", color: "white" }} className="text-center"><b>SEP ENGLISH</b></p>
        <p style={{ width: "60%", marginBottom: "15vh", color: "white" }} className="text-center">Tự hào là đơn vị tiên phong đào tạo tiếng Anh toàn diện và uy tín, giúp thế hệ trẻ Việt Nam sẵn sàng cho tương lai.</p>
      </Row>
      <Row>
        <Image src="https://s3-alpha-sig.figma.com/img/53a0/091f/6631d995e4cc0255742a62d2e4fc727a?Expires=1699228800&Signature=if1KDVmSSH7wo675PHqAPH6JuVU2vN2vIjQVGqiwWhWRtaGSKPMHybGXfxwzuaLxAH~SaEhC0xsdvyiqFIiDClOa1y7mgIDA3Zqv8iH1YY56dVbTEacVuAgjnia4y-Iv0xhI-Ilh5hAh9RBpu9Ijz2lpfvKLDJE07AzFFDNLhrwo5vl3TtUKZTFWOf0oHkdR6t0~W7MUnHN78P7rz1Z62iy1zOeUNZdVV8tNIMtQcOtiV8fodflsFLWQjzEcrotC-LR--W9NoAIQtJofFJD8NBLN1USA~LCyeLjC9hnY2XQD9lGoKP2sTdGLcTQF9c5XolUoYaa7aTBkSLUDF4Sk3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" fluid />
      </Row>

    </div >
  );
};

export default Introduction;
