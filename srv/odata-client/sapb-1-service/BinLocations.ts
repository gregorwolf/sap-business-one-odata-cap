/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BinLocationsRequestBuilder } from './BinLocationsRequestBuilder';
import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BinRestrictItemEnum } from './BinRestrictItemEnum';
import { BinRestrictionBatchEnum } from './BinRestrictionBatchEnum';
import { BinRestrictTransactionEnum } from './BinRestrictTransactionEnum';
import { BinRestrictUoMEnum } from './BinRestrictUoMEnum';
import { AllFields, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "BinLocations" of service "SAPB1".
 */
export class BinLocations extends EntityV4 implements BinLocationsType {
  /**
   * Technical entity name for BinLocations.
   */
  static _entityName = 'BinLocations';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: string;
  /**
   * Sublevel 1.
   * @nullable
   */
  sublevel1?: string;
  /**
   * Sublevel 2.
   * @nullable
   */
  sublevel2?: string;
  /**
   * Sublevel 3.
   * @nullable
   */
  sublevel3?: string;
  /**
   * Sublevel 4.
   * @nullable
   */
  sublevel4?: string;
  /**
   * Bin Code.
   * @nullable
   */
  binCode?: string;
  /**
   * Inactive.
   * @nullable
   */
  inactive?: BoYesNoEnum;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Alternative Sort Code.
   * @nullable
   */
  alternativeSortCode?: string;
  /**
   * Bar Code.
   * @nullable
   */
  barCode?: string;
  /**
   * Attribute 1.
   * @nullable
   */
  attribute1?: string;
  /**
   * Attribute 2.
   * @nullable
   */
  attribute2?: string;
  /**
   * Attribute 3.
   * @nullable
   */
  attribute3?: string;
  /**
   * Attribute 4.
   * @nullable
   */
  attribute4?: string;
  /**
   * Attribute 5.
   * @nullable
   */
  attribute5?: string;
  /**
   * Attribute 6.
   * @nullable
   */
  attribute6?: string;
  /**
   * Attribute 7.
   * @nullable
   */
  attribute7?: string;
  /**
   * Attribute 8.
   * @nullable
   */
  attribute8?: string;
  /**
   * Attribute 9.
   * @nullable
   */
  attribute9?: string;
  /**
   * Attribute 10.
   * @nullable
   */
  attribute10?: string;
  /**
   * Restricted Item Type.
   * @nullable
   */
  restrictedItemType?: BinRestrictItemEnum;
  /**
   * Specific Item.
   * @nullable
   */
  specificItem?: string;
  /**
   * Specific Item Group.
   * @nullable
   */
  specificItemGroup?: number;
  /**
   * Batch Restrictions.
   * @nullable
   */
  batchRestrictions?: BinRestrictionBatchEnum;
  /**
   * Restricted Trans Type.
   * @nullable
   */
  restrictedTransType?: BinRestrictTransactionEnum;
  /**
   * Restriction Reason.
   * @nullable
   */
  restrictionReason?: string;
  /**
   * Date Restriction Changed.
   * @nullable
   */
  dateRestrictionChanged?: Moment;
  /**
   * Minimum Qty.
   * @nullable
   */
  minimumQty?: number;
  /**
   * Maximum Qty.
   * @nullable
   */
  maximumQty?: number;
  /**
   * Is System Bin.
   * @nullable
   */
  isSystemBin?: BoYesNoEnum;
  /**
   * Receiving Bin Location.
   * @nullable
   */
  receivingBinLocation?: BoYesNoEnum;
  /**
   * Exclude Auto Alloc On Issue.
   * @nullable
   */
  excludeAutoAllocOnIssue?: BoYesNoEnum;
  /**
   * Maximum Weight.
   * @nullable
   */
  maximumWeight?: number;
  /**
   * Maximum Weight 1.
   * @nullable
   */
  maximumWeight1?: number;
  /**
   * Maximum Weight Unit.
   * @nullable
   */
  maximumWeightUnit?: number;
  /**
   * Maximum Weight Unit 1.
   * @nullable
   */
  maximumWeightUnit1?: number;
  /**
   * Restricted Uo M Type.
   * @nullable
   */
  restrictedUoMType?: BinRestrictUoMEnum;
  /**
   * Specific Uo M.
   * @nullable
   */
  specificUoM?: number;
  /**
   * Specific Uo M Group.
   * @nullable
   */
  specificUoMGroup?: number;
  /**
   * One-to-many navigation property to the [[Warehouses]] entity.
   */
  warehouses!: Warehouses[];
  /**
   * One-to-one navigation property to the [[Warehouses]] entity.
   */
  warehouse2!: Warehouses;
  /**
   * One-to-one navigation property to the [[Items]] entity.
   */
  item!: Items;
  /**
   * One-to-one navigation property to the [[ItemGroups]] entity.
   */
  itemGroups!: ItemGroups;
  /**
   * One-to-one navigation property to the [[WeightMeasures]] entity.
   */
  weightMeasure!: WeightMeasures;
  /**
   * One-to-one navigation property to the [[UnitOfMeasurements]] entity.
   */
  unitOfMeasurement!: UnitOfMeasurements;
  /**
   * One-to-one navigation property to the [[UnitOfMeasurementGroups]] entity.
   */
  unitOfMeasurementGroup!: UnitOfMeasurementGroups;

  /**
   * Returns an entity builder to construct instances of `BinLocations`.
   * @returns A builder that constructs instances of entity type `BinLocations`.
   */
  static builder(): EntityBuilderType<BinLocations, BinLocationsType> {
    return EntityV4.entityBuilder(BinLocations);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BinLocations` entity type.
   * @returns A `BinLocations` request builder.
   */
  static requestBuilder(): BinLocationsRequestBuilder {
    return new BinLocationsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BinLocations`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BinLocations`.
   */
  static customField(fieldName: string): CustomFieldV4<BinLocations> {
    return EntityV4.customFieldSelector(fieldName, BinLocations);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Warehouses, WarehousesType } from './Warehouses';
import { Items, ItemsType } from './Items';
import { ItemGroups, ItemGroupsType } from './ItemGroups';
import { WeightMeasures, WeightMeasuresType } from './WeightMeasures';
import { UnitOfMeasurements, UnitOfMeasurementsType } from './UnitOfMeasurements';
import { UnitOfMeasurementGroups, UnitOfMeasurementGroupsType } from './UnitOfMeasurementGroups';

export interface BinLocationsType {
  absEntry?: number | null;
  warehouse?: string | null;
  sublevel1?: string | null;
  sublevel2?: string | null;
  sublevel3?: string | null;
  sublevel4?: string | null;
  binCode?: string | null;
  inactive?: BoYesNoEnum | null;
  description?: string | null;
  alternativeSortCode?: string | null;
  barCode?: string | null;
  attribute1?: string | null;
  attribute2?: string | null;
  attribute3?: string | null;
  attribute4?: string | null;
  attribute5?: string | null;
  attribute6?: string | null;
  attribute7?: string | null;
  attribute8?: string | null;
  attribute9?: string | null;
  attribute10?: string | null;
  restrictedItemType?: BinRestrictItemEnum | null;
  specificItem?: string | null;
  specificItemGroup?: number | null;
  batchRestrictions?: BinRestrictionBatchEnum | null;
  restrictedTransType?: BinRestrictTransactionEnum | null;
  restrictionReason?: string | null;
  dateRestrictionChanged?: Moment | null;
  minimumQty?: number | null;
  maximumQty?: number | null;
  isSystemBin?: BoYesNoEnum | null;
  receivingBinLocation?: BoYesNoEnum | null;
  excludeAutoAllocOnIssue?: BoYesNoEnum | null;
  maximumWeight?: number | null;
  maximumWeight1?: number | null;
  maximumWeightUnit?: number | null;
  maximumWeightUnit1?: number | null;
  restrictedUoMType?: BinRestrictUoMEnum | null;
  specificUoM?: number | null;
  specificUoMGroup?: number | null;
  warehouses: WarehousesType[];
  warehouse2: WarehousesType;
  item: ItemsType;
  itemGroups: ItemGroupsType;
  weightMeasure: WeightMeasuresType;
  unitOfMeasurement: UnitOfMeasurementsType;
  unitOfMeasurementGroup: UnitOfMeasurementGroupsType;
}

export namespace BinLocations {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<BinLocations> = new NumberField('AbsEntry', BinLocations, 'Edm.Int32');
  /**
   * Static representation of the [[warehouse]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSE: StringField<BinLocations> = new StringField('Warehouse', BinLocations, 'Edm.String');
  /**
   * Static representation of the [[sublevel1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBLEVEL_1: StringField<BinLocations> = new StringField('Sublevel1', BinLocations, 'Edm.String');
  /**
   * Static representation of the [[sublevel2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBLEVEL_2: StringField<BinLocations> = new StringField('Sublevel2', BinLocations, 'Edm.String');
  /**
   * Static representation of the [[sublevel3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBLEVEL_3: StringField<BinLocations> = new StringField('Sublevel3', BinLocations, 'Edm.String');
  /**
   * Static representation of the [[sublevel4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBLEVEL_4: StringField<BinLocations> = new StringField('Sublevel4', BinLocations, 'Edm.String');
  /**
   * Static representation of the [[binCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BIN_CODE: StringField<BinLocations> = new StringField('BinCode', BinLocations, 'Edm.String');
  /**
   * Static representation of the [[inactive]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INACTIVE: EnumField<BinLocations> = new EnumField('Inactive', BinLocations);
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<BinLocations> = new StringField('Description', BinLocations, 'Edm.String');
  /**
   * Static representation of the [[alternativeSortCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALTERNATIVE_SORT_CODE: StringField<BinLocations> = new StringField('AlternativeSortCode', BinLocations, 'Edm.String');
  /**
   * Static representation of the [[barCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BAR_CODE: StringField<BinLocations> = new StringField('BarCode', BinLocations, 'Edm.String');
  /**
   * Static representation of the [[attribute1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTRIBUTE_1: StringField<BinLocations> = new StringField('Attribute1', BinLocations, 'Edm.String');
  /**
   * Static representation of the [[attribute2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTRIBUTE_2: StringField<BinLocations> = new StringField('Attribute2', BinLocations, 'Edm.String');
  /**
   * Static representation of the [[attribute3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTRIBUTE_3: StringField<BinLocations> = new StringField('Attribute3', BinLocations, 'Edm.String');
  /**
   * Static representation of the [[attribute4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTRIBUTE_4: StringField<BinLocations> = new StringField('Attribute4', BinLocations, 'Edm.String');
  /**
   * Static representation of the [[attribute5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTRIBUTE_5: StringField<BinLocations> = new StringField('Attribute5', BinLocations, 'Edm.String');
  /**
   * Static representation of the [[attribute6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTRIBUTE_6: StringField<BinLocations> = new StringField('Attribute6', BinLocations, 'Edm.String');
  /**
   * Static representation of the [[attribute7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTRIBUTE_7: StringField<BinLocations> = new StringField('Attribute7', BinLocations, 'Edm.String');
  /**
   * Static representation of the [[attribute8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTRIBUTE_8: StringField<BinLocations> = new StringField('Attribute8', BinLocations, 'Edm.String');
  /**
   * Static representation of the [[attribute9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTRIBUTE_9: StringField<BinLocations> = new StringField('Attribute9', BinLocations, 'Edm.String');
  /**
   * Static representation of the [[attribute10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTRIBUTE_10: StringField<BinLocations> = new StringField('Attribute10', BinLocations, 'Edm.String');
  /**
   * Static representation of the [[restrictedItemType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESTRICTED_ITEM_TYPE: EnumField<BinLocations> = new EnumField('RestrictedItemType', BinLocations);
  /**
   * Static representation of the [[specificItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPECIFIC_ITEM: StringField<BinLocations> = new StringField('SpecificItem', BinLocations, 'Edm.String');
  /**
   * Static representation of the [[specificItemGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPECIFIC_ITEM_GROUP: NumberField<BinLocations> = new NumberField('SpecificItemGroup', BinLocations, 'Edm.Int32');
  /**
   * Static representation of the [[batchRestrictions]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BATCH_RESTRICTIONS: EnumField<BinLocations> = new EnumField('BatchRestrictions', BinLocations);
  /**
   * Static representation of the [[restrictedTransType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESTRICTED_TRANS_TYPE: EnumField<BinLocations> = new EnumField('RestrictedTransType', BinLocations);
  /**
   * Static representation of the [[restrictionReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESTRICTION_REASON: StringField<BinLocations> = new StringField('RestrictionReason', BinLocations, 'Edm.String');
  /**
   * Static representation of the [[dateRestrictionChanged]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_RESTRICTION_CHANGED: DateField<BinLocations> = new DateField('DateRestrictionChanged', BinLocations, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[minimumQty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MINIMUM_QTY: NumberField<BinLocations> = new NumberField('MinimumQty', BinLocations, 'Edm.Double');
  /**
   * Static representation of the [[maximumQty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAXIMUM_QTY: NumberField<BinLocations> = new NumberField('MaximumQty', BinLocations, 'Edm.Double');
  /**
   * Static representation of the [[isSystemBin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_SYSTEM_BIN: EnumField<BinLocations> = new EnumField('IsSystemBin', BinLocations);
  /**
   * Static representation of the [[receivingBinLocation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECEIVING_BIN_LOCATION: EnumField<BinLocations> = new EnumField('ReceivingBinLocation', BinLocations);
  /**
   * Static representation of the [[excludeAutoAllocOnIssue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXCLUDE_AUTO_ALLOC_ON_ISSUE: EnumField<BinLocations> = new EnumField('ExcludeAutoAllocOnIssue', BinLocations);
  /**
   * Static representation of the [[maximumWeight]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAXIMUM_WEIGHT: NumberField<BinLocations> = new NumberField('MaximumWeight', BinLocations, 'Edm.Double');
  /**
   * Static representation of the [[maximumWeight1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAXIMUM_WEIGHT_1: NumberField<BinLocations> = new NumberField('MaximumWeight1', BinLocations, 'Edm.Double');
  /**
   * Static representation of the [[maximumWeightUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAXIMUM_WEIGHT_UNIT: NumberField<BinLocations> = new NumberField('MaximumWeightUnit', BinLocations, 'Edm.Int32');
  /**
   * Static representation of the [[maximumWeightUnit1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAXIMUM_WEIGHT_UNIT_1: NumberField<BinLocations> = new NumberField('MaximumWeightUnit1', BinLocations, 'Edm.Int32');
  /**
   * Static representation of the [[restrictedUoMType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESTRICTED_UO_M_TYPE: EnumField<BinLocations> = new EnumField('RestrictedUoMType', BinLocations);
  /**
   * Static representation of the [[specificUoM]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPECIFIC_UO_M: NumberField<BinLocations> = new NumberField('SpecificUoM', BinLocations, 'Edm.Int32');
  /**
   * Static representation of the [[specificUoMGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPECIFIC_UO_M_GROUP: NumberField<BinLocations> = new NumberField('SpecificUoMGroup', BinLocations, 'Edm.Int32');
  /**
   * Static representation of the one-to-many navigation property [[warehouses]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSES: OneToManyLink<BinLocations, Warehouses> = new OneToManyLink('Warehouses', BinLocations, Warehouses);
  /**
   * Static representation of the one-to-one navigation property [[warehouse2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSE_2: OneToOneLink<BinLocations, Warehouses> = new OneToOneLink('Warehouse2', BinLocations, Warehouses);
  /**
   * Static representation of the one-to-one navigation property [[item]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM: OneToOneLink<BinLocations, Items> = new OneToOneLink('Item', BinLocations, Items);
  /**
   * Static representation of the one-to-one navigation property [[itemGroups]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_GROUPS: OneToOneLink<BinLocations, ItemGroups> = new OneToOneLink('ItemGroups', BinLocations, ItemGroups);
  /**
   * Static representation of the one-to-one navigation property [[weightMeasure]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_MEASURE: OneToOneLink<BinLocations, WeightMeasures> = new OneToOneLink('WeightMeasure', BinLocations, WeightMeasures);
  /**
   * Static representation of the one-to-one navigation property [[unitOfMeasurement]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_OF_MEASUREMENT: OneToOneLink<BinLocations, UnitOfMeasurements> = new OneToOneLink('UnitOfMeasurement', BinLocations, UnitOfMeasurements);
  /**
   * Static representation of the one-to-one navigation property [[unitOfMeasurementGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_OF_MEASUREMENT_GROUP: OneToOneLink<BinLocations, UnitOfMeasurementGroups> = new OneToOneLink('UnitOfMeasurementGroup', BinLocations, UnitOfMeasurementGroups);
  /**
   * All fields of the BinLocations entity.
   */
  export const _allFields: Array<NumberField<BinLocations> | StringField<BinLocations> | EnumField<BinLocations> | DateField<BinLocations> | OneToManyLink<BinLocations, Warehouses> | OneToOneLink<BinLocations, Warehouses> | OneToOneLink<BinLocations, Items> | OneToOneLink<BinLocations, ItemGroups> | OneToOneLink<BinLocations, WeightMeasures> | OneToOneLink<BinLocations, UnitOfMeasurements> | OneToOneLink<BinLocations, UnitOfMeasurementGroups>> = [
    BinLocations.ABS_ENTRY,
    BinLocations.WAREHOUSE,
    BinLocations.SUBLEVEL_1,
    BinLocations.SUBLEVEL_2,
    BinLocations.SUBLEVEL_3,
    BinLocations.SUBLEVEL_4,
    BinLocations.BIN_CODE,
    BinLocations.INACTIVE,
    BinLocations.DESCRIPTION,
    BinLocations.ALTERNATIVE_SORT_CODE,
    BinLocations.BAR_CODE,
    BinLocations.ATTRIBUTE_1,
    BinLocations.ATTRIBUTE_2,
    BinLocations.ATTRIBUTE_3,
    BinLocations.ATTRIBUTE_4,
    BinLocations.ATTRIBUTE_5,
    BinLocations.ATTRIBUTE_6,
    BinLocations.ATTRIBUTE_7,
    BinLocations.ATTRIBUTE_8,
    BinLocations.ATTRIBUTE_9,
    BinLocations.ATTRIBUTE_10,
    BinLocations.RESTRICTED_ITEM_TYPE,
    BinLocations.SPECIFIC_ITEM,
    BinLocations.SPECIFIC_ITEM_GROUP,
    BinLocations.BATCH_RESTRICTIONS,
    BinLocations.RESTRICTED_TRANS_TYPE,
    BinLocations.RESTRICTION_REASON,
    BinLocations.DATE_RESTRICTION_CHANGED,
    BinLocations.MINIMUM_QTY,
    BinLocations.MAXIMUM_QTY,
    BinLocations.IS_SYSTEM_BIN,
    BinLocations.RECEIVING_BIN_LOCATION,
    BinLocations.EXCLUDE_AUTO_ALLOC_ON_ISSUE,
    BinLocations.MAXIMUM_WEIGHT,
    BinLocations.MAXIMUM_WEIGHT_1,
    BinLocations.MAXIMUM_WEIGHT_UNIT,
    BinLocations.MAXIMUM_WEIGHT_UNIT_1,
    BinLocations.RESTRICTED_UO_M_TYPE,
    BinLocations.SPECIFIC_UO_M,
    BinLocations.SPECIFIC_UO_M_GROUP,
    BinLocations.WAREHOUSES,
    BinLocations.WAREHOUSE_2,
    BinLocations.ITEM,
    BinLocations.ITEM_GROUPS,
    BinLocations.WEIGHT_MEASURE,
    BinLocations.UNIT_OF_MEASUREMENT,
    BinLocations.UNIT_OF_MEASUREMENT_GROUP
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BinLocations> = new AllFields('*', BinLocations);
  /**
   * All key fields of the BinLocations entity.
   */
  export const _keyFields: Array<Field<BinLocations>> = [BinLocations.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property BinLocations.
   */
  export const _keys: { [keys: string]: Field<BinLocations> } = BinLocations._keyFields.reduce((acc: { [keys: string]: Field<BinLocations> }, field: Field<BinLocations>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
