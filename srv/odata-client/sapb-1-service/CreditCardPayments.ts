/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreditCardPaymentsRequestBuilder } from './CreditCardPaymentsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "CreditCardPayments" of service "SAPB1".
 */
export class CreditCardPayments extends Entity implements CreditCardPaymentsType {
  /**
   * Technical entity name for CreditCardPayments.
   */
  static _entityName = 'CreditCardPayments';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CreditCardPayments.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Due Date Code.
   * @nullable
   */
  dueDateCode?: string;
  /**
   * Due Date Name.
   * @nullable
   */
  dueDateName?: string;
  /**
   * Payment After Days.
   * @nullable
   */
  paymentAfterDays?: number;
  /**
   * Payment After Months.
   * @nullable
   */
  paymentAfterMonths?: number;
  /**
   * From Day 1.
   * @nullable
   */
  fromDay1?: number;
  /**
   * To Day 1.
   * @nullable
   */
  toDay1?: number;
  /**
   * Payment Day 1.
   * @nullable
   */
  paymentDay1?: number;
  /**
   * No Of Months 1.
   * @nullable
   */
  noOfMonths1?: number;
  /**
   * From Day 2.
   * @nullable
   */
  fromDay2?: number;
  /**
   * To Day 2.
   * @nullable
   */
  toDay2?: number;
  /**
   * Payment Day 2.
   * @nullable
   */
  paymentDay2?: number;
  /**
   * No Of Months 2.
   * @nullable
   */
  noOfMonths2?: number;
  /**
   * From Day 3.
   * @nullable
   */
  fromDay3?: number;
  /**
   * To Day 3.
   * @nullable
   */
  toDay3?: number;
  /**
   * Payment Day 3.
   * @nullable
   */
  paymentDay3?: number;
  /**
   * No Of Months 3.
   * @nullable
   */
  noOfMonths3?: number;
  /**
   * From Day 4.
   * @nullable
   */
  fromDay4?: number;
  /**
   * To Day 4.
   * @nullable
   */
  toDay4?: number;
  /**
   * Payment Day 4.
   * @nullable
   */
  paymentDay4?: number;
  /**
   * No Of Months 4.
   * @nullable
   */
  noOfMonths4?: number;
  /**
   * One-to-many navigation property to the [[CreditPaymentMethods]] entity.
   */
  creditPaymentMethods!: CreditPaymentMethods[];

