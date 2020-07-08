/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LandedCostsRequestBuilder } from './LandedCostsRequestBuilder';
import { Moment } from 'moment';
import { LandedCostItemLine, LandedCostItemLineField } from './LandedCostItemLine';
import { LandedCostCostLine, LandedCostCostLineField } from './LandedCostCostLine';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "LandedCosts" of service "SAPB1".
 */
export class LandedCosts extends Entity implements LandedCostsType {
  /**
   * Technical entity name for LandedCosts.
   */
  static _entityName = 'LandedCosts';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for LandedCosts.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Landed Cost Number.
   * @nullable
   */
  landedCostNumber?: number;
  /**
   * Posting Date.
   * @nullable
   */
  postingDate?: Moment;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: Moment;
  /**
   * Vendor Code.
   * @nullable
   */
  vendorCode?: string;
  /**
   * Vendor Name.
   * @nullable
   */
  vendorName?: string;
  /**
   * Broker.
   * @nullable
   */
  broker?: string;
  /**
   * Broker Name.
   * @nullable
   */
  brokerName?: string;
  /**
   * File Number.
   * @nullable
   */
  fileNumber?: string;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Reference.
   * @nullable
   */
  reference?: string;
  /**
   * Document Currency.
   * @nullable
   */
  documentCurrency?: string;
  /**
   * Document Rate.
   * @nullable
   */
  documentRate?: number;
  /**
   * Projected Customs.
   * @nullable
   */
  projectedCustoms?: number;
  /**
   * Actual Customs.
   * @nullable
   */
  actualCustoms?: number;
  /**
   * Actual Customs Fc.
   * @nullable
   */
  actualCustomsFc?: number;
  /**
   * Tax 1.
   * @nullable
   */
  tax1?: number;
  /**
   * Tax 2.
   * @nullable
   */
  tax2?: number;
  /**
   * Before Tax.
   * @nullable
   */
  beforeTax?: number;
  /**
   * Total.
   * @nullable
   */
  total?: number;
  /**
   * Total Freight Charges.
   * @nullable
   */
  totalFreightCharges?: number;
  /**
   * Projected Customs Fc.
   * @nullable
   */
  projectedCustomsFc?: number;
  /**
   * Tax 1 Fc.
   * @nullable
   */
  tax1Fc?: number;
  /**
   * Tax 2 Fc.
   * @nullable
   */
  tax2Fc?: number;
  /**
   * Before Tax Fc.
   * @nullable
   */
  beforeTaxFc?: number;
  /**
   * Total Fc.
   * @nullable
   */
  totalFc?: number;
  /**
   * Total Freight Charges Fc.
   * @nullable
   */
  totalFreightChargesFc?: number;
  /**
   * Series.
   * @nullable
   */
  series?: number;
  /**
   * Amount To Balance.
   * @nullable
   */
  amountToBalance?: number;
  /**
   * Amount To Balance Fc.
   * @nullable
   */
  amountToBalanceFc?: number;
  /**
   * Billof Lading Number.
   * @nullable
   */
  billofLadingNumber?: string;
  /**
   * Transport Type.
   * @nullable
   */
  transportType?: number;
  /**
   * Transaction Number.
   * @nullable
   */
  transactionNumber?: number;
  /**
   * Journal Remarks.
   * @nullable
   */
  journalRemarks?: string;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: number;
  /**
   * Landed Cost Item Lines.
   * @nullable
   */
  landedCostItemLines?: LandedCostItemLine[];
  /**
   * Landed Cost Cost Lines.
   * @nullable
   */
  landedCostCostLines?: LandedCostCostLine[];
  /**
   * One-to-one navigation property to the [[BusinessPartners]] entity.
   */
  businessPartner!: BusinessPartners;
  /**
   * One-to-one navigation property to the [[ShippingTypes]] entity.
   */
  shippingType!: ShippingTypes;
  /**
   * One-to-one navigation property to the [[JournalEntries]] entity.
   */
  journalEntry!: JournalEntries;
  /**
   * One-to-many navigation property to the [[PurchaseDeliveryNotes]] entity.
   */
  purchaseDeliveryNotes!: PurchaseDeliveryNotes[];

  /**
   * Returns an entity builder to construct instances `LandedCosts`.
   * @returns A builder that constructs instances of entity type `LandedCosts`.
   */
  static builder(): EntityBuilderType<LandedCosts, LandedCostsTypeForceMandatory> {
    return Entity.entityBuilder(LandedCosts);
  }

