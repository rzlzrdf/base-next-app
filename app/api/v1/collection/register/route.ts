import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
	try {
		const { email, name } = await request.json();
		return Response.json({
			status: 200,
			messsage: 'Successfully Saved',
			data: {
				email,
				name,
			},
		});
	} catch (error) {
		return Response.json({
			status: 500,
		});
	}
}

export async function GET() {
	return Response.error();
}
