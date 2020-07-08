/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceGroupsRequestBuilder } from './ServiceGroupsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "ServiceGroups" of service "SAPB1".
 */
export class ServiceGroups extends Entity implements ServiceGroupsType {
  /**
   * Technical entity name for ServiceGroups.
   */
  static _entityName = 'ServiceGroups';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ServiceGroups.
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
   * Service Group Code.
   * @nullable
   */
  serviceGroupCode?: string;
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
   * Returns an entity builder to construct instances `ServiceGroups`.
   * @returns A builder that constructs instances of entity type `ServiceGroups`.
   */
  static builder(): EntityBuilderType<ServiceGroups, ServiceGroupsTypeForceMandatory> {
    return Entity.entityBuilder(ServiceGroups);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ServiceGroups` entity type.
   * @returns A `ServiceGroups` request builder.
   */
  static requestBuilder(): ServiceGroupsRequestBuilder {
    return new ServiceGroupsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceGroups`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ServiceGroups`.
   */
  static customField(fieldName: string): CustomField<ServiceGroups> {
    return Entity.customFieldSelector(fieldName, ServiceGroups);
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

export interface ServiceGroupsType {
  absEntry?: number;
  serviceGroupCode?: string;
  description?: string;
  items: ItemsType[];
}

export interface ServiceGroupsTypeForceMandatory {
  absEntry: number;
  serviceGroupCode: string;
  description: string;
  items: ItemsType[];
}

export namespace ServiceGroups {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<ServiceGroups> = new NumberField('AbsEntry', ServiceGroups, 'Edm.Int32');
  /**
   * Static representation of the [[serviceGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_GROUP_CODE: StringField<ServiceGroups> = new StringField('ServiceGroupCode', ServiceGroups, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<ServiceGroups> = new StringField('Description', ServiceGroups, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: OneToManyLink<ServiceGroups, Items> = new OneToManyLink('Items', ServiceGroups, Items);
  /**
   * All fields of the ServiceGroups entity.
   */
  export const _allFields: Array<NumberField<ServiceGroups> | StringField<ServiceGroups> | OneToManyLink<ServiceGroups, Items>> = [
    ServiceGroups.ABS_ENTRY,
    ServiceGroups.SERVICE_GROUP_CODE,
    ServiceGroups.DESCRIPTION,
    ServiceGroups.ITEMS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ServiceGroups> = new AllFields('*', ServiceGroups);
  /**
   * All key fields of the ServiceGroups entity.
   */
  export const _keyFields: Array<Field<ServiceGroups>> = [ServiceGroups.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property ServiceGroups.
   */
  export const _keys: { [keys: string]: Field<ServiceGroups> } = ServiceGroups._keyFields.reduce((acc: { [keys: string]: Field<ServiceGroups> }, field: Field<ServiceGroups>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
