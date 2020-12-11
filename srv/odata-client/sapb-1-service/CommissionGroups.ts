/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CommissionGroupsRequestBuilder } from './CommissionGroupsRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CommissionGroups" of service "SAPB1".
 */
export class CommissionGroups extends EntityV4 implements CommissionGroupsType {
  /**
   * Technical entity name for CommissionGroups.
   */
  static _entityName = 'CommissionGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Commission Group Code.
   * @nullable
   */
  commissionGroupCode?: number;
  /**
   * Commission Group Name.
   * @nullable
   */
  commissionGroupName?: string;
  /**
   * Commission Percentage.
   * @nullable
   */
  commissionPercentage?: number;
  /**
   * One-to-many navigation property to the [[SalesPersons]] entity.
   */
  salesPersons!: SalesPersons[];
  /**
   * One-to-many navigation property to the [[Items]] entity.
   */
  items!: Items[];
  /**
   * One-to-many navigation property to the [[BusinessPartners]] entity.
   */
  businessPartners!: BusinessPartners[];

  /**
   * Returns an entity builder to construct instances of `CommissionGroups`.
   * @returns A builder that constructs instances of entity type `CommissionGroups`.
   */
  static builder(): EntityBuilderType<CommissionGroups, CommissionGroupsType> {
    return EntityV4.entityBuilder(CommissionGroups);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CommissionGroups` entity type.
   * @returns A `CommissionGroups` request builder.
   */
  static requestBuilder(): CommissionGroupsRequestBuilder {
    return new CommissionGroupsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CommissionGroups`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CommissionGroups`.
   */
  static customField(fieldName: string): CustomFieldV4<CommissionGroups> {
    return EntityV4.customFieldSelector(fieldName, CommissionGroups);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { SalesPersons, SalesPersonsType } from './SalesPersons';
import { Items, ItemsType } from './Items';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';

export interface CommissionGroupsType {
  commissionGroupCode?: number | null;
  commissionGroupName?: string | null;
  commissionPercentage?: number | null;
  salesPersons: SalesPersonsType[];
  items: ItemsType[];
  businessPartners: BusinessPartnersType[];
}

export namespace CommissionGroups {
  /**
   * Static representation of the [[commissionGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_GROUP_CODE: NumberField<CommissionGroups> = new NumberField('CommissionGroupCode', CommissionGroups, 'Edm.Int32');
  /**
   * Static representation of the [[commissionGroupName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_GROUP_NAME: StringField<CommissionGroups> = new StringField('CommissionGroupName', CommissionGroups, 'Edm.String');
  /**
   * Static representation of the [[commissionPercentage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_PERCENTAGE: NumberField<CommissionGroups> = new NumberField('CommissionPercentage', CommissionGroups, 'Edm.Double');
  /**
   * Static representation of the one-to-many navigation property [[salesPersons]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSONS: OneToManyLink<CommissionGroups, SalesPersons> = new OneToManyLink('SalesPersons', CommissionGroups, SalesPersons);
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: OneToManyLink<CommissionGroups, Items> = new OneToManyLink('Items', CommissionGroups, Items);
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<CommissionGroups, BusinessPartners> = new OneToManyLink('BusinessPartners', CommissionGroups, BusinessPartners);
  /**
   * All fields of the CommissionGroups entity.
   */
  export const _allFields: Array<NumberField<CommissionGroups> | StringField<CommissionGroups> | OneToManyLink<CommissionGroups, SalesPersons> | OneToManyLink<CommissionGroups, Items> | OneToManyLink<CommissionGroups, BusinessPartners>> = [
    CommissionGroups.COMMISSION_GROUP_CODE,
    CommissionGroups.COMMISSION_GROUP_NAME,
    CommissionGroups.COMMISSION_PERCENTAGE,
    CommissionGroups.SALES_PERSONS,
    CommissionGroups.ITEMS,
    CommissionGroups.BUSINESS_PARTNERS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CommissionGroups> = new AllFields('*', CommissionGroups);
  /**
   * All key fields of the CommissionGroups entity.
   */
  export const _keyFields: Array<Field<CommissionGroups>> = [CommissionGroups.COMMISSION_GROUP_CODE];
  /**
   * Mapping of all key field names to the respective static field property CommissionGroups.
   */
  export const _keys: { [keys: string]: Field<CommissionGroups> } = CommissionGroups._keyFields.reduce((acc: { [keys: string]: Field<CommissionGroups> }, field: Field<CommissionGroups>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
