import { PolicyBase } from './policy-base.model';

export interface Policy extends PolicyBase {
    description;
    coverageType;
    coveragePercentage;
    coverageTime;
    cost;
    riskType;
}
