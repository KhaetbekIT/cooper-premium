import { HomeCarousel } from "./home-carousel";
import { HomeFunctional } from "./home-functional";
import { HomePuduCC1 } from "./home-pudu";
import { HomeRobotDogs } from "./home-robot-dogs";

export const HeaderContent = () => {
	return (
		<>
			<HomeCarousel />

			<HomeFunctional />

			<HomeRobotDogs />

			<HomePuduCC1 />
		</>
	);
};
