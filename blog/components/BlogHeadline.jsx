import { Col, Row } from 'antd';

function BlogHeadline() {
  return (
    <Row
      align='middle'
      style={{
        height: 400,
        textAlign: 'center',
      }}
    >
      <Col span={24}>
        <h1
          style={{
            fontSize: 70,
            fontWeight: 'blod',
          }}
        >
          Sample Blog
        </h1>
        <p
          style={{
            fontSize: 24,
          }}
        >
          my blog
        </p>
      </Col>
    </Row>
  );
}

export default BlogHeadline;
