import { MigrationInterface, QueryRunner } from 'typeorm'

export class createTableUsers1599084292840 implements MigrationInterface {
  name = 'createTableUsers1599084292840'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "users" ADD "password" character varying NOT NULL')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "users" DROP COLUMN "password"')
  }
}
