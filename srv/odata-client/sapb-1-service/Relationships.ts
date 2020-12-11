/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RelationshipsRequestBuilder } from './RelationshipsRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Relationships" of service "SAPB1".
 */
export class Relationships extends EntityV4 implements RelationshipsType {
  /**
   * Technical entity name for Relationships.
   */
  static _entityName = 'Relationships';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Relationship Description.
   * @nullable
   */
  relationshipDescription?: string;
  /**
   * Relationship Code.
   * @nullable
   */
  relationshipCode?: number;
  /**
   * One-to-many navigation property to the [[PartnersSetups]] entity.
   */
  partnersSetups!: PartnersSetups[];

  /**
   * Returns an entity builder to construct instances of `Relationships`.
   * @returns A builder that constructs instances of entity type `Relationships`.
   */
  static builder(): EntityBuilderType<Relationships, RelationshipsType> {
    return EntityV4.entityBuilder(Relationships);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Relationships` entity type.
   * @returns A `Relationships` request builder.
   */
  static requestBuilder(): RelationshipsRequestBuilder {
    return new RelationshipsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Relationships`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Relationships`.
   */
  static customField(fieldName: string): CustomFieldV4<Relationships> {
    return EntityV4.customFieldSelector(fieldName, Relationships);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { PartnersSetups, PartnersSetupsType } from './PartnersSetups';

export interface RelationshipsType {
  relationshipDescription?: string | null;
  relationshipCode?: number | null;
  partnersSetups: PartnersSetupsType[];
}

export namespace Relationships {
  /**
   * Static representation of the [[relationshipDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATIONSHIP_DESCRIPTION: StringField<Relationships> = new StringField('RelationshipDescription', Relationships, 'Edm.String');
  /**
   * Static representation of the [[relationshipCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATIONSHIP_CODE: NumberField<Relationships> = new NumberField('RelationshipCode', Relationships, 'Edm.Int32');
  /**
   * Static representation of the one-to-many navigation property [[partnersSetups]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNERS_SETUPS: OneToManyLink<Relationships, PartnersSetups> = new OneToManyLink('PartnersSetups', Relationships, PartnersSetups);
  /**
   * All fields of the Relationships entity.
   */
  export const _allFields: Array<StringField<Relationships> | NumberField<Relationships> | OneToManyLink<Relationships, PartnersSetups>> = [
    Relationships.RELATIONSHIP_DESCRIPTION,
    Relationships.RELATIONSHIP_CODE,
    Relationships.PARTNERS_SETUPS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Relationships> = new AllFields('*', Relationships);
  /**
   * All key fields of the Relationships entity.
   */
  export const _keyFields: Array<Field<Relationships>> = [Relationships.RELATIONSHIP_CODE];
  /**
   * Mapping of all key field names to the respective static field property Relationships.
   */
  export const _keys: { [keys: string]: Field<Relationships> } = Relationships._keyFields.reduce((acc: { [keys: string]: Field<Relationships> }, field: Field<Relationships>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
