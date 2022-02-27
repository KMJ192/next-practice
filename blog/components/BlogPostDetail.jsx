import { Col, Row } from 'antd';
import BlockContent from '@sanity/block-content-to-react';
import SyntexHighlighter from 'react-syntax-highlighter';

const serializers = {
  types: {
    code: ({ node }) => {
      const { code } = node;
      return (
        <SyntexHighlighter language='javascript'>{code}</SyntexHighlighter>
      );
    },
    video: ({ node }) => {
      return <p>video</p>;
    },
    link: ({ node }) => {
      return <p>link</p>;
    },
    imageGallery: ({ node }) => {
      return <p>imageGallery</p>;
    },
  },
};

function BlogPostDetail({ blocks }) {
  return (
    <Row>
      <Col span={24}>
        <BlockContent
          blocks={blocks}
          projectId={process.env.SANITY_PROJECT_ID}
          dataset='production'
          serializers={serializers}
        />
      </Col>
    </Row>
  );
}

export default BlogPostDetail;
