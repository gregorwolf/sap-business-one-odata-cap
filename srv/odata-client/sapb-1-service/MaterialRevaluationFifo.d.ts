import { Layer, LayerField } from './Layer';
import { ComplexTypeField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * MaterialRevaluationFifo
 */
export interface MaterialRevaluationFifo {
    /**
     * Layers.
     * @nullable
     */
    layers?: Layer;
}
/**
 * @deprecated Since v1.6.0. Use [[MaterialRevaluationFifo.build]] instead.
 */
export declare function createMaterialRevaluationFifo(json: any): MaterialRevaluationFifo;
/**
 * MaterialRevaluationFifoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class MaterialRevaluationFifoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[MaterialRevaluationFifo.layers]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    layers: LayerField<EntityT>;
}
export declare namespace MaterialRevaluationFifo {
    function build(json: {
        [keys: string]: FieldType | Layer;
    }): MaterialRevaluationFifo;
}
//# sourceMappingURL=MaterialRevaluationFifo.d.ts.map