/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreditCardPayments } from './CreditCardPayments';
import { CreditCardPaymentsRequestBuilder } from './CreditCardPaymentsRequestBuilder';
import { CreditPaymentMethodsApi } from './CreditPaymentMethodsApi';
import { DueDateTypesEnum } from './DueDateTypesEnum';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class CreditCardPaymentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CreditCardPayments<DeSerializersT>, DeSerializersT>
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
  ): CreditCardPaymentsApi<DeSerializersT> {
    return new CreditCardPaymentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link creditPaymentMethods} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_PAYMENT_METHODS: OneToManyLink<
      CreditCardPayments<DeSerializersT>,
      DeSerializersT,
      CreditPaymentMethodsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [CreditPaymentMethodsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CREDIT_PAYMENT_METHODS: new OneToManyLink(
        'CreditPaymentMethods',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = CreditCardPayments;

  requestBuilder(): CreditCardPaymentsRequestBuilder<DeSerializersT> {
    return new CreditCardPaymentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CreditCardPayments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CreditCardPayments<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CreditCardPayments<DeSerializersT>,
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
    typeof CreditCardPayments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CreditCardPayments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DUE_DATE_CODE: OrderableEdmTypeField<
      CreditCardPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DUE_DATE_NAME: OrderableEdmTypeField<
      CreditCardPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUE_DATES_TYPE: EnumField<
      CreditCardPayments<DeSerializers>,
      DeSerializersT,
      DueDateTypesEnum,
      true,
      true
    >;
    PAYMENT_AFTER_DAYS: OrderableEdmTypeField<
      CreditCardPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PAYMENT_AFTER_MONTHS: OrderableEdmTypeField<
      CreditCardPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FROM_DAY_1: OrderableEdmTypeField<
      CreditCardPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TO_DAY_1: OrderableEdmTypeField<
      CreditCardPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PAYMENT_DAY_1: OrderableEdmTypeField<
      CreditCardPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    NO_OF_MONTHS_1: OrderableEdmTypeField<
      CreditCardPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FROM_DAY_2: OrderableEdmTypeField<
      CreditCardPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TO_DAY_2: OrderableEdmTypeField<
      CreditCardPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PAYMENT_DAY_2: OrderableEdmTypeField<
      CreditCardPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    NO_OF_MONTHS_2: OrderableEdmTypeField<
      CreditCardPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FROM_DAY_3: OrderableEdmTypeField<
      CreditCardPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TO_DAY_3: OrderableEdmTypeField<
      CreditCardPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PAYMENT_DAY_3: OrderableEdmTypeField<
      CreditCardPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    NO_OF_MONTHS_3: OrderableEdmTypeField<
      CreditCardPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FROM_DAY_4: OrderableEdmTypeField<
      CreditCardPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TO_DAY_4: OrderableEdmTypeField<
      CreditCardPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PAYMENT_DAY_4: OrderableEdmTypeField<
      CreditCardPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    NO_OF_MONTHS_4: OrderableEdmTypeField<
      CreditCardPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditPaymentMethods} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_PAYMENT_METHODS: OneToManyLink<
      CreditCardPayments<DeSerializersT>,
      DeSerializersT,
      CreditPaymentMethodsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CreditCardPayments<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dueDateCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE_CODE: fieldBuilder.buildEdmTypeField(
          'DueDateCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dueDateName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE_NAME: fieldBuilder.buildEdmTypeField(
          'DueDateName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dueDatesType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATES_TYPE: fieldBuilder.buildEnumField(
          'DueDatesType',
          DueDateTypesEnum,
          true
        ),
        /**
         * Static representation of the {@link paymentAfterDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_AFTER_DAYS: fieldBuilder.buildEdmTypeField(
          'PaymentAfterDays',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link paymentAfterMonths} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_AFTER_MONTHS: fieldBuilder.buildEdmTypeField(
          'PaymentAfterMonths',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link fromDay1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DAY_1: fieldBuilder.buildEdmTypeField(
          'FromDay1',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link toDay1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DAY_1: fieldBuilder.buildEdmTypeField('ToDay1', 'Edm.Int32', true),
        /**
         * Static representation of the {@link paymentDay1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_DAY_1: fieldBuilder.buildEdmTypeField(
          'PaymentDay1',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link noOfMonths1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NO_OF_MONTHS_1: fieldBuilder.buildEdmTypeField(
          'NoOfMonths1',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link fromDay2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DAY_2: fieldBuilder.buildEdmTypeField(
          'FromDay2',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link toDay2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DAY_2: fieldBuilder.buildEdmTypeField('ToDay2', 'Edm.Int32', true),
        /**
         * Static representation of the {@link paymentDay2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_DAY_2: fieldBuilder.buildEdmTypeField(
          'PaymentDay2',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link noOfMonths2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NO_OF_MONTHS_2: fieldBuilder.buildEdmTypeField(
          'NoOfMonths2',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link fromDay3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DAY_3: fieldBuilder.buildEdmTypeField(
          'FromDay3',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link toDay3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DAY_3: fieldBuilder.buildEdmTypeField('ToDay3', 'Edm.Int32', true),
        /**
         * Static representation of the {@link paymentDay3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_DAY_3: fieldBuilder.buildEdmTypeField(
          'PaymentDay3',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link noOfMonths3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NO_OF_MONTHS_3: fieldBuilder.buildEdmTypeField(
          'NoOfMonths3',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link fromDay4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DAY_4: fieldBuilder.buildEdmTypeField(
          'FromDay4',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link toDay4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DAY_4: fieldBuilder.buildEdmTypeField('ToDay4', 'Edm.Int32', true),
        /**
         * Static representation of the {@link paymentDay4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_DAY_4: fieldBuilder.buildEdmTypeField(
          'PaymentDay4',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link noOfMonths4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NO_OF_MONTHS_4: fieldBuilder.buildEdmTypeField(
          'NoOfMonths4',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CreditCardPayments)
      };
    }

    return this._schema;
  }
}
