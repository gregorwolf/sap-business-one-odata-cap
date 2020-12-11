import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DeductionTaxSubGroupParams
 */
export interface DeductionTaxSubGroupParams {
    /**
     * Group Code.
     * @nullable
     */
    groupCode?: string;
    /**
     * Group Name.
     * @nullable
     */
    groupName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[DeductionTaxSubGroupParams.build]] instead.
 */
export declare function createDeductionTaxSubGroupParams(json: any): DeductionTaxSubGroupParams;
/**
 * DeductionTaxSubGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DeductionTaxSubGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DeductionTaxSubGroupParams> {
    /**
     * Representation of the [[DeductionTaxSubGroupParams.groupCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    groupCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DeductionTaxSubGroupParams.groupName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    groupName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of DeductionTaxSubGroupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DeductionTaxSubGroupParams {
    /**
     * Metadata information on all properties of the `DeductionTaxSubGroupParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DeductionTaxSubGroupParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DeductionTaxSubGroupParams;
}
//# sourceMappingURL=DeductionTaxSubGroupParams.d.ts.map