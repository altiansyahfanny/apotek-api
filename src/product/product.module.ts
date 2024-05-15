import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [CommonModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
