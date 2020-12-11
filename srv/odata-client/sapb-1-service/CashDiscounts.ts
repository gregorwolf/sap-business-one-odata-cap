/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CashDiscountsRequestBuilder } from './CashDiscountsRequestBuilder';
import { DiscountLine } from './DiscountLine';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CashDiscounts" of service "SAPB1".
 */
export class CashDiscounts extends EntityV4 implements CashDiscountsType {
  /**
   * Technical entity name for CashDiscounts.
   */
  static _entityName = 'CashDiscounts';
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
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * By Date.
   * @nullable
   */
  byDate?: BoYesNoEnum;
  /**
   * Freight.
   * @nullable
   */
  freight?: BoYesNoEnum;
  /**
   * Tax.
   * @nullable
   */
  tax?: BoYesNoEnum;
  /**
   * Discount Lines.
   * @nullable
   */
  discountLines?: DiscountLine[];
  /**
   * One-to-many navigation property to the [[PaymentTermsTypes]] entity.
   */
  paymentTermsTypes!: PaymentTermsTypes[];

  /**
   * Returns an entity builder to construct instances of `CashDiscounts`.
   * @returns A builder that constructs instances of entity type `CashDiscounts`.
   */
  static builder(): EntityBuilderType<CashDiscounts, CashDiscountsType> {
    return EntityV4.entityBuilder(CashDiscounts);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CashDiscounts` entity type.
   * @returns A `CashDiscounts` request builder.
   */
  static requestBuilder(): CashDiscountsRequestBuilder {
    return new CashDiscountsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CashDiscounts`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CashDiscounts`.
   */
  static customField(fieldName: string): CustomFieldV4<CashDiscounts> {
    return EntityV4.customFieldSelector(fieldName, CashDiscounts);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { PaymentTermsTypes, PaymentTermsTypesType } from './PaymentTermsTypes';

export interface CashDiscountsType {
  code?: string | null;
  name?: string | null;
  byDate?: BoYesNoEnum | null;
  freight?: BoYesNoEnum | null;
  tax?: BoYesNoEnum | null;
  discountLines?: DiscountLine[] | null;
  paymentTermsTypes: PaymentTermsTypesType[];
}

export namespace CashDiscounts {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<CashDiscounts> = new StringField('Code', CashDiscounts, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<CashDiscounts> = new StringField('Name', CashDiscounts, 'Edm.String');
  /**
   * Static representation of the [[byDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BY_DATE: EnumField<CashDiscounts> = new EnumField('ByDate', CashDiscounts);
  /**
   * Static representation of the [[freight]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREIGHT: EnumField<CashDiscounts> = new EnumField('Freight', CashDiscounts);
  /**
   * Static representation of the [[tax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX: EnumField<CashDiscounts> = new EnumField('Tax', CashDiscounts);
  /**
   * Static representation of the [[discountLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCOUNT_LINES: CollectionField<CashDiscounts, DiscountLine> = new CollectionField('DiscountLines', CashDiscounts, DiscountLine);
  /**
   * Static representation of the one-to-many navigation property [[paymentTermsTypes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TERMS_TYPES: OneToManyLink<CashDiscounts, PaymentTermsTypes> = new OneToManyLink('PaymentTermsTypes', CashDiscounts, PaymentTermsTypes);
  /**
   * All fields of the CashDiscounts entity.
   */
  export const _allFields: Array<StringField<CashDiscounts> | EnumField<CashDiscounts> | CollectionField<CashDiscounts, DiscountLine> | OneToManyLink<CashDiscounts, PaymentTermsTypes>> = [
    CashDiscounts.CODE,
    CashDiscounts.NAME,
    CashDiscounts.BY_DATE,
    CashDiscounts.FREIGHT,
    CashDiscounts.TAX,
    CashDiscounts.DISCOUNT_LINES,
    CashDiscounts.PAYMENT_TERMS_TYPES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CashDiscounts> = new AllFields('*', CashDiscounts);
  /**
   * All key fields of the CashDiscounts entity.
   */
  export const _keyFields: Array<Field<CashDiscounts>> = [CashDiscounts.CODE];
  /**
   * Mapping of all key field names to the respective static field property CashDiscounts.
   */
  export const _keys: { [keys: string]: Field<CashDiscounts> } = CashDiscounts._keyFields.reduce((acc: { [keys: string]: Field<CashDiscounts> }, field: Field<CashDiscounts>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
