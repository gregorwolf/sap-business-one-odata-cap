/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreditPaymentMethodsRequestBuilder } from './CreditPaymentMethodsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "CreditPaymentMethods" of service "SAPB1".
 */
export class CreditPaymentMethods extends Entity implements CreditPaymentMethodsType {
  /**
   * Technical entity name for CreditPaymentMethods.
   */
  static _entityName = 'CreditPaymentMethods';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CreditPaymentMethods.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Payment Method Code.
   * @nullable
   */
  paymentMethodCode?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Assignedto Credit Card.
   * @nullable
   */
  assignedtoCreditCard?: number;
  /**
   * Payment Code.
   * @nullable
   */
  paymentCode?: string;
  /**
   * Minimum Credit Amount.
   * @nullable
   */
  minimumCreditAmount?: number;
  /**
   * Minimum Payment Amount.
   * @nullable
   */
  minimumPaymentAmount?: number;
  /**
   * Max Qty Without Approval.
   * @nullable
   */
  maxQtyWithoutApproval?: number;
  /**
   * One-to-one navigation property to the [[CreditCards]] entity.
   */
  creditCard!: CreditCards;
  /**
   * One-to-one navigation property to the [[CreditCardPayments]] entity.
   */
  creditCardPayment!: CreditCardPayments;

  /**
   * Returns an entity builder to construct instances `CreditPaymentMethods`.
   * @returns A builder that constructs instances of entity type `CreditPaymentMethods`.
   */
  static builder(): EntityBuilderType<CreditPaymentMethods, CreditPaymentMethodsTypeForceMandatory> {
    return Entity.entityBuilder(CreditPaymentMethods);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CreditPaymentMethods` entity type.
   * @returns A `CreditPaymentMethods` request builder.
   */
  static requestBuilder(): CreditPaymentMethodsRequestBuilder {
    return new CreditPaymentMethodsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CreditPaymentMethods`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CreditPaymentMethods`.
   */
  static customField(fieldName: string): CustomField<CreditPaymentMethods> {
    return Entity.customFieldSelector(fieldName, CreditPaymentMethods);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { CreditCards, CreditCardsType } from './CreditCards';
import { CreditCardPayments, CreditCardPaymentsType } from './CreditCardPayments';

export interface CreditPaymentMethodsType {
  paymentMethodCode?: number;
  name?: string;
  assignedtoCreditCard?: number;
  paymentCode?: string;
  minimumCreditAmount?: number;
  minimumPaymentAmount?: number;
  maxQtyWithoutApproval?: number;
  creditCard: CreditCardsType;
  creditCardPayment: CreditCardPaymentsType;
}

export interface CreditPaymentMethodsTypeForceMandatory {
  paymentMethodCode: number;
  name: string;
  assignedtoCreditCard: number;
  paymentCode: string;
  minimumCreditAmount: number;
  minimumPaymentAmount: number;
  maxQtyWithoutApproval: number;
  creditCard: CreditCardsType;
  creditCardPayment: CreditCardPaymentsType;
}

export namespace CreditPaymentMethods {
  /**
   * Static representation of the [[paymentMethodCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_METHOD_CODE: NumberField<CreditPaymentMethods> = new NumberField('PaymentMethodCode', CreditPaymentMethods, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<CreditPaymentMethods> = new StringField('Name', CreditPaymentMethods, 'Edm.String');
  /**
   * Static representation of the [[assignedtoCreditCard]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSIGNEDTO_CREDIT_CARD: NumberField<CreditPaymentMethods> = new NumberField('AssignedtoCreditCard', CreditPaymentMethods, 'Edm.Int32');
  /**
   * Static representation of the [[paymentCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_CODE: StringField<CreditPaymentMethods> = new StringField('PaymentCode', CreditPaymentMethods, 'Edm.String');
  /**
   * Static representation of the [[minimumCreditAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MINIMUM_CREDIT_AMOUNT: NumberField<CreditPaymentMethods> = new NumberField('MinimumCreditAmount', CreditPaymentMethods, 'Edm.Double');
  /**
   * Static representation of the [[minimumPaymentAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MINIMUM_PAYMENT_AMOUNT: NumberField<CreditPaymentMethods> = new NumberField('MinimumPaymentAmount', CreditPaymentMethods, 'Edm.Double');
  /**
   * Static representation of the [[maxQtyWithoutApproval]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX_QTY_WITHOUT_APPROVAL: NumberField<CreditPaymentMethods> = new NumberField('MaxQtyWithoutApproval', CreditPaymentMethods, 'Edm.Double');
  /**
   * Static representation of the one-to-one navigation property [[creditCard]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_CARD: OneToOneLink<CreditPaymentMethods, CreditCards> = new OneToOneLink('CreditCard', CreditPaymentMethods, CreditCards);
  /**
   * Static representation of the one-to-one navigation property [[creditCardPayment]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_CARD_PAYMENT: OneToOneLink<CreditPaymentMethods, CreditCardPayments> = new OneToOneLink('CreditCardPayment', CreditPaymentMethods, CreditCardPayments);
  /**
   * All fields of the CreditPaymentMethods entity.
   */
  export const _allFields: Array<NumberField<CreditPaymentMethods> | StringField<CreditPaymentMethods> | OneToOneLink<CreditPaymentMethods, CreditCards> | OneToOneLink<CreditPaymentMethods, CreditCardPayments>> = [
    CreditPaymentMethods.PAYMENT_METHOD_CODE,
    CreditPaymentMethods.NAME,
    CreditPaymentMethods.ASSIGNEDTO_CREDIT_CARD,
    CreditPaymentMethods.PAYMENT_CODE,
    CreditPaymentMethods.MINIMUM_CREDIT_AMOUNT,
    CreditPaymentMethods.MINIMUM_PAYMENT_AMOUNT,
    CreditPaymentMethods.MAX_QTY_WITHOUT_APPROVAL,
    CreditPaymentMethods.CREDIT_CARD,
    CreditPaymentMethods.CREDIT_CARD_PAYMENT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CreditPaymentMethods> = new AllFields('*', CreditPaymentMethods);
  /**
   * All key fields of the CreditPaymentMethods entity.
   */
  export const _keyFields: Array<Field<CreditPaymentMethods>> = [CreditPaymentMethods.PAYMENT_METHOD_CODE];
  /**
   * Mapping of all key field names to the respective static field property CreditPaymentMethods.
   */
  export const _keys: { [keys: string]: Field<CreditPaymentMethods> } = CreditPaymentMethods._keyFields.reduce((acc: { [keys: string]: Field<CreditPaymentMethods> }, field: Field<CreditPaymentMethods>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
