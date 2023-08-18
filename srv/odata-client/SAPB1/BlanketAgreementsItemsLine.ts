/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BlanketAgreementsDetailsLine } from './BlanketAgreementsDetailsLine';
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
 * BlanketAgreementsItemsLine
 */
export interface BlanketAgreementsItemsLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Agreement No.
   * @nullable
   */
  agreementNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Agreement Row Number.
   * @nullable
   */
  agreementRowNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Item No.
   * @nullable
   */
  itemNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Description.
   * @nullable
   */
  itemDescription?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Group.
   * @nullable
   */
  itemGroup?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Planned Quantity.
   * @nullable
   */
  plannedQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Unit Price.
   * @nullable
   */
  unitPrice?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Price Currency.
   * @nullable
   */
  priceCurrency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cumulative Quantity.
   * @nullable
   */
  cumulativeQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Cumulative Amount Lc.
   * @nullable
   */
  cumulativeAmountLc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Cumulative Amount Fc.
   * @nullable
   */
  cumulativeAmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Free Text.
   * @nullable
   */
  freeText?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Inventory Uo M.
   * @nullable
   */
  inventoryUoM?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Portion Of Returns.
   * @nullable
   */
  portionOfReturns?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * End Of Warranty.
   * @nullable
   */
  endOfWarranty?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Planned Amount Lc.
   * @nullable
   */
  plannedAmountLc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Planned Amount Fc.
   * @nullable
   */
  plannedAmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Line Discount.
   * @nullable
   */
  lineDiscount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
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
   * Units Of Measurement.
   * @nullable
   */
  unitsOfMeasurement?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Undelivered Cumulative Quantity.
   * @nullable
   */
  undeliveredCumulativeQuantity?: DeserializedType<
    DeSerializersT,
    'Edm.Double'
  >;
  /**
   * Undelivered Cumulative Amount Lc.
   * @nullable
   */
  undeliveredCumulativeAmountLc?: DeserializedType<
    DeSerializersT,
    'Edm.Double'
  >;
  /**
   * Undelivered Cumulative Amount Fc.
   * @nullable
   */
  undeliveredCumulativeAmountFc?: DeserializedType<
    DeSerializersT,
    'Edm.Double'
  >;
  /**
   * Shipping Type.
   * @nullable
   */
  shippingType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Project.
   * @nullable
   */
  project?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Code.
   * @nullable
   */
  taxCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Rate.
   * @nullable
   */
  taxRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Planned Vat Amount Lc.
   * @nullable
   */
  plannedVatAmountLc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Planned Vat Amount Fc.
   * @nullable
   */
  plannedVatAmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Cumulative Vat Amount Lc.
   * @nullable
   */
  cumulativeVatAmountLc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Cumulative Vat Amount Fc.
   * @nullable
   */
  cumulativeVatAmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Blanket Agreements Details Lines.
   * @nullable
   */
  blanketAgreementsDetailsLines?: DeserializedType<
    DeSerializersT,
    'SAPB1.BlanketAgreements_DetailsLine'
  >;
}

