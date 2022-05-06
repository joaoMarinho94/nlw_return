import nodemailer from 'nodemailer';

import { IMailAdapter, ISendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'f50dedb620df75',
    pass: '9157b2d61ee6a2',
  },
});

export class NodemailerAdapter implements IMailAdapter {
  async sendMail({ subject, body }: ISendMailData): Promise<void> {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Joao Paulo <joaopaulim94@gmail.com>',
      subject,
      html: body,
    });
  }
}
