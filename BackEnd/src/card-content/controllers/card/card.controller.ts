import {
  Controller,
  HttpCode,
  HttpStatus,
  Get,
  Param,
  Body,
  Post,
  Delete,
} from '@nestjs/common';
import { CardService } from 'src/card-content/services/card/card.service';
import { CreateCardDto } from 'src/card-content/dtos/create-card.dto';
import { UpdateCardDto } from 'src/card-content/dtos/update-card.dto';
import { Patch, Put, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  async getCards() {
    const cardsData = await this.cardService.getAll();
    return cardsData;
  }

  @Get('/:id')
  async getCardById(@Param('id') id: string) {
    return await this.cardService.getCardById(id);
  }

  @Get('/page/:page')
  async getCardByPage(@Param('page') page: string) {
    return await this.cardService.getCardByPage(page);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async createCard(@Body() createCardDto: CreateCardDto) {
    console.log('in the controller');
    return await this.cardService.createCard(createCardDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('/:id')
  async deleteCard(@Param('id') id: string) {
    return await this.cardService.deleteCard(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('/:id')
  async updateCard(
    @Param('id') id: string,
    @Body() updateCardDto: UpdateCardDto,
  ) {
    return await this.cardService.updateCard(id, updateCardDto);
  }
}
