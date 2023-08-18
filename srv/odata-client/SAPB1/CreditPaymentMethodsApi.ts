/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreditPaymentMethods } from './CreditPaymentMethods';
import { CreditPaymentMethodsRequestBuilder } from './CreditPaymentMethodsRequestBuilder';
import { CreditCardsApi } from './CreditCardsApi';
import { CreditCardPaymentsApi } from './CreditCardPaymentsApi';
import { InstallmentPaymentsPossiblityEnum } from './InstallmentPaymentsPossiblityEnum';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CreditPaymentMethodsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CreditPaymentMethods<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): CreditPaymentMethodsApi<DeSerializersT> {
    return new CreditPaymentMethodsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link creditCard} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_CARD: OneToOneLink<
      CreditPaymentMethods<DeSerializersT>,
      DeSerializersT,
      CreditCardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link creditCardPayment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_CARD_PAYMENT: OneToOneLink<
      CreditPaymentMethods<DeSerializersT>,
      DeSerializersT,
      CreditCardPaymentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CreditCardsApi<DeSerializersT>,
      CreditCardPaymentsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CREDIT_CARD: new OneToOneLink('CreditCard', this, linkedApis[0]),
      CREDIT_CARD_PAYMENT: new OneToOneLink(
        'CreditCardPayment',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = CreditPaymentMethods;

  requestBuilder(): CreditPaymentMethodsRequestBuilder<DeSerializersT> {
    return new CreditPaymentMethodsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CreditPaymentMethods<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CreditPaymentMethods<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CreditPaymentMethods<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof CreditPaymentMethods,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CreditPaymentMethods,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PAYMENT_METHOD_CODE: OrderableEdmTypeField<
      CreditPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      CreditPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSIGNEDTO_CREDIT_CARD: OrderableEdmTypeField<
      CreditPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PAYMENT_CODE: OrderableEdmTypeField<
      CreditPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_CREDIT_AMOUNT: OrderableEdmTypeField<
      CreditPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    MINIMUM_PAYMENT_AMOUNT: OrderableEdmTypeField<
      CreditPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    MAX_QTY_WITHOUT_APPROVAL: OrderableEdmTypeField<
      CreditPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    INSTALLMENT_PAYMENTS_POSSIBLE: EnumField<
      CreditPaymentMethods<DeSerializers>,
      DeSerializersT,
      InstallmentPaymentsPossiblityEnum,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link creditCard} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_CARD: OneToOneLink<
      CreditPaymentMethods<DeSerializersT>,
      DeSerializersT,
      CreditCardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link creditCardPayment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_CARD_PAYMENT: OneToOneLink<
      CreditPaymentMethods<DeSerializersT>,
      DeSerializersT,
      CreditCardPaymentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CreditPaymentMethods<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link paymentMethodCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD_CODE: fieldBuilder.buildEdmTypeField(
          'PaymentMethodCode',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link assignedtoCreditCard} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNEDTO_CREDIT_CARD: fieldBuilder.buildEdmTypeField(
          'AssignedtoCreditCard',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link paymentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_CODE: fieldBuilder.buildEdmTypeField(
          'PaymentCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minimumCreditAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_CREDIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MinimumCreditAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link minimumPaymentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_PAYMENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MinimumPaymentAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link maxQtyWithoutApproval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_QTY_WITHOUT_APPROVAL: fieldBuilder.buildEdmTypeField(
          'MaxQtyWithoutApproval',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link installmentPaymentsPossible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTALLMENT_PAYMENTS_POSSIBLE: fieldBuilder.buildEnumField(
          'InstallmentPaymentsPossible',
          InstallmentPaymentsPossiblityEnum,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CreditPaymentMethods)
      };
    }

    return this._schema;
  }
}
