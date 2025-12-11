import NotFoundImage from "@public/images/404-icon.svg";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/widgets/container";
import { RoutersConfig } from "@/configs/routers.config";

const NotFound = async () => {
	return (
		<html lang="ru" className="font-family-cofo-sans">
			<head>
				<title>404 - Page Not Found</title>
			</head>
			<body className="min-h-screen flex flex-col justify-center">
				<section data-slot="not-found">
					<Container>
						<div className="pt-[115px] pb-[135px] flex flex-col items-center justify-center gap-6">
							<div className="max-w-lg mb-20">
								<Image
									src={NotFoundImage}
									alt="404"
									width={400}
									height={400}
									className="w-full h-full"
									priority
								/>
							</div>

							<h2 className="text-2xl font-bold">
								Такой страницы не существует
							</h2>

							<Link
								href={RoutersConfig.client.home}
								className="text-red-500 text-base font-medium hover:underline"
							>
								Веруться на главную старницу
							</Link>
						</div>
					</Container>
				</section>
			</body>
		</html>
	);
};

export default NotFound;
