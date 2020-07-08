/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CashDiscountsRequestBuilder } from './CashDiscountsRequestBuilder';
import { DiscountLine, DiscountLineField } from './DiscountLine';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "CashDiscounts" of service "SAPB1".
 */
export class CashDiscounts extends Entity implements CashDiscountsType {
  /**
   * Technical entity name for CashDiscounts.
   */
  static _entityName = 'CashDiscounts';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CashDiscounts.
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
  code?: string;
  /**
   * Name.
   * @nullable
   */
  name?: string;
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
   * Returns an entity builder to construct instances `CashDiscounts`.
   * @returns A builder that constructs instances of entity type `CashDiscounts`.
   */
  static builder(): EntityBuilderType<CashDiscounts, CashDiscountsTypeForceMandatory> {
    return Entity.entityBuilder(CashDiscounts);
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
  static customField(fieldName: string): CustomField<CashDiscounts> {
    return Entity.customFieldSelector(fieldName, CashDiscounts);
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
  code?: string;
  name?: string;
  discountLines?: DiscountLine[];
  paymentTermsTypes: PaymentTermsTypesType[];
}

export interface CashDiscountsTypeForceMandatory {
  code: string;
  name: string;
  discountLines: DiscountLine[];
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
   * Static representation of the [[discountLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCOUNT_LINES: CollectionField<CashDiscounts> = new CollectionField('DiscountLines', CashDiscounts, new DiscountLineField('', CashDiscounts));
  /**
   * Static representation of the one-to-many navigation property [[paymentTermsTypes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TERMS_TYPES: OneToManyLink<CashDiscounts, PaymentTermsTypes> = new OneToManyLink('PaymentTermsTypes', CashDiscounts, PaymentTermsTypes);
  /**
   * All fields of the CashDiscounts entity.
   */
  export const _allFields: Array<StringField<CashDiscounts> | CollectionField<CashDiscounts> | OneToManyLink<CashDiscounts, PaymentTermsTypes>> = [
    CashDiscounts.CODE,
    CashDiscounts.NAME,
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
