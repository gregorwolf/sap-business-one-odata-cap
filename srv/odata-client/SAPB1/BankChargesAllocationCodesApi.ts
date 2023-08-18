/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BankChargesAllocationCodes } from './BankChargesAllocationCodes';
import { BankChargesAllocationCodesRequestBuilder } from './BankChargesAllocationCodesRequestBuilder';
import { PaymentRunExportApi } from './PaymentRunExportApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class BankChargesAllocationCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BankChargesAllocationCodes<DeSerializersT>, DeSerializersT>
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
  ): BankChargesAllocationCodesApi<DeSerializersT> {
    return new BankChargesAllocationCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link paymentRunExport} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_RUN_EXPORT: OneToManyLink<
      BankChargesAllocationCodes<DeSerializersT>,
      DeSerializersT,
      PaymentRunExportApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      BankChargesAllocationCodes<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PaymentRunExportApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PAYMENT_RUN_EXPORT: new OneToManyLink(
        'PaymentRunExport',
        this,
        linkedApis[0]
      ),
      BUSINESS_PARTNERS: new OneToManyLink(
        'BusinessPartners',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BankChargesAllocationCodes;

  requestBuilder(): BankChargesAllocationCodesRequestBuilder<DeSerializersT> {
    return new BankChargesAllocationCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BankChargesAllocationCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BankChargesAllocationCodes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BankChargesAllocationCodes<DeSerializersT>,
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
    typeof BankChargesAllocationCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BankChargesAllocationCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      BankChargesAllocationCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BankChargesAllocationCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentRunExport} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_RUN_EXPORT: OneToManyLink<
      BankChargesAllocationCodes<DeSerializersT>,
      DeSerializersT,
      PaymentRunExportApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      BankChargesAllocationCodes<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BankChargesAllocationCodes<DeSerializers>>;
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BankChargesAllocationCodes)
      };
    }

    return this._schema;
  }
}
