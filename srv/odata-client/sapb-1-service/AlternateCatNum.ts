/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AlternateCatNumRequestBuilder } from './AlternateCatNumRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "AlternateCatNum" of service "SAPB1".
 */
export class AlternateCatNum extends Entity implements AlternateCatNumType {
  /**
   * Technical entity name for AlternateCatNum.
   */
  static _entityName = 'AlternateCatNum';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for AlternateCatNum.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * One-to-one navigation property to the [[Items]] entity.
   */
  item!: Items;
  /**
   * One-to-one navigation property to the [[BusinessPartners]] entity.
   */
  businessPartner!: BusinessPartners;

  /**
   * Returns an entity builder to construct instances `AlternateCatNum`.
   * @returns A builder that constructs instances of entity type `AlternateCatNum`.
   */
  static builder(): EntityBuilderType<AlternateCatNum, AlternateCatNumTypeForceMandatory> {
    return Entity.entityBuilder(AlternateCatNum);
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
  static customField(fieldName: string): CustomField<AlternateCatNum> {
    return Entity.customFieldSelector(fieldName, AlternateCatNum);
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
  itemCode?: string;
  cardCode?: string;
  substitute?: string;
  item: ItemsType;
  businessPartner: BusinessPartnersType;
}

export interface AlternateCatNumTypeForceMandatory {
  itemCode: string;
  cardCode: string;
  substitute: string;
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
  export const _allFields: Array<StringField<AlternateCatNum> | OneToOneLink<AlternateCatNum, Items> | OneToOneLink<AlternateCatNum, BusinessPartners>> = [
    AlternateCatNum.ITEM_CODE,
    AlternateCatNum.CARD_CODE,
    AlternateCatNum.SUBSTITUTE,
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
