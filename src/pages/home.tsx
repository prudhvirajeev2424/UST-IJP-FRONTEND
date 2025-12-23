import React from "react";
import Navbar from "../components/navbar";
import ApplicationStatus from "../components/tp_manager/home/ApplicationStatus";

const Home: React.FC = () => {
	return (
		<div className="min-h-screen bg-gray-50">
			<Navbar />

			<main className="pt-20 max-w-7xl mx-auto px-6">
				<div className="flex gap-6 items-start">
					{/* Main content area */}
					<div className="flex-1">
						<h1 className="text-2xl font-semibold mb-4">Home</h1>
						<p className="text-gray-600">Welcome to the dashboard.</p>
					</div>

					{/* Right sidebar */}
					<aside className="w-[320px]">
						<ApplicationStatus />
					</aside>
				</div>
			</main>
			</div>
			);
		};

export default Home;
