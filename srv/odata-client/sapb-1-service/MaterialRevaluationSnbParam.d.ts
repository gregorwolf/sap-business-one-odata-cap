import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * MaterialRevaluationSnbParam
 */
export interface MaterialRevaluationSnbParam {
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[MaterialRevaluationSnbParam.build]] instead.
 */
export declare function createMaterialRevaluationSnbParam(json: any): MaterialRevaluationSnbParam;
/**
 * MaterialRevaluationSnbParamField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class MaterialRevaluationSnbParamField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[MaterialRevaluationSnbParam.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace MaterialRevaluationSnbParam {
    function build(json: {
        [keys: string]: FieldType;
    }): MaterialRevaluationSnbParam;
}
//# sourceMappingURL=MaterialRevaluationSnbParam.d.ts.map