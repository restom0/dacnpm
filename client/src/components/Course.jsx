import "../css/Introduction.css";
import { Col, Container, Form, Image, InputGroup, Modal, NavDropdown, Row } from 'react-bootstrap';
import { Avatar, Button, Card, Skeleton, Switch } from 'antd';
import { useState } from "react";
const Course = () => {
    const [loadings, setLoadings] = useState(false);
    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 1500);
    };
    return (
        <div>
            <Row>
                <Image src="https://s3-alpha-sig.figma.com/img/2aa2/2047/5b1f3f2a36ea9540596a38f732abcca7?Expires=1699228800&Signature=b-M9A-OSyznIzAe-~sZto2RCo9LVDgRugUD-vclARqm7o83nHMN-8TKwHOpNhER-gVNa65riryu1rpLd3fckfvdQVoYJOH6AFZxjLzT4Lv1REoeQwotKAj11YfaqbOllY7pM-pDIMg~UQ01N9orswpu4gEW95MmqlwAuS7pkicXOVCG09j4NRwKWlTqjW9cfRQUAxQutjbyRkne4jja-9AgoXxVOrhhpAw3qg-75VdJgjlRUfe2N07lkXaf7n8hVN8PcsZPAW2mbwGH6wwwHEJLgOEYKo6mW5~KnP6inx09fX7UdiuBEWSl38zg0l-T585dFES7~xWiThS3y4SFAYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" fluid />

            </Row>
            <Container style={{ margin: "15vh", width: "80%" }}>
                <h1>CÁC KHÓA HỌC TẠI SEP ENGLISH</h1>
                <p>Tại SEP English, chúng tôi cung cấp các khóa học tiếng Anh chất lượng cho mọi đối tượng và trình độ. Với đội ngũ giáo viên giàu kinh nghiệm, nhiệt tình cùng cơ sở vật chất hiện đại, chúng tôi cam kết mang đến môi trường học tập tiếng Anh lý tưởng cho học viên.</p>
                <p>Dưới đây là các khóa học của SEP dành cho bất cứ ai có nhu cầu học tiếng anh, cho bất kì độ tuổi nào và bất kì trình độ nào.</p>
            </Container>
            <div>
                <Container style={{ margin: "15vh", width: "80%" }}>
                    <h1>1. TOEIC 4 KỸ NĂNG</h1>
                    <p>Khóa học Luyện thi TOEIC 4 kỹ năng sẽ trang bị cho bạn những kiến thức và kỹ năng cần thiết để chinh phục kỳ thi TOEIC. Với đội ngũ giáo viên giỏi chuyên TOEIC cùng phương pháp giảng dạy hiệu quả, khóa học sẽ giúp bạn nâng cao toàn diện trình độ tiếng Anh và tự tin chinh phục kỳ thi TOEIC.</p>
                    <Card hoverable style={{ marginTop: 16 }} loading={loadings}>
                        <Row>
                            <Col>
                                <Image src="https://s3-alpha-sig.figma.com/img/400f/6e8f/bff72e348dd50ac1fc5accb20617673b?Expires=1699228800&Signature=e4Ks37j5Jy7ickJ2VYw0tsLIN~qqBlT5dCGdqnfPUypCzEHY0lgyXEYhRjoj8iCzKKPlyMPne18mtM08kuFcnxF1o5qmMMf0N1EqvhcI6qmWc0qn~tni41-jdyUBy~Wpcqr8xJClcf6ddZmNrIG5boyrTdpiWxfJYtxo93tq6SUv8wvD48p6k3BbQN72DwvjLzeHaMZi5vQJ9VbXFub~PclK7aKN-u-Z2rtqOtmQPb5V03EB0gm~H9-kGqLiw9~BIdKov9KPwsq0PZw9FisRM09A303hfSDI56OSxmJaSKdB9je2nIrSD43wN3rEDf596w4rAFq5cXZPo0~hlUgYKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" style={{ width: "80%" }} fluid />
                            </Col>
                            <Col>
                                <Row>
                                    <h1 className="text-center" style={{ margin: "5vh 5vh 5vh 0" }}>Khóa học TOEIC 4 kỹ năng</h1>
                                </Row>
                                <Row className="justify-content-center">
                                    <Button size="large" shape="round" type="primary" style={{ width: "50%" }}>Tìm hiểu thêm</Button>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </Container>
                <Container style={{ margin: "15vh", width: "80%" }}>
                    <h1>2. IELTS</h1>
                    <p>Bạn đang cần luyện thi IELTS để du học, định cư hay chứng minh trình độ tiếng Anh? Hãy tham gia ngay khóa học IELTS tại SEP English! Với mục tiêu giúp học viên chinh phục thành công kỳ thi IELTS, khóa học sẽ cung cấp cho bạn một lộ trình ôn luyện kỹ lưỡng và bài bản cả 4 kỹ năng Nghe - Nói - Đọc - Viết.</p>
                    <Card hoverable style={{ marginTop: 16 }} loading={loadings}>
                        <Row>
                            <Col>
                                <Image src="https://s3-alpha-sig.figma.com/img/25d8/f24a/67ef3d8a7d84279e3c22d57cd3e0140f?Expires=1699228800&Signature=a3tPNINOL9Y~KrNK9V4gETgJfHpn~Bx~6480yJuvC2Xe4VDpk6A9JLPVWCB1U8UiuYviE3KKrbCBJV~DhdEkDKHO~vgrxtS8vAJ-e3o8uikbuAAnvTyyIH0~TYcHKV7g4cDokXCm2KxtwYsUN2FAtzJ7n~l2JmiDhDJSqJuwaisSU2pNl6otQkRm3Rr~J0F~mEpgiIglbIyafhdkYvWC3sfWSK7tG8ZZgrO-hcDvSWVPa~0ESA-bypRaoXM0coiMSPR6F1Y1H54mDrluEdBxSYXAdVLmhxP3d-oEYMwY52Ku3zepcJ1KXKFY7z2VGT6HvQLlJES-S9oBF06~P4NNiA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" style={{ width: "80%" }} fluid />
                            </Col>
                            <Col>
                                <Row>
                                    <h1 className="text-center" style={{ margin: "5vh 5vh 5vh 0" }}>Khóa học IELTS</h1>
                                </Row>
                                <Row className="justify-content-center">
                                    <Button size="large" shape="round" type="primary" style={{ width: "50%" }}>Tìm hiểu thêm</Button>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </Container>
                <Container style={{ margin: "15vh", width: "80%" }}>
                    <h1>3. Anh Văn Giao Tiếp </h1>
                    <p>Tiếng Anh Giao Tiếp là khóa học thiết thực giúp bạn nâng cao khả năng giao tiếp tiếng Anh trong cuộc sống. Với mục tiêu giúp học viên tự tin sử dụng tiếng Anh trong giao tiếp thường nhật, khóa học sẽ cung cấp cho bạn những kiến thức và kỹ năng cần thiết.</p>
                    <Card hoverable style={{ marginTop: 16 }} loading={loadings}>
                        <Row>
                            <Col>
                                <Image src="https://s3-alpha-sig.figma.com/img/4a4e/d850/56a4f8232360f62a5e1360e822ef1a2b?Expires=1699228800&Signature=h2XbMWFd1IozECSLJB5agDZF9NprQco4vPqhb-~32xa8iFc7ygu0BdBojWNTyHN5FrGAeV2-uZ4YeI5VSm4yvcJETgRNLSDdL5UQwWNl8emrkjElPTBhc2CfPQxBY7B8GZZGy4Xj8NmXNvIMminj50e6FbbOL8gkncEDuitsMNH6~Xp2hYagwcIwOEWEGug9uuD5FhrbWfTLFLVQq1n10gH~seKlmdcUWBJd-7OQhusrU8ZjqJuOp3Lh36SC80ULlZ9YpeHeok-WiAWW9VSIZtzQqYWh2p05AGBvSC6up41NI2a5xj5w4oOvFwQgKuuSqJEMsidPLiuuIpeqG7~uTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" style={{ width: "80%" }} fluid />
                            </Col>
                            <Col>
                                <Row>
                                    <h1 style={{ margin: "5vh" }}>Khóa học AV Giao Tiếp</h1>
                                </Row>
                                <Row className="justify-content-center">
                                    <Button size="large" shape="round" type="primary" style={{ width: "50%" }}>Tìm hiểu thêm</Button>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </Container>
                <Container style={{ margin: "15vh", width: "80%" }}>
                    <h1>4. Anh Văn Thiếu Nhi</h1>
                    <p>Khóa học Anh văn thiếu nhi tại SEP được thiết kế đặc biệt để kích thích sự tò mò, sáng tạo, và khám phá của trẻ qua việc học tiếng Anh. Chúng tôi áp dụng phương pháp học thông qua trò chơi, hình ảnh, và hoạt động thú vị, giúp trẻ học một cách tự nhiên và hiệu quả.</p>
                    <Card hoverable style={{ marginTop: 16 }} loading={loadings}>
                        <Row>
                            <Col>
                                <Image src="https://s3-alpha-sig.figma.com/img/2fff/df45/873a7bcb71fbe2cd82f6beaf4f06af4f?Expires=1699228800&Signature=gEUBqoENh1~NmHrHLYESqCqd04n8X7Le20otCEgnbO83UsMw~Q0lY-NNLzsX4hKQj7iGiVMfiJmTFLhK~Cf5-Vds-GDwJgsnLuKsv7gCoBExL-x8ZVQvW-3HJ3NDLt5DItbKrLS~WO9sSOG3S-Qz7CKJO51Y6f-ICzZKxyR4OY-FSdyvUN5F0Rf7zXhlQT8oZkreCoj2rmA7J3hG0zTxldyG-Dpbx-4~Jaxxp0mvZ4xJaDgeGnpvwh1kLyrpUVgTEXGliwZxVDZgzTxF3JxRPJas6zOemB02KpLefE0TT9vx79j0mbB0mCAB0u2dbvKAMgGxWiMyVHO4FJ9uNSzMog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" style={{ width: "80%" }} fluid />
                            </Col>
                            <Col>
                                <Row>
                                    <h1 style={{ margin: "5vh" }}>Khóa học AV Giao Tiếp</h1>
                                </Row>
                                <Row className="justify-content-center">
                                    <Button size="large" shape="round" type="primary" style={{ width: "50%" }}>Tìm hiểu thêm</Button>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </div>


        </div >
    );
};

export default Course;