/**
 * BlanketAgreementsItemsLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BlanketAgreementsItemsLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BlanketAgreementsItemsLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.agreementNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  agreementNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AgreementNo', 'Edm.Int32', true);
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.agreementRowNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  agreementRowNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AgreementRowNumber',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.itemNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemNo', 'Edm.String', true);
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.itemDescription} property for query construction.
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
   * Representation of the {@link BlanketAgreementsItemsLine.itemGroup} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemGroup: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemGroup', 'Edm.Int32', true);
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.plannedQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plannedQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PlannedQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.unitPrice} property for query construction.
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
   * Representation of the {@link BlanketAgreementsItemsLine.priceCurrency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceCurrency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PriceCurrency', 'Edm.String', true);
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.cumulativeQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cumulativeQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CumulativeQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.cumulativeAmountLc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cumulativeAmountLc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CumulativeAmountLC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.cumulativeAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cumulativeAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CumulativeAmountFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.freeText} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freeText: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FreeText', 'Edm.String', true);
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.inventoryUoM} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryUoM: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('InventoryUoM', 'Edm.String', true);
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.portionOfReturns} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  portionOfReturns: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PortionOfReturns',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.endOfWarranty} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endOfWarranty: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EndOfWarranty',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.plannedAmountLc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plannedAmountLc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PlannedAmountLC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.plannedAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plannedAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PlannedAmountFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.lineDiscount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineDiscount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineDiscount', 'Edm.Double', true);
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.uoMEntry} property for query construction.
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
   * Representation of the {@link BlanketAgreementsItemsLine.uoMCode} property for query construction.
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
   * Representation of the {@link BlanketAgreementsItemsLine.unitsOfMeasurement} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unitsOfMeasurement: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'UnitsOfMeasurement',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.undeliveredCumulativeQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  undeliveredCumulativeQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'UndeliveredCumulativeQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.undeliveredCumulativeAmountLc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  undeliveredCumulativeAmountLc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'UndeliveredCumulativeAmountLC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.undeliveredCumulativeAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  undeliveredCumulativeAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'UndeliveredCumulativeAmountFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.shippingType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shippingType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShippingType', 'Edm.Int32', true);
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.project} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  project: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Project', 'Edm.String', true);
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.taxCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxCode', 'Edm.String', true);
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.taxRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TAXRate', 'Edm.Double', true);
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.plannedVatAmountLc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plannedVatAmountLc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PlannedVATAmountLC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.plannedVatAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plannedVatAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PlannedVATAmountFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.cumulativeVatAmountLc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cumulativeVatAmountLc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CumulativeVATAmountLC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.cumulativeVatAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cumulativeVatAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CumulativeVATAmountFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsItemsLine.blanketAgreementsDetailsLines} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blanketAgreementsDetailsLines: CollectionField<
    EntityT,
    DeSerializersT,
    BlanketAgreementsDetailsLine,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'BlanketAgreements_DetailsLines',
    BlanketAgreementsDetailsLine,
    true
  );

  /**
   * Creates an instance of BlanketAgreementsItemsLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      BlanketAgreementsItemsLine,
      fieldOptions
    );
  }
}

export namespace BlanketAgreementsItemsLine {
  /**
   * Metadata information on all properties of the `BlanketAgreementsItemsLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BlanketAgreementsItemsLine>[] =
    [
      {
        originalName: 'AgreementNo',
        name: 'agreementNo',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'AgreementRowNumber',
        name: 'agreementRowNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'ItemNo',
        name: 'itemNo',
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
        originalName: 'ItemGroup',
        name: 'itemGroup',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'PlannedQuantity',
        name: 'plannedQuantity',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'UnitPrice',
        name: 'unitPrice',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'PriceCurrency',
        name: 'priceCurrency',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'CumulativeQuantity',
        name: 'cumulativeQuantity',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'CumulativeAmountLC',
        name: 'cumulativeAmountLc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'CumulativeAmountFC',
        name: 'cumulativeAmountFc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'FreeText',
        name: 'freeText',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'InventoryUoM',
        name: 'inventoryUoM',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'PortionOfReturns',
        name: 'portionOfReturns',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'EndOfWarranty',
        name: 'endOfWarranty',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'PlannedAmountLC',
        name: 'plannedAmountLc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'PlannedAmountFC',
        name: 'plannedAmountFc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'LineDiscount',
        name: 'lineDiscount',
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
        originalName: 'UnitsOfMeasurement',
        name: 'unitsOfMeasurement',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'UndeliveredCumulativeQuantity',
        name: 'undeliveredCumulativeQuantity',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'UndeliveredCumulativeAmountLC',
        name: 'undeliveredCumulativeAmountLc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'UndeliveredCumulativeAmountFC',
        name: 'undeliveredCumulativeAmountFc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'ShippingType',
        name: 'shippingType',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Project',
        name: 'project',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'TaxCode',
        name: 'taxCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'TAXRate',
        name: 'taxRate',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'PlannedVATAmountLC',
        name: 'plannedVatAmountLc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'PlannedVATAmountFC',
        name: 'plannedVatAmountFc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'CumulativeVATAmountLC',
        name: 'cumulativeVatAmountLc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'CumulativeVATAmountFC',
        name: 'cumulativeVatAmountFc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'BlanketAgreements_DetailsLines',
        name: 'blanketAgreementsDetailsLines',
        type: BlanketAgreementsDetailsLine,
        isCollection: true
      }
    ];
}
