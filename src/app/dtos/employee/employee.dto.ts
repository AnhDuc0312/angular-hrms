export class EmployeeDTO {
    name: string;
    gender: string;
    date_of_birth: Date;
    email: string;
    phone_number: string;
    address: string;
    contact_start_date: Date;
    contact_end_date: Date;
    avatar_url: string;
    education: string;
    department: string;
    position: string;

    constructor(
        name: string,
        gender: string,
        date_of_birth: Date,
        email: string,
        phone_number: string,
        address: string,
        contact_start_date: Date,
        contact_end_date: Date,
        avatar_url: string,
        education: string,
        department: string,
        position: string
      ) {
        this.name = name;
        this.gender = gender;
        this.date_of_birth = date_of_birth;
        this.email = email;
        this.phone_number = phone_number;
        this.address = address;
        this.contact_start_date = contact_start_date;
        this.contact_end_date = contact_end_date;
        this.avatar_url = avatar_url;
        this.education = education;
        this.department = department;
        this.position = position;
      }
}