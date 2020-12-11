import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * NatureOfAssesseeParams
 */
export interface NatureOfAssesseeParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[NatureOfAssesseeParams.build]] instead.
 */
export declare function createNatureOfAssesseeParams(json: any): NatureOfAssesseeParams;
/**
 * NatureOfAssesseeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class NatureOfAssesseeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, NatureOfAssesseeParams> {
    /**
     * Representation of the [[NatureOfAssesseeParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[NatureOfAssesseeParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[NatureOfAssesseeParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of NatureOfAssesseeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace NatureOfAssesseeParams {
    /**
     * Metadata information on all properties of the `NatureOfAssesseeParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<NatureOfAssesseeParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): NatureOfAssesseeParams;
}
//# sourceMappingURL=NatureOfAssesseeParams.d.ts.map