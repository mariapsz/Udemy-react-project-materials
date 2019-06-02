import React from 'react';
import Layout from "../../hoc/layout";
import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/newsList';

const Home = () => {
    return (
        <div>
            <Layout>
                <NewsSlider
                    type='featured'
                    start={0}
                    amount={3}
                    settings = {{
                        dots: false
                    }}
                />
                <NewsList
                    type='card'
                    loadMore={true}
                    start={3}
                    amount={3}
                />
            </Layout>
        </div>
    )
};

export default Home;