import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('companies')
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  tax_id: string; //va ser un identificador fiscal

  @Column({ type: 'text', nullable: true })
  logo_url: string | null;

  @Column({ type: 'numeric', precision: 5, scale: 2, default: 0 })
  vat_percent: number; //porcentaje de IVA

  @Column({ type: 'text', nullable: true })
  ticket_footer: string; // Texto personalizado para pie de ticket

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date; // Fecha/hora de creación

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: Date; // Fecha/hora de actualización
}
