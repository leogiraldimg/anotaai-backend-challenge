import { v4 as uuidv4 } from "uuid";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("owners")
class OwnerDataMapperTypeOrm {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "username", unique: true, nullable: false })
    username: string;

    @Column({ name: "created_at", type: "timestamp", nullable: false })
    createdAt: Date;

    @Column({ name: "updated_at", type: "timestamp", nullable: true })
    updatedAt: Date | null;

    constructor(params?: {
        id?: string;
        username: string;
        createdAt: Date;
        updatedAt?: Date | null;
    }) {
        this.id = (params && params.id) || uuidv4();
        this.username = params && params.username;
        this.createdAt = params && params.createdAt;
        this.updatedAt = (params && params.updatedAt) || null;
    }
}

export { OwnerDataMapperTypeOrm };
