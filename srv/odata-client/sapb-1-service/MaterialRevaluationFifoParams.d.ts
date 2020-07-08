import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
}
/**
 * @deprecated Since v1.6.0. Use [[MaterialRevaluationFifoParams.build]] instead.
 */
export declare function createMaterialRevaluationFifoParams(json: any): MaterialRevaluationFifoParams;
/**
 * MaterialRevaluationFifoParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class MaterialRevaluationFifoParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace MaterialRevaluationFifoParams {
    function build(json: {
        [keys: string]: FieldType;
    }): MaterialRevaluationFifoParams;
}
//# sourceMappingURL=MaterialRevaluationFifoParams.d.ts.map