  /**
   * Returns a request builder to construct requests for operations on the `LandedCosts` entity type.
   * @returns A `LandedCosts` request builder.
   */
  static requestBuilder(): LandedCostsRequestBuilder {
    return new LandedCostsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `LandedCosts`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `LandedCosts`.
   */
  static customField(fieldName: string): CustomField<LandedCosts> {
    return Entity.customFieldSelector(fieldName, LandedCosts);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { ShippingTypes, ShippingTypesType } from './ShippingTypes';
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import { PurchaseDeliveryNotes, PurchaseDeliveryNotesType } from './PurchaseDeliveryNotes';

export interface LandedCostsType {
  docEntry?: number;
  landedCostNumber?: number;
  postingDate?: Moment;
  dueDate?: Moment;
  vendorCode?: string;
  vendorName?: string;
  broker?: string;
  brokerName?: string;
  fileNumber?: string;
  remarks?: string;
  reference?: string;
  documentCurrency?: string;
  documentRate?: number;
  projectedCustoms?: number;
  actualCustoms?: number;
  actualCustomsFc?: number;
  tax1?: number;
  tax2?: number;
  beforeTax?: number;
  total?: number;
  totalFreightCharges?: number;
  projectedCustomsFc?: number;
  tax1Fc?: number;
  tax2Fc?: number;
  beforeTaxFc?: number;
  totalFc?: number;
  totalFreightChargesFc?: number;
  series?: number;
  amountToBalance?: number;
  amountToBalanceFc?: number;
  billofLadingNumber?: string;
  transportType?: number;
  transactionNumber?: number;
  journalRemarks?: string;
  attachmentEntry?: number;
  landedCostItemLines?: LandedCostItemLine[];
  landedCostCostLines?: LandedCostCostLine[];
  businessPartner: BusinessPartnersType;
  shippingType: ShippingTypesType;
  journalEntry: JournalEntriesType;
  purchaseDeliveryNotes: PurchaseDeliveryNotesType[];
}

export interface LandedCostsTypeForceMandatory {
  docEntry: number;
  landedCostNumber: number;
  postingDate: Moment;
  dueDate: Moment;
  vendorCode: string;
  vendorName: string;
  broker: string;
  brokerName: string;
  fileNumber: string;
  remarks: string;
  reference: string;
  documentCurrency: string;
  documentRate: number;
  projectedCustoms: number;
  actualCustoms: number;
  actualCustomsFc: number;
  tax1: number;
  tax2: number;
  beforeTax: number;
  total: number;
  totalFreightCharges: number;
  projectedCustomsFc: number;
  tax1Fc: number;
  tax2Fc: number;
  beforeTaxFc: number;
  totalFc: number;
  totalFreightChargesFc: number;
  series: number;
  amountToBalance: number;
  amountToBalanceFc: number;
  billofLadingNumber: string;
  transportType: number;
  transactionNumber: number;
  journalRemarks: string;
  attachmentEntry: number;
  landedCostItemLines: LandedCostItemLine[];
  landedCostCostLines: LandedCostCostLine[];
  businessPartner: BusinessPartnersType;
  shippingType: ShippingTypesType;
  journalEntry: JournalEntriesType;
  purchaseDeliveryNotes: PurchaseDeliveryNotesType[];
}

export namespace LandedCosts {
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<LandedCosts> = new NumberField('DocEntry', LandedCosts, 'Edm.Int32');
  /**
   * Static representation of the [[landedCostNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANDED_COST_NUMBER: NumberField<LandedCosts> = new NumberField('LandedCostNumber', LandedCosts, 'Edm.Int32');
  /**
   * Static representation of the [[postingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTING_DATE: DateField<LandedCosts> = new DateField('PostingDate', LandedCosts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUE_DATE: DateField<LandedCosts> = new DateField('DueDate', LandedCosts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[vendorCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VENDOR_CODE: StringField<LandedCosts> = new StringField('VendorCode', LandedCosts, 'Edm.String');
  /**
   * Static representation of the [[vendorName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VENDOR_NAME: StringField<LandedCosts> = new StringField('VendorName', LandedCosts, 'Edm.String');
  /**
   * Static representation of the [[broker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BROKER: StringField<LandedCosts> = new StringField('Broker', LandedCosts, 'Edm.String');
  /**
   * Static representation of the [[brokerName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BROKER_NAME: StringField<LandedCosts> = new StringField('BrokerName', LandedCosts, 'Edm.String');
  /**
   * Static representation of the [[fileNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FILE_NUMBER: StringField<LandedCosts> = new StringField('FileNumber', LandedCosts, 'Edm.String');
  /**
   * Static representation of the [[remarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMARKS: StringField<LandedCosts> = new StringField('Remarks', LandedCosts, 'Edm.String');
  /**
   * Static representation of the [[reference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE: StringField<LandedCosts> = new StringField('Reference', LandedCosts, 'Edm.String');
  /**
   * Static representation of the [[documentCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_CURRENCY: StringField<LandedCosts> = new StringField('DocumentCurrency', LandedCosts, 'Edm.String');
  /**
   * Static representation of the [[documentRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_RATE: NumberField<LandedCosts> = new NumberField('DocumentRate', LandedCosts, 'Edm.Double');
  /**
   * Static representation of the [[projectedCustoms]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECTED_CUSTOMS: NumberField<LandedCosts> = new NumberField('ProjectedCustoms', LandedCosts, 'Edm.Double');
  /**
   * Static representation of the [[actualCustoms]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTUAL_CUSTOMS: NumberField<LandedCosts> = new NumberField('ActualCustoms', LandedCosts, 'Edm.Double');
  /**
   * Static representation of the [[actualCustomsFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTUAL_CUSTOMS_FC: NumberField<LandedCosts> = new NumberField('ActualCustomsFC', LandedCosts, 'Edm.Double');
  /**
   * Static representation of the [[tax1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_1: NumberField<LandedCosts> = new NumberField('Tax1', LandedCosts, 'Edm.Double');
  /**
   * Static representation of the [[tax2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_2: NumberField<LandedCosts> = new NumberField('Tax2', LandedCosts, 'Edm.Double');
  /**
   * Static representation of the [[beforeTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEFORE_TAX: NumberField<LandedCosts> = new NumberField('BeforeTax', LandedCosts, 'Edm.Double');
  /**
   * Static representation of the [[total]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL: NumberField<LandedCosts> = new NumberField('Total', LandedCosts, 'Edm.Double');
  /**
   * Static representation of the [[totalFreightCharges]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_FREIGHT_CHARGES: NumberField<LandedCosts> = new NumberField('TotalFreightCharges', LandedCosts, 'Edm.Double');
  /**
   * Static representation of the [[projectedCustomsFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECTED_CUSTOMS_FC: NumberField<LandedCosts> = new NumberField('ProjectedCustomsFC', LandedCosts, 'Edm.Double');
  /**
   * Static representation of the [[tax1Fc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_1_FC: NumberField<LandedCosts> = new NumberField('Tax1FC', LandedCosts, 'Edm.Double');
  /**
   * Static representation of the [[tax2Fc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_2_FC: NumberField<LandedCosts> = new NumberField('Tax2FC', LandedCosts, 'Edm.Double');
  /**
   * Static representation of the [[beforeTaxFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEFORE_TAX_FC: NumberField<LandedCosts> = new NumberField('BeforeTaxFC', LandedCosts, 'Edm.Double');
  /**
   * Static representation of the [[totalFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_FC: NumberField<LandedCosts> = new NumberField('TotalFC', LandedCosts, 'Edm.Double');
  /**
   * Static representation of the [[totalFreightChargesFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_FREIGHT_CHARGES_FC: NumberField<LandedCosts> = new NumberField('TotalFreightChargesFC', LandedCosts, 'Edm.Double');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<LandedCosts> = new NumberField('Series', LandedCosts, 'Edm.Int32');
  /**
   * Static representation of the [[amountToBalance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AMOUNT_TO_BALANCE: NumberField<LandedCosts> = new NumberField('AmountToBalance', LandedCosts, 'Edm.Double');
  /**
   * Static representation of the [[amountToBalanceFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AMOUNT_TO_BALANCE_FC: NumberField<LandedCosts> = new NumberField('AmountToBalanceFC', LandedCosts, 'Edm.Double');
  /**
   * Static representation of the [[billofLadingNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILLOF_LADING_NUMBER: StringField<LandedCosts> = new StringField('BillofLadingNumber', LandedCosts, 'Edm.String');
  /**
   * Static representation of the [[transportType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSPORT_TYPE: NumberField<LandedCosts> = new NumberField('TransportType', LandedCosts, 'Edm.Int32');
  /**
   * Static representation of the [[transactionNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSACTION_NUMBER: NumberField<LandedCosts> = new NumberField('TransactionNumber', LandedCosts, 'Edm.Int32');
  /**
   * Static representation of the [[journalRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_REMARKS: StringField<LandedCosts> = new StringField('JournalRemarks', LandedCosts, 'Edm.String');
  /**
   * Static representation of the [[attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ENTRY: NumberField<LandedCosts> = new NumberField('AttachmentEntry', LandedCosts, 'Edm.Int32');
  /**
   * Static representation of the [[landedCostItemLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANDED_COST_ITEM_LINES: CollectionField<LandedCosts> = new CollectionField('LandedCost_ItemLines', LandedCosts, new LandedCostItemLineField('', LandedCosts));
  /**
   * Static representation of the [[landedCostCostLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANDED_COST_COST_LINES: CollectionField<LandedCosts> = new CollectionField('LandedCost_CostLines', LandedCosts, new LandedCostCostLineField('', LandedCosts));
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<LandedCosts, BusinessPartners> = new OneToOneLink('BusinessPartner', LandedCosts, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIPPING_TYPE: OneToOneLink<LandedCosts, ShippingTypes> = new OneToOneLink('ShippingType', LandedCosts, ShippingTypes);
  /**
   * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_ENTRY: OneToOneLink<LandedCosts, JournalEntries> = new OneToOneLink('JournalEntry', LandedCosts, JournalEntries);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DELIVERY_NOTES: OneToManyLink<LandedCosts, PurchaseDeliveryNotes> = new OneToManyLink('PurchaseDeliveryNotes', LandedCosts, PurchaseDeliveryNotes);
  /**
   * All fields of the LandedCosts entity.
   */
  export const _allFields: Array<NumberField<LandedCosts> | DateField<LandedCosts> | StringField<LandedCosts> | CollectionField<LandedCosts> | OneToOneLink<LandedCosts, BusinessPartners> | OneToOneLink<LandedCosts, ShippingTypes> | OneToOneLink<LandedCosts, JournalEntries> | OneToManyLink<LandedCosts, PurchaseDeliveryNotes>> = [
    LandedCosts.DOC_ENTRY,
    LandedCosts.LANDED_COST_NUMBER,
    LandedCosts.POSTING_DATE,
    LandedCosts.DUE_DATE,
    LandedCosts.VENDOR_CODE,
    LandedCosts.VENDOR_NAME,
    LandedCosts.BROKER,
    LandedCosts.BROKER_NAME,
    LandedCosts.FILE_NUMBER,
    LandedCosts.REMARKS,
    LandedCosts.REFERENCE,
    LandedCosts.DOCUMENT_CURRENCY,
    LandedCosts.DOCUMENT_RATE,
    LandedCosts.PROJECTED_CUSTOMS,
    LandedCosts.ACTUAL_CUSTOMS,
    LandedCosts.ACTUAL_CUSTOMS_FC,
    LandedCosts.TAX_1,
    LandedCosts.TAX_2,
    LandedCosts.BEFORE_TAX,
    LandedCosts.TOTAL,
    LandedCosts.TOTAL_FREIGHT_CHARGES,
    LandedCosts.PROJECTED_CUSTOMS_FC,
    LandedCosts.TAX_1_FC,
    LandedCosts.TAX_2_FC,
    LandedCosts.BEFORE_TAX_FC,
    LandedCosts.TOTAL_FC,
    LandedCosts.TOTAL_FREIGHT_CHARGES_FC,
    LandedCosts.SERIES,
    LandedCosts.AMOUNT_TO_BALANCE,
    LandedCosts.AMOUNT_TO_BALANCE_FC,
    LandedCosts.BILLOF_LADING_NUMBER,
    LandedCosts.TRANSPORT_TYPE,
    LandedCosts.TRANSACTION_NUMBER,
    LandedCosts.JOURNAL_REMARKS,
    LandedCosts.ATTACHMENT_ENTRY,
    LandedCosts.LANDED_COST_ITEM_LINES,
    LandedCosts.LANDED_COST_COST_LINES,
    LandedCosts.BUSINESS_PARTNER,
    LandedCosts.SHIPPING_TYPE,
    LandedCosts.JOURNAL_ENTRY,
    LandedCosts.PURCHASE_DELIVERY_NOTES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<LandedCosts> = new AllFields('*', LandedCosts);
  /**
   * All key fields of the LandedCosts entity.
   */
  export const _keyFields: Array<Field<LandedCosts>> = [LandedCosts.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property LandedCosts.
   */
  export const _keys: { [keys: string]: Field<LandedCosts> } = LandedCosts._keyFields.reduce((acc: { [keys: string]: Field<LandedCosts> }, field: Field<LandedCosts>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
