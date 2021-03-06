/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPartnerPropertiesRequestBuilder } from './BusinessPartnerPropertiesRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "BusinessPartnerProperties" of service "SAPB1".
 */
export class BusinessPartnerProperties extends EntityV4 implements BusinessPartnerPropertiesType {
  /**
   * Technical entity name for BusinessPartnerProperties.
   */
  static _entityName = 'BusinessPartnerProperties';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Property Code.
   * @nullable
   */
  propertyCode?: number;
  /**
   * Property Name.
   * @nullable
   */
  propertyName?: string;

  /**
   * Returns an entity builder to construct instances of `BusinessPartnerProperties`.
   * @returns A builder that constructs instances of entity type `BusinessPartnerProperties`.
   */
  static builder(): EntityBuilderType<BusinessPartnerProperties, BusinessPartnerPropertiesType> {
    return EntityV4.entityBuilder(BusinessPartnerProperties);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BusinessPartnerProperties` entity type.
   * @returns A `BusinessPartnerProperties` request builder.
   */
  static requestBuilder(): BusinessPartnerPropertiesRequestBuilder {
    return new BusinessPartnerPropertiesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerProperties`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BusinessPartnerProperties`.
   */
  static customField(fieldName: string): CustomFieldV4<BusinessPartnerProperties> {
    return EntityV4.customFieldSelector(fieldName, BusinessPartnerProperties);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface BusinessPartnerPropertiesType {
  propertyCode?: number | null;
  propertyName?: string | null;
}

export namespace BusinessPartnerProperties {
  /**
   * Static representation of the [[propertyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTY_CODE: NumberField<BusinessPartnerProperties> = new NumberField('PropertyCode', BusinessPartnerProperties, 'Edm.Int32');
  /**
   * Static representation of the [[propertyName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTY_NAME: StringField<BusinessPartnerProperties> = new StringField('PropertyName', BusinessPartnerProperties, 'Edm.String');
  /**
   * All fields of the BusinessPartnerProperties entity.
   */
  export const _allFields: Array<NumberField<BusinessPartnerProperties> | StringField<BusinessPartnerProperties>> = [
    BusinessPartnerProperties.PROPERTY_CODE,
    BusinessPartnerProperties.PROPERTY_NAME
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BusinessPartnerProperties> = new AllFields('*', BusinessPartnerProperties);
  /**
   * All key fields of the BusinessPartnerProperties entity.
   */
  export const _keyFields: Array<Field<BusinessPartnerProperties>> = [BusinessPartnerProperties.PROPERTY_CODE];
  /**
   * Mapping of all key field names to the respective static field property BusinessPartnerProperties.
   */
  export const _keys: { [keys: string]: Field<BusinessPartnerProperties> } = BusinessPartnerProperties._keyFields.reduce((acc: { [keys: string]: Field<BusinessPartnerProperties> }, field: Field<BusinessPartnerProperties>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
