import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * MaterialRevaluationFifoParams
 */
export interface MaterialRevaluationFifoParams {
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Location Type.
     * @nullable
     */
    locationType?: string;
    /**
     * Location Code.
     * @nullable
     */
    locationCode?: string;
    /**
     * Show Issued Layers.
     * @nullable
     */
    showIssuedLayers?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[MaterialRevaluationFifoParams.build]] instead.
 */
export declare function createMaterialRevaluationFifoParams(json: any): MaterialRevaluationFifoParams;
/**
 * MaterialRevaluationFifoParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class MaterialRevaluationFifoParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, MaterialRevaluationFifoParams> {
    /**
     * Representation of the [[MaterialRevaluationFifoParams.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationFifoParams.locationType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    locationType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationFifoParams.locationCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    locationCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationFifoParams.showIssuedLayers]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    showIssuedLayers: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of MaterialRevaluationFifoParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace MaterialRevaluationFifoParams {
    /**
     * Metadata information on all properties of the `MaterialRevaluationFifoParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<MaterialRevaluationFifoParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): MaterialRevaluationFifoParams;
}
//# sourceMappingURL=MaterialRevaluationFifoParams.d.ts.map