/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { LandedCostItemLine } from './LandedCostItemLine';
import { LandedCostCostLine } from './LandedCostCostLine';
import type { LandedCostsApi } from './LandedCostsApi';
import { LandedCostDocStatusEnum } from './LandedCostDocStatusEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { ShippingTypes, ShippingTypesType } from './ShippingTypes';
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import {
  PurchaseDeliveryNotes,
  PurchaseDeliveryNotesType
} from './PurchaseDeliveryNotes';

/**
 * This class represents the entity "LandedCosts" of service "SAPB1".
 */
export class LandedCosts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LandedCostsType<T>
{
  /**
   * Technical entity name for LandedCosts.
   */
  static _entityName = 'LandedCosts';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the LandedCosts entity
   */
  static _keys = ['DocEntry'];
  /**
   * Doc Entry.
   */
  docEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Landed Cost Number.
   * @nullable
   */
  landedCostNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Posting Date.
   * @nullable
   */
  postingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Vendor Code.
   * @nullable
   */
  vendorCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Name.
   * @nullable
   */
  vendorName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Broker.
   * @nullable
   */
  broker?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Broker Name.
   * @nullable
   */
  brokerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Closed Document.
   * @nullable
   */
  closedDocument?: LandedCostDocStatusEnum | null;
  /**
   * File Number.
   * @nullable
   */
  fileNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference.
   * @nullable
   */
  reference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Currency.
   * @nullable
   */
  documentCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Rate.
   * @nullable
   */
  documentRate?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Projected Customs.
   * @nullable
   */
  projectedCustoms?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Actual Customs.
   * @nullable
   */
  actualCustoms?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Actual Customs Fc.
   * @nullable
   */
  actualCustomsFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Tax 1.
   * @nullable
   */
  tax1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Tax 2.
   * @nullable
   */
  tax2?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Before Tax.
   * @nullable
   */
  beforeTax?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Total.
   * @nullable
   */
  total?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Total Freight Charges.
   * @nullable
   */
  totalFreightCharges?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Projected Customs Fc.
   * @nullable
   */
  projectedCustomsFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Tax 1 Fc.
   * @nullable
   */
  tax1Fc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Tax 2 Fc.
   * @nullable
   */
  tax2Fc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Before Tax Fc.
   * @nullable
   */
  beforeTaxFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Total Fc.
   * @nullable
   */
  totalFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Total Freight Charges Fc.
   * @nullable
   */
  totalFreightChargesFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Series.
   * @nullable
   */
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Customs Affects Inventory.
   * @nullable
   */
  customsAffectsInventory?: BoYesNoEnum | null;
  /**
   * Amount To Balance.
   * @nullable
   */
  amountToBalance?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Amount To Balance Fc.
   * @nullable
   */
  amountToBalanceFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Billof Lading Number.
   * @nullable
   */
  billofLadingNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transport Type.
   * @nullable
   */
  transportType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Transaction Number.
   * @nullable
   */
  transactionNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Journal Remarks.
   * @nullable
   */
  journalRemarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Landed Cost Item Lines.
   * @nullable
   */
  landedCostItemLines?: LandedCostItemLine<T>[] | null;
  /**
   * Landed Cost Cost Lines.
   * @nullable
   */
  landedCostCostLines?: LandedCostCostLine<T>[] | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner?: BusinessPartners<T> | null;
  /**
   * One-to-one navigation property to the {@link ShippingTypes} entity.
   */
  shippingType?: ShippingTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link JournalEntries} entity.
   */
  journalEntry?: JournalEntries<T> | null;
  /**
   * One-to-many navigation property to the {@link PurchaseDeliveryNotes} entity.
   */
  purchaseDeliveryNotes!: PurchaseDeliveryNotes<T>[];

  constructor(readonly _entityApi: LandedCostsApi<T>) {
    super(_entityApi);
  }
}

export interface LandedCostsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  docEntry: DeserializedType<T, 'Edm.Int32'>;
  landedCostNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  postingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  dueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  vendorCode?: DeserializedType<T, 'Edm.String'> | null;
  vendorName?: DeserializedType<T, 'Edm.String'> | null;
  broker?: DeserializedType<T, 'Edm.String'> | null;
  brokerName?: DeserializedType<T, 'Edm.String'> | null;
  closedDocument?: LandedCostDocStatusEnum | null;
  fileNumber?: DeserializedType<T, 'Edm.String'> | null;
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  reference?: DeserializedType<T, 'Edm.String'> | null;
  documentCurrency?: DeserializedType<T, 'Edm.String'> | null;
  documentRate?: DeserializedType<T, 'Edm.Double'> | null;
  projectedCustoms?: DeserializedType<T, 'Edm.Double'> | null;
  actualCustoms?: DeserializedType<T, 'Edm.Double'> | null;
  actualCustomsFc?: DeserializedType<T, 'Edm.Double'> | null;
  tax1?: DeserializedType<T, 'Edm.Double'> | null;
  tax2?: DeserializedType<T, 'Edm.Double'> | null;
  beforeTax?: DeserializedType<T, 'Edm.Double'> | null;
  total?: DeserializedType<T, 'Edm.Double'> | null;
  totalFreightCharges?: DeserializedType<T, 'Edm.Double'> | null;
  projectedCustomsFc?: DeserializedType<T, 'Edm.Double'> | null;
  tax1Fc?: DeserializedType<T, 'Edm.Double'> | null;
  tax2Fc?: DeserializedType<T, 'Edm.Double'> | null;
  beforeTaxFc?: DeserializedType<T, 'Edm.Double'> | null;
  totalFc?: DeserializedType<T, 'Edm.Double'> | null;
  totalFreightChargesFc?: DeserializedType<T, 'Edm.Double'> | null;
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  customsAffectsInventory?: BoYesNoEnum | null;
  amountToBalance?: DeserializedType<T, 'Edm.Double'> | null;
  amountToBalanceFc?: DeserializedType<T, 'Edm.Double'> | null;
  billofLadingNumber?: DeserializedType<T, 'Edm.String'> | null;
  transportType?: DeserializedType<T, 'Edm.Int32'> | null;
  transactionNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  journalRemarks?: DeserializedType<T, 'Edm.String'> | null;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  landedCostItemLines?: LandedCostItemLine<T>[] | null;
  landedCostCostLines?: LandedCostCostLine<T>[] | null;
  businessPartner?: BusinessPartnersType<T> | null;
  shippingType?: ShippingTypesType<T> | null;
  journalEntry?: JournalEntriesType<T> | null;
  purchaseDeliveryNotes: PurchaseDeliveryNotesType<T>[];
}
