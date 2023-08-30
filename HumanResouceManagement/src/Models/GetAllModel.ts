export class GetAllModel{
    Id: string|undefined
    UserName: string|undefined
    NormalizedUserName: string|undefined
    Email: string|undefined
    NormalizedEmail: string|undefined
    EmailConfirmed: boolean|undefined
    PasswordHash: string|undefined
    SecurityStamp: string|undefined
    ConcurrencyStamp: string|undefined
    PhoneNumber: string|undefined
    PhoneNumberConfirmed: boolean|unknown
    TwoFactorEnabled: boolean|unknown
    LockoutEnd: string|unknown
    LockoutEnabled: boolean|unknown
    AccessFailedCount: string|unknown
}