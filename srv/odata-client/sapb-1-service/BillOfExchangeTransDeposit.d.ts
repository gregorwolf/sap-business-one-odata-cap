import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BillOfExchangeTransDeposit
 */
export interface BillOfExchangeTransDeposit {
    /**
     * Deposit Norm.
     * @nullable
     */
    depositNorm?: string;
    /**
     * Bank Country.
     * @nullable
     */
    bankCountry?: string;
    /**
     * Bank Account.
     * @nullable
     */
    bankAccount?: string;
    /**
     * Bank Deposit Account.
     * @nullable
     */
    bankDepositAccount?: string;
    /**
     * Bank Branch.
     * @nullable
     */
    bankBranch?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BillOfExchangeTransDeposit.build]] instead.
 */
export declare function createBillOfExchangeTransDeposit(json: any): BillOfExchangeTransDeposit;
/**
 * BillOfExchangeTransDepositField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BillOfExchangeTransDepositField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BillOfExchangeTransDeposit.depositNorm]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    depositNorm: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchangeTransDeposit.bankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bankCountry: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchangeTransDeposit.bankAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bankAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchangeTransDeposit.bankDepositAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bankDepositAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchangeTransDeposit.bankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bankBranch: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace BillOfExchangeTransDeposit {
    function build(json: {
        [keys: string]: FieldType;
    }): BillOfExchangeTransDeposit;
}
//# sourceMappingURL=BillOfExchangeTransDeposit.d.ts.map