/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BlanketAgreementsDetailsLine } from './BlanketAgreementsDetailsLine';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export function createBlanketAgreementsItemsLine(json: any): BlanketAgreementsItemsLine {
  return BlanketAgreementsItemsLine.build(json);
}

/**
 * BlanketAgreementsItemsLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BlanketAgreementsItemsLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BlanketAgreementsItemsLine> {
  /**
   * Representation of the [[BlanketAgreementsItemsLine.agreementNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  agreementNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AgreementNo', this, 'Edm.Int32');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.agreementRowNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  agreementRowNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AgreementRowNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.itemNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemNo', this, 'Edm.String');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.itemDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemDescription', this, 'Edm.String');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.itemGroup]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemGroup: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ItemGroup', this, 'Edm.Int32');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.plannedQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plannedQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PlannedQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.unitPrice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unitPrice: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UnitPrice', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.priceCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceCurrency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PriceCurrency', this, 'Edm.String');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.cumulativeQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cumulativeQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CumulativeQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.cumulativeAmountLc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cumulativeAmountLc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CumulativeAmountLC', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.cumulativeAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cumulativeAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CumulativeAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.freeText]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freeText: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FreeText', this, 'Edm.String');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.inventoryUoM]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryUoM: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('InventoryUoM', this, 'Edm.String');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.portionOfReturns]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  portionOfReturns: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PortionOfReturns', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.endOfWarranty]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endOfWarranty: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EndOfWarranty', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.plannedAmountLc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plannedAmountLc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PlannedAmountLC', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.plannedAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plannedAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PlannedAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.lineDiscount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineDiscount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineDiscount', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.uoMEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UoMEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.uoMCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UoMCode', this, 'Edm.String');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.unitsOfMeasurement]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unitsOfMeasurement: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UnitsOfMeasurement', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.undeliveredCumulativeQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  undeliveredCumulativeQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UndeliveredCumulativeQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.undeliveredCumulativeAmountLc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  undeliveredCumulativeAmountLc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UndeliveredCumulativeAmountLC', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.undeliveredCumulativeAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  undeliveredCumulativeAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UndeliveredCumulativeAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.shippingType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shippingType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ShippingType', this, 'Edm.Int32');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.project]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  project: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Project', this, 'Edm.String');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.taxCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxCode', this, 'Edm.String');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.taxRate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxRate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TAXRate', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.plannedVatAmountLc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plannedVatAmountLc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PlannedVATAmountLC', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.plannedVatAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plannedVatAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PlannedVATAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.cumulativeVatAmountLc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cumulativeVatAmountLc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CumulativeVATAmountLC', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.cumulativeVatAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cumulativeVatAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CumulativeVATAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsItemsLine.blanketAgreementsDetailsLines]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blanketAgreementsDetailsLines: CollectionField<EntityT, BlanketAgreementsDetailsLine> = new CollectionField('BlanketAgreements_DetailsLines', this, BlanketAgreementsDetailsLine);

  /**
   * Creates an instance of BlanketAgreementsItemsLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BlanketAgreementsItemsLine);
  }
}

export namespace BlanketAgreementsItemsLine {
  /**
   * Metadata information on all properties of the `BlanketAgreementsItemsLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BlanketAgreementsItemsLine>[] = [{
    originalName: 'AgreementNo',
    name: 'agreementNo',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'AgreementRowNumber',
    name: 'agreementRowNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ItemNo',
    name: 'itemNo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ItemDescription',
    name: 'itemDescription',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ItemGroup',
    name: 'itemGroup',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PlannedQuantity',
    name: 'plannedQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'UnitPrice',
    name: 'unitPrice',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'PriceCurrency',
    name: 'priceCurrency',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CumulativeQuantity',
    name: 'cumulativeQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CumulativeAmountLC',
    name: 'cumulativeAmountLc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CumulativeAmountFC',
    name: 'cumulativeAmountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'FreeText',
    name: 'freeText',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'InventoryUoM',
    name: 'inventoryUoM',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PortionOfReturns',
    name: 'portionOfReturns',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'EndOfWarranty',
    name: 'endOfWarranty',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'PlannedAmountLC',
    name: 'plannedAmountLc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'PlannedAmountFC',
    name: 'plannedAmountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'LineDiscount',
    name: 'lineDiscount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'UoMEntry',
    name: 'uoMEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'UoMCode',
    name: 'uoMCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UnitsOfMeasurement',
    name: 'unitsOfMeasurement',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'UndeliveredCumulativeQuantity',
    name: 'undeliveredCumulativeQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'UndeliveredCumulativeAmountLC',
    name: 'undeliveredCumulativeAmountLc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'UndeliveredCumulativeAmountFC',
    name: 'undeliveredCumulativeAmountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ShippingType',
    name: 'shippingType',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Project',
    name: 'project',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxCode',
    name: 'taxCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TAXRate',
    name: 'taxRate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'PlannedVATAmountLC',
    name: 'plannedVatAmountLc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'PlannedVATAmountFC',
    name: 'plannedVatAmountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CumulativeVATAmountLC',
    name: 'cumulativeVatAmountLc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CumulativeVATAmountFC',
    name: 'cumulativeVatAmountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BlanketAgreements_DetailsLines',
    name: 'blanketAgreementsDetailsLines',
    type: BlanketAgreementsDetailsLine,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | BlanketAgreementsDetailsLine }): BlanketAgreementsItemsLine {
    return deserializeComplexTypeV4(json, BlanketAgreementsItemsLine);
  }
}
