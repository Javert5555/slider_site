import SliderItem from './SliderItem';
import '../css/slider_style.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const Slider = () => (
    <section className='slider'>
        <Home />
        <About />
        <Contact />
    </section>
);

export default Slider