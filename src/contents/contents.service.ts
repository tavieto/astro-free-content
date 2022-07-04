import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { Content, ContentDocument } from './entities/content.entity';

@Injectable()
export class ContentsService {
  constructor(@InjectModel(Content.name) private contentModel: Model<ContentDocument>) {}

  create(createContentDto: CreateContentDto) {
    const content = new this.contentModel(createContentDto);
    return content.save();
  }

  findAll() {
    return this.contentModel.find();
  }

  findOne(id: string) {
    return this.contentModel.findById(id);
  }

  update(id: string, updateContentDto: UpdateContentDto) {
    return this.contentModel.findByIdAndUpdate(
      {
        _id: id,
      }, 
      {
        $set: updateContentDto,
      },
      {
        new: true,
      }
    );
  }

  remove(id: string) {
    return this.contentModel.deleteOne(
      {
        _id: id
      }
    ).exec();
  }
}
