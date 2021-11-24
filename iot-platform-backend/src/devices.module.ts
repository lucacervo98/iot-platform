import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DevicesController } from './devices.controller';
import { DevicesService } from './devices.service';
import { Device, DeviceSchema } from './schemas/device.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Device.name, schema: DeviceSchema }],
      'devices',
    ),
  ],
  controllers: [DevicesController],
  providers: [DevicesService],
})
export class DevicesModule {}
