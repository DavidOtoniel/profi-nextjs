import { data } from './data';
import FaqItem from './FaqItem';
import '../Fasqs/_faqs.scss';

const Faqs = () => {
    return (
        <div className="container faqs">
            <h2>Frenquettly Asked Question</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vero impedit doloremque,
                voluptatem magnam eum reprehenderit iure? Soluta consequuntur officia,
            </p>

            <div className="container faqsData">
                {data.map(({ id, title, desc }) => <FaqItem key={id} title={title} desc={desc} />)}
            </div>
        </div>
    )
}

export default Faqs