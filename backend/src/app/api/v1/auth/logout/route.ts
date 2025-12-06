import { NextResponse } from "next/server";

export async function POST() {
	try {
		const response = NextResponse.json(
			{ message: "Logged out successfully." },
			{ status: 200 }
		);

		response.cookies.set({
			name: "auth_token",
			value: "",
			httpOnly: true,
			secure: true,
			sameSite: "none",
			maxAge: 0,
			path: "/",
			domain: "localhost",
		});

		response.cookies.set({
			name: "random_session",
			value: "",
			httpOnly: true,
			secure: true,
			sameSite: "none",
			maxAge: 0,
			path: "/",
			domain: "localhost",
		});

		return response;
	} catch (err) {
		console.error(err);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}
