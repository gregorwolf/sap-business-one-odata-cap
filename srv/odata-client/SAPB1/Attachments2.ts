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
import { Attachments2Line } from './Attachments2Line';
import type { Attachments2Api } from './Attachments2Api';
import { ChecksforPayment, ChecksforPaymentType } from './ChecksforPayment';
import {
  CustomerEquipmentCards,
  CustomerEquipmentCardsType
} from './CustomerEquipmentCards';
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import { ServiceContracts, ServiceContractsType } from './ServiceContracts';
import {
  InventoryCountings,
  InventoryCountingsType
} from './InventoryCountings';
import {
  InventoryOpeningBalances,
  InventoryOpeningBalancesType
} from './InventoryOpeningBalances';
import { InventoryPostings, InventoryPostingsType } from './InventoryPostings';
import { BlanketAgreements, BlanketAgreementsType } from './BlanketAgreements';
import { Campaigns, CampaignsType } from './Campaigns';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
import { ProductionOrders, ProductionOrdersType } from './ProductionOrders';
import {
  ProjectManagementTimeSheet,
  ProjectManagementTimeSheetType
} from './ProjectManagementTimeSheet';
import {
  ProjectManagements,
  ProjectManagementsType
} from './ProjectManagements';
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';
import { Deposits, DepositsType } from './Deposits';
import { VendorPayments, VendorPaymentsType } from './VendorPayments';

/**
 * This class represents the entity "Attachments2" of service "SAPB1".
 */
export class Attachments2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Attachments2Type<T>
{
  /**
   * Technical entity name for Attachments2.
   */
  static _entityName = 'Attachments2';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Attachments2 entity
   */
  static _keys = ['AbsoluteEntry'];
  /**
   * Absolute Entry.
   */
  absoluteEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Attachments 2 Lines.
   * @nullable
   */
  attachments2Lines?: Attachments2Line<T>[] | null;
  /**
   * One-to-many navigation property to the {@link ChecksforPayment} entity.
   */
  checksforPayment!: ChecksforPayment<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerEquipmentCards} entity.
   */
  customerEquipmentCards!: CustomerEquipmentCards<T>[];
  /**
   * One-to-many navigation property to the {@link JournalEntries} entity.
   */
  journalEntries!: JournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceContracts} entity.
   */
  serviceContracts!: ServiceContracts<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryCountings} entity.
   */
  inventoryCountings!: InventoryCountings<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryOpeningBalances} entity.
   */
  inventoryOpeningBalances!: InventoryOpeningBalances<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryPostings} entity.
   */
  inventoryPostings!: InventoryPostings<T>[];
  /**
   * One-to-many navigation property to the {@link BlanketAgreements} entity.
   */
  blanketAgreements!: BlanketAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link Campaigns} entity.
   */
  campaigns!: Campaigns<T>[];
  /**
   * One-to-many navigation property to the {@link PaymentDrafts} entity.
   */
  paymentDrafts!: PaymentDrafts<T>[];
  /**
   * One-to-many navigation property to the {@link ProductionOrders} entity.
   */
  productionOrders!: ProductionOrders<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectManagementTimeSheet} entity.
   */
  projectManagementTimeSheet!: ProjectManagementTimeSheet<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectManagements} entity.
   */
  projectManagements!: ProjectManagements<T>[];
  /**
   * One-to-many navigation property to the {@link IncomingPayments} entity.
   */
  incomingPayments!: IncomingPayments<T>[];
  /**
   * One-to-many navigation property to the {@link Deposits} entity.
   */
  deposits!: Deposits<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPayments} entity.
   */
  vendorPayments!: VendorPayments<T>[];

  constructor(readonly _entityApi: Attachments2Api<T>) {
    super(_entityApi);
  }
}

export interface Attachments2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  absoluteEntry: DeserializedType<T, 'Edm.Int32'>;
  attachments2Lines?: Attachments2Line<T>[] | null;
  checksforPayment: ChecksforPaymentType<T>[];
  customerEquipmentCards: CustomerEquipmentCardsType<T>[];
  journalEntries: JournalEntriesType<T>[];
  serviceContracts: ServiceContractsType<T>[];
  inventoryCountings: InventoryCountingsType<T>[];
  inventoryOpeningBalances: InventoryOpeningBalancesType<T>[];
  inventoryPostings: InventoryPostingsType<T>[];
  blanketAgreements: BlanketAgreementsType<T>[];
  campaigns: CampaignsType<T>[];
  paymentDrafts: PaymentDraftsType<T>[];
  productionOrders: ProductionOrdersType<T>[];
  projectManagementTimeSheet: ProjectManagementTimeSheetType<T>[];
  projectManagements: ProjectManagementsType<T>[];
  incomingPayments: IncomingPaymentsType<T>[];
  deposits: DepositsType<T>[];
  vendorPayments: VendorPaymentsType<T>[];
}
