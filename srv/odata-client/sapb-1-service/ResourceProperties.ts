/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ResourcePropertiesRequestBuilder } from './ResourcePropertiesRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ResourceProperties" of service "SAPB1".
 */
export class ResourceProperties extends EntityV4 implements ResourcePropertiesType {
  /**
   * Technical entity name for ResourceProperties.
   */
  static _entityName = 'ResourceProperties';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;

  /**
   * Returns an entity builder to construct instances of `ResourceProperties`.
   * @returns A builder that constructs instances of entity type `ResourceProperties`.
   */
  static builder(): EntityBuilderType<ResourceProperties, ResourcePropertiesType> {
    return EntityV4.entityBuilder(ResourceProperties);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ResourceProperties` entity type.
   * @returns A `ResourceProperties` request builder.
   */
  static requestBuilder(): ResourcePropertiesRequestBuilder {
    return new ResourcePropertiesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ResourceProperties`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ResourceProperties`.
   */
  static customField(fieldName: string): CustomFieldV4<ResourceProperties> {
    return EntityV4.customFieldSelector(fieldName, ResourceProperties);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface ResourcePropertiesType {
  code?: number | null;
  name?: string | null;
}

export namespace ResourceProperties {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: NumberField<ResourceProperties> = new NumberField('Code', ResourceProperties, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<ResourceProperties> = new StringField('Name', ResourceProperties, 'Edm.String');
  /**
   * All fields of the ResourceProperties entity.
   */
  export const _allFields: Array<NumberField<ResourceProperties> | StringField<ResourceProperties>> = [
    ResourceProperties.CODE,
    ResourceProperties.NAME
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ResourceProperties> = new AllFields('*', ResourceProperties);
  /**
   * All key fields of the ResourceProperties entity.
   */
  export const _keyFields: Array<Field<ResourceProperties>> = [ResourceProperties.CODE];
  /**
   * Mapping of all key field names to the respective static field property ResourceProperties.
   */
  export const _keys: { [keys: string]: Field<ResourceProperties> } = ResourceProperties._keyFields.reduce((acc: { [keys: string]: Field<ResourceProperties> }, field: Field<ResourceProperties>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
