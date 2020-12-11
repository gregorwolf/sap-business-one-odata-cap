import { Moment } from 'moment';
import { TransTypesEnum } from './TransTypesEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
     * Doc Type.
     * @nullable
     */
    docType?: TransTypesEnum;
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
export declare class LayerField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, Layer> {
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
     * Representation of the [[Layer.docType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docType: ComplexTypeEnumPropertyField<EntityT>;
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
    /**
     * Creates an instance of LayerField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace Layer {
    /**
     * Metadata information on all properties of the `Layer` complex type.
     */
    const _propertyMetadata: PropertyMetadata<Layer>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): Layer;
}
//# sourceMappingURL=Layer.d.ts.map