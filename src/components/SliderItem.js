import '../css/slider_item_style.css'

const SliderItem = ({ num, innerComponent }) => (
    <div key={`item${num}`} className={`slider__item item${num}`} id={`item${num}`}>
        {innerComponent}
    </div>
);

export default SliderItem