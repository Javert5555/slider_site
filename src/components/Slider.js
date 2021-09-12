import SliderItem from './SliderItem';
import '../css/slider_style.css';

const Slider = () => (
    <section className="slider">
        <SliderItem 
            num={1}
        />
        <SliderItem 
            num={2}
        />
        <SliderItem 
            num={3}
        />
    </section>
);

export default Slider