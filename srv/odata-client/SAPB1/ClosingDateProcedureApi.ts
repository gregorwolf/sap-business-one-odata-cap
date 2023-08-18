/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ClosingDateProcedure } from './ClosingDateProcedure';
import { ClosingDateProcedureRequestBuilder } from './ClosingDateProcedureRequestBuilder';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { BoClosingDateProcedureBaseDateEnum } from './BoClosingDateProcedureBaseDateEnum';
import { BoClosingDateProcedureDueMonthEnum } from './BoClosingDateProcedureDueMonthEnum';
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
export class ClosingDateProcedureApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ClosingDateProcedure<DeSerializersT>, DeSerializersT>
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
  ): ClosingDateProcedureApi<DeSerializersT> {
    return new ClosingDateProcedureApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      ClosingDateProcedure<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BusinessPartnersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BUSINESS_PARTNERS: new OneToManyLink(
        'BusinessPartners',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ClosingDateProcedure;

  requestBuilder(): ClosingDateProcedureRequestBuilder<DeSerializersT> {
    return new ClosingDateProcedureRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ClosingDateProcedure<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ClosingDateProcedure<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ClosingDateProcedure<DeSerializersT>,
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
    typeof ClosingDateProcedure,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ClosingDateProcedure,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CLOSING_DATE_NUM: OrderableEdmTypeField<
      ClosingDateProcedure<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CLOSING_DATE_CODE: OrderableEdmTypeField<
      ClosingDateProcedure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BASELINE_DATE: EnumField<
      ClosingDateProcedure<DeSerializers>,
      DeSerializersT,
      BoClosingDateProcedureBaseDateEnum,
      true,
      true
    >;
    DUE_MONTH: EnumField<
      ClosingDateProcedure<DeSerializers>,
      DeSerializersT,
      BoClosingDateProcedureDueMonthEnum,
      true,
      true
    >;
    EXTRA_MONTH: OrderableEdmTypeField<
      ClosingDateProcedure<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    EXTRA_DAY: OrderableEdmTypeField<
      ClosingDateProcedure<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      ClosingDateProcedure<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ClosingDateProcedure<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link closingDateNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSING_DATE_NUM: fieldBuilder.buildEdmTypeField(
          'ClosingDateNum',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link closingDateCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSING_DATE_CODE: fieldBuilder.buildEdmTypeField(
          'ClosingDateCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link baselineDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASELINE_DATE: fieldBuilder.buildEnumField(
          'BaselineDate',
          BoClosingDateProcedureBaseDateEnum,
          true
        ),
        /**
         * Static representation of the {@link dueMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_MONTH: fieldBuilder.buildEnumField(
          'DueMonth',
          BoClosingDateProcedureDueMonthEnum,
          true
        ),
        /**
         * Static representation of the {@link extraMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTRA_MONTH: fieldBuilder.buildEdmTypeField(
          'ExtraMonth',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link extraDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTRA_DAY: fieldBuilder.buildEdmTypeField(
          'ExtraDay',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ClosingDateProcedure)
      };
    }

    return this._schema;
  }
}
