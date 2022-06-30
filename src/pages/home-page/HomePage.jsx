import React from "react";
import {HomeBanner, ProductsRow} from "../../components";
import TopSellers from "../../components/top-sellers";
import Footer from "../../components/footer";
import './homePage.scss'

const HomePage = () => {
	return (
		<div className="home-page">
			<HomeBanner/>
			<ProductsRow/>
			<TopSellers/>
			<div className="home-page__statistic">
				<h1 className="home-page__title">CUSTOM CAPS в цифрах</h1>
				<div className="texts">
					<div className="info_title">
						<p className="number">12000</p>
						<p className="text">проданных кепок</p>
					</div>
					<div className="info_title">
						<p className="number">9</p>
						<p className="text">лет на рынке</p>
					</div>
					<div className="info_title">
						<p className="number">8500</p>
						<p className="text">довольных клиентов</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
