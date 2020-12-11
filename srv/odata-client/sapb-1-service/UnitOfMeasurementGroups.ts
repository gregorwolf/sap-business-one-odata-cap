/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UnitOfMeasurementGroupsRequestBuilder } from './UnitOfMeasurementGroupsRequestBuilder';
import { UoMGroupDefinition } from './UoMGroupDefinition';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "UnitOfMeasurementGroups" of service "SAPB1".
 */
export class UnitOfMeasurementGroups extends EntityV4 implements UnitOfMeasurementGroupsType {
  /**
   * Technical entity name for UnitOfMeasurementGroups.
   */
  static _entityName = 'UnitOfMeasurementGroups';
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
   * Base Uo M.
   * @nullable
   */
  baseUoM?: number;
  /**
   * Uo M Group Definition Collection.
   * @nullable
   */
  uoMGroupDefinitionCollection?: UoMGroupDefinition[];
  /**
   * One-to-many navigation property to the [[ItemGroups]] entity.
   */
  itemGroups!: ItemGroups[];
  /**
   * One-to-many navigation property to the [[Items]] entity.
   */
  items!: Items[];
  /**
   * One-to-one navigation property to the [[UnitOfMeasurements]] entity.
   */
  unitOfMeasurement!: UnitOfMeasurements;
  /**
   * One-to-many navigation property to the [[BinLocations]] entity.
   */
  binLocations!: BinLocations[];

  /**
   * Returns an entity builder to construct instances of `UnitOfMeasurementGroups`.
   * @returns A builder that constructs instances of entity type `UnitOfMeasurementGroups`.
   */
  static builder(): EntityBuilderType<UnitOfMeasurementGroups, UnitOfMeasurementGroupsType> {
    return EntityV4.entityBuilder(UnitOfMeasurementGroups);
  }

  /**
   * Returns a request builder to construct requests for operations on the `UnitOfMeasurementGroups` entity type.
   * @returns A `UnitOfMeasurementGroups` request builder.
   */
  static requestBuilder(): UnitOfMeasurementGroupsRequestBuilder {
    return new UnitOfMeasurementGroupsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `UnitOfMeasurementGroups`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `UnitOfMeasurementGroups`.
   */
  static customField(fieldName: string): CustomFieldV4<UnitOfMeasurementGroups> {
    return EntityV4.customFieldSelector(fieldName, UnitOfMeasurementGroups);
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
import { UnitOfMeasurements, UnitOfMeasurementsType } from './UnitOfMeasurements';
import { BinLocations, BinLocationsType } from './BinLocations';

export interface UnitOfMeasurementGroupsType {
  absEntry?: number | null;
  code?: string | null;
  name?: string | null;
  baseUoM?: number | null;
  uoMGroupDefinitionCollection?: UoMGroupDefinition[] | null;
  itemGroups: ItemGroupsType[];
  items: ItemsType[];
  unitOfMeasurement: UnitOfMeasurementsType;
  binLocations: BinLocationsType[];
}

export namespace UnitOfMeasurementGroups {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<UnitOfMeasurementGroups> = new NumberField('AbsEntry', UnitOfMeasurementGroups, 'Edm.Int32');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<UnitOfMeasurementGroups> = new StringField('Code', UnitOfMeasurementGroups, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<UnitOfMeasurementGroups> = new StringField('Name', UnitOfMeasurementGroups, 'Edm.String');
  /**
   * Static representation of the [[baseUoM]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_UO_M: NumberField<UnitOfMeasurementGroups> = new NumberField('BaseUoM', UnitOfMeasurementGroups, 'Edm.Int32');
  /**
   * Static representation of the [[uoMGroupDefinitionCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UO_M_GROUP_DEFINITION_COLLECTION: CollectionField<UnitOfMeasurementGroups, UoMGroupDefinition> = new CollectionField('UoMGroupDefinitionCollection', UnitOfMeasurementGroups, UoMGroupDefinition);
  /**
   * Static representation of the one-to-many navigation property [[itemGroups]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_GROUPS: OneToManyLink<UnitOfMeasurementGroups, ItemGroups> = new OneToManyLink('ItemGroups', UnitOfMeasurementGroups, ItemGroups);
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: OneToManyLink<UnitOfMeasurementGroups, Items> = new OneToManyLink('Items', UnitOfMeasurementGroups, Items);
  /**
   * Static representation of the one-to-one navigation property [[unitOfMeasurement]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_OF_MEASUREMENT: OneToOneLink<UnitOfMeasurementGroups, UnitOfMeasurements> = new OneToOneLink('UnitOfMeasurement', UnitOfMeasurementGroups, UnitOfMeasurements);
  /**
   * Static representation of the one-to-many navigation property [[binLocations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BIN_LOCATIONS: OneToManyLink<UnitOfMeasurementGroups, BinLocations> = new OneToManyLink('BinLocations', UnitOfMeasurementGroups, BinLocations);
  /**
   * All fields of the UnitOfMeasurementGroups entity.
   */
  export const _allFields: Array<NumberField<UnitOfMeasurementGroups> | StringField<UnitOfMeasurementGroups> | CollectionField<UnitOfMeasurementGroups, UoMGroupDefinition> | OneToManyLink<UnitOfMeasurementGroups, ItemGroups> | OneToManyLink<UnitOfMeasurementGroups, Items> | OneToOneLink<UnitOfMeasurementGroups, UnitOfMeasurements> | OneToManyLink<UnitOfMeasurementGroups, BinLocations>> = [
    UnitOfMeasurementGroups.ABS_ENTRY,
    UnitOfMeasurementGroups.CODE,
    UnitOfMeasurementGroups.NAME,
    UnitOfMeasurementGroups.BASE_UO_M,
    UnitOfMeasurementGroups.UO_M_GROUP_DEFINITION_COLLECTION,
    UnitOfMeasurementGroups.ITEM_GROUPS,
    UnitOfMeasurementGroups.ITEMS,
    UnitOfMeasurementGroups.UNIT_OF_MEASUREMENT,
    UnitOfMeasurementGroups.BIN_LOCATIONS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<UnitOfMeasurementGroups> = new AllFields('*', UnitOfMeasurementGroups);
  /**
   * All key fields of the UnitOfMeasurementGroups entity.
   */
  export const _keyFields: Array<Field<UnitOfMeasurementGroups>> = [UnitOfMeasurementGroups.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property UnitOfMeasurementGroups.
   */
  export const _keys: { [keys: string]: Field<UnitOfMeasurementGroups> } = UnitOfMeasurementGroups._keyFields.reduce((acc: { [keys: string]: Field<UnitOfMeasurementGroups> }, field: Field<UnitOfMeasurementGroups>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
