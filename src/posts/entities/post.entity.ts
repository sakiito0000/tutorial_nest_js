import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('post')
export class Post {
  @PrimaryGeneratedColumn({type: "int"})
  id: number

  @Column({ nullable: false })
  title: string

  @Column({ nullable: false })
  description: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}
