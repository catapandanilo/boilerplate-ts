import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm'
import { IsEmail, MaxLength, MinLength, Matches } from 'class-validator'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  @MaxLength(50, { message: 'Name must not exceed 50 characters' })
  @MinLength(5, { message: 'Name must be at least 5 characters' })
  name: string

  @Column()
  @IsEmail()
  email: string

  @Column()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    { message: 'Password too weak, need at least one capital letter and a special character' })
  password: string

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date
}
