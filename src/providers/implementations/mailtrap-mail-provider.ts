import { MailProvider, Message } from '../mail-provider'
import config, { IConfig } from 'config'
import Mail from 'nodemailer/lib/mailer'
import nodemailer from 'nodemailer'

const nodemailerConfig: IConfig = config.get('App.resources.Nodemailer')

export class MailtrapMailProvider implements MailProvider {
  private readonly transporter: Mail

  constructor () {
    this.transporter = nodemailer.createTransport({
      host: nodemailerConfig.get('host'),
      port: nodemailerConfig.get('port'),
      auth: {
        user: nodemailerConfig.get('auth.user'),
        pass: nodemailerConfig.get('auth.pass')
      }
    })
  }

  async sendMail (message: Message): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body
    })
  }
}
