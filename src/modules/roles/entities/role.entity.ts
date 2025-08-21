import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string; //nombre del rol

  @Column({ type: 'text', nullable: true })
  description: string | null; //descripción del rol

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date; // Fecha/hora de creación

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: Date; // Fecha/hora de actualización

  //Falta la relacion con companiess y permissions
}
