import { LandedCostBaseDocumentTypeEnum } from './LandedCostBaseDocumentTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * LandedCostItemLine
 */
export interface LandedCostItemLine {
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
     * Base Document Type.
     * @nullable
     */
    baseDocumentType?: LandedCostBaseDocumentTypeEnum;
    /**
     * Base Entry.
     * @nullable
     */
    baseEntry?: number;
    /**
     * Number.
     * @nullable
     */
    number?: string;
    /**
     * Item Description.
     * @nullable
     */
    itemDescription?: string;
    /**
     * Quantity.
     * @nullable
     */
    quantity?: number;
    /**
     * Base Document Price.
     * @nullable
     */
    baseDocumentPrice?: number;
    /**
     * Rate.
     * @nullable
     */
    rate?: number;
    /**
     * Projected Customs.
     * @nullable
     */
    projectedCustoms?: number;
    /**
     * Projected Customs Fc.
     * @nullable
     */
    projectedCustomsFc?: number;
    /**
     * Expenditure.
     * @nullable
     */
    expenditure?: number;
    /**
     * Expenditure Fc.
     * @nullable
     */
    expenditureFc?: number;
    /**
     * Warehouse Price.
     * @nullable
     */
    warehousePrice?: number;
    /**
     * Warehouse Price Fc.
     * @nullable
     */
    warehousePriceFc?: number;
    /**
     * Line Total.
     * @nullable
     */
    lineTotal?: number;
    /**
     * Line Total Fc.
     * @nullable
     */
    lineTotalFc?: number;
    /**
     * Volume.
     * @nullable
     */
    volume?: number;
    /**
     * Volume Uo M.
     * @nullable
     */
    volumeUoM?: number;
    /**
     * Weight 1.
     * @nullable
     */
    weight1?: number;
    /**
     * Weight 1 Unit Code.
     * @nullable
     */
    weight1UnitCode?: number;
    /**
     * Weight 2.
     * @nullable
     */
    weight2?: number;
    /**
     * Weight 2 Unit Code.
     * @nullable
     */
    weight2UnitCode?: number;
    /**
     * Vendor Code.
     * @nullable
     */
    vendorCode?: string;
    /**
     * Reference.
     * @nullable
     */
    reference?: string;
    /**
     * Factor Without Customs.
     * @nullable
     */
    factorWithoutCustoms?: number;
    /**
     * Factor With Customs.
     * @nullable
     */
    factorWithCustoms?: number;
    /**
     * Inventory Uo M.
     * @nullable
     */
    inventoryUoM?: string;
    /**
     * Block Number.
     * @nullable
     */
    blockNumber?: string;
    /**
     * Import Log.
     * @nullable
     */
    importLog?: string;
    /**
     * Original Warehouse.
     * @nullable
     */
    originalWarehouse?: string;
    /**
     * Warehouse.
     * @nullable
     */
    warehouse?: string;
    /**
     * Release Number.
     * @nullable
     */
    releaseNumber?: number;
    /**
     * Variant Costs.
     * @nullable
     */
    variantCosts?: number;
    /**
     * Fix Costs.
     * @nullable
     */
    fixCosts?: number;
    /**
     * Variant Costs Fc.
     * @nullable
     */
    variantCostsFc?: number;
    /**
     * Fix Costs Fc.
     * @nullable
     */
    fixCostsFc?: number;
    /**
     * Customs.
     * @nullable
     */
    customs?: number;
    /**
     * Customs Fc.
     * @nullable
     */
    customsFc?: number;
    /**
     * Base Document Value Line Total.
     * @nullable
     */
    baseDocumentValueLineTotal?: number;
    /**
     * Base Document Value Line Total Fc.
     * @nullable
     */
    baseDocumentValueLineTotalFc?: number;
    /**
     * Allocated Unit Costs Line Total.
     * @nullable
     */
    allocatedUnitCostsLineTotal?: number;
    /**
     * Allocated Unit Costs Line Total Fc.
     * @nullable
     */
    allocatedUnitCostsLineTotalFc?: number;
    /**
     * Customs Value.
     * @nullable
     */
    customsValue?: number;
    /**
     * Customs Value Fc.
     * @nullable
     */
    customsValueFc?: number;
    /**
     * Total Costs.
     * @nullable
     */
    totalCosts?: number;
    /**
     * Total Costs Fc.
     * @nullable
     */
    totalCostsFc?: number;
    /**
     * Total Volume.
     * @nullable
     */
    totalVolume?: number;
    /**
     * Base Line.
     * @nullable
     */
    baseLine?: number;
    /**
     * Total Line Projected Customs.
     * @nullable
     */
    totalLineProjectedCustoms?: number;
    /**
     * Allocated Costs Line Total.
     * @nullable
     */
    allocatedCostsLineTotal?: number;
    /**
     * Fo Band Included Costs.
     * @nullable
     */
    foBandIncludedCosts?: number;
    /**
     * Fo Band Included Costs Fc.
     * @nullable
     */
    foBandIncludedCostsFc?: number;
    /**
     * Project.
     * @nullable
     */
    project?: string;
    /**
     * Distribution Rule.
     * @nullable
     */
    distributionRule?: string;
    /**
     * Distribution Rule 2.
     * @nullable
     */
    distributionRule2?: string;
    /**
     * Distribution Rule 3.
     * @nullable
     */
    distributionRule3?: string;
    /**
     * Distribution Rule 4.
     * @nullable
     */
    distributionRule4?: string;
    /**
     * Distribution Rule 5.
     * @nullable
     */
    distributionRule5?: string;
    /**
     * Price List.
     * @nullable
     */
    priceList?: number;
    /**
     * Automatic Expenditure.
     * @nullable
     */
    automaticExpenditure?: BoYesNoEnum;
    /**
     * Inventory Valuation.
     * @nullable
     */
    inventoryValuation?: BoYesNoEnum;
    /**
     * Origin Line.
     * @nullable
     */
    originLine?: number;
    /**
     * Currency.
     * @nullable
     */
    currency?: string;
    /**
     * Customs Group Rate.
     * @nullable
     */
    customsGroupRate?: number;
    /**
     * Vat Group.
     * @nullable
     */
    vatGroup?: string;
    /**
     * Vat Percent.
     * @nullable
     */
    vatPercent?: number;
    /**
     * Excise Sum.
     * @nullable
     */
    exciseSum?: number;
    /**
     * Excise Sum Fc.
     * @nullable
     */
    exciseSumFc?: number;
    /**
     * Excise Affect Stock.
     * @nullable
     */
    exciseAffectStock?: BoYesNoEnum;
    /**
     * Customs Cost.
     * @nullable
     */
    customsCost?: number;
    /**
     * Customs Cost Fc.
     * @nullable
     */
    customsCostFc?: number;
    /**
     * Customs Affect Stock.
     * @nullable
     */
    customsAffectStock?: BoYesNoEnum;
    /**
     * Customs Vat.
     * @nullable
     */
    customsVat?: number;
    /**
     * Customs Vat Fc.
     * @nullable
     */
    customsVatFc?: number;
    /**
     * Customs Vat Affect Stock.
     * @nullable
     */
    customsVatAffectStock?: BoYesNoEnum;
    /**
     * Ccd Number.
     * @nullable
     */
    ccdNumber?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[LandedCostItemLine.build]] instead.
 */
