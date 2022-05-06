import { prisma } from '../../prisma';
import {
  IFeedbackCreateData,
  IFeedbacksRepository,
} from '../feedbacks-repository';

export class PrismaFeedbacksRepository implements IFeedbacksRepository {
  async create({
    comment,
    screenshot,
    type,
  }: IFeedbackCreateData): Promise<void> {
    await prisma.feedback.create({
      data: { type, comment, screenshot },
    });
  }
}
