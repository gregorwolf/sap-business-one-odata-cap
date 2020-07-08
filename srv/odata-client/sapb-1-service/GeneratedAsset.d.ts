import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * GeneratedAsset
 */
export interface GeneratedAsset {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
    /**
     * Visual Order.
     * @nullable
     */
    visualOrder?: number;
    /**
     * Asset Code.
     * @nullable
     */
    assetCode?: string;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * Serial Number.
     * @nullable
     */
    serialNumber?: string;
    /**
     * Amount.
     * @nullable
     */
    amount?: number;
    /**
     * Amount Sc.
     * @nullable
     */
    amountSc?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[GeneratedAsset.build]] instead.
 */
export declare function createGeneratedAsset(json: any): GeneratedAsset;
/**
 * GeneratedAssetField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class GeneratedAssetField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[GeneratedAsset.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[GeneratedAsset.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[GeneratedAsset.visualOrder]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    visualOrder: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[GeneratedAsset.assetCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    assetCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[GeneratedAsset.remarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[GeneratedAsset.serialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    serialNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[GeneratedAsset.amount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    amount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[GeneratedAsset.amountSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    amountSc: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace GeneratedAsset {
    function build(json: {
        [keys: string]: FieldType;
    }): GeneratedAsset;
}
//# sourceMappingURL=GeneratedAsset.d.ts.map