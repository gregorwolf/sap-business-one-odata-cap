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
import { ProductionOrderLine } from './ProductionOrderLine';
import { ProductionOrdersSalesOrderLine } from './ProductionOrdersSalesOrderLine';
import { ProductionOrdersStage } from './ProductionOrdersStage';
import { ProductionOrdersDocumentReference } from './ProductionOrdersDocumentReference';
import type { ProductionOrdersApi } from './ProductionOrdersApi';
import { BoProductionOrderStatusEnum } from './BoProductionOrderStatusEnum';
import { BoProductionOrderTypeEnum } from './BoProductionOrderTypeEnum';
import { BoProductionOrderOriginEnum } from './BoProductionOrderOriginEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ResourceAllocationEnum } from './ResourceAllocationEnum';
import { BoUpdateAllocationEnum } from './BoUpdateAllocationEnum';
import { ProductTrees, ProductTreesType } from './ProductTrees';
import { Users, UsersType } from './Users';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Warehouses, WarehousesType } from './Warehouses';
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import { DistributionRules, DistributionRulesType } from './DistributionRules';
import { Projects, ProjectsType } from './Projects';
import {
  UnitOfMeasurements,
  UnitOfMeasurementsType
} from './UnitOfMeasurements';
import { Attachments2, Attachments2Type } from './Attachments2';

/**
 * This class represents the entity "ProductionOrders" of service "SAPB1".
 */
export class ProductionOrders<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductionOrdersType<T>
{
  /**
   * Technical entity name for ProductionOrders.
   */
  static _entityName = 'ProductionOrders';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ProductionOrders entity
   */
  static _keys = ['AbsoluteEntry'];
  /**
   * Absolute Entry.
   */
  absoluteEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Document Number.
   * @nullable
   */
  documentNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Series.
   * @nullable
   */
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Item No.
   * @nullable
   */
  itemNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Order Status.
   * @nullable
   */
  productionOrderStatus?: BoProductionOrderStatusEnum | null;
  /**
   * Production Order Type.
   * @nullable
   */
  productionOrderType?: BoProductionOrderTypeEnum | null;
  /**
   * Planned Quantity.
   * @nullable
   */
  plannedQuantity?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Completed Quantity.
   * @nullable
   */
  completedQuantity?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Rejected Quantity.
   * @nullable
   */
  rejectedQuantity?: DeserializedType<T, 'Edm.Double'> | null;
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
   * Production Order Origin Entry.
   * @nullable
   */
  productionOrderOriginEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Production Order Origin Number.
   * @nullable
   */
  productionOrderOriginNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Production Order Origin.
   * @nullable
   */
  productionOrderOrigin?: BoProductionOrderOriginEnum | null;
  /**
   * User Signature.
   * @nullable
   */
  userSignature?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Closing Date.
   * @nullable
   */
  closingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Release Date.
   * @nullable
   */
  releaseDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Customer Code.
   * @nullable
   */
  customerCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Uom.
   * @nullable
   */
  inventoryUom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Remarks.
   * @nullable
   */
  journalRemarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Number.
   * @nullable
   */
  transactionNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Printed.
   * @nullable
   */
  printed?: BoYesNoEnum | null;
  /**
   * Distribution Rule.
   * @nullable
   */
  distributionRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project.
   * @nullable
   */
  project?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Rule 2.
   * @nullable
   */
  distributionRule2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Rule 3.
   * @nullable
   */
  distributionRule3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Rule 4.
   * @nullable
   */
  distributionRule4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Rule 5.
   * @nullable
   */
  distributionRule5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Uo M Entry.
   * @nullable
   */
  uoMEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Product Description.
   * @nullable
   */
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Priority.
   * @nullable
   */
  priority?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Routing Date Calculation.
   * @nullable
   */
  routingDateCalculation?: ResourceAllocationEnum | null;
  /**
   * Update Allocation.
   * @nullable
   */
  updateAllocation?: BoUpdateAllocationEnum | null;
  /**
   * Sap Passport.
   * @nullable
   */
  sapPassport?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Production Order Lines.
   * @nullable
   */
  productionOrderLines?: ProductionOrderLine<T>[] | null;
  /**
   * Production Orders Sales Order Lines.
   * @nullable
   */
  productionOrdersSalesOrderLines?: ProductionOrdersSalesOrderLine<T>[] | null;
  /**
   * Production Orders Stages.
   * @nullable
   */
  productionOrdersStages?: ProductionOrdersStage<T>[] | null;
  /**
   * Production Orders Document References.
   * @nullable
   */
  productionOrdersDocumentReferences?:
    | ProductionOrdersDocumentReference<T>[]
    | null;
  /**
   * One-to-one navigation property to the {@link ProductTrees} entity.
   */
  productTree?: ProductTrees<T> | null;
  /**
   * One-to-one navigation property to the {@link Users} entity.
   */
  user?: Users<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner?: BusinessPartners<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  warehouse2?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link JournalEntries} entity.
   */
  journalEntry?: JournalEntries<T> | null;
  /**
   * One-to-one navigation property to the {@link DistributionRules} entity.
   */
  distributionRule6?: DistributionRules<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  project2?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link UnitOfMeasurements} entity.
   */
  unitOfMeasurement?: UnitOfMeasurements<T> | null;
  /**
   * One-to-one navigation property to the {@link Attachments2} entity.
   */
  attachments2?: Attachments2<T> | null;

  constructor(readonly _entityApi: ProductionOrdersApi<T>) {
    super(_entityApi);
  }
}

