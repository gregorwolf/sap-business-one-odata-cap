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
import type { BinLocationsApi } from './BinLocationsApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BinRestrictItemEnum } from './BinRestrictItemEnum';
import { BinRestrictionBatchEnum } from './BinRestrictionBatchEnum';
import { BinRestrictTransactionEnum } from './BinRestrictTransactionEnum';
import { BinRestrictUoMEnum } from './BinRestrictUoMEnum';
import { Warehouses, WarehousesType } from './Warehouses';
import { Items, ItemsType } from './Items';
import { ItemGroups, ItemGroupsType } from './ItemGroups';
import { WeightMeasures, WeightMeasuresType } from './WeightMeasures';
import {
  UnitOfMeasurements,
  UnitOfMeasurementsType
} from './UnitOfMeasurements';
import {
  UnitOfMeasurementGroups,
  UnitOfMeasurementGroupsType
} from './UnitOfMeasurementGroups';

/**
 * This class represents the entity "BinLocations" of service "SAPB1".
 */
export class BinLocations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BinLocationsType<T>
{
  /**
   * Technical entity name for BinLocations.
   */
  static _entityName = 'BinLocations';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BinLocations entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sublevel 1.
   * @nullable
   */
  sublevel1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sublevel 2.
   * @nullable
   */
  sublevel2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sublevel 3.
   * @nullable
   */
  sublevel3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sublevel 4.
   * @nullable
   */
  sublevel4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bin Code.
   * @nullable
   */
  binCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inactive.
   * @nullable
   */
  inactive?: BoYesNoEnum | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alternative Sort Code.
   * @nullable
   */
  alternativeSortCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bar Code.
   * @nullable
   */
  barCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attribute 1.
   * @nullable
   */
  attribute1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attribute 2.
   * @nullable
   */
  attribute2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attribute 3.
   * @nullable
   */
  attribute3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attribute 4.
   * @nullable
   */
  attribute4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attribute 5.
   * @nullable
   */
  attribute5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attribute 6.
   * @nullable
   */
  attribute6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attribute 7.
   * @nullable
   */
  attribute7?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attribute 8.
   * @nullable
   */
  attribute8?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attribute 9.
   * @nullable
   */
  attribute9?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attribute 10.
   * @nullable
   */
  attribute10?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Restricted Item Type.
   * @nullable
   */
  restrictedItemType?: BinRestrictItemEnum | null;
  /**
   * Specific Item.
   * @nullable
   */
  specificItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Specific Item Group.
   * @nullable
   */
  specificItemGroup?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Batch Restrictions.
   * @nullable
   */
  batchRestrictions?: BinRestrictionBatchEnum | null;
  /**
   * Restricted Trans Type.
   * @nullable
   */
  restrictedTransType?: BinRestrictTransactionEnum | null;
  /**
   * Restriction Reason.
   * @nullable
   */
  restrictionReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Restriction Changed.
   * @nullable
   */
  dateRestrictionChanged?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Minimum Qty.
   * @nullable
   */
  minimumQty?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Maximum Qty.
   * @nullable
   */
  maximumQty?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Is System Bin.
   * @nullable
   */
  isSystemBin?: BoYesNoEnum | null;
  /**
   * Receiving Bin Location.
   * @nullable
   */
  receivingBinLocation?: BoYesNoEnum | null;
  /**
   * Exclude Auto Alloc On Issue.
   * @nullable
   */
  excludeAutoAllocOnIssue?: BoYesNoEnum | null;
  /**
   * Maximum Weight.
   * @nullable
   */
  maximumWeight?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Maximum Weight 1.
   * @nullable
   */
  maximumWeight1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Maximum Weight Unit.
   * @nullable
   */
  maximumWeightUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Maximum Weight Unit 1.
   * @nullable
   */
  maximumWeightUnit1?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Restricted Uo M Type.
   * @nullable
   */
  restrictedUoMType?: BinRestrictUoMEnum | null;
  /**
   * Specific Uo M.
   * @nullable
   */
  specificUoM?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Specific Uo M Group.
   * @nullable
   */
  specificUoMGroup?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * One-to-many navigation property to the {@link Warehouses} entity.
   */
  warehouses!: Warehouses<T>[];
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  warehouse2?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link Items} entity.
   */
  item?: Items<T> | null;
  /**
   * One-to-one navigation property to the {@link ItemGroups} entity.
   */
  itemGroups?: ItemGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link WeightMeasures} entity.
   */
  weightMeasure?: WeightMeasures<T> | null;
  /**
   * One-to-one navigation property to the {@link UnitOfMeasurements} entity.
   */
  unitOfMeasurement?: UnitOfMeasurements<T> | null;
  /**
   * One-to-one navigation property to the {@link UnitOfMeasurementGroups} entity.
   */
  unitOfMeasurementGroup?: UnitOfMeasurementGroups<T> | null;

  constructor(readonly _entityApi: BinLocationsApi<T>) {
    super(_entityApi);
  }
}

