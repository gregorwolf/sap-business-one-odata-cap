import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BankPageParams
 */
export interface BankPageParams {
    /**
     * Account Code.
     * @nullable
     */
    accountCode?: string;
    /**
     * Sequence.
     * @nullable
     */
    sequence?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BankPageParams.build]] instead.
 */
export declare function createBankPageParams(json: any): BankPageParams;
/**
 * BankPageParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BankPageParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BankPageParams> {
    /**
     * Representation of the [[BankPageParams.accountCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankPageParams.sequence]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sequence: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of BankPageParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BankPageParams {
    /**
     * Metadata information on all properties of the `BankPageParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BankPageParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BankPageParams;
}
//# sourceMappingURL=BankPageParams.d.ts.map