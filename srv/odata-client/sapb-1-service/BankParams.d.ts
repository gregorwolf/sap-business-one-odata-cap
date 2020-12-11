import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BankParams
 */
export interface BankParams {
    /**
     * Absolute Entry.
     * @nullable
     */
    absoluteEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BankParams.build]] instead.
 */
export declare function createBankParams(json: any): BankParams;
/**
 * BankParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BankParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BankParams> {
    /**
     * Representation of the [[BankParams.absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absoluteEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of BankParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BankParams {
    /**
     * Metadata information on all properties of the `BankParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BankParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BankParams;
}
//# sourceMappingURL=BankParams.d.ts.map