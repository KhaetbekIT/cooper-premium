import { HomeCarousel } from "./home-carousel";
import { HomeFunctional } from "./home-functional";
import { HomeProduction } from "./home-production";
import { HomePuduCC1 } from "./home-pudu";
import { HomeRobotDogs } from "./home-robot-dogs";

export const HeaderContent = () => {
	return (
		<>
			<HomeCarousel />

			<HomeFunctional />

			<HomeRobotDogs />

			<HomePuduCC1 />

			<HomeProduction />
		</>
	);
};
