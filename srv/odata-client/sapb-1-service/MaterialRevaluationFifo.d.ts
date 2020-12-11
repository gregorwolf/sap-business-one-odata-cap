import { Layer } from './Layer';
import { CollectionField, ComplexTypeField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * MaterialRevaluationFifo
 */
export interface MaterialRevaluationFifo {
    /**
     * Layers.
     * @nullable
     */
    layers?: Layer[];
}
/**
 * @deprecated Since v1.6.0. Use [[MaterialRevaluationFifo.build]] instead.
 */
export declare function createMaterialRevaluationFifo(json: any): MaterialRevaluationFifo;
/**
 * MaterialRevaluationFifoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class MaterialRevaluationFifoField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, MaterialRevaluationFifo> {
    /**
     * Representation of the [[MaterialRevaluationFifo.layers]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    layers: CollectionField<EntityT, Layer>;
    /**
     * Creates an instance of MaterialRevaluationFifoField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace MaterialRevaluationFifo {
    /**
     * Metadata information on all properties of the `MaterialRevaluationFifo` complex type.
     */
    const _propertyMetadata: PropertyMetadata<MaterialRevaluationFifo>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | Layer;
    }): MaterialRevaluationFifo;
}
//# sourceMappingURL=MaterialRevaluationFifo.d.ts.map