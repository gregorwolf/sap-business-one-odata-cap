/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UnitOfMeasurementsRequestBuilder } from './UnitOfMeasurementsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "UnitOfMeasurements" of service "SAPB1".
 */
export class UnitOfMeasurements extends Entity implements UnitOfMeasurementsType {
  /**
   * Technical entity name for UnitOfMeasurements.
   */
  static _entityName = 'UnitOfMeasurements';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for UnitOfMeasurements.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Length 1.
   * @nullable
   */
  length1?: number;
  /**
   * Length 1 Unit.
   * @nullable
   */
  length1Unit?: number;
  /**
   * Length 2.
   * @nullable
   */
  length2?: number;
  /**
   * Length 2 Unit.
   * @nullable
   */
  length2Unit?: number;
  /**
   * Width 1.
   * @nullable
   */
  width1?: number;
  /**
   * Width 1 Unit.
   * @nullable
   */
  width1Unit?: number;
  /**
   * Width 2.
   * @nullable
   */
  width2?: number;
  /**
   * Width 2 Unit.
   * @nullable
   */
  width2Unit?: number;
  /**
   * Height 1.
   * @nullable
   */
  height1?: number;
  /**
   * Height 1 Unit.
   * @nullable
   */
  height1Unit?: number;
  /**
   * Height 2.
   * @nullable
   */
  height2?: number;
  /**
   * Height 2 Unit.
   * @nullable
   */
  height2Unit?: number;
  /**
   * Volume.
   * @nullable
   */
  volume?: number;
  /**
   * Volume Unit.
   * @nullable
   */
  volumeUnit?: number;
  /**
   * Weight 1.
   * @nullable
   */
  weight1?: number;
  /**
   * Weight 1 Unit.
   * @nullable
   */
  weight1Unit?: number;
  /**
   * Weight 2.
   * @nullable
   */
  weight2?: number;
  /**
   * Weight 2 Unit.
   * @nullable
   */
  weight2Unit?: number;
  /**
   * International Symbol.
   * @nullable
   */
  internationalSymbol?: string;
  /**
   * One-to-many navigation property to the [[ItemGroups]] entity.
   */
  itemGroups!: ItemGroups[];
  /**
   * One-to-many navigation property to the [[Items]] entity.
   */
  items!: Items[];
  /**
   * One-to-many navigation property to the [[ProductionOrders]] entity.
   */
  productionOrders!: ProductionOrders[];
  /**
   * One-to-many navigation property to the [[UnitOfMeasurementGroups]] entity.
   */
  unitOfMeasurementGroups!: UnitOfMeasurementGroups[];
  /**
   * One-to-many navigation property to the [[BarCodes]] entity.
   */
  barCodes!: BarCodes[];
  /**
   * One-to-many navigation property to the [[BinLocations]] entity.
   */
  binLocations!: BinLocations[];

  /**
   * Returns an entity builder to construct instances `UnitOfMeasurements`.
   * @returns A builder that constructs instances of entity type `UnitOfMeasurements`.
   */
  static builder(): EntityBuilderType<UnitOfMeasurements, UnitOfMeasurementsTypeForceMandatory> {
    return Entity.entityBuilder(UnitOfMeasurements);
  }

