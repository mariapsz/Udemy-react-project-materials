import React from 'react';
import Layout from "../../hoc/layout";
import NewsSlider from '../widgets/NewsSlider/slider';

const Home = () => {
    return (
        <div>
            <Layout>
                <NewsSlider/>
            </Layout>
        </div>
    )
};

export default Home;