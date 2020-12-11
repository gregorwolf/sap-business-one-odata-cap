import { Moment } from 'moment';
import { BlanketAgreementsDetailsLine } from './BlanketAgreementsDetailsLine';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BlanketAgreementsItemsLine
 */
export interface BlanketAgreementsItemsLine {
    /**
     * Agreement No.
     * @nullable
     */
    agreementNo?: number;
    /**
     * Agreement Row Number.
     * @nullable
     */
    agreementRowNumber?: number;
    /**
     * Item No.
     * @nullable
     */
    itemNo?: string;
    /**
     * Item Description.
     * @nullable
     */
    itemDescription?: string;
    /**
     * Item Group.
     * @nullable
     */
    itemGroup?: number;
    /**
     * Planned Quantity.
     * @nullable
     */
    plannedQuantity?: number;
    /**
     * Unit Price.
     * @nullable
     */
    unitPrice?: number;
    /**
     * Price Currency.
     * @nullable
     */
    priceCurrency?: string;
    /**
     * Cumulative Quantity.
     * @nullable
     */
    cumulativeQuantity?: number;
    /**
     * Cumulative Amount Lc.
     * @nullable
     */
    cumulativeAmountLc?: number;
    /**
     * Cumulative Amount Fc.
     * @nullable
     */
    cumulativeAmountFc?: number;
    /**
     * Free Text.
     * @nullable
     */
    freeText?: string;
    /**
     * Inventory Uo M.
     * @nullable
     */
    inventoryUoM?: string;
    /**
     * Portion Of Returns.
     * @nullable
     */
    portionOfReturns?: number;
    /**
     * End Of Warranty.
     * @nullable
     */
    endOfWarranty?: Moment;
    /**
     * Planned Amount Lc.
     * @nullable
     */
    plannedAmountLc?: number;
    /**
     * Planned Amount Fc.
     * @nullable
     */
    plannedAmountFc?: number;
    /**
     * Line Discount.
     * @nullable
     */
    lineDiscount?: number;
    /**
     * Uo M Entry.
     * @nullable
     */
    uoMEntry?: number;
    /**
     * Uo M Code.
     * @nullable
     */
    uoMCode?: string;
    /**
     * Units Of Measurement.
     * @nullable
     */
    unitsOfMeasurement?: number;
    /**
     * Undelivered Cumulative Quantity.
     * @nullable
     */
    undeliveredCumulativeQuantity?: number;
    /**
     * Undelivered Cumulative Amount Lc.
     * @nullable
     */
    undeliveredCumulativeAmountLc?: number;
    /**
     * Undelivered Cumulative Amount Fc.
     * @nullable
     */
    undeliveredCumulativeAmountFc?: number;
    /**
     * Shipping Type.
     * @nullable
     */
    shippingType?: number;
    /**
     * Project.
     * @nullable
     */
    project?: string;
    /**
     * Tax Code.
     * @nullable
     */
    taxCode?: string;
    /**
     * Tax Rate.
     * @nullable
     */
    taxRate?: number;
    /**
     * Planned Vat Amount Lc.
     * @nullable
     */
    plannedVatAmountLc?: number;
    /**
     * Planned Vat Amount Fc.
     * @nullable
     */
    plannedVatAmountFc?: number;
    /**
     * Cumulative Vat Amount Lc.
     * @nullable
     */
    cumulativeVatAmountLc?: number;
    /**
     * Cumulative Vat Amount Fc.
     * @nullable
     */
    cumulativeVatAmountFc?: number;
    /**
     * Blanket Agreements Details Lines.
     * @nullable
     */
    blanketAgreementsDetailsLines?: BlanketAgreementsDetailsLine[];
}
/**
 * @deprecated Since v1.6.0. Use [[BlanketAgreementsItemsLine.build]] instead.
 */
export declare function createBlanketAgreementsItemsLine(json: any): BlanketAgreementsItemsLine;
/**
 * BlanketAgreementsItemsLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BlanketAgreementsItemsLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BlanketAgreementsItemsLine> {
    /**
     * Representation of the [[BlanketAgreementsItemsLine.agreementNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    agreementNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.agreementRowNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    agreementRowNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.itemNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.itemDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.itemGroup]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemGroup: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.plannedQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    plannedQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.unitPrice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    unitPrice: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.priceCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priceCurrency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.cumulativeQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cumulativeQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.cumulativeAmountLc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cumulativeAmountLc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.cumulativeAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cumulativeAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.freeText]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    freeText: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.inventoryUoM]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryUoM: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.portionOfReturns]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    portionOfReturns: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.endOfWarranty]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    endOfWarranty: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.plannedAmountLc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    plannedAmountLc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.plannedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    plannedAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.lineDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineDiscount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.uoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.uoMCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.unitsOfMeasurement]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    unitsOfMeasurement: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.undeliveredCumulativeQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    undeliveredCumulativeQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.undeliveredCumulativeAmountLc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    undeliveredCumulativeAmountLc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.undeliveredCumulativeAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    undeliveredCumulativeAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.shippingType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shippingType: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.project]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    project: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.taxCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.taxRate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxRate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.plannedVatAmountLc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    plannedVatAmountLc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.plannedVatAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    plannedVatAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.cumulativeVatAmountLc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cumulativeVatAmountLc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.cumulativeVatAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cumulativeVatAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsItemsLine.blanketAgreementsDetailsLines]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    blanketAgreementsDetailsLines: CollectionField<EntityT, BlanketAgreementsDetailsLine>;
    /**
     * Creates an instance of BlanketAgreementsItemsLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BlanketAgreementsItemsLine {
    /**
     * Metadata information on all properties of the `BlanketAgreementsItemsLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BlanketAgreementsItemsLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | BlanketAgreementsDetailsLine;
    }): BlanketAgreementsItemsLine;
}
//# sourceMappingURL=BlanketAgreementsItemsLine.d.ts.map