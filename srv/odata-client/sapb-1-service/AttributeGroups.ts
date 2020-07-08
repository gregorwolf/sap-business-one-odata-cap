/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AttributeGroupsRequestBuilder } from './AttributeGroupsRequestBuilder';
import { AttributeGroupLine, AttributeGroupLineField } from './AttributeGroupLine';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "AttributeGroups" of service "SAPB1".
 */
export class AttributeGroups extends Entity implements AttributeGroupsType {
  /**
   * Technical entity name for AttributeGroups.
   */
  static _entityName = 'AttributeGroups';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for AttributeGroups.
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
   * Attribute Group Collection.
   * @nullable
   */
  attributeGroupCollection?: AttributeGroupLine[];
  /**
   * One-to-many navigation property to the [[AssetClasses]] entity.
   */
  assetClasses!: AssetClasses[];

  /**
   * Returns an entity builder to construct instances `AttributeGroups`.
   * @returns A builder that constructs instances of entity type `AttributeGroups`.
   */
  static builder(): EntityBuilderType<AttributeGroups, AttributeGroupsTypeForceMandatory> {
    return Entity.entityBuilder(AttributeGroups);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AttributeGroups` entity type.
   * @returns A `AttributeGroups` request builder.
   */
  static requestBuilder(): AttributeGroupsRequestBuilder {
    return new AttributeGroupsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AttributeGroups`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AttributeGroups`.
   */
  static customField(fieldName: string): CustomField<AttributeGroups> {
    return Entity.customFieldSelector(fieldName, AttributeGroups);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { AssetClasses, AssetClassesType } from './AssetClasses';

export interface AttributeGroupsType {
  code?: number;
  name?: string;
  attributeGroupCollection?: AttributeGroupLine[];
  assetClasses: AssetClassesType[];
}

export interface AttributeGroupsTypeForceMandatory {
  code: number;
  name: string;
  attributeGroupCollection: AttributeGroupLine[];
  assetClasses: AssetClassesType[];
}

export namespace AttributeGroups {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: NumberField<AttributeGroups> = new NumberField('Code', AttributeGroups, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<AttributeGroups> = new StringField('Name', AttributeGroups, 'Edm.String');
  /**
   * Static representation of the [[attributeGroupCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTRIBUTE_GROUP_COLLECTION: CollectionField<AttributeGroups> = new CollectionField('AttributeGroupCollection', AttributeGroups, new AttributeGroupLineField('', AttributeGroups));
  /**
   * Static representation of the one-to-many navigation property [[assetClasses]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_CLASSES: OneToManyLink<AttributeGroups, AssetClasses> = new OneToManyLink('AssetClasses', AttributeGroups, AssetClasses);
  /**
   * All fields of the AttributeGroups entity.
   */
  export const _allFields: Array<NumberField<AttributeGroups> | StringField<AttributeGroups> | CollectionField<AttributeGroups> | OneToManyLink<AttributeGroups, AssetClasses>> = [
    AttributeGroups.CODE,
    AttributeGroups.NAME,
    AttributeGroups.ATTRIBUTE_GROUP_COLLECTION,
    AttributeGroups.ASSET_CLASSES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AttributeGroups> = new AllFields('*', AttributeGroups);
  /**
   * All key fields of the AttributeGroups entity.
   */
  export const _keyFields: Array<Field<AttributeGroups>> = [AttributeGroups.CODE];
  /**
   * Mapping of all key field names to the respective static field property AttributeGroups.
   */
  export const _keys: { [keys: string]: Field<AttributeGroups> } = AttributeGroups._keyFields.reduce((acc: { [keys: string]: Field<AttributeGroups> }, field: Field<AttributeGroups>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
