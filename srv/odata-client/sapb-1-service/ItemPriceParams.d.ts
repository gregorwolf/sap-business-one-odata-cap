import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ItemPriceParams
 */
export interface ItemPriceParams {
    /**
     * Date.
     * @nullable
     */
    date?: Moment;
    /**
     * Uo M Entry.
     * @nullable
     */
    uoMEntry?: number;
    /**
     * Blanket Agreement Number.
     * @nullable
     */
    blanketAgreementNumber?: number;
    /**
     * Blanket Agreement Line.
     * @nullable
     */
    blanketAgreementLine?: number;
    /**
     * Uo M Quantity.
     * @nullable
     */
    uoMQuantity?: number;
    /**
     * Inventory Quantity.
     * @nullable
     */
    inventoryQuantity?: number;
    /**
     * Currency.
     * @nullable
     */
    currency?: string;
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Card Code.
     * @nullable
     */
    cardCode?: string;
    /**
     * Price List.
     * @nullable
     */
    priceList?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ItemPriceParams.build]] instead.
 */
export declare function createItemPriceParams(json: any): ItemPriceParams;
/**
 * ItemPriceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ItemPriceParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ItemPriceParams.date]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    date: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ItemPriceParams.uoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemPriceParams.blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    blanketAgreementNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemPriceParams.blanketAgreementLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    blanketAgreementLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemPriceParams.uoMQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemPriceParams.inventoryQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemPriceParams.currency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    currency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemPriceParams.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemPriceParams.cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cardCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemPriceParams.priceList]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priceList: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ItemPriceParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ItemPriceParams;
}
//# sourceMappingURL=ItemPriceParams.d.ts.map