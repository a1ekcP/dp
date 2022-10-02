import styles from './SocialForm.module.scss';
import '../../styles/style.scss';
import { Form, Button } from 'react-bootstrap';

function SocialForm(){
    return (
        <Form className={styles.form}>
            <h2 className='parTitle mb-4'>Напишите нам</h2>
            <Form.Group 
              className="mb-3" 
              controlId="exampleForm.ControlInput1">
                <Form.Control 
                  type="email" 
                  placeholder="name" />
            </Form.Group>

            <Form.Group 
              className="mb-3" 
              controlId="exampleForm.ControlInput1">
                <Form.Control 
                  type="email" 
                  placeholder="email" />
            </Form.Group>

            <Form.Group 
              className="mb-3" 
              controlId="exampleForm.ControlInput1">
                <Form.Control 
                  type="email" 
                  placeholder="phone" />
            </Form.Group>

            <Form.Group 
              className="mb-3" 
              controlId="exampleForm.ControlTextarea1">
                <Form.Control 
                  as="textarea" 
                  rows={3} 
                  placeholder="add message"/>
            </Form.Group>
            <Button 
              variant="light px-4" 
              type="submit">Відправити</Button>
        </Form>
    )
}

export default SocialForm;