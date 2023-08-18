/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CashDiscounts } from './CashDiscounts';
import { CashDiscountsRequestBuilder } from './CashDiscountsRequestBuilder';
import { PaymentTermsTypesApi } from './PaymentTermsTypesApi';
import { DiscountLine } from './DiscountLine';
import { BoYesNoEnum } from './BoYesNoEnum';
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
  CollectionField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class CashDiscountsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CashDiscounts<DeSerializersT>, DeSerializersT>
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
  ): CashDiscountsApi<DeSerializersT> {
    return new CashDiscountsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link paymentTermsTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_TERMS_TYPES: OneToManyLink<
      CashDiscounts<DeSerializersT>,
      DeSerializersT,
      PaymentTermsTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PaymentTermsTypesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PAYMENT_TERMS_TYPES: new OneToManyLink(
        'PaymentTermsTypes',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = CashDiscounts;

  requestBuilder(): CashDiscountsRequestBuilder<DeSerializersT> {
    return new CashDiscountsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CashDiscounts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CashDiscounts<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CashDiscounts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CashDiscounts, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(CashDiscounts, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      CashDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      CashDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BY_DATE: EnumField<
      CashDiscounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    FREIGHT: EnumField<
      CashDiscounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    TAX: EnumField<
      CashDiscounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DISCOUNT_LINES: CollectionField<
      CashDiscounts<DeSerializers>,
      DeSerializersT,
      DiscountLine,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentTermsTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_TERMS_TYPES: OneToManyLink<
      CashDiscounts<DeSerializersT>,
      DeSerializersT,
      PaymentTermsTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CashDiscounts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link byDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BY_DATE: fieldBuilder.buildEnumField('ByDate', BoYesNoEnum, true),
        /**
         * Static representation of the {@link freight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHT: fieldBuilder.buildEnumField('Freight', BoYesNoEnum, true),
        /**
         * Static representation of the {@link tax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX: fieldBuilder.buildEnumField('Tax', BoYesNoEnum, true),
        /**
         * Static representation of the {@link discountLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_LINES: fieldBuilder.buildCollectionField(
          'DiscountLines',
          DiscountLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CashDiscounts)
      };
    }

    return this._schema;
  }
}
