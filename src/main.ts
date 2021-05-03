import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (process.env.processor !== 'true') {
    await app.listen(3003);
    console.log(`Application is running on: ${await app.getUrl()}`);
  }
}
bootstrap();
