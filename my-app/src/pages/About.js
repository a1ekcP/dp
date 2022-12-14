import PageTitle from '../components/PageTitle';
import QAA from '../components/QAA';
import { Container } from 'react-bootstrap';

function About({titleBlock}){

    return (
        <Container>
            <div className='wrapper'>
                <PageTitle titleBlock={titleBlock}/>
                <section className='p-4'>
                    <p className='text-center lh-base'>
                        Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе. Здесь будет удачно смотреться текст о вашей компании и услугах.
                    </p>
                    <p className='text-center mb-5 lh-base'>
                        Используйте эту возможность, чтобы выгодно представить себя и свою компанию клиентам. Расскажите интересную историю, например, как вам в голову пришла идея собственного дела, и объясните, в чем заключается ваше преимущество перед конкурентами. Приводите увлекательные факты и цифры. Не забудьте про ключевые слова, по которым ваш сайт найдут в поисковых системах. Чтобы добавить свое фото, нажмите на изображение и выберите «Заменить фото».
                    </p>      
                </section>
                <QAA/>
            </div>
        </Container>
    )
}

export default About;