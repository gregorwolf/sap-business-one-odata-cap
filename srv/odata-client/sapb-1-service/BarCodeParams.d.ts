import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BarCodeParams
 */
export interface BarCodeParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Item No.
     * @nullable
     */
    itemNo?: string;
    /**
     * Uo M Entry.
     * @nullable
     */
    uoMEntry?: number;
    /**
     * Barcode.
     * @nullable
     */
    barcode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BarCodeParams.build]] instead.
 */
export declare function createBarCodeParams(json: any): BarCodeParams;
/**
 * BarCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BarCodeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BarCodeParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BarCodeParams.itemNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BarCodeParams.uoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BarCodeParams.barcode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    barcode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace BarCodeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BarCodeParams;
}
//# sourceMappingURL=BarCodeParams.d.ts.map