export interface ProductionOrdersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absoluteEntry: DeserializedType<T, 'Edm.Int32'>;
  documentNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  itemNo?: DeserializedType<T, 'Edm.String'> | null;
  productionOrderStatus?: BoProductionOrderStatusEnum | null;
  productionOrderType?: BoProductionOrderTypeEnum | null;
  plannedQuantity?: DeserializedType<T, 'Edm.Double'> | null;
  completedQuantity?: DeserializedType<T, 'Edm.Double'> | null;
  rejectedQuantity?: DeserializedType<T, 'Edm.Double'> | null;
  postingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  dueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  productionOrderOriginEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  productionOrderOriginNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  productionOrderOrigin?: BoProductionOrderOriginEnum | null;
  userSignature?: DeserializedType<T, 'Edm.Int32'> | null;
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  closingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  releaseDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  customerCode?: DeserializedType<T, 'Edm.String'> | null;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  inventoryUom?: DeserializedType<T, 'Edm.String'> | null;
  journalRemarks?: DeserializedType<T, 'Edm.String'> | null;
  transactionNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  printed?: BoYesNoEnum | null;
  distributionRule?: DeserializedType<T, 'Edm.String'> | null;
  project?: DeserializedType<T, 'Edm.String'> | null;
  distributionRule2?: DeserializedType<T, 'Edm.String'> | null;
  distributionRule3?: DeserializedType<T, 'Edm.String'> | null;
  distributionRule4?: DeserializedType<T, 'Edm.String'> | null;
  distributionRule5?: DeserializedType<T, 'Edm.String'> | null;
  uoMEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  priority?: DeserializedType<T, 'Edm.Int32'> | null;
  routingDateCalculation?: ResourceAllocationEnum | null;
  updateAllocation?: BoUpdateAllocationEnum | null;
  sapPassport?: DeserializedType<T, 'Edm.String'> | null;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  productionOrderLines?: ProductionOrderLine<T>[] | null;
  productionOrdersSalesOrderLines?: ProductionOrdersSalesOrderLine<T>[] | null;
  productionOrdersStages?: ProductionOrdersStage<T>[] | null;
  productionOrdersDocumentReferences?:
    | ProductionOrdersDocumentReference<T>[]
    | null;
  productTree?: ProductTreesType<T> | null;
  user?: UsersType<T> | null;
  businessPartner?: BusinessPartnersType<T> | null;
  warehouse2?: WarehousesType<T> | null;
  journalEntry?: JournalEntriesType<T> | null;
  distributionRule6?: DistributionRulesType<T> | null;
  project2?: ProjectsType<T> | null;
  unitOfMeasurement?: UnitOfMeasurementsType<T> | null;
  attachments2?: Attachments2Type<T> | null;
}
