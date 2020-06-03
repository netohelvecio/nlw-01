import {
  Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable,
} from 'typeorm';
import { Points } from 'src/points/points.entity';

@Entity()
export class Items {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  image: string

  @Column({ type: 'varchar', length: 255, nullable: false })
  title: string

  @CreateDateColumn({
    name: 'created_at', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @ManyToMany((type) => Points, { cascade: true })
  @JoinTable()
  points: Points[]
}
