import { Card, Col, Row } from 'react-bootstrap';

function PageTitle({titleBlock}){

    return (
        <Row xs={1} md={2} className="g-4 flex-md-row-reverse" style={{marginBottom: 60}}>
            <Col md={8}>
                <Card>
                    <Card.Img 
                        variant="top" 
                        src={titleBlock.imgSrc}
                        alt={titleBlock.title} />
                </Card>
            </Col>
            <Col md={4}>
                <Card 
                    bg={'primary'} 
                    className='d-flex align-items-center justify-content-center h-100 py-4'>
                    <h2 className='text-uppercase text-white fw-bold' style={{fontSize: 42}}>{titleBlock.title}</h2>
                </Card>
            </Col>
        </Row>
    )
}

export default PageTitle;