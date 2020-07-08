/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PartnersSetupsRequestBuilder } from './PartnersSetupsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "PartnersSetups" of service "SAPB1".
 */
export class PartnersSetups extends Entity implements PartnersSetupsType {
  /**
   * Technical entity name for PartnersSetups.
   */
  static _entityName = 'PartnersSetups';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PartnersSetups.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Default Relationship.
   * @nullable
   */
  defaultRelationship?: number;
  /**
   * Related Bp.
   * @nullable
   */
  relatedBp?: string;
  /**
   * Details.
   * @nullable
   */
  details?: string;
  /**
   * One-to-one navigation property to the [[Relationships]] entity.
   */
  relationship!: Relationships;
  /**
   * One-to-one navigation property to the [[BusinessPartners]] entity.
   */
  businessPartner!: BusinessPartners;

  /**
   * Returns an entity builder to construct instances `PartnersSetups`.
   * @returns A builder that constructs instances of entity type `PartnersSetups`.
   */
  static builder(): EntityBuilderType<PartnersSetups, PartnersSetupsTypeForceMandatory> {
    return Entity.entityBuilder(PartnersSetups);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PartnersSetups` entity type.
   * @returns A `PartnersSetups` request builder.
   */
  static requestBuilder(): PartnersSetupsRequestBuilder {
    return new PartnersSetupsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PartnersSetups`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PartnersSetups`.
   */
  static customField(fieldName: string): CustomField<PartnersSetups> {
    return Entity.customFieldSelector(fieldName, PartnersSetups);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Relationships, RelationshipsType } from './Relationships';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';

export interface PartnersSetupsType {
  name?: string;
  defaultRelationship?: number;
  relatedBp?: string;
  details?: string;
  relationship: RelationshipsType;
  businessPartner: BusinessPartnersType;
}

export interface PartnersSetupsTypeForceMandatory {
  name: string;
  defaultRelationship: number;
  relatedBp: string;
  details: string;
  relationship: RelationshipsType;
  businessPartner: BusinessPartnersType;
}

export namespace PartnersSetups {
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<PartnersSetups> = new StringField('Name', PartnersSetups, 'Edm.String');
  /**
   * Static representation of the [[defaultRelationship]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_RELATIONSHIP: NumberField<PartnersSetups> = new NumberField('DefaultRelationship', PartnersSetups, 'Edm.Int32');
  /**
   * Static representation of the [[relatedBp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATED_BP: StringField<PartnersSetups> = new StringField('RelatedBP', PartnersSetups, 'Edm.String');
  /**
   * Static representation of the [[details]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DETAILS: StringField<PartnersSetups> = new StringField('Details', PartnersSetups, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[relationship]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATIONSHIP: OneToOneLink<PartnersSetups, Relationships> = new OneToOneLink('Relationship', PartnersSetups, Relationships);
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<PartnersSetups, BusinessPartners> = new OneToOneLink('BusinessPartner', PartnersSetups, BusinessPartners);
  /**
   * All fields of the PartnersSetups entity.
   */
  export const _allFields: Array<StringField<PartnersSetups> | NumberField<PartnersSetups> | OneToOneLink<PartnersSetups, Relationships> | OneToOneLink<PartnersSetups, BusinessPartners>> = [
    PartnersSetups.NAME,
    PartnersSetups.DEFAULT_RELATIONSHIP,
    PartnersSetups.RELATED_BP,
    PartnersSetups.DETAILS,
    PartnersSetups.RELATIONSHIP,
    PartnersSetups.BUSINESS_PARTNER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PartnersSetups> = new AllFields('*', PartnersSetups);
  /**
   * All key fields of the PartnersSetups entity.
   */
  export const _keyFields: Array<Field<PartnersSetups>> = [PartnersSetups.NAME];
  /**
   * Mapping of all key field names to the respective static field property PartnersSetups.
   */
  export const _keys: { [keys: string]: Field<PartnersSetups> } = PartnersSetups._keyFields.reduce((acc: { [keys: string]: Field<PartnersSetups> }, field: Field<PartnersSetups>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
