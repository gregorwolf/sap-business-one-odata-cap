/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetClassesRequestBuilder } from './AssetClassesRequestBuilder';
import { AssetClassLine } from './AssetClassLine';
import { AssetTypeEnum } from './AssetTypeEnum';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "AssetClasses" of service "SAPB1".
 */
export class AssetClasses extends EntityV4 implements AssetClassesType {
  /**
   * Technical entity name for AssetClasses.
   */
  static _entityName = 'AssetClasses';
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
   * Asset Type.
   * @nullable
   */
  assetType?: AssetTypeEnum;
  /**
   * Value Limit From.
   * @nullable
   */
  valueLimitFrom?: number;
  /**
   * Value Limit To.
   * @nullable
   */
  valueLimitTo?: number;
  /**
   * Bplid.
   * @nullable
   */
  bplid?: number;
  /**
   * Attribute Group.
   * @nullable
   */
  attributeGroup?: number;
  /**
   * Asset Class Collection.
   * @nullable
   */
  assetClassCollection?: AssetClassLine[];
  /**
   * One-to-many navigation property to the [[Items]] entity.
   */
  items!: Items[];
  /**
   * One-to-one navigation property to the [[BusinessPlaces]] entity.
   */
  businessPlace!: BusinessPlaces;
  /**
   * One-to-one navigation property to the [[AttributeGroups]] entity.
   */
  attributeGroup2!: AttributeGroups;

  /**
   * Returns an entity builder to construct instances of `AssetClasses`.
   * @returns A builder that constructs instances of entity type `AssetClasses`.
   */
  static builder(): EntityBuilderType<AssetClasses, AssetClassesType> {
    return EntityV4.entityBuilder(AssetClasses);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AssetClasses` entity type.
   * @returns A `AssetClasses` request builder.
   */
  static requestBuilder(): AssetClassesRequestBuilder {
    return new AssetClassesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AssetClasses`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AssetClasses`.
   */
  static customField(fieldName: string): CustomFieldV4<AssetClasses> {
    return EntityV4.customFieldSelector(fieldName, AssetClasses);
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
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
import { AttributeGroups, AttributeGroupsType } from './AttributeGroups';

export interface AssetClassesType {
  code?: string | null;
  description?: string | null;
  assetType?: AssetTypeEnum | null;
  valueLimitFrom?: number | null;
  valueLimitTo?: number | null;
  bplid?: number | null;
  attributeGroup?: number | null;
  assetClassCollection?: AssetClassLine[] | null;
  items: ItemsType[];
  businessPlace: BusinessPlacesType;
  attributeGroup2: AttributeGroupsType;
}

export namespace AssetClasses {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<AssetClasses> = new StringField('Code', AssetClasses, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<AssetClasses> = new StringField('Description', AssetClasses, 'Edm.String');
  /**
   * Static representation of the [[assetType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_TYPE: EnumField<AssetClasses> = new EnumField('AssetType', AssetClasses);
  /**
   * Static representation of the [[valueLimitFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE_LIMIT_FROM: NumberField<AssetClasses> = new NumberField('ValueLimitFrom', AssetClasses, 'Edm.Double');
  /**
   * Static representation of the [[valueLimitTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE_LIMIT_TO: NumberField<AssetClasses> = new NumberField('ValueLimitTo', AssetClasses, 'Edm.Double');
  /**
   * Static representation of the [[bplid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPLID: NumberField<AssetClasses> = new NumberField('BPLID', AssetClasses, 'Edm.Int32');
  /**
   * Static representation of the [[attributeGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTRIBUTE_GROUP: NumberField<AssetClasses> = new NumberField('AttributeGroup', AssetClasses, 'Edm.Int32');
  /**
   * Static representation of the [[assetClassCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_CLASS_COLLECTION: CollectionField<AssetClasses, AssetClassLine> = new CollectionField('AssetClassCollection', AssetClasses, AssetClassLine);
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: OneToManyLink<AssetClasses, Items> = new OneToManyLink('Items', AssetClasses, Items);
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<AssetClasses, BusinessPlaces> = new OneToOneLink('BusinessPlace', AssetClasses, BusinessPlaces);
  /**
   * Static representation of the one-to-one navigation property [[attributeGroup2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTRIBUTE_GROUP_2: OneToOneLink<AssetClasses, AttributeGroups> = new OneToOneLink('AttributeGroup2', AssetClasses, AttributeGroups);
  /**
   * All fields of the AssetClasses entity.
   */
  export const _allFields: Array<StringField<AssetClasses> | EnumField<AssetClasses> | NumberField<AssetClasses> | CollectionField<AssetClasses, AssetClassLine> | OneToManyLink<AssetClasses, Items> | OneToOneLink<AssetClasses, BusinessPlaces> | OneToOneLink<AssetClasses, AttributeGroups>> = [
    AssetClasses.CODE,
    AssetClasses.DESCRIPTION,
    AssetClasses.ASSET_TYPE,
    AssetClasses.VALUE_LIMIT_FROM,
    AssetClasses.VALUE_LIMIT_TO,
    AssetClasses.BPLID,
    AssetClasses.ATTRIBUTE_GROUP,
    AssetClasses.ASSET_CLASS_COLLECTION,
    AssetClasses.ITEMS,
    AssetClasses.BUSINESS_PLACE,
    AssetClasses.ATTRIBUTE_GROUP_2
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AssetClasses> = new AllFields('*', AssetClasses);
  /**
   * All key fields of the AssetClasses entity.
   */
  export const _keyFields: Array<Field<AssetClasses>> = [AssetClasses.CODE];
  /**
   * Mapping of all key field names to the respective static field property AssetClasses.
   */
  export const _keys: { [keys: string]: Field<AssetClasses> } = AssetClasses._keyFields.reduce((acc: { [keys: string]: Field<AssetClasses> }, field: Field<AssetClasses>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
