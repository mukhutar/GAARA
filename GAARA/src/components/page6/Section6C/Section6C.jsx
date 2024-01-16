import React, { useEffect, useRef, useState } from 'react'
import "./Section6C.scss";
import leaf from "/assets/leaf.png";
import rightLeaf from "/assets/leafright.png";
import { motion , useAnimation} from "framer-motion";


const AnimeSvg = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 5)",
    transition:{
      duration:7,
      delay:0.5 
      
    }
  }
}



const Section6C = () => {



  const controls = useAnimation();
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          controls.start("visible");
        } else {
          setVisible(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
  
    if (ref.current) {
      observer.observe(ref.current);
    }
  
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, ref]);

  return (
    <motion.section className=' Section6C' ref={ref}>

        <h3 className='page6Heading'>Why Your Orchard Will <br /> Thrive with Us</h3>

         <svg className='svg' width="1399" height="1274" viewBox="0 0 1399 1274" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path  
            variants={AnimeSvg}
            initial="hidden"
            animate="visible" 
            d="M153.001 1C172.63 1 192.26 1 211.89 1C226.593 1 241.297 1 256.001 1C281.039 1 305.51 5 330.334 5C374.853 5 419.371 5 463.89 5C478.397 5 492.531 7 507.001 7C526.238 7 544.242 15.4246 561.89 21.7778C568.238 24.0631 576.01 30.5111 580.112 36.5556C586.584 46.0941 594.883 52.8828 603.001 61C616.257 74.2565 628.53 85.8637 630.556 105C632.285 121.323 633.58 132.945 645.001 145C651.2 151.544 653.004 158.208 656.001 166C658.923 173.597 664.748 177.297 665.001 185.889C665.523 203.654 680.474 211 697.112 211C732.714 211 766.367 213.59 801.334 219.111C830.156 223.662 860.108 219.355 888.112 226.556C900.721 229.798 913.303 232.461 926.112 235.111C944.112 238.835 957.574 252.182 970.556 264.556C986.358 279.616 1007.12 291.836 1020.67 309C1031.61 322.865 1029.58 343.841 1033.89 360.333C1038.58 378.258 1040.56 394.148 1041 412.556C1041.26 423.316 1044.25 436.353 1049 446.111C1054.77 457.948 1060.14 471.209 1058.89 485C1058.41 490.246 1056.53 492.048 1053.45 495.444C1049.53 499.748 1048.29 510.686 1047.45 516.111C1046.25 523.833 1045.85 532.087 1045.11 539.889C1044.65 544.785 1042 546.731 1041 551.222C1037.91 565.11 1026.23 588.042 1015 596.778C1007.83 602.353 992.945 598.111 984.112 599.444C978.86 600.237 957.644 603.164 957.112 609.556C954.636 639.266 968.335 669.059 969.001 699C969.122 704.466 973.023 715.866 969.001 719.889C963.579 725.31 957.686 726.988 951.445 731C948.645 732.8 947.329 735.19 946.001 738.111C943.952 742.619 941.298 742.703 938.001 746C933.4 750.601 923.488 751.977 923.001 758.556C921.435 779.687 902.655 791.038 896.556 809.889C894.756 815.453 889.603 821.09 887.001 826.667C883.744 833.646 879.475 839.896 875.001 846.111C867.947 855.908 861.009 866.8 849.667 871.889C819.446 885.45 785.445 890.818 755.667 905.111C742.715 911.328 729.156 908.114 717.001 916.556C709.614 921.685 699.934 919.719 692.001 925.889C688.315 928.755 681.43 932.341 677.001 934.556C673.728 936.192 673.001 937.312 673.001 941C673.001 958.569 673.891 976.391 672.112 993.889C669.88 1015.84 666.489 1041.11 659.778 1062.11C657.059 1070.62 649.001 1078.81 649.001 1088C649.001 1096.66 641.191 1100.35 635.001 1103.44C626.706 1107.59 620.543 1115.37 613.001 1120.22C600.456 1128.29 587.276 1134.22 573.89 1141.22C551.676 1152.84 527.95 1165.94 503.001 1170.56C478.543 1175.08 454.981 1179.95 431.001 1186.89C381.726 1201.15 327.508 1207 276.334 1207C251.667 1207 227.001 1207 202.334 1207C185.7 1207 175.125 1203.69 159.667 1199.44C148.895 1196.49 140.856 1190.54 131.89 1184C122.146 1176.89 111.513 1173.3 102.334 1165.22C94.1608 1158.03 95.0989 1144.58 95.0007 1134.56C94.8334 1117.49 94.0403 1100.01 95.4451 1083C97.9146 1053.09 112.016 1026.09 113.001 995.889C113.823 970.667 122.89 948.37 105.112 926.444C91.9753 910.243 70.7479 906.46 51.8896 915.889C36.0981 923.785 30.5064 938.281 23.7785 953.556C11.6203 981.158 3.32627 1011.45 1.33401 1041.67C-0.634332 1071.52 2.11676 1099.29 15.2229 1126.56C28.9273 1155.06 50.2421 1182.39 72.4451 1204.78C91.1485 1223.63 111.861 1242.26 134.778 1255.89C167.549 1275.37 198.275 1275.96 234.778 1269.22C356.343 1246.77 477.953 1224.1 599.667 1202.33C661.907 1191.2 724.652 1180.52 784.223 1158.67C815.49 1147.2 846.128 1136.24 878.667 1128.67C911.661 1120.98 945.379 1117.09 978.223 1108.78C1096.45 1078.85 1208.66 1027.29 1329 1006.56C1406.05 993.279 1483.21 979.765 1559 960.333C1632.64 941.453 1706.75 919.302 1776.33 888.333C1830.12 864.395 1874.56 831.446 1923 799" 
            stroke="#0E5205" 
            strokeLinecap="round"/>
         </svg>

        <div className="Section6Sides">
           <div className="Side">
               <div className="img_container">
                    <div className="border1"></div>
                    <img className='img1' src={leaf} alt="" />
                </div>

                <motion.div className="section_text1"
                
                
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={{
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 , delay:0.8 } },
                    hidden: { opacity: 0, scale: 0.8 }
                  }}
                
                >

                    <h3>Innovative, Eco-Friendly <br /> Techniques</h3>
                    <p>Embrace practices that love the <br /> earth as much as they love profits.</p>

                </motion.div>

                <motion.div className="section_text2"
                
                
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={{
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 , delay:1.2 } },
                    hidden: { opacity: 0, scale: 0.8 }
                  }}
                
                >
                    <h3>Personalized, Hands-On <br /> Guidance</h3>
                    <p>Your goals, our mission. We walk the <br /> orchard path with you, step by step.</p>
                    
                </motion.div>

                <div className="img_container">
                    <div className="border2"></div>
                    <img  className='img2' src={rightLeaf} alt="" />
                </div>
           </div>


           <div className="Side">

                  <motion.div className="section_text3"
                  
                  
                  ref={ref}
                  animate={controls}
                  initial="hidden"
                  variants={{
                      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 , delay:0.4 } },
                      hidden: { opacity: 0, scale: 0.8 }
                    }}
                  
                  >

                    <h3>Expertise That Shines</h3>
                    <p>Dive into our knowledge pool brimming <br /> with cutting-edge agricultural insights.</p>

                  </motion.div>

                  <div className="img_container">
                    <div className="border3"></div>
                    <img  className='img3' src={leaf} alt="" />
                  </div>


                    <div className="img_container">
                        <div className="border4"></div>
                        <img  className='img4' src={rightLeaf} alt="" />
                        <div className="borderN"></div>
                    </div>

                    <motion.div className="section_text4"
                    
                    
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={{
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 , delay:1.6 } },
                        hidden: { opacity: 0, scale: 0.8 }
                      }}
                    
                    >
                        <h3>Results That Speak Volumes</h3>
                        <p>Our legacy? Orchards thriving across <br /> regions, testimonials blooming with <br /> success.</p>

                    </motion.div>

           </div>


        </div>
      
    </motion.section >
  )
}

export default Section6C