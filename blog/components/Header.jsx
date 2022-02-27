import Link from 'next/link';
import { Row, Col } from 'antd';
import { CodeOutlined } from '@ant-design/icons';

function Header() {
  return (
    <Row align='middle' style={{ height: 64 }}>
      <Col span={24}>
        <Link href='/'>
          <a>
            <div
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              <CodeOutlined /> Sample blog
            </div>
          </a>
        </Link>
      </Col>
    </Row>
  );
}

export default Header;
