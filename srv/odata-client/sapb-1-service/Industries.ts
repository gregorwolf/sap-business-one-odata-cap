/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IndustriesRequestBuilder } from './IndustriesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "Industries" of service "SAPB1".
 */
export class Industries extends Entity implements IndustriesType {
  /**
   * Technical entity name for Industries.
   */
  static _entityName = 'Industries';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Industries.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Industry Description.
   * @nullable
   */
  industryDescription?: string;
  /**
   * Industry Name.
   * @nullable
   */
  industryName?: string;
  /**
   * Industry Code.
   * @nullable
   */
  industryCode?: number;
  /**
   * One-to-many navigation property to the [[SalesOpportunities]] entity.
   */
  salesOpportunities!: SalesOpportunities[];
  /**
   * One-to-many navigation property to the [[BusinessPartners]] entity.
   */
  businessPartners!: BusinessPartners[];
  /**
   * One-to-many navigation property to the [[ProjectManagements]] entity.
   */
  projectManagements!: ProjectManagements[];

  /**
   * Returns an entity builder to construct instances `Industries`.
   * @returns A builder that constructs instances of entity type `Industries`.
   */
  static builder(): EntityBuilderType<Industries, IndustriesTypeForceMandatory> {
    return Entity.entityBuilder(Industries);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Industries` entity type.
   * @returns A `Industries` request builder.
   */
  static requestBuilder(): IndustriesRequestBuilder {
    return new IndustriesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Industries`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Industries`.
   */
  static customField(fieldName: string): CustomField<Industries> {
    return Entity.customFieldSelector(fieldName, Industries);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { SalesOpportunities, SalesOpportunitiesType } from './SalesOpportunities';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { ProjectManagements, ProjectManagementsType } from './ProjectManagements';

export interface IndustriesType {
  industryDescription?: string;
  industryName?: string;
  industryCode?: number;
  salesOpportunities: SalesOpportunitiesType[];
  businessPartners: BusinessPartnersType[];
  projectManagements: ProjectManagementsType[];
}

export interface IndustriesTypeForceMandatory {
  industryDescription: string;
  industryName: string;
  industryCode: number;
  salesOpportunities: SalesOpportunitiesType[];
  businessPartners: BusinessPartnersType[];
  projectManagements: ProjectManagementsType[];
}

export namespace Industries {
  /**
   * Static representation of the [[industryDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_DESCRIPTION: StringField<Industries> = new StringField('IndustryDescription', Industries, 'Edm.String');
  /**
   * Static representation of the [[industryName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_NAME: StringField<Industries> = new StringField('IndustryName', Industries, 'Edm.String');
  /**
   * Static representation of the [[industryCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_CODE: NumberField<Industries> = new NumberField('IndustryCode', Industries, 'Edm.Int32');
  /**
   * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_OPPORTUNITIES: OneToManyLink<Industries, SalesOpportunities> = new OneToManyLink('SalesOpportunities', Industries, SalesOpportunities);
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<Industries, BusinessPartners> = new OneToManyLink('BusinessPartners', Industries, BusinessPartners);
  /**
   * Static representation of the one-to-many navigation property [[projectManagements]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_MANAGEMENTS: OneToManyLink<Industries, ProjectManagements> = new OneToManyLink('ProjectManagements', Industries, ProjectManagements);
  /**
   * All fields of the Industries entity.
   */
  export const _allFields: Array<StringField<Industries> | NumberField<Industries> | OneToManyLink<Industries, SalesOpportunities> | OneToManyLink<Industries, BusinessPartners> | OneToManyLink<Industries, ProjectManagements>> = [
    Industries.INDUSTRY_DESCRIPTION,
    Industries.INDUSTRY_NAME,
    Industries.INDUSTRY_CODE,
    Industries.SALES_OPPORTUNITIES,
    Industries.BUSINESS_PARTNERS,
    Industries.PROJECT_MANAGEMENTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Industries> = new AllFields('*', Industries);
  /**
   * All key fields of the Industries entity.
   */
  export const _keyFields: Array<Field<Industries>> = [Industries.INDUSTRY_CODE];
  /**
   * Mapping of all key field names to the respective static field property Industries.
   */
  export const _keys: { [keys: string]: Field<Industries> } = Industries._keyFields.reduce((acc: { [keys: string]: Field<Industries> }, field: Field<Industries>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