  /**
   * Returns an entity builder to construct instances `CreditCardPayments`.
   * @returns A builder that constructs instances of entity type `CreditCardPayments`.
   */
  static builder(): EntityBuilderType<CreditCardPayments, CreditCardPaymentsTypeForceMandatory> {
    return Entity.entityBuilder(CreditCardPayments);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CreditCardPayments` entity type.
   * @returns A `CreditCardPayments` request builder.
   */
  static requestBuilder(): CreditCardPaymentsRequestBuilder {
    return new CreditCardPaymentsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CreditCardPayments`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CreditCardPayments`.
   */
  static customField(fieldName: string): CustomField<CreditCardPayments> {
    return Entity.customFieldSelector(fieldName, CreditCardPayments);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { CreditPaymentMethods, CreditPaymentMethodsType } from './CreditPaymentMethods';

export interface CreditCardPaymentsType {
  dueDateCode?: string;
  dueDateName?: string;
  paymentAfterDays?: number;
  paymentAfterMonths?: number;
  fromDay1?: number;
  toDay1?: number;
  paymentDay1?: number;
  noOfMonths1?: number;
  fromDay2?: number;
  toDay2?: number;
  paymentDay2?: number;
  noOfMonths2?: number;
  fromDay3?: number;
  toDay3?: number;
  paymentDay3?: number;
  noOfMonths3?: number;
  fromDay4?: number;
  toDay4?: number;
  paymentDay4?: number;
  noOfMonths4?: number;
  creditPaymentMethods: CreditPaymentMethodsType[];
}

export interface CreditCardPaymentsTypeForceMandatory {
  dueDateCode: string;
  dueDateName: string;
  paymentAfterDays: number;
  paymentAfterMonths: number;
  fromDay1: number;
  toDay1: number;
  paymentDay1: number;
  noOfMonths1: number;
  fromDay2: number;
  toDay2: number;
  paymentDay2: number;
  noOfMonths2: number;
  fromDay3: number;
  toDay3: number;
  paymentDay3: number;
  noOfMonths3: number;
  fromDay4: number;
  toDay4: number;
  paymentDay4: number;
  noOfMonths4: number;
  creditPaymentMethods: CreditPaymentMethodsType[];
}

export namespace CreditCardPayments {
  /**
   * Static representation of the [[dueDateCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUE_DATE_CODE: StringField<CreditCardPayments> = new StringField('DueDateCode', CreditCardPayments, 'Edm.String');
  /**
   * Static representation of the [[dueDateName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUE_DATE_NAME: StringField<CreditCardPayments> = new StringField('DueDateName', CreditCardPayments, 'Edm.String');
  /**
   * Static representation of the [[paymentAfterDays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_AFTER_DAYS: NumberField<CreditCardPayments> = new NumberField('PaymentAfterDays', CreditCardPayments, 'Edm.Int32');
  /**
   * Static representation of the [[paymentAfterMonths]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_AFTER_MONTHS: NumberField<CreditCardPayments> = new NumberField('PaymentAfterMonths', CreditCardPayments, 'Edm.Int32');
  /**
   * Static representation of the [[fromDay1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FROM_DAY_1: NumberField<CreditCardPayments> = new NumberField('FromDay1', CreditCardPayments, 'Edm.Int32');
  /**
   * Static representation of the [[toDay1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_DAY_1: NumberField<CreditCardPayments> = new NumberField('ToDay1', CreditCardPayments, 'Edm.Int32');
  /**
   * Static representation of the [[paymentDay1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_DAY_1: NumberField<CreditCardPayments> = new NumberField('PaymentDay1', CreditCardPayments, 'Edm.Int32');
  /**
   * Static representation of the [[noOfMonths1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NO_OF_MONTHS_1: NumberField<CreditCardPayments> = new NumberField('NoOfMonths1', CreditCardPayments, 'Edm.Int32');
  /**
   * Static representation of the [[fromDay2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FROM_DAY_2: NumberField<CreditCardPayments> = new NumberField('FromDay2', CreditCardPayments, 'Edm.Int32');
  /**
   * Static representation of the [[toDay2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_DAY_2: NumberField<CreditCardPayments> = new NumberField('ToDay2', CreditCardPayments, 'Edm.Int32');
  /**
   * Static representation of the [[paymentDay2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_DAY_2: NumberField<CreditCardPayments> = new NumberField('PaymentDay2', CreditCardPayments, 'Edm.Int32');
  /**
   * Static representation of the [[noOfMonths2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NO_OF_MONTHS_2: NumberField<CreditCardPayments> = new NumberField('NoOfMonths2', CreditCardPayments, 'Edm.Int32');
  /**
   * Static representation of the [[fromDay3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FROM_DAY_3: NumberField<CreditCardPayments> = new NumberField('FromDay3', CreditCardPayments, 'Edm.Int32');
  /**
   * Static representation of the [[toDay3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_DAY_3: NumberField<CreditCardPayments> = new NumberField('ToDay3', CreditCardPayments, 'Edm.Int32');
  /**
   * Static representation of the [[paymentDay3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_DAY_3: NumberField<CreditCardPayments> = new NumberField('PaymentDay3', CreditCardPayments, 'Edm.Int32');
  /**
   * Static representation of the [[noOfMonths3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NO_OF_MONTHS_3: NumberField<CreditCardPayments> = new NumberField('NoOfMonths3', CreditCardPayments, 'Edm.Int32');
  /**
   * Static representation of the [[fromDay4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FROM_DAY_4: NumberField<CreditCardPayments> = new NumberField('FromDay4', CreditCardPayments, 'Edm.Int32');
  /**
   * Static representation of the [[toDay4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_DAY_4: NumberField<CreditCardPayments> = new NumberField('ToDay4', CreditCardPayments, 'Edm.Int32');
  /**
   * Static representation of the [[paymentDay4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_DAY_4: NumberField<CreditCardPayments> = new NumberField('PaymentDay4', CreditCardPayments, 'Edm.Int32');
  /**
   * Static representation of the [[noOfMonths4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NO_OF_MONTHS_4: NumberField<CreditCardPayments> = new NumberField('NoOfMonths4', CreditCardPayments, 'Edm.Int32');
  /**
   * Static representation of the one-to-many navigation property [[creditPaymentMethods]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_PAYMENT_METHODS: OneToManyLink<CreditCardPayments, CreditPaymentMethods> = new OneToManyLink('CreditPaymentMethods', CreditCardPayments, CreditPaymentMethods);
  /**
   * All fields of the CreditCardPayments entity.
   */
  export const _allFields: Array<StringField<CreditCardPayments> | NumberField<CreditCardPayments> | OneToManyLink<CreditCardPayments, CreditPaymentMethods>> = [
    CreditCardPayments.DUE_DATE_CODE,
    CreditCardPayments.DUE_DATE_NAME,
    CreditCardPayments.PAYMENT_AFTER_DAYS,
    CreditCardPayments.PAYMENT_AFTER_MONTHS,
    CreditCardPayments.FROM_DAY_1,
    CreditCardPayments.TO_DAY_1,
    CreditCardPayments.PAYMENT_DAY_1,
    CreditCardPayments.NO_OF_MONTHS_1,
    CreditCardPayments.FROM_DAY_2,
    CreditCardPayments.TO_DAY_2,
    CreditCardPayments.PAYMENT_DAY_2,
    CreditCardPayments.NO_OF_MONTHS_2,
    CreditCardPayments.FROM_DAY_3,
    CreditCardPayments.TO_DAY_3,
    CreditCardPayments.PAYMENT_DAY_3,
    CreditCardPayments.NO_OF_MONTHS_3,
    CreditCardPayments.FROM_DAY_4,
    CreditCardPayments.TO_DAY_4,
    CreditCardPayments.PAYMENT_DAY_4,
    CreditCardPayments.NO_OF_MONTHS_4,
    CreditCardPayments.CREDIT_PAYMENT_METHODS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CreditCardPayments> = new AllFields('*', CreditCardPayments);
  /**
   * All key fields of the CreditCardPayments entity.
   */
  export const _keyFields: Array<Field<CreditCardPayments>> = [CreditCardPayments.DUE_DATE_CODE];
  /**
   * Mapping of all key field names to the respective static field property CreditCardPayments.
   */
  export const _keys: { [keys: string]: Field<CreditCardPayments> } = CreditCardPayments._keyFields.reduce((acc: { [keys: string]: Field<CreditCardPayments> }, field: Field<CreditCardPayments>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
