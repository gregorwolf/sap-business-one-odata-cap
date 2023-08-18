/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SerialNumber } from './SerialNumber';
import { BatchNumber } from './BatchNumber';
import { CcdNumber } from './CcdNumber';
import { StockTransferLinesBinAllocation } from './StockTransferLinesBinAllocation';
import { BoYesNoEnum } from './BoYesNoEnum';
import { InvBaseDocTypeEnum } from './InvBaseDocTypeEnum';
import { BoStatus } from './BoStatus';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * StockTransferLine
 */
export interface StockTransferLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Description.
   * @nullable
   */
  itemDescription?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Price.
   * @nullable
   */
  price?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Currency.
   * @nullable
   */
  currency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Rate.
   * @nullable
   */
  rate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Discount Percent.
   * @nullable
   */
  discountPercent?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Vendor Num.
   * @nullable
   */
  vendorNum?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Serial Number.
   * @nullable
   */
  serialNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Warehouse Code.
   * @nullable
   */
  warehouseCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * From Warehouse Code.
   * @nullable
   */
  fromWarehouseCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Project Code.
   * @nullable
   */
  projectCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Factor.
   * @nullable
   */
  factor?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Factor 2.
   * @nullable
   */
  factor2?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Factor 3.
   * @nullable
   */
  factor3?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Factor 4.
   * @nullable
   */
  factor4?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Distribution Rule.
   * @nullable
   */
  distributionRule?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule 2.
   * @nullable
   */
  distributionRule2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule 3.
   * @nullable
   */
  distributionRule3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule 4.
   * @nullable
   */
  distributionRule4?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule 5.
   * @nullable
   */
  distributionRule5?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Use Base Units.
   * @nullable
   */
  useBaseUnits?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Measure Unit.
   * @nullable
   */
  measureUnit?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Units Of Measurment.
   * @nullable
   */
  unitsOfMeasurment?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Base Type.
   * @nullable
   */
  baseType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Base Line.
   * @nullable
   */
  baseLine?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Base Entry.
   * @nullable
   */
  baseEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Unit Price.
   * @nullable
   */
  unitPrice?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Uo M Entry.
   * @nullable
   */
  uoMEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Uo M Code.
   * @nullable
   */
  uoMCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Inventory Quantity.
   * @nullable
   */
  inventoryQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Remaining Open Quantity.
   * @nullable
   */
  remainingOpenQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Remaining Open Inventory Quantity.
   * @nullable
   */
  remainingOpenInventoryQuantity?: DeserializedType<
    DeSerializersT,
    'Edm.Double'
  >;
  /**
   * Line Status.
   * @nullable
   */
  lineStatus?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Weight Of Recycled Plastic.
   * @nullable
   */
  weightOfRecycledPlastic?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Plastic Package Exemption Reason.
   * @nullable
   */
  plasticPackageExemptionReason?: DeserializedType<
    DeSerializersT,
    'Edm.String'
  >;
  /**
   * U Bn Bp Ctry.
   * @nullable
   */
  uBnBpCtry?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bn Ori Ctr.
   * @nullable
   */
  uBnOriCtr?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bn Ori Sta.
   * @nullable
   */
  uBnOriSta?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bn Dst Sta.
   * @nullable
   */
  uBnDstSta?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bn Inc Trm.
   * @nullable
   */
  uBnIncTrm?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bnta Type.
   * @nullable
   */
  uBntaType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bn Trn Mod.
   * @nullable
   */
  uBnTrnMod?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bn Port.
   * @nullable
   */
  uBnPort?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bn Cst Prc.
   * @nullable
   */
  uBnCstPrc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bn Tax Ext.
   * @nullable
   */
  uBnTaxExt?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bn Brd Val.
   * @nullable
   */
  uBnBrdVal?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * U Bn Com Cod.
   * @nullable
   */
  uBnComCod?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bn Sup Unt.
   * @nullable
   */
  uBnSupUnt?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bn Sup Mas.
   * @nullable
   */
  uBnSupMas?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * U Bn Rel Dec.
   * @nullable
   */
  uBnRelDec?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bn Dom Frg.
   * @nullable
   */
  uBnDomFrg?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Nettopr.
   * @nullable
   */
  uNettopr?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * U Bld Ly Id.
   * @nullable
   */
  uBldLyId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * U Bld N Cps.
   * @nullable
   */
  uBldNCps?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * U Penka Montage.
   * @nullable
   */
  uPenkaMontage?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Penka Iltis Status.
   * @nullable
   */
  uPenkaIltisStatus?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Stl.
   * @nullable
   */
  uStl?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Stl Preis.
   * @nullable
   */
  uStlPreis?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * U Bezeichnung 2.
   * @nullable
   */
  uBezeichnung2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Projektpreis Position.
   * @nullable
   */
  uProjektpreisPosition?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Lvoz.
   * @nullable
   */
  uLvoz?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Serial Numbers.
   * @nullable
   */
  serialNumbers?: DeserializedType<DeSerializersT, 'SAPB1.SerialNumber'>;
  /**
   * Batch Numbers.
   * @nullable
   */
  batchNumbers?: DeserializedType<DeSerializersT, 'SAPB1.BatchNumber'>;
  /**
   * Ccd Numbers.
   * @nullable
   */
  ccdNumbers?: DeserializedType<DeSerializersT, 'SAPB1.CCDNumber'>;
  /**
   * Stock Transfer Lines Bin Allocations.
   * @nullable
   */
  stockTransferLinesBinAllocations?: DeserializedType<
    DeSerializersT,
    'SAPB1.StockTransferLinesBinAllocation'
  >;
}

