import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class BankStatementsFilterField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BankStatementsFilter> {
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
    /**
     * Creates an instance of BankStatementsFilterField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BankStatementsFilter {
    /**
     * Metadata information on all properties of the `BankStatementsFilter` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BankStatementsFilter>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BankStatementsFilter;
}
//# sourceMappingURL=BankStatementsFilter.d.ts.map