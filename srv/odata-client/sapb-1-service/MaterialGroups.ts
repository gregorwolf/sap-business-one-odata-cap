/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaterialGroupsRequestBuilder } from './MaterialGroupsRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "MaterialGroups" of service "SAPB1".
 */
export class MaterialGroups extends EntityV4 implements MaterialGroupsType {
  /**
   * Technical entity name for MaterialGroups.
   */
  static _entityName = 'MaterialGroups';
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
   * Material Group Code.
   * @nullable
   */
  materialGroupCode?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * One-to-many navigation property to the [[Items]] entity.
   */
  items!: Items[];

  /**
   * Returns an entity builder to construct instances of `MaterialGroups`.
   * @returns A builder that constructs instances of entity type `MaterialGroups`.
   */
  static builder(): EntityBuilderType<MaterialGroups, MaterialGroupsType> {
    return EntityV4.entityBuilder(MaterialGroups);
  }

  /**
   * Returns a request builder to construct requests for operations on the `MaterialGroups` entity type.
   * @returns A `MaterialGroups` request builder.
   */
  static requestBuilder(): MaterialGroupsRequestBuilder {
    return new MaterialGroupsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `MaterialGroups`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `MaterialGroups`.
   */
  static customField(fieldName: string): CustomFieldV4<MaterialGroups> {
    return EntityV4.customFieldSelector(fieldName, MaterialGroups);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Items, ItemsType } from './Items';

export interface MaterialGroupsType {
  absEntry?: number | null;
  materialGroupCode?: string | null;
  description?: string | null;
  items: ItemsType[];
}

export namespace MaterialGroups {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<MaterialGroups> = new NumberField('AbsEntry', MaterialGroups, 'Edm.Int32');
  /**
   * Static representation of the [[materialGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATERIAL_GROUP_CODE: StringField<MaterialGroups> = new StringField('MaterialGroupCode', MaterialGroups, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<MaterialGroups> = new StringField('Description', MaterialGroups, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: OneToManyLink<MaterialGroups, Items> = new OneToManyLink('Items', MaterialGroups, Items);
  /**
   * All fields of the MaterialGroups entity.
   */
  export const _allFields: Array<NumberField<MaterialGroups> | StringField<MaterialGroups> | OneToManyLink<MaterialGroups, Items>> = [
    MaterialGroups.ABS_ENTRY,
    MaterialGroups.MATERIAL_GROUP_CODE,
    MaterialGroups.DESCRIPTION,
    MaterialGroups.ITEMS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<MaterialGroups> = new AllFields('*', MaterialGroups);
  /**
   * All key fields of the MaterialGroups entity.
   */
  export const _keyFields: Array<Field<MaterialGroups>> = [MaterialGroups.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property MaterialGroups.
   */
  export const _keys: { [keys: string]: Field<MaterialGroups> } = MaterialGroups._keyFields.reduce((acc: { [keys: string]: Field<MaterialGroups> }, field: Field<MaterialGroups>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