/**
 * StockTransferLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class StockTransferLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  StockTransferLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link StockTransferLine.lineNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link StockTransferLine.docEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link StockTransferLine.itemCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemCode', 'Edm.String', true);
  /**
   * Representation of the {@link StockTransferLine.itemDescription} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemDescription: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ItemDescription',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link StockTransferLine.quantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Quantity', 'Edm.Double', true);
  /**
   * Representation of the {@link StockTransferLine.price} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  price: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Price', 'Edm.Double', true);
  /**
   * Representation of the {@link StockTransferLine.currency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Currency', 'Edm.String', true);
  /**
   * Representation of the {@link StockTransferLine.rate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Rate', 'Edm.Double', true);
  /**
   * Representation of the {@link StockTransferLine.discountPercent} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discountPercent: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DiscountPercent',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link StockTransferLine.vendorNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vendorNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VendorNum', 'Edm.String', true);
  /**
   * Representation of the {@link StockTransferLine.serialNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serialNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SerialNumber', 'Edm.String', true);
  /**
   * Representation of the {@link StockTransferLine.warehouseCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WarehouseCode', 'Edm.String', true);
  /**
   * Representation of the {@link StockTransferLine.fromWarehouseCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromWarehouseCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FromWarehouseCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link StockTransferLine.projectCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  projectCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ProjectCode', 'Edm.String', true);
  /**
   * Representation of the {@link StockTransferLine.factor} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Factor', 'Edm.Double', true);
  /**
   * Representation of the {@link StockTransferLine.factor2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Factor2', 'Edm.Double', true);
  /**
   * Representation of the {@link StockTransferLine.factor3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Factor3', 'Edm.Double', true);
  /**
   * Representation of the {@link StockTransferLine.factor4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Factor4', 'Edm.Double', true);
  /**
   * Representation of the {@link StockTransferLine.distributionRule} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link StockTransferLine.distributionRule2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule2',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link StockTransferLine.distributionRule3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule3',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link StockTransferLine.distributionRule4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule4',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link StockTransferLine.distributionRule5} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule5: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule5',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link StockTransferLine.useBaseUnits} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  useBaseUnits: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('UseBaseUnits', BoYesNoEnum, true);
  /**
   * Representation of the {@link StockTransferLine.measureUnit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  measureUnit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MeasureUnit', 'Edm.String', true);
  /**
   * Representation of the {@link StockTransferLine.unitsOfMeasurment} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unitsOfMeasurment: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'UnitsOfMeasurment',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link StockTransferLine.baseType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseType: EnumField<
    EntityT,
    DeSerializersT,
    InvBaseDocTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('BaseType', InvBaseDocTypeEnum, true);
  /**
   * Representation of the {@link StockTransferLine.baseLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLine: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseLine', 'Edm.Int32', true);
  /**
   * Representation of the {@link StockTransferLine.baseEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link StockTransferLine.unitPrice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unitPrice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UnitPrice', 'Edm.Double', true);
  /**
   * Representation of the {@link StockTransferLine.uoMEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UoMEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link StockTransferLine.uoMCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UoMCode', 'Edm.String', true);
  /**
   * Representation of the {@link StockTransferLine.inventoryQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InventoryQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link StockTransferLine.remainingOpenQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remainingOpenQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'RemainingOpenQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link StockTransferLine.remainingOpenInventoryQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remainingOpenInventoryQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'RemainingOpenInventoryQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link StockTransferLine.lineStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineStatus: EnumField<EntityT, DeSerializersT, BoStatus, true, false> =
    this._fieldBuilder.buildEnumField('LineStatus', BoStatus, true);
  /**
   * Representation of the {@link StockTransferLine.weightOfRecycledPlastic} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weightOfRecycledPlastic: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WeightOfRecycledPlastic',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link StockTransferLine.plasticPackageExemptionReason} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plasticPackageExemptionReason: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PlasticPackageExemptionReason',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link StockTransferLine.uBnBpCtry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnBpCtry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNBpCtry', 'Edm.String', true);
  /**
   * Representation of the {@link StockTransferLine.uBnOriCtr} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnOriCtr: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNOriCtr', 'Edm.String', true);
  /**
   * Representation of the {@link StockTransferLine.uBnOriSta} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnOriSta: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNOriSta', 'Edm.String', true);
  /**
   * Representation of the {@link StockTransferLine.uBnDstSta} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnDstSta: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNDstSta', 'Edm.String', true);
  /**
   * Representation of the {@link StockTransferLine.uBnIncTrm} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnIncTrm: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNIncTrm', 'Edm.String', true);
  /**
   * Representation of the {@link StockTransferLine.uBntaType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBntaType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNTAType', 'Edm.String', true);
  /**
   * Representation of the {@link StockTransferLine.uBnTrnMod} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnTrnMod: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNTrnMod', 'Edm.String', true);
  /**
   * Representation of the {@link StockTransferLine.uBnPort} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnPort: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNPort', 'Edm.String', true);
  /**
   * Representation of the {@link StockTransferLine.uBnCstPrc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnCstPrc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNCstPrc', 'Edm.String', true);
  /**
   * Representation of the {@link StockTransferLine.uBnTaxExt} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnTaxExt: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNTaxExt', 'Edm.String', true);
  /**
   * Representation of the {@link StockTransferLine.uBnBrdVal} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnBrdVal: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNBrdVal', 'Edm.Double', true);
  /**
   * Representation of the {@link StockTransferLine.uBnComCod} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnComCod: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNComCod', 'Edm.String', true);
  /**
   * Representation of the {@link StockTransferLine.uBnSupUnt} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnSupUnt: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNSupUnt', 'Edm.String', true);
  /**
   * Representation of the {@link StockTransferLine.uBnSupMas} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnSupMas: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNSupMas', 'Edm.Double', true);
  /**
   * Representation of the {@link StockTransferLine.uBnRelDec} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnRelDec: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNRelDec', 'Edm.String', true);
  /**
   * Representation of the {@link StockTransferLine.uBnDomFrg} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnDomFrg: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNDomFrg', 'Edm.String', true);
  /**
   * Representation of the {@link StockTransferLine.uNettopr} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uNettopr: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_nettopr', 'Edm.Double', true);
  /**
   * Representation of the {@link StockTransferLine.uBldLyId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBldLyId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BLD_LyID', 'Edm.Int32', true);
  /**
   * Representation of the {@link StockTransferLine.uBldNCps} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBldNCps: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BLD_NCps', 'Edm.Int32', true);
  /**
   * Representation of the {@link StockTransferLine.uPenkaMontage} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uPenkaMontage: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'U_Penka_Montage',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link StockTransferLine.uPenkaIltisStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uPenkaIltisStatus: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'U_Penka_Iltis_Status',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link StockTransferLine.uStl} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uStl: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_STL', 'Edm.String', true);
  /**
   * Representation of the {@link StockTransferLine.uStlPreis} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uStlPreis: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_STL_PREIS', 'Edm.Double', true);
  /**
   * Representation of the {@link StockTransferLine.uBezeichnung2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBezeichnung2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'U_Bezeichnung2',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link StockTransferLine.uProjektpreisPosition} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uProjektpreisPosition: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'U_ProjektpreisPosition',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link StockTransferLine.uLvoz} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uLvoz: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_LVOZ', 'Edm.String', true);
  /**
   * Representation of the {@link StockTransferLine.serialNumbers} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serialNumbers: CollectionField<
    EntityT,
    DeSerializersT,
    SerialNumber,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'SerialNumbers',
    SerialNumber,
    true
  );
  /**
   * Representation of the {@link StockTransferLine.batchNumbers} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  batchNumbers: CollectionField<
    EntityT,
    DeSerializersT,
    BatchNumber,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'BatchNumbers',
    BatchNumber,
    true
  );
  /**
   * Representation of the {@link StockTransferLine.ccdNumbers} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ccdNumbers: CollectionField<EntityT, DeSerializersT, CcdNumber, true, false> =
    this._fieldBuilder.buildCollectionField('CCDNumbers', CcdNumber, true);
  /**
   * Representation of the {@link StockTransferLine.stockTransferLinesBinAllocations} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockTransferLinesBinAllocations: CollectionField<
    EntityT,
    DeSerializersT,
    StockTransferLinesBinAllocation,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'StockTransferLinesBinAllocations',
    StockTransferLinesBinAllocation,
    true
  );

  /**
   * Creates an instance of StockTransferLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, StockTransferLine, fieldOptions);
  }
}

export namespace StockTransferLine {
  /**
   * Metadata information on all properties of the `StockTransferLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<StockTransferLine>[] = [
    {
      originalName: 'LineNum',
      name: 'lineNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DocEntry',
      name: 'docEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ItemCode',
      name: 'itemCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ItemDescription',
      name: 'itemDescription',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Quantity',
      name: 'quantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Price',
      name: 'price',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Currency',
      name: 'currency',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Rate',
      name: 'rate',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'DiscountPercent',
      name: 'discountPercent',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'VendorNum',
      name: 'vendorNum',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SerialNumber',
      name: 'serialNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'WarehouseCode',
      name: 'warehouseCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FromWarehouseCode',
      name: 'fromWarehouseCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ProjectCode',
      name: 'projectCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Factor',
      name: 'factor',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Factor2',
      name: 'factor2',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Factor3',
      name: 'factor3',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Factor4',
      name: 'factor4',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'DistributionRule',
      name: 'distributionRule',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DistributionRule2',
      name: 'distributionRule2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DistributionRule3',
      name: 'distributionRule3',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DistributionRule4',
      name: 'distributionRule4',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DistributionRule5',
      name: 'distributionRule5',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'UseBaseUnits',
      name: 'useBaseUnits',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'MeasureUnit',
      name: 'measureUnit',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'UnitsOfMeasurment',
      name: 'unitsOfMeasurment',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BaseType',
      name: 'baseType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'BaseLine',
      name: 'baseLine',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BaseEntry',
      name: 'baseEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'UnitPrice',
      name: 'unitPrice',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'UoMEntry',
      name: 'uoMEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'UoMCode',
      name: 'uoMCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'InventoryQuantity',
      name: 'inventoryQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'RemainingOpenQuantity',
      name: 'remainingOpenQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'RemainingOpenInventoryQuantity',
      name: 'remainingOpenInventoryQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'LineStatus',
      name: 'lineStatus',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'WeightOfRecycledPlastic',
      name: 'weightOfRecycledPlastic',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'PlasticPackageExemptionReason',
      name: 'plasticPackageExemptionReason',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNBpCtry',
      name: 'uBnBpCtry',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNOriCtr',
      name: 'uBnOriCtr',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNOriSta',
      name: 'uBnOriSta',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNDstSta',
      name: 'uBnDstSta',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNIncTrm',
      name: 'uBnIncTrm',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNTAType',
      name: 'uBntaType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNTrnMod',
      name: 'uBnTrnMod',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNPort',
      name: 'uBnPort',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNCstPrc',
      name: 'uBnCstPrc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNTaxExt',
      name: 'uBnTaxExt',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNBrdVal',
      name: 'uBnBrdVal',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'U_BNComCod',
      name: 'uBnComCod',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNSupUnt',
      name: 'uBnSupUnt',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNSupMas',
      name: 'uBnSupMas',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'U_BNRelDec',
      name: 'uBnRelDec',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNDomFrg',
      name: 'uBnDomFrg',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_nettopr',
      name: 'uNettopr',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'U_BLD_LyID',
      name: 'uBldLyId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'U_BLD_NCps',
      name: 'uBldNCps',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'U_Penka_Montage',
      name: 'uPenkaMontage',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_Penka_Iltis_Status',
      name: 'uPenkaIltisStatus',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_STL',
      name: 'uStl',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_STL_PREIS',
      name: 'uStlPreis',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'U_Bezeichnung2',
      name: 'uBezeichnung2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_ProjektpreisPosition',
      name: 'uProjektpreisPosition',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_LVOZ',
      name: 'uLvoz',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SerialNumbers',
      name: 'serialNumbers',
      type: SerialNumber,
      isCollection: true
    },
    {
      originalName: 'BatchNumbers',
      name: 'batchNumbers',
      type: BatchNumber,
      isCollection: true
    },
    {
      originalName: 'CCDNumbers',
      name: 'ccdNumbers',
      type: CcdNumber,
      isCollection: true
    },
    {
      originalName: 'StockTransferLinesBinAllocations',
      name: 'stockTransferLinesBinAllocations',
      type: StockTransferLinesBinAllocation,
      isCollection: true
    }
  ];
}
