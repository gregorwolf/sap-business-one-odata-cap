import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BankStatementsFilter
 */
export interface BankStatementsFilter {
    /**
     * Country.
     * @nullable
     */
    country?: string;
    /**
     * Bank.
     * @nullable
     */
    bank?: string;
    /**
     * Account.
     * @nullable
     */
    account?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BankStatementsFilter.build]] instead.
 */
export declare function createBankStatementsFilter(json: any): BankStatementsFilter;
/**
 * BankStatementsFilterField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BankStatementsFilterField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BankStatementsFilter.country]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    country: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementsFilter.bank]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bank: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementsFilter.account]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    account: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace BankStatementsFilter {
    function build(json: {
        [keys: string]: FieldType;
    }): BankStatementsFilter;
}
//# sourceMappingURL=BankStatementsFilter.d.ts.map