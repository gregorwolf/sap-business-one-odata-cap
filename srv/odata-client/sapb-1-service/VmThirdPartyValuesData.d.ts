import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * VmThirdPartyValuesData
 */
export interface VmThirdPartyValuesData {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Line Id.
     * @nullable
     */
    lineId?: number;
    /**
     * Third Party System Id.
     * @nullable
     */
    thirdPartySystemId?: number;
    /**
     * Third Party Value.
     * @nullable
     */
    thirdPartyValue?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[VmThirdPartyValuesData.build]] instead.
 */
export declare function createVmThirdPartyValuesData(json: any): VmThirdPartyValuesData;
/**
 * VmThirdPartyValuesDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class VmThirdPartyValuesDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, VmThirdPartyValuesData> {
    /**
     * Representation of the [[VmThirdPartyValuesData.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[VmThirdPartyValuesData.lineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[VmThirdPartyValuesData.thirdPartySystemId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    thirdPartySystemId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[VmThirdPartyValuesData.thirdPartyValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    thirdPartyValue: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of VmThirdPartyValuesDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace VmThirdPartyValuesData {
    /**
     * Metadata information on all properties of the `VmThirdPartyValuesData` complex type.
     */
    const _propertyMetadata: PropertyMetadata<VmThirdPartyValuesData>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): VmThirdPartyValuesData;
}
//# sourceMappingURL=VmThirdPartyValuesData.d.ts.map