export interface BinLocationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  sublevel1?: DeserializedType<T, 'Edm.String'> | null;
  sublevel2?: DeserializedType<T, 'Edm.String'> | null;
  sublevel3?: DeserializedType<T, 'Edm.String'> | null;
  sublevel4?: DeserializedType<T, 'Edm.String'> | null;
  binCode?: DeserializedType<T, 'Edm.String'> | null;
  inactive?: BoYesNoEnum | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  alternativeSortCode?: DeserializedType<T, 'Edm.String'> | null;
  barCode?: DeserializedType<T, 'Edm.String'> | null;
  attribute1?: DeserializedType<T, 'Edm.String'> | null;
  attribute2?: DeserializedType<T, 'Edm.String'> | null;
  attribute3?: DeserializedType<T, 'Edm.String'> | null;
  attribute4?: DeserializedType<T, 'Edm.String'> | null;
  attribute5?: DeserializedType<T, 'Edm.String'> | null;
  attribute6?: DeserializedType<T, 'Edm.String'> | null;
  attribute7?: DeserializedType<T, 'Edm.String'> | null;
  attribute8?: DeserializedType<T, 'Edm.String'> | null;
  attribute9?: DeserializedType<T, 'Edm.String'> | null;
  attribute10?: DeserializedType<T, 'Edm.String'> | null;
  restrictedItemType?: BinRestrictItemEnum | null;
  specificItem?: DeserializedType<T, 'Edm.String'> | null;
  specificItemGroup?: DeserializedType<T, 'Edm.Int32'> | null;
  batchRestrictions?: BinRestrictionBatchEnum | null;
  restrictedTransType?: BinRestrictTransactionEnum | null;
  restrictionReason?: DeserializedType<T, 'Edm.String'> | null;
  dateRestrictionChanged?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  minimumQty?: DeserializedType<T, 'Edm.Double'> | null;
  maximumQty?: DeserializedType<T, 'Edm.Double'> | null;
  isSystemBin?: BoYesNoEnum | null;
  receivingBinLocation?: BoYesNoEnum | null;
  excludeAutoAllocOnIssue?: BoYesNoEnum | null;
  maximumWeight?: DeserializedType<T, 'Edm.Double'> | null;
  maximumWeight1?: DeserializedType<T, 'Edm.Double'> | null;
  maximumWeightUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  maximumWeightUnit1?: DeserializedType<T, 'Edm.Int32'> | null;
  restrictedUoMType?: BinRestrictUoMEnum | null;
  specificUoM?: DeserializedType<T, 'Edm.Int32'> | null;
  specificUoMGroup?: DeserializedType<T, 'Edm.Int32'> | null;
  warehouses: WarehousesType<T>[];
  warehouse2?: WarehousesType<T> | null;
  item?: ItemsType<T> | null;
  itemGroups?: ItemGroupsType<T> | null;
  weightMeasure?: WeightMeasuresType<T> | null;
  unitOfMeasurement?: UnitOfMeasurementsType<T> | null;
  unitOfMeasurementGroup?: UnitOfMeasurementGroupsType<T> | null;
}
