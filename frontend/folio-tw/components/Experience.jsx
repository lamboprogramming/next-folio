import Image from "next/image";
import One from "../public/images/1.png";
import Two from "../public/images/2.jpg";
import Three from "../public/images/3.jpg";
import Four from "../public/images/4.jpg";
import Five from "../public/images/5.jpg";
import Six from "../public/images/6.jpg";
import { Element } from "react-scroll";

function Works() {
	return (
		<Element id="work" name="work">
			<div className="flex flex-col items-center justify-center w-full h-auto my-20 ">
				<p className="text-sm text-gray-400 uppercase">My Creative Works</p>
				<h1 className="text-6xl font-bold text-center text-indigo-900">
					Portfolio
				</h1>
				<div className="items-center justify-center gap-10 mt-10 md:flex sm:flex-col md:flex-row">
					<div className="relative rounded shadow-xl w-80 h-60">
						<Image
							src={One}
							alt="One"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="relative rounded shadow-xl w-80 h-60">
						<Image
							src={Two}
							alt="two"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="relative rounded shadow-xl w-80 h-60">
						<Image
							src={Three}
							alt="three"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
				</div>
				<div className="items-start justify-center mt-10 md:flex sm:flex-col md:flex-row sm:pb-10 md:gap-10">
					<div className="relative rounded shadow-xl w-80 h-60">
						<Image
							src={Four}
							alt="four"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="relative rounded shadow-xl w-80 h-60">
						<Image
							src={Five}
							alt="five"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="relative rounded shadow-xl w-80 h-60">
						<Image
							src={Six}
							alt="six"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
				</div>

				<h1 className="my-10 text-base text-blue-900">
					Discover all projects on{" "}
					<a href="#" className="font-semibold text-black">
						Github{" "}
					</a>
				</h1>
			</div>
		</Element>
	);
}

export default Works;
