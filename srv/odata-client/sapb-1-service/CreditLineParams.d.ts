import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * CreditLineParams
 */
export interface CreditLineParams {
    /**
     * Abs Id.
     * @nullable
     */
    absId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[CreditLineParams.build]] instead.
 */
export declare function createCreditLineParams(json: any): CreditLineParams;
/**
 * CreditLineParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CreditLineParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CreditLineParams> {
    /**
     * Representation of the [[CreditLineParams.absId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of CreditLineParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CreditLineParams {
    /**
     * Metadata information on all properties of the `CreditLineParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CreditLineParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CreditLineParams;
}
//# sourceMappingURL=CreditLineParams.d.ts.map