  /**
   * Returns a request builder to construct requests for operations on the `UnitOfMeasurements` entity type.
   * @returns A `UnitOfMeasurements` request builder.
   */
  static requestBuilder(): UnitOfMeasurementsRequestBuilder {
    return new UnitOfMeasurementsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `UnitOfMeasurements`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `UnitOfMeasurements`.
   */
  static customField(fieldName: string): CustomField<UnitOfMeasurements> {
    return Entity.customFieldSelector(fieldName, UnitOfMeasurements);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { ItemGroups, ItemGroupsType } from './ItemGroups';
import { Items, ItemsType } from './Items';
import { ProductionOrders, ProductionOrdersType } from './ProductionOrders';
import { UnitOfMeasurementGroups, UnitOfMeasurementGroupsType } from './UnitOfMeasurementGroups';
import { BarCodes, BarCodesType } from './BarCodes';
import { BinLocations, BinLocationsType } from './BinLocations';

export interface UnitOfMeasurementsType {
  absEntry?: number;
  code?: string;
  name?: string;
  length1?: number;
  length1Unit?: number;
  length2?: number;
  length2Unit?: number;
  width1?: number;
  width1Unit?: number;
  width2?: number;
  width2Unit?: number;
  height1?: number;
  height1Unit?: number;
  height2?: number;
  height2Unit?: number;
  volume?: number;
  volumeUnit?: number;
  weight1?: number;
  weight1Unit?: number;
  weight2?: number;
  weight2Unit?: number;
  internationalSymbol?: string;
  itemGroups: ItemGroupsType[];
  items: ItemsType[];
  productionOrders: ProductionOrdersType[];
  unitOfMeasurementGroups: UnitOfMeasurementGroupsType[];
  barCodes: BarCodesType[];
  binLocations: BinLocationsType[];
}

export interface UnitOfMeasurementsTypeForceMandatory {
  absEntry: number;
  code: string;
  name: string;
  length1: number;
  length1Unit: number;
  length2: number;
  length2Unit: number;
  width1: number;
  width1Unit: number;
  width2: number;
  width2Unit: number;
  height1: number;
  height1Unit: number;
  height2: number;
  height2Unit: number;
  volume: number;
  volumeUnit: number;
  weight1: number;
  weight1Unit: number;
  weight2: number;
  weight2Unit: number;
  internationalSymbol: string;
  itemGroups: ItemGroupsType[];
  items: ItemsType[];
  productionOrders: ProductionOrdersType[];
  unitOfMeasurementGroups: UnitOfMeasurementGroupsType[];
  barCodes: BarCodesType[];
  binLocations: BinLocationsType[];
}

export namespace UnitOfMeasurements {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<UnitOfMeasurements> = new NumberField('AbsEntry', UnitOfMeasurements, 'Edm.Int32');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<UnitOfMeasurements> = new StringField('Code', UnitOfMeasurements, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<UnitOfMeasurements> = new StringField('Name', UnitOfMeasurements, 'Edm.String');
  /**
   * Static representation of the [[length1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LENGTH_1: NumberField<UnitOfMeasurements> = new NumberField('Length1', UnitOfMeasurements, 'Edm.Double');
  /**
   * Static representation of the [[length1Unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LENGTH_1_UNIT: NumberField<UnitOfMeasurements> = new NumberField('Length1Unit', UnitOfMeasurements, 'Edm.Int32');
  /**
   * Static representation of the [[length2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LENGTH_2: NumberField<UnitOfMeasurements> = new NumberField('Length2', UnitOfMeasurements, 'Edm.Double');
  /**
   * Static representation of the [[length2Unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LENGTH_2_UNIT: NumberField<UnitOfMeasurements> = new NumberField('Length2Unit', UnitOfMeasurements, 'Edm.Int32');
  /**
   * Static representation of the [[width1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIDTH_1: NumberField<UnitOfMeasurements> = new NumberField('Width1', UnitOfMeasurements, 'Edm.Double');
  /**
   * Static representation of the [[width1Unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIDTH_1_UNIT: NumberField<UnitOfMeasurements> = new NumberField('Width1Unit', UnitOfMeasurements, 'Edm.Int32');
  /**
   * Static representation of the [[width2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIDTH_2: NumberField<UnitOfMeasurements> = new NumberField('Width2', UnitOfMeasurements, 'Edm.Double');
  /**
   * Static representation of the [[width2Unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIDTH_2_UNIT: NumberField<UnitOfMeasurements> = new NumberField('Width2Unit', UnitOfMeasurements, 'Edm.Int32');
  /**
   * Static representation of the [[height1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEIGHT_1: NumberField<UnitOfMeasurements> = new NumberField('Height1', UnitOfMeasurements, 'Edm.Double');
  /**
   * Static representation of the [[height1Unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEIGHT_1_UNIT: NumberField<UnitOfMeasurements> = new NumberField('Height1Unit', UnitOfMeasurements, 'Edm.Int32');
  /**
   * Static representation of the [[height2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEIGHT_2: NumberField<UnitOfMeasurements> = new NumberField('Height2', UnitOfMeasurements, 'Edm.Double');
  /**
   * Static representation of the [[height2Unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEIGHT_2_UNIT: NumberField<UnitOfMeasurements> = new NumberField('Height2Unit', UnitOfMeasurements, 'Edm.Int32');
  /**
   * Static representation of the [[volume]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VOLUME: NumberField<UnitOfMeasurements> = new NumberField('Volume', UnitOfMeasurements, 'Edm.Double');
  /**
   * Static representation of the [[volumeUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VOLUME_UNIT: NumberField<UnitOfMeasurements> = new NumberField('VolumeUnit', UnitOfMeasurements, 'Edm.Int32');
  /**
   * Static representation of the [[weight1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_1: NumberField<UnitOfMeasurements> = new NumberField('Weight1', UnitOfMeasurements, 'Edm.Double');
  /**
   * Static representation of the [[weight1Unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_1_UNIT: NumberField<UnitOfMeasurements> = new NumberField('Weight1Unit', UnitOfMeasurements, 'Edm.Int32');
  /**
   * Static representation of the [[weight2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_2: NumberField<UnitOfMeasurements> = new NumberField('Weight2', UnitOfMeasurements, 'Edm.Double');
  /**
   * Static representation of the [[weight2Unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_2_UNIT: NumberField<UnitOfMeasurements> = new NumberField('Weight2Unit', UnitOfMeasurements, 'Edm.Int32');
  /**
   * Static representation of the [[internationalSymbol]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNATIONAL_SYMBOL: StringField<UnitOfMeasurements> = new StringField('InternationalSymbol', UnitOfMeasurements, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[itemGroups]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_GROUPS: OneToManyLink<UnitOfMeasurements, ItemGroups> = new OneToManyLink('ItemGroups', UnitOfMeasurements, ItemGroups);
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: OneToManyLink<UnitOfMeasurements, Items> = new OneToManyLink('Items', UnitOfMeasurements, Items);
  /**
   * Static representation of the one-to-many navigation property [[productionOrders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCTION_ORDERS: OneToManyLink<UnitOfMeasurements, ProductionOrders> = new OneToManyLink('ProductionOrders', UnitOfMeasurements, ProductionOrders);
  /**
   * Static representation of the one-to-many navigation property [[unitOfMeasurementGroups]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_OF_MEASUREMENT_GROUPS: OneToManyLink<UnitOfMeasurements, UnitOfMeasurementGroups> = new OneToManyLink('UnitOfMeasurementGroups', UnitOfMeasurements, UnitOfMeasurementGroups);
  /**
   * Static representation of the one-to-many navigation property [[barCodes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BAR_CODES: OneToManyLink<UnitOfMeasurements, BarCodes> = new OneToManyLink('BarCodes', UnitOfMeasurements, BarCodes);
  /**
   * Static representation of the one-to-many navigation property [[binLocations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BIN_LOCATIONS: OneToManyLink<UnitOfMeasurements, BinLocations> = new OneToManyLink('BinLocations', UnitOfMeasurements, BinLocations);
  /**
   * All fields of the UnitOfMeasurements entity.
   */
  export const _allFields: Array<NumberField<UnitOfMeasurements> | StringField<UnitOfMeasurements> | OneToManyLink<UnitOfMeasurements, ItemGroups> | OneToManyLink<UnitOfMeasurements, Items> | OneToManyLink<UnitOfMeasurements, ProductionOrders> | OneToManyLink<UnitOfMeasurements, UnitOfMeasurementGroups> | OneToManyLink<UnitOfMeasurements, BarCodes> | OneToManyLink<UnitOfMeasurements, BinLocations>> = [
    UnitOfMeasurements.ABS_ENTRY,
    UnitOfMeasurements.CODE,
    UnitOfMeasurements.NAME,
    UnitOfMeasurements.LENGTH_1,
    UnitOfMeasurements.LENGTH_1_UNIT,
    UnitOfMeasurements.LENGTH_2,
    UnitOfMeasurements.LENGTH_2_UNIT,
    UnitOfMeasurements.WIDTH_1,
    UnitOfMeasurements.WIDTH_1_UNIT,
    UnitOfMeasurements.WIDTH_2,
    UnitOfMeasurements.WIDTH_2_UNIT,
    UnitOfMeasurements.HEIGHT_1,
    UnitOfMeasurements.HEIGHT_1_UNIT,
    UnitOfMeasurements.HEIGHT_2,
    UnitOfMeasurements.HEIGHT_2_UNIT,
    UnitOfMeasurements.VOLUME,
    UnitOfMeasurements.VOLUME_UNIT,
    UnitOfMeasurements.WEIGHT_1,
    UnitOfMeasurements.WEIGHT_1_UNIT,
    UnitOfMeasurements.WEIGHT_2,
    UnitOfMeasurements.WEIGHT_2_UNIT,
    UnitOfMeasurements.INTERNATIONAL_SYMBOL,
    UnitOfMeasurements.ITEM_GROUPS,
    UnitOfMeasurements.ITEMS,
    UnitOfMeasurements.PRODUCTION_ORDERS,
    UnitOfMeasurements.UNIT_OF_MEASUREMENT_GROUPS,
    UnitOfMeasurements.BAR_CODES,
    UnitOfMeasurements.BIN_LOCATIONS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<UnitOfMeasurements> = new AllFields('*', UnitOfMeasurements);
  /**
   * All key fields of the UnitOfMeasurements entity.
   */
  export const _keyFields: Array<Field<UnitOfMeasurements>> = [UnitOfMeasurements.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property UnitOfMeasurements.
   */
  export const _keys: { [keys: string]: Field<UnitOfMeasurements> } = UnitOfMeasurements._keyFields.reduce((acc: { [keys: string]: Field<UnitOfMeasurements> }, field: Field<UnitOfMeasurements>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
