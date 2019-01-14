export class ClientPolicy {
  constructor(
    public id: number,
    public clientId: number,
    public policyId: number,
    public policyName: string,
    public startDate: Date,
    public isActive: boolean
  ) {}
}
