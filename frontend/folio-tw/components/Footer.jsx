import { AiTwotoneHeart } from "react-icons/ai";
function Footer() {
	return (
		<div className="flex items-center justify-center w-full h-16 bg-gray-50">
			<h1 className="mr-2 text-xl text-blue-900"></h1>{" "}
			<AiTwotoneHeart className="text-black" />
			<h1 className="ml-2 text-xl text-blue-900">
				{" "}
				Created by{" "}
				<a
					href="#"
					className="font-semibold text-indigo-900 cursor-pointer hover:text-black"
				>
					Dev Lambo
				</a>
			</h1>
		</div>
	);
}

export default Footer;
