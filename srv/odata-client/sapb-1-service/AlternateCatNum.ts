/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AlternateCatNumRequestBuilder } from './AlternateCatNumRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "AlternateCatNum" of service "SAPB1".
 */
export class AlternateCatNum extends EntityV4 implements AlternateCatNumType {
  /**
   * Technical entity name for AlternateCatNum.
   */
  static _entityName = 'AlternateCatNum';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: string;
  /**
   * Substitute.
   * @nullable
   */
  substitute?: string;
  /**
   * Display Bp Catalog Number.
   * @nullable
   */
  displayBpCatalogNumber?: BoYesNoEnum;
  /**
   * One-to-one navigation property to the [[Items]] entity.
   */
  item!: Items;
  /**
   * One-to-one navigation property to the [[BusinessPartners]] entity.
   */
  businessPartner!: BusinessPartners;

  /**
   * Returns an entity builder to construct instances of `AlternateCatNum`.
   * @returns A builder that constructs instances of entity type `AlternateCatNum`.
   */
  static builder(): EntityBuilderType<AlternateCatNum, AlternateCatNumType> {
    return EntityV4.entityBuilder(AlternateCatNum);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AlternateCatNum` entity type.
   * @returns A `AlternateCatNum` request builder.
   */
  static requestBuilder(): AlternateCatNumRequestBuilder {
    return new AlternateCatNumRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AlternateCatNum`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AlternateCatNum`.
   */
  static customField(fieldName: string): CustomFieldV4<AlternateCatNum> {
    return EntityV4.customFieldSelector(fieldName, AlternateCatNum);
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
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';

export interface AlternateCatNumType {
  itemCode?: string | null;
  cardCode?: string | null;
  substitute?: string | null;
  displayBpCatalogNumber?: BoYesNoEnum | null;
  item: ItemsType;
  businessPartner: BusinessPartnersType;
}

export namespace AlternateCatNum {
  /**
   * Static representation of the [[itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_CODE: StringField<AlternateCatNum> = new StringField('ItemCode', AlternateCatNum, 'Edm.String');
  /**
   * Static representation of the [[cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_CODE: StringField<AlternateCatNum> = new StringField('CardCode', AlternateCatNum, 'Edm.String');
  /**
   * Static representation of the [[substitute]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBSTITUTE: StringField<AlternateCatNum> = new StringField('Substitute', AlternateCatNum, 'Edm.String');
  /**
   * Static representation of the [[displayBpCatalogNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISPLAY_BP_CATALOG_NUMBER: EnumField<AlternateCatNum> = new EnumField('DisplayBPCatalogNumber', AlternateCatNum);
  /**
   * Static representation of the one-to-one navigation property [[item]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM: OneToOneLink<AlternateCatNum, Items> = new OneToOneLink('Item', AlternateCatNum, Items);
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<AlternateCatNum, BusinessPartners> = new OneToOneLink('BusinessPartner', AlternateCatNum, BusinessPartners);
  /**
   * All fields of the AlternateCatNum entity.
   */
  export const _allFields: Array<StringField<AlternateCatNum> | EnumField<AlternateCatNum> | OneToOneLink<AlternateCatNum, Items> | OneToOneLink<AlternateCatNum, BusinessPartners>> = [
    AlternateCatNum.ITEM_CODE,
    AlternateCatNum.CARD_CODE,
    AlternateCatNum.SUBSTITUTE,
    AlternateCatNum.DISPLAY_BP_CATALOG_NUMBER,
    AlternateCatNum.ITEM,
    AlternateCatNum.BUSINESS_PARTNER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AlternateCatNum> = new AllFields('*', AlternateCatNum);
  /**
   * All key fields of the AlternateCatNum entity.
   */
  export const _keyFields: Array<Field<AlternateCatNum>> = [AlternateCatNum.ITEM_CODE, AlternateCatNum.CARD_CODE, AlternateCatNum.SUBSTITUTE];
  /**
   * Mapping of all key field names to the respective static field property AlternateCatNum.
   */
  export const _keys: { [keys: string]: Field<AlternateCatNum> } = AlternateCatNum._keyFields.reduce((acc: { [keys: string]: Field<AlternateCatNum> }, field: Field<AlternateCatNum>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
