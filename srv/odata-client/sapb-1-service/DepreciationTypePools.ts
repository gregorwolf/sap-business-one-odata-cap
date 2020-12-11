/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DepreciationTypePoolsRequestBuilder } from './DepreciationTypePoolsRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DepreciationTypePools" of service "SAPB1".
 */
export class DepreciationTypePools extends EntityV4 implements DepreciationTypePoolsType {
  /**
   * Technical entity name for DepreciationTypePools.
   */
  static _entityName = 'DepreciationTypePools';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * One-to-many navigation property to the [[DepreciationTypes]] entity.
   */
  depreciationTypes!: DepreciationTypes[];

  /**
   * Returns an entity builder to construct instances of `DepreciationTypePools`.
   * @returns A builder that constructs instances of entity type `DepreciationTypePools`.
   */
  static builder(): EntityBuilderType<DepreciationTypePools, DepreciationTypePoolsType> {
    return EntityV4.entityBuilder(DepreciationTypePools);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DepreciationTypePools` entity type.
   * @returns A `DepreciationTypePools` request builder.
   */
  static requestBuilder(): DepreciationTypePoolsRequestBuilder {
    return new DepreciationTypePoolsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DepreciationTypePools`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DepreciationTypePools`.
   */
  static customField(fieldName: string): CustomFieldV4<DepreciationTypePools> {
    return EntityV4.customFieldSelector(fieldName, DepreciationTypePools);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { DepreciationTypes, DepreciationTypesType } from './DepreciationTypes';

export interface DepreciationTypePoolsType {
  code?: string | null;
  description?: string | null;
  depreciationTypes: DepreciationTypesType[];
}

export namespace DepreciationTypePools {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<DepreciationTypePools> = new StringField('Code', DepreciationTypePools, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<DepreciationTypePools> = new StringField('Description', DepreciationTypePools, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[depreciationTypes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECIATION_TYPES: OneToManyLink<DepreciationTypePools, DepreciationTypes> = new OneToManyLink('DepreciationTypes', DepreciationTypePools, DepreciationTypes);
  /**
   * All fields of the DepreciationTypePools entity.
   */
  export const _allFields: Array<StringField<DepreciationTypePools> | OneToManyLink<DepreciationTypePools, DepreciationTypes>> = [
    DepreciationTypePools.CODE,
    DepreciationTypePools.DESCRIPTION,
    DepreciationTypePools.DEPRECIATION_TYPES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DepreciationTypePools> = new AllFields('*', DepreciationTypePools);
  /**
   * All key fields of the DepreciationTypePools entity.
   */
  export const _keyFields: Array<Field<DepreciationTypePools>> = [DepreciationTypePools.CODE];
  /**
   * Mapping of all key field names to the respective static field property DepreciationTypePools.
   */
  export const _keys: { [keys: string]: Field<DepreciationTypePools> } = DepreciationTypePools._keyFields.reduce((acc: { [keys: string]: Field<DepreciationTypePools> }, field: Field<DepreciationTypePools>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
