import { Card, Col, Row } from 'antd';
import dayjs from 'dayjs';
import Link from 'next/link';

function BlogList({ posts }) {
  return (
    <>
      <Row
        align='middle'
        style={{
          height: 100,
        }}
      >
        <Col span={24}>
          <h1
            style={{
              fontSize: 30,
              fontWeight: 'blod',
            }}
          >
            Latest Posts
          </h1>
        </Col>
      </Row>
      <Row
        gutter={16}
        align='top'
        style={{
          height: 'auto',
        }}
      >
        {posts.map((post, idx) => {
          const { slug, thumbnail, title, author, createdAt } = post;
          return (
            <Col span={6} key={idx}>
              <Link href={`/post/${slug}`}>
                <a>
                  <Card
                    style={{
                      width: '100%',
                      border: 'none',
                      marginBottom: 30,
                    }}
                    cover={<img alt={thumbnail.alt} src={thumbnail.imageUrl} />}
                  >
                    <h3>{title}</h3>
                    <h4>
                      {author.name} - {dayjs(createdAt).format('MMMM D')}
                    </h4>
                  </Card>
                </a>
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default BlogList;
