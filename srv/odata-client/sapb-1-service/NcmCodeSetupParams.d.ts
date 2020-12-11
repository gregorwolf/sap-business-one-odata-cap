import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * NcmCodeSetupParams
 */
export interface NcmCodeSetupParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Ncm Code.
     * @nullable
     */
    ncmCode?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[NcmCodeSetupParams.build]] instead.
 */
export declare function createNcmCodeSetupParams(json: any): NcmCodeSetupParams;
/**
 * NcmCodeSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class NcmCodeSetupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, NcmCodeSetupParams> {
    /**
     * Representation of the [[NcmCodeSetupParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[NcmCodeSetupParams.ncmCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ncmCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[NcmCodeSetupParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of NcmCodeSetupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace NcmCodeSetupParams {
    /**
     * Metadata information on all properties of the `NcmCodeSetupParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<NcmCodeSetupParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): NcmCodeSetupParams;
}
//# sourceMappingURL=NcmCodeSetupParams.d.ts.map