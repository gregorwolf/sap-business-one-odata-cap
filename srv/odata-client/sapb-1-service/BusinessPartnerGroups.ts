/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPartnerGroupsRequestBuilder } from './BusinessPartnerGroupsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "BusinessPartnerGroups" of service "SAPB1".
 */
export class BusinessPartnerGroups extends Entity implements BusinessPartnerGroupsType {
  /**
   * Technical entity name for BusinessPartnerGroups.
   */
  static _entityName = 'BusinessPartnerGroups';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for BusinessPartnerGroups.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * One-to-many navigation property to the [[BusinessPartners]] entity.
   */
  businessPartners!: BusinessPartners[];
  /**
   * One-to-many navigation property to the [[GlAccountAdvancedRules]] entity.
   */
  glAccountAdvancedRules!: GlAccountAdvancedRules[];

  /**
   * Returns an entity builder to construct instances `BusinessPartnerGroups`.
   * @returns A builder that constructs instances of entity type `BusinessPartnerGroups`.
   */
  static builder(): EntityBuilderType<BusinessPartnerGroups, BusinessPartnerGroupsTypeForceMandatory> {
    return Entity.entityBuilder(BusinessPartnerGroups);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BusinessPartnerGroups` entity type.
   * @returns A `BusinessPartnerGroups` request builder.
   */
  static requestBuilder(): BusinessPartnerGroupsRequestBuilder {
    return new BusinessPartnerGroupsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerGroups`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BusinessPartnerGroups`.
   */
  static customField(fieldName: string): CustomField<BusinessPartnerGroups> {
    return Entity.customFieldSelector(fieldName, BusinessPartnerGroups);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { GlAccountAdvancedRules, GlAccountAdvancedRulesType } from './GlAccountAdvancedRules';

export interface BusinessPartnerGroupsType {
  code?: number;
  name?: string;
  businessPartners: BusinessPartnersType[];
  glAccountAdvancedRules: GlAccountAdvancedRulesType[];
}

export interface BusinessPartnerGroupsTypeForceMandatory {
  code: number;
  name: string;
  businessPartners: BusinessPartnersType[];
  glAccountAdvancedRules: GlAccountAdvancedRulesType[];
}

export namespace BusinessPartnerGroups {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: NumberField<BusinessPartnerGroups> = new NumberField('Code', BusinessPartnerGroups, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<BusinessPartnerGroups> = new StringField('Name', BusinessPartnerGroups, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<BusinessPartnerGroups, BusinessPartners> = new OneToManyLink('BusinessPartners', BusinessPartnerGroups, BusinessPartners);
  /**
   * Static representation of the one-to-many navigation property [[glAccountAdvancedRules]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<BusinessPartnerGroups, GlAccountAdvancedRules> = new OneToManyLink('GLAccountAdvancedRules', BusinessPartnerGroups, GlAccountAdvancedRules);
  /**
   * All fields of the BusinessPartnerGroups entity.
   */
  export const _allFields: Array<NumberField<BusinessPartnerGroups> | StringField<BusinessPartnerGroups> | OneToManyLink<BusinessPartnerGroups, BusinessPartners> | OneToManyLink<BusinessPartnerGroups, GlAccountAdvancedRules>> = [
    BusinessPartnerGroups.CODE,
    BusinessPartnerGroups.NAME,
    BusinessPartnerGroups.BUSINESS_PARTNERS,
    BusinessPartnerGroups.GL_ACCOUNT_ADVANCED_RULES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BusinessPartnerGroups> = new AllFields('*', BusinessPartnerGroups);
  /**
   * All key fields of the BusinessPartnerGroups entity.
   */
  export const _keyFields: Array<Field<BusinessPartnerGroups>> = [BusinessPartnerGroups.CODE];
  /**
   * Mapping of all key field names to the respective static field property BusinessPartnerGroups.
   */
  export const _keys: { [keys: string]: Field<BusinessPartnerGroups> } = BusinessPartnerGroups._keyFields.reduce((acc: { [keys: string]: Field<BusinessPartnerGroups> }, field: Field<BusinessPartnerGroups>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