export declare function createLandedCostItemLine(json: any): LandedCostItemLine;
/**
 * LandedCostItemLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class LandedCostItemLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, LandedCostItemLine> {
    /**
     * Representation of the [[LandedCostItemLine.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.baseDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseDocumentType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.baseEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.number]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    number: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.itemDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.quantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    quantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.baseDocumentPrice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseDocumentPrice: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.rate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.projectedCustoms]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    projectedCustoms: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.projectedCustomsFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    projectedCustomsFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.expenditure]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expenditure: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.expenditureFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expenditureFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.warehousePrice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehousePrice: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.warehousePriceFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehousePriceFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.lineTotal]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineTotal: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.lineTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineTotalFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.volume]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    volume: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.volumeUoM]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    volumeUoM: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.weight1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    weight1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.weight1UnitCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    weight1UnitCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.weight2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    weight2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.weight2UnitCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    weight2UnitCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.vendorCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vendorCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.reference]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reference: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.factorWithoutCustoms]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    factorWithoutCustoms: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.factorWithCustoms]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    factorWithCustoms: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.inventoryUoM]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryUoM: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.blockNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    blockNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.importLog]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    importLog: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.originalWarehouse]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    originalWarehouse: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.warehouse]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouse: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.releaseNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    releaseNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.variantCosts]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    variantCosts: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.fixCosts]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fixCosts: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.variantCostsFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    variantCostsFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.fixCostsFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fixCostsFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.customs]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customs: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.customsFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customsFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.baseDocumentValueLineTotal]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseDocumentValueLineTotal: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.baseDocumentValueLineTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseDocumentValueLineTotalFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.allocatedUnitCostsLineTotal]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    allocatedUnitCostsLineTotal: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.allocatedUnitCostsLineTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    allocatedUnitCostsLineTotalFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.customsValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customsValue: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.customsValueFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customsValueFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.totalCosts]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalCosts: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.totalCostsFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalCostsFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.totalVolume]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalVolume: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.baseLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.totalLineProjectedCustoms]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalLineProjectedCustoms: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.allocatedCostsLineTotal]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    allocatedCostsLineTotal: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.foBandIncludedCosts]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    foBandIncludedCosts: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.foBandIncludedCostsFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    foBandIncludedCostsFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.project]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    project: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.distributionRule]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.distributionRule2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.distributionRule3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.distributionRule4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule4: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.distributionRule5]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule5: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.priceList]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priceList: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.automaticExpenditure]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    automaticExpenditure: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.inventoryValuation]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryValuation: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.originLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    originLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.currency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    currency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.customsGroupRate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customsGroupRate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.vatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vatGroup: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vatPercent: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.exciseSum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    exciseSum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.exciseSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    exciseSumFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.exciseAffectStock]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    exciseAffectStock: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.customsCost]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customsCost: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.customsCostFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customsCostFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.customsAffectStock]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customsAffectStock: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.customsVat]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customsVat: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.customsVatFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customsVatFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.customsVatAffectStock]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customsVatAffectStock: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostItemLine.ccdNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ccdNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of LandedCostItemLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace LandedCostItemLine {
    /**
     * Metadata information on all properties of the `LandedCostItemLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<LandedCostItemLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): LandedCostItemLine;
}
//# sourceMappingURL=LandedCostItemLine.d.ts.map