import React, { Component } from 'react';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        const imgs = [require("../../../assets/imagenes/index-pic-1.jpg"), require("../../../assets/imagenes/index-pic.jpg")]
        return (
            <div className='col-sm-6 col-xs-12 h-100  overflow-hidden'>
                <img src={imgs[this.state.count % imgs.length]} className="img-fluid " alt="Music aesthetic reocrding studio" />
            </div>
        );
    }
}

// const Slider1 = () => {

//     const src = '../../../assets/imagenes/index-pic-1.jpg';
//     const imgs = [src, src, src]

//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         const timerId = setInterval(() => {
//             setCount(count => count + 1);
//         }, 3000);

//         return () => clearInterval(timerId);
//     }, []);


//     const image = imgs[count % imgs.length];
//     console.log(image)

//     return (
//         <></>
//     );
// }

export default Slider;