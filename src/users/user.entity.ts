import { AfterInsert, 
    AfterUpdate, 
    AfterRemove,   
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    OneToMany } from "typeorm";
import { Exclude } from "class-transformer";
import { Report } from "src/reports/report.entity";

console.log(Report);


@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Exclude()
    @Column()
    password: string;

    @Column({default: true})
    admin: boolean

    @OneToMany( () => Report, (report) => report.user)
    reports: Report[];  

    @AfterInsert()
    logInsert()
    {
        console.log('Inserted user with id', this.id);
    }

    @AfterUpdate()
    logUpdate()
    {
        console.log('Updated user with id', this.id);
    }

    @AfterRemove()
    logRemove()
    {
        console.log('Removed user with id', this.id);

    }

}



