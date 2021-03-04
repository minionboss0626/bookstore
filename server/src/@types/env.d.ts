declare namespace NodeJS {
	interface ProcessEnv {
		readonly NODE_ENV: 'development' | 'production' | 'test';
		readonly PORT: string;
		readonly SERVER_URL: string;
		readonly CLIENT_URL: string;
		readonly MONGODB_URI: string;
		readonly SESSION_SECRET: string;
		readonly JWT_SECRET: string;
		readonly JWT_EXPIRED_TIME: string;
		readonly JWT_REFRESH_SECRET: string;
		readonly JWT_REFRESH_EXPIRED_TIME: string;
		readonly SENDGRID_API_KEY: string;
		readonly EMAIL_HOST: string;
		readonly EMAIL_PORT: string;
		readonly EMAIL_AUTH_USER: string;
		readonly EMAIL_AUTH_PASSWORD: string;
	}
}
