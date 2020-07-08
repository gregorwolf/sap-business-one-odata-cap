import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * Layer
 */
export interface Layer {
    /**
     * Transaction Sequence Num.
     * @nullable
     */
    transactionSequenceNum?: number;
    /**
     * Layer Id.
     * @nullable
     */
    layerId?: number;
    /**
     * Doc Number.
     * @nullable
     */
    docNumber?: string;
    /**
     * Entry Date.
     * @nullable
     */
    entryDate?: Moment;
    /**
     * Current Cost.
     * @nullable
     */
    currentCost?: number;
    /**
     * Open Qty.
     * @nullable
     */
    openQty?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[Layer.build]] instead.
 */
export declare function createLayer(json: any): Layer;
/**
 * LayerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class LayerField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[Layer.transactionSequenceNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transactionSequenceNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[Layer.layerId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    layerId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[Layer.docNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Layer.entryDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    entryDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[Layer.currentCost]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    currentCost: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[Layer.openQty]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    openQty: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace Layer {
    function build(json: {
        [keys: string]: FieldType;
    }): Layer;
}
//# sourceMappingURL=Layer.d.ts.map