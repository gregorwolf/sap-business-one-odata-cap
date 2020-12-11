import { Moment } from 'moment';
import { SpecialPriceQuantityArea } from './SpecialPriceQuantityArea';
import { BoYesNoEnum } from './BoYesNoEnum';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * SpecialPriceDataArea
 */
export interface SpecialPriceDataArea {
    /**
     * Price Currency.
     * @nullable
     */
    priceCurrency?: string;
    /**
     * Auto Update.
     * @nullable
     */
    autoUpdate?: BoYesNoEnum;
    /**
     * Dateto.
     * @nullable
     */
    dateto?: Moment;
    /**
     * Discount.
     * @nullable
     */
    discount?: number;
    /**
     * Special Price.
     * @nullable
     */
    specialPrice?: number;
    /**
     * Date From.
     * @nullable
     */
    dateFrom?: Moment;
    /**
     * Bp Code.
     * @nullable
     */
    bpCode?: string;
    /**
     * Price List No.
     * @nullable
     */
    priceListNo?: number;
    /**
     * Item No.
     * @nullable
     */
    itemNo?: string;
    /**
     * Row Number.
     * @nullable
     */
    rowNumber?: number;
    /**
     * Special Price Quantity Areas.
     * @nullable
     */
    specialPriceQuantityAreas?: SpecialPriceQuantityArea[];
}
/**
 * @deprecated Since v1.6.0. Use [[SpecialPriceDataArea.build]] instead.
 */
export declare function createSpecialPriceDataArea(json: any): SpecialPriceDataArea;
/**
 * SpecialPriceDataAreaField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SpecialPriceDataAreaField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SpecialPriceDataArea> {
    /**
     * Representation of the [[SpecialPriceDataArea.priceCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priceCurrency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SpecialPriceDataArea.autoUpdate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    autoUpdate: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[SpecialPriceDataArea.dateto]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dateto: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[SpecialPriceDataArea.discount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    discount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SpecialPriceDataArea.specialPrice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    specialPrice: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SpecialPriceDataArea.dateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dateFrom: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[SpecialPriceDataArea.bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SpecialPriceDataArea.priceListNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priceListNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SpecialPriceDataArea.itemNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SpecialPriceDataArea.rowNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SpecialPriceDataArea.specialPriceQuantityAreas]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    specialPriceQuantityAreas: CollectionField<EntityT, SpecialPriceQuantityArea>;
    /**
     * Creates an instance of SpecialPriceDataAreaField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace SpecialPriceDataArea {
    /**
     * Metadata information on all properties of the `SpecialPriceDataArea` complex type.
     */
    const _propertyMetadata: PropertyMetadata<SpecialPriceDataArea>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | SpecialPriceQuantityArea;
    }): SpecialPriceDataArea;
}
//# sourceMappingURL=SpecialPriceDataArea.d.ts.map