import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * MaterialRevaluationParams
 */
export interface MaterialRevaluationParams {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[MaterialRevaluationParams.build]] instead.
 */
export declare function createMaterialRevaluationParams(json: any): MaterialRevaluationParams;
/**
 * MaterialRevaluationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class MaterialRevaluationParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[MaterialRevaluationParams.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace MaterialRevaluationParams {
    function build(json: {
        [keys: string]: FieldType;
    }): MaterialRevaluationParams;
}
//# sourceMappingURL=MaterialRevaluationParams.d.ts.map