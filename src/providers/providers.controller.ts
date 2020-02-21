import { Controller, Post, UseInterceptors, UploadedFile, Param } from '@nestjs/common';
import { ApiConsumes, ApiBody } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { Crud } from '@nestjsx/crud';
import { ProvidersService } from './providers.serrvice';
import { ProviderEntityDto } from './dto/provider-entity.dto';
import { FileUploadDto, FileParamsDto } from './dto/file-upload.dto';

@Crud({ 
  model: {
    type: ProviderEntityDto
  }
})
@Controller('providers')
export class ProvidersController {
  constructor(public service: ProvidersService) { }
  
  @Post(':id/upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'profile picture',
    type: FileUploadDto,
  })
  uploadFile(@UploadedFile() file, @Param() params: FileParamsDto) {
    this.service.updateProfile(params.id, file);
  }
}
