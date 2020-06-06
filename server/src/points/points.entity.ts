import {
  Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Points {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  image: string

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string

  @Column({
    type: 'varchar', length: 255, nullable: false, unique: true,
  })
  email: string

  @Column({ type: 'varchar', length: 14, nullable: false })
  whatsapp: string

  @Column({ type: 'decimal', nullable: false })
  latitude: number

  @Column({ type: 'decimal', nullable: false })
  longitude: number

  @Column({ type: 'varchar', length: 255, nullable: false })
  city: string

  @Column({ type: 'varchar', length: 2, nullable: false })
  uf: string

  @CreateDateColumn({
    name: 'created_at', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
