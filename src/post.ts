import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity("sample5_post")
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    title: string;

}